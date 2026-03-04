#!/usr/bin/env node
/**
 * Fetch Spacing & Corner radius frame (node 11686:120880) from Octuple DS Theme 2 Figma file.
 * https://www.figma.com/design/SlKRC7oKF7XZyHMv2op4ch/Octuple-DS--Theme-2-?m=auto&node-id=11686-120880
 * Requires FIGMA_ACCESS_TOKEN in env. Usage: node scripts/figma-fetch-spacing-radius.js
 * Optionally: node scripts/figma-fetch-spacing-radius.js --out figma-spacing-radius.json
 */
const FILE_KEY = 'SlKRC7oKF7XZyHMv2op4ch'
const NODE_ID = '11686:120880'

const token = process.env.FIGMA_ACCESS_TOKEN
if (!token) {
  console.error('Set FIGMA_ACCESS_TOKEN (e.g. in .env)')
  process.exit(1)
}

const outPath = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : null

async function main() {
  const url = `https://api.figma.com/v1/files/${FILE_KEY}?ids=${encodeURIComponent(NODE_ID)}&depth=5`
  const res = await fetch(url, {
    headers: { 'X-Figma-Token': token },
  })
  if (!res.ok) {
    console.error('Figma API error:', res.status, await res.text())
    process.exit(1)
  }
  const data = await res.json()
  if (outPath) {
    const fs = await import('fs')
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2))
    console.log('Wrote', outPath)
  }
  const frame = findById(data.document, NODE_ID)
  if (!frame) {
    console.error('Node not found:', NODE_ID)
    return
  }
  const spacing = []
  const radius = []
  walk(frame, (n) => {
    const name = (n.name || '').trim()
    if (n.type === 'FRAME' || n.type === 'GROUP' || n.type === 'RECTANGLE') {
      const w = n.absoluteBoundingBox?.width
      const h = n.absoluteBoundingBox?.height
      const cornerRadius = n.cornerRadius ?? (n.rectangleCornerRadii ? Math.max(...n.rectangleCornerRadii) : undefined)
      const isSquare = typeof w === 'number' && typeof h === 'number' && w === h
      const smallSize = typeof w === 'number' && typeof h === 'number' && w > 0 && h > 0 && (w < 200 || h < 200)
      if (name.toLowerCase().includes('spacing') || (isSquare || smallSize)) {
        const val = isSquare ? w : null
        if (val != null && name && !spacing.some((s) => s.name === name)) spacing.push({ name, value: val })
      }
      if (typeof cornerRadius === 'number' && cornerRadius > 0 && name && !radius.some((r) => r.name === name)) {
        radius.push({ name, value: Math.round(cornerRadius) })
      }
    }
  })
  // Also collect from component sets / variants that might name spacing/radius
  walk(frame, (n) => {
    const name = (n.name || '').trim()
    if (n.cornerRadius != null && n.cornerRadius > 0) {
      const v = Math.round(n.cornerRadius)
      if (!radius.some((r) => r.name === name && r.value === v)) radius.push({ name: name || `radius-${v}`, value: v })
    }
  })
  console.log('Spacing & Corner radius from Figma (node 11686:120880):')
  if (spacing.length) console.log('\nSpacing (name → px):', spacing.sort((a, b) => a.value - b.value))
  if (radius.length) console.log('\nCorner radius (name → px):', radius.sort((a, b) => a.value - b.value))
  console.log('\nRaw frame keys:', frame.children?.map((c) => ({ name: c.name, type: c.type, cornerRadius: c.cornerRadius })) || [])
}

function findById(node, id) {
  if (node.id === id) return node
  if (node.children) for (const c of node.children) {
    const r = findById(c, id)
    if (r) return r
  }
  return null
}

function walk(node, fn) {
  fn(node)
  if (node.children) node.children.forEach((c) => walk(c, fn))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

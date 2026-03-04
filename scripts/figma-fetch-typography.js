#!/usr/bin/env node
/**
 * Fetch Typography frame (node 47:3) from Octuple DS Theme 2 Figma file.
 * Requires FIGMA_ACCESS_TOKEN in env. Usage: node scripts/figma-fetch-typography.js
 * Optionally: node scripts/figma-fetch-typography.js --out figma-typography.json
 */
const FILE_KEY = 'SlKRC7oKF7XZyHMv2op4ch'
const TYPOGRAPHY_NODE_ID = '47:3'

const token = process.env.FIGMA_ACCESS_TOKEN
if (!token) {
  console.error('Set FIGMA_ACCESS_TOKEN (e.g. in .env)')
  process.exit(1)
}

const outPath = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : null

async function main() {
  const url = `https://api.figma.com/v1/files/${FILE_KEY}?ids=${encodeURIComponent(TYPOGRAPHY_NODE_ID)}&depth=4`
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
  const frame = findById(data.document, TYPOGRAPHY_NODE_ID)
  if (frame) {
    const styles = []
    walk(frame, (n) => {
      if (n.type === 'TEXT' && n.style && /^(Caption|Button|Body|Header|Pre-Display|Subtitle|Display)/.test((n.characters || '').trim())) {
        const s = n.style
        styles.push({
          name: n.characters.trim(),
          fontSize: s.fontSize,
          fontWeight: s.fontWeight,
          lineHeightPx: s.lineHeightPx,
          fontFamily: s.fontFamily,
        })
      }
    })
    const uniq = new Map()
    styles.forEach((s) => {
      const k = `${s.fontSize}/${s.fontWeight}/${s.lineHeightPx}`
      if (!uniq.has(k)) uniq.set(k, s)
    })
    console.log('Typography scale from Figma (node 47:3):')
    console.table([...uniq.values()].sort((a, b) => a.fontSize - b.fontSize))
  }
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

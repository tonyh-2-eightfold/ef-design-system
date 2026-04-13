/**
 * Blue hexagon background SVGs (monochrome #2C8CC9).
 * Figma Usage=Profile (540px) / Usage=Default (292px).
 */
export type BlueHexagonVariant = 'profile' | 'default'

const profileSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_bhex_prof)"><rect width="1440" height="540" fill="white"/><path d="M488.925 76.1641L601.357 143.335V277.676L488.925 344.847L376.492 277.676V143.335L488.925 76.1641Z" fill="#2C8CC9"/><path d="M964.109 -124.617L1060.84 -66.8124V48.7973L964.109 106.602L867.375 48.7973V-66.8124L964.109 -124.617Z" fill="#2C8CC9"/><path d="M1392.62 -19.25L1480.87 33.4329V138.799L1392.62 191.482L1304.38 138.799V33.4329L1392.62 -19.25Z" fill="#2C8CC9"/><path d="M764.702 260.262L813.635 289.53V348.067L764.702 377.335L715.77 348.067V289.53L764.702 260.262Z" fill="#2C8CC9"/><path d="M1102.71 134.41L1211.74 199.532V329.776L1102.71 394.898L993.668 329.776V199.532L1102.71 134.41Z" fill="#2C8CC9"/><path d="M98.5909 46.6055L167.182 87.581V169.532L98.5909 210.508L30 169.532V87.581L98.5909 46.6055Z" fill="#2C8CC9"/></g><defs><clipPath id="ef_bhex_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>'

const defaultSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_bhex_def)"><rect width="1440" height="292" fill="white"/><path d="M355 66.7148L434.5 114.412V209.805L355 257.502L275.5 209.805V114.412L355 66.7148Z" fill="#2C8CC9"/><path d="M691.002 -75.8594L759.402 -34.8131V47.2794L691.002 88.3257L622.602 47.2794V-34.8131L691.002 -75.8594Z" fill="#2C8CC9"/><path d="M1307 153.793L1371.1 192.241V269.138L1307 307.587L1242.9 269.138V192.241L1307 153.793Z" fill="#2C8CC9"/><path d="M994.002 -1.03906L1056.4 36.3702V111.189L994.002 148.598L931.602 111.189V36.3702L994.002 -1.03906Z" fill="#2C8CC9"/><path d="M549.998 197.438L584.598 218.22V259.786L549.998 280.569L515.398 259.786V218.22L549.998 197.438Z" fill="#2C8CC9"/><path d="M788.998 108.07L866.098 154.312V246.796L788.998 293.038L711.898 246.796V154.312L788.998 108.07Z" fill="#2C8CC9"/><path d="M79 45.7227L127.5 74.8187V133.011L79 162.107L30.5 133.011V74.8187L79 45.7227Z" fill="#2C8CC9"/><path d="M1455 5.19531L1488.8 25.4587V65.9854L1455 86.2487L1421.2 65.9854V25.4587L1455 5.19531Z" fill="#2C8CC9"/><path d="M1187 18.7031L1229.4 44.1622V95.0803L1187 120.539L1144.6 95.0803V44.1622L1187 18.7031Z" fill="#2C8CC9"/></g><defs><clipPath id="ef_bhex_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>'

export function blueHexagonArtDataUrl(usage: BlueHexagonVariant): string {
  const svg = usage === 'profile' ? profileSvg : defaultSvg
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

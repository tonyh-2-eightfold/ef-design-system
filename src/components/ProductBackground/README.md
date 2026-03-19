# ProductBackground

| Layer | Source |
|-------|--------|
| TA / CH **gradients** | `styles/gradient-fills.css` (token fills when no photo/chevrons) |
| CH **chevrons** | `career-hub/chevron-art.ts` → data URLs; **`background-size: cover`**, `right top` (fills container height, e.g. navbar + header) |
| **Photo** + scrim | `photo-scrim.ts` + `resolve-fill-layer.ts` |

Entry: `ProductBackground.tsx` · public API: `index.ts`.

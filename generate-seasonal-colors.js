const fs = require('fs')
const path = require('path')
const { currentSeasonColors } = require('./tailwind.config.cjs')

// create CSS injected content with the current season colours
const cssContent = `/* auto-generated seasonal colors - Do not edit */
@theme {
  --color-cs-primary: ${currentSeasonColors[0]};
  --color-cs-secondary: ${currentSeasonColors[1]};
  --color-cs-tertiary: ${currentSeasonColors[2]};
  
  /* Use seasonal colors for primary and secondary */
  --primary: var(--color-cs-primary);
  --secondary: var(--color-cs-secondary);
}
`

// write content
fs.writeFileSync(path.resolve('./seasonal-colours.css'), cssContent)
console.log('seasonal colours generated and inserted')

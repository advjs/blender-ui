import fs from 'node:fs'
import path from 'node:path'
import { Buffer } from 'node:buffer'
import { svg } from '../client/styles/icons'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const distFolder = path.resolve(__dirname, '../dist')

function bCssVarsRootStyle() {
  const cssVars = Object.keys(svg)
    .map(key =>
      `--b-icon-${key}: url("data:image/svg+xml;utf8,${encodeURIComponent(svg[key as keyof typeof svg])}")`,
    )
    .join(';\n')

  return `:root { ${cssVars} }`
}

fs.writeFileSync(
  path.resolve(distFolder, 'icons.css')
  , bCssVarsRootStyle(),
  'utf-8',
)

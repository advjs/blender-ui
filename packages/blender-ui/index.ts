import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export * from './components'
export * from './utils'

// shim
export const _dirname = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))
export const componentsDir = resolve(_dirname, './components')

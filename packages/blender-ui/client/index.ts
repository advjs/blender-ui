import { createBUI } from './utils'

export * from './components'
export * from './styles'
export * from './utils'

if (typeof window !== 'undefined') {
  // @ts-expect-error global
  window.BUI = {
    createBUI,
  }
}

export { reactive, ref } from 'vue'

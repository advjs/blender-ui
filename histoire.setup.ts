import { defineSetupVue3 } from '@histoire/plugin-vue'
import './packages/blender-ui/client/styles/index.scss'

// import './packages/blender-ui/dist/icons.css'
import './histoire/styles/index.css'
import { mountCssVarsRootStyle } from './packages/blender-ui/client/styles/icons'

export const setupVue3 = defineSetupVue3((_handler) => {
  mountCssVarsRootStyle()
  // addWrapper(GlobalWrapper)
})

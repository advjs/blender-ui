import { defineSetupVue3 } from '@histoire/plugin-vue'
import './packages/blender-ui/client/styles/index.scss'
import './packages/blender-ui/dist/icons.css'
import './histoire/styles/index.css'

export const setupVue3 = defineSetupVue3((_handler) => {
  // addWrapper(GlobalWrapper)
})

import { defineSetupVue3 } from '@histoire/plugin-vue'
import { useStyleTag } from '@vueuse/core'
import './packages/blender-ui/styles/index.scss'
import './histoire/styles/index.css'

import { bCssVarsRootStyle } from './packages/blender-ui/styles/icons'

export const setupVue3 = defineSetupVue3((_handler) => {
  // addWrapper(GlobalWrapper)
  const style = bCssVarsRootStyle()
  useStyleTag(style)
})

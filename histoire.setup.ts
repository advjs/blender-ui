import { defineSetupVue3 } from '@histoire/plugin-vue'
import GlobalWrapper from './histoire/GlobalWrapper.vue'
import './styles/index.scss'

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(GlobalWrapper)
})

import './style.css'
import { reactive } from 'vue'
import { createBUI } from '../../../packages/blender-ui/utils'

import { createDemoScene } from './scene'

const { camera } = createDemoScene()

const props = reactive({
  title: 'TEST',

  panels: [
    {
      title: 'Transform',
      properties: [],
    },
  ],
})

export const bui = createBUI('#advjs-blender-ui-container', props)
bui.add(camera.position, 'x').label('Location X')
bui.addVector(camera.position).labels(['X', 'Y', 'Z'])

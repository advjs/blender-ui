import { reactive } from 'vue'
import { createBUI } from '../utils'

import { createDemoScene } from './scene'

const { scene, camera, renderer, cube } = createDemoScene()

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

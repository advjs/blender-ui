import { reactive } from 'vue'
import { createBUI } from '../utils'

import { createDemoScene } from './scene'

const { scene, camera, renderer, cube } = createDemoScene()

const props = reactive({
  title: 'TEST',

  panels: [
    {
      title: 'Transform',
      properties: [
        {
          label: 'Location X',
          type: 'number',
          value: camera.position.x,
          step: 0.1,
          onChange: (val) => {
            camera.position.x = val
          },
        },
        {
          label: 'Y',
          type: 'number',
          value: camera.position.y,
          step: 0.1,
          onChange: (val) => {
            camera.position.y = val
          },
        },
        {
          label: 'Z',
          type: 'number',
          value: camera.position.z,
          step: 0.1,
          onChange: (val) => {
            camera.position.z = val
          },
        },
      ],
    },
  ],
})

export const bui = createBUI('#advjs-blender-ui-container', props)

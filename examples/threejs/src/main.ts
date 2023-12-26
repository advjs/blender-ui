import './style.css'
import type { BUIProps } from '@advjs/blender-ui'
import { createBUI, reactive } from '@advjs/blender-ui'

// import * as THREE from 'three'

import type { TreeNode } from '../../../packages/blender-ui/client/components/BTree/types'
import { createDemoScene } from './scene'

const { camera, scene } = createDemoScene()

const props = reactive<BUIProps>({
  title: 'TEST',

  panels: [
    {
      type: 'common',
      title: 'Transform',
      properties: [],
    },
    {
      type: 'tree',
      title: 'Tree',
      onNodeExpand: (nodes: TreeNode[]) => {
        // eslint-disable-next-line no-console
        console.log(nodes)
      },
      data: [
        {
          name: 'Level one 1',
          children: [
            {
              name: 'Level two 1-1',
              children: [
                {
                  name: 'Level three 1-1-1',
                },
              ],
            },
          ],
        },
        {
          name: 'Level one 2',
          visible: true,
          children: [
            {
              name: 'Level two 2-1',
              visible: true,
              children: [
                {
                  name: 'Level three 2-1-1',
                },
              ],
            },
            {
              name: 'Level two 2-2',
              children: [
                {
                  name: 'Level three 2-2-1',
                },
              ],
            },
          ],
        },
        {
          name: 'Level one 3',
          expanded: true,
          children: [
            {
              name: 'Level two 3-1',
              expanded: true,
              children: [
                {
                  name: 'Level three 3-1-1',
                  selectable: true,
                },
              ],
            },
            {
              name: 'Level two 3-2',
              visible: false,
              children: [
                {
                  name: 'Level three 3-2-1',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: 'Hierarchy',
      type: 'tree',
      data: scene,
    },
  ],
})

export const bui = createBUI({
  props,
})

const transformPanel = bui.getPanel('Transform')

transformPanel.add(camera.position, 'x').label('Location X')
// bui.addVector(camera.position).labels(['X', 'Y', 'Z'])

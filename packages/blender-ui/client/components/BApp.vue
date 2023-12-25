<script lang="ts" setup>
import { ref } from 'vue'
import { bCssVars } from '../styles/icons'
import type { TreeNode, Trees } from './BTree/types'
import { BNumberField, BPanel, BProperty, BSelectMenu, BTree } from './index'

interface Panel {
  title: string
  type: '' | 'tree'
}

interface CommonPanel extends Panel {
  type: ''
  properties: {
    object: Record<string, number>
    property: string
    type?: string
    label: string
    step?: number
    onChange?: (val: number) => void
  }[]
}

interface TreePanel extends Panel {
  type: 'tree'
  data: Trees
  onNodeActivate?: (node: TreeNode) => void
  onNodeCollapse?: (nodes: Trees) => void
  onNodeExpand?: (nodes: Trees) => void
  onNodeShow?: (nodes: Trees) => void
  onNodeHide?: (nodes: Trees) => void
  onNodeSelected?: (nodes: Trees) => void
  onNodeUnselected?: (nodes: Trees) => void
}

defineProps<{
  title?: string
  panels?: (CommonPanel | TreePanel)[]
}>()

const expanded = ref(true)
const curOption = ref('xyz')

// const transformPanel = reactive({
//   x: 0,
//   y: 0,
//   z: 0,
// })

const modeOptions = [
  { label: 'XYZ Euler', value: 'xyz' },
  { label: 'XZY Euler', value: 'xzy' },
  { label: 'YXZ Euler', value: 'yxz' },
  { label: 'YZX Euler', value: 'yzx' },
  { label: 'ZXY Euler', value: 'zxy' },
  { label: 'ZYX Euler', value: 'zyx' },
]

const globalCSSVars = bCssVars()
</script>

<template>
  <div class="gui-container" :style="globalCSSVars">
    <!-- <h3 v-if="title">
      {{ title }}
    </h3> -->
    <template v-if="panels">
      <template v-for="panel in panels" :key="panel.title">
        <BPanel :expanded="expanded" :title="panel.title">
          <template v-if="!panel.type">
            <BProperty
              v-for="property in panel.properties"
              :key="property.label"
              :label="property.label"
            >
              <BNumberField
                v-if="property.object && typeof property.object[property.property] === 'number'"
                v-model="property.object[property.property]"
                :step="property.step"
                @change="property.onChange"
              />
            </BProperty>

            <BProperty label="Mode">
              <BSelectMenu
                v-model="curOption"
                :options="modeOptions"
              />
            </BProperty>
          </template>

          <BTree
            v-else-if="panel.type === 'tree'"
            :data="panel.data"

            @node-activate="panel.onNodeActivate"
            @node-collapse="panel.onNodeCollapse"
            @node-expand="panel.onNodeExpand"
            @node-show="panel.onNodeShow"
            @node-hide="panel.onNodeHide"
            @node-selected="panel.onNodeSelected"
            @node-unselected="panel.onNodeUnselected"
          />
        </BPanel>
      </template>
    </template>
  </div>
</template>

<style lang="scss">
.gui-container {
  color: var(--b-c-text, #fff);
  background-color: var(--b-c-bg, #303030);

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // padding: 8px;
  box-sizing: border-box;
}
</style>

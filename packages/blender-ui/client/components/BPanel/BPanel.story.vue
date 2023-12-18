<script lang="ts" setup>
import BProperty from '../BProperty/BProperty.vue'
import BPanel from './BPanel.vue'

const expanded = ref(true)
const curOption = ref('xyz')

const transformPanel = reactive({
  x: 0,
  y: 0,
  z: 0,
})

const modeOptions = [
  { label: 'XYZ Euler', value: 'xyz' },
  { label: 'XZY Euler', value: 'xzy' },
  { label: 'YXZ Euler', value: 'yxz' },
  { label: 'YZX Euler', value: 'yzx' },
  { label: 'ZXY Euler', value: 'zxy' },
  { label: 'ZYX Euler', value: 'zyx' },
]
</script>

<template>
  <Story
    title="BPanel"
    :layout="{
      type: 'grid',
      width: 300,
    }"
  >
    <Variant
      title="playground"
    >
      <BPanel :expanded="expanded" title="Transform">
        <BProperty label="Location X">
          <BNumberField v-model="transformPanel.x" :step="1" location="TOP" />
        </BProperty>
        <BProperty label="Y">
          <BNumberField v-model="transformPanel.y" :step="1" location="MIDDLE" />
        </BProperty>
        <BProperty label="Z">
          <BNumberField v-model="transformPanel.z" :step="1" location="BOTTOM" />
        </BProperty>

        <BProperty label="Mode">
          <BSelectMenu
            v-model="curOption"
            :options="modeOptions"
          />
        </BProperty>
      </BPanel>
      <BPanel :expanded="expanded" title="Transform">
        <BProperty label="Mode">
          <BSelectMenu
            v-model="curOption"
            :options="[
              { label: 'Single', value: 'single' },
              { label: 'Multiple', value: 'multiple' },
            ]"
          />
        </BProperty>
      </BPanel>
    </Variant>
  </Story>
</template>

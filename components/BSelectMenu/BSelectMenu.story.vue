<script lang="ts" setup>
import BSelectMenu from './BSelectMenu.vue'

const curOption = ref('None')
const options = ['None', 'Back', 'Front', 'Both']
</script>

<template>
  <Story
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="Select Menu">
      <BSelectMenu v-model="curOption" :options="options">
        Click me
      </BSelectMenu>
    </Variant>

    <Variant title="Select Menu With Legend">
      <BSelectMenu
        v-model="curOption" :options="options"
        legend="Your Legend"
      >
        Click me
      </BSelectMenu>
    </Variant>
  </Story>
</template>

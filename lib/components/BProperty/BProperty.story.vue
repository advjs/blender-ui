<script lang="ts" setup>
import BSelectMenu from '../BSelectMenu/BSelectMenu.vue'
import BProperty from './BProperty.vue'

const curOption = ref('single')
</script>

<template>
  <Story
    title="BProperty"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant
      title="playground"
    >
      <BProperty label="Mode">
        <BSelectMenu
          v-model="curOption"
          :options="[
            { label: 'Single', value: 'single' },
            { label: 'Multiple', value: 'multiple' },
          ]"
        />
      </BProperty>
    </Variant>
  </Story>
</template>

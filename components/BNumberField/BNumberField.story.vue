<script lang="ts" setup>
import { ref } from 'vue'
import BNumberField from './BNumberField.vue'

const value = ref(123)
</script>

<template>
  <Story
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant
      title="Number Field"
    >
      <BNumberField v-model="value" location="TOP" />
    </Variant>

    <Variant
      title="Drag"
    >
      <BNumberField v-model="value" :step="1" location="MIDDLE" />
    </Variant>

    <Variant
      title="Min Max"
    >
      <BNumberField v-model="value" :step="1" :min="0" :max="200" location="BOTTOM" />
    </Variant>
  </Story>
</template>

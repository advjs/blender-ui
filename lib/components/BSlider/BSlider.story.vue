<script lang="ts" setup>
import { ref } from 'vue'
import BSlider from './BSlider.vue'

const value = ref(50)
</script>

<template>
  <Story
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant>
      <BSlider v-model="value" :step="1" :min="0" :max="100" />
    </Variant>

    <Variant
      title="Min Max"
    >
      <BSlider v-model="value" :step="1" :min="0" :max="100" />
    </Variant>

    <Variant
      title="Title"
    >
      <BSlider v-model="value" title="Title" :step="1" :min="0" :max="100" />
    </Variant>
  </Story>
</template>

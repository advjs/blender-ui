<script lang="ts" setup>
import { ref } from 'vue'
import BTextField from './BTextField.vue'

const value = ref('')
const multilineValue = ref('换行符 Line Break\n第二行')
</script>

<template>
  <Story
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant
      title="TextField"
    >
      <BTextField v-model="value" />

      <br>

      <BTextField
        v-model="value"
        placeholder="Placeholder"
      />

      <br>

      <BTextField
        v-model="multilineValue"
        mult
        placeholder="Placeholder"
      />
    </Variant>

    <Variant
      title="Fixed Width"
    >
      <div class="w-20">
        <BTextField v-model="value" />
      </div>
    </Variant>
  <!-- <svelte:fragment slot="controls">
    <Hst.Text bind:value title="value" />
  </svelte:fragment> -->
  </Story>
</template>

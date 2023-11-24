<script lang="ts" setup>
const value = ref(false)
const checked = ref(true)
const disabled = ref(false)
const disabledChecked = ref(true)
</script>

<template>
  <Story
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant
      title="Checkbox"
    >
      <BCheckbox v-model="value">
        Unchecked
      </BCheckbox>
      <BCheckbox v-model="checked">
        Checked
      </BCheckbox>
    </Variant>

    <Variant
      title="Disabled Checkbox"
    >
      <BCheckbox v-model="disabled" disabled>
        Disabled Unchecked
      </BCheckbox>
      <BCheckbox v-model="disabledChecked" disabled>
        Disabled Checked
      </BCheckbox>
    </Variant>
  </Story>
</template>

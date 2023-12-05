<script lang="ts" setup>
withDefaults(defineProps<{
  modelValue: boolean
  hint?: string
  disabled?: boolean
}>(), {
  value: false,
  hint: '',
  disabled: false,
})

const emit = defineEmits<{
  change: [value: boolean]
  'update:modelValue': [value: boolean]
}>()

function onChange(e: Event) {
  const el = e.target as HTMLInputElement
  emit('change', el.checked)
  emit('update:modelValue', el.checked)
}
</script>

<template>
  <label class="b-checkbox" :title="hint">
    <input
      :value="modelValue"
      :checked="modelValue"
      class="input"
      type="checkbox"
      :disabled="disabled"
      @change="onChange"
      @click.stop="() => {}"
    >
    <template v-if="$slots.default">
      <span><slot /></span>
    </template>
  </label>
</template>

<style lang="scss">
.b-checkbox {
  display: flex;
  gap: 2px;
  color: white;
  align-items: center;
  user-select: none;
  font:
    12px system-ui,
    sans-serif;
  cursor: pointer;

  .input {
    outline: none;
    appearance: none;
    background: #545454;
    border: 1px solid #3d3d3d;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(black, 0.2);
    width: 14px;
    height: 14px;
    margin: 0;

    &:hover {
      background: #656565;
      border-color: #464646;
    }
    &:checked {
      background: #4772b3 var(--icon-checkbox) no-repeat center center;
    }
    &:focus-visible {
      border-color: #4772b3;
      &:checked {
        border-color: white;
      }
    }

    &:disabled {
      &:hover {
        background: #545454;
        border-color: #3d3d3d;
      }
      &:checked {
        background: #545454 var(--icon-checkbox) no-repeat center center;
      }
    }
  }
}
</style>

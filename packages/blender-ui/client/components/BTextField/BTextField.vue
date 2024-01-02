<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

const props = defineProps<{
  id?: string
  modelValue: string
}>()

const emit = defineEmits(['input', 'change', 'update:modelValue'])

const text = ref(props.modelValue)
const previous = ref(props.modelValue)
const multiline = ref(text.value?.includes('\n'))

const el = ref<HTMLTextAreaElement | HTMLInputElement>()
watch(() => props.modelValue, (newValue) => {
  if (newValue !== text.value && document.activeElement !== el.value)
    text.value = newValue

  multiline.value = text.value?.includes('\n')
})

function onInput() {
  if (text.value !== props.modelValue) {
    emit('update:modelValue', text.value)
    emit('input', text.value)
  }
}

function onFocus() {
  previous.value = text.value
}

function onBlur() {
  if (previous.value !== text.value)
    emit('change', text.value)

  if (el.value?.tagName === 'TEXTAREA' && !text.value?.includes('\n'))
    multiline.value = false
}

async function onShiftEnter() {
  multiline.value = true
  await nextTick()
  el.value?.focus()
  // The selectionStart and selectionEnd logic is omitted as it is not typically needed in Vue
}
</script>

<template>
  <div v-if="multiline" class="b-text-field">
    <div class="spacer">
&nbsp;{{ text }}&nbsp;
    </div>
    <textarea
      :id="id"
      ref="el"
      v-model="text"
      class="textarea"
      @input="onInput"
      @blur="onBlur"
      @keydown.shift.enter="onShiftEnter"
    />
  </div>
  <input
    v-else
    :id="id"
    ref="el"
    v-model="text"
    type="text"
    class="b-text-field input"
    spellcheck="false"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @keydown.shift.enter="onShiftEnter"
  >
</template>

<style lang="scss">
.b-text-field {
  position: relative;
  width: 100%;

  &.input,
  .textarea,
  .spacer {
    appearance: none;
    display: block;
    font:
      12px system-ui,
      sans-serif;
    background-color: transparent;
    border: none;
    width: 100%;
    box-sizing: border-box;
    color: #fdfdfd;
    outline: none;
    caret-color: #71a8ff;
    padding: 2px 6px;
    margin: 0;
    background: #1d1d1d;
    border: 1px solid #3d3d3d;
    box-shadow: 0 1px 3px rgba(black, 0.3);
    border-radius: 4px;

    &::selection {
      background-color: #4570b5;
    }
    &:hover:not(:focus) {
      background: #232323;
      border-color: #414141;
    }
    &:focus {
      cursor: text;
    }
  }
  .spacer {
    position: relative;
    white-space: pre-wrap;
    width: 100%;
    visibility: hidden;
  }
  .textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    resize: none;
    overflow-y: hidden;
  }
}
</style>

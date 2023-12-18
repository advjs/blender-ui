<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import BCheckbox from '../BCheckbox/BCheckbox.vue'

// You need to create this composable for the slide transition

const props = withDefaults(defineProps<{
  title: string
  expanded?: boolean
  modelValue?: boolean
}>(), {
  expanded: false,
  modelValue: undefined,
})

const emit = defineEmits(['change', 'update:modelValue'])

const expanded = ref(props.expanded)
function onToggleExpanded() {
  expanded.value = !expanded.value
}

function onChange(val: boolean) {
  emit('update:modelValue', val)
  emit('change', val)
}

function beforeEnter(el: Element) {
  const element = el as HTMLElement
  element.style.height = '0'
  element.style.overflow = 'hidden'
}
function enter(el: Element, done: () => void) {
  const element = el as HTMLElement
  element.style.height = `${el.scrollHeight}px`
  element.addEventListener('transitionend', done)
}
function afterEnter(el: Element) {
  const element = el as HTMLElement
  element.style.overflow = 'visible'
}
function beforeLeave(el: Element) {
  const element = el as HTMLElement
  element.style.height = `${el.scrollHeight}px`
  element.style.overflow = 'hidden'
}
function leave(el: Element, done: () => void) {
  // Force repaint to ensure height is taken into account
  // void el.offsetHeight
  const element = el as HTMLElement
  element.style.height = '0'
  element.addEventListener('transitionend', done)
}
function afterLeave(el: Element) {
  const element = el as HTMLElement
  element.style.overflow = 'visible'
}
</script>

<template>
  <section class="b-panel panel">
    <button
      class="title" :class="{ expanded }"
      @click="onToggleExpanded"
    >
      <BCheckbox v-if="typeof modelValue === 'boolean'" :model-value="modelValue" @change="onChange" />
      <span>{{ title }}</span>
    </button>
    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div v-if="expanded" class="content" :class="{ disabled: modelValue === false }">
        <div class="p-2">
          <slot />
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss">
.b-panel {
  width: 100%;

  font-size: 12px;
  color: #eee;
  background: #353535;
  border-radius: 4px;

  .title {
    display: flex;
    align-items: center;

    font-size: inherit;

    gap: 4px;
    appearance: none;
    position: relative;
    background: transparent;
    border: 0;
    color: inherit;
    box-sizing: border-box;
    padding: 4px 16px 4px 20px;
    min-height: 24px;
    width: 100%;
    user-select: none;
    text-align: left;

    &:before {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      background: var(--b-icon-chevron-right) center center no-repeat;
      opacity: 0.5;
    }

    &.expanded::before {
      background-image: var(--b-icon-chevron-down);
    }
  }

  .content {
    transition: height 0.15s ease-in-out;

    &.disabled {
      opacity: 0.5;
    }

    .p-2 {
      padding: 8px;
    }
  }
}
</style>

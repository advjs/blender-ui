<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

// import Toggle from './IconButton.vue'

const props = defineProps({
  indent: Number,
  title: String,
  expanded: { type: Boolean, default: undefined },
  active: Boolean,
  selectable: Boolean,
  parentUnselectable: { type: Boolean, default: undefined },
  visible: { type: Boolean, default: undefined },
  match: { type: Boolean, default: undefined },
  muted: Boolean,
})

const emit = defineEmits(['activate', 'collapse', 'expand', 'log', 'unselectable', 'selectable', 'hide', 'show'])
const el = ref(null)
watch(() => props.active, (newActive) => {
  if (newActive && el.value) {
    // Focus or scroll into view logic goes here
  }
})

onMounted(() => {
  // Assign outlineRow or any other initialization logic
})

function activate() {
  emit('activate')
}

function collapse() {
  emit('collapse')
}

function expand() {
  emit('expand')
}

function log() {
  emit('log')
}

function unselectable() {
  emit('unselectable')
}

function selectable() {
  emit('selectable')
}

function hide() {
  emit('hide')
}

function show() {
  emit('show')
}

function onKeyDown(_event: KeyboardEvent) {
  // The keyboard navigation logic goes here
  // You'll need to handle focus and sibling element traversal in Vue 3 terms
}
</script>

<template>
  <div
    ref="el" class="outliner-row"
    :class="[{ active, muted, match }]"
    :style="{ '--indent': `${indent}px` }"
    tabindex="0"
    @click="activate"
    @dblclick="log"
    @keydown="onKeyDown"
  >
    <template v-if="typeof expanded === 'boolean'">
      <Toggle
        :icon="expanded ? 'expanded' : 'collapsed'"
        @click="expanded ? collapse() : expand()"
      />
    </template>
    <template v-else>
      <span class="toggle-spacer" />
    </template>
    <span class="title">{{ title }}</span>
    <!-- <template v-if="selectable"> -->
    <template v-if="1">
      <Toggle
        icon="selectable"
        hint="Disable right-click selection"
        :muted="parentUnselectable"
        @click="unselectable"
      />
    </template>
    <template v-else>
      <Toggle
        icon="unselectable"
        hint="Enable right-click selection"
        :muted="parentUnselectable"
        @click="selectable"
      />
    </template>
    <template v-if="typeof visible === 'boolean'">
      <Toggle
        :icon="visible ? 'eye-opened' : 'eye-closed'"
        :hint="visible ? 'Hide (h)' : 'Show (h)'"
        @click="visible ? hide() : show()"
      />
    </template>
  </div>
</template>

<style  lang="scss">
.outliner-row {
  display: flex;
  align-items: center;
  background: #282828;
  color: #c2c2c2;
  height: 20px;
  padding-left: calc(var(--indent) * 20px);
  outline: none;
  padding-right: 4px;
  &:nth-child(even) {
    background-color: #2b2b2b;
  }
  &:focus {
    background-color: #334d80;
  }
  &.match {
    background-color: #2f552f;
    &:focus {
      background-color: #336659;
    }
  }
  &.active {
    color: #ffaf29;
  }
}
.toggle-spacer {
  width: 20px;
}
.title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  position: default;
  .muted & {
    opacity: 0.5;
  }
}
</style>

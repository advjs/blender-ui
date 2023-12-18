<script lang="ts" setup>
export interface Tree {
  label: string
  children?: Tree[]
}

defineProps<{
  data: Tree[]
}>()
</script>

<template>
  <div class="tree">
    <div v-for="item in data" :key="item.label" class="tree-item">
      <div class="tree-item-label">
        {{ item.label }}
      </div>
      <div class="tree-item-children">
        <Tree :data="item.children" />
      </div>
    </div>
  </div>
</template>

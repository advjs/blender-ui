<script lang="ts" setup>
import consola from 'consola'

const config = useRuntimeConfig()
consola.log('useRuntimeConfig', config)
</script>

<template>
  <Story>
    <Meow />

    <h3>Nuxt runtime config</h3>
    <pre class="text-white">{{ config }}</pre>
    <p data-testid="config">
      {{ config.public.configFromNuxt }}
    </p>
  </Story>
</template>

<template>
  <NuxtLink :to="Url.TOP">
    <v-toolbar-title class="w-64">nuxt3-jamstack-blog</v-toolbar-title>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Url } from '@/constants/url'
</script>

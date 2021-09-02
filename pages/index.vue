<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://isystk.microcms.io/api/v1/blog',
      {
        headers: { 'X-API-KEY': 'a1214110-aa08-4a07-9b56-7866b705d077' }
      }
    )
    return data
  }
}
</script>

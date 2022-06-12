<template>
  <div v-if="!data">Loading..</div>
  <div v-else>
    <pages-box :breadcrumbs="[{ text: data.title }]">
      <v-img :src="data.photo.url" />

      <div class="pb-3" v-html="data.description"></div>
    </pages-box>
  </div>
</template>
<script lang="ts" setup>
import { Url } from '@/constants/url'
// import { onBeforeMount, computed, ref, reactive } from 'vue'
// import { Post } from '@/services/models'
// import { injectStore } from '@/store'
// import { useMeta, useRoute } from 'nuxt/app'
// const main = injectStore()
// const route = useRoute()
//
// const id = ref<string>()
// const loading = ref<boolean>(true)
//
// onBeforeMount(async () => {
//   id.value = route.params.id + ''
//   // 投稿詳細の取得
//   await main?.post?.readPost(id.value + '')
//   loading.value = false
// })
// const data = computed<Post>(() => {
//   const d = main?.post?.posts[id.value]
//   if (!d) {
//     return {
//       userId: '',
//       title: '',
//       description: '',
//       photo: '',
//     }
//   }
//
//   useMeta({
//     title: d.title,
//   })
//
//   return d
// })

const { data } = useAsyncData('posts', async () => {
  return await $fetch(`${import.meta.env.VITE_MICRO_CMS_API_URL}/avsacv153g`, {
    headers: {
      'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY,
    },
  })
})
</script>

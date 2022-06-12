<template>
  <pages-box :breadcrumbs="[{ text: data.title }]">
    <v-img :src="data.photo.url" />

    <div class="pb-3" v-html="data.description"></div>
  </pages-box>
</template>
<script lang="ts" setup>
import axios from 'axios'
import { injectStore } from '@/store'
const main = injectStore()
const route = useRoute()

const { data } = useAsyncData(`posts/${route.params.id}`, async () => {
  // SSGの場合は、Generate時に1度だけここが処理される
  
  // 投稿詳細の取得
  // const res = await axios.get(
  //   `${import.meta.env.VITE_MICRO_CMS_API_URL}/${route.params.id}`,
  //   {
  //     headers: {
  //       'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY,
  //     },
  //   }
  // )
  // return res.data
  const post = await main?.post?.readPost(route.params.id + '')

  useMeta({
    title: post.title,
  })

  return post
})
</script>

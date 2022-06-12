<template>
  <div v-if="loading">Loading..</div>
  <div v-else>
    <pages-box :breadcrumbs="[{ text: data.title }]">
      <v-img :src="data.photo.url" />

      <div class="pb-3" v-html="data.description"></div>
    </pages-box>
  </div>
</template>
<script lang="ts" setup>
import { Url } from '@/constants/url'
import axios from 'axios'
import { onBeforeMount, computed, ref, reactive } from 'vue'
// import { Post } from '@/services/models'
// import { injectStore } from '@/store'
// const main = injectStore()
const route = useRoute()

// const id = ref<string>()
const loading = ref<boolean>(true)
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

const { data } = useAsyncData(`posts/${route.params.id}`, async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_MICRO_CMS_API_URL}/${route.params.id}`,
    {
      headers: {
        'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY,
      },
    }
  )
  loading.value = false
  return res.data
})
</script>

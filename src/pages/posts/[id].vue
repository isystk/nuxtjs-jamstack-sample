<template>
  <div v-if="loading">Loading..</div>
  <div v-else>
    <pages-box :breadcrumbs="[{ text: post.title }]">
      <v-img :src="post.photo.url" />

      <div class="pb-3" v-html="post.description"></div>
    </pages-box>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, computed, ref, reactive} from 'vue'
import { Post } from '@/services/models'
import { injectStore } from '@/store'
import { useMeta, useRoute } from 'nuxt/app'
const main = injectStore()
const route = useRoute()

const id = ref<string>()
const loading = ref<boolean>(true)
// const store = reactive({post: {}})

onBeforeMount(async () => {
  id.value = route.params.id + ''
  // 投稿詳細の取得
  await main?.post?.readPost(id.value + '')
  // const { data } = await useAsyncData('post', () => $fetch(`${import.meta.env.VITE_MICRO_CMS_API_URL}/${id.value}`, {
  //   headers: {
  //     'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY
  //   }
  // }).catch((e) => {
  //   console.log(e)
  // }));
  // store.post = data
  loading.value = false
})

const post = computed<Post>(() => {
  const d = main?.post?.posts[id.value]
  // const d = store.post
  if (!d) {
    return {
      userId: '',
      title: '',
      description: '',
      photo: '',
    }
  }

  useMeta({
    title: d.title,
  })

  return d
})
</script>
<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="e in data" :key="e.id" cols="12" md="4">
          <v-card>
            <NuxtLink :to="`${Url.POSTS}/${e.id}`">
              <v-img :src="e.photo.url" style="width: 92vw; height: 50vh" cover>
                <v-card-title class="text-white">
                  {{ e.title }}
                </v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-heart"
                />
              </v-card-actions>
            </NuxtLink>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts" setup>
import { Url } from '@/constants/url'
import axios from 'axios'
useMeta({
  title: 'Top',
})
import { injectStore } from '@/store'
const main = injectStore()

const { data } = useAsyncData('posts', async () => {
  // SSGの場合は、Generate時に1度だけここが処理される
  
  // 投稿一覧の取得
  // const res = await axios.get(import.meta.env.VITE_MICRO_CMS_API_URL, {
  //   headers: {
  //     'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY,
  //   },
  // })
  // return res.data.contents
  const posts = await main?.post?.readPosts()
  return posts
})
</script>

<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="e in data?.data?.contents" :key="e.id" cols="12" md="4">
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

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import * as _ from 'lodash'
import axios from 'axios'
import { useMeta } from 'nuxt/app'
useMeta({
  title: 'Top',
})
import { Url } from '@/constants/url'
// import { injectStore } from '@/store'
// const main = injectStore()
// onBeforeMount(async () => {
//   // 投稿一覧の取得
//   await main?.post?.readPosts()
// })
// const posts = computed(() => main?.post?.posts)
const { data } = await useAsyncData('post', () =>
  axios
    .get(import.meta.env.VITE_MICRO_CMS_API_URL, {
      headers: {
        'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY,
      },
    })
    .catch((e) => {
      console.log(e)
    })
)
</script>

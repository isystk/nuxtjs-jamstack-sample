<template>
  <section>
    <div class="entry-header">
      <h1 class="entry-title">HOME</h1>
    </div>
    <div class="entry-content">
      <p>すべての投稿を一覧表示しています。</p>
      <div class="box-list">
        <section v-for="e in contents" :key="e.id">
          <NuxtLink :to="`posts/${e.id}`">
            <div class="entry-header">
              <div class="category_NuxtLink">{{ e.tagName }}</div>
              <h2 class="entry-title">{{ e.title }}</h2>
              <div class="entry-meta">
                <span>{{ e.regist_datetime_yyyymmdd }}</span>
              </div>
            </div>
            <div class="entry-content">
              <img
                alt="sample1"
                width="300"
                height="174"
                :src="e.photo.url"
                class="attachment-medium size-medium wp-post-image"
              />
              <div v-html="e.description"></div>
              <div class="clearfix"></div>
            </div>
          </NuxtLink>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  async asyncData({$config}: {$config: {MICRO_CMS_API_URL: string, MICRO_CMS_API_KEY: string}}) {
    console.log($config)
    const { data } = await axios.get(
      $config.MICRO_CMS_API_URL,
      {
        headers: { 'X-MICROCMS-API-KEY': $config.MICRO_CMS_API_KEY }
      }
    )
    return data
  }
}
</script>

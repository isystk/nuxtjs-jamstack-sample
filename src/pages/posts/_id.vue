<template>
  <section>
    <nav class="breadcrumb">
      <ul>
        <li>
          <NuxtLink to="/">
            <span>HOME</span>
          </NuxtLink>
        </li>
        <li>{{ title }}</li>
      </ul>
    </nav>
    <div class="entry-header">
      <h1 class="entry-title">{{ title }}</h1>
      <div class="article-img">
        <img alt="sample1" width="644" :src="photo.url" />
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="entry-content" v-html="description">
    </div>
    <div class="clearfix"></div>
    <div class="entry-meta">
      <i class="fas fa-clock" :style="{ fontSize: '16px' }"></i>
      {{ regist_datetime_yyyymmdd }}
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

@Component
export default class Detail extends Vue {
  async asyncData({
    params,
    $config
  }: {
    params: {id: string},
    $config: {MICRO_CMS_API_URL: string, MICRO_CMS_API_KEY: string}
  }): Promise<{ title: string }> {
    const { data } = await axios.get(
      `${$config.MICRO_CMS_API_URL}/${params.id}`,
      {
        headers: { 'X-API-KEY': $config.MICRO_CMS_API_KEY }
      }
    )
    return data
  }
}

</script>


<style lang="scss" scoped>
.main {
  width: 960px;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

.post {
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }

  & > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }

  & > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
}
</style>

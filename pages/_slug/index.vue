<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

@Component
export default class Detail extends Vue {
  async asyncData({
    params
  }: {
    params: {slug: string}
  }): Promise<{ title: string }> {
    const { data } = await axios.get(
      `https://isystk.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'a1214110-aa08-4a07-9b56-7866b705d077' }
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

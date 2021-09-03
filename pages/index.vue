<template>
  <div>
    <div class="p-10" v-for="content in contents" :key="content.id">
      <div class=" w-full lg:max-w-full lg:flex">
        <div class="border border-gray-400 bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
          <nuxt-link :to="`/${content.id}`">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">{{ content.title }}</div>
              <div class="text-gray-700 text-base" v-html="content.body"></div>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <p class="text-gray-900 leading-none">John Smith</p>
                <p class="text-gray-600">Aug 18</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
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

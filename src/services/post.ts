import MainService from '@/services/main'
import { Post } from '@/services/models'
import axios from 'axios'
import * as _ from 'lodash'

export type Data<T> = {
  id: string
  data: T
}

export type Posts = {
  [id: string]: Data<Post>
}

export default class PostService {
  main: MainService
  posts: Posts

  constructor(main: MainService) {
    this.main = main
    this.posts = {}
  }

  async readPosts() {
    try {
      const { data } = await axios.get(import.meta.env.VITE_MICRO_CMS_API_URL, {
        headers: {
          'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY,
        },
      })
      this.posts = _.mapKeys(data.contents, 'id')
    } catch (error) {
      console.log('error read posts', error)
      alert('データ取得に失敗しました')
    }
  }

  async readPost(id: string) {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_MICRO_CMS_API_URL}/${id}`,
        {
          headers: {
            'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY,
          },
        }
      )
      this.posts[id] = data
    } catch (error) {
      console.log('error read posts', error)
      alert('データ取得に失敗しました')
    }
  }

  getMyPosts() {
    return {}
  }

  async createPost(post: Post) {
    console.log()
  }

  async updatePost(postId: string, post: Post) {
    console.log()
  }

  async deletePost(postId: string) {
    console.log()
  }
}

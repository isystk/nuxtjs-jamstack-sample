import MainService from '@/services/main'
import { Post } from '@/services/models'

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
    console.log()
  }

  async readPost(id: string) {
    console.log()
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

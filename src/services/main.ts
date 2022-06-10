import Post from '@/services/post'

export default class MainService {
  post: Post

  constructor() {
    this.post = new Post(this)
  }
}

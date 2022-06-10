/**
 * フロントエンド用の URL を作成する
 */
const getFrontUrl = (path: string): string => {
  return ['', path].join('')
}

/** API のエンドポイント */
export const Url = {
  /** TOP */
  TOP: getFrontUrl('/'),
  /** ログイン */
  LOGIN: getFrontUrl('/login'),
  /** 投稿詳細 */
  POSTS: getFrontUrl('/posts'),
}

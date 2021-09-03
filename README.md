# nuxtjs-jamstack-sample


## Jamstackとは

- https://jamstack.org/
- JamstackのJamはJavaScript/APIs/Markupの頭文字です
- JavaScriptでAPIをたたいてMarkupを配信することを意味しています
- Jamstackの特徴としてパフォーマンスの高さとセキュリティの高さがうたわれています


## CSR
Client Side Renderingの略称で日本語に直すと、クライアント側でのレンダリング。
クライアント側でDOMをレンダリングする仕組みで、Reactのみを使ってSPAを作る場合にuseEffect内で外部データをフェッチしてDOMに流し込む
#### メリット
- ユーザーに優れた UX 提供が可能（ぬるぬる動く）
- ページ遷移が高速（ページ毎にリクエストを送らないため）
- ネイティブアプリの代わりとしても提供可能（PWA対応など）
- ビルド済みのHTMLとJSファイルがホスティングサーバーにあれば動く（ビルドしてNetlifyやVercelなどのサービスで簡単にデプロイできる）
#### デメリット
- 初期ローディングは時間がかかる（ブラウザ上でJSを実行する時間）
- SEOで不利な可能性もある
（初期状態はほぼ何もないHTMLファイルが返却されるため、Googleのクローラーが中身のコンテンツを認識できない可能性があるため。ただクローラーはJSを実行してから中身を解析してくれる、という話もあるので単純にSEOに不利だとも断言はできない）


## SSR
Server Side Renderingの略称で日本語に直すと、サーバー側でのレンダリング（HTML生成）。
ブラウザ上で初期データをレンダリングするのではなく、サーバー側でAPIを叩き、レンダリングまでを行ってからHTMLファイルを返却する。
#### メリット
- コンテンツ表示までの時間が早い（ブラウザ上で初回レンダリングを行わないので）
- SEOに有利（SPAのデメリットの点を参照）
#### デメリット
- Node.jsサーバを実行できる環境が必要（NextやNuxtなどのフレームワークを利用可能）
- サーバ側の負荷が増加する

## SSG
Static Site Generatorの略称で日本語に直すと、静的サイト生成。
アプリのビルド時にAPIからデータ取得をして、HTMLファイルをファイルを生成する。
サーバへリクエストがあると、ビルド時に生成したHTMLファイルをファイルを返却する。
#### メリット
- 静的サイトを配信するので、パフォーマンスが向上
- SPAと比較してSEOが向上する
- HTMLとJSファイルのみがホスティングサーバーにあれば、ページ配信が可能
#### デメリット
- ページ量が多いWebサイトには向かない
- ページ数が多くなればなるほど、ビルド時間が遅くなる
- 更新頻度の高いサイトには不向き（データの更新毎に再ビルドを行う）

## ISR
Incremental Static Regenerationの略称で日本語に直すと、段階的な静的サイト生成。
ビルド時に事前にHTMLを生成しておいた上で、stale-while-revalidateというキャッシュの仕組みを使って、指定時間経過後にリクエストがあった場合は裏側でHTMLを再生成し次のリクエスト時にはそれを返す。



## microcms

https://isystk.microcms.io/apis/blog


## Develop

yarn
yarn dev


## Genarate SSG

yarn generate
yarn start


## firebase deploy

$ firebase login
（Firebase Hosting未設定の場合）
$ firebase init hosting
（Firebase Hosting設定済の場合）
$ firebase init hosting:github

$ yarn generate
$ firebase deploy

https://nuxtjs-jamstack-sample.web.app

`FIREBASE_TOKEN` の確認
$ firebase login:ci
```
1//xxxxxxxxxxxxxxxxxxxx
```

## 参考
「microCMS + NuxtでJamstackブログを作ってみよう」
https://blog.microcms.io/microcms-nuxt-jamstack-blog/


「Nuxt.js + microCMS + Firebase + GitHub Actions で JAMstack なブログに移行した」
https://ryo620.org/post/jamstack-blog/


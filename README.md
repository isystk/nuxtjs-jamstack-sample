🌙 nuxtjs-jamstack-sample
====

![GitHub issues](https://img.shields.io/github/issues/isystk/nuxtjs-jamstack-sample)
![GitHub forks](https://img.shields.io/github/forks/isystk/nuxtjs-jamstack-sample)
![GitHub stars](https://img.shields.io/github/stars/isystk/nuxtjs-jamstack-sample)
![GitHub license](https://img.shields.io/github/license/isystk/nuxtjs-jamstack-sample)

## 📗 プロジェクトの概要

jamstackについて学習する為のサンプルアプリケーションです。
jamstackを知るためには、ここ最近のフロントエンドの仕組みを知っておく必要があります。
ここでは、HeadlessCMS や SSG の仕組みについて抑えた上で、 jamstackと呼ばれる構成とその仕組について学習します。

## Jamstackとは
JamstackのJamはJavaScript/APIs/Markupの頭文字です。JavaScriptでAPIをたたいてMarkupを配信することを意味しています。

通常のWebアプリケーションは、ユーザがアクセスした際にサーバーがデータベースを参照することで最新のコンテンツを表示することが出来ます。

JamStackは、従来の概念とは異なり、コンテンツが更新されたタイミングで、予め静的なページを生成しておき、ユーザはこれを参照する形となります。

### JamStack の**メリット**

- PV増加（速度UP・SEO効果）
- 運用コスト減少（管理画面が不要、APサーバー不要）
- 安全性の向上（APサーバーが動作していないので攻撃ポイントが少ない）

### JamStack の**デメリット**

- リアルタイム性が低い（ページの生成に時間がかかる）
- データの整合性が必要なものには不向き
## JamStack の実現**に必要な技術**

- HeadressCMS
- SSG

### HeadressCMS とは？

HeadlessCMSは「プレビュー機能のない、コンテンツ管理に特化したCMS」です。
Contentful、Micro CMS、GraphCMS、Strapi などのサービスを利用することで、バックエンドを用意する必要がなくなり、フロントエンドの開発に注力できます。

### SSG**とは？**

SSGは、Static Site Generatorの略称で、静的サイト生成をする仕組みになります。 アプリのビルド時にAPIからデータを取得して、HTMLファイルをファイルを生成します。 ユーザからリクエストがあると、事前に生成しておいたHTMLファイルを返却することでコンテンツを表示します。

![Jamstack](./jamstack.png)


### 利用している技術

- Nuxt.js
- Typescript
- Tailwind CSS
- Firebase Hosting
- Github Actions
- MicroCMS

## 🌐 Demo

https://nuxtjs-jamstack-sample.web.app

![app](./app.png)

## 🖊️ 記事の投稿
[MicroCMS](https://isystk.microcms.io/apis/blog)

![microcms](./microcms.png)

Micro CMS でコンテンツが更新された際に、WebHookを利用して、Github Action を実行させることで、最新のコンテンツが反映されるようにしています。

![Github Action](./github-action.png)



## 🔧 開発環境の構築
```
# MicroCMSのKeyとURLを設定する
$ cp .env.example .env
$ vi .env
# モジュールをインストールする
$ yarn
# アプリを起動する
$ yarn dev
```

## 📦 静的サイトの生成手順
```
$ yarn generate
$ yarn start
```

## 💬 Firebaseへのデプロイ手順
```
$ npm install -g firebase-tools
$ firebase login
（Firebase Hosting未設定の場合）
$ firebase init hosting
（Firebase Hosting設定済の場合）
$ firebase init hosting:github
$ firebase deploy

https://nuxtjs-jamstack-sample.web.app

`FIREBASE_TOKEN` の確認
$ firebase login:ci

GithubプロジェクトのActions secrets から、「FIREBASE_TOKEN」の変数名で上記のトークンを追加する。
```


## 🎨 参考

| プロジェクト| 概要|
| :---------------------------------------| :-------------------------------|
| [microCMS + NuxtでJamstackブログを作ってみよう](https://blog.microcms.io/microcms-nuxt-jamstack-blog/)| microCMS + NuxtでJamstackブログを作ってみよう|
| [Nuxt.js + microCMS + Firebase + GitHub Actions で JAMstack なブログに移行した](https://ryo620.org/post/jamstack-blog/)| Nuxt.js + microCMS + Firebase + GitHub Actions で JAMstack なブログに移行した|

## 🎫 Licence

[MIT](https://github.com/isystk/nuxtjs-jamstack-sample
/blob/master/LICENSE)

## 👀 Author

[isystk](https://github.com/isystk)



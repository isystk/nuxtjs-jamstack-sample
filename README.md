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
- Github Actions
- Github Pages
- MicroCMS

## 🌐 Demo

https://isystk.github.io/nuxtjs-jamstack-sample/

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

## 🎨 参考

| プロジェクト| 概要|
| :---------------------------------------| :-------------------------------|
| [Nuxt3 Docs](https://v3.nuxtjs.org/guide/concepts/introduction)| Nuxt3 Docs |
| [Vuetify 3 Beta](https://next.vuetifyjs.com/en/getting-started/installation/)| Vuetify 3 Beta |
| [Material Design Icons](https://pictogrammers.github.io/@mdi/font/2.0.46/)| Material Design Icons |
| [Tailwind CSS](https://tailwindcss.com/docs/installation)| Tailwind CSS |
| [vee-validate](https://vee-validate.logaretm.com/v4/guide/components)| vee-validate |
| [husky v6 のインストール方法と使い方。lint-staged も導入して、品質を保とう](https://fwywd.com/tech/husky-setup)| husky v6 のインストール方法と使い方。lint-staged も導入して、品質を保とう |
| [microCMS + NuxtでJamstackブログを作ってみよう](https://blog.microcms.io/microcms-nuxt-jamstack-blog/)| microCMS + NuxtでJamstackブログを作ってみよう|
| [Nuxt.js + microCMS + Firebase + GitHub Actions で JAMstack なブログに移行した](https://ryo620.org/post/jamstack-blog/)| Nuxt.js + microCMS + Firebase + GitHub Actions で JAMstack なブログに移行した|
| [Nuxt3のSSGなサイトをGitHub Pagesで公開するだけなのにハマった](https://qiita.com/kira_puka/items/46a10a5dd353c1d4ad4b)| Nuxt3のSSGなサイトをGitHub Pagesで公開するだけなのにハマった|

## 🎫 Licence

[MIT](https://github.com/isystk/nuxtjs-jamstack-sample
/blob/master/LICENSE)

## 👀 Author

[isystk](https://github.com/isystk)



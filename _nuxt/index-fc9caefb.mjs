import{_ as w,d as y,u as k,r as t,o as s,c as i,w as e,a as S,b as o,e as C,f as $,F as B,g as M,t as N,h as O}from"./entry-6e386d7e.mjs";import{u as P}from"./asyncData-6c1df35f.mjs";import{U as T}from"./url-a702e221.mjs";const U=y({__name:"index",setup(l,{expose:c}){c(),k({title:"Top"});const{data:r}=P("posts",async()=>(await S.get("https://isystk.microcms.io/api/v1/blog",{headers:{"X-MICROCMS-API-KEY":"f3a27806d79b4766ba1fff170a473fb9e6f4"}})).data),a={data:r,Url:T};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function A(l,c,r,a,d,D){const p=t("v-card-title"),u=t("v-img"),m=t("v-spacer"),f=t("v-btn"),v=t("v-card-actions"),x=O,_=t("v-card"),h=t("v-col"),b=t("v-row"),g=t("v-container");return s(),i(_,{class:"mx-auto"},{default:e(()=>[o(g,{fluid:""},{default:e(()=>[o(b,{dense:""},{default:e(()=>[(s(!0),C(B,null,$(a.data.contents,n=>(s(),i(h,{key:n.id,cols:"12",md:"4"},{default:e(()=>[o(_,null,{default:e(()=>[o(x,{to:`${a.Url.POSTS}/${n.id}`},{default:e(()=>[o(u,{src:n.photo.url,style:{width:"92vw",height:"50vh"},cover:""},{default:e(()=>[o(p,{class:"text-white"},{default:e(()=>[M(N(n.title),1)]),_:2},1024)]),_:2},1032,["src"]),o(v,null,{default:e(()=>[o(m),o(f,{size:"small",color:"surface-variant",variant:"text",icon:"mdi-heart"})]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}var L=w(U,[["render",A]]);export{L as default};
import{_ as p}from"./Box-4819ea5e.mjs";import{_ as m,d as u,R as l,j as f,r as b,o as n,e as _,b as c,w as v,a as g,O as h}from"./entry-3cfa93e4.mjs";import{u as x}from"./asyncData-3dce140b.mjs";import"./url-a702e221.mjs";const y=u({__name:"[id]",setup(i,{expose:s}){s();const t=l(),e=f(!0),{data:r}=x(`posts/${t.params.id}`,async()=>{const o=await g.get(`https://isystk.microcms.io/api/v1/blog/${t.params.id}`,{headers:{"X-MICROCMS-API-KEY":"f3a27806d79b4766ba1fff170a473fb9e6f4"}});return e.value=!1,o.data}),a={route:t,loading:e,data:r};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),k={key:0},C={key:1},M=["innerHTML"];function w(i,s,t,e,r,a){const o=b("v-img"),d=p;return e.loading?(n(),_("div",k,"Loading..")):(n(),_("div",C,[c(d,{breadcrumbs:[{text:e.data.title}]},{default:v(()=>[c(o,{src:e.data.photo.url},null,8,["src"]),h("div",{class:"pb-3",innerHTML:e.data.description},null,8,M)]),_:1},8,["breadcrumbs"])]))}var S=m(y,[["render",w]]);export{S as default};

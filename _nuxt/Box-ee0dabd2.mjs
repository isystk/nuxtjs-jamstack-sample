import{U as b}from"./url-a702e221.mjs";import{_ as h,d as B,c as d,r as t,a as C,f as S,e as a,w as o,h as m,t as i,N as y}from"./entry-905acfab.mjs";const N=B({__name:"Box",props:{breadcrumbs:{default:()=>[]},small:{type:Boolean,default:!1}},setup(s,{expose:c}){c();const{breadcrumbs:n,small:e}=s,_=d(()=>[{text:"TOP",disabled:!1,href:b.TOP},...n]),l=d(()=>e?!1:"fluid"),r={breadcrumbs:n,small:e,items:_,fluid:l};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function O(s,c,n,e,_,l){const r=t("v-breadcrumbs"),u=t("v-card-title"),f=t("v-card-text"),p=t("v-card"),v=t("v-container");return C(),S("div",null,[a(r,{items:e.items},{text:o(({item:x})=>[m(i(x.text.toUpperCase()),1)]),_:1},8,["items"]),a(v,{fluid:e.fluid},{default:o(()=>[a(p,{class:"mx-auto"},{default:o(()=>[a(u,{class:"mb-3 card-header"},{default:o(()=>[m(i(e.items[e.items.length-1].text),1)]),_:1}),a(f,null,{default:o(()=>[y(s.$slots,"default")]),_:3})]),_:3})]),_:3},8,["fluid"])])}var U=h(N,[["render",O]]);export{U as _};

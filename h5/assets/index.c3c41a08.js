import{d as a,l as s,ao as e,o as l,j as t,a as u,b as o,w as r,e as c,F as n,r as i,c as p,t as d,B as g,f as _,h as m,i as f,k as v}from"./index-d6eea5d2.js";import{c as x}from"./home.f8e3f297.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const j=h(a({__name:"XtxGuess",setup(a,{expose:h}){const j={page:1,pageSize:10},w=s([]),k=s(!1),y=async()=>{if(!0===k.value)return g({icon:"none",title:"没有更多数据~"});const a=await x(j);w.value.push(...a.result.items),j.page<a.result.pages?j.page++:k.value=!0};return e((()=>{y()})),h({resetData:()=>{j.page=1,w.value=[],k.value=!1},getMore:y}),(a,s)=>{const e=_,g=m,x=f,h=v;return l(),t(n,null,[u(" 猜你喜欢 "),o(g,{class:"caption"},{default:r((()=>[o(e,{class:"text"},{default:r((()=>[c("猜你喜欢")])),_:1})])),_:1}),o(g,{class:"guess"},{default:r((()=>[(l(!0),t(n,null,i(w.value,(a=>(l(),p(h,{class:"guess-item",key:a.id,url:`/pages/goods/goods?id=${a.id}`},{default:r((()=>[o(x,{class:"image",mode:"aspectFill",src:a.picture},null,8,["src"]),o(g,{class:"name"},{default:r((()=>[c(d(a.name),1)])),_:2},1024),o(g,{class:"price"},{default:r((()=>[o(e,{class:"small"},{default:r((()=>[c("¥")])),_:1}),o(e,null,{default:r((()=>[c(d(a.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"])))),128))])),_:1}),o(g,{class:"loading-text"},{default:r((()=>[c(d(k.value?"没有更多数据~":"正在加载..."),1)])),_:1})],64)}}}),[["__scopeId","data-v-571a0c52"]]),w=()=>{const a=s();return{guessRef:a,onScrolltolower:()=>{var s;null==(s=a.value)||s.getMore()}}};export{j as _,w as u};

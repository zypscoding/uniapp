import{d as e,g as a,z as s,l,A as t,s as o,o as c,c as u,w as n,a as r,u as d,j as i,b as f,e as p,F as _,r as m,n as v,v as k,t as g,B as b,C as x,f as h,h as y,i as w,k as C,p as I,q as j,D as B,S as A,E as S}from"./index-d6eea5d2.js";import{g as V,p as F,d as q,a as E,_ as P}from"./cart.61214fee.js";import{_ as R,a as T}from"./uni-swipe-action.e7357298.js";import{u as U,_ as z}from"./index.c3c41a08.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";const G=D(e({__name:"CartMain",props:{safeAreaInsetBottom:{type:Boolean}},setup(e){const{safeAreaInsets:D}=a(),G=s(),M=l([]),O=l(!0),X=async()=>{const e=await V();M.value=e.result,O.value=e.result.length>0};t((()=>{G.profile&&X()}));const $=e=>{E(e.index,{count:e.value})},H=o((()=>M.value.length&&M.value.every((e=>e.selected)))),J=()=>{const e=!H.value;M.value.forEach((a=>{a.selected=e})),F({selected:e})},K=o((()=>M.value.filter((e=>e.selected)))),L=o((()=>K.value.reduce(((e,a)=>e+a.count),0))),N=o((()=>K.value.reduce(((e,a)=>e+a.count*a.nowPrice),0).toFixed(2))),Q=()=>{if(0===L.value)return b({icon:"none",title:"请选择商品"});x({url:"/pagesOrder/create/create"})},{guessRef:W,onScrolltolower:Y}=U();return(a,s)=>{const l=h,t=y,o=w,b=C,x=I(j("vk-data-input-number-box"),P),V=B,F=I(j("uni-swipe-action-item"),R),U=I(j("uni-swipe-action"),T),K=I(j("XtxGuess"),z),Z=A;return c(),u(Z,{"enable-back-to-top":"","scroll-y":"",class:"scroll-view",onScrolltolower:d(Y)},{default:n((()=>{var a;return[r(" 已登录: 显示购物车 "),d(G).profile?(c(),i(_,{key:0},[r(" 购物车列表 "),O.value?(c(),u(t,{key:0,class:"cart-list"},{default:n((()=>[r(" 优惠提示 "),f(t,{class:"tips"},{default:n((()=>[f(l,{class:"label"},{default:n((()=>[p("满减")])),_:1}),f(l,{class:"desc"},{default:n((()=>[p("满1件, 即可享受9折优惠")])),_:1})])),_:1}),r(" 滑动操作分区 "),f(U,null,{default:n((()=>[r(" 滑动操作项 "),(c(!0),i(_,null,m(M.value,(e=>(c(),u(F,{key:e.skuId,class:"cart-swipe"},{right:n((()=>[f(t,{class:"cart-swipe-right"},{default:n((()=>[f(V,{onClick:a=>{return s=e.skuId,void S({content:"是否删除",confirmColor:"#e9cfa8",success:async e=>{e.confirm&&(await q({ids:[s]}),X())}});var s},class:"button delete-button"},{default:n((()=>[p("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),default:n((()=>[f(t,{class:"goods"},{default:n((()=>[r(" 选中状态 "),f(l,{onClick:a=>(e=>{e.selected=!e.selected,E(e.skuId,{selected:e.selected})})(e),class:k(["checkbox",{checked:e.selected}])},null,8,["onClick","class"]),f(b,{url:`/pages/goods/goods?id=${e.id}`,"hover-class":"none",class:"navigator"},{default:n((()=>[f(o,{mode:"aspectFill",class:"picture",src:e.picture},null,8,["src"]),f(t,{class:"meta"},{default:n((()=>[f(t,{class:"name ellipsis"},{default:n((()=>[p(g(e.name),1)])),_:2},1024),f(t,{class:"attrsText ellipsis"},{default:n((()=>[p(g(e.attrsText),1)])),_:2},1024),f(t,{class:"price"},{default:n((()=>[p(g(e.nowPrice),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"]),r(" 商品数量 "),f(t,{class:"count"},{default:n((()=>[f(x,{modelValue:e.count,"onUpdate:modelValue":a=>e.count=a,min:1,max:e.stock,index:e.skuId,onChange:$},null,8,["modelValue","onUpdate:modelValue","max","index"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):(c(),i(_,{key:1},[r(" 购物车空状态 "),f(t,{class:"cart-blank"},{default:n((()=>[f(o,{src:"./static/images/blank_cart.png",class:"image"}),f(l,{class:"text"},{default:n((()=>[p("购物车还是空的，快来挑选好货吧")])),_:1}),f(b,{url:"/pages/index/index","hover-class":"none"},{default:n((()=>[f(V,{class:"button"},{default:n((()=>[p("去首页看看")])),_:1})])),_:1})])),_:1})],2112)),r(" 吸底工具栏 "),O.value?(c(),u(t,{key:2,class:"toolbar",style:v({paddingBottom:e.safeAreaInsetBottom?(null==(a=d(D))?void 0:a.bottom)+"px":0})},{default:n((()=>[f(l,{onClick:J,class:k(["all",{checked:d(H)}])},{default:n((()=>[p("全选")])),_:1},8,["class"]),f(l,{class:"text"},{default:n((()=>[p("合计:")])),_:1}),f(l,{class:"amount"},{default:n((()=>[p(g(d(N)),1)])),_:1}),f(t,{class:"button-grounp"},{default:n((()=>[f(t,{onClick:Q,class:k(["button payment-button",{disabled:0===d(L)}])},{default:n((()=>[p(" 去结算("+g(d(L))+") ",1)])),_:1},8,["class"])])),_:1})])),_:1},8,["style"])):r("v-if",!0)],64)):(c(),i(_,{key:1},[r(" 未登录: 提示登录 "),f(t,{class:"login-blank"},{default:n((()=>[f(l,{class:"text"},{default:n((()=>[p("登录后可查看购物车中的商品")])),_:1}),f(b,{url:"/pages/login/login","hover-class":"none"},{default:n((()=>[f(V,{class:"button"},{default:n((()=>[p("去登录")])),_:1})])),_:1})])),_:1})],2112)),r(" 猜你喜欢 "),f(K,{ref_key:"guessRef",ref:W},null,512),r(" 底部占位空盒子 "),f(t,{class:"toolbar-height"})]})),_:1},8,["onScrolltolower"])}}}),[["__scopeId","data-v-d3160c0c"]]);export{G as C};

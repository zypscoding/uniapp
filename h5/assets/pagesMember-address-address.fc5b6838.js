import{d as s,l as a,A as e,o as t,c as l,w as r,a as c,b as d,j as o,r as n,F as i,e as u,h as f,k as m,p,q as _,S as v,t as k,P as b,E as g,T as h,f as w,D as j}from"./index-d6eea5d2.js";import{_ as y,a as C}from"./uni-swipe-action.e7357298.js";import{g as x,d as q}from"./address.51510f04.js";import{u as A}from"./address.f9892280.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./http.2ff40c52.js";const M=D(s({__name:"address",setup(s){const D=a([]),M=async()=>{const s=await x();D.value=s.result};e((()=>{M()}));return(s,a)=>{const e=w,x=f,S=m,E=j,F=p(_("uni-swipe-action-item"),y),H=p(_("uni-swipe-action"),C),I=v;return t(),l(x,{class:"viewport"},{default:r((()=>[c(" 地址列表 "),d(I,{"enable-back-to-top":"",class:"scroll-view","scroll-y":""},{default:r((()=>[D.value.length?(t(),l(x,{key:0,class:"address"},{default:r((()=>[d(H,{class:"address-list"},{default:r((()=>[c(" 收货地址项 "),(t(!0),o(i,null,n(D.value,(s=>(t(),l(F,{class:"item",key:s.id},{right:r((()=>[d(E,{onClick:a=>{return e=s.id,void g({content:"删除地址?",confirmColor:"#e9cfa8",success:async s=>{s.confirm&&(await q(e),M())}});var e},class:"delete-button"},{default:r((()=>[u("删除")])),_:2},1032,["onClick"])])),default:r((()=>[d(x,{class:"item-content",onClick:a=>(s=>{A().changeSelectedAddress(s),h()})(s)},{default:r((()=>[d(x,{class:"user"},{default:r((()=>[u(k(s.receiver)+" ",1),d(e,{class:"contact"},{default:r((()=>[u(k(s.contact),1)])),_:2},1024),s.isDefault?(t(),l(e,{key:0,class:"badge"},{default:r((()=>[u("默认")])),_:1})):c("v-if",!0)])),_:2},1024),d(x,{class:"locate"},{default:r((()=>[u(k(s.fullLocation)+" "+k(s.address),1)])),_:2},1024),c(" H5 端需添加 .prevent 阻止链接的默认行为 "),d(S,{class:"edit","hover-class":"none",url:`/pagesMember/address-form/address-form?id=${s.id}`,onClick:[a[0]||(a[0]=b((()=>{}),["stop"])),a[1]||(a[1]=b((()=>{}),["prevent"]))]},{default:r((()=>[u(" 修改 ")])),_:2},1032,["url"])])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})):(t(),l(x,{key:1,class:"blank"},{default:r((()=>[u("暂无收货地址")])),_:1}))])),_:1}),c(" 添加按钮 "),d(x,{class:"add-btn"},{default:r((()=>[d(S,{"hover-class":"none",url:"/pagesMember/address-form/address-form"},{default:r((()=>[u(" 新建地址 ")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-52b61ccc"]]);export{M as default};

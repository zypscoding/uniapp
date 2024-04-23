import{d as e,g as a,l,m as t,z as s,o as r,c as o,w as c,a as n,b as u,e as d,n as i,u as f,t as p,U as v,V as m,B as _,T as h,k as g,h as k,i as b,f as y,I as S,H as x,J as Y,W as C,X as D,D as V}from"./index-d6eea5d2.js";import{h as H}from"./http.2ff40c52.js";import{_ as M}from"./_plugin-vue_export-helper.1b428a4d.js";const w=(e,a="YYYY-MM-DD HH:mm:ss")=>{const l=String(e.getFullYear()),t=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0"),c=String(e.getSeconds()).padStart(2,"0");return a.replace("YYYY",l).replace("MM",t).replace("DD",s).replace("HH",r).replace("mm",o).replace("ss",c)},T=M(e({__name:"profile",setup(e){const{safeAreaInsets:M}=a(),T=l({}),U=async()=>{const e=await H({method:"GET",url:"/member/profile"});T.value=e.result,j.profile.avatar=e.result.avatar,j.profile.nickname=e.result.nickname};t((()=>{U()}));const j=s(),F=()=>{v({count:1,success:e=>{const a=e.tempFilePaths;I(a[0])}})},I=e=>{m({url:"/member/profile/avatar",name:"file",filePath:e,success:e=>{if(200===e.statusCode){const a=JSON.parse(e.data).result.avatar;T.value.avatar=a,j.profile.avatar=a,_({icon:"success",title:"更新成功"})}else _({icon:"error",title:"出现错误"})}})},P=e=>{T.value.gender=e.detail.value},B=e=>{T.value.birthday=e.detail.value},J=async()=>{const{nickname:e,gender:a,birthday:l,profession:t}=T.value,s=await(r={nickname:e,gender:a,birthday:l,profession:t,provinceCode:void 0,cityCode:void 0,countyCode:void 0},H({method:"PUT",url:"/member/profile",data:r}));var r;j.profile.nickname=s.result.nickname,_({icon:"success",title:"保存成功"}),setTimeout((()=>{h()}),400)};return(e,a)=>{const l=g,t=k,s=b,v=y,m=S,_=x,h=Y,H=C,U=D,j=V;return r(),o(t,{class:"viewport"},{default:c((()=>{var e;return[n(" 导航栏 "),u(t,{class:"navbar",style:i({paddingTop:(null==(e=f(M))?void 0:e.top)+"px"})},{default:c((()=>[u(l,{"open-type":"navigateBack",class:"back icon-left","hover-class":"none"}),u(t,{class:"title"},{default:c((()=>[d("个人信息")])),_:1})])),_:1},8,["style"]),n(" 头像 "),u(t,{class:"avatar"},{default:c((()=>[u(t,{onClick:F,class:"avatar-content"},{default:c((()=>{var e;return[u(s,{class:"image",src:null==(e=T.value)?void 0:e.avatar,mode:"aspectFill"},null,8,["src"]),u(v,{class:"text"},{default:c((()=>[d("点击修改头像")])),_:1})]})),_:1})])),_:1}),n(" 表单 "),u(t,{class:"form"},{default:c((()=>[n(" 表单内容 "),u(t,{class:"form-content"},{default:c((()=>[u(t,{class:"form-item"},{default:c((()=>[u(v,{class:"label"},{default:c((()=>[d("账号")])),_:1}),n(' <text class="account placeholder">{{ profile?.account }}</text> '),u(v,{class:"account placeholder"},{default:c((()=>[d(p(T.value&&"testdev"),1)])),_:1})])),_:1}),u(t,{class:"form-item"},{default:c((()=>[u(v,{class:"label"},{default:c((()=>[d("昵称")])),_:1}),u(m,{class:"input",type:"text",placeholder:"请填写昵称",modelValue:T.value.nickname,"onUpdate:modelValue":a[0]||(a[0]=e=>T.value.nickname=e)},null,8,["modelValue"])])),_:1}),u(t,{class:"form-item"},{default:c((()=>[u(v,{class:"label"},{default:c((()=>[d("性别")])),_:1}),u(H,{onChange:P},{default:c((()=>[u(h,{class:"radio"},{default:c((()=>{var e;return[u(_,{value:"男",color:"#e9cfa8",checked:"男"===(null==(e=T.value)?void 0:e.gender)},null,8,["checked"]),d(" 男 ")]})),_:1}),u(h,{class:"radio"},{default:c((()=>{var e;return[u(_,{value:"女",color:"#e9cfa8",checked:"女"===(null==(e=T.value)?void 0:e.gender)},null,8,["checked"]),d(" 女 ")]})),_:1})])),_:1})])),_:1}),u(t,{class:"form-item"},{default:c((()=>{var e;return[u(v,{class:"label"},{default:c((()=>[d("生日")])),_:1}),u(U,{onChange:B,mode:"date",class:"picker",value:null==(e=T.value)?void 0:e.birthday,start:"1900-01-01",end:f(w)(new Date)},{default:c((()=>{var e;return[(null==(e=T.value)?void 0:e.birthday)?(r(),o(t,{key:0},{default:c((()=>{var e;return[d(p(null==(e=T.value)?void 0:e.birthday),1)]})),_:1})):(r(),o(t,{key:1,class:"placeholder"},{default:c((()=>[d("请选择日期")])),_:1}))]})),_:1},8,["value","end"])]})),_:1}),n(" 只有微信小程序端内置了省市区数据 "),u(t,{class:"form-item"},{default:c((()=>[u(v,{class:"label"},{default:c((()=>[d("职业")])),_:1}),u(m,{class:"input",type:"text",placeholder:"请填写职业",modelValue:T.value.profession,"onUpdate:modelValue":a[1]||(a[1]=e=>T.value.profession=e)},null,8,["modelValue"])])),_:1})])),_:1}),n(" 提交按钮 "),u(j,{onClick:J,class:"form-button"},{default:c((()=>[d("保 存")])),_:1})])),_:1})]})),_:1})}}}),[["__scopeId","data-v-903cda6b"]]);export{T as default};

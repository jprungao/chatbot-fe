import{d as _,o as a,c as i,a as e,t as l,_ as d,F as g,r as f,b as v,u as h,e as C,f as k,g as b,h as s,w as r,A as x,n as y,N as S,C as I,i as N,j as $,p as w,k as B}from"./index-7a272c14.js";const A="/assets/hand-dfb66121.svg",D="/assets/wave-584ed956.svg",T={class:"category-item"},F=["src","alt"],H=_({__name:"categoryitem",props:{icon:String,title:String,description:String},setup(t){return(c,n)=>(a(),i("div",T,[e("img",{src:`/${t.icon}.svg`,alt:t.title},null,8,F),e("h3",null,l(t.title),1),e("p",null,l(t.description),1)]))}});const V=d(H,[["__scopeId","data-v-da8a005c"]]),E=[{icon:"art",title:"Art",description:"Create digital art, from sketches to..."},{icon:"calendar",title:"Booking",description:"Create digital art, from sketches to... "},{icon:"code",title:"Code",description:"Create digital art, from sketches to..."},{icon:"edit",title:"Content",description:"Create digital art, from sketches to..."},{icon:"entertainment",title:"Entertainment",description:"Create digital art, from sketches to..."},{icon:"book",title:"Translator",description:"Create digital art, from sketches to..."},{icon:"health",title:"Health",description:"Create digital art, from sketches to..."},{icon:"music",title:"Music",description:"Create digital art, from sketches to..."}],M={class:"app-categories"},j={class:"app-categories-list"},L=_({__name:"categories",setup(t){return(c,n)=>(a(),i("div",M,[e("div",j,[(a(!0),i(g,null,f(h(E),(o,u)=>(a(),v(V,{key:u,icon:o.icon,title:o.title,description:o.description},null,8,["icon","title","description"]))),128))])]))}});const U=d(L,[["__scopeId","data-v-ba7d5329"]]),p=t=>(w("data-v-fc90b993"),t=t(),B(),t),q={class:"app-categories"},z={class:"tap-to-chat"},G=p(()=>e("img",{class:"hand",src:A,alt:""},null,-1)),J=p(()=>e("h3",null,"Tap To Chat",-1)),K=p(()=>e("img",{src:D,alt:""},null,-1)),O=_({__name:"Dashboard",setup(t){const c=C(),n=k(()=>c.user.profile.name.split(" ")[0]);return(o,u)=>{const m=b("router-link");return a(),i("div",q,[s(h(y),{position:"top-center"}),s(x,null,{default:r(()=>[s(S),s(I,null,{default:r(()=>[s(m,{to:"/chat"},{default:r(()=>[e("div",z,[e("span",null,[N(" Hi, "+l(n.value)+" ",1),G]),J,K])]),_:1})]),_:1})]),_:1}),s(U),s($)])}}});const Q=d(O,[["__scopeId","data-v-fc90b993"]]);export{Q as default};

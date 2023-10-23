import{d as S,u as k,l as p,c as l,a as e,h as u,w as g,A as x,m as w,q as N,v as A,s as m,e as t,t as o,F as B,x as I,o as c,N as V,j as C,L as D,p as M,k as T,i as E,y as F,z as L,B as U,_ as j}from"./index-76a3f994.js";const a=r=>(M("data-v-ba68ff65"),r=r(),T(),r),q=a(()=>e("h1",{class:"header-title"},[E(" Admin "),e("img",{src:F,alt:""})],-1)),z=a(()=>e("div",{class:"app-user-profile"},[e("img",{src:L,alt:""})],-1)),G={class:"main"},H=["onSubmit"],R={class:"app-input"},J=a(()=>e("button",{class:"cta",type:"submit"},[e("img",{src:U})],-1)),K={key:0,class:"loading-block"},O={key:1,class:"scenario_generated"},P={class:"block"},Q=a(()=>e("label",null,"Name:",-1)),W={class:"block"},X=a(()=>e("label",null,"Description:",-1)),Y={class:"block"},Z=a(()=>e("label",null,"Scenario:",-1)),$={class:"block"},ee=a(()=>e("label",null,"Best Response:",-1)),se={class:"block"},ae=a(()=>e("label",null,"Explanation:",-1)),oe={class:"block"},te=a(()=>e("label",null,"Difficulty:",-1)),ne={class:"block"},ie=a(()=>e("label",null,"Importance:",-1)),le=["disabled"],ce={key:2,class:"empty_placeholder"},re={key:3,class:"empty_placeholder"},de=S({__name:"Admin",setup(r){const s=k(),v=p(""),n=p(!1),d=p(!1),i=p("");async function f(){try{i.value="",n.value=!0,await s.updateScenario(v.value)}catch(_){i.value=_.response.data.detail}finally{n.value=!1}}async function b(){try{i.value="",n.value=!0,d.value=!0,await I.post("/api/v1/scenarios/create_scenario",{name:s.scenario.name,description:s.scenario.scenario,scenario_description:s.scenario.description,best_response:s.scenario.best_response,response_explanation:s.scenario.explanation,difficulty:s.scenario.difficulty,importance:s.scenario.importance})}catch(_){i.value=_.response.data.detail}finally{n.value=!1,d.value=!1}}return(_,h)=>(c(),l(B,null,[e("div",null,[u(x,null,{default:g(()=>[u(V),q,z]),_:1}),u(C)]),e("div",G,[e("form",{class:"wrapper",onSubmit:w(f,["prevent"])},[e("div",R,[N(e("input",{"onUpdate:modelValue":h[0]||(h[0]=y=>v.value=y),type:"text",placeholder:"Type in scenario theme.",ref:"message-box"},null,512),[[A,v.value]]),J])],40,H),n.value?(c(),l("div",K,[u(D)])):m("",!0),t(s).scenario.name&&!n.value?(c(),l("div",O,[e("div",P,[Q,e("p",null,o(t(s).scenario.name),1)]),e("div",W,[X,e("p",null,o(t(s).scenario.description),1)]),e("div",Y,[Z,e("p",null,o(t(s).scenario.scenario),1)]),e("div",$,[ee,e("p",null,o(t(s).scenario.best_response),1)]),e("div",se,[ae,e("p",null,o(t(s).scenario.explanation),1)]),e("div",oe,[te,e("p",null,o(t(s).scenario.difficulty),1)]),e("div",ne,[ie,e("p",null,o(t(s).scenario.importance),1)]),e("button",{class:"cta",type:"button",onClick:b,disabled:d.value},"Save Scenario",8,le)])):(c(),l("span",ce,o(d.value?"Saving Scenario...":"Generated Scenario will be shown here..."),1)),i.value?(c(),l("span",re," ⚠️ "+o(i.value),1)):m("",!0)])],64))}});const pe=j(de,[["__scopeId","data-v-ba68ff65"]]);export{pe as default};

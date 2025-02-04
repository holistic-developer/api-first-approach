import{d,i as p,a as _,u,b as h,c as m,e as f,f as r,g as t,t as o,h as n,F as g,r as v,n as x,j as y,o as l,k as b,l as N,m as k,p as P,q as j,_ as w}from"./index-127c7cd8.js";import{N as S}from"./NoteDisplay-2210b228.js";const V={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){p(_),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>y.map(a=>{var s;return(s=a.meta)==null?void 0:s.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,s)=>(l(),r("div",{id:"page-root",style:x(n(j))},[t("div",V,[t("div",L,[t("h1",T,o(n(m).title),1),t("div",z,o(new Date().toLocaleString()),1)]),(l(!0),r(g,null,v(n(i),(e,c)=>(l(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,o(e==null?void 0:e.no)+"/"+o(n(b)),1),N(" "+o(e==null?void 0:e.title)+" ",1),s[0]||(s[0]=t("div",{class:"flex-auto"},null,-1))])]),k(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<n(i).length-1?(l(),r("hr",H)):P("v-if",!0)]))),128))])],4))}}),E=w(F,[["__file","/Users/andreas.taranetz/projects/api-first-approach/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};

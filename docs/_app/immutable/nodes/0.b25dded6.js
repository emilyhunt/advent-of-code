import{s as B,j as F,u as G,k as I,l as J,c as L}from"../chunks/scheduler.fd3686c2.js";import{S as K,i as Q,s as y,e as C,t as M,y as U,d as h,f as b,c as A,a as H,l as P,b as R,z as N,n as d,g as O,h as u,p as V,q as W}from"../chunks/index.a4ac66b3.js";import{p as X}from"../chunks/stores.da984a35.js";import{p as Y}from"../chunks/stores.3367bda2.js";const Z=!0,le=Object.freeze(Object.defineProperty({__proto__:null,prerender:Z},Symbol.toStringTag,{value:"Module"}));function $(o){let m,n,t,l,v="Emily's Advent of Code",p,s,E="[home]",g,a,x,S,c,j,z,k,f;document.title=m=o[0];const q=o[6].default,r=F(q,o,o[5],null);return{c(){n=y(),t=C("header"),l=C("h1"),l.textContent=v,p=y(),s=C("a"),s.textContent=E,g=y(),a=C("a"),x=M("[repo]"),S=y(),c=C("a"),j=M("[page source code]"),z=y(),k=y(),r&&r.c(),this.h()},l(e){U("svelte-1uo06u1",document.head).forEach(h),n=b(e),t=A(e,"HEADER",{});var _=H(t);l=A(_,"H1",{style:!0,"data-svelte-h":!0}),P(l)!=="svelte-11nbxet"&&(l.textContent=v),p=b(_),s=A(_,"A",{href:!0,"data-svelte-h":!0}),P(s)!=="svelte-18rze8u"&&(s.textContent=E),g=b(_),a=A(_,"A",{rel:!0,target:!0,href:!0});var w=H(a);x=R(w,"[repo]"),w.forEach(h),S=b(_),c=A(_,"A",{rel:!0,target:!0,href:!0});var D=H(c);j=R(D,"[page source code]"),D.forEach(h),z=b(_),_.forEach(h),k=b(e),r&&r.l(e),this.h()},h(){N(l,"color","#e3e3e3"),N(l,"margin-bottom","0.2em"),N(l,"margin-top","0.2em"),d(s,"href","/"),d(a,"rel","external"),d(a,"target","_blank"),d(a,"href",T),d(c,"rel","external"),d(c,"target","_blank"),d(c,"href",o[2])},m(e,i){O(e,n,i),O(e,t,i),u(t,l),u(t,p),u(t,s),u(t,g),u(t,a),u(a,x),u(t,S),u(t,c),u(c,j),u(t,z),O(e,k,i),r&&r.m(e,i),f=!0},p(e,[i]){(!f||i&1)&&m!==(m=e[0])&&(document.title=m),(!f||i&4)&&d(c,"href",e[2]),r&&r.p&&(!f||i&32)&&G(r,q,e,e[5],f?J(q,e[5],i,null):I(e[5]),null)},i(e){f||(V(r,e),f=!0)},o(e){W(r,e),f=!1},d(e){e&&(h(n),h(t),h(k)),r&&r.d(e)}}}const T="https://github.com/emilyhunt/advent-of-code";function ee(o,m,n){let t,l,v,p,s;L(o,Y,a=>n(3,p=a)),L(o,X,a=>n(4,s=a));let{$$slots:E={},$$scope:g}=m;return o.$$set=a=>{"$$scope"in a&&n(5,g=a.$$scope)},o.$$.update=()=>{o.$$.dirty&16&&n(2,t=(T+"/tree/main/src/routes"+s.url.pathname).replaceAll("//","/").slice(0,-1)),o.$$.dirty&16&&n(1,l=("https://aoc.emilydoesastro.com/"+s.url.pathname).replaceAll("//","/")),o.$$.dirty&8&&n(0,v=p==="none"?"Emily's Advent of Code":`${p} - Emily's Advent of Code`)},[v,l,t,p,s,g,E]}class se extends K{constructor(m){super(),Q(this,m,ee,$,B,{})}}export{se as component,le as universal};
import{_ as k}from"../../../chunks/preload-helper-b21cceae.js";import{S as y,i as I,s as L,k as d,q as h,a as x,l as g,m as v,r as m,h as f,c as A,b as u,D as _,B as P,I as $,H as q,n as D}from"../../../chunks/index-c408c289.js";import{g as O}from"../../../chunks/pages-36184dd3.js";import{p as S}from"../../../chunks/stores-4b732aa2.js";function b(p,a,s){const r=p.slice();return r[4]=a[s],r}function E(p){let a,s,r,n=p[4].slice(6).replace("/"," ")+"",i,l,e;return{c(){a=d("li"),s=d("a"),r=h("["),i=h(n),l=h("]"),e=x(),this.h()},l(o){a=g(o,"LI",{});var t=v(a);s=g(t,"A",{href:!0});var c=v(s);r=m(c,"["),i=m(c,n),l=m(c,"]"),c.forEach(f),e=A(t),t.forEach(f),this.h()},h(){D(s,"href",p[4])},m(o,t){u(o,a,t),_(a,s),_(s,r),_(s,i),_(s,l),_(a,e)},p:P,d(o){o&&f(a)}}}function j(p){let a,s,r,n,i=p[0],l=[];for(let e=0;e<i.length;e+=1)l[e]=E(b(p,i,e));return{c(){a=d("p"),s=h("All attempted solutions for 2022."),r=x(),n=d("ul");for(let e=0;e<l.length;e+=1)l[e].c()},l(e){a=g(e,"P",{});var o=v(a);s=m(o,"All attempted solutions for 2022."),o.forEach(f),r=A(e),n=g(e,"UL",{});var t=v(n);for(let c=0;c<l.length;c+=1)l[c].l(t);t.forEach(f)},m(e,o){u(e,a,o),_(a,s),u(e,r,o),u(e,n,o);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(e,[o]){if(o&1){i=e[0];let t;for(t=0;t<i.length;t+=1){const c=b(e,i,t);l[t]?l[t].p(c,o):(l[t]=E(c),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},i:P,o:P,d(e){e&&f(a),e&&f(r),e&&f(n),$(l,e)}}}function B(p,a,s){let r;q(p,S,e=>s(1,r=e));const n=r.url.pathname+"/";return[O(n,Object.assign({"./day/01/+page.svelte":()=>k(()=>import("./day/01/_page.svelte-29861da8.js"),["./day/01/_page.svelte-29861da8.js","../../../chunks/index-c408c289.js"],import.meta.url)}))]}class U extends y{constructor(a){super(),I(this,a,B,j,L,{})}}export{U as default};

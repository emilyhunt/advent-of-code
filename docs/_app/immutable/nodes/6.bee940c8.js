import{_ as S}from"../chunks/preload-helper.a4192956.js";import{s as T,a as j,n as w,c as N,b as D}from"../chunks/scheduler.fd3686c2.js";import{S as G,i as R,e as v,s as y,c as b,l as I,f as C,a as A,d as _,n as P,g,u as U,t as k,b as E,h as x}from"../chunks/index.a4ac66b3.js";import{e as O}from"../chunks/each.e59479a4.js";import{g as V,p as q}from"../chunks/stores.3367bda2.js";import{p as W}from"../chunks/stores.683b26ab.js";function F(p,l,s){const i=p.slice();return i[5]=l[s],i}function M(p){let l,s,i,r=p[5].slice(6).replace("/"," ")+"",f,u,n;return{c(){l=v("li"),s=v("a"),i=k("["),f=k(r),u=k("]"),n=y(),this.h()},l(c){l=b(c,"LI",{});var m=A(l);s=b(m,"A",{href:!0});var h=A(s);i=E(h,"["),f=E(h,r),u=E(h,"]"),h.forEach(_),n=C(m),m.forEach(_),this.h()},h(){P(s,"href",p[5])},m(c,m){g(c,l,m),x(l,s),x(s,i),x(s,f),x(s,u),x(l,n)},p:w,d(c){c&&_(l)}}}function X(p){let l,s="Oh no! The sleigh keys have gone overboard. Can we save Christmas by recovering the sleigh keys with a submarine?!?",i,r,f,u,n,c="All attempted solutions for 2021 are below.",m,h,d=O(p[0]),a=[];for(let e=0;e<d.length;e+=1)a[e]=M(F(p,d,e));return{c(){l=v("p"),l.textContent=s,i=y(),r=v("img"),u=y(),n=v("p"),n.textContent=c,m=y(),h=v("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){l=b(e,"P",{"data-svelte-h":!0}),I(l)!=="svelte-645cry"&&(l.textContent=s),i=C(e),r=b(e,"IMG",{src:!0,alt:!0,height:!0}),u=C(e),n=b(e,"P",{"data-svelte-h":!0}),I(n)!=="svelte-ne1tbi"&&(n.textContent=c),m=C(e),h=b(e,"UL",{});var o=A(h);for(let t=0;t<a.length;t+=1)a[t].l(o);o.forEach(_),this.h()},h(){j(r.src,f="https://i.giphy.com/media/dNhCpFWksNtbMLsFpX/giphy.webp")||P(r,"src",f),P(r,"alt","A submarine!"),P(r,"height","200")},m(e,o){g(e,l,o),g(e,i,o),g(e,r,o),g(e,u,o),g(e,n,o),g(e,m,o),g(e,h,o);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(h,null)},p(e,[o]){if(o&1){d=O(e[0]);let t;for(t=0;t<d.length;t+=1){const L=F(e,d,t);a[t]?a[t].p(L,o):(a[t]=M(L),a[t].c(),a[t].m(h,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=d.length}},i:w,o:w,d(e){e&&(_(l),_(i),_(r),_(u),_(n),_(m),_(h)),U(a,e)}}}function z(p,l,s){let i,r;N(p,q,c=>s(1,i=c)),N(p,W,c=>s(2,r=c));const f=r.url.pathname+"/",n=V(f,Object.assign({"./day/01/+page.svelte":()=>S(()=>import("../chunks/_page.44ccb6f6.js"),["../chunks/_page.44ccb6f6.js","../chunks/scheduler.fd3686c2.js","../chunks/index.a4ac66b3.js","../chunks/stores.3367bda2.js","../chunks/index.fc7d12dd.js","../chunks/preload-helper.a4192956.js","../chunks/Runner.95f03202.js","../chunks/GetUserData.9d478125.js","../chunks/each.e59479a4.js","../assets/GetUserData.968c560a.css"],import.meta.url)}));return D(q,i="2021",i),[n]}class Z extends G{constructor(l){super(),R(this,l,z,X,T,{})}}export{Z as component};
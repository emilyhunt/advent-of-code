import{J as l,B as i}from"./index-69c26055.js";import{_ as t}from"./preload-helper-b21cceae.js";const s=(a,_=0)=>{let r=3735928559^_,o=1103547991^_;for(let e=0,u;e<a.length;e++)u=a.charCodeAt(e),r=Math.imul(r^u,2654435761),o=Math.imul(o^u,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&o)+(r>>>0)},m=(a,_)=>{const r=a[_];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+_)))})},p=(a,_)=>{const r=a.replace(/(.*?)\/src\/routes\//,"/").replace(/(.*?)\/immutable\/pages\//,"/").replace(/(.*?)\/var\/task\//,"/").replace(/\/([^/])*.svelte.*/,"/");return Object.keys(_).map(e=>e.replace("../routes","")).map(e=>e.replace(/^(.\/)/,r)).filter(e=>!/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(e)).filter(e=>!/\[.*\]/.test(e)).map(e=>e.replace(/(\/\+page)?(@.*)?.svelte/,"")).map(e=>e||"/").sort()};async function d(a,_){let{myMetadata:r}=await m(Object.assign({"../routes/2021/day/01/+page.svelte":()=>t(()=>import("../components/pages/2021/day/01/_page.svelte-6e4f8911.js"),["../components/pages/2021/day/01/_page.svelte-6e4f8911.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>t(()=>import("../components/pages/2022/day/01/_page.svelte-0e5963ef.js"),["../components/pages/2022/day/01/_page.svelte-0e5963ef.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>t(()=>import("../components/pages/2022/day/02/_page.svelte-a3fd3772.js"),["../components/pages/2022/day/02/_page.svelte-a3fd3772.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>t(()=>import("../components/pages/2022/day/03/_page.svelte-0d5ad462.js"),["../components/pages/2022/day/03/_page.svelte-0d5ad462.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>t(()=>import("../components/pages/2022/day/04/_page.svelte-de7860e9.js"),["../components/pages/2022/day/04/_page.svelte-de7860e9.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>t(()=>import("../components/pages/2022/day/05/_page.svelte-1743cd0d.js"),["../components/pages/2022/day/05/_page.svelte-1743cd0d.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>t(()=>import("../components/pages/2022/day/06/_page.svelte-8fb74607.js"),["../components/pages/2022/day/06/_page.svelte-8fb74607.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>t(()=>import("../components/pages/2022/day/07/_page.svelte-b4dc8352.js"),["../components/pages/2022/day/07/_page.svelte-b4dc8352.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>t(()=>import("../components/pages/2022/day/08/_page.svelte-0b0687cd.js"),["../components/pages/2022/day/08/_page.svelte-0b0687cd.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>t(()=>import("../components/pages/2022/day/09/_page.svelte-b0b0f0e8.js"),["../components/pages/2022/day/09/_page.svelte-b0b0f0e8.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>t(()=>import("../components/pages/2022/day/10/_page.svelte-3a6d31fb.js"),["../components/pages/2022/day/10/_page.svelte-3a6d31fb.js","./index-69c26055.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/11/+page.svelte":()=>t(()=>import("../components/pages/2022/day/11/_page.svelte-dbc3a323.js"),["../components/pages/2022/day/11/_page.svelte-dbc3a323.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/12/+page.svelte":()=>t(()=>import("../components/pages/2022/day/12/_page.svelte-6c292b13.js"),["../components/pages/2022/day/12/_page.svelte-6c292b13.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/template old/+page.svelte":()=>t(()=>import("../components/pages/2022/day/template old/_page.svelte-b19427e6.js"),["../components/pages/2022/day/template old/_page.svelte-b19427e6.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/template/+page.svelte":()=>t(()=>import("../components/pages/2022/day/template/_page.svelte-3720d873.js"),["../components/pages/2022/day/template/_page.svelte-3720d873.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url)}),`../routes/20${a}/day/${_}/+page.svelte`);return r}async function v(){const _=p("",Object.assign({"../routes/2021/day/01/+page.svelte":()=>t(()=>import("../components/pages/2021/day/01/_page.svelte-6e4f8911.js"),["../components/pages/2021/day/01/_page.svelte-6e4f8911.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>t(()=>import("../components/pages/2022/day/01/_page.svelte-0e5963ef.js"),["../components/pages/2022/day/01/_page.svelte-0e5963ef.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>t(()=>import("../components/pages/2022/day/02/_page.svelte-a3fd3772.js"),["../components/pages/2022/day/02/_page.svelte-a3fd3772.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>t(()=>import("../components/pages/2022/day/03/_page.svelte-0d5ad462.js"),["../components/pages/2022/day/03/_page.svelte-0d5ad462.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>t(()=>import("../components/pages/2022/day/04/_page.svelte-de7860e9.js"),["../components/pages/2022/day/04/_page.svelte-de7860e9.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>t(()=>import("../components/pages/2022/day/05/_page.svelte-1743cd0d.js"),["../components/pages/2022/day/05/_page.svelte-1743cd0d.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>t(()=>import("../components/pages/2022/day/06/_page.svelte-8fb74607.js"),["../components/pages/2022/day/06/_page.svelte-8fb74607.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>t(()=>import("../components/pages/2022/day/07/_page.svelte-b4dc8352.js"),["../components/pages/2022/day/07/_page.svelte-b4dc8352.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>t(()=>import("../components/pages/2022/day/08/_page.svelte-0b0687cd.js"),["../components/pages/2022/day/08/_page.svelte-0b0687cd.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>t(()=>import("../components/pages/2022/day/09/_page.svelte-b0b0f0e8.js"),["../components/pages/2022/day/09/_page.svelte-b0b0f0e8.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>t(()=>import("../components/pages/2022/day/10/_page.svelte-3a6d31fb.js"),["../components/pages/2022/day/10/_page.svelte-3a6d31fb.js","./index-69c26055.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/11/+page.svelte":()=>t(()=>import("../components/pages/2022/day/11/_page.svelte-dbc3a323.js"),["../components/pages/2022/day/11/_page.svelte-dbc3a323.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/12/+page.svelte":()=>t(()=>import("../components/pages/2022/day/12/_page.svelte-6c292b13.js"),["../components/pages/2022/day/12/_page.svelte-6c292b13.js","./index-69c26055.js","./Runner-64d26c1d.js","./GetUserData-cfd3ee79.js","../assets/GetUserData-8f691bc8.css"],import.meta.url)}));let r=await Promise.all(_.map(e=>d(e.slice(3,5),e.slice(-2)))),o={};for(let e of r)e.href=`/${e.year}/day/${e.day}`,e.year in o||(o[e.year]={}),o[e.year][e.day]=e;return o}let D=i("none"),n=i(Object());async function I(){{console.log("Initialising metadata...");let a=await v();n.set(a)}}let O=i(""),T=i(""),E=i(""),A=i(""),y=l(E,a=>s(a)),c=i(""),L=i(!1),R=l([y,c],([a,_])=>a!==_);export{T as a,A as b,O as c,E as d,c as e,p as g,y as h,I as i,n as m,D as p,L as r,R as u};

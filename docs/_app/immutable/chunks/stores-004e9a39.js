import{J as m,B as i}from"./index-69c26055.js";import{_ as e}from"./preload-helper-b21cceae.js";const l=(a,_=0)=>{let r=3735928559^_,o=1103547991^_;for(let t=0,u;t<a.length;t++)u=a.charCodeAt(t),r=Math.imul(r^u,2654435761),o=Math.imul(o^u,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&o)+(r>>>0)},p=(a,_)=>{const r=a[_];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+_)))})},s=(a,_)=>{const r=a.replace(/(.*?)\/src\/routes\//,"/").replace(/(.*?)\/immutable\/pages\//,"/").replace(/(.*?)\/var\/task\//,"/").replace(/\/([^/])*.svelte.*/,"/");return Object.keys(_).map(t=>t.replace("../routes","")).map(t=>t.replace(/^(.\/)/,r)).filter(t=>!/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(t)).filter(t=>!/\[.*\]/.test(t)).map(t=>t.replace(/(\/\+page)?(@.*)?.svelte/,"")).map(t=>t||"/").sort()};async function d(a,_){let{myMetadata:r}=await p(Object.assign({"../routes/2021/day/01/+page.svelte":()=>e(()=>import("../components/pages/2021/day/01/_page.svelte-a7a70397.js"),["../components/pages/2021/day/01/_page.svelte-a7a70397.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>e(()=>import("../components/pages/2022/day/01/_page.svelte-e9d6efd4.js"),["../components/pages/2022/day/01/_page.svelte-e9d6efd4.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>e(()=>import("../components/pages/2022/day/02/_page.svelte-aa5ea093.js"),["../components/pages/2022/day/02/_page.svelte-aa5ea093.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>e(()=>import("../components/pages/2022/day/03/_page.svelte-698dbba0.js"),["../components/pages/2022/day/03/_page.svelte-698dbba0.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>e(()=>import("../components/pages/2022/day/04/_page.svelte-5bc2c444.js"),["../components/pages/2022/day/04/_page.svelte-5bc2c444.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>e(()=>import("../components/pages/2022/day/05/_page.svelte-ec1ff6c0.js"),["../components/pages/2022/day/05/_page.svelte-ec1ff6c0.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>e(()=>import("../components/pages/2022/day/06/_page.svelte-003601ac.js"),["../components/pages/2022/day/06/_page.svelte-003601ac.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>e(()=>import("../components/pages/2022/day/07/_page.svelte-ea0ef057.js"),["../components/pages/2022/day/07/_page.svelte-ea0ef057.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>e(()=>import("../components/pages/2022/day/08/_page.svelte-daa18c31.js"),["../components/pages/2022/day/08/_page.svelte-daa18c31.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>e(()=>import("../components/pages/2022/day/09/_page.svelte-3f96c04b.js"),["../components/pages/2022/day/09/_page.svelte-3f96c04b.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>e(()=>import("../components/pages/2022/day/10/_page.svelte-d88968ff.js"),["../components/pages/2022/day/10/_page.svelte-d88968ff.js","./index-69c26055.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/11/+page.svelte":()=>e(()=>import("../components/pages/2022/day/11/_page.svelte-d7eee89c.js"),["../components/pages/2022/day/11/_page.svelte-d7eee89c.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/12/+page.svelte":()=>e(()=>import("../components/pages/2022/day/12/_page.svelte-555955d1.js"),["../components/pages/2022/day/12/_page.svelte-555955d1.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/13/+page.svelte":()=>e(()=>import("../components/pages/2022/day/13/_page.svelte-79cafbc5.js"),["../components/pages/2022/day/13/_page.svelte-79cafbc5.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/14/+page.svelte":()=>e(()=>import("../components/pages/2022/day/14/_page.svelte-a42e1a3e.js"),["../components/pages/2022/day/14/_page.svelte-a42e1a3e.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/15/+page.svelte":()=>e(()=>import("../components/pages/2022/day/15/_page.svelte-92285263.js"),["../components/pages/2022/day/15/_page.svelte-92285263.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/16/+page.svelte":()=>e(()=>import("../components/pages/2022/day/16/_page.svelte-433a0c7f.js"),["../components/pages/2022/day/16/_page.svelte-433a0c7f.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/17/+page.svelte":()=>e(()=>import("../components/pages/2022/day/17/_page.svelte-2bfd3c27.js"),["../components/pages/2022/day/17/_page.svelte-2bfd3c27.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/18/+page.svelte":()=>e(()=>import("../components/pages/2022/day/18/_page.svelte-2d89c252.js"),["../components/pages/2022/day/18/_page.svelte-2d89c252.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/template old/+page.svelte":()=>e(()=>import("../components/pages/2022/day/template old/_page.svelte-8eb6666a.js"),["../components/pages/2022/day/template old/_page.svelte-8eb6666a.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/template/+page.svelte":()=>e(()=>import("../components/pages/2022/day/template/_page.svelte-af094412.js"),["../components/pages/2022/day/template/_page.svelte-af094412.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url)}),`../routes/20${a}/day/${_}/+page.svelte`);return r}async function v(){const _=s("",Object.assign({"../routes/2021/day/01/+page.svelte":()=>e(()=>import("../components/pages/2021/day/01/_page.svelte-a7a70397.js"),["../components/pages/2021/day/01/_page.svelte-a7a70397.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>e(()=>import("../components/pages/2022/day/01/_page.svelte-e9d6efd4.js"),["../components/pages/2022/day/01/_page.svelte-e9d6efd4.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>e(()=>import("../components/pages/2022/day/02/_page.svelte-aa5ea093.js"),["../components/pages/2022/day/02/_page.svelte-aa5ea093.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>e(()=>import("../components/pages/2022/day/03/_page.svelte-698dbba0.js"),["../components/pages/2022/day/03/_page.svelte-698dbba0.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>e(()=>import("../components/pages/2022/day/04/_page.svelte-5bc2c444.js"),["../components/pages/2022/day/04/_page.svelte-5bc2c444.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>e(()=>import("../components/pages/2022/day/05/_page.svelte-ec1ff6c0.js"),["../components/pages/2022/day/05/_page.svelte-ec1ff6c0.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>e(()=>import("../components/pages/2022/day/06/_page.svelte-003601ac.js"),["../components/pages/2022/day/06/_page.svelte-003601ac.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>e(()=>import("../components/pages/2022/day/07/_page.svelte-ea0ef057.js"),["../components/pages/2022/day/07/_page.svelte-ea0ef057.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>e(()=>import("../components/pages/2022/day/08/_page.svelte-daa18c31.js"),["../components/pages/2022/day/08/_page.svelte-daa18c31.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>e(()=>import("../components/pages/2022/day/09/_page.svelte-3f96c04b.js"),["../components/pages/2022/day/09/_page.svelte-3f96c04b.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>e(()=>import("../components/pages/2022/day/10/_page.svelte-d88968ff.js"),["../components/pages/2022/day/10/_page.svelte-d88968ff.js","./index-69c26055.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/11/+page.svelte":()=>e(()=>import("../components/pages/2022/day/11/_page.svelte-d7eee89c.js"),["../components/pages/2022/day/11/_page.svelte-d7eee89c.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/12/+page.svelte":()=>e(()=>import("../components/pages/2022/day/12/_page.svelte-555955d1.js"),["../components/pages/2022/day/12/_page.svelte-555955d1.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/13/+page.svelte":()=>e(()=>import("../components/pages/2022/day/13/_page.svelte-79cafbc5.js"),["../components/pages/2022/day/13/_page.svelte-79cafbc5.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/14/+page.svelte":()=>e(()=>import("../components/pages/2022/day/14/_page.svelte-a42e1a3e.js"),["../components/pages/2022/day/14/_page.svelte-a42e1a3e.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/15/+page.svelte":()=>e(()=>import("../components/pages/2022/day/15/_page.svelte-92285263.js"),["../components/pages/2022/day/15/_page.svelte-92285263.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/16/+page.svelte":()=>e(()=>import("../components/pages/2022/day/16/_page.svelte-433a0c7f.js"),["../components/pages/2022/day/16/_page.svelte-433a0c7f.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/17/+page.svelte":()=>e(()=>import("../components/pages/2022/day/17/_page.svelte-2bfd3c27.js"),["../components/pages/2022/day/17/_page.svelte-2bfd3c27.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url),"../routes/2022/day/18/+page.svelte":()=>e(()=>import("../components/pages/2022/day/18/_page.svelte-2d89c252.js"),["../components/pages/2022/day/18/_page.svelte-2d89c252.js","./index-69c26055.js","./Runner-ad7d2e58.js","./GetUserData-3dab24b8.js","../assets/GetUserData-8f691bc8.css"],import.meta.url)}));let r=await Promise.all(_.map(t=>d(t.slice(3,5),t.slice(-2)))),o={};for(let t of r)t.href=`/${t.year}/day/${t.day}`,t.year in o||(o[t.year]={}),o[t.year][t.day]=t;return o}let c=i("none"),E=i(Object());async function I(){{console.log("Initialising metadata...");let a=await v();E.set(a)}}let O=i(""),T=i(""),n=i(""),A=i(""),y=m(n,a=>l(a)),g=i(""),L=i(!1),R=m([y,g],([a,_])=>a!==_);export{T as a,A as b,O as c,n as d,g as e,s as g,y as h,I as i,E as m,c as p,L as r,R as u};
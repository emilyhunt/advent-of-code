import{J as m,B as i}from"./index-69c26055.js";import{_ as e}from"./preload-helper-b21cceae.js";const p=(a,o=0)=>{let r=3735928559^o,_=1103547991^o;for(let t=0,u;t<a.length;t++)u=a.charCodeAt(t),r=Math.imul(r^u,2654435761),_=Math.imul(_^u,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(_^_>>>13,3266489909),_=Math.imul(_^_>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&_)+(r>>>0)},l=(a,o)=>{const r=a[o];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((_,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+o)))})},s=(a,o)=>{const r=a.replace(/(.*?)\/src\/routes\//,"/").replace(/(.*?)\/immutable\/pages\//,"/").replace(/(.*?)\/var\/task\//,"/").replace(/\/([^/])*.svelte.*/,"/");return Object.keys(o).map(t=>t.replace("../routes","")).map(t=>t.replace(/^(.\/)/,r)).filter(t=>!/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(t)).filter(t=>!/\[.*\]/.test(t)).map(t=>t.replace(/(\/\+page)?(@.*)?.svelte/,"")).map(t=>t||"/").sort()};async function d(a,o){let{myMetadata:r}=await l(Object.assign({"../routes/2021/day/01/+page.svelte":()=>e(()=>import("../components/pages/2021/day/01/_page.svelte-57050377.js"),["../components/pages/2021/day/01/_page.svelte-57050377.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>e(()=>import("../components/pages/2022/day/01/_page.svelte-dbbf09d2.js"),["../components/pages/2022/day/01/_page.svelte-dbbf09d2.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>e(()=>import("../components/pages/2022/day/02/_page.svelte-122291df.js"),["../components/pages/2022/day/02/_page.svelte-122291df.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>e(()=>import("../components/pages/2022/day/03/_page.svelte-930907f7.js"),["../components/pages/2022/day/03/_page.svelte-930907f7.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>e(()=>import("../components/pages/2022/day/04/_page.svelte-c65e481f.js"),["../components/pages/2022/day/04/_page.svelte-c65e481f.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>e(()=>import("../components/pages/2022/day/05/_page.svelte-0dffd577.js"),["../components/pages/2022/day/05/_page.svelte-0dffd577.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>e(()=>import("../components/pages/2022/day/06/_page.svelte-cfab6005.js"),["../components/pages/2022/day/06/_page.svelte-cfab6005.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>e(()=>import("../components/pages/2022/day/07/_page.svelte-b07123c6.js"),["../components/pages/2022/day/07/_page.svelte-b07123c6.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>e(()=>import("../components/pages/2022/day/08/_page.svelte-fde6a769.js"),["../components/pages/2022/day/08/_page.svelte-fde6a769.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>e(()=>import("../components/pages/2022/day/09/_page.svelte-3a3ca515.js"),["../components/pages/2022/day/09/_page.svelte-3a3ca515.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>e(()=>import("../components/pages/2022/day/10/_page.svelte-b923fd2c.js"),["../components/pages/2022/day/10/_page.svelte-b923fd2c.js","./index-69c26055.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/11/+page.svelte":()=>e(()=>import("../components/pages/2022/day/11/_page.svelte-1119c00b.js"),["../components/pages/2022/day/11/_page.svelte-1119c00b.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/12/+page.svelte":()=>e(()=>import("../components/pages/2022/day/12/_page.svelte-1549b2eb.js"),["../components/pages/2022/day/12/_page.svelte-1549b2eb.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/13/+page.svelte":()=>e(()=>import("../components/pages/2022/day/13/_page.svelte-d1e07d60.js"),["../components/pages/2022/day/13/_page.svelte-d1e07d60.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/14/+page.svelte":()=>e(()=>import("../components/pages/2022/day/14/_page.svelte-dcf0acfe.js"),["../components/pages/2022/day/14/_page.svelte-dcf0acfe.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/15/+page.svelte":()=>e(()=>import("../components/pages/2022/day/15/_page.svelte-36c30f0c.js"),["../components/pages/2022/day/15/_page.svelte-36c30f0c.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/16/+page.svelte":()=>e(()=>import("../components/pages/2022/day/16/_page.svelte-cd5b6669.js"),["../components/pages/2022/day/16/_page.svelte-cd5b6669.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/17/+page.svelte":()=>e(()=>import("../components/pages/2022/day/17/_page.svelte-a38ad243.js"),["../components/pages/2022/day/17/_page.svelte-a38ad243.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/18/+page.svelte":()=>e(()=>import("../components/pages/2022/day/18/_page.svelte-71beeccf.js"),["../components/pages/2022/day/18/_page.svelte-71beeccf.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/19/+page.svelte":()=>e(()=>import("../components/pages/2022/day/19/_page.svelte-b8d1bca5.js"),["../components/pages/2022/day/19/_page.svelte-b8d1bca5.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/20/+page.svelte":()=>e(()=>import("../components/pages/2022/day/20/_page.svelte-362046ce.js"),["../components/pages/2022/day/20/_page.svelte-362046ce.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/21/+page.svelte":()=>e(()=>import("../components/pages/2022/day/21/_page.svelte-77c7001c.js"),["../components/pages/2022/day/21/_page.svelte-77c7001c.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/22/+page.svelte":()=>e(()=>import("../components/pages/2022/day/22/_page.svelte-4651e2e6.js"),["../components/pages/2022/day/22/_page.svelte-4651e2e6.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/23/+page.svelte":()=>e(()=>import("../components/pages/2022/day/23/_page.svelte-8bcf68b0.js"),["../components/pages/2022/day/23/_page.svelte-8bcf68b0.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/24/+page.svelte":()=>e(()=>import("../components/pages/2022/day/24/_page.svelte-90fb2583.js"),["../components/pages/2022/day/24/_page.svelte-90fb2583.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/25/+page.svelte":()=>e(()=>import("../components/pages/2022/day/25/_page.svelte-74e4d79c.js"),["../components/pages/2022/day/25/_page.svelte-74e4d79c.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/template old/+page.svelte":()=>e(()=>import("../components/pages/2022/day/template old/_page.svelte-4a95a22b.js"),["../components/pages/2022/day/template old/_page.svelte-4a95a22b.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/template/+page.svelte":()=>e(()=>import("../components/pages/2022/day/template/_page.svelte-fb5b4eeb.js"),["../components/pages/2022/day/template/_page.svelte-fb5b4eeb.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url)}),`../routes/20${a}/day/${o}/+page.svelte`);return r}async function v(){const o=s("",Object.assign({"../routes/2021/day/01/+page.svelte":()=>e(()=>import("../components/pages/2021/day/01/_page.svelte-57050377.js"),["../components/pages/2021/day/01/_page.svelte-57050377.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/01/+page.svelte":()=>e(()=>import("../components/pages/2022/day/01/_page.svelte-dbbf09d2.js"),["../components/pages/2022/day/01/_page.svelte-dbbf09d2.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/02/+page.svelte":()=>e(()=>import("../components/pages/2022/day/02/_page.svelte-122291df.js"),["../components/pages/2022/day/02/_page.svelte-122291df.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/03/+page.svelte":()=>e(()=>import("../components/pages/2022/day/03/_page.svelte-930907f7.js"),["../components/pages/2022/day/03/_page.svelte-930907f7.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/04/+page.svelte":()=>e(()=>import("../components/pages/2022/day/04/_page.svelte-c65e481f.js"),["../components/pages/2022/day/04/_page.svelte-c65e481f.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/05/+page.svelte":()=>e(()=>import("../components/pages/2022/day/05/_page.svelte-0dffd577.js"),["../components/pages/2022/day/05/_page.svelte-0dffd577.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/06/+page.svelte":()=>e(()=>import("../components/pages/2022/day/06/_page.svelte-cfab6005.js"),["../components/pages/2022/day/06/_page.svelte-cfab6005.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/07/+page.svelte":()=>e(()=>import("../components/pages/2022/day/07/_page.svelte-b07123c6.js"),["../components/pages/2022/day/07/_page.svelte-b07123c6.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/08/+page.svelte":()=>e(()=>import("../components/pages/2022/day/08/_page.svelte-fde6a769.js"),["../components/pages/2022/day/08/_page.svelte-fde6a769.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/09/+page.svelte":()=>e(()=>import("../components/pages/2022/day/09/_page.svelte-3a3ca515.js"),["../components/pages/2022/day/09/_page.svelte-3a3ca515.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/10/+page.svelte":()=>e(()=>import("../components/pages/2022/day/10/_page.svelte-b923fd2c.js"),["../components/pages/2022/day/10/_page.svelte-b923fd2c.js","./index-69c26055.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css","../assets/_page-e344fce4.css"],import.meta.url),"../routes/2022/day/11/+page.svelte":()=>e(()=>import("../components/pages/2022/day/11/_page.svelte-1119c00b.js"),["../components/pages/2022/day/11/_page.svelte-1119c00b.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/12/+page.svelte":()=>e(()=>import("../components/pages/2022/day/12/_page.svelte-1549b2eb.js"),["../components/pages/2022/day/12/_page.svelte-1549b2eb.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/13/+page.svelte":()=>e(()=>import("../components/pages/2022/day/13/_page.svelte-d1e07d60.js"),["../components/pages/2022/day/13/_page.svelte-d1e07d60.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/14/+page.svelte":()=>e(()=>import("../components/pages/2022/day/14/_page.svelte-dcf0acfe.js"),["../components/pages/2022/day/14/_page.svelte-dcf0acfe.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/15/+page.svelte":()=>e(()=>import("../components/pages/2022/day/15/_page.svelte-36c30f0c.js"),["../components/pages/2022/day/15/_page.svelte-36c30f0c.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/16/+page.svelte":()=>e(()=>import("../components/pages/2022/day/16/_page.svelte-cd5b6669.js"),["../components/pages/2022/day/16/_page.svelte-cd5b6669.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/17/+page.svelte":()=>e(()=>import("../components/pages/2022/day/17/_page.svelte-a38ad243.js"),["../components/pages/2022/day/17/_page.svelte-a38ad243.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/18/+page.svelte":()=>e(()=>import("../components/pages/2022/day/18/_page.svelte-71beeccf.js"),["../components/pages/2022/day/18/_page.svelte-71beeccf.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/19/+page.svelte":()=>e(()=>import("../components/pages/2022/day/19/_page.svelte-b8d1bca5.js"),["../components/pages/2022/day/19/_page.svelte-b8d1bca5.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/20/+page.svelte":()=>e(()=>import("../components/pages/2022/day/20/_page.svelte-362046ce.js"),["../components/pages/2022/day/20/_page.svelte-362046ce.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/21/+page.svelte":()=>e(()=>import("../components/pages/2022/day/21/_page.svelte-77c7001c.js"),["../components/pages/2022/day/21/_page.svelte-77c7001c.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/22/+page.svelte":()=>e(()=>import("../components/pages/2022/day/22/_page.svelte-4651e2e6.js"),["../components/pages/2022/day/22/_page.svelte-4651e2e6.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/23/+page.svelte":()=>e(()=>import("../components/pages/2022/day/23/_page.svelte-8bcf68b0.js"),["../components/pages/2022/day/23/_page.svelte-8bcf68b0.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/24/+page.svelte":()=>e(()=>import("../components/pages/2022/day/24/_page.svelte-90fb2583.js"),["../components/pages/2022/day/24/_page.svelte-90fb2583.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url),"../routes/2022/day/25/+page.svelte":()=>e(()=>import("../components/pages/2022/day/25/_page.svelte-74e4d79c.js"),["../components/pages/2022/day/25/_page.svelte-74e4d79c.js","./index-69c26055.js","./Runner-973d1dd1.js","./GetUserData-8478262f.js","../assets/GetUserData-80957b2c.css"],import.meta.url)}));let r=await Promise.all(o.map(t=>d(t.slice(3,5),t.slice(-2)))),_={};for(let t of r)t.href=`/${t.year}/day/${t.day}`,t.year in _||(_[t.year]={}),_[t.year][t.day]=t;return _}let I=i("none"),E=i(Object());async function O(){{console.log("Initialising metadata...");let a=await v();E.set(a)}}let T=i(""),A=i(""),y=i(""),L=i(""),g=m(y,a=>p(a)),n=i(""),R=i(!1),V=m([g,n],([a,o])=>a!==o);export{A as a,L as b,T as c,y as d,n as e,s as g,g as h,O as i,E as m,I as p,R as r,V as u};
import{_ as C}from"../../../../chunks/preload-helper-b21cceae.js";import{S as pe,i as ne,s as me,L as he,e as re,b as d,M as ce,f as fe,t as _e,h as i,I as te,N as be,k as g,q as m,l as w,m as A,r as h,E as _,K as G,C as de,a as T,c as L,n as S,p as ue,u as H,F as ke,G as Ee,H as ve}from"../../../../chunks/index-69c26055.js";import{i as ye,p as oe,m as Ne}from"../../../../chunks/stores-cc554b7c.js";import{p as Pe}from"../../../../chunks/stores-8f690e45.js";function ge(o){let t,a,l=o[11].message+"",r;return{c(){t=g("p"),a=m("Failed to fetch page metadata! Error: "),r=m(l)},l(f){t=w(f,"P",{});var c=A(t);a=h(c,"Failed to fetch page metadata! Error: "),r=h(c,l),c.forEach(i)},m(f,c){d(f,t,c),_(t,a),_(t,r)},p:G,i:G,o:G,d(f){f&&i(t)}}}function we(o){let t,a,l=o[5][o[1]][o[0]].day+"",r,f,c=o[5][o[1]][o[0]].title+"",I,V,u,k=o[5][o[1]][o[0]].description+"",O,R,y,N,K=o[5][o[1]][o[0]].keywords.sort().join(", ")+"",M,W,F,Y,E,Q=Number(o[0])>1,z,D,U,q=o[2].slice(1)+"",B,X,Z,$=Number(o[0])<o[6],P,b=o[5][o[1]][o[0]].longRuntime&&ae();const x=o[9].default,v=de(x,o,o[8],null);let p=Q&&se(o),n=$&&ie(o);return{c(){t=g("h2"),a=m("day "),r=m(l),f=m(": "),I=m(c),V=T(),u=g("p"),O=m(k),R=T(),y=g("p"),N=m("Keywords: "),M=m(K),W=T(),b&&b.c(),F=T(),v&&v.c(),Y=T(),E=g("footer"),p&&p.c(),z=T(),D=g("a"),U=m("["),B=m(q),X=m("]"),Z=T(),n&&n.c(),this.h()},l(e){t=w(e,"H2",{});var s=A(t);a=h(s,"day "),r=h(s,l),f=h(s,": "),I=h(s,c),s.forEach(i),V=L(e),u=w(e,"P",{});var le=A(u);O=h(le,k),le.forEach(i),R=L(e),y=w(e,"P",{class:!0});var ee=A(y);N=h(ee,"Keywords: "),M=h(ee,K),ee.forEach(i),W=L(e),b&&b.l(e),F=L(e),v&&v.l(e),Y=L(e),E=w(e,"FOOTER",{style:!0});var j=A(E);p&&p.l(j),z=L(j),D=w(j,"A",{href:!0});var J=A(D);U=h(J,"["),B=h(J,q),X=h(J,"]"),J.forEach(i),Z=L(j),n&&n.l(j),j.forEach(i),this.h()},h(){S(y,"class","keywords svelte-742mxw"),S(D,"href",o[2]),ue(E,"margin-top","2em")},m(e,s){d(e,t,s),_(t,a),_(t,r),_(t,f),_(t,I),d(e,V,s),d(e,u,s),_(u,O),d(e,R,s),d(e,y,s),_(y,N),_(y,M),d(e,W,s),b&&b.m(e,s),d(e,F,s),v&&v.m(e,s),d(e,Y,s),d(e,E,s),p&&p.m(E,null),_(E,z),_(E,D),_(D,U),_(D,B),_(D,X),_(E,Z),n&&n.m(E,null),P=!0},p(e,s){(!P||s&35)&&l!==(l=e[5][e[1]][e[0]].day+"")&&H(r,l),(!P||s&35)&&c!==(c=e[5][e[1]][e[0]].title+"")&&H(I,c),(!P||s&35)&&k!==(k=e[5][e[1]][e[0]].description+"")&&H(O,k),(!P||s&35)&&K!==(K=e[5][e[1]][e[0]].keywords.sort().join(", ")+"")&&H(M,K),e[5][e[1]][e[0]].longRuntime?b||(b=ae(),b.c(),b.m(F.parentNode,F)):b&&(b.d(1),b=null),v&&v.p&&(!P||s&256)&&ke(v,x,e,e[8],P?ve(x,e[8],s,null):Ee(e[8]),null),s&1&&(Q=Number(e[0])>1),Q?p?p.p(e,s):(p=se(e),p.c(),p.m(E,z)):p&&(p.d(1),p=null),(!P||s&4)&&q!==(q=e[2].slice(1)+"")&&H(B,q),(!P||s&4)&&S(D,"href",e[2]),s&1&&($=Number(e[0])<e[6]),$?n?n.p(e,s):(n=ie(e),n.c(),n.m(E,null)):n&&(n.d(1),n=null)},i(e){P||(fe(v,e),P=!0)},o(e){_e(v,e),P=!1},d(e){e&&i(t),e&&i(V),e&&i(u),e&&i(R),e&&i(y),e&&i(W),b&&b.d(e),e&&i(F),v&&v.d(e),e&&i(Y),e&&i(E),p&&p.d(),n&&n.d()}}}function ae(o){let t,a;return{c(){t=g("p"),a=m("WARNING! This solution can take a while to run."),this.h()},l(l){t=w(l,"P",{style:!0});var r=A(t);a=h(r,"WARNING! This solution can take a while to run."),r.forEach(i),this.h()},h(){ue(t,"color","red")},m(l,r){d(l,t,r),_(t,a)},d(l){l&&i(t)}}}function se(o){let t,a;return{c(){t=g("a"),a=m("[previous]"),this.h()},l(l){t=w(l,"A",{href:!0});var r=A(t);a=h(r,"[previous]"),r.forEach(i),this.h()},h(){S(t,"href",o[3])},m(l,r){d(l,t,r),_(t,a)},p(l,r){r&8&&S(t,"href",l[3])},d(l){l&&i(t)}}}function ie(o){let t,a;return{c(){t=g("a"),a=m("[next]"),this.h()},l(l){t=w(l,"A",{href:!0});var r=A(t);a=h(r,"[next]"),r.forEach(i),this.h()},h(){S(t,"href",o[4])},m(l,r){d(l,t,r),_(t,a)},p(l,r){r&16&&S(t,"href",l[4])},d(l){l&&i(t)}}}function Ae(o){let t,a;return{c(){t=g("p"),a=m("fetching page metadata...")},l(l){t=w(l,"P",{});var r=A(t);a=h(r,"fetching page metadata..."),r.forEach(i)},m(l,r){d(l,t,r),_(t,a)},p:G,i:G,o:G,d(l){l&&i(t)}}}function De(o){let t,a,l={ctx:o,current:null,token:null,hasCatch:!0,pending:Ae,then:we,catch:ge,error:11,blocks:[,,,]};return he(ye(),l),{c(){t=re(),l.block.c()},l(r){t=re(),l.block.l(r)},m(r,f){d(r,t,f),l.block.m(r,l.anchor=f),l.mount=()=>t.parentNode,l.anchor=t,a=!0},p(r,[f]){o=r,ce(l,o,f)},i(r){a||(fe(l.block),a=!0)},o(r){for(let f=0;f<3;f+=1){const c=l.blocks[f];_e(c)}a=!1},d(r){r&&i(t),l.block.d(r),l.token=null,l=null}}}function Oe(o){return[o.slice(-2),o.slice(1,5),o.slice(0,5)]}function Re(o){const t=Number(o);return[String(t-1).padStart(2,"0"),String(t+1).padStart(2,"0")]}function Ie(o,t,a){let l,r,f;te(o,oe,N=>a(10,l=N)),te(o,Pe,N=>a(7,r=N)),te(o,Ne,N=>a(5,f=N));let{$$slots:c={},$$scope:I}=t;const V=Object.keys(Object.assign({"./01/+page.svelte":()=>C(()=>import("./01/_page.svelte-8512ff22.js"),["./01/_page.svelte-8512ff22.js","../../../../chunks/index-69c26055.js","../../../../chunks/stores-cc554b7c.js","../../../../chunks/preload-helper-b21cceae.js","../../../../chunks/Runner-1072a7d2.js","../../../../assets/Runner-de87410b.css"],import.meta.url),"./02/+page.svelte":()=>C(()=>import("./02/_page.svelte-4daf723c.js"),["./02/_page.svelte-4daf723c.js","../../../../chunks/index-69c26055.js","../../../../chunks/stores-cc554b7c.js","../../../../chunks/preload-helper-b21cceae.js","../../../../chunks/Runner-1072a7d2.js","../../../../assets/Runner-de87410b.css"],import.meta.url),"./03/+page.svelte":()=>C(()=>import("./03/_page.svelte-113db5ba.js"),["./03/_page.svelte-113db5ba.js","../../../../chunks/index-69c26055.js","../../../../chunks/stores-cc554b7c.js","../../../../chunks/preload-helper-b21cceae.js","../../../../chunks/Runner-1072a7d2.js","../../../../assets/Runner-de87410b.css"],import.meta.url),"./04/+page.svelte":()=>C(()=>import("./04/_page.svelte-22f884a8.js"),["./04/_page.svelte-22f884a8.js","../../../../chunks/index-69c26055.js","../../../../chunks/stores-cc554b7c.js","../../../../chunks/preload-helper-b21cceae.js","../../../../chunks/Runner-1072a7d2.js","../../../../assets/Runner-de87410b.css"],import.meta.url),"./05/+page.svelte":()=>C(()=>import("./05/_page.svelte-763af8b8.js"),["./05/_page.svelte-763af8b8.js","../../../../chunks/index-69c26055.js","../../../../chunks/stores-cc554b7c.js","../../../../chunks/preload-helper-b21cceae.js","../../../../chunks/Runner-1072a7d2.js","../../../../assets/Runner-de87410b.css"],import.meta.url),"./06/+page.svelte":()=>C(()=>import("./06/_page.svelte-e1ea0ab8.js"),["./06/_page.svelte-e1ea0ab8.js","../../../../chunks/index-69c26055.js","../../../../chunks/stores-cc554b7c.js","../../../../chunks/preload-helper-b21cceae.js","../../../../chunks/Runner-1072a7d2.js","../../../../assets/Runner-de87410b.css"],import.meta.url)})).length;let u="02",k="2021",O="/2021",R="01",y="03";return o.$$set=N=>{"$$scope"in N&&a(8,I=N.$$scope)},o.$$.update=()=>{o.$$.dirty&131&&(r.url.pathname.includes("template")!==!0?(a(0,[u,k,O]=Oe(r.url.pathname),u,(a(1,k),a(7,r),a(0,u)),(a(2,O),a(7,r),a(0,u),a(1,k))),a(3,[R,y]=Re(u),R,(a(4,y),a(7,r),a(0,u),a(1,k)))):(a(0,u="01"),a(1,k="2021")),be(oe,l=`${k} Day ${Number(u)}`,l))},[u,k,O,R,y,f,V,r,I,c]}class Fe extends pe{constructor(t){super(),ne(this,t,Ie,De,me,{})}}export{Fe as default};
import{s as tn,p as en,C as on}from"./scheduler.fd3686c2.js";import{S as sn,i as xn,E as pn,e as $,s as m,k as P,c as v,l as q,f as _,m as T,g as i,o as D,p as M,q as O,d as r,r as V,u as rn,t as ln,a as un,b as cn,n as fn,h as hn,j as mn}from"./index.a4ac66b3.js";import{e as B}from"./each.e59479a4.js";import{c as _n,a as yn}from"./stores.bcf4559c.js";import{R as G,G as gn}from"./GetUserData.341895eb.js";const z="Cathode-Ray Tube",J="10",U="2022",Y="The screen on our communicator is broken! Let's fix it. This was my first time using classes in Javascript! I used 'self' instead of 'this' SO MANY TIMES.",F=!1,K="Sum of all signal strengths",Q="Screen output",Z=["arrays","classes","custom output","for","while"],nn=!0,$n={title:z,day:J,year:U,description:Y,longRuntime:F,result1:K,result2:Q,keywords:Z,visible:nn},vn=Object.freeze(Object.defineProperty({__proto__:null,day:J,default:$n,description:Y,keywords:Z,longRuntime:F,result1:K,result2:Q,title:z,visible:nn,year:U},Symbol.toStringTag,{value:"Module"}));function N(s){return s.trim().split(`
`)}class dn{constructor(d){this.inputs=d,this.valueX=[1],this.cycle=1,this.skipNextCopy=!1}copyCycleValue(){this.skipNextCopy||this.valueX.push(this.valueX[this.cycle-1]),this.cycle+=1,this.skipNextCopy=!1}handleNoOutput(){this.copyCycleValue()}handleAdd(d){this.copyCycleValue(),this.copyCycleValue(),this.valueX.push(this.valueX[this.cycle-1]+Number(d)),this.skipNextCopy=!0}processInput(d){const e=d.split(" ");if(e[0]==="noop")this.handleNoOutput();else if(e[0]==="addx")this.handleAdd(e[1]);else throw`input ${input} not recognised!`}processInputs(){for(const d of this.inputs)this.processInput(d)}sumSignalStrengths(d,e){let a=d,t=0;for(;a<this.valueX.length;)t+=a*this.valueX[a],a+=e;return t}checkIfSpriteVisible(d,e){const a=d-e*Math.floor(d/e)-1;return Math.abs(a-this.valueX[d])<=1}render(){const d="-",e="#",t=new Array(this.valueX.length-1).fill(d);for(let x=1;x<this.valueX.length;x++)this.checkIfSpriteVisible(x,40)&&(t[x-1]=e),x%40===0&&(t[x-1]+=`
`);return t.join("")}}function bn(s){const d=new dn(s);return d.processInputs(),d.sumSignalStrengths(20,40)}function Cn(s){const d=new dn(s);return d.processInputs(),d.render()}const Sn=`noop
noop
addx 5
noop
noop
addx 1
addx 3
addx 2
addx 4
addx 3
noop
addx 2
addx 1
noop
noop
addx 4
noop
addx 1
addx 2
addx 5
addx 3
noop
addx -1
addx -37
addx 37
addx -34
addx 7
noop
addx -2
addx 2
noop
noop
noop
addx 5
addx 2
noop
addx 3
addx 15
addx -8
addx -9
addx 21
addx -9
addx 5
addx 2
addx 3
addx -2
addx -38
noop
addx 3
addx 37
addx -33
addx 5
noop
noop
addx 5
noop
noop
addx 5
noop
addx -1
addx 1
addx 5
noop
noop
addx 5
noop
noop
noop
addx 1
addx 2
noop
addx 3
addx -36
noop
noop
noop
addx 6
addx 21
addx -17
addx 18
addx -8
addx -7
addx 2
addx 5
addx -8
addx 13
addx -2
addx 7
noop
addx -2
addx 5
addx 2
addx 1
noop
addx -38
addx 4
addx 3
noop
addx 34
addx -29
addx -2
addx 10
addx -3
addx 2
addx 3
noop
addx -22
addx 2
addx 23
addx 7
noop
noop
addx 3
noop
addx 2
addx -18
addx 19
addx -38
addx 5
addx 2
noop
addx 1
addx 4
addx 1
noop
noop
addx 2
addx 5
addx 2
noop
addx 1
noop
addx 2
addx 8
addx -1
addx -30
addx 31
addx 2
addx 5
addx -35
noop

`,kn=`addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop
`;function H(s,d,e){const a=s.slice();return a[3]=d[e],a}function L(s){let d,e=s[3]+"",a;return{c(){d=$("p"),a=ln(e),this.h()},l(t){d=v(t,"P",{class:!0});var x=un(d);a=cn(x,e),x.forEach(r),this.h()},h(){fn(d,"class","result2 svelte-7ugxxw")},m(t,x){i(t,d,x),hn(d,a)},p(t,x){x&2&&e!==(e=t[3]+"")&&mn(a,e)},d(t){t&&r(d)}}}function wn(s){let d,e="Part 1",a,t,x,u,j="Part 2",b,c,R,C,y,S,k,w,X,f,I;t=new G({props:{part:bn,preprocessor:N,resultText:W.result1}});function an(n){s[2](n)}let A={part:Cn,preprocessor:N,resultText:W.result2,displayResult:!1};s[0]!==void 0&&(A.result=s[0]),c=new G({props:A}),en.push(()=>pn(c,"result",an));let g=B(s[1]),p=[];for(let n=0;n<g.length;n+=1)p[n]=L(H(s,g,n));return f=new gn({}),{c(){d=$("h3"),d.textContent=e,a=m(),P(t.$$.fragment),x=m(),u=$("h3"),u.textContent=j,b=m(),P(c.$$.fragment),C=m();for(let n=0;n<p.length;n+=1)p[n].c();y=m(),S=$("br"),k=m(),w=$("br"),X=m(),P(f.$$.fragment)},l(n){d=v(n,"H3",{"data-svelte-h":!0}),q(d)!=="svelte-1m4yx5a"&&(d.textContent=e),a=_(n),T(t.$$.fragment,n),x=_(n),u=v(n,"H3",{"data-svelte-h":!0}),q(u)!=="svelte-a4p1in"&&(u.textContent=j),b=_(n),T(c.$$.fragment,n),C=_(n);for(let o=0;o<p.length;o+=1)p[o].l(n);y=_(n),S=v(n,"BR",{}),k=_(n),w=v(n,"BR",{}),X=_(n),T(f.$$.fragment,n)},m(n,o){i(n,d,o),i(n,a,o),D(t,n,o),i(n,x,o),i(n,u,o),i(n,b,o),D(c,n,o),i(n,C,o);for(let h=0;h<p.length;h+=1)p[h]&&p[h].m(n,o);i(n,y,o),i(n,S,o),i(n,k,o),i(n,w,o),i(n,X,o),D(f,n,o),I=!0},p(n,[o]){const h={};if(!R&&o&1&&(R=!0,h.result=n[0],on(()=>R=!1)),c.$set(h),o&2){g=B(n[1]);let l;for(l=0;l<g.length;l+=1){const E=H(n,g,l);p[l]?p[l].p(E,o):(p[l]=L(E),p[l].c(),p[l].m(y.parentNode,y))}for(;l<p.length;l+=1)p[l].d(1);p.length=g.length}},i(n){I||(M(t.$$.fragment,n),M(c.$$.fragment,n),M(f.$$.fragment,n),I=!0)},o(n){O(t.$$.fragment,n),O(c.$$.fragment,n),O(f.$$.fragment,n),I=!1},d(n){n&&(r(d),r(a),r(x),r(u),r(b),r(C),r(y),r(S),r(k),r(w),r(X)),V(t,n),V(c,n),rn(p,n),V(f,n)}}}const W=vn;function Xn(s,d,e){_n.set(N(Sn)),yn.set(N(kn));let a="",t=[""];function x(u){a=u,e(0,a)}return s.$$.update=()=>{s.$$.dirty&1&&e(1,t=a.split(`
`))},[a,t,x]}class Dn extends sn{constructor(d){super(),xn(this,d,Xn,wn,tn,{})}}export{Dn as default,W as myMetadata};

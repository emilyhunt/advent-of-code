import{S as F,i as K,s as Q,T as Z,U as nn,k as v,q as O,a as m,w as T,l as b,m as q,r as B,h as l,c as _,x as V,b as i,E as G,y as D,V as dn,f as E,t as M,z as A,P as an,n as on,u as tn}from"../../../../../chunks/index-69c26055.js";import{c as en,a as xn}from"../../../../../chunks/stores-004e9a39.js";import{R as U,G as sn}from"../../../../../chunks/GetUserData-3dab24b8.js";function N(x){return x.trim().split(`
`)}class J{constructor(d){this.inputs=d,this.valueX=[1],this.cycle=1,this.skipNextCopy=!1}copyCycleValue(){this.skipNextCopy||this.valueX.push(this.valueX[this.cycle-1]),this.cycle+=1,this.skipNextCopy=!1}handleNoOutput(){this.copyCycleValue()}handleAdd(d){this.copyCycleValue(),this.copyCycleValue(),this.valueX.push(this.valueX[this.cycle-1]+Number(d)),this.skipNextCopy=!0}processInput(d){const a=d.split(" ");if(a[0]==="noop")this.handleNoOutput();else if(a[0]==="addx")this.handleAdd(a[1]);else throw`input ${input} not recognised!`}processInputs(){for(const d of this.inputs)this.processInput(d)}sumSignalStrengths(d,a){let o=d,t=0;for(;o<this.valueX.length;)t+=o*this.valueX[o],o+=a;return t}checkIfSpriteVisible(d,a){const o=d-a*Math.floor(d/a)-1;return Math.abs(o-this.valueX[d])<=1}render(){const d="-",a="#",t=new Array(this.valueX.length-1).fill(d);for(let s=1;s<this.valueX.length;s++)this.checkIfSpriteVisible(s,40)&&(t[s-1]=a),s%40===0&&(t[s-1]+=`
`);return t.join("")}}function pn(x){const d=new J(x);return d.processInputs(),d.sumSignalStrengths(20,40)}function rn(x){const d=new J(x);return d.processInputs(),d.render()}const ln=`noop
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

`,un=`addx 15
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
`;function W(x,d,a){const o=x.slice();return o[3]=d[a],o}function j(x){let d,a=x[3]+"",o;return{c(){d=v("p"),o=O(a),this.h()},l(t){d=b(t,"P",{class:!0});var s=q(d);o=B(s,a),s.forEach(l),this.h()},h(){on(d,"class","result2 svelte-7ugxxw")},m(t,s){i(t,d,s),G(d,o)},p(t,s){s&2&&a!==(a=t[3]+"")&&tn(o,a)},d(t){t&&l(d)}}}function cn(x){let d,a,o,t,s,f,P,g,u,R,S,y,k,w,C,X,h,I;t=new U({props:{part:pn,preprocessor:N,resultText:z.result1}});function Y(n){x[2](n)}let H={part:rn,preprocessor:N,resultText:z.result2,displayResult:!1};x[0]!==void 0&&(H.result=x[0]),u=new U({props:H}),Z.push(()=>nn(u,"result",Y));let $=x[1],p=[];for(let n=0;n<$.length;n+=1)p[n]=j(W(x,$,n));return h=new sn({}),{c(){d=v("h3"),a=O("Part 1"),o=m(),T(t.$$.fragment),s=m(),f=v("h3"),P=O("Part 2"),g=m(),T(u.$$.fragment),S=m();for(let n=0;n<p.length;n+=1)p[n].c();y=m(),k=v("br"),w=m(),C=v("br"),X=m(),T(h.$$.fragment)},l(n){d=b(n,"H3",{});var e=q(d);a=B(e,"Part 1"),e.forEach(l),o=_(n),V(t.$$.fragment,n),s=_(n),f=b(n,"H3",{});var c=q(f);P=B(c,"Part 2"),c.forEach(l),g=_(n),V(u.$$.fragment,n),S=_(n);for(let r=0;r<p.length;r+=1)p[r].l(n);y=_(n),k=b(n,"BR",{}),w=_(n),C=b(n,"BR",{}),X=_(n),V(h.$$.fragment,n)},m(n,e){i(n,d,e),G(d,a),i(n,o,e),D(t,n,e),i(n,s,e),i(n,f,e),G(f,P),i(n,g,e),D(u,n,e),i(n,S,e);for(let c=0;c<p.length;c+=1)p[c].m(n,e);i(n,y,e),i(n,k,e),i(n,w,e),i(n,C,e),i(n,X,e),D(h,n,e),I=!0},p(n,[e]){const c={};if(!R&&e&1&&(R=!0,c.result=n[0],dn(()=>R=!1)),u.$set(c),e&2){$=n[1];let r;for(r=0;r<$.length;r+=1){const L=W(n,$,r);p[r]?p[r].p(L,e):(p[r]=j(L),p[r].c(),p[r].m(y.parentNode,y))}for(;r<p.length;r+=1)p[r].d(1);p.length=$.length}},i(n){I||(E(t.$$.fragment,n),E(u.$$.fragment,n),E(h.$$.fragment,n),I=!0)},o(n){M(t.$$.fragment,n),M(u.$$.fragment,n),M(h.$$.fragment,n),I=!1},d(n){n&&l(d),n&&l(o),A(t,n),n&&l(s),n&&l(f),n&&l(g),A(u,n),n&&l(S),an(p,n),n&&l(y),n&&l(k),n&&l(w),n&&l(C),n&&l(X),A(h,n)}}}const z={title:"Cathode-Ray Tube",day:"10",year:"2022",description:"The screen on our communicator is broken! Let's fix it. This was my first time using classes in Javascript! I used 'self' instead of 'this' SO MANY TIMES.",longRuntime:!1,result1:"Sum of all signal strengths",result2:"Screen output",keywords:["arrays","classes","custom output","for","while"],visible:!0};function fn(x,d,a){en.set(N(ln)),xn.set(N(un));let o="",t=[""];function s(f){o=f,a(0,o)}return x.$$.update=()=>{x.$$.dirty&1&&a(1,t=o.split(`
`))},[o,t,s]}class yn extends F{constructor(d){super(),K(this,d,fn,cn,Q,{})}}export{yn as default,z as myMetadata};

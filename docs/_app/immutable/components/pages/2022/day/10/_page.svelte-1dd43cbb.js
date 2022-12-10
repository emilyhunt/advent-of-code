import{S as J,i as L,s as Y,T as F,U as K,k as $,q as T,a as f,w as V,l as y,m as D,r as E,h as x,c,x as R,n as Q,b as r,E as M,y as z,V as Z,u as nn,f as A,t as O,z as q}from"../../../../../chunks/index-69c26055.js";import{c as dn,a as an}from"../../../../../chunks/stores-ad77a10a.js";import{R as H,G as on}from"../../../../../chunks/GetUserData-1f35f388.js";function P(s){return s.trim().split(`
`)}class W{constructor(d){this.inputs=d,this.valueX=[1],this.cycle=1,this.skipNextCopy=!1}copyCycleValue(){this.skipNextCopy||this.valueX.push(this.valueX[this.cycle-1]),this.cycle+=1,this.skipNextCopy=!1}handleNoOutput(){this.copyCycleValue()}handleAdd(d){this.copyCycleValue(),this.copyCycleValue(),this.valueX.push(this.valueX[this.cycle-1]+Number(d)),this.skipNextCopy=!0}processInput(d){const o=d.split(" ");if(o[0]==="noop")this.handleNoOutput();else if(o[0]==="addx")this.handleAdd(o[1]);else throw`input ${input} not recognised!`}processInputs(){for(const d of this.inputs)this.processInput(d)}sumSignalStrengths(d,o){let t=d,e=0;for(;t<this.valueX.length;)e+=t*this.valueX[t],t+=o;return e}checkIfSpriteVisible(d,o){const t=d-o*Math.floor(d/o)-1;return Math.abs(t-this.valueX[d])<=1}render(){const d="-",o="#",e=new Array(this.valueX.length-1).fill(d);for(let p=1;p<this.valueX.length;p++)this.checkIfSpriteVisible(p,40)&&(e[p-1]=o),p%40===0&&(e[p-1]+=`
`);return e.join("")}}function tn(s){const d=new W(s);return d.processInputs(),d.sumSignalStrengths(20,40)}function en(s){const d=new W(s);return d.processInputs(),d.render()}const xn=`noop
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

`,sn=`addx 15
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
`;function pn(s){let d,o,t,e,p,m,N,v,i,g,b,l,S,w,k,C,X,I,u,h;e=new H({props:{part:tn,preprocessor:P,resultText:U.result1}});function j(n){s[1](n)}let B={part:en,preprocessor:P,resultText:U.result2,displayResult:!1};return s[0]!==void 0&&(B.result=s[0]),i=new H({props:B}),F.push(()=>K(i,"result",j)),u=new on({}),{c(){d=$("h3"),o=T("Part 1"),t=f(),V(e.$$.fragment),p=f(),m=$("h3"),N=T("Part 2"),v=f(),V(i.$$.fragment),b=f(),l=$("p"),S=T(s[0]),w=f(),k=$("br"),C=f(),X=$("br"),I=f(),V(u.$$.fragment),this.h()},l(n){d=y(n,"H3",{});var a=D(d);o=E(a,"Part 1"),a.forEach(x),t=c(n),R(e.$$.fragment,n),p=c(n),m=y(n,"H3",{});var _=D(m);N=E(_,"Part 2"),_.forEach(x),v=c(n),R(i.$$.fragment,n),b=c(n),l=y(n,"P",{class:!0});var G=D(l);S=E(G,s[0]),G.forEach(x),w=c(n),k=y(n,"BR",{}),C=c(n),X=y(n,"BR",{}),I=c(n),R(u.$$.fragment,n),this.h()},h(){Q(l,"class","result2 svelte-mze1g3")},m(n,a){r(n,d,a),M(d,o),r(n,t,a),z(e,n,a),r(n,p,a),r(n,m,a),M(m,N),r(n,v,a),z(i,n,a),r(n,b,a),r(n,l,a),M(l,S),r(n,w,a),r(n,k,a),r(n,C,a),r(n,X,a),r(n,I,a),z(u,n,a),h=!0},p(n,[a]){const _={};!g&&a&1&&(g=!0,_.result=n[0],Z(()=>g=!1)),i.$set(_),(!h||a&1)&&nn(S,n[0])},i(n){h||(A(e.$$.fragment,n),A(i.$$.fragment,n),A(u.$$.fragment,n),h=!0)},o(n){O(e.$$.fragment,n),O(i.$$.fragment,n),O(u.$$.fragment,n),h=!1},d(n){n&&x(d),n&&x(t),q(e,n),n&&x(p),n&&x(m),n&&x(v),q(i,n),n&&x(b),n&&x(l),n&&x(w),n&&x(k),n&&x(C),n&&x(X),n&&x(I),q(u,n)}}}const U={title:"Puzzle Title",day:"10",year:"2022",description:"The screen on our communicator is broken! Let's fix it. This was my first time using classes in Javascript! I used 'self' instead of 'this' SO MANY TIMES.",longRuntime:!1,result1:"Sum of all signal strengths",result2:"Screen output",keywords:["arrays","classes","custom output","for","while"],visible:!0};function rn(s,d,o){dn.set(P(xn)),an.set(P(sn));let t="";function e(p){t=p,o(0,t)}return[t,e]}class cn extends J{constructor(d){super(),L(this,d,rn,pn,Y,{})}}export{cn as default,U as myMetadata};

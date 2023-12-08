import{s as d,n as w}from"./scheduler.fd3686c2.js";import{S as k,i as b,k as I,m as v,o as g,p as M,q as O,r as T}from"./index.a4ac66b3.js";import{c as S,a as B}from"./stores.677741b2.js";import{R as _}from"./Runner.71787a18.js";const i="Monkey in the Middle",a="11",l="2022",u="Some monkeys have stolen our stuff! Can we get it back? This puzzle was ROUGH. It took me so long to see how to solve part 2, and I had soooo many JS issues because I'm new to JS classes. Arrghh.",c=!1,y="Monkey Business score",m="Monkey Business score",p=["TODO: COMMENT CODE"],f=!0,$={title:i,day:a,year:l,description:u,longRuntime:c,result1:y,result2:m,keywords:p,visible:f},x=Object.freeze(Object.defineProperty({__proto__:null,day:a,default:$,description:u,keywords:p,longRuntime:c,result1:y,result2:m,title:i,visible:f,year:l},Symbol.toStringTag,{value:"Module"}));class R{constructor(e){this.worry=e}divisibleBy(e){return this.worry%e===0}reduceWorry(){this.worry=Math.floor(this.worry/3)}reduceByDivisor(e){this.worry%=e}applyOperation(e){this.worry=e.apply(this.worry)}getWorry(){return this.worry}}class N{constructor(e){this.value=e}apply(e){return e+this.value}}class A{constructor(e){this.value=e}apply(e){return e*this.value}}class C{constructor(){}apply(e){return e*e}}function D(o){const e=o.trim().split(" "),n=6;if(e.length!=n)throw`Operation string has length different to expected value
${o}`;const t=e[4];let s=e[5];if(s==="old"&&t==="*")return new C;if(s=Number(s),t==="+")return new N(s);if(t==="*")return new A(s);throw`Expected operation defined by ${o} not recognised! Operator: ${t} Value: ${s}`}class E{constructor(e){e=String(e),e=e.split(`
`),this.items=e[1].split(":")[1].replace(" ","").split(",").map(n=>new R(Number(n))),this.operation=D(e[2]),this.divisor=Number(e[3].split(" ").slice(-1)[0]),this.monkeyTestTrue=Number(e[4].split(" ").slice(-1)[0]),this.monkeyTestFalse=Number(e[5].split(" ").slice(-1)[0]),this.inspections=0}hasAnItem(){return this.items.length>0}processNextItem(e,n){const t=this.items.shift();return t.applyOperation(this.operation),this.inspections+=1,e?t.reduceWorry():t.reduceByDivisor(n),t.divisibleBy(this.divisor)?{item:t,recipient:this.monkeyTestTrue}:{item:t,recipient:this.monkeyTestFalse}}receiveItem(e){this.items.push(e)}}class h{constructor(e){this.monkeys=[];for(const n of e)this.monkeys.push(new E(n));this.commonDivisor=this.monkeys.map(n=>n.divisor).reduce((n,t)=>n*t,1)}iterateOverMonkeys(e){for(const n of this.monkeys)for(;n.hasAnItem();){const t=n.processNextItem(e,this.commonDivisor);this.monkeys[t.recipient].receiveItem(t.item)}}runMonkeyBusiness(e,n){let t=1;for(;t<=e;)this.iterateOverMonkeys(n),t+=1}calculateMonkeyBusiness(){let e=new Int32Array(this.monkeys.map(n=>n.inspections));return e=e.sort().slice(-2),e[0]*e[1]}}function r(o){return o.trim().split(`

`)}function q(o){const t=new h(o);return t.runMonkeyBusiness(20,!0),t.calculateMonkeyBusiness()}function z(o){const t=new h(o);return t.runMonkeyBusiness(1e4,!1),t.calculateMonkeyBusiness()}const W=`Monkey 0:
  Starting items: 91, 54, 70, 61, 64, 64, 60, 85
  Operation: new = old * 13
  Test: divisible by 2
    If true: throw to monkey 5
    If false: throw to monkey 2

Monkey 1:
  Starting items: 82
  Operation: new = old + 7
  Test: divisible by 13
    If true: throw to monkey 4
    If false: throw to monkey 3

Monkey 2:
  Starting items: 84, 93, 70
  Operation: new = old + 2
  Test: divisible by 5
    If true: throw to monkey 5
    If false: throw to monkey 1

Monkey 3:
  Starting items: 78, 56, 85, 93
  Operation: new = old * 2
  Test: divisible by 3
    If true: throw to monkey 6
    If false: throw to monkey 7

Monkey 4:
  Starting items: 64, 57, 81, 95, 52, 71, 58
  Operation: new = old * old
  Test: divisible by 11
    If true: throw to monkey 7
    If false: throw to monkey 3

Monkey 5:
  Starting items: 58, 71, 96, 58, 68, 90
  Operation: new = old + 6
  Test: divisible by 17
    If true: throw to monkey 4
    If false: throw to monkey 1

Monkey 6:
  Starting items: 56, 99, 89, 97, 81
  Operation: new = old + 1
  Test: divisible by 7
    If true: throw to monkey 0
    If false: throw to monkey 2

Monkey 7:
  Starting items: 68, 72
  Operation: new = old + 8
  Test: divisible by 19
    If true: throw to monkey 6
    If false: throw to monkey 0`,j=`Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`;function F(o){let e,n;return e=new _({props:{part1:q,part2:z,preprocessor:r,metadata:J}}),{c(){I(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){g(e,t,s),n=!0},p:w,i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}const J=x;function P(o){return S.set(r(W)),B.set(r(j)),[]}class V extends k{constructor(e){super(),b(this,e,P,F,d,{})}}export{V as default,J as myMetadata};

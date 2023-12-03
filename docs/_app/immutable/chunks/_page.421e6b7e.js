import{s as x,n as b}from"./scheduler.fd3686c2.js";import{S,i as D,k as R,m as A,o as I,p as M,q as k,r as v}from"./index.a4ac66b3.js";import{c as w,a as N}from"./stores.3367bda2.js";import{R as j}from"./Runner.95f03202.js";const p="Distress Signal",m="13",d="2022",g="It looks like we just picked up a distress signal, but all of the packets are out of order. We need to unscramble the packets to get the information!",y=!1,_="Sum of indices of correct packets",h="Product of indices of distress signals",$=["TODO: COMMENT, functional, parsing, sorting, recursion"],O=!0,T={title:p,day:m,year:d,description:g,longRuntime:y,result1:_,result2:h,keywords:$,visible:O},q=Object.freeze(Object.defineProperty({__proto__:null,day:m,default:T,description:g,keywords:$,longRuntime:y,result1:_,result2:h,title:p,visible:O,year:d},Symbol.toStringTag,{value:"Module"}));function c(n){return console.log(n),JSON.parse(n.trim())}function f(n){return Array.isArray(n)}function C(n,r){return n>r?1:n<r?-1:0}function E(n,r){return n.length<r.length?-1:n.length>r.length?1:0}function l(n,r){const t=f(n),e=f(r);if(!t&&!e)return C(n,r);t&&!e?r=[r]:e&&!t&&(n=[n]);const s=Math.min(n.length,r.length);for(let o=0;o<s;o++){const i=l(n[o],r[o]);if(i!==0)return i}return E(n,r)}function J(n){const r=[];for(let t=0;t<n.length;t++){const e=c(n[t][0]),s=c(n[t][1]);l(e,s)<0&&r.push(t+1)}return r}function u(n){return n.trim()}function L(n){return n=n.split(`

`).map(t=>t.split(`
`)),J(n).reduce((t,e)=>t+e,0)}function z(n){const r="[[2]]",t="[[6]]";let s=(n+`
${r}
${t}`).replace(`

`,`
`).split(`
`).filter(a=>a.length>0).map(a=>c(a));s=s.sort(l).map(a=>JSON.stringify(a));const o=s.indexOf(r)+1,i=s.indexOf(t)+1;return console.log(o,i),o*i}const W=`[[[[]]],[[[1,2,7,3,10],10,8,4,10]],[1,3,[],6,0]]\r
[[[[9,3,5],[5,9,1,2,9],8],[[],9]]]\r
\r
[[],[6,[],[[6,8,9],4]],[[[10,6,2],[10,8,4],8],3,[2,5,1,1],1,[]],[10,[[2],4,5,[3,6],10]],[5]]\r
[[6,[[4],3],4,5],[],[[[0,5,2],9,5],[9,2,10],9],[[[10],5,2,[3,7,10,7,3]],3,[[],3,9,7,6],[[0,9,9],2,[10,0,2],[9,3,6,0,4]]],[3,7,[9,9,[],[10],[3]],[10,6,[5,8],[4],[3]]]]\r
\r
[[4],[6,9,[[2,8,3],[8,0,5,2]],3,[10]],[[6,3,9,9],[1,9]]]\r
[[[]],[[10,[9,7,3],6,5]]]\r
\r
[[],[],[[[0],8],[],[4,4,9],8],[[8,1,6]]]\r
[[[3],[[4,8],[],7],10,[0,[9,2,1,3,4],4,0,3]],[[],9,5,[]],[1,[[3,10,8,5,0],6,5],[],9],[1,[]],[]]\r
\r
[[[[3,4],0],8]]\r
[[[]],[],[10],[[],1,1,0],[0,[[7,9,6,0],[0,9],[7,0,7,8,8]]]]\r
\r
[[[[0,2,9,10],[1,8,4],6,8,[8,0,5,0]],[[9,5],2,7],1,8],[6,[3,3,[5,5],2,3],1,6,[[7],8,[1,0],8]]]\r
[[10],[[],3,[4,[],3]],[[[0,4,1,5,10]],[0,5,9,10,[6,4,1,6,4]],7,[10,[3,1,6,5],3,5,2],[7]],[[6,7,8,[9,10,5,5],9],6,[7],[4,[5,10,0,4,10]]],[3]]\r
\r
[[],[[],2],[0,8]]\r
[[6,[],3,[9,7,9,[8,0],[9,5,10,8]]],[[[3,4,1,3],6,7,[7,0,7,7,5],5]],[10],[6,0,[6,7,[7,3,10,1],[1,9,8],[0,0]],[9]]]\r
\r
[[3,3],[5],[1,4],[[7],[[6,4,5,2],4],2,4]]\r
[[8,[0,1],[1,[1,2,8,7,7],0,3,6],[10,4,[3]]],[9,3,5,9],[[5,8,[0],6,[]],2],[3,[0,10],1,[[1],2,[8,5,6,1],[7,0,9,9,9],[8,1,1,4,7]],[[8,2,3,2,10],[1,6,6],7,3]]]\r
\r
[[8,[3,8,1,[],[3,5,10,7]],[4],[[],[9,3]]],[[1,[2,1,7,8],6],[[9,9,10],[5,10,5,1,1],[7,10,10,1,3]]],[8,[[10,4,0,3],[3]],[9,[],7,[7,8,2],[]],10]]\r
[[4,[[10,8,3,2],[6]],7,[9,[3,9]],[]],[]]\r
\r
[[9,10,1,[6,8,8],2],[9,10],[[[3,9,8,1],[2,9,9,4]],[[9,10,2]]]]\r
[[[2],6],[5,6,[[4,2],[0,0],[3,3,5,4],10],[1]],[[],9],[],[5,[[6,0,4,8,5],4]]]\r
\r
[[[[0,2,6],[2],[9],[9,10,2]],6,[[]],[[8,9,3],[2]],[[5,9,10],[3],[0,3,1],8,[10,10]]]]\r
[[8,9,[3,[],[1,9,8,7]],4,10],[[],6]]\r
\r
[[6],[9,[],6,[[3,8,4],[5,4,9,0],2],9],[[[1,1,2,8]],[4,[7],[2,7,9,9,0],5],[],4,8]]\r
[[8,6,[],6]]\r
\r
[[[10],[10],7],[],[[[0,0,2,3,0]],[[8,8,8]],[0,[2,7,0,2],5],2,[[],10,10,6]],[],[[[10,9],[8,8,2,4],1,[7,0,9]],7]]\r
[[1,[[9,10,6,7],[2,10,1],0,[4],3],4],[[[9,3,0],1,6,[7,10],[8,9,5]],[9,[2,10,3],9],6,[2]],[],[4,[8,[],[0,6,3],[5,3,3]],6,[]],[]]\r
\r
[[1,[[3,6,8,3,1],0,[6],5,5]],[1,7],[]]\r
[[7]]\r
\r
[[3,10,2,[3,[],3,[7,7,10,9]]],[5,[],0],[6,8,4,4],[2,4,1,[10,[10,8,4],8,[10,2,1,5],9]],[]]\r
[[5,[[1,3],[4,6],[4,6,6,3],4],[[2,10,6],[10,6,1],[2,2]],1],[[[],[9,9,4,7],[4],9,[6,1,9,5,5]],5]]\r
\r
[[],[10,10,9],[[0,[1]]],[0,10]]\r
[[],[9,9,[[7,5,4,3]],0],[[9,9]]]\r
\r
[[[3,2,[3,2],[4,2,2,4,0],1],10,3,[[2,0,1,9],5,4],[]],[]]\r
[[],[7,[]],[],[]]\r
\r
[[[8,6],[],9,9],[3,10,[]]]\r
[[],[[9],8,10],[[9,[6,3,4],[0,2]],[10,[0,2,8],[0,0],3],9,6],[[9,[2],7,8,7],[[6],4,[9,0,1,2],[2,5]],2,4],[[[]]]]\r
\r
[[[0]],[[[10,7,5,4],5,[],1]],[5],[]]\r
[[],[[8],[4,[4,7],1,[7,0,4,9]],3],[[[9],[0,3,2,8]],7,[5],8],[[[5,0,9,4],9,[1,6,5]],7,[8,1,[4],[]],[]],[2,3,[[5,0,4],5,4],[4]]]\r
\r
[[3,[1,10,9],[1,[]],[6,10],1],[[],5,8,7,[[2,6,3,9]]],[7,[[],[3,8,1,9,2]],2,[[4,0],[],5]]]\r
[[1]]\r
\r
[[],[7,7,[[5],0,1,10]],[[[],[4,6,8,9,9],6,6],9,7,[8,5,[0,4],[7,9,6]],[8,[7,9,4],[8,2,8],[]]],[8,7,8,6,[]]]\r
[[[],[[10,6,2,0],[],4],7,[]]]\r
\r
[[9,[],[[],[1,7,5,2],[1,7]]],[[5,10,8,[10,9],9],[6,5],4,0,[[9,7,0]]],[10,5],[]]\r
[[6,[[],3],[[9,6,5],0],9,1],[10]]\r
\r
[[[],0,9,[[10,5],[1]],[1,7,[9,10],[8,7,1],[9,0,9,4,6]]],[[],[2,1,0,7,[]],[0,3,5,[9,3,1,9]],8,[[1,1,7,3,3]]]]\r
[[[0,1,10],[[6,6,4,0]]],[],[7],[[7,[],[8]],5,[[8,5]]]]\r
\r
[[8,[]],[]]\r
[[[6,[1,7,2,0]],1],[0],[1,[[9],[9,2,1,6,8],2]]]\r
\r
[[[8],2,4]]\r
[[],[0,4,[],2,10],[9,[3,8]],[[9,10],[[3,5,4,7,2],[9,6,6,0,6],[1,5,6],[9,4,4,1,9],[2,0,5]],[8],0]]\r
\r
[[0,8,[],10],[],[[1],[]],[],[10,[7,[],2,[],0],5,5,10]]\r
[[],[[],[2,0]],[1,[[9]],1],[9,4,[],1],[2,10]]\r
\r
[[[[8],[2,8,5,3],[7]],[10],8,1],[],[[1,[8,1],[6,4]],3,1,5,[7,[2,1,3,3],[0,0,9],[3,5,0]]],[10,[[10,2,10,0],[8,8,0,8,7],7],3,[6]],[[[7,2],[4,5]],[]]]\r
[[[[8,2,8,7,4]]],[5,7],[]]\r
\r
[[[10],[[0,4,4],1,[9,2],[9,0,9,1,10],10],[0,2,3,[6,1]]],[2,7,9,2]]\r
[[],[[7],10,3,[[0,10]]],[[8,9,[]]],[[7,[0,2,0,10],[8,6,1,9],[6,3,9]]],[8]]\r
\r
[[[[],[4],[10,10,4,6,0],6,[9,10,9,0]],1,5,3],[1,10,[2,2,2,[1,6],0],[],[[]]],[],[1]]\r
[[[[5,8],[],7,[10],1]],[8],[4,[[5],[1,1,4,8],[],1,[]],[[1,3,0,1],[5,3,10,10,2]],1],[[[]],[1,6,8,[6,2]],[[6,10,6,7],[],[2],5],[5,[5,8,3,0],[8],3]],[4,[10],0,[10,8,[8,4,10,4],2]]]\r
\r
[[],[[7]],[]]\r
[[2,5],[[6,4,[10,7,5,5]]],[[1,0,[0,7,8,6,4]],[[9,10,0,10,8],[8,6,6,8]]]]\r
\r
[[[],[0],[9,9,[],0]],[[6,[],7],[6,[],1,[8],9],10,[9],[3,[8,6,5,8,8]]],[3,2,[5,1,0,9],[],[0,[10,4,10,5,8],[2],[],0]]]\r
[[6,3,[]],[7,[[7,5,8,8],4,5,1,[8,2,2,7]],8,[[6,9],1,[0,1,5],10,6]],[[],9,2,[],5],[1,[[],9,[0,4,1],[8,7,8,0,1],5]]]\r
\r
[[[9],[[1,9],[0,1,9],[8,0,5,8,9]],[8,5,[8,8,0],7,[3,2]]],[[9,4,[7,5,1,8],[4,0,9],3],4,[[],[],3,[]],0,7],[6,[8,5]],[[[1,6,4],5],[],9,5]]\r
[[3,6,8],[6,[4,[]],0,2],[[[1,8,8,10],[4,3,6],4],9]]\r
\r
[10,10,8,6]\r
[10,10,8,6,5]\r
\r
[[8,10,8],[8,[[]],8,[[10,9,3,7,4],[1,5,0],[]],9],[8,1,[],[],[[8,1],[10,10,2,1],1,[7,5]]],[[4],3]]\r
[[],[[4,[4,9],[],8,2],6,[4,[3],1,0],2,6],[6,[2,3,5],[[]],[[7,1],[9,0,6,3,8]],[]]]\r
\r
[[],[[[0]],[3],9,[8]],[[0,[8,4,4,6,9],6]]]\r
[[0,[10,6],8,[9,[6,0],5]]]\r
\r
[[[[10]],3]]\r
[[[2,[10,0,5],[7],[5,5,1,4,3],[1,4]],0,10],[5,[[10,9,8,3,6],2],2],[[8],5],[9,6,2,[4,4,4],2]]\r
\r
[[[5,[],1,2]]]\r
[[0,[[1]]],[6,[10,6,1],8,[8]]]\r
\r
[[5,[]]]\r
[[2,[[2,6,3,8],1,4],[[7]],[[],8,[7,8],3,[10]]],[[[4,2],7],[0,[],4,[1,4],[3,9,2,1]],[[9,2],1,[9],[]],7],[]]\r
\r
[[[2,[7,4,5,6,2],5,[5,7,3,6]],0,5,0],[[[2,5,9],[6,10,9],0,7],4,[7],10],[10,10,6,[10,4],6],[9,3,0,[[3,9,6],1]]]\r
[[[],[10,1,[5,6,5,5],[2,1],[9,6,5,7,9]]],[6,[[],[],9],[],[],9],[7,[5,[4,6,10,5,8],[8,6,0],5]]]\r
\r
[[0,0,[[8,1,4,5],[7,1,6,1,7],[8,0],[9],1],[1,3],[[4,7]]],[[2,[7,0]],4,9,[]],[[[3],[1,9,2,10,3],[5],5,[2,5,4]],[10],[]],[],[1,9]]\r
[[[],[8]],[[],[3,2]],[10,4,8,[7],[[7,4],2,10,[9,5]]],[4],[[[],8,4],3,[],4]]\r
\r
[[[[6,5],1,[3],[3],[]],9],[0,[[5,3,4,7,1],[3]],10,[4,[4]],[9,0,6]],[[[],7,[]],[10,5,[]]]]\r
[[5,5,[[4,10,4,3],0,9,2,9]]]\r
\r
[[],[[9,4],8,7,8,6],[10,[[6],[10,4,3,9,5]],6],[[[5]],[6,[7,4,4,2,5],[4,5],5],2,[[6,0,7,9],[6],[2,5,5,2,8]],[10,2,2,4,[]]]]\r
[[6,[3],9],[[7],8],[[[2,1]],[[]]],[[],4,2,3]]\r
\r
[[10,[0],[[6,10,1],[2,9],[10,3,3,6,3],10,0],4,[]]]\r
[[[[],10,[4],[6,1,4]],7,[]],[8],[[[],[0,3,3,3,8],[],10]]]\r
\r
[[9,0,9],[],[[]],[4,[],[[5,1,0],[6,7,1],9,[4],8]]]\r
[[],[[],2,[]],[[[4,8,6,3],5,[6,9,5,0,10]],[[9,8,3],[5,1,1],4,[3,8,2],10],[],5]]\r
\r
[[],[[],2,[3,[9,10,3,3],[6,6]],10],[0,[[0,9],0,1,[1,10,2,10]],8]]\r
[[4,1,3,10,[[6],[],[0,10],9,10]]]\r
\r
[[[],10,9,7,[]]]\r
[[[]],[4,[[10,1,7,5,0],[10,3,7,10,10]]],[8,3,[6,0,6,[10]],[8,2]],[[[10],6,1,5],6]]\r
\r
[[[[4,4,8]],6,2,[[5,8,0,1,7]],[]],[3],[[[0],9,7],[[6],9,[1,10],[4,0,3,8,6]],[[],4,[6],4,[4,0,6,7,3]],1]]\r
[[[]],[[4,[3,0,2,10],[10]],[[1,7]],[]],[6,6]]\r
\r
[[2],[9],[[2,6,[]],[],6,[5,8,8,[5],[]]],[[[0,2,9,10]],0,[6,[10,6,3,4,10],[8,5,6],6,3]]]\r
[[[],7],[4],[8,2,[1,3,7,7],[],[[7,7,3,5],3,[0,7],[]]],[[10,[8,8,10]],[8],[[5,0,8,10],8,10]],[[[0],[0,5,9],[2,4,8,1,1]],[[8,9,10,6,7]],1,0,[0,6,[6,1,7,3]]]]\r
\r
[[[[],5,[],8,2]]]\r
[[7,[[],0,[2,0,2,9]]],[],[],[9,[],7,5]]\r
\r
[[],[],[],[[[8,1,6],[],8,9],[9,8,[8,10,0,3],[4]],6,[[2,1,3],[5,10,3,0],4],[[8,8,10],[0,7,4]]],[[[8,5]],1,1,7]]\r
[[],[[[2,0,6,4],[1,0,2,0,6],[1,3,4],[8,5],0]],[0,[[0,5,1,3],[2],0,6],[]],[[[8,2],[3],9,[9,0]],[1,[],9],[1],[6,4,[0,5,9,8],[4,9,8],3],[[1,4,3,5],1,[6,10,6],5,2]]]\r
\r
[[[[6,6]],[7,[1,1,3,4],5]],[10,10,6,0,[[6],[7],4,9,1]],[3,9],[3,10,10,[1,[4,5,5],6,[3,3,10]]]]\r
[[[6,6,9,[3,8,3]],9,10,5]]\r
\r
[[6,4],[5,[[2,3,5,9,9],4,[9,6,0,9,1],[4,9]],2,[],10]]\r
[[],[]]\r
\r
[[],[],[],[]]\r
[[[],[[6],6,[4,2,6,3,10],5,7]]]\r
\r
[[[[10]],2,7],[[[1,9,1,3],[6,3,6],[6,0,4,4,3]],[3],8,[0]],[],[[10,9,[9,5,0,7,3],9,[4,3,9]],[6]]]\r
[[[10],3,9],[[[0]],4,0]]\r
\r
[[6,[[3,5],10]],[[[8,5,8,6],10],[[7,3],6,[3,7,2,5,5],[9,2,8,1],0]],[[[]]]]\r
[[[],6],[[1]],[],[],[[[2,1,0,1,3],[4,6],10,2]]]\r
\r
[[[[3,1],[]],10,0,6],[],[[3],9,[],2],[9,[3]],[4,1,[[9,0],9,8,3],2]]\r
[[9]]\r
\r
[[9,9]]\r
[[8,[7],[[10,8,6],[1],10,[5]]],[0,[7,8,8,[10,6,2]],[9,[6]]],[],[[4,2,0,[4,9,5]],2,7,[],6],[]]\r
\r
[[[8,2,[6,8,3,6,7],[2,10],[]],8,[7,[]]],[5,9,2,8,9],[],[5,[6,[5,3]],[]],[]]\r
[[[10,8,1,8,[]]]]\r
\r
[[],[[[2,4,7,10],10],6,[],5]]\r
[[5,[1,0],1,5,4],[[2],[[10,5,6,9],10,3,1]],[2,9]]\r
\r
[[[2,[1,1,5]],[[],[7,0,10],[1,7],[6,10]],9,[[1],[],[5,0,5,3,8],[6,7,3]]]]\r
[[[[4,0,5,1],2,[1,5,6],8],3,2,[[3,0,0,4],[2,4],7,[0,9,10]],1],[],[[[3,2]]],[10],[[[7,10,0,4,6],[1,10,3],7],0,[[0,1,9,6,1]],[4,1,3]]]\r
\r
[[[7,6],6,[8,4,[],[],[8]],8],[[8,0],[0,6,[]],[[8,4],4]],[9,2,3,9,[[],[2,2,5,6],[10,9]]]]\r
[[10,6,8],[7,5,0,[[],[6],3,2]]]\r
\r
[[4,6],[0,10],[],[4,7,[[3,10],0,7,[2,10,4,2,9]],[[3],[9,0]]]]\r
[[[],[[],[2,5,8]],7,[[10],[0,0,7]],[1,6]]]\r
\r
[[],[],[2,4,[9,[],[4,9,6,0,6],[6,2]]],[[9,[],[3,4,9,1]],10,[[6,5,3,6,2],[],[7,8,2],[7,8]]]]\r
[[3],[[[]],0,[[],[0,3,9],5],7,0],[5],[[2],[[9,5,7,2,10],[0,7],9,[4,3]],2]]\r
\r
[[9,[5,6,[],[1,5,4,7,9]],[]],[[[],9,4,[3,5,2]],1,8,6,[2,[]]],[[[8,5,4],[10,0,7],1,2,[7,3,5,0,6]]]]\r
[[[[0,1,6],[8]],0,[]],[[10,[0,5]]],[0,0,[[1],2,9,[]],[]],[[[1],[],[2]],[[7,5,7],9,7,[6,1,4,7]],[[7]],[7,0,4,6]],[9,7,2,[],[]]]\r
\r
[[4,3]]\r
[[[8,0,5,6,[7,10,10,0,4]],[[7,9,6,3],5],8],[7,5,6,4],[]]\r
\r
[[[8]]]\r
[[[[7,2,4,2],1]]]\r
\r
[[],[6,[5,[],5,7,[0,3,6]],[3,[9,1,6,0,8],7,7,5],0,[[3,3,5,0],[8,4]]],[[[5,6,3,8]],9,10,5]]\r
[[7],[],[[6,[],4]]]\r
\r
[[[]],[[[10],10],10,[[10,8,4,1],[4,3,6,4,8],9]]]\r
[[1,7,[10,6,9,[0,7],8],7]]\r
\r
[[8,[[4],[4,4,5,3],2,10,2]],[0,[5,10,[]],5,[[8],[],[7,8,10],5]]]\r
[[[9,5,0,[5],9]],[[5,[],[10,8,2,10,5]],[6,0,[6,7,3],[],[]],[[6,1],2,[2,9,5]],6,[4,[9,7,2,6,0],[1,3],[0,1,1,0],0]]]\r
\r
[[[[6,5,3,2]],5,10,1,7],[],[5,5,[[6,3],[3,5],1],5]]\r
[[8,[[9,2,9],[3,4,3],5,[7,8],[8]],9,7,[[6,3,10,1,3],[9],[2,4,0,9]]],[[[8,1],9,5,[3]]],[7,[[10,2,6,3],[6,10,5,6],[4,7,2,4,7],[]],[4,6,1]],[[]]]\r
\r
[[[[6,9,8],[],[],[7,3,6,2,0]],[9,[7,2,10],3,2],[[4,5],[2],[2,7,5,1,2]],7,[10,[3,1,6]]],[10,[[5,0,9],[5,1]]],[7,[[],[6,0]],10,3,9],[],[[[],9],10,2,2,[]]]\r
[[[9,9,[9,3,2,9]],[],0,[4,[10,7],[5],[8,3],5],9],[],[0,1]]\r
\r
[[[[10],[6],[]],3,[[2,7,9,1,4],[6,9,5,3],[7,3,7,0,1]]]]\r
[[],[[[6,4],0,[8,8,8,0]],1]]\r
\r
[[5,6,[7],0],[9,10,9,[]],[[4],2,0]]\r
[[[6,[7,2,10,6,0],8,[],[9,1,3,2,5]],3,[9,4,[0,1],[3,7,7],[6,0,2,7,8]],[[4,5,6],7,1,[9,7,8]],[[0,5,3],[3,1],6]],[1]]\r
\r
[[[[10,5,5,1,2],6,10,[9]],0,4,[0],[8,3,1,1]],[7,7],[[5,[],[4,7,4,8,5],[9],0],7,8],[10,[[7,3,1,1],1,7,[],[4,9,2,2,6]],[[9,9,5],[4,0]]]]\r
[[[[],3,[0,10,2,10]]],[2],[[[9,6,9,0,10],6],[10,[2],1,10],[[9,3,4,7],10,[4,2,10,9,2],0],[]]]\r
\r
[[]]\r
[]\r
\r
[[],[[3,[0]],[4,0,3,[8]],9,[]],[6,[[6],2,[6,5,6,10],2],[2,4,[8,10]]],[2]]\r
[[7,[8,[7,5,4,6]]],[],[9,6,[[6,7],9,[3,5,10,6,9],[5,3,4,2,5]]],[[[3,10,0,7,10],[2,2,5,1,4],4],10,7]]\r
\r
[[[[9,5,0,10],[1,4,7,10,6],6],2,[3]],[[],7],[],[9,10,[],[5,[9],[],[2,5],8]],[7,[9,[7,5,4,4,9],1]]]\r
[[[[8,5,8],[9,4,10],[]],7,[0,6,8,[10,3,5]]]]\r
\r
[[],[9,[[9,3,10,2,1],5,[6,7,1,8],[8,8,8]],[[0,8,8],[],[3,8,0,10]],2,[2,[6,6,0,10,4]]],[7,[[4,0],[10,9,8,6]],[5],[5,10]]]\r
[[[8,[7,1],3,[],[9,8]],[8,[]],[[1,4],[4,1,8,5],5]]]\r
\r
[[[[0,2],[10],0,[]]],[[1],[3,5,[],2]]]\r
[[[10,[9],1],[[],9,8],6],[0],[[7,1,10,3,[6,0,9]]],[[2]]]\r
\r
[[1],[],[0,5,3,[10,10,7,[3,8,3]]],[[10,[9,6,3,7,0],4,3,7],3,[6,[4,2,3,6],[5,9,3],[7,1,9,10,8],[8,4,1]]],[]]\r
[[[[6,9,4,10,3]]],[9,[4],[[1,8,5,4],[4],[5,2,3,8],[],[2,3,8,9]],[7,8,3,[]]]]\r
\r
[[6,8],[7]]\r
[[[[0,6,2,7,6],[0]],7,[[2,4],[3],[6,2,6,8,9],[4,7,1,10,8],[8,6]],7],[8,2,[[0,6,0,4],7],8,6],[2,6,[3],7],[[0,[3,6],0],[],4,2]]\r
\r
[[3],[],[],[9,6,[0,8,[2,2,4,8],0,[5,2,7,4,8]]],[[5],[[],0,[6,0],9,7],2]]\r
[[3]]\r
\r
[[10,[[9,0,0],0,9,8],5,6],[[7,[10,1]]],[6,4,6,[2,10],[[10],[10,7],3,[0]]]]\r
[[[10,[6,4,1],3,5],3,4,[9]],[[[7],[],3,[9,7,4],[]],[6,2,7,[9,4,10,10,1],4],[],4],[[0],[0],[[10,5,0,5],[],[6,7,3,6,1]],[[7,5],[],1],[]]]\r
\r
[[0]]\r
[[0],[],[[4,[7,1,4],8],9,4,[[2],[6]],3],[5],[[],2,[[1],4,6,[10,9,1,0],10],2,[]]]\r
\r
[[1,[0]]]\r
[[[6,[4],[7,8]],[3,0,7,1,0],10,8],[[]]]\r
\r
[[[1],10],[7,4,3],[4,[[2,1]],[10],[[1,5,9,1,8],[3,2,5,9],[9,7,7,5,8],[5,2,8]]],[[],[9,[2,5,5,7,2],2],8]]\r
[[[1,[0,7,7,10,4],7],[[],4],[10,[2,5,0],[9,9,7,2,7],[1,9]],9,[]],[8,[[],[]],[7,3,10]]]\r
\r
[[[[],[10,0,10,9,3]],[1,[10]],[9,[8,2,7],6,[1,9,1]],4,10],[[[]],0,4,1],[[[],0],[[3]]]]\r
[[5],[3,6,[[7,10,6]],0],[],[10,[[4,7,4,1],[8,9,9],[5,4,6,6,7]],[9,[1,7,10,4,1],0,[],7],1,7]]\r
\r
[[2,[[]],3,[[2,8,9,4,5]],[5,10,5,[7],5]],[2,[0,5],[4],9,[[],9,2,8,[7,6]]],[[4,[7,6,10,2,7],[0],7],8,[]]]\r
[[],[[[0],3,[1]],[5,6,[7,0,7,3],10,10],[4,5,[],10,6],[[6,0,8],[1,0,10,2],[10,3,1],0,[]],[[2,6],[4]]],[[],[[6]],8],[]]\r
\r
[[0],[[[2,4,5,1,3],6],0,3],[5,8,[[3,5,0,9]],7,2],[10,[7,[10,3,2],10,[5]]],[3,9,6,[],[[9,3,1,1],6]]]\r
[[10],[4,[9,[9,6,2,5],4]],[2,[[9],[0,9,6,4],[2,5,1,1],2,3],1],[[8,[6]]],[10,6,[0,[1,1,10,8,2],8],[2,[4,7,10,10,5],10,2],[0,9,[3],[4,1,3,9,3]]]]\r
\r
[[2,4],[1,6],[],[[5,[6,0,0]],6,6]]\r
[[[0,[7,4,8,5],[9,2,10,3]],10,[[9]],0,[7]],[[[10,6,7],2,10,[9,0,9]],[[3,6,2],[9,6],5],6,7,[10,3,[2]]],[3]]\r
\r
[[[[2,7,2,7]],9,2,7,[[10,4],[10]]]]\r
[[],[8,5,[],[5,[10,9,3]],1]]\r
\r
[[4,8],[[[7,3,6,8,7],[0]],10,[7],0,[9,8,[5,9,8,7],2]],[7,8],[[],5,6,[4],[]],[[[8,6,10],5],[]]]\r
[[[0,2,[9,10],5],[1,[1],[6,4,4,2],[],[8]],[0,[9,6,9,9,7],6],[[],8],0],[3,10,[[7,6,0],[5],10],3,[9,3,[0,10,3,9]]],[1,[2],[],[6,5]]]\r
\r
[[0],[3],[[[8,10,5,3,1]],4,3,9]]\r
[[[3,[]],[[],1],[4,9,9],3],[4,6,[8],9],[[[1,1,10,3,5],0,10,[3]],3,8,[]],[7]]\r
\r
[[2],[]]\r
[[8,[[9,6,4],[4,7,3,6],[2,4,4,9,8]],[9,4,6,6,[1,8,5,9,1]],2,7],[2,[2,[0],10],[]]]\r
\r
[[5],[[[9],[9,0,10],1],10,5,8],[5,4,4,4,10],[7,0,[[2,1],1],[3]],[]]\r
[[6,[5,[],[6,0],[4,1,10],6],6,[]]]\r
\r
[[[0,5]],[]]\r
[[9,10,[2,[],1,8],5],[0,[],7,3,[]]]\r
\r
[[1,[[],5,1],9,[[3],[],2,10,[5,7,10]]],[4,[10,[5]],[9,9,[6,1,8],0,[3,8,4,9]],7],[[4,[0,6]],[0],[[8,10,8,7],[5],[4],[5,3],0]],[2,3,[9,[1,7,5],[5,0,2],[]],[[3,8],9,9,[0,1,7]],10],[]]\r
[[[[2,9,7,8,1],7,[1],3,[]],5,8],[7]]\r
\r
[[5],[[],[0,[9,3,9,4],7,[9,0]],5,[0,8,1,[4,3,7],6],5],[0,10,8,8]]\r
[[[],[1,[10,5,9,6,9]],3],[2,[[8,7],0,[10,10,9,8,5]],9],[0,[]]]\r
\r
[[[],[6],[[3,4,6,9,3]]]]\r
[[[[7,8,5,9],[4],0],[[6,5,1]],4],[],[9,[[2,7,7,0],[10,5,0]],[[4,2,6,3],0,[8,3,3,10,4],6,10],[[],5,[8,9,0]]],[4,[[5,4,10],[6,3,1,3],[],[3,9]],[[1,9,2,7],2,3,7,1],[[4,10,5,1],8,[1,5,8,7,5]]],[[10,3,[],[]],5,9,0,[[4],[0,8,4],[4],[8,7]]]]\r
\r
[[[4,[2],[9,10]]],[[[4,9],7]],[2],[[1,[6,0,10,6],0]]]\r
[[],[7,[],10],[[8,0],[]]]\r
\r
[[],[4,4,10,4],[4,1,[4,[4,8,8,2],5,[2,6,1,6],10]]]\r
[[[6],0,0,[7,[5,3],[],3,1],10]]\r
\r
[[[2,9,[5,1,6,4,10],10,8]],[[0,[10,9,1]]],[]]\r
[[[[8,9,8,8,9]],5,7,8]]\r
\r
[[],[[],3,3],[6,[1,1,[9,4,9,1],[4,10]],[[7,6,6],[0,5,10,4],1,6,9]],[],[[[1,4,9,10]],[[8,5,5,6],1,8,[9,7,9,0,6]],0]]\r
[[9,8,10,[7]],[[6,[],4]],[[],[8,[5,4,7],[5,1,3],[9],[8,9]],[10,[5,8]]],[4]]\r
\r
[[[4,[0,7,9,1,9]],4,[8,[8,9,1,9,9],[3,9],2],[],[1,9]],[[0,[1,4,1]]]]\r
[[[[0,10,0,5]],[0,1,[7,5,4]],[[6,3,8,1],7,9],2],[0,[[5,3],6,[0,1],[8,7,9,10,6],0]]]\r
\r
[[[0,[4,8]],[8],[[],7,[9,7,3,4,6],2,[9]]]]\r
[[],[[],1,7],[[],[[4]]],[[3,8],[],9,[[4,1,9],5,[8,5,5,3,2]]]]\r
\r
[[[5,[4,4,9,1]],5,[8,4,2,10,[1,7,1,8]],6,[[4,8,7],[7,5,2,10,0],5,[3,10,7,7,8],[4,3,2,3]]]]\r
[[[],[1,[5,1,4],[3,2,4]],7]]\r
\r
[[[[6,2,4,0,1],0,5]],[[6],7,[8,5,[10,5,6,1,4],[9,6,7]]],[7],[[[2,7,1,4,10],[6,3,5],6,3,[3,5,0,1]],[3,5,4,9,1],3],[[[],10,[10,9,7,1,6],[9,2,8,7]]]]\r
[[[[6],[4,1],[]],[6,10,10,[4,9,0,6],[0,5,8]]],[],[5,3,2,7,[5,[7,10,10,7],7]],[]]\r
\r
[[],[],[0,[[]]]]\r
[[[1,4,1,0]],[8,4],[3,5],[1,[1,[8,9,10,7],6,[]],[5,3,[4,7,1],8],[[7,8,3,5],4,[3,10,4,3],[2,6],6],3],[[[6,2,6],8,0]]]\r
\r
[[5],[[4,10,[3],0],6,2,[4,2,[4,9,5,4]]],[4],[6,10,10,2,[]],[6,[1],5]]\r
[[],[10]]\r
\r
[[8,[],8,2],[],[[5,[9,3,7,7]],1,[9,2,2,5,[6,4,8,5,0]],[[],[6,0,5,2,7],[9]],2],[]]\r
[[],[3,[0],9],[4,10],[[[8,7,4],[5,2]],[3],[[9,6,8,2]]]]\r
\r
[[7,[[0,3],2,[10,5],[2],1],9],[2,3,[[3,3,0],7,3,[4,5]]],[3,[],[[10],7,8,[]],[[3,9],1,[1,6],0,8],[[]]],[],[]]\r
[[4,[],0],[[6,2,[7,5,10],[7,6],4],10,0],[4],[]]\r
\r
[[1],[[[2],7],10,[9,[7,7,0,8]]]]\r
[[4,[2]],[[5,6,[10,10,9,9],[0]],7,[1,[],5,[4,0]],[],[]],[5,[4],[[0,9,3],[6,1,6,1,8],3,[7,4,3,3,8]],[[8,1,0,10]]],[1,[5,2,3]]]\r
\r
[[5,[[5,8],[],[8],0],6],[]]\r
[[4,5,[4,4,1,8,[6,2,3,4,5]],8,4],[[0,[6,3],10,9,5],[[8,1,7],3,7,[10,4,4,0],7],[10],[[8],[4,9]],[[9,5],[8,10,9],7,[8,0]]],[4,0,[],2]]\r
\r
[[6,[8,[]],[]],[[],4,[]],[],[[5,[3,7,5]],[9,[0,4,0]],[1],[5,[10],[2,4,9,0,6],0,[5,10,7]],[[2,10],3,[5,10],4]],[[],[1,2,[9,0,9,7,10]],9]]\r
[[],[[4]],[[[5,3],5,[1]]],[10,[10,[7,10,9,7,0]],[],7]]\r
\r
[[7],[5,[[],[3,10,0],[5,5,0,10,5]],8,[[6]]],[5],[[],9,0,7,[0]],[[2,7,3],3,6]]\r
[[[],10],[0,2,1,[[]],[6,4]],[[10,[2]],[7],[2,5,[]],[[],[0,0,5]]],[10],[]]\r
\r
[[[[9,8,4,2,5],3],[[1,7,8,0],0,4,4,6],[[6],7,9,[]],[[],[4,6,2,0,6],9,0,[0]],[[7],9,9,[0,4,4,3]]],[],[[5,[],0,[]],7,[[4,9,6,7,6],[],[10,4],2],8],[[[2,4,3]],4,8,5],[9,8,0,9,5]]\r
[[2,1,[[4,3,9,0],9,3,3,[2,5,8]]],[[[8,5,3,3,1],9,[0]]],[[],[[],9,2],[[1,8,9,1],0,10,[6,1]],9,10],[[[3,3,4,9],5],[4,[]],[0,0,6],5],[1]]\r
\r
[[2,[2,5,[9]],[1,[8,7,2,5,2],[7],[],[6,3,2,4,1]],9,8],[6]]\r
[[[[0,3,4,5,5],[8,10],4,4],7,[1,1,[],[5],[]],3],[5],[],[],[0,10]]\r
\r
[[],[1,2],[]]\r
[[[10,[7,2,10,7],10,4],[[9,9,5],9,[9,1,0,0,6],9,4]],[[],10]]\r
\r
[[6,10,[6],10,[]],[[[6]],[],0],[8,7]]\r
[[7,[8,[6,4]],10,[6,8,0,[],3],[[6,5],[9,7],[1,7],[6,5],9]]]\r
\r
[[[[1,9],5]],[[],[[10],[0]],[[8,1,10],2,[1,9,2],[]],[[5,10,3]]]]\r
[[[[1,8],[2,9,10,1,8],9],4,5,10],[5],[8,9,10,[7,0,[9,9,0,10,5],4]],[[]]]\r
\r
[[[0,2,5,0,2],6,2,4],[],[0,[9,1,0,[1],1],[]],[0,[[1],8,3,[1,7,0,10],2]],[3,5]]\r
[[0,[[4],[7,0,10]],3],[],[1,7,[],3]]\r
\r
[[[[5],[6]],7,[7]],[[3,2,9,[0,8],6],[[5,5,6,7],[4,4,6,0,8],8,[10,4,0,3]],[8,[3,3,3,4,6]],[[6],[8,4,4,8,2],[3,3],4,6]],[[3],[7,[10,1,0,7],6]],[[9,[]],[9]]]\r
[[0,6,4,8],[],[1,[3,[9,8,5,2],[0,3,0,9,9],3],6,[[1,4],[],0,[0,9]],[1,6]],[8,[1,4,6],[[2,10,6,7,8],[8,6],4]],[7,8]]\r
\r
[[],[8,[6,[10,3,9,0]]],[[0,[8]]],[3]]\r
[[9,3,[3,8,8,[8]],[[],8],[2,[6,5,8,5,0]]],[],[[0],2],[[3,[2]],[2],7,4],[]]\r
\r
[[[4,5,[9,1,5]],[[2,2],2,[],3,10],8],[[[]],2,2],[10,[[10,8,1,10,1],10,1,10,[8,10]],[[4,5],4,[9,7,7,1],[0,10],[1,7,9,5]]],[8,5],[5,[4,0]]]\r
[[8,7,[[4,1,5,6,10],9,[4]],[7],3],[3,4,[[],3],0]]\r
\r
[9,3,6,10,8]\r
[9,3,6,10]\r
\r
[[3,[[6,8,8],10,0,0],9],[4,2,0,[2,[6],[9,8,2,7,2],6,[]],[[1,7,8,4,7]]],[],[],[10,9,[[0,4],[6,4]]]]\r
[[7,8,[]],[6,[[6,5,2,9,10],5,8]]]\r
\r
[[1,[1,[],[],[]]],[[10,[5,3,8,0],[4,5,4,0],[1,0],1],[[6,0,9,10,6],[5,3,4,6,5]],0,[6,[3,10],0,[10],9],[[2,0],[5],[6,2,5,8],10]],[[1,[2,9]]]]\r
[[[9],[1],2],[],[[],10,[[8]]]]\r
\r
[[9,[],[],[8,7,[7,6,5,5,2]]]]\r
[[8,3],[],[[[10],[9,5,1]],[],2,0,[5]]]\r
\r
[[9,8,2],[]]\r
[[8,[[2,10],[8,1,0,3],[9],7],[[2],3,0,5,8],2],[[[4,4],8],0,8,9,6]]\r
\r
[[[]]]\r
[[],[[10,[],[6,7,8,5,10]],4],[[],4,8,[]],[[5,3],1,2]]\r
\r
[[[6],[1,7,4,6],[3],[[],3,[],7],[5]],[3,8,0],[[[7]],[8,[7,2,7],[6,10],[1],[10,3]]],[3],[]]\r
[[5,[[7,0,3,10],[3,9],[0],[0,0,9,3],[1,5,1]],0,2],[],[[8,[10],4,4,[9,2,8,3]],10,5],[[[6,5],[2],[2,9,4]],9],[[8,[4,1,6],5,[4,8]],[],7,[],5]]\r
\r
[[3,6],[[[10,2,7]],5,[[3],[10,9,8],3,[6,7,4,10]],4,[7,[9,10,4]]],[2,5],[2],[]]\r
[[9,[3,[8,5]],3,3],[[10,0]],[],[6,10,2]]\r
\r
[[2,[[8,10],[3,2],5,10],5,2],[[3,1,9,7]],[0,9],[[[10]],[0,[6,3]],[5,[]],7],[7,6,[8,[3,1,0]],[0,[6],[1]],6]]\r
[[[[8,0,6,5],2],4,[[4,10],9],0,[2]]]\r
\r
[[[[0,8]],9,[[6,2,9],8],1,2]]\r
[[[7,[]],[]],[],[],[[[],[9],[8,7,0,3,1]],4,[[],[1,5]]],[1,[2,[7],9,[9,7,6,2,5],0],4,[[6,9],10,2,[2,8,1,5,7]]]]\r
\r
[[4,5,0,10],[[5],[5,1,[1,5,1,10],5],7,[]],[],[[[7,1,9,6]],4,0]]\r
[[7,5,7,10,[4,5,6,[],[9,8,2,5]]]]\r
\r
[[],[[9,[],[7]],5,7],[3,10],[3,[4,[6,2]],8,8],[7,3,[[3,1,2]],[9,[1,4,10,4,2],2,9]]]\r
[[8,6,[]],[[2,8,[10,3,4,7],[7,7,2,6,6]],[[1]],[[3,3]],[[10,2,6,7],3,[1,2],0]]]\r
\r
[[[[8,9,7,7,7],10],4],[5,[],2,7],[[[9,0,9,7],10,[3],0],[[7,3,6],5,[2],8,[4,5,6]],1,[9]]]\r
[[[[7,5],9],0],[1,[[8,3]],2,4,[[8,9,8]]],[[3,[2,2,1,5,4],[7,0],[9]],4,[[8],[7,9,10],[9,0,0,4],3,3],[6,1,4]],[[2,5,[2,10,7,0],4,2],[]],[8,[[7,5,3,5],[2,10,6,5,2]],[0,0,[],1]]]\r
\r
[[[4,[]],8,[],4],[[2,[6,6,9,3,4],1],7,9,[[2,9,5,0]],5],[[1,[4,8,4],[6,7,9,9],8,9],2,6],[[],0]]\r
[[6,[6,[7,6],4,[4,8,10]],[],[6,[7,5,1,3,0]],[6]],[0,6,[[5,8,8],0],7],[[[2,3],7],0,5,4,6]]\r
\r
[[[[8,4],0,5],[],7,6],[4,[],5,6],[1],[4]]\r
[[6,[1,[],[4,4,0],0],4,[1,0,5,0],8],[],[[7]],[],[[],9,5,3]]\r
\r
[[[3,9,[7,0],[]],[],[]],[8,8,10,[[2,3,6,6,2]]],[],[[[6,6,1]],[[2],9],[4,8,5],[4,9,5,[4,9]]],[9,[[3],[2,6]]]]\r
[[[5,8,4,3,3],1]]\r
\r
[[],[[6,[1],3],4,[0,[2,8],4]],[[0,[7],[],0,[0]]],[[[5,3]],[[],2],5,10],[[[2,4,4,9],[7]],[9],7]]\r
[[6,[6,[5,2,10,10],7,6],9],[8,6,10,[5,[4],[7,4,3]],[[6,8,8,6],[7]]],[[8,5]]]\r
\r
[[9],[]]\r
[[],[],[[[1,1],0]],[[[10,6]],[[3,10],[10,0],4,7,[2,5,9,1,5]],[[6],8,7,[1,5,5,3],2],[6,[3],8,[1,0,7,8,8]],[[6,0],[],10,1]],[5]]\r
\r
[[3,0]]\r
[[[[7,10],[7,9,1,6,6],[0,0,1],[4],7],6,2,1,3],[[5,8,[6,3,6,6,2]]],[4,[[1,4,5],[8,7,1],[9,7],7],[5,6],[[10,9,4],7,0,10,[2,0,1,9]],8]]\r
\r
[[[],2,[[6,4,8,2,1],9,6,[4,10,6,7],[8,8,5,1]]]]\r
[[[],[[5]],4,0],[5]]\r
\r
[[1,2,[2,1,[8,6,9,5]]],[],[[],[[1,10],4,[4],9,[4,10,6,8]],[5,[6,0]],4,9],[0,[[3,4],[5,0,10,9,4],0],[],[7,5,3],[7,[5],[]]],[8,6,7,[[5,4,6,2,9],[9],[],[6,2,1,4,10],4],[[3,8,3,2],[7,3,10,8],7]]]\r
[[10,[6,8],2,[[],2,10]],[]]\r
\r
[[1,[8,[],10,[10,2,8,8,3]],[],0],[],[1]]\r
[[4,[[4,9]],[4,[],3]],[4,[0,6],7,[7,8,0,5]],[[8,5,[],3,[]],1,[[10],10]],[[2],2],[[1,4],7,8]]\r
\r
[[8],[[4],[]],[[[3,2,1],[9,4,8],10],2]]\r
[[[[4,5,9],4,5,[4,8,9,8,8],9],[8,7]],[8,10,10]]\r
\r
[[[[4,8,2,7],9,6,6],[4],[[6,9,4,4],8],0,[0,10,9]],[],[9]]\r
[[4,10],[1,1,2,[]],[1,[8,[]],[9,[]],[],5],[],[8,[],0,5,10]]\r
\r
[[3,6,2,[[0,4,8,6,2],[1,10,1,5]],8],[[[2,4,9]],10,7,[5,1]],[[[1,7,9,7,7],3,3,10,1],[[3,5,0],2,[7,5]],4,[[9,7,10,6,2],[7,6,10,9,0],[7],5]]]\r
[[[6,9,[5,3,2,7]],[0,1,2,2],1,[6,[],1]],[[8,4],[[4,4,4,0,0],[9],[2],3,[8,3,1]]],[2,[]],[8,[]],[1,[[0]],4,5,[[3],10,[1,4,2]]]]\r
\r
[[[]],[1,7,9,9,[7,8]],[],[[[2],10],2,1,[[2,4,10],[10,6],3,9],9]]\r
[[0,2,10],[[],3],[[[0,2,6,5],[5,4,4]],[],[],[],4],[[1,[2],8,[7,8,0,3,7]],7,7,1,[2,[8,3,1],[],[7,8,2,7]]]]\r
\r
`,B=`[1,1,3,1,1]\r
[1,1,5,1,1]\r
\r
[[1],[2,3,4]]\r
[[1],4]\r
\r
[9]\r
[[8,7,6]]\r
\r
[[4,4],4,4]\r
[[4,4],4,4,4]\r
\r
[7,7,7,7]\r
[7,7,7]\r
\r
[]\r
[3]\r
\r
[[[]]]\r
[[]]\r
\r
[1,[2,[3,[4,[5,6,7]]]],8,9]\r
[1,[2,[3,[4,[5,6,0]]]],8,9]`;function F(n){let r,t;return r=new j({props:{part1:L,part2:z,preprocessor:u,metadata:G}}),{c(){R(r.$$.fragment)},l(e){A(r.$$.fragment,e)},m(e,s){I(r,e,s),t=!0},p:b,i(e){t||(M(r.$$.fragment,e),t=!0)},o(e){k(r.$$.fragment,e),t=!1},d(e){v(r,e)}}}const G=q;function H(n){return w.set(u(W)),N.set(u(B)),[]}class X extends S{constructor(r){super(),D(this,r,H,F,x,{})}}export{X as default,G as myMetadata};
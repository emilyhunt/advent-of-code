import{s as k,n as M}from"./scheduler.fd3686c2.js";import{S as _,i as C,k as O,m as P,o as B,p as F,q as N,r as U}from"./index.a4ac66b3.js";import{c as z,a as A}from"./stores.8535f7e5.js";import{R as E}from"./Runner.d324d109.js";const d="Beacon Exclusion Zone",b="15",S="2022",g="Our sensors are picking up multiple beacons, but none of them are the beacon that we're looking for. Can we find the only valid location? (This one was HARD.)",w=!1,p="Number of full slots on row",$="Tuning frequency",v=["sets","classes","arrays","geometry","ranges","difficult"],R=!0,I={title:d,day:b,year:S,description:g,longRuntime:w,result1:p,result2:$,keywords:v,visible:R},q=Object.freeze(Object.defineProperty({__proto__:null,day:b,default:I,description:g,keywords:v,longRuntime:w,result1:p,result2:$,title:d,visible:R,year:S},Symbol.toStringTag,{value:"Module"}));class c{constructor(t,e){this.x=Number(t),this.y=Number(e)}static fromString(t){return new c(...t.trim().split(","))}copy(){return new c(this.x,this.y)}manhattanDistance(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}}function D(o){if(o.includes(":"))throw"Sensor and beacon strings must be split before passing to this function";const t=o.indexOf("x="),e=o.indexOf(","),s=o.indexOf("y=");if(t===-1)throw`Unable to find X value in string: ${o}`;if(e===-1)throw`Unable to find ',' in string: ${o}`;if(s===-1)throw`Unable to find Y value in string: ${o}`;const n=Number(o.slice(t+2,e).trim()),a=Number(o.slice(s+2).trim());return new c(n,a)}function T(o){const t=[],e=[],s=new Set;for(const n of o){const a=D(n[1]);t.push(new X(n[0],a));const i=`${a.x},${a.y}`;s.has(i)||(s.add(i),e.push(a))}return{sensors:t,beacons:e}}function V(o,t,e,s){return{PxUpper:(o.x*t.y-o.y*t.x)*(e.x-s.x)-(o.x-t.x)*(e.x*s.y-e.y*s.x),PyUpper:(o.x*t.y-o.y*t.x)*(e.y-s.y)-(o.y-t.y)*(e.x*s.y-e.y*s.x),denominator:(o.x-t.x)*(e.y-s.y)-(o.y-t.y)*(e.x-s.x)}}function j(o,t){return[new c(o-1,t),new c(o,t+1),new c(o+1,t),new c(o,t-1)]}function W(o,t,e,s){const{PxUpper:n,PyUpper:a,denominator:i}=V(o,t,e,s);if(i!==0){const r=n/i,x=a/i,l=Math.floor(r),y=Math.ceil(r),u=Math.floor(x),f=Math.ceil(x);return l===y&&u===f?[`${r},${x}`]:[`${l},${u}`,`${l},${f}`,`${y},${u}`,`${y},${f}`]}}class X{constructor(t,e){this.coords=D(t),this.nearestBeacon=e,this.manhattanRange=this.coords.manhattanDistance(e),this.vertices=[new c(this.coords.x-this.manhattanRange,this.coords.y),new c(this.coords.x,this.coords.y+this.manhattanRange),new c(this.coords.x+this.manhattanRange,this.coords.y),new c(this.coords.x,this.coords.y-this.manhattanRange)]}rowIsDetectable(t){return t<=this.manhattanRange}getXRangeDetectableOnRow(t){const e=Math.abs(this.coords.y-t);if(this.rowIsDetectable(e)){const s=this.manhattanRange-e;return{detectable:!0,xMin:this.coords.x-s,xMax:this.coords.x+s}}return{detectable:!1}}pointWithinSensor(t){return!(t.manhattanDistance(this.coords)>this.manhattanRange)}getIntersectionPoints(t){const e=new Set;for(let n=0;n<4;n++){for(let a=0;a<4;a++){const i=W(this.vertices[n%4],this.vertices[(n+1)%4],t.vertices[a%4],t.vertices[(a+1)%4]);i!==void 0&&i.forEach(r=>e.add(r))}e.add(`${this.vertices[n].x},${this.vertices[n].y}`),e.add(`${t.vertices[n].x},${t.vertices[n].y}`)}const s=new Set;for(const n of e)j(...n.split(",").map(i=>Number(i))).filter(i=>!this.pointWithinSensor(i)&&!t.pointWithinSensor(i)).map(i=>`${i.x},${i.y}`).forEach(i=>s.add(i));return s}}class m{constructor(t,e){this.min,this.max,this.size,this.update(t,e),this.valid=!0}containsRange(t){return t.min>=this.min&&t.max<=this.max?(t.valid=!1,"destroyTest"):t.min<=this.min&&t.max>=this.max?(this.valid=!1,"destroyThis"):t.min<=this.min&&t.max<this.max&&t.max>=this.min?(t.update(t.min,this.min-1),"coversLower"):t.max>=this.max&&t.min>this.min&&t.min<=this.max?(t.update(this.max+1,t.max),"coversUpper"):"noIntersection"}containsValue(t){return t>=this.min&&t<=this.max}update(t,e){this.min=t,this.max=e,this.size=e-t+1,this.size<=0?this.valid=!1:this.valid=!0}copy(){return new m(this.min,this.max)}}class L{constructor(t){this.yValue=t,this.ranges=[]}addRange(t,e){this.ranges.push(new m(t,e))}sumRanges(t){let e=this.ranges.map(n=>n.copy()).sort((n,a)=>a.size-n.size);for(let n=0;n<e.length;n++){const a=e[n];this.checkTestRange(a,e,n)}let s=e.filter(n=>n.valid).reduce((n,a)=>n+a.size,0);return t!==void 0&&(s=this.subtractBeaconsFromSum(t,e,s)),s}checkTestRange(t,e,s){for(const n of e.slice(0,s).filter(a=>a.valid)){if(!t.valid)break;n.containsRange(t)}}subtractBeaconsFromSum(t,e,s){const n=t.filter(a=>a.y===this.yValue);for(const a of n)for(const i of e.filter(r=>r.valid))if(i.containsValue(a.x)){s-=1;break}return s}}function Y(o){return o.x*4e6+o.y}function H(o,t,e,s){let n=Array.from(o).map(a=>c.fromString(a)).filter(a=>a.x>0&&a.x<=t&&a.y>0&&a.y<=t);for(const a of e)n=n.filter(i=>!a.pointWithinSensor(i));for(const a of s)n=n.filter(i=>i.x!==a.x||i.y!==a.y);return n}function h(o){return o.trim().split(`
`).map(t=>t.split(":"))}function Z(o){const{sensors:t,beacons:e}=T(o);let s;o.length===14?s=10:s=2e6;const n=new L(s);for(const i of t){const r=i.getXRangeDetectableOnRow(s);r.detectable&&n.addRange(r.xMin,r.xMax)}return n.sumRanges(e)}function G(o){const{sensors:t,beacons:e}=T(o);let s;o.length===14?s=20:s=4e6;const n=new Set;for(let i=0;i<t.length;i++)for(let r=0;r<i;r++)t[i].getIntersectionPoints(t[r]).forEach(l=>n.add(l));const a=H(n,s,t,e);if(a.length!==1)throw`Expected to find only one valid point, instead found ${a.length} points`;return Y(a[0])}const J=`Sensor at x=346753, y=3974683: closest beacon is at x=527500, y=3570474
Sensor at x=3718952, y=2421864: closest beacon is at x=3871651, y=2935623
Sensor at x=919295, y=2535231: closest beacon is at x=527500, y=3570474
Sensor at x=3982082, y=2935124: closest beacon is at x=3871651, y=2935623
Sensor at x=3693260, y=3095908: closest beacon is at x=3669901, y=3086819
Sensor at x=3273954, y=2072378: closest beacon is at x=3275433, y=2000000
Sensor at x=2936799, y=2402146: closest beacon is at x=2472215, y=2601723
Sensor at x=3153125, y=3571786: closest beacon is at x=3669901, y=3086819
Sensor at x=3892050, y=3718400: closest beacon is at x=3871651, y=2935623
Sensor at x=1670487, y=618098: closest beacon is at x=-171619, y=497931
Sensor at x=277848, y=3523156: closest beacon is at x=527500, y=3570474
Sensor at x=3412305, y=198361: closest beacon is at x=3275433, y=2000000
Sensor at x=2324630, y=2084344: closest beacon is at x=2472215, y=2601723
Sensor at x=3718763, y=3088136: closest beacon is at x=3669901, y=3086819
Sensor at x=303245, y=10539: closest beacon is at x=-171619, y=497931
Sensor at x=3230426, y=1961497: closest beacon is at x=3275433, y=2000000
Sensor at x=3616662, y=3171194: closest beacon is at x=3669901, y=3086819
Sensor at x=3673367, y=3084002: closest beacon is at x=3669901, y=3086819
Sensor at x=3350734, y=2116841: closest beacon is at x=3275433, y=2000000
Sensor at x=1348476, y=3646233: closest beacon is at x=527500, y=3570474
Sensor at x=2817552, y=1654754: closest beacon is at x=3275433, y=2000000
Sensor at x=22462, y=1187401: closest beacon is at x=-171619, y=497931
Sensor at x=3982255, y=1687776: closest beacon is at x=3275433, y=2000000
Sensor at x=3995256, y=2821993: closest beacon is at x=3871651, y=2935623
Sensor at x=501107, y=3777047: closest beacon is at x=527500, y=3570474
Sensor at x=2507803, y=2761101: closest beacon is at x=2472215, y=2601723
Sensor at x=2252560, y=2800057: closest beacon is at x=2370240, y=2923480
Sensor at x=3536077, y=2843837: closest beacon is at x=3669901, y=3086819
Sensor at x=533494, y=3224642: closest beacon is at x=527500, y=3570474
Sensor at x=2962174, y=3016018: closest beacon is at x=2370240, y=2923480
Sensor at x=177378, y=3319282: closest beacon is at x=527500, y=3570474
Sensor at x=2074019, y=3934937: closest beacon is at x=2370240, y=2923480
Sensor at x=2295953, y=3295493: closest beacon is at x=2370240, y=2923480`,K=`Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`;function Q(o){let t,e;return t=new E({props:{part1:Z,part2:G,preprocessor:h,metadata:tt}}),{c(){O(t.$$.fragment)},l(s){P(t.$$.fragment,s)},m(s,n){B(t,s,n),e=!0},p:M,i(s){e||(F(t.$$.fragment,s),e=!0)},o(s){N(t.$$.fragment,s),e=!1},d(s){U(t,s)}}}const tt=q;function et(o){return z.set(h(J)),A.set(h(K)),[]}class it extends _{constructor(t){super(),C(this,t,et,Q,k,{})}}export{it as default,tt as myMetadata};

import{S,i as w,s as g,w as $,x as p,y as v,K as R,f as D,t as T,z as C}from"../../../../../chunks/index-69c26055.js";import{c as M,a as k}from"../../../../../chunks/stores-fa1b7a9b.js";import{R as P}from"../../../../../chunks/Runner-c1671065.js";class c{constructor(t,e){this.x=Number(t),this.y=Number(e)}static fromString(t){return new c(...t.trim().split(","))}copy(){return new c(this.x,this.y)}manhattanDistance(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}}function d(a){if(a.includes(":"))throw"Sensor and beacon strings must be split before passing to this function";const t=a.indexOf("x="),e=a.indexOf(","),s=a.indexOf("y=");if(t===-1)throw`Unable to find X value in string: ${a}`;if(e===-1)throw`Unable to find ',' in string: ${a}`;if(s===-1)throw`Unable to find Y value in string: ${a}`;const n=Number(a.slice(t+2,e).trim()),o=Number(a.slice(s+2).trim());return new c(n,o)}function b(a){const t=[],e=[],s=new Set;for(const n of a){const o=d(n[1]);t.push(new N(n[0],o));const i=`${o.x},${o.y}`;s.has(i)||(s.add(i),e.push(o))}return{sensors:t,beacons:e}}function O(a,t,e,s){return{PxUpper:(a.x*t.y-a.y*t.x)*(e.x-s.x)-(a.x-t.x)*(e.x*s.y-e.y*s.x),PyUpper:(a.x*t.y-a.y*t.x)*(e.y-s.y)-(a.y-t.y)*(e.x*s.y-e.y*s.x),denominator:(a.x-t.x)*(e.y-s.y)-(a.y-t.y)*(e.x-s.x)}}function B(a,t){return[new c(a-1,t),new c(a,t+1),new c(a+1,t),new c(a,t-1)]}function F(a,t,e,s){const{PxUpper:n,PyUpper:o,denominator:i}=O(a,t,e,s);if(i!==0){const r=n/i,x=o/i,l=Math.floor(r),y=Math.ceil(r),u=Math.floor(x),h=Math.ceil(x);return l===y&&u===h?[`${r},${x}`]:[`${l},${u}`,`${l},${h}`,`${y},${u}`,`${y},${h}`]}}class N{constructor(t,e){this.coords=d(t),this.nearestBeacon=e,this.manhattanRange=this.coords.manhattanDistance(e),this.vertices=[new c(this.coords.x-this.manhattanRange,this.coords.y),new c(this.coords.x,this.coords.y+this.manhattanRange),new c(this.coords.x+this.manhattanRange,this.coords.y),new c(this.coords.x,this.coords.y-this.manhattanRange)]}rowIsDetectable(t){return t<=this.manhattanRange}getXRangeDetectableOnRow(t){const e=Math.abs(this.coords.y-t);if(this.rowIsDetectable(e)){const s=this.manhattanRange-e;return{detectable:!0,xMin:this.coords.x-s,xMax:this.coords.x+s}}return{detectable:!1}}pointWithinSensor(t){return!(t.manhattanDistance(this.coords)>this.manhattanRange)}getIntersectionPoints(t){const e=new Set;for(let n=0;n<4;n++){for(let o=0;o<4;o++){const i=F(this.vertices[n%4],this.vertices[(n+1)%4],t.vertices[o%4],t.vertices[(o+1)%4]);i!==void 0&&i.forEach(r=>e.add(r))}e.add(`${this.vertices[n].x},${this.vertices[n].y}`),e.add(`${t.vertices[n].x},${t.vertices[n].y}`)}const s=new Set;for(const n of e)B(...n.split(",").map(i=>Number(i))).filter(i=>!this.pointWithinSensor(i)&&!t.pointWithinSensor(i)).map(i=>`${i.x},${i.y}`).forEach(i=>s.add(i));return s}}class m{constructor(t,e){this.min,this.max,this.size,this.update(t,e),this.valid=!0}containsRange(t){return t.min>=this.min&&t.max<=this.max?(t.valid=!1,"destroyTest"):t.min<=this.min&&t.max>=this.max?(this.valid=!1,"destroyThis"):t.min<=this.min&&t.max<this.max&&t.max>=this.min?(t.update(t.min,this.min-1),"coversLower"):t.max>=this.max&&t.min>this.min&&t.min<=this.max?(t.update(this.max+1,t.max),"coversUpper"):"noIntersection"}containsValue(t){return t>=this.min&&t<=this.max}update(t,e){this.min=t,this.max=e,this.size=e-t+1,this.size<=0?this.valid=!1:this.valid=!0}copy(){return new m(this.min,this.max)}}class U{constructor(t){this.yValue=t,this.ranges=[]}addRange(t,e){this.ranges.push(new m(t,e))}sumRanges(t){let e=this.ranges.map(n=>n.copy()).sort((n,o)=>o.size-n.size);for(let n=0;n<e.length;n++){const o=e[n];this.checkTestRange(o,e,n)}let s=e.filter(n=>n.valid).reduce((n,o)=>n+o.size,0);return t!==void 0&&(s=this.subtractBeaconsFromSum(t,e,s)),s}checkTestRange(t,e,s){for(const n of e.slice(0,s).filter(o=>o.valid)){if(!t.valid)break;n.containsRange(t)}}subtractBeaconsFromSum(t,e,s){const n=t.filter(o=>o.y===this.yValue);for(const o of n)for(const i of e.filter(r=>r.valid))if(i.containsValue(o.x)){s-=1;break}return s}}function z(a){return a.x*4e6+a.y}function A(a,t,e,s){let n=Array.from(a).map(o=>c.fromString(o)).filter(o=>o.x>0&&o.x<=t&&o.y>0&&o.y<=t);for(const o of e)n=n.filter(i=>!o.pointWithinSensor(i));for(const o of s)n=n.filter(i=>i.x!==o.x||i.y!==o.y);return n}function f(a){return a.trim().split(`
`).map(t=>t.split(":"))}function E(a){const{sensors:t,beacons:e}=b(a);let s;a.length===14?s=10:s=2e6;const n=new U(s);for(const i of t){const r=i.getXRangeDetectableOnRow(s);r.detectable&&n.addRange(r.xMin,r.xMax)}return n.sumRanges(e)}function I(a){const{sensors:t,beacons:e}=b(a);let s;a.length===14?s=20:s=4e6;const n=new Set;for(let i=0;i<t.length;i++)for(let r=0;r<i;r++)t[i].getIntersectionPoints(t[r]).forEach(l=>n.add(l));const o=A(n,s,t,e);if(o.length!==1)throw`Expected to find only one valid point, instead found ${o.length} points`;return z(o[0])}const _=`Sensor at x=346753, y=3974683: closest beacon is at x=527500, y=3570474
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
Sensor at x=2295953, y=3295493: closest beacon is at x=2370240, y=2923480`,V=`Sensor at x=2, y=18: closest beacon is at x=-2, y=15
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
Sensor at x=20, y=1: closest beacon is at x=15, y=3`;function q(a){let t,e;return t=new P({props:{part1:E,part2:I,preprocessor:f,metadata:W}}),{c(){$(t.$$.fragment)},l(s){p(t.$$.fragment,s)},m(s,n){v(t,s,n),e=!0},p:R,i(s){e||(D(t.$$.fragment,s),e=!0)},o(s){T(t.$$.fragment,s),e=!1},d(s){C(t,s)}}}const W={title:"Beacon Exclusion Zone",day:"15",year:"2022",description:"Our sensors are picking up multiple beacons, but none of them are the beacon that we're looking for. Can we find the only valid location? (This one was HARD.)",longRuntime:!1,result1:"Number of full slots on row",result2:"Tuning frequency",keywords:["sets","classes","arrays","geometry","ranges","difficult"],visible:!0};function X(a){return M.set(f(_)),k.set(f(V)),[]}class H extends S{constructor(t){super(),w(this,t,X,q,g,{})}}export{H as default,W as myMetadata};

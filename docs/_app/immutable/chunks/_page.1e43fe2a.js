import{s as x,n as w}from"./scheduler.fd3686c2.js";import{S as P,i as T,k as N,m as _,o as $,p as C,q as M,r as O}from"./index.a4ac66b3.js";import{c as S,a as k}from"./stores.0053c7b4.js";import{R as D}from"./Runner.76c02351.js";const l="Not Enough Minerals",u="19",E="2022",y="It's time to play Elf-Factorio and mine some geodes by making ore robots, which make clay robots, which make obsidian robots, which make... etc etc. I tried to do this with a depth-first search first (and regretted it big time), my pruned BFS below is a tad slow but gets the right answer at least.",p=!0,g="Sum of quality levels",f="Product of geode amounts",m=["breadth-first search","TODO: OPTIMISE","TODO: COMMENT","classes","arrays","object-oriented"],B=!0,v={title:l,day:u,year:E,description:y,longRuntime:p,result1:g,result2:f,keywords:m,visible:B},q=Object.freeze(Object.defineProperty({__proto__:null,day:u,default:v,description:y,keywords:m,longRuntime:p,result1:g,result2:f,title:l,visible:B,year:E},Symbol.toStringTag,{value:"Module"}));class b{constructor(t,o){this.cost=t,this.type=o}canBuild(t){for(const o in this.cost)if(t[o]<this.cost[o])return!1;return!0}create(t,o){if(o!==void 0)for(const e in this.cost)o[e]-=this.cost[e];t[this.type]+=1}getResource(){return this.type}}function I(r,t,o){for(const e in r.robots){const s=r.resourcesPerTurn[e]<o[e]||e==="geode",c=r.couldCreateRobot(e);if(s&&c)if(r.nextRobot===void 0)r.nextRobot=e;else{const a=r.copy();a.nextRobot=e,t.push(a)}}}function j(r,t){for(const o of r)o.nextRobot===void 0&&I(o,r,t);for(const o of r)o.canCreateNextRobot()?(o.gatherResources(),o.createNextRobot()):o.gatherResources()}function R(r,t,o){let e=[d.fromString(r)];const s={ore:0,clay:0,obsidian:0};for(const a in e[0].robots){const n=e[0].robots[a].cost;for(const i in s)n.hasOwnProperty(i)&&(s[i]=Math.max(n[i],s[i]))}let c=0;for(;c<t;)j(e,s),e.length>o&&(e=e.sort((a,n)=>n.resourcesPerTurn.geode-a.resourcesPerTurn.geode).slice(0,o)),c+=1;return e}class d{constructor(t,o,e,s,c){this.id=t,this.step=o,this.robots=e,this.resources=structuredClone(s),this.resourcesPerTurn=structuredClone(c),this.nextRobot}static fromString(t){const o=t.split(" "),e=Number(o[1].replace(":","")),s=0,c={ore:new b({ore:Number(o[6])},"ore"),clay:new b({ore:Number(o[12])},"clay"),obsidian:new b({ore:Number(o[18]),clay:Number(o[21])},"obsidian"),geode:new b({ore:Number(o[27]),obsidian:Number(o[30])},"geode")},a={ore:0,clay:0,obsidian:0,geode:0},n=structuredClone(a);return c.ore.create(n),new d(e,s,c,a,n)}canCreateNextRobot(){return this.canCreateRobot(this.nextRobot)}canCreateRobot(t){return this.robots[t].canBuild(this.resources)}couldCreateRobot(t){for(const o in this.robots[t].cost)if(this.resourcesPerTurn[o]===0)return!1;return!0}createNextRobot(){this.createRobot(this.nextRobot),this.nextRobot=void 0}createRobot(t){this.robots[t].create(this.resourcesPerTurn,this.resources)}gatherResources(){for(const t in this.resourcesPerTurn)this.resources[t]+=this.resourcesPerTurn[t];this.step+=1}gatherResourcesUntilEnd(t){const o=t-this.step;for(const e in this.resourcesPerTurn)this.resources[e]+=this.resourcesPerTurn[e]*o;this.step=t}calculateQuality(){return this.id*this.resources.geode}copy(){return new d(this.id,this.step,this.robots,this.resources,this.resourcesPerTurn)}}function h(r){return r.trim().split(`
`)}function F(r){const t=[];for(const o of r){const e=R(o,24,1e4);t.push(Math.max(...e.map(s=>s.calculateQuality())))}return t.reduce((o,e)=>o+e,0)}function Q(r){let t=1,o="geode amounts: ";for(const e of r.slice(0,3)){t!==1&&(o+=", ");const s=R(e,32,2e4),c=Math.max(...s.map(a=>a.resources.geode));console.log(c),t*=c,o+=`${c}`}return o+=`. multiplied together: ${t}`,o}const z=`Blueprint 1: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 3 ore and 9 obsidian.
Blueprint 2: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 3 ore and 19 obsidian.
Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 4 ore and 19 obsidian.
Blueprint 4: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 5: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 4 ore and 9 obsidian.
Blueprint 6: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 3 ore and 20 obsidian.
Blueprint 7: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 2 ore and 18 obsidian.
Blueprint 8: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 17 clay. Each geode robot costs 3 ore and 19 obsidian.
Blueprint 9: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 10: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 11: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 12: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 4 ore and 8 obsidian.
Blueprint 13: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 14: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 3 ore and 16 obsidian.
Blueprint 15: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 16: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 3 ore and 19 obsidian.
Blueprint 17: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 9 clay. Each geode robot costs 3 ore and 15 obsidian.
Blueprint 18: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 19: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 20: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 21: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 22: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 4 ore and 7 obsidian.
Blueprint 23: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 9 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 24: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 17 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 25: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 3 ore and 13 obsidian.
Blueprint 26: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 14 clay. Each geode robot costs 4 ore and 10 obsidian.
Blueprint 27: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 28: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 2 ore and 11 obsidian.
Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 5 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 30: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 17 obsidian.

`,G=`Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`;function L(r){let t,o;return t=new D({props:{part1:F,part2:Q,preprocessor:h,metadata:U}}),{c(){N(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,s){$(t,e,s),o=!0},p:w,i(e){o||(C(t.$$.fragment,e),o=!0)},o(e){M(t.$$.fragment,e),o=!1},d(e){O(t,e)}}}const U=q;function A(r){return S.set(h(z)),k.set(h(G)),[]}class W extends P{constructor(t){super(),T(this,t,A,L,x,{})}}export{W as default,U as myMetadata};
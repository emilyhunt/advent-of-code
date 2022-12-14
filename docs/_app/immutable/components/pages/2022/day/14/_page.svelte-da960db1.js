import{S as p,i as c,s as u,w as y,x as g,y as m,K as M,f as S,t as w,z as v}from"../../../../../chunks/index-69c26055.js";import{c as G,a as R}from"../../../../../chunks/stores-8e903e5e.js";import{R as I}from"../../../../../chunks/Runner-a1f2eb6d.js";class o{constructor(n,t){this.x=Number(n),this.y=Number(t)}static fromString(n){return new o(...n.trim().split(","))}copy(){return new o(this.x,this.y)}}class l{constructor(n,t,i,s){this.xMin=n,this.xMax=t,this.yMin=i,this.yMax=s,this.xMinGrid=0,this.xMaxGrid=this.xMax-this.xMin,this.yMinGrid=0,this.yMaxGrid=this.yMax-this.yMin,this.xLength=this.xMaxGrid+1,this.yLength=this.yMaxGrid+1}transformCoords2D(n){const t=n.copy();return t.x-=this.xMin,t.y-=this.yMin,t}transformCoords2DReverse(n){const t=n.copy();return t.x+=this.xMin,t.y+=this.yMin,t}}const a=new o(500,0);function $(e){let n=a.x,t=a.x,i=a.y;for(const s of e)for(const r of s)r.y>i&&(i=r.y),r.x<n?n=r.x:r.x>t&&(t=r.x);return new l(n,t,a.y,i)}function k(e,n,t){return Array.from(Array(e),i=>Array(n).fill(t))}class x{constructor(n,t,i){if(this.gridSpec=t,this.hasInfiniteFloor=!1,i===!0){let[s,r,f,h]=[t.xMin,t.xMax,t.yMin,t.yMax];h+=2,s=Math.min(a.x-h-1,s),r=Math.max(a.x+h+1,r),this.gridSpec=new l(s,r,f,h),this.hasInfiniteFloor=!0}this.sandInput=this.gridSpec.transformCoords2D(a),this.grid=k(this.gridSpec.yLength,this.gridSpec.xLength,0),this.addRockPaths(n),this.hasInfiniteFloor&&(this.grid[this.gridSpec.yMaxGrid]=new Array(this.gridSpec.xLength).fill(1)),this.grid[this.sandInput.y][this.sandInput.x]=-1,this.sandCount=0}addRockLine(n,t){if(n.x===t.x){const i=Math.min(n.y,t.y),s=Math.max(n.y,t.y);for(let r=i;r<=s;r++)this.grid[r][n.x]=1}else if(n.y===t.y){const i=Math.min(n.x,t.x),s=Math.max(n.x,t.x);for(let r=i;r<=s;r++)this.grid[n.y][r]=1}else throw"Unexpected input! Unable to add diagonal line of rocks."}addRockPaths(n){n=n.map(t=>t.map(i=>this.gridSpec.transformCoords2D(i)));for(const t of n)for(let i=1;i<t.length;i++)this.addRockLine(t[i-1],t[i])}stringRepresentationOfValue(n){if(n===0)return".";if(n===1)return"#";if(n===2)return"o";if(n===-1)return"+";throw`Value '${n} not recognised`}gridToString(){return this.grid.map(t=>t.map(i=>this.stringRepresentationOfValue(i)).join("")).join(`
`)}moveSand(n){return n.y+1>this.gridSpec.yMaxGrid?"void":this.grid[n.y+1][n.x]===0?(n.y+=1,"moved"):n.x-1<this.gridSpec.xMinGrid?"void":this.grid[n.y+1][n.x-1]===0?(n.x-=1,n.y+=1,"moved"):n.x+1>this.gridSpec.xMaxGrid?"void":this.grid[n.y+1][n.x+1]===0?(n.x+=1,n.y+=1,"moved"):(this.grid[n.y][n.x]=2,this.sandCount+=1,n.x===this.sandInput.x&&n.y===this.sandInput.y?"blocked":"stopped")}tryToAddSand(){const n=this.sandInput.copy();for(;;){const t=this.moveSand(n);if(t==="void"||t==="blocked")return!1;if(t==="stopped")return!0}}addSandUntilFull(){for(;this.tryToAddSand(););return this.sandCount}}function d(e){e=e.trim().split(`
`).map(t=>t.trim().split(" -> ").map(i=>o.fromString(i)));const n=$(e);return{paths:e,shape:n}}function D(e){return new x(e.paths,e.shape).addSandUntilFull()}function _(e){return new x(e.paths,e.shape,!0).addSandUntilFull()}const A=`476,71 -> 481,71
484,52 -> 488,52
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
481,61 -> 485,61
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
454,163 -> 459,163
444,147 -> 449,147
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
459,73 -> 464,73
447,150 -> 447,154 -> 440,154 -> 440,160 -> 455,160 -> 455,154 -> 453,154 -> 453,150
447,150 -> 447,154 -> 440,154 -> 440,160 -> 455,160 -> 455,154 -> 453,154 -> 453,150
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
447,150 -> 447,154 -> 440,154 -> 440,160 -> 455,160 -> 455,154 -> 453,154 -> 453,150
472,64 -> 476,64
447,144 -> 452,144
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
487,61 -> 491,61
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
484,64 -> 488,64
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
484,76 -> 484,80 -> 482,80 -> 482,83 -> 493,83 -> 493,80 -> 487,80 -> 487,76
455,169 -> 460,169
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
447,150 -> 447,154 -> 440,154 -> 440,160 -> 455,160 -> 455,154 -> 453,154 -> 453,150
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
447,150 -> 447,154 -> 440,154 -> 440,160 -> 455,160 -> 455,154 -> 453,154 -> 453,150
480,73 -> 485,73
462,71 -> 467,71
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
487,55 -> 491,55
478,58 -> 482,58
487,48 -> 487,49 -> 494,49 -> 494,48
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
477,87 -> 477,88 -> 486,88
477,87 -> 477,88 -> 486,88
493,61 -> 497,61
458,117 -> 458,121 -> 450,121 -> 450,125 -> 471,125 -> 471,121 -> 463,121 -> 463,117
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
454,144 -> 459,144
447,150 -> 447,154 -> 440,154 -> 440,160 -> 455,160 -> 455,154 -> 453,154 -> 453,150
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
458,117 -> 458,121 -> 450,121 -> 450,125 -> 471,125 -> 471,121 -> 463,121 -> 463,117
458,117 -> 458,121 -> 450,121 -> 450,125 -> 471,125 -> 471,121 -> 463,121 -> 463,117
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
450,141 -> 455,141
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
484,76 -> 484,80 -> 482,80 -> 482,83 -> 493,83 -> 493,80 -> 487,80 -> 487,76
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
484,76 -> 484,80 -> 482,80 -> 482,83 -> 493,83 -> 493,80 -> 487,80 -> 487,76
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
446,128 -> 446,131 -> 442,131 -> 442,138 -> 452,138 -> 452,131 -> 450,131 -> 450,128
493,27 -> 493,28 -> 512,28 -> 512,27
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
493,27 -> 493,28 -> 512,28 -> 512,27
481,55 -> 485,55
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
447,150 -> 447,154 -> 440,154 -> 440,160 -> 455,160 -> 455,154 -> 453,154 -> 453,150
484,76 -> 484,80 -> 482,80 -> 482,83 -> 493,83 -> 493,80 -> 487,80 -> 487,76
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
462,169 -> 467,169
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
484,76 -> 484,80 -> 482,80 -> 482,83 -> 493,83 -> 493,80 -> 487,80 -> 487,76
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
446,128 -> 446,131 -> 442,131 -> 442,138 -> 452,138 -> 452,131 -> 450,131 -> 450,128
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
458,117 -> 458,121 -> 450,121 -> 450,125 -> 471,125 -> 471,121 -> 463,121 -> 463,117
446,128 -> 446,131 -> 442,131 -> 442,138 -> 452,138 -> 452,131 -> 450,131 -> 450,128
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
465,69 -> 470,69
448,169 -> 453,169
478,64 -> 482,64
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
484,76 -> 484,80 -> 482,80 -> 482,83 -> 493,83 -> 493,80 -> 487,80 -> 487,76
490,58 -> 494,58
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
484,58 -> 488,58
491,43 -> 491,44 -> 500,44 -> 500,43
472,69 -> 477,69
446,128 -> 446,131 -> 442,131 -> 442,138 -> 452,138 -> 452,131 -> 450,131 -> 450,128
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
491,43 -> 491,44 -> 500,44 -> 500,43
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
458,117 -> 458,121 -> 450,121 -> 450,125 -> 471,125 -> 471,121 -> 463,121 -> 463,117
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
473,73 -> 478,73
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
468,67 -> 473,67
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
458,117 -> 458,121 -> 450,121 -> 450,125 -> 471,125 -> 471,121 -> 463,121 -> 463,117
490,64 -> 494,64
466,73 -> 471,73
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
451,147 -> 456,147
469,71 -> 474,71
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
491,43 -> 491,44 -> 500,44 -> 500,43
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
458,117 -> 458,121 -> 450,121 -> 450,125 -> 471,125 -> 471,121 -> 463,121 -> 463,117
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
458,166 -> 463,166
458,147 -> 463,147
493,27 -> 493,28 -> 512,28 -> 512,27
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
446,128 -> 446,131 -> 442,131 -> 442,138 -> 452,138 -> 452,131 -> 450,131 -> 450,128
487,48 -> 487,49 -> 494,49 -> 494,48
446,128 -> 446,131 -> 442,131 -> 442,138 -> 452,138 -> 452,131 -> 450,131 -> 450,128
461,114 -> 461,113 -> 461,114 -> 463,114 -> 463,105 -> 463,114 -> 465,114 -> 465,112 -> 465,114 -> 467,114 -> 467,105 -> 467,114 -> 469,114 -> 469,112 -> 469,114 -> 471,114 -> 471,109 -> 471,114 -> 473,114 -> 473,104 -> 473,114
487,48 -> 487,49 -> 494,49 -> 494,48
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
496,64 -> 500,64
484,76 -> 484,80 -> 482,80 -> 482,83 -> 493,83 -> 493,80 -> 487,80 -> 487,76
451,166 -> 456,166
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41
446,128 -> 446,131 -> 442,131 -> 442,138 -> 452,138 -> 452,131 -> 450,131 -> 450,128
496,23 -> 496,16 -> 496,23 -> 498,23 -> 498,22 -> 498,23 -> 500,23 -> 500,17 -> 500,23 -> 502,23 -> 502,21 -> 502,23
475,61 -> 479,61
469,101 -> 469,95 -> 469,101 -> 471,101 -> 471,96 -> 471,101 -> 473,101 -> 473,96 -> 473,101 -> 475,101 -> 475,100 -> 475,101 -> 477,101 -> 477,91 -> 477,101 -> 479,101 -> 479,91 -> 479,101 -> 481,101 -> 481,98 -> 481,101
503,41 -> 503,36 -> 503,41 -> 505,41 -> 505,34 -> 505,41 -> 507,41 -> 507,40 -> 507,41 -> 509,41 -> 509,33 -> 509,41 -> 511,41 -> 511,32 -> 511,41 -> 513,41 -> 513,40 -> 513,41 -> 515,41 -> 515,31 -> 515,41 -> 517,41 -> 517,31 -> 517,41 -> 519,41 -> 519,31 -> 519,41 -> 521,41 -> 521,33 -> 521,41

`,b=`498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9
`;function L(e){let n,t;return n=new I({props:{part1:D,part2:_,preprocessor:d,metadata:F}}),{c(){y(n.$$.fragment)},l(i){g(n.$$.fragment,i)},m(i,s){m(n,i,s),t=!0},p:M,i(i){t||(S(n.$$.fragment,i),t=!0)},o(i){w(n.$$.fragment,i),t=!1},d(i){v(n,i)}}}const F={title:"Regolith Reservoir",day:"14",year:"2022",description:"We're trapped in a cave and it's filling up with sand! How long will it take until we're submerged?",longRuntime:!1,result1:"Sand dropped until it flows into void",result2:"Sand dropped until cave is full",keywords:["classes","Coords2D","GridSpec","grids","arrays","while","for..of","for"],visible:!0};function U(e){return G.set(d(A)),R.set(d(b)),[]}class E extends p{constructor(n){super(),c(this,n,U,L,u,{})}}export{E as default,F as myMetadata};

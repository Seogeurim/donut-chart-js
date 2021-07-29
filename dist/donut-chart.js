!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DonutChart=e():t.DonutChart=e()}(self,(function(){return(()=>{"use strict";var t={d:(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>a});const a=class{constructor(t,e){this.canvas=t,this.options=e,this.ctx=null,this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d"),this.sortData(),this.draw())}sortData(){const{data:t}=this.options;t.sort(((t,e)=>e.value-t.value))}draw(){const{data:t,holeSize:e,animationSpeed:a}=this.options;let o=0;t.forEach((({value:t})=>{o+=t}));let s=1.5*Math.PI;t.forEach((({value:t,color:i})=>{const n=2*Math.PI*t/o;this.animateDraw(s,n,e||0,i,0,100*(a||1)),s+=n}))}animateDraw(t,e,a,o,s,i){!function(t,e,a,o,s,i,n,r){t.fillStyle=r,t.beginPath(),t.moveTo(e,a),t.arc(e,a,o,s,i,!1),t.arc(e,a,o*n,i,s,!0),t.closePath(),t.fill()}(this.ctx,this.canvas.width/2,this.canvas.height/2,Math.min(this.canvas.width/2,this.canvas.height/2),t,t+e*s/i,a,o),s<i&&requestAnimationFrame((()=>this.animateDraw(t,e,a,o,s+1,i)))}};return e.default})()}));
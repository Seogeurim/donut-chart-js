!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DonutChart=e():t.DonutChart=e()}(self,(function(){return(()=>{"use strict";var t={d:(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>a});const a=class{constructor(t,e){this.canvas=t,this.options=e,this.ctx=null,this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d"),this.draw())}draw(){const{data:t,colors:e,holeSize:a}=this.options;let o=0;Object.keys(t).forEach((e=>{o+=t[e]}));let n=1.5*Math.PI,s=0;Object.keys(t).forEach((i=>{const c=t[i],r=2*Math.PI*c/o;this.animateDraw(n,r,a||0,e[s%e.length],0),n+=r,s+=1}))}animateDraw(t,e,a,o,n){!function(t,e,a,o,n,s,i,c){t.fillStyle=c,t.beginPath(),t.moveTo(e,a),t.arc(e,a,o,n,s,!1),t.arc(e,a,o*i,s,n,!0),t.closePath(),t.fill()}(this.ctx,this.canvas.width/2,this.canvas.height/2,Math.min(this.canvas.width/2,this.canvas.height/2),t,t+e*n/100,a,o),n<100&&requestAnimationFrame((()=>this.animateDraw(t,e,a,o,n+1)))}};return e.default})()}));
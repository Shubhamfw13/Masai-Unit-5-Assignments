(()=>{"use strict";var t={424:(t,e,o)=>{var n=o(81),r=o.n(n),a=o(645);o.n(a)()(r()).push([t.id,".redtext{\r\n    color: red;\r\n}",""])},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(n)for(var u=0;u<this.length;u++){var l=this[u][0];null!=l&&(c[l]=!0)}for(var i=0;i<t.length;i++){var s=[].concat(t[i]);n&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),o&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=o):s[2]=o),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:t=>{t.exports=function(t){return t[1]}}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{o(424);let t=JSON.parse(localStorage.getItem("todo-list"))||[];function e(t){document.querySelector("tbody").innerHTML=null,t.map((t=>{let e=document.createElement("tr"),o=document.createElement("td");o.setAttribute("class","task"),o.textContent=t.task;let n=document.createElement("td");n.setAttribute("class","time"),n.textContent=t.time,e.append(o,n),document.querySelector("tbody").append(e)}))}console.log(t),document.querySelector("#task-form").addEventListener("submit",(function(o){o.preventDefault();let n={task:document.querySelector(".add-todo-task").value,time:document.querySelector(".task-time").value};t.push(n),localStorage.setItem("todo-list",JSON.stringify(t)),e(t)})),e(t)})()})();
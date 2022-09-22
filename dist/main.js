(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n#container {\n    display:flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    height: 75px;\n    width: auto;\n    background-color: azure;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header > h1 {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\nmain {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 3fr;\n    margin: 20px;\n    gap: 20px;\n}\n\n.projectsDiv {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsDiv > div:first-of-type {\n    display: flex;\n    margin-bottom: 20px;\n}\n\n.projectsList {\n    display: flex;\n    flex-direction: column;\n    background-color: aquamarine;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 10px;\n    min-width: 200px;\n    min-height: 100px;\n}\n\n.project {\n    display: flex;\n    margin: 20px;\n    font-size: 1.4rem;\n}\n\n.svgClass {\n    display: block;\n    width: 24px;\n    height: 24px;\n    margin-left: auto;\n    cursor: pointer;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v={addProjectDiv:function(){!function(){const e=document.querySelector(".projectsList"),n=document.querySelector(".projectsTextbox"),t=document.createElement("div");t.classList.add("project"),t.textContent=n.value,e.appendChild(t);const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttributeNS(null,"viewbox","0 0 24 24"),o.classList.add("svgClass"),o.addEventListener("click",(function(){console.log("ammm")}));const r=document.querySelectorAll(".project"),a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttributeNS(null,"fill","blue"),a.setAttributeNS(null,"d","M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z");for(let e=0;e<r.length;e++)r[e].appendChild(o);const i=document.querySelectorAll(".svgClass");for(let e=0;e<i.length;e++)i[e].appendChild(a);console.log()}()}},h=document.querySelector("#container"),b=function(){!function(){const e=document.createElement("main");h.appendChild(e)}()},g={createProjectsDiv:function(){!function(){const e=document.createElement("div");e.classList.add("projectsDiv"),document.querySelector("main").appendChild(e)}()},createTasksDiv:function(){!function(){const e=document.createElement("div");e.classList.add("tasksDiv"),document.querySelector("main").appendChild(e)}()},addProjectContent:function(){!function(){const e=document.querySelector(".projectsDiv");for(let n=0;n<2;n++){const t=document.createElement("div");e.appendChild(t),1==n&&t.classList.add("projectsList")}const n=document.querySelectorAll(".projectsDiv > div"),t=document.createElement("input");t.classList.add("projectsTextbox"),n[0].appendChild(t);const o=document.createElement("button");o.classList.add("projectButton"),o.textContent="Add New Project",o.addEventListener("click",(function(){v.addProjectDiv()})),n[0].appendChild(o)}()},addTasksContent:function(){!function(){const e=document.querySelector(".tasksDiv"),n=document.createElement("button");n.textContent="Add New Task",e.appendChild(n)}()}};(function(){!function(){const e=document.createElement("div");e.classList.add("header"),h.appendChild(e);const n=document.createElement("h1");n.textContent="To-do List",e.appendChild(n)}()})(),b(),g.createProjectsDiv(),g.createTasksDiv(),g.addProjectContent(),g.addTasksContent(),console.log("poop")})()})();
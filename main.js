(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),c=n.n(o),r=n(645),a=n.n(r)()(c());a.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n#container {\n    display:flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    height: 75px;\n    width: auto;\n    background-color: azure;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header > h1 {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\nmain {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 3fr;\n    margin: 20px;\n    gap: 20px;\n}\n\n.projectsDiv {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsDiv > div:first-of-type {\n    display: flex;\n    margin-bottom: 20px;\n}\n\n.projectsList {\n    display: flex;\n    flex-direction: column;\n    background-color: aquamarine;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 10px;\n    min-width: 200px;\n    min-height: 100px;\n}\n\n.project {\n    display: flex;\n    margin: 20px;\n    font-size: 1.4rem;\n    cursor: pointer;\n}\n\n.selectedProject {\n    background-color: green;\n}\n\n.svgClass {\n    display: block;\n    width: 24px;\n    height: 24px;\n    margin-left: auto;\n    cursor: pointer;\n}\n\n.tasksList {\n    background-color: aquamarine;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 10px;\n    min-width: 100%;\n    min-height: 600px;\n    margin-top: 20px;\n    margin-right: 100px;\n}\n\n.task {\n    display: flex;\n}\n\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,c,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),c&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=c):l[4]="".concat(c)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],s=0;s<e.length;s++){var i=e[s],d=o.base?i[0]+o.base:i[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=c(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function c(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,c){var r=o(e=e||[],c=c||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var i=o(e,c),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var c=void 0!==n.layer;c&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,c&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),c=n.n(o),r=n(569),a=n.n(r),s=n(565),i=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h={},v=(()=>{let e=1;const t=function(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttributeNS(null,"viewbox","0 0 24 24"),e.classList.add("svgClass"),e.addEventListener("click",(function(){const t=document.querySelector(".projectsList"),n=e.parentNode;t.removeChild(n)}));const t=document.querySelectorAll(".project"),n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttributeNS(null,"fill","blue"),n.setAttributeNS(null,"d","M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z");for(let n=0;n<t.length;n++)t[n].appendChild(e);const o=document.querySelectorAll(".svgClass");for(let e=0;e<o.length;e++)o[e].appendChild(n)};return{addDefaultProject:function(){!function(){const e=document.querySelector(".projectsList"),n=document.createElement("div");n.classList.add("project","selectedProject"),n.textContent="Default Project",n.dataset.projectNumber="defaultProject",n.addEventListener("click",(()=>{const e=document.querySelectorAll(".project");if(!n.classList.contains("selectedProject")){for(let t=0;t<e.length;t++)e[t].classList.contains("selectedProject")&&e[t].classList.remove("selectedProject");n.classList.contains("selectedProject")||n.classList.add("selectedProject")}})),console.log(n.dataset.projectNumber),e.appendChild(n),h.defaultProject={},console.log(h),t()}()},addProjectDiv:function(){!function(){const t=document.querySelector(".projectsList"),n=document.querySelector(".projectsTextbox"),o=document.createElement("div");o.classList.add("project"),o.textContent=n.value,o.dataset.projectNumber="project"+e,o.addEventListener("click",(()=>{const e=document.querySelectorAll(".project");if(!o.classList.contains("selectedProject")){for(let t=0;t<e.length;t++)e[t].classList.contains("selectedProject")&&e[t].classList.remove("selectedProject");o.classList.contains("selectedProject")||o.classList.add("selectedProject")}})),console.log(o.dataset.projectNumber),t.appendChild(o),h["project"+e]={},h[o.dataset.projectNumber].tasks=[],e++,console.log(h)}()},addDeleteButton:function(){t()}}})(),g={addTask:function(){!function(){const e=document.querySelector(".tasksList"),t=document.createElement("div");t.classList.add("task"),e.appendChild(t);const n=document.querySelectorAll(".task"),o=document.createElement("h3"),c=document.querySelector(".tasksTextbox");o.textContent=c.value,n[n.length-1].appendChild(o),h.defaultProject.tasks=[],document.querySelector(".selectedProject");const r=document.createElement("p"),a=document.querySelector("input[type = 'date']");r.textContent=a.value,n[n.length-1].appendChild(r);const s=document.createElement("p"),i=document.querySelector("select");s.textContent=i.value,n[n.length-1].appendChild(s),function(){const e={},t=document.querySelector(".tasksTextbox").value;e.taskName=t;const n=document.querySelector("input[type = 'date']").value;e.dueDate=n;const o=document.querySelector("select").value;e.urgency=o;const c=document.querySelector(".selectedProject");h[c.dataset.projectNumber].tasks.push(e)}(),console.log(h)}()},addDeleteButton:function(){!function(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttributeNS(null,"viewbox","0 0 24 24"),e.classList.add("svgClass"),e.addEventListener("click",(function(){const t=document.querySelector(".tasksList"),n=e.parentNode;t.removeChild(n)}));const t=document.querySelectorAll(".task"),n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttributeNS(null,"fill","blue"),n.setAttributeNS(null,"d","M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z");for(let n=0;n<t.length;n++)t[n].appendChild(e);const o=document.querySelectorAll(".svgClass");for(let e=0;e<o.length;e++)o[e].appendChild(n)}()}},b=document.querySelector("#container"),y=function(){!function(){const e=document.createElement("main");b.appendChild(e)}()},L={createProjectsDiv:function(){!function(){const e=document.createElement("div");e.classList.add("projectsDiv"),document.querySelector("main").appendChild(e)}()},createTasksDiv:function(){!function(){const e=document.createElement("div");e.classList.add("tasksDiv"),document.querySelector("main").appendChild(e)}()},addProjectContent:function(){!function(){const e=document.querySelector(".projectsDiv");for(let t=0;t<2;t++){const n=document.createElement("div");e.appendChild(n),1==t&&n.classList.add("projectsList")}const t=document.querySelectorAll(".projectsDiv > div"),n=document.createElement("input");n.classList.add("projectsTextbox"),t[0].appendChild(n);const o=document.createElement("button");o.classList.add("projectButton"),o.textContent="Add New Project",o.addEventListener("click",(function(){v.addProjectDiv(),v.addDeleteButton()})),t[0].appendChild(o)}()},addTasksContent:function(){!function(){const e=document.querySelector(".tasksDiv");for(let t=0;t<2;t++){const n=document.createElement("div");e.appendChild(n),1==t&&n.classList.add("tasksList")}const t=document.querySelectorAll(".tasksDiv > div"),n=document.createElement("input");n.setAttribute("type","text"),n.classList.add("tasksTextbox"),t[0].appendChild(n);const o=document.createElement("input");o.setAttribute("type","date"),o.classList.add("date"),t[0].appendChild(o);const c=document.createElement("select");t[0].appendChild(c);const r=document.querySelector("select"),a=document.createElement("option");a.value="high",a.textContent="High",r.appendChild(a);const s=document.createElement("option");s.value="medium",s.textContent="Medium",r.appendChild(s);const i=document.createElement("option");i.value="low",i.textContent="Low",r.appendChild(i);const d=document.createElement("button");d.classList.add("taskButton"),d.textContent="Add New Task",d.addEventListener("click",(function(){g.addTask(),g.addDeleteButton()})),t[0].appendChild(d)}()}};(function(){!function(){const e=document.createElement("div");e.classList.add("header"),b.appendChild(e);const t=document.createElement("h1");t.textContent="To-do List",e.appendChild(t)}()})(),y(),L.createProjectsDiv(),L.createTasksDiv(),L.addProjectContent(),L.addTasksContent(),v.addDefaultProject()})()})();
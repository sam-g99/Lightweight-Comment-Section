!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){t.ta={placeholder:"Type here to comment...",maxLength:500}},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(e.i,r,a),r.locals?r.locals:{});e.exports=i},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i={};function c(e,t,n){for(var o=0;o<t.length;o++){var r={css:t[o][1],media:t[o][2],sourceMap:t[o][3]};i[e][o]?i[e][o](r):i[e].push(h(r,n))}}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,p=0;function h(e,t){var n,o,r;if(t.singleton){var a=p++;n=f||(f=l(t)),o=s.bind(null,n,a,!1),r=s.bind(null,n,a,!0)}else n=l(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r()),e=n.base?e+n.base:e,t=t||[],i[e]||(i[e]=[]),c(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){i[e]||(i[e]=[]),c(e,t,n);for(var o=t.length;o<i[e].length;o++)i[e][o]();i[e].length=t.length,0===i[e].length&&delete i[e]}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,":root{--main-blue:#57a7f0}*{padding:0;margin:0;font-family:sans-serif;box-sizing:border-box}body{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding-top:30px}.textarea-container,body{display:-webkit-box;display:flex}.textarea-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}#commentRoot{max-width:600px;width:100%}#commentRoot textarea{color:#292929;border:1px solid #dadada;outline:none;resize:none;font-family:sans-serif}#commentRoot button{background:var(--main-blue);border:none;color:#fff;outline:none;padding:10px;cursor:pointer;margin-left:auto;border-radius:3px;box-shadow:0 1px 2px #ccc}#commentRoot #commentBox{font-size:15px;min-height:100px;padding:8px;width:100%}#commentRoot #commentBox::-webkit-input-placeholder{color:#8e8e8e}#commentRoot #commentBox::-moz-placeholder{color:#8e8e8e}#commentRoot #commentBox:-ms-input-placeholder{color:#8e8e8e}#commentRoot #commentBox::-ms-input-placeholder{color:#8e8e8e}#commentRoot #commentBox::placeholder{color:#8e8e8e}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r)}},t}},function(e,t,n){"use strict";n.r(t);n(1);var o=n(0);function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=new DocumentFragment,i=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.author=t,this.content=n,this.isReply=o,this.element=this.createElement()}var t,n,o;return t=e,(n=[{key:"createElement",value:function(){var e="<div><strong>".concat(this.author,'</strong></div><div id="comment"></div><br>'),t=document.createRange().createContextualFragment(e);return t.getElementById("comment").textContent=this.content,t}}])&&r(t.prototype,n),o&&r(t,o),e}(),c=[];c.push(new i("Bob","I hate pickles",!1)),c.push(new i("Jane","I love tacos",!1));var l=document.createElement("div");l.setAttribute("class","page-comments"),l.setAttribute("id","pageCommentArea"),c.forEach((function(e){l.appendChild(e.element)})),a.appendChild(l);var u=new DocumentFragment;!function(){var e=document.createElement("div");e.setAttribute("class","textarea-container");var t;[(t=o.ta.maxLength?'<div id="charsLeftDisplay" " class="characters-left">'.concat(o.ta.maxLength,"</div>"):"",'\n          <div class="comment-box-container">\n              <textarea id="commentBox" maxlength="'.concat(o.ta.maxLength,'" placeholder="').concat(o.ta.placeholder,'"></textarea>\n              ').concat(t,"\n          </div>\n      ")),'<button id="commentButton"> Comment </button>'].forEach((function(t){e.insertAdjacentHTML("beforeend",t)})),u.appendChild(e)}();var d=[{type:"click",fn:function(e){var t=document.getElementById("commentBox").value,n=new i("Joe",t,!1);document.getElementById("pageCommentArea").appendChild(n.createElement())}}],s=new DocumentFragment,m=document.getElementById("commentRoot");s.appendChild(u),s.appendChild(a),m.appendChild(s);var f=document.getElementById("commentBox"),p=document.getElementById("commentButton");f.addEventListener("focus",(function(){console.log("Comment box focused.")})),f.addEventListener("blur",(function(){console.log("Comment box blurred.")})),p.addEventListener("mouseup",d[0].fn,!1);var h=function(e){var t=e.target,n=o.ta.maxLength-t.value.length;document.getElementById("charsLeftDisplay").textContent=n.toString()};o.ta.maxLength&&(f.addEventListener("keydown",h,!1),f.addEventListener("keyup",h,!1))}]);
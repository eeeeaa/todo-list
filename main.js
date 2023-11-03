(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(537),o=n.n(r),i=n(645),a=n.n(i),c=n(667),d=n.n(c),s=new URL(n(355),n.b),u=a()(o());u.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto);"]);var l=d()(s);u.push([e.id,`* {\n    font-family: Roboto, 'Courier New', Courier, monospace;\n    color: white;\n}\n\nhtml,\nbody {\n    display: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #020617;\n}\n\n#main-content {\n    height: 600px;\n    width: 900px;\n    display: grid;\n    grid-template: 1fr 6fr/2fr 5fr;\n    background-color: #1e1b4b;\n    border-radius: 1em;\n    overflow-y: auto;\n}\n\n.todo-header {\n    grid-area: 1/2/2/-1;\n    background-color: #312e81;\n    border-radius: 0 1em 0 0;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    .header-title {\n        font-weight: 700;\n        font-size: xx-large;\n        margin-left: 0.5em;\n    }\n}\n\n.project-container,\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 1em;\n    padding: 2em;\n}\n\n.project-header {\n    grid-area: 1/1/2/2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    padding: 2em;\n    background-color: #0c4a6e;\n    border-radius: 1em 0 0 0;\n}\n\n.project-container {\n    grid-area: 2/1/-1/2;\n    background-color: #3730a3;\n    border-radius: 0 0 0 1em;\n}\n\n.todo-container {\n    grid-area: 2/2/-1/-1;\n}\n\n.project-container .project-item,\n.todo-container .todo-item {\n    padding: 1em;\n    border-radius: 1em;\n    cursor: pointer;\n}\n\n.project-container .project-item {\n    display: flex;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: #1e1b4b;\n\n    .project-title {\n        margin-left: auto;\n    }\n}\n\n.todo-container .todo-item {\n    display: flex;\n    z-index: 2;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: #5b21b6;\n\n    .todo-title {\n        margin-left: 1em;\n        margin-right: auto;\n    }\n}\n\n.project-container .project-item .project-delete-icon,\n.todo-container .todo-item .todo-delete-icon {\n    content: '';\n    display: block;\n    height: 1.5em;\n    width: 1.5em;\n    background-image: url(${l});\n    background-position: initial;\n    background-size: initial;\n    background-repeat: initial;\n    fill: white;\n}\n\n.form-dialog {\n    border-radius: 1em;\n    position: fixed;\n    z-index: 10;\n    padding: 2em;\n    transform: translateY(-10%);\n    border-color: transparent;\n    border-radius: 2em;\n    background-color: #1e3a8a;\n}\n\n.todo-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 1em;\n    align-items: center;\n\n    .todo-dialog-content {\n        display: grid;\n        grid-template: auto/1fr 1fr;\n        column-gap: 1em;\n        justify-items: center;\n\n        .main-info-field,\n        .additional-info-field {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            gap: 1em;\n        }\n    }\n    .form-buttons {\n        display: grid;\n        grid-template: auto/1fr 1fr;\n        column-gap: 1em;\n    }\n}\n\n.primary-button {\n    /*TODO*/\n}\n\n.secondary-button {\n     /*TODO*/\n}\n\ntextarea,\ninput[type="text"],\ninput[type="date"] {\n    appearance: none;\n    border-color: transparent;\n    border-radius: 1em;\n    background-color: #1e1b4b;\n    padding: 0.5em;\n}\n\ntextarea {\n    resize: none;\n}\n\n/*Checkbox*/\ninput[type="checkbox"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    /* Remove most all native input styles */\n    appearance: none;\n    /* For iOS < 15 */\n    background-color: white;\n    /* Not removed via appearance */\n    margin: 0;\n\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n\n    display: grid;\n    place-content: center;\n\n    &::before {\n        content: "";\n        width: 0.65em;\n        height: 0.65em;\n        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n        transform: scale(0);\n        transform-origin: bottom left;\n        transition: 120ms transform ease-in-out;\n        box-shadow: inset 1em 1em var(rebeccapurple);\n        /* Windows High Contrast Mode */\n        background-color: CanvasText;\n    }\n\n    &:checked::before {\n        transform: scale(1);\n    }\n}`,"",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAEA;IACI,sDAAsD;IACtD,YAAY;AAChB;;AAEA;;IAEI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;;IAExB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;;IAEnB;QACI,gBAAgB;QAChB,mBAAmB;QACnB,kBAAkB;IACtB;AACJ;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,YAAY;IACZ,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,8BAA8B;IAC9B,mBAAmB;;IAEnB,yBAAyB;;IAEzB;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI,aAAa;IACb,UAAU;IACV,8BAA8B;IAC9B,mBAAmB;;IAEnB,yBAAyB;;IAEzB;QACI,gBAAgB;QAChB,kBAAkB;IACtB;AACJ;;AAEA;;IAEI,WAAW;IACX,cAAc;IACd,aAAa;IACb,YAAY;IACZ,yDAAqD;IACrD,4BAA4B;IAC5B,wBAAwB;IACxB,0BAA0B;IAC1B,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,QAAQ;IACR,mBAAmB;;IAEnB;QACI,aAAa;QACb,2BAA2B;QAC3B,eAAe;QACf,qBAAqB;;QAErB;;YAEI,aAAa;YACb,sBAAsB;YACtB,8BAA8B;YAC9B,QAAQ;QACZ;IACJ;IACA;QACI,aAAa;QACb,2BAA2B;QAC3B,eAAe;IACnB;AACJ;;AAEA;IACI,OAAO;AACX;;AAEA;KACK,OAAO;AACZ;;AAEA;;;IAGI,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA,WAAW;AACX;IACI,kCAAkC;IAClC,wBAAwB;IACxB,wCAAwC;IACxC,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,+BAA+B;IAC/B,SAAS;;IAET,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,iCAAiC;IACjC,qBAAqB;IACrB,+BAA+B;;IAE/B,aAAa;IACb,qBAAqB;;IAErB;QACI,WAAW;QACX,aAAa;QACb,cAAc;QACd,uEAAuE;QACvE,mBAAmB;QACnB,6BAA6B;QAC7B,uCAAuC;QACvC,4CAA4C;QAC5C,+BAA+B;QAC/B,4BAA4B;IAChC;;IAEA;QACI,mBAAmB;IACvB;AACJ",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Roboto');\n\n* {\n    font-family: Roboto, 'Courier New', Courier, monospace;\n    color: white;\n}\n\nhtml,\nbody {\n    display: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #020617;\n}\n\n#main-content {\n    height: 600px;\n    width: 900px;\n    display: grid;\n    grid-template: 1fr 6fr/2fr 5fr;\n    background-color: #1e1b4b;\n    border-radius: 1em;\n    overflow-y: auto;\n}\n\n.todo-header {\n    grid-area: 1/2/2/-1;\n    background-color: #312e81;\n    border-radius: 0 1em 0 0;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    .header-title {\n        font-weight: 700;\n        font-size: xx-large;\n        margin-left: 0.5em;\n    }\n}\n\n.project-container,\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 1em;\n    padding: 2em;\n}\n\n.project-header {\n    grid-area: 1/1/2/2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    padding: 2em;\n    background-color: #0c4a6e;\n    border-radius: 1em 0 0 0;\n}\n\n.project-container {\n    grid-area: 2/1/-1/2;\n    background-color: #3730a3;\n    border-radius: 0 0 0 1em;\n}\n\n.todo-container {\n    grid-area: 2/2/-1/-1;\n}\n\n.project-container .project-item,\n.todo-container .todo-item {\n    padding: 1em;\n    border-radius: 1em;\n    cursor: pointer;\n}\n\n.project-container .project-item {\n    display: flex;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: #1e1b4b;\n\n    .project-title {\n        margin-left: auto;\n    }\n}\n\n.todo-container .todo-item {\n    display: flex;\n    z-index: 2;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: #5b21b6;\n\n    .todo-title {\n        margin-left: 1em;\n        margin-right: auto;\n    }\n}\n\n.project-container .project-item .project-delete-icon,\n.todo-container .todo-item .todo-delete-icon {\n    content: '';\n    display: block;\n    height: 1.5em;\n    width: 1.5em;\n    background-image: url('../assets/icon/ic_cancel.svg');\n    background-position: initial;\n    background-size: initial;\n    background-repeat: initial;\n    fill: white;\n}\n\n.form-dialog {\n    border-radius: 1em;\n    position: fixed;\n    z-index: 10;\n    padding: 2em;\n    transform: translateY(-10%);\n    border-color: transparent;\n    border-radius: 2em;\n    background-color: #1e3a8a;\n}\n\n.todo-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 1em;\n    align-items: center;\n\n    .todo-dialog-content {\n        display: grid;\n        grid-template: auto/1fr 1fr;\n        column-gap: 1em;\n        justify-items: center;\n\n        .main-info-field,\n        .additional-info-field {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            gap: 1em;\n        }\n    }\n    .form-buttons {\n        display: grid;\n        grid-template: auto/1fr 1fr;\n        column-gap: 1em;\n    }\n}\n\n.primary-button {\n    /*TODO*/\n}\n\n.secondary-button {\n     /*TODO*/\n}\n\ntextarea,\ninput[type=\"text\"],\ninput[type=\"date\"] {\n    appearance: none;\n    border-color: transparent;\n    border-radius: 1em;\n    background-color: #1e1b4b;\n    padding: 0.5em;\n}\n\ntextarea {\n    resize: none;\n}\n\n/*Checkbox*/\ninput[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    /* Remove most all native input styles */\n    appearance: none;\n    /* For iOS < 15 */\n    background-color: white;\n    /* Not removed via appearance */\n    margin: 0;\n\n    font: inherit;\n    color: currentColor;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n\n    display: grid;\n    place-content: center;\n\n    &::before {\n        content: \"\";\n        width: 0.65em;\n        height: 0.65em;\n        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n        transform: scale(0);\n        transform-origin: bottom left;\n        transition: 120ms transform ease-in-out;\n        box-shadow: inset 1em 1em var(rebeccapurple);\n        /* Windows High Contrast Mode */\n        background-color: CanvasText;\n    }\n\n    &:checked::before {\n        transform: scale(1);\n    }\n}"],sourceRoot:""}]);const A=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var A=n(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==A)t[A].references++,t[A].updater(p);else{var m=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var u=n(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},355:(e,t,n)=>{e.exports=n.p+"4a3ad8609d6bc60d523e.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),d=n.n(c),s=n(216),u=n.n(s),l=n(589),A=n.n(l),p=n(402),m={};function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function h(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}function g(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function y(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,B(e,t,"set"),n),n}function v(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,B(e,t,"get"))}function B(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}m.styleTagTransform=A(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var C=new WeakMap,I=new WeakMap,w=function(){function e(t,n,r,o,i,a){var c,d,s,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,C,{writable:!0,value:void 0}),g(this,I,{writable:!0,value:void 0}),c=this,s=function(){return"\n        \n        ".concat(u.title,", \n        ").concat(u.description,", \n        ").concat(v(u,C),", \n        ").concat(v(u,I),",\n        ").concat(u.memo,",\n        ").concat(u.isChecked,"\n\n        \n        ")},(d=h(d="toString"))in c?Object.defineProperty(c,d,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[d]=s,this.title=t,this.description=n,this.dueDate=r,this.priority=o,this.memo=i,this.isChecked=a}var t,n;return t=e,(n=[{key:"dueDate",get:function(){return v(this,C)},set:function(e){if(isNaN(new Date(e)))throw new Error("".concat(e," is not a date!"));y(this,C,e)}},{key:"priority",get:function(){return v(this,I)},set:function(e){y(this,I,e<1?1:e>3?3:e)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,T(r.key),r)}}function k(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t,n){return(t=T(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===E(t)?t:String(t)}function S(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,M(e,t,"get"))}function L(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,M(e,t,"set"),n),n}function M(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Q=new WeakMap,O=k((function e(t,n){var r,o,i,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i={writable:!0,value:void 0},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(r=this,o=Q),o.set(r,i),j(this,"toString",(function(){for(var e="",t=0;t<S(a,Q).length;t++)e+="[".concat(S(a,Q)[t].toString(),"]");return e})),j(this,"getTodoList",(function(){return S(a,Q)})),j(this,"setTodoList",(function(e){L(a,Q,[]);for(var t=0;t<e.length;t++){if(!(e[t]instanceof w))throw new Error("this is not a Todo list!");S(a,Q).push(e[t])}})),j(this,"clearTodoList",(function(){L(a,Q,[])})),j(this,"replaceTodo",(function(e,t){S(a,Q)[e]=t})),j(this,"pushTodo",(function(e){S(a,Q).push(e)})),j(this,"addTodoToTop",(function(e){S(a,Q).unshift(e)})),j(this,"popTodo",(function(){return S(a,Q).pop()})),j(this,"removeTodoFromTop",(function(){return S(a,Q).shift()})),j(this,"removeTodoAt",(function(e){return S(a,Q).splice(e,1)})),j(this,"swapTodo",(function(e,t){var n=S(a,Q)[e];S(a,Q)[e]=S(a,Q)[t],S(a,Q)[t]=n})),j(this,"sortTodoByPriority",(function(){S(a,Q).sort((function(e,t){return e.priority>t.priority?-1:e.priority<t.priority?1:0}))})),j(this,"generateRandomNotes",(function(e){L(a,Q,[]);for(var t=0;t<e;t++){var n=new w((Math.random()+1).toString(36).substring(5),(Math.random()+1).toString(36).substring(5),"".concat(Math.round(6*(Math.random()+1)),"/").concat(Math.round(12*(Math.random()+1)),"/").concat(Math.round(1e3*(Math.random()+1))),Math.round(3*(Math.random()+1)),(Math.random()+1).toString(36).substring(5),Math.random()<.5);a.pushTodo(n)}})),this.projectName=t,L(this,Q,n)}));function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function N(e,t,n){return t&&Y(e.prototype,t),n&&Y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var R=N((function e(t,n){P(this,e),this.projectName=t,this.rawTodoList=n})),q=N((function e(t,n,r,o,i,a){P(this,e),this.title=t,this.description=n,this.dueDate=r,this.priority=o,this.memo=i,this.isChecked=a}));function z(){if(W())return localStorage}function H(e,t){W()&&(localStorage[e]=t)}function W(){return function(e){var t;try{t=window.localStorage;var n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()}var _="projects",Z="currentProjectIndex";function U(e){for(var t=[],n=0;n<e.length;n++){var r=new q(e[n].title,e[n].description,e[n].dueDate,e[n].priority,e[n].memo,e[n].isChecked);t.push(r)}return t}function J(e){for(var t=[],n=0;n<e.length;n++){var r=new w(e[n].title,e[n].description,e[n].dueDate,e[n].priority,e[n].memo,e[n].isChecked);t.push(r)}return t}function F(e){!function(e){H(Z,e)}(e)}function X(){return Number(z()[Z]||"-1")}function $(){return function(e){for(var t=[],n=0;n<e.length;n++){var r=new O(e[n].projectName,J(e[n].rawTodoList));t.push(r)}return t}(JSON.parse(z()[_]||"[]"))}function V(e){var t;t=function(e){for(var t=[],n=0;n<e.length;n++){var r=new R(e[n].projectName,U(e[n].getTodoList()));t.push(r)}return t}(e),H(_,JSON.stringify(t))}function K(e,t){var n=$();n[e]=t,V(n)}function G(e){return $()[e]}var ee,te,ne=document.querySelector(".project-container"),re=document.querySelector(".todo-container"),oe=document.querySelector("#main-content");function ie(){var e;e=document.querySelector(".new-todo-button"),$().length>0?e.style.display="flex":e.style.display="none",function(e){if(ne.innerHTML="",!(e.length<=0))for(var t=function(t){var n=document.createElement("div");n.classList.add("project-item"),n.setAttribute("data-index",t);var r=document.createElement("div");r.classList.add("project-delete-icon"),r.addEventListener("click",(function(e){var n,r;$().length>0&&(n=t,(r=$()).splice(n,1),V(r),function(e,t){var n=X();t>0&&X()===e?F(0):$().length<=0?(F(-1),ce()):n>e&&F(n-1)}(t,$().length),ie()),e.stopPropagation()}));var o=document.createElement("div");o.classList.add("project-title"),o.textContent=e[t].projectName,n.appendChild(r),n.appendChild(o),X()===t&&ae(e[t]),n.addEventListener("click",(function(n){ae(e[t]),F(t)})),ne.appendChild(n)},n=0;n<e.length;n++)t(n)}($())}function ae(e){var t=e.getTodoList();if(ce(),!(t.length<=0))for(var n=function(e){var n=document.createElement("div");n.classList.add("todo-item"),n.setAttribute("data-index",e);var r=document.createElement("div");r.classList.add("todo-delete-icon"),r.addEventListener("click",(function(t){var n=Object.assign({},G(X()));n.getTodoList().length>0&&(n.removeTodoAt(e),K(X(),n),ie()),t.stopPropagation()}));var o=document.createElement("div");o.classList.add("todo-title"),o.textContent=t[e].title;var i=document.createElement("input");i.setAttribute("type","checkbox"),i.setAttribute("name","checkbox"),i.setAttribute("id","checkbox"),i.checked=t[e].isChecked,i.addEventListener("change",(function(t){var n=Object.assign({},G(X()));if(X()>-1){var r=n.getTodoList().slice()[e];r.isChecked=t.target.checked,n.replaceTodo(e,r),K(X(),n),ie()}})),n.appendChild(r),n.appendChild(o),n.appendChild(i),re.appendChild(n)},r=0;r<t.length;r++)n(r)}function ce(){re.innerHTML=""}ee=document.querySelector(".new-project-button"),te=document.querySelector(".new-todo-button"),ee.addEventListener("click",(function(e){var t,n,r=new O("test");r.generateRandomNotes(3),t=r,(n=$()).push(t),V(n),ie()})),te.addEventListener("click",(function(e){var t;oe.prepend(((t=document.createElement("dialog")).classList.add("form-dialog"),t.open=!0,t.appendChild(function(){var e=document.createElement("form");e.setAttribute("action",""),e.setAttribute("form","post"),e.classList.add("todo-form");var t=function(){var e=document.createElement("div");e.classList.add("todo-dialog-content");var t=function(){var e=document.createElement("fieldset"),t=document.createElement("legend");t.textContent="Main information";var n=document.createElement("div");n.classList.add("main-info-field");var r=document.createElement("label");r.setAttribute("for","todo-title"),r.innerHTML="<div>Title</div>";var o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","todo-title"),o.setAttribute("id","todo-title"),o.setAttribute("placeholder","todo title..."),o.required=!0;var i=document.createElement("label");i.setAttribute("for","todo-description"),i.innerHTML="<div>Description</div>";var a=document.createElement("textarea");return a.setAttribute("name","todo-description"),a.setAttribute("id","todo-description"),a.setAttribute("cols","50"),a.setAttribute("rows","10"),a.required=!0,a.textContent="Enter your description here...",n.append(r,o,i,a),e.append(t,n),e}(),n=function(){var e=document.createElement("fieldset"),t=document.createElement("legend");t.textContent="Additional information";var n=document.createElement("div");n.classList.add("additional-info-field");var r=document.createElement("label");r.setAttribute("for","todo-memo"),r.innerHTML="<div>Memo</div>";var o=document.createElement("textarea");o.setAttribute("name","todo-memo"),o.setAttribute("id","todo-memo"),o.setAttribute("cols","50"),o.setAttribute("rows","5"),o.required=!0,o.textContent="enter memo here...";var i=document.createElement("label");i.setAttribute("for","todo-due-date"),i.innerHTML="<div>Due Date</div>";var a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("name","todo-due-date"),a.setAttribute("id","todo-due-date"),a.required=!0;var c=function(){var e=document.createElement("fieldset"),t=document.createElement("legend");t.textContent="Task priority";var n=document.createElement("label");n.setAttribute("for","todo-priority-low"),n.innerHTML="<div>Low</div>";var r=document.createElement("input");r.setAttribute("type","radio"),r.setAttribute("name","todo-priority"),r.setAttribute("id","todo-priority-low"),r.setAttribute("value","1"),r.checked=!0,r.required=!0;var o=document.createElement("label");o.setAttribute("for","todo-priority-medium"),o.innerHTML="<div>Medium</div>";var i=document.createElement("input");i.setAttribute("type","radio"),i.setAttribute("name","todo-priority"),i.setAttribute("id","todo-priority-medium"),i.setAttribute("value","2");var a=document.createElement("label");a.setAttribute("for","todo-priority-high"),a.innerHTML="<div>High</div>";var c=document.createElement("input");return c.setAttribute("type","radio"),c.setAttribute("name","todo-priority"),c.setAttribute("id","todo-priority-high"),c.setAttribute("value","3"),e.append(t,n,r,o,i,a,c),e}();return n.append(r,o,i,a,c),e.append(t,n),e}();return e.append(t,n),e}(),n=function(){var e=document.createElement("div");e.classList.add("form-buttons");var t=document.createElement("button");t.classList.add("primary-button"),t.textContent="Create/Edit Todo",t.addEventListener("click",(function(e){var t=document.querySelector(".todo-form");t.checkValidity()?e.preventDefault():t.reportValidity()}));var n=document.createElement("button");return n.setAttribute("type","button"),n.classList.add("secondary-button"),n.textContent="Close",n.addEventListener("click",(function(e){var t=document.querySelector(".form-dialog");t.close(),t.remove()})),e.append(t,n),e}();return e.append(t,n),e}()),t))})),ie()})()})();
//# sourceMappingURL=main.js.map
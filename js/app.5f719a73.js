(function(){"use strict";var e={7260:function(e,t,n){var a=n(9242),r=n(3396);function o(e,t,n,a,o,i){const c=(0,r.up)("v-header"),s=(0,r.up)("router-view"),u=(0,r.up)("the-navigation");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c),(0,r.Wm)(s),(0,r.Wm)(u)])}var i=n(65),c=n(9285),s=n(7139);const u=e=>((0,r.dD)("data-v-2bff318e"),e=e(),(0,r.Cn)(),e),l={class:"d-flex flex-column align-items-center"},d=u((()=>(0,r._)("h1",null,"Home",-1))),f=u((()=>(0,r._)("h1",null,"Weather",-1))),h=u((()=>(0,r._)("h1",null,"Stocks",-1))),p=u((()=>(0,r._)("div",{class:"p-4"},[(0,r._)("h1",null,"Politic")],-1))),v=u((()=>(0,r._)("div",{class:"p-4"},[(0,r._)("h1",null,"World")],-1)));function m(e,t,n,a,o,i){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[(0,r._)("div",{style:(0,s.j5)({display:o.statusBar}),class:(0,s.C_)(["overlay",{slideOutRight:!o.clickNavBar,slideInLeft:o.clickNavBar}])},[(0,r._)("div",l,[(0,r._)("div",{class:"p-4",onClick:t[0]||(t[0]=(...e)=>i.clickRoute&&i.clickRoute(...e))},[(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[d])),_:1})]),(0,r._)("div",{class:"p-4",onClick:t[1]||(t[1]=(...e)=>i.clickRoute&&i.clickRoute(...e))},[(0,r.Wm)(c,{to:"/weather"},{default:(0,r.w5)((()=>[f])),_:1})]),(0,r._)("div",{class:"p-4",onClick:t[2]||(t[2]=(...e)=>i.clickRoute&&i.clickRoute(...e))},[(0,r.Wm)(c,{to:"/stock"},{default:(0,r.w5)((()=>[h])),_:1})]),p,v])],6),(0,r._)("div",{class:"iconBar text-primary",onClick:t[3]||(t[3]=(...e)=>i.clickIconNav&&i.clickIconNav(...e))},[(0,r._)("i",{class:(0,s.C_)(["fa-solid fa-xl",{"fa-bars":!o.clickNavBar,"fa-bars-staggered":o.clickNavBar,active:o.clickNavBar}])},null,2)])])}var g={name:"TheNavigation",data(){return{clickNavBar:!1,statusBar:"none"}},methods:{clickIconNav(){this.clickNavBar=!this.clickNavBar,this.statusBar="block"},clickRoute(){this.statusBar="none",this.clickNavBar=!1}}},w=n(89);const b=(0,w.Z)(g,[["render",m],["__scopeId","data-v-2bff318e"]]);var k=b,y={components:{VHeader:c.Z,TheNavigation:k},methods:{...(0,i.nv)(["weatherFetch"])},async mounted(){}};const _=(0,w.Z)(y,[["render",o]]);var N=_,O={actions:{async fetchNews({commit:e}){const t=await fetch("/assets/json/requst.json"),n=await t.json();e("getDateAgo",n)}},mutations:{getDateAgo(e,t){if(t.articles){let n=t.articles,a=new Date;return n=n.map((e=>{let t=Date.parse(e.publishedAt);if(t/1e3/60>60){let n=((a-t)/1e3/60-a.getTimezoneOffset())/60;return n<1&&(n=Math.round(60*n)+"m ago"),n>1&&(n=Math.round(n)+"h ago"),{...e,dateAgo:n}}})),e.news=n}return e.news=t},updateTargetNews(e,t){e.targetNews=t},"updateSearсh"(e,t){return console.log(t),t?e.newsOutput=e.news.filter((e=>`${e.title}`.toLowerCase().includes(t))):e.news}},state:{news:[],newsOutput:[],targetNews:[]},getters:{allNews(e){return e.newsOutput.length>=1?e.newsOutput:e.news},targetNews(e){return e.targetNews}}},C={actions:{async weatherFetch({commit:e},t="kiev"){let n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=69f5dcd0f23c44a997743916220904&q=${t}&days=3&aqi=yes&alerts=yes`);n=await n.json(),console.log(n),e("updateWeather",n)}},mutations:{updateWeather(e,t){e.weather=t}},state:{weather:[]},getters:{allWeather(e){return e.weather},showWeaterTemp(e){for(let t in e.weather.current)if("feelslike_c"==t)return e.weather.current[t]},showWeaterImg(e){for(let t in e.weather.current)if("condition"==t)return e.weather.current[t].icon}}},j={actions:{async stockFetch({commit:e}){const t={method:"GET",headers:{"X-RapidAPI-Host":"yh-finance.p.rapidapi.com","X-RapidAPI-Key":"1cb80d97b3msh082cc60273b0e76p1e66e1jsn649ec4168f8c"}};fetch("https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US",t).then((e=>e.json())).then((t=>e("updateStock",t))).catch((e=>console.error(e)))}},mutations:{updateStock(e,t){e.stock=t,console.log(t)}},state:{stock:[]},getters:{showStock(e){return console.log(e.stock),e.stock}}};const S=(0,i.MT)({modules:{news:O,weather:C,stock:j}});var x=S,B=n(678);const A=(0,B.p7)({history:(0,B.PO)(),routes:[{path:"/",name:"home",component:()=>n.e(177).then(n.bind(n,886))},{path:"/news/:name",name:"newsPage",component:()=>n.e(138).then(n.bind(n,3470))},{path:"/weather",name:"weather",component:()=>n.e(261).then(n.bind(n,2882))},{path:"/stock",name:"stock",component:()=>n.e(131).then(n.bind(n,3670))}]});var T=A;(0,a.ri)(N).use(T).use(x).mount("#app")},9285:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(3396);const r=e=>((0,a.dD)("data-v-6dfc1571"),e=e(),(0,a.Cn)(),e),o={class:"header"},i={class:"container pt-2 pb-2 border-bottom header d-flex justify-content-between"},c=r((()=>(0,a._)("div",{class:"logo"},[(0,a._)("h1",null,"NFAW")],-1))),s={class:"search px-2"},u=(0,a.uE)('<div class="button px-2" data-v-6dfc1571><button class="btn btn-primary" data-v-6dfc1571><i class="fa-solid fa-magnifying-glass fs-6" data-v-6dfc1571></i></button></div><div class="auth px-2 d-flex align-items-center" data-v-6dfc1571><i class="fa-regular fa-user fs-4" data-v-6dfc1571></i></div>',2);function l(e,t,n,r,l,d){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",i,[c,(0,a._)("div",s,[(0,a._)("input",{onInput:t[0]||(t[0]=e=>d.textSearсh(e.target.value)),type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"},null,32)]),u])])}var d=n(65),f={methods:{...(0,d.OI)(["updateSearсh"]),"textSearсh"(e){this.updateSearсh(e)}}},h=n(89);const p=(0,h.Z)(f,[["render",l],["__scopeId","data-v-6dfc1571"]]);var v=p}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{131:"stock",138:"newsPage",177:"home",261:"weather"}[e]+"."+{131:"038c0e48",138:"4de0d6e5",177:"565703d9",261:"1b55d9ea"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{138:"newsPage",177:"home",261:"weather"}[e]+"."+{138:"73ae4a05",177:"f071bdbf",261:"c0bfa5e0"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var c,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=a),e[a]=[r];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,r.parentNode.removeChild(r),a(s)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),c=n.p+i;if(t(i,c))return r();e(a,c,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={138:1,177:1,261:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),c=new Error,s=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],c=a[1],s=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var l=s(n)}for(t&&t(a);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7260)}));a=n.O(a)})();
//# sourceMappingURL=app.5f719a73.js.map
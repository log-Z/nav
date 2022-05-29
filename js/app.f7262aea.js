(function(){"use strict";var e={4564:function(e,t,n){var o=n(9242),r=n(3396),i=n(4870),c=n(65);const a={id:"logo",viewBox:"0 0 1000 1000"},s=(0,r._)("polygon",{style:{opacity:"0.33"},points:"653.9,507.7 693.1,614.5 862.2,228.2 475.9,397.3 582.2,437 344.5,674.7 191.5,523.1 92.8,565.2 344.8,816.6 344.8,816.6 344.9,816.7 "},null,-1),l=(0,r._)("polygon",{points:"698.9,462.7 738.1,569.5 907.2,183.2 520.9,352.3 627.2,392 389.5,629.7 236.5,478.1 137.8,520.2 389.8,771.6 389.8,771.6 389.9,771.7 "},null,-1),u=[s,l];function p(e,t,n,o,i,c){return(0,r.wg)(),(0,r.iD)("svg",a,u)}var g={name:"navLogo"},d=n(89);const f=(0,d.Z)(g,[["render",p]]);var v=f,m=n(7139),h=n(4806),w=n.n(h);const y=["value"],b={name:"navSearchInput",props:{modelValue:{type:String,default:function(){return""}}}};var S=Object.assign(b,{emits:["input","focus","blur","complete-next","complete-prev","eng-next","eng-prev","update:modelValue"],setup(e,{expose:t,emit:n}){const c=(0,i.iH)(),a=e=>{const t=e.target.value;n("update:modelValue",t),n("input",t)},s=()=>{c.value.focus()};return t({focus:s}),(t,i)=>((0,r.wg)(),(0,r.iD)("input",{class:"input",type:"text",autocomplete:"off",autofocus:"autofocus",spellcheck:"false",placeholder:"👴 来点什么？",ref_key:"inputRef",ref:c,value:e.modelValue,onInput:a,onFocus:i[0]||(i[0]=e=>n("focus")),onBlur:i[1]||(i[1]=e=>n("blur")),onKeydown:[i[2]||(i[2]=(0,o.D2)((0,o.iM)((e=>n("complete-next")),["exact","prevent"]),["down"])),i[3]||(i[3]=(0,o.D2)((0,o.iM)((e=>n("complete-prev")),["exact","prevent"]),["up"])),i[4]||(i[4]=(0,o.D2)((0,o.iM)((e=>n("eng-next")),["ctrl","exact","prevent"]),["down"])),i[5]||(i[5]=(0,o.D2)((0,o.iM)((e=>n("eng-prev")),["ctrl","exact","prevent"]),["up"]))]},null,40,y))}});const k=(0,d.Z)(S,[["__scopeId","data-v-5dfb956e"]]);var x=k;const _={key:0,class:"sprites-res icon icon-submit"},O={key:1,class:"sprites-res icon icon-baidu"},j={key:2,class:"sprites-res icon icon-google"},D={key:3,class:"sprites-res icon icon-dogedoge"},q={key:4,class:"sprites-res icon icon-wikipedia"},U={key:5,class:"sprites-res icon icon-bing"};function C(e,t,n,o,i,c){return(0,r.wg)(),(0,r.iD)("div",{onClick:t[0]||(t[0]=t=>e.$emit("click"))},["submit"==n.icon?((0,r.wg)(),(0,r.iD)("div",_)):(0,r.kq)("",!0),"baidu"==n.icon?((0,r.wg)(),(0,r.iD)("div",O)):(0,r.kq)("",!0),"google"==n.icon?((0,r.wg)(),(0,r.iD)("div",j)):(0,r.kq)("",!0),"dogedoge"==n.icon?((0,r.wg)(),(0,r.iD)("div",D)):(0,r.kq)("",!0),"wikipedia"==n.icon?((0,r.wg)(),(0,r.iD)("div",q)):(0,r.kq)("",!0),"bing"==n.icon?((0,r.wg)(),(0,r.iD)("div",U)):(0,r.kq)("",!0)])}var W={name:"navSearchAction",props:{icon:{type:String,default:function(){return""}}}};const A=(0,d.Z)(W,[["render",C],["__scopeId","data-v-554c8c29"]]);var E=A;const F={name:"navSearchEngineSelector"};var M=Object.assign(F,{props:{engine:{type:String,default:function(){return"baidu"}}},emits:["change"],setup(e,{expose:t,emit:n}){const o=e,a=(0,c.oR)(),s=(0,i.qj)({eng:o.engine}),l=(0,r.Fl)((()=>a.state.config.config.searchEngine.list)),u=()=>{let e=(l.value.indexOf(s.eng)+1)%l.value.length;e<0&&(e=0),s.eng=l.value[e],g()},p=()=>{let e=(l.value.indexOf(s.eng)-1)%l.value.length;e<0&&(e=l.value.length-1),s.eng=l.value[e],g()},g=()=>{n("change",s.eng)};return t({next:u,prev:p}),(e,t)=>((0,r.wg)(),(0,r.j4)((0,i.SU)(E),{icon:s.eng,onClickCapture:u},null,8,["icon"]))}});const R=M;var $=R;const z={key:0,class:"search-complete card-2"},I=["onMousedown"],T={name:"navSearchComplete"};var H=Object.assign(T,{props:{list:{type:Array,default:function(){return[]}}},emits:["selecte","change"],setup(e,{expose:t,emit:n}){const o=e,c=(0,i.qj)({active:0}),a=e=>{c.active=e,n("selecte",o.list[c.active])},s=e=>c.active==e,l=()=>{c.active=(c.active+=1)%o.list.length,n("change",o.list[c.active])},u=()=>{c.active=(c.active-=1)%o.list.length,c.active<0&&(c.active=o.list.length-1),n("change",o.list[c.active])};return t({next:l,prev:u}),(t,n)=>e.list.length>1?((0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("ol",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,i.SU)(w()).drop(e.list),((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t+1,class:(0,m.C_)({active:s(t+1)}),onMousedown:e=>a(t+1)},(0,m.zw)(e),43,I)))),128))])])):(0,r.kq)("",!0)}});const P=H;var V=P,B=n(6265),N=n.n(B),Z=n(1045),K=n.n(Z);function L(e){return"https://www.baidu.com/s?wd="+encodeURIComponent(e)}function Y(e,t){N().get("https://www.baidu.com/sugrec",{params:{prod:"wise",wd:e},adapter:K()}).then((e=>{t({eng:"baidu",wd:e.data.q,list:e.data.g?e.data.g.map((e=>e.q)):[]})})).catch((e=>console.error(e)))}var G={target:L,complete:Y};function J(e){return"https://www.google.com/search?q="+encodeURIComponent(e)}function Q(e,t){N().get("https://www.google.com/complete/search",{params:{client:"psy-ab",hl:"zh-CN",q:e},adapter:K()}).then((e=>{t({eng:"google",wd:e.data[0],list:e.data[1].map((e=>e[0]))})})).catch((e=>console.error(e)))}var X={target:J,complete:Q};function ee(e){return"https://www.bing.com/search?mkt=zh-cn&q="+encodeURIComponent(e)}function te(e,t){N().get("https://cors-proxy.logz.ml/www_bing_com/as/suggestions",{params:{cvid:0,mkt:"zh-cn",qry:e}}).then((n=>{if(!n.data)return;let o=document.createElement("div");o.innerHTML=n.data;let r=[];o.querySelectorAll("li").forEach((e=>r.push(e.innerText))),t({eng:"bing",wd:e,list:r})})).catch((e=>console.error(e)))}var ne={target:ee,complete:te};function oe(e){return"https://zh.wikipedia.org/w/index.php?search="+encodeURIComponent(e)}function re(e,t){N().get("https://zh.wikipedia.org/w/api.php",{params:{action:"opensearch",format:"json",formatversion:2,limit:10,search:e},adapter:K()}).then((e=>{t({eng:"wikipedia",wd:e.data[0],list:e.data[1]})})).catch((e=>console.error(e)))}var ie={target:oe,complete:re};const ce={baidu:G,google:X,bing:ne,wikipedia:ie};function ae(e,t){return ce[e].target(t)}function se(e,t,n){return ce[e].complete(t,n)}var le={target:ae,complete:se};const ue={class:"search"},pe=["onSubmit"],ge={name:"navSearch"};var de=Object.assign(ge,{setup(e){const t=(0,c.oR)(),n=(0,i.iH)(),a=(0,i.iH)(),s=(0,i.iH)(),l=(0,i.qj)({searchWord:"",complete:[],isFocus:!0}),u=(0,r.Fl)((()=>l.isFocus?"card-2":"card-1")),p=(0,r.Fl)((()=>t.state.prefers.searchEngine));let g=w().debounce((e=>{e?le.complete(p.value,e,(e=>{e.wd===l.searchWord&&e.eng===p.value&&(l.complete=[l.searchWord,...e.list.filter((e=>Boolean(e)))])})):l.complete=[]}),100);const d=()=>{l.isFocus=!0,g(l.searchWord)},f=()=>{l.isFocus=!1,l.complete=[]},v=()=>{let e=le.target(p.value,l.searchWord);window.open(e)?.focus()},h=()=>{a.value.next()},y=()=>{a.value.prev()},b=e=>{t.commit("prefers/searchEngine",e),l.complete=[],g(l.searchWord),n.value.focus()},S=()=>{s.value.next()},k=()=>{s.value.prev()},_=e=>{l.searchWord=e},O=e=>{l.searchWord=e,v()};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",ue,[(0,r._)("form",{class:(0,m.C_)((0,i.SU)(u)),onSubmit:(0,o.iM)(v,["prevent"])},[(0,r.Wm)((0,i.SU)(x),{modelValue:l.searchWord,"onUpdate:modelValue":t[0]||(t[0]=e=>l.searchWord=e),ref_key:"inputRef",ref:n,onInput:(0,i.SU)(g),onFocus:d,onBlur:f,onEngNext:h,onEngPrev:y,onCompleteNext:S,onCompletePrev:k},null,8,["modelValue","onInput"]),(0,r.Wm)((0,i.SU)($),{ref_key:"engineSelectorRef",ref:a,engine:(0,i.SU)(p),onChange:b},null,8,["engine"]),(0,r.Wm)((0,i.SU)(E),{icon:"submit",onClick:v})],42,pe),(0,r.Wm)((0,i.SU)(V),{ref_key:"completeRef",ref:s,list:l.complete,onSelecte:O,onChange:_},null,8,["list"])]))}});const fe=de;var ve=fe,me=ve;const he=["href"],we={class:"img"},ye=["src"],be={key:1},Se={class:"text"},ke={class:"title"},xe={class:"subtitle"},_e={name:"navFavoriteItem",props:{website:{type:Object,default:function(){return{title:"Title",subtitle:"subtitle",icon:null,url:"#"}}}}};var Oe=Object.assign(_e,{setup(e){const t=e,n=(0,c.oR)(),o=(0,i.qj)({isActive:!1}),a=(0,r.Fl)((()=>{const e=t.website.icon;if(w().isEmpty(e))return"#";if(/^(http[s]?:)?\/\//.test(e))return e;{const t=n.getters["config/baseUrl"],o=n.state.config.config.favorites.iconPrefix;return t+o+e}})),s=()=>{o.isActive=!0},l=()=>{o.isActive=!1};return(t,n)=>((0,r.wg)(),(0,r.iD)("a",{class:(0,m.C_)(["website",{"card-1":o.isActive}]),href:e.website.url,onMouseover:s,onMouseout:l,onTouchstart:s,onTouchend:l,onTouchcancel:l},[(0,r._)("div",we,[e.website.icon?((0,r.wg)(),(0,r.iD)("img",{key:0,class:"icon",src:(0,i.SU)(a)},null,8,ye)):(0,r.kq)("",!0),e.website.icon?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",be,(0,m.zw)(e.website.title.charAt(0)),1))]),(0,r._)("div",Se,[(0,r._)("div",ke,(0,m.zw)(e.website.title),1),(0,r._)("div",xe,(0,m.zw)(e.website.subtitle),1)])],42,he))}});const je=Oe;var De=je;const qe={class:"group"},Ue={name:"navFavoriteGroup",props:{info:{type:Object,default:function(){return{name:"Group",websites:[]}}}}};var Ce=Object.assign(Ue,{setup(e){return(t,n)=>((0,r.wg)(),(0,r.iD)("div",qe,[(0,r._)("h2",null,(0,m.zw)(e.info.name),1),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.info.websites,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.title},[(0,r.Wm)((0,i.SU)(De),{website:e},null,8,["website"])])))),128))])]))}});const We=Ce;var Ae=We;const Ee={class:"favorite-list"},Fe={name:"navFavorites"};var Me=Object.assign(Fe,{setup(e){const t=(0,c.oR)(),n=(0,i.iH)(t.state.config.config.favorites.groups);return(e,t)=>((0,r.wg)(),(0,r.iD)("div",Ee,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.value,(e=>((0,r.wg)(),(0,r.j4)((0,i.SU)(Ae),{key:e.name,info:e},null,8,["info"])))),128))]))}});const Re=Me;var $e=Re,ze=$e;const Ie={class:"info"},Te={name:"navFoot"};var He=Object.assign(Te,{setup(e){const t=(0,c.oR)(),n=(0,i.iH)(t.state.config.config.description);return(e,t)=>((0,r.wg)(),(0,r.iD)("footer",null,[(0,r._)("div",Ie,(0,m.zw)(n.value),1)]))}});const Pe=He;var Ve=Pe;const Be=["scheme"],Ne={class:"header-warrpar"},Ze={class:"logo-warppar"},Ke={class:"search-warppar"},Le={class:"favorites-warppar"};var Ye={name:"App",setup(e){const t=(0,c.oR)(),n=(0,r.Fl)((()=>t.state.prefers.colorScheme));let o=null;const a=()=>{o=setTimeout((()=>{const e="light"==n.value?"dark":"light";t.commit("prefers/colorScheme",e)}),1e3)},s=()=>{clearTimeout(o)};return t.dispatch("config/update"),(e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"vue-app",scheme:(0,i.SU)(n)},[(0,r._)("div",Ne,[(0,r._)("header",null,[(0,r._)("div",Ze,[(0,r.Wm)((0,i.SU)(v),{onMouseenter:a,onMouseleave:s})]),(0,r._)("div",Ke,[(0,r.Wm)((0,i.SU)(me))])])]),(0,r._)("div",Le,[(0,r.Wm)((0,i.SU)(ze))]),(0,r.Wm)((0,i.SU)(Ve))],8,Be))}};const Ge=Ye;var Je=Ge,Qe=n(2415),Xe={namespaced:!0,state:()=>({colorScheme:"light",searchEngine:"baidu"}),mutations:{colorScheme:function(e,t){e.colorScheme=t},searchEngine:function(e,t){e.searchEngine=t}}};n(6699);const et={properties:{list:{type:Array,element:String,default:["baidu","google","wikipedia"]}}},tt={type:Array,element:{title:{type:String,required:!0},subtitle:{type:String},icon:{type:String},url:{type:String,required:!0}}},nt={type:Array,element:{name:{type:String,required:!0},websites:tt}},ot={properties:{iconPrefix:{type:String,default:""},groups:nt}},rt={properties:{name:{type:String},description:{type:String},searchEngine:et,favorites:ot}};function it(e,t){if(e.required&&w().isEmpty(t))throw"is required.";!e.required&&w().isEmpty(t)&&(t=void 0!==e.default&&void 0!==e.default?e.default:e.type===Array?[]:e.type&&e.type!==Object?null:{});let n=null===t||void 0===t?null:typeof t;if([String,Number,Boolean].includes(e.type)){if(null===n)return null;if(n===e.type.name.toLowerCase())return t;throw`${t} is not a String, type "${n}".`}if(e.type===Array){if(!Array.isArray(t))throw`${t} is not a Array, type "${n}".`;if([String,Number,Boolean].includes(e.element)){let n=e.element.name.toLowerCase(),o=t.filter((e=>typeof e!==n)).length;if(0===o)return t;throw`${t} is not a ${n} Array.`}return t.map(((t,n)=>{let o={};for(let r in e.element)if(Object.hasOwnProperty.call(e.element,r)){let i=e.element[r],c=t[r];o[r]=ct(`[${n}].${r}`,(()=>it(i,c)))}return o}))}{let n={};for(let o in e.properties)if(Object.hasOwnProperty.call(e.properties,o)){let r=e.properties[o],i=t[o];n[o]=ct(o,(()=>it(r,i)))}return n}}function ct(e,t){try{return t()}catch(n){throw console.log(e,n),n.startsWith(".")?`.${e}${n}`:`.${e} ${n}`}}function at(e){try{return it(rt,e||{})}catch(t){console.error("Failed to load config: "+(t.startsWith(".")?t.substring(1):t))}}const st=at;var lt={namespaced:!0,state:()=>({url:"https://gist.githubusercontent.com/log-Z/000f4e8ca92334e81de69c0207528450/raw/nav-config.json",config:st()}),getters:{baseUrl:e=>e.url.match(/^.*\//)},mutations:{url:function(e,t){e.url=t},config:function(e,t){e.config=t}},actions:{update:function({commit:e,state:t}){w().isEmpty(t.url)||N().get(t.url).then((t=>e("config",st(t.data)))).catch((e=>console.error(e)))}}};const ut=(0,Qe.Z)({paths:["prefers","config"]});var pt=(0,c.MT)({modules:{prefers:Xe,config:lt},plugins:[ut]});const gt=(0,o.ri)(Je);gt.use(pt),gt.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var c=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<c&&(c=i));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,c=o[0],a=o[1],s=o[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var u=s(n)}for(t&&t(o);l<c.length;l++)i=c[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunknav"]=self["webpackChunknav"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4564)}));o=n.O(o)})();
//# sourceMappingURL=app.f7262aea.js.map
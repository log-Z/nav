(function(){"use strict";var e={3363:function(e,t,n){var o=n(9242),r=n(3396),i=n(4870),a=n(65);const c={class:"nav-logo"},s=(0,r._)("svg",{class:"nav-logo__svg",viewBox:"0 0 1000 1000"},[(0,r._)("polygon",{style:{opacity:"0.33"},points:"653.9,507.7 693.1,614.5 862.2,228.2 475.9,397.3 582.2,437 344.5,674.7 191.5,523.1 92.8,565.2 344.8,816.6 344.8,816.6 344.9,816.7 "}),(0,r._)("polygon",{points:"698.9,462.7 738.1,569.5 907.2,183.2 520.9,352.3 627.2,392 389.5,629.7 236.5,478.1 137.8,520.2 389.8,771.6 389.8,771.6 389.9,771.7 "})],-1),l=[s];function u(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",c,l)}var p={name:"navLogo"},v=n(89);const g=(0,v.Z)(p,[["render",u]]);var f=g,d=n(7139),h=n(4806),m=n.n(h);const w={class:"nav-search-input"},y=["placeholder","value"],b={name:"navSearchInput",props:{modelValue:{type:String,default:function(){return""}}}};var _=Object.assign(b,{emits:["input","focus","blur","complete-next","complete-prev","eng-next","eng-prev","update:modelValue"],setup(e,{expose:t,emit:n}){const c=(0,a.oR)(),s=(0,i.iH)(),l=(0,r.Fl)((()=>c.state.config.config.searchEngine.placeholder)),u=e=>{const t=e.target.value;n("update:modelValue",t),n("input",t)},p=()=>s.value.focus(),v=()=>s.value==document.activeElement;return t({focus:p,hasFocus:v}),(t,a)=>((0,r.wg)(),(0,r.iD)("div",w,[(0,r._)("input",{class:"nav-search-input__input",type:"text",autocomplete:"off",autofocus:"autofocus",spellcheck:"false",ref_key:"inputRef",ref:s,placeholder:(0,i.SU)(l),value:e.modelValue,onInput:u,onFocus:a[0]||(a[0]=e=>n("focus")),onBlur:a[1]||(a[1]=e=>n("blur")),onKeydown:[a[2]||(a[2]=(0,o.D2)((0,o.iM)((e=>n("complete-next")),["exact","prevent"]),["down"])),a[3]||(a[3]=(0,o.D2)((0,o.iM)((e=>n("complete-prev")),["exact","prevent"]),["up"])),a[4]||(a[4]=(0,o.D2)((0,o.iM)((e=>n("eng-next")),["ctrl","exact","prevent"]),["down"])),a[5]||(a[5]=(0,o.D2)((0,o.iM)((e=>n("eng-prev")),["ctrl","exact","prevent"]),["up"]))]},null,40,y)]))}});const S=_;var k=S;const x={class:"nav-search-action"},D={key:0,class:"sprites-res nav-search-action__icon nav-search-action__icon-submit"},O={key:1,class:"sprites-res nav-search-action__icon nav-search-action__icon-baidu"},j={key:2,class:"sprites-res nav-search-action__icon nav-search-action__icon-google"},U={key:3,class:"sprites-res nav-search-action__icon nav-search-action__icon-dogedoge"},q={key:4,class:"sprites-res nav-search-action__icon nav-search-action__icon-wikipedia"},W={key:5,class:"sprites-res nav-search-action__icon nav-search-action__icon-bing"};function F(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",x,["submit"==n.icon?((0,r.wg)(),(0,r.iD)("div",D)):(0,r.kq)("",!0),"baidu"==n.icon?((0,r.wg)(),(0,r.iD)("div",O)):(0,r.kq)("",!0),"google"==n.icon?((0,r.wg)(),(0,r.iD)("div",j)):(0,r.kq)("",!0),"dogedoge"==n.icon?((0,r.wg)(),(0,r.iD)("div",U)):(0,r.kq)("",!0),"wikipedia"==n.icon?((0,r.wg)(),(0,r.iD)("div",q)):(0,r.kq)("",!0),"bing"==n.icon?((0,r.wg)(),(0,r.iD)("div",W)):(0,r.kq)("",!0)])}var A={name:"navSearchAction",props:{icon:{type:String,default:function(){return""}}}};const C=(0,v.Z)(A,[["render",F]]);var E=C;const R={class:"nav-search-engine-selector"},M={name:"navSearchEngineSelector"};var $=Object.assign(M,{props:{engine:{type:String,default:function(){return"baidu"}}},emits:["change"],setup(e,{expose:t,emit:n}){const o=e,c=(0,a.oR)(),s=(0,i.qj)({eng:o.engine}),l=(0,r.Fl)((()=>c.state.config.config.searchEngine.list)),u=()=>{let e=(l.value.indexOf(s.eng)+1)%l.value.length;e<0&&(e=0),s.eng=l.value[e],v()},p=()=>{let e=(l.value.indexOf(s.eng)-1)%l.value.length;e<0&&(e=l.value.length-1),s.eng=l.value[e],v()},v=()=>{n("change",s.eng)};return t({next:u,prev:p}),(e,t)=>((0,r.wg)(),(0,r.iD)("div",R,[(0,r.Wm)((0,i.SU)(E),{icon:s.eng,onClick:u},null,8,["icon"])]))}});const z=$;var P=z;const T={key:0,class:"nav-search-complete card-2"},H=["onMousedown"],I={name:"navSearchComplete"};var V=Object.assign(I,{props:{list:{type:Array,default:function(){return[]}}},emits:["selecte","change"],setup(e,{expose:t,emit:n}){const a=e,c=(0,i.qj)({active:0});(0,r.YP)(a,(()=>c.active=0));const s=e=>{c.active=e,n("selecte",a.list[c.active])},l=e=>c.active==e,u=()=>{c.active=(c.active+=1)%a.list.length,n("change",a.list[c.active])},p=()=>{c.active=(c.active-=1)%a.list.length,c.active<0&&(c.active=a.list.length-1),n("change",a.list[c.active])};return t({next:u,prev:p}),(t,n)=>e.list.length>1?((0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("ol",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,i.SU)(m()).drop(e.list),((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t+1,class:(0,d.C_)({active:l(t+1)}),onMousedown:(0,o.iM)((e=>s(t+1)),["left"])},(0,d.zw)(e),43,H)))),128))])])):(0,r.kq)("",!0)}});const B=V;var N=B,K=n(6265),Y=n.n(K),Z=n(1045),L=n.n(Z);function G(e){return"https://www.baidu.com/s?wd="+encodeURIComponent(e)}function Q(e,t){Y().get("https://www.baidu.com/sugrec",{params:{prod:"wise",wd:e},adapter:L()}).then((e=>{t({eng:"baidu",wd:e.data.q,list:e.data.g?e.data.g.map((e=>e.q)):[]})})).catch((e=>console.error(e)))}var J={target:G,complete:Q};function X(e){return"https://www.google.com/search?q="+encodeURIComponent(e)}function ee(e,t){Y().get("https://www.google.com/complete/search",{params:{client:"psy-ab",hl:"zh-CN",q:e},adapter:L()}).then((e=>{t({eng:"google",wd:e.data[0],list:e.data[1].map((e=>e[0]))})})).catch((e=>console.error(e)))}var te={target:X,complete:ee};function ne(e){return"https://www.bing.com/search?mkt=zh-cn&q="+encodeURIComponent(e)}function oe(e,t){Y().get("https://api.bing.com/qsonhs.aspx",{params:{type:"cb",mkt:"zh-cn",q:e},adapter:L(),callbackParamName:"cb"}).then((e=>{const n=e.data.AS.Results;let o;o=n?n.map((e=>e.Suggests)).reduce(((e,t)=>e.concat(t)),[]).sort(((e,t)=>e.Sk>t.Sk?1:-1)).map((e=>e.Txt)):[],t({eng:"bing",wd:e.data.AS.Query,list:o})})).catch((e=>console.error(e)))}var re={target:ne,complete:oe};function ie(e){return"https://zh.wikipedia.org/w/index.php?search="+encodeURIComponent(e)}function ae(e,t){Y().get("https://zh.wikipedia.org/w/api.php",{params:{action:"opensearch",format:"json",formatversion:2,limit:10,search:e},adapter:L()}).then((e=>{t({eng:"wikipedia",wd:e.data[0],list:e.data[1]})})).catch((e=>console.error(e)))}var ce={target:ie,complete:ae};const se={baidu:J,google:te,bing:re,wikipedia:ce};function le(e,t){return se[e].target(t)}function ue(e,t,n){return se[e].complete(t,n)}var pe={target:le,complete:ue};const ve={class:"nav-search"},ge=["onSubmit"],fe={name:"navSearch"};var de=Object.assign(fe,{setup(e){const t=(0,a.oR)(),n=(0,i.iH)(),c=(0,i.iH)(),s=(0,i.iH)(),l=(0,i.qj)({searchWord:"",complete:[],isFocus:!0}),u=(0,r.Fl)((()=>l.isFocus?"card-2":"card-1")),p=(0,r.Fl)((()=>t.state.prefers.searchEngine));let v=m().debounce((e=>{e?pe.complete(p.value,e,(e=>{e.wd===l.searchWord&&e.eng===p.value&&n.value.hasFocus()&&(l.complete=[l.searchWord,...e.list.filter((e=>Boolean(e)))])})):l.complete=[]}),100);const g=()=>{l.isFocus=!0,v(l.searchWord)},f=()=>{l.isFocus=!1,l.complete=[l.searchWord]},h=()=>{let e=pe.target(p.value,l.searchWord);window.open(e)?.focus()},w=()=>{c.value.next()},y=()=>{c.value.prev()},b=e=>{t.commit("prefers/searchEngine",e),l.complete=[l.searchWord],v(l.searchWord),n.value.focus()},_=()=>{s.value.next()},S=()=>{s.value.prev()},x=e=>{l.searchWord=e},D=e=>{l.searchWord=e,h()};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",ve,[(0,r._)("form",{class:(0,d.C_)((0,i.SU)(u)),onSubmit:(0,o.iM)(h,["prevent"])},[(0,r.Wm)((0,i.SU)(k),{modelValue:l.searchWord,"onUpdate:modelValue":t[0]||(t[0]=e=>l.searchWord=e),ref_key:"inputRef",ref:n,onInput:(0,i.SU)(v),onFocus:g,onBlur:f,onEngNext:w,onEngPrev:y,onCompleteNext:_,onCompletePrev:S},null,8,["modelValue","onInput"]),(0,r.Wm)((0,i.SU)(P),{ref_key:"engineSelectorRef",ref:c,engine:(0,i.SU)(p),onChange:b},null,8,["engine"]),(0,r.Wm)((0,i.SU)(E),{icon:"submit",onClick:h})],42,ge),(0,r.Wm)((0,i.SU)(N),{ref_key:"completeRef",ref:s,list:l.complete,onSelecte:D,onChange:x},null,8,["list"])]))}});const he=de;var me=he,we=me;const ye=["href"],be={class:"nav-favorite-item__img"},_e=["src"],Se={key:1},ke={class:"nav-favorite-item__text"},xe={class:"nav-favorite-item__title"},De={class:"nav-favorite-item__subtitle"},Oe={name:"navFavoriteItem",props:{website:{type:Object,default:function(){return{title:"Title",subtitle:"subtitle",icon:null,url:"#"}}}}};var je=Object.assign(Oe,{setup(e){const t=e,n=(0,a.oR)(),o=(0,i.qj)({isActive:!1}),c=(0,r.Fl)((()=>{const e=t.website.icon;if(m().isEmpty(e))return"#";if(/^(http[s]?:)?\/\//.test(e))return e;{const t=n.getters["config/baseUrl"],o=n.state.config.config.favorites.iconPrefix;return t+o+e}})),s=()=>{o.isActive=!0},l=()=>{o.isActive=!1};return(t,n)=>((0,r.wg)(),(0,r.iD)("a",{class:(0,d.C_)(["nav-favorite-item",{"card-1":o.isActive}]),href:e.website.url,onMouseover:s,onMouseout:l,onTouchstart:s,onTouchend:l,onTouchcancel:l},[(0,r._)("div",be,[e.website.icon?((0,r.wg)(),(0,r.iD)("img",{key:0,class:"nav-favorite-item__icon",src:(0,i.SU)(c)},null,8,_e)):((0,r.wg)(),(0,r.iD)("div",Se,(0,d.zw)(e.website.title.charAt(0)),1))]),(0,r._)("div",ke,[(0,r._)("div",xe,(0,d.zw)(e.website.title),1),(0,r._)("div",De,(0,d.zw)(e.website.subtitle),1)])],42,ye))}});const Ue=je;var qe=Ue;const We={class:"nav-favorite-group"},Fe={class:"nav-favorite-group__title"},Ae={name:"navFavoriteGroup",props:{info:{type:Object,default:function(){return{name:"Group",websites:[]}}}}};var Ce=Object.assign(Ae,{setup(e){return(t,n)=>((0,r.wg)(),(0,r.iD)("div",We,[(0,r._)("h2",Fe,(0,d.zw)(e.info.name),1),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.info.websites,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.title},[(0,r.Wm)((0,i.SU)(qe),{website:e},null,8,["website"])])))),128))])]))}});const Ee=Ce;var Re=Ee;const Me={class:"nav-favorites"},$e={name:"navFavorites"};var ze=Object.assign($e,{setup(e){const t=(0,a.oR)(),n=(0,i.iH)(t.state.config.config.favorites.groups);return(e,t)=>((0,r.wg)(),(0,r.iD)("div",Me,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.value,(e=>((0,r.wg)(),(0,r.j4)((0,i.SU)(Re),{key:e.name,info:e},null,8,["info"])))),128))]))}});const Pe=ze;var Te=Pe,He=Te;const Ie={class:"nav-foot"},Ve={class:"nav-foot__info"},Be={name:"navFoot"};var Ne=Object.assign(Be,{setup(e){const t=(0,a.oR)(),n=(0,i.iH)(t.state.config.config.description);return(e,t)=>((0,r.wg)(),(0,r.iD)("footer",Ie,[(0,r._)("div",Ve,(0,d.zw)(n.value),1)]))}});const Ke=Ne;var Ye=Ke;const Ze=["scheme"],Le={class:"vue-app__header-warrpar"},Ge={class:"vue-app__logo-warppar"},Qe={class:"vue-app__search-warppar"},Je={class:"vue-app__favorites-warppar"};var Xe={name:"App",setup(e){const t=(0,a.oR)(),n=(0,r.Fl)((()=>t.state.prefers.colorScheme));let o=null;const c=()=>{o=setTimeout((()=>{const e="light"==n.value?"dark":"light";t.commit("prefers/colorScheme",e)}),1e3)},s=()=>{clearTimeout(o)};return t.dispatch("config/update"),(e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"vue-app",scheme:(0,i.SU)(n)},[(0,r._)("div",Le,[(0,r._)("header",null,[(0,r._)("div",Ge,[(0,r.Wm)((0,i.SU)(f),{onMouseenter:c,onMouseleave:s})]),(0,r._)("div",Qe,[(0,r.Wm)((0,i.SU)(we))])])]),(0,r._)("div",Je,[(0,r.Wm)((0,i.SU)(He))]),(0,r.Wm)((0,i.SU)(Ye))],8,Ze))}};const et=Xe;var tt=et,nt=n(2415),ot={namespaced:!0,state:()=>({colorScheme:"light",searchEngine:"baidu"}),mutations:{colorScheme:function(e,t){e.colorScheme=t},searchEngine:function(e,t){e.searchEngine=t}}};n(6699);const rt={properties:{list:{type:Array,element:String,default:["baidu","google","bing","wikipedia"]},placeholder:{type:String,default:"您来点什么？"}}},it={type:Array,element:{title:{type:String,required:!0},subtitle:{type:String},icon:{type:String},url:{type:String,required:!0}}},at={type:Array,element:{name:{type:String,required:!0},websites:it}},ct={properties:{iconPrefix:{type:String,default:""},groups:at}},st={properties:{name:{type:String},description:{type:String},searchEngine:rt,favorites:ct}};function lt(e,t){if(e.required&&m().isEmpty(t))throw"is required.";!e.required&&m().isEmpty(t)&&(t=void 0!==e.default&&void 0!==e.default?e.default:e.type===Array?[]:e.type&&e.type!==Object?null:{});let n=null===t||void 0===t?null:typeof t;if([String,Number,Boolean].includes(e.type)){if(null===n)return null;if(n===e.type.name.toLowerCase())return t;throw`${t} is not a String, type "${n}".`}if(e.type===Array){if(!Array.isArray(t))throw`${t} is not a Array, type "${n}".`;if([String,Number,Boolean].includes(e.element)){let n=e.element.name.toLowerCase(),o=t.filter((e=>typeof e!==n)).length;if(0===o)return t;throw`${t} is not a ${n} Array.`}return t.map(((t,n)=>{let o={};for(let r in e.element)if(Object.hasOwnProperty.call(e.element,r)){let i=e.element[r],a=t[r];o[r]=ut(`[${n}].${r}`,(()=>lt(i,a)))}return o}))}{let n={};for(let o in e.properties)if(Object.hasOwnProperty.call(e.properties,o)){let r=e.properties[o],i=t[o];n[o]=ut(o,(()=>lt(r,i)))}return n}}function ut(e,t){try{return t()}catch(n){throw n.startsWith(".")?`.${e}${n}`:`.${e} ${n}`}}function pt(e){try{return lt(st,e||{})}catch(t){console.error("Failed to load config: "+(t.startsWith(".")?t.substring(1):t))}}const vt=pt;var gt={namespaced:!0,state:()=>({url:"https://gist.githubusercontent.com/log-Z/000f4e8ca92334e81de69c0207528450/raw/nav-config.json",config:vt()}),getters:{baseUrl:e=>e.url.match(/^.*\//)},mutations:{url:function(e,t){e.url=t},config:function(e,t){e.config=t}},actions:{update:function({commit:e,state:t}){m().isEmpty(t.url)||Y().get(t.url).then((t=>e("config",vt(t.data)))).catch((e=>console.error(e)))}}};const ft=(0,nt.Z)({paths:["prefers","config"]});var dt=(0,a.MT)({modules:{prefers:ot,config:gt},plugins:[ft]});const ht=(0,o.ri)(tt);ht.use(dt),ht.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],s=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var u=s(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunknav"]=self["webpackChunknav"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3363)}));o=n.O(o)})();
//# sourceMappingURL=app.9c17ed19.js.map
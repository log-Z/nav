(function(t){function e(e){for(var i,c,s=e[0],a=e[1],u=e[2],f=0,p=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},o=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0cf8":function(t,e,n){},"1fd3":function(t,e,n){"use strict";n("942b")},3723:function(t,e,n){"use strict";n("8554")},"383b":function(t,e,n){"use strict";n("5ba6")},"3aff":function(t,e,n){},"4bcd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=n("2ef0"),o=n.n(r),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-app",attrs:{scheme:t.scheme}},[n("div",{staticClass:"header-warrpar"},[n("header",[n("div",{staticClass:"logo-warppar"},[n("logo",{nativeOn:{mouseenter:function(e){return t.toggleScheme(e)},mouseleave:function(e){return t.clearToggleScheme(e)}}})],1),n("div",{staticClass:"search-warppar"},[n("search-bar")],1)])]),n("div",{staticClass:"favorites-warppar"},[n("favorte-list")],1),n("foot")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{id:"logo",viewBox:"0 0 1000 1000"}},[n("polygon",{staticStyle:{opacity:"0.33"},attrs:{points:"653.9,507.7 693.1,614.5 862.2,228.2 475.9,397.3 582.2,437 344.5,674.7 191.5,523.1 92.8,565.2 344.8,816.6 344.8,816.6 344.9,816.7 "}}),n("polygon",{attrs:{points:"698.9,462.7 738.1,569.5 907.2,183.2 520.9,352.3 627.2,392 389.5,629.7 236.5,478.1 137.8,520.2 389.8,771.6 389.8,771.6 389.9,771.7 "}})])},u=[],l={},f=l,p=(n("383b"),n("2877")),h=Object(p["a"])(f,a,u,!1,null,null,null),d=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("form",{class:t.fromClass,on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("search-input",{attrs:{event:t.inputEvent},on:{input:t.input,focus:t.focus,blur:t.blur,"eng-next":t.engineNext,"eng-prev":t.enginePrev,"complete-next":t.completeNext,"complete-prev":t.completePrev},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}}),n("engine-selector",{attrs:{engine:t.engine,event:t.engineEvent},on:{change:t.engineChange}}),n("action",{attrs:{icon:"submit"},on:{click:t.submit}})],1),n("complete",{attrs:{list:t.complete,event:t.completeEvent},on:{selecte:t.completeSelect,change:t.completeChange}})],1)},g=[],v=n("2909"),b=(n("99af"),n("4de4"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{ref:"input",staticClass:"input",attrs:{type:"text",autocomplete:"off",autofocus:"autofocus",spellcheck:"false",placeholder:"👴 来点什么？"},domProps:{value:t.value},on:{input:t.input,focus:function(e){return t.$emit("focus")},blur:function(e){return t.$emit("blur")},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.$emit("complete-next"))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.$emit("complete-prev"))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.$emit("eng-next")):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.$emit("eng-prev")):null}]}})}),y=[],w={model:{prop:"value",event:"input"},props:{value:{type:String,default:function(){return""}},event:{required:!0}},methods:{input:function(t){this.$emit("input",t.target.value)},focus:function(){this.$refs.input.focus()}},created:function(){this.event.$on("focus",this.focus)}},_=w,$=(n("cdfb"),Object(p["a"])(_,b,y,!1,null,"c30148c2",null)),x=$.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:function(e){return t.$emit("click")}}},["submit"==t.icon?n("div",{staticClass:"sprites-res icon icon-submit"}):t._e(),"baidu"==t.icon?n("div",{staticClass:"sprites-res icon icon-baidu"}):t._e(),"google"==t.icon?n("div",{staticClass:"sprites-res icon icon-google"}):t._e(),"dogedoge"==t.icon?n("div",{staticClass:"sprites-res icon icon-dogedoge"}):t._e(),"wikipedia"==t.icon?n("div",{staticClass:"sprites-res icon icon-wikipedia"}):t._e()])},C=[],k={props:{icon:{type:String,default:function(){return""}}}},S=k,E=(n("66c7"),Object(p["a"])(S,O,C,!1,null,"43f3655d",null)),j=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("action",{attrs:{icon:t.eng},on:{click:t.next}})},K=[],P={components:{Action:j},props:{engine:{type:String,default:function(){return"baidu"}},event:{required:!0}},data:function(){return{eng:null}},computed:{engineList:function(){return this.$store.state.config.config.searchEngine.list}},methods:{next:function(){var t=(this.engineList.indexOf(this.eng)+1)%this.engineList.length;t<0&&(t=0),this.eng=this.engineList[t],this.notify()},prev:function(){var t=(this.engineList.indexOf(this.eng)-1)%this.engineList.length;t<0&&(t=this.engineList.length-1),this.eng=this.engineList[t],this.notify()},notify:function(){this.$emit("change",this.eng)}},created:function(){this.event.$on("next",this.next),this.event.$on("prev",this.prev),this.eng=this.engine}},U=P,q=Object(p["a"])(U,A,K,!1,null,null,null),W=q.exports,L=(n("d81d"),n("bc3a")),D=n.n(L),I=n("4fbf"),T=n.n(I);function F(t){return"https://www.baidu.com/s?wd="+encodeURIComponent(t)}function N(t,e){D.a.get("https://www.baidu.com/sugrec",{params:{prod:"wise",wd:t},adapter:T.a}).then((function(t){e({eng:"baidu",wd:t.data.q,list:t.data.g?t.data.g.map((function(t){return t.q})):[]})})).catch((function(t){return console.error(t)}))}var B={target:F,complete:N};function M(t){return"https://www.google.com/search?q="+encodeURIComponent(t)}function z(t,e){D.a.get("https://www.google.com/complete/search",{params:{client:"psy-ab",hl:"zh-CN",q:t},adapter:T.a}).then((function(t){e({eng:"google",wd:t.data[0],list:t.data[1].map((function(t){return t[0]}))})})).catch((function(t){return console.error(t)}))}var R={target:M,complete:z};function G(t){return"https://zh.wikipedia.org/w/index.php?search="+encodeURIComponent(t)}function J(t,e){D.a.get("https://zh.wikipedia.org/w/api.php",{params:{action:"opensearch",format:"json",formatversion:2,limit:10,search:t},adapter:T.a}).then((function(t){e({eng:"wikipedia",wd:t.data[0],list:t.data[1]})})).catch((function(t){return console.error(t)}))}var Z={target:G,complete:J},H={baidu:B,google:R,wikipedia:Z};function Q(t,e){return H[t].target(e)}function V(t,e,n){return H[t].complete(e,n)}var X={target:Q,complete:V},Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list.length>1?n("div",{staticClass:"search-complete card-2"},[n("ol",t._l(t.$_.drop(t.list),(function(e,i){return n("li",{key:i+1,class:{active:t.isActive(i+1)},on:{mousedown:function(e){return t.selecte(i+1)}}},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()},tt=[],et={props:{list:{type:Array,default:function(){return[]}},event:{required:!0}},data:function(){return{active:0}},watch:{list:function(){this.active=0}},methods:{selecte:function(t){this.active=t,this.$emit("selecte",this.list[this.active])},isActive:function(t){return this.active==t},next:function(){this.active=(this.active+=1)%this.list.length,this.$emit("change",this.list[this.active])},prev:function(){this.active=(this.active-=1)%this.list.length,this.active<0&&(this.active=this.list.length-1),this.$emit("change",this.list[this.active])}},created:function(){this.event.$on("next",this.next),this.event.$on("prev",this.prev)}},nt=et,it=(n("886b"),Object(p["a"])(nt,Y,tt,!1,null,null,null)),rt=it.exports,ot={components:{SearchInput:x,Action:j,EngineSelector:W,Complete:rt},data:function(){return{searchWord:"",inputEvent:new i["a"],engineEvent:new i["a"],complete:[],completeEvent:new i["a"],isFocus:!0}},computed:{fromClass:function(){return this.isFocus?"card-2":"card-1"},engine:function(){return this.$store.state.prefers.searchEngine}},methods:{input:function(t){var e=this;t?X.complete(this.engine,t,(function(t){if(t.wd===e.searchWord&&t.eng===e.engine){var n=function(t){return Boolean(t)};e.complete=[e.searchWord].concat(Object(v["a"])(t.list.filter(n)))}})):this.complete=[]},focus:function(){this.isFocus=!0,this.input(this.searchWord)},blur:function(){this.isFocus=!1,this.complete=[]},submit:function(){var t=X.target(this.engine,this.searchWord);window.open(t).focus()},engineNext:function(){this.engineEvent.$emit("next")},enginePrev:function(){this.engineEvent.$emit("prev")},engineChange:function(t){this.$store.commit("prefers/searchEngine",t),this.complete=[],this.input(this.searchWord),this.inputEvent.$emit("focus")},completeNext:function(){this.completeEvent.$emit("next")},completePrev:function(){this.completeEvent.$emit("prev")},completeChange:function(t){this.searchWord=t},completeSelect:function(t){this.searchWord=t,this.submit()}},mounted:function(){this.input=this.$_.debounce(this.input,100)}},ct=ot,st=(n("ccfa"),Object(p["a"])(ct,m,g,!1,null,null,null)),at=st.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"favorite-list"},t._l(t.groups,(function(t){return n("group",{key:t.name,attrs:{info:t}})})),1)},lt=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group"},[n("h2",[t._v(t._s(t.info.name))]),n("ul",t._l(t.info.websites,(function(t){return n("li",{key:t.title},[n("item",{attrs:{website:t}})],1)})),0)])},pt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{class:{website:!0,"card-1":t.isActive},attrs:{href:t.website.url},on:{mouseover:t.active,mouseout:t.cancel,touchstart:t.active,touchend:t.cancel,touchcancel:t.cancel}},[n("div",{staticClass:"img"},[t.website.icon?n("img",{staticClass:"icon",attrs:{src:t.iconUrl}}):t._e(),t.website.icon?t._e():n("div",[t._v(t._s(t.website.title.charAt(0)))])]),n("div",{staticClass:"text"},[n("div",{staticClass:"title"},[t._v(t._s(t.website.title))]),n("div",{staticClass:"subtitle"},[t._v(t._s(t.website.subtitle))])])])},dt=[],mt=(n("ac1f"),n("00b4"),{props:{website:{type:Object,default:function(){return{title:"Title",subtitle:"subtitle",icon:null,url:"#"}}}},data:function(){return{iconUrl:null,isActive:!1}},watch:{website:function(){this.loadIconUrl()}},methods:{loadIconUrl:function(){var t=this.website.icon;if(!this.$_.isEmpty(t))if(/^(http[s]?:)?\/\//.test(t))this.iconUrl=t;else{var e=this.$store.getters["config/baseUrl"],n=this.$store.state.config.config.favorites.iconPrefix;this.iconUrl=e+n+t}},active:function(){this.isActive=!0},cancel:function(){this.isActive=!1}},created:function(){this.loadIconUrl()}}),gt=mt,vt=(n("3723"),Object(p["a"])(gt,ht,dt,!1,null,null,null)),bt=vt.exports,yt={components:{Item:bt},props:{info:{type:Object,default:function(){return{name:"Group",websites:[]}}}},data:function(){return{}}},wt=yt,_t=(n("1fd3"),Object(p["a"])(wt,ft,pt,!1,null,null,null)),$t=_t.exports,xt={components:{Group:$t},computed:{groups:function(){return this.$store.state.config.config.favorites.groups}}},Ot=xt,Ct=(n("f531"),Object(p["a"])(Ot,ut,lt,!1,null,null,null)),kt=Ct.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"info"},[t._v(t._s(t.description))])])},Et=[],jt=(n("a4d3"),n("e01a"),{computed:{description:function(){return this.$store.state.config.config.description}}}),At=jt,Kt=(n("968d"),Object(p["a"])(At,St,Et,!1,null,null,null)),Pt=Kt.exports,Ut={components:{Logo:d,SearchBar:at,FavorteList:kt,Foot:Pt},data:function(){return{timeout_scheme:null}},computed:{scheme:function(){return this.$store.state.prefers.colorScheme}},methods:{toggleScheme:function(){var t=this;this.timeout_scheme=setTimeout((function(){var e="light"==t.scheme?"dark":"light";t.$store.commit("prefers/colorScheme",e)}),1e3)},clearToggleScheme:function(){clearTimeout(this.timeout_scheme)}},created:function(){this.$store.dispatch("config/update")}},qt=Ut,Wt=(n("034f"),Object(p["a"])(qt,c,s,!1,null,null,null)),Lt=Wt.exports,Dt=n("2f62"),It=n("0e44"),Tt={namespaced:!0,state:{colorScheme:"light",searchEngine:"baidu"},mutations:{colorScheme:function(t,e){t.colorScheme=e},searchEngine:function(t,e){t.searchEngine=e}}},Ft=(n("466d"),n("53ca")),Nt=(n("caad"),n("2532"),n("a9e3"),n("b0c0"),n("2ca0"),{properties:{list:{type:Array,element:String,default:["baidu","google","wikipedia"]}}}),Bt={type:Array,element:{title:{type:String,required:!0},subtitle:{type:String},icon:{type:String},url:{type:String,required:!0}}},Mt={type:Array,element:{name:{type:String,required:!0},websites:Bt}},zt={properties:{iconPrefix:{type:String,default:""},groups:Mt}},Rt={properties:{name:{type:String},description:{type:String},searchEngine:Nt,favorites:zt}};function Gt(t,e){if(t.required&&o.a.isEmpty(e))throw"is required.";!t.required&&o.a.isEmpty(e)&&(e=void 0!==t.default&&void 0!==t.default?t.default:t.type===Array?[]:t.type&&t.type!==Object?null:{});var n=null===e||void 0===e?null:Object(Ft["a"])(e);if([String,Number,Boolean].includes(t.type)){if(null===n)return null;if(n===t.type.name.toLowerCase())return e;throw"".concat(e,' is not a String, type "').concat(n,'".')}if(t.type===Array){if(!Array.isArray(e))throw"".concat(e,' is not a Array, type "').concat(n,'".');if([String,Number,Boolean].includes(t.element)){var i=t.element.name.toLowerCase(),r=e.filter((function(t){return Object(Ft["a"])(t)!==i})).length;if(0===r)return e;throw"".concat(e," is not a ").concat(i," Array.")}return e.map((function(e,n){var i={};for(var r in t.element)Object.hasOwnProperty.call(t.element,r)&&function(){var o=t.element[r],c=e[r];i[r]=Jt("[".concat(n,"].").concat(r),(function(){return Gt(o,c)}))}();return i}))}var c={};for(var s in t.properties)Object.hasOwnProperty.call(t.properties,s)&&function(){var n=t.properties[s],i=e[s];c[s]=Jt(s,(function(){return Gt(n,i)}))}();return c}function Jt(t,e){try{return e()}catch(n){throw console.log(t,n),n.startsWith(".")?".".concat(t).concat(n):".".concat(t," ").concat(n)}}function Zt(t){try{return Gt(Rt,t||{})}catch(e){console.error("Failed to load config: "+(e.startsWith(".")?e.substring(1):e))}}var Ht=Zt,Qt={namespaced:!0,state:{url:"https://gist.githubusercontent.com/log-Z/000f4e8ca92334e81de69c0207528450/raw/nav-config.json",config:Ht()},getters:{baseUrl:function(t){return t.url.match(/^.*\//)}},mutations:{url:function(t,e){t.url=e},config:function(t,e){t.config=e}},actions:{update:function(t){var e=t.commit,n=t.state;o.a.isEmpty(n.url)||D.a.get(n.url).then((function(t){return e("config",Ht(t.data))})).catch((function(t){return console.error(t)}))}}},Vt=Object(It["a"])({paths:["prefers","config"]});i["a"].use(Dt["a"]);var Xt=new Dt["a"].Store({modules:{prefers:Tt,config:Qt},plugins:[Vt]});n("3aff");i["a"].config.productionTip=!1,i["a"].prototype.$_=o.a,window.vueApp=new i["a"]({render:function(t){return t(Lt)},store:Xt}).$mount("#app")},"5ba6":function(t,e,n){},"5cd4":function(t,e,n){},"66c7":function(t,e,n){"use strict";n("5cd4")},"79b7":function(t,e,n){},8554:function(t,e,n){},"85ec":function(t,e,n){},"886b":function(t,e,n){"use strict";n("e032")},"942b":function(t,e,n){},"968d":function(t,e,n){"use strict";n("acb5")},acb5:function(t,e,n){},ccfa:function(t,e,n){"use strict";n("79b7")},cdfb:function(t,e,n){"use strict";n("0cf8")},e032:function(t,e,n){},f531:function(t,e,n){"use strict";n("4bcd")}});
//# sourceMappingURL=app.b2b4730f.js.map
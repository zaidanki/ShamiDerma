(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);v&&v(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7a78a206"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"f54999b5"}[t]+".css",s=l.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===s)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],v.parentNode.removeChild(v),a(i)},v.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0821":function(t,e,a){t.exports=a.p+"img/backgroundtest.cbbf173b.png"},"504d":function(t,e,a){t.exports=a.p+"img/Texture.68f87ea7.png"},"52dc":function(t,e,a){"use strict";var n=a("8236"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{height:"100",flat:""}},[a("v-btn",{attrs:{depressed:"",to:"/shamiderma/home"}},[a("v-img",{attrs:{width:"300",height:"55",src:t.logo}})],1),a("v-spacer"),a("v-toolbar-items",[t.getCol()?a("v-btn",{staticClass:"grey--text text--darken-1 meticula-small font-weight-regular transparent",attrs:{to:"about",depressed:""}},[t._v("About Us")]):t._e(),t.getCol()?a("v-btn",{staticClass:"grey--text text--darken-1 meticula-small font-weight-regular transparent",attrs:{depressed:""}},[t._v("Our Doctors")]):t._e(),t.getCol()?a("v-btn",{staticClass:"grey--text text--darken-1 meticula-small font-weight-regular transparent",attrs:{to:"/services",depressed:""}},[t._v("OUR SERVICES")]):t._e(),t.getCol()?a("v-btn",{staticClass:"grey--text text--darken-1 meticula-small font-weight-regular transparent",attrs:{to:"/contact",depressed:""}},[t._v("CONTACT")]):t._e()],1)],1),a("v-content",[a("router-view")],1),a("Footer")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{color:"#CACACA"}},[a("v-card",{attrs:{height:"100"}}),a("v-spacer"),a("v-card",{staticClass:"transparent mt-12 pt-12",attrs:{outlined:"",width:"1500"}},[a("v-divider")],1),a("v-spacer"),a("v-spacer"),a("v-card",{staticClass:"transparent",attrs:{outlined:""}},[a("v-row",[a("v-spacer"),t._l(t.footCard,(function(e,n){return a("v-col",{key:n,attrs:{cols:t.scrnSize()}},[a("v-card",{staticClass:"transparent pl-12",attrs:{outlined:"",width:"500",height:"250"}},[a("div",{staticClass:"meticula-medium grey--text text--darken-1 preSpace"},[t._v(t._s(e.text))]),a("v-card",{staticClass:"transparent",attrs:{outlined:"",height:"40"}}),a("div",{staticClass:"meticula-small"},[t._v(t._s(e.subTitle))]),a("div",{staticClass:"meticula-small"},[t._v(t._s(e.subText))]),a("div",{staticClass:"meticula-small"},[t._v(t._s(e.timeText))]),a("div",{staticClass:"meticula-small"},[t._v(" "+t._s(e.subTitle2)+" "),e.vbtn?a("v-btn",{class:e.vbtnopt,attrs:{"min-width":"200",outlined:""}},[t._v(" "+t._s(e.btnText)+" "),a("v-spacer"),e.vic?a("v-icon",[t._v("mdi-send")]):t._e()],1):t._e()],1),a("div",{staticClass:"meticula-small"},[t._v(" "+t._s(e.subText2)+" "),e.vbtn2?a("v-btn",{class:e.vbtnopt2,attrs:{outlined:""}},[t._v(t._s(e.btnText2))]):t._e()],1),a("div",{staticClass:"meticula-small"},[t._v(t._s(e.timeText2))]),a("div",{staticClass:"meticula-small"},[t._v(" "+t._s(e.subText3)+" "),e.vbtn3?a("v-btn",{class:e.vbtnopt2,attrs:{outlined:""}},[t._v(t._s(e.btnText3))]):t._e()],1),a("div",{staticClass:"meticula-small"},[t._v(t._s(e.subTitle3))]),a("div",{staticClass:"meticula-small"},[t._v(t._s(e.subText4))])],1)],1)})),a("v-spacer")],2)],1),a("v-spacer")],1)},o=[],l={name:"Footer",data:function(){return{footCard:[{text:"CONTACT US",subTitle:"Address",subText:"7th Circle, Amman, Jordan",subTitle2:"Phone:",subText2:"+962 6 5822626",subText3:"+962 79 9451777",subTitle3:"E-mail:",subText4:"Info@shamiderma.com",vbtnopt2:"transparent meticula-small",vbtnopt:"transparent meticula-small"},{text:"INFO",btnText:"Our Doctors",route:"/doctors",btnText2:"Our Services",route2:"services",btnText3:"Location",route3:"/location",vbtn:!0,vbtn2:!0,vbtn3:!0,vbtnopt2:"pl-0 meticula-small transparent",vbtnopt:"pl-0 meticula-small transparent"},{text:"OPENNING HOURS",subText:"Sunday - Thursday",timeText:"9:00 - 19:00",subText2:"Friday - Saturday",timeText2:"9:00 - 16:00",vbtnopt:"transparent meticula-small",vbtnopt2:"transparent meticula-small"},{text:"APPOINTEMENT",btnText:"Book Now!",route:"/contact",vbtn:!0,vbtnopt2:"meticula-small transparent",vic:!0}]}},methods:{scrnSize:function(){return window.innerWidth<1200?12:2}}},c=l,u=(a("640c"),a("2877")),d=a("6544"),v=a.n(d),p=a("8336"),m=a("b0af"),h=a("62ad"),f=a("ce7e"),b=a("553a"),g=a("132d"),x=a("0fd9"),C=a("2fa4"),w=Object(u["a"])(c,i,o,!1,null,"5acc2669",null),y=w.exports;v()(w,{VBtn:p["a"],VCard:m["a"],VCol:h["a"],VDivider:f["a"],VFooter:b["a"],VIcon:g["a"],VRow:x["a"],VSpacer:C["a"]});var _=a("bca0"),T=a.n(_),A={name:"App",components:{Footer:y},data:function(){return{logo:T.a,windowWidth:window.innerWidth}},methods:{getCol:function(){return this.windowWidth>1200}}},O=A,S=(a("6c2e"),a("7496")),V=a("a75b"),E=a("adda"),k=a("71d9"),P=a("2a7f"),W=Object(u["a"])(O,r,s,!1,null,"8a3eaa04",null),j=W.exports;v()(W,{VApp:S["a"],VBtn:p["a"],VContent:V["a"],VImg:E["a"],VSpacer:C["a"],VToolbar:k["a"],VToolbarItems:P["a"]});a("d3b7");var I=a("8c4f"),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},R=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"my-style"},[a("v-card",{attrs:{color:"#CACACA"}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/13.6}}),a("v-parallax",{attrs:{height:t.windowHeight,src:t.tpic}},[a("v-card",{staticClass:"transparent",attrs:{flat:"",height:t.windowHeight/10,width:t.windowWidth}}),a("v-toolbar",{attrs:{flat:"",color:"transparent"}},[a("v-toolbar-items",[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/13.4}}),a("v-lazy",{attrs:{options:{threshold:.5},transition:"slideX"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[t.getCard1()?t._e():a("v-card",{staticClass:"transparent",attrs:{outlined:""}},[a("v-card",{staticClass:"display-1 text-center transparent",attrs:{outlined:""}},[a("div",[t._v("Practicing The Art")]),a("div",[t.getCard1()?a("v-card",{staticClass:"transparent",attrs:{outlined:"",height:"40"}}):t._e()],1),a("div",[t._v("of Preserving Beauty")])])],1)],1)],1),a("v-toolbar-items",[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/18}})],1)],1),t.getCard1()?a("v-card",{staticClass:"transparent",attrs:{flat:"",height:t.windowHeight/10,width:t.windowWidth}}):t._e(),a("v-card-title",{attrs:{"primary-title":""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/13.6}}),a("v-lazy",{attrs:{options:{threshold:.5},transition:"slideX"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card",{class:t.getClassText2(),attrs:{outlined:"",width:""}},[t.getCard1()?a("v-card",{staticClass:"transparent",attrs:{outlined:""}},[a("div",[t._v("Practicing The Art")]),a("div",[t.getCard1()?a("v-card",{staticClass:"transparent",attrs:{outlined:"",height:"40"}}):t._e()],1),a("div",[t._v("of Preserving Beauty")])]):t._e()],1)],1)],1),a("v-lazy",{attrs:{options:{threshold:.5},transition:"slideX2"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/13.6}}),a("v-btn",{class:t.getClassBtn(),attrs:{rounded:"","max-width":"650",height:"80",color:t.getClassText()}},[t._v("Get a Free Consultation Now!")])],1)],1),a("v-parallax",{staticClass:"paraop",attrs:{height:"400","min-width":t.windowWidth,src:t.texture}})],1)],1)],1),a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:""}}),a("v-card-title",{staticClass:"my-style justify-center"},[a("v-card",{staticClass:"transparent",attrs:{outlined:""}}),a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"100",transition:"slide-x-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[t.getCard1()?a("v-card",{staticClass:"transparent cyan--text",attrs:{outlined:"","min-width":"492"}},[a("br"),a("br"),a("v-card-title",{staticClass:"justify-center meticula-big"},[t._v("OUR SERVICES")]),a("v-card-title",{staticClass:"black--text meticula-medium"},[t._v("THE AREAS OF OUR PRACTICE")])],1):t._e()],1)],1),t.getCard1()?t._e():a("v-card",{staticClass:"transparent",attrs:{outlined:""}},[a("v-card-title",{staticClass:"justify-center display-1 my-otherstyle font-weight-bold cyan--text"},[t._v("Our Services")])],1),a("v-flex",{attrs:{xs1:"",md12:""}},[a("v-row",{staticClass:"pl-5"},[a("v-spacer"),t._l(t.serviceCards,(function(e,n){return a("v-col",{key:n},[a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"100",transition:"slideUp"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card",{staticClass:"transparent",attrs:{outlined:"","min-height":"350","min-width":"350"}},[a("router-link",{attrs:{to:e.route}},[a("v-img",{attrs:{src:e.img}})],1),a("v-card-title",{staticClass:"justify-center my-otherstyle cyan--text",attrs:{width:"200"}},[t._v(t._s(e.text))])],1)],1)],1)})),a("v-spacer")],2),a("br")],1),a("v-card")],1),t.getCard1()?a("v-card",{staticClass:"center2 transparent",attrs:{height:"150",outlined:""}},[a("v-btn",{staticClass:"cyan white--text text-transform-none meticula-medium",attrs:{to:"/services",rounded:"",width:"500",height:"80"}},[t._v("More Info")])],1):t._e(),t.getCard1()?t._e():a("v-card",[a("v-btn",{staticClass:"cyan title white--text",attrs:{to:"/services",height:"60",width:t.windowWidth}},[t._v("More Info")]),a("br"),a("br"),a("br")],1)],1)],1)},B=[],L=a("0821"),F=a.n(L),U=a("504d"),z=a.n(U),D=a("8435"),M=a.n(D),$={name:"HelloWorld",data:function(){return{windowWidth:window.innerWidth,windowHeight:window.innerHeight,logo:T.a,bg:F.a,texture:z.a,tpic:M.a,serviceCards:[{img:"https://i.imgur.com/j1NctyQ.png",text:"BOTOX & FILLERS",route:"/services/facial",extraText:"Caci Non-Surgical",extraText2:"Lifting Ultherapy treatment",extraText3:"Cat Eye Lifting",extraText4:"Botox  +  Fillers"},{img:"https://i.imgur.com/KOifmt0.png",text:"LASER HAIR REMOVAL",route:"/services/lhr",extraText:"Laster Hair Removal"},{img:"https://i.imgur.com/OSBtrCk.png",text:"BODY CONTOURING",route:"/services/bc",extraText:"Coolsculpting + Exima",extraText2:""},{img:"https://i.imgur.com/VDP2soz.png",text:"NUTRITION SERVICES",route:"/services/ns",extraText:"Diet Plan"}]}},methods:{getCol:function(){return this.windowWidth<1500?4:3},getClassText:function(){return this.windowWidth<1500?"cyan white--text text-transform-none title":"cyan white--text text-transform-none display-1"},getClassText2:function(){return this.windowWidth<1500?"transparent meticula-small text-weight-bold":"my-style transparent"},getCard1:function(){return!(this.windowWidth<1500)},getClassBtn:function(){return this.windowWidth<1500?"center5 text-transform-none":"text-transform-none meticula-small"}}},X=$,G=(a("52dc"),a("99d9")),J=a("0e8f"),q=a("b687"),K=a("8b9c"),Y=Object(u["a"])(X,H,B,!1,null,"346df04b",null),Q=Y.exports;v()(Y,{VApp:S["a"],VBtn:p["a"],VCard:m["a"],VCardTitle:G["a"],VCol:h["a"],VFlex:J["a"],VImg:E["a"],VLazy:q["a"],VParallax:K["a"],VRow:x["a"],VSpacer:C["a"],VToolbar:k["a"],VToolbarItems:P["a"]});var Z={name:"Home",components:{HelloWorld:Q}},tt=Z,et=Object(u["a"])(tt,N,R,!1,null,null,null),at=et.exports;n["a"].use(I["a"]);var nt=[{path:"/shamiderma/home",name:"Home",component:at},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/services",name:"Service",component:function(){return a.e("about").then(a.bind(null,"f23e"))}},{path:"/services/bc",name:"Bc",component:function(){return a.e("about").then(a.bind(null,"2d6a"))}},{path:"/services/bc/coolsculpting",name:"CoolSculpting",component:function(){return a.e("about").then(a.bind(null,"7c85"))}},{path:"/services/bc/exima",name:"Exima",component:function(){return a.e("about").then(a.bind(null,"02cb"))}},{path:"/services/fts",name:"FTs",component:function(){return a.e("about").then(a.bind(null,"6340"))}},{path:"/services/fts/hydrafacial",name:"HydraFacial",component:function(){return a.e("about").then(a.bind(null,"29f4"))}},{path:"/services/fts/caci",name:"Caci",component:function(){return a.e("about").then(a.bind(null,"e2f7"))}},{path:"/services/fts/crystalpeel",name:"CrystalPeel",component:function(){return a.e("about").then(a.bind(null,"166c"))}},{path:"/services/fts/co2laser",name:"CO2Laser",component:function(){return a.e("about").then(a.bind(null,"f0e2"))}},{path:"/services/fts/diamondpeel",name:"DiamondPeel",component:function(){return a.e("about").then(a.bind(null,"70af"))}},{path:"/services/fts/ultherapy",name:"Ultherapy",component:function(){return a.e("about").then(a.bind(null,"00e6"))}},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}},{path:"*",name:"Home",component:at}],rt=new I["a"]({mode:"history",base:"",routes:nt}),st=rt,it=a("2f62");n["a"].use(it["a"]);var ot=new it["a"].Store({state:{},mutations:{},actions:{},modules:{}}),lt=a("f309");n["a"].use(lt["a"]);var ct=new lt["a"]({}),ut=a("fa94"),dt=a.n(ut);n["a"].config.productionTip=!1,new n["a"]({router:st,store:ot,vuetify:ct,Vuelidate:dt.a,render:function(t){return t(j)}}).$mount("#app")},"640c":function(t,e,a){"use strict";var n=a("a158"),r=a.n(n);r.a},"6c2e":function(t,e,a){"use strict";var n=a("6dec"),r=a.n(n);r.a},"6dec":function(t,e,a){},8236:function(t,e,a){},8435:function(t,e,a){t.exports=a.p+"img/Transp.06644807.png"},a158:function(t,e,a){},bca0:function(t,e,a){t.exports=a.p+"img/Logo.7655f4e2.png"}});
//# sourceMappingURL=app.40803533.js.map
(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2eba":function(e,t,n){},"34d0":function(e,t,n){"use strict";var s=n("6ba4"),a=n.n(s);a.a},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"52ce":function(e,t,n){"use strict";var s=n("918c"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("45fc"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("router-view")],1)],1)},r=[],o={name:"App",data:function(){return{}}},i=o,c=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),f=Object(c["a"])(i,a,r,!1,null,null,null),m=f.exports;u()(f,{VApp:d["a"]});var h=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"head",staticClass:"containBox",attrs:{id:"head"}},[n("timer",{ref:"timer"})],1),n("div",{ref:"statics",staticClass:"containBox",attrs:{id:"statics"}},[n("chart")],1),n("div",{ref:"footer",staticClass:"containBox",attrs:{id:"footer"}},[e._m(0)])])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])}],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"timerContainer"}},[n("div",{attrs:{id:"timerText"}},[e._v(e._s(e.timeHour)+":"+e._s(e.timeMinute)+":"+e._s(e.timeSecond))]),n("div",{attrs:{id:"shade"},on:{click:function(t){return e.changeMode()}}},[n("p",[e._v(e._s(e.currText))])]),n("div",{style:{"--color":e.currBackgroundColor},attrs:{id:"timerCircle"}})])},v=[],g=n("bc3a"),x=n.n(g),k=n("4328"),w=n.n(k);x.a.defaults.baseURL="http://time.lenmain.cn",x.a.defaults.withCredentials=!0,x.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded";var y=function(e,t){return x.a.post("/user/login",w.a.stringify({userName:e,password:t}))},_=function(){return x.a.post("/timing/gettime")},T=function(){return x.a.post("/timing/start")},O=function(){return x.a.post("/timing/stop")},z=function(){return x.a.post("/timing/statistic")},S=function(e){var t={hours:0,minutes:0,seconds:0};return t.hours=parseInt(e/3600),t.minutes=parseInt(e%3600/60),t.seconds=e%60,t},I={data:function(){return{timer:null,timeHour:0,timeMinute:0,timeSecond:0,isTiming:!1,currBackgroundColor:"white",currText:"开始计时"}},methods:{setTime:function(){59==this.timeSecond?(this.timeSecond=0,59==this.timeMinute?(this.timeMinute=0,this.timeHour++):this.timeMinute++):this.timeSecond++},changeMode:function(){var e=this;this.isTiming?O().then((function(t){t.data.success?(clearInterval(e.timer),alert("成功停止计时"),e.currBackgroundColor="white",e.currText="开始计时"):alert(t.data.errorMessage)})):(T().then((function(t){t.data.success?(e.currBackgroundColor="blue",e.isTiming=!0,e.timer=setInterval(e.setTime,1e3),alert("成功开始计时")):(alert(t.data.errorMessage),"未登录"==t.data.errorMessage&&e.$router.push({path:"/"}))})),this.currText="停止计时"),this.isTiming=!this.isTiming}},mounted:function(){var e=this;_().then((function(t){var n=S(t.data);console.log(n),e.timeHour=n.hours,e.timeMinute=n.minutes,e.timeSecond=n.seconds}))}},C=I,$=(n("e0a5"),Object(c["a"])(C,p,v,!1,null,null,null)),E=$.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"chart",staticStyle:{width:"600px",height:"400px"}})},B=[],P=n("2909"),q=n("313e"),N=n.n(q),L={data:function(){return{chart:null,dates:[],times:[],option:{title:{text:"过去一周学习时间统计"},tooltip:{},legend:{data:["学习时间"]},xAxis:{data:["test","test"]},yAxis:{},series:[{name:"学习时间",type:"bar",data:[10,10,10,10,10,10,10]}],color:["#66FF99"]}}},methods:{setChart:function(){this.option.series[0].data=this.times,this.option.xAxis.data=this.dates,this.chart.setOption(this.option)},getBeforeDate:function(e){var t=e,n=new Date,s=n.getMonth()+1,a=n.getDate();a<=t&&(s>1?s-=1:s=12),n.setDate(n.getDate()-t),s=n.getMonth()+1,a=n.getDate();var r=(s<10?"0"+s:s)+"-"+(a<10?"0"+a:a);return r}},mounted:function(){var e=this;this.chart=N.a.init(this.$refs.chart),z().then((function(t){if(7==t.data.length)e.times=t.data;else{var n,s;for(s=0;s<7-t.data.length;s++)e.times.push(0);(n=e.times).push.apply(n,Object(P["a"])(t.data))}for(var a=-6;a<0;a++)e.dates.push(e.getBeforeDate(-1*a));e.dates.push("今天"),e.setChart()}))}},D=L,H=Object(c["a"])(D,M,B,!1,null,null,null),R=H.exports,V={components:{timer:E,chart:R},data:function(){return{currPanel:0,panelNum:3,clientHeight:0}},methods:{handleScroll:function(e){e.preventDefault(),console.log(e),e.detail>0||e.deltaY>0?this.currPanel<this.panelNum-1?(this.currPanel++,this.scrollTo(0,this.clientHeight*this.currPanel)):this.scrollTo(0,document.body.scrollHeight):this.currPanel>0&&(this.currPanel--,this.scrollTo(0,this.clientHeight*this.currPanel))},scrollTo:function(e,t){var n=document.documentElement.scrollTop||document.body.scrollTop,s=20,a=setInterval((function(){n=document.documentElement.scrollTop||document.body.scrollTop,Math.abs(n-t)<=s?(window.scrollTo(0,t),clearInterval(a)):n!=t?(window.scrollTo(0,n>t?n-s:n+s),(n==document.documentElement.scrollTop||document.body.scrollTop)&&clearInterval(a)):clearInterval(a)}),10)}},mounted:function(){var e=this;window.addEventListener("wheel",this.handleScroll,{passive:!1}),this.clientHeight=document.documentElement.clientHeight,this.$nextTick((function(){var t=document.querySelector("#head"),n=document.querySelector("#statics");t.style.height=e.clientHeight+"px",n.style.height=e.clientHeight+"px"})),this.currPanel=0},beforeRouteLeave:function(e,t,n){this.$refs.timer.isTiming?(n(!1),window.console("计时未停止")):n(!0)}},F=V,A=(n("a318"),Object(c["a"])(F,b,j,!1,null,null,null)),J=A.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"signInContainer"}},[n("div",{attrs:{id:"signInBox"}},[n("signInBox")],1)])},Y=[],G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("h2",[e._v("注册")]),n("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{rules:e.passwordRules,label:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" Validate ")]),n("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v(" Reset Form ")]),n("v-btn",{attrs:{color:"warning"},on:{click:e.login}},[e._v(" login ")])],1)},K=[],Q={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],email:"",passwordRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()}}},W=Q,X=n("8336"),Z=n("ac7c"),ee=n("4bd4"),te=n("8654"),ne=Object(c["a"])(W,G,K,!1,null,null,null),se=ne.exports;u()(ne,{VBtn:X["a"],VCheckbox:Z["a"],VForm:ee["a"],VTextField:te["a"]});var ae={components:{signInBox:se}},re=ae,oe=(n("52ce"),Object(c["a"])(re,U,Y,!1,null,null,null)),ie=oe.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"logInContainer"}},[n("div",{attrs:{id:"logInBox"}},[n("logInBox")],1)])},le=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{rules:e.passwordRules,label:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" Validate ")]),n("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v(" Reset Form ")]),n("v-btn",{attrs:{color:"success"},on:{click:e.login}},[e._v(" login ")])],1)},de=[],fe=(n("b0c0"),{data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=8||"Password must be longer than 8 characters"}],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},login:function(){var e=this;y(this.name,this.password).then((function(t){t.data.success?(alert("登陆成功"),e.$store.commit("login",{userName:e.name}),e.$router.push("/home")):alert(t.data.errorMessage)}))}}}),me=fe,he=Object(c["a"])(me,ue,de,!1,null,null,null),be=he.exports;u()(he,{VBtn:X["a"],VCheckbox:Z["a"],VForm:ee["a"],VTextField:te["a"]});var je={components:{logInBox:be}},pe=je,ve=(n("34d0"),Object(c["a"])(pe,ce,le,!1,null,null,null)),ge=ve.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main"}},[n("h1",[e._v("hello world")]),n("router-link",{attrs:{to:"login"}},[e._v("点此登录")]),n("router-link",{attrs:{to:"signin"}},[e._v("点此注册(目前不可用)")])],1)},ke=[],we={},ye=we,_e=(n("a402"),Object(c["a"])(ye,xe,ke,!1,null,null,null)),Te=_e.exports;s["a"].use(h["a"]);var Oe=[{path:"/",name:"welcome",component:Te},{path:"/home",name:"home",meta:{requireAuth:!0},component:J},{path:"/signin",name:"signin",component:ie},{path:"/login",name:"login",component:ge}],ze=new h["a"]({mode:"hash",routes:Oe}),Se=ze,Ie=n("2f62");s["a"].use(Ie["a"]);var Ce=new Ie["a"].Store({state:{isLogin:JSON.parse(sessionStorage.getItem("isLogin"))||!1,user:JSON.parse(sessionStorage.getItem("user"))||{}},mutations:{login:function(e,t){e.user=t,e.isLogin=!0,sessionStorage.setItem("user",JSON.stringify(t)),sessionStorage.setItem("isLogin",!0)},exit:function(e){e.user={},e.isLogin=!1,window.localStorage.setItem("user",null),window.localStorage.setItem("isLogin",!1)}},actions:{},modules:{},getters:{getIsLogIn:function(e){return e.isLogin},getUser:function(e){return e.user}}}),$e=n("a7fe"),Ee=n.n($e),Me=n("c1df"),Be=n.n(Me),Pe=(n("78a7"),n("f309"));s["a"].use(Pe["a"]);var qe=new Pe["a"]({});s["a"].use(Ee.a,x.a),s["a"].config.productionTip=!1,s["a"].prototype.$moment=Be.a,Be.a.locale("zh-cn"),new s["a"]({router:Se,store:Ce,vuetify:qe,render:function(e){return e(m)}}).$mount("#app"),Se.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requireAuth}))?Ce.state.isLogin?n():n({path:"/login"}):n()}))},"597a":function(e,t,n){},"6ba4":function(e,t,n){},"78a7":function(e,t,n){},"882b":function(e,t,n){},"918c":function(e,t,n){},a318:function(e,t,n){"use strict";var s=n("2eba"),a=n.n(s);a.a},a402:function(e,t,n){"use strict";var s=n("882b"),a=n.n(s);a.a},e0a5:function(e,t,n){"use strict";var s=n("597a"),a=n.n(s);a.a}});
//# sourceMappingURL=app.3bb11be2.js.map
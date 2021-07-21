function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"0m3x":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=function l(){_classCallCheck(this,l)},u=e("pMnS"),r=e("MKJQ"),a=e("sZkV"),i=e("TSSN"),s=e("mrSG"),c=function(){function l(n,e,t){_classCallCheck(this,l),this.router=n,this.popoverController=e,this.loadingController=t}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.popoverController.dismiss().then((function(){document.location.href="/login"}))}},{key:"viewAppHistory",value:function(){this.popoverController.dismiss(),this.router.navigate(["action-history"])}},{key:"refresh",value:function(){this.popoverController.dismiss(),this.presentLoading("Carregando...")}},{key:"changeCompany",value:function(){}},{key:"changeVehicle",value:function(){}},{key:"presentLoading",value:function(l){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:l});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}}),n,this)})))}}]),l}(),d=e("p74H"),m=function(){function l(n,e,t){_classCallCheck(this,l),this.popoverController=n,this.router=e,this.statusBar=t}return _createClass(l,[{key:"ngAfterContentChecked",value:function(){}},{key:"ngOnInit",value:function(){this.userType=localStorage.getItem("user"),this.statusBar.backgroundColorByHexString("#4a5568"),this.transition=!1,this.user=localStorage.getItem("user"),this.collaborator&&this.collaborator.id&&this.collaborator.id,this.menus=[{name:"Informe de despesas",icon:"elo-task",action:"expense-report-list"}],"revisador"==this.user&&this.menus.push({name:"Aprovar",icon:"elo-check",action:"revisions-list"}),"admin"==this.user&&(this.menus.push({name:"Aprovar",icon:"elo-check",action:"revisions-list"}),this.menus.push({name:"Usu\xe1rios",icon:"elo-user",action:"users-list"}))}},{key:"toInventory",value:function(){this.router.navigate(["inventory"])}},{key:"openOptions",value:function(l){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={component:c,translucent:!0,event:l},n.next=3,this.popoverController.create(e);case 3:return t=n.sent,n.next=6,t.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"toPage",value:function(l){this.transition=!0,this.router.navigate([l])}},{key:"toExpenseCreate",value:function(){localStorage.removeItem("expense-group"),localStorage.setItem("expense-last-page","menu"),this.router.navigate(["expense-create"])}},{key:"toIntegration",value:function(){this.transition=!0,this.router.navigate(["integration"])}}]),l}(),f=e("iInd"),p=t["\u0275crt"]({encapsulation:0,styles:[[".hero-waves[_ngcontent-%COMP%]{display:block;width:100%;height:60px;position:absolute;bottom:0}.wave1[_ngcontent-%COMP%]   use[_ngcontent-%COMP%]{-webkit-animation:10s linear -2s infinite move-forever1;animation:10s linear -2s infinite move-forever1}.wave2[_ngcontent-%COMP%]   use[_ngcontent-%COMP%]{-webkit-animation:8s linear -2s infinite move-forever2;animation:8s linear -2s infinite move-forever2}.wave3[_ngcontent-%COMP%]   use[_ngcontent-%COMP%]{-webkit-animation:6s linear -2s infinite move-forever3;animation:6s linear -2s infinite move-forever3}@-webkit-keyframes move-forever1{0%{transform:translate(85px,0)}100%{transform:translate(-90px,0)}}@keyframes move-forever1{0%{transform:translate(85px,0)}100%{transform:translate(-90px,0)}}@-webkit-keyframes move-forever2{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}@keyframes move-forever2{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}@-webkit-keyframes move-forever3{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}@keyframes move-forever3{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}"]],data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[["class","ion-no-border"]],null,null,null,r.nb,r.r)),t["\u0275did"](1,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,r.Rb,r.V)),t["\u0275did"](3,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.bb,r.f)),t["\u0275did"](5,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,1,"ion-menu-button",[],null,null,null,r.xb,r.C)),t["\u0275did"](7,49152,null,0,a.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,3,"ion-title",[],null,null,null,r.Qb,r.U)),t["\u0275did"](9,49152,null,0,a.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](10,0,["",""])),t["\u0275pid"](131072,i.j,[i.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](12,0,null,null,40,"ion-content",[["color","light"]],null,null,null,r.ib,r.m)),t["\u0275did"](13,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](14,0,null,0,38,"div",[["class"," h-24 relative"],["style","background-color: #49345f;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,8,":svg:svg",[[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","hero-waves"],["preserveAspectRatio","none"],["viewBox","0 24 150 28 "],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,1,":svg:defs",[],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,0,":svg:path",[["d","M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"],["id","wave-path"]],null,null,null,null,null)),(l()(),t["\u0275eld"](18,0,null,null,1,":svg:g",[["class","wave1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","rgba(244,245,248, .1)"],["x","50"],["y","3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,null,1,":svg:g",[["class","wave2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](21,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","rgba(244,245,248, .2)"],["x","50"],["y","0"]],null,null,null,null,null)),(l()(),t["\u0275eld"](22,0,null,null,1,":svg:g",[["class","wave3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](23,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","#F4F5F8"],["x","50"],["y","9"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,28,"ion-grid",[["style","--ion-grid-padding: 0px;"]],null,null,null,r.mb,r.q)),t["\u0275did"](25,49152,null,0,a.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](26,0,null,0,26,"ion-row",[],null,null,null,r.Eb,r.I)),t["\u0275did"](27,49152,null,0,a.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](28,0,null,0,24,"ion-col",[["size","12"],["style","--ion-grid-column-padding: 0px; margin-top: 100px;"]],null,null,null,r.hb,r.l)),t["\u0275did"](29,49152,null,0,a.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](30,0,null,0,22,"ion-card",[["mode","ios"]],null,null,null,r.fb,r.g)),t["\u0275did"](31,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](32,0,null,0,20,"ion-card-content",[],null,null,null,r.cb,r.h)),t["\u0275did"](33,49152,null,0,a.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](34,0,null,0,18,"div",[["class","text-center relative"]],null,null,null,null,null)),(l()(),t["\u0275eld"](35,0,null,null,0,"img",[["class","m-auto justify-center"],["src","../../../assets/logo.jpeg"],["style","height: 100px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](36,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](37,0,null,null,13,"ion-text",[["color","dark"],["style","margin-top: 10px;"]],null,null,null,r.Ob,r.S)),t["\u0275did"](38,49152,null,0,a.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](39,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),t["\u0275eld"](40,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Bem vindo ao Mental Kit App"])),(l()(),t["\u0275eld"](42,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](43,0,null,0,2,"p",[["class","mt-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](44,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Mental Kit \xe9 um aplicativo desenvolvido para facilitar o acesso a evid\xeancias cientificas para ajudar a melhorar a sa\xfade mental de crin\xe7as e adolescentes no Brasil."])),(l()(),t["\u0275eld"](46,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](47,0,null,0,3,"h2",[["class","mt-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](48,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](49,null,["",""])),t["\u0275pid"](131072,i.j,[i.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](51,0,null,null,1,"ion-icon",[["class","mt-6 text-5xl"],["color","primary"],["name","arrow-back-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](52,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,3,0,"primary"),l(n,13,0,"light"),l(n,29,0,"12"),l(n,31,0,"ios"),l(n,38,0,"dark"),l(n,52,0,"primary","arrow-back-outline")}),(function(l,n){l(n,10,0,t["\u0275unv"](n,10,0,t["\u0275nov"](n,11).transform("START"))),l(n,49,0,t["\u0275unv"](n,49,0,t["\u0275nov"](n,50).transform("NAVIGATE_SIDE_MENU")))}))}var v=t["\u0275ccf"]("app-menu",m,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-menu",[],null,null,null,g,p)),t["\u0275did"](1,2211840,null,0,m,[a.Jb,f.m,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),h=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"ion-list",[["lines","none"]],null,null,null,r.wb,r.z)),t["\u0275did"](1,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](2,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.refresh()&&t),t}),r.tb,r.x)),t["\u0275did"](3,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(l()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["color","primary"],["name","information-circle-outline"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](5,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),t["\u0275ted"](-1,0,[" Ajuda "])),(l()(),t["\u0275eld"](7,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t}),r.tb,r.x)),t["\u0275did"](8,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(l()(),t["\u0275eld"](9,0,null,0,1,"ion-icon",[["color","danger"],["name","exit-outline"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](10,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),t["\u0275ted"](-1,0,["Sair "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,""),l(n,5,0,"primary","information-circle-outline"),l(n,8,0,""),l(n,10,0,"danger","exit-outline")}),null)}var C=t["\u0275ccf"]("app-menu-popover",c,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-menu-popover",[],null,null,null,b,h)),t["\u0275did"](1,114688,null,0,c,[f.m,a.Jb,a.Db],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=e("SVse"),y=e("s7LF"),R=function l(){_classCallCheck(this,l)},x=e("iTUp");e.d(n,"MenuPageModuleNgFactory",(function(){return w}));var w=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,v,C]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,k.n,k.m,[t.LOCALE_ID,[2,k.v]]),t["\u0275mpd"](4608,y.m,y.m,[]),t["\u0275mpd"](4608,a.b,a.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,k.b,k.b,[]),t["\u0275mpd"](1073742336,y.l,y.l,[]),t["\u0275mpd"](1073742336,y.c,y.c,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,f.q,f.q,[[2,f.v],[2,f.m]]),t["\u0275mpd"](1073742336,R,R,[]),t["\u0275mpd"](1073742336,x.a,x.a,[]),t["\u0275mpd"](1073742336,i.h,i.h,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,f.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);
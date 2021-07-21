function _defineProperties(e,n){for(var l=0;l<n.length;l++){var t=n[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,l){return n&&_defineProperties(e.prototype,n),l&&_defineProperties(e,l),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3fol":function(e,n,l){"use strict";l.r(n);var t=l("8Y7J"),o=function e(){_classCallCheck(this,e)},u=l("pMnS"),i=l("MKJQ"),r=l("sZkV"),a=l("SVse"),c=l("mrSG"),s=l("G/xI"),d=l("+Spe"),f=l("Vx7P"),m=l("aY4x"),h=l("a0SF"),g=l("AytR"),p=l("YpDY"),b=function(){function e(n,l,t,o,u,i,r,a,c){_classCallCheck(this,e),this.locale=n,this.router=l,this.expenseService=t,this.cacheService=o,this.toasterService=u,this.menuController=i,this.popoverController=r,this.categoryService=a,this.translateService=c,this.expenses=[{name:"Arrumar l\xe2mpada",who:"Solicitado por R\xf4mulo"}],this.selecteds=[],this.isSearchable=!1,this.listLength=10,this.loadingFirstTime=!0,this.loading=!0,this.date=(new Date).toISOString(),this.menuFilters={category:null}}return _createClass(e,[{key:"openOptions",value:function(e){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,t,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={component:p.a,componentProps:{selecteds:this.selecteds},translucent:!0,event:e},n.next=3,this.popoverController.create(l);case 3:return(t=n.sent).onDidDismiss().then((function(e){e&&e.data&&"delete"==e.data&&o.refresh()})).catch((function(e){console.log(e)})),n.next=7,t.present();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n,this)})))}},{key:"setSelect",value:function(e){this.selectOn=e}},{key:"getCurrency",value:function(e){if(e.getRelation("currency"))return e.getRelation("currency").getAttribute("code")}},{key:"ngOnInit",value:function(){this.loading=!1}},{key:"filter",value:function(e){e&&"categories"==e.jsonApiType.split("/")[2]&&(this.menuFilters.category=e),this.getExpenses(),this.menuController.close()}},{key:"clearFilters",value:function(){this.menuFilters={category:null},this.getExpenses(),this.menuController.close()}},{key:"getExpenses",value:function(e){var n=this,l={term:e,menuFilters:this.menuFilters,limit:this.listLength,noExpenseReport:!0};this.expenseService.onlyOffline().get(l).subscribe((function(e){n.loadingFirstTime=!1,n.expenses=e.data,console.log(e.data),n.loading=!1}))}},{key:"getExpensesLength",value:function(){var e=this;this.expenseService.onlyOffline().get().subscribe((function(n){e.expensesLength=n.data.length}))}},{key:"doRefresh",value:function(){this.refresh()}},{key:"toDefinition",value:function(){this.router.navigate(["definition"])}},{key:"toPrevalencia",value:function(){this.router.navigate(["prevalencia"])}},{key:"toInterventions",value:function(){this.router.navigate(["interventions"])}},{key:"refresh",value:function(e){var n=this;this.clearSelect(),window.navigator.onLine?this.cacheService.cacheOneServiceIncluded(this.expenseService,d.a,{},null).then((function(l){e&&e.target&&e.target.complete(),n.loading=!1,n.getExpensesLength(),n.getExpenses()})).catch((function(l){n.loading=!1,n.toasterService.error(n.translateService.instant("NOT_POSSIBLE_TO_UPDATE_THE_LIST")),n.getExpenses(),e&&e.target&&e.target.complete()})):(this.loading=!1,this.toasterService.error(this.translateService.instant("NOT_POSSIBLE_TO_UPDATE_THE_LIST")),this.getExpenses(),e&&e.target&&e.target.complete())}},{key:"checkBlur",value:function(){this.changeSearch()}},{key:"toExpenseEdit",value:function(e){this.router.navigate(["expense-edit/"+e])}},{key:"getIconUrl",value:function(e){return"".concat(g.a.api,"/attachments/").concat(e,"/preview")}},{key:"getRoleBadgeColor",value:function(e){switch(e){case"ADMIN":return"primary";case"FINANCIAL":return"warning";case"REFUNDER":return"secondary";case"APPROVING":return"success"}}},{key:"getCardColor",value:function(e){return e.selected?"medium":""}},{key:"changeSearch",value:function(){this.isSearchable=!this.isSearchable,this.isSearchable&&(this.search.setFocus(),this.clearSelect())}},{key:"clearSelect",value:function(){this.selecteds=[],this.expenses.map((function(e){return e.selected&&(e.selected=!1),e}))}},{key:"openMenu",value:function(){this.menuController.open("filters")}},{key:"searchTask",value:function(){this.infiniteScroll.el.disabled=!1,this.listLength=10,this.searchTerm.length>=3&&this.getExpenses(this.searchTerm),0===this.searchTerm.length&&this.getExpenses()}},{key:"toExpenseCreate",value:function(){this.router.navigate(["expense-create"])}},{key:"loadMoreData",value:function(e){var n=this;this.listLength=this.listLength+10,this.getExpenses(this.searchTerm),setTimeout((function(){n.expenses.length<n.listLength&&(e.target.disabled=!0),e.target.complete()}),500)}}]),e}(),v=l("iInd"),R=l("TSSN"),C=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function y(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,5,"ion-buttons",[["slot","end"]],null,null,null,i.bb,i.f)),t["\u0275did"](1,49152,null,0,r.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](2,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==e.component.changeSearch()&&t),t}),i.ab,i.e)),t["\u0275did"](3,49152,null,0,r.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["name","search-outline"]],null,null,null,i.ob,i.s)),t["\u0275did"](5,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(e,n){e(n,5,0,"search-outline")}),null)}function E(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,2,"ion-title",[],null,null,null,i.Qb,i.U)),t["\u0275did"](1,49152,null,0,r.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Op\xe7\xe3o"]))],null,null)}function k(e){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{search:0}),t["\u0275qud"](671088640,2,{infiniteScroll:0}),(e()(),t["\u0275eld"](2,0,null,null,12,"ion-header",[["class","ion-no-border"]],null,null,null,i.nb,i.r)),t["\u0275did"](3,49152,null,0,r.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](4,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,i.Rb,i.V)),t["\u0275did"](5,49152,null,0,r.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.bb,i.f)),t["\u0275did"](7,49152,null,0,r.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](8,0,null,0,2,"ion-back-button",[["defaultHref","/"],["text",""]],null,[[null,"click"]],(function(e,n,l){var o=!0;return"click"===n&&(o=!1!==t["\u0275nov"](e,10).onClick(l)&&o),o}),i.Y,i.c)),t["\u0275did"](9,49152,null,0,r.g,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),t["\u0275did"](10,16384,null,0,r.h,[[2,r.fb],r.Gb,r.d],{defaultHref:[0,"defaultHref"]},null),(e()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](12,16384,null,0,a.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](14,16384,null,0,a.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275eld"](15,0,null,null,46,"ion-content",[["color","light"],["id","main"]],null,null,null,i.ib,i.m)),t["\u0275did"](16,49152,null,0,r.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](17,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,i.fb,i.g)),t["\u0275did"](18,49152,null,0,r.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](19,0,null,0,12,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==e.component.toDefinition()&&t),t}),i.tb,i.x)),t["\u0275did"](20,49152,null,0,r.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](21,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,i.ob,i.s)),t["\u0275did"](22,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](23,0,null,0,2,"ion-label",[],null,null,null,i.ub,i.y)),t["\u0275did"](24,49152,null,0,r.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Defini\xe7\xe3o"])),(e()(),t["\u0275eld"](26,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.bb,i.f)),t["\u0275did"](27,49152,null,0,r.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](28,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,i.ab,i.e)),t["\u0275did"](29,49152,null,0,r.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](30,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,i.ob,i.s)),t["\u0275did"](31,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](32,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,i.fb,i.g)),t["\u0275did"](33,49152,null,0,r.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](34,0,null,0,12,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==e.component.toPrevalencia()&&t),t}),i.tb,i.x)),t["\u0275did"](35,49152,null,0,r.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](36,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,i.ob,i.s)),t["\u0275did"](37,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](38,0,null,0,2,"ion-label",[],null,null,null,i.ub,i.y)),t["\u0275did"](39,49152,null,0,r.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Preval\xeancia"])),(e()(),t["\u0275eld"](41,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.bb,i.f)),t["\u0275did"](42,49152,null,0,r.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](43,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,i.ab,i.e)),t["\u0275did"](44,49152,null,0,r.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](45,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,i.ob,i.s)),t["\u0275did"](46,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](47,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,i.fb,i.g)),t["\u0275did"](48,49152,null,0,r.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](49,0,null,0,12,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==e.component.toInterventions()&&t),t}),i.tb,i.x)),t["\u0275did"](50,49152,null,0,r.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](51,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,i.ob,i.s)),t["\u0275did"](52,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](53,0,null,0,2,"ion-label",[],null,null,null,i.ub,i.y)),t["\u0275did"](54,49152,null,0,r.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Interven\xe7\xf5es"])),(e()(),t["\u0275eld"](56,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.bb,i.f)),t["\u0275did"](57,49152,null,0,r.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](58,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,i.ab,i.e)),t["\u0275did"](59,49152,null,0,r.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](60,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,i.ob,i.s)),t["\u0275did"](61,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(e,n){var l=n.component;e(n,5,0,"primary"),e(n,9,0,"/",""),e(n,10,0,"/"),e(n,12,0,!l.isSearchable),e(n,14,0,!l.isSearchable),e(n,16,0,"light"),e(n,20,0,"none"),e(n,22,0,"primary","ellipse"),e(n,29,0,"primary"),e(n,31,0,"chevron-forward-outline"),e(n,35,0,"none"),e(n,37,0,"primary","ellipse"),e(n,44,0,"primary"),e(n,46,0,"chevron-forward-outline"),e(n,50,0,"none"),e(n,52,0,"primary","ellipse"),e(n,59,0,"primary"),e(n,61,0,"chevron-forward-outline")}),null)}var D=t["\u0275ccf"]("app-expense-list",b,(function(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-expense-list",[],null,null,null,k,C)),t["\u0275did"](1,114688,null,0,b,[t.LOCALE_ID,v.m,f.a,m.a,h.a,r.Eb,r.Jb,s.a,R.k],null,null)],(function(e,n){e(n,1,0)}),null)}),{},{},[]),N=l("IveJ"),S=l("34Ku"),x=l("mk1J"),Z=l("na1C"),w=l("JFOv"),I=l("xijX"),F=l("smCF"),T=l("wQjt"),O=l("yGWc"),L=l("+l5I"),_=l("ssC5"),P=l("3+nr"),A=l("7h0Y"),H=l("2OA5"),J=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function M(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,11,"ion-list",[["lines","none"]],null,null,null,i.wb,i.z)),t["\u0275did"](1,49152,null,0,r.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](2,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==e.component.edit()&&t),t}),i.tb,i.x)),t["\u0275did"](3,49152,null,0,r.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(e()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["color","primary"],["name","add-outline"],["slot","start"]],null,null,null,i.ob,i.s)),t["\u0275did"](5,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275ted"](-1,0,["Criar informe de despesa "])),(e()(),t["\u0275eld"](7,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==e.component.deleteReport()&&t),t}),i.tb,i.x)),t["\u0275did"](8,49152,null,0,r.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(e()(),t["\u0275eld"](9,0,null,0,1,"ion-icon",[["color","danger"],["name","trash"],["slot","start"]],null,null,null,i.ob,i.s)),t["\u0275did"](10,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275ted"](-1,0,["Excluir Despesas "]))],(function(e,n){e(n,1,0,"none"),e(n,3,0,""),e(n,5,0,"primary","add-outline"),e(n,8,0,""),e(n,10,0,"danger","trash")}),null)}var j=t["\u0275ccf"]("app-menu-popover",p.a,(function(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-menu-popover",[],null,null,null,M,J)),t["\u0275did"](1,114688,null,0,p.a,[v.m,r.Jb,f.a],null,null)],(function(e,n){e(n,1,0)}),null)}),{},{},[]),B=l("s7LF"),U=l("Zr1d"),V=l("Pn9U"),z=l("4zgz"),Y=l("qrQb"),q=l("Ioyb"),G=l("t8sF"),Q=l("ozRC"),K=l("pjjr"),W=function e(){_classCallCheck(this,e)},X=l("iTUp"),$=l("OPcz"),ee=l("Rwpb");l.d(n,"ExpenseListPageModuleNgFactory",(function(){return ne}));var ne=t["\u0275cmf"](o,[],(function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,D,N.a,S.a,x.a,Z.a,w.a,I.a,F.a,T.a,O.a,L.a,_.a,P.a,A.a,H.a,j]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.n,a.m,[t.LOCALE_ID,[2,a.v]]),t["\u0275mpd"](4608,B.m,B.m,[]),t["\u0275mpd"](4608,r.b,r.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.Fb,r.Fb,[r.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,r.Jb,r.Jb,[r.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,V.a,V.a,[]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](4608,Y.a,Y.a,[r.Fb]),t["\u0275mpd"](4608,q.a,q.a,[]),t["\u0275mpd"](4608,G.a,G.a,[]),t["\u0275mpd"](4608,Q.a,Q.a,[q.a,G.a,r.Ib]),t["\u0275mpd"](4608,K.a,K.a,[]),t["\u0275mpd"](1073742336,a.b,a.b,[]),t["\u0275mpd"](1073742336,B.l,B.l,[]),t["\u0275mpd"](1073742336,B.c,B.c,[]),t["\u0275mpd"](1073742336,r.Bb,r.Bb,[]),t["\u0275mpd"](1073742336,v.q,v.q,[[2,v.v],[2,v.m]]),t["\u0275mpd"](1073742336,W,W,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,$.SignaturePadModule,$.SignaturePadModule,[]),t["\u0275mpd"](1073742336,R.h,R.h,[]),t["\u0275mpd"](1073742336,ee.a,ee.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,v.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);
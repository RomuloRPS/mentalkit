(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{rrB0:function(e,l,n){"use strict";n.r(l);var t=n("8Y7J");class o{}var i=n("pMnS"),r=n("MKJQ"),u=n("sZkV"),a=n("SVse"),s=n("G/xI"),c=n("+Spe"),d=n("Vx7P"),h=n("aY4x"),m=n("a0SF"),g=n("AytR");class p{constructor(e,l,n,t,o,i,r,u,a){this.locale=e,this.router=l,this.expenseService=n,this.cacheService=t,this.toasterService=o,this.menuController=i,this.popoverController=r,this.categoryService=u,this.translateService=a,this.expenses=[{name:"Arrumar l\xe2mpada",who:"Solicitado por R\xf4mulo"}],this.selecteds=[],this.isSearchable=!1,this.listLength=10,this.loadingFirstTime=!0,this.loading=!0,this.date=(new Date).toISOString(),this.menuFilters={category:null}}setSelect(e){this.selectOn=e}getCurrency(e){if(e.getRelation("currency"))return e.getRelation("currency").getAttribute("code")}ngOnInit(){this.loading=!1}filter(e){e&&"categories"==e.jsonApiType.split("/")[2]&&(this.menuFilters.category=e),this.getExpenses(),this.menuController.close()}clearFilters(){this.menuFilters={category:null},this.getExpenses(),this.menuController.close()}getExpenses(e){const l={term:e,menuFilters:this.menuFilters,limit:this.listLength,noExpenseReport:!0};this.expenseService.onlyOffline().get(l).subscribe(e=>{this.loadingFirstTime=!1,this.expenses=e.data,console.log(e.data),this.loading=!1})}getExpensesLength(){this.expenseService.onlyOffline().get().subscribe(e=>{this.expensesLength=e.data.length})}doRefresh(){this.refresh()}toDefinition(){this.router.navigate(["definition-depression"])}toPrevalencia(){this.router.navigate(["prevalencia-depression"])}toInterventions(){this.router.navigate(["interventions-depression"])}refresh(e){this.clearSelect(),window.navigator.onLine?this.cacheService.cacheOneServiceIncluded(this.expenseService,c.a,{},null).then(l=>{e&&e.target&&e.target.complete(),this.loading=!1,this.getExpensesLength(),this.getExpenses()}).catch(l=>{this.loading=!1,this.toasterService.error(this.translateService.instant("NOT_POSSIBLE_TO_UPDATE_THE_LIST")),this.getExpenses(),e&&e.target&&e.target.complete()}):(this.loading=!1,this.toasterService.error(this.translateService.instant("NOT_POSSIBLE_TO_UPDATE_THE_LIST")),this.getExpenses(),e&&e.target&&e.target.complete())}checkBlur(){this.changeSearch()}toExpenseEdit(e){this.router.navigate(["expense-edit/"+e])}getIconUrl(e){return`${g.a.api}/attachments/${e}/preview`}getRoleBadgeColor(e){switch(e){case"ADMIN":return"primary";case"FINANCIAL":return"warning";case"REFUNDER":return"secondary";case"APPROVING":return"success"}}getCardColor(e){return e.selected?"medium":""}changeSearch(){this.isSearchable=!this.isSearchable,this.isSearchable&&(this.search.setFocus(),this.clearSelect())}clearSelect(){this.selecteds=[],this.expenses.map(e=>(e.selected&&(e.selected=!1),e))}openMenu(){this.menuController.open("filters")}searchTask(){this.infiniteScroll.el.disabled=!1,this.listLength=10,this.searchTerm.length>=3&&this.getExpenses(this.searchTerm),0===this.searchTerm.length&&this.getExpenses()}toExpenseCreate(){this.router.navigate(["expense-create"])}loadMoreData(e){this.listLength=this.listLength+10,this.getExpenses(this.searchTerm),setTimeout(()=>{this.expenses.length<this.listLength&&(e.target.disabled=!0),e.target.complete()},500)}}var f=n("iInd"),b=n("TSSN"),R=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,5,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](1,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](2,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.changeSearch()&&t),t}),r.ab,r.e)),t["\u0275did"](3,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["name","search-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](5,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(e,l){e(l,5,0,"search-outline")}),null)}function v(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,2,"ion-title",[],null,null,null,r.Qb,r.U)),t["\u0275did"](1,49152,null,0,u.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Op\xe7\xe3o"]))],null,null)}function E(e){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{search:0}),t["\u0275qud"](671088640,2,{infiniteScroll:0}),(e()(),t["\u0275eld"](2,0,null,null,12,"ion-header",[["class","ion-no-border"]],null,null,null,r.nb,r.r)),t["\u0275did"](3,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](4,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,r.Rb,r.V)),t["\u0275did"](5,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.bb,r.f)),t["\u0275did"](7,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](8,0,null,0,2,"ion-back-button",[["defaultHref","/"],["text",""]],null,[[null,"click"]],(function(e,l,n){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](e,10).onClick(n)&&o),o}),r.Y,r.c)),t["\u0275did"](9,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),t["\u0275did"](10,16384,null,0,u.h,[[2,u.fb],u.Gb,u.d],{defaultHref:[0,"defaultHref"]},null),(e()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](12,16384,null,0,a.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](14,16384,null,0,a.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275eld"](15,0,null,null,46,"ion-content",[["color","light"],["id","main"]],null,null,null,r.ib,r.m)),t["\u0275did"](16,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](17,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,r.fb,r.g)),t["\u0275did"](18,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](19,0,null,0,12,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.toDefinition()&&t),t}),r.tb,r.x)),t["\u0275did"](20,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](21,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](22,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](23,0,null,0,2,"ion-label",[],null,null,null,r.ub,r.y)),t["\u0275did"](24,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Defini\xe7\xe3o"])),(e()(),t["\u0275eld"](26,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](27,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](28,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,r.ab,r.e)),t["\u0275did"](29,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](30,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](31,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](32,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,r.fb,r.g)),t["\u0275did"](33,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](34,0,null,0,12,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.toPrevalencia()&&t),t}),r.tb,r.x)),t["\u0275did"](35,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](36,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](37,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](38,0,null,0,2,"ion-label",[],null,null,null,r.ub,r.y)),t["\u0275did"](39,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Preval\xeancia"])),(e()(),t["\u0275eld"](41,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](42,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](43,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,r.ab,r.e)),t["\u0275did"](44,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](45,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](46,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](47,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,r.fb,r.g)),t["\u0275did"](48,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](49,0,null,0,12,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.toInterventions()&&t),t}),r.tb,r.x)),t["\u0275did"](50,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](51,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](52,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](53,0,null,0,2,"ion-label",[],null,null,null,r.ub,r.y)),t["\u0275did"](54,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Interven\xe7\xf5es"])),(e()(),t["\u0275eld"](56,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](57,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](58,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,r.ab,r.e)),t["\u0275did"](59,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](60,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](61,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(e,l){var n=l.component;e(l,5,0,"primary"),e(l,9,0,"/",""),e(l,10,0,"/"),e(l,12,0,!n.isSearchable),e(l,14,0,!n.isSearchable),e(l,16,0,"light"),e(l,20,0,"none"),e(l,22,0,"primary","ellipse"),e(l,29,0,"primary"),e(l,31,0,"chevron-forward-outline"),e(l,35,0,"none"),e(l,37,0,"primary","ellipse"),e(l,44,0,"primary"),e(l,46,0,"chevron-forward-outline"),e(l,50,0,"none"),e(l,52,0,"primary","ellipse"),e(l,59,0,"primary"),e(l,61,0,"chevron-forward-outline")}),null)}function S(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-expense-listdepression",[],null,null,null,E,R)),t["\u0275did"](1,114688,null,0,p,[t.LOCALE_ID,f.m,d.a,h.a,m.a,u.Eb,u.Jb,s.a,b.k],null,null)],(function(e,l){e(l,1,0)}),null)}var N=t["\u0275ccf"]("app-expense-listdepression",p,S,{},{},[]),D=n("IveJ"),x=n("34Ku"),y=n("mk1J"),Z=n("na1C"),I=n("JFOv"),F=n("xijX"),k=n("smCF"),w=n("wQjt"),T=n("yGWc"),L=n("+l5I"),O=n("ssC5"),P=n("3+nr"),A=n("7h0Y"),_=n("2OA5"),H=n("s7LF"),J=n("Zr1d"),M=n("Pn9U"),B=n("4zgz"),j=n("qrQb"),U=n("Ioyb"),V=n("t8sF"),q=n("ozRC"),z=n("pjjr");class G{}var Q=n("iTUp"),Y=n("OPcz"),K=n("Rwpb");n.d(l,"ExpenseListDepressionPageModuleNgFactory",(function(){return $}));var $=t["\u0275cmf"](o,[],(function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,N,D.a,x.a,y.a,Z.a,I.a,F.a,k.a,w.a,T.a,L.a,O.a,P.a,A.a,_.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.n,a.m,[t.LOCALE_ID,[2,a.v]]),t["\u0275mpd"](4608,H.m,H.m,[]),t["\u0275mpd"](4608,u.b,u.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Fb,u.Fb,[u.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Jb,u.Jb,[u.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,J.a,J.a,[]),t["\u0275mpd"](4608,M.a,M.a,[]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,j.a,j.a,[u.Fb]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,V.a,V.a,[]),t["\u0275mpd"](4608,q.a,q.a,[U.a,V.a,u.Ib]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](1073742336,a.b,a.b,[]),t["\u0275mpd"](1073742336,H.l,H.l,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,u.Bb,u.Bb,[]),t["\u0275mpd"](1073742336,f.q,f.q,[[2,f.v],[2,f.m]]),t["\u0275mpd"](1073742336,G,G,[]),t["\u0275mpd"](1073742336,Q.a,Q.a,[]),t["\u0275mpd"](1073742336,Y.SignaturePadModule,Y.SignaturePadModule,[]),t["\u0275mpd"](1073742336,b.h,b.h,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,f.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);
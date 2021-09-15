function _defineProperties(e,n){for(var l=0;l<n.length;l++){var t=n[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,l){return n&&_defineProperties(e.prototype,n),l&&_defineProperties(e,l),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7E2+":function(e,n,l){"use strict";l.r(n);var t=l("8Y7J"),o=function e(){_classCallCheck(this,e)},i=l("pMnS"),r=l("MKJQ"),a=l("sZkV"),u=l("mrSG"),s=l("cp0P"),c=l("VC9m"),d=l("/VG/"),p=l("3dKc"),m=l("Tj/N"),g=l("A1DM"),h=l("G/xI"),f=l("5FLp"),R=l("rlVk"),b=l("+Spe"),v=l("Vx7P"),x=l("fSVk"),y=l("a0SF"),C=function(){function e(n,l,t,o,i,r,a,u,s,d,p,m,g){_classCallCheck(this,e),this.locale=n,this.router=l,this.route=t,this.expenseService=o,this.categoryService=i,this.expenseReportService=r,this.modalController=a,this.popoverController=u,this.loadingService=s,this.toasterService=d,this.userModel=p,this.translateService=m,this._location=g,this.attachments=[],this.filterCategory={categoryFilterIds:null},this.expenseReportFilter={status:c.b.OPEN},this.submitted=!1,this.date=(new Date).toISOString(),this.slideOpts={initialSlide:0,speed:400}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.subscribe((function(n){return u.a(e,void 0,void 0,regeneratorRuntime.mark((function e(){var l,t,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.submitted=!1,this.userModel.load(),n.get("id")?(l={id:n.get("id")},this.expenseService.onlyOffline().get(l).subscribe((function(e){o.expense=e.data[0],o.editing=!0,e.data[0]&&(o.date=o.expense.getAttribute("issue_date"),o.expense.getRelation("category")&&(o.category=o.expense.getRelation("category"),o.selectedCategoryId=o.expense.getRelation("category").getApiId()),o.expense.getRelation("expenseReport")&&(o.expenseReport=o.expense.getRelation("expenseReport"),o.selectedExpenseReportId=o.expense.getRelation("expenseReport").getApiId()))}))):n.get("expense-report-id")?(t={id:n.get("expense-report-id")},this.expenseReportService.onlyOffline().get(t).subscribe((function(e){o.expenseReport=e.data[0],o.selectedExpenseReportId=e.data[0].getApiId(),o.expense=new d.a,o.expense.setRelation("expenseReport",e.data[0]),o.editing=!1}))):(this.expense=new d.a,this.editing=!1),e.next=3,this.cacheServices();case 3:case"end":return e.stop()}}),e,this)})))}))}},{key:"getCurrency",value:function(e){return e.getRelation("currency").getAttribute("code")}},{key:"cacheServices",value:function(){return u.a(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[this.categoryService.cache({page:{limit:99999}}),this.expenseReportService.cache({include:f.a,page:{limit:99999}})],Object(s.a)(n).toPromise().then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})))}},{key:"openOptions",value:function(e,n){return u.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var t,o;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t={component:p.a,translucent:!0,event:e,componentProps:{image:n,viewOnly:!0}},l.next=3,this.popoverController.create(t);case 3:return(o=l.sent).onDidDismiss().then((function(e){})),l.next=7,o.present();case 7:return l.abrupt("return",l.sent);case 8:case"end":return l.stop()}}),l,this)})))}},{key:"backToList",value:function(){this._location.back()}},{key:"categoryChange",value:function(e){this.expense.elementRelations.category=e}},{key:"expenseReportChange",value:function(e){if(this.expense.elementRelations.expenseReport=e,e&&e.getRelation("policy")&&e.getRelation("policy").getRelation("categories")){var n=[];e.getRelation("policy").getRelation("categories").forEach((function(e){n.push(e.getApiId())})),this.filterCategory.categoryFilterIds=n}}},{key:"isRequired",value:function(e){if(this.expense.getRelation("expenseReport")&&this.expense.getRelation("expenseReport").getRelation("policy")&&this.expense.getRelation("expenseReport").getRelation("policy").getRelation("requiredFields"))return this.expense.getRelation("expenseReport").getRelation("policy").getRelation("requiredFields").getAttribute(e)}},{key:"save",value:function(e){var n=this;this.submitted=!0,e.valid&&(this.loadingService.show(this.translateService.instant("SAVING")),this.expense.elements.issue_date=(new g.a).transform(this.date,"yyyy-MM-dd HH:mm:ss"),this.expense.save().then((function(){n.category=null,n.date=(new Date).toISOString(),n.updateInfos().then((function(){n.submitted=!1,n.loadingService.dismiss(),n.next()})).catch((function(e){n.submitted=!1,n.loadingService.dismiss(),n.next()}))})).catch((function(e){n.loadingService.dismiss(),n.toasterService.error(n.translateService.instant("NOT_POSSIBLE_TO_SAVE"))})))}},{key:"create",value:function(e){var n=this;this.submitted=!0,e.valid&&(this.loadingService.show(this.translateService.instant("CREATING")),this.expense.elements.attachments=this.attachments,this.expense.elements.avatar=this.attachments[0],this.expense.elements.from_app=this.expense.elements.issue_date=(new g.a).transform(this.date,"yyyy-MM-dd HH:mm:ss"),this.expense.create().then((function(){n.submitted=!1,n.category=null,n.date=(new Date).toISOString(),n.updateInfos().then((function(){n.loadingService.dismiss(),n.next()})).catch((function(e){n.loadingService.dismiss(),n.next()}))})).catch((function(e){n.loadingService.dismiss(),n.toasterService.error(n.translateService.instant("CREATE_ERROR"))})))}},{key:"updateInfos",value:function(){var e=[this.expenseService.cache({include:b.a,page:{limit:99999}}),this.expenseReportService.cache({include:f.a,page:{limit:99999}})];return Object(s.a)(e).toPromise()}},{key:"next",value:function(){this.expense.getRelation("expenseReport")?this.router.navigate(["expense-report-view/"+this.expense.getRelation("expenseReport").getApiId()+"/update"+(new Date).toISOString()]):this.router.navigate(["expenses/update"+(new Date).toISOString()])}}]),e}(),S=l("iInd"),E=l("TSSN"),w=l("SVse"),N=t["\u0275crt"]({encapsulation:0,styles:[[".circular[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;position:relative;overflow:hidden}.circular[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]],data:{}});function D(e){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{expenseForm:0}),(e()(),t["\u0275eld"](1,0,null,null,16,"ion-header",[["class","ion-no-border"]],null,null,null,r.nb,r.r)),t["\u0275did"](2,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](3,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,r.Rb,r.V)),t["\u0275did"](4,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.bb,r.f)),t["\u0275did"](6,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,r.xb,r.C)),t["\u0275did"](8,49152,null,0,a.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](10,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](11,0,null,0,3,"ion-button",[],null,null,null,r.ab,r.e)),t["\u0275did"](12,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](13,0,null,0,1,"ion-icon",[["name","search-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](14,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](15,0,null,0,2,"ion-title",[],null,null,null,r.Qb,r.U)),t["\u0275did"](16,49152,null,0,a.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Op\xe7\xe3o"])),(e()(),t["\u0275eld"](18,0,null,null,46,"ion-content",[["color","light"],["id","main"]],null,null,null,r.ib,r.m)),t["\u0275did"](19,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](20,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,r.fb,r.g)),t["\u0275did"](21,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](22,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,r.tb,r.x)),t["\u0275did"](23,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](24,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](25,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](26,0,null,0,2,"ion-label",[],null,null,null,r.ub,r.y)),t["\u0275did"](27,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Defini\xe7\xe3o"])),(e()(),t["\u0275eld"](29,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](30,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](31,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,r.ab,r.e)),t["\u0275did"](32,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](33,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](34,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](35,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,r.fb,r.g)),t["\u0275did"](36,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](37,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,r.tb,r.x)),t["\u0275did"](38,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](39,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](40,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](41,0,null,0,2,"ion-label",[],null,null,null,r.ub,r.y)),t["\u0275did"](42,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Preval\xeancia"])),(e()(),t["\u0275eld"](44,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](45,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](46,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,r.ab,r.e)),t["\u0275did"](47,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](48,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](49,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](50,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,r.fb,r.g)),t["\u0275did"](51,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](52,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,r.tb,r.x)),t["\u0275did"](53,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](54,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](55,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](56,0,null,0,2,"ion-label",[],null,null,null,r.ub,r.y)),t["\u0275did"](57,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Interven\xe7\xf5es"])),(e()(),t["\u0275eld"](59,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](60,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](61,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,r.ab,r.e)),t["\u0275did"](62,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](63,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](64,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(e,n){e(n,4,0,"primary"),e(n,14,0,"search-outline"),e(n,19,0,"light"),e(n,23,0,"none"),e(n,25,0,"primary","ellipse"),e(n,32,0,"primary"),e(n,34,0,"chevron-forward-outline"),e(n,38,0,"none"),e(n,40,0,"primary","ellipse"),e(n,47,0,"primary"),e(n,49,0,"chevron-forward-outline"),e(n,53,0,"none"),e(n,55,0,"primary","ellipse"),e(n,62,0,"primary"),e(n,64,0,"chevron-forward-outline")}),null)}var k=t["\u0275ccf"]("app-expense-view",C,(function(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-expense-view",[],null,null,null,D,N)),t["\u0275did"](1,114688,null,0,C,[t.LOCALE_ID,S.m,S.a,v.a,h.a,R.a,a.Fb,a.Jb,x.a,y.a,m.a,E.k,w.h],null,null)],(function(e,n){e(n,1,0)}),null)}),{},{},[]),I=l("IveJ"),Z=l("34Ku"),O=l("mk1J"),_=l("na1C"),F=l("JFOv"),P=l("xijX"),A=l("smCF"),M=l("wQjt"),V=l("yGWc"),j=l("+l5I"),J=l("ssC5"),T=l("3+nr"),L=l("7h0Y"),q=l("2OA5"),H=l("s7LF"),G=l("Zr1d"),z=l("Pn9U"),B=l("4zgz"),Q=l("qrQb"),K=l("Ioyb"),U=l("t8sF"),Y=l("ozRC"),W=l("pjjr"),X=function e(){_classCallCheck(this,e)},$=l("iTUp"),ee=l("OPcz"),ne=l("Rwpb");l.d(n,"ExpenseViewPageModuleNgFactory",(function(){return le}));var le=t["\u0275cmf"](o,[],(function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,k,I.a,Z.a,O.a,_.a,F.a,P.a,A.a,M.a,V.a,j.a,J.a,T.a,L.a,q.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,w.n,w.m,[t.LOCALE_ID,[2,w.v]]),t["\u0275mpd"](4608,H.m,H.m,[]),t["\u0275mpd"](4608,a.b,a.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,G.a,G.a,[]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,Q.a,Q.a,[a.Fb]),t["\u0275mpd"](4608,K.a,K.a,[]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,Y.a,Y.a,[K.a,U.a,a.Ib]),t["\u0275mpd"](4608,W.a,W.a,[]),t["\u0275mpd"](1073742336,w.b,w.b,[]),t["\u0275mpd"](1073742336,H.l,H.l,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,S.q,S.q,[[2,S.v],[2,S.m]]),t["\u0275mpd"](1073742336,X,X,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,ee.SignaturePadModule,ee.SignaturePadModule,[]),t["\u0275mpd"](1073742336,E.h,E.h,[]),t["\u0275mpd"](1073742336,ne.a,ne.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,S.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);
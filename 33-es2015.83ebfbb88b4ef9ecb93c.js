(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"7E2+":function(e,n,l){"use strict";l.r(n);var t=l("8Y7J");class i{}var o=l("pMnS"),s=l("MKJQ"),a=l("sZkV"),r=l("mrSG"),u=l("cp0P"),d=l("VC9m"),c=l("/VG/"),p=l("3dKc"),h=l("Tj/N"),m=l("A1DM"),g=l("G/xI"),R=l("5FLp"),f=l("rlVk"),b=l("+Spe"),v=l("Vx7P"),x=l("fSVk"),C=l("a0SF");class y{constructor(e,n,l,t,i,o,s,a,r,u,c,p,h){this.locale=e,this.router=n,this.route=l,this.expenseService=t,this.categoryService=i,this.expenseReportService=o,this.modalController=s,this.popoverController=a,this.loadingService=r,this.toasterService=u,this.userModel=c,this.translateService=p,this._location=h,this.attachments=[],this.filterCategory={categoryFilterIds:null},this.expenseReportFilter={status:d.b.OPEN},this.submitted=!1,this.date=(new Date).toISOString(),this.slideOpts={initialSlide:0,speed:400}}ngOnInit(){this.route.paramMap.subscribe(e=>r.a(this,void 0,void 0,(function*(){if(this.submitted=!1,this.userModel.load(),e.get("id")){let n={id:e.get("id")};this.expenseService.onlyOffline().get(n).subscribe(e=>{this.expense=e.data[0],this.editing=!0,e.data[0]&&(this.date=this.expense.getAttribute("issue_date"),this.expense.getRelation("category")&&(this.category=this.expense.getRelation("category"),this.selectedCategoryId=this.expense.getRelation("category").getApiId()),this.expense.getRelation("expenseReport")&&(this.expenseReport=this.expense.getRelation("expenseReport"),this.selectedExpenseReportId=this.expense.getRelation("expenseReport").getApiId()))})}else if(e.get("expense-report-id")){let n={id:e.get("expense-report-id")};this.expenseReportService.onlyOffline().get(n).subscribe(e=>{this.expenseReport=e.data[0],this.selectedExpenseReportId=e.data[0].getApiId(),this.expense=new c.a,this.expense.setRelation("expenseReport",e.data[0]),this.editing=!1})}else this.expense=new c.a,this.editing=!1;yield this.cacheServices()})))}getCurrency(e){return e.getRelation("currency").getAttribute("code")}cacheServices(){return r.a(this,void 0,void 0,(function*(){const e=[this.categoryService.cache({page:{limit:99999}}),this.expenseReportService.cache({include:R.a,page:{limit:99999}})];Object(u.a)(e).toPromise().then(e=>{console.log(e)}).catch(e=>{console.log(e)})}))}openOptions(e,n){return r.a(this,void 0,void 0,(function*(){const l={component:p.a,translucent:!0,event:e,componentProps:{image:n,viewOnly:!0}},t=yield this.popoverController.create(l);return t.onDidDismiss().then(e=>{}),yield t.present()}))}backToList(){this._location.back()}categoryChange(e){this.expense.elementRelations.category=e}expenseReportChange(e){if(this.expense.elementRelations.expenseReport=e,e&&e.getRelation("policy")&&e.getRelation("policy").getRelation("categories")){const n=[];e.getRelation("policy").getRelation("categories").forEach(e=>{n.push(e.getApiId())}),this.filterCategory.categoryFilterIds=n}}isRequired(e){if(this.expense.getRelation("expenseReport")&&this.expense.getRelation("expenseReport").getRelation("policy")&&this.expense.getRelation("expenseReport").getRelation("policy").getRelation("requiredFields"))return this.expense.getRelation("expenseReport").getRelation("policy").getRelation("requiredFields").getAttribute(e)}save(e){this.submitted=!0,e.valid&&(this.loadingService.show(this.translateService.instant("SAVING")),this.expense.elements.issue_date=(new m.a).transform(this.date,"yyyy-MM-dd HH:mm:ss"),this.expense.save().then(()=>{this.category=null,this.date=(new Date).toISOString(),this.updateInfos().then(()=>{this.submitted=!1,this.loadingService.dismiss(),this.next()}).catch(e=>{this.submitted=!1,this.loadingService.dismiss(),this.next()})}).catch(e=>{this.loadingService.dismiss(),this.toasterService.error(this.translateService.instant("NOT_POSSIBLE_TO_SAVE"))}))}create(e){this.submitted=!0,e.valid&&(this.loadingService.show(this.translateService.instant("CREATING")),this.expense.elements.attachments=this.attachments,this.expense.elements.avatar=this.attachments[0],this.expense.elements.from_app=this.expense.elements.issue_date=(new m.a).transform(this.date,"yyyy-MM-dd HH:mm:ss"),this.expense.create().then(()=>{this.submitted=!1,this.category=null,this.date=(new Date).toISOString(),this.updateInfos().then(()=>{this.loadingService.dismiss(),this.next()}).catch(e=>{this.loadingService.dismiss(),this.next()})}).catch(e=>{this.loadingService.dismiss(),this.toasterService.error(this.translateService.instant("CREATE_ERROR"))}))}updateInfos(){const e=[this.expenseService.cache({include:b.a,page:{limit:99999}}),this.expenseReportService.cache({include:R.a,page:{limit:99999}})];return Object(u.a)(e).toPromise()}next(){this.expense.getRelation("expenseReport")?this.router.navigate(["expense-report-view/"+this.expense.getRelation("expenseReport").getApiId()+"/update"+(new Date).toISOString()]):this.router.navigate(["expenses/update"+(new Date).toISOString()])}}var S=l("iInd"),E=l("TSSN"),N=l("SVse"),D=t["\u0275crt"]({encapsulation:0,styles:[[".circular[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;position:relative;overflow:hidden}.circular[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]],data:{}});function w(e){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{expenseForm:0}),(e()(),t["\u0275eld"](1,0,null,null,16,"ion-header",[["class","ion-no-border"]],null,null,null,s.nb,s.r)),t["\u0275did"](2,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](3,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,s.Rb,s.V)),t["\u0275did"](4,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.bb,s.f)),t["\u0275did"](6,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,s.xb,s.C)),t["\u0275did"](8,49152,null,0,a.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,s.bb,s.f)),t["\u0275did"](10,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](11,0,null,0,3,"ion-button",[],null,null,null,s.ab,s.e)),t["\u0275did"](12,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](13,0,null,0,1,"ion-icon",[["name","search-outline"]],null,null,null,s.ob,s.s)),t["\u0275did"](14,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](15,0,null,0,2,"ion-title",[],null,null,null,s.Qb,s.U)),t["\u0275did"](16,49152,null,0,a.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Op\xe7\xe3o"])),(e()(),t["\u0275eld"](18,0,null,null,46,"ion-content",[["color","light"],["id","main"]],null,null,null,s.ib,s.m)),t["\u0275did"](19,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](20,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,s.fb,s.g)),t["\u0275did"](21,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](22,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,s.tb,s.x)),t["\u0275did"](23,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](24,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,s.ob,s.s)),t["\u0275did"](25,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](26,0,null,0,2,"ion-label",[],null,null,null,s.ub,s.y)),t["\u0275did"](27,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Defini\xe7\xe3o"])),(e()(),t["\u0275eld"](29,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,s.bb,s.f)),t["\u0275did"](30,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](31,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,s.ab,s.e)),t["\u0275did"](32,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](33,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,s.ob,s.s)),t["\u0275did"](34,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](35,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,s.fb,s.g)),t["\u0275did"](36,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](37,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,s.tb,s.x)),t["\u0275did"](38,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](39,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,s.ob,s.s)),t["\u0275did"](40,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](41,0,null,0,2,"ion-label",[],null,null,null,s.ub,s.y)),t["\u0275did"](42,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Preval\xeancia"])),(e()(),t["\u0275eld"](44,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,s.bb,s.f)),t["\u0275did"](45,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](46,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,s.ab,s.e)),t["\u0275did"](47,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](48,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,s.ob,s.s)),t["\u0275did"](49,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](50,0,null,0,14,"ion-card",[["class","card-no-border card-no-margin"]],null,null,null,s.fb,s.g)),t["\u0275did"](51,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](52,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,s.tb,s.x)),t["\u0275did"](53,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](54,0,null,0,1,"ion-icon",[["color","primary"],["name","ellipse"],["slot","start"]],null,null,null,s.ob,s.s)),t["\u0275did"](55,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(e()(),t["\u0275eld"](56,0,null,0,2,"ion-label",[],null,null,null,s.ub,s.y)),t["\u0275did"](57,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Interven\xe7\xf5es"])),(e()(),t["\u0275eld"](59,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,s.bb,s.f)),t["\u0275did"](60,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](61,0,null,0,3,"ion-button",[["color","primary"]],null,null,null,s.ab,s.e)),t["\u0275did"](62,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](63,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,s.ob,s.s)),t["\u0275did"](64,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(e,n){e(n,4,0,"primary"),e(n,14,0,"search-outline"),e(n,19,0,"light"),e(n,23,0,"none"),e(n,25,0,"primary","ellipse"),e(n,32,0,"primary"),e(n,34,0,"chevron-forward-outline"),e(n,38,0,"none"),e(n,40,0,"primary","ellipse"),e(n,47,0,"primary"),e(n,49,0,"chevron-forward-outline"),e(n,53,0,"none"),e(n,55,0,"primary","ellipse"),e(n,62,0,"primary"),e(n,64,0,"chevron-forward-outline")}),null)}function I(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-expense-view",[],null,null,null,w,D)),t["\u0275did"](1,114688,null,0,y,[t.LOCALE_ID,S.m,S.a,v.a,g.a,f.a,a.Fb,a.Jb,x.a,C.a,h.a,E.k,N.h],null,null)],(function(e,n){e(n,1,0)}),null)}var Z=t["\u0275ccf"]("app-expense-view",y,I,{},{},[]),O=l("IveJ"),F=l("34Ku"),A=l("mk1J"),M=l("na1C"),P=l("JFOv"),_=l("xijX"),k=l("smCF"),V=l("wQjt"),J=l("yGWc"),j=l("+l5I"),L=l("ssC5"),T=l("3+nr"),q=l("7h0Y"),H=l("2OA5"),G=l("s7LF"),z=l("Zr1d"),B=l("Pn9U"),Q=l("4zgz"),K=l("qrQb"),U=l("Ioyb"),Y=l("t8sF"),W=l("ozRC"),X=l("pjjr");class ${}var ee=l("iTUp"),ne=l("OPcz"),le=l("Rwpb");l.d(n,"ExpenseViewPageModuleNgFactory",(function(){return te}));var te=t["\u0275cmf"](i,[],(function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,Z,O.a,F.a,A.a,M.a,P.a,_.a,k.a,V.a,J.a,j.a,L.a,T.a,q.a,H.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,N.n,N.m,[t.LOCALE_ID,[2,N.v]]),t["\u0275mpd"](4608,G.m,G.m,[]),t["\u0275mpd"](4608,a.b,a.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,Q.a,Q.a,[]),t["\u0275mpd"](4608,K.a,K.a,[a.Fb]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,Y.a,Y.a,[]),t["\u0275mpd"](4608,W.a,W.a,[U.a,Y.a,a.Ib]),t["\u0275mpd"](4608,X.a,X.a,[]),t["\u0275mpd"](1073742336,N.b,N.b,[]),t["\u0275mpd"](1073742336,G.l,G.l,[]),t["\u0275mpd"](1073742336,G.c,G.c,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,S.q,S.q,[[2,S.v],[2,S.m]]),t["\u0275mpd"](1073742336,$,$,[]),t["\u0275mpd"](1073742336,ee.a,ee.a,[]),t["\u0275mpd"](1073742336,ne.SignaturePadModule,ne.SignaturePadModule,[]),t["\u0275mpd"](1073742336,E.h,E.h,[]),t["\u0275mpd"](1073742336,le.a,le.a,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](1024,S.k,(function(){return[[{path:"",component:y}]]}),[])])}))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{nNvs:function(e,n,l){"use strict";l.r(n);var t=l("8Y7J");class i{}var o=l("pMnS"),a=l("MKJQ"),u=l("sZkV"),s=l("TSSN"),r=l("s7LF"),d=l("SVse"),c=l("mrSG"),p=l("cp0P"),g=l("VE0b"),h=l("VC9m"),m=l("/VG/"),f=l("3dKc"),R=l("Tj/N"),v=l("G/xI"),b=l("v8+R"),x=l("5FLp"),C=l("rlVk"),y=l("+Spe"),I=l("Vx7P"),k=l("fSVk"),E=l("a0SF");class S{constructor(e,n,l,t,i,o,a,u,s,r,d,c){this.router=e,this.route=n,this.expenseService=l,this.categoryService=t,this.expenseReportService=i,this.modalController=o,this.popoverController=a,this.loadingService=u,this.toasterService=s,this.userModel=r,this.translateService=d,this.currencyService=c,this.attachments=[],this.filterCategory={categoryFilterIds:null},this.expenseReportFilter={status:h.b.OPEN},this.submitted=!1,this.date=(new Date).toISOString(),this.slideOpts={initialSlide:0,speed:400},this.questions=[]}ngOnInit(){this.route.paramMap.subscribe(e=>c.a(this,void 0,void 0,(function*(){if(this.submitted=!1,this.userModel.load(),"custos-do-programa"==e.get("param")&&(this.questions=[{question:"Custos iniciais do programa de preven\xe7\xe3o do bullying por aluno",value:519},{question:"Custos anuais de manuten\xe7\xe3o do programa de preven\xe7\xe3o do bullying por aluno",value:122.97}]),"outros-custos"==e.get("param")&&(this.questions=[{question:"Custo da equipe de sa\xfade mental de crian\xe7as e adolescentes por caso",value:3.06},{question:"Custo por avalia\xe7\xe3o psicossocial ap\xf3s auto-mutila\xe7\xe3o",value:.79}]),"outros-parametros"==e.get("param")&&(this.questions=[{question:"Vitimiza\xe7\xe3o inicial por bullying sem interven\xe7\xe3o",value:.06},{question:'Odds ratio" para vitimiza\xe7\xe3o com cuidados usuais versus programa KIVA',value:15},{question:"Probabilidade de auto-mutila\xe7\xe3o para crian\xe7as que sofrem bullying intensamente",value:.6},{question:"Probabilidade de aus\xeancia escolar de mais de 28 dias se intimidada",value:.035},{question:"Taxa de desconto (custos)",value:.015},{question:"Taxa de desconto (resultados)",value:62.544},{question:"N\xfamero de crian\xe7as em um ano escolar (7 a 8 anos)",value:62.544}]),e.get("id")){let n={id:e.get("id")};this.expenseService.onlyOffline().get(n).subscribe(e=>{this.expense=e.data[0],this.editing=!0,e.data[0]&&(this.date=this.expense.getAttribute("issue_date"),this.expense.getRelation("category")&&(this.category=this.expense.getRelation("category"),this.selectedCategoryId=this.expense.getRelation("category").getApiId(),"KILOMETERS"==this.expense.getRelation("category").getAttribute("name")&&(this.expense.elementRelations.has_kilometer_count=!0)),this.expense.getRelation("currency")&&(this.currency=this.expense.getRelation("currency"),this.selectedCurrencyId=this.expense.getRelation("currency").getApiId()),this.expense.getRelation("expenseReport")&&(this.expenseReport=this.expense.getRelation("expenseReport"),this.selectedExpenseReportId=this.expense.getRelation("expenseReport").getApiId()))})}else if(e.get("expense-report-id")){let n={id:e.get("expense-report-id")};this.expenseReportService.onlyOffline().get(n).subscribe(e=>{this.expenseReport=e.data[0],this.selectedExpenseReportId=e.data[0].getApiId(),this.expense=new m.a,this.currency=new g.a,this.expense.setRelation("expenseReport",e.data[0]),this.editing=!1})}else this.expense=new m.a,this.editing=!1;yield this.cacheServices()})))}cacheServices(){return c.a(this,void 0,void 0,(function*(){const e=[this.categoryService.cache({page:{limit:99999}}),this.currencyService.cache({page:{limit:99999}}),this.expenseReportService.cache({include:x.a,page:{limit:99999}})];Object(p.a)(e).toPromise().then(e=>{console.log(e)}).catch(e=>{console.log(e)})}))}openOptionsAvatar(e){return c.a(this,void 0,void 0,(function*(){let n;n=this.avatar,this.expense.getRelation("avatar")&&(n=this.expense.getRelation("avatar"));const l={component:f.a,translucent:!0,event:e,componentProps:{image:n}},t=yield this.popoverController.create(l);return t.onDidDismiss().then(e=>{e.data&&("delete"==e.data?(this.avatar=null,this.expense.setRelation("avatar",null)):this.avatar=e.data)}),yield t.present()}))}openOptions(e,n){return c.a(this,void 0,void 0,(function*(){let l;(n||0==n)&&(l=this.attachments[n]);const t={component:f.a,translucent:!0,event:e,componentProps:{image:l}},i=yield this.popoverController.create(t);return i.onDidDismiss().then(e=>{e.data&&("delete"==e.data?this.attachments.splice(n,1):this.attachments.push(e.data))}),yield i.present()}))}backToList(){this.expense.getRelation("expenseReport"),this.router.navigate(["farmacologia-agrupado"])}isKilometer(){return this.expense.elementRelations.has_kilometer_count}categoryChange(e){this.expense.elementRelations.has_kilometer_count=!(!e||"KILOMETERS"!=e.getAttribute("name")),this.expense.elementRelations.category=e}currencyChange(e){this.expense.elementRelations.currency=e}expenseReportChange(e){if(this.expense.elementRelations.expenseReport=e,e&&e.getRelation("policy")&&e.getRelation("policy").getRelation("categories")){const n=[];e.getRelation("policy").getRelation("categories").forEach(e=>{n.push(e.getApiId())}),this.filterCategory.categoryFilterIds=n}}isRequired(e){if(this.expense.getRelation("expenseReport")&&this.expense.getRelation("expenseReport").getRelation("policy")&&this.expense.getRelation("expenseReport").getRelation("policy").getRelation("requiredFields"))return this.expense.getRelation("expenseReport").getRelation("policy").getRelation("requiredFields").getAttribute(e)}save(e){this.router.navigate(["farmacologia-agrupado"])}create(e){this.submitted=!0,this.router.navigate(["farmacologia-agrupado"])}updateInfos(){const e=[this.expenseService.cache({include:y.a,page:{limit:99999}}),this.expenseReportService.cache({include:x.a,page:{limit:99999}})];return Object(p.a)(e).toPromise()}next(){this.expense.getRelation("expenseReport")?this.router.navigate(["expense-report-view/"+this.expense.getRelation("expenseReport").getApiId()+"/update"+(new Date).toISOString()]):this.router.navigate(["expenses/update"+(new Date).toISOString()])}}var D=l("iInd"),q=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function N(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,5,"ion-toolbar",[["color","warning"]],null,null,null,a.Rb,a.V)),t["\u0275did"](1,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](2,0,null,0,3,"ion-text",[],null,null,null,a.Ob,a.S)),t["\u0275did"](3,49152,null,0,u.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](4,0,["",": ",""])),t["\u0275pid"](131072,s.j,[s.k,t.ChangeDetectorRef])],(function(e,n){e(n,1,0,"warning")}),(function(e,n){var l=n.component,i=null;e(n,4,0,t["\u0275unv"](n,4,0,t["\u0275nov"](n,5).transform("OBSERVATION_LABEL")),null==l.expense||null==(i=l.expense.getRelation("disapprovedExpense"))?null:i.getAttribute("observation"))}))}function F(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,18,"ion-row",[["class","flex justify-center "]],null,null,null,a.Eb,a.I)),t["\u0275did"](1,49152,null,0,u.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](2,0,null,0,16,"ion-col",[["size","11"],["style","background-color: white; margin-top: 20px; border-radius: 20px;"]],null,null,null,a.hb,a.l)),t["\u0275did"](3,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(e()(),t["\u0275eld"](4,0,null,0,3,"div",[["style","margin-left: 20px;"]],null,null,null,null,null)),(e()(),t["\u0275eld"](5,0,null,null,2,"ion-label",[],null,null,null,a.ub,a.y)),t["\u0275did"](6,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](7,0,[" ",""])),(e()(),t["\u0275eld"](8,0,null,0,10,"ion-item",[["class","rounded-lg"],["lines","none"]],null,null,null,a.tb,a.x)),t["\u0275did"](9,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(e()(),t["\u0275eld"](10,0,null,0,8,"ion-input",[["autocapitalize","off"],["placeholder","00"],["required",""],["spellcheck","false"],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(e,n,l){var i=!0;return"ionBlur"===n&&(i=!1!==t["\u0275nov"](e,13)._handleBlurEvent(l.target)&&i),"ionChange"===n&&(i=!1!==t["\u0275nov"](e,13)._handleIonChange(l.target)&&i),"ngModelChange"===n&&(i=!1!==(e.context.$implicit.value=l)&&i),i}),a.sb,a.w)),t["\u0275did"](11,16384,null,0,r.k,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,r.d,(function(e){return[e]}),[r.k]),t["\u0275did"](13,4341760,null,0,u.Hb,[t.Injector,t.ElementRef],null,null),t["\u0275prd"](1024,null,r.e,(function(e){return[e]}),[u.Hb]),t["\u0275did"](15,671744,null,0,r.j,[[2,r.a],[6,r.d],[8,null],[6,r.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.f,null,[r.j]),t["\u0275did"](17,16384,null,0,r.g,[[4,r.f]],null,null),t["\u0275did"](18,49152,null,0,u.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{autocapitalize:[0,"autocapitalize"],name:[1,"name"],placeholder:[2,"placeholder"],required:[3,"required"],spellcheck:[4,"spellcheck"],type:[5,"type"]},null)],(function(e,n){e(n,3,0,"11"),e(n,9,0,"none"),e(n,11,0,""),e(n,15,0,n.context.$implicit.question,n.context.$implicit.value),e(n,18,0,"off",n.context.$implicit.question,"00","","false","number")}),(function(e,n){e(n,7,0,n.context.$implicit.question),e(n,10,0,t["\u0275nov"](n,11).required?"":null,t["\u0275nov"](n,17).ngClassUntouched,t["\u0275nov"](n,17).ngClassTouched,t["\u0275nov"](n,17).ngClassPristine,t["\u0275nov"](n,17).ngClassDirty,t["\u0275nov"](n,17).ngClassValid,t["\u0275nov"](n,17).ngClassInvalid,t["\u0275nov"](n,17).ngClassPending)}))}function w(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,6,"form",[["class","mb-6"],["name","expenseForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(e,n,l){var i=!0;return"submit"===n&&(i=!1!==t["\u0275nov"](e,2).onSubmit(l)&&i),"reset"===n&&(i=!1!==t["\u0275nov"](e,2).onReset()&&i),i}),null,null)),t["\u0275did"](1,16384,null,0,r.n,[],null,null),t["\u0275did"](2,4210688,[[1,4],["expenseForm",4]],0,r.i,[[8,null],[8,null]],null,null),t["\u0275prd"](2048,null,r.a,null,[r.i]),t["\u0275did"](4,16384,null,0,r.h,[[4,r.a]],null,null),(e()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](6,278528,null,0,d.k,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,n){e(n,6,0,n.component.questions)}),(function(e,n){e(n,0,0,t["\u0275nov"](n,4).ngClassUntouched,t["\u0275nov"](n,4).ngClassTouched,t["\u0275nov"](n,4).ngClassPristine,t["\u0275nov"](n,4).ngClassDirty,t["\u0275nov"](n,4).ngClassValid,t["\u0275nov"](n,4).ngClassInvalid,t["\u0275nov"](n,4).ngClassPending)}))}function Z(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,4,"ion-col",[["size","6"]],null,null,null,a.hb,a.l)),t["\u0275did"](1,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(e()(),t["\u0275eld"](2,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(e,n,l){var t=!0,i=e.component;return"click"===n&&(t=!1!==i.create(i.expenseForm)&&t),t}),a.ab,a.e)),t["\u0275did"](3,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"]},null),(e()(),t["\u0275ted"](-1,0,[" Salvar "]))],(function(e,n){e(n,1,0,"6"),e(n,3,0,"block")}),null)}function O(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,4,"ion-col",[["size","6"]],null,null,null,a.hb,a.l)),t["\u0275did"](1,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(e()(),t["\u0275eld"](2,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(e,n,l){var t=!0,i=e.component;return"click"===n&&(t=!1!==i.save(i.expenseForm)&&t),t}),a.ab,a.e)),t["\u0275did"](3,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"]},null),(e()(),t["\u0275ted"](-1,0,[" Salvar "]))],(function(e,n){e(n,1,0,"6"),e(n,3,0,"block")}),null)}function z(e){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{expenseForm:0}),(e()(),t["\u0275eld"](1,0,null,null,13,"ion-header",[],null,null,null,a.nb,a.r)),t["\u0275did"](2,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](3,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,a.Rb,a.V)),t["\u0275did"](4,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.bb,a.f)),t["\u0275did"](6,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](7,0,null,0,2,"ion-back-button",[["defaultHref","/"],["text",""]],null,[[null,"click"]],(function(e,n,l){var i=!0;return"click"===n&&(i=!1!==t["\u0275nov"](e,9).onClick(l)&&i),i}),a.Y,a.c)),t["\u0275did"](8,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),t["\u0275did"](9,16384,null,0,u.h,[[2,u.fb],u.Gb,u.d],{defaultHref:[0,"defaultHref"]},null),(e()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,a.Qb,a.U)),t["\u0275did"](11,49152,null,0,u.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Farmacologia"])),(e()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](14,16384,null,0,d.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275eld"](15,0,null,null,3,"ion-content",[["color","light"]],null,null,null,a.ib,a.m)),t["\u0275did"](16,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](18,16384,null,0,d.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275eld"](19,0,null,null,15,"ion-footer",[],null,null,null,a.lb,a.p)),t["\u0275did"](20,49152,null,0,u.z,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](21,0,null,0,13,"ion-toolbar",[],null,null,null,a.Rb,a.V)),t["\u0275did"](22,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](23,0,null,0,11,"ion-row",[],null,null,null,a.Eb,a.I)),t["\u0275did"](24,49152,null,0,u.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](25,0,null,0,5,"ion-col",[["size","6"]],null,null,null,a.hb,a.l)),t["\u0275did"](26,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(e()(),t["\u0275eld"](27,0,null,0,3,"ion-button",[["color","danger"],["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==e.component.backToList()&&t),t}),a.ab,a.e)),t["\u0275did"](28,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(e()(),t["\u0275ted"](29,0,[" "," "])),t["\u0275pid"](131072,s.j,[s.k,t.ChangeDetectorRef]),(e()(),t["\u0275and"](16777216,null,0,1,null,Z)),t["\u0275did"](32,16384,null,0,d.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](34,16384,null,0,d.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,n){var l=n.component;e(n,4,0,"primary"),e(n,8,0,"/",""),e(n,9,0,"/"),e(n,14,0,null==l.expense?null:l.expense.getRelation("disapprovedExpense")),e(n,16,0,"light"),e(n,18,0,l.expense),e(n,26,0,"6"),e(n,28,0,"danger","block","outline"),e(n,32,0,!l.editing),e(n,34,0,l.editing)}),(function(e,n){e(n,29,0,t["\u0275unv"](n,29,0,t["\u0275nov"](n,30).transform("BACK_BUTTON")))}))}function V(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-farmacologia",[],null,null,null,z,q)),t["\u0275did"](1,114688,null,0,S,[D.m,D.a,I.a,v.a,C.a,u.Fb,u.Jb,k.a,E.a,R.a,s.k,b.a],null,null)],(function(e,n){e(n,1,0)}),null)}var A=t["\u0275ccf"]("app-farmacologia",S,V,{},{},[]);class T{}l.d(n,"FarmacologiaPageModuleNgFactory",(function(){return P}));var P=t["\u0275cmf"](i,[],(function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.n,d.m,[t.LOCALE_ID,[2,d.v]]),t["\u0275mpd"](4608,r.m,r.m,[]),t["\u0275mpd"](4608,u.b,u.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Fb,u.Fb,[u.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Jb,u.Jb,[u.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,d.b,d.b,[]),t["\u0275mpd"](1073742336,r.l,r.l,[]),t["\u0275mpd"](1073742336,r.c,r.c,[]),t["\u0275mpd"](1073742336,u.Bb,u.Bb,[]),t["\u0275mpd"](1073742336,D.q,D.q,[[2,D.v],[2,D.m]]),t["\u0275mpd"](1073742336,T,T,[]),t["\u0275mpd"](1073742336,s.h,s.h,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](1024,D.k,(function(){return[[{path:"",component:S}]]}),[])])}))}}]);
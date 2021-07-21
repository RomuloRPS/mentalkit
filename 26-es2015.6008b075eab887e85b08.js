(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1NYy":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),r=e("MKJQ"),i=e("sZkV"),a=e("TSSN"),s=e("2OA5"),d=e("VP2P"),p=e("SVse"),c=e("PMxZ"),g=e("A1DM"),f=e("lvJ3"),m=e("cUpR"),R=e("mrSG"),v=e("6/aK"),x=e("VC9m"),b=e("97RR"),h=e("5FLp"),E=e("rlVk"),C=e("Vx7P"),w=e("fSVk"),S=e("a0SF");class I{constructor(l,n,e){this.router=l,this.popoverController=n,this.expenseReportService=e}ngOnInit(){}deleteReport(){this.popoverController.dismiss().then(()=>{this.expenseReportService.delete(this.expenseReport.getApiId()).then(l=>{this.router.navigate(["expense-reports/update"+(new Date).toISOString()])})})}edit(){this.popoverController.dismiss().then(()=>{this.router.navigate(["expense-report-edit/"+this.expenseReport.getApiId()])})}}class D{constructor(l,n,e,t,u,o,r,i,a,s){this.locale=l,this.router=n,this.route=e,this.expenseReportService=t,this.expensesService=u,this.modalController=o,this.popoverController=r,this.loadingService=i,this.toasterService=a,this.translateService=s}ngOnInit(){this.route.paramMap.subscribe(l=>{l.get("id")&&this.getExpenseReport(l.get("id"))})}getExpenseReport(l){let n={id:l};this.expenseReportService.onlyOffline().get(n).subscribe(l=>{this.expenseReport=l.data[0]})}getCurrency(l){return l&&l.getRelation("currency")?l.getRelation("currency").getAttribute("code"):v.a.getStandardCurrency()}chooseExpenses(){return R.a(this,void 0,void 0,(function*(){const l={noExpenseReport:!0,expenseReportId:this.expenseReport.getApiId()},n=yield this.modalController.create({component:b.a,componentProps:{baseService:this.expensesService,filters:l,selecteds:this.expenseReport.getRelation("expenses")}});return n.onDidDismiss().then(l=>{l.data&&(this.loadingService.show(this.translateService.instant("SAVING")),this.expenseReport.setRelation("expenses",l.data),this.expenseReport.save().then(l=>{this.expenseReportService.cache({include:h.a,page:{limit:99999}}).subscribe(l=>{this.getExpenseReport(this.expenseReport.getApiId()),this.loadingService.dismiss()})}).catch(l=>{this.loadingService.dismiss(),this.toasterService.error(this.translateService.instant("NOT_POSSIBLE_TO_SAVE"))}))}),yield n.present()}))}getColor(){return"#1acc8d"}getCardColor(l){if(l.getRelation("disapprovedExpense")&&this.isApproved())return"warning-light"}isApproved(){return this.expenseReport.getAttribute("status")==x.b.APPROVED||this.expenseReport.getAttribute("status")==x.b.APPROVED_WITH_EXCEPTIONS||this.expenseReport.getAttribute("status")==x.b.EDITION_REQUEST}isEditable(){return!(!this.expenseReport||this.expenseReport.getAttribute("status")!=x.b.EDITION_REQUEST&&this.expenseReport.getAttribute("status")!=x.b.OPEN)}openOptions(l){return R.a(this,void 0,void 0,(function*(){const n={component:I,componentProps:{expenseReport:this.expenseReport},translucent:!0,event:l},e=yield this.popoverController.create(n);return yield e.present()}))}toExpenseCreate(){localStorage.setItem("expense-group","true"),localStorage.setItem("expense-last-page","report-view"),this.router.navigate(["expense-create/"+this.expenseReport.getApiId()])}send(l){this.expenseReportService.sendExpenseReport([l]),this.router.navigate(["expense-reports/update"+(new Date).toISOString()])}toExpenseListAdd(){this.router.navigate(["expense-add-to-expense-report"])}toExpenseEdit(l){this.isEditable()?this.router.navigate(["expense-edit/"+l]):this.router.navigate(["expense-view/"+l])}}var N=e("iInd"),A=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openOptions(e)&&t),t}),r.ab,r.e)),t["\u0275did"](1,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","ellipsis-horizontal-outline"]],null,null,null,r.ob,r.s)),t["\u0275did"](3,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"ellipsis-horizontal-outline")}),null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-toolbar",[["color","warning"]],null,null,null,r.Rb,r.V)),t["\u0275did"](1,49152,null,0,i.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](2,0,null,0,4,"p",[["class","ml-2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",": "])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef]),(l()(),t["\u0275ted"](6,null,["",""]))],(function(l,n){l(n,1,0,"warning")}),(function(l,n){var e=n.component;l(n,4,0,t["\u0275unv"](n,4,0,t["\u0275nov"](n,5).transform("OBSERVATION_LABEL")));var u=null;l(n,6,0,null==e.expenseReport||null==(u=e.expenseReport.getRelation("currentExpenseReportState"))?null:u.getAttribute("observation"))}))}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"p",[["class","text-left"],["style","color: white;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",":"])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef]),(l()(),t["\u0275ted"](4,null,[" ",""])),t["\u0275ppd"](5,1)],null,(function(l,n){var e=n.component;l(n,2,0,t["\u0275unv"](n,2,0,t["\u0275nov"](n,3).transform("EXPENSE_REPORT.SENT_AT")));var u=t["\u0275unv"](n,4,0,l(n,5,0,t["\u0275nov"](n.parent,1),null==e.expenseReport?null:e.expenseReport.getAttribute("send_date")));l(n,4,0,u)}))}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"p",[["class","text-left"],["style","color: white;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Descri\xe7\xe3o:"])),(l()(),t["\u0275eld"](3,0,null,null,2,"ion-text",[],null,null,null,r.Ob,r.S)),t["\u0275did"](4,49152,null,0,i.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](5,0,[" ",""]))],null,(function(l,n){var e=n.component;l(n,5,0,null==e.expenseReport?null:e.expenseReport.getAttribute("observation"))}))}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ev-expense-report-list-icons",[],null,null,null,s.c,s.b)),t["\u0275did"](1,49152,null,0,d.a,[],{currentStatus:[0,"currentStatus"]},null)],(function(l,n){l(n,1,0,n.component.expenseReport.elements.status)}),null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","m-auto text-center mt-3 px-3 mb-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,3,"ion-button",[["color","success"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.send(u.expenseReport.getApiId())&&t),t}),r.ab,r.e)),t["\u0275did"](3,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t["\u0275ted"](4,0,["",""])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](6,0,null,null,6,"div",[["class","m-auto text-center mt-3 px-3 mb-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,5,"ion-button",[["color","primary"],["expand","block"],["fill","outline"],["size","small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.chooseExpenses()&&t),t}),r.ab,r.e)),t["\u0275did"](8,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],size:[3,"size"]},null),(l()(),t["\u0275eld"](9,0,null,0,1,"ion-icon",[["name","add"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](10,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275ted"](11,0,[" "," "])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef])],(function(l,n){l(n,3,0,"success","block"),l(n,8,0,"primary","block","outline","small"),l(n,10,0,"add")}),(function(l,n){l(n,4,0,t["\u0275unv"](n,4,0,t["\u0275nov"](n,5).transform("EXPENSE_REPORT_DETAILS.SEND_TO_REVIEW"))),l(n,11,0,t["\u0275unv"](n,11,0,t["\u0275nov"](n,12).transform("CHOOSE_EXPENSES")))}))}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),t["\u0275ppd"](1,1)],null,(function(l,n){var e=null,u=t["\u0275unv"](n,0,0,l(n,1,0,t["\u0275nov"](n.parent.parent.parent,2),null==(e=n.parent.context.$implicit.getRelation("avatar"))?null:e.getAttribute("token")));l(n,0,0,u)}))}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ion-icon",[["class","text-5xl"],["color","primary"],["src","/assets/fontawesome/solid/image.svg"]],null,null,null,r.ob,r.s)),t["\u0275did"](1,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],src:[1,"src"]},null)],(function(l,n){l(n,1,0,"primary","/assets/fontawesome/solid/image.svg")}),null)}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","bg-orange-500 w-full text-center text-white font-bold"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef])],null,(function(l,n){l(n,2,0,t["\u0275unv"](n,2,0,t["\u0275nov"](n,3).transform("CATEGORY.WRONG_CATEGORY_WARNING")))}))}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","bg-orange-500 w-full text-center text-white font-bold"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef])],null,(function(l,n){l(n,2,0,t["\u0275unv"](n,2,0,t["\u0275nov"](n,3).transform("EXPENSE_REPORT_DETAILS.REPROVED_EXPENSE")))}))}function j(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,35,"ion-card",[["class","card-no-border card-no-margin"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toExpenseEdit(l.context.$implicit.getApiId())&&t),t}),r.fb,r.g)),t["\u0275did"](1,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](2,0,null,0,29,"ion-item",[["lines","none"]],null,null,null,r.tb,r.x)),t["\u0275did"](3,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),t["\u0275eld"](4,0,null,0,5,"ion-thumbnail",[["size","large"],["slot","start"]],null,null,null,r.Pb,r.T)),t["\u0275did"](5,49152,null,0,i.wb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,V)),t["\u0275did"](7,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](9,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](10,0,null,0,15,"ion-label",[["class","text-xs "]],null,null,null,r.ub,r.y)),t["\u0275did"](11,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](12,0,null,0,2,"p",[["class","mt-2 w-12/12"],["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,1,"span",[["class","font-bold text-base"],["style","font-size: 15px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](14,null,["",""])),(l()(),t["\u0275eld"](15,0,null,0,2,"p",[["class","mt-2 w-12/12"],["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,1,"span",[["class","font-bold text-base"],["style","font-size: 15px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](17,null,["",""])),(l()(),t["\u0275eld"](18,0,null,0,3,"p",[["class","ml-1 mt-2"],["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](20,null,["",""])),t["\u0275pid"](0,c.a,[]),(l()(),t["\u0275eld"](22,0,null,0,3,"p",[["class","ml-1 mt-2"],["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](23,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](24,null,["",""])),t["\u0275ppd"](25,2),(l()(),t["\u0275eld"](26,0,null,0,5,"ion-badge",[["color","warning"],["slot","end"]],null,null,null,r.Z,r.d)),t["\u0275did"](27,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](28,0,null,0,3,"ion-label",[],null,null,null,r.ub,r.y)),t["\u0275did"](29,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](30,0,["",""])),t["\u0275ppd"](31,5),(l()(),t["\u0275and"](16777216,null,0,1,null,z)),t["\u0275did"](33,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,F)),t["\u0275did"](35,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.getCardColor(n.context.$implicit)),l(n,3,0,e.getCardColor(n.context.$implicit),"none");var t=null,u=null==(t=n.context.$implicit.getRelation("avatar"))?null:t.getAttribute("token");l(n,7,0,u);var o=null,r=!(null!=(o=n.context.$implicit.getRelation("avatar"))&&o.getAttribute("token"));l(n,9,0,r),l(n,27,0,"warning");var i=n.context.$implicit.expenseHasWrongCategory(n.context.$implicit,e.expenseReport);l(n,33,0,i);var a=n.context.$implicit.getRelation("disapprovedExpense")&&e.isApproved();l(n,35,0,a)}),(function(l,n){var e=n.component,u=n.context.$implicit.getAttribute("name");l(n,14,0,u);var o=n.context.$implicit.getAttribute("provider");l(n,17,0,o);var r=t["\u0275unv"](n,20,0,t["\u0275nov"](n,21).transform(n.context.$implicit.getRelation("category")));l(n,20,0,r);var i=t["\u0275unv"](n,24,0,l(n,25,0,t["\u0275nov"](n.parent.parent,1),null==n.context.$implicit?null:n.context.$implicit.getAttribute("issue_date"),"dd/MM/yyyy"));l(n,24,0,i);var a=t["\u0275unv"](n,30,0,l(n,31,0,t["\u0275nov"](n.parent.parent,0),null==n.context.$implicit?null:n.context.$implicit.getAttribute("value"),e.getCurrency(n.context.$implicit),!0,"1.2-2",e.locale));l(n,30,0,a)}))}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,j)),t["\u0275did"](2,278528,null,0,p.k,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,n.component.expenseReport.getRelation("expenses"))}),null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toExpenseCreate()&&t),t}),r.kb,r.n)),t["\u0275did"](1,49152,null,0,i.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-fab-button",[["color","secondary"]],null,null,null,r.jb,r.o)),t["\u0275did"](3,49152,null,0,i.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,r.ob,r.s)),t["\u0275did"](5,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,3,0,"secondary"),l(n,5,0,"add")}),null)}function J(l){return t["\u0275vid"](0,[t["\u0275pid"](0,p.c,[t.LOCALE_ID]),t["\u0275pid"](0,g.a,[]),t["\u0275pid"](0,f.a,[m.b]),(l()(),t["\u0275eld"](3,0,null,null,15,"ion-header",[["class","ion-no-border"]],null,null,null,r.nb,r.r)),t["\u0275did"](4,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,13,"ion-toolbar",[["color","primary"]],null,null,null,r.Rb,r.V)),t["\u0275did"](6,49152,null,0,i.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](7,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.bb,r.f)),t["\u0275did"](8,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](9,0,null,0,1,"ion-menu-button",[],null,null,null,r.xb,r.C)),t["\u0275did"](10,49152,null,0,i.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](11,0,null,0,3,"ion-title",[],null,null,null,r.Qb,r.U)),t["\u0275did"](12,49152,null,0,i.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](13,0,["",""])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](15,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.f)),t["\u0275did"](16,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](18,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](19,0,null,null,47,"ion-content",[["color","light"]],null,null,null,r.ib,r.m)),t["\u0275did"](20,49152,null,0,i.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](22,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](23,0,null,0,33,"div",[["class","relative"],["style","background-color:#49345f"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,7,"div",[["class","pt-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,3,"ion-text",[],null,null,null,r.Ob,r.S)),t["\u0275did"](26,49152,null,0,i.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](27,0,null,0,1,"p",[["class","text-center text-base font-bold"],["style","color: white;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](28,null,["",""])),(l()(),t["\u0275eld"](29,0,null,null,2,"p",[["class","text-center font-extrabold text-3xl"],["style","color: white;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](30,null,["",""])),t["\u0275ppd"](31,5),(l()(),t["\u0275eld"](32,0,null,null,0,"div",[["class","w-10/12 h-1 rounded-md m-auto mt-4"],["style","background-color: white;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](33,0,null,null,14,"div",[["class","ml-4 mt-8 mr-4 relative"]],null,null,null,null,null)),(l()(),t["\u0275eld"](34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](36,0,null,null,7,"div",[["class","absolute top-0 right-0"]],null,null,null,null,null)),(l()(),t["\u0275eld"](37,0,null,null,6,"ion-badge",[["class","mt-2"],["color","success"]],null,null,null,r.Z,r.d)),t["\u0275did"](38,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](39,0,null,0,1,"ion-icon",[["name","elo-information"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](40,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](41,0,null,0,2,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](42,null,["",""])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef]),(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](45,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](47,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](48,0,null,null,8,":svg:svg",[[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","hero-waves"],["preserveAspectRatio","none"],["viewBox","0 24 150 28 "],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](49,0,null,null,1,":svg:defs",[],null,null,null,null,null)),(l()(),t["\u0275eld"](50,0,null,null,0,":svg:path",[["d","M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"],["id","wave-path"]],null,null,null,null,null)),(l()(),t["\u0275eld"](51,0,null,null,1,":svg:g",[["class","wave1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](52,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","rgba(244,245,248, .1)"],["x","50"],["y","3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](53,0,null,null,1,":svg:g",[["class","wave2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](54,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","rgba(244,245,248, .2)"],["x","50"],["y","0"]],null,null,null,null,null)),(l()(),t["\u0275eld"](55,0,null,null,1,":svg:g",[["class","wave3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](56,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","#F4F5F8"],["x","50"],["y","9"]],null,null,null,null,null)),(l()(),t["\u0275eld"](57,0,null,0,1,"h2",[["class","text-center mt-2 font-bold"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Linha do tempo de status"])),(l()(),t["\u0275and"](16777216,null,0,1,null,Z)),t["\u0275did"](60,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,P)),t["\u0275did"](62,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,$)),t["\u0275did"](64,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,L)),t["\u0275did"](66,16384,null,0,p.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,6,0,"primary"),l(n,18,0,e.isEditable()),l(n,20,0,"light");var t=null;l(n,22,0,null==e.expenseReport||null==(t=e.expenseReport.getRelation("currentExpenseReportState"))?null:t.getAttribute("observation")),l(n,38,0,null==e.expenseReport?null:e.expenseReport.getStatusBadgeColor()),l(n,40,0,"elo-information"),l(n,45,0,null==e.expenseReport?null:e.expenseReport.getAttribute("send_date")),l(n,47,0,null==e.expenseReport?null:e.expenseReport.getAttribute("observation")),l(n,60,0,e.expenseReport),l(n,62,0,e.isEditable()),l(n,64,0,e.expenseReport&&e.expenseReport.getRelation("expenses")),l(n,66,0,e.isEditable())}),(function(l,n){var e=n.component;l(n,13,0,t["\u0275unv"](n,13,0,t["\u0275nov"](n,14).transform("EXPENSE_REPORT.CAPTION"))),l(n,28,0,null==e.expenseReport?null:e.expenseReport.getAttribute("name"));var u=t["\u0275unv"](n,30,0,l(n,31,0,t["\u0275nov"](n,0),null==e.expenseReport?null:e.expenseReport.getAttribute("value"),e.getCurrency(),!0,"1.2-2",e.locale));l(n,30,0,u),l(n,42,0,t["\u0275unv"](n,42,0,t["\u0275nov"](n,43).transform("EXPENSE_REPORT_STATUS."+(null==e.expenseReport?null:e.expenseReport.getAttribute("status")))))}))}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-expense-report-view",[],null,null,null,J,A)),t["\u0275did"](1,114688,null,0,D,[t.LOCALE_ID,N.m,N.a,E.a,C.a,i.Fb,i.Jb,w.a,S.a,a.k],null,null)],(function(l,n){l(n,1,0)}),null)}var B=t["\u0275ccf"]("app-expense-report-view",D,M,{},{},[]),X=e("IveJ"),U=e("34Ku"),G=e("mk1J"),H=e("na1C"),Q=e("JFOv"),W=e("xijX"),Y=e("smCF"),q=e("wQjt"),K=e("yGWc"),ll=e("+l5I"),nl=e("ssC5"),el=e("3+nr"),tl=e("7h0Y"),ul=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function ol(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,"ion-list",[["lines","none"]],null,null,null,r.wb,r.z)),t["\u0275did"](1,49152,null,0,i.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](2,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.edit()&&t),t}),r.tb,r.x)),t["\u0275did"](3,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(l()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["color","warning"],["name","create-outline"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](5,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),t["\u0275ted"](-1,0,["Editar "])),(l()(),t["\u0275eld"](7,0,null,0,5,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.deleteReport()&&t),t}),r.tb,r.x)),t["\u0275did"](8,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(l()(),t["\u0275eld"](9,0,null,0,1,"ion-icon",[["color","danger"],["name","trash"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](10,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),t["\u0275ted"](11,0,[""," "])),t["\u0275pid"](131072,a.j,[a.k,t.ChangeDetectorRef])],(function(l,n){l(n,1,0,"none"),l(n,3,0,""),l(n,5,0,"warning","create-outline"),l(n,8,0,""),l(n,10,0,"danger","trash")}),(function(l,n){l(n,11,0,t["\u0275unv"](n,11,0,t["\u0275nov"](n,12).transform("DELETE_BUTTON")))}))}function rl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-menu-popover",[],null,null,null,ol,ul)),t["\u0275did"](1,114688,null,0,I,[N.m,i.Jb,E.a],null,null)],(function(l,n){l(n,1,0)}),null)}var il=t["\u0275ccf"]("app-menu-popover",I,rl,{expenseReport:"expenseReport"},{},[]),al=e("s7LF"),sl=e("Zr1d"),dl=e("Pn9U"),pl=e("4zgz"),cl=e("qrQb"),gl=e("Ioyb"),fl=e("t8sF"),ml=e("ozRC"),Rl=e("pjjr");class vl{}var xl=e("iTUp"),bl=e("OPcz"),hl=e("Rwpb");e.d(n,"ExpenseReportViewPageModuleNgFactory",(function(){return El}));var El=t["\u0275cmf"](u,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,B,X.a,U.a,G.a,H.a,Q.a,W.a,Y.a,q.a,K.a,ll.a,nl.a,el.a,tl.a,s.a,il]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,p.n,p.m,[t.LOCALE_ID,[2,p.v]]),t["\u0275mpd"](4608,al.m,al.m,[]),t["\u0275mpd"](4608,i.b,i.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Fb,i.Fb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.Jb,i.Jb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,sl.a,sl.a,[]),t["\u0275mpd"](4608,dl.a,dl.a,[]),t["\u0275mpd"](4608,pl.a,pl.a,[]),t["\u0275mpd"](4608,cl.a,cl.a,[i.Fb]),t["\u0275mpd"](4608,gl.a,gl.a,[]),t["\u0275mpd"](4608,fl.a,fl.a,[]),t["\u0275mpd"](4608,ml.a,ml.a,[gl.a,fl.a,i.Ib]),t["\u0275mpd"](4608,Rl.a,Rl.a,[]),t["\u0275mpd"](1073742336,p.b,p.b,[]),t["\u0275mpd"](1073742336,al.l,al.l,[]),t["\u0275mpd"](1073742336,al.c,al.c,[]),t["\u0275mpd"](1073742336,i.Bb,i.Bb,[]),t["\u0275mpd"](1073742336,N.q,N.q,[[2,N.v],[2,N.m]]),t["\u0275mpd"](1073742336,vl,vl,[]),t["\u0275mpd"](1073742336,xl.a,xl.a,[]),t["\u0275mpd"](1073742336,a.h,a.h,[]),t["\u0275mpd"](1073742336,bl.SignaturePadModule,bl.SignaturePadModule,[]),t["\u0275mpd"](1073742336,hl.a,hl.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,N.k,(function(){return[[{path:"",component:D}]]}),[])])}))}}]);
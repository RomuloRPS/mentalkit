(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"/yGZ":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),r=e("MKJQ"),a=e("sZkV"),i=e("SVse"),s=e("s7LF"),d=e("TSSN"),c=e("mrSG"),g=e("AytR"),m=e("zA0m"),f=e("p74H"),p=e("hQIo"),v=e("a0SF"),h=e("Tj/N"),b=e("NJLX"),C=e("aY4x"),R=e("NzdG");class y{constructor(l,n,e,t,o,u,r,a,i,s,d){this.route=l,this.alertController=n,this.toastController=e,this.barcodeScanner=t,this.statusBar=o,this.authService=u,this.toasterService=r,this.userModel=a,this.roleService=i,this.offlineCacheSercice=s,this.googlePlus=d,this.userData={login:"",password:"",email:""},this.submitted=!1,this.passwordType="password",this.passwordIcon="eye",this.loading=!1,this.version=g.a.version}ngOnInit(){this.statusBar.backgroundColorByHexString("#6C9F23")}loginWithGoogle(){this.googlePlus.login({scopes:"profile, email",webClientId:"886871057560-t722145pt0j9oiuttt9si6ecnobmnori.apps.googleusercontent.com"}).then(l=>{console.log(l),alert(JSON.stringify(l))}).catch(l=>{console.log(l),alert(l)})}onLogin(l){this.loading=!0,l.valid?(this.userData.email=this.userData.login,this.route.navigate(["menu"]).then(l=>{console.log(l)}).catch(l=>{console.log(l)})):(this.submitted=!0,this.loading=!1)}setAuthenticatedUser(l){localStorage.setItem("login",JSON.stringify(l))}hideShowPassword(){this.passwordType="text"===this.passwordType?"password":"text",this.passwordIcon="eye"===this.passwordIcon?"eye-off":"eye"}loginFailed(l){return c.a(this,void 0,void 0,(function*(){(yield this.toastController.create({message:l,duration:2e3,position:"top",animated:!0,color:"danger",mode:"ios",buttons:[{side:"end",icon:"close",role:"cancel",handler:()=>{console.log("close clicked")}}]})).present()}))}register(){this.route.navigate(["register-user"])}forgotPassword(){this.route.navigate(["forgot-password"])}saveUserParams(l,n){localStorage.setItem("JWT",l.getAttribute("token")),localStorage.setItem("selectedTenancyId",l.getRelation("tenancies")[0].getApiId()),this.userModel.set("id",l.getApiId()).set("JWT",l.getAttribute("token")).set("username",l.getAttribute("username")).set("name",l.getAttribute("name")).set("email",l.getAttribute("email")).set("user",JSON.stringify(n)).set("selectedTenancyId",l.getRelation("tenancies")[0].getApiId()).save(),this.roleService.updateRoles()}}var w=e("iInd"),k=t["\u0275crt"]({encapsulation:0,styles:[[".hero-waves[_ngcontent-%COMP%]{display:block;width:100%;height:60px;position:absolute;bottom:0}.wave1[_ngcontent-%COMP%]   use[_ngcontent-%COMP%]{-webkit-animation:10s linear -2s infinite move-forever1;animation:10s linear -2s infinite move-forever1}.wave2[_ngcontent-%COMP%]   use[_ngcontent-%COMP%]{-webkit-animation:8s linear -2s infinite move-forever2;animation:8s linear -2s infinite move-forever2}.wave3[_ngcontent-%COMP%]   use[_ngcontent-%COMP%]{-webkit-animation:6s linear -2s infinite move-forever3;animation:6s linear -2s infinite move-forever3}@-webkit-keyframes move-forever1{0%{transform:translate(85px,0)}100%{transform:translate(-90px,0)}}@keyframes move-forever1{0%{transform:translate(85px,0)}100%{transform:translate(-90px,0)}}@-webkit-keyframes move-forever2{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}@keyframes move-forever2{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}@-webkit-keyframes move-forever3{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}@keyframes move-forever3{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}"]],data:{}});function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ion-progress-bar",[["type","indeterminate"]],null,null,null,r.Ab,r.E)),t["\u0275did"](1,49152,null,0,a.W,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{type:[0,"type"]},null)],(function(l,n){l(n,1,0,"indeterminate")}),null)}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ion-spinner",[["name","crescent"],["slot","start"]],null,null,null,r.Kb,r.O)),t["\u0275did"](1,49152,null,0,a.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"crescent")}),null)}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"ion-header",[["class","ion-no-border"]],null,null,null,r.nb,r.r)),t["\u0275did"](1,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,r.Rb,r.V)),t["\u0275did"](3,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](4,0,null,0,6,"ion-item",[["color","primary"],["lines","none"]],null,null,null,r.tb,r.x)),t["\u0275did"](5,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),t["\u0275eld"](6,0,null,0,4,"ion-badge",[["slot","start"]],null,null,null,r.Z,r.d)),t["\u0275did"](7,49152,null,0,a.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,2,"ion-label",[["class","text-xs"]],null,null,null,r.ub,r.y)),t["\u0275did"](9,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](10,0,["v.",""])),(l()(),t["\u0275eld"](11,0,null,null,83,"ion-content",[["color","light"]],null,null,null,r.ib,r.m)),t["\u0275did"](12,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](13,0,null,0,81,"div",[["class"," h-24 absolute"],["style","background-color: #308ac4;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,8,":svg:svg",[[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","hero-waves"],["preserveAspectRatio","none"],["viewBox","0 24 150 28 "],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,":svg:defs",[],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,0,":svg:path",[["d","M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"],["id","wave-path"]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,1,":svg:g",[["class","wave1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](18,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","rgba(244,245,248, .1)"],["x","50"],["y","3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,1,":svg:g",[["class","wave2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","rgba(244,245,248, .2)"],["x","50"],["y","0"]],null,null,null,null,null)),(l()(),t["\u0275eld"](21,0,null,null,1,":svg:g",[["class","wave3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](22,0,null,null,0,":svg:use",[[":xlink:href","#wave-path"],["fill","#F4F5F8"],["x","50"],["y","9"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](24,16384,null,0,i.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](25,0,null,null,69,"div",[["style","margin-top: 40px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,68,"ion-card",[],null,null,null,r.fb,r.g)),t["\u0275did"](27,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](28,0,null,0,6,"ion-card-header",[],null,null,null,r.db,r.i)),t["\u0275did"](29,49152,null,0,a.o,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](30,0,null,0,0,"img",[["class","h-32 rounded-lg m-auto"],["src","./assets/logo.jpeg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](31,0,null,0,1,"p",[["class","text-center font-bold text-4xl"],["style","color: #230E40;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Iate Clube"])),(l()(),t["\u0275eld"](33,0,null,0,1,"p",[["class","text-center font-bold text-4xl"],["style","color: #230E40;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Joinville"])),(l()(),t["\u0275eld"](35,0,null,0,58,"form",[["class","mt-6"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var o=!0;return"submit"===n&&(o=!1!==t["\u0275nov"](l,37).onSubmit(e)&&o),"reset"===n&&(o=!1!==t["\u0275nov"](l,37).onReset()&&o),o}),null,null)),t["\u0275did"](36,16384,null,0,s.n,[],null,null),t["\u0275did"](37,4210688,[["loginForm",4]],0,s.i,[[8,null],[8,null]],null,null),t["\u0275prd"](2048,null,s.a,null,[s.i]),t["\u0275did"](39,16384,null,0,s.h,[[4,s.a]],null,null),(l()(),t["\u0275eld"](40,0,null,null,53,"ion-row",[["class","flex justify-center "]],null,null,null,r.Eb,r.I)),t["\u0275did"](41,49152,null,0,a.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](42,0,null,0,15,"ion-col",[["size","10"]],null,null,null,r.hb,r.l)),t["\u0275did"](43,49152,null,0,a.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](44,0,null,0,13,"ion-item",[["class","rounded-lg"]],null,null,null,r.tb,r.x)),t["\u0275did"](45,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](46,0,null,0,1,"ion-icon",[["color","tertiary"],["name","person"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](47,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),t["\u0275eld"](48,0,null,0,9,"ion-input",[["autocapitalize","off"],["name","username"],["required",""],["spellcheck","false"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t["\u0275nov"](l,51)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t["\u0275nov"](l,51)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.userData.login=e)&&o),o}),r.sb,r.w)),t["\u0275did"](49,16384,null,0,s.k,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,s.d,(function(l){return[l]}),[s.k]),t["\u0275did"](51,4341760,null,0,a.Mb,[t.Injector,t.ElementRef],null,null),t["\u0275prd"](1024,null,s.e,(function(l){return[l]}),[a.Mb]),t["\u0275did"](53,671744,[["username",4]],0,s.j,[[2,s.a],[6,s.d],[8,null],[6,s.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,s.f,null,[s.j]),t["\u0275did"](55,16384,null,0,s.g,[[4,s.f]],null,null),t["\u0275did"](56,49152,null,0,a.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{autocapitalize:[0,"autocapitalize"],name:[1,"name"],placeholder:[2,"placeholder"],required:[3,"required"],spellcheck:[4,"spellcheck"],type:[5,"type"]},null),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](58,0,null,0,22,"ion-col",[["size","10"]],null,null,null,r.hb,r.l)),t["\u0275did"](59,49152,null,0,a.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](60,0,null,0,15,"ion-item",[["class","rounded-lg"]],null,null,null,r.tb,r.x)),t["\u0275did"](61,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](62,0,null,0,1,"ion-icon",[["color","tertiary"],["name","lock-closed"],["slot","start"]],null,null,null,r.ob,r.s)),t["\u0275did"](63,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),t["\u0275eld"](64,0,null,0,9,"ion-input",[["name","password"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t["\u0275nov"](l,67)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t["\u0275nov"](l,67)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.userData.password=e)&&o),o}),r.sb,r.w)),t["\u0275did"](65,16384,null,0,s.k,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,s.d,(function(l){return[l]}),[s.k]),t["\u0275did"](67,4341760,null,0,a.Mb,[t.Injector,t.ElementRef],null,null),t["\u0275prd"](1024,null,s.e,(function(l){return[l]}),[a.Mb]),t["\u0275did"](69,671744,[["password",4]],0,s.j,[[2,s.a],[6,s.d],[8,null],[6,s.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,s.f,null,[s.j]),t["\u0275did"](71,16384,null,0,s.g,[[4,s.f]],null,null),t["\u0275did"](72,49152,null,0,a.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](74,0,null,0,1,"ion-icon",[["color","dark"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.hideShowPassword()&&t),t}),r.ob,r.s)),t["\u0275did"](75,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),t["\u0275eld"](76,0,null,0,4,"ion-text",[["color","danger"]],null,null,null,r.Ob,r.S)),t["\u0275did"](77,49152,null,0,a.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](78,0,null,0,2,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t["\u0275ted"](79,null,[" "," "])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](81,0,null,0,4,"ion-col",[["size","10"],["style","text-align: right;"]],null,null,null,r.hb,r.l)),t["\u0275did"](82,49152,null,0,a.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](83,0,null,0,2,"a",[["style","color: black; text-align: right;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.forgotPassword()&&t),t}),null,null)),(l()(),t["\u0275ted"](84,null,[" "," "])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](86,0,null,0,7,"ion-col",[["size","10"]],null,null,null,r.hb,r.l)),t["\u0275did"](87,49152,null,0,a.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](88,0,null,0,5,"ion-button",[["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.onLogin(t["\u0275nov"](l,37))&&o),o}),r.ab,r.e)),t["\u0275did"](89,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](91,16384,null,0,i.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](92,0,[""," "])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](94,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,3,0,"primary"),l(n,5,0,"primary","none"),l(n,12,0,"light"),l(n,24,0,e.loading),l(n,43,0,"10"),l(n,47,0,"tertiary","person"),l(n,49,0,""),l(n,53,0,"username",e.userData.login),l(n,56,0,"off","username",t["\u0275unv"](n,56,2,t["\u0275nov"](n,57).transform("USER_LABEL")),"","false","text"),l(n,59,0,"10"),l(n,63,0,"tertiary","lock-closed"),l(n,65,0,""),l(n,69,0,"password",e.userData.password),l(n,72,0,"password",t["\u0275unv"](n,72,1,t["\u0275nov"](n,73).transform("PASSWORD_LABEL")),"",e.passwordType),l(n,75,0,"dark",e.passwordIcon),l(n,77,0,"danger"),l(n,82,0,"10"),l(n,87,0,"10"),l(n,89,0,"secondary",e.loading,"block"),l(n,91,0,e.loading)}),(function(l,n){var e=n.component;l(n,10,0,e.version),l(n,35,0,t["\u0275nov"](n,39).ngClassUntouched,t["\u0275nov"](n,39).ngClassTouched,t["\u0275nov"](n,39).ngClassPristine,t["\u0275nov"](n,39).ngClassDirty,t["\u0275nov"](n,39).ngClassValid,t["\u0275nov"](n,39).ngClassInvalid,t["\u0275nov"](n,39).ngClassPending),l(n,48,0,t["\u0275nov"](n,49).required?"":null,t["\u0275nov"](n,55).ngClassUntouched,t["\u0275nov"](n,55).ngClassTouched,t["\u0275nov"](n,55).ngClassPristine,t["\u0275nov"](n,55).ngClassDirty,t["\u0275nov"](n,55).ngClassValid,t["\u0275nov"](n,55).ngClassInvalid,t["\u0275nov"](n,55).ngClassPending),l(n,64,0,t["\u0275nov"](n,65).required?"":null,t["\u0275nov"](n,71).ngClassUntouched,t["\u0275nov"](n,71).ngClassTouched,t["\u0275nov"](n,71).ngClassPristine,t["\u0275nov"](n,71).ngClassDirty,t["\u0275nov"](n,71).ngClassValid,t["\u0275nov"](n,71).ngClassInvalid,t["\u0275nov"](n,71).ngClassPending),l(n,78,0,t["\u0275nov"](n,69).valid||0==e.submitted),l(n,79,0,t["\u0275unv"](n,79,0,t["\u0275nov"](n,80).transform("LOGIN.PASSWORD_INPUT_PLACEHOLDER"))),l(n,84,0,t["\u0275unv"](n,84,0,t["\u0275nov"](n,85).transform("LOGIN.FORGOT_PASSWORD_LABEL"))),l(n,92,0,t["\u0275unv"](n,92,0,t["\u0275nov"](n,93).transform("LOGIN.LOGIN_BUTTON_TEXT")))}))}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,E,k)),t["\u0275did"](1,114688,null,0,y,[w.m,a.a,a.Nb,m.a,f.a,p.a,v.a,h.a,b.a,C.a,R.a],null,null)],(function(l,n){l(n,1,0)}),null)}var I=t["\u0275ccf"]("app-login",y,N,{},{},[]);class S{}e.d(n,"LoginPageModuleNgFactory",(function(){return Z}));var Z=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,I]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,i.n,i.m,[t.LOCALE_ID,[2,i.v]]),t["\u0275mpd"](4608,s.m,s.m,[]),t["\u0275mpd"](4608,a.b,a.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,i.b,i.b,[]),t["\u0275mpd"](1073742336,s.l,s.l,[]),t["\u0275mpd"](1073742336,s.c,s.c,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,w.q,w.q,[[2,w.v],[2,w.m]]),t["\u0275mpd"](1073742336,S,S,[]),t["\u0275mpd"](1073742336,d.h,d.h,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,w.k,(function(){return[[{path:"",component:y}]]}),[])])}))}}]);
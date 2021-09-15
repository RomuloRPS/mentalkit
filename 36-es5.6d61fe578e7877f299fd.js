function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{ACCt:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=function l(){_classCallCheck(this,l)},o=e("pMnS"),i=e("MKJQ"),a=e("sZkV"),c=e("SVse"),r=e("A1DM"),s=e("mrSG"),d=function(){function l(){_classCallCheck(this,l),this.loading=!1,this.hasData=!0,this.selectedTasks=[],this.tasks=[],this.skeletonCards=[1,2,3,4,5,6,7,8,9,10]}return _createClass(l,[{key:"ngOnInit",value:function(){this.loading=!0,this.getTasks()}},{key:"getTasks",value:function(){this.tasks=[],this.loading=!1}},{key:"getEncodedTasks",value:function(){return this.tasks}},{key:"getType",value:function(l){switch(l){case"tenancies/:tenancy_id/transport-tasks/program-confirm":return"Nova Tarefa";case"tenancies/:tenancy_id/transport-tasks/execute":return"Tarefa";case"tenancies/:tenancy_id/transport-tasks/cancel":return"N\xe3o Execu\xe7\xe3o";case"tenancies/:tenancy_id/waste-movements":return"Invent\xe1rio";default:return""}}},{key:"getIcon",value:function(l){switch(l){case"tenancies/:tenancy_id/transport-tasks/program-confirm":return"./assets/icons/elo-collect.svg";case"tenancies/:tenancy_id/transport-tasks/execute":return"./assets/icons/elo-task.svg";case"tenancies/:tenancy_id/transport-tasks/cancel":return"./assets/icons/elo-close.svg";case"tenancies/:tenancy_id/waste-movements":return"./assets/icons/elo-waste.svg"}}},{key:"getColor",value:function(l){return"tenancies/:tenancy_id/transport-tasks/cancel"===l?"danger":"primary"}},{key:"deleteTasks",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:this.loading=!0,n=[],this.selectedTasks.forEach((function(l){n.push(l.id)}));case 3:case"end":return l.stop()}}),l,this)})))}},{key:"unSelectTasks",value:function(){this.selectedTasks=[],this.loading=!1}},{key:"selectTask",value:function(l){if(this.isSelected(l)){var n=this.selectedTasks.findIndex((function(n){return n.id==l.id}));this.selectedTasks.splice(n,1)}else this.selectedTasks.push(l)}},{key:"isSelected",value:function(l){return this.selectedTasks.find((function(n){return n.id==l.id}))?"medium":""}},{key:"runOnce",value:function(){this.loading=!0}},{key:"addToActionHistory",value:function(l){}},{key:"ngOnDestroy",value:function(){clearInterval(this.interval)}}]),l}(),f=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"ion-item",[["lines","none"]],null,null,null,i.tb,i.x)),t["\u0275did"](1,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](2,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,i.bb,i.f)),t["\u0275did"](3,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.runOnce()&&t),t}),i.ab,i.e)),t["\u0275did"](5,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,1,"ion-icon",[["color","primary"],["name","cloud-upload"],["slot","start"]],null,null,null,i.ob,i.s)),t["\u0275did"](7,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(l()(),t["\u0275eld"](8,0,null,0,2,"ion-label",[["class","text-center"],["text-wrap",""]],null,null,null,i.ub,i.y)),t["\u0275did"](9,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Clique nas tarefas abaixo para selecion\xe1-las"]))],(function(l,n){l(n,1,0,"none"),l(n,7,0,"primary","cloud-upload")}),null)}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"ion-item",[["lines","none"]],null,null,null,i.tb,i.x)),t["\u0275did"](1,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["color","danger"],["slot","start"],["src","./assets/icons/elo-trash.svg"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.deleteTasks()&&t),t}),i.ob,i.s)),t["\u0275did"](3,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],src:[1,"src"]},null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-label",[["class","text-center"],["text-wrap",""]],null,null,null,i.ub,i.y)),t["\u0275did"](5,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](6,0,[""," tarefa selecionada"])),(l()(),t["\u0275eld"](7,0,null,0,1,"ion-icon",[["name","close-outline"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.unSelectTasks()&&t),t}),i.ob,i.s)),t["\u0275did"](8,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"none"),l(n,3,0,"danger","./assets/icons/elo-trash.svg"),l(n,8,0,"close-outline")}),(function(l,n){l(n,6,0,n.component.selectedTasks.length)}))}function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"ion-item",[["lines","none"]],null,null,null,i.tb,i.x)),t["\u0275did"](1,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["color","danger"],["slot","start"],["src","./assets/icons/elo-trash.svg"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.deleteTasks()&&t),t}),i.ob,i.s)),t["\u0275did"](3,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],src:[1,"src"]},null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-label",[["class","text-center"],["text-wrap",""]],null,null,null,i.ub,i.y)),t["\u0275did"](5,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](6,0,[""," tarefas selecionadas"])),(l()(),t["\u0275eld"](7,0,null,0,1,"ion-icon",[["name","close-outline"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.unSelectTasks()&&t),t}),i.ob,i.s)),t["\u0275did"](8,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"none"),l(n,3,0,"danger","./assets/icons/elo-trash.svg"),l(n,8,0,"close-outline")}),(function(l,n){l(n,6,0,n.component.selectedTasks.length)}))}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"ion-toolbar",[],null,null,null,i.Rb,i.V)),t["\u0275did"](1,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](3,16384,null,0,c.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](5,16384,null,0,c.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](7,16384,null,0,c.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,0==e.selectedTasks.length),l(n,5,0,1==e.selectedTasks.length),l(n,7,0,e.selectedTasks.length>1)}),null)}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ion-progress-bar",[["color","dark"],["type","indeterminate"]],null,null,null,i.Ab,i.E)),t["\u0275did"](1,49152,null,0,a.W,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],type:[1,"type"]},null)],(function(l,n){l(n,1,0,"dark","indeterminate")}),null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"ion-card",[],null,null,null,i.fb,i.g)),t["\u0275did"](1,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,9,"ion-card-content",[],null,null,null,i.cb,i.h)),t["\u0275did"](3,49152,null,0,a.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,7,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"ion-img",[["class","h-40"],["src","./assets/integration.svg"]],null,null,null,i.pb,i.t)),t["\u0275did"](6,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{src:[0,"src"]},null),(l()(),t["\u0275eld"](7,0,null,null,4,"ion-text",[["color","dark"]],null,null,null,i.Ob,i.S)),t["\u0275did"](8,49152,null,0,a.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](9,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,1,"strong",[["class","text-xl"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No hay m\xe1s Despesas por sincronizar."]))],(function(l,n){l(n,6,0,"./assets/integration.svg"),l(n,8,0,"dark")}),null)}function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,[" Id: "," "]))],null,(function(l,n){l(n,1,0,null==n.parent.context.$implicit||null==n.parent.context.$implicit.data?null:n.parent.context.$implicit.data.id)}))}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","danger"],["slot","end"]],null,null,null,i.Z,i.d)),t["\u0275did"](1,49152,null,0,a.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,["Erro"]))],(function(l,n){l(n,1,0,"danger")}),null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,19,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,18,"ion-card",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.selectTask(l.context.$implicit)&&t),t}),i.fb,i.g)),t["\u0275did"](2,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],disabled:[1,"disabled"]},null),(l()(),t["\u0275eld"](3,0,null,0,16,"ion-item",[["lines","none"]],null,null,null,i.tb,i.x)),t["\u0275did"](4,49152,null,0,a.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),t["\u0275eld"](5,0,null,0,1,"ion-icon",[["class","text-5xl"],["slot","start"]],null,null,null,i.ob,i.s)),t["\u0275did"](6,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],src:[1,"src"]},null),(l()(),t["\u0275eld"](7,0,null,0,10,"ion-label",[],null,null,null,i.ub,i.y)),t["\u0275did"](8,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](10,16384,null,0,c.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](12,null,[" Tipo: "," "])),(l()(),t["\u0275eld"](13,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](14,null,[" Tentativas: "," "])),(l()(),t["\u0275eld"](15,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](16,null,[" Ult. Tentativa: "," "])),t["\u0275ppd"](17,1),(l()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](19,16384,null,0,c.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,t["\u0275inlineInterpolate"](1,"",e.isSelected(n.context.$implicit),""),e.loading),l(n,4,0,t["\u0275inlineInterpolate"](1,"",e.isSelected(n.context.$implicit),""),"none"),l(n,6,0,e.getColor(n.context.$implicit.name),e.getIcon(n.context.$implicit.name)),l(n,10,0,null==n.context.$implicit||null==n.context.$implicit.data?null:n.context.$implicit.data.id),l(n,19,0,n.context.$implicit.tries>0)}),(function(l,n){l(n,12,0,n.component.getType(n.context.$implicit.name)),l(n,14,0,n.context.$implicit.tries);var e=t["\u0275unv"](n,16,0,l(n,17,0,t["\u0275nov"](n.parent,0),null==n.context.$implicit.lastExecuted?null:n.context.$implicit.lastExecuted.replace(" ","T")));l(n,16,0,e)}))}function y(l){return t["\u0275vid"](0,[t["\u0275pid"](0,r.a,[]),(l()(),t["\u0275eld"](1,0,null,null,12,"ion-header",[],null,null,null,i.nb,i.r)),t["\u0275did"](2,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,i.Rb,i.V)),t["\u0275did"](4,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.bb,i.f)),t["\u0275did"](6,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,i.xb,i.C)),t["\u0275did"](8,49152,null,0,a.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,i.Qb,i.U)),t["\u0275did"](10,49152,null,0,a.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" Integra\xe7\xf5es "])),(l()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](13,16384,null,0,c.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](14,0,null,null,10,"ion-content",[["color","light"]],null,null,null,i.ib,i.m)),t["\u0275did"](15,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](17,16384,null,0,c.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](19,16384,null,0,c.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](20,0,null,0,4,"ion-grid",[["style","--ion-grid-padding: 0px;"]],null,null,null,i.mb,i.q)),t["\u0275did"](21,49152,null,0,a.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](22,0,null,0,2,null,null,null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](24,278528,null,0,c.k,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,4,0,"primary"),l(n,13,0,e.tasks.length>0),l(n,15,0,"light"),l(n,17,0,e.loading),l(n,19,0,0==e.getEncodedTasks().length&&!e.loading),l(n,24,0,e.tasks)}),null)}var T=t["\u0275ccf"]("app-integration",d,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-integration",[],null,null,null,y,f)),t["\u0275did"](1,245760,null,0,d,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=e("s7LF"),E=e("iInd"),N=function l(){_classCallCheck(this,l)},D=e("iTUp");e.d(n,"IntegrationPageModuleNgFactory",(function(){return Z}));var Z=t["\u0275cmf"](u,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,T]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,c.n,c.m,[t.LOCALE_ID,[2,c.v]]),t["\u0275mpd"](4608,x.m,x.m,[]),t["\u0275mpd"](4608,a.b,a.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,c.b,c.b,[]),t["\u0275mpd"](1073742336,x.l,x.l,[]),t["\u0275mpd"](1073742336,x.c,x.c,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,E.q,E.q,[[2,E.v],[2,E.m]]),t["\u0275mpd"](1073742336,N,N,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,E.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);
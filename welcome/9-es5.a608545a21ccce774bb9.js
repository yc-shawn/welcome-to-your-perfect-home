(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=function(){},r=u("pMnS"),e=u("SVse"),a=u("iInd"),i=u("bujt"),s=u("Fwaw"),b=u("5GAg"),c=u("omvX"),m=function(){function l(l,n){this._router=l,this.user=n,this.gameStarted=!1}return l.prototype.ngOnInit=function(){},l.prototype.onStartGame=function(){this.user.user?this.gameStarted=!0:this._router.navigateByUrl("/login")},l.prototype.onJoinRoom=function(){this._router.navigateByUrl("/game")},l}(),g=u("hsG4"),_=t.pb({encapsulation:0,styles:[["@-webkit-keyframes zoom-in-out-bounce{0%,100%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}}@keyframes zoom-in-out-bounce{0%,100%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}}[_nghost-%COMP%]{display:block;background:url(/assets/images/cover.jpg) center center/cover no-repeat;height:100vh;width:100vw;overflow:hidden;position:relative}[_nghost-%COMP%]   .home__main-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .home__start-button-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[_nghost-%COMP%]   .home__start-button-container[_ngcontent-%COMP%]   .home__start-button-user-name[_ngcontent-%COMP%]{color:#fff;background-color:rgba(0,0,0,.4);position:absolute;left:50%;min-width:300px;text-align:center;border-radius:5px;padding:8px;transform:translateX(-50%);bottom:100%}[_nghost-%COMP%]   .home__start-button-container[_ngcontent-%COMP%]   .home__start-button[_ngcontent-%COMP%]{padding:16px 36px;font-size:36px;background-color:rgba(0,0,0,.4);color:#fff;border-radius:10px;border:1px solid #fff;box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);cursor:pointer;-webkit-animation:1s infinite zoom-in-out-bounce;animation:1s infinite zoom-in-out-bounce}[_nghost-%COMP%]   .home__main-container[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6);display:flex;color:#fff;padding:24px;border-radius:5px}[_nghost-%COMP%]   .home__main-container[_ngcontent-%COMP%]   .home__main-user-name[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .home__main-container[_ngcontent-%COMP%]   .home__main-user-name[_ngcontent-%COMP%]   .home__main-not-user[_ngcontent-%COMP%]{font-size:13px}[_nghost-%COMP%]   .home__main-container[_ngcontent-%COMP%]   .home__main-section[_ngcontent-%COMP%]{min-width:275px;margin:24px}@media screen and (max-width:576px){[_nghost-%COMP%]   .home__main-container[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .home__main-container[_ngcontent-%COMP%]   .home__main-section[_ngcontent-%COMP%]{min-width:250px;margin:12px 0}}"]],data:{}});function h(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"h1",[["class","home__start-button-user-name"]],null,null,null,null,null)),(l()(),t.Ib(1,null,["Hi, ",""]))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.user.user?null:u.user.user.name)}))}function p(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,4,"div",[["class","home__start-button-container"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,h)),t.qb(2,16384,null,0,e.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(3,0,null,null,1,"button",[["class","home__start-button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onStartGame()&&t),t}),null,null)),(l()(),t.Ib(-1,null,["Start Game"]))],(function(l,n){l(n,2,0,n.component.user.user)}),null)}function f(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,52,"main",[["class","home__main-container"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,12,"section",[["class","home__main-section"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,5,"h1",[["class","home__main-user-name"]],null,null,null,null,null)),(l()(),t.Ib(3,null,[" Hi, "," "])),(l()(),t.rb(4,0,null,null,3,"a",[["class","home__main-not-user"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Db(l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.qb(5,671744,null,0,a.l,[a.k,a.a,e.g],{routerLink:[0,"routerLink"]},null),t.Eb(6,1),(l()(),t.Ib(-1,null,["Not you?"])),(l()(),t.rb(8,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Room"])),(l()(),t.rb(10,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onJoinRoom()&&t),t}),i.b,i.a)),t.qb(12,180224,null,0,s.b,[t.k,b.a,[2,c.a]],{color:[0,"color"]},null),(l()(),t.Ib(-1,0,[" Join "])),(l()(),t.rb(14,0,null,null,38,"section",[["class","home__main-section"]],null,null,null,null,null)),(l()(),t.rb(15,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Ranking (Most win)"])),(l()(),t.rb(17,0,null,null,16,"ol",[],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Zhigang "])),(l()(),t.rb(20,0,null,null,1,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["5"])),(l()(),t.rb(22,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Shawn "])),(l()(),t.rb(24,0,null,null,1,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["3"])),(l()(),t.rb(26,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Xingsi "])),(l()(),t.rb(28,0,null,null,1,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["1"])),(l()(),t.rb(30,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Katherine "])),(l()(),t.rb(32,0,null,null,1,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0"])),(l()(),t.rb(34,0,null,null,1,"h4",[["class","mt-5"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Ranking (Top Score)"])),(l()(),t.rb(36,0,null,null,16,"ol",[],null,null,null,null,null)),(l()(),t.rb(37,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Zhigang "])),(l()(),t.rb(39,0,null,null,1,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["126"])),(l()(),t.rb(41,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Shawn "])),(l()(),t.rb(43,0,null,null,1,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["110"])),(l()(),t.rb(45,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Shawn "])),(l()(),t.rb(47,0,null,null,1,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["105"])),(l()(),t.rb(49,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Xingsi "])),(l()(),t.rb(51,0,null,null,1,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["99"]))],(function(l,n){var u=l(n,6,0,"login");l(n,5,0,u),l(n,12,0,"primary")}),(function(l,n){var u=n.component;l(n,3,0,null==u.user.user?null:u.user.user.name),l(n,4,0,t.Db(n,5).target,t.Db(n,5).href),l(n,11,0,t.Db(n,12).disabled||null,"NoopAnimations"===t.Db(n,12)._animationMode)}))}function d(l){return t.Jb(0,[(l()(),t.gb(16777216,null,null,1,null,p)),t.qb(1,16384,null,0,e.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,f)),t.qb(3,16384,null,0,e.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!u.gameStarted),l(n,3,0,u.gameStarted&&u.user.user)}),null)}var I=t.nb("app-home",m,(function(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"app-home",[],null,null,null,d,_)),t.qb(1,114688,null,0,m,[a.k,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=u("s7LF"),C=u("IP0z"),O=u("Xd0L"),P=u("cUpR"),k=u("/HVE"),x=u("i2L+");u.d(n,"HomeModuleNgFactory",(function(){return v}));var v=t.ob(o,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[r.a,I]],[3,t.j],t.v]),t.Bb(4608,e.k,e.j,[t.s,[2,e.r]]),t.Bb(4608,M.i,M.i,[]),t.Bb(1073742336,e.b,e.b,[]),t.Bb(1073742336,M.h,M.h,[]),t.Bb(1073742336,M.c,M.c,[]),t.Bb(1073742336,C.a,C.a,[]),t.Bb(1073742336,O.c,O.c,[[2,O.a],[2,P.f]]),t.Bb(1073742336,k.b,k.b,[]),t.Bb(1073742336,O.e,O.e,[]),t.Bb(1073742336,s.c,s.c,[]),t.Bb(1073742336,x.a,x.a,[]),t.Bb(1073742336,a.m,a.m,[[2,a.r],[2,a.k]]),t.Bb(1073742336,o,o,[]),t.Bb(1024,a.i,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);
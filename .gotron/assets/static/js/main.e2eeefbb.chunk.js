(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(51)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),l=(a(29),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),p=a(14),d=(a(30),a(31),a(32),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"dialog-list__dialog-mini"},c.a.createElement("div",{className:"dialog-mini__author"},this.props.author),c.a.createElement("div",{className:"dialog-mini__message"},this.props.message))}}]),t}(c.a.Component));d.defaultProps={author:"Unknown",message:"Empty"};var f=d,h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"dialog-list"},this.props.dialogs.map(function(e){return c.a.createElement(f,{author:e.author,message:e.message})}))}}]),t}(c.a.Component);h.defaultProps={dialogs:[]};var b=h,v=(a(33),a(34),a(8)),g=a(12),E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(v.b,{to:this.props.linkTo},c.a.createElement("div",{className:"settings-column__settings-item"},this.props.name))}}]),t}(c.a.Component);E.defaultProps={name:"Unknown",linkTo:"/"};var O=Object(g.e)(function(e){return c.a.createElement(E,e)}),_=[{name:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 COM-\u043f\u043e\u0440\u0442\u043e\u0432",linkTo:"/settings/ports"}],j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"left-column__settings-column"},this.props.settingsItems.map(function(e){return c.a.createElement(O,e)}))}}]),t}(c.a.Component);j.defaultProps={settingsItems:_};var w=j,N=(a(43),c.a.createElement("svg",{"aria-hidden":"true",width:"32",height:"32",focusable:"false","data-prefix":"fas","data-icon":"comments",className:"svg-inline--fa fa-comments fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},c.a.createElement("path",{fill:"currentColor",d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"}))),y=c.a.createElement("svg",{"aria-hidden":"true",width:"32",height:"32",focusable:"false","data-prefix":"fas","data-icon":"cog",className:"svg-inline--fa fa-cog fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{fill:"currentColor",d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"})),C=a(21),k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location.pathname.match(/\/settings/gi),t=C({"tab-bar__dialogs-tab":!0,"tab-bar__tab--checked":!e}),a=C({"tab-bar__settings-tab":!0,"tab-bar__tab--checked":e});return c.a.createElement("div",{className:"left-column__tab-bar"},c.a.createElement(v.b,{to:"/"},c.a.createElement("div",{className:t},N)),c.a.createElement(v.b,{to:"/settings"},c.a.createElement("div",{className:a},y)))}}]),t}(c.a.Component);k.defaultProps={};var x=Object(g.e)(function(e){return c.a.createElement(k,e)}),M=[{author:"some@mail.ru",message:"\u043f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0434\u0435\u043b\u0430"},{author:"vasyan122@gmail.com",message:"\u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u0439\u0434\u0435\u043c \u0432 \u0442\u0435\u0430\u0442\u0440?"},{author:"hello55@mail.ru",message:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0443 \u0432\u0430\u0441 \u0437\u0430\u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"},{author:"info@mems.ru",message:"\u0421\u0432\u0435\u0436\u0430\u0439\u0448\u0438\u0435 \u043c\u0435\u043c\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u043f\u0435\u0447\u043a\u0438"}],P=(a(44),c.a.createElement("svg",{width:"20",height:"20","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"globe-americas",class:"svg-inline--fa fa-globe-americas fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},c.a.createElement("path",{fill:"currentColor",d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"}))),z=c.a.createElement("svg",{width:"24",height:"24","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})),L=a(21),S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.connection,t=L({"status-bar__button":!0,"status-bar__connection--connected":e,"status-bar__connection--disconnected":!e}),a=L({"status-bar__button":!0,"status-bar__new-letter--connected":e,"status-bar__new-letter--disconnected":!e});return c.a.createElement("div",{className:"left-column__status-bar"},c.a.createElement("input",{type:"text",className:"status-bar__search",placeholder:"\u041f\u043e\u0438\u0441\u043a"}),c.a.createElement("div",{className:t},P),c.a.createElement("div",{className:a},z))}}]),t}(c.a.Component);S.defaultProps={connection:!1};var q=S,B=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"left-column"},c.a.createElement(q,{connection:!0}),c.a.createElement(g.c,null,c.a.createElement(g.a,{path:"/settings",render:function(){return c.a.createElement(w,null)}}),c.a.createElement(g.a,{render:function(){return c.a.createElement(b,{dialogs:[].concat(Object(p.a)(M),Object(p.a)(M),Object(p.a)(M))})}})),c.a.createElement(x,null))}}]),t}(c.a.Component);B.defaultProps={};var U=B,V=(a(45),a(46),a(47),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"letter-reading__tool-panel"},c.a.createElement("div",{className:"tool-panel__delete-button"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}}]),t}(c.a.Component));V.defaultProps={};var I=V,T=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"right-column__letter-reading"},c.a.createElement("div",{className:"letter-reading__content"},c.a.createElement("div",{className:"letter-reading__info"},c.a.createElement("div",{className:"letter-reading__author"},c.a.createElement("div",{className:"letter-reading__author__label"},"\u041e\u0442 \u043a\u043e\u0433\u043e:"),c.a.createElement("div",{className:"letter-reading__author__name"},this.props.author))),c.a.createElement("div",{className:"letter-reading__message"},this.props.message)),c.a.createElement(I,null))}}]),t}(c.a.Component);T.defaultProps={author:"Unknown",responder:"Unknown",message:"Empty"};var F=T,H=(a(48),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"right-column__detailed-settings"},c.a.createElement("div",null,"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442 :("))}}]),t}(c.a.Component));H.defaultProps={};var J=H,A=(a(49),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"portsSelect",value:function(){return this.props.portsList.map(function(e){return c.a.createElement("option",{value:e},e)})}},{key:"portsSpeeds",value:function(){return this.props.speeds.map(function(e){return c.a.createElement("option",{value:e},e," \u0431\u0438\u0442/\u0441")})}},{key:"render",value:function(){return c.a.createElement("div",{className:"right-column__detailed-settings"},c.a.createElement("div",{className:"detailed-settings__com-ports"},c.a.createElement("form",{id:"com-ports-form"},c.a.createElement("h2",{className:"com-ports__title"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 COM-\u043f\u043e\u0440\u0442\u044b"),c.a.createElement("div",null,c.a.createElement("label",{className:"com-ports__label",htmlFor:"in-com"},"\u0412\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u043f\u043e\u0440\u0442"),c.a.createElement("select",{id:"in-com"},this.portsSelect()),c.a.createElement("select",{className:"com-ports__speed",id:"in-com-speed"},this.portsSpeeds())),c.a.createElement("div",null,c.a.createElement("label",{className:"com-ports__label",htmlFor:"out-com"},"\u0418\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u043f\u043e\u0440\u0442"),c.a.createElement("select",{id:"out-com"},this.portsSelect()),c.a.createElement("select",{className:"com-ports__speed",id:"out-com-speed"},this.portsSpeeds())),c.a.createElement("div",{className:"com-ports__apply-button"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"))))}}]),t}(c.a.Component));A.defaultProps={portsList:[],speeds:[50,75,110,150,300,600,1200,2400,4800,9600,19200,38400,57600,115200].reverse()};var D=A,G=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"right-column"},c.a.createElement(g.a,{exact:!0,path:"/",render:function(){return c.a.createElement(F,{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}}),c.a.createElement(g.a,{exact:!0,path:"/settings",render:function(){return c.a.createElement(J,null)}}),c.a.createElement(g.a,{exact:!0,path:"/settings/ports",render:function(){return c.a.createElement(D,{portsList:["COM1","COM2","COM3","COM4"]})}}))}}]),t}(c.a.Component);G.defaultProps={};var K=G,Q=(a(50),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v.a,null,c.a.createElement(U,null),c.a.createElement(K,null)))}}]),t}(n.Component));s.a.render(c.a.createElement(Q,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e2eeefbb.chunk.js.map
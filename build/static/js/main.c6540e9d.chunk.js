(this["webpackJsonptask-management-react"]=this["webpackJsonptask-management-react"]||[]).push([[0],{325:function(e,t,r){},328:function(e,t,r){},463:function(e,t,r){"use strict";r.r(t);var o=r(18),c=r(0),n=r.n(c),s=r(13),a=r.n(s),i=(r(325),r(127)),O=(r(328),r(85)),u=r(534),j=r(533),d=r(286);Object(i.config)();var S=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_HOST||"localhost",l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_PORT||"3030";var h={login:function(e){var t=e.username,r=e.password,o=new Request("http://".concat(S,":").concat(l,"/auth/signin"),{method:"POST",body:JSON.stringify({email:t,password:r}),headers:new Headers({"Content-Type":"application/json"})});return fetch(o).then((function(e){if(200!==e.status)throw new Error(e.statusText);return e.json()})).then((function(e){if(!e.token)throw new Error("failed to find token on response");localStorage.setItem("auth",JSON.stringify(e))}))},logout:function(){return localStorage.removeItem("auth"),Promise.resolve()},checkAuth:function(){return localStorage.getItem("auth")?Promise.resolve():Promise.reject()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("auth"),Promise.reject()):Promise.resolve()},getPermissions:function(e){return Promise.resolve()},getIdentity:function(){return Promise.resolve()}},_=r(67),b=r(535),E=r(536),P=r(526),T=r(527),v=r(528),m=r(540),f=function(e){return Object(o.jsx)(b.a,Object(_.a)(Object(_.a)({},e),{},{children:Object(o.jsxs)(E.a,{children:[Object(o.jsx)(P.a,{source:"id"}),Object(o.jsx)(P.a,{source:"title"}),Object(o.jsx)(P.a,{source:"description"}),Object(o.jsx)(T.a,{source:"status",render:function(e){var t;return"".concat(null!==(t=p[e.status])&&void 0!==t?t:e.status)}}),Object(o.jsx)(v.a,{basePath:"/tasks"}),Object(o.jsx)(m.a,{basePath:"/tasks"})]})}))},p={OPEN:"Open",IN_PROGRESS:"In Progress",DONE:"Done"},x=r(545),R=r(537),g=r(546),D=function(e){return Object(o.jsx)(x.a,Object(_.a)(Object(_.a)({},e),{},{children:Object(o.jsxs)(R.a,{redirect:"list",children:[Object(o.jsx)(g.a,{source:"title"}),Object(o.jsx)(g.a,{source:"description"})]})}))},I=r(539),C=r(547),N=function(e){return Object(o.jsx)(I.a,Object(_.a)(Object(_.a)({},e),{},{children:Object(o.jsxs)(R.a,{children:[Object(o.jsx)(g.a,{disabled:!0,source:"id"}),Object(o.jsx)(g.a,{source:"title"}),Object(o.jsx)(g.a,{source:"description"}),Object(o.jsx)(C.a,{source:"status",choices:[{id:"OPEN",name:"Open"},{id:"IN_PROGRESS",name:"In Progress"},{id:"DONE",name:"Done"}]})]})}))};Object(i.config)();var H=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_HOST||"localhost",A=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_PORT||"3030",k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers||(t.headers=new Headers({Accept:"application/json"}));try{var r=JSON.parse(localStorage.getItem("auth")),o=r.token;t.headers.set("Authorization","Bearer ".concat(o))}catch(c){Promise.reject()}return O.a.fetchJson(e,t)};var K=function(){return Object(o.jsx)(u.a,{authProvider:h,dataProvider:Object(d.a)("http://".concat(H,":").concat(A),k),children:Object(o.jsx)(j.a,{name:"tasks",list:f,create:D,edit:N})})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(K,{})}),document.getElementById("root"))}},[[463,1,2]]]);
//# sourceMappingURL=main.c6540e9d.chunk.js.map
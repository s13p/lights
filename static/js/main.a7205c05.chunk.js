(this["webpackJsonp@login-with-metamask/frontend"]=this["webpackJsonp@login-with-metamask/frontend"]||[]).push([[0],{117:function(e,t,n){},120:function(e,t){},125:function(e,t){},127:function(e,t){},137:function(e,t){},139:function(e,t){},165:function(e,t){},166:function(e,t){},171:function(e,t){},173:function(e,t){},180:function(e,t){},199:function(e,t){},220:function(e,t,n){},221:function(e,t,n){},223:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);n(117);var o,c=n(113),a=n(9),i=n(114),r=n.n(i),s=n(23),u=(n(220),n(29)),d=n(58),l=(n(221),n(115)),b=n.n(l),O=n(2),h=function(e){var t=e.onLoggedIn,n=Object(a.useState)(!1),c=Object(s.a)(n,2),i=c[0],r=c[1],l=function(e){var t=e.publicAddress,n=e.signature;return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/login",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/auth"),{body:JSON.stringify({publicAddress:t,signature:n}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},h=function(){var e=Object(d.a)(Object(u.a)().mark((function e(t){var n,c,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.publicAddress,c=t.nonce,e.prev=1,e.next=4,o.eth.personal.sign("I am signing my one-time nonce: ".concat(c),n,"");case 4:return a=e.sent,e.abrupt("return",{publicAddress:n,signature:a});case 8:throw e.prev=8,e.t0=e.catch(1),new Error("You need to sign the message to be able to log in.");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/login",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/users"),{body:JSON.stringify({publicAddress:e}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},f=function(){var e=Object(d.a)(Object(u.a)().mark((function e(){var n,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=3;break}return window.alert("Please install MetaMask first."),e.abrupt("return");case 3:if(o){e.next=14;break}return e.prev=4,e.next=7,window.ethereum.enable();case 7:o=new b.a(window.ethereum),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),window.alert("You need to allow MetaMask."),e.abrupt("return");case 14:return e.next=16,o.eth.getCoinbase();case 16:if(n=e.sent){e.next=20;break}return window.alert("Please activate MetaMask first."),e.abrupt("return");case 20:c=n.toLowerCase(),r(!0),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/login",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/users?publicAddress=").concat(c)).then((function(e){return e.json()})).then((function(e){return e.length?e[0]:j(c)})).then(h).then(l).then(t).catch((function(e){window.alert(e),r(!1)}));case 23:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["Please select your login method.",Object(O.jsx)("br",{}),"For the purpose of this demo, only MetaMask login is implemented."]}),Object(O.jsx)("button",{className:"Login-button Login-mm",onClick:f,children:i?"Loading...":"Login with MetaMask"}),Object(O.jsx)("button",{className:"Login-button Login-fb",disabled:!0,children:"Login with Facebook"}),Object(O.jsx)("button",{className:"Login-button Login-email",disabled:!0,children:"Login with Email"})]})},j=n(10),f=(n(223),n(59)),p=n(116),g=n.n(p),_=function(e){var t=e.auth,n=e.onLoggedOut,o=Object(a.useState)({loading:!1,user:void 0,username:""}),c=Object(s.a)(o,2),i=c[0],r=c[1];Object(a.useEffect)((function(){var e=t.accessToken,n=Object(f.a)(e).payload.id;fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/login",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/users/").concat(n),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return r((function(t){return Object(j.a)(Object(j.a)({},t),{},{user:e})}))})).catch(window.alert)}),[t]);var u=t.accessToken,d=Object(f.a)(u).payload.publicAddress,l=i.loading,b=i.user,h=b&&b.username;return Object(O.jsxs)("div",{className:"Profile",children:[Object(O.jsxs)("p",{children:["Logged in as ",Object(O.jsx)(g.a,{seed:d})]}),Object(O.jsxs)("div",{children:["My username is ",h?Object(O.jsx)("pre",{children:h}):"not set."," ","My publicAddress is ",Object(O.jsx)("pre",{children:d})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"username",children:"Change username: "}),Object(O.jsx)("input",{name:"username",onChange:function(e){var t=e.target.value;r(Object(j.a)(Object(j.a)({},i),{},{username:t}))}}),Object(O.jsx)("button",{disabled:l,onClick:function(){var e=t.accessToken,n=i.user,o=i.username;r(Object(j.a)(Object(j.a)({},i),{},{loading:!0})),n?fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/login",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/users/").concat(n.id),{body:JSON.stringify({username:o}),headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},method:"PATCH"}).then((function(e){return e.json()})).then((function(e){return r(Object(j.a)(Object(j.a)({},i),{},{loading:!1,user:e}))})).catch((function(e){window.alert(e),r(Object(j.a)(Object(j.a)({},i),{},{loading:!1}))})):window.alert("The user id has not been fetched yet. Please try again in 5 seconds.")},children:"Submit"})]}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:n,children:"Logout"})})]})},S=n.p+"static/media/logo.103b5fa1.svg",m="login-with-metamask:auth",E=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem(m),t=e&&JSON.parse(e);o({auth:t})}),[]);var c=n.auth;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:S,className:"App-logo",alt:"logo"}),Object(O.jsx)("h1",{className:"App-title",children:"Welcome to Login with MetaMask Demo"})]}),Object(O.jsx)("div",{className:"App-intro",children:c?Object(O.jsx)(_,{auth:c,onLoggedOut:function(){localStorage.removeItem(m),o({auth:void 0})}}):Object(O.jsx)(h,{onLoggedIn:function(e){localStorage.setItem(m,JSON.stringify(e)),o({auth:e})}})})]})};Object(c.config)({path:".env.production"}),r.a.render(Object(O.jsx)(E,{}),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.a7205c05.chunk.js.map
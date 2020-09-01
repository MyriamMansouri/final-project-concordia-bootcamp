(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{39:function(e,n,t){e.exports=t.p+"static/media/user-marker.806c9d4b.svg"},40:function(e,n,t){e.exports=t.p+"static/media/marker.a4717a62.svg"},41:function(e,n,t){e.exports=t.p+"static/media/compass.2cc3f756.svg"},42:function(e){e.exports=JSON.parse('[{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]}]')},44:function(e,n,t){e.exports=t(85)},85:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(16),c=t.n(o),i=t(19),l=t(4),u={currentUser:null,status:"idle",error:null},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUEST_USER":return Object(l.a)(Object(l.a)({},e),{},{status:"loading",error:null});case"RECEIVE_USER":return Object(l.a)(Object(l.a)({},e),{},{currentUser:n.user,status:"idle",error:null});case"RECEIVE_USER_ERROR":return Object(l.a)(Object(l.a)({},e),{},{status:"error",error:n.error});case"ADD_USER":case"UPDATE_USER":return Object(l.a)(Object(l.a)({},e),{},{currentUser:n.user,status:"idle",error:null});case"RESET_USER":return u;default:return e}},f=function(e){return!!e.user.currentUser},d=function(e){return e.user.status},p=function(e){return e.user.currentUser},m=function(e){return e.user.error},b=t(20),E={currentMarkers:null,status:"idle"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUEST_MARKERS":return Object(l.a)(Object(l.a)({},e),{},{status:"loading"});case"RECEIVE_MARKERS":return Object(l.a)(Object(l.a)({},e),{},{currentMarkers:n.markers,status:"idle"});case"RECEIVE_MARKERS_ERROR":return Object(l.a)(Object(l.a)({},e),{},{status:"error"});case"ADD_MARKER":case"VOTE_MARKER":return Object(l.a)(Object(l.a)({},e),{},{currentMarkers:Object(l.a)(Object(l.a)({},e.currentMarkers),{},Object(b.a)({},n.marker._id,Object(l.a)({},n.marker))),status:"idle"});default:return e}},h=function(e){return e.markers.currentMarkers?Object.values(e.markers.currentMarkers):null},v={mapCenter:null,userPosition:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CENTER":return Object(l.a)(Object(l.a)({},e),{},{mapCenter:Object(l.a)({},n.center)});case"SET_USER_POSITION":return Object(l.a)(Object(l.a)({},e),{},{userPosition:Object(l.a)({},n.userPosition)});default:return e}},j=function(e){return e.map.mapCenter},y=function(e){return e.map.userPosition},x=Object(i.b)({user:s,markers:g,map:O}),k=function(e){return Object(i.c)(x,e,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},w=function(e){return{type:"RECEIVE_USER",user:e}},R=function(e){return{type:"RECEIVE_USER_ERROR",error:e}},S=function(e){return{type:"UPDATE_USER",user:e}},_=function(e){return{type:"SET_CENTER",center:e}},C=t(43),U=t(3),T=t(1),M=t(9),I=t(8),P=t(2),A="rgba(53, 53, 53, 1)",z="rgba(33, 33, 33, 0.1)",N="#5d00ff",L="#f5523c",D="crimson",F="green",q="50px 20px 20px 20px";function V(){var e=Object(T.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tfont-family: 'Roboto', sans-serif;\n\tcolor: ","\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nsection {\n\tpadding:","\n}\n"]);return V=function(){return e},e}var K=Object(P.a)(V(),A,q),B=t(7);function J(){var e=Object(T.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: ",";\n  padding: 10px 25px;\n  border: 2px solid\n    ",";\n  cursor: pointer;\n"]);return J=function(){return e},e}var Q=P.b.button(J(),(function(e){return"accent"===e.theme?L:N}),(function(e){return"accent"===e.theme?L:N})),G=function(e){var n=e.children,t=e.theme,r=e.style;return a.a.createElement(Q,{theme:t,style:r},n)};function X(){var e=Object(T.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px;\n  line-height: 20px;\n  margin-bottom:10px;\n"]);return X=function(){return e},e}function H(){var e=Object(T.a)(["\n  display: none;\n"]);return H=function(){return e},e}var W=P.b.label(H()),Y=P.b.input(X());function Z(){var e=Object(T.a)(["\n  margin: 10px 0;\n  text-align: center;\n"]);return Z=function(){return e},e}function $(){var e=Object(T.a)(["\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 1.1rem;\n"]);return $=function(){return e},e}function ee(){var e=Object(T.a)(["\n  margin: 10px 0;\n  font-weight: bold;\n  font-size: 1.3rem;\n  width: 100%;\n"]);return ee=function(){return e},e}function ne(){var e=Object(T.a)(["\n  margin-bottom: 20px;\n  font-weight: bold;\n  font-size: 1.5rem;\n  width: 100%;\n"]);return ne=function(){return e},e}var te=P.b.h1(ne()),re=P.b.h2(ee()),ae=P.b.h3($()),oe=P.b.p(Z());function ce(){var e=Object(T.a)(["\n  color: ",";\n  margin: 10px 0;\n"]);return ce=function(){return e},e}var ie=P.b.div(ce(),D),le=function(e){var n=e.children;return a.a.createElement(ie,null,n)},ue=t(33),se=t.n(ue),fe=function(){return a.a.createElement(se.a,{type:"Puff",color:"#00BFFF",height:50,width:50,timeout:3e3})},de=function(){var e=Object(U.b)(),n=Object(I.g)(),t=Object(U.c)(p),r=Object(U.c)(d),o=Object(U.c)(m),c=a.a.useState(""),i=Object(B.a)(c,2),l=i[0],u=i[1],s=a.a.useState(""),f=Object(B.a)(s,2),b=f[0],E=f[1],g=a.a.useState(""),h=Object(B.a)(g,2),v=h[0],O=h[1];return a.a.createElement("section",null,"loading"===r?a.a.createElement(fe,null):!t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(te,null,"Sign up"),a.a.createElement("form",{onSubmit:function(t){e({type:"REQUEST_USER"}),t.preventDefault(),fetch("/api/users/signup",{method:"POST",body:JSON.stringify({email:l,password:b,name:v}),headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(t){201===t.status?(e(function(e){return{type:"ADD_USER",user:e}}(t.user)),n.push("/map")):e(R({message:t.message}))})).catch((function(n){return e(R(n))}))}},a.a.createElement("div",null,a.a.createElement(W,{htmlFor:"email"},"What's your email"),a.a.createElement(Y,{id:"email",name:"email",type:"email",value:l,onChange:function(e){return u(e.target.value)},placeholder:"Enter your email.",required:!0})),a.a.createElement("div",null,a.a.createElement(W,{htmlFor:"password"},"Create a password"),a.a.createElement(Y,{id:"password",name:"password",type:"password",value:b,onChange:function(e){return E(e.target.value)},placeholder:"Create a password.",required:!0})),a.a.createElement("div",null,a.a.createElement(W,{htmlFor:"name"},"What sould we call you"),a.a.createElement(Y,{id:"name",name:"name",value:v,type:"text",onChange:function(e){return O(e.target.value)},placeholder:"Enter a profile name.",required:!0})),a.a.createElement(G,{theme:"accent",style:{margin:"40px 0 20px",width:"100%"}},"SIGN UP")),a.a.createElement(oe,null,"Have an account? ",a.a.createElement(M.b,{to:"/login"},"Log in"),"."),o&&a.a.createElement(le,null,o.message)))},pe=function(){var e=Object(U.b)(),n=Object(I.g)(),t=Object(U.c)(d),r=Object(U.c)(m),o=Object(U.c)(p),c=a.a.useState(""),i=Object(B.a)(c,2),l=i[0],u=i[1],s=a.a.useState(""),f=Object(B.a)(s,2),b=f[0],E=f[1];return a.a.createElement(a.a.Fragment,null,"loading"===t&&a.a.createElement(fe,null),"loading"!==t&&!o&&a.a.createElement("section",null,a.a.createElement(te,null,"Login"),a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"REQUEST_USER"}),fetch("/api/users/login",{method:"POST",body:JSON.stringify({email:l,password:b}),credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){200===t.status?(e(w(t.user)),n.push("/map")):e(R({message:t.message}))})).catch((function(n){return e(R(n))}))}},a.a.createElement("div",null,a.a.createElement(W,{htmlFor:"email"},"Email"),a.a.createElement(Y,{id:"email",name:"email",type:"email",value:l,onChange:function(e){return u(e.target.value)},placeholder:"Email address",required:!0})),a.a.createElement("div",null,a.a.createElement(W,{htmlFor:"password"},"Password"),a.a.createElement(Y,{id:"password",name:"password",type:"password",value:b,onChange:function(e){return E(e.target.value)},placeholder:"Password",required:!0})),a.a.createElement(G,{style:{margin:"40px 0 20px",width:"100%"}},"LOG IN")),a.a.createElement(oe,null,"Don't have an account ? ",a.a.createElement(M.b,{to:"/signup"},"Sign up"),"."),"error"===t&&r&&a.a.createElement(le,null,r.message)))};function me(){var e=Object(T.a)(["\n  opacity: 1;\n  position: relative;\n  background-color: #ffffff;\n  display: flex;\n  overflow-x: scroll;\n  width: ",";\n  height: ",";\n  padding: ",";\n  box-sizing: border-box;\n"]);return me=function(){return e},e}function be(){var e=Object(T.a)(["\n  z-index: ",";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: ",";\n  right: ",";\n  left: ",";\n  bottom: ",";\n  box-sizing: border-box;\n  transition: "," 250ms\n    ease-out;\n  &.toggled {\n    background-color: rgba(0, 0, 0, 0.5);\n    top: ",";\n    right: 0;\n    left: ",";\n    bottom: 0;\n  }\n"]);return be=function(){return e},e}var Ee=function(e){var n=e.open,t=e.side,r=e.backdrop,o=e.hasPriority,c=e.children,i=e.style;return a.a.createElement(ge,{className:n&&"toggled",side:t,backdrop:r,hasPriority:o},a.a.createElement(he,{style:i,backdrop:r},c))},ge=P.b.div(be(),(function(e){return e.hasPriority&&!0===e.hasPriority?1e3:null}),(function(e){return e.side&&"top"===e.side?"-100%":null}),(function(e){return e.side&&"right"===e.side?"-100%":null}),(function(e){return e.side&&"left"===e.side?"-100%":null}),(function(e){return e.side&&"bottom"===e.side?"-100%":null}),(function(e){return e.side&&e.side?e.side:""}),(function(e){return e.side&&"top"===e.side?0:null}),(function(e){return e.side&&"left"===e.side?0:null})),he=P.b.div(me(),(function(e){return e.backdrop&&!0===e.backdrop?"calc(100% - 20px)":"100%"}),(function(e){return e.backdrop&&!0===e.backdrop?"calc(100% - 20px)":"100%"}),q),ve=function(){return a.a.createElement(Ee,null,"The vast emptiness of the Tartar plains. You hear the wind ?")},Oe=t(15),je=t(34),ye=t.n(je),xe=t(21),ke=t(35),we=t(36),Re=t(37),Se=t(38),_e=function(){return a.a.createElement(xe.Icon,{icon:ke.buttonClose,size:56})},Ce=function(e){var n=e.style;return a.a.createElement(xe.Icon,{style:n,icon:we.happyOutline,size:47})},Ue=function(e){var n=e.style;return a.a.createElement(xe.Icon,{style:n,icon:Re.androidSad,size:47})},Te=function(e){var n=e.style;return a.a.createElement(xe.Icon,{style:n,icon:Se.crosshair,size:47})};function Me(){var e=Object(T.a)(["\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  border:none;\n  outline:none;\n  cursor: pointer;\n  text-align: left;\n  &:active {\n    color: inherit;\n  }\n"]);return Me=function(){return e},e}var Ie=P.b.button(Me());function Pe(){var e=Object(T.a)(["\n  background: url(",") center no-repeat ",";\n  background-size: cover;\n  width: 100%;\n  padding-top: 100%; /* 1:1 Aspect Ratio -- obviously some kind of css evil magic */\n  position: relative;\n  box-sizing: border-box;\n"]);return Pe=function(){return e},e}var Ae=P.b.div(Pe(),(function(e){return e.url}),z),ze=function(e){var n=e.url;return a.a.createElement(Ae,{url:n})};function Ne(){var e=Object(T.a)(["\n  margin: 10px 0;\n"]);return Ne=function(){return e},e}var Le=P.b.input(Ne()),De=function(e){var n=e.setPicture,t=e.setPicUrl,r=a.a.useRef(null);return a.a.createElement(Le,{ref:r,type:"file",name:"marker-pic",onChange:function(e){return function(e){var r=e.target.files[0];if(r){var a=new FileReader;a.addEventListener("load",(function e(){t(this.result),a.removeEventListener("load",e)})),n(r),a.readAsDataURL(r)}}(e)},required:!0})};function Fe(){var e=Object(T.a)(["\n  color: ",";\n  margin: 0 auto;\n"]);return Fe=function(){return e},e}function qe(){var e=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"]);return qe=function(){return e},e}var Ve={display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",zIndex:100},Ke=P.b.div(qe()),Be=Object(P.b)(Ie)(Fe(),A),Je=function(e){var n=e.open,t=e.setOpen,r=e.position,o=Object(U.b)(),c=Object(U.c)(p)._id,i=a.a.useState(""),l=Object(B.a)(i,2),u=l[0],s=l[1],f=a.a.useState(""),d=Object(B.a)(f,2),m=d[0],b=d[1],E=a.a.useState(null),g=Object(B.a)(E,2),h=g[0],v=g[1],O=a.a.useState(""),j=Object(B.a)(O,2),y=j[0],x=j[1],k=a.a.useState(""),w=Object(B.a)(k,2),R=w[0],_=w[1];a.a.useEffect((function(){s(""),b(""),v(null),x(""),_("")}),[n]);return a.a.createElement(Ke,null,a.a.createElement(Ee,{open:n,side:"bottom",style:Ve,backdrop:!0,hasPriority:!0},a.a.createElement("div",null,a.a.createElement(ze,{url:y}),a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("marker-pic",h),n.append("description",m),n.append("title",u),n.append("lat",r.lat),n.append("lng",r.lng),n.append("userId",c),fetch("/api/markers",{method:"POST",body:n,headers:{}}).then((function(e){return e.json()})).then((function(e){201===e.status?(o({type:"ADD_MARKER",marker:e.marker}),fetch("/api/users/".concat(c),{method:"PUT",body:JSON.stringify({action:"create",markerId:e.marker._id}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){200===e.status&&o(S(e.user))})).catch((function(e){return console.log(e)})),t(!1)):_(e.message)})).catch((function(e){return console.log(e)}))},encType:"multipart/form-data"},n&&a.a.createElement(De,{setPicture:v,setPicUrl:x}),a.a.createElement("div",null,a.a.createElement(W,{htmlFor:"title"},"Title"),a.a.createElement(Y,{id:"title",name:"title",type:"text",value:u,onChange:function(e){return s(e.target.value)},placeholder:"Give a title to your pin",required:!0})),a.a.createElement("div",null,a.a.createElement(W,{htmlFor:"description"},"Description"),a.a.createElement(Y,{id:"description",name:"description",type:"text",value:m,onChange:function(e){return b(e.target.value)},placeholder:"Add a description"})),a.a.createElement(G,null,"CREATE")),a.a.createElement(le,null,R)),a.a.createElement(Be,{onClick:function(){return t(!1)}},a.a.createElement(_e,null))))};function Qe(){var e=Object(T.a)(["\n  width: 270px;\n  min-height: 200px;\n  display: flex;\n  flex-flow: column nowrap;\n  background-color: #ffffff;\n  border: 1px solid ",";\n"]);return Qe=function(){return e},e}var Ge=function(e){var n=e.children;return a.a.createElement(Xe,null,n)},Xe=P.b.div(Qe(),z);function He(){var e=Object(T.a)(["\n  border-radius: 100%;\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n"]);return He=function(){return e},e}var We=a.a.forwardRef((function(e,n){var t=e.disabled,r=e.type;return a.a.createElement(Ye,{ref:n,disabled:t,type:r},"up"===r?a.a.createElement(Ce,{style:{color:t?F:A}}):a.a.createElement(Ue,{style:{color:t?D:A}}))})),Ye=P.b.button(He()),Ze=We;function $e(){var e=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return $e=function(){return e},e}function en(){var e=Object(T.a)(["\n  padding: 20px 0 10px 10px;\n  width: 100%;\n"]);return en=function(){return e},e}function nn(){var e=Object(T.a)(["\n  font-size: 1rem;\n  margin: 10px;\n  text-align: center;\n  border: solid 1px ",";\n  border-radius: 20px;\n"]);return nn=function(){return e},e}var tn=P.b.div(nn(),z),rn=P.b.div(en()),an=P.b.div($e()),on=function(e){var n=e.marker,t=Object(U.b)(),r=Object(U.c)(p),o=n.lat,c=n.lng,i=n.url,l=n.title,u=n.description,s=n._id,f=n.upvoteUsers,d=n.downvoteUsers,m=a.a.useState(null),b=Object(B.a)(m,2),E=b[0],g=b[1],h=a.a.useRef(null),v=a.a.useRef(null);a.a.useEffect((function(){E&&fetch("api/markers/".concat(s),{method:"PUT",body:JSON.stringify({action:E,userId:r._id}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if(200!==e.status)throw e.message;t(function(e){return{type:"VOTE_MARKER",marker:e}}(e.marker)),fetch("api/users/".concat(r._id),{method:"PUT",body:JSON.stringify({action:E,markerId:s}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t(S(e.user))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}),[E,s,r._id,t]);var O=function(e,n){return!(!r.upvotedMarkers&&!r.downvotedMarkers)&&!(!e||!e[n])};return a.a.createElement(Oe.b,{options:{enableEventPropagation:!1,closeBoxURL:""},position:{lat:o,lng:c},onLoad:function(){h.current.addEventListener("click",(function(){g("upvote")})),v.current.addEventListener("click",(function(){g("downvote")}))},onUnmount:function(){h.current.removeEventListener("click",(function(){g("upvote")})),v.current.removeEventListener("click",(function(){g("downvote")}))}},a.a.createElement(Ge,null,i&&a.a.createElement(ze,{url:i}),a.a.createElement(an,null,a.a.createElement(rn,null,a.a.createElement(ae,null,l)," ",a.a.createElement("p",null,u)),a.a.createElement(tn,null,a.a.createElement(Ze,{ref:h,disabled:O(r.upvotedMarkers,s),type:"up"},"Up"),(f?Object.keys(f).length:0)-(d?Object.keys(d).length:0),a.a.createElement(Ze,{ref:v,disabled:O(r.downvotedMarkers,s),type:"down"},"Down")))))},cn=t(39),ln=t.n(cn),un=t(40),sn=t.n(un),fn=function(e){var n=e.marker,t=e.closeInfoBoxes,o=e.setCloseInfoBoxes,c=e.createdByCurrUser,i=e.clusterer,l=n.lat,u=n.lng,s=a.a.useState(!1),f=Object(B.a)(s,2),d=f[0],p=f[1];Object(r.useEffect)((function(){t&&p(!1)}),[t]);return a.a.createElement(Oe.d,{key:n._id,position:{lat:l,lng:u},clusterer:i,onMouseDown:function(){o(!0)},onMouseUp:function(){p(!d),o(!1)},icon:c?ln.a:sn.a},d&&a.a.createElement(on,{marker:n}))},dn=t(41),pn=t.n(dn),mn=t(42);function bn(){var e=Object(T.a)(["\n  cursor: pointer;\n  float: right;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(255, 255, 255);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  border-radius:100%;\n"]);return bn=function(){return e},e}var En=function(){var e=Object(I.g)(),n=Object(U.b)(),t=Object(U.c)(y);return a.a.createElement(gn,{onClick:function(){n(_(Object(l.a)({},t))),e.push("/map")}},a.a.createElement(Te,null))},gn=Object(P.b)(Ie)(bn()),hn={width:"100%",height:"725px"},vn=a.a.memo((function(){var e=Object(U.b)(),n=(Object(I.h)(),Object(U.c)(h)),t=Object(U.c)(p),r=Object(U.c)(j),o=Object(U.c)(y),c=a.a.useState(null),i=Object(B.a)(c,2),u=(i[0],i[1]),s=a.a.useState(!1),f=Object(B.a)(s,2),d=f[0],m=f[1],b=a.a.useState(null),E=Object(B.a)(b,2),g=E[0],v=E[1],O=a.a.useState(!1),x=Object(B.a)(O,2),k=x[0],w=x[1],R=new URLSearchParams(Object(I.h)().search),S=R.get("lat")&&R.get("lng")?{lat:Number(R.get("lat")),lng:Number(R.get("lng"))}:null;a.a.useEffect((function(){e({type:"REQUEST_MARKERS"}),fetch("/api/markers").then((function(e){return e.json()})).then((function(n){e(function(e){return{type:"RECEIVE_MARKERS",markers:e}}(n.markers))})).catch((function(n){return e({type:"RECEIVE_MARKERS_ERROR",error:t});var t}));var n=null;return"geolocation"in navigator&&(n=navigator.geolocation.watchPosition((function(n){var t={lat:n.coords.latitude,lng:n.coords.longitude};e(function(e){return{type:"SET_USER_POSITION",userPosition:e}}(Object(l.a)({},t))),e(_(S?Object(l.a)({},S):t))}))),function(){n&&navigator.geolocation.clearWatch(n)}}),[e]),a.a.useEffect((function(){e(_({lat:45.5,lng:-73.56}))}),[e]);var C=a.a.useCallback((function(e){u(e)}),[]),T=function(e){return e===t._id};return a.a.createElement(Oe.c,{googleMapsApiKey:"AIzaSyC0iGg93-M5LcTMeAzgbukRapS9U3krUM0",loadingElement:a.a.createElement(fe,null)},a.a.createElement(ye.a,{onShortPress:function(e){},onLongPress:function(e){m(!d)},longPressTime:1e3},a.a.createElement(Oe.a,{mapContainerStyle:hn,zoom:17,center:r,options:{fullscreenControl:!1,streetViewControl:!1,zoomControl:!1,styles:mn,mapTypeId:"satellite"},onMouseDown:function(e){var n=e.latLng.lat(),t=e.latLng.lng();v({lat:n,lng:t}),w(!0)},onMouseUp:function(){w(!1)},onLoad:C},a.a.createElement(Oe.d,{position:S?o:r,icon:pn.a,animation:2}),a.a.createElement(Oe.e,{options:{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}},(function(e){return n&&n.map((function(n){return(T(n.userId)||(o=n._id,t.upvotedMarkers&&Object.keys(t.upvotedMarkers).includes(o))||function(e,n){var t=e.lat*Math.PI/180,r=n.lat*Math.PI/180,a=e.lng*Math.PI/180,o=r-t,c=n.lng*Math.PI/180-a,i=Math.pow(Math.sin(o/2),2)+Math.cos(t)*Math.cos(r)*Math.pow(Math.sin(c/2),2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))}(Object(l.a)({},r),{lat:n.lat,lng:n.lng})<2)&&a.a.createElement(fn,{key:n._id,marker:n,clusterer:e,closeInfoBoxes:k,setCloseInfoBoxes:w,createdByCurrUser:T(n.userId)});var o}))})))),a.a.createElement(Je,{open:d,setOpen:m,position:g}),a.a.createElement(En,null))}));function On(){var e=Object(T.a)(['\n  margin-top: -60px;\n  font-family: "Alata", sans-serif;\n']);return On=function(){return e},e}function jn(){var e=Object(T.a)(["\n  height: inherit;\n  width: inherit;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 10rem;\n  background: linear-gradient(to top, #f5523c, #e3e6ff );\n"]);return jn=function(){return e},e}var yn=P.b.div(jn()),xn=P.b.div(On()),kn=function(){var e=Object(U.c)(f);return a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(vn,null),!e&&a.a.createElement(yn,null,a.a.createElement(xn,null,"Ticit")))},wn=function(e){var n=e.setOpen,t=Object(U.b)(),r=Object(I.g)();return a.a.createElement(Ie,{onClick:function(){fetch("/api/users/logout").then((function(e){return e.json()})).then((function(e){200===e.status&&(t({type:"RESET_USER"}),n(!1),r.push("/"))})).catch((function(e){return console.log(e)}))}},"Log out")};function Rn(){var e=Object(T.a)(["\n  background: ",";\n  display: block;\n  height: 3px;\n  position: absolute;\n  top: 30px;\n  right: 20px;\n  transition: background 0.2s ease-out;\n  width: 18px;\n  opacity: ",";\n  &:before,\n  &:after {\n    transition: opacity 0.2s ease-out;\n    background: ",';\n    content: "";\n    display: block;\n    height: 100%;\n    position: absolute;\n    transition: all 0.2s ease-out;\n    width: 100%;\n  }\n\n  &:before {\n    top: 6px;\n  }\n\n  &:after {\n    top: -6px;\n  }\n  &.toggled {\n    background: transparent;\n    opacity: 1;\n  }\n  &.toggled:after {\n    transform: rotate(45deg);\n    top: 0px;\n    background: #ffffff;\n    opacity: 1;\n  }\n  &.toggled:before {\n    transform: rotate(-45deg);\n    top: 0px;\n    background: #ffffff;\n    opacity: 1;\n  }\n']);return Rn=function(){return e},e}function Sn(){var e=Object(T.a)(["\n  cursor: pointer;\n  float: right;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n  z-index: 71;\n"]);return Sn=function(){return e},e}function _n(){var e=Object(T.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 50px;\n  height: 50px;\n  transition: opacity 0.2s ease-out;\n  z-index: 71;\n  &.toggled {\n    opacity: 0;\n  }\n  border-radius: 100%;\n  background-color: #ffffff;\n  border: 2px solid ",";\n"]);return _n=function(){return e},e}var Cn=function(e){var n=e.open,t=e.setOpen,r=Object(U.c)(f),o=Object(U.c)(p);return a.a.createElement(Tn,{onClick:function(){return t(!n)}},r&&a.a.createElement(Un,{className:n&&"toggled",src:r&&o.avatarUrl?o.avatarUrl:"/assets/misc/default-user.jpg"}),a.a.createElement(Mn,{className:n&&"toggled",isLoggedin:r}))},Un=P.b.img(_n(),z),Tn=Object(P.b)(Ie)(Sn()),Mn=P.b.span(Rn(),N,(function(e){return e.isLoggedin?0:1}),N);function In(){var e=Object(T.a)(["\n  > * {\n    font-size: 1.3rem;\n    color: #ffffff;\n    text-decoration: underline;\n    display: block;\n    margin-bottom: 20px;\n  }\n  .selected {\n    display: none;\n  }\n"]);return In=function(){return e},e}var Pn={zIndex:69,color:"#ffffff",backgroundColor:N},An=P.b.li(In()),zn=function(){var e=Object(U.c)(f),n=a.a.useState(!1),t=Object(B.a)(n,2),r=t[0],o=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Cn,{open:r,setOpen:o}),a.a.createElement(Ee,{open:r,style:Pn,side:"right"},a.a.createElement("nav",null,a.a.createElement("ul",null,!e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(An,null,a.a.createElement(M.c,{exact:!0,to:"/",onClick:function(){return o(!r)},activeClassName:"selected"},"Home")),a.a.createElement(An,null,a.a.createElement(M.c,{to:"/signup",onClick:function(){return o(!r)},activeClassName:"selected"},"Sign up")),a.a.createElement(An,null,a.a.createElement(M.c,{to:"/login",onClick:function(){return o(!r)},activeClassName:"selected"},"Log in"))),e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(An,null,a.a.createElement(M.c,{to:"/map",onClick:function(){return o(!r)},activeClassName:"selected"},"Map")),a.a.createElement(An,null,a.a.createElement(M.c,{to:"/users/me",onClick:function(){return o(!r)},activeClassName:"selected"},"Profile")),a.a.createElement(An,null,a.a.createElement(wn,{setOpen:o})))))))};function Nn(){var e=Object(T.a)(["\n  width: 100%;\n"]);return Nn=function(){return e},e}var Ln=P.b.div(Nn()),Dn=function(e){var n=e.marker,t=n.url,r=n.lat,o=n.lng;return a.a.createElement(M.b,{to:"/map?lat=".concat(r,"&lng=").concat(o)},a.a.createElement(Ln,null,a.a.createElement(ze,{url:t})))};function Fn(){var e=Object(T.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return Fn=function(){return e},e}var qn=P.b.div(Fn()),Vn=function(e){var n=e.markerIds,t=Object(U.c)(h);return a.a.createElement(qn,null,Object.keys(n).map((function(e){return a.a.createElement(Dn,{key:e,marker:t.find((function(n){return n._id===e}))})})))};function Kn(){var e=Object(T.a)(["\n  width: 100%;\n"]);return Kn=function(){return e},e}var Bn=P.b.div(Kn()),Jn=function(e){var n=e.user,t=n.name,r=n.upvotedMarkers,o=n.createdMarkers;return a.a.createElement(Ee,null,a.a.createElement(Bn,null,a.a.createElement(te,null,t),r&&a.a.createElement("div",null,a.a.createElement(re,null,"Pins I upvoted"),a.a.createElement(Vn,{markerIds:r})),o&&a.a.createElement("div",null,a.a.createElement(re,null,"Pins I created"),a.a.createElement(Vn,{markerIds:o}))))},Qn=function(){var e=Object(U.c)(p);return a.a.createElement(a.a.Fragment,null," ",e&&a.a.createElement(Jn,{user:e}))};function Gn(){var e=Object(T.a)(["\n  position: relative;\n  height: inherit;\n  box-sizing: border-box;\n"]);return Gn=function(){return e},e}var Xn=P.b.main(Gn()),Hn=function(){var e=Object(U.c)(f);return a.a.createElement(Xn,null,a.a.createElement(M.a,null,a.a.createElement(zn,null),a.a.createElement(I.d,null,a.a.createElement(I.b,{exact:!0,path:"/"},e?a.a.createElement(I.a,{to:"/map"}):a.a.createElement(kn,null)),a.a.createElement(I.b,{exact:!0,path:"/login"},a.a.createElement(pe,null)),a.a.createElement(I.b,{exact:!0,path:"/signup"},a.a.createElement(de,null)),a.a.createElement(I.b,{exact:!0,path:"/users/me"},e?a.a.createElement(Qn,null):a.a.createElement(I.a,{to:"/"})),a.a.createElement(I.b,{exact:!0,path:"/map"},e?a.a.createElement(vn,null):a.a.createElement(I.a,{to:"/"})),a.a.createElement(I.b,{component:ve}))),a.a.createElement(K,null))},Wn=k();Wn.dispatch({type:"REQUEST_USER"}),fetch("/api/users/user").then((function(e){return 204!==e.status?e.json():null})).then((function(e){e&&200===e.status?Wn.dispatch(w(e.user)):Wn.dispatch(w())})).catch((function(e){Wn.dispatch(R()),console.log(e)})),c.a.render(a.a.createElement(C.a,{background:"wave"},a.a.createElement(U.a,{store:Wn},a.a.createElement(Hn,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c9352360.chunk.js.map
(this.webpackJsonpfrontendscaffold=this.webpackJsonpfrontendscaffold||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},111:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(19),o=c.n(i),r=c(6),l=c(8),j=c(10),h=c(9),d=(c(57),c(7)),u=(c(58),c(13)),p=(c(35),function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{class:"containerC",children:[Object(n.jsx)("img",{src:"https://images.pexels.com/photos/2850444/pexels-photo-2850444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",height:"1080px",width:"1920px"}),Object(n.jsx)("div",{class:"text-block1",children:Object(n.jsx)("h1",{children:"Keep Your Neighborhood Clean "})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{class:"text-block2",children:Object(n.jsx)("h1",{children:"Find Where To Recycle Here"})}),Object(n.jsx)("img",{src:"https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",height:"900px",width:"1600px"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{class:"button1",children:Object(n.jsxs)("button",{children:[Object(n.jsx)(u.b,{to:"/textiles",children:" Clothing"})," "]})}),Object(n.jsx)("div",{class:"button2",children:Object(n.jsxs)("button",{children:[Object(n.jsx)(u.b,{to:"/compost",children:" Compost"})," "]})}),Object(n.jsx)("div",{class:"button3",children:Object(n.jsxs)("button",{children:[Object(n.jsx)(u.b,{to:"/pharma",children:" Pharma"})," "]})})]}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"column",children:Object(n.jsx)("img",{src:"https://images.pexels.com/photos/5503336/pexels-photo-5503336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",height:"1000px",width:"700px"})}),Object(n.jsx)("div",{class:"column",children:Object(n.jsx)("img",{src:"https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",height:"1000px",width:"700px"})}),Object(n.jsx)("div",{class:"column",children:Object(n.jsx)("img",{src:"https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",height:"1000px",width:"700px"})})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("center",{children:[" ",Object(n.jsx)("h1",{children:" FAQ: "})," "]}),Object(n.jsx)("hr",{})]})}),b=c(12),O=c(18),x=c.n(O),f=c(27),v=(c(84),{width:"100%",height:"500%"}),g=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},e.onMarkerClick=function(t,c,n){return e.setState({selectedPlace:t,activeMarker:c,showingInfoWindow:!0})},e.onClose=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Info",children:[Object(n.jsxs)("header",{className:"head",children:[Object(n.jsx)("hr",{}),Object(n.jsxs)("h5",{children:[this.props.dropoff_sitename,", ",this.props.zipcode]})]}),Object(n.jsxs)("div",{className:"container",children:[" ",Object(n.jsxs)("h5",{children:["Address: ",this.props.address]})," ",Object(n.jsx)("hr",{}),Object(n.jsxs)(f.Map,{google:this.props.google,zoom:17,style:v,initialCenter:{lat:this.props.latitude,lng:this.props.longitude},children:[Object(n.jsx)(f.Marker,{onClick:this.onMarkerClick,name:this.props.dropoff_sitename}),Object(n.jsx)(f.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:Object(n.jsx)("div",{children:Object(n.jsx)("h4",{children:this.state.selectedPlace.name})})})]})]})]})}}]),c}(s.Component),m=Object(f.GoogleApiWrapper)({apiKey:"AIzaSyBUeZg5hbGAsMMEX-3UCAjZP91oooJoGkI"})(g),y=(c(100),function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).setZip=function(e){n.setState({code:e.target.value})},n.state={zip:[],code:"",match:!1,type:"electronics"},n.fetchZipCode=n.fetchZipCode.bind(Object(b.a)(n)),n.getType=n.getType.bind(Object(b.a)(n)),n.doStuff=n.doStuff.bind(Object(b.a)(n)),n}return Object(l.a)(c,[{key:"fetchZipCode",value:function(){var e=this;"electronics"===this.state.type?x.a.get("https://data.cityofnewyork.us/resource/wshr-5vic.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"textiles"===this.state.type?x.a.get("https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"pharmaceuticals"===this.state.type&&x.a.get("https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)}))}},{key:"getType",value:function(e){e.preventDefault(),this.setState({type:e.target.value})}},{key:"doStuff",value:function(){this.setState({match:!1})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"zipsearch",children:[Object(n.jsx)("br",{}),Object(n.jsxs)("select",{onChange:this.getType,children:[Object(n.jsx)("option",{value:"electronics",children:" Electronics "}),Object(n.jsx)("option",{value:"pharmaceuticals",children:" Pharmaceuticals "}),Object(n.jsx)("option",{value:"textiles",children:" Textiles "})]}),Object(n.jsx)("input",{name:"code",type:"text",onChange:function(t){e.setZip(t)},value:this.state.code,placeholder:"Please enter a zip code"}),Object(n.jsx)("button",{onClick:this.fetchZipCode,children:"Search"}),this.state.match?Object(n.jsx)("div",{children:this.state.zip.map((function(e,t){return Object(n.jsx)(m,{address:e.address,dropoff_sitename:e.dropoff_sitename||e.vendor_name||e.drop_off_site_name,zipcode:e.zipcode,latitude:e.latitude,longitude:e.longitude},t)}))}):Object(n.jsx)("p",{children:"No Result"})]})}}]),c}(s.Component)),k=(c(101),function(){return Object(n.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(n.jsxs)("div",{class:"container-fluid",children:[Object(n.jsx)("a",{class:"navbar-brand",children:"Garbo"}),Object(n.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(u.b,{to:"/",children:"Home "})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(u.b,{to:"/electronics",children:"Electronics"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(u.b,{to:"/compost",children:"Compost"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(u.b,{to:"/textiles",children:"Clothing"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(u.b,{to:"/pharma",children:"Pharma"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(u.b,{to:"/userpage",children:"User"})})]})})]})})}),C=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(y,{})})},w=(c(102),function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).setZip=function(e){n.setState({code:e.target.value})},n.state={zip:[],code:"",match:!1,type:"electronics"},n.fetchZipCode=n.fetchZipCode.bind(Object(b.a)(n)),n.getType=n.getType.bind(Object(b.a)(n)),n.doStuff=n.doStuff.bind(Object(b.a)(n)),n}return Object(l.a)(c,[{key:"fetchZipCode",value:function(){var e=this;x.a.get("https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)}))}},{key:"getType",value:function(e){e.preventDefault(),this.setState({type:e.target.value})}},{key:"doStuff",value:function(){this.setState({match:!1})}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"zipsearch",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("input",{name:"code",type:"text",onChange:function(t){e.setZip(t)},value:this.state.code,placeholder:"Please enter a zip code"}),Object(n.jsx)("button",{onClick:this.fetchZipCode,children:"Search"}),this.state.match?Object(n.jsx)("div",{children:this.state.zip.map((function(e,t){return Object(n.jsx)(m,{address:e.address,dropoff_sitename:e.dropoff_sitename||e.vendor_name||e.drop_off_site_name,zipcode:e.zipcode,latitude:e.latitude,longitude:e.longitude},t)}))}):Object(n.jsx)("p",{children:"No Result"})]})})}}]),c}(s.Component)),S=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(w,{})})},z=(c(103),function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).setZip=function(e){n.setState({code:e.target.value})},n.state={zip:[],code:"",match:!1,type:"electronics"},n.fetchZipCode=n.fetchZipCode.bind(Object(b.a)(n)),n.getType=n.getType.bind(Object(b.a)(n)),n.doStuff=n.doStuff.bind(Object(b.a)(n)),n}return Object(l.a)(c,[{key:"fetchZipCode",value:function(){var e=this;x.a.get("https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)}))}},{key:"getType",value:function(e){e.preventDefault(),this.setState({type:e.target.value})}},{key:"doStuff",value:function(){this.setState({match:!1})}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"zipsearch",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("h1",{children:" Pharmaceutical Drop Off Points"}),Object(n.jsx)("input",{name:"code",type:"text",onChange:function(t){e.setZip(t)},value:this.state.code,placeholder:"Please enter a zip code"}),Object(n.jsx)("button",{onClick:this.fetchZipCode,children:"Search"}),this.state.match?Object(n.jsx)("div",{children:this.state.zip.map((function(e,t){return Object(n.jsx)(m,{address:e.address,dropoff_sitename:e.dropoff_sitename||e.vendor_name||e.drop_off_site_name,zipcode:e.zipcode,latitude:e.latitude,longitude:e.longitude},t)}))}):Object(n.jsx)("p",{children:"No Result"})]})})}}]),c}(s.Component)),L=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(z,{})})},_=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("center",{children:Object(n.jsx)(y,{})})})},I=c(51),P=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("center",{children:Object(n.jsx)(I.a,{title:"Garbo Inc",handleSignup:function(e){console.log(e),alert("Signup callback, see log on the console to see the data.")},handleLogin:function(e){console.log(e),alert("Login callback, see log on the console to see the data.")},handleRecoverPassword:function(e){console.log(e),alert("Recover password callback, see log on the console to see the data.")}})})})},Z=c(21),T=c.n(Z),N=c(26),A=c(50),M=c(3),E=new function e(){Object(r.a)(this,e),Object(M.h)(this,{loading:!0,isLoggedIn:!1,username:""})},D=c(28),F=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"InputField",children:Object(n.jsx)("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}})})}}]),c}(a.a.Component),R=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"SubmitButton",children:Object(n.jsx)("button",{className:"subButton",disable:this.props.disabled,onClick:function(){return e.props.onClick()},children:this.props.text})})}}]),c}(a.a.Component),W=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},n}return Object(l.a)(c,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(D.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(N.a)(T.a.mark((function e(){var t,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(c=e.sent)&&c.success?(E.isLoggedIn=!0,E.username=c.username):c&&!1===c.sucess&&(this.resetForm(),alert(c.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"loginForm",children:["Log in",Object(n.jsx)(F,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),Object(n.jsx)(F,{type:"password",placeholder:"Password",value:this.state.username?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),Object(n.jsx)(R,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}})]})}}]),c}(a.a.Component),G=(c(107),function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=Object(N.a)(T.a.mark((function e(){var t,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(c=e.sent)&&c.success?(E.loading=!1,E.isLoggedIn=!0,E.username=c.username):(E.loading=!1,E.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),E.loading=!1,E.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(N.a)(T.a.mark((function e(){var t,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(c=e.sent)&&c.success&&(E.isLoggedIn=!1,E.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return E.loading?Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:"Loading.."})}):E.isLoggedIn?Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:["Welcome ",E.username,Object(n.jsx)(R,{text:"Log out",disable:!1,onClick:function(){return e.doLogout()}})]})}):Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(R,{text:"Log out",disable:!1,onClick:function(){return e.doLogout()}}),Object(n.jsx)(W,{})]})})}}]),c}(a.a.Component)),H=Object(A.a)(G),B=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(d.c,{children:[Object(n.jsxs)(d.a,{exact:!0,path:"/",children:[Object(n.jsx)(k,{}),Object(n.jsx)(p,{})]}),Object(n.jsxs)(d.a,{exact:!0,path:"/electronics",children:["   ",Object(n.jsx)(k,{}),"  ",Object(n.jsx)(C,{})," "]}),Object(n.jsxs)(d.a,{exact:!0,path:"/compost",children:["   ",Object(n.jsx)(k,{}),"  ",Object(n.jsx)(_,{})," "]}),Object(n.jsxs)(d.a,{exact:!0,path:"/textiles",children:["  ",Object(n.jsx)(k,{}),"   ",Object(n.jsx)(S,{})," "]}),Object(n.jsxs)(d.a,{exact:!0,path:"/pharma",children:["   ",Object(n.jsx)(k,{}),"  ",Object(n.jsx)(L,{})," "]}),Object(n.jsxs)(d.a,{exact:!0,path:"/userlogin",children:["   ",Object(n.jsx)(k,{}),"   "]}),Object(n.jsxs)(d.a,{exact:!0,path:"/userpage",children:["   ",Object(n.jsx)(k,{})," ",Object(n.jsx)(H,{}),"  "]}),Object(n.jsxs)(d.a,{exact:!0,path:"/signup",children:[" ",Object(n.jsx)(k,{})," ",Object(n.jsx)(P,{})," "]})]})}}]),c}(s.Component),J=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)("header",{className:"app-header",children:Object(n.jsx)(B,{})})})}}]),c}(s.Component),U=(c(108),c(49)),Y=c(20),V=c(46),q=c(47),K=c(48),Q=c(34),X={FETCH_ALL_PLAYERS:"FETCH_ALL_PLAYERS"},$={allPlayers:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(console.log("PL",t),t.type){case X.FETCH_ALL_PLAYERS:return Object(Q.a)(Object(Q.a)({},e),{},{allPlayers:t.payload});default:return e}},te=Object(Y.combineReducers)({players:ee}),ce=Object(V.createLogger)({collapsed:!0}),ne=Object(K.composeWithDevTools)(Object(Y.applyMiddleware)(q.a.withExtraArgument({axios:x.a}),ce)),se=Object(Y.createStore)(te,ne);o.a.render(Object(n.jsx)(U.a,{store:se,children:Object(n.jsx)(u.a,{children:Object(n.jsx)(J,{})})}),document.getElementById("root"))},57:function(e,t,c){},58:function(e,t,c){},84:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.6668e631.chunk.js.map
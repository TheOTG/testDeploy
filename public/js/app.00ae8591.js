(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],n[s]&&d.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},r=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var m=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},"1d54":function(t,e,a){t.exports=a.p+"img/coin.a552edcd.png"},"3d55":function(t,e,a){"use strict";var o=a("9444"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},r=[],s=a("2877"),i={},c=Object(s["a"])(i,n,r,!1,null,null,null),l=c.exports,m=a("8c4f"),u=(a("bb51"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a(t.view,{tag:"component"})],1)],1)}),d=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("--game_name--")]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Please Enter Room Name")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.createRoom(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.roomData.roomName,expression:"roomData.roomName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Room Name"},domProps:{value:t.roomData.roomName},on:{input:function(e){e.target.composing||t.$set(t.roomData,"roomName",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.roomData.capacity,expression:"roomData.capacity"}],staticClass:"form-control",attrs:{type:"Number",placeholder:"0"},domProps:{value:t.roomData.capacity},on:{input:function(e){e.target.composing||t.$set(t.roomData,"capacity",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create")])])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Room")]),a("div",{staticClass:"card-body"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.roomList,function(e,o){return a("tr",{key:o},[a("th",[t._v(t._s(o+1))]),a("th",[t._v(t._s(e.roomName))]),a("th",[t._v(t._s(e.capacity))]),a("th",[a("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"button","data-toggle":"modal","data-target":"#join-room"},on:{click:function(a){return t.changeSelectedRoom(e.roomName)}}},[t._v("Join Room")])])])}),0)])])])])]),a("CreateUser")],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Room Name")]),a("th",[t._v("Capacity")]),a("th",[t._v("Option")])])])}],h=a("2f62"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"join-room",tabindex:"-1",role:"dialog","aria-labelledby":"add-task-label","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"text-left",on:{submit:function(e){return e.preventDefault(),t.enteringPlayer(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your username",id:"name"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Enter Room")])])])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-light"},[a("h5",{staticClass:"modal-title",attrs:{id:"add-task-label"}},[t._v("User Info")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],g={data:function(){return{username:""}},sockets:{enterRoom:function(t){this.$store.dispatch("currentRoom",t),$("#join-room").modal("toggle"),this.$router.push({path:"/game"})},newJoin:function(t){this.$store.dispatch("newJoin",t)}},methods:{enteringPlayer:function(){this.$socket.emit("enterRoom",{roomName:this.$store.state.roomName,username:this.username})}}},b=g,_=Object(s["a"])(b,v,y,!1,null,null,null),C=_.exports,x={name:"CreateRoom",components:{CreateUser:C},sockets:{createRoom:function(t){this.$store.dispatch("createRoom",t),this.roomData.roomName="",this.roomData.capacity=1,this.users=[]}},data:function(){return{roomData:{roomName:"",capacity:1,users:[],gameState:{players:{},coins:[],isPlaying:!1}}}},computed:{roomList:function(){return this.$store.state.roomList}},methods:{createRoom:function(){this.$socket.emit("createRoom",this.roomData)},changeSelectedRoom:function(t){this.$store.dispatch("changeSelectedRoom",t)}}},w=x,S=(a("3d55"),Object(s["a"])(w,p,f,!1,null,null,null)),R=S.exports,k={name:"Landing",components:{CreateRoom:R},data:function(){return{view:"CreateRoom"}},sockets:{fetchRoom:function(t){this.$store.dispatch("fetchRoom",t.roomList)}}},N=k,j=(a("cbf6"),Object(s["a"])(N,u,d,!1,null,null,null)),D=j.exports;o["a"].use(m["a"]);var E=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:D},{path:"/game",name:"game",component:function(){return Promise.resolve().then(a.bind(null,"bb51"))}}]}),M=a("5132"),O=a.n(M),P=a("bb71");a("da64");o["a"].use(P["a"],{iconfont:"md"}),o["a"].use(h["a"]);var J=new h["a"].Store({state:{roomList:[],roomName:"",currentJoint:"",currentUsers:[]},mutations:{mutateRoom:function(t,e){t.roomList.push(e)},mutatefetchRoom:function(t,e){t.roomList=e},mutateRoomName:function(t,e){t.roomName=e},mutateCurrRoom:function(t,e){t.currentJoint=e.roomName,t.currentUsers=e.currUsers},mutateCurrUsers:function(t,e){t.currentUsers.push(e)}},actions:{createRoom:function(t,e){var a=t.commit;a("mutateRoom",e)},fetchRoom:function(t,e){var a=t.commit;a("mutatefetchRoom",e)},changeSelectedRoom:function(t,e){var a=t.commit;a("mutateRoomName",e)},currentRoom:function(t,e){var a=t.commit;a("mutateCurrRoom",e)},newJoin:function(t,e){var a=t.commit;a("mutateCurrUsers",e)}}});o["a"].config.productionTip=!1,o["a"].use(new O.a({debug:!0,connection:"35.247.163.73"})),new o["a"]({store:J,router:E,render:function(t){return t(l)}}).$mount("#app")},"8b07":function(t,e,a){},9444:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-layout",{attrs:{"align-start":"","justify-center":"",row:"","fill-height":""}},[a("Canvas")],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("canvas",{staticStyle:{"padding-left":"0","padding-right":"0","margin-left":"auto","margin-right":"auto",display:"block",border:"1px solid black"},attrs:{id:"myCanvas",width:"480",height:"320"}}),t._m(0),t.gameState.isPlaying?t._e():a("button",{staticClass:"btn btn-primary",on:{click:t.toggle}},[t._v("Toggle")]),a("ul",t._l(t.gameState.players,function(e){return a("li",[t._v(t._s(e.name)+": "+t._s(e.score))])}),0),t._m(1)])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{display:"none"}},[o("img",{attrs:{id:"source",src:a("1d54")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("audio",{staticStyle:{display:"none"},attrs:{controls:"",autoplay:""}},[a("source",{attrs:{src:"https://www.dl-sounds.com/wp-content/uploads/edd/2018/10/Melody-in-F-preview.mp3",type:"audio/mpeg"}})])}],i=(a("7f7f"),a("6c7b"),{name:"Canvas",data:function(){return{ctx:"",coinImage:"",gameState:{},interval:"",playerMovement:{up:!1,down:!1,left:!1,right:!1}}},sockets:{connect:function(){},state:function(t){this.gameState=t,this.drawBoard()}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;this.coinImage=document.getElementById("source"),this.ctx=document.getElementById("myCanvas").getContext("2d");var e=function(e){39==e.keyCode?t.playerMovement.right=!0:37==e.keyCode?t.playerMovement.left=!0:38==e.keyCode?t.playerMovement.up=!0:40==e.keyCode&&(t.playerMovement.down=!0)},a=function(e){39==e.keyCode?t.playerMovement.right=!1:37==e.keyCode?t.playerMovement.left=!1:38==e.keyCode?t.playerMovement.up=!1:40==e.keyCode&&(t.playerMovement.down=!1)};document.addEventListener("keydown",e,!1),document.addEventListener("keyup",a,!1),this.initGame()},methods:{toggle:function(){this.$socket.emit("toggleGame",this.$store.state.currentJoint)},drawBoard:function(){this.ctx.clearRect(0,0,480,320);var t=this.gameState.coins;for(var e in this.gameState.players){for(var a=0;a<t.length;a++)this.gameState.players[e].x<t[a].x+25&&this.gameState.players[e].x+25>t[a].x&&this.gameState.players[e].y<t[a].y+25&&this.gameState.players[e].y+25>t[a].y?(t.splice(a,1),this.$socket.emit("coinState",{coins:t,roomName:this.$store.state.currentJoint,id:e})):this.ctx.drawImage(this.coinImage,t[a].x,t[a].y,25,25);this.ctx.beginPath(),this.ctx.rect(this.gameState.players[e].x,this.gameState.players[e].y,this.gameState.players[e].width,this.gameState.players[e].height),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.fillStyle="#000000",this.ctx.font="14pt Calibri",this.ctx.fillText(this.gameState.players[e].name,this.gameState.players[e].x,this.gameState.players[e].y),this.ctx.closePath()}},initGame:function(){var t=this;this.interval=setInterval(function(){t.$socket.emit("playerMovement",{playerMovement:t.playerMovement,roomName:t.$store.state.currentJoint})},1e3/60)}}}),c=i,l=a("2877"),m=Object(l["a"])(c,r,s,!1,null,null,null),u=m.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[t._v("Cras justo odio")]),a("li",{staticClass:"list-group-item"},[t._v("Dapibus ac facilisis in")])])])}],f=(a("8055"),{name:"Scoreboard",data:function(){return{}},mounted:function(){}}),h=f,v=Object(l["a"])(h,d,p,!1,null,null,null),y=v.exports,g={name:"home",components:{Canvas:u,Scoreboard:y},data:function(){return{}},mounted:function(){}},b=g,_=a("6544"),C=a.n(_),x=a("7496"),w=a("a722"),S=Object(l["a"])(b,o,n,!1,null,null,null);e["default"]=S.exports;C()(S,{VApp:x["a"],VLayout:w["a"]})},cbf6:function(t,e,a){"use strict";var o=a("8b07"),n=a.n(o);n.a}});
//# sourceMappingURL=app.00ae8591.js.map
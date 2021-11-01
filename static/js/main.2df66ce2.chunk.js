(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{107:function(t,e,a){},130:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var n,o,i=a(0),l=a.n(i),r=a(8),c=a.n(r),s=a(17),d=a(47),u=(a(107),a(175)),m=a(176),f=a(177),p=a(171),b=a(133),g=a(172),v=a(179),k=a(180),E=a(178),h=a(28),C=a(27),j=a(77),O=a.n(j).a.create(Object(C.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"9aa516cb-8f4b-45f8-be8d-59445844c51c"}})),T=function(){return O.get("todo-lists")},y=function(t){return O.post("todo-lists",{title:t})},I=function(t){return O.delete("todo-lists/".concat(t))},A=function(t,e){return O.put("todo-lists/".concat(t),{title:e})},w=function(t){return O.get("todo-lists/".concat(t,"/tasks"))},S=function(t,e){return O.delete("todo-lists/".concat(t,"/tasks/").concat(e))},x=function(t,e){return O.post("todo-lists/".concat(t,"/tasks"),{title:e})},F=function(t,e,a){return O.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},L=function(t){return O.post("auth/login",t)},P=function(){return O.delete("auth/login")},z=function(){return O.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(o||(o={}));var N=function(t,e){t.messages.length?e(K({error:t.messages[0]})):e(K({error:"Some error occurred"})),e(J({status:"failed"}))},D=function(t,e){e(K({error:t.message?t.message:"Some error occurred"})),e(J({status:"failed"}))},M=Object(h.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),q=M.reducer,B=M.actions.setIsLoggedInAC,H=Object(h.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),R=H.reducer,U=H.actions,J=U.setAppStatusAC,K=U.setAppErrorAC,W=U.setAppInitializedAC,V=a(13),Y=a(164),$=a(186),_=a(168),G=a(169),Q=a(181),X=a(170),Z=a(183),tt=a(85),et=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.auth.isLoggedIn})),a=Object(tt.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a;t((a=e,function(t){t(J({status:"loading"})),L(a).then((function(e){0===e.data.resultCode?(t(B({value:!0})),t(J({status:"succeeded"}))):N(e.data,t)})).catch((function(e){D(e,t)}))}))}});return e?l.a.createElement(V.a,{to:"/"}):l.a.createElement(Y.a,{container:!0,justify:"center"},l.a.createElement(Y.a,{item:!0,xs:4},l.a.createElement("form",{onSubmit:a.handleSubmit},l.a.createElement($.a,null,l.a.createElement(_.a,null,l.a.createElement("p",null,"To log in get registered ",l.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),l.a.createElement("p",null,"or use common test account credentials:"),l.a.createElement("p",null," Email: free@samuraijs.com"),l.a.createElement("p",null,"Password: free")),l.a.createElement(G.a,null,l.a.createElement(Q.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?l.a.createElement("div",null,a.errors.email):null,l.a.createElement(Q.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?l.a.createElement("div",null,a.errors.password):null,l.a.createElement(X.a,{label:"Remember me",control:l.a.createElement(Z.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),l.a.createElement(g.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},at=a(185),nt=a(182);function ot(t){return l.a.createElement(nt.a,Object.assign({elevation:6,variant:"filled"},t))}function it(){var t=Object(s.c)((function(t){return t.app.error})),e=Object(s.b)(),a=function(t,a){"clickaway"!==a&&e(K({error:null}))},n=null!==t;return l.a.createElement(at.a,{open:n,autoHideDuration:6e3,onClose:a},l.a.createElement(ot,{onClose:a,severity:"error"},t))}var lt=Object(h.b)({name:"todolists",initialState:[],reducers:{setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(C.a)(Object(C.a)({},t),{},{filter:"all",entityStatus:"idle"})}))},addTodolistAC:function(t,e){t.unshift(Object(C.a)(Object(C.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status}}}),rt=lt.reducer,ct=lt.actions,st=ct.setTodolistsAC,dt=ct.addTodolistAC,ut=ct.removeTodolistAC,mt=ct.changeTodolistTitleAC,ft=ct.changeTodolistFilterAC,pt=ct.changeTodolistEntityStatusAC,bt=Object(h.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.todoListId].unshift(e.payload)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(C.a)(Object(C.a)({},a[n]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:function(t){t.addCase(dt,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(ut,(function(t,e){delete t[e.payload.id]})),t.addCase(st,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}}),gt=bt.reducer,vt=bt.actions,kt=vt.removeTaskAC,Et=vt.addTaskAC,ht=vt.updateTaskAC,Ct=vt.setTasksAC,jt=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var l=Object(C.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);F(a,t,l).then((function(o){if(0===o.data.resultCode){var i=ht({taskId:t,model:e,todolistId:a});n(i)}else N(o.data,n)})).catch((function(t){D(t,n)}))}else console.warn("task not found in the state")}},Ot=a(132),Tt=a(44),yt=a(173),It=l.a.memo((function(t){var e=t.addItem,a=t.disabled,n=void 0!==a&&a;console.log("AddItemForm called");var o=Object(i.useState)(""),r=Object(Tt.a)(o,2),c=r[0],s=r[1],d=Object(i.useState)(null),u=Object(Tt.a)(d,2),m=u[0],f=u[1],b=function(){""!==c.trim()?(e(c),s("")):f("Title is required")};return l.a.createElement("div",null,l.a.createElement(Q.a,{variant:"outlined",disabled:n,error:!!m,value:c,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==m&&f(null),13===t.charCode&&b()},label:"Title",helperText:m}),l.a.createElement(p.a,{color:"primary",onClick:b,disabled:n},l.a.createElement(yt.a,null)))})),At=a(86),wt=l.a.memo((function(t){console.log("EditableSpan called");var e=Object(i.useState)(!1),a=Object(Tt.a)(e,2),n=a[0],o=a[1],r=Object(i.useState)(t.value),c=Object(Tt.a)(r,2),s=c[0],d=c[1];return n?l.a.createElement(Q.a,{value:s,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.onChange(s)}}):l.a.createElement("span",{onDoubleClick:function(){o(!0),d(t.value)}},t.value)})),St=a(174),xt=l.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(i.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?n.Completed:n.New,t.todolistId)}),[t.task.id,t.todolistId]),o=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return l.a.createElement("div",{key:t.task.id,className:t.task.status===n.Completed?"is-done":""},l.a.createElement(Z.a,{checked:t.task.status===n.Completed,color:"primary",onChange:a}),l.a.createElement(wt,{value:t.task.title,onChange:o}),l.a.createElement(p.a,{onClick:e},l.a.createElement(St.a,null)))})),Ft=["demo"],Lt=l.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,o=Object(At.a)(t,Ft);console.log("Todolist called");var r=Object(s.b)();Object(i.useEffect)((function(){if(!a){var t,e=(t=o.todolist.id,function(e){e(J({status:"loading"})),w(t).then((function(a){var n=a.data.items;e(Ct({tasks:n,todolistId:t})),e(J({status:"succeeded"}))}))});r(e)}}),[]);var c=Object(i.useCallback)((function(t){o.addTask(t,o.todolist.id)}),[o.addTask,o.todolist.id]),d=Object(i.useCallback)((function(t){o.changeTodolistTitle(o.todolist.id,t)}),[o.todolist.id,o.changeTodolistTitle]),u=Object(i.useCallback)((function(){return o.changeFilter("all",o.todolist.id)}),[o.todolist.id,o.changeFilter]),m=Object(i.useCallback)((function(){return o.changeFilter("active",o.todolist.id)}),[o.todolist.id,o.changeFilter]),f=Object(i.useCallback)((function(){return o.changeFilter("completed",o.todolist.id)}),[o.todolist.id,o.changeFilter]),b=o.tasks;return"active"===o.todolist.filter&&(b=o.tasks.filter((function(t){return t.status===n.New}))),"completed"===o.todolist.filter&&(b=o.tasks.filter((function(t){return t.status===n.Completed}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement(wt,{value:o.todolist.title,onChange:d}),l.a.createElement(p.a,{onClick:function(){o.removeTodolist(o.todolist.id)},disabled:"loading"===o.todolist.entityStatus},l.a.createElement(St.a,null))),l.a.createElement(It,{addItem:c,disabled:"loading"===o.todolist.entityStatus}),l.a.createElement("div",null,b.map((function(t){return l.a.createElement(xt,{key:t.id,task:t,todolistId:o.todolist.id,removeTask:o.removeTask,changeTaskTitle:o.changeTaskTitle,changeTaskStatus:o.changeTaskStatus})}))),l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(g.a,{variant:"all"===o.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),l.a.createElement(g.a,{variant:"active"===o.todolist.filter?"outlined":"text",onClick:m,color:"primary"},"Active"),l.a.createElement(g.a,{variant:"completed"===o.todolist.filter?"outlined":"text",onClick:f,color:"secondary"},"Completed")))})),Pt=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(s.c)((function(t){return t.todolists})),o=Object(s.c)((function(t){return t.tasks})),r=Object(s.c)((function(t){return t.auth.isLoggedIn})),c=Object(s.b)();Object(i.useEffect)((function(){if(!a&&r){var t=function(t){t(J({status:"loading"})),T().then((function(e){t(st({todolists:e.data})),t(J({status:"succeeded"}))})).catch((function(e){D(e,t)}))};c(t)}}),[]);var d=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(a){S(e,t).then((function(n){var o=kt({taskId:t,todolistId:e});a(o)}))}}(t,e);c(a)}),[]),u=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(a){a(J({status:"loading"})),x(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,n=Et(e);a(n),a(J({status:"succeeded"}))}else N(t.data,a)})).catch((function(t){D(t,a)}))}}(t,e);c(a)}),[]),m=Object(i.useCallback)((function(t,e,a){var n=jt(t,{status:e},a);c(n)}),[]),f=Object(i.useCallback)((function(t,e,a){var n=jt(t,{title:e},a);c(n)}),[]),p=Object(i.useCallback)((function(t,e){var a=ft({id:e,filter:t});c(a)}),[]),b=Object(i.useCallback)((function(t){var e,a=(e=t,function(t){t(J({status:"loading"})),t(pt({id:e,status:"loading"})),I(e).then((function(a){t(ut({id:e})),t(J({status:"succeeded"}))}))});c(a)}),[]),g=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(a){A(t,e).then((function(n){a(mt({id:t,title:e}))}))}}(t,e);c(a)}),[]),v=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(J({status:"loading"})),y(t).then((function(t){e(dt({todolist:t.data.data.item})),e(J({status:"succeeded"}))}))}}(t);c(e)}),[c]);return r?l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,{container:!0,style:{padding:"20px"}},l.a.createElement(It,{addItem:v})),l.a.createElement(Y.a,{container:!0,spacing:3},n.map((function(t){var e=o[t.id];return l.a.createElement(Y.a,{item:!0,key:t.id},l.a.createElement(Ot.a,{style:{padding:"10px"}},l.a.createElement(Lt,{todolist:t,tasks:e,removeTask:d,changeFilter:p,addTask:u,changeTaskStatus:m,removeTodolist:b,changeTaskTitle:f,changeTodolistTitle:g,demo:a})))})))):l.a.createElement(V.a,{to:"/login"})};var zt=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(s.c)((function(t){return t.app.status})),o=Object(s.c)((function(t){return t.app.isInitialized})),r=Object(s.c)((function(t){return t.auth.isLoggedIn})),c=Object(s.b)();Object(i.useEffect)((function(){c((function(t){z().then((function(e){0===e.data.resultCode&&t(B({value:!0}))})).finally((function(){t(W({isInitialized:!0}))}))}))}),[]);var d=Object(i.useCallback)((function(){c((function(t){t(J({status:"loading"})),P().then((function(e){0===e.data.resultCode?(t(B({value:!1})),t(J({status:"succeeded"}))):N(e.data,t)})).catch((function(e){D(e,t)}))}))}),[]);return o?l.a.createElement("div",{className:"App"},l.a.createElement(it,null),l.a.createElement(m.a,{position:"static"},l.a.createElement(f.a,null,l.a.createElement(p.a,{edge:"start",color:"inherit","aria-label":"menu"},l.a.createElement(E.a,null)),l.a.createElement(b.a,{variant:"h6"},"News"),r&&l.a.createElement(g.a,{color:"inherit",onClick:d},"Log out")),"loading"===n&&l.a.createElement(v.a,null)),l.a.createElement(k.a,{fixed:!0},l.a.createElement(V.d,null,l.a.createElement(V.b,{exact:!0,path:"/",render:function(){return l.a.createElement(Pt,{demo:a})}}),l.a.createElement(V.b,{path:"/login",render:function(){return l.a.createElement(et,null)}}),l.a.createElement(V.b,{path:"*",render:function(){return l.a.createElement(et,null)}}),l.a.createElement(V.a,{from:"*",to:"/login"})))):l.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},l.a.createElement(u.a,null))},Nt=a(25),Dt=a(48),Mt=Object(Nt.b)({tasks:gt,todolists:rt,app:R,auth:q}),qt=Object(h.a)({reducer:Mt,middleware:function(t){return t().prepend(Dt.a)}});window.store=qt;a(130),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,null,l.a.createElement(s.a,{store:qt},l.a.createElement(zt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},97:function(t,e,a){t.exports=a(131)}},[[97,1,2]]]);
//# sourceMappingURL=main.2df66ce2.chunk.js.map
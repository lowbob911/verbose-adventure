(this["webpackJsonpsongs-admin"]=this["webpackJsonpsongs-admin"]||[]).push([[0],{111:function(e,t,c){},112:function(e,t,c){},211:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),r=c(63),s=c.n(r),i=(c(111),c(11)),l=(c(112),c(52)),d=c(18),o=c(19),j=c(53),b=c(30),u=c(3);function h(e){var t=e.songs,c=e.onSelect;return Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"#"}),Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Action"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:e.number}),Object(u.jsx)("td",{children:e.title}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{variant:"primary",onClick:function(){return c(e)},children:"Select"})})]},e.number)}))})]})}var O="NEW",m="UPDATE",x="div {margin: 30px 20px; text-align: center; white-space: pre-wrap;} ".concat("span.chunk { position: relative; display: inline-flex; flex-direction: column; vertical-align: bottom; } span.chunk:before { font-size: 0.6em; content: attr(data-chord); position: relative; vertical-align: bottom;");function v(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(null),v=Object(i.a)(s,2),f=v[0],p=v[1],g=Object(n.useState)(null),S=Object(i.a)(g,2),N=S[0],k=S[1],y=Object(n.useState)(""),C=Object(i.a)(y,2),w=C[0],E=C[1],I=Object(n.useState)(""),T=Object(i.a)(I,2),F=T[0],A=T[1],D=Object(n.useState)(""),U=Object(i.a)(D,2),z=U[0],B=U[1],J=Object(n.useState)({}),M=Object(i.a)(J,2),W=M[0],q=M[1];function L(e){e.title=w,e.text=F,e.updated=Date.now()}function P(){var e={};return w||(e.title=!0),F||(e.text=!0),e}return Object(n.useEffect)((function(){var t=Object(o.c)(e.db,"songs");Object(o.b)(t,(function(e){r(e.val().map((function(e){return Object(d.a)({},e)})))}))}),[]),Object(n.useEffect)((function(){var e="";z&&(e=z.getCurrentContent().getPlainText().replace(/{.*?{!}/g,(function(e){return'<span class="chunk" data-chord="'.concat(e.match(/{([^!]*?(?=}))/)[1],'">').concat(e.match(/}(.*?(?={!}))/)[1],"</span>")}))),A(e)}),[z]),Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12 col-lg-4",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("h5",{className:"card-header",children:["Songs List",Object(u.jsx)(b.a,{className:"float-end",variant:"success",onClick:function(){k(O),E(""),B(j.EditorState.createWithText("")),p(null)},children:"Create"})]}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)(h,{songs:a,onSelect:function(e){k(m),p(e.number),E(e.title);var t=e.text.replace(/<span class="chunk".*?<\/span>/g,(function(e){return"{".concat(e.match(/data-chord="(.*?(?="))/)[1],"}").concat(e.match(/<span class="chunk".*>(.*?(?=<))/)[1],"{!}")}));B(j.EditorState.createWithText(t))}})})]})}),Object(u.jsx)("div",{className:"col-12 col-lg-4",children:(N===O||N===m&&f)&&Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h5",{className:"card-header",children:N===O?"Create Song":"Update Song "+f}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"titleInput",className:"form-label",children:"Title:"}),Object(u.jsx)("input",{type:"text",className:"form-control ".concat(W.title&&"is-invalid"),id:"titleInput",placeholder:"Song Title",value:w,onChange:function(e){return E(e.target.value)}}),Object(u.jsx)("div",{id:"validationServer05Feedback",className:"invalid-feedback",children:"Should not be empty"})]}),Object(u.jsxs)("div",{children:["Text:",Object(u.jsx)("div",{className:"".concat(W.text&&"is-invalid"),children:Object(u.jsx)(j.Editor,{editorState:z,onChange:B,className:"test"})}),Object(u.jsx)("div",{id:"validationServer05Feedback",className:"invalid-feedback",children:"Should not be empty"})]}),Object(u.jsxs)("div",{className:"mt-1 text-center",children:[N===m&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{variant:"primary",className:"me-2",onClick:function(){return function(){if(f){var t=P();if(q(t),Object.keys(t).length>0)return;var c=Object(d.a)({},a.find((function(e){return e&&e.number===f})));L(c),Object(o.e)(Object(o.c)(e.db,"songs/"+f),c).then((function(){alert("Updated")}))}}()},children:"Update"}),Object(u.jsx)(b.a,{variant:"danger",onClick:function(){return t=f,void(window.confirm("Are you sure want to delete Song?")&&Object(o.d)(Object(o.c)(e.db,"songs/"+t)).then((function(){alert("deleted!"),p(null),E(""),B("")})));var t},children:"Delete"})]}),N===O&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b.a,{variant:"primary",onClick:function(){return function(){if(N===O){var t=P();if(q(t),Object.keys(t).length>0)return;var c=(a.length>0?Math.max.apply(Math,Object(l.a)(a.map((function(e){return e.number})))):0)+1,n={number:c};L(n),Object(o.e)(Object(o.c)(e.db,"songs/"+c),n).then((function(){alert("Created"),k(m),p(c)}))}}()},children:"Create"})})]})]})]})}),Object(u.jsx)("div",{className:"col-12 col-lg-4",children:(N===O||N===m&&f)&&Object(u.jsx)("iframe",{className:"w-100 h-100",srcDoc:"<style>".concat(x,"</style><div>").concat(F,"</div>")})})]})})}c(210);var f=c(106);function p(){return Object(u.jsxs)("div",{className:"lds-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})}var g={apiKey:"AIzaSyB6jgAYZFaJhpzVcoZ9hox6h6iVGq6Ozqo",authDomain:"songreader-f7e8c.firebaseapp.com",databaseURL:"https://songreader-f7e8c.firebaseio.com",projectId:"songreader-f7e8c",storageBucket:"songreader-f7e8c.appspot.com",messagingSenderId:"703302008821",appId:"1:703302008821:web:826c661d4e80de2a732abc"},S=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=Object(f.a)(g),t=Object(o.a)(e);a(t)}),[]),c?Object(u.jsx)(v,{db:c}):Object(u.jsx)(p,{})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[211,1,2]]]);
//# sourceMappingURL=main.42c6b517.chunk.js.map
(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),r=t.n(a),o=t(15),u=t.n(o),i=t(6),s=t(3),l=function(e){var n=e.searchVar,t=e.handleClick;return n.map((function(e){return Object(c.jsxs)("p",{children:[e.name," ",e.number," ",Object(c.jsx)("button",{onClick:t,value:e.id,name:e.name,children:"Delete"},e.id)]},e.id)}))},d=function(e){var n=e.text,t=e.onChange;return Object(c.jsxs)("p",{children:[n," ",Object(c.jsx)("input",{onChange:t})]})},b=function(e){var n=e.handleNameSubmit,t=e.handleNameChange,a=e.handleNumberChange;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{onChange:t})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{onChange:a})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},j=t(4),h=t.n(j),f="/api/persons",m=function(){return h.a.get(f).then((function(e){return e.data}))},O=function(e){return h.a.post(f,e).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.status}))},x=function(e,n){return h.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.errorMessage,t=e.successMessage;return Object(c.jsx)("div",{children:null==n&&null==t?null:null==n?Object(c.jsx)("div",{className:"success",children:t}):Object(c.jsx)("div",{className:"error",children:n})})},g=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(new Date),u=Object(s.a)(o,2),j=u[0],h=u[1],f=Object(a.useState)(),g=Object(s.a)(f,2),w=g[0],C=g[1],N=Object(a.useState)(),S=Object(s.a)(N,2),k=S[0],y=S[1];Object(a.useEffect)((function(){m().then((function(e){r(e)}))}),[j]);var D=Object(a.useState)(""),M=Object(s.a)(D,2),T=M[0],I=M[1],E=Object(a.useState)(""),J=Object(s.a)(E,2),L=J[0],V=J[1],A=Object(a.useState)(""),B=Object(s.a)(A,2),P=B[0],U=B[1],q="";q=P||t;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{errorMessage:w,successMessage:k}),Object(c.jsx)(d,{text:"filter shown with",onChange:function(e){U(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),Object(c.jsx)(b,{handleNameSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===T}));if(null!=n){var c=n.id,a=Object(i.a)(Object(i.a)({},n),{},{number:L});window.confirm("".concat(T," is already added to phonebook, replace the old number with a new one?"))&&x(c,a).then((function(e){y("Updated Contact Number of ".concat(T)),setTimeout((function(){y(null)}),5e3),r(t.map((function(n){return n.id!==c?n:e})))})).catch((function(e){console.log("error is",e),C("Information of ".concat(T," has already been removed from server")),setTimeout((function(){C(null)}),5e3)}))}else O({newName:T,number:L}).then((function(e){y("Added ".concat(T)),r(t.concat(e)),I(""),V(""),setTimeout((function(){y(null)}),5e3)})).catch((function(e){C("".concat(e.response.data.error)),setTimeout((function(){C(null)}),5e3)}))},handleNameChange:function(e){I(e.target.value)},handleNumberChange:function(e){V(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(l,{searchVar:q,handleClick:function(e){var n=e.target.value;window.confirm("Delete ".concat(e.target.name," ?"))&&v(n).then((function(n){204===n&&(h(new Date),y("Information  of ".concat(e.target.name," has been deleted.")))})).catch((function(n){C("Information of ".concat(e.target.name," has already been removed from server")),setTimeout((function(){C(null)}),5e3)}))}})]})};t(39);u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cce5c34f.chunk.js.map
(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),r=t.n(a),o=t(15),u=t.n(o),i=t(6),s=t(3),l=function(e){var n=e.searchVar,t=e.handleClick;return n.map((function(e){return Object(c.jsxs)("p",{children:[e.name," ",e.number," ",Object(c.jsx)("button",{onClick:t,value:e.id,name:e.name,children:"Delete"},e.id)]},e.name)}))},b=function(e){var n=e.text,t=e.onChange;return Object(c.jsxs)("p",{children:[n," ",Object(c.jsx)("input",{onChange:t})]})},d=function(e){var n=e.handleNameSubmit,t=e.handleNameChange,a=e.handleNumberChange;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{onChange:t})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{onChange:a})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},j=t(4),h=t.n(j),f="/api/persons",m=function(){return h.a.get(f).then((function(e){return e.data}))},O=function(e){return h.a.post(f,e).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.status}))},x=function(e,n){return h.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){var n=e.errorMessage,t=e.successMessage;return Object(c.jsx)("div",{children:null==n&&null==t?null:null==n?Object(c.jsx)("div",{className:"success",children:t}):Object(c.jsx)("div",{className:"error",children:n})})},p=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(new Date),u=Object(s.a)(o,2),j=u[0],h=u[1],f=Object(a.useState)(),p=Object(s.a)(f,2),C=p[0],w=p[1],S=Object(a.useState)(),N=Object(s.a)(S,2),k=N[0],y=N[1];Object(a.useEffect)((function(){m().then((function(e){r(e)}))}),[j]);var D=Object(a.useState)(""),M=Object(s.a)(D,2),I=M[0],T=M[1],E=Object(a.useState)(""),J=Object(s.a)(E,2),L=J[0],V=J[1],A=Object(a.useState)(""),B=Object(s.a)(A,2),P=B[0],U=B[1],q="";q=P||t;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(g,{errorMessage:C,successMessage:k}),Object(c.jsx)(b,{text:"filter shown with",onChange:function(e){U(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),Object(c.jsx)(d,{handleNameSubmit:function(e){e.preventDefault();var n={name:I,number:L},c=t.find((function(e){return e.name===I}));if(null!=c){var a=c.id,o=Object(i.a)(Object(i.a)({},c),{},{number:L});window.confirm("".concat(I," is already added to phonebook, replace the old number with a new one?"))&&x(a,o).then((function(e){y("Updated Contact Number of ".concat(I)),setTimeout((function(){y(null)}),5e3),r(t.map((function(n){return n.id!==a?n:e})))})).catch((function(e){w("Information of ".concat(I," has already been removed from server")),setTimeout((function(){w(null)}),5e3)}))}else O(n).then((function(e){y("Added ".concat(I)),r(t.concat(e)),T(""),V(""),setTimeout((function(){y(null)}),5e3)}))},handleNameChange:function(e){T(e.target.value)},handleNumberChange:function(e){V(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(l,{searchVar:q,handleClick:function(e){var n=e.target.value;window.confirm("Delete ".concat(e.target.name," ?"))&&v(n).then((function(n){console.log("status is ",n),204===n&&(h(new Date),y("Information  of ".concat(e.target.name," has been deleted.")))})).catch((function(n){w("Information of ".concat(e.target.name," has already been removed from server")),console.log("error is",n),setTimeout((function(){w(null)}),5e3)}))}})]})};t(39);u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.fe6c9edc.chunk.js.map
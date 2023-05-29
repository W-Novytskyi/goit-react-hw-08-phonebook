"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[751],{6751:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,a,o,i,c,d,s,u=r(2791),p=r(9434),x=r(5861),l=r(9439),f=r(4687),b=r.n(f),h=r(3634),m=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},Z=function(n){return n.filters},j=r(168),w=r(7686),k=w.Z.form(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  max-height: 500px;\n  padding: 20px;\n  border: 1px solid #000;\n  border-radius: 3px;\n"]))),y=w.Z.div(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  padding: 0 20px;\n"]))),C=w.Z.input(o||(o=(0,j.Z)(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  font-size: 16px;\n  margin-bottom: 12px;\n  margin-top: 5px;\n"]))),z=w.Z.label(i||(i=(0,j.Z)(["\n  padding: 5px;\n  font-size: 20px;\n"]))),A=w.Z.button(c||(c=(0,j.Z)(["\n  cursor: pointer;\n  background-color: #ffffff;\n  color: #000000;\n  padding: 5px 20px;\n  margin-left: 25px;\n  border: 1px solid #000000;\n  border-radius: 3px;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);\n  width: 130px;\n\n  &:active {\n    background-color: #1b8bcd;\n    color: #ffffff;\n    border: none;\n  }\n"]))),L=r(184);function q(){var n=(0,p.I0)(),e=(0,p.v9)(m),r=(0,u.useState)(""),t=(0,l.Z)(r,2),a=t[0],o=t[1],i=(0,u.useState)(""),c=(0,l.Z)(i,2),d=c[0],s=c[1],f=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"name":o(t);break;case"number":s(t);break;default:return}},g=function(){var r=(0,x.Z)(b().mark((function r(){return b().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""===a||""===d){r.next=16;break}if(!e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()}))){r.next=7;break}return alert("".concat(a," is already in contacts.")),r.abrupt("return");case 7:return r.prev=7,r.next=10,n((0,h.uK)({name:a,number:d})).unwrap();case 10:v(),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(7),console.log("Error adding contact:",r.t0);case 16:case"end":return r.stop()}}),r,null,[[7,13]])})));return function(){return r.apply(this,arguments)}}(),v=function(){o(""),s("")};return(0,L.jsxs)(k,{children:[(0,L.jsx)(y,{children:(0,L.jsxs)(z,{children:["Name",(0,L.jsx)(C,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a,onChange:f})]})}),(0,L.jsx)(y,{children:(0,L.jsxs)(z,{children:["Number",(0,L.jsx)(C,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:f})]})}),(0,L.jsx)(A,{type:"button",onClick:g,children:"Add contact"})]})}var I=w.Z.ul(d||(d=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 500px;\n  padding: 0 20px;\n"]))),_=w.Z.button(s||(s=(0,j.Z)(["\n  cursor: pointer;\n  background-color: #ffffff;\n  color: #000000;\n  margin-left: 10px;\n  padding: 5px 20px;\n  border: 1px solid #000000;\n  border-radius: 3px;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);\n  width: 100px;\n\n  &:active {\n    background-color: #1b8bcd;\n    color: #ffffff;\n    border: none;\n  }\n"])));function F(){var n=(0,p.I0)(),e=(0,p.v9)(m),r=(0,p.v9)(Z),t=e.filter((function(n){var e=r?r.toLowerCase():"";return n.name.toLowerCase().includes(e)}));return(0,L.jsx)(I,{children:t.map((function(e){var r=e.name,t=e.number,a=e.id;return(0,L.jsxs)("li",{children:["".concat(r,": ").concat(t),(0,L.jsx)(_,{onClick:function(){return e=a,void n((0,h.GK)(e));var e},children:"Delete"})]},a)}))})}var N,E,K,P=r(3165),S=w.Z.div(N||(N=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  padding: 20px;\n"]))),T=w.Z.label(E||(E=(0,j.Z)(["\n  padding: 5px;\n  font-size: 20px;\n  margin-bottom: 15px;\n"]))),B=w.Z.input(K||(K=(0,j.Z)(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  font-size: 16px;\n  margin-top: 10px;\n"])));function D(){var n=(0,p.I0)(),e=(0,p.v9)(Z);return(0,L.jsx)(S,{children:(0,L.jsxs)(T,{children:["Find contacts by name",(0,L.jsx)(B,{type:"text",value:e,onChange:function(e){n((0,P.b)(e.currentTarget.value))}})]})})}var G=r(4270);function J(){var n=(0,p.I0)(),e=(0,p.v9)(g),r=(0,p.v9)(v);return(0,u.useEffect)((function(){n((0,h.yF)())}),[n]),(0,L.jsxs)("div",{children:[(0,L.jsx)(G.q,{children:(0,L.jsx)("title",{children:"Your contacts"})}),(0,L.jsx)("h1",{children:"Phonebook"}),(0,L.jsx)(q,{}),(0,L.jsx)("h2",{children:"Contacts"}),(0,L.jsx)(D,{}),e&&!r&&(0,L.jsx)("b",{children:"Request in progress..."}),(0,L.jsx)(F,{})]})}}}]);
//# sourceMappingURL=751.5565b4f3.chunk.js.map
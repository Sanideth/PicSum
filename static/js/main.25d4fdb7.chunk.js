(this.webpackJsonppicsum=this.webpackJsonppicsum||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),i=c(19),s=c.n(i),o=c(9),j=c(21),u=c(17),l=c(7),d=a.a.createContext();function b(e){var t=Object(r.useState)([]),c=Object(l.a)(t,2),a=c[0],i=c[1],s=Object(r.useState)([]),o=Object(l.a)(s,2),b=o[0],m=o[1];return Object(r.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(n.jsx)(d.Provider,{value:{allPhotos:a,cartItems:b,toggleFavorite:function(e){var t=a.map((function(t){return t.id===e?(console.log(t.isFavorite),Object(u.a)(Object(u.a)({},t),{},{isFavorite:!t.isFavorite})):t}));i(t)},addImageToCart:function(e){m((function(t){return[].concat(Object(j.a)(t),[e])})),console.log(b)},removeImageFromCart:function(e){var t=b.filter((function(t){return t.id!==e}));m(t)},clearCart:function(){m([])}},children:e.children})}var m=function(){var e=Object(r.useContext)(d).cartItems;return Object(n.jsxs)("header",{children:[Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("h2",{children:"Pic Some"})}),Object(n.jsx)(o.b,{to:"/cart",children:e.length>0?Object(n.jsx)("i",{className:"ri-shopping-cart-fill ri-fw ri-2x"}):Object(n.jsx)("i",{className:"ri-shopping-cart-line ri-fw ri-2x"})})]})},O=c(2);var f=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(r.useRef)(null);function i(){n(!0)}function s(){n(!1)}return Object(r.useEffect)((function(){var e=a.current;return a.current.addEventListener("mouseenter",i),a.current.addEventListener("mouseleave",s),function(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",s)}}),[]),[c,a]};var h=function(e){var t=f(),c=Object(l.a)(t,2),a=c[0],i=c[1],s=Object(r.useContext)(d),o=s.toggleFavorite,j=s.addImageToCart,u=s.removeImageFromCart,b=s.cartItems;return Object(n.jsxs)("div",{className:"".concat(e.className," image-container"),ref:i,children:[Object(n.jsx)("img",{src:e.data.url,className:"image-grid",alt:"Img-".concat(e.data.id)}),e.data.isFavorite?Object(n.jsx)("i",{className:"ri-heart-fill favorite",onClick:function(){return o(e.data.id)}}):a?Object(n.jsx)("i",{className:"ri-heart-line favorite",onClick:function(){return o(e.data.id)}}):void 0,b.find((function(t){return t.id===e.data.id}))?Object(n.jsx)("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return u(e.data.id)}}):a?Object(n.jsx)("i",{className:"ri-add-circle-line cart",onClick:function(){return j(e.data)}}):void 0]})};var v=function(){var e=Object(r.useContext)(d).allPhotos.map((function(e,t){return Object(n.jsx)(h,{data:e,className:(c=t,c%5===0?"big":c%6===0?"wide":void 0)},e.id);var c}));return Object(n.jsx)("main",{className:"photos",children:e})};var x=function(e){var t=f(),c=Object(l.a)(t,2),a=c[0],i=c[1],s=Object(r.useContext)(d).removeImageFromCart;return Object(n.jsxs)("div",{className:"cart-item",children:[Object(n.jsx)("i",{className:"ri-delete-bin-".concat(a?"fill":"line"),onClick:function(){return s(e.data.id)},ref:i}),Object(n.jsx)("img",{src:e.data.url,alt:"Cart Img",width:"130px"}),Object(n.jsx)("p",{children:"$5.99"})]})};var g=function(){var e=Object(r.useContext)(d),t=e.cartItems,c=e.clearCart,a=Object(r.useState)("Place Order"),i=Object(l.a)(a,2),s=i[0],o=i[1],j=(5.99*t.length).toLocaleString("en-US",{style:"currency",currency:"USD"}),u=t.map((function(e){return Object(n.jsx)(x,{data:e},e.id)}));return Object(n.jsxs)("main",{className:"cart-page",children:[Object(n.jsx)("h1",{children:"Check Out"}),u,Object(n.jsxs)("p",{className:"total-cost",children:["Total: ",j]}),Object(n.jsx)("div",{className:"order-button",children:t.length>0?Object(n.jsx)("button",{onClick:function(){o("Ordering..."),setTimeout((function(){o("Place Order"),c()}),3e3)},children:s}):Object(n.jsx)("h2",{children:"Your cart is empty"})})]})};c(32);var p=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{}),Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{exact:!0,path:"/",children:Object(n.jsx)(v,{})}),Object(n.jsx)(O.a,{path:"/cart",children:Object(n.jsx)(g,{})})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(b,{children:Object(n.jsx)(o.a,{base:"/",children:Object(n.jsx)(p,{})})})}),document.getElementById("root")),C()}},[[33,1,2]]]);
//# sourceMappingURL=main.25d4fdb7.chunk.js.map
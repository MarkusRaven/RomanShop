(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221dc3"],{cbc1:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n={class:"paypal__wrapper"},c={ref:"paypal"};function i(e,t,r,i,o,s){return Object(a["C"])(),Object(a["i"])("div",n,[Object(a["j"])("div",c,null,512)])}var o=r("5530"),s=r("ade3"),p=r("1da1"),d=(r("96cf"),r("a4d3"),r("e01a"),r("d81d"),r("b0c0"),r("e692")),u=r("5502"),l={data:function(){return{loaded:!1,paidFor:!1,product:{price:777999,description:"leg lamp from that one movie",img:"./assets/lamp.jpg"}}},mounted:function(){var e=document.createElement("script");e.src="https://www.paypal.com/sdk/js?client-id=AbLwrgEaPeiIpwmFu6rP9rexynquY7H3KT8CrYV2bEejAfhK_q6o31viE4Zr2rtS2mRNe0DNpzvmj339",e.addEventListener("load",this.setLoaded),document.body.appendChild(e),this.product.price=this.cart.final_price>0?this.cart.final_price:"200",console.log(this.product.price)},methods:{setLoaded:function(){var e=this;this.loaded=!0,window.paypal.Buttons({createOrder:function(t,r){return r.order.create({purchase_units:[{description:e.product.description,amount:{currency_code:"USD",value:e.product.price}}]})},onApprove:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(r,a){var n,c,i,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.order.capture();case 2:return n=t.sent,e.paidFor=!0,c=e.cart.related_items.map((function(e){var t;return t={height:e.height,width:e.width,length:e.length,bohrung:e.bohrung,comment:"23312312321312312",qty_item:0,total_price:e.total_price,ausschnitt:e.ausschnitt,item:e.item.id,armierung:!0},Object(s["a"])(t,"ausschnitt",0),Object(s["a"])(t,"ausklinkung",0),Object(s["a"])(t,"polierte_kante",!0),t})),i=Object(o["a"])(Object(o["a"])({},e.$route.params),{},{paypal_id:n.id,email:n.payer.email_address,first_name:n.payer.name.given_name,last_name:n.payer.name.surname,total_items:e.cart.total_items,final_price:e.cart.final_price,cart_items:c}),t.prev=6,t.next=9,Object(d["j"])(i);case 9:p=t.sent,e.$store.dispatch("clearCart"),e.isLoggedIn?e.$router.push("/profile"):e.$router.push({name:"Thanks",params:{info:p.data.detail}}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](6),console.log(t.t0);case 17:console.log(n);case 18:case"end":return t.stop()}}),t,null,[[6,14]])})));function r(e,r){return t.apply(this,arguments)}return r}(),onError:function(e){console.log(e)}}).render(this.$refs.paypal)}},computed:Object(o["a"])({},Object(u["b"])(["cart","isLoggedIn"]))},m=r("d959"),h=r.n(m);const f=h()(l,[["render",i]]);t["default"]=f}}]);
//# sourceMappingURL=chunk-2d221dc3.69a0e5eb.js.map
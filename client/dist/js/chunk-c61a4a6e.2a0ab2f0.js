(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c61a4a6e"],{"083d":function(t,e,n){},2594:function(t,e,n){"use strict";n("99af"),n("b0c0"),n("a4d3"),n("e01a");var c=n("7a23"),i={class:"shop__item shopitem"},r={class:"shopitem__link"},o=["src"],s={class:"shopitem__title"},a={class:"shopitem__text appText"},u={class:"shopitem__price"};function p(t,e,n,p,d,f){return Object(c["C"])(),Object(c["i"])("div",i,[Object(c["j"])("div",r,[Object(c["j"])("img",{src:"".concat(t.ApiInstance).concat(n.itemInfo.photo),alt:""},null,8,o)]),Object(c["j"])("h4",s,Object(c["M"])(n.itemInfo.name),1),Object(c["j"])("p",a,Object(c["M"])(f.description),1),Object(c["j"])("div",u,Object(c["M"])(n.itemInfo.price)+" р.",1),Object(c["j"])("button",{type:"button",class:"shopitem__btn appBtn appBtn--outline",onClick:e[0]||(e[0]=function(t){return f.addHandler()})}," В корзину ")])}var d=n("db49"),f={data:function(){return{ApiInstance:d["a"]}},props:{itemInfo:{type:Object,default:{}},tile:{type:Boolean,default:!1}},computed:{description:function(){return this.itemInfo.item_desc.substring(0,100)+"..."}},methods:{addHandler:function(){this.$store.dispatch("addToCart",this.itemInfo)}}},l=n("d959"),b=n.n(l);const j=b()(f,[["render",p]]);e["a"]=j},"74c0":function(t,e,n){"use strict";n("083d")},"99af":function(t,e,n){"use strict";var c=n("23e7"),i=n("d039"),r=n("e8b5"),o=n("861d"),s=n("7b0b"),a=n("50c4"),u=n("8418"),p=n("65f0"),d=n("1dde"),f=n("b622"),l=n("2d00"),b=f("isConcatSpreadable"),j=9007199254740991,m="Maximum allowed index exceeded",h=l>=51||!i((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),O=d("concat"),v=function(t){if(!o(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},I=!h||!O;c({target:"Array",proto:!0,forced:I},{concat:function(t){var e,n,c,i,r,o=s(this),d=p(o,0),f=0;for(e=-1,c=arguments.length;e<c;e++)if(r=-1===e?o:arguments[e],v(r)){if(i=a(r.length),f+i>j)throw TypeError(m);for(n=0;n<i;n++,f++)n in r&&u(d,f,r[n])}else{if(f>=j)throw TypeError(m);u(d,f++,r)}return d.length=f,d}})},a15e:function(t,e,n){"use strict";n.r(e);n("4de4"),n("b0c0");var c=n("7a23"),i={class:"DeinSteinDesign"},r={class:"DeinSteinDesign__wrapper"},o={class:"shop"},s={class:"toolbar"},a=["onClick"],u={class:"shop__items"};function p(t,e,n,p,d,f){var l=Object(c["J"])("shop-item");return Object(c["C"])(),Object(c["i"])("main",i,[Object(c["j"])("div",r,[Object(c["j"])("section",o,[Object(c["j"])("div",s,[(Object(c["C"])(!0),Object(c["i"])(c["a"],null,Object(c["H"])(t.filter,(function(e){return Object(c["C"])(),Object(c["i"])("button",{key:e.id,class:Object(c["v"])(["appBtn appBtn--small",e.id!==t.typeId&&"appBtn--outline"]),onClick:function(t){return f.filterForType(e.id)}},Object(c["M"])(e.name),11,a)})),128))]),Object(c["j"])("div",u,[(Object(c["C"])(!0),Object(c["i"])(c["a"],null,Object(c["H"])(t.shopItems,(function(t){return Object(c["C"])(),Object(c["g"])(l,{key:t.id,itemInfo:t,tile:!0},null,8,["itemInfo"])})),128))])])])])}var d=n("1da1"),f=(n("96cf"),n("e692")),l=n("2594"),b={components:{"shop-item":l["a"]},data:function(){return{shopItems:[],filter:[],typeId:0}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["g"])();case 2:return t.shopItems=e.sent,e.next=5,Object(f["f"])();case 5:t.filter=e.sent;case 6:case"end":return e.stop()}}),e)})))()},methods:{UpdateItems:function(t){this.shopItems=t},filterForType:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.typeId=t,n.next=3,Object(f["h"])(t);case 3:e.shopItems=n.sent;case 4:case"end":return n.stop()}}),n)})))()}}},j=(n("74c0"),n("d959")),m=n.n(j);const h=m()(b,[["render",p]]);e["default"]=h}}]);
//# sourceMappingURL=chunk-c61a4a6e.2a0ab2f0.js.map
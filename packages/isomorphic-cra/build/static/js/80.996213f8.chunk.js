(this["webpackJsonp@iso/cra"]=this["webpackJsonp@iso/cra"]||[]).push([[80,148,149,150,151],{1668:function(t,e,n){"use strict";n(625);var a=n(209);e.a=a.a},2796:function(t,e,n){"use strict";n.r(e);n(541);var a=n(542),r=(n(543),n(544)),l=n(0),i=n.n(l),o=n(1668),c=n(538),p=n(536),m=n(534),s=n(540),u=n(549),d=n(545),f=i.a.createElement("span",null,i.a.createElement(u.a,{id:"uiElements.tooltip.contentSpan"}));e.default=function(){var t=d.b.rowStyle,e=d.b.colStyle,n=d.b.gutter;return i.a.createElement(m.default,null,i.a.createElement(c.default,null,i.a.createElement(u.a,{id:"uiElements.tooltip.tooltip"})),i.a.createElement(a.a,{style:t,gutter:n,justify:"start"},i.a.createElement(r.a,{md:12,sm:12,xs:24,style:e},i.a.createElement(p.default,{title:i.a.createElement(u.a,{id:"uiElements.tooltip.basicExample"}),subtitle:i.a.createElement(u.a,{id:"uiElements.tooltip.basicExampleSubTitle"})},i.a.createElement(s.default,null,i.a.createElement(o.a,{title:i.a.createElement(u.a,{id:"uiElements.tooltip.tooltipContent"})},i.a.createElement("span",null,i.a.createElement(u.a,{id:"uiElements.tooltip.tooltipContentSpan"})))))),i.a.createElement(r.a,{md:12,sm:12,xs:24,style:e},i.a.createElement(p.default,{title:i.a.createElement(u.a,{id:"uiElements.tooltip.placementTitle"}),subtitle:i.a.createElement(u.a,{id:"uiElements.tooltip.placementSubTitle"})},i.a.createElement(s.default,null,i.a.createElement("div",{className:"demoBtnsWrapper"},i.a.createElement(o.a,{placement:"topLeft",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.TL"}))),i.a.createElement(o.a,{placement:"top",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.top"}))),i.a.createElement(o.a,{placement:"topRight",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.TR"})))),i.a.createElement("div",{className:"demoBtnsWrapper"},i.a.createElement(o.a,{placement:"leftTop",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.LT"}))),i.a.createElement(o.a,{placement:"left",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.left"}))),i.a.createElement(o.a,{placement:"leftBottom",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.LB"})))),i.a.createElement("div",{className:"demoBtnsWrapper"},i.a.createElement(o.a,{placement:"rightTop",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.RT"}))),i.a.createElement(o.a,{placement:"right",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.right"}))),i.a.createElement(o.a,{placement:"rightBottom",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.RB"})))),i.a.createElement("div",{className:"demoBtnsWrapper"},i.a.createElement(o.a,{placement:"bottomLeft",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.BL"}))),i.a.createElement(o.a,{placement:"bottom",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.bottom"}))),i.a.createElement(o.a,{placement:"bottomRight",title:f},i.a.createElement("a",{className:"tooltipBtn",href:"# "},i.a.createElement(u.a,{id:"uiElements.tooltip.BR"})))))))))}},534:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(40);function i(){var t=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return t},t}var o=n(33).d.div(i());e.default=function(t){return r.a.createElement(o,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},536:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(40),i=n(33),o=n(7);function c(){var t=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return t},t}function p(){var t=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return p=function(){return t},t}var m=i.d.h3(p(),Object(o.palette)("text",0)),s=i.d.p(c(),Object(o.palette)("text",3)),u=function(t){return r.a.createElement("div",null,t.title?r.a.createElement(m,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?r.a.createElement(s,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function d(){var t=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return d=function(){return t},t}var f=i.d.div(d(),Object(o.palette)("border",0),"");e.default=function(t){return r.a.createElement(f,{className:"".concat(t.className?t.className:""," isoBoxWrapper"),style:t.style},r.a.createElement(u,{title:t.title,subtitle:t.subtitle}),t.children)}},538:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(40),i=n(33),o=n(7),c=n(79);function p(){var t=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return p=function(){return t},t}var m=i.d.h1(p(),Object(o.palette)("secondary",2),Object(o.palette)("secondary",3),(function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(o.palette)("secondary",3),(function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),s=Object(c.a)(m);e.default=function(t){return r.a.createElement(s,{className:"isoComponentTitle"},t.children)}},540:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(40),i=n(33),o=n(7),c=n(79);function p(){var t=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return p=function(){return t},t}var m=i.d.div(p(),(function(t){return"rtl"===t["data-rtl"]?"0":"10px"}),(function(t){return"rtl"===t["data-rtl"]?"10px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"70px"}),(function(t){return"rtl"===t["data-rtl"]?"70px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"right":"left"}),(function(t){return"rtl"===t["data-rtl"]?"0":"295px"}),(function(t){return"rtl"===t["data-rtl"]?"295px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"70px"}),(function(t){return"rtl"===t["data-rtl"]?"70px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"}),(function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"}),(function(t){return"rtl"===t["data-rtl"]?"0":"8px"}),(function(t){return"rtl"===t["data-rtl"]?"8px":"0"}),Object(o.palette)("secondary",1),(function(t){return"rtl"===t["data-rtl"]?"auto":"6px"}),(function(t){return"rtl"===t["data-rtl"]?"6px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"15px"}),(function(t){return"rtl"===t["data-rtl"]?"15px":"0"}),(function(t){return t["data-rtl"],"0"}),(function(t){return t["data-rtl"],"0"})),s=Object(c.a)(m);e.default=function(t){return r.a.createElement(s,{className:"isoExampleWrapper",style:t.style},t.children)}},541:function(t,e,n){"use strict";n(124),n(546)},542:function(t,e,n){"use strict";var a=n(1021);e.a=a.a},543:function(t,e,n){"use strict";n(124),n(546)},544:function(t,e,n){"use strict";var a=n(568);e.a=a.a},545:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return r}));var a={blue:{deep:"rgb(0, 121, 191)",light:"lightblue",lighter:"#d9fcff",soft:"#E6FCFF"},black:"#4d4d4d",shadow:"rgba(0,0,0,0.2)",grey:{darker:"#C1C7D0",dark:"#E2E4E6",medium:"#DFE1E5",N30:"#EBECF0",light:"#F4F5F7"},green:"rgb(185, 244, 188)",white:"white",purple:"rebeccapurple",orange:"#FF991F"},r=8,l={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};e.b=l},568:function(t,e,n){"use strict";var a=n(8),r=n.n(a),l=n(6),i=n.n(l),o=n(99),c=n.n(o),p=n(0),m=n(9),s=n.n(m),u=n(570),d=n(101),f=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n};var h=p.forwardRef((function(t,e){var n=function(n){var a,l=n.getPrefixCls,o=n.direction,m=t.prefixCls,d=t.span,h=t.order,E=t.offset,g=t.push,x=t.pull,b=t.className,w=t.children,y=t.flex,v=t.style,B=f(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),N=l("col",m),O={};["xs","sm","md","lg","xl","xxl"].forEach((function(e){var n,a={},l=t[e];"number"===typeof l?a.span=l:"object"===c()(l)&&(a=l||{}),delete B[e],O=i()(i()({},O),(n={},r()(n,"".concat(N,"-").concat(e,"-").concat(a.span),void 0!==a.span),r()(n,"".concat(N,"-").concat(e,"-order-").concat(a.order),a.order||0===a.order),r()(n,"".concat(N,"-").concat(e,"-offset-").concat(a.offset),a.offset||0===a.offset),r()(n,"".concat(N,"-").concat(e,"-push-").concat(a.push),a.push||0===a.push),r()(n,"".concat(N,"-").concat(e,"-pull-").concat(a.pull),a.pull||0===a.pull),r()(n,"".concat(N,"-rtl"),"rtl"===o),n))}));var j=s()(N,(a={},r()(a,"".concat(N,"-").concat(d),void 0!==d),r()(a,"".concat(N,"-order-").concat(h),h),r()(a,"".concat(N,"-offset-").concat(E),E),r()(a,"".concat(N,"-push-").concat(g),g),r()(a,"".concat(N,"-pull-").concat(x),x),a),b,O);return p.createElement(u.a.Consumer,null,(function(t){var n=t.gutter,a=i()({},v);return n&&(a=i()(i()(i()({},n[0]>0?{paddingLeft:n[0]/2,paddingRight:n[0]/2}:{}),n[1]>0?{paddingTop:n[1]/2,paddingBottom:n[1]/2}:{}),a)),y&&(a.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(y)),p.createElement("div",i()({},B,{style:a,className:j,ref:e}),w)}))};return p.createElement(d.a,null,n)}));h.displayName="Col",e.a=h}}]);
//# sourceMappingURL=80.996213f8.chunk.js.map
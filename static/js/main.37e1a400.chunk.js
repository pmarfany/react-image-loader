(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t.p+"static/media/picture.71882ff7.svg"},20:function(e,n,t){e.exports=t.p+"static/media/add.86f49010.svg"},21:function(e,n,t){e.exports=t.p+"static/media/edit.ecce6c6f.svg"},22:function(e,n,t){e.exports=t.p+"static/media/close.fd8612a0.svg"},25:function(e,n,t){e.exports=t(36)},30:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var r,o=t(0),a=t.n(o),c=t(3),i=t.n(c),u=t(1);!function(e){e.black="#000000",e.blackAlpha3="rgba(0, 0, 0, 0.3)",e.blackAlpha2="rgba(0, 0, 0, 0.2)",e.accent="#2a5298",e.accentLight="#5372ab",e.gray="#f9f9f9",e.white="#ffffff"}(r||(r={}));var l={colors:r},f=(t(30),t(8)),s=t(5),p=t(24),m="image/SET_DATA",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;return n.type===m?Object(p.a)({},e,n.payload):e},g=t(16),b={image:void 0},h=t(7);function v(){var e=Object(h.a)(["\n  display: block;\n  cursor: pointer;\n  border-radius: ",";\n"]);return v=function(){return e},e}var k=function(e){var n=e.onClick,t=e.className,r=e.children;return o.createElement("span",{className:t,onClick:n},r)};k.defaultProps={round:!1};var y=Object(u.c)(k)(v(),function(e){return e.round?"50%":"0%"}),w=Object(u.c)(y).withConfig({displayName:"GrayButton",componentId:"sc-1f36zkr-0"})(["background-color:",";color:",";:hover{background-color:",";}"],function(e){return e.theme.colors.blackAlpha3},function(e){return e.theme.colors.white},function(e){return e.theme.colors.blackAlpha2}),x=Object(u.c)(y).withConfig({displayName:"AccentButton",componentId:"sc-15ylbd-0"})(["background-color:",";color:",";:hover{background-color:",";}"],function(e){return e.theme.colors.accent},function(e){return e.theme.colors.white},function(e){return e.theme.colors.accentLight}),E=t(19),j=t.n(E),O=t(20),D=t.n(O),I=t(21),A=t.n(I),C=t(22),L=t.n(C);function N(){var e=Object(h.a)(["\n  &:before {\n    content: '';\n    position: absolute;\n    background: url(",") no-repeat center center;\n    background-size: ",";\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n"]);return N=function(){return e},e}var T=function(e,n){return Object(u.b)(N(),e,n)},z=Object(u.c)("div").withConfig({displayName:"StyledPicker",componentId:"sc-1ltij6c-0"})(["position:relative;width:300px;height:300px;border:1px solid ",";background:url(",") no-repeat center center;background-size:contain;background-color:",";","{position:absolute;bottom:-22px;right:15px;width:45px;height:45px;box-shadow:0 0.2em 0.4em rgba(0,0,0,0.4);","}","{position:absolute;top:5px;right:5px;width:35px;height:35px;",'}input[type="file"]{display:none;}'],function(e){return e.theme.colors.black},function(e){return e.image?e.image:j.a},function(e){return e.theme.colors.gray},x,function(e){return T(e.image?A.a:D.a,"1rem")},w,T(L.a,"0.85rem"));var B=function(e){return"undefined"===typeof e||null===e},P=function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"},R=function(e){var n=a.a.useRef(null),t=function(n){return function(t){t.preventDefault(),e.onLoadImage(t[n].files)}};return a.a.createElement(z,{image:e.image,onDragEnter:P,onDragOver:P,onDrop:t("dataTransfer")},!B(e.image)&&a.a.createElement(w,{round:!0,onClick:e.removeImage}),a.a.createElement(x,{round:!0,onClick:function(){null!==n.current&&n.current.click()}}),a.a.createElement("input",{type:"file",accept:e.accept,onChange:t("target"),ref:n}))};var S=function(e){return new Promise(function(n,t){var r=new FileReader;r.onload=function(){return n(r.result)},r.onerror=t,r.readAsDataURL(e)})};var J={setImageData:function(e){return{type:m,payload:{image:e}}}},W=Object(f.b)(function(e){return{image:e.image}},J)(function(e){return a.a.createElement(R,{image:e.image,onLoadImage:function(n){null===n||n.length<1||n[0].type.startsWith("image/")&&S(n[0]).then(e.setImageData)},removeImage:function(){return e.setImageData(void 0)},accept:"image/*"})});i.a.render(a.a.createElement(u.a,{theme:l},a.a.createElement(f.a,{store:Object(s.createStore)(d,Object(g.composeWithDevTools)())},a.a.createElement(W,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.37e1a400.chunk.js.map
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[85423],{108679:(e,t,r)=>{var o=r(121296),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return o.isMemo(e)?i:a[e.$$typeof]||n}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=i;var c=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(y){var n=p(r);n&&n!==y&&e(t,n,o)}var i=u(r);f&&(i=i.concat(f(r)));for(var a=l(t),m=l(r),b=0;b<i.length;++b){var h=i[b];if(!s[h]&&!(o&&o[h])&&!(m&&m[h])&&!(a&&a[h])){var x=d(r,h);try{c(t,h,x)}catch(e){}}}}return t}},396103:(e,t)=>{/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case f:case s:case a:case i:case p:return e;default:switch(e=e&&e.$$typeof){case c:case d:case l:return e;default:return t}}case m:case y:case n:return t}}}function h(e){return b(e)===f}t.typeOf=b,t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=d,t.Fragment=s,t.Lazy=m,t.Memo=y,t.Portal=n,t.Profiler=a,t.StrictMode=i,t.Suspense=p,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===a||e===i||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d)},t.isAsyncMode=function(e){return h(e)||b(e)===u},t.isConcurrentMode=h,t.isContextConsumer=function(e){return b(e)===c},t.isContextProvider=function(e){return b(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return b(e)===d},t.isFragment=function(e){return b(e)===s},t.isLazy=function(e){return b(e)===m},t.isMemo=function(e){return b(e)===y},t.isPortal=function(e){return b(e)===n},t.isProfiler=function(e){return b(e)===a},t.isStrictMode=function(e){return b(e)===i},t.isSuspense=function(e){return b(e)===p}},121296:(e,t,r)=>{e.exports=r(396103)},869921:(e,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,x=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case f:case s:case a:case i:case p:return e;default:switch(e=e&&e.$$typeof){case c:case d:case b:case m:case l:return e;default:return t}}case n:return t}}}function C(e){return w(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=d,t.Fragment=s,t.Lazy=b,t.Memo=m,t.Portal=n,t.Profiler=a,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return C(e)||w(e)===u},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===s},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===a||e===i||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===x||e.$$typeof===g||e.$$typeof===S||e.$$typeof===h)},t.typeOf=w},659864:(e,t,r)=>{e.exports=r(869921)},891162:(e,t,r)=>{r.d(t,{Q6:()=>u,ZP:()=>a,qe:()=>l,yU:()=>c});var o=r(520893);let n=(e,t)=>e.length===t.length&&e.every((e,r)=>e===t[r]),s=e=>e;function i(e,t=n,r=s){return function(o){let n=[];return function(...s){let i=n.find(e=>t(e.args,r(s)));if(i)return i.result;let a=o(...s);return n.push({args:r(s),result:a}),e&&n.length>e&&n.shift(),a}}}let a=i(),l=i(1),c=i(void 0,n,e=>[JSON.stringify(e)]),u=i(0,(e,t)=>e.length===t.length&&e.every((e,r)=>(0,o.Z)(e,t[r])))},5859:(e,t,r)=>{r.d(t,{B:()=>f,LC:()=>c,P2:()=>l,fH:()=>u,gf:()=>d});var o=r(667294),n=r(642190),s=r(520893),i=r(785893);let a=(0,o.createContext)();function l({children:e,initialValue:t}){let[r,l]=(0,o.useState)(t),c=(0,o.useMemo)(()=>({requestContext:r,updateRequestContext:e=>{let t={...r,...e};(0,s.Z)(r,e)||l(t),(0,n.J)(t)}}),[r]);return(0,i.jsx)(a.Provider,{value:c,children:e})}let c=({children:e})=>{let t=(0,o.useContext)(a);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)},u=({children:e})=>{let t=(0,o.useContext)(a);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)};function f(){let e=(0,o.useContext)(a);if(!e)throw Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function d(){let e=(0,o.useContext)(a);if(!e)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},642190:(e,t,r)=>{let o;function n(e){o=e}function s(){return o}r.d(t,{J:()=>n,l:()=>s})},520893:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&r.every(r=>e[r]===t[r])}},740183:(e,t,r)=>{r.d(t,{Z:()=>b,m:()=>p});var o=r(667294),n=r(883119),s=r(140017),i=r(406893),a=r(5859),l=r(923368),c=r(604625),u=r(71980),f=r(589564),d=r(785893);let p=4,y=`
@keyframes showShadow {
  0% {
    box-shadow: none;
  }

  100% {
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  }
}

@keyframes hideShadow {
  0% {
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  }

  100% {
    box-shadow: none;
  }
}
`,m=({deepLinkBackGoesToBoard:e,isNewOrRes:t,onClick:r,showLabel:i=!1,trafficSource:l,showShadow:c,size:u="lg"})=>{let f=(0,s.ZP)(),{isRTL:p}=(0,a.B)(),y=()=>(0,d.jsx)(n.iP,{onTap:r,rounding:"pill",children:(0,d.jsx)(n.xu,{left:!0,maxWidth:90,padding:2,children:(0,d.jsx)(n.X6,{align:"center",size:"400",children:f.bt("Para você", "For you", "closeup.backButton.label", undefined, true)})})},"buttonBack"),m=i&&("feed_home"===l||"deep_linking"===l&&!e)&&t;return(0,d.jsxs)(o.Fragment,{children:[m&&p?(0,d.jsx)(y,{}):null,(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{animation:c?"showShadow 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards":"hideShadow 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"}},rounding:"circle",children:(0,d.jsx)(n.hU,{accessibilityLabel:f.bt("Voltar", "Back", "backButton.accessibilityLabel", undefined, true),bgColor:"white",dataTestId:"back-icon-button",icon:"directional-arrow-left",iconColor:"darkGray",onClick:r,size:u})},"back-button-icon"),m&&!p?(0,d.jsx)(y,{}):null]})};function b({deepLinkBackGoesToBoard:e,handleScroll:t,isNewOrRes:r,marginTop:s,onClick:b,showLabel:h=!1,trafficSource:x,showShadow:g}){let{closeupWithinMasonryEnabled:S}=(0,l.x4)(),{isRTL:w}=(0,a.B)(),C=(0,f.Z)(),v=w?{right:0}:{left:C};(0,o.useEffect)(()=>t?(window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)):()=>{},[]);let P=s||0===s?4*s:4*p;return S&&(P=0),S?(0,d.jsx)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{marginTop:P,...v}},"data-test-id":"back-button",display:"flex",paddingX:4,position:S?"relative":"fixed",children:(0,d.jsx)(m,{deepLinkBackGoesToBoard:e,isNewOrRes:r,marginTop:s,onClick:b,showLabel:h,showShadow:g,trafficSource:x})}):(0,d.jsxs)(u.Z,{position:"fixed",style:{zIndex:c.Cq,width:"60px",maxWidth:"265px"},children:[(0,d.jsx)(i.Z,{unsafeCSS:y}),(0,d.jsx)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{marginTop:P,...v}},"data-test-id":"back-button",display:"flex",paddingX:4,position:S?"relative":"fixed",children:(0,d.jsx)(m,{deepLinkBackGoesToBoard:e,isNewOrRes:r,marginTop:s,onClick:b,showLabel:h,showShadow:g,trafficSource:x})})]})}},71980:(e,t,r)=>{r.d(t,{Z:()=>u});var o=r(667294),n=r(883119),s=r(807028),i=r(136359),a=r(983983),l=r(4058),c=r(785893);function u({children:e,className:t,forwardRef:r,offset:u=0,position:f,shouldShowShadow:d=!1,style:p={},top:y,stickyZIndex:m}){let{setIsContentHeaderPresent:b}=(0,s.i)();(0,o.useEffect)(()=>(b(!0),function(){b(!1)}),[]);let{currentScrollPosition:h,isScrolled:x,setSubheaderShadow:g}=(0,l.WQ)();(0,o.useEffect)(()=>(d&&g("contentHeader"),()=>{d&&g(null)}),[d]);let S=!1;"pending"!==y&&(S=null!=y?h>=y:x);let w=(0,i.t)(),C=(0,c.jsx)("div",{ref:r,className:t,style:{...p,top:w+u,...S&&d?{...a.Rz,zIndex:499}:{},...f&&"sticky"!==f?{position:f}:{}},children:e});return"sticky"===f?(0,c.jsx)(n.Le,{top:w+u,zIndex:m||new n.Ry(1),children:C}):C}},807028:(e,t,r)=>{r.d(t,{Z:()=>l,i:()=>a});var o=r(667294),n=r(342513),s=r(785893);let{Provider:i,useHook:a}=(0,n.Z)("ContentHeader");function l({children:e}){let[t,r]=(0,o.useState)(!1),n=(0,o.useMemo)(()=>({isContentHeaderPresent:t,setIsContentHeaderPresent:r}),[t]);return(0,s.jsx)(i,{value:n,children:e})}},136359:(e,t,r)=>{r.d(t,{c:()=>n,t:()=>s});var o=r(514810);function n({children:e}){let{height:t}=(0,o.Z)();return e(t)}function s(){let{height:e}=(0,o.Z)();return e}},514810:(e,t,r)=>{r.d(t,{C:()=>o,Z:()=>s});let{Provider:o,useHook:n}=(0,r(342513).Z)("Header"),s=n},4058:(e,t,r)=>{r.d(t,{Hv:()=>c,WQ:()=>l});var o=r(667294),n=r(342513),s=r(920434),i=r(785893);let{Provider:a,useHook:l}=(0,n.Z)("HeaderShadow");function c({children:e}){let[t,r]=(0,o.useState)(!1),[n,l]=(0,o.useState)(0),[c,u]=(0,o.useState)(null);(0,o.useEffect)(()=>{let e=(0,s.Z)(()=>{r(window.scrollY>0),l(window.scrollY)},50);return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let f=(0,o.useMemo)(()=>({currentScrollPosition:n,isScrolled:t,setSubheaderShadow:u,subheaderShadow:c}),[n,t,u,c]);return(0,i.jsx)(a,{value:f,children:e})}},83255:(e,t,r)=>{r.d(t,{E:()=>o,Z:()=>s});let{Provider:o,useHook:n}=(0,r(342513).Z)("VerticalNav",{width:0}),s=n},589564:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(83255);function n(){let{width:e}=(0,o.Z)();return e}},923368:(e,t,r)=>{r.d(t,{Nb:()=>a,Of:()=>l,YO:()=>i,ZP:()=>f,x4:()=>u});var o=r(667294),n=r(891162),s=r(392029);let i=({showProductDetailPage:e,isLargerPane:t,showCloseupContentRight:r})=>e&&t?r?s.Uj:s.zT:1,a=(0,n.qe)(({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:r,showProductDetailPage:o,viewportSize:n,maxWidth:s,descriptionPaneWidth:i,inCommentFooterRedesignExp:a,isCloseupRelatedPinsAboveTheFoldEnabled:l,isCommentThreadExpanded:c,isMediaViewerOpen:u,isPinNoteExpanded:f,isProductDetailsExpanded:d,isShoppingModuleExpanded:p,setIsCommentThreadExpanded:y,setIsMediaViewerOpen:m,setIsPinNoteExpanded:b,setIsProductDetailsExpanded:h,setIsShoppingModuleExpanded:x,closeupWithinMasonryEnabled:g,peekCloseupEnabled:S,isInRemoveMagnifyingGlassVariant:w,setAbortNoActionPlacementTimeout:C,clientTrackingParams:v,isCloseupMediaViewerOpen:P,setIsCloseupMediaViewerOpen:_})=>({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:r,showProductDetailPage:o,viewportSize:n,maxWidth:s,descriptionPaneWidth:i,inCommentFooterRedesignExp:a,isCloseupRelatedPinsAboveTheFoldEnabled:l,isCommentThreadExpanded:c,isCloseupMediaViewerOpen:P,isMediaViewerOpen:u,isPinNoteExpanded:f,isProductDetailsExpanded:d,isShoppingModuleExpanded:p,setIsCommentThreadExpanded:y,setIsCloseupMediaViewerOpen:_,setIsMediaViewerOpen:m,setIsPinNoteExpanded:b,setIsProductDetailsExpanded:h,setIsShoppingModuleExpanded:x,closeupWithinMasonryEnabled:g,peekCloseupEnabled:S,isInRemoveMagnifyingGlassVariant:w,setAbortNoActionPlacementTimeout:C,clientTrackingParams:v})),l={showCloseupContentRight:!0,showProductDetailPage:!1,viewportSize:"lg",paneWidth:s.Gg,pdpCarouselSlotToPaneRatio:1,maxWidth:s.u6,descriptionPaneWidth:s.u6-s.Gg,inCommentFooterRedesignExp:!1,isCloseupRelatedPinsAboveTheFoldEnabled:!1,isCommentThreadExpanded:!1,isCloseupMediaViewerOpen:!1,isMediaViewerOpen:!1,isPinNoteExpanded:!1,isShoppingModuleExpanded:!1,closeupWithinMasonryEnabled:!1,peekCloseupEnabled:!1,isInRemoveMagnifyingGlassVariant:!1,setAbortNoActionPlacementTimeout:()=>{},setIsCloseupMediaViewerOpen:()=>{},setIsMediaViewerOpen:()=>{},setIsShoppingModuleExpanded:()=>{}},c=(0,o.createContext)(l);function u(){let e=(0,o.useContext)(c);if(!e)throw Error("useCloseupContext must be used within CloseupContextProvider");return e}let f=c},392029:(e,t,r)=>{r.d(t,{$T:()=>g,CI:()=>i,Ch:()=>l,ER:()=>x,Gb:()=>c,Gg:()=>n,Hf:()=>C,Ie:()=>y,J6:()=>p,KP:()=>m,Kn:()=>a,O5:()=>S,Uj:()=>u,bx:()=>b,d2:()=>d,g9:()=>h,iB:()=>v,rv:()=>w,u6:()=>s,zT:()=>f});var o=r(883119);let n=508,s=1016,i=488,a=992,l=672,c=1176,u=.6,f=.84,d=40,p=16,y=72,m=740,b=912,h=32,x=16,g=24,S=2,w=1,C=new o.Ry(5),v={ARTICLE:"https://schema.org/Article",BRAND:"https://schema.org/Brand",PRODUCT:"https://schema.org/Product",RECIPE:"https://schema.org/Recipe",OFFER:"https://schema.org/Offer",OUT_OF_STOCK:"https://schema.org/OutOfStock",PERSON:"https://schema.org/Person"}},604625:(e,t,r)=>{r.d(t,{Cq:()=>u,Dk:()=>d,Fk:()=>n,fS:()=>c,km:()=>f,lI:()=>i,lJ:()=>s,mS:()=>l,qW:()=>a});var o=r(883119);let n=new o.Ry(1),s=3,i=new o.Ry(s),a=2,l=new o.Ry(a),c=3,u=4,f=new o.Ry(5),d=new o.Ry(100)},487462:(e,t,r)=>{r.d(t,{Z:()=>o});function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(null,arguments)}},894578:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(589611);function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,o.Z)(e,t)}},263366:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t){if(null==e)return{};var r={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(t.includes(o))continue;r[o]=e[o]}return r}},589611:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/85423.pt_BR-10d58d527f2ddbfb.mjs.map
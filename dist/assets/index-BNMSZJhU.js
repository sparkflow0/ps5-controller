function hc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const a=Object.getOwnPropertyDescriptor(r,l);a&&Object.defineProperty(e,l,a.get?a:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vc={exports:{}},Ra={},gc={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),cp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),gp=Symbol.for("react.memo"),Sp=Symbol.for("react.lazy"),Fs=Symbol.iterator;function Ep(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ec=Object.assign,kc={};function dr(e,t,n){this.props=e,this.context=t,this.refs=kc,this.updater=n||Sc}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wc(){}wc.prototype=dr.prototype;function Pi(e,t,n){this.props=e,this.context=t,this.refs=kc,this.updater=n||Sc}var xi=Pi.prototype=new wc;xi.constructor=Pi;Ec(xi,dr.prototype);xi.isPureReactComponent=!0;var bs=Array.isArray,Cc=Object.prototype.hasOwnProperty,_i={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var r,l={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Cc.call(t,r)&&!Pc.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:ul,type:e,key:a,ref:o,props:l,_owner:_i.current}}function kp(e,t){return{$$typeof:ul,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Li(e){return typeof e=="object"&&e!==null&&e.$$typeof===ul}function wp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zs=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wp(""+e.key):t.toString(36)}function Vl(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ul:case cp:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Xa(o,0):r,bs(l)?(n="",e!=null&&(n=e.replace(zs,"$&/")+"/"),Vl(l,t,n,"",function(u){return u})):l!=null&&(Li(l)&&(l=kp(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(zs,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",bs(e))for(var i=0;i<e.length;i++){a=e[i];var s=r+Xa(a,i);o+=Vl(a,t,n,s,l)}else if(s=Ep(e),typeof s=="function")for(e=s.call(e),i=0;!(a=e.next()).done;)a=a.value,s=r+Xa(a,i++),o+=Vl(a,t,n,s,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(e,t,n){if(e==null)return e;var r=[],l=0;return Vl(e,r,"","",function(a){return t.call(n,a,l++)}),r}function Cp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Wl={transition:null},Pp={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:_i};function _c(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:xl,forEach:function(e,t,n){xl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xl(e,function(){t++}),t},toArray:function(e){return xl(e,function(t){return t})||[]},only:function(e){if(!Li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=dr;K.Fragment=dp;K.Profiler=pp;K.PureComponent=Pi;K.StrictMode=fp;K.Suspense=vp;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;K.act=_c;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ec({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=_i.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)Cc.call(t,s)&&!Pc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:ul,type:e.type,key:l,ref:a,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};K.createElement=xc;K.createFactory=function(e){var t=xc.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:yp,render:e}};K.isValidElement=Li;K.lazy=function(e){return{$$typeof:Sp,_payload:{_status:-1,_result:e},_init:Cp}};K.memo=function(e,t){return{$$typeof:gp,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Wl.transition;Wl.transition={};try{e()}finally{Wl.transition=t}};K.unstable_act=_c;K.useCallback=function(e,t){return Ve.current.useCallback(e,t)};K.useContext=function(e){return Ve.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ve.current.useEffect(e,t)};K.useId=function(){return Ve.current.useId()};K.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ve.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};K.useRef=function(e){return Ve.current.useRef(e)};K.useState=function(e){return Ve.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ve.current.useTransition()};K.version="18.3.1";gc.exports=K;var T=gc.exports;const xp=yc(T),_p=hc({__proto__:null,default:xp},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=T,Tp=Symbol.for("react.element"),Rp=Symbol.for("react.fragment"),Np=Object.prototype.hasOwnProperty,Ip=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bp={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,l={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Np.call(t,r)&&!Bp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Tp,type:e,key:a,ref:o,props:l,_owner:Ip.current}}Ra.Fragment=Rp;Ra.jsx=Lc;Ra.jsxs=Lc;vc.exports=Ra;var O=vc.exports,Lo={},Tc={exports:{}},rt={},Rc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,j){var V=L.length;L.push(j);e:for(;0<V;){var Z=V-1>>>1,te=L[Z];if(0<l(te,j))L[Z]=j,L[V]=te,V=Z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var j=L[0],V=L.pop();if(V!==j){L[0]=V;e:for(var Z=0,te=L.length,Ne=te>>>1;Z<Ne;){var Ae=2*(Z+1)-1,xe=L[Ae],ye=Ae+1,at=L[ye];if(0>l(xe,V))ye<te&&0>l(at,xe)?(L[Z]=at,L[ye]=V,Z=ye):(L[Z]=xe,L[Ae]=V,Z=Ae);else if(ye<te&&0>l(at,V))L[Z]=at,L[ye]=V,Z=ye;else break e}}return j}function l(L,j){var V=L.sortIndex-j.sortIndex;return V!==0?V:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var s=[],u=[],f=1,d=null,m=3,S=!1,k=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=L)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function C(L){if(w=!1,y(L),!k)if(n(s)!==null)k=!0,Ee(R);else{var j=n(u);j!==null&&Ge(C,j.startTime-L)}}function R(L,j){k=!1,w&&(w=!1,h(x),x=-1),S=!0;var V=m;try{for(y(j),d=n(s);d!==null&&(!(d.expirationTime>j)||L&&!ee());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,m=d.priorityLevel;var te=Z(d.expirationTime<=j);j=e.unstable_now(),typeof te=="function"?d.callback=te:d===n(s)&&r(s),y(j)}else r(s);d=n(s)}if(d!==null)var Ne=!0;else{var Ae=n(u);Ae!==null&&Ge(C,Ae.startTime-j),Ne=!1}return Ne}finally{d=null,m=V,S=!1}}var M=!1,v=null,x=-1,U=5,I=-1;function ee(){return!(e.unstable_now()-I<U)}function le(){if(v!==null){var L=e.unstable_now();I=L;var j=!0;try{j=v(!0,L)}finally{j?W():(M=!1,v=null)}}else M=!1}var W;if(typeof c=="function")W=function(){c(le)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,re=q.port2;q.port1.onmessage=le,W=function(){re.postMessage(null)}}else W=function(){N(le,0)};function Ee(L){v=L,M||(M=!0,W())}function Ge(L,j){x=N(function(){L(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){k||S||(k=!0,Ee(R))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var V=m;m=j;try{return L()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=m;m=L;try{return j()}finally{m=V}},e.unstable_scheduleCallback=function(L,j,V){var Z=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Z+V:Z):V=Z,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=V+te,L={id:f++,callback:j,priorityLevel:L,startTime:V,expirationTime:te,sortIndex:-1},V>Z?(L.sortIndex=V,t(u,L),n(s)===null&&L===n(u)&&(w?(h(x),x=-1):w=!0,Ge(C,V-Z))):(L.sortIndex=te,t(s,L),k||S||(k=!0,Ee(R))),L},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(L){var j=m;return function(){var V=m;m=j;try{return L.apply(this,arguments)}finally{m=V}}}})(Nc);Rc.exports=Nc;var Op=Rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=T,nt=Op;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,Vr={};function Nn(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=Object.prototype.hasOwnProperty,Ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,js={},Hs={};function Dp(e){return To.call(Hs,e)?!0:To.call(js,e)?!1:Ap.test(e)?Hs[e]=!0:(js[e]=!0,!1)}function Fp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bp(e,t,n,r){if(t===null||typeof t>"u"||Fp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ti=/[\-:]([a-z])/g;function Ri(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ti,Ri);Me[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ti,Ri);Me[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ti,Ri);Me[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ni(e,t,n,r){var l=Me.hasOwnProperty(t)?Me[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bp(t,n,l,r)&&(n=null),r||l===null?Dp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Ii=Symbol.for("react.strict_mode"),Ro=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Bi=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),Io=Symbol.for("react.suspense_list"),Oi=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Mc=Symbol.for("react.offscreen"),Us=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Za;function Rr(e){if(Za===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Za=t&&t[1]||""}return`
`+Za+e}var Ja=!1;function eo(e,t){if(!e||Ja)return"";Ja=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),a=r.stack.split(`
`),o=l.length-1,i=a.length-1;1<=o&&0<=i&&l[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(l[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||l[o]!==a[i]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=i);break}}}finally{Ja=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rr(e):""}function zp(e){switch(e.tag){case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1),e;case 11:return e=eo(e.type.render,!1),e;case 1:return e=eo(e.type,!0),e;default:return""}}function Bo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case jn:return"Portal";case Ro:return"Profiler";case Ii:return"StrictMode";case No:return"Suspense";case Io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Bc:return(e._context.displayName||"Context")+".Provider";case Bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oi:return t=e.displayName||null,t!==null?t:Bo(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Bo(e(t))}catch{}}return null}function jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bo(t);case 8:return t===Ii?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=Ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ll(e){e._valueTracker||(e._valueTracker=Hp(e))}function Dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fc(e,t){t=t.checked,t!=null&&Ni(e,"checked",t,!1)}function Mo(e,t){Fc(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ao(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ao(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ao(e,t,n){(t!=="number"||na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Nr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function bc(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tl,jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vp=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bo(e,t){if(t){if(Vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function zo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function Mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,Jn=null,er=null;function Qs(e){if(e=fl(e)){if(typeof Ho!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ma(t),Ho(e.stateNode,e.type,t))}}function Vc(e){Jn?er?er.push(e):er=[e]:Jn=e}function Wc(){if(Jn){var e=Jn,t=er;if(er=Jn=null,Qs(e),t)for(e=0;e<t.length;e++)Qs(t[e])}}function Gc(e,t){return e(t)}function $c(){}var to=!1;function Qc(e,t,n){if(to)return e(t,n);to=!0;try{return Gc(e,t,n)}finally{to=!1,(Jn!==null||er!==null)&&($c(),Wc())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Uo=!1;if(Ot)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Uo=!1}function Wp(e,t,n,r,l,a,o,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ar=!1,ra=null,la=!1,Vo=null,Gp={onError:function(e){Ar=!0,ra=e}};function $p(e,t,n,r,l,a,o,i,s){Ar=!1,ra=null,Wp.apply(Gp,arguments)}function Qp(e,t,n,r,l,a,o,i,s){if($p.apply(this,arguments),Ar){if(Ar){var u=ra;Ar=!1,ra=null}else throw Error(_(198));la||(la=!0,Vo=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(In(e)!==e)throw Error(_(188))}function Kp(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Ks(l),e;if(a===r)return Ks(l),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,i=l.child;i;){if(i===n){o=!0,n=l,r=a;break}if(i===r){o=!0,r=l,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,r=l;break}if(i===r){o=!0,r=a,n=l;break}i=i.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Yc(e){return e=Kp(e),e!==null?qc(e):null}function qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qc(e);if(t!==null)return t;e=e.sibling}return null}var Xc=nt.unstable_scheduleCallback,Ys=nt.unstable_cancelCallback,Yp=nt.unstable_shouldYield,qp=nt.unstable_requestPaint,we=nt.unstable_now,Xp=nt.unstable_getCurrentPriorityLevel,Ai=nt.unstable_ImmediatePriority,Zc=nt.unstable_UserBlockingPriority,aa=nt.unstable_NormalPriority,Zp=nt.unstable_LowPriority,Jc=nt.unstable_IdlePriority,Na=null,Pt=null;function Jp(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var Rl=64,Nl=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~l;i!==0?r=Ir(i):(a&=o,a!==0&&(r=Ir(a)))}else o=n&~l,o!==0?r=Ir(o):a!==0&&(r=Ir(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),l=1<<n,r|=e[n],t&=~l;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-vt(a),i=1<<o,s=l[o];s===-1?(!(i&n)||i&r)&&(l[o]=rm(i,t)):s<=t&&(e.expiredLanes|=i),a&=~i}}function Wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ed(){var e=Rl;return Rl<<=1,!(Rl&4194240)&&(Rl=64),e}function no(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function am(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-vt(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function Di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var oe=0;function td(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nd,Fi,rd,ld,ad,Go=!1,Il=[],qt=null,Xt=null,Zt=null,$r=new Map,Qr=new Map,Gt=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function Er(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=fl(t),t!==null&&Fi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function im(e,t,n,r,l){switch(t){case"focusin":return qt=Er(qt,e,t,n,r,l),!0;case"dragenter":return Xt=Er(Xt,e,t,n,r,l),!0;case"mouseover":return Zt=Er(Zt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return $r.set(a,Er($r.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Qr.set(a,Er(Qr.get(a)||null,e,t,n,r,l)),!0}return!1}function od(e){var t=gn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=Kc(n),t!==null){e.blockedOn=t,ad(e.priority,function(){rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jo=r,n.target.dispatchEvent(r),jo=null}else return t=fl(n),t!==null&&Fi(t),e.blockedOn=n,!1;t.shift()}return!0}function Xs(e,t,n){Gl(e)&&n.delete(t)}function sm(){Go=!1,qt!==null&&Gl(qt)&&(qt=null),Xt!==null&&Gl(Xt)&&(Xt=null),Zt!==null&&Gl(Zt)&&(Zt=null),$r.forEach(Xs),Qr.forEach(Xs)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Go||(Go=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,sm)))}function Kr(e){function t(l){return kr(l,e)}if(0<Il.length){kr(Il[0],e);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&kr(qt,e),Xt!==null&&kr(Xt,e),Zt!==null&&kr(Zt,e),$r.forEach(t),Qr.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)od(n),n.blockedOn===null&&Gt.shift()}var tr=Ft.ReactCurrentBatchConfig,ia=!0;function um(e,t,n,r){var l=oe,a=tr.transition;tr.transition=null;try{oe=1,bi(e,t,n,r)}finally{oe=l,tr.transition=a}}function cm(e,t,n,r){var l=oe,a=tr.transition;tr.transition=null;try{oe=4,bi(e,t,n,r)}finally{oe=l,tr.transition=a}}function bi(e,t,n,r){if(ia){var l=$o(e,t,n,r);if(l===null)po(e,t,r,sa,n),qs(e,r);else if(im(l,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<om.indexOf(e)){for(;l!==null;){var a=fl(l);if(a!==null&&nd(a),a=$o(e,t,n,r),a===null&&po(e,t,r,sa,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var sa=null;function $o(e,t,n,r){if(sa=null,e=Mi(r),e=gn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sa=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case Ai:return 1;case Zc:return 4;case aa:case Zp:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var Qt=null,zi=null,$l=null;function sd(){if($l)return $l;var e,t=zi,n=t.length,r,l="value"in Qt?Qt.value:Qt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[a-r];r++);return $l=l.slice(e,1<r?1-r:void 0)}function Ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function Zs(){return!1}function lt(e){function t(n,r,l,a,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Bl:Zs,this.isPropagationStopped=Zs,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=lt(fr),dl=he({},fr,{view:0,detail:0}),dm=lt(dl),ro,lo,wr,Ia=he({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(ro=e.screenX-wr.screenX,lo=e.screenY-wr.screenY):lo=ro=0,wr=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),Js=lt(Ia),fm=he({},Ia,{dataTransfer:0}),pm=lt(fm),mm=he({},dl,{relatedTarget:0}),ao=lt(mm),hm=he({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),ym=lt(hm),vm=he({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=lt(vm),Sm=he({},fr,{data:0}),eu=lt(Sm),Em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wm[e])?!!t[e]:!1}function Hi(){return Cm}var Pm=he({},dl,{key:function(e){if(e.key){var t=Em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xm=lt(Pm),_m=he({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=lt(_m),Lm=he({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),Tm=lt(Lm),Rm=he({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nm=lt(Rm),Im=he({},Ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=lt(Im),Om=[9,13,27,32],Ui=Ot&&"CompositionEvent"in window,Dr=null;Ot&&"documentMode"in document&&(Dr=document.documentMode);var Mm=Ot&&"TextEvent"in window&&!Dr,ud=Ot&&(!Ui||Dr&&8<Dr&&11>=Dr),nu=" ",ru=!1;function cd(e,t){switch(e){case"keyup":return Om.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Am(e,t){switch(e){case"compositionend":return dd(t);case"keypress":return t.which!==32?null:(ru=!0,nu);case"textInput":return e=t.data,e===nu&&ru?null:e;default:return null}}function Dm(e,t){if(Un)return e==="compositionend"||!Ui&&cd(e,t)?(e=sd(),$l=zi=Qt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fm[e.type]:t==="textarea"}function fd(e,t,n,r){Vc(r),t=ua(t,"onChange"),0<t.length&&(n=new ji("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Yr=null;function bm(e){Cd(e,0)}function Ba(e){var t=Gn(e);if(Dc(t))return e}function zm(e,t){if(e==="change")return t}var pd=!1;if(Ot){var oo;if(Ot){var io="oninput"in document;if(!io){var au=document.createElement("div");au.setAttribute("oninput","return;"),io=typeof au.oninput=="function"}oo=io}else oo=!1;pd=oo&&(!document.documentMode||9<document.documentMode)}function ou(){Fr&&(Fr.detachEvent("onpropertychange",md),Yr=Fr=null)}function md(e){if(e.propertyName==="value"&&Ba(Yr)){var t=[];fd(t,Yr,e,Mi(e)),Qc(bm,t)}}function jm(e,t,n){e==="focusin"?(ou(),Fr=t,Yr=n,Fr.attachEvent("onpropertychange",md)):e==="focusout"&&ou()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(Yr)}function Um(e,t){if(e==="click")return Ba(t)}function Vm(e,t){if(e==="input"||e==="change")return Ba(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Wm;function qr(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!To.call(t,l)||!St(e[l],t[l]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yd(){for(var e=window,t=na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=na(e.document)}return t}function Vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=yd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&Vi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=su(n,a);var o=su(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $m=Ot&&"documentMode"in document&&11>=document.documentMode,Vn=null,Qo=null,br=null,Ko=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ko||Vn==null||Vn!==na(r)||(r=Vn,"selectionStart"in r&&Vi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&qr(br,r)||(br=r,r=ua(Qo,"onSelect"),0<r.length&&(t=new ji("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Ol(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},so={},vd={};Ot&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function Oa(e){if(so[e])return so[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vd)return so[e]=t[n];return e}var gd=Oa("animationend"),Sd=Oa("animationiteration"),Ed=Oa("animationstart"),kd=Oa("transitionend"),wd=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){wd.set(e,t),Nn(t,[e])}for(var uo=0;uo<cu.length;uo++){var co=cu[uo],Qm=co.toLowerCase(),Km=co[0].toUpperCase()+co.slice(1);sn(Qm,"on"+Km)}sn(gd,"onAnimationEnd");sn(Sd,"onAnimationIteration");sn(Ed,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(kd,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qp(r,t,void 0,e),e.currentTarget=null}function Cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==a&&l.isPropagationStopped())break e;du(l,i,u),a=s}else for(o=0;o<r.length;o++){if(i=r[o],s=i.instance,u=i.currentTarget,i=i.listener,s!==a&&l.isPropagationStopped())break e;du(l,i,u),a=s}}}if(la)throw e=Vo,la=!1,Vo=null,e}function ue(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var r=e+"__bubble";n.has(r)||(Pd(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),Pd(n,e,r,t)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[Ml]){e[Ml]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(Ym.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ml]||(t[Ml]=!0,fo("selectionchange",!1,t))}}function Pd(e,t,n,r){switch(id(t)){case 1:var l=um;break;case 4:l=cm;break;default:l=bi}n=l.bind(null,t,n,e),l=void 0,!Uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function po(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;i!==null;){if(o=gn(i),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}i=i.parentNode}}r=r.return}Qc(function(){var u=a,f=Mi(n),d=[];e:{var m=wd.get(e);if(m!==void 0){var S=ji,k=e;switch(e){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":S=xm;break;case"focusin":k="focus",S=ao;break;case"focusout":k="blur",S=ao;break;case"beforeblur":case"afterblur":S=ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Tm;break;case gd:case Sd:case Ed:S=ym;break;case kd:S=Nm;break;case"scroll":S=dm;break;case"wheel":S=Bm;break;case"copy":case"cut":case"paste":S=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=tu}var w=(t&4)!==0,N=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,y;c!==null;){y=c;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,h!==null&&(C=Gr(c,h),C!=null&&w.push(Zr(c,C,y)))),N)break;c=c.return}0<w.length&&(m=new S(m,k,null,n,f),d.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==jo&&(k=n.relatedTarget||n.fromElement)&&(gn(k)||k[Mt]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=u,k=k?gn(k):null,k!==null&&(N=In(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=u),S!==k)){if(w=Js,C="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=tu,C="onPointerLeave",h="onPointerEnter",c="pointer"),N=S==null?m:Gn(S),y=k==null?m:Gn(k),m=new w(C,c+"leave",S,n,f),m.target=N,m.relatedTarget=y,C=null,gn(f)===u&&(w=new w(h,c+"enter",k,n,f),w.target=y,w.relatedTarget=N,C=w),N=C,S&&k)t:{for(w=S,h=k,c=0,y=w;y;y=Fn(y))c++;for(y=0,C=h;C;C=Fn(C))y++;for(;0<c-y;)w=Fn(w),c--;for(;0<y-c;)h=Fn(h),y--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=Fn(w),h=Fn(h)}w=null}else w=null;S!==null&&fu(d,m,S,w,!1),k!==null&&N!==null&&fu(d,N,k,w,!0)}}e:{if(m=u?Gn(u):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var R=zm;else if(lu(m))if(pd)R=Vm;else{R=Hm;var M=jm}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=Um);if(R&&(R=R(e,u))){fd(d,R,n,f);break e}M&&M(e,m,u),e==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Ao(m,"number",m.value)}switch(M=u?Gn(u):window,e){case"focusin":(lu(M)||M.contentEditable==="true")&&(Vn=M,Qo=u,br=null);break;case"focusout":br=Qo=Vn=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,uu(d,n,f);break;case"selectionchange":if($m)break;case"keydown":case"keyup":uu(d,n,f)}var v;if(Ui)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Un?cd(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ud&&n.locale!=="ko"&&(Un||x!=="onCompositionStart"?x==="onCompositionEnd"&&Un&&(v=sd()):(Qt=f,zi="value"in Qt?Qt.value:Qt.textContent,Un=!0)),M=ua(u,x),0<M.length&&(x=new eu(x,e,null,n,f),d.push({event:x,listeners:M}),v?x.data=v:(v=dd(n),v!==null&&(x.data=v)))),(v=Mm?Am(e,n):Dm(e,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(f=new eu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=v))}Cd(d,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ua(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Gr(e,n),a!=null&&r.unshift(Zr(e,a,l)),a=Gr(e,t),a!=null&&r.push(Zr(e,a,l))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,l){for(var a=t._reactName,o=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,l?(s=Gr(n,a),s!=null&&o.unshift(Zr(n,s,i))):l||(s=Gr(n,a),s!=null&&o.push(Zr(n,s,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qm=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(qm,`
`).replace(Xm,"")}function Al(e,t,n){if(t=pu(t),pu(e)!==t&&n)throw Error(_(425))}function ca(){}var Yo=null,qo=null;function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(eh)}:Zo;function eh(e){setTimeout(function(){throw e})}function mo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Kr(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+pr,Jr="__reactProps$"+pr,Mt="__reactContainer$"+pr,Jo="__reactEvents$"+pr,th="__reactListeners$"+pr,nh="__reactHandles$"+pr;function gn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[Ct])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function fl(e){return e=e[Ct]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ma(e){return e[Jr]||null}var ei=[],$n=-1;function un(e){return{current:e}}function ce(e){0>$n||(e.current=ei[$n],ei[$n]=null,$n--)}function se(e,t){$n++,ei[$n]=e.current,e.current=t}var on={},ze=un(on),Ye=un(!1),Pn=on;function ar(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function qe(e){return e=e.childContextTypes,e!=null}function da(){ce(Ye),ce(ze)}function yu(e,t,n){if(ze.current!==on)throw Error(_(168));se(ze,t),se(Ye,n)}function xd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(_(108,jp(e)||"Unknown",l));return he({},n,r)}function fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Pn=ze.current,se(ze,e),se(Ye,Ye.current),!0}function vu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=xd(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,ce(Ye),ce(ze),se(ze,e)):ce(Ye),se(Ye,n)}var Rt=null,Aa=!1,ho=!1;function _d(e){Rt===null?Rt=[e]:Rt.push(e)}function rh(e){Aa=!0,_d(e)}function cn(){if(!ho&&Rt!==null){ho=!0;var e=0,t=oe;try{var n=Rt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,Aa=!1}catch(l){throw Rt!==null&&(Rt=Rt.slice(e+1)),Xc(Ai,cn),l}finally{oe=t,ho=!1}}return null}var Qn=[],Kn=0,pa=null,ma=0,ot=[],it=0,xn=null,Nt=1,It="";function mn(e,t){Qn[Kn++]=ma,Qn[Kn++]=pa,pa=e,ma=t}function Ld(e,t,n){ot[it++]=Nt,ot[it++]=It,ot[it++]=xn,xn=e;var r=Nt;e=It;var l=32-vt(r)-1;r&=~(1<<l),n+=1;var a=32-vt(t)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Nt=1<<32-vt(t)+l|n<<l|r,It=a+e}else Nt=1<<a|n<<l|r,It=e}function Wi(e){e.return!==null&&(mn(e,1),Ld(e,1,0))}function Gi(e){for(;e===pa;)pa=Qn[--Kn],Qn[Kn]=null,ma=Qn[--Kn],Qn[Kn]=null;for(;e===xn;)xn=ot[--it],ot[it]=null,It=ot[--it],ot[it]=null,Nt=ot[--it],ot[it]=null}var tt=null,et=null,fe=!1,yt=null;function Td(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Nt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(fe){var t=et;if(t){var n=t;if(!gu(e,t)){if(ti(e))throw Error(_(418));t=Jt(n.nextSibling);var r=tt;t&&gu(e,t)?Td(r,n):(e.flags=e.flags&-4097|2,fe=!1,tt=e)}}else{if(ti(e))throw Error(_(418));e.flags=e.flags&-4097|2,fe=!1,tt=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Dl(e){if(e!==tt)return!1;if(!fe)return Su(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xo(e.type,e.memoizedProps)),t&&(t=et)){if(ti(e))throw Rd(),Error(_(418));for(;t;)Td(e,t),t=Jt(t.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?Jt(e.stateNode.nextSibling):null;return!0}function Rd(){for(var e=et;e;)e=Jt(e.nextSibling)}function or(){et=tt=null,fe=!1}function $i(e){yt===null?yt=[e]:yt.push(e)}var lh=Ft.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var i=l.refs;o===null?delete i[a]:i[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Fl(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Eu(e){var t=e._init;return t(e._payload)}function Nd(e){function t(h,c){if(e){var y=h.deletions;y===null?(h.deletions=[c],h.flags|=16):y.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function l(h,c){return h=rn(h,c),h.index=0,h.sibling=null,h}function a(h,c,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<c?(h.flags|=2,c):y):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,c,y,C){return c===null||c.tag!==6?(c=wo(y,h.mode,C),c.return=h,c):(c=l(c,y),c.return=h,c)}function s(h,c,y,C){var R=y.type;return R===Hn?f(h,c,y.props.children,C,y.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vt&&Eu(R)===c.type)?(C=l(c,y.props),C.ref=Cr(h,c,y),C.return=h,C):(C=ea(y.type,y.key,y.props,null,h.mode,C),C.ref=Cr(h,c,y),C.return=h,C)}function u(h,c,y,C){return c===null||c.tag!==4||c.stateNode.containerInfo!==y.containerInfo||c.stateNode.implementation!==y.implementation?(c=Co(y,h.mode,C),c.return=h,c):(c=l(c,y.children||[]),c.return=h,c)}function f(h,c,y,C,R){return c===null||c.tag!==7?(c=Cn(y,h.mode,C,R),c.return=h,c):(c=l(c,y),c.return=h,c)}function d(h,c,y){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wo(""+c,h.mode,y),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case _l:return y=ea(c.type,c.key,c.props,null,h.mode,y),y.ref=Cr(h,null,c),y.return=h,y;case jn:return c=Co(c,h.mode,y),c.return=h,c;case Vt:var C=c._init;return d(h,C(c._payload),y)}if(Nr(c)||gr(c))return c=Cn(c,h.mode,y,null),c.return=h,c;Fl(h,c)}return null}function m(h,c,y,C){var R=c!==null?c.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:i(h,c,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:return y.key===R?s(h,c,y,C):null;case jn:return y.key===R?u(h,c,y,C):null;case Vt:return R=y._init,m(h,c,R(y._payload),C)}if(Nr(y)||gr(y))return R!==null?null:f(h,c,y,C,null);Fl(h,y)}return null}function S(h,c,y,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(y)||null,i(c,h,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case _l:return h=h.get(C.key===null?y:C.key)||null,s(c,h,C,R);case jn:return h=h.get(C.key===null?y:C.key)||null,u(c,h,C,R);case Vt:var M=C._init;return S(h,c,y,M(C._payload),R)}if(Nr(C)||gr(C))return h=h.get(y)||null,f(c,h,C,R,null);Fl(c,C)}return null}function k(h,c,y,C){for(var R=null,M=null,v=c,x=c=0,U=null;v!==null&&x<y.length;x++){v.index>x?(U=v,v=null):U=v.sibling;var I=m(h,v,y[x],C);if(I===null){v===null&&(v=U);break}e&&v&&I.alternate===null&&t(h,v),c=a(I,c,x),M===null?R=I:M.sibling=I,M=I,v=U}if(x===y.length)return n(h,v),fe&&mn(h,x),R;if(v===null){for(;x<y.length;x++)v=d(h,y[x],C),v!==null&&(c=a(v,c,x),M===null?R=v:M.sibling=v,M=v);return fe&&mn(h,x),R}for(v=r(h,v);x<y.length;x++)U=S(v,h,x,y[x],C),U!==null&&(e&&U.alternate!==null&&v.delete(U.key===null?x:U.key),c=a(U,c,x),M===null?R=U:M.sibling=U,M=U);return e&&v.forEach(function(ee){return t(h,ee)}),fe&&mn(h,x),R}function w(h,c,y,C){var R=gr(y);if(typeof R!="function")throw Error(_(150));if(y=R.call(y),y==null)throw Error(_(151));for(var M=R=null,v=c,x=c=0,U=null,I=y.next();v!==null&&!I.done;x++,I=y.next()){v.index>x?(U=v,v=null):U=v.sibling;var ee=m(h,v,I.value,C);if(ee===null){v===null&&(v=U);break}e&&v&&ee.alternate===null&&t(h,v),c=a(ee,c,x),M===null?R=ee:M.sibling=ee,M=ee,v=U}if(I.done)return n(h,v),fe&&mn(h,x),R;if(v===null){for(;!I.done;x++,I=y.next())I=d(h,I.value,C),I!==null&&(c=a(I,c,x),M===null?R=I:M.sibling=I,M=I);return fe&&mn(h,x),R}for(v=r(h,v);!I.done;x++,I=y.next())I=S(v,h,x,I.value,C),I!==null&&(e&&I.alternate!==null&&v.delete(I.key===null?x:I.key),c=a(I,c,x),M===null?R=I:M.sibling=I,M=I);return e&&v.forEach(function(le){return t(h,le)}),fe&&mn(h,x),R}function N(h,c,y,C){if(typeof y=="object"&&y!==null&&y.type===Hn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:e:{for(var R=y.key,M=c;M!==null;){if(M.key===R){if(R=y.type,R===Hn){if(M.tag===7){n(h,M.sibling),c=l(M,y.props.children),c.return=h,h=c;break e}}else if(M.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vt&&Eu(R)===M.type){n(h,M.sibling),c=l(M,y.props),c.ref=Cr(h,M,y),c.return=h,h=c;break e}n(h,M);break}else t(h,M);M=M.sibling}y.type===Hn?(c=Cn(y.props.children,h.mode,C,y.key),c.return=h,h=c):(C=ea(y.type,y.key,y.props,null,h.mode,C),C.ref=Cr(h,c,y),C.return=h,h=C)}return o(h);case jn:e:{for(M=y.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===y.containerInfo&&c.stateNode.implementation===y.implementation){n(h,c.sibling),c=l(c,y.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Co(y,h.mode,C),c.return=h,h=c}return o(h);case Vt:return M=y._init,N(h,c,M(y._payload),C)}if(Nr(y))return k(h,c,y,C);if(gr(y))return w(h,c,y,C);Fl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,c!==null&&c.tag===6?(n(h,c.sibling),c=l(c,y),c.return=h,h=c):(n(h,c),c=wo(y,h.mode,C),c.return=h,h=c),o(h)):n(h,c)}return N}var ir=Nd(!0),Id=Nd(!1),ha=un(null),ya=null,Yn=null,Qi=null;function Ki(){Qi=Yn=ya=null}function Yi(e){var t=ha.current;ce(ha),e._currentValue=t}function ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){ya=e,Qi=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(ya===null)throw Error(_(308));Yn=e,ya.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var Sn=null;function qi(e){Sn===null?Sn=[e]:Sn.push(e)}function Bd(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,qi(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,qi(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function Kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Di(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function va(e,t,n,r){var l=e.updateQueue;Wt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var s=i,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==o&&(i===null?f.firstBaseUpdate=u:i.next=u,f.lastBaseUpdate=s))}if(a!==null){var d=l.baseState;o=0,f=u=s=null,i=a;do{var m=i.lane,S=i.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var k=e,w=i;switch(m=t,S=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){d=k.call(S,d,m);break e}d=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(S,d,m):k,m==null)break e;d=he({},d,m);break e;case 2:Wt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[i]:m.push(i))}else S={eventTime:S,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(u=f=S,s=d):f=f.next=S,o|=m;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;m=i,i=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(f===null&&(s=d),l.baseState=s,l.firstBaseUpdate=u,l.lastBaseUpdate=f,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=d}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(_(191,l));l.call(r)}}}var pl={},xt=un(pl),el=un(pl),tl=un(pl);function En(e){if(e===pl)throw Error(_(174));return e}function Zi(e,t){switch(se(tl,t),se(el,e),se(xt,pl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fo(t,e)}ce(xt),se(xt,t)}function sr(){ce(xt),ce(el),ce(tl)}function Md(e){En(tl.current);var t=En(xt.current),n=Fo(t,e.type);t!==n&&(se(el,e),se(xt,n))}function Ji(e){el.current===e&&(ce(xt),ce(el))}var pe=un(0);function ga(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function es(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Yl=Ft.ReactCurrentDispatcher,vo=Ft.ReactCurrentBatchConfig,_n=0,me=null,_e=null,Te=null,Sa=!1,zr=!1,nl=0,ah=0;function De(){throw Error(_(321))}function ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function ns(e,t,n,r,l,a){if(_n=a,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yl.current=e===null||e.memoizedState===null?uh:ch,e=n(r,l),zr){a=0;do{if(zr=!1,nl=0,25<=a)throw Error(_(301));a+=1,Te=_e=null,t.updateQueue=null,Yl.current=dh,e=n(r,l)}while(zr)}if(Yl.current=Ea,t=_e!==null&&_e.next!==null,_n=0,Te=_e=me=null,Sa=!1,t)throw Error(_(300));return e}function rs(){var e=nl!==0;return nl=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?me.memoizedState=Te=e:Te=Te.next=e,Te}function dt(){if(_e===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Te===null?me.memoizedState:Te.next;if(t!==null)Te=t,_e=e;else{if(e===null)throw Error(_(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Te===null?me.memoizedState=Te=e:Te=Te.next=e}return Te}function rl(e,t){return typeof t=="function"?t(e):t}function go(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=_e,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var i=o=null,s=null,u=a;do{var f=u.lane;if((_n&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,o=r):s=s.next=d,me.lanes|=f,Ln|=f}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=i,St(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,me.lanes|=a,Ln|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);St(a,t.memoizedState)||(Ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ad(){}function Dd(e,t){var n=me,r=dt(),l=t(),a=!St(r.memoizedState,l);if(a&&(r.memoizedState=l,Ke=!0),r=r.queue,ls(zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,ll(9,bd.bind(null,n,r,l,t),void 0,null),Re===null)throw Error(_(349));_n&30||Fd(n,t,l)}return l}function Fd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bd(e,t,n,r){t.value=n,t.getSnapshot=r,jd(t)&&Hd(e)}function zd(e,t,n){return n(function(){jd(t)&&Hd(e)})}function jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Hd(e){var t=At(e,1);t!==null&&gt(t,e,1,-1)}function Cu(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:e},t.queue=e,e=e.dispatch=sh.bind(null,me,e),[t.memoizedState,e]}function ll(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ud(){return dt().memoizedState}function ql(e,t,n,r){var l=wt();me.flags|=e,l.memoizedState=ll(1|t,n,void 0,r===void 0?null:r)}function Da(e,t,n,r){var l=dt();r=r===void 0?null:r;var a=void 0;if(_e!==null){var o=_e.memoizedState;if(a=o.destroy,r!==null&&ts(r,o.deps)){l.memoizedState=ll(t,n,a,r);return}}me.flags|=e,l.memoizedState=ll(1|t,n,a,r)}function Pu(e,t){return ql(8390656,8,e,t)}function ls(e,t){return Da(2048,8,e,t)}function Vd(e,t){return Da(4,2,e,t)}function Wd(e,t){return Da(4,4,e,t)}function Gd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){return n=n!=null?n.concat([e]):null,Da(4,4,Gd.bind(null,t,e),n)}function as(){}function Qd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ts(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yd(e,t,n){return _n&21?(St(n,t)||(n=ed(),me.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function oh(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=vo.transition;vo.transition={};try{e(!1),t()}finally{oe=n,vo.transition=r}}function qd(){return dt().memoizedState}function ih(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xd(e))Zd(t,n);else if(n=Bd(e,t,n,r),n!==null){var l=Ue();gt(n,e,r,l),Jd(n,t,r)}}function sh(e,t,n){var r=nn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xd(e))Zd(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,i=a(o,n);if(l.hasEagerState=!0,l.eagerState=i,St(i,o)){var s=t.interleaved;s===null?(l.next=l,qi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Bd(e,t,l,r),n!==null&&(l=Ue(),gt(n,e,r,l),Jd(n,t,r))}}function Xd(e){var t=e.alternate;return e===me||t!==null&&t===me}function Zd(e,t){zr=Sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Di(e,n)}}var Ea={readContext:ct,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},uh={readContext:ct,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ql(4194308,4,Gd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ql(4194308,4,e,t)},useInsertionEffect:function(e,t){return ql(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ih.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Cu,useDebugValue:as,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Cu(!1),t=e[0];return e=oh.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,l=wt();if(fe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Re===null)throw Error(_(349));_n&30||Fd(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,Pu(zd.bind(null,r,a,e),[e]),r.flags|=2048,ll(9,bd.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=wt(),t=Re.identifierPrefix;if(fe){var n=It,r=Nt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ah++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:ct,useCallback:Qd,useContext:ct,useEffect:ls,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Kd,useReducer:go,useRef:Ud,useState:function(){return go(rl)},useDebugValue:as,useDeferredValue:function(e){var t=dt();return Yd(t,_e.memoizedState,e)},useTransition:function(){var e=go(rl)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:Dd,useId:qd,unstable_isNewReconciler:!1},dh={readContext:ct,useCallback:Qd,useContext:ct,useEffect:ls,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Kd,useReducer:So,useRef:Ud,useState:function(){return So(rl)},useDebugValue:as,useDeferredValue:function(e){var t=dt();return _e===null?t.memoizedState=e:Yd(t,_e.memoizedState,e)},useTransition:function(){var e=So(rl)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:Dd,useId:qd,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function li(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fa={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),l=nn(e),a=Bt(r,l);a.payload=t,n!=null&&(a.callback=n),t=en(e,a,l),t!==null&&(gt(t,e,l,r),Kl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),l=nn(e),a=Bt(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=en(e,a,l),t!==null&&(gt(t,e,l,r),Kl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=nn(e),l=Bt(n,r);l.tag=2,t!=null&&(l.callback=t),t=en(e,l,r),t!==null&&(gt(t,e,r,n),Kl(t,e,r))}};function xu(e,t,n,r,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(l,a):!0}function ef(e,t,n){var r=!1,l=on,a=t.contextType;return typeof a=="object"&&a!==null?a=ct(a):(l=qe(t)?Pn:ze.current,r=t.contextTypes,a=(r=r!=null)?ar(e,l):on),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fa.enqueueReplaceState(t,t.state,null)}function ai(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Xi(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=ct(a):(a=qe(t)?Pn:ze.current,l.context=ar(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(li(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Fa.enqueueReplaceState(l,l.state,null),va(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=zp(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wa||(wa=!0,yi=r),oi(e,t)},n}function nf(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){oi(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){oi(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fh;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=_h.bind(null,e,t,n),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var ph=Ft.ReactCurrentOwner,Ke=!1;function He(e,t,n,r){t.child=e===null?Id(t,null,n,r):ir(t,e.child,n,r)}function Nu(e,t,n,r,l){n=n.render;var a=t.ref;return nr(t,l),r=ns(e,t,n,r,a,l),n=rs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(fe&&n&&Wi(t),t.flags|=1,He(e,t,r,l),t.child)}function Iu(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!ps(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,rf(e,t,a,r,l)):(e=ea(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(o,r)&&e.ref===t.ref)return Dt(e,t,l)}return t.flags|=1,e=rn(a,r),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(qr(a,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Dt(e,t,l)}return ii(e,t,n,r,l)}function lf(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Xn,Ze),Ze|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Xn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(Xn,Ze),Ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(Xn,Ze),Ze|=r;return He(e,t,l,n),t.child}function af(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,n,r,l){var a=qe(n)?Pn:ze.current;return a=ar(t,a),nr(t,l),n=ns(e,t,n,r,a,l),r=rs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(fe&&r&&Wi(t),t.flags|=1,He(e,t,n,l),t.child)}function Bu(e,t,n,r,l){if(qe(n)){var a=!0;fa(t)}else a=!1;if(nr(t,l),t.stateNode===null)Xl(e,t),ef(t,n,r),ai(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=qe(n)?Pn:ze.current,u=ar(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||s!==u)&&_u(t,o,r,u),Wt=!1;var m=t.memoizedState;o.state=m,va(t,r,o,l),s=t.memoizedState,i!==r||m!==s||Ye.current||Wt?(typeof f=="function"&&(li(t,n,f,r),s=t.memoizedState),(i=Wt||xu(t,n,i,r,m,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Od(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:pt(t.type,i),o.props=u,d=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ct(s):(s=qe(n)?Pn:ze.current,s=ar(t,s));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==d||m!==s)&&_u(t,o,r,s),Wt=!1,m=t.memoizedState,o.state=m,va(t,r,o,l);var k=t.memoizedState;i!==d||m!==k||Ye.current||Wt?(typeof S=="function"&&(li(t,n,S,r),k=t.memoizedState),(u=Wt||xu(t,n,u,r,m,k,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return si(e,t,n,r,a,l)}function si(e,t,n,r,l,a){af(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&vu(t,n,!1),Dt(e,t,a);r=t.stateNode,ph.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ir(t,e.child,null,a),t.child=ir(t,null,i,a)):He(e,t,i,a),t.memoizedState=r.state,l&&vu(t,n,!0),t.child}function of(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),Zi(e,t.containerInfo)}function Ou(e,t,n,r,l){return or(),$i(l),t.flags|=256,He(e,t,n,r),t.child}var ui={dehydrated:null,treeContext:null,retryLane:0};function ci(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,n){var r=t.pendingProps,l=pe.current,a=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),se(pe,l&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ja(o,r,0,null),e=Cn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ci(n),t.memoizedState=ui,e):os(t,o));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return mh(e,t,o,r,i,l,n);if(a){a=r.fallback,o=t.mode,l=e.child,i=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=rn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?a=rn(i,a):(a=Cn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ci(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ui,r}return a=e.child,e=a.sibling,r=rn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function os(e,t){return t=ja({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bl(e,t,n,r){return r!==null&&$i(r),ir(t,e.child,null,n),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,l,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Eo(Error(_(422))),bl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=ja({mode:"visible",children:r.children},l,0,null),a=Cn(a,l,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&ir(t,e.child,null,o),t.child.memoizedState=ci(o),t.memoizedState=ui,a);if(!(t.mode&1))return bl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(_(419)),r=Eo(a,r,void 0),bl(e,t,o,r)}if(i=(o&e.childLanes)!==0,Ke||i){if(r=Re,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,At(e,l),gt(r,e,l,-1))}return fs(),r=Eo(Error(_(421))),bl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Lh.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,et=Jt(l.nextSibling),tt=t,fe=!0,yt=null,e!==null&&(ot[it++]=Nt,ot[it++]=It,ot[it++]=xn,Nt=e.id,It=e.overflow,xn=t),t=os(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ri(e.return,t,n)}function ko(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function uf(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(He(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(pe,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ga(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ko(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ga(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ko(t,!0,n,null,a);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hh(e,t,n){switch(t.tag){case 3:of(t),or();break;case 5:Md(t);break;case 1:qe(t.type)&&fa(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;se(ha,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?sf(e,t,n):(se(pe,pe.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,lf(e,t,n)}return Dt(e,t,n)}var cf,di,df,ff;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};di=function(){};df=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,En(xt.current);var a=null;switch(n){case"input":l=Oo(e,l),r=Oo(e,r),a=[];break;case"select":l=he({},l,{value:void 0}),r=he({},r,{value:void 0}),a=[];break;case"textarea":l=Do(e,l),r=Do(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ca)}bo(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var i=l[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(i=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&i[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),a||i===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yh(e,t,n){var r=t.pendingProps;switch(Gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return qe(t.type)&&da(),Fe(t),null;case 3:return r=t.stateNode,sr(),ce(Ye),ce(ze),es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Si(yt),yt=null))),di(e,t),Fe(t),null;case 5:Ji(t);var l=En(tl.current);if(n=t.type,e!==null&&t.stateNode!=null)df(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Fe(t),null}if(e=En(xt.current),Dl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ct]=t,r[Jr]=a,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(l=0;l<Br.length;l++)ue(Br[l],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Vs(r,a),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ue("invalid",r);break;case"textarea":Gs(r,a),ue("invalid",r)}bo(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Al(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Al(r.textContent,i,e),l=["children",""+i]):Vr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Ll(r),Ws(r,a,!0);break;case"textarea":Ll(r),$s(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ca)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ct]=t,e[Jr]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(o=zo(n,r),n){case"dialog":ue("cancel",e),ue("close",e),l=r;break;case"iframe":case"object":case"embed":ue("load",e),l=r;break;case"video":case"audio":for(l=0;l<Br.length;l++)ue(Br[l],e);l=r;break;case"source":ue("error",e),l=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),l=r;break;case"details":ue("toggle",e),l=r;break;case"input":Vs(e,r),l=Oo(e,r),ue("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=he({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Gs(e,r),l=Do(e,r),ue("invalid",e);break;default:l=r}bo(n,l),i=l;for(a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="style"?Uc(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&jc(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Wr(e,s):typeof s=="number"&&Wr(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vr.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ue("scroll",e):s!=null&&Ni(e,a,s,o))}switch(n){case"input":Ll(e),Ws(e,r,!1);break;case"textarea":Ll(e),$s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Zn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=En(tl.current),En(xt.current),Dl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(a=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Al(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Al(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Fe(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&et!==null&&t.mode&1&&!(t.flags&128))Rd(),or(),t.flags|=98560,a=!1;else if(a=Dl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[Ct]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),a=!1}else yt!==null&&(Si(yt),yt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Le===0&&(Le=3):fs())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return sr(),di(e,t),e===null&&Xr(t.stateNode.containerInfo),Fe(t),null;case 10:return Yi(t.type._context),Fe(t),null;case 17:return qe(t.type)&&da(),Fe(t),null;case 19:if(ce(pe),a=t.memoizedState,a===null)return Fe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Pr(a,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ga(e),o!==null){for(t.flags|=128,Pr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&we()>cr&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304)}else{if(!r)if(e=ga(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!fe)return Fe(t),null}else 2*we()-a.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=we(),t.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function vh(e,t){switch(Gi(t),t.tag){case 1:return qe(t.type)&&da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),ce(Ye),ce(ze),es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return sr(),null;case 10:return Yi(t.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var zl=!1,be=!1,gh=typeof WeakSet=="function"?WeakSet:Set,A=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function fi(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Au=!1;function Sh(e,t){if(Yo=ia,e=yd(),Vi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,i=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var S;d!==n||l!==0&&d.nodeType!==3||(i=o+l),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(S=d.firstChild)!==null;)m=d,d=S;for(;;){if(d===e)break t;if(m===n&&++u===l&&(i=o),m===a&&++f===r&&(s=o),(S=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=S}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(qo={focusedElem:e,selectionRange:n},ia=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,N=k.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:pt(t.type,w),N);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(C){Se(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return k=Au,Au=!1,k}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&fi(t,n,a)}l=l.next}while(l!==r)}}function ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Jr],delete t[Jo],delete t[th],delete t[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mf(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ca));else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}function hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hi(e,t,n),e=e.sibling;e!==null;)hi(e,t,n),e=e.sibling}var Be=null,mt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)hf(e,t,n),n=n.sibling}function hf(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 5:be||qn(n,t);case 6:var r=Be,l=mt;Be=null,Ht(e,t,n),Be=r,mt=l,Be!==null&&(mt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(mt?(e=Be,n=n.stateNode,e.nodeType===8?mo(e.parentNode,n):e.nodeType===1&&mo(e,n),Kr(e)):mo(Be,n.stateNode));break;case 4:r=Be,l=mt,Be=n.stateNode.containerInfo,mt=!0,Ht(e,t,n),Be=r,mt=l;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&fi(n,t,o),l=l.next}while(l!==r)}Ht(e,t,n);break;case 1:if(!be&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Se(n,t,i)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Ht(e,t,n),be=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gh),t.forEach(function(r){var l=Th.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:Be=i.stateNode,mt=!1;break e;case 3:Be=i.stateNode.containerInfo,mt=!0;break e;case 4:Be=i.stateNode.containerInfo,mt=!0;break e}i=i.return}if(Be===null)throw Error(_(160));hf(a,o,l),Be=null,mt=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(u){Se(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}function yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),kt(e),r&4){try{jr(3,e,e.return),ba(3,e)}catch(w){Se(e,e.return,w)}try{jr(5,e,e.return)}catch(w){Se(e,e.return,w)}}break;case 1:ft(t,e),kt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(ft(t,e),kt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var l=e.stateNode;try{Wr(l,"")}catch(w){Se(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&Fc(l,a),zo(i,o);var u=zo(i,a);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?Uc(l,d):f==="dangerouslySetInnerHTML"?jc(l,d):f==="children"?Wr(l,d):Ni(l,f,d,u)}switch(i){case"input":Mo(l,a);break;case"textarea":bc(l,a);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?Zn(l,!!a.multiple,S,!1):m!==!!a.multiple&&(a.defaultValue!=null?Zn(l,!!a.multiple,a.defaultValue,!0):Zn(l,!!a.multiple,a.multiple?[]:"",!1))}l[Jr]=a}catch(w){Se(e,e.return,w)}}break;case 6:if(ft(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(_(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(w){Se(e,e.return,w)}}break;case 3:if(ft(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(w){Se(e,e.return,w)}break;case 4:ft(t,e),kt(e);break;case 13:ft(t,e),kt(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(us=we())),r&4&&Fu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||f,ft(t,e),be=u):ft(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(d=A=f;A!==null;){switch(m=A,S=m.child,m.tag){case 0:case 11:case 14:case 15:jr(4,m,m.return);break;case 1:qn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){Se(r,n,w)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){zu(d);continue}}S!==null?(S.return=m,A=S):zu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{l=d.stateNode,u?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Hc("display",o))}catch(w){Se(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Se(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(t,e),kt(e),r&4&&Fu(e);break;case 21:break;default:ft(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wr(l,""),r.flags&=-33);var a=Du(e);hi(e,a,l);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Du(e);mi(e,i,o);break;default:throw Error(_(161))}}catch(s){Se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eh(e,t,n){A=e,vf(e)}function vf(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,a=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||zl;if(!o){var i=l.alternate,s=i!==null&&i.memoizedState!==null||be;i=zl;var u=be;if(zl=o,(be=s)&&!u)for(A=l;A!==null;)o=A,s=o.child,o.tag===22&&o.memoizedState!==null?ju(l):s!==null?(s.return=o,A=s):ju(l);for(;a!==null;)A=a,vf(a),a=a.sibling;A=l,zl=i,be=u}bu(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,A=a):bu(e)}}function bu(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&wu(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Kr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}be||t.flags&512&&pi(t)}catch(m){Se(t,t.return,m)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function zu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function ju(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ba(4,t)}catch(s){Se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){Se(t,l,s)}}var a=t.return;try{pi(t)}catch(s){Se(t,a,s)}break;case 5:var o=t.return;try{pi(t)}catch(s){Se(t,o,s)}}}catch(s){Se(t,t.return,s)}if(t===e){A=null;break}var i=t.sibling;if(i!==null){i.return=t.return,A=i;break}A=t.return}}var kh=Math.ceil,ka=Ft.ReactCurrentDispatcher,is=Ft.ReactCurrentOwner,ut=Ft.ReactCurrentBatchConfig,X=0,Re=null,Pe=null,Oe=0,Ze=0,Xn=un(0),Le=0,al=null,Ln=0,za=0,ss=0,Hr=null,Qe=null,us=0,cr=1/0,Tt=null,wa=!1,yi=null,tn=null,jl=!1,Kt=null,Ca=0,Ur=0,vi=null,Zl=-1,Jl=0;function Ue(){return X&6?we():Zl!==-1?Zl:Zl=we()}function nn(e){return e.mode&1?X&2&&Oe!==0?Oe&-Oe:lh.transition!==null?(Jl===0&&(Jl=ed()),Jl):(e=oe,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function gt(e,t,n,r){if(50<Ur)throw Ur=0,vi=null,Error(_(185));cl(e,n,r),(!(X&2)||e!==Re)&&(e===Re&&(!(X&2)&&(za|=n),Le===4&&$t(e,Oe)),Xe(e,r),n===1&&X===0&&!(t.mode&1)&&(cr=we()+500,Aa&&cn()))}function Xe(e,t){var n=e.callbackNode;lm(e,t);var r=oa(e,e===Re?Oe:0);if(r===0)n!==null&&Ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ys(n),t===1)e.tag===0?rh(Hu.bind(null,e)):_d(Hu.bind(null,e)),Jm(function(){!(X&6)&&cn()}),n=null;else{switch(td(r)){case 1:n=Ai;break;case 4:n=Zc;break;case 16:n=aa;break;case 536870912:n=Jc;break;default:n=aa}n=xf(n,gf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gf(e,t){if(Zl=-1,Jl=0,X&6)throw Error(_(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=oa(e,e===Re?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pa(e,r);else{t=r;var l=X;X|=2;var a=Ef();(Re!==e||Oe!==t)&&(Tt=null,cr=we()+500,wn(e,t));do try{Ph();break}catch(i){Sf(e,i)}while(!0);Ki(),ka.current=a,X=l,Pe!==null?t=0:(Re=null,Oe=0,t=Le)}if(t!==0){if(t===2&&(l=Wo(e),l!==0&&(r=l,t=gi(e,l))),t===1)throw n=al,wn(e,0),$t(e,r),Xe(e,we()),n;if(t===6)$t(e,r);else{if(l=e.current.alternate,!(r&30)&&!wh(l)&&(t=Pa(e,r),t===2&&(a=Wo(e),a!==0&&(r=a,t=gi(e,a))),t===1))throw n=al,wn(e,0),$t(e,r),Xe(e,we()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:hn(e,Qe,Tt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=us+500-we(),10<t)){if(oa(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Zo(hn.bind(null,e,Qe,Tt),t);break}hn(e,Qe,Tt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-vt(r);a=1<<o,o=t[o],o>l&&(l=o),r&=~a}if(r=l,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kh(r/1960))-r,10<r){e.timeoutHandle=Zo(hn.bind(null,e,Qe,Tt),r);break}hn(e,Qe,Tt);break;case 5:hn(e,Qe,Tt);break;default:throw Error(_(329))}}}return Xe(e,we()),e.callbackNode===n?gf.bind(null,e):null}function gi(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Pa(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Si(t)),e}function Si(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function wh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!St(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~ss,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(X&6)throw Error(_(327));rr();var t=oa(e,0);if(!(t&1))return Xe(e,we()),null;var n=Pa(e,t);if(e.tag!==0&&n===2){var r=Wo(e);r!==0&&(t=r,n=gi(e,r))}if(n===1)throw n=al,wn(e,0),$t(e,t),Xe(e,we()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Qe,Tt),Xe(e,we()),null}function cs(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(cr=we()+500,Aa&&cn())}}function Tn(e){Kt!==null&&Kt.tag===0&&!(X&6)&&rr();var t=X;X|=1;var n=ut.transition,r=oe;try{if(ut.transition=null,oe=1,e)return e()}finally{oe=r,ut.transition=n,X=t,!(X&6)&&cn()}}function ds(){Ze=Xn.current,ce(Xn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zm(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Gi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:sr(),ce(Ye),ce(ze),es();break;case 5:Ji(r);break;case 4:sr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:Yi(r.type._context);break;case 22:case 23:ds()}n=n.return}if(Re=e,Pe=e=rn(e.current,null),Oe=Ze=t,Le=0,al=null,ss=za=Ln=0,Qe=Hr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,r.next=o}n.pending=r}Sn=null}return e}function Sf(e,t){do{var n=Pe;try{if(Ki(),Yl.current=Ea,Sa){for(var r=me.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Sa=!1}if(_n=0,Te=_e=me=null,zr=!1,nl=0,is.current=null,n===null||n.return===null){Le=1,al=t,Pe=null;break}e:{var a=e,o=n.return,i=n,s=t;if(t=Oe,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=i,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Tu(o);if(S!==null){S.flags&=-257,Ru(S,o,i,a,t),S.mode&1&&Lu(a,u,t),t=S,s=u;var k=t.updateQueue;if(k===null){var w=new Set;w.add(s),t.updateQueue=w}else k.add(s);break e}else{if(!(t&1)){Lu(a,u,t),fs();break e}s=Error(_(426))}}else if(fe&&i.mode&1){var N=Tu(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ru(N,o,i,a,t),$i(ur(s,i));break e}}a=s=ur(s,i),Le!==4&&(Le=2),Hr===null?Hr=[a]:Hr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=tf(a,s,t);ku(a,h);break e;case 1:i=s;var c=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(tn===null||!tn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=nf(a,i,t);ku(a,C);break e}}a=a.return}while(a!==null)}wf(n)}catch(R){t=R,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Ef(){var e=ka.current;return ka.current=Ea,e===null?Ea:e}function fs(){(Le===0||Le===3||Le===2)&&(Le=4),Re===null||!(Ln&268435455)&&!(za&268435455)||$t(Re,Oe)}function Pa(e,t){var n=X;X|=2;var r=Ef();(Re!==e||Oe!==t)&&(Tt=null,wn(e,t));do try{Ch();break}catch(l){Sf(e,l)}while(!0);if(Ki(),X=n,ka.current=r,Pe!==null)throw Error(_(261));return Re=null,Oe=0,Le}function Ch(){for(;Pe!==null;)kf(Pe)}function Ph(){for(;Pe!==null&&!Yp();)kf(Pe)}function kf(e){var t=Pf(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?wf(e):Pe=t,is.current=null}function wf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vh(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Pe=null;return}}else if(n=yh(n,t,Ze),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Le===0&&(Le=5)}function hn(e,t,n){var r=oe,l=ut.transition;try{ut.transition=null,oe=1,xh(e,t,n,r)}finally{ut.transition=l,oe=r}return null}function xh(e,t,n,r){do rr();while(Kt!==null);if(X&6)throw Error(_(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(am(e,a),e===Re&&(Pe=Re=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,xf(aa,function(){return rr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ut.transition,ut.transition=null;var o=oe;oe=1;var i=X;X|=4,is.current=null,Sh(e,n),yf(n,e),Gm(qo),ia=!!Yo,qo=Yo=null,e.current=n,Eh(n),qp(),X=i,oe=o,ut.transition=a}else e.current=n;if(jl&&(jl=!1,Kt=e,Ca=l),a=e.pendingLanes,a===0&&(tn=null),Jp(n.stateNode),Xe(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(wa)throw wa=!1,e=yi,yi=null,e;return Ca&1&&e.tag!==0&&rr(),a=e.pendingLanes,a&1?e===vi?Ur++:(Ur=0,vi=e):Ur=0,cn(),null}function rr(){if(Kt!==null){var e=td(Ca),t=ut.transition,n=oe;try{if(ut.transition=null,oe=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,Ca=0,X&6)throw Error(_(331));var l=X;for(X|=4,A=e.current;A!==null;){var a=A,o=a.child;if(A.flags&16){var i=a.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(A=u;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:jr(8,f,a)}var d=f.child;if(d!==null)d.return=f,A=d;else for(;A!==null;){f=A;var m=f.sibling,S=f.return;if(pf(f),f===u){A=null;break}if(m!==null){m.return=S,A=m;break}A=S}}}var k=a.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}A=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,A=o;else e:for(;A!==null;){if(a=A,a.flags&2048)switch(a.tag){case 0:case 11:case 15:jr(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,A=h;break e}A=a.return}}var c=e.current;for(A=c;A!==null;){o=A;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,A=y;else e:for(o=c;A!==null;){if(i=A,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ba(9,i)}}catch(R){Se(i,i.return,R)}if(i===o){A=null;break e}var C=i.sibling;if(C!==null){C.return=i.return,A=C;break e}A=i.return}}if(X=l,cn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Na,e)}catch{}r=!0}return r}finally{oe=n,ut.transition=t}}return!1}function Uu(e,t,n){t=ur(n,t),t=tf(e,t,1),e=en(e,t,1),t=Ue(),e!==null&&(cl(e,1,t),Xe(e,t))}function Se(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=ur(n,e),e=nf(t,e,1),t=en(t,e,1),e=Ue(),t!==null&&(cl(t,1,e),Xe(t,e));break}}t=t.return}}function _h(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Oe&n)===n&&(Le===4||Le===3&&(Oe&130023424)===Oe&&500>we()-us?wn(e,0):ss|=n),Xe(e,t)}function Cf(e,t){t===0&&(e.mode&1?(t=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):t=1);var n=Ue();e=At(e,t),e!==null&&(cl(e,t,n),Xe(e,n))}function Lh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function Th(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Cf(e,n)}var Pf;Pf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,hh(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,fe&&t.flags&1048576&&Ld(t,ma,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xl(e,t),e=t.pendingProps;var l=ar(t,ze.current);nr(t,n),l=ns(null,t,r,e,l,n);var a=rs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(a=!0,fa(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Xi(t),l.updater=Fa,t.stateNode=l,l._reactInternals=t,ai(t,r,e,n),t=si(null,t,r,!0,a,n)):(t.tag=0,fe&&a&&Wi(t),He(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Nh(r),e=pt(r,e),l){case 0:t=ii(null,t,r,e,n);break e;case 1:t=Bu(null,t,r,e,n);break e;case 11:t=Nu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,pt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),ii(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),Bu(e,t,r,l,n);case 3:e:{if(of(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,l=a.element,Od(e,t),va(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=ur(Error(_(423)),t),t=Ou(e,t,r,n,l);break e}else if(r!==l){l=ur(Error(_(424)),t),t=Ou(e,t,r,n,l);break e}else for(et=Jt(t.stateNode.containerInfo.firstChild),tt=t,fe=!0,yt=null,n=Id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===l){t=Dt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Md(t),e===null&&ni(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,Xo(r,l)?o=null:a!==null&&Xo(r,a)&&(t.flags|=32),af(e,t),He(e,t,o,n),t.child;case 6:return e===null&&ni(t),null;case 13:return sf(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),Nu(e,t,r,l,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,se(ha,r._currentValue),r._currentValue=o,a!==null)if(St(a.value,o)){if(a.children===l.children&&!Ye.current){t=Dt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ri(a.return,n,t),i.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),ri(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}He(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,nr(t,n),l=ct(l),r=r(l),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,l=pt(r,t.pendingProps),l=pt(r.type,l),Iu(e,t,r,l,n);case 15:return rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),Xl(e,t),t.tag=1,qe(r)?(e=!0,fa(t)):e=!1,nr(t,n),ef(t,r,l),ai(t,r,l,n),si(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return lf(e,t,n)}throw Error(_(156,t.tag))};function xf(e,t){return Xc(e,t)}function Rh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Rh(e,t,n,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nh(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bi)return 11;if(e===Oi)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ea(e,t,n,r,l,a){var o=2;if(r=e,typeof e=="function")ps(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hn:return Cn(n.children,l,a,t);case Ii:o=8,l|=8;break;case Ro:return e=st(12,n,t,l|2),e.elementType=Ro,e.lanes=a,e;case No:return e=st(13,n,t,l),e.elementType=No,e.lanes=a,e;case Io:return e=st(19,n,t,l),e.elementType=Io,e.lanes=a,e;case Mc:return ja(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bc:o=10;break e;case Oc:o=9;break e;case Bi:o=11;break e;case Oi:o=14;break e;case Vt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=st(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function Cn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function ja(e,t,n,r){return e=st(22,e,r,t),e.elementType=Mc,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Co(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ih(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ms(e,t,n,r,l,a,o,i,s){return e=new Ih(e,t,n,i,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=st(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(a),e}function Bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _f(e){if(!e)return on;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(qe(n))return xd(e,n,t)}return t}function Lf(e,t,n,r,l,a,o,i,s){return e=ms(n,r,!0,e,l,a,o,i,s),e.context=_f(null),n=e.current,r=Ue(),l=nn(n),a=Bt(r,l),a.callback=t??null,en(n,a,l),e.current.lanes=l,cl(e,l,r),Xe(e,r),e}function Ha(e,t,n,r){var l=t.current,a=Ue(),o=nn(l);return n=_f(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(l,t,o),e!==null&&(gt(e,l,o,a),Kl(e,l,o)),o}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hs(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}function Oh(){return null}var Tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ys(e){this._internalRoot=e}Ua.prototype.render=ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ha(e,t,null,null)};Ua.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Ha(null,e,null,null)}),t[Mt]=null}};function Ua(e){this._internalRoot=e}Ua.prototype.unstable_scheduleHydration=function(e){if(e){var t=ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&od(e)}};function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Mh(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var u=xa(o);a.call(u)}}var o=Lf(t,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=o,e[Mt]=o.current,Xr(e.nodeType===8?e.parentNode:e),Tn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var u=xa(s);i.call(u)}}var s=ms(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Mt]=s.current,Xr(e.nodeType===8?e.parentNode:e),Tn(function(){Ha(t,s,n,r)}),s}function Wa(e,t,n,r,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var i=l;l=function(){var s=xa(o);i.call(s)}}Ha(t,o,e,l)}else o=Mh(n,t,e,l,r);return xa(o)}nd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Di(t,n|1),Xe(t,we()),!(X&6)&&(cr=we()+500,cn()))}break;case 13:Tn(function(){var r=At(e,1);if(r!==null){var l=Ue();gt(r,e,1,l)}}),hs(e,1)}};Fi=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ue();gt(t,e,134217728,n)}hs(e,134217728)}};rd=function(e){if(e.tag===13){var t=nn(e),n=At(e,t);if(n!==null){var r=Ue();gt(n,e,t,r)}hs(e,t)}};ld=function(){return oe};ad=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Ho=function(e,t,n){switch(t){case"input":if(Mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ma(r);if(!l)throw Error(_(90));Dc(r),Mo(r,l)}}}break;case"textarea":bc(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Gc=cs;$c=Tn;var Ah={usingClientEntryPoint:!1,Events:[fl,Gn,Ma,Vc,Wc,cs]},xr={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dh={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Oh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{Na=Hl.inject(Dh),Pt=Hl}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ah;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vs(t))throw Error(_(200));return Bh(e,t,null,n)};rt.createRoot=function(e,t){if(!vs(e))throw Error(_(299));var n=!1,r="",l=Tf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ms(e,1,!1,null,null,n,!1,r,l),e[Mt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new ys(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Yc(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return Tn(e)};rt.hydrate=function(e,t,n){if(!Va(t))throw Error(_(200));return Wa(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!vs(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",o=Tf;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,l,!1,a,o),e[Mt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ua(t)};rt.render=function(e,t,n){if(!Va(t))throw Error(_(200));return Wa(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Va(e))throw Error(_(40));return e._reactRootContainer?(Tn(function(){Wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};rt.unstable_batchedUpdates=cs;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Va(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Wa(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function Rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rf)}catch(e){console.error(e)}}Rf(),Tc.exports=rt;var gs=Tc.exports;const Fh=yc(gs),bh=hc({__proto__:null,default:Fh},[gs]);var Gu=gs;Lo.createRoot=Gu.createRoot,Lo.hydrateRoot=Gu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}var ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ke||(ke={}));const $u="popstate";function zh(e){e===void 0&&(e={});function t(r,l){let{pathname:a,search:o,hash:i}=r.location;return ol("",{pathname:a,search:o,hash:i},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:ml(l)}return Hh(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jh(){return Math.random().toString(36).substr(2,8)}function Qu(e,t){return{usr:e.state,key:e.key,idx:t}}function ol(e,t,n,r){return n===void 0&&(n=null),de({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bt(t):t,{state:n,key:t&&t.key||r||jh()})}function ml(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function bt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hh(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:a=!1}=r,o=l.history,i=ke.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(de({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){i=ke.Pop;let N=f(),h=N==null?null:N-u;u=N,s&&s({action:i,location:w.location,delta:h})}function m(N,h){i=ke.Push;let c=ol(w.location,N,h);u=f()+1;let y=Qu(c,u),C=w.createHref(c);try{o.pushState(y,"",C)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;l.location.assign(C)}a&&s&&s({action:i,location:w.location,delta:1})}function S(N,h){i=ke.Replace;let c=ol(w.location,N,h);u=f();let y=Qu(c,u),C=w.createHref(c);o.replaceState(y,"",C),a&&s&&s({action:i,location:w.location,delta:0})}function k(N){let h=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof N=="string"?N:ml(N);return c=c.replace(/ $/,"%20"),Q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let w={get action(){return i},get location(){return e(l,o)},listen(N){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener($u,d),s=N,()=>{l.removeEventListener($u,d),s=null}},createHref(N){return t(l,N)},createURL:k,encodeLocation(N){let h=k(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:S,go(N){return o.go(N)}};return w}var ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ae||(ae={}));const Uh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Vh(e){return e.index===!0}function _a(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((l,a)=>{let o=[...n,String(a)],i=typeof l.id=="string"?l.id:o.join("-");if(Q(l.index!==!0||!l.children,"Cannot specify children on an index route"),Q(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),Vh(l)){let s=de({},l,t(l),{id:i});return r[i]=s,s}else{let s=de({},l,t(l),{id:i,children:void 0});return r[i]=s,l.children&&(s.children=_a(l.children,t,o,r)),s}})}function yn(e,t,n){return n===void 0&&(n="/"),ta(e,t,n,!1)}function ta(e,t,n,r){let l=typeof t=="string"?bt(t):t,a=hl(l.pathname||"/",n);if(a==null)return null;let o=Nf(e);Gh(o);let i=null;for(let s=0;i==null&&s<o.length;++s){let u=ny(a);i=ey(o[s],u,r)}return i}function Wh(e,t){let{route:n,pathname:r,params:l}=e;return{id:n.id,pathname:r,params:l,data:t[n.id],handle:n.handle}}function Nf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(a,o,i)=>{let s={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=ln([r,s.relativePath]),f=n.concat(s);a.children&&a.children.length>0&&(Q(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nf(a.children,t,f,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Zh(u,a.index),routesMeta:f})};return e.forEach((a,o)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))l(a,o);else for(let s of If(a.path))l(a,o,s)}),t}function If(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return l?[a,""]:[a];let o=If(r.join("/")),i=[];return i.push(...o.map(s=>s===""?a:[a,s].join("/"))),l&&i.push(...o),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $h=/^:[\w-]+$/,Qh=3,Kh=2,Yh=1,qh=10,Xh=-2,Ku=e=>e==="*";function Zh(e,t){let n=e.split("/"),r=n.length;return n.some(Ku)&&(r+=Xh),t&&(r+=Kh),n.filter(l=>!Ku(l)).reduce((l,a)=>l+($h.test(a)?Qh:a===""?Yh:qh),r)}function Jh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function ey(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,l={},a="/",o=[];for(let i=0;i<r.length;++i){let s=r[i],u=i===r.length-1,f=a==="/"?t:t.slice(a.length)||"/",d=Yu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Yu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(l,d.params),o.push({params:l,pathname:ln([a,d.pathname]),pathnameBase:oy(ln([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=ln([a,d.pathnameBase]))}return o}function Yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ty(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let a=l[0],o=a.replace(/(.)\/+$/,"$1"),i=l.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:S}=f;if(m==="*"){let w=i[d]||"";o=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const k=i[d];return S&&!k?u[m]=void 0:u[m]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function ty(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ny(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ly=e=>ry.test(e);function ay(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?bt(e):e,a;if(n)if(ly(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Rn(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=qu(n.substring(1),"/"):a=qu(n,t)}else a=t;return{pathname:a,search:iy(r),hash:sy(l)}}function qu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Po(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ss(e,t){let n=Bf(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Es(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=bt(e):(l=de({},e),Q(!l.pathname||!l.pathname.includes("?"),Po("?","pathname","search",l)),Q(!l.pathname||!l.pathname.includes("#"),Po("#","pathname","hash",l)),Q(!l.search||!l.search.includes("#"),Po("#","search","hash",l)));let a=e===""||l.pathname==="",o=a?"/":l.pathname,i;if(o==null)i=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;l.pathname=m.join("/")}i=d>=0?t[d]:"/"}let s=ay(l,i),u=o&&o!=="/"&&o.endsWith("/"),f=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const ln=e=>e.join("/").replace(/\/\/+/g,"/"),oy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class La{constructor(t,n,r,l){l===void 0&&(l=!1),this.status=t,this.statusText=n||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function il(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Of=["post","put","patch","delete"],uy=new Set(Of),cy=["get",...Of],dy=new Set(cy),fy=new Set([301,302,303,307,308]),py=new Set([307,308]),xo={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},my={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_r={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ks=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hy=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Mf="remix-router-transitions";function yy(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let p=e.detectErrorBoundary;l=g=>({hasErrorBoundary:p(g)})}else l=hy;let a={},o=_a(e.routes,l,void 0,a),i,s=e.basename||"/",u=e.dataStrategy||Ey,f=e.patchRoutesOnNavigation,d=de({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,S=new Set,k=null,w=null,N=null,h=e.hydrationData!=null,c=yn(o,e.history.location,s),y=!1,C=null;if(c==null&&!f){let p=$e(404,{pathname:e.history.location.pathname}),{matches:g,route:E}=ic(o);c=g,C={[E.id]:p}}c&&!e.hydrationData&&kl(c,o,e.history.location.pathname).active&&(c=null);let R;if(c)if(c.some(p=>p.route.lazy))R=!1;else if(!c.some(p=>p.route.loader))R=!0;else if(d.v7_partialHydration){let p=e.hydrationData?e.hydrationData.loaderData:null,g=e.hydrationData?e.hydrationData.errors:null;if(g){let E=c.findIndex(P=>g[P.route.id]!==void 0);R=c.slice(0,E+1).every(P=>!ki(P.route,p,g))}else R=c.every(E=>!ki(E.route,p,g))}else R=e.hydrationData!=null;else if(R=!1,c=[],d.v7_partialHydration){let p=kl(null,o,e.history.location.pathname);p.active&&p.matches&&(y=!0,c=p.matches)}let M,v={historyAction:e.history.action,location:e.history.location,matches:c,initialized:R,navigation:xo,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},x=ke.Pop,U=!1,I,ee=!1,le=new Map,W=null,q=!1,re=!1,Ee=[],Ge=new Set,L=new Map,j=0,V=-1,Z=new Map,te=new Set,Ne=new Map,Ae=new Map,xe=new Set,ye=new Map,at=new Map,gl;function Qf(){if(m=e.history.listen(p=>{let{action:g,location:E,delta:P}=p;if(gl){gl(),gl=void 0;return}Rn(at.size===0||P!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=Os({currentLocation:v.location,nextLocation:E,historyAction:g});if(B&&P!=null){let H=new Promise(G=>{gl=G});e.history.go(P*-1),El(B,{state:"blocked",location:E,proceed(){El(B,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),H.then(()=>e.history.go(P))},reset(){let G=new Map(v.blockers);G.set(B,_r),je({blockers:G})}});return}return dn(g,E)}),n){My(t,le);let p=()=>Ay(t,le);t.addEventListener("pagehide",p),W=()=>t.removeEventListener("pagehide",p)}return v.initialized||dn(ke.Pop,v.location,{initialHydration:!0}),M}function Kf(){m&&m(),W&&W(),S.clear(),I&&I.abort(),v.fetchers.forEach((p,g)=>Sl(g)),v.blockers.forEach((p,g)=>Bs(g))}function Yf(p){return S.add(p),()=>S.delete(p)}function je(p,g){g===void 0&&(g={}),v=de({},v,p);let E=[],P=[];d.v7_fetcherPersist&&v.fetchers.forEach((B,H)=>{B.state==="idle"&&(xe.has(H)?P.push(H):E.push(H))}),xe.forEach(B=>{!v.fetchers.has(B)&&!L.has(B)&&P.push(B)}),[...S].forEach(B=>B(v,{deletedFetchers:P,viewTransitionOpts:g.viewTransitionOpts,flushSync:g.flushSync===!0})),d.v7_fetcherPersist?(E.forEach(B=>v.fetchers.delete(B)),P.forEach(B=>Sl(B))):P.forEach(B=>xe.delete(B))}function On(p,g,E){var P,B;let{flushSync:H}=E===void 0?{}:E,G=v.actionData!=null&&v.navigation.formMethod!=null&&ht(v.navigation.formMethod)&&v.navigation.state==="loading"&&((P=p.state)==null?void 0:P._isRedirect)!==!0,F;g.actionData?Object.keys(g.actionData).length>0?F=g.actionData:F=null:G?F=v.actionData:F=null;let b=g.loaderData?ac(v.loaderData,g.loaderData,g.matches||[],g.errors):v.loaderData,D=v.blockers;D.size>0&&(D=new Map(D),D.forEach((Y,Ie)=>D.set(Ie,_r)));let z=U===!0||v.navigation.formMethod!=null&&ht(v.navigation.formMethod)&&((B=p.state)==null?void 0:B._isRedirect)!==!0;i&&(o=i,i=void 0),q||x===ke.Pop||(x===ke.Push?e.history.push(p,p.state):x===ke.Replace&&e.history.replace(p,p.state));let $;if(x===ke.Pop){let Y=le.get(v.location.pathname);Y&&Y.has(p.pathname)?$={currentLocation:v.location,nextLocation:p}:le.has(p.pathname)&&($={currentLocation:p,nextLocation:v.location})}else if(ee){let Y=le.get(v.location.pathname);Y?Y.add(p.pathname):(Y=new Set([p.pathname]),le.set(v.location.pathname,Y)),$={currentLocation:v.location,nextLocation:p}}je(de({},g,{actionData:F,loaderData:b,historyAction:x,location:p,initialized:!0,navigation:xo,revalidation:"idle",restoreScrollPosition:As(p,g.matches||v.matches),preventScrollReset:z,blockers:D}),{viewTransitionOpts:$,flushSync:H===!0}),x=ke.Pop,U=!1,ee=!1,q=!1,re=!1,Ee=[]}async function xs(p,g){if(typeof p=="number"){e.history.go(p);return}let E=Ei(v.location,v.matches,s,d.v7_prependBasename,p,d.v7_relativeSplatPath,g==null?void 0:g.fromRouteId,g==null?void 0:g.relative),{path:P,submission:B,error:H}=Xu(d.v7_normalizeFormMethod,!1,E,g),G=v.location,F=ol(v.location,P,g&&g.state);F=de({},F,e.history.encodeLocation(F));let b=g&&g.replace!=null?g.replace:void 0,D=ke.Push;b===!0?D=ke.Replace:b===!1||B!=null&&ht(B.formMethod)&&B.formAction===v.location.pathname+v.location.search&&(D=ke.Replace);let z=g&&"preventScrollReset"in g?g.preventScrollReset===!0:void 0,$=(g&&g.flushSync)===!0,Y=Os({currentLocation:G,nextLocation:F,historyAction:D});if(Y){El(Y,{state:"blocked",location:F,proceed(){El(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),xs(p,g)},reset(){let Ie=new Map(v.blockers);Ie.set(Y,_r),je({blockers:Ie})}});return}return await dn(D,F,{submission:B,pendingError:H,preventScrollReset:z,replace:g&&g.replace,enableViewTransition:g&&g.viewTransition,flushSync:$})}function qf(){if(Qa(),je({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){dn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}dn(x||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation,enableViewTransition:ee===!0})}}async function dn(p,g,E){I&&I.abort(),I=null,x=p,q=(E&&E.startUninterruptedRevalidation)===!0,op(v.location,v.matches),U=(E&&E.preventScrollReset)===!0,ee=(E&&E.enableViewTransition)===!0;let P=i||o,B=E&&E.overrideNavigation,H=E!=null&&E.initialHydration&&v.matches&&v.matches.length>0&&!y?v.matches:yn(P,g,s),G=(E&&E.flushSync)===!0;if(H&&v.initialized&&!re&&_y(v.location,g)&&!(E&&E.submission&&ht(E.submission.formMethod))){On(g,{matches:H},{flushSync:G});return}let F=kl(H,P,g.pathname);if(F.active&&F.matches&&(H=F.matches),!H){let{error:ie,notFoundMatches:ne,route:ve}=Ka(g.pathname);On(g,{matches:ne,loaderData:{},errors:{[ve.id]:ie}},{flushSync:G});return}I=new AbortController;let b=bn(e.history,g,I.signal,E&&E.submission),D;if(E&&E.pendingError)D=[vn(H).route.id,{type:ae.error,error:E.pendingError}];else if(E&&E.submission&&ht(E.submission.formMethod)){let ie=await Xf(b,g,E.submission,H,F.active,{replace:E.replace,flushSync:G});if(ie.shortCircuited)return;if(ie.pendingActionResult){let[ne,ve]=ie.pendingActionResult;if(Je(ve)&&il(ve.error)&&ve.error.status===404){I=null,On(g,{matches:ie.matches,loaderData:{},errors:{[ne]:ve.error}});return}}H=ie.matches||H,D=ie.pendingActionResult,B=_o(g,E.submission),G=!1,F.active=!1,b=bn(e.history,b.url,b.signal)}let{shortCircuited:z,matches:$,loaderData:Y,errors:Ie}=await Zf(b,g,H,F.active,B,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,G,D);z||(I=null,On(g,de({matches:$||H},oc(D),{loaderData:Y,errors:Ie})))}async function Xf(p,g,E,P,B,H){H===void 0&&(H={}),Qa();let G=By(g,E);if(je({navigation:G},{flushSync:H.flushSync===!0}),B){let D=await wl(P,g.pathname,p.signal);if(D.type==="aborted")return{shortCircuited:!0};if(D.type==="error"){let z=vn(D.partialMatches).route.id;return{matches:D.partialMatches,pendingActionResult:[z,{type:ae.error,error:D.error}]}}else if(D.matches)P=D.matches;else{let{notFoundMatches:z,error:$,route:Y}=Ka(g.pathname);return{matches:z,pendingActionResult:[Y.id,{type:ae.error,error:$}]}}}let F,b=Or(P,g);if(!b.route.action&&!b.route.lazy)F={type:ae.error,error:$e(405,{method:p.method,pathname:g.pathname,routeId:b.route.id})};else if(F=(await mr("action",v,p,[b],P,null))[b.route.id],p.signal.aborted)return{shortCircuited:!0};if(kn(F)){let D;return H&&H.replace!=null?D=H.replace:D=nc(F.response.headers.get("Location"),new URL(p.url),s)===v.location.pathname+v.location.search,await fn(p,F,!0,{submission:E,replace:D}),{shortCircuited:!0}}if(Yt(F))throw $e(400,{type:"defer-action"});if(Je(F)){let D=vn(P,b.route.id);return(H&&H.replace)!==!0&&(x=ke.Push),{matches:P,pendingActionResult:[D.route.id,F]}}return{matches:P,pendingActionResult:[b.route.id,F]}}async function Zf(p,g,E,P,B,H,G,F,b,D,z){let $=B||_o(g,H),Y=H||G||uc($),Ie=!q&&(!d.v7_partialHydration||!b);if(P){if(Ie){let ge=_s(z);je(de({navigation:$},ge!==void 0?{actionData:ge}:{}),{flushSync:D})}let J=await wl(E,g.pathname,p.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let ge=vn(J.partialMatches).route.id;return{matches:J.partialMatches,loaderData:{},errors:{[ge]:J.error}}}else if(J.matches)E=J.matches;else{let{error:ge,notFoundMatches:An,route:vr}=Ka(g.pathname);return{matches:An,loaderData:{},errors:{[vr.id]:ge}}}}let ie=i||o,[ne,ve]=Ju(e.history,v,E,Y,g,d.v7_partialHydration&&b===!0,d.v7_skipActionErrorRevalidation,re,Ee,Ge,xe,Ne,te,ie,s,z);if(Ya(J=>!(E&&E.some(ge=>ge.route.id===J))||ne&&ne.some(ge=>ge.route.id===J)),V=++j,ne.length===0&&ve.length===0){let J=Ns();return On(g,de({matches:E,loaderData:{},errors:z&&Je(z[1])?{[z[0]]:z[1].error}:null},oc(z),J?{fetchers:new Map(v.fetchers)}:{}),{flushSync:D}),{shortCircuited:!0}}if(Ie){let J={};if(!P){J.navigation=$;let ge=_s(z);ge!==void 0&&(J.actionData=ge)}ve.length>0&&(J.fetchers=Jf(ve)),je(J,{flushSync:D})}ve.forEach(J=>{jt(J.key),J.controller&&L.set(J.key,J.controller)});let Mn=()=>ve.forEach(J=>jt(J.key));I&&I.signal.addEventListener("abort",Mn);let{loaderResults:hr,fetcherResults:Lt}=await Ls(v,E,ne,ve,p);if(p.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",Mn),ve.forEach(J=>L.delete(J.key));let Et=Ul(hr);if(Et)return await fn(p,Et.result,!0,{replace:F}),{shortCircuited:!0};if(Et=Ul(Lt),Et)return te.add(Et.key),await fn(p,Et.result,!0,{replace:F}),{shortCircuited:!0};let{loaderData:qa,errors:yr}=lc(v,E,hr,z,ve,Lt,ye);ye.forEach((J,ge)=>{J.subscribe(An=>{(An||J.done)&&ye.delete(ge)})}),d.v7_partialHydration&&b&&v.errors&&(yr=de({},v.errors,yr));let pn=Ns(),Cl=Is(V),Pl=pn||Cl||ve.length>0;return de({matches:E,loaderData:qa,errors:yr},Pl?{fetchers:new Map(v.fetchers)}:{})}function _s(p){if(p&&!Je(p[1]))return{[p[0]]:p[1].data};if(v.actionData)return Object.keys(v.actionData).length===0?null:v.actionData}function Jf(p){return p.forEach(g=>{let E=v.fetchers.get(g.key),P=Lr(void 0,E?E.data:void 0);v.fetchers.set(g.key,P)}),new Map(v.fetchers)}function ep(p,g,E,P){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");jt(p);let B=(P&&P.flushSync)===!0,H=i||o,G=Ei(v.location,v.matches,s,d.v7_prependBasename,E,d.v7_relativeSplatPath,g,P==null?void 0:P.relative),F=yn(H,G,s),b=kl(F,H,G);if(b.active&&b.matches&&(F=b.matches),!F){_t(p,g,$e(404,{pathname:G}),{flushSync:B});return}let{path:D,submission:z,error:$}=Xu(d.v7_normalizeFormMethod,!0,G,P);if($){_t(p,g,$,{flushSync:B});return}let Y=Or(F,D),Ie=(P&&P.preventScrollReset)===!0;if(z&&ht(z.formMethod)){tp(p,g,D,Y,F,b.active,B,Ie,z);return}Ne.set(p,{routeId:g,path:D}),np(p,g,D,Y,F,b.active,B,Ie,z)}async function tp(p,g,E,P,B,H,G,F,b){Qa(),Ne.delete(p);function D(Ce){if(!Ce.route.action&&!Ce.route.lazy){let Dn=$e(405,{method:b.formMethod,pathname:E,routeId:g});return _t(p,g,Dn,{flushSync:G}),!0}return!1}if(!H&&D(P))return;let z=v.fetchers.get(p);zt(p,Oy(b,z),{flushSync:G});let $=new AbortController,Y=bn(e.history,E,$.signal,b);if(H){let Ce=await wl(B,new URL(Y.url).pathname,Y.signal,p);if(Ce.type==="aborted")return;if(Ce.type==="error"){_t(p,g,Ce.error,{flushSync:G});return}else if(Ce.matches){if(B=Ce.matches,P=Or(B,E),D(P))return}else{_t(p,g,$e(404,{pathname:E}),{flushSync:G});return}}L.set(p,$);let Ie=j,ne=(await mr("action",v,Y,[P],B,p))[P.route.id];if(Y.signal.aborted){L.get(p)===$&&L.delete(p);return}if(d.v7_fetcherPersist&&xe.has(p)){if(kn(ne)||Je(ne)){zt(p,Ut(void 0));return}}else{if(kn(ne))if(L.delete(p),V>Ie){zt(p,Ut(void 0));return}else return te.add(p),zt(p,Lr(b)),fn(Y,ne,!1,{fetcherSubmission:b,preventScrollReset:F});if(Je(ne)){_t(p,g,ne.error);return}}if(Yt(ne))throw $e(400,{type:"defer-action"});let ve=v.navigation.location||v.location,Mn=bn(e.history,ve,$.signal),hr=i||o,Lt=v.navigation.state!=="idle"?yn(hr,v.navigation.location,s):v.matches;Q(Lt,"Didn't find any matches after fetcher action");let Et=++j;Z.set(p,Et);let qa=Lr(b,ne.data);v.fetchers.set(p,qa);let[yr,pn]=Ju(e.history,v,Lt,b,ve,!1,d.v7_skipActionErrorRevalidation,re,Ee,Ge,xe,Ne,te,hr,s,[P.route.id,ne]);pn.filter(Ce=>Ce.key!==p).forEach(Ce=>{let Dn=Ce.key,Ds=v.fetchers.get(Dn),up=Lr(void 0,Ds?Ds.data:void 0);v.fetchers.set(Dn,up),jt(Dn),Ce.controller&&L.set(Dn,Ce.controller)}),je({fetchers:new Map(v.fetchers)});let Cl=()=>pn.forEach(Ce=>jt(Ce.key));$.signal.addEventListener("abort",Cl);let{loaderResults:Pl,fetcherResults:J}=await Ls(v,Lt,yr,pn,Mn);if($.signal.aborted)return;$.signal.removeEventListener("abort",Cl),Z.delete(p),L.delete(p),pn.forEach(Ce=>L.delete(Ce.key));let ge=Ul(Pl);if(ge)return fn(Mn,ge.result,!1,{preventScrollReset:F});if(ge=Ul(J),ge)return te.add(ge.key),fn(Mn,ge.result,!1,{preventScrollReset:F});let{loaderData:An,errors:vr}=lc(v,Lt,Pl,void 0,pn,J,ye);if(v.fetchers.has(p)){let Ce=Ut(ne.data);v.fetchers.set(p,Ce)}Is(Et),v.navigation.state==="loading"&&Et>V?(Q(x,"Expected pending action"),I&&I.abort(),On(v.navigation.location,{matches:Lt,loaderData:An,errors:vr,fetchers:new Map(v.fetchers)})):(je({errors:vr,loaderData:ac(v.loaderData,An,Lt,vr),fetchers:new Map(v.fetchers)}),re=!1)}async function np(p,g,E,P,B,H,G,F,b){let D=v.fetchers.get(p);zt(p,Lr(b,D?D.data:void 0),{flushSync:G});let z=new AbortController,$=bn(e.history,E,z.signal);if(H){let ne=await wl(B,new URL($.url).pathname,$.signal,p);if(ne.type==="aborted")return;if(ne.type==="error"){_t(p,g,ne.error,{flushSync:G});return}else if(ne.matches)B=ne.matches,P=Or(B,E);else{_t(p,g,$e(404,{pathname:E}),{flushSync:G});return}}L.set(p,z);let Y=j,ie=(await mr("loader",v,$,[P],B,p))[P.route.id];if(Yt(ie)&&(ie=await ws(ie,$.signal,!0)||ie),L.get(p)===z&&L.delete(p),!$.signal.aborted){if(xe.has(p)){zt(p,Ut(void 0));return}if(kn(ie))if(V>Y){zt(p,Ut(void 0));return}else{te.add(p),await fn($,ie,!1,{preventScrollReset:F});return}if(Je(ie)){_t(p,g,ie.error);return}Q(!Yt(ie),"Unhandled fetcher deferred data"),zt(p,Ut(ie.data))}}async function fn(p,g,E,P){let{submission:B,fetcherSubmission:H,preventScrollReset:G,replace:F}=P===void 0?{}:P;g.response.headers.has("X-Remix-Revalidate")&&(re=!0);let b=g.response.headers.get("Location");Q(b,"Expected a Location header on the redirect Response"),b=nc(b,new URL(p.url),s);let D=ol(v.location,b,{_isRedirect:!0});if(n){let ne=!1;if(g.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(ks.test(b)){const ve=e.history.createURL(b);ne=ve.origin!==t.location.origin||hl(ve.pathname,s)==null}if(ne){F?t.location.replace(b):t.location.assign(b);return}}I=null;let z=F===!0||g.response.headers.has("X-Remix-Replace")?ke.Replace:ke.Push,{formMethod:$,formAction:Y,formEncType:Ie}=v.navigation;!B&&!H&&$&&Y&&Ie&&(B=uc(v.navigation));let ie=B||H;if(py.has(g.response.status)&&ie&&ht(ie.formMethod))await dn(z,D,{submission:de({},ie,{formAction:b}),preventScrollReset:G||U,enableViewTransition:E?ee:void 0});else{let ne=_o(D,B);await dn(z,D,{overrideNavigation:ne,fetcherSubmission:H,preventScrollReset:G||U,enableViewTransition:E?ee:void 0})}}async function mr(p,g,E,P,B,H){let G,F={};try{G=await ky(u,p,g,E,P,B,H,a,l)}catch(b){return P.forEach(D=>{F[D.route.id]={type:ae.error,error:b}}),F}for(let[b,D]of Object.entries(G))if(Ly(D)){let z=D.result;F[b]={type:ae.redirect,response:Py(z,E,b,B,s,d.v7_relativeSplatPath)}}else F[b]=await Cy(D);return F}async function Ls(p,g,E,P,B){let H=p.matches,G=mr("loader",p,B,E,g,null),F=Promise.all(P.map(async z=>{if(z.matches&&z.match&&z.controller){let Y=(await mr("loader",p,bn(e.history,z.path,z.controller.signal),[z.match],z.matches,z.key))[z.match.route.id];return{[z.key]:Y}}else return Promise.resolve({[z.key]:{type:ae.error,error:$e(404,{pathname:z.path})}})})),b=await G,D=(await F).reduce((z,$)=>Object.assign(z,$),{});return await Promise.all([Ny(g,b,B.signal,H,p.loaderData),Iy(g,D,P)]),{loaderResults:b,fetcherResults:D}}function Qa(){re=!0,Ee.push(...Ya()),Ne.forEach((p,g)=>{L.has(g)&&Ge.add(g),jt(g)})}function zt(p,g,E){E===void 0&&(E={}),v.fetchers.set(p,g),je({fetchers:new Map(v.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function _t(p,g,E,P){P===void 0&&(P={});let B=vn(v.matches,g);Sl(p),je({errors:{[B.route.id]:E},fetchers:new Map(v.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function Ts(p){return Ae.set(p,(Ae.get(p)||0)+1),xe.has(p)&&xe.delete(p),v.fetchers.get(p)||my}function Sl(p){let g=v.fetchers.get(p);L.has(p)&&!(g&&g.state==="loading"&&Z.has(p))&&jt(p),Ne.delete(p),Z.delete(p),te.delete(p),d.v7_fetcherPersist&&xe.delete(p),Ge.delete(p),v.fetchers.delete(p)}function rp(p){let g=(Ae.get(p)||0)-1;g<=0?(Ae.delete(p),xe.add(p),d.v7_fetcherPersist||Sl(p)):Ae.set(p,g),je({fetchers:new Map(v.fetchers)})}function jt(p){let g=L.get(p);g&&(g.abort(),L.delete(p))}function Rs(p){for(let g of p){let E=Ts(g),P=Ut(E.data);v.fetchers.set(g,P)}}function Ns(){let p=[],g=!1;for(let E of te){let P=v.fetchers.get(E);Q(P,"Expected fetcher: "+E),P.state==="loading"&&(te.delete(E),p.push(E),g=!0)}return Rs(p),g}function Is(p){let g=[];for(let[E,P]of Z)if(P<p){let B=v.fetchers.get(E);Q(B,"Expected fetcher: "+E),B.state==="loading"&&(jt(E),Z.delete(E),g.push(E))}return Rs(g),g.length>0}function lp(p,g){let E=v.blockers.get(p)||_r;return at.get(p)!==g&&at.set(p,g),E}function Bs(p){v.blockers.delete(p),at.delete(p)}function El(p,g){let E=v.blockers.get(p)||_r;Q(E.state==="unblocked"&&g.state==="blocked"||E.state==="blocked"&&g.state==="blocked"||E.state==="blocked"&&g.state==="proceeding"||E.state==="blocked"&&g.state==="unblocked"||E.state==="proceeding"&&g.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+g.state);let P=new Map(v.blockers);P.set(p,g),je({blockers:P})}function Os(p){let{currentLocation:g,nextLocation:E,historyAction:P}=p;if(at.size===0)return;at.size>1&&Rn(!1,"A router only supports one blocker at a time");let B=Array.from(at.entries()),[H,G]=B[B.length-1],F=v.blockers.get(H);if(!(F&&F.state==="proceeding")&&G({currentLocation:g,nextLocation:E,historyAction:P}))return H}function Ka(p){let g=$e(404,{pathname:p}),E=i||o,{matches:P,route:B}=ic(E);return Ya(),{notFoundMatches:P,route:B,error:g}}function Ya(p){let g=[];return ye.forEach((E,P)=>{(!p||p(P))&&(E.cancel(),g.push(P),ye.delete(P))}),g}function ap(p,g,E){if(k=p,N=g,w=E||null,!h&&v.navigation===xo){h=!0;let P=As(v.location,v.matches);P!=null&&je({restoreScrollPosition:P})}return()=>{k=null,N=null,w=null}}function Ms(p,g){return w&&w(p,g.map(P=>Wh(P,v.loaderData)))||p.key}function op(p,g){if(k&&N){let E=Ms(p,g);k[E]=N()}}function As(p,g){if(k){let E=Ms(p,g),P=k[E];if(typeof P=="number")return P}return null}function kl(p,g,E){if(f)if(p){if(Object.keys(p[0].params).length>0)return{active:!0,matches:ta(g,E,s,!0)}}else return{active:!0,matches:ta(g,E,s,!0)||[]};return{active:!1,matches:null}}async function wl(p,g,E,P){if(!f)return{type:"success",matches:p};let B=p;for(;;){let H=i==null,G=i||o,F=a;try{await f({signal:E,path:g,matches:B,fetcherKey:P,patch:(z,$)=>{E.aborted||tc(z,$,G,F,l)}})}catch(z){return{type:"error",error:z,partialMatches:B}}finally{H&&!E.aborted&&(o=[...o])}if(E.aborted)return{type:"aborted"};let b=yn(G,g,s);if(b)return{type:"success",matches:b};let D=ta(G,g,s,!0);if(!D||B.length===D.length&&B.every((z,$)=>z.route.id===D[$].route.id))return{type:"success",matches:null};B=D}}function ip(p){a={},i=_a(p,l,void 0,a)}function sp(p,g){let E=i==null;tc(p,g,i||o,a,l),E&&(o=[...o],je({}))}return M={get basename(){return s},get future(){return d},get state(){return v},get routes(){return o},get window(){return t},initialize:Qf,subscribe:Yf,enableScrollRestoration:ap,navigate:xs,fetch:ep,revalidate:qf,createHref:p=>e.history.createHref(p),encodeLocation:p=>e.history.encodeLocation(p),getFetcher:Ts,deleteFetcher:rp,dispose:Kf,getBlocker:lp,deleteBlocker:Bs,patchRoutes:sp,_internalFetchControllers:L,_internalActiveDeferreds:ye,_internalSetRoutes:ip},M}function vy(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ei(e,t,n,r,l,a,o,i){let s,u;if(o){s=[];for(let d of t)if(s.push(d),d.route.id===o){u=d;break}}else s=t,u=t[t.length-1];let f=Es(l||".",Ss(s,a),hl(e.pathname,n)||e.pathname,i==="path");if(l==null&&(f.search=e.search,f.hash=e.hash),(l==null||l===""||l===".")&&u){let d=Cs(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let m=new URLSearchParams(f.search),S=m.getAll("index");m.delete("index"),S.filter(w=>w).forEach(w=>m.append("index",w));let k=m.toString();f.search=k?"?"+k:""}}return r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:ln([n,f.pathname])),ml(f)}function Xu(e,t,n,r){if(!r||!vy(r))return{path:n};if(r.formMethod&&!Ry(r.formMethod))return{path:n,error:$e(405,{method:r.formMethod})};let l=()=>({path:n,error:$e(400,{type:"invalid-body"})}),a=r.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),i=Ff(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!ht(o))return l();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((S,k)=>{let[w,N]=k;return""+S+w+"="+N+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!ht(o))return l();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return l()}}}Q(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=wi(r.formData),u=r.formData;else if(r.body instanceof FormData)s=wi(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=rc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=rc(s)}catch{return l()}let f={formMethod:o,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(ht(f.formMethod))return{path:n,submission:f};let d=bt(n);return t&&d.search&&Cs(d.search)&&s.append("index",""),d.search="?"+s,{path:ml(d),submission:f}}function Zu(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(l=>l.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function Ju(e,t,n,r,l,a,o,i,s,u,f,d,m,S,k,w){let N=w?Je(w[1])?w[1].error:w[1].data:void 0,h=e.createURL(t.location),c=e.createURL(l),y=n;a&&t.errors?y=Zu(n,Object.keys(t.errors)[0],!0):w&&Je(w[1])&&(y=Zu(n,w[0]));let C=w?w[1].statusCode:void 0,R=o&&C&&C>=400,M=y.filter((x,U)=>{let{route:I}=x;if(I.lazy)return!0;if(I.loader==null)return!1;if(a)return ki(I,t.loaderData,t.errors);if(gy(t.loaderData,t.matches[U],x)||s.some(W=>W===x.route.id))return!0;let ee=t.matches[U],le=x;return ec(x,de({currentUrl:h,currentParams:ee.params,nextUrl:c,nextParams:le.params},r,{actionResult:N,actionStatus:C,defaultShouldRevalidate:R?!1:i||h.pathname+h.search===c.pathname+c.search||h.search!==c.search||Af(ee,le)}))}),v=[];return d.forEach((x,U)=>{if(a||!n.some(q=>q.route.id===x.routeId)||f.has(U))return;let I=yn(S,x.path,k);if(!I){v.push({key:U,routeId:x.routeId,path:x.path,matches:null,match:null,controller:null});return}let ee=t.fetchers.get(U),le=Or(I,x.path),W=!1;m.has(U)?W=!1:u.has(U)?(u.delete(U),W=!0):ee&&ee.state!=="idle"&&ee.data===void 0?W=i:W=ec(le,de({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:N,actionStatus:C,defaultShouldRevalidate:R?!1:i})),W&&v.push({key:U,routeId:x.routeId,path:x.path,matches:I,match:le,controller:new AbortController})}),[M,v]}function ki(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,l=n!=null&&n[e.id]!==void 0;return!r&&l?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!l}function gy(e,t,n){let r=!t||n.route.id!==t.route.id,l=e[n.route.id]===void 0;return r||l}function Af(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ec(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function tc(e,t,n,r,l){var a;let o;if(e){let u=r[e];Q(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),o=u.children}else o=n;let i=t.filter(u=>!o.some(f=>Df(u,f))),s=_a(i,l,[e||"_","patch",String(((a=o)==null?void 0:a.length)||"0")],r);o.push(...s)}function Df(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var l;return(l=t.children)==null?void 0:l.some(a=>Df(n,a))}):!1}async function Sy(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=n[e.id];Q(l,"No route found in manifest");let a={};for(let o in r){let s=l[o]!==void 0&&o!=="hasErrorBoundary";Rn(!s,'Route "'+l.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!s&&!Uh.has(o)&&(a[o]=r[o])}Object.assign(l,a),Object.assign(l,de({},t(l),{lazy:void 0}))}async function Ey(e){let{matches:t}=e,n=t.filter(l=>l.shouldLoad);return(await Promise.all(n.map(l=>l.resolve()))).reduce((l,a,o)=>Object.assign(l,{[n[o].route.id]:a}),{})}async function ky(e,t,n,r,l,a,o,i,s,u){let f=a.map(S=>S.route.lazy?Sy(S.route,s,i):void 0),d=a.map((S,k)=>{let w=f[k],N=l.some(c=>c.route.id===S.route.id);return de({},S,{shouldLoad:N,resolve:async c=>(c&&r.method==="GET"&&(S.route.lazy||S.route.loader)&&(N=!0),N?wy(t,r,S,w,c,u):Promise.resolve({type:ae.data,result:void 0}))})}),m=await e({matches:d,request:r,params:a[0].params,fetcherKey:o,context:u});try{await Promise.all(f)}catch{}return m}async function wy(e,t,n,r,l,a){let o,i,s=u=>{let f,d=new Promise((k,w)=>f=w);i=()=>f(),t.signal.addEventListener("abort",i);let m=k=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:a},...k!==void 0?[k]:[]),S=(async()=>{try{return{type:"data",result:await(l?l(w=>m(w)):m())}}catch(k){return{type:"error",result:k}}})();return Promise.race([S,d])};try{let u=n.route[e];if(r)if(u){let f,[d]=await Promise.all([s(u).catch(m=>{f=m}),r]);if(f!==void 0)throw f;o=d}else if(await r,u=n.route[e],u)o=await s(u);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw $e(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:ae.data,result:void 0};else if(u)o=await s(u);else{let f=new URL(t.url),d=f.pathname+f.search;throw $e(404,{pathname:d})}Q(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ae.error,result:u}}finally{i&&t.signal.removeEventListener("abort",i)}return o}async function Cy(e){let{result:t,type:n}=e;if(bf(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:ae.error,error:m}}return n===ae.error?{type:ae.error,error:new La(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:ae.data,data:d,statusCode:t.status,headers:t.headers}}if(n===ae.error){if(sc(t)){var r,l;if(t.data instanceof Error){var a,o;return{type:ae.error,error:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:ae.error,error:new La(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:il(t)?t.status:void 0,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}}return{type:ae.error,error:t,statusCode:il(t)?t.status:void 0}}if(Ty(t)){var i,s;return{type:ae.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((s=t.init)==null?void 0:s.headers)&&new Headers(t.init.headers)}}if(sc(t)){var u,f;return{type:ae.data,data:t.data,statusCode:(u=t.init)==null?void 0:u.status,headers:(f=t.init)!=null&&f.headers?new Headers(t.init.headers):void 0}}return{type:ae.data,data:t}}function Py(e,t,n,r,l,a){let o=e.headers.get("Location");if(Q(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!ks.test(o)){let i=r.slice(0,r.findIndex(s=>s.route.id===n)+1);o=Ei(new URL(t.url),i,l,!0,o,a),e.headers.set("Location",o)}return e}function nc(e,t,n){if(ks.test(e)){let r=e,l=r.startsWith("//")?new URL(t.protocol+r):new URL(r),a=hl(l.pathname,n)!=null;if(l.origin===t.origin&&a)return l.pathname+l.search+l.hash}return e}function bn(e,t,n,r){let l=e.createURL(Ff(t)).toString(),a={signal:n};if(r&&ht(r.formMethod)){let{formMethod:o,formEncType:i}=r;a.method=o.toUpperCase(),i==="application/json"?(a.headers=new Headers({"Content-Type":i}),a.body=JSON.stringify(r.json)):i==="text/plain"?a.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?a.body=wi(r.formData):a.body=r.formData}return new Request(l,a)}function wi(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function rc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function xy(e,t,n,r,l){let a={},o=null,i,s=!1,u={},f=n&&Je(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let m=d.route.id,S=t[m];if(Q(!kn(S),"Cannot handle redirect results in processLoaderData"),Je(S)){let k=S.error;f!==void 0&&(k=f,f=void 0),o=o||{};{let w=vn(e,m);o[w.route.id]==null&&(o[w.route.id]=k)}a[m]=void 0,s||(s=!0,i=il(S.error)?S.error.status:500),S.headers&&(u[m]=S.headers)}else Yt(S)?(r.set(m,S.deferredData),a[m]=S.deferredData.data,S.statusCode!=null&&S.statusCode!==200&&!s&&(i=S.statusCode),S.headers&&(u[m]=S.headers)):(a[m]=S.data,S.statusCode&&S.statusCode!==200&&!s&&(i=S.statusCode),S.headers&&(u[m]=S.headers))}),f!==void 0&&n&&(o={[n[0]]:f},a[n[0]]=void 0),{loaderData:a,errors:o,statusCode:i||200,loaderHeaders:u}}function lc(e,t,n,r,l,a,o){let{loaderData:i,errors:s}=xy(t,n,r,o);return l.forEach(u=>{let{key:f,match:d,controller:m}=u,S=a[f];if(Q(S,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(Je(S)){let k=vn(e.matches,d==null?void 0:d.route.id);s&&s[k.route.id]||(s=de({},s,{[k.route.id]:S.error})),e.fetchers.delete(f)}else if(kn(S))Q(!1,"Unhandled fetcher revalidation redirect");else if(Yt(S))Q(!1,"Unhandled fetcher deferred data");else{let k=Ut(S.data);e.fetchers.set(f,k)}}),{loaderData:i,errors:s}}function ac(e,t,n,r){let l=de({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(l[o]=t[o]):e[o]!==void 0&&a.route.loader&&(l[o]=e[o]),r&&r.hasOwnProperty(o))break}return l}function oc(e){return e?Je(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function vn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ic(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function $e(e,t){let{pathname:n,routeId:r,method:l,type:a,message:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",l&&n&&r?s="You made a "+l+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() is not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",l&&n&&r?s="You made a "+l.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(s='Invalid request method "'+l.toUpperCase()+'"')),new La(e||500,i,new Error(s),!0)}function Ul(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,l]=t[n];if(kn(l))return{key:r,result:l}}}function Ff(e){let t=typeof e=="string"?bt(e):e;return ml(de({},t,{hash:""}))}function _y(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Ly(e){return bf(e.result)&&fy.has(e.result.status)}function Yt(e){return e.type===ae.deferred}function Je(e){return e.type===ae.error}function kn(e){return(e&&e.type)===ae.redirect}function sc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Ty(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function bf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ry(e){return dy.has(e.toLowerCase())}function ht(e){return uy.has(e.toLowerCase())}async function Ny(e,t,n,r,l){let a=Object.entries(t);for(let o=0;o<a.length;o++){let[i,s]=a[o],u=e.find(m=>(m==null?void 0:m.route.id)===i);if(!u)continue;let f=r.find(m=>m.route.id===u.route.id),d=f!=null&&!Af(f,u)&&(l&&l[u.route.id])!==void 0;Yt(s)&&d&&await ws(s,n,!1).then(m=>{m&&(t[i]=m)})}}async function Iy(e,t,n){for(let r=0;r<n.length;r++){let{key:l,routeId:a,controller:o}=n[r],i=t[l];e.find(u=>(u==null?void 0:u.route.id)===a)&&Yt(i)&&(Q(o,"Expected an AbortController for revalidating fetcher deferred result"),await ws(i,o.signal,!0).then(u=>{u&&(t[l]=u)}))}}async function ws(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ae.data,data:e.deferredData.unwrappedData}}catch(l){return{type:ae.error,error:l}}return{type:ae.data,data:e.deferredData.data}}}function Cs(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Or(e,t){let n=typeof t=="string"?bt(t).search:t.search;if(e[e.length-1].route.index&&Cs(n||""))return e[e.length-1];let r=Bf(e);return r[r.length-1]}function uc(e){let{formMethod:t,formAction:n,formEncType:r,text:l,formData:a,json:o}=e;if(!(!t||!n||!r)){if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:l};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function _o(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function By(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Lr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Oy(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Ut(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function My(e,t){try{let n=e.sessionStorage.getItem(Mf);if(n){let r=JSON.parse(n);for(let[l,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(l,new Set(a||[]))}}catch{}}function Ay(e,t){if(t.size>0){let n={};for(let[r,l]of t)n[r]=[...l];try{e.sessionStorage.setItem(Mf,JSON.stringify(n))}catch(r){Rn(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}const Ga=T.createContext(null),zf=T.createContext(null),yl=T.createContext(null),$a=T.createContext(null),Bn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),jf=T.createContext(null);function vl(){return T.useContext($a)!=null}function Ps(){return vl()||Q(!1),T.useContext($a).location}function Hf(e){T.useContext(yl).static||T.useLayoutEffect(e)}function Uf(){let{isDataRoute:e}=T.useContext(Bn);return e?Qy():Dy()}function Dy(){vl()||Q(!1);let e=T.useContext(Ga),{basename:t,future:n,navigator:r}=T.useContext(yl),{matches:l}=T.useContext(Bn),{pathname:a}=Ps(),o=JSON.stringify(Ss(l,n.v7_relativeSplatPath)),i=T.useRef(!1);return Hf(()=>{i.current=!0}),T.useCallback(function(u,f){if(f===void 0&&(f={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=Es(u,JSON.parse(o),a,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ln([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,a,e])}function Fy(e,t){return Vf(e,t)}function Vf(e,t,n,r){vl()||Q(!1);let{navigator:l}=T.useContext(yl),{matches:a}=T.useContext(Bn),o=a[a.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Ps(),f;if(t){var d;let N=typeof t=="string"?bt(t):t;s==="/"||(d=N.pathname)!=null&&d.startsWith(s)||Q(!1),f=N}else f=u;let m=f.pathname||"/",S=m;if(s!=="/"){let N=s.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let k=yn(e,{pathname:S}),w=Uy(k&&k.map(N=>Object.assign({},N,{params:Object.assign({},i,N.params),pathname:ln([s,l.encodeLocation?l.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?s:ln([s,l.encodeLocation?l.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),a,n,r);return t&&w?T.createElement($a.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ke.Pop}},w):w}function by(){let e=$y(),t=il(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:l},n):null,null)}const zy=T.createElement(by,null);class jy extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Bn.Provider,{value:this.props.routeContext},T.createElement(jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hy(e){let{routeContext:t,match:n,children:r}=e,l=T.useContext(Ga);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Bn.Provider,{value:t},r)}function Uy(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,i=(l=n)==null?void 0:l.errors;if(i!=null){let f=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);f>=0||Q(!1),o=o.slice(0,Math.min(o.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:S}=n,k=d.route.loader&&m[d.route.id]===void 0&&(!S||S[d.route.id]===void 0);if(d.route.lazy||k){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let S,k=!1,w=null,N=null;n&&(S=i&&d.route.id?i[d.route.id]:void 0,w=d.route.errorElement||zy,s&&(u<0&&m===0?(Ky("route-fallback"),k=!0,N=null):u===m&&(k=!0,N=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),c=()=>{let y;return S?y=w:k?y=N:d.route.Component?y=T.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=f,T.createElement(Hy,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?T.createElement(jy,{location:n.location,revalidation:n.revalidation,component:w,error:S,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Wf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wf||{}),Gf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gf||{});function Vy(e){let t=T.useContext(Ga);return t||Q(!1),t}function Wy(e){let t=T.useContext(zf);return t||Q(!1),t}function Gy(e){let t=T.useContext(Bn);return t||Q(!1),t}function $f(e){let t=Gy(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function $y(){var e;let t=T.useContext(jf),n=Wy(),r=$f();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Qy(){let{router:e}=Vy(Wf.UseNavigateStable),t=$f(Gf.UseNavigateStable),n=T.useRef(!1);return Hf(()=>{n.current=!0}),T.useCallback(function(l,a){a===void 0&&(a={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,sl({fromRouteId:t},a)))},[e,t])}const cc={};function Ky(e,t,n){cc[e]||(cc[e]=!0)}function Yy(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function qy(e){let{to:t,replace:n,state:r,relative:l}=e;vl()||Q(!1);let{future:a,static:o}=T.useContext(yl),{matches:i}=T.useContext(Bn),{pathname:s}=Ps(),u=Uf(),f=Es(t,Ss(i,a.v7_relativeSplatPath),s,l==="path"),d=JSON.stringify(f);return T.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:l}),[u,d,l,n,r]),null}function zn(e){Q(!1)}function Xy(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ke.Pop,navigator:a,static:o=!1,future:i}=e;vl()&&Q(!1);let s=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:s,navigator:a,static:o,future:sl({v7_relativeSplatPath:!1},i)}),[s,i,a,o]);typeof r=="string"&&(r=bt(r));let{pathname:f="/",search:d="",hash:m="",state:S=null,key:k="default"}=r,w=T.useMemo(()=>{let N=hl(f,s);return N==null?null:{location:{pathname:N,search:d,hash:m,state:S,key:k},navigationType:l}},[s,f,d,m,S,k,l]);return w==null?null:T.createElement(yl.Provider,{value:u},T.createElement($a.Provider,{children:n,value:w}))}function Zy(e){let{children:t,location:n}=e;return Fy(Ci(t),n)}new Promise(()=>{});function Ci(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,l)=>{if(!T.isValidElement(r))return;let a=[...t,l];if(r.type===T.Fragment){n.push.apply(n,Ci(r.props.children,a));return}r.type!==zn&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ci(r.props.children,a)),n.push(o)}),n}function Jy(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:T.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:T.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ta.apply(this,arguments)}const ev="6";try{window.__reactRouterVersion=ev}catch{}function tv(e,t){return yy({basename:t==null?void 0:t.basename,future:Ta({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:zh({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||nv(),routes:e,mapRouteProperties:Jy,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function nv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ta({},t,{errors:rv(t.errors)})),t}function rv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,l]of t)if(l&&l.__type==="RouteErrorResponse")n[r]=new La(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let a=window[l.__subType];if(typeof a=="function")try{let o=new a(l.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let a=new Error(l.message);a.stack="",n[r]=a}}else n[r]=l;return n}const lv=T.createContext({isTransitioning:!1}),av=T.createContext(new Map),ov="startTransition",dc=_p[ov],iv="flushSync",fc=bh[iv];function sv(e){dc?dc(e):e()}function Tr(e){fc?fc(e):e()}class uv{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function cv(e){let{fallbackElement:t,router:n,future:r}=e,[l,a]=T.useState(n.state),[o,i]=T.useState(),[s,u]=T.useState({isTransitioning:!1}),[f,d]=T.useState(),[m,S]=T.useState(),[k,w]=T.useState(),N=T.useRef(new Map),{v7_startTransition:h}=r||{},c=T.useCallback(x=>{h?sv(x):x()},[h]),y=T.useCallback((x,U)=>{let{deletedFetchers:I,flushSync:ee,viewTransitionOpts:le}=U;x.fetchers.forEach((q,re)=>{q.data!==void 0&&N.current.set(re,q.data)}),I.forEach(q=>N.current.delete(q));let W=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!le||W){ee?Tr(()=>a(x)):c(()=>a(x));return}if(ee){Tr(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let q=n.window.document.startViewTransition(()=>{Tr(()=>a(x))});q.finished.finally(()=>{Tr(()=>{d(void 0),S(void 0),i(void 0),u({isTransitioning:!1})})}),Tr(()=>S(q));return}m?(f&&f.resolve(),m.skipTransition(),w({state:x,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(i(x),u({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[n.window,m,f,N,c]);T.useLayoutEffect(()=>n.subscribe(y),[n,y]),T.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new uv)},[s]),T.useEffect(()=>{if(f&&o&&n.window){let x=o,U=f.promise,I=n.window.document.startViewTransition(async()=>{c(()=>a(x)),await U});I.finished.finally(()=>{d(void 0),S(void 0),i(void 0),u({isTransitioning:!1})}),S(I)}},[c,o,f,n.window]),T.useEffect(()=>{f&&o&&l.location.key===o.location.key&&f.resolve()},[f,m,l.location,o]),T.useEffect(()=>{!s.isTransitioning&&k&&(i(k.state),u({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}),w(void 0))},[s.isTransitioning,k]),T.useEffect(()=>{},[]);let C=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:x=>n.navigate(x),push:(x,U,I)=>n.navigate(x,{state:U,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(x,U,I)=>n.navigate(x,{replace:!0,state:U,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[n]),R=n.basename||"/",M=T.useMemo(()=>({router:n,navigator:C,static:!1,basename:R}),[n,C,R]),v=T.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return T.useEffect(()=>Yy(r,n.future),[r,n.future]),T.createElement(T.Fragment,null,T.createElement(Ga.Provider,{value:M},T.createElement(zf.Provider,{value:l},T.createElement(av.Provider,{value:N.current},T.createElement(lv.Provider,{value:s},T.createElement(Xy,{basename:R,location:l.location,navigationType:l.historyAction,navigator:C,future:v},l.initialized||n.future.v7_partialHydration?T.createElement(dv,{routes:n.routes,future:n.future,state:l}):t))))),null)}const dv=T.memo(fv);function fv(e){let{routes:t,future:n,state:r}=e;return Vf(t,void 0,r,n)}var pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pc||(pc={}));var mc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));function pv(){const e=Uf(),t=r=>{const l=document.getElementById(r);l&&l.scrollIntoView({behavior:"smooth",block:"start"})},n=()=>{e("/configurator")};return T.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const r=document.getElementById("year");r&&(r.textContent=new Date().getFullYear().toString());const l=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],a=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],o=[...l,...a],i={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},s=new Set(["shell","trimpiece","backShellMain","backHandles"]),u=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],f=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],d=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),m=[{id:"shell",mask:"/assets/masks/leftShell.png"},{id:"trimpiece",mask:"/assets/masks/centerBody.png"},{id:"faceButtons",mask:"/assets/masks/faceButtons.png"},{id:"stickL",mask:"/assets/masks/stickL.png"},{id:"stickR",mask:"/assets/masks/stickR.png"},{id:"touchpad",mask:"/assets/masks/touchpad.png"},{id:"share",mask:"/assets/masks/share.png"},{id:"options",mask:"/assets/masks/options.png"},{id:"psButton",mask:"/assets/masks/psButton.png"},{id:"bumpers",mask:"/assets/masks/bumperL.png"}];function S(W){return s.has(W)?u:f}function k(W){return W[Math.floor(Math.random()*W.length)]}function w(W,q){const re={};let Ee=0;return o.forEach(L=>{const j=S(L.id),V=k(j);re[L.id]=V,Ee+=i[L.id]||0}),{id:W,name:(q==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(W+1),colors:re,total:Ee}}function N(W,q){const re=W.toFixed(2);return q==="ar"?re+" د.ب":"BHD "+re}const h={ar:{navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
          <p><strong>متجر مخصص للاعبين اللي يهتمون بكل تفصيلة في أجهزتهم.</strong></p>
          <p>
          EZ GAMING متخصص في تخصيص أذرع بلايستيشن 5 بجودة عالية – مناسب للستريمرز،
          فرق الرياضات الإلكترونية، واللاعبين اللي يحبون طقم مميز يعكس هويتهم.
          </p>
          <p>نقدر نوفّر لك:</p>
          <ul>
            <li>طلبات شركات وفرق بكميات كبيرة</li>
            <li>تصاميم وألوان حصرية تحمل هوية علامتك</li>
            <li>تعاونات دعائية وجوائز للمسابقات</li>
          </ul>
          <p>اكتب لنا فكرتك، وفريقنا بيرجع لك بخيارات وأسعار خلال يوم عمل إلى يومين.</p>
        `,footerText:"جميع الحقوق محفوظة ©",buildTotalLabel:"الإجمالي:",preview:"معاينة",partNames:{shell:"الهيكل الأمامي",trimpiece:"الجزء الأوسط",faceButtons:"أزرار الأوجه",stickL:"العصا اليسرى",stickR:"العصا اليمنى",backShellMain:"الجزء الخلفي"},formSuccess:"شكرًا لتواصلك معنا! استلمنا رسالتك وسنرد عليك قريبًا."},en:{navPremade:"Premade controllers",navContact:"Contact",navBuildCta:"Build your own",heroBadge:"Next-gen custom shop",heroTitle:'Craft your own <span class="highlight">custom PS5 controller</span>',heroSub:"Choose shell, buttons and triggers. Start from a clean build or pick one of our EZ GAMING presets.",heroCreateBtn:"Create your own controller",heroPremadeBtn:"Browse premade builds",heroNote:"Prices start from <strong>BHD 4.00</strong>. No subscription – just fully custom gear.",heroLiveTag:"Live preview",premadeTitle:"Premade EZ GAMING builds",premadeSub:"A curated set of 20 controllers generated from the same color system used in the configurator, with true previews for each part.",contactTitle:"Contact us",contactCardTitle:"Send us a message",contactCardText:"Questions about bulk orders, finishes, or sponsorships? Share the details and we'll get back to you.",contactLabelName:"Name",contactLabelEmail:"Email",contactLabelMessage:"Message",contactSubmit:"Send message",contactMeta:`
          <p><strong>A custom shop for players who care about every detail.</strong></p>
          <p>
          EZ GAMING focuses on high-end PS5 controller customization – perfect for streamers,
          esports teams, and players who want hardware that matches their identity.
          </p>
          <p>We can help you with:</p>
          <ul>
            <li>Bulk and corporate orders</li>
            <li>Exclusive colorways for your brand</li>
            <li>Marketing collaborations and giveaway campaigns</li>
          </ul>
          <p>Tell us what you have in mind and we'll reply with options and pricing within 1–2 business days.</p>
        `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly."}};let c=localStorage.getItem("ez_lang")||"ar";function y(){document.documentElement.lang=c,document.documentElement.dir=c==="ar"?"rtl":"ltr"}function C(){const W=h[c];document.querySelectorAll("[data-i18n]").forEach(re=>{const Ee=re.getAttribute("data-i18n");W[Ee]&&(re.textContent=W[Ee])}),document.querySelectorAll("[data-i18n-html]").forEach(re=>{const Ee=re.getAttribute("data-i18n-html");W[Ee]&&(re.innerHTML=W[Ee])});const q=document.getElementById("langToggle");q&&(q.textContent=c==="ar"?"EN":"عربي")}let R=[];function M(W){const q=h[c],re=document.createElement("article");re.className="build-card";const Ee=document.createElement("div");Ee.className="build-thumb";const Ge=document.createElement("div");Ge.className="thumb-controller";const L=document.createElement("div");L.className="thumb-base",Ge.appendChild(L),m.forEach(Ae=>{const xe=W.colors[Ae.id];if(!xe)return;const ye=document.createElement("div");ye.className="thumb-layer",ye.style.setProperty("--mask-url",`url('${Ae.mask}')`),ye.style.setProperty("--tint",xe.hex),d.has(xe.hex.toLowerCase())?ye.style.setProperty("--tint-opacity","0.35"):ye.style.setProperty("--tint-opacity","1"),Ge.appendChild(ye)}),Ee.appendChild(Ge);const j=document.createElement("div");j.className="build-body";const V=document.createElement("div");V.className="build-title",V.textContent=W.name;const Z=document.createElement("div");Z.className="build-price",Z.innerHTML=N(W.total,c);const te=document.createElement("div");te.className="build-color-row";const Ne=document.createElement("button");return Ne.className="build-cta",Ne.type="button",Ne.textContent=q.preview,Ne.addEventListener("click",n),j.appendChild(V),j.appendChild(Z),j.appendChild(te),j.appendChild(Ne),re.appendChild(Ee),re.appendChild(j),re}function v(){const W=document.getElementById("buildGrid");if(W){if(W.innerHTML="",R.length)R=R.map((q,re)=>w(re,c));else for(let q=0;q<20;q++)R.push(w(q,c));R.forEach(q=>W.appendChild(M(q)))}}function x(W){c=W,localStorage.setItem("ez_lang",W),y(),C(),v()}const U=document.getElementById("langToggle"),I=document.getElementById("contactForm"),ee=()=>{x(c==="ar"?"en":"ar")},le=W=>{W.preventDefault(),alert(h[c].formSuccess),I==null||I.reset()};return U==null||U.addEventListener("click",ee),I==null||I.addEventListener("submit",le),y(),C(),v(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",U==null||U.removeEventListener("click",ee),I==null||I.removeEventListener("submit",le)}},[e]),O.jsxs("div",{className:"home-page",children:[O.jsxs("header",{className:"top-nav",children:[O.jsx("div",{className:"nav-left",children:O.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[O.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),O.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),O.jsxs("div",{className:"nav-right",children:[O.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>t("premadeSection")}),O.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>t("contactSection")}),O.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:n}),O.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"})]})]}),O.jsxs("section",{className:"hero",children:[O.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:O.jsx("source",{src:"/assets/back.mp4",type:"video/mp4"})}),O.jsx("div",{className:"hero-overlay"}),O.jsx("div",{className:"hero-inner",children:O.jsxs("div",{children:[O.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),O.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),O.jsxs("div",{className:"hero-actions",children:[O.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:n}),O.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>t("premadeSection")})]})]})})]}),O.jsxs("section",{className:"section",id:"premadeSection",children:[O.jsx("div",{className:"section-header",children:O.jsx("div",{children:O.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),O.jsx("div",{className:"build-grid",id:"buildGrid"})]}),O.jsxs("section",{className:"section",id:"contactSection",children:[O.jsx("div",{className:"section-header",children:O.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),O.jsxs("div",{className:"contact-grid",children:[O.jsxs("div",{className:"contact-card",children:[O.jsx("h3",{"data-i18n":"contactCardTitle"}),O.jsx("p",{"data-i18n":"contactCardText"}),O.jsxs("form",{id:"contactForm",children:[O.jsxs("div",{className:"contact-form-group",children:[O.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),O.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),O.jsxs("div",{className:"contact-form-group",children:[O.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),O.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),O.jsxs("div",{className:"contact-form-group",children:[O.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),O.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),O.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),O.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),O.jsxs("footer",{className:"footer",children:[O.jsx("span",{"data-i18n":"footerText"}),O.jsx("span",{id:"year"})]})]})}const mv=`


<canvas id="bgCanvas"></canvas>
 Sounds 
<audio id="sfxClick" preload="auto" src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="></audio>
<audio id="sfxClick2" preload="auto" src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="></audio>
 TOP NAV 
<div class="top-nav">
<div class="nav-logo">
<a class="nav-left" href="index.html" style="display:block;">
<div class="nav-logo-mark"></div>
</a>
</div>
<div class="nav-summary">
<div class="lang-toggle" id="langToggle">
<button class="lang-btn active" data-lang="ar">ع</button>
<button class="lang-btn" data-lang="en">EN</button>
</div>
</div>
</div>
<div class="page-content">
<div class="main-layout">
<!-- CONTROLLER COLUMN (LEFT) -->
<div class="controller-column">
<div class="controller-wrapper" id="controllerWrapper">
<div class="controller-area" id="controllerArea">
<div class="controller-bg"></div>
<div class="controller-flip" id="controllerFlip">
<div class="controller-face controller-face-front" id="controllerFaceFront">
<img alt="PS5 Controller Front" src="/assets/controller.png"/>
</div>
<div class="controller-face controller-face-back" id="controllerFaceBack">
<img alt="PS5 Controller Back" src="/assets/controller_back.png"/>
</div>
</div>
</div>
<!-- buttons under the controller -->
<div class="controller-buttons-stack">
<div class="side-toggle-container">
<div class="side-toggle" id="sideToggle">
<button class="side-btn active" data-i18n="front" data-side="front" type="button">الأمام</button>
<button class="side-btn" data-i18n="back" data-side="back" type="button">الخلف</button>
</div>
</div>
</div>
</div>
</div>
<!-- COLORS COLUMN (MIDDLE) -->
<div class="colors-column" id="colors-column">
<div class="color-panel">
<!-- Top header: part name + options title -->
<div class="color-panel-header" id="colorPanelHeaderTop">
<div class="color-panel-title" id="colorPanelTitle">اختر جزءًا</div>
<div class="color-panel-sub" id="optionsPanelSub">خيارات القطعة</div>
</div>
<!-- Options grid (stick type ...) -->
<div class="color-panel-grid" id="optionsPanelGrid"></div>
<!-- Bottom header: colors title -->
<div class="color-panel-header" id="colorPanelHeaderBottom">
<div class="color-panel-sub" id="colorPanelSub">الألوان المتاحة</div>
</div>
<!-- Colors grid -->
<div class="color-panel-grid2" id="colorPanelGrid"></div>
<!-- Empty state (shown when no part is selected) -->
<div class="color-empty-placeholder" id="colorEmptyState">
<!-- change the image path to whatever big icon you want -->
<img alt="Select a part" src="/assets/icons/shells.png"/>
</div>
</div>
</div>
<!-- PARTS COLUMN (RIGHT) -->
<div class="parts-column">
<div class="parts-panel">
<div class="parts-accordion">
<div class="accordion-item open">
<button class="accordion-header" type="button">
<div class="parts-title" data-i18n="partsOptionsHeading">خيارات القطعة</div>
<span aria-hidden="true" class="accordion-icon"></span>
</button>
<div class="accordion-content">
<div class="accordion-body">
<div class="parts-list" data-list="primary"></div>
</div>
</div>
</div>
<div class="accordion-item">
<button class="accordion-header" type="button">
<div class="parts-title" data-i18n="partsColorsHeading">الألوان المتاحة</div>
<span aria-hidden="true" class="accordion-icon"></span>
</button>
<div class="accordion-content">
<div class="accordion-body">
<div class="parts-list" data-list="secondary"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- FIXED BOTTOM BAR: total + add to cart -->
<div class="controller-bottom-bar">
<div class="nav-amount-block">
<div class="nav-amount-label" data-i18n="totalLabel">الإجمالي</div>
<div class="nav-amount-value" id="summaryAmount">د.ب 0.00</div>
</div>
<button class="add-to-cart-btn" data-i18n="addToCart" id="addToCartBtn">
        أضِف إلى السلة
      </button>
</div>
</div>
 Hover tooltip 
<div class="part-tooltip" id="partTooltip"></div>



`,hv=`


    const isMobile =
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.innerWidth < 700;

    const sfxClickEl = document.getElementById("sfxClick");
    const sfxClick2El = document.getElementById("sfxClick2");

    function playSfx(el) {
      if (!el) return;
      try {
        el.currentTime = 0;
        el.play();
      } catch { }
    }
    const playClick = () => playSfx(sfxClickEl);
    const playClick2 = () => playSfx(sfxClick2El);

    const ZOHO_ACCESS_TOKEN = "1000.fc8f8231004d2e91ceec275f975e3a72.fe46661c105146af3d1fac1f56c902a9";
    const ZOHO_ORG_ID = "892379608";
    const ZOHO_BASE =
      window.location.hostname === "localhost"
        ? "/zoho/inventory/v1"
        : "https://www.zohoapis.com/inventory/v1";
    const ZOHO_ITEMS_ENDPOINT = ZOHO_BASE + "/items";

    const dynamicColorsByPart = {};
    const dynamicOptionsByPart = {};
    const dynamicPricesByPart = {};
    const selectedPriceByPart = {};
    let availablePartsSet = new Set();

    function normalizeVariant(str) {
      return (str || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    }

    /* ---------- I18N ---------- */

    const i18n = {
      ar: {
        logo: "EZ GAMING",
        totalLabel: "الإجمالي",
        addToCart: "أضِف إلى السلة",
        front: "الأمام",
        back: "الخلف",
        selectPart: "اختر جزءًا",
        availableColors: "الألوان المتاحة",
        availableOptions: "خيارات القطعة",
        partsTitle: "الأجزاء",
        sectionFront: "الوجه الأمامي",
        sectionBack: "الوجه الخلفي",
        side_front: "أمام",
        side_back: "خلف",
        preview: "معاينة التغيرات",
        currencyPrefix: "د.ب ",
        pricePrefix: "+ ",
        alertNone: "لم يتم اختيار أي تخصيص بعد.",
        alertAdded: "تمت إضافة التخصيص إلى السلة.",
        /* Parts */
        part_shell: "هيكل المقدّمة",
        part_trimpiece: "القطعة الوسطى",
        part_psButton: "زر PS",
        part_share: "زر المشاركة",
        part_options: "زر الخيارات",
        part_faceButtons: "أزرار الأوجه",
        part_stickL: "عصا التحكّم اليسرى",
        part_stickR: "عصا التحكّم اليمنى",
        part_touchpad: "لوحة اللمس",
        part_bumpers: "الأزرار العلوية",
        part_backShellMain: "هيكل الخلف",
        part_backHandles: "مقابض الخلف",
        part_backTriggers: "أزرار الزناد الخلفية",
        /* Colors */
        color_orange: "برتقالي",
        color_yellow: "أصفر",
        color_lightBlue: "أزرق فاتح",
        color_steelGray: "رمادي معدني",
        color_blue: "أزرق",
        color_midnightBlue: "أزرق داكن",
        color_magenta: "أرجواني محمر",
        color_softWhite: "أبيض ناعم",
        color_hotPink_shell: "وردي فاقع",
        color_matteBlack: "أسود مطفي",
        color_black: "أسود",
        color_lightGray: "رمادي فاتح",
        color_red: "أحمر",
        color_darkBluePurple: "أزرق بنفسجي داكن",
        color_mintGreen: "أخضر نعناعي",
        color_royalPurple: "بنفسجي ملكي",
        color_hotPink: "وردي فاقع",
        color_skyBlue: "أزرق سماوي",
        color_pinkViolet: "وردي بنفسجي",
        color_indigoPurple: "نيلي بنفسجي",
        color_clear: "شفاف",
        color_transRed: "أحمر شفاف",
        color_transBlue: "أزرق شفاف",
        color_transGreen: "أخضر شفاف",
        color_transPurple: "بنفسجي شفاف",
        color_gunmetal: "رمادي معدني داكن",
        color_transBrown: "بني شفاف",
        color_frostedWhite: "أبيض ضبابي",
        option_standard: "Standard",
        option_halleffect: "Hall Effect",
        option_tmr: "TMR"
      },
      en: {
        logo: "EZ GAMING",
        totalLabel: "Total",
        addToCart: "ADD TO CART",
        front: "Front",
        back: "Back",
        selectPart: "Select a part",
        availableColors: "Available colors",
        partsTitle: "Parts",
        sectionFront: "Front",
        sectionBack: "Back",
        side_front: "Front",
        side_back: "Back",
        preview: "Preview",
        currencyPrefix: "BHD ",
        pricePrefix: "+ ",
        alertNone: "No custom options selected yet.",
        alertAdded: "Configuration added to cart.",
        /* Parts */
        part_shell: "Shell",
        part_trimpiece: "Trim Piece",
        part_psButton: "PS Button",
        part_share: "Share Button",
        part_options: "Options Button",
        part_faceButtons: "Face Buttons",
        part_stickL: "Left Stick",
        part_stickR: "Right Stick",
        part_touchpad: "Touchpad",
        part_bumpers: "Bumpers",
        part_backShellMain: "Back Shell",
        part_backHandles: "Back Handles",
        part_backTriggers: "Back Triggers",
        /* Colors */
        color_orange: "Orange",
        color_yellow: "Yellow",
        color_lightBlue: "Light Blue",
        color_steelGray: "Steel Gray",
        color_blue: "Blue",
        color_midnightBlue: "Midnight Blue",
        color_magenta: "Magenta",
        color_softWhite: "Soft White",
        color_hotPink_shell: "Hot Pink",
        color_matteBlack: "Matte Black",
        color_black: "Black",
        color_lightGray: "Light Gray",
        color_red: "Red",
        color_darkBluePurple: "Dark Blue-Purple",
        color_mintGreen: "Mint Green",
        color_royalPurple: "Royal Purple",
        color_hotPink: "Hot Pink",
        color_skyBlue: "Sky Blue",
        color_pinkViolet: "Pink-Violet",
        color_indigoPurple: "Indigo Purple",
        color_clear: "Clear Transparent",
        color_transRed: "Transparent Red",
        color_transBlue: "Transparent Blue",
        color_transGreen: "Transparent Green",
        color_transPurple: "Transparent Purple",
        color_gunmetal: "Gunmetal Gray",
        color_transBrown: "Transparent Brown",
        color_frostedWhite: "Frosted White",
        option_standard: "Standard",
        option_halleffect: "Hall Effect",
        option_tmr: "TMR"
      }
    };

    let currentLang = "ar";

    function t(key) {
      return (i18n[currentLang] && i18n[currentLang][key]) || key;
    }

    /* ---------- Controller / color configuration ---------- */

    const BASE_WIDTH = 1166;
    const BASE_HEIGHT = 768;

    const FRONT_PARTS = [
      { id: "shell", icon: "/assets/icons/shells.png", mask: "/assets/masks/leftShell.png", priority: 4, side: "front" },
      { id: "trimpiece", icon: "/assets/icons/trimpiece.png", mask: "/assets/masks/centerBody.png", priority: 1, side: "front" },
      { id: "stickL", icon: "/assets/icons/stickL.png", mask: "/assets/masks/stickL.png", priority: 3, side: "front" },
      { id: "stickR", icon: "/assets/icons/stickR.png", mask: "/assets/masks/stickR.png", priority: 3, side: "front" },
      { id: "faceButtons", icon: "/assets/icons/faceButtons.png", mask: "/assets/masks/faceButtons.png", priority: 4, side: "front" },
      { id: "touchpad", icon: "/assets/icons/touchpad.png", mask: "/assets/masks/touchpad.png", priority: 2, side: "front" },
      { id: "bumpers", icon: "/assets/icons/bumpers.png", mask: "/assets/masks/bumperL.png", priority: 2, side: "front" },
      { id: "psButton", icon: "/assets/icons/psButton.png", mask: "/assets/masks/psButton.png", priority: 1, side: "front" },
      { id: "share", icon: "/assets/icons/share.png", mask: "/assets/masks/share.png", priority: 4, side: "front" },
      { id: "options", icon: "/assets/icons/options.png", mask: "/assets/masks/options.png", priority: 4, side: "front" },
    ];

    const BACK_PARTS = [
      { id: "backShellMain", icon: "/assets/icons/backShellMain.png", mask: "/assets/masks/backShellMain.png", priority: 1, side: "back" },
      { id: "backTriggers", icon: "/assets/icons/backTriggers.png", mask: "/assets/masks/backTriggers.png", priority: 2, side: "back" }
    ];

    const ALL_PARTS = [...FRONT_PARTS, ...BACK_PARTS];

    const PART_KEYS = {
      shell: "part_shell",
      trimpiece: "part_trimpiece",
      psButton: "part_psButton",
      share: "part_share",
      options: "part_options",
      faceButtons: "part_faceButtons",
      stickL: "part_stickL",
      stickR: "part_stickR",
      touchpad: "part_touchpad",
      bumpers: "part_bumpers",
      backShellMain: "part_backShellMain",
      backHandles: "part_backHandles",
      backTriggers: "part_backTriggers"
    };

    const PART_SLUG_TO_ID = {};
    ALL_PARTS.forEach(p => {
      PART_SLUG_TO_ID[normalizeVariant(p.id)] = p.id;
    });

    function getPartLabel(partId) {
      const key = PART_KEYS[partId] || partId;
      return t(key);
    }

    const PRICES = {
      psButton: 4.0,
      share: 3.0,
      options: 3.0,
      faceButtons: 6.0,
      stickL: 5.0,
      stickR: 5.0,
      touchpad: 10.0,
      bumpers: 8.0,
      trimpiece: 12.0,
      shell: 15.0,
      backShellMain: 15.0,
      backHandles: 10.0,
      backTriggers: 8.0
    };

    const SHELL_COLORS = [
      { hex: "#FF7A21", key: "color_orange" },
      { hex: "#E6D63A", key: "color_yellow" },
      { hex: "#6ECFFF", key: "color_lightBlue" },
      { hex: "#8E8E8E", key: "color_steelGray" },
      { hex: "#0C4BFF", key: "color_blue" },
      { hex: "#001F63", key: "color_midnightBlue" },
      { hex: "#C2185B", key: "color_magenta" },
      { hex: "#F5F5F5", key: "color_softWhite" },
      { hex: "#D400A8", key: "color_hotPink_shell" },
      { hex: "#0A0A0A", key: "color_matteBlack" }
    ];

    const THUMB_OPTIONS = [
      { hex: "#6ECFFF", key: "option_tmr" },
      { hex: "#E6D63A", key: "option_halleffect" },
      { hex: "#FF7A21", key: "option_standard" }
    ];

    const ACCESSORY_COLORS = [
      { hex: "#0A0A0A", key: "color_black" },
      { hex: "#D8D8D8", key: "color_lightGray" },
      { hex: "#C41E2E", key: "color_red" },
      { hex: "#2B2C79", key: "color_darkBluePurple" },
      { hex: "#F2D400", key: "color_yellow" },
      { hex: "#E56A1E", key: "color_orange" },
      { hex: "#A6DA8C", key: "color_mintGreen" },
      { hex: "#4A23A8", key: "color_royalPurple" },
      { hex: "#E03875", key: "color_hotPink" },
      { hex: "#77CBF7", key: "color_skyBlue" },
      { hex: "#C75AC9", key: "color_pinkViolet" },
      { hex: "#5C2DAF", key: "color_indigoPurple" },
      { hex: "#EDEDED", key: "color_clear" },
      { hex: "#D43838", key: "color_transRed" },
      { hex: "#2448B5", key: "color_transBlue" },
      { hex: "#68D78B", key: "color_transGreen" },
      { hex: "#4E2B8C", key: "color_transPurple" },
      { hex: "#4A4A4A", key: "color_gunmetal" },
      { hex: "#8C3B2F", key: "color_transBrown" },
      { hex: "#E3E3E3", key: "color_frostedWhite" }
    ];

    const COLOR_LOOKUP = {};
    const OPTION_LOOKUP = {};

    function seedColorLookup() {
      const colorSources = [...SHELL_COLORS, ...ACCESSORY_COLORS];
      colorSources.forEach(({ hex, key }) => {
        const slugFromKey = normalizeVariant(key.replace(/^color_/, ""));
        if (slugFromKey) COLOR_LOOKUP[slugFromKey] = { hex, key };
        const labelEn = i18n.en[key];
        const slugFromLabel = normalizeVariant(labelEn);
        if (slugFromLabel) COLOR_LOOKUP[slugFromLabel] = { hex, key };
      });
    }

    function seedOptionLookup() {
      THUMB_OPTIONS.forEach(({ hex, key }) => {
        const slugFromKey = normalizeVariant(key.replace(/^option_/, ""));
        if (slugFromKey) OPTION_LOOKUP[slugFromKey] = { hex, key };
        const labelEn = i18n.en[key];
        const slugFromLabel = normalizeVariant(labelEn);
        if (slugFromLabel) OPTION_LOOKUP[slugFromLabel] = { hex, key };
      });
    }

    seedColorLookup();
    seedOptionLookup();

    const TRANSPARENT_HEXES = new Set([
      "#ededed",
      "#d43838",
      "#2448b5",
      "#68d78b",
      "#4e2b8c",
      "#8c3b2f",
      "#e3e3e3"
    ]);

    const SHELL_PART_IDS = new Set([
      "shell",
      "trimpiece",
      "backShellMain",
      "backHandles"
    ]);

    const THUMB_PART_IDS = new Set([
      "stickL",
      "stickR",
    ]);

    function getPaletteForPart(partId) {
      // Only use Zoho-provided colors; no fallback palette.
      const dynamicPalette = dynamicColorsByPart[partId];
      return Array.isArray(dynamicPalette) ? dynamicPalette : [];
    }

    function getOptionsForPart(partId) {
      // Only use Zoho-provided gamemode options; no fallback options.
      const dynamicOptions = dynamicOptionsByPart[partId];
      return Array.isArray(dynamicOptions) ? dynamicOptions : [];
    }

    function addVariantToMap(targetMap, partId, variant) {
      if (!targetMap[partId]) targetMap[partId] = [];
      const variantSlug = normalizeVariant(variant.key || "");
      const existing = targetMap[partId].find(v => normalizeVariant(v.key || "") === variantSlug);
      if (existing) {
        if (variant.price != null) existing.price = variant.price;
        if (variant.qty != null) existing.qty = variant.qty;
      } else {
        targetMap[partId].push(variant);
      }
    }

    function parseColorVariant(valueRaw) {
      const value = (valueRaw || "").trim();
      const normalized = normalizeVariant(value.replace(/^color_/, ""));
      // Hex color?
      const stripped = value.replace("#", "");
      if (/^[0-9a-f]{6}$/i.test(stripped)) {
        const hex = value.startsWith("#") ? value : "#" + value;
        return { hex, key: hex };
      }
      if (COLOR_LOOKUP[normalized]) return COLOR_LOOKUP[normalized];
      return null;
    }

    function parseOptionVariant(valueRaw) {
      const normalized = normalizeVariant(valueRaw);
      if (OPTION_LOOKUP[normalized]) return OPTION_LOOKUP[normalized];
      return null;
    }

    function recomputeAvailableParts() {
      const nextSet = new Set();
      ALL_PARTS.forEach(part => {
        const hasColors = (dynamicColorsByPart[part.id] || []).length > 0;
        const hasOptions = (dynamicOptionsByPart[part.id] || []).length > 0;
        const hasPrice = dynamicPricesByPart[part.id] != null;
        if (hasColors || hasOptions || hasPrice) nextSet.add(part.id);
      });
      availablePartsSet = nextSet;
    }

    function addPriceFallback(partId, price) {
      if (typeof price === "number" && !Number.isNaN(price) && price >= 0) {
        if (dynamicPricesByPart[partId] == null) dynamicPricesByPart[partId] = price;
      }
    }

    function getItemQty(item) {
      const candidates = [
        item.available_stock,
        item.available_quantity,
        item.availablequantity,
        item.stock_on_hand,
        item.quantity_available,
        item.quantityavailable
      ];
      for (const c of candidates) {
        const n = Number(c);
        if (!Number.isNaN(n)) return n;
      }
      return null;
    }

    function parseZohoItem(item) {
      const rawName = (item && (item.name || item.item_name)) || "";
      const match = /^ps5_([^_]+)_([^_]+)_(.+)$/i.exec(rawName.trim());
      if (!match) return;
      const partSlug = normalizeVariant(match[1]);
      const typeSlug = normalizeVariant(match[2]);
      const valueRaw = match[3];
      const partId = PART_SLUG_TO_ID[partSlug];
      if (!partId) return;
      const price = typeof item.rate === "number" ? item.rate : parseFloat(item.rate);
      const qty = getItemQty(item);

      if (typeSlug === "gamemode") {
        const opt = parseOptionVariant(valueRaw);
        if (!opt) return;
        addVariantToMap(dynamicOptionsByPart, partId, { ...opt, price, qty });
        addPriceFallback(partId, price);
        return;
      }

      if (typeSlug === "color") {
        const col = parseColorVariant(valueRaw);
        if (!col) return;
        addVariantToMap(dynamicColorsByPart, partId, { ...col, price, qty });
        addPriceFallback(partId, price);
        return;
      }
    }

    async function fetchZohoItems() {
      if (!ZOHO_ACCESS_TOKEN || !ZOHO_ORG_ID) {
        console.warn("[Zoho] Missing Zoho credentials, skipping inventory fetch.");
        return [];
      }

      const perPage = 200;
      const maxPages = 10; // safety cap to avoid runaway loops
      const allItems = [];

      for (let page = 1; page <= maxPages; page++) {
        const url =
          ZOHO_ITEMS_ENDPOINT +
          "?page=" + page +
          "&per_page=" + perPage +
          "&organization_id=" + encodeURIComponent(ZOHO_ORG_ID);
        console.log("[Zoho Debug] Fetching items page", page, "from:", url);
        try {
          const res = await fetch(url, {
            headers: {
              Authorization: "Zoho-oauthtoken " + ZOHO_ACCESS_TOKEN
            }
          });
          if (!res.ok) {
            let body = "";
            try { body = await res.text(); } catch { /* ignore */ }
            console.error("[Zoho Debug] Response body:", body);
            throw new Error("HTTP " + res.status + (body ? (": " + body) : ""));
          }
          const data = await res.json();
          const items = (data && Array.isArray(data.items)) ? data.items : [];
          allItems.push(...items);
          console.log("[Zoho Debug] Page", page, "items:", items.length, "Total so far:", allItems.length);
          if (items.length < perPage) break;
        } catch (err) {
          console.error("[Zoho] Failed to fetch items", err);
          break;
        }
      }
      return allItems;
    }

    function logZohoSummary(items) {
      const sample = items.map(it => ({
        name: it.name || it.item_name,
        id: it.item_id || it.itemid || "n/a"
      }));
      console.log("[Zoho Debug] Items fetched:", items.length, "Names/ids:", sample);
    }

    async function bootstrapZohoInventory() {
      const items = await fetchZohoItems();
      if (!items.length) return;
      items.forEach(parseZohoItem);
      Object.keys(configState).forEach(pid => {
        const val = configState[pid];
        if (!val) return;
        const hasOptionMatch = (dynamicOptionsByPart[pid] || []).some(entry => (entry.hex || "").toLowerCase() === (val || "").toLowerCase());
        setPartPrice(pid, val, hasOptionMatch);
      });
      recomputeAvailableParts();
      logZohoSummary(items);
      buildPartsList();
      if (selectedPartId) {
        const selPartObj = ALL_PARTS.find(p => p.id === selectedPartId);
        if (!selPartObj || !isPartActive(selPartObj)) {
          clearSelection();
          resetColorPanel();
          resetOptionsPanel();
        }
      }
      if (selectedPartId) {
        openColorPanelForPart(selectedPartId);
      }
      updateSummary();
    }

    const controllerWrapper = document.getElementById("controllerWrapper");
    const controllerArea = document.getElementById("controllerArea");
    const faceFrontEl = document.getElementById("controllerFaceFront");
    const faceBackEl = document.getElementById("controllerFaceBack");

    const sideToggle = document.getElementById("sideToggle");
    const sideButtons = sideToggle.querySelectorAll(".side-btn");
    //const previewBtn = document.getElementById("previewBtn");

    const summaryAmountEl = document.getElementById("summaryAmount");
    const addToCartBtn = document.getElementById("addToCartBtn");

    const colorPanelTitle = document.getElementById("colorPanelTitle");
    const colorPanelSub = document.getElementById("colorPanelSub");
    const optionsPanelSub = document.getElementById("optionsPanelSub");
    const colorPanelGrid = document.getElementById("colorPanelGrid");       // colors grid
    const optionsPanelGrid = document.getElementById("optionsPanelGrid");   // options grid
    const colorPanelHeaderTop = document.getElementById("colorPanelHeaderTop");
    const colorPanelHeaderBottom = document.getElementById("colorPanelHeaderBottom");
    const colorEmptyState = document.getElementById("colorEmptyState");

    const partsLists = Array.from(document.querySelectorAll(".parts-list"));
    const primaryList = document.querySelector('.parts-list[data-list="primary"]');
    const secondaryList = document.querySelector('.parts-list[data-list="secondary"]');
    const accordionItems = Array.from(document.querySelectorAll(".accordion-item"));
    const partTooltip = document.getElementById("partTooltip");

    const langToggle = document.getElementById("langToggle");
    const langButtons = langToggle.querySelectorAll(".lang-btn");

    const layers = {};
    const maskDataById = {};
    let masksReady = false;
    let currentSide = "front";
    let selectedPartId = null;
    let selectionPaletteMode = null; // "options" or "colors"
    let hoverPartId = null;
    let tooltipVisible = false;

    const partsRowsById = {};
    const configState = {};
    ALL_PARTS.forEach(p => { configState[p.id] = null; });

    /* ----- Layers & masks ----- */

    function buildPartLayers() {
      ALL_PARTS.forEach(part => {
        const layer = document.createElement("div");
        layer.className = "part-layer";
        layer.dataset.partId = part.id;
        layer.style.setProperty("--mask-url", "url('" + part.mask + "')");
        if (part.side === "front") faceFrontEl.appendChild(layer);
        else faceBackEl.appendChild(layer);
        layers[part.id] = layer;
      });
    }
    buildPartLayers();

    function loadMask(part) {
      return new Promise(resolve => {
        const img = new Image();
        img.src = part.mask;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          maskDataById[part.id] = {
            width: canvas.width,
            height: canvas.height,
            data: imageData.data
          };
          resolve();
        };
        img.onerror = () => resolve();
      });
    }

    (async function () {
      for (const part of ALL_PARTS) await loadMask(part);
      masksReady = true;
    })();

    /* ----- Money & summary ----- */

    function formatMoney(v) {
      return i18n[currentLang].currencyPrefix + v.toFixed(2);
    }

    function getBasePrice(partId) {
      const chosen = selectedPriceByPart[partId];
      if (typeof chosen === "number" && !Number.isNaN(chosen)) return chosen;
      const dynamic = dynamicPricesByPart[partId];
      if (typeof dynamic === "number" && !Number.isNaN(dynamic)) return dynamic;
      return PRICES[partId] || 0;
    }

    function computeTotal() {
      let tSum = 0;
      for (const p of ALL_PARTS) {
        if (!configState[p.id]) continue;
        tSum += getBasePrice(p.id);
      }
      return tSum;
    }

    function updateSummary() {
      summaryAmountEl.textContent = formatMoney(computeTotal());
    }

    /* ----- Color application ----- */

    function setPartPrice(partId, variantHex, isOption) {
      const palette = isOption ? dynamicOptionsByPart[partId] : dynamicColorsByPart[partId];
      const hexLower = (variantHex || "").toLowerCase();
      const match = palette ? palette.find(entry => (entry.hex || "").toLowerCase() === hexLower) : null;
      if (match && typeof match.price === "number" && !Number.isNaN(match.price)) {
        selectedPriceByPart[partId] = match.price;
      } else if (typeof dynamicPricesByPart[partId] === "number" && !Number.isNaN(dynamicPricesByPart[partId])) {
        selectedPriceByPart[partId] = dynamicPricesByPart[partId];
      } else {
        selectedPriceByPart[partId] = PRICES[partId] || 0;
      }
    }

    function formatQtyDisplay(qty) {
      if (typeof qty !== "number" || Number.isNaN(qty)) return "";
      if (qty <= 0) return currentLang === "ar" ? "(نفدت الكمية)" : "(Out of Stock)";
      if (qty < 5) {
        if (qty === 1) return currentLang === "ar" ? "(المتبقي قطعة واحدة فقط)" : "(1 piece left)";
        return currentLang === "ar" ? "(المتبقي " + qty + " قطع)" : "(" + qty + " pieces left)";
      }
      return "";
    }

    function applyColor(partId, colorHex) {
      configState[partId] = colorHex;
      setPartPrice(partId, colorHex, false);
      const layer = layers[partId];
      if (!layer) return;
      layer.style.setProperty("--tint", colorHex);
      if (TRANSPARENT_HEXES.has(colorHex.toLowerCase())) {
        layer.style.setProperty("--tint-opacity", "0.35");
      } else {
        layer.style.setProperty("--tint-opacity", "1");
      }
      updateSummary();
    }

    function applyOptions(partId, colorHex) {
      configState[partId] = colorHex;
      setPartPrice(partId, colorHex, true);
      const layer = layers[partId];
      if (!layer) return;
      layer.style.setProperty("--tint", colorHex);
      if (TRANSPARENT_HEXES.has(colorHex.toLowerCase())) {
        layer.style.setProperty("--tint-opacity", "0.35");
      } else {
        layer.style.setProperty("--tint-opacity", "1");
      }
      updateSummary();
    }

    function clearSelection() {
      selectedPartId = null;
      selectionPaletteMode = null;
      controllerArea.classList.remove("has-selection");
      controllerArea.style.removeProperty("--selected-mask-url");

      Object.values(layers).forEach(layer => {
        if (!layer) return;
        layer.classList.remove("selected");
      });

      Object.values(partsRowsById).forEach(rows => {
        if (!rows) return;
        rows.forEach(row => row.classList.remove("active"));
      });
    }

    function resetColorPanel() {
      colorPanelTitle.textContent = t("selectPart");
      colorPanelSub.textContent = "";
      optionsPanelSub.textContent = "";

      colorPanelGrid.innerHTML = "";
      optionsPanelGrid.innerHTML = "";

      // hide headers + grids
      colorPanelHeaderTop.style.display = "none";
      colorPanelHeaderBottom.style.display = "none";
      colorPanelGrid.style.display = "none";
      optionsPanelGrid.style.display = "none";

      // show empty placeholder
      colorEmptyState.style.display = "flex";
    }

    function resetOptionsPanel() {
      optionsPanelSub.textContent = "";
      optionsPanelGrid.innerHTML = "";
    }

    /* ----- Palette panel ----- */

    function openColorPanelForPart(partId) {
      const label = getPartLabel(partId);

      // hide everything by default
      colorEmptyState.style.display = "none";
      colorPanelHeaderTop.style.display = "none";
      colorPanelHeaderBottom.style.display = "none";
      colorPanelGrid.style.display = "none";
      optionsPanelGrid.style.display = "none";

      colorPanelTitle.textContent = label;
      colorPanelSub.textContent = "";
      optionsPanelSub.textContent = "";

      colorPanelGrid.innerHTML = "";
      optionsPanelGrid.innerHTML = "";

      const palette = getPaletteForPart(partId);
      const optionspalette = getOptionsForPart(partId);

      const hasOptions = optionspalette && optionspalette.length;
      const hasColors = palette && palette.length;

      // If selectionPaletteMode is set, honor it; otherwise default to colors when available, else options.
      const showOptions = selectionPaletteMode === "options" ? true : (selectionPaletteMode === "colors" ? false : (!hasColors && hasOptions));
      const showColors = selectionPaletteMode === "colors" ? true : (selectionPaletteMode === "options" ? false : hasColors);

      if (showColors && hasColors) {
        colorPanelHeaderTop.style.display = "block";
        colorPanelHeaderBottom.style.display = "block";
        colorPanelGrid.style.display = "grid";
        colorPanelSub.textContent = t("availableColors");

        palette.forEach(({ hex, key, qty, price }) => {
          const cell = document.createElement("div");
          cell.className = "cd-cell";

          const sw = document.createElement("button");
          sw.className = "cd-swatch";
          sw.style.backgroundColor = hex;
          const numericQty = typeof qty === "number" ? qty : null;
          const isOut = numericQty !== null && numericQty <= 0;
          if (isOut) {
            sw.setAttribute("disabled", "disabled");
            sw.classList.add("out-of-stock");
            sw.style.filter = "grayscale(1)";
            sw.style.boxShadow = "none";
          }
          sw.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!selectedPartId || isOut) return;
            applyColor(selectedPartId, hex);
            playClick2();
          });

          const lbl = document.createElement("div");
          lbl.className = "cd-color-name";
          lbl.style.textAlign = "center";
          const displayName = key && t(key) ? t(key) : hex;
          const priceVal = typeof price === "number" ? i18n[currentLang].currencyPrefix + price.toFixed(2) : "";
          const qtyDisplay = formatQtyDisplay(numericQty);
          const lines = [displayName];
          if (priceVal) lines.push(priceVal);
          if (qtyDisplay) lines.push(qtyDisplay);
          lbl.innerHTML = lines.join("<br/>");

          cell.appendChild(sw);
          cell.appendChild(lbl);
          colorPanelGrid.appendChild(cell);
        });
      } else if (showOptions && hasOptions) {
        optionsPanelSub.style.display = "block";
        optionsPanelGrid.style.display = "grid";
        colorPanelHeaderTop.style.display = "block";
        optionsPanelSub.textContent = t("availableOptions");

        optionspalette.forEach(({ hex, key, qty, price }) => {
          const cell2 = document.createElement("div");
          cell2.className = "cd-cell-op";

          const sw2 = document.createElement("button");
          sw2.className = "cd-swatch-op";
          sw2.style.backgroundColor = hex;
          const numericQty = typeof qty === "number" ? qty : null;
          const isOut = numericQty !== null && numericQty <= 0;
          if (isOut) {
            sw2.setAttribute("disabled", "disabled");
            sw2.classList.add("out-of-stock");
            sw2.style.filter = "grayscale(1)";
            sw2.style.boxShadow = "none";
          }
          sw2.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!selectedPartId || isOut) return;
            applyOptions(selectedPartId, hex);
          });

          const lbl = document.createElement("div");
          lbl.className = "cd-color-name";
          lbl.style.textAlign = "center";
          const priceVal = typeof price === "number" ? i18n[currentLang].currencyPrefix + price.toFixed(2) : "";
          const qtyDisplay = formatQtyDisplay(numericQty);
          const lines = [t(key)];
          if (priceVal) lines.push(priceVal);
          if (qtyDisplay) lines.push(qtyDisplay);
          lbl.innerHTML = lines.join("<br/>");

          cell2.appendChild(sw2);
          cell2.appendChild(lbl);
          optionsPanelGrid.appendChild(cell2);
        });
      } else {
        // show empty placeholder
        colorEmptyState.style.display = "flex";
      }
    }

    /* ----- Side toggle ----- */

    function setSide(side) {
      if (side === currentSide) return;
      currentSide = side;

      if (currentSide === "back") controllerWrapper.classList.add("is-back");
      else controllerWrapper.classList.remove("is-back");

      sideButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.side === currentSide);
      });

      clearSelection();
      resetColorPanel();
      resetOptionsPanel();
    }

    sideButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setSide(btn.dataset.side);
      });
    });

    /* ----- Preview button ----- */

    // previewBtn.addEventListener("click", () => {
    //   clearSelection();
    //   resetColorPanel();
    //   playClick2();
    // });

    /* ----- Parts list ----- */

    function createPartRow(part, listType) {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "parts-item";
      row.dataset.partId = part.id;
      row.dataset.side = part.side;
      row.dataset.listType = listType || "";

      const thumb = document.createElement("div");
      thumb.className = "parts-thumb";

      const img = document.createElement("img");
      img.src = part.icon || "/assets/icons/shells.png";
      img.alt = getPartLabel(part.id);
      thumb.appendChild(img);

      const nameEl = document.createElement("div");
      nameEl.className = "parts-name";
      nameEl.textContent = getPartLabel(part.id);

      row.appendChild(thumb);
      row.appendChild(nameEl);

      row.addEventListener("click", () => {
        const targetSide = part.side;
        if (currentSide !== targetSide) setSide(targetSide);

        clearSelection();

        selectedPartId = part.id;
        selectionPaletteMode = listType || null;
        controllerArea.classList.add("has-selection");
        controllerArea.style.setProperty("--selected-mask-url", "url('" + part.mask + "')");

        const layer = layers[part.id];
        if (layer) layer.classList.add("selected");

        Object.values(partsRowsById).forEach(rArr => {
          if (!rArr) return;
          rArr.forEach(r => r.classList.remove("active"));
        });
        (partsRowsById[part.id] || []).forEach(r => r.classList.add("active"));

        playClick();
        openColorPanelForPart(part.id);
      });

      if (!partsRowsById[part.id]) partsRowsById[part.id] = [];
      partsRowsById[part.id].push(row);
      return row;
    }

    function isPartActive(part) {
      return availablePartsSet.has(part.id);
    }

    function buildPartsList() {
      partsLists.forEach(list => list.innerHTML = "");
      Object.keys(partsRowsById).forEach(k => delete partsRowsById[k]);

      const optionParts = [...FRONT_PARTS, ...BACK_PARTS].filter(p => {
        const hasGamemode = (dynamicOptionsByPart[p.id] || []).length > 0;
        return hasGamemode && isPartActive(p);
      });

      const colorOnlyParts = [...FRONT_PARTS, ...BACK_PARTS].filter(p => {
        const hasColors = (dynamicColorsByPart[p.id] || []).length > 0;
        return hasColors && isPartActive(p);
      });

      if (primaryList) {
        optionParts.forEach(p => primaryList.appendChild(createPartRow(p, "options")));
      }
      if (secondaryList) {
        colorOnlyParts.forEach(p => secondaryList.appendChild(createPartRow(p, "colors")));
      }
      refreshAccordionHeights();
    }

    /* ----- Hit testing ----- */

    function getPartsForSide(side) {
      const base = side === "back" ? BACK_PARTS : FRONT_PARTS;
      return base.filter(isPartActive);
    }

    function hitTestPart(designX, designY, side) {
      const parts = getPartsForSide(side);
      const sorted = [...parts].sort((a, b) => b.priority - a.priority);
      for (const part of sorted) {
        const mask = maskDataById[part.id];
        if (!mask) continue;
        const x = Math.floor(designX / BASE_WIDTH * mask.width);
        const y = Math.floor(designY / BASE_HEIGHT * mask.height);
        if (x < 0 || y < 0 || x >= mask.width || y >= mask.height) continue;
        const idx = (y * mask.width + x) * 4 + 3;
        const alpha = mask.data[idx];
        if (alpha > 20) return part.id;
      }
      return null;
    }

    /* ----- Controller click ----- */

    controllerArea.addEventListener("click", (e) => {
      if (!masksReady) return;
      const rect = controllerArea.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      if (relX < 0 || relX > 1 || relY < 0 || relY > 1) return;
      const designX = relX * BASE_WIDTH;
      const designY = relY * BASE_HEIGHT;
      const partId = hitTestPart(designX, designY, currentSide);
      if (!partId) return;
      const partObj = ALL_PARTS.find(p => p.id === partId);
      if (partObj && !isPartActive(partObj)) return;

      clearSelection();

      selectedPartId = partId;
      selectionPaletteMode = null;
      controllerArea.classList.add("has-selection");

      const part = ALL_PARTS.find(p => p.id === partId);
      if (part) {
        controllerArea.style.setProperty("--selected-mask-url", "url('" + part.mask + "')");
      }

      const layer = layers[partId];
      if (layer) layer.classList.add("selected");

      const rows = partsRowsById[partId] || [];
      if (rows.length) {
        Object.values(partsRowsById).forEach(rArr => {
          if (!rArr) return;
          rArr.forEach(r => r.classList.remove("active"));
        });
        rows.forEach(r => r.classList.add("active"));
      }

      playClick();
      if (!selectionPaletteMode) {
        const hasOpts = (dynamicOptionsByPart[partId] || []).length > 0;
        selectionPaletteMode = hasOpts ? "options" : "colors";
      }
      openColorPanelForPart(partId);
    });

    /* ----- Hover tooltip (desktop only) ----- */

    controllerArea.addEventListener("mousemove", (e) => {
      if (!masksReady || isMobile) return;

      const rect = controllerArea.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;

      if (relX < 0 || relX > 1 || relY < 0 || relY > 1) {
        if (tooltipVisible) {
          partTooltip.classList.remove("visible");
          tooltipVisible = false;
          hoverPartId = null;
        }
        return;
      }

      const designX = relX * BASE_WIDTH;
      const designY = relY * BASE_HEIGHT;
      const partId = hitTestPart(designX, designY, currentSide);

      if (!partId) {
        if (tooltipVisible) {
          partTooltip.classList.remove("visible");
          tooltipVisible = false;
          hoverPartId = null;
        }
        return;
      }

      const label = getPartLabel(partId);
      partTooltip.textContent = label;
      partTooltip.style.left = e.clientX + "px";
      partTooltip.style.top = e.clientY + "px";

      if (!tooltipVisible || hoverPartId !== partId) {
        hoverPartId = partId;
        partTooltip.classList.add("visible");
        tooltipVisible = true;
      }
    });

    controllerArea.addEventListener("mouseleave", () => {
      if (tooltipVisible) {
        partTooltip.classList.remove("visible");
        tooltipVisible = false;
        hoverPartId = null;
      }
    });

    /* ----- Click outside → clear selection + color drawer ----- */

    document.addEventListener("click", (e) => {
      const clickInsideController = controllerArea.contains(e.target);

      const clickInsideColors =
        colorPanelGrid.contains(e.target) ||
        optionsPanelGrid.contains(e.target) ||
        colorPanelHeaderTop.contains(e.target) ||
        colorPanelHeaderBottom.contains(e.target) ||
        colorEmptyState.contains(e.target);

      const clickInsideParts = partsLists.some(list => list.contains(e.target));
      const clickInsideSideToggle = sideToggle.contains(e.target);
      const clickInsideNav = document.querySelector(".top-nav").contains(e.target);

      if (
        !clickInsideController &&
        !clickInsideColors &&
        !clickInsideParts &&
        !clickInsideSideToggle &&
        !clickInsideNav
      ) {
        clearSelection();
        resetColorPanel();
        resetOptionsPanel();
        // const colorsColumn = document.getElementById("colors-column");
        // colorsColumn.style.display = "none";
      }
    });

    /* ----- Add to cart button (with localStorage + redirect to cart) ----- */

    const CART_KEY = "ezCart";

    function buildConfigSnapshot() {
      const snapshot = {};
      for (const partId in configState) {
        if (Object.prototype.hasOwnProperty.call(configState, partId)) {
          snapshot[partId] = configState[partId];
        }
      }
      return snapshot;
    }

    function loadCart() {
      try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    function saveCart(items) {
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }

    addToCartBtn.addEventListener("click", () => {
      const total = computeTotal();
      if (total <= 0) {
        alert(t("alertNone"));
        return;
      }

      const cartItems = loadCart();
      const snapshot = buildConfigSnapshot();

      const cartItem = {
        id: Date.now(),
        name: currentLang === "ar" ? "متحكم PS5 مخصّص" : "Custom PS5 Controller",
        unitPrice: total,
        quantity: 1,
        config: snapshot
      };

      cartItems.push(cartItem);
      saveCart(cartItems);

      window.location.href = "/cart";
    });

    /* ----- Language toggle ----- */

    langToggle.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-btn");
      if (!btn) return;
      const lang = btn.dataset.lang;
      if (!lang || lang === currentLang) return;
      currentLang = lang;
      langButtons.forEach(b => b.classList.toggle("active", b.dataset.lang === currentLang));
      applyLanguage();
    });

    /* ----- Apply language to UI ----- */

    function applyLanguage() {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

      if (currentLang === "ar") {
        document.body.style.fontFamily = "'Cairo', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      } else {
        document.body.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      }

      const logoEl = document.querySelector("[data-i18n='logo']");
      if (logoEl) logoEl.textContent = t("logo");

      const totalLabelEl = document.querySelector("[data-i18n='totalLabel']");
      if (totalLabelEl) totalLabelEl.textContent = t("totalLabel");

      const addToCartTextEl = document.querySelector("[data-i18n='addToCart']");
      if (addToCartTextEl) addToCartTextEl.textContent = t("addToCart");

      document.querySelectorAll("[data-i18n='partsOptionsHeading']").forEach(el => {
        el.textContent = t("availableOptions");
      });
      document.querySelectorAll("[data-i18n='partsColorsHeading']").forEach(el => {
        el.textContent = t("availableColors");
      });

      // const previewBtnEl = document.getElementById("previewBtn");
      // if (previewBtnEl) previewBtnEl.textContent = t("preview");

      sideButtons.forEach(btn => {
        if (btn.dataset.side === "front") btn.textContent = t("front");
        else btn.textContent = t("back");
      });

      buildPartsList();

      if (selectedPartId) {
        controllerArea.classList.add("has-selection");
        const part = ALL_PARTS.find(p => p.id === selectedPartId);
        if (part) {
          controllerArea.style.setProperty("--selected-mask-url", 'url(' + part.mask + ')');
        }

        const rows = partsRowsById[selectedPartId] || [];
        rows.forEach(row => row.classList.add("active"));
        const layer = layers[selectedPartId];
        if (layer) layer.classList.add("selected");
        openColorPanelForPart(selectedPartId);
      } else {
        controllerArea.classList.remove("has-selection");
        controllerArea.style.removeProperty("--selected-mask-url");
        resetColorPanel();
        resetOptionsPanel();

      }

      updateSummary();
    }

    function refreshAccordionHeights() {
      accordionItems.forEach(item => {
        const content = item.querySelector(".accordion-content");
        if (!content) return;
        if (item.classList.contains("open")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
        }
      });
    }

    accordionItems.forEach(item => {
      const header = item.querySelector(".accordion-header");
      const content = item.querySelector(".accordion-content");
      if (!header || !content) return;
      header.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        item.classList.toggle("open", !isOpen);
        refreshAccordionHeights();
      });
    });

    window.addEventListener("resize", refreshAccordionHeights);

    // Initial language application
    applyLanguage();
    bootstrapZohoInventory();
    refreshAccordionHeights();
  

`;function yv(){return T.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=hv,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),O.jsx("div",{className:"configurator-page",children:O.jsx("div",{dangerouslySetInnerHTML:{__html:mv}})})}const vv=`


<canvas id="bgCanvas"></canvas>
 TOP NAV 
<div class="top-nav">
<div class="nav-logo">
<a class="nav-left" href="index.html">
<div class="nav-logo-mark"></div>
<div class="nav-page-title" data-i18n="cartTitle">سلة المشتريات</div>
</a>
</div>
<div class="nav-summary">
<div class="lang-toggle" id="langToggle">
<button class="lang-btn" data-lang="ar">ع</button>
<button class="lang-btn" data-lang="en">EN</button>
</div>
<div class="nav-amount-block">
<div class="nav-amount-label" data-i18n="totalLabel">الإجمالي</div>
<div class="nav-amount-value" id="navTotal">د.ب 0.00</div>
</div>
<button class="checkout-nav-btn" data-i18n="checkoutCta" id="navCheckoutBtn">إتمام الشراء</button>
</div>
</div>
 PAGE CONTENT 
<div class="page-content">
<div class="cart-layout">
<!-- LEFT: CART ITEMS -->
<div class="cart-main-card">
<div class="card-title" data-i18n="cartTitle">سلة المشتريات</div>
<div class="cart-empty" data-i18n="cartEmpty" id="cartEmpty">
          السلة فارغة حاليًا. يمكنك تخصيص متحكم جديد من صفحة التخصيص.
        </div>
<div class="cart-items-list" id="cartItems"></div>
</div>
<!-- RIGHT: SUMMARY -->
<div class="cart-summary-card">
<div class="card-title" data-i18n="summaryTitle">الملخص</div>
<div class="summary-row">
<div data-i18n="itemsCountLabel">عدد القطع</div>
<div id="summaryItemsCount">0</div>
</div>
<div class="summary-row">
<div data-i18n="subtotalLabel">الإجمالي الفرعي</div>
<div id="summarySubtotal">د.ب 0.00</div>
</div>
<hr class="summary-hr"/>
<div class="summary-row">
<div data-i18n="shippingLabel">الشحن</div>
<div><small data-i18n="shippingNote">سيتم تحديده لاحقًا</small></div>
</div>
<div class="summary-row total">
<div data-i18n="totalLabelBold">الإجمالي</div>
<div id="summaryTotal">د.ب 0.00</div>
</div>
<button class="summary-checkout-btn" data-i18n="checkoutCta" id="checkoutBtn">إتمام الشراء</button>
</div>
</div>
</div>



`,gv=`


    const CART_KEY = "ezCart";

    // ---------- I18N ----------
    const i18n = {
      ar: {
        cartTitle: "سلة المشتريات",
        summaryTitle: "الملخص",
        cartEmpty: "السلة فارغة حاليًا. يمكنك تخصيص متحكم جديد من صفحة التخصيص.",
        itemsCountLabel: "عدد القطع",
        subtotalLabel: "الإجمالي الفرعي",
        shippingLabel: "الشحن",
        shippingNote: "سيتم تحديده لاحقًا",
        totalLabel: "الإجمالي",
        totalLabelBold: "الإجمالي",
        checkoutCta: "إتمام الشراء",
        itemRemove: "إزالة",
        itemDetailsHeading: "تفاصيل التخصيص:",
        itemLineTotalLabel: "المجموع لهذا العنصر",
        alertEmptyForCheckout: "السلة فارغة، يرجى إضافة متحكم واحد على الأقل.",
        currencyPrefix: "د.ب ",
        productName: "متحكم PS5 مخصّص",
        parts: {
          shell: "هيكل المقدّمة",
          trimpiece: "القطعة الوسطى",
          psButton: "زر PS",
          share: "زر المشاركة",
          options: "زر الخيارات",
          faceButtons: "أزرار الأوجه",
          stickL: "عصا التحكم اليسرى",
          stickR: "عصا التحكم اليمنى",
          touchpad: "لوحة اللمس",
          bumpers: "الأزرار العلوية",
          backShellMain: "هيكل الخلف",
          backHandles: "مقابض الخلف",
          backTriggers: "أزرار الزناد الخلفية"
        }
      },
      en: {
        cartTitle: "Shopping Cart",
        summaryTitle: "Summary",
        cartEmpty: "Your cart is currently empty. You can create a new custom controller from the configurator page.",
        itemsCountLabel: "Items",
        subtotalLabel: "Subtotal",
        shippingLabel: "Shipping",
        shippingNote: "To be calculated later",
        totalLabel: "Total",
        totalLabelBold: "Total",
        checkoutCta: "Checkout",
        itemRemove: "Remove",
        itemDetailsHeading: "Customization details:",
        itemLineTotalLabel: "Line total",
        alertEmptyForCheckout: "Your cart is empty. Please add at least one controller.",
        currencyPrefix: "BHD ",
        productName: "Custom PS5 Controller",
        parts: {
          shell: "Front shell",
          trimpiece: "Center trim",
          psButton: "PS button",
          share: "Share button",
          options: "Options button",
          faceButtons: "Face buttons",
          stickL: "Left stick",
          stickR: "Right stick",
          touchpad: "Touchpad",
          bumpers: "Bumpers",
          backShellMain: "Back shell",
          backHandles: "Back handles",
          backTriggers: "Back triggers"
        }
      }
    };

    let currentLang = localStorage.getItem("ez_lang") || "ar";

    function t(key) {
      return (i18n[currentLang] && i18n[currentLang][key]) || key;
    }

    function getPartLabel(partId) {
      const dict = i18n[currentLang].parts || {};
      return dict[partId] || partId;
    }

    function applyLanguage() {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

      document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === currentLang);
      });

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = t(key);
      });

      renderCart();
    }

    document.getElementById("langToggle").addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-btn");
      if (!btn) return;
      const lang = btn.dataset.lang;
      if (!lang || lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem("ez_lang", currentLang);
      applyLanguage();
    });

    function formatMoney(value) {
      const prefix = i18n[currentLang].currencyPrefix || "";
      return prefix + value.toFixed(2);
    }

    // ---------- CART CORE ----------

    function loadCart() {
      try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    function saveCart(items) {
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
      } catch { }
    }

    const TRANSPARENT_HEXES = new Set([
      "#ededed",
      "#d43838",
      "#2448b5",
      "#68d78b",
      "#4e2b8c",
      "#8c3b2f",
      "#e3e3e3"
    ]);

    // masks as in configurator (front view only – for thumbnail)
    const THUMB_PARTS = [
      { id: "shell", mask: "/assets/masks/leftShell.png" },
      { id: "trimpiece", mask: "/assets/masks/centerBody.png" },
      { id: "stickL", mask: "/assets/masks/stickL.png" },
      { id: "stickR", mask: "/assets/masks/stickR.png" },
      { id: "faceButtons", mask: "/assets/masks/faceButtons.png" },
      { id: "touchpad", mask: "/assets/masks/touchpad.png" },
      { id: "bumpers", mask: "/assets/masks/bumperL.png" },
      { id: "psButton", mask: "/assets/masks/psButton.png" },
      { id: "share", mask: "/assets/masks/share.png" },
      { id: "options", mask: "/assets/masks/options.png" }
    ];

    // order of parts to display in the details list
    const ORDERED_PART_IDS = [
      "shell",
      "trimpiece",
      "faceButtons",
      "stickL",
      "stickR",
      "touchpad",
      "share",
      "options",
      "psButton",
      "bumpers",
      "backShellMain",
      "backHandles",
      "backTriggers"
    ];

    const cartItemsContainer = document.getElementById("cartItems");
    const cartEmptyEl = document.getElementById("cartEmpty");
    const navTotalEl = document.getElementById("navTotal");
    const summaryItemsCountEl = document.getElementById("summaryItemsCount");
    const summarySubtotalEl = document.getElementById("summarySubtotal");
    const summaryTotalEl = document.getElementById("summaryTotal");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const navCheckoutBtn = document.getElementById("navCheckoutBtn");

    let cartItems = loadCart();

    function computeCartTotals() {
      let total = 0;
      let count = 0;
      for (const item of cartItems) {
        count += item.quantity;
        total += item.unitPrice * item.quantity;
      }
      return { total, count };
    }

    // build thumbnail of controller with same colors as configurator
    function buildThumb(container, config) {
      container.innerHTML = "";
      const tc = document.createElement("div");
      tc.className = "thumb-controller";

      const base = document.createElement("div");
      base.className = "thumb-base";
      tc.appendChild(base);

      THUMB_PARTS.forEach(part => {
        const value = (config || {})[part.id];
        if (!value) return;

        const hex = typeof value === "string" ? value : value.hex;
        if (!hex) return;

        const layer = document.createElement("div");
        layer.className = "thumb-layer";
        layer.style.setProperty("--mask-url", "url('" + part.mask + "')");
        layer.style.setProperty("--tint", hex);

        if (TRANSPARENT_HEXES.has(hex.toLowerCase())) {
          layer.style.setProperty("--tint-opacity", "0.35");
        } else {
          layer.style.setProperty("--tint-opacity", "1");
        }
        tc.appendChild(layer);
      });

      container.appendChild(tc);
    }

    function renderCart() {
      cartItemsContainer.innerHTML = "";

      if (!cartItems.length) {
        cartEmptyEl.style.display = "block";
        cartEmptyEl.textContent = t("cartEmpty");
      } else {
        cartEmptyEl.style.display = "none";
      }

      cartItems.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "cart-item";
        card.dataset.index = index;

        const header = document.createElement("div");
        header.className = "cart-item-header";

        const nameEl = document.createElement("div");
        nameEl.className = "cart-item-name";
        nameEl.textContent = item.name || t("productName");

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "cart-item-remove";
        removeBtn.dataset.action = "remove";
        removeBtn.textContent = t("itemRemove");

        header.appendChild(nameEl);
        header.appendChild(removeBtn);

        const previewCol = document.createElement("div");
        previewCol.className = "cart-controller-preview";
        const thumbContainer = document.createElement("div");
        buildThumb(thumbContainer, item.config || {});
        previewCol.appendChild(thumbContainer);

        const detailsCol = document.createElement("div");
        detailsCol.className = "cart-item-details";

        const partsHeading = document.createElement("div");
        partsHeading.className = "cart-item-parts-heading";
        partsHeading.textContent = t("itemDetailsHeading");
        detailsCol.appendChild(partsHeading);

        const ul = document.createElement("ul");
        ul.className = "cart-item-parts-list";

        const config = item.config || {};

        // show each configured part as: colored circle + part label (+ optional color name if available)
        ORDERED_PART_IDS.forEach(partId => {
          const value = config[partId];
          if (!value) return;

          let hex = "";
          let colorName = "";

          if (typeof value === "string") {
            hex = value;
          } else if (value && typeof value === "object") {
            hex = value.hex || "";
            if (currentLang === "ar") {
              colorName = value.name_ar || "";
            } else {
              colorName = value.name_en || "";
            }
          }

          if (!hex) return;

          const li = document.createElement("li");
          li.className = "cart-color-line";

          const dot = document.createElement("span");
          dot.className = "cart-color-dot";
          dot.style.backgroundColor = hex;

          const text = document.createElement("span");
          text.className = "cart-color-text";

          const partLabel = getPartLabel(partId);
          text.textContent = colorName
            ? partLabel + ": " + colorName
            : partLabel;

          li.appendChild(dot);
          li.appendChild(text);
          ul.appendChild(li);
        });

        detailsCol.appendChild(ul);

        const footer = document.createElement("div");
        footer.className = "cart-item-footer";

        const qtyControls = document.createElement("div");
        qtyControls.className = "cart-qty-controls";

        const decBtn = document.createElement("button");
        decBtn.type = "button";
        decBtn.className = "cart-qty-btn";
        decBtn.dataset.action = "dec";
        decBtn.textContent = "-";

        const qtyValue = document.createElement("div");
        qtyValue.className = "cart-qty-value";
        qtyValue.textContent = item.quantity;

        const incBtn = document.createElement("button");
        incBtn.type = "button";
        incBtn.className = "cart-qty-btn";
        incBtn.dataset.action = "inc";
        incBtn.textContent = "+";

        qtyControls.appendChild(decBtn);
        qtyControls.appendChild(qtyValue);
        qtyControls.appendChild(incBtn);

        const priceBlock = document.createElement("div");
        priceBlock.className = "cart-item-price-block";

        const priceLabel = document.createElement("div");
        priceLabel.className = "cart-item-price-label";
        priceLabel.textContent = t("itemLineTotalLabel");

        const priceValue = document.createElement("div");
        priceValue.className = "cart-item-price-value";
        const lineTotal = item.unitPrice * item.quantity;
        priceValue.textContent = formatMoney(lineTotal);

        priceBlock.appendChild(priceLabel);
        priceBlock.appendChild(priceValue);

        footer.appendChild(qtyControls);
        footer.appendChild(priceBlock);

        detailsCol.appendChild(footer);

        card.appendChild(header);
        card.appendChild(previewCol);
        card.appendChild(detailsCol);

        cartItemsContainer.appendChild(card);
      });

      const { total, count } = computeCartTotals();
      navTotalEl.textContent = formatMoney(total);
      summaryItemsCountEl.textContent = count;
      summarySubtotalEl.textContent = formatMoney(total);
      summaryTotalEl.textContent = formatMoney(total);
    }

    // Quantity / remove handlers via delegation
    cartItemsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;

      const card = btn.closest(".cart-item");
      if (!card) return;

      const index = parseInt(card.dataset.index, 10);
      if (Number.isNaN(index) || index < 0 || index >= cartItems.length) return;

      const action = btn.dataset.action;
      if (action === "inc") {
        cartItems[index].quantity += 1;
      } else if (action === "dec") {
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity -= 1;
        } else {
          cartItems.splice(index, 1);
        }
      } else if (action === "remove") {
        cartItems.splice(index, 1);
      }

      saveCart(cartItems);
      renderCart();
    });

    function goToCheckout() {
      if (!cartItems.length) {
        alert(t("alertEmptyForCheckout"));
        return;
      }
      window.location.href = "/checkout";
    }

    checkoutBtn.addEventListener("click", goToCheckout);
    navCheckoutBtn.addEventListener("click", goToCheckout);

    // initial
    applyLanguage();
  

`;function Sv(){return T.useEffect(()=>{const e=document.createElement("script");return e.textContent=gv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),O.jsx("div",{className:"cart-page",children:O.jsx("div",{dangerouslySetInnerHTML:{__html:vv}})})}const Ev=`


<canvas id="bgCanvas"></canvas>
 TOP NAV 
<div class="top-nav">
<div class="nav-logo">
<a class="nav-left" href="index.html">
<div class="nav-logo-mark"></div>
<div class="nav-page-title" data-i18n="checkoutTitle">إتمام الشراء</div>
</a>
</div>
<div class="nav-summary">
<div class="lang-toggle" id="langToggle">
<button class="lang-btn" data-lang="ar">ع</button>
<button class="lang-btn" data-lang="en">EN</button>
</div>
<div class="nav-amount-block">
<div class="nav-amount-label" data-i18n="totalLabel">الإجمالي</div>
<div class="nav-amount-value" id="navTotal">د.ب 0.00</div>
</div>
</div>
</div>
 PAGE CONTENT 
<div class="page-content">
<div class="checkout-layout">
<!-- LEFT: FORM -->
<div class="card">
<div class="card-title" data-i18n="formTitle">بيانات العميل والدفع</div>
<form id="checkoutForm">
<div class="form-row">
<div class="form-field">
<label data-i18n="fullNameLabel" for="fullName">الاسم الكامل *</label>
<input id="fullName" name="fullName" required=""/>
</div>
<div class="form-field">
<label data-i18n="phoneLabel" for="phone">رقم الهاتف *</label>
<input id="phone" name="phone" required="" type="tel"/>
</div>
</div>
<div class="form-row">
<div class="form-field">
<label data-i18n="emailLabel" for="email">البريد الإلكتروني *</label>
<input id="email" name="email" required="" type="email"/>
</div>
<div class="form-field">
<label data-i18n="countryLabel" for="country">الدولة *</label>
<input id="country" name="country" required=""/>
</div>
</div>
<div class="form-row">
<div class="form-field">
<label data-i18n="cityLabel" for="city">المدينة *</label>
<input id="city" name="city" required=""/>
</div>
<div class="form-field">
<label data-i18n="postalCodeLabel" for="postalCode">الرمز البريدي (اختياري)</label>
<input id="postalCode" name="postalCode"/>
</div>
</div>
<div class="form-field">
<label data-i18n="addressLabel" for="address">العنوان التفصيلي *</label>
<textarea id="address" name="address" required=""></textarea>
</div>
<div class="form-field">
<label data-i18n="shippingMethodLabel" for="shippingMethod">طريقة الشحن</label>
<select id="shippingMethod" name="shippingMethod">
<option data-i18n="shippingStandard" value="standard">شحن عادي (3–5 أيام)</option>
<option data-i18n="shippingExpress" value="express">شحن سريع (1–2 يوم)</option>
<option data-i18n="shippingPickup" value="pickup">استلام من المتجر</option>
</select>
</div>
<div class="form-field">
<label data-i18n="paymentMethodsTitle">طريقة الدفع (للتجربة فقط – بدون تنفيذ الدفع الفعلي)</label>
<div class="payment-methods">
<label class="payment-option">
<input checked="" name="paymentMethod" type="radio" value="card"/>
<span data-i18n="paymentCard">بطاقة ائتمانية / مدى</span>
</label>
<label class="payment-option">
<input name="paymentMethod" type="radio" value="online"/>
<span data-i18n="paymentOnline">بوابة دفع إلكترونية</span>
</label>
<label class="payment-option">
<input name="paymentMethod" type="radio" value="cod"/>
<span data-i18n="paymentCod">الدفع عند الاستلام (إن توفر)</span>
</label>
</div>
</div>
<div class="terms-row">
<input id="agree" required="" type="checkbox"/>
<label data-i18n="termsText" for="agree">
              أقر بأن جميع بيانات التخصيص صحيحة، وأوافق على الشروط والأحكام وسياسة الاستبدال.
            </label>
</div>
<button class="place-order-btn" data-i18n="placeOrderBtn" type="submit">
            تأكيد الطلب (بدون دفع)
          </button>
</form>
</div>
<!-- RIGHT: ORDER SUMMARY -->
<div class="card">
<div class="card-title" data-i18n="summaryTitle">ملخص الطلب</div>
<div data-i18n="summaryEmpty" id="summaryEmpty" style="font-size:0.85rem; opacity:0.8; margin-bottom:8px; display:none;">
          لا توجد عناصر في السلة. يرجى العودة إلى صفحة التخصيص.
        </div>
<div class="summary-items-list" id="summaryItemsList"></div>
<hr class="summary-hr"/>
<div class="summary-row">
<div data-i18n="itemsCountLabel">عدد القطع</div>
<div id="summaryItemsCount">0</div>
</div>
<div class="summary-row">
<div data-i18n="subtotalLabel">الإجمالي الفرعي</div>
<div id="summarySubtotal">د.ب 0.00</div>
</div>
<div class="summary-row">
<div data-i18n="shippingLabel">الشحن</div>
<div><small data-i18n="shippingSummaryNote">سيتم حسابه حسب العنوان وطريقة الشحن</small></div>
</div>
<div class="summary-row total">
<div data-i18n="totalDueLabel">الإجمالي المستحق (بدون رسوم الدفع)</div>
<div id="summaryTotal">د.ب 0.00</div>
</div>
</div>
</div>
</div>



`,kv=`


    const CART_KEY = "ezCart";

    const i18n = {
      ar: {
        checkoutTitle: "إتمام الشراء",
        totalLabel: "الإجمالي",
        formTitle: "بيانات العميل والدفع",
        fullNameLabel: "الاسم الكامل *",
        phoneLabel: "رقم الهاتف *",
        emailLabel: "البريد الإلكتروني *",
        countryLabel: "الدولة *",
        cityLabel: "المدينة *",
        postalCodeLabel: "الرمز البريدي (اختياري)",
        addressLabel: "العنوان التفصيلي *",
        shippingMethodLabel: "طريقة الشحن",
        shippingStandard: "شحن عادي (3–5 أيام)",
        shippingExpress: "شحن سريع (1–2 يوم)",
        shippingPickup: "استلام من المتجر",
        paymentMethodsTitle: "طريقة الدفع (للتجربة فقط – بدون تنفيذ الدفع الفعلي)",
        paymentCard: "بطاقة ائتمانية / مدى",
        paymentOnline: "بوابة دفع إلكترونية",
        paymentCod: "الدفع عند الاستلام (إن توفر)",
        termsText: "أقر بأن جميع بيانات التخصيص صحيحة، وأوافق على الشروط والأحكام وسياسة الاستبدال.",
        placeOrderBtn: "تأكيد الطلب (بدون دفع)",
        summaryTitle: "ملخص الطلب",
        summaryEmpty: "لا توجد عناصر في السلة. يرجى العودة إلى صفحة التخصيص.",
        itemsCountLabel: "عدد القطع",
        subtotalLabel: "الإجمالي الفرعي",
        shippingLabel: "الشحن",
        shippingSummaryNote: "سيتم حسابه حسب العنوان وطريقة الشحن",
        totalDueLabel: "الإجمالي المستحق (بدون رسوم الدفع)",
        currencyPrefix: "د.ب ",
        alertNoItems: "لا توجد عناصر في السلة لإتمام الطلب.",
        formSuccess: "تم حفظ تفاصيل الطلب (تجريبياً). يمكنك الآن ربط هذه الصفحة ببوابة الدفع الحقيقية لاحقًا."
      },
      en: {
        checkoutTitle: "Checkout",
        totalLabel: "Total",
        formTitle: "Customer & payment details",
        fullNameLabel: "Full name *",
        phoneLabel: "Phone *",
        emailLabel: "Email *",
        countryLabel: "Country *",
        cityLabel: "City *",
        postalCodeLabel: "Postal code (optional)",
        addressLabel: "Full address *",
        shippingMethodLabel: "Shipping method",
        shippingStandard: "Standard shipping (3–5 days)",
        shippingExpress: "Express shipping (1–2 days)",
        shippingPickup: "Store pickup",
        paymentMethodsTitle: "Payment method (demo only – no real charge)",
        paymentCard: "Credit / debit card",
        paymentOnline: "Online payment gateway",
        paymentCod: "Cash on delivery (if available)",
        termsText: "I confirm all customization details are correct and agree to the terms & conditions.",
        placeOrderBtn: "Confirm order (no payment)",
        summaryTitle: "Order summary",
        summaryEmpty: "Your cart is empty. Please go back to the configurator.",
        itemsCountLabel: "Items",
        subtotalLabel: "Subtotal",
        shippingLabel: "Shipping",
        shippingSummaryNote: "Will be calculated based on address and method",
        totalDueLabel: "Total due (excluding gateway fees)",
        currencyPrefix: "BHD ",
        alertNoItems: "There are no items in the cart to place an order.",
        formSuccess: "Order details saved (demo). You can now connect this page to a real payment gateway later."
      }
    };

    let currentLang = localStorage.getItem("ez_lang") || "ar";

    function t(key) {
      return (i18n[currentLang] && i18n[currentLang][key]) || key;
    }

    function formatMoney(value) {
      const prefix = i18n[currentLang].currencyPrefix || "";
      return prefix + value.toFixed(2);
    }

    function applyLanguage() {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

      document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === currentLang);
      });

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
      });

      // options text
      document.querySelectorAll("option[data-i18n]").forEach(opt => {
        const key = opt.getAttribute("data-i18n");
        if (i18n[currentLang][key]) opt.textContent = i18n[currentLang][key];
      });

      renderSummary();
    }

    document.getElementById("langToggle").addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-btn");
      if (!btn) return;
      const lang = btn.dataset.lang;
      if (!lang || lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem("ez_lang", currentLang);
      applyLanguage();
    });

    const navTotalEl = document.getElementById("navTotal");
    const summaryItemsListEl = document.getElementById("summaryItemsList");
    const summaryItemsCountEl = document.getElementById("summaryItemsCount");
    const summarySubtotalEl = document.getElementById("summarySubtotal");
    const summaryTotalEl = document.getElementById("summaryTotal");
    const summaryEmptyEl = document.getElementById("summaryEmpty");
    const checkoutForm = document.getElementById("checkoutForm");

    function loadCart() {
      try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    const cartItems = loadCart();

    function computeCartTotals() {
      let total = 0;
      let count = 0;
      for (const item of cartItems) {
        count += item.quantity;
        total += item.unitPrice * item.quantity;
      }
      return { total, count };
    }

    function renderSummary() {
      summaryItemsListEl.innerHTML = "";

      if (!cartItems.length) {
        summaryEmptyEl.style.display = "block";
        summaryEmptyEl.textContent = t("summaryEmpty");
      } else {
        summaryEmptyEl.style.display = "none";
      }

      cartItems.forEach(item => {
        const row = document.createElement("div");
        row.className = "summary-item-row";

        const nameEl = document.createElement("div");
        nameEl.className = "summary-item-name";
        const name = item.name || (currentLang === "ar" ? "متحكم PS5 مخصّص" : "Custom PS5 Controller");
        nameEl.textContent = name + " × " + item.quantity;

        const priceEl = document.createElement("div");
        const lineTotal = item.unitPrice * item.quantity;
        priceEl.textContent = formatMoney(lineTotal);

        row.appendChild(nameEl);
        row.appendChild(priceEl);
        summaryItemsListEl.appendChild(row);
      });

      const { total, count } = computeCartTotals();
      navTotalEl.textContent = formatMoney(total);
      summaryItemsCountEl.textContent = count;
      summarySubtotalEl.textContent = formatMoney(total);
      summaryTotalEl.textContent = formatMoney(total);
    }

    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!cartItems.length) {
        alert(t("alertNoItems"));
        return;
      }

      const formData = new FormData(checkoutForm);
      const data = Object.fromEntries(formData.entries());
      data.agree = document.getElementById("agree").checked;
      data.cart = cartItems;

      console.log("Checkout data (demo):", data);
      alert(t("formSuccess"));
    });

    // init
    applyLanguage();
  

`;function wv(){return T.useEffect(()=>{const e=document.createElement("script");return e.textContent=kv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),O.jsx("div",{className:"checkout-page",children:O.jsx("div",{dangerouslySetInnerHTML:{__html:Ev}})})}function Cv(){return O.jsxs(Zy,{children:[O.jsx(zn,{path:"/",element:O.jsx(pv,{})}),O.jsx(zn,{path:"/configurator",element:O.jsx(yv,{})}),O.jsx(zn,{path:"/cart",element:O.jsx(Sv,{})}),O.jsx(zn,{path:"/checkout",element:O.jsx(wv,{})}),O.jsx(zn,{path:"*",element:O.jsx(qy,{to:"/",replace:!0})})]})}const Pv=tv([{path:"/*",element:O.jsx(Cv,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});Lo.createRoot(document.getElementById("root")).render(O.jsx(cv,{router:Pv}));

function hc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vc={exports:{}},Nl={},gc={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),cp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),gp=Symbol.for("react.memo"),Ep=Symbol.for("react.lazy"),Ds=Symbol.iterator;function wp(e){return e===null||typeof e!="object"?null:(e=Ds&&e[Ds]||e["@@iterator"],typeof e=="function"?e:null)}var Ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wc=Object.assign,Sc={};function dr(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||Ec}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kc(){}kc.prototype=dr.prototype;function Ci(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||Ec}var Pi=Ci.prototype=new kc;Pi.constructor=Ci;wc(Pi,dr.prototype);Pi.isPureReactComponent=!0;var Fs=Array.isArray,xc=Object.prototype.hasOwnProperty,_i={current:null},Cc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)xc.call(t,r)&&!Cc.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:ua,type:e,key:l,ref:o,props:a,_owner:_i.current}}function Sp(e,t){return{$$typeof:ua,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Li(e){return typeof e=="object"&&e!==null&&e.$$typeof===ua}function kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zs=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kp(""+e.key):t.toString(36)}function Va(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ua:case cp:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Xl(o,0):r,Fs(a)?(n="",e!=null&&(n=e.replace(zs,"$&/")+"/"),Va(a,t,n,"",function(u){return u})):a!=null&&(Li(a)&&(a=Sp(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(zs,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Fs(e))for(var i=0;i<e.length;i++){l=e[i];var s=r+Xl(l,i);o+=Va(l,t,n,s,a)}else if(s=wp(e),typeof s=="function")for(e=s.call(e),i=0;!(l=e.next()).done;)l=l.value,s=r+Xl(l,i++),o+=Va(l,t,n,s,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(e,t,n){if(e==null)return e;var r=[],a=0;return Va(e,r,"","",function(l){return t.call(n,l,a++)}),r}function xp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Wa={transition:null},Cp={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:_i};function _c(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Pa,forEach:function(e,t,n){Pa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pa(e,function(){t++}),t},toArray:function(e){return Pa(e,function(t){return t})||[]},only:function(e){if(!Li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=dr;K.Fragment=dp;K.Profiler=pp;K.PureComponent=Ci;K.StrictMode=fp;K.Suspense=vp;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;K.act=_c;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wc({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=_i.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)xc.call(t,s)&&!Cc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:ua,type:e.type,key:a,ref:l,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};K.createElement=Pc;K.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:yp,render:e}};K.isValidElement=Li;K.lazy=function(e){return{$$typeof:Ep,_payload:{_status:-1,_result:e},_init:xp}};K.memo=function(e,t){return{$$typeof:gp,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Wa.transition;Wa.transition={};try{e()}finally{Wa.transition=t}};K.unstable_act=_c;K.useCallback=function(e,t){return Ve.current.useCallback(e,t)};K.useContext=function(e){return Ve.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ve.current.useEffect(e,t)};K.useId=function(){return Ve.current.useId()};K.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ve.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};K.useRef=function(e){return Ve.current.useRef(e)};K.useState=function(e){return Ve.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ve.current.useTransition()};K.version="18.3.1";gc.exports=K;var _=gc.exports;const Pp=yc(_),_p=hc({__proto__:null,default:Pp},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=_,Tp=Symbol.for("react.element"),Np=Symbol.for("react.fragment"),Ip=Object.prototype.hasOwnProperty,Rp=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bp={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ip.call(t,r)&&!bp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Tp,type:e,key:l,ref:o,props:a,_owner:Rp.current}}Nl.Fragment=Np;Nl.jsx=Lc;Nl.jsxs=Lc;vc.exports=Nl;var R=vc.exports,Lo={},Tc={exports:{}},rt={},Nc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,j){var V=T.length;T.push(j);e:for(;0<V;){var Z=V-1>>>1,te=T[Z];if(0<a(te,j))T[Z]=j,T[V]=te,V=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],V=T.pop();if(V!==j){T[0]=V;e:for(var Z=0,te=T.length,Ie=te>>>1;Z<Ie;){var Me=2*(Z+1)-1,Pe=T[Me],ye=Me+1,lt=T[ye];if(0>a(Pe,V))ye<te&&0>a(lt,Pe)?(T[Z]=lt,T[ye]=V,Z=ye):(T[Z]=Pe,T[Me]=V,Z=Me);else if(ye<te&&0>a(lt,V))T[Z]=lt,T[ye]=V,Z=ye;else break e}}return j}function a(T,j){var V=T.sortIndex-j.sortIndex;return V!==0?V:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var s=[],u=[],f=1,d=null,m=3,E=!1,S=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=T)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function x(T){if(k=!1,y(T),!S)if(n(s)!==null)S=!0,we(N);else{var j=n(u);j!==null&&Ge(x,j.startTime-T)}}function N(T,j){S=!1,k&&(k=!1,h(P),P=-1),E=!0;var V=m;try{for(y(j),d=n(s);d!==null&&(!(d.expirationTime>j)||T&&!ee());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,m=d.priorityLevel;var te=Z(d.expirationTime<=j);j=e.unstable_now(),typeof te=="function"?d.callback=te:d===n(s)&&r(s),y(j)}else r(s);d=n(s)}if(d!==null)var Ie=!0;else{var Me=n(u);Me!==null&&Ge(x,Me.startTime-j),Ie=!1}return Ie}finally{d=null,m=V,E=!1}}var O=!1,v=null,P=-1,U=5,b=-1;function ee(){return!(e.unstable_now()-b<U)}function ae(){if(v!==null){var T=e.unstable_now();b=T;var j=!0;try{j=v(!0,T)}finally{j?W():(O=!1,v=null)}}else O=!1}var W;if(typeof c=="function")W=function(){c(ae)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,re=q.port2;q.port1.onmessage=ae,W=function(){re.postMessage(null)}}else W=function(){I(ae,0)};function we(T){v=T,O||(O=!0,W())}function Ge(T,j){P=I(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||E||(S=!0,we(N))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var V=m;m=j;try{return T()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var V=m;m=T;try{return j()}finally{m=V}},e.unstable_scheduleCallback=function(T,j,V){var Z=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Z+V:Z):V=Z,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=V+te,T={id:f++,callback:j,priorityLevel:T,startTime:V,expirationTime:te,sortIndex:-1},V>Z?(T.sortIndex=V,t(u,T),n(s)===null&&T===n(u)&&(k?(h(P),P=-1):k=!0,Ge(x,V-Z))):(T.sortIndex=te,t(s,T),S||E||(S=!0,we(N))),T},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(T){var j=m;return function(){var V=m;m=j;try{return T.apply(this,arguments)}finally{m=V}}}})(Ic);Nc.exports=Ic;var Bp=Nc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=_,nt=Bp;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rc=new Set,Vr={};function Rn(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Rc.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=Object.prototype.hasOwnProperty,Mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,js={},Hs={};function Ap(e){return To.call(Hs,e)?!0:To.call(js,e)?!1:Mp.test(e)?Hs[e]=!0:(js[e]=!0,!1)}function Dp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fp(e,t,n,r){if(t===null||typeof t>"u"||Dp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ti=/[\-:]([a-z])/g;function Ni(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ti,Ni);Oe[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ti,Ni);Oe[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ti,Ni);Oe[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,t,n,r){var a=Oe.hasOwnProperty(t)?Oe[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fp(t,n,a,r)&&(n=null),r||a===null?Ap(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Ri=Symbol.for("react.strict_mode"),No=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),bi=Symbol.for("react.forward_ref"),Io=Symbol.for("react.suspense"),Ro=Symbol.for("react.suspense_list"),Bi=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),Us=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Zl;function Nr(e){if(Zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||""}return`
`+Zl+e}var Jl=!1;function eo(e,t){if(!e||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||a[o]!==l[i]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=i);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function zp(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1),e;case 11:return e=eo(e.type.render,!1),e;case 1:return e=eo(e.type,!0),e;default:return""}}function bo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case jn:return"Portal";case No:return"Profiler";case Ri:return"StrictMode";case Io:return"Suspense";case Ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bc:return(e.displayName||"Context")+".Consumer";case bc:return(e._context.displayName||"Context")+".Provider";case bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bi:return t=e.displayName||null,t!==null?t:bo(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return bo(e(t))}catch{}}return null}function jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bo(t);case 8:return t===Ri?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=Mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function La(e){e._valueTracker||(e._valueTracker=Hp(e))}function Ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bo(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dc(e,t){t=t.checked,t!=null&&Ii(e,"checked",t,!1)}function Oo(e,t){Dc(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mo(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mo(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Ir(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function Fc(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Do(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ta,jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Vp=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(Vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function zo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,Jn=null,er=null;function Qs(e){if(e=fa(e)){if(typeof Ho!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Ol(t),Ho(e.stateNode,e.type,t))}}function Vc(e){Jn?er?er.push(e):er=[e]:Jn=e}function Wc(){if(Jn){var e=Jn,t=er;if(er=Jn=null,Qs(e),t)for(e=0;e<t.length;e++)Qs(t[e])}}function Gc(e,t){return e(t)}function $c(){}var to=!1;function Qc(e,t,n){if(to)return e(t,n);to=!0;try{return Gc(e,t,n)}finally{to=!1,(Jn!==null||er!==null)&&($c(),Wc())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Uo=!1;if(Ot)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Uo=!1}function Wp(e,t,n,r,a,l,o,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Mr=!1,rl=null,al=!1,Vo=null,Gp={onError:function(e){Mr=!0,rl=e}};function $p(e,t,n,r,a,l,o,i,s){Mr=!1,rl=null,Wp.apply(Gp,arguments)}function Qp(e,t,n,r,a,l,o,i,s){if($p.apply(this,arguments),Mr){if(Mr){var u=rl;Mr=!1,rl=null}else throw Error(L(198));al||(al=!0,Vo=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(bn(e)!==e)throw Error(L(188))}function Kp(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Ks(a),e;if(l===r)return Ks(a),t;l=l.sibling}throw Error(L(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,i=a.child;i;){if(i===n){o=!0,n=a,r=l;break}if(i===r){o=!0,r=a,n=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===n){o=!0,n=l,r=a;break}if(i===r){o=!0,r=l,n=a;break}i=i.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Yc(e){return e=Kp(e),e!==null?qc(e):null}function qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qc(e);if(t!==null)return t;e=e.sibling}return null}var Xc=nt.unstable_scheduleCallback,Ys=nt.unstable_cancelCallback,Yp=nt.unstable_shouldYield,qp=nt.unstable_requestPaint,ke=nt.unstable_now,Xp=nt.unstable_getCurrentPriorityLevel,Mi=nt.unstable_ImmediatePriority,Zc=nt.unstable_UserBlockingPriority,ll=nt.unstable_NormalPriority,Zp=nt.unstable_LowPriority,Jc=nt.unstable_IdlePriority,Il=null,Pt=null;function Jp(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Il,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var Na=64,Ia=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ol(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~a;i!==0?r=Rr(i):(l&=o,l!==0&&(r=Rr(l)))}else o=n&~a,o!==0?r=Rr(o):l!==0&&(r=Rr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),a=1<<n,r|=e[n],t&=~a;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-gt(l),i=1<<o,s=a[o];s===-1?(!(i&n)||i&r)&&(a[o]=rm(i,t)):s<=t&&(e.expiredLanes|=i),l&=~i}}function Wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ed(){var e=Na;return Na<<=1,!(Na&4194240)&&(Na=64),e}function no(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ca(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function lm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-gt(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function Ai(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var oe=0;function td(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nd,Di,rd,ad,ld,Go=!1,Ra=[],Xt=null,Zt=null,Jt=null,$r=new Map,Qr=new Map,$t=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function wr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=fa(t),t!==null&&Di(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function im(e,t,n,r,a){switch(t){case"focusin":return Xt=wr(Xt,e,t,n,r,a),!0;case"dragenter":return Zt=wr(Zt,e,t,n,r,a),!0;case"mouseover":return Jt=wr(Jt,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return $r.set(l,wr($r.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Qr.set(l,wr(Qr.get(l)||null,e,t,n,r,a)),!0}return!1}function od(e){var t=En(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Kc(n),t!==null){e.blockedOn=t,ld(e.priority,function(){rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jo=r,n.target.dispatchEvent(r),jo=null}else return t=fa(n),t!==null&&Di(t),e.blockedOn=n,!1;t.shift()}return!0}function Xs(e,t,n){Ga(e)&&n.delete(t)}function sm(){Go=!1,Xt!==null&&Ga(Xt)&&(Xt=null),Zt!==null&&Ga(Zt)&&(Zt=null),Jt!==null&&Ga(Jt)&&(Jt=null),$r.forEach(Xs),Qr.forEach(Xs)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Go||(Go=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,sm)))}function Kr(e){function t(a){return Sr(a,e)}if(0<Ra.length){Sr(Ra[0],e);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Sr(Xt,e),Zt!==null&&Sr(Zt,e),Jt!==null&&Sr(Jt,e),$r.forEach(t),Qr.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)od(n),n.blockedOn===null&&$t.shift()}var tr=Ft.ReactCurrentBatchConfig,il=!0;function um(e,t,n,r){var a=oe,l=tr.transition;tr.transition=null;try{oe=1,Fi(e,t,n,r)}finally{oe=a,tr.transition=l}}function cm(e,t,n,r){var a=oe,l=tr.transition;tr.transition=null;try{oe=4,Fi(e,t,n,r)}finally{oe=a,tr.transition=l}}function Fi(e,t,n,r){if(il){var a=$o(e,t,n,r);if(a===null)po(e,t,r,sl,n),qs(e,r);else if(im(a,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<om.indexOf(e)){for(;a!==null;){var l=fa(a);if(l!==null&&nd(l),l=$o(e,t,n,r),l===null&&po(e,t,r,sl,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var sl=null;function $o(e,t,n,r){if(sl=null,e=Oi(r),e=En(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case Mi:return 1;case Zc:return 4;case ll:case Zp:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var Kt=null,zi=null,$a=null;function sd(){if($a)return $a;var e,t=zi,n=t.length,r,a="value"in Kt?Kt.value:Kt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return $a=a.slice(e,1<r?1-r:void 0)}function Qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function Zs(){return!1}function at(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ba:Zs,this.isPropagationStopped=Zs,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=at(fr),da=he({},fr,{view:0,detail:0}),dm=at(da),ro,ao,kr,Rl=he({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(ro=e.screenX-kr.screenX,ao=e.screenY-kr.screenY):ao=ro=0,kr=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),Js=at(Rl),fm=he({},Rl,{dataTransfer:0}),pm=at(fm),mm=he({},da,{relatedTarget:0}),lo=at(mm),hm=he({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),ym=at(hm),vm=he({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=at(vm),Em=he({},fr,{data:0}),eu=at(Em),wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=km[e])?!!t[e]:!1}function Hi(){return xm}var Cm=he({},da,{key:function(e){if(e.key){var t=wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?Qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=at(Cm),_m=he({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=at(_m),Lm=he({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),Tm=at(Lm),Nm=he({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=at(Nm),Rm=he({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=at(Rm),Bm=[9,13,27,32],Ui=Ot&&"CompositionEvent"in window,Ar=null;Ot&&"documentMode"in document&&(Ar=document.documentMode);var Om=Ot&&"TextEvent"in window&&!Ar,ud=Ot&&(!Ui||Ar&&8<Ar&&11>=Ar),nu=" ",ru=!1;function cd(e,t){switch(e){case"keyup":return Bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Mm(e,t){switch(e){case"compositionend":return dd(t);case"keypress":return t.which!==32?null:(ru=!0,nu);case"textInput":return e=t.data,e===nu&&ru?null:e;default:return null}}function Am(e,t){if(Un)return e==="compositionend"||!Ui&&cd(e,t)?(e=sd(),$a=zi=Kt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dm[e.type]:t==="textarea"}function fd(e,t,n,r){Vc(r),t=ul(t,"onChange"),0<t.length&&(n=new ji("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Yr=null;function Fm(e){xd(e,0)}function bl(e){var t=Gn(e);if(Ac(t))return e}function zm(e,t){if(e==="change")return t}var pd=!1;if(Ot){var oo;if(Ot){var io="oninput"in document;if(!io){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),io=typeof lu.oninput=="function"}oo=io}else oo=!1;pd=oo&&(!document.documentMode||9<document.documentMode)}function ou(){Dr&&(Dr.detachEvent("onpropertychange",md),Yr=Dr=null)}function md(e){if(e.propertyName==="value"&&bl(Yr)){var t=[];fd(t,Yr,e,Oi(e)),Qc(Fm,t)}}function jm(e,t,n){e==="focusin"?(ou(),Dr=t,Yr=n,Dr.attachEvent("onpropertychange",md)):e==="focusout"&&ou()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(Yr)}function Um(e,t){if(e==="click")return bl(t)}function Vm(e,t){if(e==="input"||e==="change")return bl(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Wm;function qr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!To.call(t,a)||!wt(e[a],t[a]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yd(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function Vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=yd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&Vi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=su(n,l);var o=su(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $m=Ot&&"documentMode"in document&&11>=document.documentMode,Vn=null,Qo=null,Fr=null,Ko=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ko||Vn==null||Vn!==nl(r)||(r=Vn,"selectionStart"in r&&Vi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&qr(Fr,r)||(Fr=r,r=ul(Qo,"onSelect"),0<r.length&&(t=new ji("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},so={},vd={};Ot&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function Bl(e){if(so[e])return so[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vd)return so[e]=t[n];return e}var gd=Bl("animationend"),Ed=Bl("animationiteration"),wd=Bl("animationstart"),Sd=Bl("transitionend"),kd=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){kd.set(e,t),Rn(t,[e])}for(var uo=0;uo<cu.length;uo++){var co=cu[uo],Qm=co.toLowerCase(),Km=co[0].toUpperCase()+co.slice(1);un(Qm,"on"+Km)}un(gd,"onAnimationEnd");un(Ed,"onAnimationIteration");un(wd,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Sd,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qp(r,t,void 0,e),e.currentTarget=null}function xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==l&&a.isPropagationStopped())break e;du(a,i,u),l=s}else for(o=0;o<r.length;o++){if(i=r[o],s=i.instance,u=i.currentTarget,i=i.listener,s!==l&&a.isPropagationStopped())break e;du(a,i,u),l=s}}}if(al)throw e=Vo,al=!1,Vo=null,e}function ue(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var r=e+"__bubble";n.has(r)||(Cd(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[Oa]){e[Oa]=!0,Rc.forEach(function(n){n!=="selectionchange"&&(Ym.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oa]||(t[Oa]=!0,fo("selectionchange",!1,t))}}function Cd(e,t,n,r){switch(id(t)){case 1:var a=um;break;case 4:a=cm;break;default:a=Fi}n=a.bind(null,t,n,e),a=void 0,!Uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function po(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;i!==null;){if(o=En(i),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}i=i.parentNode}}r=r.return}Qc(function(){var u=l,f=Oi(n),d=[];e:{var m=kd.get(e);if(m!==void 0){var E=ji,S=e;switch(e){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":E=Pm;break;case"focusin":S="focus",E=lo;break;case"focusout":S="blur",E=lo;break;case"beforeblur":case"afterblur":E=lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Tm;break;case gd:case Ed:case wd:E=ym;break;case Sd:E=Im;break;case"scroll":E=dm;break;case"wheel":E=bm;break;case"copy":case"cut":case"paste":E=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=tu}var k=(t&4)!==0,I=!k&&e==="scroll",h=k?m!==null?m+"Capture":null:m;k=[];for(var c=u,y;c!==null;){y=c;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Gr(c,h),x!=null&&k.push(Zr(c,x,y)))),I)break;c=c.return}0<k.length&&(m=new E(m,S,null,n,f),d.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",m&&n!==jo&&(S=n.relatedTarget||n.fromElement)&&(En(S)||S[Mt]))break e;if((E||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,E?(S=n.relatedTarget||n.toElement,E=u,S=S?En(S):null,S!==null&&(I=bn(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(E=null,S=u),E!==S)){if(k=Js,x="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=tu,x="onPointerLeave",h="onPointerEnter",c="pointer"),I=E==null?m:Gn(E),y=S==null?m:Gn(S),m=new k(x,c+"leave",E,n,f),m.target=I,m.relatedTarget=y,x=null,En(f)===u&&(k=new k(h,c+"enter",S,n,f),k.target=y,k.relatedTarget=I,x=k),I=x,E&&S)t:{for(k=E,h=S,c=0,y=k;y;y=Fn(y))c++;for(y=0,x=h;x;x=Fn(x))y++;for(;0<c-y;)k=Fn(k),c--;for(;0<y-c;)h=Fn(h),y--;for(;c--;){if(k===h||h!==null&&k===h.alternate)break t;k=Fn(k),h=Fn(h)}k=null}else k=null;E!==null&&fu(d,m,E,k,!1),S!==null&&I!==null&&fu(d,I,S,k,!0)}}e:{if(m=u?Gn(u):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var N=zm;else if(au(m))if(pd)N=Vm;else{N=Hm;var O=jm}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Um);if(N&&(N=N(e,u))){fd(d,N,n,f);break e}O&&O(e,m,u),e==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&Mo(m,"number",m.value)}switch(O=u?Gn(u):window,e){case"focusin":(au(O)||O.contentEditable==="true")&&(Vn=O,Qo=u,Fr=null);break;case"focusout":Fr=Qo=Vn=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,uu(d,n,f);break;case"selectionchange":if($m)break;case"keydown":case"keyup":uu(d,n,f)}var v;if(Ui)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Un?cd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ud&&n.locale!=="ko"&&(Un||P!=="onCompositionStart"?P==="onCompositionEnd"&&Un&&(v=sd()):(Kt=f,zi="value"in Kt?Kt.value:Kt.textContent,Un=!0)),O=ul(u,P),0<O.length&&(P=new eu(P,e,null,n,f),d.push({event:P,listeners:O}),v?P.data=v:(v=dd(n),v!==null&&(P.data=v)))),(v=Om?Mm(e,n):Am(e,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(f=new eu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=v))}xd(d,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Gr(e,n),l!=null&&r.unshift(Zr(e,l,a)),l=Gr(e,t),l!=null&&r.push(Zr(e,l,a))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,a?(s=Gr(n,l),s!=null&&o.unshift(Zr(n,s,i))):a||(s=Gr(n,l),s!=null&&o.push(Zr(n,s,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qm=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(qm,`
`).replace(Xm,"")}function Ma(e,t,n){if(t=pu(t),pu(e)!==t&&n)throw Error(L(425))}function cl(){}var Yo=null,qo=null;function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(eh)}:Zo;function eh(e){setTimeout(function(){throw e})}function mo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Kr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+pr,Jr="__reactProps$"+pr,Mt="__reactContainer$"+pr,Jo="__reactEvents$"+pr,th="__reactListeners$"+pr,nh="__reactHandles$"+pr;function En(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[Ct])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function fa(e){return e=e[Ct]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Ol(e){return e[Jr]||null}var ei=[],$n=-1;function cn(e){return{current:e}}function ce(e){0>$n||(e.current=ei[$n],ei[$n]=null,$n--)}function se(e,t){$n++,ei[$n]=e.current,e.current=t}var sn={},ze=cn(sn),Ye=cn(!1),Pn=sn;function lr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function qe(e){return e=e.childContextTypes,e!=null}function dl(){ce(Ye),ce(ze)}function yu(e,t,n){if(ze.current!==sn)throw Error(L(168));se(ze,t),se(Ye,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(L(108,jp(e)||"Unknown",a));return he({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Pn=ze.current,se(ze,e),se(Ye,Ye.current),!0}function vu(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Pd(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,ce(Ye),ce(ze),se(ze,e)):ce(Ye),se(Ye,n)}var It=null,Ml=!1,ho=!1;function _d(e){It===null?It=[e]:It.push(e)}function rh(e){Ml=!0,_d(e)}function dn(){if(!ho&&It!==null){ho=!0;var e=0,t=oe;try{var n=It;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Ml=!1}catch(a){throw It!==null&&(It=It.slice(e+1)),Xc(Mi,dn),a}finally{oe=t,ho=!1}}return null}var Qn=[],Kn=0,pl=null,ml=0,ot=[],it=0,_n=null,Rt=1,bt="";function hn(e,t){Qn[Kn++]=ml,Qn[Kn++]=pl,pl=e,ml=t}function Ld(e,t,n){ot[it++]=Rt,ot[it++]=bt,ot[it++]=_n,_n=e;var r=Rt;e=bt;var a=32-gt(r)-1;r&=~(1<<a),n+=1;var l=32-gt(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Rt=1<<32-gt(t)+a|n<<a|r,bt=l+e}else Rt=1<<l|n<<a|r,bt=e}function Wi(e){e.return!==null&&(hn(e,1),Ld(e,1,0))}function Gi(e){for(;e===pl;)pl=Qn[--Kn],Qn[Kn]=null,ml=Qn[--Kn],Qn[Kn]=null;for(;e===_n;)_n=ot[--it],ot[it]=null,bt=ot[--it],ot[it]=null,Rt=ot[--it],ot[it]=null}var tt=null,et=null,fe=!1,vt=null;function Td(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Rt,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(fe){var t=et;if(t){var n=t;if(!gu(e,t)){if(ti(e))throw Error(L(418));t=en(n.nextSibling);var r=tt;t&&gu(e,t)?Td(r,n):(e.flags=e.flags&-4097|2,fe=!1,tt=e)}}else{if(ti(e))throw Error(L(418));e.flags=e.flags&-4097|2,fe=!1,tt=e}}}function Eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Aa(e){if(e!==tt)return!1;if(!fe)return Eu(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xo(e.type,e.memoizedProps)),t&&(t=et)){if(ti(e))throw Nd(),Error(L(418));for(;t;)Td(e,t),t=en(t.nextSibling)}if(Eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?en(e.stateNode.nextSibling):null;return!0}function Nd(){for(var e=et;e;)e=en(e.nextSibling)}function or(){et=tt=null,fe=!1}function $i(e){vt===null?vt=[e]:vt.push(e)}var ah=Ft.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var i=a.refs;o===null?delete i[l]:i[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Da(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wu(e){var t=e._init;return t(e._payload)}function Id(e){function t(h,c){if(e){var y=h.deletions;y===null?(h.deletions=[c],h.flags|=16):y.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function a(h,c){return h=an(h,c),h.index=0,h.sibling=null,h}function l(h,c,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<c?(h.flags|=2,c):y):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,c,y,x){return c===null||c.tag!==6?(c=ko(y,h.mode,x),c.return=h,c):(c=a(c,y),c.return=h,c)}function s(h,c,y,x){var N=y.type;return N===Hn?f(h,c,y.props.children,x,y.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Wt&&wu(N)===c.type)?(x=a(c,y.props),x.ref=xr(h,c,y),x.return=h,x):(x=el(y.type,y.key,y.props,null,h.mode,x),x.ref=xr(h,c,y),x.return=h,x)}function u(h,c,y,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==y.containerInfo||c.stateNode.implementation!==y.implementation?(c=xo(y,h.mode,x),c.return=h,c):(c=a(c,y.children||[]),c.return=h,c)}function f(h,c,y,x,N){return c===null||c.tag!==7?(c=Cn(y,h.mode,x,N),c.return=h,c):(c=a(c,y),c.return=h,c)}function d(h,c,y){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ko(""+c,h.mode,y),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case _a:return y=el(c.type,c.key,c.props,null,h.mode,y),y.ref=xr(h,null,c),y.return=h,y;case jn:return c=xo(c,h.mode,y),c.return=h,c;case Wt:var x=c._init;return d(h,x(c._payload),y)}if(Ir(c)||gr(c))return c=Cn(c,h.mode,y,null),c.return=h,c;Da(h,c)}return null}function m(h,c,y,x){var N=c!==null?c.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:i(h,c,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _a:return y.key===N?s(h,c,y,x):null;case jn:return y.key===N?u(h,c,y,x):null;case Wt:return N=y._init,m(h,c,N(y._payload),x)}if(Ir(y)||gr(y))return N!==null?null:f(h,c,y,x,null);Da(h,y)}return null}function E(h,c,y,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,i(c,h,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _a:return h=h.get(x.key===null?y:x.key)||null,s(c,h,x,N);case jn:return h=h.get(x.key===null?y:x.key)||null,u(c,h,x,N);case Wt:var O=x._init;return E(h,c,y,O(x._payload),N)}if(Ir(x)||gr(x))return h=h.get(y)||null,f(c,h,x,N,null);Da(c,x)}return null}function S(h,c,y,x){for(var N=null,O=null,v=c,P=c=0,U=null;v!==null&&P<y.length;P++){v.index>P?(U=v,v=null):U=v.sibling;var b=m(h,v,y[P],x);if(b===null){v===null&&(v=U);break}e&&v&&b.alternate===null&&t(h,v),c=l(b,c,P),O===null?N=b:O.sibling=b,O=b,v=U}if(P===y.length)return n(h,v),fe&&hn(h,P),N;if(v===null){for(;P<y.length;P++)v=d(h,y[P],x),v!==null&&(c=l(v,c,P),O===null?N=v:O.sibling=v,O=v);return fe&&hn(h,P),N}for(v=r(h,v);P<y.length;P++)U=E(v,h,P,y[P],x),U!==null&&(e&&U.alternate!==null&&v.delete(U.key===null?P:U.key),c=l(U,c,P),O===null?N=U:O.sibling=U,O=U);return e&&v.forEach(function(ee){return t(h,ee)}),fe&&hn(h,P),N}function k(h,c,y,x){var N=gr(y);if(typeof N!="function")throw Error(L(150));if(y=N.call(y),y==null)throw Error(L(151));for(var O=N=null,v=c,P=c=0,U=null,b=y.next();v!==null&&!b.done;P++,b=y.next()){v.index>P?(U=v,v=null):U=v.sibling;var ee=m(h,v,b.value,x);if(ee===null){v===null&&(v=U);break}e&&v&&ee.alternate===null&&t(h,v),c=l(ee,c,P),O===null?N=ee:O.sibling=ee,O=ee,v=U}if(b.done)return n(h,v),fe&&hn(h,P),N;if(v===null){for(;!b.done;P++,b=y.next())b=d(h,b.value,x),b!==null&&(c=l(b,c,P),O===null?N=b:O.sibling=b,O=b);return fe&&hn(h,P),N}for(v=r(h,v);!b.done;P++,b=y.next())b=E(v,h,P,b.value,x),b!==null&&(e&&b.alternate!==null&&v.delete(b.key===null?P:b.key),c=l(b,c,P),O===null?N=b:O.sibling=b,O=b);return e&&v.forEach(function(ae){return t(h,ae)}),fe&&hn(h,P),N}function I(h,c,y,x){if(typeof y=="object"&&y!==null&&y.type===Hn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _a:e:{for(var N=y.key,O=c;O!==null;){if(O.key===N){if(N=y.type,N===Hn){if(O.tag===7){n(h,O.sibling),c=a(O,y.props.children),c.return=h,h=c;break e}}else if(O.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Wt&&wu(N)===O.type){n(h,O.sibling),c=a(O,y.props),c.ref=xr(h,O,y),c.return=h,h=c;break e}n(h,O);break}else t(h,O);O=O.sibling}y.type===Hn?(c=Cn(y.props.children,h.mode,x,y.key),c.return=h,h=c):(x=el(y.type,y.key,y.props,null,h.mode,x),x.ref=xr(h,c,y),x.return=h,h=x)}return o(h);case jn:e:{for(O=y.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===y.containerInfo&&c.stateNode.implementation===y.implementation){n(h,c.sibling),c=a(c,y.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=xo(y,h.mode,x),c.return=h,h=c}return o(h);case Wt:return O=y._init,I(h,c,O(y._payload),x)}if(Ir(y))return S(h,c,y,x);if(gr(y))return k(h,c,y,x);Da(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,c!==null&&c.tag===6?(n(h,c.sibling),c=a(c,y),c.return=h,h=c):(n(h,c),c=ko(y,h.mode,x),c.return=h,h=c),o(h)):n(h,c)}return I}var ir=Id(!0),Rd=Id(!1),hl=cn(null),yl=null,Yn=null,Qi=null;function Ki(){Qi=Yn=yl=null}function Yi(e){var t=hl.current;ce(hl),e._currentValue=t}function ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){yl=e,Qi=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(yl===null)throw Error(L(308));Yn=e,yl.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var wn=null;function qi(e){wn===null?wn=[e]:wn.push(e)}function bd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,qi(t)):(n.next=a.next,a.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,At(e,n)}return a=r.interleaved,a===null?(t.next=t,qi(r)):(t.next=a.next,a.next=t),r.interleaved=t,At(e,n)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ai(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var a=e.updateQueue;Gt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var s=i,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==o&&(i===null?f.firstBaseUpdate=u:i.next=u,f.lastBaseUpdate=s))}if(l!==null){var d=a.baseState;o=0,f=u=s=null,i=l;do{var m=i.lane,E=i.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:E,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,k=i;switch(m=t,E=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){d=S.call(E,d,m);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(E,d,m):S,m==null)break e;d=he({},d,m);break e;case 2:Gt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else E={eventTime:E,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(u=f=E,s=d):f=f.next=E,o|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Tn|=o,e.lanes=o,e.memoizedState=d}}function ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(L(191,a));a.call(r)}}}var pa={},_t=cn(pa),ea=cn(pa),ta=cn(pa);function Sn(e){if(e===pa)throw Error(L(174));return e}function Zi(e,t){switch(se(ta,t),se(ea,e),se(_t,pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Do(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Do(t,e)}ce(_t),se(_t,t)}function sr(){ce(_t),ce(ea),ce(ta)}function Od(e){Sn(ta.current);var t=Sn(_t.current),n=Do(t,e.type);t!==n&&(se(ea,e),se(_t,n))}function Ji(e){ea.current===e&&(ce(_t),ce(ea))}var pe=cn(0);function gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function es(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Ya=Ft.ReactCurrentDispatcher,vo=Ft.ReactCurrentBatchConfig,Ln=0,me=null,_e=null,Te=null,El=!1,zr=!1,na=0,lh=0;function Ae(){throw Error(L(321))}function ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function ns(e,t,n,r,a,l){if(Ln=l,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ya.current=e===null||e.memoizedState===null?uh:ch,e=n(r,a),zr){l=0;do{if(zr=!1,na=0,25<=l)throw Error(L(301));l+=1,Te=_e=null,t.updateQueue=null,Ya.current=dh,e=n(r,a)}while(zr)}if(Ya.current=wl,t=_e!==null&&_e.next!==null,Ln=0,Te=_e=me=null,El=!1,t)throw Error(L(300));return e}function rs(){var e=na!==0;return na=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?me.memoizedState=Te=e:Te=Te.next=e,Te}function dt(){if(_e===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Te===null?me.memoizedState:Te.next;if(t!==null)Te=t,_e=e;else{if(e===null)throw Error(L(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Te===null?me.memoizedState=Te=e:Te=Te.next=e}return Te}function ra(e,t){return typeof t=="function"?t(e):t}function go(e){var t=dt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=_e,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var i=o=null,s=null,u=l;do{var f=u.lane;if((Ln&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,o=r):s=s.next=d,me.lanes|=f,Tn|=f}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=i,wt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,me.lanes|=l,Tn|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Eo(e){var t=dt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);wt(l,t.memoizedState)||(Ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Md(){}function Ad(e,t){var n=me,r=dt(),a=t(),l=!wt(r.memoizedState,a);if(l&&(r.memoizedState=a,Ke=!0),r=r.queue,as(zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,aa(9,Fd.bind(null,n,r,a,t),void 0,null),Ne===null)throw Error(L(349));Ln&30||Dd(n,t,a)}return a}function Dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fd(e,t,n,r){t.value=n,t.getSnapshot=r,jd(t)&&Hd(e)}function zd(e,t,n){return n(function(){jd(t)&&Hd(e)})}function jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Hd(e){var t=At(e,1);t!==null&&Et(t,e,1,-1)}function xu(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t.queue=e,e=e.dispatch=sh.bind(null,me,e),[t.memoizedState,e]}function aa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ud(){return dt().memoizedState}function qa(e,t,n,r){var a=xt();me.flags|=e,a.memoizedState=aa(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var a=dt();r=r===void 0?null:r;var l=void 0;if(_e!==null){var o=_e.memoizedState;if(l=o.destroy,r!==null&&ts(r,o.deps)){a.memoizedState=aa(t,n,l,r);return}}me.flags|=e,a.memoizedState=aa(1|t,n,l,r)}function Cu(e,t){return qa(8390656,8,e,t)}function as(e,t){return Al(2048,8,e,t)}function Vd(e,t){return Al(4,2,e,t)}function Wd(e,t){return Al(4,4,e,t)}function Gd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,Gd.bind(null,t,e),n)}function ls(){}function Qd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ts(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yd(e,t,n){return Ln&21?(wt(n,t)||(n=ed(),me.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function oh(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=vo.transition;vo.transition={};try{e(!1),t()}finally{oe=n,vo.transition=r}}function qd(){return dt().memoizedState}function ih(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xd(e))Zd(t,n);else if(n=bd(e,t,n,r),n!==null){var a=Ue();Et(n,e,r,a),Jd(n,t,r)}}function sh(e,t,n){var r=rn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xd(e))Zd(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,i=l(o,n);if(a.hasEagerState=!0,a.eagerState=i,wt(i,o)){var s=t.interleaved;s===null?(a.next=a,qi(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=bd(e,t,a,r),n!==null&&(a=Ue(),Et(n,e,r,a),Jd(n,t,r))}}function Xd(e){var t=e.alternate;return e===me||t!==null&&t===me}function Zd(e,t){zr=El=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ai(e,n)}}var wl={readContext:ct,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},uh={readContext:ct,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qa(4194308,4,Gd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return qa(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ih.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:ls,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=oh.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,a=xt();if(fe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ne===null)throw Error(L(349));Ln&30||Dd(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Cu(zd.bind(null,r,l,e),[e]),r.flags|=2048,aa(9,Fd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=xt(),t=Ne.identifierPrefix;if(fe){var n=bt,r=Rt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=na++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:ct,useCallback:Qd,useContext:ct,useEffect:as,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Kd,useReducer:go,useRef:Ud,useState:function(){return go(ra)},useDebugValue:ls,useDeferredValue:function(e){var t=dt();return Yd(t,_e.memoizedState,e)},useTransition:function(){var e=go(ra)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Ad,useId:qd,unstable_isNewReconciler:!1},dh={readContext:ct,useCallback:Qd,useContext:ct,useEffect:as,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Kd,useReducer:Eo,useRef:Ud,useState:function(){return Eo(ra)},useDebugValue:ls,useDeferredValue:function(e){var t=dt();return _e===null?t.memoizedState=e:Yd(t,_e.memoizedState,e)},useTransition:function(){var e=Eo(ra)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Ad,useId:qd,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ai(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dl={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),a=rn(e),l=Bt(r,a);l.payload=t,n!=null&&(l.callback=n),t=tn(e,l,a),t!==null&&(Et(t,e,a,r),Ka(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),a=rn(e),l=Bt(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=tn(e,l,a),t!==null&&(Et(t,e,a,r),Ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=rn(e),a=Bt(n,r);a.tag=2,t!=null&&(a.callback=t),t=tn(e,a,r),t!==null&&(Et(t,e,r,n),Ka(t,e,r))}};function Pu(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(a,l):!0}function ef(e,t,n){var r=!1,a=sn,l=t.contextType;return typeof l=="object"&&l!==null?l=ct(l):(a=qe(t)?Pn:ze.current,r=t.contextTypes,l=(r=r!=null)?lr(e,a):sn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dl.enqueueReplaceState(t,t.state,null)}function li(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Xi(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=ct(l):(l=qe(t)?Pn:ze.current,a.context=lr(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ai(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Dl.enqueueReplaceState(a,a.state,null),vl(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=zp(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){kl||(kl=!0,yi=r),oi(e,t)},n}function nf(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){oi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){oi(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fh;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=_h.bind(null,e,t,n),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var ph=Ft.ReactCurrentOwner,Ke=!1;function He(e,t,n,r){t.child=e===null?Rd(t,null,n,r):ir(t,e.child,n,r)}function Iu(e,t,n,r,a){n=n.render;var l=t.ref;return nr(t,a),r=ns(e,t,n,r,l,a),n=rs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Dt(e,t,a)):(fe&&n&&Wi(t),t.flags|=1,He(e,t,r,a),t.child)}function Ru(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!ps(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,rf(e,t,l,r,a)):(e=el(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(o,r)&&e.ref===t.ref)return Dt(e,t,a)}return t.flags|=1,e=an(l,r),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(qr(l,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Dt(e,t,a)}return ii(e,t,n,r,a)}function af(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Xn,Ze),Ze|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Xn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,se(Xn,Ze),Ze|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,se(Xn,Ze),Ze|=r;return He(e,t,a,n),t.child}function lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,n,r,a){var l=qe(n)?Pn:ze.current;return l=lr(t,l),nr(t,a),n=ns(e,t,n,r,l,a),r=rs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Dt(e,t,a)):(fe&&r&&Wi(t),t.flags|=1,He(e,t,n,a),t.child)}function bu(e,t,n,r,a){if(qe(n)){var l=!0;fl(t)}else l=!1;if(nr(t,a),t.stateNode===null)Xa(e,t),ef(t,n,r),li(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=qe(n)?Pn:ze.current,u=lr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||s!==u)&&_u(t,o,r,u),Gt=!1;var m=t.memoizedState;o.state=m,vl(t,r,o,a),s=t.memoizedState,i!==r||m!==s||Ye.current||Gt?(typeof f=="function"&&(ai(t,n,f,r),s=t.memoizedState),(i=Gt||Pu(t,n,i,r,m,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Bd(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:mt(t.type,i),o.props=u,d=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ct(s):(s=qe(n)?Pn:ze.current,s=lr(t,s));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==d||m!==s)&&_u(t,o,r,s),Gt=!1,m=t.memoizedState,o.state=m,vl(t,r,o,a);var S=t.memoizedState;i!==d||m!==S||Ye.current||Gt?(typeof E=="function"&&(ai(t,n,E,r),S=t.memoizedState),(u=Gt||Pu(t,n,u,r,m,S,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return si(e,t,n,r,l,a)}function si(e,t,n,r,a,l){lf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&vu(t,n,!1),Dt(e,t,l);r=t.stateNode,ph.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ir(t,e.child,null,l),t.child=ir(t,null,i,l)):He(e,t,i,l),t.memoizedState=r.state,a&&vu(t,n,!0),t.child}function of(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),Zi(e,t.containerInfo)}function Bu(e,t,n,r,a){return or(),$i(a),t.flags|=256,He(e,t,n,r),t.child}var ui={dehydrated:null,treeContext:null,retryLane:0};function ci(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,n){var r=t.pendingProps,a=pe.current,l=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),se(pe,a&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=jl(o,r,0,null),e=Cn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ci(n),t.memoizedState=ui,e):os(t,o));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return mh(e,t,o,r,i,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,i=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=an(a,s),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=an(i,l):(l=Cn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ci(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ui,r}return l=e.child,e=l.sibling,r=an(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function os(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fa(e,t,n,r){return r!==null&&$i(r),ir(t,e.child,null,n),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=wo(Error(L(422))),Fa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=jl({mode:"visible",children:r.children},a,0,null),l=Cn(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&ir(t,e.child,null,o),t.child.memoizedState=ci(o),t.memoizedState=ui,l);if(!(t.mode&1))return Fa(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(L(419)),r=wo(l,r,void 0),Fa(e,t,o,r)}if(i=(o&e.childLanes)!==0,Ke||i){if(r=Ne,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,At(e,a),Et(r,e,a,-1))}return fs(),r=wo(Error(L(421))),Fa(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Lh.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,et=en(a.nextSibling),tt=t,fe=!0,vt=null,e!==null&&(ot[it++]=Rt,ot[it++]=bt,ot[it++]=_n,Rt=e.id,bt=e.overflow,_n=t),t=os(t,r.children),t.flags|=4096,t)}function Ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ri(e.return,t,n)}function So(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function uf(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(He(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,n,t);else if(e.tag===19)Ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(pe,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&gl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),So(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&gl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}So(t,!0,n,null,l);break;case"together":So(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hh(e,t,n){switch(t.tag){case 3:of(t),or();break;case 5:Od(t);break;case 1:qe(t.type)&&fl(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;se(hl,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?sf(e,t,n):(se(pe,pe.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,af(e,t,n)}return Dt(e,t,n)}var cf,di,df,ff;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};di=function(){};df=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Sn(_t.current);var l=null;switch(n){case"input":a=Bo(e,a),r=Bo(e,r),l=[];break;case"select":a=he({},a,{value:void 0}),r=he({},r,{value:void 0}),l=[];break;case"textarea":a=Ao(e,a),r=Ao(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}Fo(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&i[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),l||i===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yh(e,t,n){var r=t.pendingProps;switch(Gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return qe(t.type)&&dl(),De(t),null;case 3:return r=t.stateNode,sr(),ce(Ye),ce(ze),es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Ei(vt),vt=null))),di(e,t),De(t),null;case 5:Ji(t);var a=Sn(ta.current);if(n=t.type,e!==null&&t.stateNode!=null)df(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return De(t),null}if(e=Sn(_t.current),Aa(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ct]=t,r[Jr]=l,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(a=0;a<br.length;a++)ue(br[a],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Vs(r,l),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ue("invalid",r);break;case"textarea":Gs(r,l),ue("invalid",r)}Fo(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Ma(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Ma(r.textContent,i,e),a=["children",""+i]):Vr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":La(r),Ws(r,l,!0);break;case"textarea":La(r),$s(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=cl)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ct]=t,e[Jr]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(o=zo(n,r),n){case"dialog":ue("cancel",e),ue("close",e),a=r;break;case"iframe":case"object":case"embed":ue("load",e),a=r;break;case"video":case"audio":for(a=0;a<br.length;a++)ue(br[a],e);a=r;break;case"source":ue("error",e),a=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),a=r;break;case"details":ue("toggle",e),a=r;break;case"input":Vs(e,r),a=Bo(e,r),ue("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=he({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Gs(e,r),a=Ao(e,r),ue("invalid",e);break;default:a=r}Fo(n,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="style"?Uc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&jc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Wr(e,s):typeof s=="number"&&Wr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Vr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ue("scroll",e):s!=null&&Ii(e,l,s,o))}switch(n){case"input":La(e),Ws(e,r,!1);break;case"textarea":La(e),$s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Zn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Sn(ta.current),Sn(_t.current),Aa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(l=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Ma(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return De(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&et!==null&&t.mode&1&&!(t.flags&128))Nd(),or(),t.flags|=98560,l=!1;else if(l=Aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(L(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(L(317));l[Ct]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),l=!1}else vt!==null&&(Ei(vt),vt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Le===0&&(Le=3):fs())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return sr(),di(e,t),e===null&&Xr(t.stateNode.containerInfo),De(t),null;case 10:return Yi(t.type._context),De(t),null;case 17:return qe(t.type)&&dl(),De(t),null;case 19:if(ce(pe),l=t.memoizedState,l===null)return De(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Cr(l,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=gl(e),o!==null){for(t.flags|=128,Cr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),t.child}e=e.sibling}l.tail!==null&&ke()>cr&&(t.flags|=128,r=!0,Cr(l,!1),t.lanes=4194304)}else{if(!r)if(e=gl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!fe)return De(t),null}else 2*ke()-l.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Cr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ke(),t.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function vh(e,t){switch(Gi(t),t.tag){case 1:return qe(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),ce(Ye),ce(ze),es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return sr(),null;case 10:return Yi(t.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var za=!1,Fe=!1,gh=typeof WeakSet=="function"?WeakSet:Set,M=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function fi(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var Mu=!1;function Eh(e,t){if(Yo=il,e=yd(),Vi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,i=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var E;d!==n||a!==0&&d.nodeType!==3||(i=o+a),d!==l||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(E=d.firstChild)!==null;)m=d,d=E;for(;;){if(d===e)break t;if(m===n&&++u===a&&(i=o),m===l&&++f===r&&(s=o),(E=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=E}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(qo={focusedElem:e,selectionRange:n},il=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,I=S.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?k:mt(t.type,k),I);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(x){Ee(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return S=Mu,Mu=!1,S}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&fi(t,n,l)}a=a.next}while(a!==r)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Jr],delete t[Jo],delete t[th],delete t[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mf(e){return e.tag===5||e.tag===3||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}function hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hi(e,t,n),e=e.sibling;e!==null;)hi(e,t,n),e=e.sibling}var be=null,ht=!1;function Ut(e,t,n){for(n=n.child;n!==null;)hf(e,t,n),n=n.sibling}function hf(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:Fe||qn(n,t);case 6:var r=be,a=ht;be=null,Ut(e,t,n),be=r,ht=a,be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?mo(e.parentNode,n):e.nodeType===1&&mo(e,n),Kr(e)):mo(be,n.stateNode));break;case 4:r=be,a=ht,be=n.stateNode.containerInfo,ht=!0,Ut(e,t,n),be=r,ht=a;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&fi(n,t,o),a=a.next}while(a!==r)}Ut(e,t,n);break;case 1:if(!Fe&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Ee(n,t,i)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Ut(e,t,n),Fe=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function Du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gh),t.forEach(function(r){var a=Th.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:be=i.stateNode,ht=!1;break e;case 3:be=i.stateNode.containerInfo,ht=!0;break e;case 4:be=i.stateNode.containerInfo,ht=!0;break e}i=i.return}if(be===null)throw Error(L(160));hf(l,o,a),be=null,ht=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){Ee(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}function yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),kt(e),r&4){try{jr(3,e,e.return),Fl(3,e)}catch(k){Ee(e,e.return,k)}try{jr(5,e,e.return)}catch(k){Ee(e,e.return,k)}}break;case 1:ft(t,e),kt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(ft(t,e),kt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var a=e.stateNode;try{Wr(a,"")}catch(k){Ee(e,e.return,k)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Dc(a,l),zo(i,o);var u=zo(i,l);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?Uc(a,d):f==="dangerouslySetInnerHTML"?jc(a,d):f==="children"?Wr(a,d):Ii(a,f,d,u)}switch(i){case"input":Oo(a,l);break;case"textarea":Fc(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?Zn(a,!!l.multiple,E,!1):m!==!!l.multiple&&(l.defaultValue!=null?Zn(a,!!l.multiple,l.defaultValue,!0):Zn(a,!!l.multiple,l.multiple?[]:"",!1))}a[Jr]=l}catch(k){Ee(e,e.return,k)}}break;case 6:if(ft(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(L(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(k){Ee(e,e.return,k)}}break;case 3:if(ft(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(k){Ee(e,e.return,k)}break;case 4:ft(t,e),kt(e);break;case 13:ft(t,e),kt(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(us=ke())),r&4&&Du(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||f,ft(t,e),Fe=u):ft(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(d=M=f;M!==null;){switch(m=M,E=m.child,m.tag){case 0:case 11:case 14:case 15:jr(4,m,m.return);break;case 1:qn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){Ee(r,n,k)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){zu(d);continue}}E!==null?(E.return=m,M=E):zu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Hc("display",o))}catch(k){Ee(e,e.return,k)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(k){Ee(e,e.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(t,e),kt(e),r&4&&Du(e);break;case 21:break;default:ft(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mf(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Wr(a,""),r.flags&=-33);var l=Au(e);hi(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Au(e);mi(e,i,o);break;default:throw Error(L(161))}}catch(s){Ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wh(e,t,n){M=e,vf(e)}function vf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var a=M,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||za;if(!o){var i=a.alternate,s=i!==null&&i.memoizedState!==null||Fe;i=za;var u=Fe;if(za=o,(Fe=s)&&!u)for(M=a;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?ju(a):s!==null?(s.return=o,M=s):ju(a);for(;l!==null;)M=l,vf(l),l=l.sibling;M=a,za=i,Fe=u}Fu(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,M=l):Fu(e)}}function Fu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||Fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ku(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ku(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Kr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Fe||t.flags&512&&pi(t)}catch(m){Ee(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function zu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function ju(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(s){Ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){Ee(t,a,s)}}var l=t.return;try{pi(t)}catch(s){Ee(t,l,s)}break;case 5:var o=t.return;try{pi(t)}catch(s){Ee(t,o,s)}}}catch(s){Ee(t,t.return,s)}if(t===e){M=null;break}var i=t.sibling;if(i!==null){i.return=t.return,M=i;break}M=t.return}}var Sh=Math.ceil,Sl=Ft.ReactCurrentDispatcher,is=Ft.ReactCurrentOwner,ut=Ft.ReactCurrentBatchConfig,X=0,Ne=null,Ce=null,Be=0,Ze=0,Xn=cn(0),Le=0,la=null,Tn=0,zl=0,ss=0,Hr=null,Qe=null,us=0,cr=1/0,Nt=null,kl=!1,yi=null,nn=null,ja=!1,Yt=null,xl=0,Ur=0,vi=null,Za=-1,Ja=0;function Ue(){return X&6?ke():Za!==-1?Za:Za=ke()}function rn(e){return e.mode&1?X&2&&Be!==0?Be&-Be:ah.transition!==null?(Ja===0&&(Ja=ed()),Ja):(e=oe,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function Et(e,t,n,r){if(50<Ur)throw Ur=0,vi=null,Error(L(185));ca(e,n,r),(!(X&2)||e!==Ne)&&(e===Ne&&(!(X&2)&&(zl|=n),Le===4&&Qt(e,Be)),Xe(e,r),n===1&&X===0&&!(t.mode&1)&&(cr=ke()+500,Ml&&dn()))}function Xe(e,t){var n=e.callbackNode;am(e,t);var r=ol(e,e===Ne?Be:0);if(r===0)n!==null&&Ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ys(n),t===1)e.tag===0?rh(Hu.bind(null,e)):_d(Hu.bind(null,e)),Jm(function(){!(X&6)&&dn()}),n=null;else{switch(td(r)){case 1:n=Mi;break;case 4:n=Zc;break;case 16:n=ll;break;case 536870912:n=Jc;break;default:n=ll}n=Pf(n,gf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gf(e,t){if(Za=-1,Ja=0,X&6)throw Error(L(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=ol(e,e===Ne?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cl(e,r);else{t=r;var a=X;X|=2;var l=wf();(Ne!==e||Be!==t)&&(Nt=null,cr=ke()+500,xn(e,t));do try{Ch();break}catch(i){Ef(e,i)}while(!0);Ki(),Sl.current=l,X=a,Ce!==null?t=0:(Ne=null,Be=0,t=Le)}if(t!==0){if(t===2&&(a=Wo(e),a!==0&&(r=a,t=gi(e,a))),t===1)throw n=la,xn(e,0),Qt(e,r),Xe(e,ke()),n;if(t===6)Qt(e,r);else{if(a=e.current.alternate,!(r&30)&&!kh(a)&&(t=Cl(e,r),t===2&&(l=Wo(e),l!==0&&(r=l,t=gi(e,l))),t===1))throw n=la,xn(e,0),Qt(e,r),Xe(e,ke()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:yn(e,Qe,Nt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=us+500-ke(),10<t)){if(ol(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Zo(yn.bind(null,e,Qe,Nt),t);break}yn(e,Qe,Nt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-gt(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sh(r/1960))-r,10<r){e.timeoutHandle=Zo(yn.bind(null,e,Qe,Nt),r);break}yn(e,Qe,Nt);break;case 5:yn(e,Qe,Nt);break;default:throw Error(L(329))}}}return Xe(e,ke()),e.callbackNode===n?gf.bind(null,e):null}function gi(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Cl(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Ei(t)),e}function Ei(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function kh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!wt(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ss,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(X&6)throw Error(L(327));rr();var t=ol(e,0);if(!(t&1))return Xe(e,ke()),null;var n=Cl(e,t);if(e.tag!==0&&n===2){var r=Wo(e);r!==0&&(t=r,n=gi(e,r))}if(n===1)throw n=la,xn(e,0),Qt(e,t),Xe(e,ke()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Qe,Nt),Xe(e,ke()),null}function cs(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(cr=ke()+500,Ml&&dn())}}function Nn(e){Yt!==null&&Yt.tag===0&&!(X&6)&&rr();var t=X;X|=1;var n=ut.transition,r=oe;try{if(ut.transition=null,oe=1,e)return e()}finally{oe=r,ut.transition=n,X=t,!(X&6)&&dn()}}function ds(){Ze=Xn.current,ce(Xn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zm(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Gi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:sr(),ce(Ye),ce(ze),es();break;case 5:Ji(r);break;case 4:sr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:Yi(r.type._context);break;case 22:case 23:ds()}n=n.return}if(Ne=e,Ce=e=an(e.current,null),Be=Ze=t,Le=0,la=null,ss=zl=Tn=0,Qe=Hr=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}wn=null}return e}function Ef(e,t){do{var n=Ce;try{if(Ki(),Ya.current=wl,El){for(var r=me.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}El=!1}if(Ln=0,Te=_e=me=null,zr=!1,na=0,is.current=null,n===null||n.return===null){Le=1,la=t,Ce=null;break}e:{var l=e,o=n.return,i=n,s=t;if(t=Be,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=i,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=Tu(o);if(E!==null){E.flags&=-257,Nu(E,o,i,l,t),E.mode&1&&Lu(l,u,t),t=E,s=u;var S=t.updateQueue;if(S===null){var k=new Set;k.add(s),t.updateQueue=k}else S.add(s);break e}else{if(!(t&1)){Lu(l,u,t),fs();break e}s=Error(L(426))}}else if(fe&&i.mode&1){var I=Tu(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Nu(I,o,i,l,t),$i(ur(s,i));break e}}l=s=ur(s,i),Le!==4&&(Le=2),Hr===null?Hr=[l]:Hr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=tf(l,s,t);Su(l,h);break e;case 1:i=s;var c=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nn===null||!nn.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=nf(l,i,t);Su(l,x);break e}}l=l.return}while(l!==null)}kf(n)}catch(N){t=N,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function wf(){var e=Sl.current;return Sl.current=wl,e===null?wl:e}function fs(){(Le===0||Le===3||Le===2)&&(Le=4),Ne===null||!(Tn&268435455)&&!(zl&268435455)||Qt(Ne,Be)}function Cl(e,t){var n=X;X|=2;var r=wf();(Ne!==e||Be!==t)&&(Nt=null,xn(e,t));do try{xh();break}catch(a){Ef(e,a)}while(!0);if(Ki(),X=n,Sl.current=r,Ce!==null)throw Error(L(261));return Ne=null,Be=0,Le}function xh(){for(;Ce!==null;)Sf(Ce)}function Ch(){for(;Ce!==null&&!Yp();)Sf(Ce)}function Sf(e){var t=Cf(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?kf(e):Ce=t,is.current=null}function kf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vh(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ce=null;return}}else if(n=yh(n,t,Ze),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Le===0&&(Le=5)}function yn(e,t,n){var r=oe,a=ut.transition;try{ut.transition=null,oe=1,Ph(e,t,n,r)}finally{ut.transition=a,oe=r}return null}function Ph(e,t,n,r){do rr();while(Yt!==null);if(X&6)throw Error(L(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(lm(e,l),e===Ne&&(Ce=Ne=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,Pf(ll,function(){return rr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ut.transition,ut.transition=null;var o=oe;oe=1;var i=X;X|=4,is.current=null,Eh(e,n),yf(n,e),Gm(qo),il=!!Yo,qo=Yo=null,e.current=n,wh(n),qp(),X=i,oe=o,ut.transition=l}else e.current=n;if(ja&&(ja=!1,Yt=e,xl=a),l=e.pendingLanes,l===0&&(nn=null),Jp(n.stateNode),Xe(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(kl)throw kl=!1,e=yi,yi=null,e;return xl&1&&e.tag!==0&&rr(),l=e.pendingLanes,l&1?e===vi?Ur++:(Ur=0,vi=e):Ur=0,dn(),null}function rr(){if(Yt!==null){var e=td(xl),t=ut.transition,n=oe;try{if(ut.transition=null,oe=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,xl=0,X&6)throw Error(L(331));var a=X;for(X|=4,M=e.current;M!==null;){var l=M,o=l.child;if(M.flags&16){var i=l.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:jr(8,f,l)}var d=f.child;if(d!==null)d.return=f,M=d;else for(;M!==null;){f=M;var m=f.sibling,E=f.return;if(pf(f),f===u){M=null;break}if(m!==null){m.return=E,M=m;break}M=E}}}var S=l.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}M=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,M=o;else e:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:jr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,M=h;break e}M=l.return}}var c=e.current;for(M=c;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=c;M!==null;){if(i=M,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Fl(9,i)}}catch(N){Ee(i,i.return,N)}if(i===o){M=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,M=x;break e}M=i.return}}if(X=a,dn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Il,e)}catch{}r=!0}return r}finally{oe=n,ut.transition=t}}return!1}function Uu(e,t,n){t=ur(n,t),t=tf(e,t,1),e=tn(e,t,1),t=Ue(),e!==null&&(ca(e,1,t),Xe(e,t))}function Ee(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=ur(n,e),e=nf(t,e,1),t=tn(t,e,1),e=Ue(),t!==null&&(ca(t,1,e),Xe(t,e));break}}t=t.return}}function _h(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Be&n)===n&&(Le===4||Le===3&&(Be&130023424)===Be&&500>ke()-us?xn(e,0):ss|=n),Xe(e,t)}function xf(e,t){t===0&&(e.mode&1?(t=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):t=1);var n=Ue();e=At(e,t),e!==null&&(ca(e,t,n),Xe(e,n))}function Lh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xf(e,n)}function Th(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),xf(e,n)}var Cf;Cf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,hh(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,fe&&t.flags&1048576&&Ld(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xa(e,t),e=t.pendingProps;var a=lr(t,ze.current);nr(t,n),a=ns(null,t,r,e,a,n);var l=rs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(l=!0,fl(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Xi(t),a.updater=Dl,t.stateNode=a,a._reactInternals=t,li(t,r,e,n),t=si(null,t,r,!0,l,n)):(t.tag=0,fe&&l&&Wi(t),He(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xa(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Ih(r),e=mt(r,e),a){case 0:t=ii(null,t,r,e,n);break e;case 1:t=bu(null,t,r,e,n);break e;case 11:t=Iu(null,t,r,e,n);break e;case 14:t=Ru(null,t,r,mt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),ii(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),bu(e,t,r,a,n);case 3:e:{if(of(t),e===null)throw Error(L(387));r=t.pendingProps,l=t.memoizedState,a=l.element,Bd(e,t),vl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=ur(Error(L(423)),t),t=Bu(e,t,r,n,a);break e}else if(r!==a){a=ur(Error(L(424)),t),t=Bu(e,t,r,n,a);break e}else for(et=en(t.stateNode.containerInfo.firstChild),tt=t,fe=!0,vt=null,n=Rd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===a){t=Dt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Od(t),e===null&&ni(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Xo(r,a)?o=null:l!==null&&Xo(r,l)&&(t.flags|=32),lf(e,t),He(e,t,o,n),t.child;case 6:return e===null&&ni(t),null;case 13:return sf(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),Iu(e,t,r,a,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,se(hl,r._currentValue),r._currentValue=o,l!==null)if(wt(l.value,o)){if(l.children===a.children&&!Ye.current){t=Dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ri(l.return,n,t),i.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(L(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),ri(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nr(t,n),a=ct(a),r=r(a),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,a=mt(r,t.pendingProps),a=mt(r.type,a),Ru(e,t,r,a,n);case 15:return rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),Xa(e,t),t.tag=1,qe(r)?(e=!0,fl(t)):e=!1,nr(t,n),ef(t,r,a),li(t,r,a,n),si(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return af(e,t,n)}throw Error(L(156,t.tag))};function Pf(e,t){return Xc(e,t)}function Nh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Nh(e,t,n,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ih(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bi)return 11;if(e===Bi)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")ps(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hn:return Cn(n.children,a,l,t);case Ri:o=8,a|=8;break;case No:return e=st(12,n,t,a|2),e.elementType=No,e.lanes=l,e;case Io:return e=st(13,n,t,a),e.elementType=Io,e.lanes=l,e;case Ro:return e=st(19,n,t,a),e.elementType=Ro,e.lanes=l,e;case Oc:return jl(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bc:o=10;break e;case Bc:o=9;break e;case bi:o=11;break e;case Bi:o=14;break e;case Wt:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=st(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function Cn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function jl(e,t,n,r){return e=st(22,e,r,t),e.elementType=Oc,e.lanes=n,e.stateNode={isHidden:!1},e}function ko(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function xo(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ms(e,t,n,r,a,l,o,i,s){return e=new Rh(e,t,n,i,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=st(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(l),e}function bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _f(e){if(!e)return sn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(qe(n))return Pd(e,n,t)}return t}function Lf(e,t,n,r,a,l,o,i,s){return e=ms(n,r,!0,e,a,l,o,i,s),e.context=_f(null),n=e.current,r=Ue(),a=rn(n),l=Bt(r,a),l.callback=t??null,tn(n,l,a),e.current.lanes=a,ca(e,a,r),Xe(e,r),e}function Hl(e,t,n,r){var a=t.current,l=Ue(),o=rn(a);return n=_f(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(a,t,o),e!==null&&(Et(e,a,o,l),Ka(e,a,o)),o}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hs(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}function Bh(){return null}var Tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ys(e){this._internalRoot=e}Ul.prototype.render=ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Hl(e,t,null,null)};Ul.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){Hl(null,e,null,null)}),t[Mt]=null}};function Ul(e){this._internalRoot=e}Ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&od(e)}};function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Oh(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=Pl(o);l.call(u)}}var o=Lf(t,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=o,e[Mt]=o.current,Xr(e.nodeType===8?e.parentNode:e),Nn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=Pl(s);i.call(u)}}var s=ms(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Mt]=s.current,Xr(e.nodeType===8?e.parentNode:e),Nn(function(){Hl(t,s,n,r)}),s}function Wl(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var i=a;a=function(){var s=Pl(o);i.call(s)}}Hl(t,o,e,a)}else o=Oh(n,t,e,a,r);return Pl(o)}nd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(Ai(t,n|1),Xe(t,ke()),!(X&6)&&(cr=ke()+500,dn()))}break;case 13:Nn(function(){var r=At(e,1);if(r!==null){var a=Ue();Et(r,e,1,a)}}),hs(e,1)}};Di=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ue();Et(t,e,134217728,n)}hs(e,134217728)}};rd=function(e){if(e.tag===13){var t=rn(e),n=At(e,t);if(n!==null){var r=Ue();Et(n,e,t,r)}hs(e,t)}};ad=function(){return oe};ld=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Ho=function(e,t,n){switch(t){case"input":if(Oo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ol(r);if(!a)throw Error(L(90));Ac(r),Oo(r,a)}}}break;case"textarea":Fc(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Gc=cs;$c=Nn;var Mh={usingClientEntryPoint:!1,Events:[fa,Gn,Ol,Vc,Wc,cs]},Pr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ah={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||Bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{Il=Ha.inject(Ah),Pt=Ha}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mh;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vs(t))throw Error(L(200));return bh(e,t,null,n)};rt.createRoot=function(e,t){if(!vs(e))throw Error(L(299));var n=!1,r="",a=Tf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ms(e,1,!1,null,null,n,!1,r,a),e[Mt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new ys(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Yc(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return Nn(e)};rt.hydrate=function(e,t,n){if(!Vl(t))throw Error(L(200));return Wl(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!vs(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=Tf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,a,!1,l,o),e[Mt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ul(t)};rt.render=function(e,t,n){if(!Vl(t))throw Error(L(200));return Wl(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(L(40));return e._reactRootContainer?(Nn(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};rt.unstable_batchedUpdates=cs;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Wl(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function Nf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nf)}catch(e){console.error(e)}}Nf(),Tc.exports=rt;var gs=Tc.exports;const Dh=yc(gs),Fh=hc({__proto__:null,default:Dh},[gs]);var Gu=gs;Lo.createRoot=Gu.createRoot,Lo.hydrateRoot=Gu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}var Se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Se||(Se={}));const $u="popstate";function zh(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:o,hash:i}=r.location;return oa("",{pathname:l,search:o,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:ma(a)}return Hh(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function In(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jh(){return Math.random().toString(36).substr(2,8)}function Qu(e,t){return{usr:e.state,key:e.key,idx:t}}function oa(e,t,n,r){return n===void 0&&(n=null),de({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zt(t):t,{state:n,key:t&&t.key||r||jh()})}function ma(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hh(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,o=a.history,i=Se.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(de({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){i=Se.Pop;let I=f(),h=I==null?null:I-u;u=I,s&&s({action:i,location:k.location,delta:h})}function m(I,h){i=Se.Push;let c=oa(k.location,I,h);u=f()+1;let y=Qu(c,u),x=k.createHref(c);try{o.pushState(y,"",x)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(x)}l&&s&&s({action:i,location:k.location,delta:1})}function E(I,h){i=Se.Replace;let c=oa(k.location,I,h);u=f();let y=Qu(c,u),x=k.createHref(c);o.replaceState(y,"",x),l&&s&&s({action:i,location:k.location,delta:0})}function S(I){let h=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof I=="string"?I:ma(I);return c=c.replace(/ $/,"%20"),Q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let k={get action(){return i},get location(){return e(a,o)},listen(I){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener($u,d),s=I,()=>{a.removeEventListener($u,d),s=null}},createHref(I){return t(a,I)},createURL:S,encodeLocation(I){let h=S(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:E,go(I){return o.go(I)}};return k}var le;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(le||(le={}));const Uh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Vh(e){return e.index===!0}function _l(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,l)=>{let o=[...n,String(l)],i=typeof a.id=="string"?a.id:o.join("-");if(Q(a.index!==!0||!a.children,"Cannot specify children on an index route"),Q(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),Vh(a)){let s=de({},a,t(a),{id:i});return r[i]=s,s}else{let s=de({},a,t(a),{id:i,children:void 0});return r[i]=s,a.children&&(s.children=_l(a.children,t,o,r)),s}})}function vn(e,t,n){return n===void 0&&(n="/"),tl(e,t,n,!1)}function tl(e,t,n,r){let a=typeof t=="string"?zt(t):t,l=ha(a.pathname||"/",n);if(l==null)return null;let o=If(e);Gh(o);let i=null;for(let s=0;i==null&&s<o.length;++s){let u=ny(l);i=ey(o[s],u,r)}return i}function Wh(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function If(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,o,i)=>{let s={relativePath:i===void 0?l.path||"":i,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=ln([r,s.relativePath]),f=n.concat(s);l.children&&l.children.length>0&&(Q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),If(l.children,t,f,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Zh(u,l.index),routesMeta:f})};return e.forEach((l,o)=>{var i;if(l.path===""||!((i=l.path)!=null&&i.includes("?")))a(l,o);else for(let s of Rf(l.path))a(l,o,s)}),t}function Rf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let o=Rf(r.join("/")),i=[];return i.push(...o.map(s=>s===""?l:[l,s].join("/"))),a&&i.push(...o),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $h=/^:[\w-]+$/,Qh=3,Kh=2,Yh=1,qh=10,Xh=-2,Ku=e=>e==="*";function Zh(e,t){let n=e.split("/"),r=n.length;return n.some(Ku)&&(r+=Xh),t&&(r+=Kh),n.filter(a=>!Ku(a)).reduce((a,l)=>a+($h.test(l)?Qh:l===""?Yh:qh),r)}function Jh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function ey(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},l="/",o=[];for(let i=0;i<r.length;++i){let s=r[i],u=i===r.length-1,f=l==="/"?t:t.slice(l.length)||"/",d=Yu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Yu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(a,d.params),o.push({params:a,pathname:ln([l,d.pathname]),pathnameBase:oy(ln([l,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(l=ln([l,d.pathnameBase]))}return o}function Yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ty(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],o=l.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:E}=f;if(m==="*"){let k=i[d]||"";o=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const S=i[d];return E&&!S?u[m]=void 0:u[m]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function ty(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),In(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function ny(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return In(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ha(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ay=e=>ry.test(e);function ly(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?zt(e):e,l;if(n)if(ay(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),In(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=qu(n.substring(1),"/"):l=qu(n,t)}else l=t;return{pathname:l,search:iy(r),hash:sy(a)}}function qu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Co(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Es(e,t){let n=bf(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ws(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=zt(e):(a=de({},e),Q(!a.pathname||!a.pathname.includes("?"),Co("?","pathname","search",a)),Q(!a.pathname||!a.pathname.includes("#"),Co("#","pathname","hash",a)),Q(!a.search||!a.search.includes("#"),Co("#","search","hash",a)));let l=e===""||a.pathname==="",o=l?"/":a.pathname,i;if(o==null)i=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;a.pathname=m.join("/")}i=d>=0?t[d]:"/"}let s=ly(a,i),u=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const ln=e=>e.join("/").replace(/\/\/+/g,"/"),oy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ll{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ia(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bf=["post","put","patch","delete"],uy=new Set(Bf),cy=["get",...Bf],dy=new Set(cy),fy=new Set([301,302,303,307,308]),py=new Set([307,308]),Po={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},my={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_r={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ss=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hy=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Of="remix-router-transitions";function yy(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let p=e.detectErrorBoundary;a=g=>({hasErrorBoundary:p(g)})}else a=hy;let l={},o=_l(e.routes,a,void 0,l),i,s=e.basename||"/",u=e.dataStrategy||wy,f=e.patchRoutesOnNavigation,d=de({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,E=new Set,S=null,k=null,I=null,h=e.hydrationData!=null,c=vn(o,e.history.location,s),y=!1,x=null;if(c==null&&!f){let p=$e(404,{pathname:e.history.location.pathname}),{matches:g,route:w}=ic(o);c=g,x={[w.id]:p}}c&&!e.hydrationData&&Sa(c,o,e.history.location.pathname).active&&(c=null);let N;if(c)if(c.some(p=>p.route.lazy))N=!1;else if(!c.some(p=>p.route.loader))N=!0;else if(d.v7_partialHydration){let p=e.hydrationData?e.hydrationData.loaderData:null,g=e.hydrationData?e.hydrationData.errors:null;if(g){let w=c.findIndex(C=>g[C.route.id]!==void 0);N=c.slice(0,w+1).every(C=>!Si(C.route,p,g))}else N=c.every(w=>!Si(w.route,p,g))}else N=e.hydrationData!=null;else if(N=!1,c=[],d.v7_partialHydration){let p=Sa(null,o,e.history.location.pathname);p.active&&p.matches&&(y=!0,c=p.matches)}let O,v={historyAction:e.history.action,location:e.history.location,matches:c,initialized:N,navigation:Po,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},P=Se.Pop,U=!1,b,ee=!1,ae=new Map,W=null,q=!1,re=!1,we=[],Ge=new Set,T=new Map,j=0,V=-1,Z=new Map,te=new Set,Ie=new Map,Me=new Map,Pe=new Set,ye=new Map,lt=new Map,ga;function Qf(){if(m=e.history.listen(p=>{let{action:g,location:w,delta:C}=p;if(ga){ga(),ga=void 0;return}In(lt.size===0||C!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=Bs({currentLocation:v.location,nextLocation:w,historyAction:g});if(B&&C!=null){let H=new Promise(G=>{ga=G});e.history.go(C*-1),wa(B,{state:"blocked",location:w,proceed(){wa(B,{state:"proceeding",proceed:void 0,reset:void 0,location:w}),H.then(()=>e.history.go(C))},reset(){let G=new Map(v.blockers);G.set(B,_r),je({blockers:G})}});return}return fn(g,w)}),n){Oy(t,ae);let p=()=>My(t,ae);t.addEventListener("pagehide",p),W=()=>t.removeEventListener("pagehide",p)}return v.initialized||fn(Se.Pop,v.location,{initialHydration:!0}),O}function Kf(){m&&m(),W&&W(),E.clear(),b&&b.abort(),v.fetchers.forEach((p,g)=>Ea(g)),v.blockers.forEach((p,g)=>bs(g))}function Yf(p){return E.add(p),()=>E.delete(p)}function je(p,g){g===void 0&&(g={}),v=de({},v,p);let w=[],C=[];d.v7_fetcherPersist&&v.fetchers.forEach((B,H)=>{B.state==="idle"&&(Pe.has(H)?C.push(H):w.push(H))}),Pe.forEach(B=>{!v.fetchers.has(B)&&!T.has(B)&&C.push(B)}),[...E].forEach(B=>B(v,{deletedFetchers:C,viewTransitionOpts:g.viewTransitionOpts,flushSync:g.flushSync===!0})),d.v7_fetcherPersist?(w.forEach(B=>v.fetchers.delete(B)),C.forEach(B=>Ea(B))):C.forEach(B=>Pe.delete(B))}function On(p,g,w){var C,B;let{flushSync:H}=w===void 0?{}:w,G=v.actionData!=null&&v.navigation.formMethod!=null&&yt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((C=p.state)==null?void 0:C._isRedirect)!==!0,D;g.actionData?Object.keys(g.actionData).length>0?D=g.actionData:D=null:G?D=v.actionData:D=null;let F=g.loaderData?lc(v.loaderData,g.loaderData,g.matches||[],g.errors):v.loaderData,A=v.blockers;A.size>0&&(A=new Map(A),A.forEach((Y,Re)=>A.set(Re,_r)));let z=U===!0||v.navigation.formMethod!=null&&yt(v.navigation.formMethod)&&((B=p.state)==null?void 0:B._isRedirect)!==!0;i&&(o=i,i=void 0),q||P===Se.Pop||(P===Se.Push?e.history.push(p,p.state):P===Se.Replace&&e.history.replace(p,p.state));let $;if(P===Se.Pop){let Y=ae.get(v.location.pathname);Y&&Y.has(p.pathname)?$={currentLocation:v.location,nextLocation:p}:ae.has(p.pathname)&&($={currentLocation:p,nextLocation:v.location})}else if(ee){let Y=ae.get(v.location.pathname);Y?Y.add(p.pathname):(Y=new Set([p.pathname]),ae.set(v.location.pathname,Y)),$={currentLocation:v.location,nextLocation:p}}je(de({},g,{actionData:D,loaderData:F,historyAction:P,location:p,initialized:!0,navigation:Po,revalidation:"idle",restoreScrollPosition:Ms(p,g.matches||v.matches),preventScrollReset:z,blockers:A}),{viewTransitionOpts:$,flushSync:H===!0}),P=Se.Pop,U=!1,ee=!1,q=!1,re=!1,we=[]}async function Ps(p,g){if(typeof p=="number"){e.history.go(p);return}let w=wi(v.location,v.matches,s,d.v7_prependBasename,p,d.v7_relativeSplatPath,g==null?void 0:g.fromRouteId,g==null?void 0:g.relative),{path:C,submission:B,error:H}=Xu(d.v7_normalizeFormMethod,!1,w,g),G=v.location,D=oa(v.location,C,g&&g.state);D=de({},D,e.history.encodeLocation(D));let F=g&&g.replace!=null?g.replace:void 0,A=Se.Push;F===!0?A=Se.Replace:F===!1||B!=null&&yt(B.formMethod)&&B.formAction===v.location.pathname+v.location.search&&(A=Se.Replace);let z=g&&"preventScrollReset"in g?g.preventScrollReset===!0:void 0,$=(g&&g.flushSync)===!0,Y=Bs({currentLocation:G,nextLocation:D,historyAction:A});if(Y){wa(Y,{state:"blocked",location:D,proceed(){wa(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),Ps(p,g)},reset(){let Re=new Map(v.blockers);Re.set(Y,_r),je({blockers:Re})}});return}return await fn(A,D,{submission:B,pendingError:H,preventScrollReset:z,replace:g&&g.replace,enableViewTransition:g&&g.viewTransition,flushSync:$})}function qf(){if(Ql(),je({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){fn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}fn(P||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation,enableViewTransition:ee===!0})}}async function fn(p,g,w){b&&b.abort(),b=null,P=p,q=(w&&w.startUninterruptedRevalidation)===!0,op(v.location,v.matches),U=(w&&w.preventScrollReset)===!0,ee=(w&&w.enableViewTransition)===!0;let C=i||o,B=w&&w.overrideNavigation,H=w!=null&&w.initialHydration&&v.matches&&v.matches.length>0&&!y?v.matches:vn(C,g,s),G=(w&&w.flushSync)===!0;if(H&&v.initialized&&!re&&_y(v.location,g)&&!(w&&w.submission&&yt(w.submission.formMethod))){On(g,{matches:H},{flushSync:G});return}let D=Sa(H,C,g.pathname);if(D.active&&D.matches&&(H=D.matches),!H){let{error:ie,notFoundMatches:ne,route:ve}=Kl(g.pathname);On(g,{matches:ne,loaderData:{},errors:{[ve.id]:ie}},{flushSync:G});return}b=new AbortController;let F=zn(e.history,g,b.signal,w&&w.submission),A;if(w&&w.pendingError)A=[gn(H).route.id,{type:le.error,error:w.pendingError}];else if(w&&w.submission&&yt(w.submission.formMethod)){let ie=await Xf(F,g,w.submission,H,D.active,{replace:w.replace,flushSync:G});if(ie.shortCircuited)return;if(ie.pendingActionResult){let[ne,ve]=ie.pendingActionResult;if(Je(ve)&&ia(ve.error)&&ve.error.status===404){b=null,On(g,{matches:ie.matches,loaderData:{},errors:{[ne]:ve.error}});return}}H=ie.matches||H,A=ie.pendingActionResult,B=_o(g,w.submission),G=!1,D.active=!1,F=zn(e.history,F.url,F.signal)}let{shortCircuited:z,matches:$,loaderData:Y,errors:Re}=await Zf(F,g,H,D.active,B,w&&w.submission,w&&w.fetcherSubmission,w&&w.replace,w&&w.initialHydration===!0,G,A);z||(b=null,On(g,de({matches:$||H},oc(A),{loaderData:Y,errors:Re})))}async function Xf(p,g,w,C,B,H){H===void 0&&(H={}),Ql();let G=by(g,w);if(je({navigation:G},{flushSync:H.flushSync===!0}),B){let A=await ka(C,g.pathname,p.signal);if(A.type==="aborted")return{shortCircuited:!0};if(A.type==="error"){let z=gn(A.partialMatches).route.id;return{matches:A.partialMatches,pendingActionResult:[z,{type:le.error,error:A.error}]}}else if(A.matches)C=A.matches;else{let{notFoundMatches:z,error:$,route:Y}=Kl(g.pathname);return{matches:z,pendingActionResult:[Y.id,{type:le.error,error:$}]}}}let D,F=Br(C,g);if(!F.route.action&&!F.route.lazy)D={type:le.error,error:$e(405,{method:p.method,pathname:g.pathname,routeId:F.route.id})};else if(D=(await mr("action",v,p,[F],C,null))[F.route.id],p.signal.aborted)return{shortCircuited:!0};if(kn(D)){let A;return H&&H.replace!=null?A=H.replace:A=nc(D.response.headers.get("Location"),new URL(p.url),s)===v.location.pathname+v.location.search,await pn(p,D,!0,{submission:w,replace:A}),{shortCircuited:!0}}if(qt(D))throw $e(400,{type:"defer-action"});if(Je(D)){let A=gn(C,F.route.id);return(H&&H.replace)!==!0&&(P=Se.Push),{matches:C,pendingActionResult:[A.route.id,D]}}return{matches:C,pendingActionResult:[F.route.id,D]}}async function Zf(p,g,w,C,B,H,G,D,F,A,z){let $=B||_o(g,H),Y=H||G||uc($),Re=!q&&(!d.v7_partialHydration||!F);if(C){if(Re){let ge=_s(z);je(de({navigation:$},ge!==void 0?{actionData:ge}:{}),{flushSync:A})}let J=await ka(w,g.pathname,p.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let ge=gn(J.partialMatches).route.id;return{matches:J.partialMatches,loaderData:{},errors:{[ge]:J.error}}}else if(J.matches)w=J.matches;else{let{error:ge,notFoundMatches:An,route:vr}=Kl(g.pathname);return{matches:An,loaderData:{},errors:{[vr.id]:ge}}}}let ie=i||o,[ne,ve]=Ju(e.history,v,w,Y,g,d.v7_partialHydration&&F===!0,d.v7_skipActionErrorRevalidation,re,we,Ge,Pe,Ie,te,ie,s,z);if(Yl(J=>!(w&&w.some(ge=>ge.route.id===J))||ne&&ne.some(ge=>ge.route.id===J)),V=++j,ne.length===0&&ve.length===0){let J=Is();return On(g,de({matches:w,loaderData:{},errors:z&&Je(z[1])?{[z[0]]:z[1].error}:null},oc(z),J?{fetchers:new Map(v.fetchers)}:{}),{flushSync:A}),{shortCircuited:!0}}if(Re){let J={};if(!C){J.navigation=$;let ge=_s(z);ge!==void 0&&(J.actionData=ge)}ve.length>0&&(J.fetchers=Jf(ve)),je(J,{flushSync:A})}ve.forEach(J=>{Ht(J.key),J.controller&&T.set(J.key,J.controller)});let Mn=()=>ve.forEach(J=>Ht(J.key));b&&b.signal.addEventListener("abort",Mn);let{loaderResults:hr,fetcherResults:Tt}=await Ls(v,w,ne,ve,p);if(p.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",Mn),ve.forEach(J=>T.delete(J.key));let St=Ua(hr);if(St)return await pn(p,St.result,!0,{replace:D}),{shortCircuited:!0};if(St=Ua(Tt),St)return te.add(St.key),await pn(p,St.result,!0,{replace:D}),{shortCircuited:!0};let{loaderData:ql,errors:yr}=ac(v,w,hr,z,ve,Tt,ye);ye.forEach((J,ge)=>{J.subscribe(An=>{(An||J.done)&&ye.delete(ge)})}),d.v7_partialHydration&&F&&v.errors&&(yr=de({},v.errors,yr));let mn=Is(),xa=Rs(V),Ca=mn||xa||ve.length>0;return de({matches:w,loaderData:ql,errors:yr},Ca?{fetchers:new Map(v.fetchers)}:{})}function _s(p){if(p&&!Je(p[1]))return{[p[0]]:p[1].data};if(v.actionData)return Object.keys(v.actionData).length===0?null:v.actionData}function Jf(p){return p.forEach(g=>{let w=v.fetchers.get(g.key),C=Lr(void 0,w?w.data:void 0);v.fetchers.set(g.key,C)}),new Map(v.fetchers)}function ep(p,g,w,C){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ht(p);let B=(C&&C.flushSync)===!0,H=i||o,G=wi(v.location,v.matches,s,d.v7_prependBasename,w,d.v7_relativeSplatPath,g,C==null?void 0:C.relative),D=vn(H,G,s),F=Sa(D,H,G);if(F.active&&F.matches&&(D=F.matches),!D){Lt(p,g,$e(404,{pathname:G}),{flushSync:B});return}let{path:A,submission:z,error:$}=Xu(d.v7_normalizeFormMethod,!0,G,C);if($){Lt(p,g,$,{flushSync:B});return}let Y=Br(D,A),Re=(C&&C.preventScrollReset)===!0;if(z&&yt(z.formMethod)){tp(p,g,A,Y,D,F.active,B,Re,z);return}Ie.set(p,{routeId:g,path:A}),np(p,g,A,Y,D,F.active,B,Re,z)}async function tp(p,g,w,C,B,H,G,D,F){Ql(),Ie.delete(p);function A(xe){if(!xe.route.action&&!xe.route.lazy){let Dn=$e(405,{method:F.formMethod,pathname:w,routeId:g});return Lt(p,g,Dn,{flushSync:G}),!0}return!1}if(!H&&A(C))return;let z=v.fetchers.get(p);jt(p,By(F,z),{flushSync:G});let $=new AbortController,Y=zn(e.history,w,$.signal,F);if(H){let xe=await ka(B,new URL(Y.url).pathname,Y.signal,p);if(xe.type==="aborted")return;if(xe.type==="error"){Lt(p,g,xe.error,{flushSync:G});return}else if(xe.matches){if(B=xe.matches,C=Br(B,w),A(C))return}else{Lt(p,g,$e(404,{pathname:w}),{flushSync:G});return}}T.set(p,$);let Re=j,ne=(await mr("action",v,Y,[C],B,p))[C.route.id];if(Y.signal.aborted){T.get(p)===$&&T.delete(p);return}if(d.v7_fetcherPersist&&Pe.has(p)){if(kn(ne)||Je(ne)){jt(p,Vt(void 0));return}}else{if(kn(ne))if(T.delete(p),V>Re){jt(p,Vt(void 0));return}else return te.add(p),jt(p,Lr(F)),pn(Y,ne,!1,{fetcherSubmission:F,preventScrollReset:D});if(Je(ne)){Lt(p,g,ne.error);return}}if(qt(ne))throw $e(400,{type:"defer-action"});let ve=v.navigation.location||v.location,Mn=zn(e.history,ve,$.signal),hr=i||o,Tt=v.navigation.state!=="idle"?vn(hr,v.navigation.location,s):v.matches;Q(Tt,"Didn't find any matches after fetcher action");let St=++j;Z.set(p,St);let ql=Lr(F,ne.data);v.fetchers.set(p,ql);let[yr,mn]=Ju(e.history,v,Tt,F,ve,!1,d.v7_skipActionErrorRevalidation,re,we,Ge,Pe,Ie,te,hr,s,[C.route.id,ne]);mn.filter(xe=>xe.key!==p).forEach(xe=>{let Dn=xe.key,As=v.fetchers.get(Dn),up=Lr(void 0,As?As.data:void 0);v.fetchers.set(Dn,up),Ht(Dn),xe.controller&&T.set(Dn,xe.controller)}),je({fetchers:new Map(v.fetchers)});let xa=()=>mn.forEach(xe=>Ht(xe.key));$.signal.addEventListener("abort",xa);let{loaderResults:Ca,fetcherResults:J}=await Ls(v,Tt,yr,mn,Mn);if($.signal.aborted)return;$.signal.removeEventListener("abort",xa),Z.delete(p),T.delete(p),mn.forEach(xe=>T.delete(xe.key));let ge=Ua(Ca);if(ge)return pn(Mn,ge.result,!1,{preventScrollReset:D});if(ge=Ua(J),ge)return te.add(ge.key),pn(Mn,ge.result,!1,{preventScrollReset:D});let{loaderData:An,errors:vr}=ac(v,Tt,Ca,void 0,mn,J,ye);if(v.fetchers.has(p)){let xe=Vt(ne.data);v.fetchers.set(p,xe)}Rs(St),v.navigation.state==="loading"&&St>V?(Q(P,"Expected pending action"),b&&b.abort(),On(v.navigation.location,{matches:Tt,loaderData:An,errors:vr,fetchers:new Map(v.fetchers)})):(je({errors:vr,loaderData:lc(v.loaderData,An,Tt,vr),fetchers:new Map(v.fetchers)}),re=!1)}async function np(p,g,w,C,B,H,G,D,F){let A=v.fetchers.get(p);jt(p,Lr(F,A?A.data:void 0),{flushSync:G});let z=new AbortController,$=zn(e.history,w,z.signal);if(H){let ne=await ka(B,new URL($.url).pathname,$.signal,p);if(ne.type==="aborted")return;if(ne.type==="error"){Lt(p,g,ne.error,{flushSync:G});return}else if(ne.matches)B=ne.matches,C=Br(B,w);else{Lt(p,g,$e(404,{pathname:w}),{flushSync:G});return}}T.set(p,z);let Y=j,ie=(await mr("loader",v,$,[C],B,p))[C.route.id];if(qt(ie)&&(ie=await ks(ie,$.signal,!0)||ie),T.get(p)===z&&T.delete(p),!$.signal.aborted){if(Pe.has(p)){jt(p,Vt(void 0));return}if(kn(ie))if(V>Y){jt(p,Vt(void 0));return}else{te.add(p),await pn($,ie,!1,{preventScrollReset:D});return}if(Je(ie)){Lt(p,g,ie.error);return}Q(!qt(ie),"Unhandled fetcher deferred data"),jt(p,Vt(ie.data))}}async function pn(p,g,w,C){let{submission:B,fetcherSubmission:H,preventScrollReset:G,replace:D}=C===void 0?{}:C;g.response.headers.has("X-Remix-Revalidate")&&(re=!0);let F=g.response.headers.get("Location");Q(F,"Expected a Location header on the redirect Response"),F=nc(F,new URL(p.url),s);let A=oa(v.location,F,{_isRedirect:!0});if(n){let ne=!1;if(g.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(Ss.test(F)){const ve=e.history.createURL(F);ne=ve.origin!==t.location.origin||ha(ve.pathname,s)==null}if(ne){D?t.location.replace(F):t.location.assign(F);return}}b=null;let z=D===!0||g.response.headers.has("X-Remix-Replace")?Se.Replace:Se.Push,{formMethod:$,formAction:Y,formEncType:Re}=v.navigation;!B&&!H&&$&&Y&&Re&&(B=uc(v.navigation));let ie=B||H;if(py.has(g.response.status)&&ie&&yt(ie.formMethod))await fn(z,A,{submission:de({},ie,{formAction:F}),preventScrollReset:G||U,enableViewTransition:w?ee:void 0});else{let ne=_o(A,B);await fn(z,A,{overrideNavigation:ne,fetcherSubmission:H,preventScrollReset:G||U,enableViewTransition:w?ee:void 0})}}async function mr(p,g,w,C,B,H){let G,D={};try{G=await Sy(u,p,g,w,C,B,H,l,a)}catch(F){return C.forEach(A=>{D[A.route.id]={type:le.error,error:F}}),D}for(let[F,A]of Object.entries(G))if(Ly(A)){let z=A.result;D[F]={type:le.redirect,response:Cy(z,w,F,B,s,d.v7_relativeSplatPath)}}else D[F]=await xy(A);return D}async function Ls(p,g,w,C,B){let H=p.matches,G=mr("loader",p,B,w,g,null),D=Promise.all(C.map(async z=>{if(z.matches&&z.match&&z.controller){let Y=(await mr("loader",p,zn(e.history,z.path,z.controller.signal),[z.match],z.matches,z.key))[z.match.route.id];return{[z.key]:Y}}else return Promise.resolve({[z.key]:{type:le.error,error:$e(404,{pathname:z.path})}})})),F=await G,A=(await D).reduce((z,$)=>Object.assign(z,$),{});return await Promise.all([Iy(g,F,B.signal,H,p.loaderData),Ry(g,A,C)]),{loaderResults:F,fetcherResults:A}}function Ql(){re=!0,we.push(...Yl()),Ie.forEach((p,g)=>{T.has(g)&&Ge.add(g),Ht(g)})}function jt(p,g,w){w===void 0&&(w={}),v.fetchers.set(p,g),je({fetchers:new Map(v.fetchers)},{flushSync:(w&&w.flushSync)===!0})}function Lt(p,g,w,C){C===void 0&&(C={});let B=gn(v.matches,g);Ea(p),je({errors:{[B.route.id]:w},fetchers:new Map(v.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function Ts(p){return Me.set(p,(Me.get(p)||0)+1),Pe.has(p)&&Pe.delete(p),v.fetchers.get(p)||my}function Ea(p){let g=v.fetchers.get(p);T.has(p)&&!(g&&g.state==="loading"&&Z.has(p))&&Ht(p),Ie.delete(p),Z.delete(p),te.delete(p),d.v7_fetcherPersist&&Pe.delete(p),Ge.delete(p),v.fetchers.delete(p)}function rp(p){let g=(Me.get(p)||0)-1;g<=0?(Me.delete(p),Pe.add(p),d.v7_fetcherPersist||Ea(p)):Me.set(p,g),je({fetchers:new Map(v.fetchers)})}function Ht(p){let g=T.get(p);g&&(g.abort(),T.delete(p))}function Ns(p){for(let g of p){let w=Ts(g),C=Vt(w.data);v.fetchers.set(g,C)}}function Is(){let p=[],g=!1;for(let w of te){let C=v.fetchers.get(w);Q(C,"Expected fetcher: "+w),C.state==="loading"&&(te.delete(w),p.push(w),g=!0)}return Ns(p),g}function Rs(p){let g=[];for(let[w,C]of Z)if(C<p){let B=v.fetchers.get(w);Q(B,"Expected fetcher: "+w),B.state==="loading"&&(Ht(w),Z.delete(w),g.push(w))}return Ns(g),g.length>0}function ap(p,g){let w=v.blockers.get(p)||_r;return lt.get(p)!==g&&lt.set(p,g),w}function bs(p){v.blockers.delete(p),lt.delete(p)}function wa(p,g){let w=v.blockers.get(p)||_r;Q(w.state==="unblocked"&&g.state==="blocked"||w.state==="blocked"&&g.state==="blocked"||w.state==="blocked"&&g.state==="proceeding"||w.state==="blocked"&&g.state==="unblocked"||w.state==="proceeding"&&g.state==="unblocked","Invalid blocker state transition: "+w.state+" -> "+g.state);let C=new Map(v.blockers);C.set(p,g),je({blockers:C})}function Bs(p){let{currentLocation:g,nextLocation:w,historyAction:C}=p;if(lt.size===0)return;lt.size>1&&In(!1,"A router only supports one blocker at a time");let B=Array.from(lt.entries()),[H,G]=B[B.length-1],D=v.blockers.get(H);if(!(D&&D.state==="proceeding")&&G({currentLocation:g,nextLocation:w,historyAction:C}))return H}function Kl(p){let g=$e(404,{pathname:p}),w=i||o,{matches:C,route:B}=ic(w);return Yl(),{notFoundMatches:C,route:B,error:g}}function Yl(p){let g=[];return ye.forEach((w,C)=>{(!p||p(C))&&(w.cancel(),g.push(C),ye.delete(C))}),g}function lp(p,g,w){if(S=p,I=g,k=w||null,!h&&v.navigation===Po){h=!0;let C=Ms(v.location,v.matches);C!=null&&je({restoreScrollPosition:C})}return()=>{S=null,I=null,k=null}}function Os(p,g){return k&&k(p,g.map(C=>Wh(C,v.loaderData)))||p.key}function op(p,g){if(S&&I){let w=Os(p,g);S[w]=I()}}function Ms(p,g){if(S){let w=Os(p,g),C=S[w];if(typeof C=="number")return C}return null}function Sa(p,g,w){if(f)if(p){if(Object.keys(p[0].params).length>0)return{active:!0,matches:tl(g,w,s,!0)}}else return{active:!0,matches:tl(g,w,s,!0)||[]};return{active:!1,matches:null}}async function ka(p,g,w,C){if(!f)return{type:"success",matches:p};let B=p;for(;;){let H=i==null,G=i||o,D=l;try{await f({signal:w,path:g,matches:B,fetcherKey:C,patch:(z,$)=>{w.aborted||tc(z,$,G,D,a)}})}catch(z){return{type:"error",error:z,partialMatches:B}}finally{H&&!w.aborted&&(o=[...o])}if(w.aborted)return{type:"aborted"};let F=vn(G,g,s);if(F)return{type:"success",matches:F};let A=tl(G,g,s,!0);if(!A||B.length===A.length&&B.every((z,$)=>z.route.id===A[$].route.id))return{type:"success",matches:null};B=A}}function ip(p){l={},i=_l(p,a,void 0,l)}function sp(p,g){let w=i==null;tc(p,g,i||o,l,a),w&&(o=[...o],je({}))}return O={get basename(){return s},get future(){return d},get state(){return v},get routes(){return o},get window(){return t},initialize:Qf,subscribe:Yf,enableScrollRestoration:lp,navigate:Ps,fetch:ep,revalidate:qf,createHref:p=>e.history.createHref(p),encodeLocation:p=>e.history.encodeLocation(p),getFetcher:Ts,deleteFetcher:rp,dispose:Kf,getBlocker:ap,deleteBlocker:bs,patchRoutes:sp,_internalFetchControllers:T,_internalActiveDeferreds:ye,_internalSetRoutes:ip},O}function vy(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function wi(e,t,n,r,a,l,o,i){let s,u;if(o){s=[];for(let d of t)if(s.push(d),d.route.id===o){u=d;break}}else s=t,u=t[t.length-1];let f=ws(a||".",Es(s,l),ha(e.pathname,n)||e.pathname,i==="path");if(a==null&&(f.search=e.search,f.hash=e.hash),(a==null||a===""||a===".")&&u){let d=xs(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let m=new URLSearchParams(f.search),E=m.getAll("index");m.delete("index"),E.filter(k=>k).forEach(k=>m.append("index",k));let S=m.toString();f.search=S?"?"+S:""}}return r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:ln([n,f.pathname])),ma(f)}function Xu(e,t,n,r){if(!r||!vy(r))return{path:n};if(r.formMethod&&!Ny(r.formMethod))return{path:n,error:$e(405,{method:r.formMethod})};let a=()=>({path:n,error:$e(400,{type:"invalid-body"})}),l=r.formMethod||"get",o=e?l.toUpperCase():l.toLowerCase(),i=Df(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!yt(o))return a();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,S)=>{let[k,I]=S;return""+E+k+"="+I+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!yt(o))return a();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}Q(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=ki(r.formData),u=r.formData;else if(r.body instanceof FormData)s=ki(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=rc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=rc(s)}catch{return a()}let f={formMethod:o,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(yt(f.formMethod))return{path:n,submission:f};let d=zt(n);return t&&d.search&&xs(d.search)&&s.append("index",""),d.search="?"+s,{path:ma(d),submission:f}}function Zu(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(a=>a.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function Ju(e,t,n,r,a,l,o,i,s,u,f,d,m,E,S,k){let I=k?Je(k[1])?k[1].error:k[1].data:void 0,h=e.createURL(t.location),c=e.createURL(a),y=n;l&&t.errors?y=Zu(n,Object.keys(t.errors)[0],!0):k&&Je(k[1])&&(y=Zu(n,k[0]));let x=k?k[1].statusCode:void 0,N=o&&x&&x>=400,O=y.filter((P,U)=>{let{route:b}=P;if(b.lazy)return!0;if(b.loader==null)return!1;if(l)return Si(b,t.loaderData,t.errors);if(gy(t.loaderData,t.matches[U],P)||s.some(W=>W===P.route.id))return!0;let ee=t.matches[U],ae=P;return ec(P,de({currentUrl:h,currentParams:ee.params,nextUrl:c,nextParams:ae.params},r,{actionResult:I,actionStatus:x,defaultShouldRevalidate:N?!1:i||h.pathname+h.search===c.pathname+c.search||h.search!==c.search||Mf(ee,ae)}))}),v=[];return d.forEach((P,U)=>{if(l||!n.some(q=>q.route.id===P.routeId)||f.has(U))return;let b=vn(E,P.path,S);if(!b){v.push({key:U,routeId:P.routeId,path:P.path,matches:null,match:null,controller:null});return}let ee=t.fetchers.get(U),ae=Br(b,P.path),W=!1;m.has(U)?W=!1:u.has(U)?(u.delete(U),W=!0):ee&&ee.state!=="idle"&&ee.data===void 0?W=i:W=ec(ae,de({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:I,actionStatus:x,defaultShouldRevalidate:N?!1:i})),W&&v.push({key:U,routeId:P.routeId,path:P.path,matches:b,match:ae,controller:new AbortController})}),[O,v]}function Si(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,a=n!=null&&n[e.id]!==void 0;return!r&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!a}function gy(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Mf(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ec(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function tc(e,t,n,r,a){var l;let o;if(e){let u=r[e];Q(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),o=u.children}else o=n;let i=t.filter(u=>!o.some(f=>Af(u,f))),s=_l(i,a,[e||"_","patch",String(((l=o)==null?void 0:l.length)||"0")],r);o.push(...s)}function Af(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var a;return(a=t.children)==null?void 0:a.some(l=>Af(n,l))}):!1}async function Ey(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];Q(a,"No route found in manifest");let l={};for(let o in r){let s=a[o]!==void 0&&o!=="hasErrorBoundary";In(!s,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!s&&!Uh.has(o)&&(l[o]=r[o])}Object.assign(a,l),Object.assign(a,de({},t(a),{lazy:void 0}))}async function wy(e){let{matches:t}=e,n=t.filter(a=>a.shouldLoad);return(await Promise.all(n.map(a=>a.resolve()))).reduce((a,l,o)=>Object.assign(a,{[n[o].route.id]:l}),{})}async function Sy(e,t,n,r,a,l,o,i,s,u){let f=l.map(E=>E.route.lazy?Ey(E.route,s,i):void 0),d=l.map((E,S)=>{let k=f[S],I=a.some(c=>c.route.id===E.route.id);return de({},E,{shouldLoad:I,resolve:async c=>(c&&r.method==="GET"&&(E.route.lazy||E.route.loader)&&(I=!0),I?ky(t,r,E,k,c,u):Promise.resolve({type:le.data,result:void 0}))})}),m=await e({matches:d,request:r,params:l[0].params,fetcherKey:o,context:u});try{await Promise.all(f)}catch{}return m}async function ky(e,t,n,r,a,l){let o,i,s=u=>{let f,d=new Promise((S,k)=>f=k);i=()=>f(),t.signal.addEventListener("abort",i);let m=S=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:l},...S!==void 0?[S]:[]),E=(async()=>{try{return{type:"data",result:await(a?a(k=>m(k)):m())}}catch(S){return{type:"error",result:S}}})();return Promise.race([E,d])};try{let u=n.route[e];if(r)if(u){let f,[d]=await Promise.all([s(u).catch(m=>{f=m}),r]);if(f!==void 0)throw f;o=d}else if(await r,u=n.route[e],u)o=await s(u);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw $e(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:le.data,result:void 0};else if(u)o=await s(u);else{let f=new URL(t.url),d=f.pathname+f.search;throw $e(404,{pathname:d})}Q(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:le.error,result:u}}finally{i&&t.signal.removeEventListener("abort",i)}return o}async function xy(e){let{result:t,type:n}=e;if(Ff(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:le.error,error:m}}return n===le.error?{type:le.error,error:new Ll(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:le.data,data:d,statusCode:t.status,headers:t.headers}}if(n===le.error){if(sc(t)){var r,a;if(t.data instanceof Error){var l,o;return{type:le.error,error:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:le.error,error:new Ll(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:ia(t)?t.status:void 0,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:le.error,error:t,statusCode:ia(t)?t.status:void 0}}if(Ty(t)){var i,s;return{type:le.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((s=t.init)==null?void 0:s.headers)&&new Headers(t.init.headers)}}if(sc(t)){var u,f;return{type:le.data,data:t.data,statusCode:(u=t.init)==null?void 0:u.status,headers:(f=t.init)!=null&&f.headers?new Headers(t.init.headers):void 0}}return{type:le.data,data:t}}function Cy(e,t,n,r,a,l){let o=e.headers.get("Location");if(Q(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ss.test(o)){let i=r.slice(0,r.findIndex(s=>s.route.id===n)+1);o=wi(new URL(t.url),i,a,!0,o,l),e.headers.set("Location",o)}return e}function nc(e,t,n){if(Ss.test(e)){let r=e,a=r.startsWith("//")?new URL(t.protocol+r):new URL(r),l=ha(a.pathname,n)!=null;if(a.origin===t.origin&&l)return a.pathname+a.search+a.hash}return e}function zn(e,t,n,r){let a=e.createURL(Df(t)).toString(),l={signal:n};if(r&&yt(r.formMethod)){let{formMethod:o,formEncType:i}=r;l.method=o.toUpperCase(),i==="application/json"?(l.headers=new Headers({"Content-Type":i}),l.body=JSON.stringify(r.json)):i==="text/plain"?l.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?l.body=ki(r.formData):l.body=r.formData}return new Request(a,l)}function ki(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function rc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Py(e,t,n,r,a){let l={},o=null,i,s=!1,u={},f=n&&Je(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let m=d.route.id,E=t[m];if(Q(!kn(E),"Cannot handle redirect results in processLoaderData"),Je(E)){let S=E.error;f!==void 0&&(S=f,f=void 0),o=o||{};{let k=gn(e,m);o[k.route.id]==null&&(o[k.route.id]=S)}l[m]=void 0,s||(s=!0,i=ia(E.error)?E.error.status:500),E.headers&&(u[m]=E.headers)}else qt(E)?(r.set(m,E.deferredData),l[m]=E.deferredData.data,E.statusCode!=null&&E.statusCode!==200&&!s&&(i=E.statusCode),E.headers&&(u[m]=E.headers)):(l[m]=E.data,E.statusCode&&E.statusCode!==200&&!s&&(i=E.statusCode),E.headers&&(u[m]=E.headers))}),f!==void 0&&n&&(o={[n[0]]:f},l[n[0]]=void 0),{loaderData:l,errors:o,statusCode:i||200,loaderHeaders:u}}function ac(e,t,n,r,a,l,o){let{loaderData:i,errors:s}=Py(t,n,r,o);return a.forEach(u=>{let{key:f,match:d,controller:m}=u,E=l[f];if(Q(E,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(Je(E)){let S=gn(e.matches,d==null?void 0:d.route.id);s&&s[S.route.id]||(s=de({},s,{[S.route.id]:E.error})),e.fetchers.delete(f)}else if(kn(E))Q(!1,"Unhandled fetcher revalidation redirect");else if(qt(E))Q(!1,"Unhandled fetcher deferred data");else{let S=Vt(E.data);e.fetchers.set(f,S)}}),{loaderData:i,errors:s}}function lc(e,t,n,r){let a=de({},t);for(let l of n){let o=l.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(a[o]=t[o]):e[o]!==void 0&&l.route.loader&&(a[o]=e[o]),r&&r.hasOwnProperty(o))break}return a}function oc(e){return e?Je(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function gn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ic(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function $e(e,t){let{pathname:n,routeId:r,method:a,type:l,message:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&n&&r?s="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"?s="defer() is not supported in actions":l==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new Ll(e||500,i,new Error(s),!0)}function Ua(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,a]=t[n];if(kn(a))return{key:r,result:a}}}function Df(e){let t=typeof e=="string"?zt(e):e;return ma(de({},t,{hash:""}))}function _y(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Ly(e){return Ff(e.result)&&fy.has(e.result.status)}function qt(e){return e.type===le.deferred}function Je(e){return e.type===le.error}function kn(e){return(e&&e.type)===le.redirect}function sc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Ty(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Ff(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ny(e){return dy.has(e.toLowerCase())}function yt(e){return uy.has(e.toLowerCase())}async function Iy(e,t,n,r,a){let l=Object.entries(t);for(let o=0;o<l.length;o++){let[i,s]=l[o],u=e.find(m=>(m==null?void 0:m.route.id)===i);if(!u)continue;let f=r.find(m=>m.route.id===u.route.id),d=f!=null&&!Mf(f,u)&&(a&&a[u.route.id])!==void 0;qt(s)&&d&&await ks(s,n,!1).then(m=>{m&&(t[i]=m)})}}async function Ry(e,t,n){for(let r=0;r<n.length;r++){let{key:a,routeId:l,controller:o}=n[r],i=t[a];e.find(u=>(u==null?void 0:u.route.id)===l)&&qt(i)&&(Q(o,"Expected an AbortController for revalidating fetcher deferred result"),await ks(i,o.signal,!0).then(u=>{u&&(t[a]=u)}))}}async function ks(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:le.data,data:e.deferredData.unwrappedData}}catch(a){return{type:le.error,error:a}}return{type:le.data,data:e.deferredData.data}}}function xs(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Br(e,t){let n=typeof t=="string"?zt(t).search:t.search;if(e[e.length-1].route.index&&xs(n||""))return e[e.length-1];let r=bf(e);return r[r.length-1]}function uc(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:l,json:o}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:l,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function _o(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function by(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Lr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function By(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Vt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Oy(e,t){try{let n=e.sessionStorage.getItem(Of);if(n){let r=JSON.parse(n);for(let[a,l]of Object.entries(r||{}))l&&Array.isArray(l)&&t.set(a,new Set(l||[]))}}catch{}}function My(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(Of,JSON.stringify(n))}catch(r){In(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}const Gl=_.createContext(null),zf=_.createContext(null),ya=_.createContext(null),$l=_.createContext(null),Bn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),jf=_.createContext(null);function va(){return _.useContext($l)!=null}function Cs(){return va()||Q(!1),_.useContext($l).location}function Hf(e){_.useContext(ya).static||_.useLayoutEffect(e)}function Uf(){let{isDataRoute:e}=_.useContext(Bn);return e?Qy():Ay()}function Ay(){va()||Q(!1);let e=_.useContext(Gl),{basename:t,future:n,navigator:r}=_.useContext(ya),{matches:a}=_.useContext(Bn),{pathname:l}=Cs(),o=JSON.stringify(Es(a,n.v7_relativeSplatPath)),i=_.useRef(!1);return Hf(()=>{i.current=!0}),_.useCallback(function(u,f){if(f===void 0&&(f={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=ws(u,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ln([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,l,e])}function Dy(e,t){return Vf(e,t)}function Vf(e,t,n,r){va()||Q(!1);let{navigator:a}=_.useContext(ya),{matches:l}=_.useContext(Bn),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Cs(),f;if(t){var d;let I=typeof t=="string"?zt(t):t;s==="/"||(d=I.pathname)!=null&&d.startsWith(s)||Q(!1),f=I}else f=u;let m=f.pathname||"/",E=m;if(s!=="/"){let I=s.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(I.length).join("/")}let S=vn(e,{pathname:E}),k=Uy(S&&S.map(I=>Object.assign({},I,{params:Object.assign({},i,I.params),pathname:ln([s,a.encodeLocation?a.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?s:ln([s,a.encodeLocation?a.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),l,n,r);return t&&k?_.createElement($l.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Se.Pop}},k):k}function Fy(){let e=$y(),t=ia(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:a},n):null,null)}const zy=_.createElement(Fy,null);class jy extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Bn.Provider,{value:this.props.routeContext},_.createElement(jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hy(e){let{routeContext:t,match:n,children:r}=e,a=_.useContext(Gl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Bn.Provider,{value:t},r)}function Uy(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let f=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);f>=0||Q(!1),o=o.slice(0,Math.min(o.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:E}=n,S=d.route.loader&&m[d.route.id]===void 0&&(!E||E[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let E,S=!1,k=null,I=null;n&&(E=i&&d.route.id?i[d.route.id]:void 0,k=d.route.errorElement||zy,s&&(u<0&&m===0?(Ky("route-fallback"),S=!0,I=null):u===m&&(S=!0,I=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),c=()=>{let y;return E?y=k:S?y=I:d.route.Component?y=_.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=f,_.createElement(Hy,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?_.createElement(jy,{location:n.location,revalidation:n.revalidation,component:k,error:E,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Wf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wf||{}),Gf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gf||{});function Vy(e){let t=_.useContext(Gl);return t||Q(!1),t}function Wy(e){let t=_.useContext(zf);return t||Q(!1),t}function Gy(e){let t=_.useContext(Bn);return t||Q(!1),t}function $f(e){let t=Gy(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function $y(){var e;let t=_.useContext(jf),n=Wy(),r=$f();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Qy(){let{router:e}=Vy(Wf.UseNavigateStable),t=$f(Gf.UseNavigateStable),n=_.useRef(!1);return Hf(()=>{n.current=!0}),_.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,sa({fromRouteId:t},l)))},[e,t])}const cc={};function Ky(e,t,n){cc[e]||(cc[e]=!0)}function Yy(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function qy(e){let{to:t,replace:n,state:r,relative:a}=e;va()||Q(!1);let{future:l,static:o}=_.useContext(ya),{matches:i}=_.useContext(Bn),{pathname:s}=Cs(),u=Uf(),f=ws(t,Es(i,l.v7_relativeSplatPath),s,a==="path"),d=JSON.stringify(f);return _.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function pt(e){Q(!1)}function Xy(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Se.Pop,navigator:l,static:o=!1,future:i}=e;va()&&Q(!1);let s=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:s,navigator:l,static:o,future:sa({v7_relativeSplatPath:!1},i)}),[s,i,l,o]);typeof r=="string"&&(r=zt(r));let{pathname:f="/",search:d="",hash:m="",state:E=null,key:S="default"}=r,k=_.useMemo(()=>{let I=ha(f,s);return I==null?null:{location:{pathname:I,search:d,hash:m,state:E,key:S},navigationType:a}},[s,f,d,m,E,S,a]);return k==null?null:_.createElement(ya.Provider,{value:u},_.createElement($l.Provider,{children:n,value:k}))}function Zy(e){let{children:t,location:n}=e;return Dy(xi(t),n)}new Promise(()=>{});function xi(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,a)=>{if(!_.isValidElement(r))return;let l=[...t,a];if(r.type===_.Fragment){n.push.apply(n,xi(r.props.children,l));return}r.type!==pt&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xi(r.props.children,l)),n.push(o)}),n}function Jy(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:_.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:_.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:_.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tl.apply(this,arguments)}const ev="6";try{window.__reactRouterVersion=ev}catch{}function tv(e,t){return yy({basename:t==null?void 0:t.basename,future:Tl({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:zh({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||nv(),routes:e,mapRouteProperties:Jy,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function nv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Tl({},t,{errors:rv(t.errors)})),t}function rv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Ll(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let l=window[a.__subType];if(typeof l=="function")try{let o=new l(a.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let l=new Error(a.message);l.stack="",n[r]=l}}else n[r]=a;return n}const av=_.createContext({isTransitioning:!1}),lv=_.createContext(new Map),ov="startTransition",dc=_p[ov],iv="flushSync",fc=Fh[iv];function sv(e){dc?dc(e):e()}function Tr(e){fc?fc(e):e()}class uv{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function cv(e){let{fallbackElement:t,router:n,future:r}=e,[a,l]=_.useState(n.state),[o,i]=_.useState(),[s,u]=_.useState({isTransitioning:!1}),[f,d]=_.useState(),[m,E]=_.useState(),[S,k]=_.useState(),I=_.useRef(new Map),{v7_startTransition:h}=r||{},c=_.useCallback(P=>{h?sv(P):P()},[h]),y=_.useCallback((P,U)=>{let{deletedFetchers:b,flushSync:ee,viewTransitionOpts:ae}=U;P.fetchers.forEach((q,re)=>{q.data!==void 0&&I.current.set(re,q.data)}),b.forEach(q=>I.current.delete(q));let W=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!ae||W){ee?Tr(()=>l(P)):c(()=>l(P));return}if(ee){Tr(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation})});let q=n.window.document.startViewTransition(()=>{Tr(()=>l(P))});q.finished.finally(()=>{Tr(()=>{d(void 0),E(void 0),i(void 0),u({isTransitioning:!1})})}),Tr(()=>E(q));return}m?(f&&f.resolve(),m.skipTransition(),k({state:P,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation})):(i(P),u({isTransitioning:!0,flushSync:!1,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation}))},[n.window,m,f,I,c]);_.useLayoutEffect(()=>n.subscribe(y),[n,y]),_.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new uv)},[s]),_.useEffect(()=>{if(f&&o&&n.window){let P=o,U=f.promise,b=n.window.document.startViewTransition(async()=>{c(()=>l(P)),await U});b.finished.finally(()=>{d(void 0),E(void 0),i(void 0),u({isTransitioning:!1})}),E(b)}},[c,o,f,n.window]),_.useEffect(()=>{f&&o&&a.location.key===o.location.key&&f.resolve()},[f,m,a.location,o]),_.useEffect(()=>{!s.isTransitioning&&S&&(i(S.state),u({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),k(void 0))},[s.isTransitioning,S]),_.useEffect(()=>{},[]);let x=_.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:P=>n.navigate(P),push:(P,U,b)=>n.navigate(P,{state:U,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(P,U,b)=>n.navigate(P,{replace:!0,state:U,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[n]),N=n.basename||"/",O=_.useMemo(()=>({router:n,navigator:x,static:!1,basename:N}),[n,x,N]),v=_.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return _.useEffect(()=>Yy(r,n.future),[r,n.future]),_.createElement(_.Fragment,null,_.createElement(Gl.Provider,{value:O},_.createElement(zf.Provider,{value:a},_.createElement(lv.Provider,{value:I.current},_.createElement(av.Provider,{value:s},_.createElement(Xy,{basename:N,location:a.location,navigationType:a.historyAction,navigator:x,future:v},a.initialized||n.future.v7_partialHydration?_.createElement(dv,{routes:n.routes,future:n.future,state:a}):t))))),null)}const dv=_.memo(fv);function fv(e){let{routes:t,future:n,state:r}=e;return Vf(t,void 0,r,n)}var pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pc||(pc={}));var mc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));function pv(){const e=Uf(),t=r=>{const a=document.getElementById(r);a&&a.scrollIntoView({behavior:"smooth",block:"start"})},n=()=>{e("/configurator")};return _.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const r=document.getElementById("year");r&&(r.textContent=new Date().getFullYear().toString());const a=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],l=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],o=[...a,...l],i={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},s=new Set(["shell","trimpiece","backShellMain","backHandles"]),u=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],f=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],d=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),m=[{id:"shell",mask:"/assets/masks/leftShell.png"},{id:"trimpiece",mask:"/assets/masks/centerBody.png"},{id:"faceButtons",mask:"/assets/masks/faceButtons.png"},{id:"stickL",mask:"/assets/masks/stickL.png"},{id:"stickR",mask:"/assets/masks/stickR.png"},{id:"touchpad",mask:"/assets/masks/touchpad.png"},{id:"share",mask:"/assets/masks/share.png"},{id:"options",mask:"/assets/masks/options.png"},{id:"psButton",mask:"/assets/masks/psButton.png"},{id:"bumpers",mask:"/assets/masks/bumperL.png"}];function E(W){return s.has(W)?u:f}function S(W){return W[Math.floor(Math.random()*W.length)]}function k(W,q){const re={};let we=0;return o.forEach(T=>{const j=E(T.id),V=S(j);re[T.id]=V,we+=i[T.id]||0}),{id:W,name:(q==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(W+1),colors:re,total:we}}function I(W,q){const re=W.toFixed(2);return q==="ar"?re+" د.ب":"BHD "+re}const h={ar:{navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
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
        `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly."}};let c=localStorage.getItem("ez_lang")||"ar";function y(){document.documentElement.lang=c,document.documentElement.dir=c==="ar"?"rtl":"ltr"}function x(){const W=h[c];document.querySelectorAll("[data-i18n]").forEach(re=>{const we=re.getAttribute("data-i18n");W[we]&&(re.textContent=W[we])}),document.querySelectorAll("[data-i18n-html]").forEach(re=>{const we=re.getAttribute("data-i18n-html");W[we]&&(re.innerHTML=W[we])});const q=document.getElementById("langToggle");q&&(q.textContent=c==="ar"?"EN":"عربي")}let N=[];function O(W){const q=h[c],re=document.createElement("article");re.className="build-card";const we=document.createElement("div");we.className="build-thumb";const Ge=document.createElement("div");Ge.className="thumb-controller";const T=document.createElement("div");T.className="thumb-base",Ge.appendChild(T),m.forEach(Me=>{const Pe=W.colors[Me.id];if(!Pe)return;const ye=document.createElement("div");ye.className="thumb-layer",ye.style.setProperty("--mask-url",`url('${Me.mask}')`),ye.style.setProperty("--tint",Pe.hex),d.has(Pe.hex.toLowerCase())?ye.style.setProperty("--tint-opacity","0.35"):ye.style.setProperty("--tint-opacity","1"),Ge.appendChild(ye)}),we.appendChild(Ge);const j=document.createElement("div");j.className="build-body";const V=document.createElement("div");V.className="build-title",V.textContent=W.name;const Z=document.createElement("div");Z.className="build-price",Z.innerHTML=I(W.total,c);const te=document.createElement("div");te.className="build-color-row";const Ie=document.createElement("button");return Ie.className="build-cta",Ie.type="button",Ie.textContent=q.preview,Ie.addEventListener("click",n),j.appendChild(V),j.appendChild(Z),j.appendChild(te),j.appendChild(Ie),re.appendChild(we),re.appendChild(j),re}function v(){const W=document.getElementById("buildGrid");if(W){if(W.innerHTML="",N.length)N=N.map((q,re)=>k(re,c));else for(let q=0;q<20;q++)N.push(k(q,c));N.forEach(q=>W.appendChild(O(q)))}}function P(W){c=W,localStorage.setItem("ez_lang",W),y(),x(),v()}const U=document.getElementById("langToggle"),b=document.getElementById("contactForm"),ee=()=>{P(c==="ar"?"en":"ar")},ae=W=>{W.preventDefault(),alert(h[c].formSuccess),b==null||b.reset()};return U==null||U.addEventListener("click",ee),b==null||b.addEventListener("submit",ae),y(),x(),v(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",U==null||U.removeEventListener("click",ee),b==null||b.removeEventListener("submit",ae)}},[e]),R.jsxs("div",{className:"home-page",children:[R.jsxs("header",{className:"top-nav",children:[R.jsx("div",{className:"nav-left",children:R.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[R.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),R.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),R.jsxs("div",{className:"nav-right",children:[R.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>t("premadeSection")}),R.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>t("contactSection")}),R.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:n}),R.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"})]})]}),R.jsxs("section",{className:"hero",children:[R.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:R.jsx("source",{src:"/assets/back.mp4",type:"video/mp4"})}),R.jsx("div",{className:"hero-overlay"}),R.jsx("div",{className:"hero-inner",children:R.jsxs("div",{children:[R.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),R.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),R.jsxs("div",{className:"hero-actions",children:[R.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:n}),R.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>t("premadeSection")})]})]})})]}),R.jsxs("section",{className:"section",id:"premadeSection",children:[R.jsx("div",{className:"section-header",children:R.jsx("div",{children:R.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),R.jsx("div",{className:"build-grid",id:"buildGrid"})]}),R.jsxs("section",{className:"section",id:"contactSection",children:[R.jsx("div",{className:"section-header",children:R.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),R.jsxs("div",{className:"contact-grid",children:[R.jsxs("div",{className:"contact-card",children:[R.jsx("h3",{"data-i18n":"contactCardTitle"}),R.jsx("p",{"data-i18n":"contactCardText"}),R.jsxs("form",{id:"contactForm",children:[R.jsxs("div",{className:"contact-form-group",children:[R.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),R.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),R.jsxs("div",{className:"contact-form-group",children:[R.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),R.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),R.jsxs("div",{className:"contact-form-group",children:[R.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),R.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),R.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),R.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),R.jsxs("footer",{className:"footer",children:[R.jsx("span",{"data-i18n":"footerText"}),R.jsx("span",{id:"year"})]})]})}const mv=`


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
        <span class="add-label">أضِف إلى السلة</span>
        <span class="add-amount" id="summaryAmountAlt">د.ب 0.00</span>
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

    const ZOHO_ACCESS_TOKEN = "1000.7e717720fad33ceb86442de697965dc7.af8c67230ddae4d39636b74a46f1c951";
    const ZOHO_ORG_ID = "892379608";
    // Always go through our proxy (rewritten in Firebase Hosting to the cloud function).
    const ZOHO_BASE = "/zoho/inventory/v1";
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
      const normalizedName = normalizeVariant(rawName);

      // Base controller item: ps5_original_controller
      if (normalizedName === "ps5originalcontroller") {
        const basePrice = typeof item.rate === "number" ? item.rate : parseFloat(item.rate);
        if (!Number.isNaN(basePrice)) baseControllerPrice = basePrice;
        return;
      }

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
          const items = (data && Array.isArray(data.items)) ? data.items.filter(it => {
            const status = (it.status || it.item_status || "").toLowerCase();
            return status === "" || status === "active";
          }) : [];
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
    let baseControllerPrice = 0;
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

    function hasCustomizations() {
      return Object.values(configState).some(Boolean);
    }

    function getBasePrice(partId) {
      const chosen = selectedPriceByPart[partId];
      if (typeof chosen === "number" && !Number.isNaN(chosen)) return chosen;
      const dynamic = dynamicPricesByPart[partId];
      if (typeof dynamic === "number" && !Number.isNaN(dynamic)) return dynamic;
      return PRICES[partId] || 0;
    }

    function computeTotal() {
      let tSum = baseControllerPrice || 0;
      for (const p of ALL_PARTS) {
        if (!configState[p.id]) continue;
        tSum += getBasePrice(p.id);
      }
      return tSum;
    }

    function updateSummary() {
      summaryAmountEl.textContent = formatMoney(computeTotal());
      const summaryAmountAltEl = document.getElementById("summaryAmountAlt");
      if (summaryAmountAltEl) summaryAmountAltEl.textContent = formatMoney(computeTotal());
      const navLabelEl = document.querySelector(".nav-amount-label");
      if (navLabelEl) {
        navLabelEl.textContent = hasCustomizations()
          ? "PS5 Controller (Customized)"
          : "PS5 Original Controller (No Customizations)";
      }
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
            sw.style.filter = "none";
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
            sw2.style.filter = "none";
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
      const hasCustom = hasCustomizations();
      const cartName = hasCustom
        ? "PS5 Controller (Customized)"
        : "PS5 Original Controller (No Customizations)";

      // Build a richer SVG preview for the sales order (controller + colored markers)
      function buildPreviewSvg(config) {
        const entries = Object.entries(config || {}).filter(([, val]) => val);
        const width = 500;
        const height = 300;
        const partPos = {
          stickL: { x: 220, y: 200 },
          stickR: { x: 320, y: 210 },
          faceButtons: { x: 400, y: 160 },
          touchpad: { x: 260, y: 120 },
          shell: { x: 260, y: 150 },
          trimpiece: { x: 260, y: 180 },
          bumpers: { x: 260, y: 90 },
          psButton: { x: 260, y: 210 },
          backShellMain: { x: 260, y: 150 },
          backTriggers: { x: 260, y: 110 }
        };
        const dots = entries.map(([part, hex]) => {
          const pos = partPos[part] || { x: width / 2, y: height / 2 };
          const fill = typeof hex === "string" ? hex : (hex && hex.hex) || "#444";
          return (
            '<g><circle cx="' + pos.x + '" cy="' + pos.y + '" r="18" fill="' + fill + '" opacity="0.85" />' +
            "</g>"
          );
        }).join("");
        const ctrl = document.querySelector(".controller-face-front img");
        const ctrlSrc = (ctrl && ctrl.src) || "/assets/controller.png";
        const svg =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + " " + height + '" style="background:#0b0b0f">' +
          '<image href="' + ctrlSrc + '" x="10" y="20" width="480" height="260" preserveAspectRatio="xMidYMid meet" opacity="0.9"/>' +
          dots +
          "</svg>";
        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
      }

      const preview = hasCustom ? buildPreviewSvg(snapshot) : null;

      const cartItem = {
        id: Date.now(),
        name: cartName,
        unitPrice: total,
        quantity: 1,
        config: snapshot,
        preview
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
  

`;function yv(){return _.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=hv,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),R.jsx("div",{className:"configurator-page",children:R.jsx("div",{dangerouslySetInnerHTML:{__html:mv}})})}const vv=`


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
  

`;function Ev(){return _.useEffect(()=>{const e=document.createElement("script");return e.textContent=gv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),R.jsx("div",{className:"cart-page",children:R.jsx("div",{dangerouslySetInnerHTML:{__html:vv}})})}const wv=`


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
<label data-i18n="firstNameLabel" for="firstName">الاسم الأول *</label>
<input id="firstName" name="firstName" required=""/>
</div>
<div class="form-field">
<label data-i18n="lastNameLabel" for="lastName">اسم العائلة *</label>
<input id="lastName" name="lastName" required=""/>
</div>
</div>
<div class="form-row">
<div class="form-field">
<label data-i18n="phoneLabel" for="phone">رقم الهاتف *</label>
<input id="phone" name="phone" required="" type="tel"/>
</div>
<div class="form-field">
<label data-i18n="emailLabel" for="email">البريد الإلكتروني *</label>
<input id="email" name="email" required="" type="email"/>
</div>
</div>
<div class="form-row">
<div class="form-field">
<label data-i18n="countryLabel" for="country">الدولة *</label>
<input id="country" name="country" required=""/>
</div>
<div class="form-field">
<label data-i18n="cityLabel" for="city">المدينة *</label>
<input id="city" name="city" required=""/>
</div>
</div>
<div class="form-row">
<div class="form-field">
<label data-i18n="stateLabel" for="state">المحافظة / الولاية *</label>
<input id="state" name="state" required=""/>
</div>
<div class="form-field">
<label data-i18n="postalCodeLabel" for="postalCode">الرمز البريدي (اختياري)</label>
<input id="postalCode" name="postalCode"/>
</div>
</div>
<div class="form-row">
<div class="form-field">
<label data-i18n="addressLine1Label" for="addressLine1">العنوان التفصيلي (سطر 1) *</label>
<input id="addressLine1" name="addressLine1" required=""/>
</div>
<div class="form-field">
<label data-i18n="addressLine2Label" for="addressLine2">العنوان (سطر 2) اختياري</label>
<input id="addressLine2" name="addressLine2"/>
</div>
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



`,Sv=`


    const CART_KEY = "ezCart";

    const i18n = {
      ar: {
        checkoutTitle: "إتمام الشراء",
        totalLabel: "الإجمالي",
        formTitle: "بيانات العميل والدفع",
        firstNameLabel: "الاسم الأول *",
        lastNameLabel: "اسم العائلة *",
        phoneLabel: "رقم الهاتف *",
        emailLabel: "البريد الإلكتروني *",
        countryLabel: "الدولة *",
        cityLabel: "المدينة *",
        stateLabel: "المحافظة / الولاية *",
        postalCodeLabel: "الرمز البريدي (اختياري)",
        addressLine1Label: "العنوان التفصيلي (سطر 1) *",
        addressLine2Label: "العنوان (سطر 2) اختياري",
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
        firstNameLabel: "First name *",
        lastNameLabel: "Last name *",
        phoneLabel: "Phone *",
        emailLabel: "Email *",
        countryLabel: "Country *",
        cityLabel: "City *",
        stateLabel: "State / Province *",
        postalCodeLabel: "Postal code (optional)",
        addressLine1Label: "Address line 1 *",
        addressLine2Label: "Address line 2 (optional)",
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

    checkoutForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!cartItems.length) {
        alert(t("alertNoItems"));
        return;
      }

      const formData = new FormData(checkoutForm);
      const data = Object.fromEntries(formData.entries());
      data.agree = document.getElementById("agree").checked;
      // Build a combined fullName for compatibility with backend and Zoho.
      data.fullName = ((data.firstName || "") + " " + (data.lastName || "")).trim();
      // Keep legacy address for compatibility.
      data.address = data.addressLine1 || data.address || "";
      data.cart = cartItems;

      try {
        localStorage.setItem("ezOrderDraft", JSON.stringify(data));
        window.location.href = "/payment";
      } catch (err) {
        console.error(err);
        alert("Failed to start payment.");
      }
    });

    // init
    applyLanguage();
  

`;function kv(){return _.useEffect(()=>{const e=document.createElement("script");return e.textContent=Sv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),R.jsx("div",{className:"checkout-page",children:R.jsx("div",{dangerouslySetInnerHTML:{__html:wv}})})}const xv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">الدفع (تجريبي)</div>
    </a>
  </div>
</div>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:540px; width:100%; text-align:center;">
    <div class="card-title">الدفع (تجريبي)</div>
    <div id="paymentDetails" style="margin:10px 0; font-size:0.95rem; opacity:0.9;"></div>
    <button class="place-order-btn" id="payNowBtn" type="button">Pay Now</button>
    <div id="paymentStatus" style="margin-top:12px; font-size:0.9rem; opacity:0.85;"></div>
  </div>
</div>
`,Cv=`
  const orderDraftRaw = localStorage.getItem("ezOrderDraft");
  const paymentDetailsEl = document.getElementById("paymentDetails");
  const statusEl = document.getElementById("paymentStatus");
  const btn = document.getElementById("payNowBtn");

  if (!orderDraftRaw) {
    statusEl.textContent = "No order draft found. Redirecting to cart...";
    setTimeout(() => window.location.href = "/cart", 1200);
  } else {
    const draft = JSON.parse(orderDraftRaw);
    const cart = draft.cart || [];
    const total = cart.reduce((s, it) => s + (it.unitPrice * it.quantity), 0);
    paymentDetailsEl.textContent = "Amount due: " + (draft.currencyPrefix || "BHD ") + total.toFixed(2);

    btn.addEventListener("click", async () => {
      btn.disabled = true;
      statusEl.textContent = "Processing payment (demo)...";
      const succeed = (json) => {
        localStorage.setItem("ezOrderResult", JSON.stringify(json || { status: "paid_demo" }));
        statusEl.textContent = "Payment confirmed. Redirecting...";
        setTimeout(() => window.location.href = "/payment/confirmation", 500);
      };
      try {
        const res = await fetch("/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: orderDraftRaw
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const json = await res.json();
        succeed(json);
      } catch (err) {
        console.error("Payment demo failed; forcing success", err);
        succeed({ status: "paid_demo", payment_method: "cash" });
      }
    });
  }
`;function Pv(){return _.useEffect(()=>{const e=document.createElement("script");return e.textContent=Cv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:xv}})}const _v=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">تأكيد الدفع</div>
    </a>
  </div>
</div>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:480px; width:100%; text-align:center;">
    <div class="card-title">تأكيد الدفع</div>
    <div id="confirmStatus" style="font-size:1rem; margin:10px 0;">Payment Confirmed</div>
    <button class="place-order-btn" id="goSummaryBtn" type="button">Go to Order Summary</button>
  </div>
</div>
`,Lv=`
  const btn = document.getElementById("goSummaryBtn");
  const statusEl = document.getElementById("confirmStatus");
  btn.addEventListener("click", () => window.location.href = "/order-summary");
  statusEl.textContent = "Payment Confirmed";
`;function Tv(){return _.useEffect(()=>{const e=document.createElement("script");return e.textContent=Lv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:_v}})}const Nv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">ملخص الطلب</div>
    </a>
  </div>
</div>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:640px; width:100%;">
    <div class="card-title">ملخص الطلب</div>
    <div id="orderStatus" style="margin-bottom:8px;"></div>
    <div id="orderItems"></div>
    <div id="orderTotals" style="margin-top:10px; font-weight:700;"></div>
  </div>
</div>
`,Iv=`
  const resultRaw = localStorage.getItem("ezOrderResult");
  const draftRaw = localStorage.getItem("ezOrderDraft");
  const statusEl = document.getElementById("orderStatus");
  const itemsEl = document.getElementById("orderItems");
  const totalsEl = document.getElementById("orderTotals");

  if (!resultRaw || !draftRaw) {
    statusEl.textContent = "No order data found. Redirecting to cart...";
    setTimeout(() => window.location.href = "/cart", 1200);
  } else {
    const result = JSON.parse(resultRaw);
    const draft = JSON.parse(draftRaw);
    const cart = draft.cart || [];
    const total = cart.reduce((s, it) => s + (it.unitPrice * it.quantity), 0);
    statusEl.innerHTML = "Status: <strong>Payment Confirmed</strong>";
    const list = document.createElement("ul");
    cart.forEach(it => {
      const li = document.createElement("li");
      li.textContent = (it.name || "Item") + " × " + it.quantity + " — " + (draft.currencyPrefix || "BHD ") + (it.unitPrice * it.quantity).toFixed(2);
      list.appendChild(li);
    });
    itemsEl.appendChild(list);
    totalsEl.textContent = "Total: " + (draft.currencyPrefix || "BHD ") + total.toFixed(2);
  }
`;function Rv(){return _.useEffect(()=>{const e=document.createElement("script");return e.textContent=Iv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:Nv}})}const bv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">تتبع الطلب</div>
    </a>
  </div>
</div>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="track-shell">
    <div class="track-header">
      <div class="track-title" id="trackTitle">تتبع الطلب</div>
      <div class="track-status" id="trackStatus"></div>
    </div>
    <div id="stepsList" class="steps-list"></div>
    <div id="orderDetails" class="order-details"></div>
    <div id="orderItems" class="order-items"></div>
  </div>
</div>

<style>
  .track-shell {
    width: 100%;
    max-width: 1100px;
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
    padding: 18px 22px 24px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 18px;
    color: #fff;
  }
  .track-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .track-title {
    font-size: 1.35rem;
    font-weight: 800;
  }
  .track-status {
    font-size: 0.95rem;
    opacity: 0.9;
  }
  .order-details {
    margin-top: 14px;
    padding: 12px 14px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
    font-size: 0.95rem;
  }
  .detail-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .detail-label {
    opacity: 0.7;
    font-size: 0.85rem;
  }
  .detail-value {
    font-weight: 700;
  }
  .order-items {
    margin-top: 16px;
    padding: 12px 14px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
  }
  .order-items h3 {
    margin: 0 0 10px;
    font-size: 1rem;
    font-weight: 800;
  }
  .item-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 8px;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    font-size: 0.95rem;
  }
  .item-row:last-child { border-bottom: none; }
  .item-label { opacity: 0.85; }
  .item-qty,
  .item-price { text-align: right; }
  .steps-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 24px;
    position: relative;
  }
  .step-card {
    background: none;
    border: none;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    position: relative;
    min-height: 260px;
    flex: 1 1 220px;
  }
  .step-line { display: none; }
  .step-icon-wrap {
    width: 130px;
    height: 130px;
    border-radius: 0;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: none;
    position: relative;
  }
  .step-icon-wrap::before {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 2px solid rgba(124,252,0,0.0);
    pointer-events: none;
  }
  .step-icon-wrap.has-line::after {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(100% + 8px);
    width: 70px;
    height: 2px;
    background: linear-gradient(90deg, rgba(124,252,0,0.7), rgba(124,252,0,0.15));
    transform: translateY(-50%);
  }
  .step-icon {
    width: 120px;
    height: 120px;
    object-fit: contain;
    filter: none;
    transition: filter 0.2s ease, opacity 0.2s ease;
  }
  .step-card.pending .step-icon {
    filter: grayscale(1) brightness(0.7);
    opacity: 0.7;
  }
  .step-card.step-current .step-icon {
    filter: grayscale(1) brightness(0.8);
    opacity: 0.9;
  }
  .step-card.step-current .step-icon-wrap::before {
    border-color: rgba(124,252,0,0.7);
    animation: pulseRing 1.6s ease-in-out infinite;
  }
  .step-title {
    font-weight: 800;
    text-align: center;
    font-size: 1.1rem;
  }
  .step-status {
    font-size: 1rem;
    opacity: 0.85;
    text-align: center;
  }
  @media (max-width: 900px) {
    .steps-list { justify-content: center; }
  }
  @media (max-width: 640px) {
    .steps-list { gap: 18px; }
    .step-icon-wrap.has-line::after { width: 50px; }
  }
  @keyframes pulseRing {
    0% { transform: scale(0.95); opacity: 0.6; }
    50% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.6; }
  }
</style>
`,Bv=`
  const statusEl = document.getElementById("trackStatus");
  const stepsListEl = document.getElementById("stepsList");
  const orderDetailsEl = document.getElementById("orderDetails");
  const orderItemsEl = document.getElementById("orderItems");

  function setStatus(msg) {
    statusEl.textContent = msg;
  }

  function addStep(label, value, done, icon, hasLine, current) {
    const card = document.createElement("div");
    card.className = "step-card" + (done ? " step-done" : " pending") + (current ? " step-current" : "");
    const iconWrap = document.createElement("div");
    iconWrap.className = "step-icon-wrap" + (hasLine ? " has-line" : "");
    const img = document.createElement("img");
    img.className = "step-icon";
    img.src = icon;
    img.alt = label;
    img.onerror = () => {
      img.style.display = "none";
      console.warn("Icon failed to load:", icon);
    };
    iconWrap.appendChild(img);
    const title = document.createElement("div");
    title.className = "step-title";
    title.textContent = label;
    const status = document.createElement("div");
    status.className = "step-status";
    status.textContent = value;
    card.appendChild(iconWrap);
    card.appendChild(title);
    card.appendChild(status);
    if (hasLine) {
      const line = document.createElement("div");
      line.className = "step-line";
      card.appendChild(line);
    }
    stepsListEl.appendChild(card);
  }

  function getOrderId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("order") || params.get("order_id") || params.get("id");
  }

  async function fetchJson(url, label) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(label + " HTTP " + res.status);
    return res.json();
  }

  async function load() {
    const orderId = getOrderId();
    if (!orderId) {
      setStatus("No order id provided in the link.");
      return;
    }
    setStatus("Loading order " + orderId + " …");
    stepsListEl.innerHTML = "";
    orderDetailsEl.innerHTML = "";
    orderItemsEl.innerHTML = "";

    try {
      const so = await fetchJson("/zoho/inventory/v1/salesorders/" + encodeURIComponent(orderId), "salesorder");
      const salesorder = so.salesorder || {};
      const soId = salesorder.salesorder_id ? String(salesorder.salesorder_id) : String(orderId);
      const soNumber = salesorder.salesorder_number || "";
      const soStatus = salesorder.status || "Unknown";
      const soDate = salesorder.date || salesorder.created_time || "";
      const soTotal = typeof salesorder.total === "number" ? salesorder.total.toFixed(2) : "";
      const currency = salesorder.currency_code || "BHD";
      // render order details
      const details = [
        { label: "Order ID", value: soNumber || soId },
        { label: "Status", value: soStatus },
        { label: "Date", value: soDate },
        { label: "Total", value: soTotal ? currency + " " + soTotal : "" }
      ];
      orderDetailsEl.innerHTML = "";
      details.forEach(d => {
        const item = document.createElement("div");
        item.className = "detail-item";
        const l = document.createElement("div");
        l.className = "detail-label";
        l.textContent = d.label;
        const v = document.createElement("div");
        v.className = "detail-value";
        v.textContent = d.value || "—";
        item.appendChild(l);
        item.appendChild(v);
        orderDetailsEl.appendChild(item);
      });

      // render line items
      const items = Array.isArray(salesorder.line_items) ? salesorder.line_items : [];
      const itemsWrap = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = "Sales Order Details";
      itemsWrap.appendChild(title);
      if (!items.length) {
        const empty = document.createElement("div");
        empty.textContent = "No items found.";
        empty.style.opacity = "0.8";
        itemsWrap.appendChild(empty);
      } else {
        items.forEach(li => {
          const row = document.createElement("div");
          row.className = "item-row";
          const name = document.createElement("div");
          name.className = "item-label";
          name.textContent = li.name || li.item_name || "Item";
          const qty = document.createElement("div");
          qty.className = "item-qty";
          qty.textContent = "Qty: " + (li.quantity || 0);
          const price = document.createElement("div");
          price.className = "item-price";
          const rate = typeof li.rate === "number" ? li.rate.toFixed(2) : "";
          price.textContent = rate ? (li.currency_code || currency || "BHD") + " " + rate : "";
          row.appendChild(name);
          row.appendChild(qty);
          row.appendChild(price);
          itemsWrap.appendChild(row);
        });
      }
      orderItemsEl.appendChild(itemsWrap);
      const assetBase = window.location.origin;
      const version = "v1";
      const stepIcons = {
        order: assetBase + "/assets/track/order.png?" + version,
        process: assetBase + "/assets/track/process.png?" + version,
        ontheway: assetBase + "/assets/track/ontheway.png?" + version,
        delivered: assetBase + "/assets/track/delivered.png?" + version
      };
      const orderDone = true;

      // Packages (scoped to this sales order)
      let packages = [];
      try {
        const pkg = await fetchJson("/zoho/inventory/v1/packages?salesorder_id=" + encodeURIComponent(orderId) + "&per_page=200", "packages");
        packages = (pkg.packages || []).filter(p => {
          const pid = p.salesorder_id != null ? String(p.salesorder_id) : "";
          const pnum = p.salesorder_number || "";
          return (pid && pid === soId) || (soNumber && pnum === soNumber);
        });
      } catch (e) {
        // ignore
      }
      const pkgSummary = packages.length ? "" : "";
      const processingDone = packages.length > 0;

      // Shipments (scoped to this sales order)
      let shipments = [];
      try {
        const ship = await fetchJson("/zoho/inventory/v1/shipmentorders?salesorder_id=" + encodeURIComponent(orderId) + "&per_page=200", "shipments");
        shipments = (ship.shipmentorders || []).filter(s => {
          const sid = s.salesorder_id != null ? String(s.salesorder_id) : "";
          const snum = s.salesorder_number || "";
          return (sid && sid === soId) || (soNumber && snum === soNumber);
        });
      } catch (e) {
        // ignore
      }
      const onTheWayDone = shipments.length > 0;

      // Delivered (check shipment delivery_status or package delivery_status/status)
      const deliveredFromShipments = shipments.filter(sh => {
        const d = (sh.delivery_status || sh.status || "").toLowerCase();
        return d.includes("delivered");
      });
      const deliveredFromPackages = packages.filter(p => {
        const d = (p.delivery_status || p.status || "").toLowerCase();
        return d.includes("delivered");
      });
      const deliveredCount = deliveredFromShipments.length || deliveredFromPackages.length;
      const deliveredDone = deliveredCount > 0;

      // Decide current step (last done, unless delivered is done)
      const stepsData = [
        { label: "Order Received", value: "", done: orderDone, icon: stepIcons.order },
        { label: "Order Processing", value: "", done: processingDone, icon: stepIcons.process },
        { label: "On the way", value: "", done: onTheWayDone, icon: stepIcons.ontheway },
        { label: "Delivered", value: "", done: deliveredDone, icon: stepIcons.delivered }
      ];

      let currentIndex = -1;
      if (!deliveredDone) {
        for (let i = stepsData.length - 1; i >= 0; i--) {
          if (stepsData[i].done) {
            currentIndex = i;
            break;
          }
        }
      }

      stepsListEl.innerHTML = "";
      stepsData.forEach((step, idx) => {
        const isCurrent = idx === currentIndex;
        const hasLine = idx !== stepsData.length - 1;
        addStep(step.label, step.value, step.done, step.icon, hasLine, isCurrent);
      });

      setStatus("Order loaded.");
    } catch (err) {
      console.error(err);
      setStatus("Failed to load order: " + err.message);
    }
  }

  load();
`;function Ov(){return _.useEffect(()=>{const e=document.createElement("script");return e.textContent=Bv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:bv}})}const Mv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">POS</div>
    </a>
  </div>
</div>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="width:100%; max-width:1100px; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); color:#fff;">
    <div class="card-title">Point of Sale</div>
    <div id="posStatus" style="margin-bottom:10px; opacity:0.85; font-size:0.95rem;"></div>
    <div class="pos-grid" id="posGrid"></div>
  </div>
</div>

<style>
  .pos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }
  .pos-item {
    padding: 12px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .pos-name {
    font-weight: 700;
  }
  .pos-price {
    color: #9ef56e;
    font-weight: 700;
  }
  .pos-stock {
    font-size: 0.9rem;
    opacity: 0.85;
  }
  .pos-btn {
    margin-top: auto;
    padding: 8px 10px;
    border: none;
    border-radius: 6px;
    background: linear-gradient(135deg, #7CFC00, #2ecc71);
    color: #000;
    font-weight: 700;
    cursor: pointer;
  }
  .pos-btn:disabled {
    background: rgba(255,255,255,0.2);
    color: #444;
    cursor: not-allowed;
  }
</style>
`,Av=`
  const statusEl = document.getElementById("posStatus");
  const gridEl = document.getElementById("posGrid");
  const CART_KEY = "ezCart";

  function setStatus(msg) { statusEl.textContent = msg; }

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch { return []; }
  }
  function saveCart(items) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch {}
  }

  function addToCart(item) {
    const cart = loadCart();
    cart.push({
      id: Date.now(),
      name: item.name || "Item",
      unitPrice: item.rate || 0,
      quantity: 1,
      config: null,
      preview: item.image_url || ""
    });
    saveCart(cart);
    setStatus("Added to cart: " + (item.name || "Item"));
  }

  async function loadItems() {
    setStatus("Loading items...");
    gridEl.innerHTML = "";
    try {
      const res = await fetch("/zoho/inventory/v1/items?organization_id=892379608&per_page=200");
      if (!res.ok) throw new Error("HTTP " + res.status);
      const json = await res.json();
      const items = (json.items || []).filter(it => {
        const active = (it.status || "").toLowerCase() === "active";
        const name = (it.name || "").toLowerCase();
        return active && !name.startsWith("ps5_");
      });
      if (!items.length) {
        setStatus("No items found.");
        return;
      }
      setStatus(items.length + " items loaded.");
      items.forEach(it => {
        const card = document.createElement("div");
        card.className = "pos-item";

        const name = document.createElement("div");
        name.className = "pos-name";
        name.textContent = it.name || "Item";

        const price = document.createElement("div");
        price.className = "pos-price";
        const rate = typeof it.rate === "number" ? it.rate.toFixed(2) : "0.00";
        price.textContent = (it.currency_code || "BHD") + " " + rate;

        const stock = document.createElement("div");
        stock.className = "pos-stock";
        const avail = it.available_stock != null ? it.available_stock : it.stock_on_hand;
        stock.textContent = "Stock: " + (avail != null ? avail : "—");

        const btn = document.createElement("button");
        btn.className = "pos-btn";
        btn.textContent = "Add to cart";
        btn.disabled = avail != null && avail <= 0;
        btn.addEventListener("click", () => addToCart(it));

        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(stock);
        card.appendChild(btn);
        gridEl.appendChild(card);
      });
    } catch (err) {
      console.error(err);
      setStatus("Failed to load items: " + err.message);
    }
  }

  loadItems();
`;function Dv(){return _.useEffect(()=>{const e=document.createElement("script");return e.textContent=Av,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:Mv}})}function Fv(){return R.jsxs(Zy,{children:[R.jsx(pt,{path:"/",element:R.jsx(pv,{})}),R.jsx(pt,{path:"/configurator",element:R.jsx(yv,{})}),R.jsx(pt,{path:"/cart",element:R.jsx(Ev,{})}),R.jsx(pt,{path:"/checkout",element:R.jsx(kv,{})}),R.jsx(pt,{path:"/payment",element:R.jsx(Pv,{})}),R.jsx(pt,{path:"/payment/confirmation",element:R.jsx(Tv,{})}),R.jsx(pt,{path:"/order-summary",element:R.jsx(Rv,{})}),R.jsx(pt,{path:"/trackorder",element:R.jsx(Ov,{})}),R.jsx(pt,{path:"/pos",element:R.jsx(Dv,{})}),R.jsx(pt,{path:"*",element:R.jsx(qy,{to:"/",replace:!0})})]})}const zv=tv([{path:"/*",element:R.jsx(Fv,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});Lo.createRoot(document.getElementById("root")).render(R.jsx(cv,{router:zv}));

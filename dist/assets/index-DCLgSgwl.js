function hc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vc={exports:{}},Io={},gc={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),cp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),gp=Symbol.for("react.memo"),wp=Symbol.for("react.lazy"),As=Symbol.iterator;function Ep(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ec=Object.assign,Sc={};function dr(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||wc}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kc(){}kc.prototype=dr.prototype;function xi(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||wc}var Pi=xi.prototype=new kc;Pi.constructor=xi;Ec(Pi,dr.prototype);Pi.isPureReactComponent=!0;var Fs=Array.isArray,Cc=Object.prototype.hasOwnProperty,Li={current:null},xc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,a={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Cc.call(t,r)&&!xc.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:ua,type:e,key:o,ref:l,props:a,_owner:Li.current}}function Sp(e,t){return{$$typeof:ua,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _i(e){return typeof e=="object"&&e!==null&&e.$$typeof===ua}function kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zs=/\/+/g;function Xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kp(""+e.key):t.toString(36)}function Va(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ua:case cp:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Xo(l,0):r,Fs(a)?(n="",e!=null&&(n=e.replace(zs,"$&/")+"/"),Va(a,t,n,"",function(u){return u})):a!=null&&(_i(a)&&(a=Sp(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(zs,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Fs(e))for(var i=0;i<e.length;i++){o=e[i];var s=r+Xo(o,i);l+=Va(o,t,n,s,a)}else if(s=Ep(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=r+Xo(o,i++),l+=Va(o,t,n,s,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Pa(e,t,n){if(e==null)return e;var r=[],a=0;return Va(e,r,"","",function(o){return t.call(n,o,a++)}),r}function Cp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Wa={transition:null},xp={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Li};function Lc(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Pa,forEach:function(e,t,n){Pa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pa(e,function(){t++}),t},toArray:function(e){return Pa(e,function(t){return t})||[]},only:function(e){if(!_i(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=dr;K.Fragment=dp;K.Profiler=pp;K.PureComponent=xi;K.StrictMode=fp;K.Suspense=vp;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;K.act=Lc;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ec({},e.props),a=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Li.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)Cc.call(t,s)&&!xc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:ua,type:e.type,key:a,ref:o,props:r,_owner:l}};K.createContext=function(e){return e={$$typeof:hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};K.createElement=Pc;K.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:yp,render:e}};K.isValidElement=_i;K.lazy=function(e){return{$$typeof:wp,_payload:{_status:-1,_result:e},_init:Cp}};K.memo=function(e,t){return{$$typeof:gp,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Wa.transition;Wa.transition={};try{e()}finally{Wa.transition=t}};K.unstable_act=Lc;K.useCallback=function(e,t){return Ve.current.useCallback(e,t)};K.useContext=function(e){return Ve.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ve.current.useEffect(e,t)};K.useId=function(){return Ve.current.useId()};K.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ve.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};K.useRef=function(e){return Ve.current.useRef(e)};K.useState=function(e){return Ve.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ve.current.useTransition()};K.version="18.3.1";gc.exports=K;var L=gc.exports;const Pp=yc(L),Lp=hc({__proto__:null,default:Pp},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p=L,Tp=Symbol.for("react.element"),bp=Symbol.for("react.fragment"),Ip=Object.prototype.hasOwnProperty,Np=_p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rp={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,a={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ip.call(t,r)&&!Rp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Tp,type:e,key:o,ref:l,props:a,_owner:Np.current}}Io.Fragment=bp;Io.jsx=_c;Io.jsxs=_c;vc.exports=Io;var N=vc.exports,_l={},Tc={exports:{}},rt={},bc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,j){var V=T.length;T.push(j);e:for(;0<V;){var X=V-1>>>1,te=T[X];if(0<a(te,j))T[X]=j,T[V]=te,V=X;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],V=T.pop();if(V!==j){T[0]=V;e:for(var X=0,te=T.length,Ie=te>>>1;X<Ie;){var Me=2*(X+1)-1,Pe=T[Me],ye=Me+1,ot=T[ye];if(0>a(Pe,V))ye<te&&0>a(ot,Pe)?(T[X]=ot,T[ye]=V,X=ye):(T[X]=Pe,T[Me]=V,X=Me);else if(ye<te&&0>a(ot,V))T[X]=ot,T[ye]=V,X=ye;else break e}}return j}function a(T,j){var V=T.sortIndex-j.sortIndex;return V!==0?V:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var s=[],u=[],f=1,d=null,m=3,w=!1,S=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=T)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function C(T){if(k=!1,y(T),!S)if(n(s)!==null)S=!0,Ee(b);else{var j=n(u);j!==null&&Ge(C,j.startTime-T)}}function b(T,j){S=!1,k&&(k=!1,h(P),P=-1),w=!0;var V=m;try{for(y(j),d=n(s);d!==null&&(!(d.expirationTime>j)||T&&!ee());){var X=d.callback;if(typeof X=="function"){d.callback=null,m=d.priorityLevel;var te=X(d.expirationTime<=j);j=e.unstable_now(),typeof te=="function"?d.callback=te:d===n(s)&&r(s),y(j)}else r(s);d=n(s)}if(d!==null)var Ie=!0;else{var Me=n(u);Me!==null&&Ge(C,Me.startTime-j),Ie=!1}return Ie}finally{d=null,m=V,w=!1}}var B=!1,v=null,P=-1,U=5,R=-1;function ee(){return!(e.unstable_now()-R<U)}function ae(){if(v!==null){var T=e.unstable_now();R=T;var j=!0;try{j=v(!0,T)}finally{j?W():(B=!1,v=null)}}else B=!1}var W;if(typeof c=="function")W=function(){c(ae)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,re=q.port2;q.port1.onmessage=ae,W=function(){re.postMessage(null)}}else W=function(){I(ae,0)};function Ee(T){v=T,B||(B=!0,W())}function Ge(T,j){P=I(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,Ee(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var V=m;m=j;try{return T()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var V=m;m=T;try{return j()}finally{m=V}},e.unstable_scheduleCallback=function(T,j,V){var X=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?X+V:X):V=X,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=V+te,T={id:f++,callback:j,priorityLevel:T,startTime:V,expirationTime:te,sortIndex:-1},V>X?(T.sortIndex=V,t(u,T),n(s)===null&&T===n(u)&&(k?(h(P),P=-1):k=!0,Ge(C,V-X))):(T.sortIndex=te,t(s,T),S||w||(S=!0,Ee(b))),T},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(T){var j=m;return function(){var V=m;m=j;try{return T.apply(this,arguments)}finally{m=V}}}})(Ic);bc.exports=Ic;var Op=bc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=L,nt=Op;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,Vr={};function Nn(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Nc.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,Mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,js={},Hs={};function Dp(e){return Tl.call(Hs,e)?!0:Tl.call(js,e)?!1:Mp.test(e)?Hs[e]=!0:(js[e]=!0,!1)}function Ap(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fp(e,t,n,r){if(t===null||typeof t>"u"||Ap(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,a,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ti=/[\-:]([a-z])/g;function bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ti,bi);Be[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ti,bi);Be[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ti,bi);Be[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,t,n,r){var a=Be.hasOwnProperty(t)?Be[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fp(t,n,a,r)&&(n=null),r||a===null?Dp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,La=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Ni=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Ri=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Oi=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Bc=Symbol.for("react.offscreen"),Us=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Jo;function br(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=r.stack.split(`
`),l=a.length-1,i=o.length-1;1<=l&&0<=i&&a[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==o[i]){var s=`
`+a[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=i);break}}}finally{el=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?br(e):""}function zp(e){switch(e.tag){case 5:return br(e.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case jn:return"Portal";case bl:return"Profiler";case Ni:return"StrictMode";case Il:return"Suspense";case Nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case Ri:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oi:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}function jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(t);case 8:return t===Ni?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=Mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _a(e){e._valueTracker||(e._valueTracker=Hp(e))}function Dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function no(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ac(e,t){t=t.checked,t!=null&&Ii(e,"checked",t,!1)}function Bl(e,t){Ac(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||no(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Xn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Ir(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function Fc(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ta,jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function Hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Vp=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(Vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function Bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,Jn=null,er=null;function Qs(e){if(e=fa(e)){if(typeof Hl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Mo(t),Hl(e.stateNode,e.type,t))}}function Vc(e){Jn?er?er.push(e):er=[e]:Jn=e}function Wc(){if(Jn){var e=Jn,t=er;if(er=Jn=null,Qs(e),t)for(e=0;e<t.length;e++)Qs(t[e])}}function Gc(e,t){return e(t)}function $c(){}var nl=!1;function Qc(e,t,n){if(nl)return e(t,n);nl=!0;try{return Gc(e,t,n)}finally{nl=!1,(Jn!==null||er!==null)&&($c(),Wc())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=Mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ul=!1;if(Bt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ul=!1}function Wp(e,t,n,r,a,o,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Mr=!1,ro=null,ao=!1,Vl=null,Gp={onError:function(e){Mr=!0,ro=e}};function $p(e,t,n,r,a,o,l,i,s){Mr=!1,ro=null,Wp.apply(Gp,arguments)}function Qp(e,t,n,r,a,o,l,i,s){if($p.apply(this,arguments),Mr){if(Mr){var u=ro;Mr=!1,ro=null}else throw Error(_(198));ao||(ao=!0,Vl=u)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(Rn(e)!==e)throw Error(_(188))}function Kp(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Ks(a),e;if(o===r)return Ks(a),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,r=o;break}if(i===r){l=!0,r=a,n=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===n){l=!0,n=o,r=a;break}if(i===r){l=!0,r=o,n=a;break}i=i.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Yc(e){return e=Kp(e),e!==null?qc(e):null}function qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qc(e);if(t!==null)return t;e=e.sibling}return null}var Zc=nt.unstable_scheduleCallback,Ys=nt.unstable_cancelCallback,Yp=nt.unstable_shouldYield,qp=nt.unstable_requestPaint,ke=nt.unstable_now,Zp=nt.unstable_getCurrentPriorityLevel,Mi=nt.unstable_ImmediatePriority,Xc=nt.unstable_UserBlockingPriority,oo=nt.unstable_NormalPriority,Xp=nt.unstable_LowPriority,Jc=nt.unstable_IdlePriority,No=null,Pt=null;function Jp(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var ba=64,Ia=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?r=Nr(i):(o&=l,o!==0&&(r=Nr(o)))}else l=n&~a,l!==0?r=Nr(l):o!==0&&(r=Nr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),a=1<<n,r|=e[n],t&=~a;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-gt(o),i=1<<l,s=a[l];s===-1?(!(i&n)||i&r)&&(a[l]=rm(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ed(){var e=ba;return ba<<=1,!(ba&4194240)&&(ba=64),e}function rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ca(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function om(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-gt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function Di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var le=0;function td(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nd,Ai,rd,ad,od,Gl=!1,Na=[],Zt=null,Xt=null,Jt=null,$r=new Map,Qr=new Map,$t=[],lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function Er(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=fa(t),t!==null&&Ai(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function im(e,t,n,r,a){switch(t){case"focusin":return Zt=Er(Zt,e,t,n,r,a),!0;case"dragenter":return Xt=Er(Xt,e,t,n,r,a),!0;case"mouseover":return Jt=Er(Jt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return $r.set(o,Er($r.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Qr.set(o,Er(Qr.get(o)||null,e,t,n,r,a)),!0}return!1}function ld(e){var t=wn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Kc(n),t!==null){e.blockedOn=t,od(e.priority,function(){rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return t=fa(n),t!==null&&Ai(t),e.blockedOn=n,!1;t.shift()}return!0}function Zs(e,t,n){Ga(e)&&n.delete(t)}function sm(){Gl=!1,Zt!==null&&Ga(Zt)&&(Zt=null),Xt!==null&&Ga(Xt)&&(Xt=null),Jt!==null&&Ga(Jt)&&(Jt=null),$r.forEach(Zs),Qr.forEach(Zs)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,sm)))}function Kr(e){function t(a){return Sr(a,e)}if(0<Na.length){Sr(Na[0],e);for(var n=1;n<Na.length;n++){var r=Na[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Sr(Zt,e),Xt!==null&&Sr(Xt,e),Jt!==null&&Sr(Jt,e),$r.forEach(t),Qr.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)ld(n),n.blockedOn===null&&$t.shift()}var tr=Ft.ReactCurrentBatchConfig,io=!0;function um(e,t,n,r){var a=le,o=tr.transition;tr.transition=null;try{le=1,Fi(e,t,n,r)}finally{le=a,tr.transition=o}}function cm(e,t,n,r){var a=le,o=tr.transition;tr.transition=null;try{le=4,Fi(e,t,n,r)}finally{le=a,tr.transition=o}}function Fi(e,t,n,r){if(io){var a=$l(e,t,n,r);if(a===null)pl(e,t,r,so,n),qs(e,r);else if(im(a,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<lm.indexOf(e)){for(;a!==null;){var o=fa(a);if(o!==null&&nd(o),o=$l(e,t,n,r),o===null&&pl(e,t,r,so,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var so=null;function $l(e,t,n,r){if(so=null,e=Bi(r),e=wn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return so=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case Mi:return 1;case Xc:return 4;case oo:case Xp:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var Kt=null,zi=null,$a=null;function sd(){if($a)return $a;var e,t=zi,n=t.length,r,a="value"in Kt?Kt.value:Kt.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[o-r];r++);return $a=a.slice(e,1<r?1-r:void 0)}function Qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ra(){return!0}function Xs(){return!1}function at(e){function t(n,r,a,o,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ra:Xs,this.isPropagationStopped=Xs,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=at(fr),da=he({},fr,{view:0,detail:0}),dm=at(da),al,ol,kr,Ro=he({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(al=e.screenX-kr.screenX,ol=e.screenY-kr.screenY):ol=al=0,kr=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Js=at(Ro),fm=he({},Ro,{dataTransfer:0}),pm=at(fm),mm=he({},da,{relatedTarget:0}),ll=at(mm),hm=he({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),ym=at(hm),vm=he({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=at(vm),wm=he({},fr,{data:0}),eu=at(wm),Em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=km[e])?!!t[e]:!1}function Hi(){return Cm}var xm=he({},da,{key:function(e){if(e.key){var t=Em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?Qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=at(xm),Lm=he({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=at(Lm),_m=he({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),Tm=at(_m),bm=he({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=at(bm),Nm=he({},Ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rm=at(Nm),Om=[9,13,27,32],Ui=Bt&&"CompositionEvent"in window,Dr=null;Bt&&"documentMode"in document&&(Dr=document.documentMode);var Bm=Bt&&"TextEvent"in window&&!Dr,ud=Bt&&(!Ui||Dr&&8<Dr&&11>=Dr),nu=" ",ru=!1;function cd(e,t){switch(e){case"keyup":return Om.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Mm(e,t){switch(e){case"compositionend":return dd(t);case"keypress":return t.which!==32?null:(ru=!0,nu);case"textInput":return e=t.data,e===nu&&ru?null:e;default:return null}}function Dm(e,t){if(Un)return e==="compositionend"||!Ui&&cd(e,t)?(e=sd(),$a=zi=Kt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Am[e.type]:t==="textarea"}function fd(e,t,n,r){Vc(r),t=uo(t,"onChange"),0<t.length&&(n=new ji("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Yr=null;function Fm(e){Cd(e,0)}function Oo(e){var t=Gn(e);if(Dc(t))return e}function zm(e,t){if(e==="change")return t}var pd=!1;if(Bt){var il;if(Bt){var sl="oninput"in document;if(!sl){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),sl=typeof ou.oninput=="function"}il=sl}else il=!1;pd=il&&(!document.documentMode||9<document.documentMode)}function lu(){Ar&&(Ar.detachEvent("onpropertychange",md),Yr=Ar=null)}function md(e){if(e.propertyName==="value"&&Oo(Yr)){var t=[];fd(t,Yr,e,Bi(e)),Qc(Fm,t)}}function jm(e,t,n){e==="focusin"?(lu(),Ar=t,Yr=n,Ar.attachEvent("onpropertychange",md)):e==="focusout"&&lu()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(Yr)}function Um(e,t){if(e==="click")return Oo(t)}function Vm(e,t){if(e==="input"||e==="change")return Oo(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Wm;function qr(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Tl.call(t,a)||!Et(e[a],t[a]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yd(){for(var e=window,t=no();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=no(e.document)}return t}function Vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=yd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&Vi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=su(n,o);var l=su(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $m=Bt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ql=null,Fr=null,Kl=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||Vn==null||Vn!==no(r)||(r=Vn,"selectionStart"in r&&Vi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&qr(Fr,r)||(Fr=r,r=uo(Ql,"onSelect"),0<r.length&&(t=new ji("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},ul={},vd={};Bt&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function Bo(e){if(ul[e])return ul[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vd)return ul[e]=t[n];return e}var gd=Bo("animationend"),wd=Bo("animationiteration"),Ed=Bo("animationstart"),Sd=Bo("transitionend"),kd=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){kd.set(e,t),Nn(t,[e])}for(var cl=0;cl<cu.length;cl++){var dl=cu[cl],Qm=dl.toLowerCase(),Km=dl[0].toUpperCase()+dl.slice(1);un(Qm,"on"+Km)}un(gd,"onAnimationEnd");un(wd,"onAnimationIteration");un(Ed,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Sd,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qp(r,t,void 0,e),e.currentTarget=null}function Cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&a.isPropagationStopped())break e;du(a,i,u),o=s}else for(l=0;l<r.length;l++){if(i=r[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e;du(a,i,u),o=s}}}if(ao)throw e=Vl,ao=!1,Vl=null,e}function ue(e,t){var n=t[Jl];n===void 0&&(n=t[Jl]=new Set);var r=e+"__bubble";n.has(r)||(xd(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),xd(n,e,r,t)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Ba]){e[Ba]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(Ym.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ba]||(t[Ba]=!0,fl("selectionchange",!1,t))}}function xd(e,t,n,r){switch(id(t)){case 1:var a=um;break;case 4:a=cm;break;default:a=Fi}n=a.bind(null,t,n,e),a=void 0,!Ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,a){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;l=l.return}for(;i!==null;){if(l=wn(i),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}i=i.parentNode}}r=r.return}Qc(function(){var u=o,f=Bi(n),d=[];e:{var m=kd.get(e);if(m!==void 0){var w=ji,S=e;switch(e){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":w=Pm;break;case"focusin":S="focus",w=ll;break;case"focusout":S="blur",w=ll;break;case"beforeblur":case"afterblur":w=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tm;break;case gd:case wd:case Ed:w=ym;break;case Sd:w=Im;break;case"scroll":w=dm;break;case"wheel":w=Rm;break;case"copy":case"cut":case"paste":w=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=tu}var k=(t&4)!==0,I=!k&&e==="scroll",h=k?m!==null?m+"Capture":null:m;k=[];for(var c=u,y;c!==null;){y=c;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,h!==null&&(C=Gr(c,h),C!=null&&k.push(Xr(c,C,y)))),I)break;c=c.return}0<k.length&&(m=new w(m,S,null,n,f),d.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==jl&&(S=n.relatedTarget||n.fromElement)&&(wn(S)||S[Mt]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=u,S=S?wn(S):null,S!==null&&(I=Rn(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=u),w!==S)){if(k=Js,C="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=tu,C="onPointerLeave",h="onPointerEnter",c="pointer"),I=w==null?m:Gn(w),y=S==null?m:Gn(S),m=new k(C,c+"leave",w,n,f),m.target=I,m.relatedTarget=y,C=null,wn(f)===u&&(k=new k(h,c+"enter",S,n,f),k.target=y,k.relatedTarget=I,C=k),I=C,w&&S)t:{for(k=w,h=S,c=0,y=k;y;y=Fn(y))c++;for(y=0,C=h;C;C=Fn(C))y++;for(;0<c-y;)k=Fn(k),c--;for(;0<y-c;)h=Fn(h),y--;for(;c--;){if(k===h||h!==null&&k===h.alternate)break t;k=Fn(k),h=Fn(h)}k=null}else k=null;w!==null&&fu(d,m,w,k,!1),S!==null&&I!==null&&fu(d,I,S,k,!0)}}e:{if(m=u?Gn(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var b=zm;else if(au(m))if(pd)b=Vm;else{b=Hm;var B=jm}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=Um);if(b&&(b=b(e,u))){fd(d,b,n,f);break e}B&&B(e,m,u),e==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&Ml(m,"number",m.value)}switch(B=u?Gn(u):window,e){case"focusin":(au(B)||B.contentEditable==="true")&&(Vn=B,Ql=u,Fr=null);break;case"focusout":Fr=Ql=Vn=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,uu(d,n,f);break;case"selectionchange":if($m)break;case"keydown":case"keyup":uu(d,n,f)}var v;if(Ui)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Un?cd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ud&&n.locale!=="ko"&&(Un||P!=="onCompositionStart"?P==="onCompositionEnd"&&Un&&(v=sd()):(Kt=f,zi="value"in Kt?Kt.value:Kt.textContent,Un=!0)),B=uo(u,P),0<B.length&&(P=new eu(P,e,null,n,f),d.push({event:P,listeners:B}),v?P.data=v:(v=dd(n),v!==null&&(P.data=v)))),(v=Bm?Mm(e,n):Dm(e,n))&&(u=uo(u,"onBeforeInput"),0<u.length&&(f=new eu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=v))}Cd(d,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Gr(e,n),o!=null&&r.unshift(Xr(e,o,a)),o=Gr(e,t),o!=null&&r.push(Xr(e,o,a))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,a){for(var o=t._reactName,l=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,a?(s=Gr(n,o),s!=null&&l.unshift(Xr(n,s,i))):a||(s=Gr(n,o),s!=null&&l.push(Xr(n,s,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var qm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(qm,`
`).replace(Zm,"")}function Ma(e,t,n){if(t=pu(t),pu(e)!==t&&n)throw Error(_(425))}function co(){}var Yl=null,ql=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,Xm=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(eh)}:Xl;function eh(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Kr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),xt="__reactFiber$"+pr,Jr="__reactProps$"+pr,Mt="__reactContainer$"+pr,Jl="__reactEvents$"+pr,th="__reactListeners$"+pr,nh="__reactHandles$"+pr;function wn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[xt])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function fa(e){return e=e[xt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Mo(e){return e[Jr]||null}var ei=[],$n=-1;function cn(e){return{current:e}}function ce(e){0>$n||(e.current=ei[$n],ei[$n]=null,$n--)}function se(e,t){$n++,ei[$n]=e.current,e.current=t}var sn={},ze=cn(sn),Ye=cn(!1),Pn=sn;function or(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function qe(e){return e=e.childContextTypes,e!=null}function fo(){ce(Ye),ce(ze)}function yu(e,t,n){if(ze.current!==sn)throw Error(_(168));se(ze,t),se(Ye,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(_(108,jp(e)||"Unknown",a));return he({},n,r)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Pn=ze.current,se(ze,e),se(Ye,Ye.current),!0}function vu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Pd(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,ce(Ye),ce(ze),se(ze,e)):ce(Ye),se(Ye,n)}var It=null,Do=!1,hl=!1;function Ld(e){It===null?It=[e]:It.push(e)}function rh(e){Do=!0,Ld(e)}function dn(){if(!hl&&It!==null){hl=!0;var e=0,t=le;try{var n=It;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Do=!1}catch(a){throw It!==null&&(It=It.slice(e+1)),Zc(Mi,dn),a}finally{le=t,hl=!1}}return null}var Qn=[],Kn=0,mo=null,ho=0,lt=[],it=0,Ln=null,Nt=1,Rt="";function hn(e,t){Qn[Kn++]=ho,Qn[Kn++]=mo,mo=e,ho=t}function _d(e,t,n){lt[it++]=Nt,lt[it++]=Rt,lt[it++]=Ln,Ln=e;var r=Nt;e=Rt;var a=32-gt(r)-1;r&=~(1<<a),n+=1;var o=32-gt(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Nt=1<<32-gt(t)+a|n<<a|r,Rt=o+e}else Nt=1<<o|n<<a|r,Rt=e}function Wi(e){e.return!==null&&(hn(e,1),_d(e,1,0))}function Gi(e){for(;e===mo;)mo=Qn[--Kn],Qn[Kn]=null,ho=Qn[--Kn],Qn[Kn]=null;for(;e===Ln;)Ln=lt[--it],lt[it]=null,Rt=lt[--it],lt[it]=null,Nt=lt[--it],lt[it]=null}var tt=null,et=null,fe=!1,vt=null;function Td(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Nt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(fe){var t=et;if(t){var n=t;if(!gu(e,t)){if(ti(e))throw Error(_(418));t=en(n.nextSibling);var r=tt;t&&gu(e,t)?Td(r,n):(e.flags=e.flags&-4097|2,fe=!1,tt=e)}}else{if(ti(e))throw Error(_(418));e.flags=e.flags&-4097|2,fe=!1,tt=e}}}function wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Da(e){if(e!==tt)return!1;if(!fe)return wu(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=et)){if(ti(e))throw bd(),Error(_(418));for(;t;)Td(e,t),t=en(t.nextSibling)}if(wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?en(e.stateNode.nextSibling):null;return!0}function bd(){for(var e=et;e;)e=en(e.nextSibling)}function lr(){et=tt=null,fe=!1}function $i(e){vt===null?vt=[e]:vt.push(e)}var ah=Ft.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var i=a.refs;l===null?delete i[o]:i[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Aa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Eu(e){var t=e._init;return t(e._payload)}function Id(e){function t(h,c){if(e){var y=h.deletions;y===null?(h.deletions=[c],h.flags|=16):y.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function a(h,c){return h=an(h,c),h.index=0,h.sibling=null,h}function o(h,c,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<c?(h.flags|=2,c):y):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,c,y,C){return c===null||c.tag!==6?(c=kl(y,h.mode,C),c.return=h,c):(c=a(c,y),c.return=h,c)}function s(h,c,y,C){var b=y.type;return b===Hn?f(h,c,y.props.children,C,y.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Wt&&Eu(b)===c.type)?(C=a(c,y.props),C.ref=Cr(h,c,y),C.return=h,C):(C=eo(y.type,y.key,y.props,null,h.mode,C),C.ref=Cr(h,c,y),C.return=h,C)}function u(h,c,y,C){return c===null||c.tag!==4||c.stateNode.containerInfo!==y.containerInfo||c.stateNode.implementation!==y.implementation?(c=Cl(y,h.mode,C),c.return=h,c):(c=a(c,y.children||[]),c.return=h,c)}function f(h,c,y,C,b){return c===null||c.tag!==7?(c=xn(y,h.mode,C,b),c.return=h,c):(c=a(c,y),c.return=h,c)}function d(h,c,y){if(typeof c=="string"&&c!==""||typeof c=="number")return c=kl(""+c,h.mode,y),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case La:return y=eo(c.type,c.key,c.props,null,h.mode,y),y.ref=Cr(h,null,c),y.return=h,y;case jn:return c=Cl(c,h.mode,y),c.return=h,c;case Wt:var C=c._init;return d(h,C(c._payload),y)}if(Ir(c)||gr(c))return c=xn(c,h.mode,y,null),c.return=h,c;Aa(h,c)}return null}function m(h,c,y,C){var b=c!==null?c.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:i(h,c,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case La:return y.key===b?s(h,c,y,C):null;case jn:return y.key===b?u(h,c,y,C):null;case Wt:return b=y._init,m(h,c,b(y._payload),C)}if(Ir(y)||gr(y))return b!==null?null:f(h,c,y,C,null);Aa(h,y)}return null}function w(h,c,y,C,b){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(y)||null,i(c,h,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case La:return h=h.get(C.key===null?y:C.key)||null,s(c,h,C,b);case jn:return h=h.get(C.key===null?y:C.key)||null,u(c,h,C,b);case Wt:var B=C._init;return w(h,c,y,B(C._payload),b)}if(Ir(C)||gr(C))return h=h.get(y)||null,f(c,h,C,b,null);Aa(c,C)}return null}function S(h,c,y,C){for(var b=null,B=null,v=c,P=c=0,U=null;v!==null&&P<y.length;P++){v.index>P?(U=v,v=null):U=v.sibling;var R=m(h,v,y[P],C);if(R===null){v===null&&(v=U);break}e&&v&&R.alternate===null&&t(h,v),c=o(R,c,P),B===null?b=R:B.sibling=R,B=R,v=U}if(P===y.length)return n(h,v),fe&&hn(h,P),b;if(v===null){for(;P<y.length;P++)v=d(h,y[P],C),v!==null&&(c=o(v,c,P),B===null?b=v:B.sibling=v,B=v);return fe&&hn(h,P),b}for(v=r(h,v);P<y.length;P++)U=w(v,h,P,y[P],C),U!==null&&(e&&U.alternate!==null&&v.delete(U.key===null?P:U.key),c=o(U,c,P),B===null?b=U:B.sibling=U,B=U);return e&&v.forEach(function(ee){return t(h,ee)}),fe&&hn(h,P),b}function k(h,c,y,C){var b=gr(y);if(typeof b!="function")throw Error(_(150));if(y=b.call(y),y==null)throw Error(_(151));for(var B=b=null,v=c,P=c=0,U=null,R=y.next();v!==null&&!R.done;P++,R=y.next()){v.index>P?(U=v,v=null):U=v.sibling;var ee=m(h,v,R.value,C);if(ee===null){v===null&&(v=U);break}e&&v&&ee.alternate===null&&t(h,v),c=o(ee,c,P),B===null?b=ee:B.sibling=ee,B=ee,v=U}if(R.done)return n(h,v),fe&&hn(h,P),b;if(v===null){for(;!R.done;P++,R=y.next())R=d(h,R.value,C),R!==null&&(c=o(R,c,P),B===null?b=R:B.sibling=R,B=R);return fe&&hn(h,P),b}for(v=r(h,v);!R.done;P++,R=y.next())R=w(v,h,P,R.value,C),R!==null&&(e&&R.alternate!==null&&v.delete(R.key===null?P:R.key),c=o(R,c,P),B===null?b=R:B.sibling=R,B=R);return e&&v.forEach(function(ae){return t(h,ae)}),fe&&hn(h,P),b}function I(h,c,y,C){if(typeof y=="object"&&y!==null&&y.type===Hn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case La:e:{for(var b=y.key,B=c;B!==null;){if(B.key===b){if(b=y.type,b===Hn){if(B.tag===7){n(h,B.sibling),c=a(B,y.props.children),c.return=h,h=c;break e}}else if(B.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Wt&&Eu(b)===B.type){n(h,B.sibling),c=a(B,y.props),c.ref=Cr(h,B,y),c.return=h,h=c;break e}n(h,B);break}else t(h,B);B=B.sibling}y.type===Hn?(c=xn(y.props.children,h.mode,C,y.key),c.return=h,h=c):(C=eo(y.type,y.key,y.props,null,h.mode,C),C.ref=Cr(h,c,y),C.return=h,h=C)}return l(h);case jn:e:{for(B=y.key;c!==null;){if(c.key===B)if(c.tag===4&&c.stateNode.containerInfo===y.containerInfo&&c.stateNode.implementation===y.implementation){n(h,c.sibling),c=a(c,y.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Cl(y,h.mode,C),c.return=h,h=c}return l(h);case Wt:return B=y._init,I(h,c,B(y._payload),C)}if(Ir(y))return S(h,c,y,C);if(gr(y))return k(h,c,y,C);Aa(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,c!==null&&c.tag===6?(n(h,c.sibling),c=a(c,y),c.return=h,h=c):(n(h,c),c=kl(y,h.mode,C),c.return=h,h=c),l(h)):n(h,c)}return I}var ir=Id(!0),Nd=Id(!1),yo=cn(null),vo=null,Yn=null,Qi=null;function Ki(){Qi=Yn=vo=null}function Yi(e){var t=yo.current;ce(yo),e._currentValue=t}function ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){vo=e,Qi=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(vo===null)throw Error(_(308));Yn=e,vo.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var En=null;function qi(e){En===null?En=[e]:En.push(e)}function Rd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,qi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Dt(e,n)}return a=r.interleaved,a===null?(t.next=t,qi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Dt(e,n)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Di(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var a=e.updateQueue;Gt=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==l&&(i===null?f.firstBaseUpdate=u:i.next=u,f.lastBaseUpdate=s))}if(o!==null){var d=a.baseState;l=0,f=u=s=null,i=o;do{var m=i.lane,w=i.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,k=i;switch(m=t,w=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){d=S.call(w,d,m);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(w,d,m):S,m==null)break e;d=he({},d,m);break e;case 2:Gt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else w={eventTime:w,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(u=f=w,s=d):f=f.next=w,l|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Tn|=l,e.lanes=l,e.memoizedState=d}}function ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(_(191,a));a.call(r)}}}var pa={},Lt=cn(pa),ea=cn(pa),ta=cn(pa);function Sn(e){if(e===pa)throw Error(_(174));return e}function Xi(e,t){switch(se(ta,t),se(ea,e),se(Lt,pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Al(t,e)}ce(Lt),se(Lt,t)}function sr(){ce(Lt),ce(ea),ce(ta)}function Bd(e){Sn(ta.current);var t=Sn(Lt.current),n=Al(t,e.type);t!==n&&(se(ea,e),se(Lt,n))}function Ji(e){ea.current===e&&(ce(Lt),ce(ea))}var pe=cn(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yl=[];function es(){for(var e=0;e<yl.length;e++)yl[e]._workInProgressVersionPrimary=null;yl.length=0}var Ya=Ft.ReactCurrentDispatcher,vl=Ft.ReactCurrentBatchConfig,_n=0,me=null,Le=null,Te=null,Eo=!1,zr=!1,na=0,oh=0;function De(){throw Error(_(321))}function ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function ns(e,t,n,r,a,o){if(_n=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ya.current=e===null||e.memoizedState===null?uh:ch,e=n(r,a),zr){o=0;do{if(zr=!1,na=0,25<=o)throw Error(_(301));o+=1,Te=Le=null,t.updateQueue=null,Ya.current=dh,e=n(r,a)}while(zr)}if(Ya.current=So,t=Le!==null&&Le.next!==null,_n=0,Te=Le=me=null,Eo=!1,t)throw Error(_(300));return e}function rs(){var e=na!==0;return na=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?me.memoizedState=Te=e:Te=Te.next=e,Te}function dt(){if(Le===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Te===null?me.memoizedState:Te.next;if(t!==null)Te=t,Le=e;else{if(e===null)throw Error(_(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Te===null?me.memoizedState=Te=e:Te=Te.next=e}return Te}function ra(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Le,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var i=l=null,s=null,u=o;do{var f=u.lane;if((_n&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,l=r):s=s.next=d,me.lanes|=f,Tn|=f}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=i,Et(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,me.lanes|=o,Tn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do o=e(o,l.action),l=l.next;while(l!==a);Et(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Md(){}function Dd(e,t){var n=me,r=dt(),a=t(),o=!Et(r.memoizedState,a);if(o&&(r.memoizedState=a,Ke=!0),r=r.queue,as(zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,aa(9,Fd.bind(null,n,r,a,t),void 0,null),be===null)throw Error(_(349));_n&30||Ad(n,t,a)}return a}function Ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fd(e,t,n,r){t.value=n,t.getSnapshot=r,jd(t)&&Hd(e)}function zd(e,t,n){return n(function(){jd(t)&&Hd(e)})}function jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Hd(e){var t=Dt(e,1);t!==null&&wt(t,e,1,-1)}function Cu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t.queue=e,e=e.dispatch=sh.bind(null,me,e),[t.memoizedState,e]}function aa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ud(){return dt().memoizedState}function qa(e,t,n,r){var a=Ct();me.flags|=e,a.memoizedState=aa(1|t,n,void 0,r===void 0?null:r)}function Ao(e,t,n,r){var a=dt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var l=Le.memoizedState;if(o=l.destroy,r!==null&&ts(r,l.deps)){a.memoizedState=aa(t,n,o,r);return}}me.flags|=e,a.memoizedState=aa(1|t,n,o,r)}function xu(e,t){return qa(8390656,8,e,t)}function as(e,t){return Ao(2048,8,e,t)}function Vd(e,t){return Ao(4,2,e,t)}function Wd(e,t){return Ao(4,4,e,t)}function Gd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,Gd.bind(null,t,e),n)}function os(){}function Qd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ts(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yd(e,t,n){return _n&21?(Et(n,t)||(n=ed(),me.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function lh(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=vl.transition;vl.transition={};try{e(!1),t()}finally{le=n,vl.transition=r}}function qd(){return dt().memoizedState}function ih(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zd(e))Xd(t,n);else if(n=Rd(e,t,n,r),n!==null){var a=Ue();wt(n,e,r,a),Jd(n,t,r)}}function sh(e,t,n){var r=rn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zd(e))Xd(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,i=o(l,n);if(a.hasEagerState=!0,a.eagerState=i,Et(i,l)){var s=t.interleaved;s===null?(a.next=a,qi(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Rd(e,t,a,r),n!==null&&(a=Ue(),wt(n,e,r,a),Jd(n,t,r))}}function Zd(e){var t=e.alternate;return e===me||t!==null&&t===me}function Xd(e,t){zr=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Di(e,n)}}var So={readContext:ct,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},uh={readContext:ct,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qa(4194308,4,Gd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return qa(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ih.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Cu,useDebugValue:os,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Cu(!1),t=e[0];return e=lh.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,a=Ct();if(fe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),be===null)throw Error(_(349));_n&30||Ad(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,xu(zd.bind(null,r,o,e),[e]),r.flags|=2048,aa(9,Fd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=be.identifierPrefix;if(fe){var n=Rt,r=Nt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=na++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:ct,useCallback:Qd,useContext:ct,useEffect:as,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Kd,useReducer:gl,useRef:Ud,useState:function(){return gl(ra)},useDebugValue:os,useDeferredValue:function(e){var t=dt();return Yd(t,Le.memoizedState,e)},useTransition:function(){var e=gl(ra)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Dd,useId:qd,unstable_isNewReconciler:!1},dh={readContext:ct,useCallback:Qd,useContext:ct,useEffect:as,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Kd,useReducer:wl,useRef:Ud,useState:function(){return wl(ra)},useDebugValue:os,useDeferredValue:function(e){var t=dt();return Le===null?t.memoizedState=e:Yd(t,Le.memoizedState,e)},useTransition:function(){var e=wl(ra)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Dd,useId:qd,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ai(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fo={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),a=rn(e),o=Ot(r,a);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,a),t!==null&&(wt(t,e,a,r),Ka(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),a=rn(e),o=Ot(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,a),t!==null&&(wt(t,e,a,r),Ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=rn(e),a=Ot(n,r);a.tag=2,t!=null&&(a.callback=t),t=tn(e,a,r),t!==null&&(wt(t,e,r,n),Ka(t,e,r))}};function Pu(e,t,n,r,a,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(a,o):!0}function ef(e,t,n){var r=!1,a=sn,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(a=qe(t)?Pn:ze.current,r=t.contextTypes,o=(r=r!=null)?or(e,a):sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fo.enqueueReplaceState(t,t.state,null)}function oi(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Zi(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=ct(o):(o=qe(t)?Pn:ze.current,a.context=or(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ai(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Fo.enqueueReplaceState(a,a.state,null),go(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=zp(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function El(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Co||(Co=!0,yi=r),li(e,t)},n}function nf(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){li(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){li(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fh;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Lh.bind(null,e,t,n),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var ph=Ft.ReactCurrentOwner,Ke=!1;function He(e,t,n,r){t.child=e===null?Nd(t,null,n,r):ir(t,e.child,n,r)}function Iu(e,t,n,r,a){n=n.render;var o=t.ref;return nr(t,a),r=ns(e,t,n,r,o,a),n=rs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(fe&&n&&Wi(t),t.flags|=1,He(e,t,r,a),t.child)}function Nu(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!ps(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,rf(e,t,o,r,a)):(e=eo(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(l,r)&&e.ref===t.ref)return At(e,t,a)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(qr(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,At(e,t,a)}return ii(e,t,n,r,a)}function af(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Zn,Xe),Xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Zn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(Zn,Xe),Xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,se(Zn,Xe),Xe|=r;return He(e,t,a,n),t.child}function of(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,n,r,a){var o=qe(n)?Pn:ze.current;return o=or(t,o),nr(t,a),n=ns(e,t,n,r,o,a),r=rs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(fe&&r&&Wi(t),t.flags|=1,He(e,t,n,a),t.child)}function Ru(e,t,n,r,a){if(qe(n)){var o=!0;po(t)}else o=!1;if(nr(t,a),t.stateNode===null)Za(e,t),ef(t,n,r),oi(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=qe(n)?Pn:ze.current,u=or(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||s!==u)&&Lu(t,l,r,u),Gt=!1;var m=t.memoizedState;l.state=m,go(t,r,l,a),s=t.memoizedState,i!==r||m!==s||Ye.current||Gt?(typeof f=="function"&&(ai(t,n,f,r),s=t.memoizedState),(i=Gt||Pu(t,n,i,r,m,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Od(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:mt(t.type,i),l.props=u,d=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ct(s):(s=qe(n)?Pn:ze.current,s=or(t,s));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==d||m!==s)&&Lu(t,l,r,s),Gt=!1,m=t.memoizedState,l.state=m,go(t,r,l,a);var S=t.memoizedState;i!==d||m!==S||Ye.current||Gt?(typeof w=="function"&&(ai(t,n,w,r),S=t.memoizedState),(u=Gt||Pu(t,n,u,r,m,S,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return si(e,t,n,r,o,a)}function si(e,t,n,r,a,o){of(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&vu(t,n,!1),At(e,t,o);r=t.stateNode,ph.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ir(t,e.child,null,o),t.child=ir(t,null,i,o)):He(e,t,i,o),t.memoizedState=r.state,a&&vu(t,n,!0),t.child}function lf(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),Xi(e,t.containerInfo)}function Ou(e,t,n,r,a){return lr(),$i(a),t.flags|=256,He(e,t,n,r),t.child}var ui={dehydrated:null,treeContext:null,retryLane:0};function ci(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,n){var r=t.pendingProps,a=pe.current,o=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),se(pe,a&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ho(l,r,0,null),e=xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ci(n),t.memoizedState=ui,e):ls(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return mh(e,t,l,r,i,a,n);if(o){o=r.fallback,l=t.mode,a=e.child,i=a.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=an(a,s),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?o=an(i,o):(o=xn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ci(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ui,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ls(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fa(e,t,n,r){return r!==null&&$i(r),ir(t,e.child,null,n),e=ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,a,o,l){if(n)return t.flags&256?(t.flags&=-257,r=El(Error(_(422))),Fa(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Ho({mode:"visible",children:r.children},a,0,null),o=xn(o,a,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ir(t,e.child,null,l),t.child.memoizedState=ci(l),t.memoizedState=ui,o);if(!(t.mode&1))return Fa(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(_(419)),r=El(o,r,void 0),Fa(e,t,l,r)}if(i=(l&e.childLanes)!==0,Ke||i){if(r=be,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Dt(e,a),wt(r,e,a,-1))}return fs(),r=El(Error(_(421))),Fa(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=_h.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,et=en(a.nextSibling),tt=t,fe=!0,vt=null,e!==null&&(lt[it++]=Nt,lt[it++]=Rt,lt[it++]=Ln,Nt=e.id,Rt=e.overflow,Ln=t),t=ls(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ri(e.return,t,n)}function Sl(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function uf(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(pe,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&wo(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Sl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&wo(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Sl(t,!0,n,null,o);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Za(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hh(e,t,n){switch(t.tag){case 3:lf(t),lr();break;case 5:Bd(t);break;case 1:qe(t.type)&&po(t);break;case 4:Xi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;se(yo,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?sf(e,t,n):(se(pe,pe.current&1),e=At(e,t,n),e!==null?e.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,af(e,t,n)}return At(e,t,n)}var cf,di,df,ff;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};di=function(){};df=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Sn(Lt.current);var o=null;switch(n){case"input":a=Ol(e,a),r=Ol(e,r),o=[];break;case"select":a=he({},a,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":a=Dl(e,a),r=Dl(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=co)}Fl(n,r);var l;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&i[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),o||i===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yh(e,t,n){var r=t.pendingProps;switch(Gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return qe(t.type)&&fo(),Ae(t),null;case 3:return r=t.stateNode,sr(),ce(Ye),ce(ze),es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(wi(vt),vt=null))),di(e,t),Ae(t),null;case 5:Ji(t);var a=Sn(ta.current);if(n=t.type,e!==null&&t.stateNode!=null)df(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ae(t),null}if(e=Sn(Lt.current),Da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xt]=t,r[Jr]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(a=0;a<Rr.length;a++)ue(Rr[a],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Vs(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":Gs(r,o),ue("invalid",r)}Fl(n,o),a=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&Ma(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Ma(r.textContent,i,e),a=["children",""+i]):Vr.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&ue("scroll",r)}switch(n){case"input":_a(r),Ws(r,o,!0);break;case"textarea":_a(r),$s(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=co)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[xt]=t,e[Jr]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(l=zl(n,r),n){case"dialog":ue("cancel",e),ue("close",e),a=r;break;case"iframe":case"object":case"embed":ue("load",e),a=r;break;case"video":case"audio":for(a=0;a<Rr.length;a++)ue(Rr[a],e);a=r;break;case"source":ue("error",e),a=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),a=r;break;case"details":ue("toggle",e),a=r;break;case"input":Vs(e,r),a=Ol(e,r),ue("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=he({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Gs(e,r),a=Dl(e,r),ue("invalid",e);break;default:a=r}Fl(n,a),i=a;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?Uc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&jc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Wr(e,s):typeof s=="number"&&Wr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ue("scroll",e):s!=null&&Ii(e,o,s,l))}switch(n){case"input":_a(e),Ws(e,r,!1);break;case"textarea":_a(e),$s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Sn(ta.current),Sn(Lt.current),Da(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Ma(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ae(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&et!==null&&t.mode&1&&!(t.flags&128))bd(),lr(),t.flags|=98560,o=!1;else if(o=Da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[xt]=t}else lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else vt!==null&&(wi(vt),vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?_e===0&&(_e=3):fs())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return sr(),di(e,t),e===null&&Zr(t.stateNode.containerInfo),Ae(t),null;case 10:return Yi(t.type._context),Ae(t),null;case 17:return qe(t.type)&&fo(),Ae(t),null;case 19:if(ce(pe),o=t.memoizedState,o===null)return Ae(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)xr(o,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=wo(e),l!==null){for(t.flags|=128,xr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ke()>cr&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=wo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!fe)return Ae(t),null}else 2*ke()-o.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ke(),t.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function vh(e,t){switch(Gi(t),t.tag){case 1:return qe(t.type)&&fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),ce(Ye),ce(ze),es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return sr(),null;case 10:return Yi(t.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var za=!1,Fe=!1,gh=typeof WeakSet=="function"?WeakSet:Set,M=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function fi(e,t,n){try{n()}catch(r){we(e,t,r)}}var Mu=!1;function wh(e,t){if(Yl=io,e=yd(),Vi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,i=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var w;d!==n||a!==0&&d.nodeType!==3||(i=l+a),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(w=d.firstChild)!==null;)m=d,d=w;for(;;){if(d===e)break t;if(m===n&&++u===a&&(i=l),m===o&&++f===r&&(s=l),(w=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=w}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ql={focusedElem:e,selectionRange:n},io=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,I=S.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?k:mt(t.type,k),I);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(C){we(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return S=Mu,Mu=!1,S}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&fi(t,n,o)}a=a.next}while(a!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[Jr],delete t[Jl],delete t[th],delete t[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mf(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=co));else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}function hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hi(e,t,n),e=e.sibling;e!==null;)hi(e,t,n),e=e.sibling}var Re=null,ht=!1;function Ut(e,t,n){for(n=n.child;n!==null;)hf(e,t,n),n=n.sibling}function hf(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:Fe||qn(n,t);case 6:var r=Re,a=ht;Re=null,Ut(e,t,n),Re=r,ht=a,Re!==null&&(ht?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(ht?(e=Re,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),Kr(e)):ml(Re,n.stateNode));break;case 4:r=Re,a=ht,Re=n.stateNode.containerInfo,ht=!0,Ut(e,t,n),Re=r,ht=a;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&fi(n,t,l),a=a.next}while(a!==r)}Ut(e,t,n);break;case 1:if(!Fe&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){we(n,t,i)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Ut(e,t,n),Fe=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gh),t.forEach(function(r){var a=Th.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:Re=i.stateNode,ht=!1;break e;case 3:Re=i.stateNode.containerInfo,ht=!0;break e;case 4:Re=i.stateNode.containerInfo,ht=!0;break e}i=i.return}if(Re===null)throw Error(_(160));hf(o,l,a),Re=null,ht=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){we(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}function yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),kt(e),r&4){try{jr(3,e,e.return),zo(3,e)}catch(k){we(e,e.return,k)}try{jr(5,e,e.return)}catch(k){we(e,e.return,k)}}break;case 1:ft(t,e),kt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(ft(t,e),kt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var a=e.stateNode;try{Wr(a,"")}catch(k){we(e,e.return,k)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Ac(a,o),zl(i,l);var u=zl(i,o);for(l=0;l<s.length;l+=2){var f=s[l],d=s[l+1];f==="style"?Uc(a,d):f==="dangerouslySetInnerHTML"?jc(a,d):f==="children"?Wr(a,d):Ii(a,f,d,u)}switch(i){case"input":Bl(a,o);break;case"textarea":Fc(a,o);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Xn(a,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?Xn(a,!!o.multiple,o.defaultValue,!0):Xn(a,!!o.multiple,o.multiple?[]:"",!1))}a[Jr]=o}catch(k){we(e,e.return,k)}}break;case 6:if(ft(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(k){we(e,e.return,k)}}break;case 3:if(ft(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(k){we(e,e.return,k)}break;case 4:ft(t,e),kt(e);break;case 13:ft(t,e),kt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(us=ke())),r&4&&Au(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||f,ft(t,e),Fe=u):ft(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(d=M=f;M!==null;){switch(m=M,w=m.child,m.tag){case 0:case 11:case 14:case 15:jr(4,m,m.return);break;case 1:qn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){we(r,n,k)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){zu(d);continue}}w!==null?(w.return=m,M=w):zu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Hc("display",l))}catch(k){we(e,e.return,k)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(k){we(e,e.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(t,e),kt(e),r&4&&Au(e);break;case 21:break;default:ft(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Wr(a,""),r.flags&=-33);var o=Du(e);hi(e,o,a);break;case 3:case 4:var l=r.stateNode.containerInfo,i=Du(e);mi(e,i,l);break;default:throw Error(_(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eh(e,t,n){M=e,vf(e)}function vf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var a=M,o=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||za;if(!l){var i=a.alternate,s=i!==null&&i.memoizedState!==null||Fe;i=za;var u=Fe;if(za=l,(Fe=s)&&!u)for(M=a;M!==null;)l=M,s=l.child,l.tag===22&&l.memoizedState!==null?ju(a):s!==null?(s.return=l,M=s):ju(a);for(;o!==null;)M=o,vf(o),o=o.sibling;M=a,za=i,Fe=u}Fu(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,M=o):Fu(e)}}function Fu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ku(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ku(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Kr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Fe||t.flags&512&&pi(t)}catch(m){we(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function zu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function ju(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){we(t,a,s)}}var o=t.return;try{pi(t)}catch(s){we(t,o,s)}break;case 5:var l=t.return;try{pi(t)}catch(s){we(t,l,s)}}}catch(s){we(t,t.return,s)}if(t===e){M=null;break}var i=t.sibling;if(i!==null){i.return=t.return,M=i;break}M=t.return}}var Sh=Math.ceil,ko=Ft.ReactCurrentDispatcher,is=Ft.ReactCurrentOwner,ut=Ft.ReactCurrentBatchConfig,Z=0,be=null,xe=null,Oe=0,Xe=0,Zn=cn(0),_e=0,oa=null,Tn=0,jo=0,ss=0,Hr=null,Qe=null,us=0,cr=1/0,bt=null,Co=!1,yi=null,nn=null,ja=!1,Yt=null,xo=0,Ur=0,vi=null,Xa=-1,Ja=0;function Ue(){return Z&6?ke():Xa!==-1?Xa:Xa=ke()}function rn(e){return e.mode&1?Z&2&&Oe!==0?Oe&-Oe:ah.transition!==null?(Ja===0&&(Ja=ed()),Ja):(e=le,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function wt(e,t,n,r){if(50<Ur)throw Ur=0,vi=null,Error(_(185));ca(e,n,r),(!(Z&2)||e!==be)&&(e===be&&(!(Z&2)&&(jo|=n),_e===4&&Qt(e,Oe)),Ze(e,r),n===1&&Z===0&&!(t.mode&1)&&(cr=ke()+500,Do&&dn()))}function Ze(e,t){var n=e.callbackNode;am(e,t);var r=lo(e,e===be?Oe:0);if(r===0)n!==null&&Ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ys(n),t===1)e.tag===0?rh(Hu.bind(null,e)):Ld(Hu.bind(null,e)),Jm(function(){!(Z&6)&&dn()}),n=null;else{switch(td(r)){case 1:n=Mi;break;case 4:n=Xc;break;case 16:n=oo;break;case 536870912:n=Jc;break;default:n=oo}n=Pf(n,gf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gf(e,t){if(Xa=-1,Ja=0,Z&6)throw Error(_(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=lo(e,e===be?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Po(e,r);else{t=r;var a=Z;Z|=2;var o=Ef();(be!==e||Oe!==t)&&(bt=null,cr=ke()+500,Cn(e,t));do try{xh();break}catch(i){wf(e,i)}while(!0);Ki(),ko.current=o,Z=a,xe!==null?t=0:(be=null,Oe=0,t=_e)}if(t!==0){if(t===2&&(a=Wl(e),a!==0&&(r=a,t=gi(e,a))),t===1)throw n=oa,Cn(e,0),Qt(e,r),Ze(e,ke()),n;if(t===6)Qt(e,r);else{if(a=e.current.alternate,!(r&30)&&!kh(a)&&(t=Po(e,r),t===2&&(o=Wl(e),o!==0&&(r=o,t=gi(e,o))),t===1))throw n=oa,Cn(e,0),Qt(e,r),Ze(e,ke()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:yn(e,Qe,bt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=us+500-ke(),10<t)){if(lo(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Xl(yn.bind(null,e,Qe,bt),t);break}yn(e,Qe,bt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-gt(r);o=1<<l,l=t[l],l>a&&(a=l),r&=~o}if(r=a,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sh(r/1960))-r,10<r){e.timeoutHandle=Xl(yn.bind(null,e,Qe,bt),r);break}yn(e,Qe,bt);break;case 5:yn(e,Qe,bt);break;default:throw Error(_(329))}}}return Ze(e,ke()),e.callbackNode===n?gf.bind(null,e):null}function gi(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Po(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&wi(t)),e}function wi(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function kh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Et(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ss,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(Z&6)throw Error(_(327));rr();var t=lo(e,0);if(!(t&1))return Ze(e,ke()),null;var n=Po(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=gi(e,r))}if(n===1)throw n=oa,Cn(e,0),Qt(e,t),Ze(e,ke()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Qe,bt),Ze(e,ke()),null}function cs(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(cr=ke()+500,Do&&dn())}}function bn(e){Yt!==null&&Yt.tag===0&&!(Z&6)&&rr();var t=Z;Z|=1;var n=ut.transition,r=le;try{if(ut.transition=null,le=1,e)return e()}finally{le=r,ut.transition=n,Z=t,!(Z&6)&&dn()}}function ds(){Xe=Zn.current,ce(Zn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xm(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Gi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:sr(),ce(Ye),ce(ze),es();break;case 5:Ji(r);break;case 4:sr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:Yi(r.type._context);break;case 22:case 23:ds()}n=n.return}if(be=e,xe=e=an(e.current,null),Oe=Xe=t,_e=0,oa=null,ss=jo=Tn=0,Qe=Hr=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=a,r.next=l}n.pending=r}En=null}return e}function wf(e,t){do{var n=xe;try{if(Ki(),Ya.current=So,Eo){for(var r=me.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Eo=!1}if(_n=0,Te=Le=me=null,zr=!1,na=0,is.current=null,n===null||n.return===null){_e=1,oa=t,xe=null;break}e:{var o=e,l=n.return,i=n,s=t;if(t=Oe,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=i,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Tu(l);if(w!==null){w.flags&=-257,bu(w,l,i,o,t),w.mode&1&&_u(o,u,t),t=w,s=u;var S=t.updateQueue;if(S===null){var k=new Set;k.add(s),t.updateQueue=k}else S.add(s);break e}else{if(!(t&1)){_u(o,u,t),fs();break e}s=Error(_(426))}}else if(fe&&i.mode&1){var I=Tu(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),bu(I,l,i,o,t),$i(ur(s,i));break e}}o=s=ur(s,i),_e!==4&&(_e=2),Hr===null?Hr=[o]:Hr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=tf(o,s,t);Su(o,h);break e;case 1:i=s;var c=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nn===null||!nn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=nf(o,i,t);Su(o,C);break e}}o=o.return}while(o!==null)}kf(n)}catch(b){t=b,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Ef(){var e=ko.current;return ko.current=So,e===null?So:e}function fs(){(_e===0||_e===3||_e===2)&&(_e=4),be===null||!(Tn&268435455)&&!(jo&268435455)||Qt(be,Oe)}function Po(e,t){var n=Z;Z|=2;var r=Ef();(be!==e||Oe!==t)&&(bt=null,Cn(e,t));do try{Ch();break}catch(a){wf(e,a)}while(!0);if(Ki(),Z=n,ko.current=r,xe!==null)throw Error(_(261));return be=null,Oe=0,_e}function Ch(){for(;xe!==null;)Sf(xe)}function xh(){for(;xe!==null&&!Yp();)Sf(xe)}function Sf(e){var t=xf(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?kf(e):xe=t,is.current=null}function kf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vh(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,xe=null;return}}else if(n=yh(n,t,Xe),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);_e===0&&(_e=5)}function yn(e,t,n){var r=le,a=ut.transition;try{ut.transition=null,le=1,Ph(e,t,n,r)}finally{ut.transition=a,le=r}return null}function Ph(e,t,n,r){do rr();while(Yt!==null);if(Z&6)throw Error(_(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(om(e,o),e===be&&(xe=be=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,Pf(oo,function(){return rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ut.transition,ut.transition=null;var l=le;le=1;var i=Z;Z|=4,is.current=null,wh(e,n),yf(n,e),Gm(ql),io=!!Yl,ql=Yl=null,e.current=n,Eh(n),qp(),Z=i,le=l,ut.transition=o}else e.current=n;if(ja&&(ja=!1,Yt=e,xo=a),o=e.pendingLanes,o===0&&(nn=null),Jp(n.stateNode),Ze(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Co)throw Co=!1,e=yi,yi=null,e;return xo&1&&e.tag!==0&&rr(),o=e.pendingLanes,o&1?e===vi?Ur++:(Ur=0,vi=e):Ur=0,dn(),null}function rr(){if(Yt!==null){var e=td(xo),t=ut.transition,n=le;try{if(ut.transition=null,le=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,xo=0,Z&6)throw Error(_(331));var a=Z;for(Z|=4,M=e.current;M!==null;){var o=M,l=o.child;if(M.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:jr(8,f,o)}var d=f.child;if(d!==null)d.return=f,M=d;else for(;M!==null;){f=M;var m=f.sibling,w=f.return;if(pf(f),f===u){M=null;break}if(m!==null){m.return=w,M=m;break}M=w}}}var S=o.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}M=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,M=l;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:jr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,M=h;break e}M=o.return}}var c=e.current;for(M=c;M!==null;){l=M;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,M=y;else e:for(l=c;M!==null;){if(i=M,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:zo(9,i)}}catch(b){we(i,i.return,b)}if(i===l){M=null;break e}var C=i.sibling;if(C!==null){C.return=i.return,M=C;break e}M=i.return}}if(Z=a,dn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{le=n,ut.transition=t}}return!1}function Uu(e,t,n){t=ur(n,t),t=tf(e,t,1),e=tn(e,t,1),t=Ue(),e!==null&&(ca(e,1,t),Ze(e,t))}function we(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=ur(n,e),e=nf(t,e,1),t=tn(t,e,1),e=Ue(),t!==null&&(ca(t,1,e),Ze(t,e));break}}t=t.return}}function Lh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Oe&n)===n&&(_e===4||_e===3&&(Oe&130023424)===Oe&&500>ke()-us?Cn(e,0):ss|=n),Ze(e,t)}function Cf(e,t){t===0&&(e.mode&1?(t=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):t=1);var n=Ue();e=Dt(e,t),e!==null&&(ca(e,t,n),Ze(e,n))}function _h(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function Th(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Cf(e,n)}var xf;xf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,hh(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,fe&&t.flags&1048576&&_d(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Za(e,t),e=t.pendingProps;var a=or(t,ze.current);nr(t,n),a=ns(null,t,r,e,a,n);var o=rs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(o=!0,po(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Zi(t),a.updater=Fo,t.stateNode=a,a._reactInternals=t,oi(t,r,e,n),t=si(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&Wi(t),He(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Za(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Ih(r),e=mt(r,e),a){case 0:t=ii(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=Iu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,mt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),ii(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),Ru(e,t,r,a,n);case 3:e:{if(lf(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,a=o.element,Od(e,t),go(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ur(Error(_(423)),t),t=Ou(e,t,r,n,a);break e}else if(r!==a){a=ur(Error(_(424)),t),t=Ou(e,t,r,n,a);break e}else for(et=en(t.stateNode.containerInfo.firstChild),tt=t,fe=!0,vt=null,n=Nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===a){t=At(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Bd(t),e===null&&ni(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,l=a.children,Zl(r,a)?l=null:o!==null&&Zl(r,o)&&(t.flags|=32),of(e,t),He(e,t,l,n),t.child;case 6:return e===null&&ni(t),null;case 13:return sf(e,t,n);case 4:return Xi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),Iu(e,t,r,a,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,se(yo,r._currentValue),r._currentValue=l,o!==null)if(Et(o.value,l)){if(o.children===a.children&&!Ye.current){t=At(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ot(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ri(o.return,n,t),i.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(_(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),ri(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}He(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nr(t,n),a=ct(a),r=r(a),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,a=mt(r,t.pendingProps),a=mt(r.type,a),Nu(e,t,r,a,n);case 15:return rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),Za(e,t),t.tag=1,qe(r)?(e=!0,po(t)):e=!1,nr(t,n),ef(t,r,a),oi(t,r,a,n),si(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return af(e,t,n)}throw Error(_(156,t.tag))};function Pf(e,t){return Zc(e,t)}function bh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new bh(e,t,n,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ih(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ri)return 11;if(e===Oi)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,r,a,o){var l=2;if(r=e,typeof e=="function")ps(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hn:return xn(n.children,a,o,t);case Ni:l=8,a|=8;break;case bl:return e=st(12,n,t,a|2),e.elementType=bl,e.lanes=o,e;case Il:return e=st(13,n,t,a),e.elementType=Il,e.lanes=o,e;case Nl:return e=st(19,n,t,a),e.elementType=Nl,e.lanes=o,e;case Bc:return Ho(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:l=10;break e;case Oc:l=9;break e;case Ri:l=11;break e;case Oi:l=14;break e;case Wt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=st(l,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=st(22,e,r,t),e.elementType=Bc,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ms(e,t,n,r,a,o,l,i,s){return e=new Nh(e,t,n,i,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=st(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zi(o),e}function Rh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lf(e){if(!e)return sn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(qe(n))return Pd(e,n,t)}return t}function _f(e,t,n,r,a,o,l,i,s){return e=ms(n,r,!0,e,a,o,l,i,s),e.context=Lf(null),n=e.current,r=Ue(),a=rn(n),o=Ot(r,a),o.callback=t??null,tn(n,o,a),e.current.lanes=a,ca(e,a,r),Ze(e,r),e}function Uo(e,t,n,r){var a=t.current,o=Ue(),l=rn(a);return n=Lf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(a,t,l),e!==null&&(wt(e,a,l,o),Ka(e,a,l)),l}function Lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hs(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}function Oh(){return null}var Tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ys(e){this._internalRoot=e}Vo.prototype.render=ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Uo(e,t,null,null)};Vo.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Uo(null,e,null,null)}),t[Mt]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&ld(e)}};function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Bh(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var u=Lo(l);o.call(u)}}var l=_f(t,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=l,e[Mt]=l.current,Zr(e.nodeType===8?e.parentNode:e),bn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=Lo(s);i.call(u)}}var s=ms(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Mt]=s.current,Zr(e.nodeType===8?e.parentNode:e),bn(function(){Uo(t,s,n,r)}),s}function Go(e,t,n,r,a){var o=n._reactRootContainer;if(o){var l=o;if(typeof a=="function"){var i=a;a=function(){var s=Lo(l);i.call(s)}}Uo(t,l,e,a)}else l=Bh(n,t,e,a,r);return Lo(l)}nd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(Di(t,n|1),Ze(t,ke()),!(Z&6)&&(cr=ke()+500,dn()))}break;case 13:bn(function(){var r=Dt(e,1);if(r!==null){var a=Ue();wt(r,e,1,a)}}),hs(e,1)}};Ai=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ue();wt(t,e,134217728,n)}hs(e,134217728)}};rd=function(e){if(e.tag===13){var t=rn(e),n=Dt(e,t);if(n!==null){var r=Ue();wt(n,e,t,r)}hs(e,t)}};ad=function(){return le};od=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};Hl=function(e,t,n){switch(t){case"input":if(Bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Mo(r);if(!a)throw Error(_(90));Dc(r),Bl(r,a)}}}break;case"textarea":Fc(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}};Gc=cs;$c=bn;var Mh={usingClientEntryPoint:!1,Events:[fa,Gn,Mo,Vc,Wc,cs]},Pr={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dh={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||Oh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{No=Ha.inject(Dh),Pt=Ha}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mh;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vs(t))throw Error(_(200));return Rh(e,t,null,n)};rt.createRoot=function(e,t){if(!vs(e))throw Error(_(299));var n=!1,r="",a=Tf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ms(e,1,!1,null,null,n,!1,r,a),e[Mt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new ys(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Yc(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return bn(e)};rt.hydrate=function(e,t,n){if(!Wo(t))throw Error(_(200));return Go(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!vs(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",l=Tf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=_f(t,null,e,1,n??null,a,!1,o,l),e[Mt]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Vo(t)};rt.render=function(e,t,n){if(!Wo(t))throw Error(_(200));return Go(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Wo(e))throw Error(_(40));return e._reactRootContainer?(bn(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};rt.unstable_batchedUpdates=cs;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Go(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bf)}catch(e){console.error(e)}}bf(),Tc.exports=rt;var gs=Tc.exports;const Ah=yc(gs),Fh=hc({__proto__:null,default:Ah},[gs]);var Gu=gs;_l.createRoot=Gu.createRoot,_l.hydrateRoot=Gu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}var Se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Se||(Se={}));const $u="popstate";function zh(e){e===void 0&&(e={});function t(r,a){let{pathname:o,search:l,hash:i}=r.location;return la("",{pathname:o,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:ma(a)}return Hh(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function In(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jh(){return Math.random().toString(36).substr(2,8)}function Qu(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),de({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zt(t):t,{state:n,key:t&&t.key||r||jh()})}function ma(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hh(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,l=a.history,i=Se.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(de({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function d(){i=Se.Pop;let I=f(),h=I==null?null:I-u;u=I,s&&s({action:i,location:k.location,delta:h})}function m(I,h){i=Se.Push;let c=la(k.location,I,h);u=f()+1;let y=Qu(c,u),C=k.createHref(c);try{l.pushState(y,"",C)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(C)}o&&s&&s({action:i,location:k.location,delta:1})}function w(I,h){i=Se.Replace;let c=la(k.location,I,h);u=f();let y=Qu(c,u),C=k.createHref(c);l.replaceState(y,"",C),o&&s&&s({action:i,location:k.location,delta:0})}function S(I){let h=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof I=="string"?I:ma(I);return c=c.replace(/ $/,"%20"),Q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let k={get action(){return i},get location(){return e(a,l)},listen(I){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener($u,d),s=I,()=>{a.removeEventListener($u,d),s=null}},createHref(I){return t(a,I)},createURL:S,encodeLocation(I){let h=S(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:w,go(I){return l.go(I)}};return k}var oe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(oe||(oe={}));const Uh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Vh(e){return e.index===!0}function _o(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,o)=>{let l=[...n,String(o)],i=typeof a.id=="string"?a.id:l.join("-");if(Q(a.index!==!0||!a.children,"Cannot specify children on an index route"),Q(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),Vh(a)){let s=de({},a,t(a),{id:i});return r[i]=s,s}else{let s=de({},a,t(a),{id:i,children:void 0});return r[i]=s,a.children&&(s.children=_o(a.children,t,l,r)),s}})}function vn(e,t,n){return n===void 0&&(n="/"),to(e,t,n,!1)}function to(e,t,n,r){let a=typeof t=="string"?zt(t):t,o=ha(a.pathname||"/",n);if(o==null)return null;let l=If(e);Gh(l);let i=null;for(let s=0;i==null&&s<l.length;++s){let u=ny(o);i=ey(l[s],u,r)}return i}function Wh(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function If(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,l,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=on([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(Q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),If(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Xh(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))a(o,l);else for(let s of Nf(o.path))a(o,l,s)}),t}function Nf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let l=Nf(r.join("/")),i=[];return i.push(...l.map(s=>s===""?o:[o,s].join("/"))),a&&i.push(...l),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $h=/^:[\w-]+$/,Qh=3,Kh=2,Yh=1,qh=10,Zh=-2,Ku=e=>e==="*";function Xh(e,t){let n=e.split("/"),r=n.length;return n.some(Ku)&&(r+=Zh),t&&(r+=Kh),n.filter(a=>!Ku(a)).reduce((a,o)=>a+($h.test(o)?Qh:o===""?Yh:qh),r)}function Jh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function ey(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},o="/",l=[];for(let i=0;i<r.length;++i){let s=r[i],u=i===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=Yu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Yu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(a,d.params),l.push({params:a,pathname:on([o,d.pathname]),pathnameBase:ly(on([o,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(o=on([o,d.pathnameBase]))}return l}function Yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ty(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:w}=f;if(m==="*"){let k=i[d]||"";l=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const S=i[d];return w&&!S?u[m]=void 0:u[m]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function ty(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),In(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function ny(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return In(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ha(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ay=e=>ry.test(e);function oy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?zt(e):e,o;if(n)if(ay(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),In(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=qu(n.substring(1),"/"):o=qu(n,t)}else o=t;return{pathname:o,search:iy(r),hash:sy(a)}}function qu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ws(e,t){let n=Rf(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Es(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=zt(e):(a=de({},e),Q(!a.pathname||!a.pathname.includes("?"),xl("?","pathname","search",a)),Q(!a.pathname||!a.pathname.includes("#"),xl("#","pathname","hash",a)),Q(!a.search||!a.search.includes("#"),xl("#","search","hash",a)));let o=e===""||a.pathname==="",l=o?"/":a.pathname,i;if(l==null)i=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),d-=1;a.pathname=m.join("/")}i=d>=0?t[d]:"/"}let s=oy(a,i),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const on=e=>e.join("/").replace(/\/\/+/g,"/"),ly=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class To{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ia(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Of=["post","put","patch","delete"],uy=new Set(Of),cy=["get",...Of],dy=new Set(cy),fy=new Set([301,302,303,307,308]),py=new Set([307,308]),Pl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},my={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Lr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ss=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hy=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Bf="remix-router-transitions";function yy(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let p=e.detectErrorBoundary;a=g=>({hasErrorBoundary:p(g)})}else a=hy;let o={},l=_o(e.routes,a,void 0,o),i,s=e.basename||"/",u=e.dataStrategy||Ey,f=e.patchRoutesOnNavigation,d=de({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,w=new Set,S=null,k=null,I=null,h=e.hydrationData!=null,c=vn(l,e.history.location,s),y=!1,C=null;if(c==null&&!f){let p=$e(404,{pathname:e.history.location.pathname}),{matches:g,route:E}=ic(l);c=g,C={[E.id]:p}}c&&!e.hydrationData&&Sa(c,l,e.history.location.pathname).active&&(c=null);let b;if(c)if(c.some(p=>p.route.lazy))b=!1;else if(!c.some(p=>p.route.loader))b=!0;else if(d.v7_partialHydration){let p=e.hydrationData?e.hydrationData.loaderData:null,g=e.hydrationData?e.hydrationData.errors:null;if(g){let E=c.findIndex(x=>g[x.route.id]!==void 0);b=c.slice(0,E+1).every(x=>!Si(x.route,p,g))}else b=c.every(E=>!Si(E.route,p,g))}else b=e.hydrationData!=null;else if(b=!1,c=[],d.v7_partialHydration){let p=Sa(null,l,e.history.location.pathname);p.active&&p.matches&&(y=!0,c=p.matches)}let B,v={historyAction:e.history.action,location:e.history.location,matches:c,initialized:b,navigation:Pl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},P=Se.Pop,U=!1,R,ee=!1,ae=new Map,W=null,q=!1,re=!1,Ee=[],Ge=new Set,T=new Map,j=0,V=-1,X=new Map,te=new Set,Ie=new Map,Me=new Map,Pe=new Set,ye=new Map,ot=new Map,ga;function Qf(){if(m=e.history.listen(p=>{let{action:g,location:E,delta:x}=p;if(ga){ga(),ga=void 0;return}In(ot.size===0||x!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let O=Os({currentLocation:v.location,nextLocation:E,historyAction:g});if(O&&x!=null){let H=new Promise(G=>{ga=G});e.history.go(x*-1),Ea(O,{state:"blocked",location:E,proceed(){Ea(O,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),H.then(()=>e.history.go(x))},reset(){let G=new Map(v.blockers);G.set(O,Lr),je({blockers:G})}});return}return fn(g,E)}),n){By(t,ae);let p=()=>My(t,ae);t.addEventListener("pagehide",p),W=()=>t.removeEventListener("pagehide",p)}return v.initialized||fn(Se.Pop,v.location,{initialHydration:!0}),B}function Kf(){m&&m(),W&&W(),w.clear(),R&&R.abort(),v.fetchers.forEach((p,g)=>wa(g)),v.blockers.forEach((p,g)=>Rs(g))}function Yf(p){return w.add(p),()=>w.delete(p)}function je(p,g){g===void 0&&(g={}),v=de({},v,p);let E=[],x=[];d.v7_fetcherPersist&&v.fetchers.forEach((O,H)=>{O.state==="idle"&&(Pe.has(H)?x.push(H):E.push(H))}),Pe.forEach(O=>{!v.fetchers.has(O)&&!T.has(O)&&x.push(O)}),[...w].forEach(O=>O(v,{deletedFetchers:x,viewTransitionOpts:g.viewTransitionOpts,flushSync:g.flushSync===!0})),d.v7_fetcherPersist?(E.forEach(O=>v.fetchers.delete(O)),x.forEach(O=>wa(O))):x.forEach(O=>Pe.delete(O))}function Bn(p,g,E){var x,O;let{flushSync:H}=E===void 0?{}:E,G=v.actionData!=null&&v.navigation.formMethod!=null&&yt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((x=p.state)==null?void 0:x._isRedirect)!==!0,A;g.actionData?Object.keys(g.actionData).length>0?A=g.actionData:A=null:G?A=v.actionData:A=null;let F=g.loaderData?oc(v.loaderData,g.loaderData,g.matches||[],g.errors):v.loaderData,D=v.blockers;D.size>0&&(D=new Map(D),D.forEach((Y,Ne)=>D.set(Ne,Lr)));let z=U===!0||v.navigation.formMethod!=null&&yt(v.navigation.formMethod)&&((O=p.state)==null?void 0:O._isRedirect)!==!0;i&&(l=i,i=void 0),q||P===Se.Pop||(P===Se.Push?e.history.push(p,p.state):P===Se.Replace&&e.history.replace(p,p.state));let $;if(P===Se.Pop){let Y=ae.get(v.location.pathname);Y&&Y.has(p.pathname)?$={currentLocation:v.location,nextLocation:p}:ae.has(p.pathname)&&($={currentLocation:p,nextLocation:v.location})}else if(ee){let Y=ae.get(v.location.pathname);Y?Y.add(p.pathname):(Y=new Set([p.pathname]),ae.set(v.location.pathname,Y)),$={currentLocation:v.location,nextLocation:p}}je(de({},g,{actionData:A,loaderData:F,historyAction:P,location:p,initialized:!0,navigation:Pl,revalidation:"idle",restoreScrollPosition:Ms(p,g.matches||v.matches),preventScrollReset:z,blockers:D}),{viewTransitionOpts:$,flushSync:H===!0}),P=Se.Pop,U=!1,ee=!1,q=!1,re=!1,Ee=[]}async function Ps(p,g){if(typeof p=="number"){e.history.go(p);return}let E=Ei(v.location,v.matches,s,d.v7_prependBasename,p,d.v7_relativeSplatPath,g==null?void 0:g.fromRouteId,g==null?void 0:g.relative),{path:x,submission:O,error:H}=Zu(d.v7_normalizeFormMethod,!1,E,g),G=v.location,A=la(v.location,x,g&&g.state);A=de({},A,e.history.encodeLocation(A));let F=g&&g.replace!=null?g.replace:void 0,D=Se.Push;F===!0?D=Se.Replace:F===!1||O!=null&&yt(O.formMethod)&&O.formAction===v.location.pathname+v.location.search&&(D=Se.Replace);let z=g&&"preventScrollReset"in g?g.preventScrollReset===!0:void 0,$=(g&&g.flushSync)===!0,Y=Os({currentLocation:G,nextLocation:A,historyAction:D});if(Y){Ea(Y,{state:"blocked",location:A,proceed(){Ea(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),Ps(p,g)},reset(){let Ne=new Map(v.blockers);Ne.set(Y,Lr),je({blockers:Ne})}});return}return await fn(D,A,{submission:O,pendingError:H,preventScrollReset:z,replace:g&&g.replace,enableViewTransition:g&&g.viewTransition,flushSync:$})}function qf(){if(Ko(),je({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){fn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}fn(P||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation,enableViewTransition:ee===!0})}}async function fn(p,g,E){R&&R.abort(),R=null,P=p,q=(E&&E.startUninterruptedRevalidation)===!0,lp(v.location,v.matches),U=(E&&E.preventScrollReset)===!0,ee=(E&&E.enableViewTransition)===!0;let x=i||l,O=E&&E.overrideNavigation,H=E!=null&&E.initialHydration&&v.matches&&v.matches.length>0&&!y?v.matches:vn(x,g,s),G=(E&&E.flushSync)===!0;if(H&&v.initialized&&!re&&Ly(v.location,g)&&!(E&&E.submission&&yt(E.submission.formMethod))){Bn(g,{matches:H},{flushSync:G});return}let A=Sa(H,x,g.pathname);if(A.active&&A.matches&&(H=A.matches),!H){let{error:ie,notFoundMatches:ne,route:ve}=Yo(g.pathname);Bn(g,{matches:ne,loaderData:{},errors:{[ve.id]:ie}},{flushSync:G});return}R=new AbortController;let F=zn(e.history,g,R.signal,E&&E.submission),D;if(E&&E.pendingError)D=[gn(H).route.id,{type:oe.error,error:E.pendingError}];else if(E&&E.submission&&yt(E.submission.formMethod)){let ie=await Zf(F,g,E.submission,H,A.active,{replace:E.replace,flushSync:G});if(ie.shortCircuited)return;if(ie.pendingActionResult){let[ne,ve]=ie.pendingActionResult;if(Je(ve)&&ia(ve.error)&&ve.error.status===404){R=null,Bn(g,{matches:ie.matches,loaderData:{},errors:{[ne]:ve.error}});return}}H=ie.matches||H,D=ie.pendingActionResult,O=Ll(g,E.submission),G=!1,A.active=!1,F=zn(e.history,F.url,F.signal)}let{shortCircuited:z,matches:$,loaderData:Y,errors:Ne}=await Xf(F,g,H,A.active,O,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,G,D);z||(R=null,Bn(g,de({matches:$||H},lc(D),{loaderData:Y,errors:Ne})))}async function Zf(p,g,E,x,O,H){H===void 0&&(H={}),Ko();let G=Ry(g,E);if(je({navigation:G},{flushSync:H.flushSync===!0}),O){let D=await ka(x,g.pathname,p.signal);if(D.type==="aborted")return{shortCircuited:!0};if(D.type==="error"){let z=gn(D.partialMatches).route.id;return{matches:D.partialMatches,pendingActionResult:[z,{type:oe.error,error:D.error}]}}else if(D.matches)x=D.matches;else{let{notFoundMatches:z,error:$,route:Y}=Yo(g.pathname);return{matches:z,pendingActionResult:[Y.id,{type:oe.error,error:$}]}}}let A,F=Or(x,g);if(!F.route.action&&!F.route.lazy)A={type:oe.error,error:$e(405,{method:p.method,pathname:g.pathname,routeId:F.route.id})};else if(A=(await mr("action",v,p,[F],x,null))[F.route.id],p.signal.aborted)return{shortCircuited:!0};if(kn(A)){let D;return H&&H.replace!=null?D=H.replace:D=nc(A.response.headers.get("Location"),new URL(p.url),s)===v.location.pathname+v.location.search,await pn(p,A,!0,{submission:E,replace:D}),{shortCircuited:!0}}if(qt(A))throw $e(400,{type:"defer-action"});if(Je(A)){let D=gn(x,F.route.id);return(H&&H.replace)!==!0&&(P=Se.Push),{matches:x,pendingActionResult:[D.route.id,A]}}return{matches:x,pendingActionResult:[F.route.id,A]}}async function Xf(p,g,E,x,O,H,G,A,F,D,z){let $=O||Ll(g,H),Y=H||G||uc($),Ne=!q&&(!d.v7_partialHydration||!F);if(x){if(Ne){let ge=Ls(z);je(de({navigation:$},ge!==void 0?{actionData:ge}:{}),{flushSync:D})}let J=await ka(E,g.pathname,p.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let ge=gn(J.partialMatches).route.id;return{matches:J.partialMatches,loaderData:{},errors:{[ge]:J.error}}}else if(J.matches)E=J.matches;else{let{error:ge,notFoundMatches:Dn,route:vr}=Yo(g.pathname);return{matches:Dn,loaderData:{},errors:{[vr.id]:ge}}}}let ie=i||l,[ne,ve]=Ju(e.history,v,E,Y,g,d.v7_partialHydration&&F===!0,d.v7_skipActionErrorRevalidation,re,Ee,Ge,Pe,Ie,te,ie,s,z);if(qo(J=>!(E&&E.some(ge=>ge.route.id===J))||ne&&ne.some(ge=>ge.route.id===J)),V=++j,ne.length===0&&ve.length===0){let J=Is();return Bn(g,de({matches:E,loaderData:{},errors:z&&Je(z[1])?{[z[0]]:z[1].error}:null},lc(z),J?{fetchers:new Map(v.fetchers)}:{}),{flushSync:D}),{shortCircuited:!0}}if(Ne){let J={};if(!x){J.navigation=$;let ge=Ls(z);ge!==void 0&&(J.actionData=ge)}ve.length>0&&(J.fetchers=Jf(ve)),je(J,{flushSync:D})}ve.forEach(J=>{Ht(J.key),J.controller&&T.set(J.key,J.controller)});let Mn=()=>ve.forEach(J=>Ht(J.key));R&&R.signal.addEventListener("abort",Mn);let{loaderResults:hr,fetcherResults:Tt}=await _s(v,E,ne,ve,p);if(p.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",Mn),ve.forEach(J=>T.delete(J.key));let St=Ua(hr);if(St)return await pn(p,St.result,!0,{replace:A}),{shortCircuited:!0};if(St=Ua(Tt),St)return te.add(St.key),await pn(p,St.result,!0,{replace:A}),{shortCircuited:!0};let{loaderData:Zo,errors:yr}=ac(v,E,hr,z,ve,Tt,ye);ye.forEach((J,ge)=>{J.subscribe(Dn=>{(Dn||J.done)&&ye.delete(ge)})}),d.v7_partialHydration&&F&&v.errors&&(yr=de({},v.errors,yr));let mn=Is(),Ca=Ns(V),xa=mn||Ca||ve.length>0;return de({matches:E,loaderData:Zo,errors:yr},xa?{fetchers:new Map(v.fetchers)}:{})}function Ls(p){if(p&&!Je(p[1]))return{[p[0]]:p[1].data};if(v.actionData)return Object.keys(v.actionData).length===0?null:v.actionData}function Jf(p){return p.forEach(g=>{let E=v.fetchers.get(g.key),x=_r(void 0,E?E.data:void 0);v.fetchers.set(g.key,x)}),new Map(v.fetchers)}function ep(p,g,E,x){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ht(p);let O=(x&&x.flushSync)===!0,H=i||l,G=Ei(v.location,v.matches,s,d.v7_prependBasename,E,d.v7_relativeSplatPath,g,x==null?void 0:x.relative),A=vn(H,G,s),F=Sa(A,H,G);if(F.active&&F.matches&&(A=F.matches),!A){_t(p,g,$e(404,{pathname:G}),{flushSync:O});return}let{path:D,submission:z,error:$}=Zu(d.v7_normalizeFormMethod,!0,G,x);if($){_t(p,g,$,{flushSync:O});return}let Y=Or(A,D),Ne=(x&&x.preventScrollReset)===!0;if(z&&yt(z.formMethod)){tp(p,g,D,Y,A,F.active,O,Ne,z);return}Ie.set(p,{routeId:g,path:D}),np(p,g,D,Y,A,F.active,O,Ne,z)}async function tp(p,g,E,x,O,H,G,A,F){Ko(),Ie.delete(p);function D(Ce){if(!Ce.route.action&&!Ce.route.lazy){let An=$e(405,{method:F.formMethod,pathname:E,routeId:g});return _t(p,g,An,{flushSync:G}),!0}return!1}if(!H&&D(x))return;let z=v.fetchers.get(p);jt(p,Oy(F,z),{flushSync:G});let $=new AbortController,Y=zn(e.history,E,$.signal,F);if(H){let Ce=await ka(O,new URL(Y.url).pathname,Y.signal,p);if(Ce.type==="aborted")return;if(Ce.type==="error"){_t(p,g,Ce.error,{flushSync:G});return}else if(Ce.matches){if(O=Ce.matches,x=Or(O,E),D(x))return}else{_t(p,g,$e(404,{pathname:E}),{flushSync:G});return}}T.set(p,$);let Ne=j,ne=(await mr("action",v,Y,[x],O,p))[x.route.id];if(Y.signal.aborted){T.get(p)===$&&T.delete(p);return}if(d.v7_fetcherPersist&&Pe.has(p)){if(kn(ne)||Je(ne)){jt(p,Vt(void 0));return}}else{if(kn(ne))if(T.delete(p),V>Ne){jt(p,Vt(void 0));return}else return te.add(p),jt(p,_r(F)),pn(Y,ne,!1,{fetcherSubmission:F,preventScrollReset:A});if(Je(ne)){_t(p,g,ne.error);return}}if(qt(ne))throw $e(400,{type:"defer-action"});let ve=v.navigation.location||v.location,Mn=zn(e.history,ve,$.signal),hr=i||l,Tt=v.navigation.state!=="idle"?vn(hr,v.navigation.location,s):v.matches;Q(Tt,"Didn't find any matches after fetcher action");let St=++j;X.set(p,St);let Zo=_r(F,ne.data);v.fetchers.set(p,Zo);let[yr,mn]=Ju(e.history,v,Tt,F,ve,!1,d.v7_skipActionErrorRevalidation,re,Ee,Ge,Pe,Ie,te,hr,s,[x.route.id,ne]);mn.filter(Ce=>Ce.key!==p).forEach(Ce=>{let An=Ce.key,Ds=v.fetchers.get(An),up=_r(void 0,Ds?Ds.data:void 0);v.fetchers.set(An,up),Ht(An),Ce.controller&&T.set(An,Ce.controller)}),je({fetchers:new Map(v.fetchers)});let Ca=()=>mn.forEach(Ce=>Ht(Ce.key));$.signal.addEventListener("abort",Ca);let{loaderResults:xa,fetcherResults:J}=await _s(v,Tt,yr,mn,Mn);if($.signal.aborted)return;$.signal.removeEventListener("abort",Ca),X.delete(p),T.delete(p),mn.forEach(Ce=>T.delete(Ce.key));let ge=Ua(xa);if(ge)return pn(Mn,ge.result,!1,{preventScrollReset:A});if(ge=Ua(J),ge)return te.add(ge.key),pn(Mn,ge.result,!1,{preventScrollReset:A});let{loaderData:Dn,errors:vr}=ac(v,Tt,xa,void 0,mn,J,ye);if(v.fetchers.has(p)){let Ce=Vt(ne.data);v.fetchers.set(p,Ce)}Ns(St),v.navigation.state==="loading"&&St>V?(Q(P,"Expected pending action"),R&&R.abort(),Bn(v.navigation.location,{matches:Tt,loaderData:Dn,errors:vr,fetchers:new Map(v.fetchers)})):(je({errors:vr,loaderData:oc(v.loaderData,Dn,Tt,vr),fetchers:new Map(v.fetchers)}),re=!1)}async function np(p,g,E,x,O,H,G,A,F){let D=v.fetchers.get(p);jt(p,_r(F,D?D.data:void 0),{flushSync:G});let z=new AbortController,$=zn(e.history,E,z.signal);if(H){let ne=await ka(O,new URL($.url).pathname,$.signal,p);if(ne.type==="aborted")return;if(ne.type==="error"){_t(p,g,ne.error,{flushSync:G});return}else if(ne.matches)O=ne.matches,x=Or(O,E);else{_t(p,g,$e(404,{pathname:E}),{flushSync:G});return}}T.set(p,z);let Y=j,ie=(await mr("loader",v,$,[x],O,p))[x.route.id];if(qt(ie)&&(ie=await ks(ie,$.signal,!0)||ie),T.get(p)===z&&T.delete(p),!$.signal.aborted){if(Pe.has(p)){jt(p,Vt(void 0));return}if(kn(ie))if(V>Y){jt(p,Vt(void 0));return}else{te.add(p),await pn($,ie,!1,{preventScrollReset:A});return}if(Je(ie)){_t(p,g,ie.error);return}Q(!qt(ie),"Unhandled fetcher deferred data"),jt(p,Vt(ie.data))}}async function pn(p,g,E,x){let{submission:O,fetcherSubmission:H,preventScrollReset:G,replace:A}=x===void 0?{}:x;g.response.headers.has("X-Remix-Revalidate")&&(re=!0);let F=g.response.headers.get("Location");Q(F,"Expected a Location header on the redirect Response"),F=nc(F,new URL(p.url),s);let D=la(v.location,F,{_isRedirect:!0});if(n){let ne=!1;if(g.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(Ss.test(F)){const ve=e.history.createURL(F);ne=ve.origin!==t.location.origin||ha(ve.pathname,s)==null}if(ne){A?t.location.replace(F):t.location.assign(F);return}}R=null;let z=A===!0||g.response.headers.has("X-Remix-Replace")?Se.Replace:Se.Push,{formMethod:$,formAction:Y,formEncType:Ne}=v.navigation;!O&&!H&&$&&Y&&Ne&&(O=uc(v.navigation));let ie=O||H;if(py.has(g.response.status)&&ie&&yt(ie.formMethod))await fn(z,D,{submission:de({},ie,{formAction:F}),preventScrollReset:G||U,enableViewTransition:E?ee:void 0});else{let ne=Ll(D,O);await fn(z,D,{overrideNavigation:ne,fetcherSubmission:H,preventScrollReset:G||U,enableViewTransition:E?ee:void 0})}}async function mr(p,g,E,x,O,H){let G,A={};try{G=await Sy(u,p,g,E,x,O,H,o,a)}catch(F){return x.forEach(D=>{A[D.route.id]={type:oe.error,error:F}}),A}for(let[F,D]of Object.entries(G))if(_y(D)){let z=D.result;A[F]={type:oe.redirect,response:xy(z,E,F,O,s,d.v7_relativeSplatPath)}}else A[F]=await Cy(D);return A}async function _s(p,g,E,x,O){let H=p.matches,G=mr("loader",p,O,E,g,null),A=Promise.all(x.map(async z=>{if(z.matches&&z.match&&z.controller){let Y=(await mr("loader",p,zn(e.history,z.path,z.controller.signal),[z.match],z.matches,z.key))[z.match.route.id];return{[z.key]:Y}}else return Promise.resolve({[z.key]:{type:oe.error,error:$e(404,{pathname:z.path})}})})),F=await G,D=(await A).reduce((z,$)=>Object.assign(z,$),{});return await Promise.all([Iy(g,F,O.signal,H,p.loaderData),Ny(g,D,x)]),{loaderResults:F,fetcherResults:D}}function Ko(){re=!0,Ee.push(...qo()),Ie.forEach((p,g)=>{T.has(g)&&Ge.add(g),Ht(g)})}function jt(p,g,E){E===void 0&&(E={}),v.fetchers.set(p,g),je({fetchers:new Map(v.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function _t(p,g,E,x){x===void 0&&(x={});let O=gn(v.matches,g);wa(p),je({errors:{[O.route.id]:E},fetchers:new Map(v.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function Ts(p){return Me.set(p,(Me.get(p)||0)+1),Pe.has(p)&&Pe.delete(p),v.fetchers.get(p)||my}function wa(p){let g=v.fetchers.get(p);T.has(p)&&!(g&&g.state==="loading"&&X.has(p))&&Ht(p),Ie.delete(p),X.delete(p),te.delete(p),d.v7_fetcherPersist&&Pe.delete(p),Ge.delete(p),v.fetchers.delete(p)}function rp(p){let g=(Me.get(p)||0)-1;g<=0?(Me.delete(p),Pe.add(p),d.v7_fetcherPersist||wa(p)):Me.set(p,g),je({fetchers:new Map(v.fetchers)})}function Ht(p){let g=T.get(p);g&&(g.abort(),T.delete(p))}function bs(p){for(let g of p){let E=Ts(g),x=Vt(E.data);v.fetchers.set(g,x)}}function Is(){let p=[],g=!1;for(let E of te){let x=v.fetchers.get(E);Q(x,"Expected fetcher: "+E),x.state==="loading"&&(te.delete(E),p.push(E),g=!0)}return bs(p),g}function Ns(p){let g=[];for(let[E,x]of X)if(x<p){let O=v.fetchers.get(E);Q(O,"Expected fetcher: "+E),O.state==="loading"&&(Ht(E),X.delete(E),g.push(E))}return bs(g),g.length>0}function ap(p,g){let E=v.blockers.get(p)||Lr;return ot.get(p)!==g&&ot.set(p,g),E}function Rs(p){v.blockers.delete(p),ot.delete(p)}function Ea(p,g){let E=v.blockers.get(p)||Lr;Q(E.state==="unblocked"&&g.state==="blocked"||E.state==="blocked"&&g.state==="blocked"||E.state==="blocked"&&g.state==="proceeding"||E.state==="blocked"&&g.state==="unblocked"||E.state==="proceeding"&&g.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+g.state);let x=new Map(v.blockers);x.set(p,g),je({blockers:x})}function Os(p){let{currentLocation:g,nextLocation:E,historyAction:x}=p;if(ot.size===0)return;ot.size>1&&In(!1,"A router only supports one blocker at a time");let O=Array.from(ot.entries()),[H,G]=O[O.length-1],A=v.blockers.get(H);if(!(A&&A.state==="proceeding")&&G({currentLocation:g,nextLocation:E,historyAction:x}))return H}function Yo(p){let g=$e(404,{pathname:p}),E=i||l,{matches:x,route:O}=ic(E);return qo(),{notFoundMatches:x,route:O,error:g}}function qo(p){let g=[];return ye.forEach((E,x)=>{(!p||p(x))&&(E.cancel(),g.push(x),ye.delete(x))}),g}function op(p,g,E){if(S=p,I=g,k=E||null,!h&&v.navigation===Pl){h=!0;let x=Ms(v.location,v.matches);x!=null&&je({restoreScrollPosition:x})}return()=>{S=null,I=null,k=null}}function Bs(p,g){return k&&k(p,g.map(x=>Wh(x,v.loaderData)))||p.key}function lp(p,g){if(S&&I){let E=Bs(p,g);S[E]=I()}}function Ms(p,g){if(S){let E=Bs(p,g),x=S[E];if(typeof x=="number")return x}return null}function Sa(p,g,E){if(f)if(p){if(Object.keys(p[0].params).length>0)return{active:!0,matches:to(g,E,s,!0)}}else return{active:!0,matches:to(g,E,s,!0)||[]};return{active:!1,matches:null}}async function ka(p,g,E,x){if(!f)return{type:"success",matches:p};let O=p;for(;;){let H=i==null,G=i||l,A=o;try{await f({signal:E,path:g,matches:O,fetcherKey:x,patch:(z,$)=>{E.aborted||tc(z,$,G,A,a)}})}catch(z){return{type:"error",error:z,partialMatches:O}}finally{H&&!E.aborted&&(l=[...l])}if(E.aborted)return{type:"aborted"};let F=vn(G,g,s);if(F)return{type:"success",matches:F};let D=to(G,g,s,!0);if(!D||O.length===D.length&&O.every((z,$)=>z.route.id===D[$].route.id))return{type:"success",matches:null};O=D}}function ip(p){o={},i=_o(p,a,void 0,o)}function sp(p,g){let E=i==null;tc(p,g,i||l,o,a),E&&(l=[...l],je({}))}return B={get basename(){return s},get future(){return d},get state(){return v},get routes(){return l},get window(){return t},initialize:Qf,subscribe:Yf,enableScrollRestoration:op,navigate:Ps,fetch:ep,revalidate:qf,createHref:p=>e.history.createHref(p),encodeLocation:p=>e.history.encodeLocation(p),getFetcher:Ts,deleteFetcher:rp,dispose:Kf,getBlocker:ap,deleteBlocker:Rs,patchRoutes:sp,_internalFetchControllers:T,_internalActiveDeferreds:ye,_internalSetRoutes:ip},B}function vy(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ei(e,t,n,r,a,o,l,i){let s,u;if(l){s=[];for(let d of t)if(s.push(d),d.route.id===l){u=d;break}}else s=t,u=t[t.length-1];let f=Es(a||".",ws(s,o),ha(e.pathname,n)||e.pathname,i==="path");if(a==null&&(f.search=e.search,f.hash=e.hash),(a==null||a===""||a===".")&&u){let d=Cs(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let m=new URLSearchParams(f.search),w=m.getAll("index");m.delete("index"),w.filter(k=>k).forEach(k=>m.append("index",k));let S=m.toString();f.search=S?"?"+S:""}}return r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:on([n,f.pathname])),ma(f)}function Zu(e,t,n,r){if(!r||!vy(r))return{path:n};if(r.formMethod&&!by(r.formMethod))return{path:n,error:$e(405,{method:r.formMethod})};let a=()=>({path:n,error:$e(400,{type:"invalid-body"})}),o=r.formMethod||"get",l=e?o.toUpperCase():o.toLowerCase(),i=Af(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!yt(l))return a();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,S)=>{let[k,I]=S;return""+w+k+"="+I+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!yt(l))return a();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}Q(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=ki(r.formData),u=r.formData;else if(r.body instanceof FormData)s=ki(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=rc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=rc(s)}catch{return a()}let f={formMethod:l,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(yt(f.formMethod))return{path:n,submission:f};let d=zt(n);return t&&d.search&&Cs(d.search)&&s.append("index",""),d.search="?"+s,{path:ma(d),submission:f}}function Xu(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(a=>a.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function Ju(e,t,n,r,a,o,l,i,s,u,f,d,m,w,S,k){let I=k?Je(k[1])?k[1].error:k[1].data:void 0,h=e.createURL(t.location),c=e.createURL(a),y=n;o&&t.errors?y=Xu(n,Object.keys(t.errors)[0],!0):k&&Je(k[1])&&(y=Xu(n,k[0]));let C=k?k[1].statusCode:void 0,b=l&&C&&C>=400,B=y.filter((P,U)=>{let{route:R}=P;if(R.lazy)return!0;if(R.loader==null)return!1;if(o)return Si(R,t.loaderData,t.errors);if(gy(t.loaderData,t.matches[U],P)||s.some(W=>W===P.route.id))return!0;let ee=t.matches[U],ae=P;return ec(P,de({currentUrl:h,currentParams:ee.params,nextUrl:c,nextParams:ae.params},r,{actionResult:I,actionStatus:C,defaultShouldRevalidate:b?!1:i||h.pathname+h.search===c.pathname+c.search||h.search!==c.search||Mf(ee,ae)}))}),v=[];return d.forEach((P,U)=>{if(o||!n.some(q=>q.route.id===P.routeId)||f.has(U))return;let R=vn(w,P.path,S);if(!R){v.push({key:U,routeId:P.routeId,path:P.path,matches:null,match:null,controller:null});return}let ee=t.fetchers.get(U),ae=Or(R,P.path),W=!1;m.has(U)?W=!1:u.has(U)?(u.delete(U),W=!0):ee&&ee.state!=="idle"&&ee.data===void 0?W=i:W=ec(ae,de({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:I,actionStatus:C,defaultShouldRevalidate:b?!1:i})),W&&v.push({key:U,routeId:P.routeId,path:P.path,matches:R,match:ae,controller:new AbortController})}),[B,v]}function Si(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,a=n!=null&&n[e.id]!==void 0;return!r&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!a}function gy(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Mf(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ec(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function tc(e,t,n,r,a){var o;let l;if(e){let u=r[e];Q(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),l=u.children}else l=n;let i=t.filter(u=>!l.some(f=>Df(u,f))),s=_o(i,a,[e||"_","patch",String(((o=l)==null?void 0:o.length)||"0")],r);l.push(...s)}function Df(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var a;return(a=t.children)==null?void 0:a.some(o=>Df(n,o))}):!1}async function wy(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];Q(a,"No route found in manifest");let o={};for(let l in r){let s=a[l]!==void 0&&l!=="hasErrorBoundary";In(!s,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!Uh.has(l)&&(o[l]=r[l])}Object.assign(a,o),Object.assign(a,de({},t(a),{lazy:void 0}))}async function Ey(e){let{matches:t}=e,n=t.filter(a=>a.shouldLoad);return(await Promise.all(n.map(a=>a.resolve()))).reduce((a,o,l)=>Object.assign(a,{[n[l].route.id]:o}),{})}async function Sy(e,t,n,r,a,o,l,i,s,u){let f=o.map(w=>w.route.lazy?wy(w.route,s,i):void 0),d=o.map((w,S)=>{let k=f[S],I=a.some(c=>c.route.id===w.route.id);return de({},w,{shouldLoad:I,resolve:async c=>(c&&r.method==="GET"&&(w.route.lazy||w.route.loader)&&(I=!0),I?ky(t,r,w,k,c,u):Promise.resolve({type:oe.data,result:void 0}))})}),m=await e({matches:d,request:r,params:o[0].params,fetcherKey:l,context:u});try{await Promise.all(f)}catch{}return m}async function ky(e,t,n,r,a,o){let l,i,s=u=>{let f,d=new Promise((S,k)=>f=k);i=()=>f(),t.signal.addEventListener("abort",i);let m=S=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:o},...S!==void 0?[S]:[]),w=(async()=>{try{return{type:"data",result:await(a?a(k=>m(k)):m())}}catch(S){return{type:"error",result:S}}})();return Promise.race([w,d])};try{let u=n.route[e];if(r)if(u){let f,[d]=await Promise.all([s(u).catch(m=>{f=m}),r]);if(f!==void 0)throw f;l=d}else if(await r,u=n.route[e],u)l=await s(u);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw $e(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:oe.data,result:void 0};else if(u)l=await s(u);else{let f=new URL(t.url),d=f.pathname+f.search;throw $e(404,{pathname:d})}Q(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:oe.error,result:u}}finally{i&&t.signal.removeEventListener("abort",i)}return l}async function Cy(e){let{result:t,type:n}=e;if(Ff(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:oe.error,error:m}}return n===oe.error?{type:oe.error,error:new To(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:oe.data,data:d,statusCode:t.status,headers:t.headers}}if(n===oe.error){if(sc(t)){var r,a;if(t.data instanceof Error){var o,l;return{type:oe.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}}return{type:oe.error,error:new To(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:ia(t)?t.status:void 0,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:oe.error,error:t,statusCode:ia(t)?t.status:void 0}}if(Ty(t)){var i,s;return{type:oe.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((s=t.init)==null?void 0:s.headers)&&new Headers(t.init.headers)}}if(sc(t)){var u,f;return{type:oe.data,data:t.data,statusCode:(u=t.init)==null?void 0:u.status,headers:(f=t.init)!=null&&f.headers?new Headers(t.init.headers):void 0}}return{type:oe.data,data:t}}function xy(e,t,n,r,a,o){let l=e.headers.get("Location");if(Q(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ss.test(l)){let i=r.slice(0,r.findIndex(s=>s.route.id===n)+1);l=Ei(new URL(t.url),i,a,!0,l,o),e.headers.set("Location",l)}return e}function nc(e,t,n){if(Ss.test(e)){let r=e,a=r.startsWith("//")?new URL(t.protocol+r):new URL(r),o=ha(a.pathname,n)!=null;if(a.origin===t.origin&&o)return a.pathname+a.search+a.hash}return e}function zn(e,t,n,r){let a=e.createURL(Af(t)).toString(),o={signal:n};if(r&&yt(r.formMethod)){let{formMethod:l,formEncType:i}=r;o.method=l.toUpperCase(),i==="application/json"?(o.headers=new Headers({"Content-Type":i}),o.body=JSON.stringify(r.json)):i==="text/plain"?o.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?o.body=ki(r.formData):o.body=r.formData}return new Request(a,o)}function ki(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function rc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Py(e,t,n,r,a){let o={},l=null,i,s=!1,u={},f=n&&Je(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let m=d.route.id,w=t[m];if(Q(!kn(w),"Cannot handle redirect results in processLoaderData"),Je(w)){let S=w.error;f!==void 0&&(S=f,f=void 0),l=l||{};{let k=gn(e,m);l[k.route.id]==null&&(l[k.route.id]=S)}o[m]=void 0,s||(s=!0,i=ia(w.error)?w.error.status:500),w.headers&&(u[m]=w.headers)}else qt(w)?(r.set(m,w.deferredData),o[m]=w.deferredData.data,w.statusCode!=null&&w.statusCode!==200&&!s&&(i=w.statusCode),w.headers&&(u[m]=w.headers)):(o[m]=w.data,w.statusCode&&w.statusCode!==200&&!s&&(i=w.statusCode),w.headers&&(u[m]=w.headers))}),f!==void 0&&n&&(l={[n[0]]:f},o[n[0]]=void 0),{loaderData:o,errors:l,statusCode:i||200,loaderHeaders:u}}function ac(e,t,n,r,a,o,l){let{loaderData:i,errors:s}=Py(t,n,r,l);return a.forEach(u=>{let{key:f,match:d,controller:m}=u,w=o[f];if(Q(w,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(Je(w)){let S=gn(e.matches,d==null?void 0:d.route.id);s&&s[S.route.id]||(s=de({},s,{[S.route.id]:w.error})),e.fetchers.delete(f)}else if(kn(w))Q(!1,"Unhandled fetcher revalidation redirect");else if(qt(w))Q(!1,"Unhandled fetcher deferred data");else{let S=Vt(w.data);e.fetchers.set(f,S)}}),{loaderData:i,errors:s}}function oc(e,t,n,r){let a=de({},t);for(let o of n){let l=o.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&o.route.loader&&(a[l]=e[l]),r&&r.hasOwnProperty(l))break}return a}function lc(e){return e?Je(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function gn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ic(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function $e(e,t){let{pathname:n,routeId:r,method:a,type:o,message:l}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&n&&r?s="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new To(e||500,i,new Error(s),!0)}function Ua(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,a]=t[n];if(kn(a))return{key:r,result:a}}}function Af(e){let t=typeof e=="string"?zt(e):e;return ma(de({},t,{hash:""}))}function Ly(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function _y(e){return Ff(e.result)&&fy.has(e.result.status)}function qt(e){return e.type===oe.deferred}function Je(e){return e.type===oe.error}function kn(e){return(e&&e.type)===oe.redirect}function sc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Ty(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Ff(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function by(e){return dy.has(e.toLowerCase())}function yt(e){return uy.has(e.toLowerCase())}async function Iy(e,t,n,r,a){let o=Object.entries(t);for(let l=0;l<o.length;l++){let[i,s]=o[l],u=e.find(m=>(m==null?void 0:m.route.id)===i);if(!u)continue;let f=r.find(m=>m.route.id===u.route.id),d=f!=null&&!Mf(f,u)&&(a&&a[u.route.id])!==void 0;qt(s)&&d&&await ks(s,n,!1).then(m=>{m&&(t[i]=m)})}}async function Ny(e,t,n){for(let r=0;r<n.length;r++){let{key:a,routeId:o,controller:l}=n[r],i=t[a];e.find(u=>(u==null?void 0:u.route.id)===o)&&qt(i)&&(Q(l,"Expected an AbortController for revalidating fetcher deferred result"),await ks(i,l.signal,!0).then(u=>{u&&(t[a]=u)}))}}async function ks(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:oe.data,data:e.deferredData.unwrappedData}}catch(a){return{type:oe.error,error:a}}return{type:oe.data,data:e.deferredData.data}}}function Cs(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Or(e,t){let n=typeof t=="string"?zt(t).search:t.search;if(e[e.length-1].route.index&&Cs(n||""))return e[e.length-1];let r=Rf(e);return r[r.length-1]}function uc(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:o,json:l}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Ll(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Ry(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function _r(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Oy(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Vt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function By(e,t){try{let n=e.sessionStorage.getItem(Bf);if(n){let r=JSON.parse(n);for(let[a,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(a,new Set(o||[]))}}catch{}}function My(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(Bf,JSON.stringify(n))}catch(r){In(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}const $o=L.createContext(null),zf=L.createContext(null),ya=L.createContext(null),Qo=L.createContext(null),On=L.createContext({outlet:null,matches:[],isDataRoute:!1}),jf=L.createContext(null);function va(){return L.useContext(Qo)!=null}function xs(){return va()||Q(!1),L.useContext(Qo).location}function Hf(e){L.useContext(ya).static||L.useLayoutEffect(e)}function Uf(){let{isDataRoute:e}=L.useContext(On);return e?Qy():Dy()}function Dy(){va()||Q(!1);let e=L.useContext($o),{basename:t,future:n,navigator:r}=L.useContext(ya),{matches:a}=L.useContext(On),{pathname:o}=xs(),l=JSON.stringify(ws(a,n.v7_relativeSplatPath)),i=L.useRef(!1);return Hf(()=>{i.current=!0}),L.useCallback(function(u,f){if(f===void 0&&(f={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=Es(u,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:on([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,l,o,e])}function Ay(e,t){return Vf(e,t)}function Vf(e,t,n,r){va()||Q(!1);let{navigator:a}=L.useContext(ya),{matches:o}=L.useContext(On),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=xs(),f;if(t){var d;let I=typeof t=="string"?zt(t):t;s==="/"||(d=I.pathname)!=null&&d.startsWith(s)||Q(!1),f=I}else f=u;let m=f.pathname||"/",w=m;if(s!=="/"){let I=s.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(I.length).join("/")}let S=vn(e,{pathname:w}),k=Uy(S&&S.map(I=>Object.assign({},I,{params:Object.assign({},i,I.params),pathname:on([s,a.encodeLocation?a.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?s:on([s,a.encodeLocation?a.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),o,n,r);return t&&k?L.createElement(Qo.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Se.Pop}},k):k}function Fy(){let e=$y(),t=ia(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:a},n):null,null)}const zy=L.createElement(Fy,null);class jy extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?L.createElement(On.Provider,{value:this.props.routeContext},L.createElement(jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hy(e){let{routeContext:t,match:n,children:r}=e,a=L.useContext($o);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(On.Provider,{value:t},r)}function Uy(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let f=l.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);f>=0||Q(!1),l=l.slice(0,Math.min(l.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let d=l[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:w}=n,S=d.route.loader&&m[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((f,d,m)=>{let w,S=!1,k=null,I=null;n&&(w=i&&d.route.id?i[d.route.id]:void 0,k=d.route.errorElement||zy,s&&(u<0&&m===0?(Ky("route-fallback"),S=!0,I=null):u===m&&(S=!0,I=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,m+1)),c=()=>{let y;return w?y=k:S?y=I:d.route.Component?y=L.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=f,L.createElement(Hy,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?L.createElement(jy,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Wf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wf||{}),Gf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gf||{});function Vy(e){let t=L.useContext($o);return t||Q(!1),t}function Wy(e){let t=L.useContext(zf);return t||Q(!1),t}function Gy(e){let t=L.useContext(On);return t||Q(!1),t}function $f(e){let t=Gy(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function $y(){var e;let t=L.useContext(jf),n=Wy(),r=$f();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Qy(){let{router:e}=Vy(Wf.UseNavigateStable),t=$f(Gf.UseNavigateStable),n=L.useRef(!1);return Hf(()=>{n.current=!0}),L.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,sa({fromRouteId:t},o)))},[e,t])}const cc={};function Ky(e,t,n){cc[e]||(cc[e]=!0)}function Yy(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function qy(e){let{to:t,replace:n,state:r,relative:a}=e;va()||Q(!1);let{future:o,static:l}=L.useContext(ya),{matches:i}=L.useContext(On),{pathname:s}=xs(),u=Uf(),f=Es(t,ws(i,o.v7_relativeSplatPath),s,a==="path"),d=JSON.stringify(f);return L.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function pt(e){Q(!1)}function Zy(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Se.Pop,navigator:o,static:l=!1,future:i}=e;va()&&Q(!1);let s=t.replace(/^\/*/,"/"),u=L.useMemo(()=>({basename:s,navigator:o,static:l,future:sa({v7_relativeSplatPath:!1},i)}),[s,i,o,l]);typeof r=="string"&&(r=zt(r));let{pathname:f="/",search:d="",hash:m="",state:w=null,key:S="default"}=r,k=L.useMemo(()=>{let I=ha(f,s);return I==null?null:{location:{pathname:I,search:d,hash:m,state:w,key:S},navigationType:a}},[s,f,d,m,w,S,a]);return k==null?null:L.createElement(ya.Provider,{value:u},L.createElement(Qo.Provider,{children:n,value:k}))}function Xy(e){let{children:t,location:n}=e;return Ay(Ci(t),n)}new Promise(()=>{});function Ci(e,t){t===void 0&&(t=[]);let n=[];return L.Children.forEach(e,(r,a)=>{if(!L.isValidElement(r))return;let o=[...t,a];if(r.type===L.Fragment){n.push.apply(n,Ci(r.props.children,o));return}r.type!==pt&&Q(!1),!r.props.index||!r.props.children||Q(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ci(r.props.children,o)),n.push(l)}),n}function Jy(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:L.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:L.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:L.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo.apply(this,arguments)}const ev="6";try{window.__reactRouterVersion=ev}catch{}function tv(e,t){return yy({basename:t==null?void 0:t.basename,future:bo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:zh({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||nv(),routes:e,mapRouteProperties:Jy,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function nv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=bo({},t,{errors:rv(t.errors)})),t}function rv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new To(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let o=window[a.__subType];if(typeof o=="function")try{let l=new o(a.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let o=new Error(a.message);o.stack="",n[r]=o}}else n[r]=a;return n}const av=L.createContext({isTransitioning:!1}),ov=L.createContext(new Map),lv="startTransition",dc=Lp[lv],iv="flushSync",fc=Fh[iv];function sv(e){dc?dc(e):e()}function Tr(e){fc?fc(e):e()}class uv{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function cv(e){let{fallbackElement:t,router:n,future:r}=e,[a,o]=L.useState(n.state),[l,i]=L.useState(),[s,u]=L.useState({isTransitioning:!1}),[f,d]=L.useState(),[m,w]=L.useState(),[S,k]=L.useState(),I=L.useRef(new Map),{v7_startTransition:h}=r||{},c=L.useCallback(P=>{h?sv(P):P()},[h]),y=L.useCallback((P,U)=>{let{deletedFetchers:R,flushSync:ee,viewTransitionOpts:ae}=U;P.fetchers.forEach((q,re)=>{q.data!==void 0&&I.current.set(re,q.data)}),R.forEach(q=>I.current.delete(q));let W=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!ae||W){ee?Tr(()=>o(P)):c(()=>o(P));return}if(ee){Tr(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation})});let q=n.window.document.startViewTransition(()=>{Tr(()=>o(P))});q.finished.finally(()=>{Tr(()=>{d(void 0),w(void 0),i(void 0),u({isTransitioning:!1})})}),Tr(()=>w(q));return}m?(f&&f.resolve(),m.skipTransition(),k({state:P,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation})):(i(P),u({isTransitioning:!0,flushSync:!1,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation}))},[n.window,m,f,I,c]);L.useLayoutEffect(()=>n.subscribe(y),[n,y]),L.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new uv)},[s]),L.useEffect(()=>{if(f&&l&&n.window){let P=l,U=f.promise,R=n.window.document.startViewTransition(async()=>{c(()=>o(P)),await U});R.finished.finally(()=>{d(void 0),w(void 0),i(void 0),u({isTransitioning:!1})}),w(R)}},[c,l,f,n.window]),L.useEffect(()=>{f&&l&&a.location.key===l.location.key&&f.resolve()},[f,m,a.location,l]),L.useEffect(()=>{!s.isTransitioning&&S&&(i(S.state),u({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),k(void 0))},[s.isTransitioning,S]),L.useEffect(()=>{},[]);let C=L.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:P=>n.navigate(P),push:(P,U,R)=>n.navigate(P,{state:U,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(P,U,R)=>n.navigate(P,{replace:!0,state:U,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[n]),b=n.basename||"/",B=L.useMemo(()=>({router:n,navigator:C,static:!1,basename:b}),[n,C,b]),v=L.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return L.useEffect(()=>Yy(r,n.future),[r,n.future]),L.createElement(L.Fragment,null,L.createElement($o.Provider,{value:B},L.createElement(zf.Provider,{value:a},L.createElement(ov.Provider,{value:I.current},L.createElement(av.Provider,{value:s},L.createElement(Zy,{basename:b,location:a.location,navigationType:a.historyAction,navigator:C,future:v},a.initialized||n.future.v7_partialHydration?L.createElement(dv,{routes:n.routes,future:n.future,state:a}):t))))),null)}const dv=L.memo(fv);function fv(e){let{routes:t,future:n,state:r}=e;return Vf(t,void 0,r,n)}var pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pc||(pc={}));var mc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));function pv(){const e=Uf(),t=r=>{const a=document.getElementById(r);a&&a.scrollIntoView({behavior:"smooth",block:"start"})},n=()=>{e("/configurator")};return L.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const r=document.getElementById("year");r&&(r.textContent=new Date().getFullYear().toString());const a=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],o=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],l=[...a,...o],i={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},s=new Set(["shell","trimpiece","backShellMain","backHandles"]),u=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],f=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],d=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),m=[{id:"shell",mask:"/assets/masks/leftShell.png"},{id:"trimpiece",mask:"/assets/masks/centerBody.png"},{id:"faceButtons",mask:"/assets/masks/faceButtons.png"},{id:"stickL",mask:"/assets/masks/stickL.png"},{id:"stickR",mask:"/assets/masks/stickR.png"},{id:"touchpad",mask:"/assets/masks/touchpad.png"},{id:"share",mask:"/assets/masks/share.png"},{id:"options",mask:"/assets/masks/options.png"},{id:"psButton",mask:"/assets/masks/psButton.png"},{id:"bumpers",mask:"/assets/masks/bumperL.png"}];function w(W){return s.has(W)?u:f}function S(W){return W[Math.floor(Math.random()*W.length)]}function k(W,q){const re={};let Ee=0;return l.forEach(T=>{const j=w(T.id),V=S(j);re[T.id]=V,Ee+=i[T.id]||0}),{id:W,name:(q==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(W+1),colors:re,total:Ee}}function I(W,q){const re=W.toFixed(2);return q==="ar"?re+" د.ب":"BHD "+re}const h={ar:{navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
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
        `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly."}};let c=localStorage.getItem("ez_lang")||"ar";function y(){document.documentElement.lang=c,document.documentElement.dir=c==="ar"?"rtl":"ltr"}function C(){const W=h[c];document.querySelectorAll("[data-i18n]").forEach(re=>{const Ee=re.getAttribute("data-i18n");W[Ee]&&(re.textContent=W[Ee])}),document.querySelectorAll("[data-i18n-html]").forEach(re=>{const Ee=re.getAttribute("data-i18n-html");W[Ee]&&(re.innerHTML=W[Ee])});const q=document.getElementById("langToggle");q&&(q.textContent=c==="ar"?"EN":"عربي")}let b=[];function B(W){const q=h[c],re=document.createElement("article");re.className="build-card";const Ee=document.createElement("div");Ee.className="build-thumb";const Ge=document.createElement("div");Ge.className="thumb-controller";const T=document.createElement("div");T.className="thumb-base",Ge.appendChild(T),m.forEach(Me=>{const Pe=W.colors[Me.id];if(!Pe)return;const ye=document.createElement("div");ye.className="thumb-layer",ye.style.setProperty("--mask-url",`url('${Me.mask}')`),ye.style.setProperty("--tint",Pe.hex),d.has(Pe.hex.toLowerCase())?ye.style.setProperty("--tint-opacity","0.35"):ye.style.setProperty("--tint-opacity","1"),Ge.appendChild(ye)}),Ee.appendChild(Ge);const j=document.createElement("div");j.className="build-body";const V=document.createElement("div");V.className="build-title",V.textContent=W.name;const X=document.createElement("div");X.className="build-price",X.innerHTML=I(W.total,c);const te=document.createElement("div");te.className="build-color-row";const Ie=document.createElement("button");return Ie.className="build-cta",Ie.type="button",Ie.textContent=q.preview,Ie.addEventListener("click",n),j.appendChild(V),j.appendChild(X),j.appendChild(te),j.appendChild(Ie),re.appendChild(Ee),re.appendChild(j),re}function v(){const W=document.getElementById("buildGrid");if(W){if(W.innerHTML="",b.length)b=b.map((q,re)=>k(re,c));else for(let q=0;q<20;q++)b.push(k(q,c));b.forEach(q=>W.appendChild(B(q)))}}function P(W){c=W,localStorage.setItem("ez_lang",W),y(),C(),v()}const U=document.getElementById("langToggle"),R=document.getElementById("contactForm"),ee=()=>{P(c==="ar"?"en":"ar")},ae=W=>{W.preventDefault(),alert(h[c].formSuccess),R==null||R.reset()};return U==null||U.addEventListener("click",ee),R==null||R.addEventListener("submit",ae),y(),C(),v(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",U==null||U.removeEventListener("click",ee),R==null||R.removeEventListener("submit",ae)}},[e]),N.jsxs("div",{className:"home-page",children:[N.jsxs("header",{className:"top-nav",children:[N.jsx("div",{className:"nav-left",children:N.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[N.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),N.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),N.jsxs("div",{className:"nav-right",children:[N.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>t("premadeSection")}),N.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>t("contactSection")}),N.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:n}),N.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"})]})]}),N.jsxs("section",{className:"hero",children:[N.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:N.jsx("source",{src:"/assets/back.mp4",type:"video/mp4"})}),N.jsx("div",{className:"hero-overlay"}),N.jsx("div",{className:"hero-inner",children:N.jsxs("div",{children:[N.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),N.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),N.jsxs("div",{className:"hero-actions",children:[N.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:n}),N.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>t("premadeSection")})]})]})})]}),N.jsxs("section",{className:"section",id:"premadeSection",children:[N.jsx("div",{className:"section-header",children:N.jsx("div",{children:N.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),N.jsx("div",{className:"build-grid",id:"buildGrid"})]}),N.jsxs("section",{className:"section",id:"contactSection",children:[N.jsx("div",{className:"section-header",children:N.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),N.jsxs("div",{className:"contact-grid",children:[N.jsxs("div",{className:"contact-card",children:[N.jsx("h3",{"data-i18n":"contactCardTitle"}),N.jsx("p",{"data-i18n":"contactCardText"}),N.jsxs("form",{id:"contactForm",children:[N.jsxs("div",{className:"contact-form-group",children:[N.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),N.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),N.jsxs("div",{className:"contact-form-group",children:[N.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),N.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),N.jsxs("div",{className:"contact-form-group",children:[N.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),N.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),N.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),N.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),N.jsxs("footer",{className:"footer",children:[N.jsx("span",{"data-i18n":"footerText"}),N.jsx("span",{id:"year"})]})]})}const mv=`


<canvas id="bgCanvas"></canvas>
<div class="zoho-loading-overlay" id="zohoLoadingOverlay" aria-live="polite" aria-hidden="false">
<div class="zoho-loading-card">
<div class="zoho-loading-spinner" aria-hidden="true"></div>
<div class="zoho-loading-text" data-i18n="loadingConfigurator">Loading configurator...</div>
</div>
</div>
<audio id="sfxClick" preload="auto" src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="></audio>
<audio id="sfxClick2" preload="auto" src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="></audio>
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
<div class="mobile-options-drawer" id="mobileOptionsDrawer" aria-live="polite">
<div class="mobile-options-tabs">
<button class="mobile-options-tab" data-tab="options" data-i18n="partsOptionsHeading" type="button">خيارات القطعة</button>
<button class="mobile-options-tab" data-tab="colors" data-i18n="partsColorsHeading" type="button">الألوان المتاحة</button>
</div>
<div class="mobile-options-grid" id="mobileOptionsGrid"></div>
</div>
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
<div class="configurator-controls" id="configuratorControls" aria-label="Configurator controls">
<button class="control-btn" data-panel="colors" type="button">
<span class="control-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" role="img" aria-hidden="true">
<circle cx="6.5" cy="8" r="3.2" fill="currentColor"/>
<circle cx="16.5" cy="7.5" r="3" fill="currentColor" opacity="0.75"/>
<circle cx="13" cy="16.5" r="4" fill="currentColor" opacity="0.55"/>
</svg>
</span>
<span class="control-label" data-i18n="partsColorsHeading">الألوان المتاحة</span>
</button>
<button class="control-btn active" data-panel="options" type="button">
<span class="control-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
<path d="M4 7h10"/>
<path d="M4 12h16"/>
<path d="M4 17h8"/>
<circle cx="17" cy="7" r="2.2" fill="currentColor"/>
<circle cx="9" cy="17" r="2.2" fill="currentColor"/>
</svg>
</span>
<span class="control-label" data-i18n="partsOptionsHeading">خيارات القطعة</span>
</button>
<button class="control-btn" id="langSwitchBtn" type="button">
<span class="control-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
<circle cx="12" cy="12" r="9"/>
<path d="M3 12h18"/>
<path d="M12 3a12 12 0 0 1 0 18"/>
<path d="M12 3a12 12 0 0 0 0 18"/>
</svg>
</span>
<span class="control-label" data-i18n="chooseLanguage">اختيار اللغة</span>
</button>
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
        loadingConfigurator: "جاري تحميل الإعدادات...",
        chooseLanguage: "اختيار اللغة",
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
        loadingConfigurator: "Loading configurator...",
        chooseLanguage: "Language",
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
      setZohoLoading(true);
      try {
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
      } finally {
        setZohoLoading(false);
      }
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
    const langButtons = langToggle ? langToggle.querySelectorAll(".lang-btn") : [];
    const langSwitchBtn = document.getElementById("langSwitchBtn");
    const configuratorControls = document.getElementById("configuratorControls");
    const panelButtons = configuratorControls ? configuratorControls.querySelectorAll("[data-panel]") : [];
    const zohoLoadingOverlay = document.getElementById("zohoLoadingOverlay");
    const mobileOptionsDrawer = document.getElementById("mobileOptionsDrawer");
    const mobileOptionsGrid = document.getElementById("mobileOptionsGrid");
    const mobileOptionsTabs = mobileOptionsDrawer ? mobileOptionsDrawer.querySelectorAll(".mobile-options-tab") : [];
    const mobileQuery = window.matchMedia("(max-width: 900px)");
    let currentPanel = "options";
    let mobileDrawerOptions = [];
    let mobileDrawerColors = [];

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

    function setZohoLoading(isLoading) {
      if (!zohoLoadingOverlay) return;
      zohoLoadingOverlay.classList.toggle("is-hidden", !isLoading);
      zohoLoadingOverlay.setAttribute("aria-hidden", isLoading ? "false" : "true");
    }

    function setPanel(panel) {
      currentPanel = panel;
      selectionPaletteMode = panel;
      document.body.classList.toggle("config-panel-options", panel === "options");
      document.body.classList.toggle("config-panel-colors", panel === "colors");
      panelButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.panel === panel);
        btn.setAttribute("aria-pressed", btn.dataset.panel === panel ? "true" : "false");
      });
      if (accordionItems.length >= 2) {
        accordionItems.forEach((item, idx) => {
          const isOptions = panel === "options";
          item.classList.toggle("open", isOptions ? idx === 0 : idx === 1);
        });
        refreshAccordionHeights();
      }
      if (selectedPartId) {
        openColorPanelForPart(selectedPartId);
      }
    }

    function isMobileLayout() {
      return mobileQuery && mobileQuery.matches;
    }

    function disableMobilePanels() {
      document.body.classList.remove("config-panel-options", "config-panel-colors");
      selectionPaletteMode = null;
      panelButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      if (mobileOptionsDrawer) {
        mobileOptionsDrawer.style.display = "none";
      }
    }

    function setMobileDrawerTab(tab) {
      selectionPaletteMode = tab;
      updateMobileOptionsDrawer();
    }

    if (mobileOptionsDrawer) {
      mobileOptionsDrawer.addEventListener("click", (e) => {
        if (!isMobileLayout()) return;
        const btn = e.target.closest(".mobile-options-tab");
        if (!btn || btn.disabled) return;
        const tab = btn.dataset.tab;
        if (tab) setMobileDrawerTab(tab);
      });
    }

    if (configuratorControls) {
      configuratorControls.addEventListener("click", (e) => {
        if (!isMobileLayout()) return;
        const btn = e.target.closest(".control-btn");
        if (!btn) return;
        if (btn.id === "langSwitchBtn") {
          currentLang = currentLang === "ar" ? "en" : "ar";
          applyLanguage();
          return;
        }
        const panel = btn.dataset.panel;
        if (panel) setPanel(panel);
      });

      if (isMobileLayout()) {
        setPanel(currentPanel);
      } else {
        disableMobilePanels();
      }

      if (mobileQuery && mobileQuery.addEventListener) {
        mobileQuery.addEventListener("change", (e) => {
          if (e.matches) {
            setPanel(currentPanel);
          } else {
            disableMobilePanels();
          }
        });
      } else if (mobileQuery && mobileQuery.addListener) {
        mobileQuery.addListener((e) => {
          if (e.matches) {
            setPanel(currentPanel);
          } else {
            disableMobilePanels();
          }
        });
      }
    }

    if (langToggle) {
      langToggle.addEventListener("click", (e) => {
        const btn = e.target.closest(".lang-btn");
        if (!btn) return;
        const lang = btn.dataset.lang;
        if (!lang || lang === currentLang) return;
        currentLang = lang;
        langButtons.forEach(b => b.classList.toggle("active", b.dataset.lang === currentLang));
        applyLanguage();
      });
    }

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
      mobileDrawerOptions = [];
      mobileDrawerColors = [];
      updateMobileOptionsDrawer();
    }

    function resetOptionsPanel() {
      optionsPanelSub.textContent = "";
      optionsPanelGrid.innerHTML = "";
    }

    function buildPaletteCells(target, entries, isOption) {
      target.innerHTML = "";
      entries.forEach(({ hex, key, qty, price }) => {
        const cell = document.createElement("div");
        cell.className = isOption ? "cd-cell-op" : "cd-cell";

        const sw = document.createElement("button");
        sw.className = isOption ? "cd-swatch-op" : "cd-swatch";
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
          if (isOption) {
            applyOptions(selectedPartId, hex);
          } else {
            applyColor(selectedPartId, hex);
            playClick2();
          }
        });

        const lbl = document.createElement("div");
        lbl.className = "cd-color-name";
        lbl.style.textAlign = "center";
        const labelText = isOption ? t(key) : (key && t(key) ? t(key) : hex);
        const priceVal = typeof price === "number" ? i18n[currentLang].currencyPrefix + price.toFixed(2) : "";
        const qtyDisplay = formatQtyDisplay(numericQty);
        const lines = [labelText];
        if (priceVal) lines.push(priceVal);
        if (qtyDisplay) lines.push(qtyDisplay);
        lbl.innerHTML = lines.join("<br/>");

        cell.appendChild(sw);
        cell.appendChild(lbl);
        target.appendChild(cell);
      });
    }

    function updateMobileOptionsDrawer() {
      if (!mobileOptionsDrawer || !mobileOptionsGrid || !mobileOptionsTabs) return;
      if (!isMobileLayout() || !selectedPartId) {
        mobileOptionsDrawer.style.display = "none";
        return;
      }

      const hasOptions = mobileDrawerOptions && mobileDrawerOptions.length;
      const hasColors = mobileDrawerColors && mobileDrawerColors.length;
      if (!hasOptions && !hasColors) {
        mobileOptionsDrawer.style.display = "none";
        return;
      }

      mobileOptionsDrawer.style.display = "flex";

      let activeTab = selectionPaletteMode;
      if (activeTab !== "options" && activeTab !== "colors") {
        activeTab = hasColors ? "colors" : "options";
      }
      if (activeTab === "colors" && !hasColors) activeTab = "options";
      if (activeTab === "options" && !hasOptions) activeTab = "colors";
      selectionPaletteMode = activeTab;

      mobileOptionsTabs.forEach(btn => {
        const tab = btn.dataset.tab;
        const isOptionsTab = tab === "options";
        const enabled = isOptionsTab ? hasOptions : hasColors;
        btn.disabled = !enabled;
        btn.classList.toggle("active", tab === activeTab);
      });

      const entries = activeTab === "colors" ? mobileDrawerColors : mobileDrawerOptions;
      buildPaletteCells(mobileOptionsGrid, entries, activeTab === "options");
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
        buildPaletteCells(colorPanelGrid, palette, false);
        mobileDrawerOptions = optionspalette || [];
        mobileDrawerColors = palette || [];
        updateMobileOptionsDrawer();
      } else if (showOptions && hasOptions) {
        optionsPanelSub.style.display = "block";
        optionsPanelGrid.style.display = "grid";
        colorPanelHeaderTop.style.display = "block";
        optionsPanelSub.textContent = t("availableOptions");
        buildPaletteCells(optionsPanelGrid, optionspalette, true);
        mobileDrawerOptions = optionspalette || [];
        mobileDrawerColors = palette || [];
        updateMobileOptionsDrawer();
      } else {
        // show empty placeholder
        colorEmptyState.style.display = "flex";
        mobileDrawerOptions = [];
        mobileDrawerColors = [];
        updateMobileOptionsDrawer();
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

      const loadingTextEl = document.querySelector("[data-i18n='loadingConfigurator']");
      if (loadingTextEl) loadingTextEl.textContent = t("loadingConfigurator");

      if (langSwitchBtn) {
        const labelEl = langSwitchBtn.querySelector("[data-i18n='chooseLanguage']");
        if (labelEl) labelEl.textContent = t("chooseLanguage");
        else langSwitchBtn.textContent = t("chooseLanguage");
      }
      if (langButtons.length) {
        langButtons.forEach(b => b.classList.toggle("active", b.dataset.lang === currentLang));
      }
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
  

`;function yv(){return L.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=hv,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),N.jsx("div",{className:"configurator-page",children:N.jsx("div",{dangerouslySetInnerHTML:{__html:mv}})})}const vv=`


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
  

`;function wv(){return L.useEffect(()=>{const e=document.createElement("script");return e.textContent=gv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),N.jsx("div",{className:"cart-page",children:N.jsx("div",{dangerouslySetInnerHTML:{__html:vv}})})}const Ev=`


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
  

`;function kv(){return L.useEffect(()=>{const e=document.createElement("script");return e.textContent=Sv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),N.jsx("div",{className:"checkout-page",children:N.jsx("div",{dangerouslySetInnerHTML:{__html:Ev}})})}const Cv=`
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
`,xv=`
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
`;function Pv(){return L.useEffect(()=>{const e=document.createElement("script");return e.textContent=xv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:Cv}})}const Lv=`
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
`,_v=`
  const btn = document.getElementById("goSummaryBtn");
  const statusEl = document.getElementById("confirmStatus");
  btn.addEventListener("click", () => window.location.href = "/order-summary");
  statusEl.textContent = "Payment Confirmed";
`;function Tv(){return L.useEffect(()=>{const e=document.createElement("script");return e.textContent=_v,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:Lv}})}const bv=`
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
`;function Nv(){return L.useEffect(()=>{const e=document.createElement("script");return e.textContent=Iv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:bv}})}const Rv=`
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
`,Ov=`
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
`;function Bv(){return L.useEffect(()=>{const e=document.createElement("script");return e.textContent=Ov,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:Rv}})}const Mv=`
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
`,Dv=`
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
`;function Av(){return L.useEffect(()=>{const e=document.createElement("script");return e.textContent=Dv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:Mv}})}function Fv(){return N.jsxs(Xy,{children:[N.jsx(pt,{path:"/",element:N.jsx(pv,{})}),N.jsx(pt,{path:"/configurator",element:N.jsx(yv,{})}),N.jsx(pt,{path:"/cart",element:N.jsx(wv,{})}),N.jsx(pt,{path:"/checkout",element:N.jsx(kv,{})}),N.jsx(pt,{path:"/payment",element:N.jsx(Pv,{})}),N.jsx(pt,{path:"/payment/confirmation",element:N.jsx(Tv,{})}),N.jsx(pt,{path:"/order-summary",element:N.jsx(Nv,{})}),N.jsx(pt,{path:"/trackorder",element:N.jsx(Bv,{})}),N.jsx(pt,{path:"/pos",element:N.jsx(Av,{})}),N.jsx(pt,{path:"*",element:N.jsx(qy,{to:"/",replace:!0})})]})}const zv=tv([{path:"/*",element:N.jsx(Fv,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});_l.createRoot(document.getElementById("root")).render(N.jsx(cv,{router:zv}));

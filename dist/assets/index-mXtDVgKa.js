function gc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},Ol={},Ec={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),cp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),yp=Symbol.for("react.memo"),wp=Symbol.for("react.lazy"),Fs=Symbol.iterator;function Ep(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sc=Object.assign,kc={};function pr(e,t,n){this.props=e,this.context=t,this.refs=kc,this.updater=n||bc}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cc(){}Cc.prototype=pr.prototype;function xi(e,t,n){this.props=e,this.context=t,this.refs=kc,this.updater=n||bc}var Pi=xi.prototype=new Cc;Pi.constructor=xi;Sc(Pi,pr.prototype);Pi.isPureReactComponent=!0;var js=Array.isArray,Lc=Object.prototype.hasOwnProperty,Ti={current:null},xc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Lc.call(t,r)&&!xc.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:fa,type:e,key:l,ref:o,props:a,_owner:Ti.current}}function bp(e,t){return{$$typeof:fa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===fa}function Sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hs=/\/+/g;function Jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sp(""+e.key):t.toString(36)}function Ga(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fa:case cp:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Jl(o,0):r,js(a)?(n="",e!=null&&(n=e.replace(Hs,"$&/")+"/"),Ga(a,t,n,"",function(u){return u})):a!=null&&(Ni(a)&&(a=bp(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Hs,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",js(e))for(var i=0;i<e.length;i++){l=e[i];var s=r+Jl(l,i);o+=Ga(l,t,n,s,a)}else if(s=Ep(e),typeof s=="function")for(e=s.call(e),i=0;!(l=e.next()).done;)l=l.value,s=r+Jl(l,i++),o+=Ga(l,t,n,s,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(e,t,n){if(e==null)return e;var r=[],a=0;return Ga(e,r,"","",function(l){return t.call(n,l,a++)}),r}function kp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},$a={transition:null},Cp={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:$a,ReactCurrentOwner:Ti};function Tc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Pa,forEach:function(e,t,n){Pa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pa(e,function(){t++}),t},toArray:function(e){return Pa(e,function(t){return t})||[]},only:function(e){if(!Ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=pr;Q.Fragment=dp;Q.Profiler=pp;Q.PureComponent=xi;Q.StrictMode=fp;Q.Suspense=gp;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;Q.act=Tc;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sc({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ti.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)Lc.call(t,s)&&!xc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:fa,type:e.type,key:a,ref:l,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};Q.createElement=Pc;Q.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:vp,render:e}};Q.isValidElement=Ni;Q.lazy=function(e){return{$$typeof:wp,_payload:{_status:-1,_result:e},_init:kp}};Q.memo=function(e,t){return{$$typeof:yp,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=$a.transition;$a.transition={};try{e()}finally{$a.transition=t}};Q.unstable_act=Tc;Q.useCallback=function(e,t){return We.current.useCallback(e,t)};Q.useContext=function(e){return We.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Q.useEffect=function(e,t){return We.current.useEffect(e,t)};Q.useId=function(){return We.current.useId()};Q.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return We.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};Q.useRef=function(e){return We.current.useRef(e)};Q.useState=function(e){return We.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return We.current.useTransition()};Q.version="18.3.1";Ec.exports=Q;var P=Ec.exports;const Lp=yc(P),xp=gc({__proto__:null,default:Lp},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=P,Tp=Symbol.for("react.element"),Np=Symbol.for("react.fragment"),_p=Object.prototype.hasOwnProperty,Op=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bp={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_p.call(t,r)&&!Bp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Tp,type:e,key:l,ref:o,props:a,_owner:Op.current}}Ol.Fragment=Np;Ol.jsx=Nc;Ol.jsxs=Nc;wc.exports=Ol;var N=wc.exports,No={},_c={exports:{}},at={},Oc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,A){var j=L.length;L.push(A);e:for(;0<j;){var $=j-1>>>1,Y=L[$];if(0<a(Y,A))L[$]=A,L[j]=Y,j=$;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var A=L[0],j=L.pop();if(j!==A){L[0]=j;e:for(var $=0,Y=L.length,be=Y>>>1;$<be;){var Ce=2*($+1)-1,Le=L[Ce],Te=Ce+1,Ne=L[Te];if(0>a(Le,j))Te<Y&&0>a(Ne,Le)?(L[$]=Ne,L[Te]=j,$=Te):(L[$]=Le,L[Ce]=j,$=Ce);else if(Te<Y&&0>a(Ne,j))L[$]=Ne,L[Te]=j,$=Te;else break e}}return A}function a(L,A){var j=L.sortIndex-A.sortIndex;return j!==0?j:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var s=[],u=[],f=1,d=null,m=3,w=!1,b=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=L)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function k(L){if(S=!1,v(L),!b)if(n(s)!==null)b=!0,je(T);else{var A=n(u);A!==null&&K(k,A.startTime-L)}}function T(L,A){b=!1,S&&(S=!1,h(C),C=-1),w=!0;var j=m;try{for(v(A),d=n(s);d!==null&&(!(d.expirationTime>A)||L&&!ne());){var $=d.callback;if(typeof $=="function"){d.callback=null,m=d.priorityLevel;var Y=$(d.expirationTime<=A);A=e.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(s)&&r(s),v(A)}else r(s);d=n(s)}if(d!==null)var be=!0;else{var Ce=n(u);Ce!==null&&K(k,Ce.startTime-A),be=!1}return be}finally{d=null,m=j,w=!1}}var R=!1,g=null,C=-1,V=5,I=-1;function ne(){return!(e.unstable_now()-I<V)}function X(){if(g!==null){var L=e.unstable_now();I=L;var A=!0;try{A=g(!0,L)}finally{A?re():(R=!1,g=null)}}else R=!1}var re;if(typeof c=="function")re=function(){c(X)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,$e=he.port2;he.port1.onmessage=X,re=function(){$e.postMessage(null)}}else re=function(){O(X,0)};function je(L){g=L,R||(R=!0,re())}function K(L,A){C=O(function(){L(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,je(T))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var j=m;m=A;try{return L()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var j=m;m=L;try{return A()}finally{m=j}},e.unstable_scheduleCallback=function(L,A,j){var $=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?$+j:$):j=$,L){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=j+Y,L={id:f++,callback:A,priorityLevel:L,startTime:j,expirationTime:Y,sortIndex:-1},j>$?(L.sortIndex=j,t(u,L),n(s)===null&&L===n(u)&&(S?(h(C),C=-1):S=!0,K(k,j-$))):(L.sortIndex=Y,t(s,L),b||w||(b=!0,je(T))),L},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(L){var A=m;return function(){var j=m;m=A;try{return L.apply(this,arguments)}finally{m=j}}}})(Bc);Oc.exports=Bc;var Ip=Oc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=P,rt=Ip;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,$r={};function In(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for($r[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=Object.prototype.hasOwnProperty,Mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Us={},Vs={};function Dp(e){return _o.call(Vs,e)?!0:_o.call(Us,e)?!1:Mp.test(e)?Vs[e]=!0:(Us[e]=!0,!1)}function Ap(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zp(e,t,n,r){if(t===null||typeof t>"u"||Ap(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var _i=/[\-:]([a-z])/g;function Oi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_i,Oi);Me[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_i,Oi);Me[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_i,Oi);Me[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bi(e,t,n,r){var a=Me.hasOwnProperty(t)?Me[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zp(t,n,a,r)&&(n=null),r||a===null?Dp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),Ii=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Mc=Symbol.for("react.context"),Ri=Symbol.for("react.forward_ref"),Bo=Symbol.for("react.suspense"),Io=Symbol.for("react.suspense_list"),Mi=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Dc=Symbol.for("react.offscreen"),Ws=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,eo;function Br(e){if(eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eo=t&&t[1]||""}return`
`+eo+e}var to=!1;function no(e,t){if(!e||to)return"";to=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||a[o]!==l[i]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=i);break}}}finally{to=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function Fp(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=no(e.type,!1),e;case 11:return e=no(e.type.render,!1),e;case 1:return e=no(e.type,!0),e;default:return""}}function Ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Un:return"Portal";case Oo:return"Profiler";case Ii:return"StrictMode";case Bo:return"Suspense";case Io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case Ri:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mi:return t=e.displayName||null,t!==null?t:Ro(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return Ro(e(t))}catch{}}return null}function jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(t);case 8:return t===Ii?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=Ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Na(e){e._valueTracker||(e._valueTracker=Hp(e))}function zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mo(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fc(e,t){t=t.checked,t!=null&&Bi(e,"checked",t,!1)}function Do(e,t){Fc(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ao(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ao(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $s(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ao(e,t,n){(t!=="number"||al(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function zo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Ir(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function jc(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _a,Uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_a.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function Vc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Wc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Vc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Vp=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(e,t){if(t){if(Vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ho(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vo=null,tr=null,nr=null;function Ks(e){if(e=ha(e)){if(typeof Vo!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Dl(t),Vo(e.stateNode,e.type,t))}}function Gc(e){tr?nr?nr.push(e):nr=[e]:tr=e}function $c(){if(tr){var e=tr,t=nr;if(nr=tr=null,Ks(e),t)for(e=0;e<t.length;e++)Ks(t[e])}}function qc(e,t){return e(t)}function Qc(){}var ro=!1;function Kc(e,t,n){if(ro)return e(t,n);ro=!0;try{return qc(e,t,n)}finally{ro=!1,(tr!==null||nr!==null)&&(Qc(),$c())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Wo=!1;if(Rt)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Wo=!1}function Wp(e,t,n,r,a,l,o,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var zr=!1,ll=null,ol=!1,Go=null,Gp={onError:function(e){zr=!0,ll=e}};function $p(e,t,n,r,a,l,o,i,s){zr=!1,ll=null,Wp.apply(Gp,arguments)}function qp(e,t,n,r,a,l,o,i,s){if($p.apply(this,arguments),zr){if(zr){var u=ll;zr=!1,ll=null}else throw Error(_(198));ol||(ol=!0,Go=u)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ys(e){if(Rn(e)!==e)throw Error(_(188))}function Qp(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Ys(a),e;if(l===r)return Ys(a),t;l=l.sibling}throw Error(_(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,i=a.child;i;){if(i===n){o=!0,n=a,r=l;break}if(i===r){o=!0,r=a,n=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===n){o=!0,n=l,r=a;break}if(i===r){o=!0,r=l,n=a;break}i=i.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Zc(e){return e=Qp(e),e!==null?Xc(e):null}function Xc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xc(e);if(t!==null)return t;e=e.sibling}return null}var Jc=rt.unstable_scheduleCallback,Zs=rt.unstable_cancelCallback,Kp=rt.unstable_shouldYield,Yp=rt.unstable_requestPaint,Ee=rt.unstable_now,Zp=rt.unstable_getCurrentPriorityLevel,Ai=rt.unstable_ImmediatePriority,ed=rt.unstable_UserBlockingPriority,il=rt.unstable_NormalPriority,Xp=rt.unstable_LowPriority,td=rt.unstable_IdlePriority,Bl=null,Lt=null;function Jp(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Bl,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var Oa=64,Ba=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~a;i!==0?r=Rr(i):(l&=o,l!==0&&(r=Rr(l)))}else o=n&~a,o!==0?r=Rr(o):l!==0&&(r=Rr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),a=1<<n,r|=e[n],t&=~a;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-yt(l),i=1<<o,s=a[o];s===-1?(!(i&n)||i&r)&&(a[o]=rm(i,t)):s<=t&&(e.expiredLanes|=i),l&=~i}}function $o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nd(){var e=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),e}function ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function lm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-yt(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var le=0;function rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ad,Fi,ld,od,id,qo=!1,Ia=[],Xt=null,Jt=null,en=null,Kr=new Map,Yr=new Map,qt=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xs(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function kr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ha(t),t!==null&&Fi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function im(e,t,n,r,a){switch(t){case"focusin":return Xt=kr(Xt,e,t,n,r,a),!0;case"dragenter":return Jt=kr(Jt,e,t,n,r,a),!0;case"mouseover":return en=kr(en,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Kr.set(l,kr(Kr.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Yr.set(l,kr(Yr.get(l)||null,e,t,n,r,a)),!0}return!1}function sd(e){var t=bn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yc(n),t!==null){e.blockedOn=t,id(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Uo=r,n.target.dispatchEvent(r),Uo=null}else return t=ha(n),t!==null&&Fi(t),e.blockedOn=n,!1;t.shift()}return!0}function Js(e,t,n){qa(e)&&n.delete(t)}function sm(){qo=!1,Xt!==null&&qa(Xt)&&(Xt=null),Jt!==null&&qa(Jt)&&(Jt=null),en!==null&&qa(en)&&(en=null),Kr.forEach(Js),Yr.forEach(Js)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,qo||(qo=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,sm)))}function Zr(e){function t(a){return Cr(a,e)}if(0<Ia.length){Cr(Ia[0],e);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Cr(Xt,e),Jt!==null&&Cr(Jt,e),en!==null&&Cr(en,e),Kr.forEach(t),Yr.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)sd(n),n.blockedOn===null&&qt.shift()}var rr=zt.ReactCurrentBatchConfig,ul=!0;function um(e,t,n,r){var a=le,l=rr.transition;rr.transition=null;try{le=1,ji(e,t,n,r)}finally{le=a,rr.transition=l}}function cm(e,t,n,r){var a=le,l=rr.transition;rr.transition=null;try{le=4,ji(e,t,n,r)}finally{le=a,rr.transition=l}}function ji(e,t,n,r){if(ul){var a=Qo(e,t,n,r);if(a===null)ho(e,t,r,cl,n),Xs(e,r);else if(im(a,e,t,n,r))r.stopPropagation();else if(Xs(e,r),t&4&&-1<om.indexOf(e)){for(;a!==null;){var l=ha(a);if(l!==null&&ad(l),l=Qo(e,t,n,r),l===null&&ho(e,t,r,cl,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else ho(e,t,r,null,n)}}var cl=null;function Qo(e,t,n,r){if(cl=null,e=Di(r),e=bn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cl=e,null}function ud(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case Ai:return 1;case ed:return 4;case il:case Xp:return 16;case td:return 536870912;default:return 16}default:return 16}}var Kt=null,Hi=null,Qa=null;function cd(){if(Qa)return Qa;var e,t=Hi,n=t.length,r,a="value"in Kt?Kt.value:Kt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return Qa=a.slice(e,1<r?1-r:void 0)}function Ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ra(){return!0}function eu(){return!1}function lt(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ra:eu,this.isPropagationStopped=eu,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=lt(mr),ma=me({},mr,{view:0,detail:0}),dm=lt(ma),lo,oo,Lr,Il=me({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(lo=e.screenX-Lr.screenX,oo=e.screenY-Lr.screenY):oo=lo=0,Lr=e),lo)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),tu=lt(Il),fm=me({},Il,{dataTransfer:0}),pm=lt(fm),mm=me({},ma,{relatedTarget:0}),io=lt(mm),hm=me({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=lt(hm),gm=me({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ym=lt(gm),wm=me({},mr,{data:0}),nu=lt(wm),Em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sm[e])?!!t[e]:!1}function Vi(){return km}var Cm=me({},ma,{key:function(e){if(e.key){var t=Em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vi,charCode:function(e){return e.type==="keypress"?Ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lm=lt(Cm),xm=me({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=lt(xm),Pm=me({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vi}),Tm=lt(Pm),Nm=me({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_m=lt(Nm),Om=me({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=lt(Om),Im=[9,13,27,32],Wi=Rt&&"CompositionEvent"in window,Fr=null;Rt&&"documentMode"in document&&(Fr=document.documentMode);var Rm=Rt&&"TextEvent"in window&&!Fr,dd=Rt&&(!Wi||Fr&&8<Fr&&11>=Fr),au=" ",lu=!1;function fd(e,t){switch(e){case"keyup":return Im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Mm(e,t){switch(e){case"compositionend":return pd(t);case"keypress":return t.which!==32?null:(lu=!0,au);case"textInput":return e=t.data,e===au&&lu?null:e;default:return null}}function Dm(e,t){if(Wn)return e==="compositionend"||!Wi&&fd(e,t)?(e=cd(),Qa=Hi=Kt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dd&&t.locale!=="ko"?null:t.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Am[e.type]:t==="textarea"}function md(e,t,n,r){Gc(r),t=dl(t,"onChange"),0<t.length&&(n=new Ui("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,Xr=null;function zm(e){Ld(e,0)}function Rl(e){var t=qn(e);if(zc(t))return e}function Fm(e,t){if(e==="change")return t}var hd=!1;if(Rt){var so;if(Rt){var uo="oninput"in document;if(!uo){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),uo=typeof iu.oninput=="function"}so=uo}else so=!1;hd=so&&(!document.documentMode||9<document.documentMode)}function su(){jr&&(jr.detachEvent("onpropertychange",vd),Xr=jr=null)}function vd(e){if(e.propertyName==="value"&&Rl(Xr)){var t=[];md(t,Xr,e,Di(e)),Kc(zm,t)}}function jm(e,t,n){e==="focusin"?(su(),jr=t,Xr=n,jr.attachEvent("onpropertychange",vd)):e==="focusout"&&su()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(Xr)}function Um(e,t){if(e==="click")return Rl(t)}function Vm(e,t){if(e==="input"||e==="change")return Rl(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Wm;function Jr(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!_o.call(t,a)||!Et(e[a],t[a]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,t){var n=uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yd(){for(var e=window,t=al();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=al(e.document)}return t}function Gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=yd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gd(n.ownerDocument.documentElement,n)){if(r!==null&&Gi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=cu(n,l);var o=cu(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $m=Rt&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ko=null,Hr=null,Yo=!1;function du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yo||Gn==null||Gn!==al(r)||(r=Gn,"selectionStart"in r&&Gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Jr(Hr,r)||(Hr=r,r=dl(Ko,"onSelect"),0<r.length&&(t=new Ui("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},co={},wd={};Rt&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Ml(e){if(co[e])return co[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wd)return co[e]=t[n];return e}var Ed=Ml("animationend"),bd=Ml("animationiteration"),Sd=Ml("animationstart"),kd=Ml("transitionend"),Cd=new Map,fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Cd.set(e,t),In(t,[e])}for(var fo=0;fo<fu.length;fo++){var po=fu[fo],qm=po.toLowerCase(),Qm=po[0].toUpperCase()+po.slice(1);cn(qm,"on"+Qm)}cn(Ed,"onAnimationEnd");cn(bd,"onAnimationIteration");cn(Sd,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(kd,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qp(r,t,void 0,e),e.currentTarget=null}function Ld(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==l&&a.isPropagationStopped())break e;pu(a,i,u),l=s}else for(o=0;o<r.length;o++){if(i=r[o],s=i.instance,u=i.currentTarget,i=i.listener,s!==l&&a.isPropagationStopped())break e;pu(a,i,u),l=s}}}if(ol)throw e=Go,ol=!1,Go=null,e}function se(e,t){var n=t[ti];n===void 0&&(n=t[ti]=new Set);var r=e+"__bubble";n.has(r)||(xd(t,e,2,!1),n.add(r))}function mo(e,t,n){var r=0;t&&(r|=4),xd(n,e,r,t)}var Da="_reactListening"+Math.random().toString(36).slice(2);function ea(e){if(!e[Da]){e[Da]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(Km.has(n)||mo(n,!1,e),mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Da]||(t[Da]=!0,mo("selectionchange",!1,t))}}function xd(e,t,n,r){switch(ud(t)){case 1:var a=um;break;case 4:a=cm;break;default:a=ji}n=a.bind(null,t,n,e),a=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ho(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;i!==null;){if(o=bn(i),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}i=i.parentNode}}r=r.return}Kc(function(){var u=l,f=Di(n),d=[];e:{var m=Cd.get(e);if(m!==void 0){var w=Ui,b=e;switch(e){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":w=Lm;break;case"focusin":b="focus",w=io;break;case"focusout":b="blur",w=io;break;case"beforeblur":case"afterblur":w=io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tm;break;case Ed:case bd:case Sd:w=vm;break;case kd:w=_m;break;case"scroll":w=dm;break;case"wheel":w=Bm;break;case"copy":case"cut":case"paste":w=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ru}var S=(t&4)!==0,O=!S&&e==="scroll",h=S?m!==null?m+"Capture":null:m;S=[];for(var c=u,v;c!==null;){v=c;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,h!==null&&(k=Qr(c,h),k!=null&&S.push(ta(c,k,v)))),O)break;c=c.return}0<S.length&&(m=new w(m,b,null,n,f),d.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Uo&&(b=n.relatedTarget||n.fromElement)&&(bn(b)||b[Mt]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=u,b=b?bn(b):null,b!==null&&(O=Rn(b),b!==O||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=u),w!==b)){if(S=tu,k="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=ru,k="onPointerLeave",h="onPointerEnter",c="pointer"),O=w==null?m:qn(w),v=b==null?m:qn(b),m=new S(k,c+"leave",w,n,f),m.target=O,m.relatedTarget=v,k=null,bn(f)===u&&(S=new S(h,c+"enter",b,n,f),S.target=v,S.relatedTarget=O,k=S),O=k,w&&b)t:{for(S=w,h=b,c=0,v=S;v;v=jn(v))c++;for(v=0,k=h;k;k=jn(k))v++;for(;0<c-v;)S=jn(S),c--;for(;0<v-c;)h=jn(h),v--;for(;c--;){if(S===h||h!==null&&S===h.alternate)break t;S=jn(S),h=jn(h)}S=null}else S=null;w!==null&&mu(d,m,w,S,!1),b!==null&&O!==null&&mu(d,O,b,S,!0)}}e:{if(m=u?qn(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var T=Fm;else if(ou(m))if(hd)T=Vm;else{T=Hm;var R=jm}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=Um);if(T&&(T=T(e,u))){md(d,T,n,f);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Ao(m,"number",m.value)}switch(R=u?qn(u):window,e){case"focusin":(ou(R)||R.contentEditable==="true")&&(Gn=R,Ko=u,Hr=null);break;case"focusout":Hr=Ko=Gn=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,du(d,n,f);break;case"selectionchange":if($m)break;case"keydown":case"keyup":du(d,n,f)}var g;if(Wi)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Wn?fd(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(dd&&n.locale!=="ko"&&(Wn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Wn&&(g=cd()):(Kt=f,Hi="value"in Kt?Kt.value:Kt.textContent,Wn=!0)),R=dl(u,C),0<R.length&&(C=new nu(C,e,null,n,f),d.push({event:C,listeners:R}),g?C.data=g:(g=pd(n),g!==null&&(C.data=g)))),(g=Rm?Mm(e,n):Dm(e,n))&&(u=dl(u,"onBeforeInput"),0<u.length&&(f=new nu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=g))}Ld(d,t)})}function ta(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dl(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Qr(e,n),l!=null&&r.unshift(ta(e,l,a)),l=Qr(e,t),l!=null&&r.push(ta(e,l,a))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,a?(s=Qr(n,l),s!=null&&o.unshift(ta(n,s,i))):a||(s=Qr(n,l),s!=null&&o.push(ta(n,s,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ym=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(Ym,`
`).replace(Zm,"")}function Aa(e,t,n){if(t=hu(t),hu(e)!==t&&n)throw Error(_(425))}function fl(){}var Zo=null,Xo=null;function Jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ei=typeof setTimeout=="function"?setTimeout:void 0,Xm=typeof clearTimeout=="function"?clearTimeout:void 0,vu=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof vu<"u"?function(e){return vu.resolve(null).then(e).catch(eh)}:ei;function eh(e){setTimeout(function(){throw e})}function vo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Zr(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+hr,na="__reactProps$"+hr,Mt="__reactContainer$"+hr,ti="__reactEvents$"+hr,th="__reactListeners$"+hr,nh="__reactHandles$"+hr;function bn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gu(e);e!==null;){if(n=e[Ct])return n;e=gu(e)}return t}e=n,n=e.parentNode}return null}function ha(e){return e=e[Ct]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Dl(e){return e[na]||null}var ni=[],Qn=-1;function dn(e){return{current:e}}function ue(e){0>Qn||(e.current=ni[Qn],ni[Qn]=null,Qn--)}function ie(e,t){Qn++,ni[Qn]=e.current,e.current=t}var un={},Fe=dn(un),Ye=dn(!1),Pn=un;function ir(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return e=e.childContextTypes,e!=null}function pl(){ue(Ye),ue(Fe)}function yu(e,t,n){if(Fe.current!==un)throw Error(_(168));ie(Fe,t),ie(Ye,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(_(108,jp(e)||"Unknown",a));return me({},n,r)}function ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,Pn=Fe.current,ie(Fe,e),ie(Ye,Ye.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Pd(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,ue(Ye),ue(Fe),ie(Fe,e)):ue(Ye),ie(Ye,n)}var _t=null,Al=!1,go=!1;function Td(e){_t===null?_t=[e]:_t.push(e)}function rh(e){Al=!0,Td(e)}function fn(){if(!go&&_t!==null){go=!0;var e=0,t=le;try{var n=_t;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Al=!1}catch(a){throw _t!==null&&(_t=_t.slice(e+1)),Jc(Ai,fn),a}finally{le=t,go=!1}}return null}var Kn=[],Yn=0,hl=null,vl=0,ot=[],it=0,Tn=null,Ot=1,Bt="";function gn(e,t){Kn[Yn++]=vl,Kn[Yn++]=hl,hl=e,vl=t}function Nd(e,t,n){ot[it++]=Ot,ot[it++]=Bt,ot[it++]=Tn,Tn=e;var r=Ot;e=Bt;var a=32-yt(r)-1;r&=~(1<<a),n+=1;var l=32-yt(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ot=1<<32-yt(t)+a|n<<a|r,Bt=l+e}else Ot=1<<l|n<<a|r,Bt=e}function $i(e){e.return!==null&&(gn(e,1),Nd(e,1,0))}function qi(e){for(;e===hl;)hl=Kn[--Yn],Kn[Yn]=null,vl=Kn[--Yn],Kn[Yn]=null;for(;e===Tn;)Tn=ot[--it],ot[it]=null,Bt=ot[--it],ot[it]=null,Ot=ot[--it],ot[it]=null}var nt=null,tt=null,de=!1,gt=null;function _d(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Ot,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ai(e){if(de){var t=tt;if(t){var n=t;if(!Eu(e,t)){if(ri(e))throw Error(_(418));t=tn(n.nextSibling);var r=nt;t&&Eu(e,t)?_d(r,n):(e.flags=e.flags&-4097|2,de=!1,nt=e)}}else{if(ri(e))throw Error(_(418));e.flags=e.flags&-4097|2,de=!1,nt=e}}}function bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function za(e){if(e!==nt)return!1;if(!de)return bu(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jo(e.type,e.memoizedProps)),t&&(t=tt)){if(ri(e))throw Od(),Error(_(418));for(;t;)_d(e,t),t=tn(t.nextSibling)}if(bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?tn(e.stateNode.nextSibling):null;return!0}function Od(){for(var e=tt;e;)e=tn(e.nextSibling)}function sr(){tt=nt=null,de=!1}function Qi(e){gt===null?gt=[e]:gt.push(e)}var ah=zt.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var i=a.refs;o===null?delete i[l]:i[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Fa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Su(e){var t=e._init;return t(e._payload)}function Bd(e){function t(h,c){if(e){var v=h.deletions;v===null?(h.deletions=[c],h.flags|=16):v.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function a(h,c){return h=ln(h,c),h.index=0,h.sibling=null,h}function l(h,c,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<c?(h.flags|=2,c):v):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,c,v,k){return c===null||c.tag!==6?(c=Co(v,h.mode,k),c.return=h,c):(c=a(c,v),c.return=h,c)}function s(h,c,v,k){var T=v.type;return T===Vn?f(h,c,v.props.children,k,v.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gt&&Su(T)===c.type)?(k=a(c,v.props),k.ref=xr(h,c,v),k.return=h,k):(k=nl(v.type,v.key,v.props,null,h.mode,k),k.ref=xr(h,c,v),k.return=h,k)}function u(h,c,v,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==v.containerInfo||c.stateNode.implementation!==v.implementation?(c=Lo(v,h.mode,k),c.return=h,c):(c=a(c,v.children||[]),c.return=h,c)}function f(h,c,v,k,T){return c===null||c.tag!==7?(c=xn(v,h.mode,k,T),c.return=h,c):(c=a(c,v),c.return=h,c)}function d(h,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Co(""+c,h.mode,v),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ta:return v=nl(c.type,c.key,c.props,null,h.mode,v),v.ref=xr(h,null,c),v.return=h,v;case Un:return c=Lo(c,h.mode,v),c.return=h,c;case Gt:var k=c._init;return d(h,k(c._payload),v)}if(Ir(c)||br(c))return c=xn(c,h.mode,v,null),c.return=h,c;Fa(h,c)}return null}function m(h,c,v,k){var T=c!==null?c.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:i(h,c,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ta:return v.key===T?s(h,c,v,k):null;case Un:return v.key===T?u(h,c,v,k):null;case Gt:return T=v._init,m(h,c,T(v._payload),k)}if(Ir(v)||br(v))return T!==null?null:f(h,c,v,k,null);Fa(h,v)}return null}function w(h,c,v,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(v)||null,i(c,h,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ta:return h=h.get(k.key===null?v:k.key)||null,s(c,h,k,T);case Un:return h=h.get(k.key===null?v:k.key)||null,u(c,h,k,T);case Gt:var R=k._init;return w(h,c,v,R(k._payload),T)}if(Ir(k)||br(k))return h=h.get(v)||null,f(c,h,k,T,null);Fa(c,k)}return null}function b(h,c,v,k){for(var T=null,R=null,g=c,C=c=0,V=null;g!==null&&C<v.length;C++){g.index>C?(V=g,g=null):V=g.sibling;var I=m(h,g,v[C],k);if(I===null){g===null&&(g=V);break}e&&g&&I.alternate===null&&t(h,g),c=l(I,c,C),R===null?T=I:R.sibling=I,R=I,g=V}if(C===v.length)return n(h,g),de&&gn(h,C),T;if(g===null){for(;C<v.length;C++)g=d(h,v[C],k),g!==null&&(c=l(g,c,C),R===null?T=g:R.sibling=g,R=g);return de&&gn(h,C),T}for(g=r(h,g);C<v.length;C++)V=w(g,h,C,v[C],k),V!==null&&(e&&V.alternate!==null&&g.delete(V.key===null?C:V.key),c=l(V,c,C),R===null?T=V:R.sibling=V,R=V);return e&&g.forEach(function(ne){return t(h,ne)}),de&&gn(h,C),T}function S(h,c,v,k){var T=br(v);if(typeof T!="function")throw Error(_(150));if(v=T.call(v),v==null)throw Error(_(151));for(var R=T=null,g=c,C=c=0,V=null,I=v.next();g!==null&&!I.done;C++,I=v.next()){g.index>C?(V=g,g=null):V=g.sibling;var ne=m(h,g,I.value,k);if(ne===null){g===null&&(g=V);break}e&&g&&ne.alternate===null&&t(h,g),c=l(ne,c,C),R===null?T=ne:R.sibling=ne,R=ne,g=V}if(I.done)return n(h,g),de&&gn(h,C),T;if(g===null){for(;!I.done;C++,I=v.next())I=d(h,I.value,k),I!==null&&(c=l(I,c,C),R===null?T=I:R.sibling=I,R=I);return de&&gn(h,C),T}for(g=r(h,g);!I.done;C++,I=v.next())I=w(g,h,C,I.value,k),I!==null&&(e&&I.alternate!==null&&g.delete(I.key===null?C:I.key),c=l(I,c,C),R===null?T=I:R.sibling=I,R=I);return e&&g.forEach(function(X){return t(h,X)}),de&&gn(h,C),T}function O(h,c,v,k){if(typeof v=="object"&&v!==null&&v.type===Vn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ta:e:{for(var T=v.key,R=c;R!==null;){if(R.key===T){if(T=v.type,T===Vn){if(R.tag===7){n(h,R.sibling),c=a(R,v.props.children),c.return=h,h=c;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gt&&Su(T)===R.type){n(h,R.sibling),c=a(R,v.props),c.ref=xr(h,R,v),c.return=h,h=c;break e}n(h,R);break}else t(h,R);R=R.sibling}v.type===Vn?(c=xn(v.props.children,h.mode,k,v.key),c.return=h,h=c):(k=nl(v.type,v.key,v.props,null,h.mode,k),k.ref=xr(h,c,v),k.return=h,h=k)}return o(h);case Un:e:{for(R=v.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===v.containerInfo&&c.stateNode.implementation===v.implementation){n(h,c.sibling),c=a(c,v.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Lo(v,h.mode,k),c.return=h,h=c}return o(h);case Gt:return R=v._init,O(h,c,R(v._payload),k)}if(Ir(v))return b(h,c,v,k);if(br(v))return S(h,c,v,k);Fa(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,c!==null&&c.tag===6?(n(h,c.sibling),c=a(c,v),c.return=h,h=c):(n(h,c),c=Co(v,h.mode,k),c.return=h,h=c),o(h)):n(h,c)}return O}var ur=Bd(!0),Id=Bd(!1),gl=dn(null),yl=null,Zn=null,Ki=null;function Yi(){Ki=Zn=yl=null}function Zi(e){var t=gl.current;ue(gl),e._currentValue=t}function li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){yl=e,Ki=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Ki!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(yl===null)throw Error(_(308));Zn=e,yl.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var Sn=null;function Xi(e){Sn===null?Sn=[e]:Sn.push(e)}function Rd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Xi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Dt(e,n)}return a=r.interleaved,a===null?(t.next=t,Xi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Dt(e,n)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wl(e,t,n,r){var a=e.updateQueue;$t=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var s=i,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==o&&(i===null?f.firstBaseUpdate=u:i.next=u,f.lastBaseUpdate=s))}if(l!==null){var d=a.baseState;o=0,f=u=s=null,i=l;do{var m=i.lane,w=i.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,S=i;switch(m=t,w=n,S.tag){case 1:if(b=S.payload,typeof b=="function"){d=b.call(w,d,m);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,m=typeof b=="function"?b.call(w,d,m):b,m==null)break e;d=me({},d,m);break e;case 2:$t=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else w={eventTime:w,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(u=f=w,s=d):f=f.next=w,o|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);_n|=o,e.lanes=o,e.memoizedState=d}}function Cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(_(191,a));a.call(r)}}}var va={},xt=dn(va),ra=dn(va),aa=dn(va);function kn(e){if(e===va)throw Error(_(174));return e}function es(e,t){switch(ie(aa,t),ie(ra,e),ie(xt,va),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fo(t,e)}ue(xt),ie(xt,t)}function cr(){ue(xt),ue(ra),ue(aa)}function Dd(e){kn(aa.current);var t=kn(xt.current),n=Fo(t,e.type);t!==n&&(ie(ra,e),ie(xt,n))}function ts(e){ra.current===e&&(ue(xt),ue(ra))}var fe=dn(0);function El(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function ns(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Za=zt.ReactCurrentDispatcher,wo=zt.ReactCurrentBatchConfig,Nn=0,pe=null,xe=null,_e=null,bl=!1,Ur=!1,la=0,lh=0;function De(){throw Error(_(321))}function rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function as(e,t,n,r,a,l){if(Nn=l,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Za.current=e===null||e.memoizedState===null?uh:ch,e=n(r,a),Ur){l=0;do{if(Ur=!1,la=0,25<=l)throw Error(_(301));l+=1,_e=xe=null,t.updateQueue=null,Za.current=dh,e=n(r,a)}while(Ur)}if(Za.current=Sl,t=xe!==null&&xe.next!==null,Nn=0,_e=xe=pe=null,bl=!1,t)throw Error(_(300));return e}function ls(){var e=la!==0;return la=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?pe.memoizedState=_e=e:_e=_e.next=e,_e}function dt(){if(xe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=_e===null?pe.memoizedState:_e.next;if(t!==null)_e=t,xe=e;else{if(e===null)throw Error(_(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},_e===null?pe.memoizedState=_e=e:_e=_e.next=e}return _e}function oa(e,t){return typeof t=="function"?t(e):t}function Eo(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=xe,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var i=o=null,s=null,u=l;do{var f=u.lane;if((Nn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,o=r):s=s.next=d,pe.lanes|=f,_n|=f}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=i,Et(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,pe.lanes|=l,_n|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bo(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);Et(l,t.memoizedState)||(Ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ad(){}function zd(e,t){var n=pe,r=dt(),a=t(),l=!Et(r.memoizedState,a);if(l&&(r.memoizedState=a,Ke=!0),r=r.queue,os(Hd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ia(9,jd.bind(null,n,r,a,t),void 0,null),Oe===null)throw Error(_(349));Nn&30||Fd(n,t,a)}return a}function Fd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jd(e,t,n,r){t.value=n,t.getSnapshot=r,Ud(t)&&Vd(e)}function Hd(e,t,n){return n(function(){Ud(t)&&Vd(e)})}function Ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Vd(e){var t=Dt(e,1);t!==null&&wt(t,e,1,-1)}function Lu(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t.queue=e,e=e.dispatch=sh.bind(null,pe,e),[t.memoizedState,e]}function ia(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wd(){return dt().memoizedState}function Xa(e,t,n,r){var a=kt();pe.flags|=e,a.memoizedState=ia(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var a=dt();r=r===void 0?null:r;var l=void 0;if(xe!==null){var o=xe.memoizedState;if(l=o.destroy,r!==null&&rs(r,o.deps)){a.memoizedState=ia(t,n,l,r);return}}pe.flags|=e,a.memoizedState=ia(1|t,n,l,r)}function xu(e,t){return Xa(8390656,8,e,t)}function os(e,t){return zl(2048,8,e,t)}function Gd(e,t){return zl(4,2,e,t)}function $d(e,t){return zl(4,4,e,t)}function qd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qd(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,qd.bind(null,t,e),n)}function is(){}function Kd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zd(e,t,n){return Nn&21?(Et(n,t)||(n=nd(),pe.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function oh(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=wo.transition;wo.transition={};try{e(!1),t()}finally{le=n,wo.transition=r}}function Xd(){return dt().memoizedState}function ih(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jd(e))ef(t,n);else if(n=Rd(e,t,n,r),n!==null){var a=Ve();wt(n,e,r,a),tf(n,t,r)}}function sh(e,t,n){var r=an(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jd(e))ef(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,i=l(o,n);if(a.hasEagerState=!0,a.eagerState=i,Et(i,o)){var s=t.interleaved;s===null?(a.next=a,Xi(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Rd(e,t,a,r),n!==null&&(a=Ve(),wt(n,e,r,a),tf(n,t,r))}}function Jd(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function ef(e,t){Ur=bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}var Sl={readContext:ct,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},uh={readContext:ct,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xa(4194308,4,qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xa(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ih.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:is,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=oh.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,a=kt();if(de){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Oe===null)throw Error(_(349));Nn&30||Fd(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,xu(Hd.bind(null,r,l,e),[e]),r.flags|=2048,ia(9,jd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=kt(),t=Oe.identifierPrefix;if(de){var n=Bt,r=Ot;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=la++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:ct,useCallback:Kd,useContext:ct,useEffect:os,useImperativeHandle:Qd,useInsertionEffect:Gd,useLayoutEffect:$d,useMemo:Yd,useReducer:Eo,useRef:Wd,useState:function(){return Eo(oa)},useDebugValue:is,useDeferredValue:function(e){var t=dt();return Zd(t,xe.memoizedState,e)},useTransition:function(){var e=Eo(oa)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:zd,useId:Xd,unstable_isNewReconciler:!1},dh={readContext:ct,useCallback:Kd,useContext:ct,useEffect:os,useImperativeHandle:Qd,useInsertionEffect:Gd,useLayoutEffect:$d,useMemo:Yd,useReducer:bo,useRef:Wd,useState:function(){return bo(oa)},useDebugValue:is,useDeferredValue:function(e){var t=dt();return xe===null?t.memoizedState=e:Zd(t,xe.memoizedState,e)},useTransition:function(){var e=bo(oa)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:zd,useId:Xd,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fl={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),a=an(e),l=It(r,a);l.payload=t,n!=null&&(l.callback=n),t=nn(e,l,a),t!==null&&(wt(t,e,a,r),Ya(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),a=an(e),l=It(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=nn(e,l,a),t!==null&&(wt(t,e,a,r),Ya(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=an(e),a=It(n,r);a.tag=2,t!=null&&(a.callback=t),t=nn(e,a,r),t!==null&&(wt(t,e,r,n),Ya(t,e,r))}};function Pu(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Jr(n,r)||!Jr(a,l):!0}function nf(e,t,n){var r=!1,a=un,l=t.contextType;return typeof l=="object"&&l!==null?l=ct(l):(a=Ze(t)?Pn:Fe.current,r=t.contextTypes,l=(r=r!=null)?ir(e,a):un),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Tu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function ii(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ji(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=ct(l):(l=Ze(t)?Pn:Fe.current,a.context=ir(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(oi(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Fl.enqueueReplaceState(a,a.state,null),wl(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var n="",r=t;do n+=Fp(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function So(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function si(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function rf(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,yi=r),si(e,t)},n}function af(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){si(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){si(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fh;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=xh.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ou(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var ph=zt.ReactCurrentOwner,Ke=!1;function Ue(e,t,n,r){t.child=e===null?Id(t,null,n,r):ur(t,e.child,n,r)}function Bu(e,t,n,r,a){n=n.render;var l=t.ref;return ar(t,a),r=as(e,t,n,r,l,a),n=ls(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(de&&n&&$i(t),t.flags|=1,Ue(e,t,r,a),t.child)}function Iu(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!hs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,lf(e,t,l,r,a)):(e=nl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(o,r)&&e.ref===t.ref)return At(e,t,a)}return t.flags|=1,e=ln(l,r),e.ref=t.ref,e.return=t,t.child=e}function lf(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(Jr(l,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,At(e,t,a)}return ui(e,t,n,r,a)}function of(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Jn,Je),Je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Jn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ie(Jn,Je),Je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ie(Jn,Je),Je|=r;return Ue(e,t,a,n),t.child}function sf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ui(e,t,n,r,a){var l=Ze(n)?Pn:Fe.current;return l=ir(t,l),ar(t,a),n=as(e,t,n,r,l,a),r=ls(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(de&&r&&$i(t),t.flags|=1,Ue(e,t,n,a),t.child)}function Ru(e,t,n,r,a){if(Ze(n)){var l=!0;ml(t)}else l=!1;if(ar(t,a),t.stateNode===null)Ja(e,t),nf(t,n,r),ii(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Ze(n)?Pn:Fe.current,u=ir(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||s!==u)&&Tu(t,o,r,u),$t=!1;var m=t.memoizedState;o.state=m,wl(t,r,o,a),s=t.memoizedState,i!==r||m!==s||Ye.current||$t?(typeof f=="function"&&(oi(t,n,f,r),s=t.memoizedState),(i=$t||Pu(t,n,i,r,m,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Md(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:mt(t.type,i),o.props=u,d=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ct(s):(s=Ze(n)?Pn:Fe.current,s=ir(t,s));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==d||m!==s)&&Tu(t,o,r,s),$t=!1,m=t.memoizedState,o.state=m,wl(t,r,o,a);var b=t.memoizedState;i!==d||m!==b||Ye.current||$t?(typeof w=="function"&&(oi(t,n,w,r),b=t.memoizedState),(u=$t||Pu(t,n,u,r,m,b,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ci(e,t,n,r,l,a)}function ci(e,t,n,r,a,l){sf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&wu(t,n,!1),At(e,t,l);r=t.stateNode,ph.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ur(t,e.child,null,l),t.child=ur(t,null,i,l)):Ue(e,t,i,l),t.memoizedState=r.state,a&&wu(t,n,!0),t.child}function uf(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),es(e,t.containerInfo)}function Mu(e,t,n,r,a){return sr(),Qi(a),t.flags|=256,Ue(e,t,n,r),t.child}var di={dehydrated:null,treeContext:null,retryLane:0};function fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function cf(e,t,n){var r=t.pendingProps,a=fe.current,l=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ie(fe,a&1),e===null)return ai(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ul(o,r,0,null),e=xn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=fi(n),t.memoizedState=di,e):ss(t,o));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return mh(e,t,o,r,i,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,i=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ln(a,s),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=ln(i,l):(l=xn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?fi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=di,r}return l=e.child,e=l.sibling,r=ln(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ss(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ja(e,t,n,r){return r!==null&&Qi(r),ur(t,e.child,null,n),e=ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=So(Error(_(422))),ja(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ul({mode:"visible",children:r.children},a,0,null),l=xn(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&ur(t,e.child,null,o),t.child.memoizedState=fi(o),t.memoizedState=di,l);if(!(t.mode&1))return ja(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(_(419)),r=So(l,r,void 0),ja(e,t,o,r)}if(i=(o&e.childLanes)!==0,Ke||i){if(r=Oe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Dt(e,a),wt(r,e,a,-1))}return ms(),r=So(Error(_(421))),ja(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ph.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,tt=tn(a.nextSibling),nt=t,de=!0,gt=null,e!==null&&(ot[it++]=Ot,ot[it++]=Bt,ot[it++]=Tn,Ot=e.id,Bt=e.overflow,Tn=t),t=ss(t,r.children),t.flags|=4096,t)}function Du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),li(e.return,t,n)}function ko(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function df(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(Ue(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,n,t);else if(e.tag===19)Du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(fe,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&El(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ko(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&El(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ko(t,!0,n,null,l);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hh(e,t,n){switch(t.tag){case 3:uf(t),sr();break;case 5:Dd(t);break;case 1:Ze(t.type)&&ml(t);break;case 4:es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ie(gl,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?cf(e,t,n):(ie(fe,fe.current&1),e=At(e,t,n),e!==null?e.sibling:null);ie(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return df(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ie(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,of(e,t,n)}return At(e,t,n)}var ff,pi,pf,mf;ff=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pi=function(){};pf=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,kn(xt.current);var l=null;switch(n){case"input":a=Mo(e,a),r=Mo(e,r),l=[];break;case"select":a=me({},a,{value:void 0}),r=me({},r,{value:void 0}),l=[];break;case"textarea":a=zo(e,a),r=zo(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fl)}jo(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($r.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&i[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($r.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&se("scroll",e),l||i===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};mf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vh(e,t,n){var r=t.pendingProps;switch(qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ze(t.type)&&pl(),Ae(t),null;case 3:return r=t.stateNode,cr(),ue(Ye),ue(Fe),ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(bi(gt),gt=null))),pi(e,t),Ae(t),null;case 5:ts(t);var a=kn(aa.current);if(n=t.type,e!==null&&t.stateNode!=null)pf(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ae(t),null}if(e=kn(xt.current),za(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ct]=t,r[na]=l,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(a=0;a<Mr.length;a++)se(Mr[a],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Gs(r,l),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},se("invalid",r);break;case"textarea":qs(r,l),se("invalid",r)}jo(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Aa(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Aa(r.textContent,i,e),a=["children",""+i]):$r.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Na(r),$s(r,l,!0);break;case"textarea":Na(r),Qs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fl)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ct]=t,e[na]=r,ff(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ho(n,r),n){case"dialog":se("cancel",e),se("close",e),a=r;break;case"iframe":case"object":case"embed":se("load",e),a=r;break;case"video":case"audio":for(a=0;a<Mr.length;a++)se(Mr[a],e);a=r;break;case"source":se("error",e),a=r;break;case"img":case"image":case"link":se("error",e),se("load",e),a=r;break;case"details":se("toggle",e),a=r;break;case"input":Gs(e,r),a=Mo(e,r),se("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=me({},r,{value:void 0}),se("invalid",e);break;case"textarea":qs(e,r),a=zo(e,r),se("invalid",e);break;default:a=r}jo(n,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="style"?Wc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Uc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qr(e,s):typeof s=="number"&&qr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($r.hasOwnProperty(l)?s!=null&&l==="onScroll"&&se("scroll",e):s!=null&&Bi(e,l,s,o))}switch(n){case"input":Na(e),$s(e,r,!1);break;case"textarea":Na(e),Qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?er(e,!!r.multiple,l,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)mf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=kn(aa.current),kn(xt.current),za(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(l=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Aa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Aa(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ae(t),null;case 13:if(ue(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&tt!==null&&t.mode&1&&!(t.flags&128))Od(),sr(),t.flags|=98560,l=!1;else if(l=za(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(_(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(_(317));l[Ct]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),l=!1}else gt!==null&&(bi(gt),gt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Pe===0&&(Pe=3):ms())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return cr(),pi(e,t),e===null&&ea(t.stateNode.containerInfo),Ae(t),null;case 10:return Zi(t.type._context),Ae(t),null;case 17:return Ze(t.type)&&pl(),Ae(t),null;case 19:if(ue(fe),l=t.memoizedState,l===null)return Ae(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Pr(l,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=El(e),o!==null){for(t.flags|=128,Pr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(fe,fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ee()>fr&&(t.flags|=128,r=!0,Pr(l,!1),t.lanes=4194304)}else{if(!r)if(e=El(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!de)return Ae(t),null}else 2*Ee()-l.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ee(),t.sibling=null,n=fe.current,ie(fe,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return ps(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function gh(e,t){switch(qi(t),t.tag){case 1:return Ze(t.type)&&pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),ue(Ye),ue(Fe),ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ts(t),null;case 13:if(ue(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(fe),null;case 4:return cr(),null;case 10:return Zi(t.type._context),null;case 22:case 23:return ps(),null;case 24:return null;default:return null}}var Ha=!1,ze=!1,yh=typeof WeakSet=="function"?WeakSet:Set,M=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function mi(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Au=!1;function wh(e,t){if(Zo=ul,e=yd(),Gi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,i=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var w;d!==n||a!==0&&d.nodeType!==3||(i=o+a),d!==l||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(w=d.firstChild)!==null;)m=d,d=w;for(;;){if(d===e)break t;if(m===n&&++u===a&&(i=o),m===l&&++f===r&&(s=o),(w=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=w}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xo={focusedElem:e,selectionRange:n},ul=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var S=b.memoizedProps,O=b.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?S:mt(t.type,S),O);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){ye(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return b=Au,Au=!1,b}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&mi(t,n,l)}a=a.next}while(a!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[na],delete t[ti],delete t[th],delete t[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vf(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fl));else if(r!==4&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}function gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gi(e,t,n),e=e.sibling;e!==null;)gi(e,t,n),e=e.sibling}var Ie=null,ht=!1;function Vt(e,t,n){for(n=n.child;n!==null;)gf(e,t,n),n=n.sibling}function gf(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:ze||Xn(n,t);case 6:var r=Ie,a=ht;Ie=null,Vt(e,t,n),Ie=r,ht=a,Ie!==null&&(ht?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ht?(e=Ie,n=n.stateNode,e.nodeType===8?vo(e.parentNode,n):e.nodeType===1&&vo(e,n),Zr(e)):vo(Ie,n.stateNode));break;case 4:r=Ie,a=ht,Ie=n.stateNode.containerInfo,ht=!0,Vt(e,t,n),Ie=r,ht=a;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&mi(n,t,o),a=a.next}while(a!==r)}Vt(e,t,n);break;case 1:if(!ze&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ye(n,t,i)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Vt(e,t,n),ze=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yh),t.forEach(function(r){var a=Th.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:Ie=i.stateNode,ht=!1;break e;case 3:Ie=i.stateNode.containerInfo,ht=!0;break e;case 4:Ie=i.stateNode.containerInfo,ht=!0;break e}i=i.return}if(Ie===null)throw Error(_(160));gf(l,o,a),Ie=null,ht=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ye(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}function yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),St(e),r&4){try{Vr(3,e,e.return),jl(3,e)}catch(S){ye(e,e.return,S)}try{Vr(5,e,e.return)}catch(S){ye(e,e.return,S)}}break;case 1:ft(t,e),St(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(ft(t,e),St(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var a=e.stateNode;try{qr(a,"")}catch(S){ye(e,e.return,S)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Fc(a,l),Ho(i,o);var u=Ho(i,l);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?Wc(a,d):f==="dangerouslySetInnerHTML"?Uc(a,d):f==="children"?qr(a,d):Bi(a,f,d,u)}switch(i){case"input":Do(a,l);break;case"textarea":jc(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?er(a,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?er(a,!!l.multiple,l.defaultValue,!0):er(a,!!l.multiple,l.multiple?[]:"",!1))}a[na]=l}catch(S){ye(e,e.return,S)}}break;case 6:if(ft(t,e),St(e),r&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(S){ye(e,e.return,S)}}break;case 3:if(ft(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(S){ye(e,e.return,S)}break;case 4:ft(t,e),St(e);break;case 13:ft(t,e),St(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(ds=Ee())),r&4&&Fu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(u=ze)||f,ft(t,e),ze=u):ft(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(d=M=f;M!==null;){switch(m=M,w=m.child,m.tag){case 0:case 11:case 14:case 15:Vr(4,m,m.return);break;case 1:Xn(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(S){ye(r,n,S)}}break;case 5:Xn(m,m.return);break;case 22:if(m.memoizedState!==null){Hu(d);continue}}w!==null?(w.return=m,M=w):Hu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Vc("display",o))}catch(S){ye(e,e.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){ye(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(t,e),St(e),r&4&&Fu(e);break;case 21:break;default:ft(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(qr(a,""),r.flags&=-33);var l=zu(e);gi(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,i=zu(e);vi(e,i,o);break;default:throw Error(_(161))}}catch(s){ye(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eh(e,t,n){M=e,wf(e)}function wf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var a=M,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Ha;if(!o){var i=a.alternate,s=i!==null&&i.memoizedState!==null||ze;i=Ha;var u=ze;if(Ha=o,(ze=s)&&!u)for(M=a;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?Uu(a):s!==null?(s.return=o,M=s):Uu(a);for(;l!==null;)M=l,wf(l),l=l.sibling;M=a,Ha=i,ze=u}ju(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,M=l):ju(e)}}function ju(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Cu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cu(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Zr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ze||t.flags&512&&hi(t)}catch(m){ye(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Hu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Uu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(s){ye(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){ye(t,a,s)}}var l=t.return;try{hi(t)}catch(s){ye(t,l,s)}break;case 5:var o=t.return;try{hi(t)}catch(s){ye(t,o,s)}}}catch(s){ye(t,t.return,s)}if(t===e){M=null;break}var i=t.sibling;if(i!==null){i.return=t.return,M=i;break}M=t.return}}var bh=Math.ceil,kl=zt.ReactCurrentDispatcher,us=zt.ReactCurrentOwner,ut=zt.ReactCurrentBatchConfig,J=0,Oe=null,ke=null,Re=0,Je=0,Jn=dn(0),Pe=0,sa=null,_n=0,Hl=0,cs=0,Wr=null,Qe=null,ds=0,fr=1/0,Nt=null,Cl=!1,yi=null,rn=null,Ua=!1,Yt=null,Ll=0,Gr=0,wi=null,el=-1,tl=0;function Ve(){return J&6?Ee():el!==-1?el:el=Ee()}function an(e){return e.mode&1?J&2&&Re!==0?Re&-Re:ah.transition!==null?(tl===0&&(tl=nd()),tl):(e=le,e!==0||(e=window.event,e=e===void 0?16:ud(e.type)),e):1}function wt(e,t,n,r){if(50<Gr)throw Gr=0,wi=null,Error(_(185));pa(e,n,r),(!(J&2)||e!==Oe)&&(e===Oe&&(!(J&2)&&(Hl|=n),Pe===4&&Qt(e,Re)),Xe(e,r),n===1&&J===0&&!(t.mode&1)&&(fr=Ee()+500,Al&&fn()))}function Xe(e,t){var n=e.callbackNode;am(e,t);var r=sl(e,e===Oe?Re:0);if(r===0)n!==null&&Zs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zs(n),t===1)e.tag===0?rh(Vu.bind(null,e)):Td(Vu.bind(null,e)),Jm(function(){!(J&6)&&fn()}),n=null;else{switch(rd(r)){case 1:n=Ai;break;case 4:n=ed;break;case 16:n=il;break;case 536870912:n=td;break;default:n=il}n=Pf(n,Ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ef(e,t){if(el=-1,tl=0,J&6)throw Error(_(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=sl(e,e===Oe?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var a=J;J|=2;var l=Sf();(Oe!==e||Re!==t)&&(Nt=null,fr=Ee()+500,Ln(e,t));do try{Ch();break}catch(i){bf(e,i)}while(!0);Yi(),kl.current=l,J=a,ke!==null?t=0:(Oe=null,Re=0,t=Pe)}if(t!==0){if(t===2&&(a=$o(e),a!==0&&(r=a,t=Ei(e,a))),t===1)throw n=sa,Ln(e,0),Qt(e,r),Xe(e,Ee()),n;if(t===6)Qt(e,r);else{if(a=e.current.alternate,!(r&30)&&!Sh(a)&&(t=xl(e,r),t===2&&(l=$o(e),l!==0&&(r=l,t=Ei(e,l))),t===1))throw n=sa,Ln(e,0),Qt(e,r),Xe(e,Ee()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:yn(e,Qe,Nt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=ds+500-Ee(),10<t)){if(sl(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ei(yn.bind(null,e,Qe,Nt),t);break}yn(e,Qe,Nt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-yt(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bh(r/1960))-r,10<r){e.timeoutHandle=ei(yn.bind(null,e,Qe,Nt),r);break}yn(e,Qe,Nt);break;case 5:yn(e,Qe,Nt);break;default:throw Error(_(329))}}}return Xe(e,Ee()),e.callbackNode===n?Ef.bind(null,e):null}function Ei(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=xl(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&bi(t)),e}function bi(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Sh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Et(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~cs,t&=~Hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Vu(e){if(J&6)throw Error(_(327));lr();var t=sl(e,0);if(!(t&1))return Xe(e,Ee()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=$o(e);r!==0&&(t=r,n=Ei(e,r))}if(n===1)throw n=sa,Ln(e,0),Qt(e,t),Xe(e,Ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Qe,Nt),Xe(e,Ee()),null}function fs(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(fr=Ee()+500,Al&&fn())}}function On(e){Yt!==null&&Yt.tag===0&&!(J&6)&&lr();var t=J;J|=1;var n=ut.transition,r=le;try{if(ut.transition=null,le=1,e)return e()}finally{le=r,ut.transition=n,J=t,!(J&6)&&fn()}}function ps(){Je=Jn.current,ue(Jn)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xm(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(qi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:cr(),ue(Ye),ue(Fe),ns();break;case 5:ts(r);break;case 4:cr();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:Zi(r.type._context);break;case 22:case 23:ps()}n=n.return}if(Oe=e,ke=e=ln(e.current,null),Re=Je=t,Pe=0,sa=null,cs=Hl=_n=0,Qe=Wr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}Sn=null}return e}function bf(e,t){do{var n=ke;try{if(Yi(),Za.current=Sl,bl){for(var r=pe.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}bl=!1}if(Nn=0,_e=xe=pe=null,Ur=!1,la=0,us.current=null,n===null||n.return===null){Pe=1,sa=t,ke=null;break}e:{var l=e,o=n.return,i=n,s=t;if(t=Re,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=i,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=_u(o);if(w!==null){w.flags&=-257,Ou(w,o,i,l,t),w.mode&1&&Nu(l,u,t),t=w,s=u;var b=t.updateQueue;if(b===null){var S=new Set;S.add(s),t.updateQueue=S}else b.add(s);break e}else{if(!(t&1)){Nu(l,u,t),ms();break e}s=Error(_(426))}}else if(de&&i.mode&1){var O=_u(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Ou(O,o,i,l,t),Qi(dr(s,i));break e}}l=s=dr(s,i),Pe!==4&&(Pe=2),Wr===null?Wr=[l]:Wr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=rf(l,s,t);ku(l,h);break e;case 1:i=s;var c=l.type,v=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rn===null||!rn.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=af(l,i,t);ku(l,k);break e}}l=l.return}while(l!==null)}Cf(n)}catch(T){t=T,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Sf(){var e=kl.current;return kl.current=Sl,e===null?Sl:e}function ms(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Oe===null||!(_n&268435455)&&!(Hl&268435455)||Qt(Oe,Re)}function xl(e,t){var n=J;J|=2;var r=Sf();(Oe!==e||Re!==t)&&(Nt=null,Ln(e,t));do try{kh();break}catch(a){bf(e,a)}while(!0);if(Yi(),J=n,kl.current=r,ke!==null)throw Error(_(261));return Oe=null,Re=0,Pe}function kh(){for(;ke!==null;)kf(ke)}function Ch(){for(;ke!==null&&!Kp();)kf(ke)}function kf(e){var t=xf(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Cf(e):ke=t,us.current=null}function Cf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gh(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,ke=null;return}}else if(n=vh(n,t,Je),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Pe===0&&(Pe=5)}function yn(e,t,n){var r=le,a=ut.transition;try{ut.transition=null,le=1,Lh(e,t,n,r)}finally{ut.transition=a,le=r}return null}function Lh(e,t,n,r){do lr();while(Yt!==null);if(J&6)throw Error(_(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(lm(e,l),e===Oe&&(ke=Oe=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,Pf(il,function(){return lr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ut.transition,ut.transition=null;var o=le;le=1;var i=J;J|=4,us.current=null,wh(e,n),yf(n,e),Gm(Xo),ul=!!Zo,Xo=Zo=null,e.current=n,Eh(n),Yp(),J=i,le=o,ut.transition=l}else e.current=n;if(Ua&&(Ua=!1,Yt=e,Ll=a),l=e.pendingLanes,l===0&&(rn=null),Jp(n.stateNode),Xe(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Cl)throw Cl=!1,e=yi,yi=null,e;return Ll&1&&e.tag!==0&&lr(),l=e.pendingLanes,l&1?e===wi?Gr++:(Gr=0,wi=e):Gr=0,fn(),null}function lr(){if(Yt!==null){var e=rd(Ll),t=ut.transition,n=le;try{if(ut.transition=null,le=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Ll=0,J&6)throw Error(_(331));var a=J;for(J|=4,M=e.current;M!==null;){var l=M,o=l.child;if(M.flags&16){var i=l.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:Vr(8,f,l)}var d=f.child;if(d!==null)d.return=f,M=d;else for(;M!==null;){f=M;var m=f.sibling,w=f.return;if(hf(f),f===u){M=null;break}if(m!==null){m.return=w,M=m;break}M=w}}}var b=l.alternate;if(b!==null){var S=b.child;if(S!==null){b.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}M=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,M=o;else e:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Vr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,M=h;break e}M=l.return}}var c=e.current;for(M=c;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=c;M!==null;){if(i=M,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:jl(9,i)}}catch(T){ye(i,i.return,T)}if(i===o){M=null;break e}var k=i.sibling;if(k!==null){k.return=i.return,M=k;break e}M=i.return}}if(J=a,fn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Bl,e)}catch{}r=!0}return r}finally{le=n,ut.transition=t}}return!1}function Wu(e,t,n){t=dr(n,t),t=rf(e,t,1),e=nn(e,t,1),t=Ve(),e!==null&&(pa(e,1,t),Xe(e,t))}function ye(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=dr(n,e),e=af(t,e,1),t=nn(t,e,1),e=Ve(),t!==null&&(pa(t,1,e),Xe(t,e));break}}t=t.return}}function xh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Re&n)===n&&(Pe===4||Pe===3&&(Re&130023424)===Re&&500>Ee()-ds?Ln(e,0):cs|=n),Xe(e,t)}function Lf(e,t){t===0&&(e.mode&1?(t=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):t=1);var n=Ve();e=Dt(e,t),e!==null&&(pa(e,t,n),Xe(e,n))}function Ph(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lf(e,n)}function Th(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Lf(e,n)}var xf;xf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,hh(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,de&&t.flags&1048576&&Nd(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ja(e,t),e=t.pendingProps;var a=ir(t,Fe.current);ar(t,n),a=as(null,t,r,e,a,n);var l=ls();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(l=!0,ml(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ji(t),a.updater=Fl,t.stateNode=a,a._reactInternals=t,ii(t,r,e,n),t=ci(null,t,r,!0,l,n)):(t.tag=0,de&&l&&$i(t),Ue(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ja(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=_h(r),e=mt(r,e),a){case 0:t=ui(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=Bu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,mt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),ui(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),Ru(e,t,r,a,n);case 3:e:{if(uf(t),e===null)throw Error(_(387));r=t.pendingProps,l=t.memoizedState,a=l.element,Md(e,t),wl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=dr(Error(_(423)),t),t=Mu(e,t,r,n,a);break e}else if(r!==a){a=dr(Error(_(424)),t),t=Mu(e,t,r,n,a);break e}else for(tt=tn(t.stateNode.containerInfo.firstChild),nt=t,de=!0,gt=null,n=Id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===a){t=At(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Dd(t),e===null&&ai(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Jo(r,a)?o=null:l!==null&&Jo(r,l)&&(t.flags|=32),sf(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&ai(t),null;case 13:return cf(e,t,n);case 4:return es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),Bu(e,t,r,a,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,ie(gl,r._currentValue),r._currentValue=o,l!==null)if(Et(l.value,o)){if(l.children===a.children&&!Ye.current){t=At(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=It(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),li(l.return,n,t),i.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(_(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),li(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ue(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,ar(t,n),a=ct(a),r=r(a),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,a=mt(r,t.pendingProps),a=mt(r.type,a),Iu(e,t,r,a,n);case 15:return lf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:mt(r,a),Ja(e,t),t.tag=1,Ze(r)?(e=!0,ml(t)):e=!1,ar(t,n),nf(t,r,a),ii(t,r,a,n),ci(null,t,r,!0,e,n);case 19:return df(e,t,n);case 22:return of(e,t,n)}throw Error(_(156,t.tag))};function Pf(e,t){return Jc(e,t)}function Nh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Nh(e,t,n,r)}function hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _h(e){if(typeof e=="function")return hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ri)return 11;if(e===Mi)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nl(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")hs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vn:return xn(n.children,a,l,t);case Ii:o=8,a|=8;break;case Oo:return e=st(12,n,t,a|2),e.elementType=Oo,e.lanes=l,e;case Bo:return e=st(13,n,t,a),e.elementType=Bo,e.lanes=l,e;case Io:return e=st(19,n,t,a),e.elementType=Io,e.lanes=l,e;case Dc:return Ul(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:o=10;break e;case Mc:o=9;break e;case Ri:o=11;break e;case Mi:o=14;break e;case Gt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=st(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function xn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=st(22,e,r,t),e.elementType=Dc,e.lanes=n,e.stateNode={isHidden:!1},e}function Co(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Lo(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function vs(e,t,n,r,a,l,o,i,s){return e=new Oh(e,t,n,i,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=st(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ji(l),e}function Bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tf(e){if(!e)return un;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Pd(e,n,t)}return t}function Nf(e,t,n,r,a,l,o,i,s){return e=vs(n,r,!0,e,a,l,o,i,s),e.context=Tf(null),n=e.current,r=Ve(),a=an(n),l=It(r,a),l.callback=t??null,nn(n,l,a),e.current.lanes=a,pa(e,a,r),Xe(e,r),e}function Vl(e,t,n,r){var a=t.current,l=Ve(),o=an(a);return n=Tf(n),t.context===null?t.context=n:t.pendingContext=n,t=It(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(a,t,o),e!==null&&(wt(e,a,o,l),Ya(e,a,o)),o}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gs(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function Ih(){return null}var _f=typeof reportError=="function"?reportError:function(e){console.error(e)};function ys(e){this._internalRoot=e}Wl.prototype.render=ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Vl(e,t,null,null)};Wl.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Vl(null,e,null,null)}),t[Mt]=null}};function Wl(e){this._internalRoot=e}Wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&sd(e)}};function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $u(){}function Rh(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=Pl(o);l.call(u)}}var o=Nf(t,r,e,0,null,!1,!1,"",$u);return e._reactRootContainer=o,e[Mt]=o.current,ea(e.nodeType===8?e.parentNode:e),On(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=Pl(s);i.call(u)}}var s=vs(e,0,!1,null,null,!1,!1,"",$u);return e._reactRootContainer=s,e[Mt]=s.current,ea(e.nodeType===8?e.parentNode:e),On(function(){Vl(t,s,n,r)}),s}function $l(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var i=a;a=function(){var s=Pl(o);i.call(s)}}Vl(t,o,e,a)}else o=Rh(n,t,e,a,r);return Pl(o)}ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(zi(t,n|1),Xe(t,Ee()),!(J&6)&&(fr=Ee()+500,fn()))}break;case 13:On(function(){var r=Dt(e,1);if(r!==null){var a=Ve();wt(r,e,1,a)}}),gs(e,1)}};Fi=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ve();wt(t,e,134217728,n)}gs(e,134217728)}};ld=function(e){if(e.tag===13){var t=an(e),n=Dt(e,t);if(n!==null){var r=Ve();wt(n,e,t,r)}gs(e,t)}};od=function(){return le};id=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};Vo=function(e,t,n){switch(t){case"input":if(Do(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Dl(r);if(!a)throw Error(_(90));zc(r),Do(r,a)}}}break;case"textarea":jc(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};qc=fs;Qc=On;var Mh={usingClientEntryPoint:!1,Events:[ha,qn,Dl,Gc,$c,fs]},Tr={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dh={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zc(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||Ih,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{Bl=Va.inject(Dh),Lt=Va}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mh;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ws(t))throw Error(_(200));return Bh(e,t,null,n)};at.createRoot=function(e,t){if(!ws(e))throw Error(_(299));var n=!1,r="",a=_f;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=vs(e,1,!1,null,null,n,!1,r,a),e[Mt]=t.current,ea(e.nodeType===8?e.parentNode:e),new ys(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Zc(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return On(e)};at.hydrate=function(e,t,n){if(!Gl(t))throw Error(_(200));return $l(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!ws(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=_f;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Nf(t,null,e,1,n??null,a,!1,l,o),e[Mt]=t.current,ea(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Wl(t)};at.render=function(e,t,n){if(!Gl(t))throw Error(_(200));return $l(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(_(40));return e._reactRootContainer?(On(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};at.unstable_batchedUpdates=fs;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return $l(e,t,n,!1,r)};at.version="18.3.1-next-f1338f8080-20240426";function Of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of)}catch(e){console.error(e)}}Of(),_c.exports=at;var Es=_c.exports;const Ah=yc(Es),zh=gc({__proto__:null,default:Ah},[Es]);var qu=Es;No.createRoot=qu.createRoot,No.hydrateRoot=qu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}var we;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(we||(we={}));const Qu="popstate";function Fh(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:o,hash:i}=r.location;return ua("",{pathname:l,search:o,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:ga(a)}return Hh(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jh(){return Math.random().toString(36).substr(2,8)}function Ku(e,t){return{usr:e.state,key:e.key,idx:t}}function ua(e,t,n,r){return n===void 0&&(n=null),ce({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ft(t):t,{state:n,key:t&&t.key||r||jh()})}function ga(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ft(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hh(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,o=a.history,i=we.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(ce({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){i=we.Pop;let O=f(),h=O==null?null:O-u;u=O,s&&s({action:i,location:S.location,delta:h})}function m(O,h){i=we.Push;let c=ua(S.location,O,h);u=f()+1;let v=Ku(c,u),k=S.createHref(c);try{o.pushState(v,"",k)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;a.location.assign(k)}l&&s&&s({action:i,location:S.location,delta:1})}function w(O,h){i=we.Replace;let c=ua(S.location,O,h);u=f();let v=Ku(c,u),k=S.createHref(c);o.replaceState(v,"",k),l&&s&&s({action:i,location:S.location,delta:0})}function b(O){let h=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof O=="string"?O:ga(O);return c=c.replace(/ $/,"%20"),q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let S={get action(){return i},get location(){return e(a,o)},listen(O){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Qu,d),s=O,()=>{a.removeEventListener(Qu,d),s=null}},createHref(O){return t(a,O)},createURL:b,encodeLocation(O){let h=b(O);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:w,go(O){return o.go(O)}};return S}var ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ae||(ae={}));const Uh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Vh(e){return e.index===!0}function Tl(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,l)=>{let o=[...n,String(l)],i=typeof a.id=="string"?a.id:o.join("-");if(q(a.index!==!0||!a.children,"Cannot specify children on an index route"),q(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),Vh(a)){let s=ce({},a,t(a),{id:i});return r[i]=s,s}else{let s=ce({},a,t(a),{id:i,children:void 0});return r[i]=s,a.children&&(s.children=Tl(a.children,t,o,r)),s}})}function wn(e,t,n){return n===void 0&&(n="/"),rl(e,t,n,!1)}function rl(e,t,n,r){let a=typeof t=="string"?Ft(t):t,l=ya(a.pathname||"/",n);if(l==null)return null;let o=Bf(e);Gh(o);let i=null;for(let s=0;i==null&&s<o.length;++s){let u=nv(l);i=ev(o[s],u,r)}return i}function Wh(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function Bf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,o,i)=>{let s={relativePath:i===void 0?l.path||"":i,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=on([r,s.relativePath]),f=n.concat(s);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bf(l.children,t,f,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Xh(u,l.index),routesMeta:f})};return e.forEach((l,o)=>{var i;if(l.path===""||!((i=l.path)!=null&&i.includes("?")))a(l,o);else for(let s of If(l.path))a(l,o,s)}),t}function If(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let o=If(r.join("/")),i=[];return i.push(...o.map(s=>s===""?l:[l,s].join("/"))),a&&i.push(...o),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $h=/^:[\w-]+$/,qh=3,Qh=2,Kh=1,Yh=10,Zh=-2,Yu=e=>e==="*";function Xh(e,t){let n=e.split("/"),r=n.length;return n.some(Yu)&&(r+=Zh),t&&(r+=Qh),n.filter(a=>!Yu(a)).reduce((a,l)=>a+($h.test(l)?qh:l===""?Kh:Yh),r)}function Jh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function ev(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},l="/",o=[];for(let i=0;i<r.length;++i){let s=r[i],u=i===r.length-1,f=l==="/"?t:t.slice(l.length)||"/",d=Zu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Zu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(a,d.params),o.push({params:a,pathname:on([l,d.pathname]),pathnameBase:ov(on([l,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(l=on([l,d.pathnameBase]))}return o}function Zu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tv(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],o=l.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:w}=f;if(m==="*"){let S=i[d]||"";o=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const b=i[d];return w&&!b?u[m]=void 0:u[m]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function tv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function nv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ya(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const rv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,av=e=>rv.test(e);function lv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Ft(e):e,l;if(n)if(av(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Bn(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=Xu(n.substring(1),"/"):l=Xu(n,t)}else l=t;return{pathname:l,search:iv(r),hash:sv(a)}}function Xu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function xo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bs(e,t){let n=Rf(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ss(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Ft(e):(a=ce({},e),q(!a.pathname||!a.pathname.includes("?"),xo("?","pathname","search",a)),q(!a.pathname||!a.pathname.includes("#"),xo("#","pathname","hash",a)),q(!a.search||!a.search.includes("#"),xo("#","search","hash",a)));let l=e===""||a.pathname==="",o=l?"/":a.pathname,i;if(o==null)i=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;a.pathname=m.join("/")}i=d>=0?t[d]:"/"}let s=lv(a,i),u=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const on=e=>e.join("/").replace(/\/\/+/g,"/"),ov=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Nl{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ca(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mf=["post","put","patch","delete"],uv=new Set(Mf),cv=["get",...Mf],dv=new Set(cv),fv=new Set([301,302,303,307,308]),pv=new Set([307,308]),Po={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Nr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ks=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hv=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Df="remix-router-transitions";function vv(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let p=e.detectErrorBoundary;a=y=>({hasErrorBoundary:p(y)})}else a=hv;let l={},o=Tl(e.routes,a,void 0,l),i,s=e.basename||"/",u=e.dataStrategy||Ev,f=e.patchRoutesOnNavigation,d=ce({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,w=new Set,b=null,S=null,O=null,h=e.hydrationData!=null,c=wn(o,e.history.location,s),v=!1,k=null;if(c==null&&!f){let p=qe(404,{pathname:e.history.location.pathname}),{matches:y,route:E}=uc(o);c=y,k={[E.id]:p}}c&&!e.hydrationData&&ka(c,o,e.history.location.pathname).active&&(c=null);let T;if(c)if(c.some(p=>p.route.lazy))T=!1;else if(!c.some(p=>p.route.loader))T=!0;else if(d.v7_partialHydration){let p=e.hydrationData?e.hydrationData.loaderData:null,y=e.hydrationData?e.hydrationData.errors:null;if(y){let E=c.findIndex(x=>y[x.route.id]!==void 0);T=c.slice(0,E+1).every(x=>!ki(x.route,p,y))}else T=c.every(E=>!ki(E.route,p,y))}else T=e.hydrationData!=null;else if(T=!1,c=[],d.v7_partialHydration){let p=ka(null,o,e.history.location.pathname);p.active&&p.matches&&(v=!0,c=p.matches)}let R,g={historyAction:e.history.action,location:e.history.location,matches:c,initialized:T,navigation:Po,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||k,fetchers:new Map,blockers:new Map},C=we.Pop,V=!1,I,ne=!1,X=new Map,re=null,he=!1,$e=!1,je=[],K=new Set,L=new Map,A=0,j=-1,$=new Map,Y=new Set,be=new Map,Ce=new Map,Le=new Set,Te=new Map,Ne=new Map,pn;function vr(){if(m=e.history.listen(p=>{let{action:y,location:E,delta:x}=p;if(pn){pn(),pn=void 0;return}Bn(Ne.size===0||x!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=Ms({currentLocation:g.location,nextLocation:E,historyAction:y});if(B&&x!=null){let U=new Promise(W=>{pn=W});e.history.go(x*-1),Sa(B,{state:"blocked",location:E,proceed(){Sa(B,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),U.then(()=>e.history.go(x))},reset(){let W=new Map(g.blockers);W.set(B,Nr),He({blockers:W})}});return}return mn(y,E)}),n){Rv(t,X);let p=()=>Mv(t,X);t.addEventListener("pagehide",p),re=()=>t.removeEventListener("pagehide",p)}return g.initialized||mn(we.Pop,g.location,{initialHydration:!0}),R}function jt(){m&&m(),re&&re(),w.clear(),I&&I.abort(),g.fetchers.forEach((p,y)=>ba(y)),g.blockers.forEach((p,y)=>Rs(y))}function Kf(p){return w.add(p),()=>w.delete(p)}function He(p,y){y===void 0&&(y={}),g=ce({},g,p);let E=[],x=[];d.v7_fetcherPersist&&g.fetchers.forEach((B,U)=>{B.state==="idle"&&(Le.has(U)?x.push(U):E.push(U))}),Le.forEach(B=>{!g.fetchers.has(B)&&!L.has(B)&&x.push(B)}),[...w].forEach(B=>B(g,{deletedFetchers:x,viewTransitionOpts:y.viewTransitionOpts,flushSync:y.flushSync===!0})),d.v7_fetcherPersist?(E.forEach(B=>g.fetchers.delete(B)),x.forEach(B=>ba(B))):x.forEach(B=>Le.delete(B))}function Dn(p,y,E){var x,B;let{flushSync:U}=E===void 0?{}:E,W=g.actionData!=null&&g.navigation.formMethod!=null&&vt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((x=p.state)==null?void 0:x._isRedirect)!==!0,z;y.actionData?Object.keys(y.actionData).length>0?z=y.actionData:z=null:W?z=g.actionData:z=null;let F=y.loaderData?ic(g.loaderData,y.loaderData,y.matches||[],y.errors):g.loaderData,D=g.blockers;D.size>0&&(D=new Map(D),D.forEach((Z,Be)=>D.set(Be,Nr)));let H=V===!0||g.navigation.formMethod!=null&&vt(g.navigation.formMethod)&&((B=p.state)==null?void 0:B._isRedirect)!==!0;i&&(o=i,i=void 0),he||C===we.Pop||(C===we.Push?e.history.push(p,p.state):C===we.Replace&&e.history.replace(p,p.state));let G;if(C===we.Pop){let Z=X.get(g.location.pathname);Z&&Z.has(p.pathname)?G={currentLocation:g.location,nextLocation:p}:X.has(p.pathname)&&(G={currentLocation:p,nextLocation:g.location})}else if(ne){let Z=X.get(g.location.pathname);Z?Z.add(p.pathname):(Z=new Set([p.pathname]),X.set(g.location.pathname,Z)),G={currentLocation:g.location,nextLocation:p}}He(ce({},y,{actionData:z,loaderData:F,historyAction:C,location:p,initialized:!0,navigation:Po,revalidation:"idle",restoreScrollPosition:As(p,y.matches||g.matches),preventScrollReset:H,blockers:D}),{viewTransitionOpts:G,flushSync:U===!0}),C=we.Pop,V=!1,ne=!1,he=!1,$e=!1,je=[]}async function Ps(p,y){if(typeof p=="number"){e.history.go(p);return}let E=Si(g.location,g.matches,s,d.v7_prependBasename,p,d.v7_relativeSplatPath,y==null?void 0:y.fromRouteId,y==null?void 0:y.relative),{path:x,submission:B,error:U}=Ju(d.v7_normalizeFormMethod,!1,E,y),W=g.location,z=ua(g.location,x,y&&y.state);z=ce({},z,e.history.encodeLocation(z));let F=y&&y.replace!=null?y.replace:void 0,D=we.Push;F===!0?D=we.Replace:F===!1||B!=null&&vt(B.formMethod)&&B.formAction===g.location.pathname+g.location.search&&(D=we.Replace);let H=y&&"preventScrollReset"in y?y.preventScrollReset===!0:void 0,G=(y&&y.flushSync)===!0,Z=Ms({currentLocation:W,nextLocation:z,historyAction:D});if(Z){Sa(Z,{state:"blocked",location:z,proceed(){Sa(Z,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),Ps(p,y)},reset(){let Be=new Map(g.blockers);Be.set(Z,Nr),He({blockers:Be})}});return}return await mn(D,z,{submission:B,pendingError:U,preventScrollReset:H,replace:y&&y.replace,enableViewTransition:y&&y.viewTransition,flushSync:G})}function Yf(){if(Kl(),He({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){mn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}mn(C||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:ne===!0})}}async function mn(p,y,E){I&&I.abort(),I=null,C=p,he=(E&&E.startUninterruptedRevalidation)===!0,op(g.location,g.matches),V=(E&&E.preventScrollReset)===!0,ne=(E&&E.enableViewTransition)===!0;let x=i||o,B=E&&E.overrideNavigation,U=E!=null&&E.initialHydration&&g.matches&&g.matches.length>0&&!v?g.matches:wn(x,y,s),W=(E&&E.flushSync)===!0;if(U&&g.initialized&&!$e&&xv(g.location,y)&&!(E&&E.submission&&vt(E.submission.formMethod))){Dn(y,{matches:U},{flushSync:W});return}let z=ka(U,x,y.pathname);if(z.active&&z.matches&&(U=z.matches),!U){let{error:oe,notFoundMatches:te,route:ve}=Yl(y.pathname);Dn(y,{matches:te,loaderData:{},errors:{[ve.id]:oe}},{flushSync:W});return}I=new AbortController;let F=Hn(e.history,y,I.signal,E&&E.submission),D;if(E&&E.pendingError)D=[En(U).route.id,{type:ae.error,error:E.pendingError}];else if(E&&E.submission&&vt(E.submission.formMethod)){let oe=await Zf(F,y,E.submission,U,z.active,{replace:E.replace,flushSync:W});if(oe.shortCircuited)return;if(oe.pendingActionResult){let[te,ve]=oe.pendingActionResult;if(et(ve)&&ca(ve.error)&&ve.error.status===404){I=null,Dn(y,{matches:oe.matches,loaderData:{},errors:{[te]:ve.error}});return}}U=oe.matches||U,D=oe.pendingActionResult,B=To(y,E.submission),W=!1,z.active=!1,F=Hn(e.history,F.url,F.signal)}let{shortCircuited:H,matches:G,loaderData:Z,errors:Be}=await Xf(F,y,U,z.active,B,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,W,D);H||(I=null,Dn(y,ce({matches:G||U},sc(D),{loaderData:Z,errors:Be})))}async function Zf(p,y,E,x,B,U){U===void 0&&(U={}),Kl();let W=Bv(y,E);if(He({navigation:W},{flushSync:U.flushSync===!0}),B){let D=await Ca(x,y.pathname,p.signal);if(D.type==="aborted")return{shortCircuited:!0};if(D.type==="error"){let H=En(D.partialMatches).route.id;return{matches:D.partialMatches,pendingActionResult:[H,{type:ae.error,error:D.error}]}}else if(D.matches)x=D.matches;else{let{notFoundMatches:H,error:G,route:Z}=Yl(y.pathname);return{matches:H,pendingActionResult:[Z.id,{type:ae.error,error:G}]}}}let z,F=Dr(x,y);if(!F.route.action&&!F.route.lazy)z={type:ae.error,error:qe(405,{method:p.method,pathname:y.pathname,routeId:F.route.id})};else if(z=(await gr("action",g,p,[F],x,null))[F.route.id],p.signal.aborted)return{shortCircuited:!0};if(Cn(z)){let D;return U&&U.replace!=null?D=U.replace:D=ac(z.response.headers.get("Location"),new URL(p.url),s)===g.location.pathname+g.location.search,await hn(p,z,!0,{submission:E,replace:D}),{shortCircuited:!0}}if(Zt(z))throw qe(400,{type:"defer-action"});if(et(z)){let D=En(x,F.route.id);return(U&&U.replace)!==!0&&(C=we.Push),{matches:x,pendingActionResult:[D.route.id,z]}}return{matches:x,pendingActionResult:[F.route.id,z]}}async function Xf(p,y,E,x,B,U,W,z,F,D,H){let G=B||To(y,U),Z=U||W||dc(G),Be=!he&&(!d.v7_partialHydration||!F);if(x){if(Be){let ge=Ts(H);He(ce({navigation:G},ge!==void 0?{actionData:ge}:{}),{flushSync:D})}let ee=await Ca(E,y.pathname,p.signal);if(ee.type==="aborted")return{shortCircuited:!0};if(ee.type==="error"){let ge=En(ee.partialMatches).route.id;return{matches:ee.partialMatches,loaderData:{},errors:{[ge]:ee.error}}}else if(ee.matches)E=ee.matches;else{let{error:ge,notFoundMatches:zn,route:Er}=Yl(y.pathname);return{matches:zn,loaderData:{},errors:{[Er.id]:ge}}}}let oe=i||o,[te,ve]=tc(e.history,g,E,Z,y,d.v7_partialHydration&&F===!0,d.v7_skipActionErrorRevalidation,$e,je,K,Le,be,Y,oe,s,H);if(Zl(ee=>!(E&&E.some(ge=>ge.route.id===ee))||te&&te.some(ge=>ge.route.id===ee)),j=++A,te.length===0&&ve.length===0){let ee=Bs();return Dn(y,ce({matches:E,loaderData:{},errors:H&&et(H[1])?{[H[0]]:H[1].error}:null},sc(H),ee?{fetchers:new Map(g.fetchers)}:{}),{flushSync:D}),{shortCircuited:!0}}if(Be){let ee={};if(!x){ee.navigation=G;let ge=Ts(H);ge!==void 0&&(ee.actionData=ge)}ve.length>0&&(ee.fetchers=Jf(ve)),He(ee,{flushSync:D})}ve.forEach(ee=>{Ut(ee.key),ee.controller&&L.set(ee.key,ee.controller)});let An=()=>ve.forEach(ee=>Ut(ee.key));I&&I.signal.addEventListener("abort",An);let{loaderResults:yr,fetcherResults:Tt}=await Ns(g,E,te,ve,p);if(p.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",An),ve.forEach(ee=>L.delete(ee.key));let bt=Wa(yr);if(bt)return await hn(p,bt.result,!0,{replace:z}),{shortCircuited:!0};if(bt=Wa(Tt),bt)return Y.add(bt.key),await hn(p,bt.result,!0,{replace:z}),{shortCircuited:!0};let{loaderData:Xl,errors:wr}=oc(g,E,yr,H,ve,Tt,Te);Te.forEach((ee,ge)=>{ee.subscribe(zn=>{(zn||ee.done)&&Te.delete(ge)})}),d.v7_partialHydration&&F&&g.errors&&(wr=ce({},g.errors,wr));let vn=Bs(),La=Is(j),xa=vn||La||ve.length>0;return ce({matches:E,loaderData:Xl,errors:wr},xa?{fetchers:new Map(g.fetchers)}:{})}function Ts(p){if(p&&!et(p[1]))return{[p[0]]:p[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function Jf(p){return p.forEach(y=>{let E=g.fetchers.get(y.key),x=_r(void 0,E?E.data:void 0);g.fetchers.set(y.key,x)}),new Map(g.fetchers)}function ep(p,y,E,x){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ut(p);let B=(x&&x.flushSync)===!0,U=i||o,W=Si(g.location,g.matches,s,d.v7_prependBasename,E,d.v7_relativeSplatPath,y,x==null?void 0:x.relative),z=wn(U,W,s),F=ka(z,U,W);if(F.active&&F.matches&&(z=F.matches),!z){Pt(p,y,qe(404,{pathname:W}),{flushSync:B});return}let{path:D,submission:H,error:G}=Ju(d.v7_normalizeFormMethod,!0,W,x);if(G){Pt(p,y,G,{flushSync:B});return}let Z=Dr(z,D),Be=(x&&x.preventScrollReset)===!0;if(H&&vt(H.formMethod)){tp(p,y,D,Z,z,F.active,B,Be,H);return}be.set(p,{routeId:y,path:D}),np(p,y,D,Z,z,F.active,B,Be,H)}async function tp(p,y,E,x,B,U,W,z,F){Kl(),be.delete(p);function D(Se){if(!Se.route.action&&!Se.route.lazy){let Fn=qe(405,{method:F.formMethod,pathname:E,routeId:y});return Pt(p,y,Fn,{flushSync:W}),!0}return!1}if(!U&&D(x))return;let H=g.fetchers.get(p);Ht(p,Iv(F,H),{flushSync:W});let G=new AbortController,Z=Hn(e.history,E,G.signal,F);if(U){let Se=await Ca(B,new URL(Z.url).pathname,Z.signal,p);if(Se.type==="aborted")return;if(Se.type==="error"){Pt(p,y,Se.error,{flushSync:W});return}else if(Se.matches){if(B=Se.matches,x=Dr(B,E),D(x))return}else{Pt(p,y,qe(404,{pathname:E}),{flushSync:W});return}}L.set(p,G);let Be=A,te=(await gr("action",g,Z,[x],B,p))[x.route.id];if(Z.signal.aborted){L.get(p)===G&&L.delete(p);return}if(d.v7_fetcherPersist&&Le.has(p)){if(Cn(te)||et(te)){Ht(p,Wt(void 0));return}}else{if(Cn(te))if(L.delete(p),j>Be){Ht(p,Wt(void 0));return}else return Y.add(p),Ht(p,_r(F)),hn(Z,te,!1,{fetcherSubmission:F,preventScrollReset:z});if(et(te)){Pt(p,y,te.error);return}}if(Zt(te))throw qe(400,{type:"defer-action"});let ve=g.navigation.location||g.location,An=Hn(e.history,ve,G.signal),yr=i||o,Tt=g.navigation.state!=="idle"?wn(yr,g.navigation.location,s):g.matches;q(Tt,"Didn't find any matches after fetcher action");let bt=++A;$.set(p,bt);let Xl=_r(F,te.data);g.fetchers.set(p,Xl);let[wr,vn]=tc(e.history,g,Tt,F,ve,!1,d.v7_skipActionErrorRevalidation,$e,je,K,Le,be,Y,yr,s,[x.route.id,te]);vn.filter(Se=>Se.key!==p).forEach(Se=>{let Fn=Se.key,zs=g.fetchers.get(Fn),up=_r(void 0,zs?zs.data:void 0);g.fetchers.set(Fn,up),Ut(Fn),Se.controller&&L.set(Fn,Se.controller)}),He({fetchers:new Map(g.fetchers)});let La=()=>vn.forEach(Se=>Ut(Se.key));G.signal.addEventListener("abort",La);let{loaderResults:xa,fetcherResults:ee}=await Ns(g,Tt,wr,vn,An);if(G.signal.aborted)return;G.signal.removeEventListener("abort",La),$.delete(p),L.delete(p),vn.forEach(Se=>L.delete(Se.key));let ge=Wa(xa);if(ge)return hn(An,ge.result,!1,{preventScrollReset:z});if(ge=Wa(ee),ge)return Y.add(ge.key),hn(An,ge.result,!1,{preventScrollReset:z});let{loaderData:zn,errors:Er}=oc(g,Tt,xa,void 0,vn,ee,Te);if(g.fetchers.has(p)){let Se=Wt(te.data);g.fetchers.set(p,Se)}Is(bt),g.navigation.state==="loading"&&bt>j?(q(C,"Expected pending action"),I&&I.abort(),Dn(g.navigation.location,{matches:Tt,loaderData:zn,errors:Er,fetchers:new Map(g.fetchers)})):(He({errors:Er,loaderData:ic(g.loaderData,zn,Tt,Er),fetchers:new Map(g.fetchers)}),$e=!1)}async function np(p,y,E,x,B,U,W,z,F){let D=g.fetchers.get(p);Ht(p,_r(F,D?D.data:void 0),{flushSync:W});let H=new AbortController,G=Hn(e.history,E,H.signal);if(U){let te=await Ca(B,new URL(G.url).pathname,G.signal,p);if(te.type==="aborted")return;if(te.type==="error"){Pt(p,y,te.error,{flushSync:W});return}else if(te.matches)B=te.matches,x=Dr(B,E);else{Pt(p,y,qe(404,{pathname:E}),{flushSync:W});return}}L.set(p,H);let Z=A,oe=(await gr("loader",g,G,[x],B,p))[x.route.id];if(Zt(oe)&&(oe=await Cs(oe,G.signal,!0)||oe),L.get(p)===H&&L.delete(p),!G.signal.aborted){if(Le.has(p)){Ht(p,Wt(void 0));return}if(Cn(oe))if(j>Z){Ht(p,Wt(void 0));return}else{Y.add(p),await hn(G,oe,!1,{preventScrollReset:z});return}if(et(oe)){Pt(p,y,oe.error);return}q(!Zt(oe),"Unhandled fetcher deferred data"),Ht(p,Wt(oe.data))}}async function hn(p,y,E,x){let{submission:B,fetcherSubmission:U,preventScrollReset:W,replace:z}=x===void 0?{}:x;y.response.headers.has("X-Remix-Revalidate")&&($e=!0);let F=y.response.headers.get("Location");q(F,"Expected a Location header on the redirect Response"),F=ac(F,new URL(p.url),s);let D=ua(g.location,F,{_isRedirect:!0});if(n){let te=!1;if(y.response.headers.has("X-Remix-Reload-Document"))te=!0;else if(ks.test(F)){const ve=e.history.createURL(F);te=ve.origin!==t.location.origin||ya(ve.pathname,s)==null}if(te){z?t.location.replace(F):t.location.assign(F);return}}I=null;let H=z===!0||y.response.headers.has("X-Remix-Replace")?we.Replace:we.Push,{formMethod:G,formAction:Z,formEncType:Be}=g.navigation;!B&&!U&&G&&Z&&Be&&(B=dc(g.navigation));let oe=B||U;if(pv.has(y.response.status)&&oe&&vt(oe.formMethod))await mn(H,D,{submission:ce({},oe,{formAction:F}),preventScrollReset:W||V,enableViewTransition:E?ne:void 0});else{let te=To(D,B);await mn(H,D,{overrideNavigation:te,fetcherSubmission:U,preventScrollReset:W||V,enableViewTransition:E?ne:void 0})}}async function gr(p,y,E,x,B,U){let W,z={};try{W=await bv(u,p,y,E,x,B,U,l,a)}catch(F){return x.forEach(D=>{z[D.route.id]={type:ae.error,error:F}}),z}for(let[F,D]of Object.entries(W))if(Pv(D)){let H=D.result;z[F]={type:ae.redirect,response:Cv(H,E,F,B,s,d.v7_relativeSplatPath)}}else z[F]=await kv(D);return z}async function Ns(p,y,E,x,B){let U=p.matches,W=gr("loader",p,B,E,y,null),z=Promise.all(x.map(async H=>{if(H.matches&&H.match&&H.controller){let Z=(await gr("loader",p,Hn(e.history,H.path,H.controller.signal),[H.match],H.matches,H.key))[H.match.route.id];return{[H.key]:Z}}else return Promise.resolve({[H.key]:{type:ae.error,error:qe(404,{pathname:H.path})}})})),F=await W,D=(await z).reduce((H,G)=>Object.assign(H,G),{});return await Promise.all([_v(y,F,B.signal,U,p.loaderData),Ov(y,D,x)]),{loaderResults:F,fetcherResults:D}}function Kl(){$e=!0,je.push(...Zl()),be.forEach((p,y)=>{L.has(y)&&K.add(y),Ut(y)})}function Ht(p,y,E){E===void 0&&(E={}),g.fetchers.set(p,y),He({fetchers:new Map(g.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function Pt(p,y,E,x){x===void 0&&(x={});let B=En(g.matches,y);ba(p),He({errors:{[B.route.id]:E},fetchers:new Map(g.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function _s(p){return Ce.set(p,(Ce.get(p)||0)+1),Le.has(p)&&Le.delete(p),g.fetchers.get(p)||mv}function ba(p){let y=g.fetchers.get(p);L.has(p)&&!(y&&y.state==="loading"&&$.has(p))&&Ut(p),be.delete(p),$.delete(p),Y.delete(p),d.v7_fetcherPersist&&Le.delete(p),K.delete(p),g.fetchers.delete(p)}function rp(p){let y=(Ce.get(p)||0)-1;y<=0?(Ce.delete(p),Le.add(p),d.v7_fetcherPersist||ba(p)):Ce.set(p,y),He({fetchers:new Map(g.fetchers)})}function Ut(p){let y=L.get(p);y&&(y.abort(),L.delete(p))}function Os(p){for(let y of p){let E=_s(y),x=Wt(E.data);g.fetchers.set(y,x)}}function Bs(){let p=[],y=!1;for(let E of Y){let x=g.fetchers.get(E);q(x,"Expected fetcher: "+E),x.state==="loading"&&(Y.delete(E),p.push(E),y=!0)}return Os(p),y}function Is(p){let y=[];for(let[E,x]of $)if(x<p){let B=g.fetchers.get(E);q(B,"Expected fetcher: "+E),B.state==="loading"&&(Ut(E),$.delete(E),y.push(E))}return Os(y),y.length>0}function ap(p,y){let E=g.blockers.get(p)||Nr;return Ne.get(p)!==y&&Ne.set(p,y),E}function Rs(p){g.blockers.delete(p),Ne.delete(p)}function Sa(p,y){let E=g.blockers.get(p)||Nr;q(E.state==="unblocked"&&y.state==="blocked"||E.state==="blocked"&&y.state==="blocked"||E.state==="blocked"&&y.state==="proceeding"||E.state==="blocked"&&y.state==="unblocked"||E.state==="proceeding"&&y.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+y.state);let x=new Map(g.blockers);x.set(p,y),He({blockers:x})}function Ms(p){let{currentLocation:y,nextLocation:E,historyAction:x}=p;if(Ne.size===0)return;Ne.size>1&&Bn(!1,"A router only supports one blocker at a time");let B=Array.from(Ne.entries()),[U,W]=B[B.length-1],z=g.blockers.get(U);if(!(z&&z.state==="proceeding")&&W({currentLocation:y,nextLocation:E,historyAction:x}))return U}function Yl(p){let y=qe(404,{pathname:p}),E=i||o,{matches:x,route:B}=uc(E);return Zl(),{notFoundMatches:x,route:B,error:y}}function Zl(p){let y=[];return Te.forEach((E,x)=>{(!p||p(x))&&(E.cancel(),y.push(x),Te.delete(x))}),y}function lp(p,y,E){if(b=p,O=y,S=E||null,!h&&g.navigation===Po){h=!0;let x=As(g.location,g.matches);x!=null&&He({restoreScrollPosition:x})}return()=>{b=null,O=null,S=null}}function Ds(p,y){return S&&S(p,y.map(x=>Wh(x,g.loaderData)))||p.key}function op(p,y){if(b&&O){let E=Ds(p,y);b[E]=O()}}function As(p,y){if(b){let E=Ds(p,y),x=b[E];if(typeof x=="number")return x}return null}function ka(p,y,E){if(f)if(p){if(Object.keys(p[0].params).length>0)return{active:!0,matches:rl(y,E,s,!0)}}else return{active:!0,matches:rl(y,E,s,!0)||[]};return{active:!1,matches:null}}async function Ca(p,y,E,x){if(!f)return{type:"success",matches:p};let B=p;for(;;){let U=i==null,W=i||o,z=l;try{await f({signal:E,path:y,matches:B,fetcherKey:x,patch:(H,G)=>{E.aborted||rc(H,G,W,z,a)}})}catch(H){return{type:"error",error:H,partialMatches:B}}finally{U&&!E.aborted&&(o=[...o])}if(E.aborted)return{type:"aborted"};let F=wn(W,y,s);if(F)return{type:"success",matches:F};let D=rl(W,y,s,!0);if(!D||B.length===D.length&&B.every((H,G)=>H.route.id===D[G].route.id))return{type:"success",matches:null};B=D}}function ip(p){l={},i=Tl(p,a,void 0,l)}function sp(p,y){let E=i==null;rc(p,y,i||o,l,a),E&&(o=[...o],He({}))}return R={get basename(){return s},get future(){return d},get state(){return g},get routes(){return o},get window(){return t},initialize:vr,subscribe:Kf,enableScrollRestoration:lp,navigate:Ps,fetch:ep,revalidate:Yf,createHref:p=>e.history.createHref(p),encodeLocation:p=>e.history.encodeLocation(p),getFetcher:_s,deleteFetcher:rp,dispose:jt,getBlocker:ap,deleteBlocker:Rs,patchRoutes:sp,_internalFetchControllers:L,_internalActiveDeferreds:Te,_internalSetRoutes:ip},R}function gv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Si(e,t,n,r,a,l,o,i){let s,u;if(o){s=[];for(let d of t)if(s.push(d),d.route.id===o){u=d;break}}else s=t,u=t[t.length-1];let f=Ss(a||".",bs(s,l),ya(e.pathname,n)||e.pathname,i==="path");if(a==null&&(f.search=e.search,f.hash=e.hash),(a==null||a===""||a===".")&&u){let d=Ls(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let m=new URLSearchParams(f.search),w=m.getAll("index");m.delete("index"),w.filter(S=>S).forEach(S=>m.append("index",S));let b=m.toString();f.search=b?"?"+b:""}}return r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:on([n,f.pathname])),ga(f)}function Ju(e,t,n,r){if(!r||!gv(r))return{path:n};if(r.formMethod&&!Nv(r.formMethod))return{path:n,error:qe(405,{method:r.formMethod})};let a=()=>({path:n,error:qe(400,{type:"invalid-body"})}),l=r.formMethod||"get",o=e?l.toUpperCase():l.toLowerCase(),i=Ff(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!vt(o))return a();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,b)=>{let[S,O]=b;return""+w+S+"="+O+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!vt(o))return a();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}q(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Ci(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Ci(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=lc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=lc(s)}catch{return a()}let f={formMethod:o,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(vt(f.formMethod))return{path:n,submission:f};let d=Ft(n);return t&&d.search&&Ls(d.search)&&s.append("index",""),d.search="?"+s,{path:ga(d),submission:f}}function ec(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(a=>a.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function tc(e,t,n,r,a,l,o,i,s,u,f,d,m,w,b,S){let O=S?et(S[1])?S[1].error:S[1].data:void 0,h=e.createURL(t.location),c=e.createURL(a),v=n;l&&t.errors?v=ec(n,Object.keys(t.errors)[0],!0):S&&et(S[1])&&(v=ec(n,S[0]));let k=S?S[1].statusCode:void 0,T=o&&k&&k>=400,R=v.filter((C,V)=>{let{route:I}=C;if(I.lazy)return!0;if(I.loader==null)return!1;if(l)return ki(I,t.loaderData,t.errors);if(yv(t.loaderData,t.matches[V],C)||s.some(re=>re===C.route.id))return!0;let ne=t.matches[V],X=C;return nc(C,ce({currentUrl:h,currentParams:ne.params,nextUrl:c,nextParams:X.params},r,{actionResult:O,actionStatus:k,defaultShouldRevalidate:T?!1:i||h.pathname+h.search===c.pathname+c.search||h.search!==c.search||Af(ne,X)}))}),g=[];return d.forEach((C,V)=>{if(l||!n.some(he=>he.route.id===C.routeId)||f.has(V))return;let I=wn(w,C.path,b);if(!I){g.push({key:V,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let ne=t.fetchers.get(V),X=Dr(I,C.path),re=!1;m.has(V)?re=!1:u.has(V)?(u.delete(V),re=!0):ne&&ne.state!=="idle"&&ne.data===void 0?re=i:re=nc(X,ce({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:O,actionStatus:k,defaultShouldRevalidate:T?!1:i})),re&&g.push({key:V,routeId:C.routeId,path:C.path,matches:I,match:X,controller:new AbortController})}),[R,g]}function ki(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,a=n!=null&&n[e.id]!==void 0;return!r&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!a}function yv(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Af(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function nc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function rc(e,t,n,r,a){var l;let o;if(e){let u=r[e];q(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),o=u.children}else o=n;let i=t.filter(u=>!o.some(f=>zf(u,f))),s=Tl(i,a,[e||"_","patch",String(((l=o)==null?void 0:l.length)||"0")],r);o.push(...s)}function zf(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var a;return(a=t.children)==null?void 0:a.some(l=>zf(n,l))}):!1}async function wv(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];q(a,"No route found in manifest");let l={};for(let o in r){let s=a[o]!==void 0&&o!=="hasErrorBoundary";Bn(!s,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!s&&!Uh.has(o)&&(l[o]=r[o])}Object.assign(a,l),Object.assign(a,ce({},t(a),{lazy:void 0}))}async function Ev(e){let{matches:t}=e,n=t.filter(a=>a.shouldLoad);return(await Promise.all(n.map(a=>a.resolve()))).reduce((a,l,o)=>Object.assign(a,{[n[o].route.id]:l}),{})}async function bv(e,t,n,r,a,l,o,i,s,u){let f=l.map(w=>w.route.lazy?wv(w.route,s,i):void 0),d=l.map((w,b)=>{let S=f[b],O=a.some(c=>c.route.id===w.route.id);return ce({},w,{shouldLoad:O,resolve:async c=>(c&&r.method==="GET"&&(w.route.lazy||w.route.loader)&&(O=!0),O?Sv(t,r,w,S,c,u):Promise.resolve({type:ae.data,result:void 0}))})}),m=await e({matches:d,request:r,params:l[0].params,fetcherKey:o,context:u});try{await Promise.all(f)}catch{}return m}async function Sv(e,t,n,r,a,l){let o,i,s=u=>{let f,d=new Promise((b,S)=>f=S);i=()=>f(),t.signal.addEventListener("abort",i);let m=b=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:l},...b!==void 0?[b]:[]),w=(async()=>{try{return{type:"data",result:await(a?a(S=>m(S)):m())}}catch(b){return{type:"error",result:b}}})();return Promise.race([w,d])};try{let u=n.route[e];if(r)if(u){let f,[d]=await Promise.all([s(u).catch(m=>{f=m}),r]);if(f!==void 0)throw f;o=d}else if(await r,u=n.route[e],u)o=await s(u);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw qe(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:ae.data,result:void 0};else if(u)o=await s(u);else{let f=new URL(t.url),d=f.pathname+f.search;throw qe(404,{pathname:d})}q(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ae.error,result:u}}finally{i&&t.signal.removeEventListener("abort",i)}return o}async function kv(e){let{result:t,type:n}=e;if(jf(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:ae.error,error:m}}return n===ae.error?{type:ae.error,error:new Nl(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:ae.data,data:d,statusCode:t.status,headers:t.headers}}if(n===ae.error){if(cc(t)){var r,a;if(t.data instanceof Error){var l,o;return{type:ae.error,error:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:ae.error,error:new Nl(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:ca(t)?t.status:void 0,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:ae.error,error:t,statusCode:ca(t)?t.status:void 0}}if(Tv(t)){var i,s;return{type:ae.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((s=t.init)==null?void 0:s.headers)&&new Headers(t.init.headers)}}if(cc(t)){var u,f;return{type:ae.data,data:t.data,statusCode:(u=t.init)==null?void 0:u.status,headers:(f=t.init)!=null&&f.headers?new Headers(t.init.headers):void 0}}return{type:ae.data,data:t}}function Cv(e,t,n,r,a,l){let o=e.headers.get("Location");if(q(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!ks.test(o)){let i=r.slice(0,r.findIndex(s=>s.route.id===n)+1);o=Si(new URL(t.url),i,a,!0,o,l),e.headers.set("Location",o)}return e}function ac(e,t,n){if(ks.test(e)){let r=e,a=r.startsWith("//")?new URL(t.protocol+r):new URL(r),l=ya(a.pathname,n)!=null;if(a.origin===t.origin&&l)return a.pathname+a.search+a.hash}return e}function Hn(e,t,n,r){let a=e.createURL(Ff(t)).toString(),l={signal:n};if(r&&vt(r.formMethod)){let{formMethod:o,formEncType:i}=r;l.method=o.toUpperCase(),i==="application/json"?(l.headers=new Headers({"Content-Type":i}),l.body=JSON.stringify(r.json)):i==="text/plain"?l.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?l.body=Ci(r.formData):l.body=r.formData}return new Request(a,l)}function Ci(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function lc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Lv(e,t,n,r,a){let l={},o=null,i,s=!1,u={},f=n&&et(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let m=d.route.id,w=t[m];if(q(!Cn(w),"Cannot handle redirect results in processLoaderData"),et(w)){let b=w.error;f!==void 0&&(b=f,f=void 0),o=o||{};{let S=En(e,m);o[S.route.id]==null&&(o[S.route.id]=b)}l[m]=void 0,s||(s=!0,i=ca(w.error)?w.error.status:500),w.headers&&(u[m]=w.headers)}else Zt(w)?(r.set(m,w.deferredData),l[m]=w.deferredData.data,w.statusCode!=null&&w.statusCode!==200&&!s&&(i=w.statusCode),w.headers&&(u[m]=w.headers)):(l[m]=w.data,w.statusCode&&w.statusCode!==200&&!s&&(i=w.statusCode),w.headers&&(u[m]=w.headers))}),f!==void 0&&n&&(o={[n[0]]:f},l[n[0]]=void 0),{loaderData:l,errors:o,statusCode:i||200,loaderHeaders:u}}function oc(e,t,n,r,a,l,o){let{loaderData:i,errors:s}=Lv(t,n,r,o);return a.forEach(u=>{let{key:f,match:d,controller:m}=u,w=l[f];if(q(w,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(et(w)){let b=En(e.matches,d==null?void 0:d.route.id);s&&s[b.route.id]||(s=ce({},s,{[b.route.id]:w.error})),e.fetchers.delete(f)}else if(Cn(w))q(!1,"Unhandled fetcher revalidation redirect");else if(Zt(w))q(!1,"Unhandled fetcher deferred data");else{let b=Wt(w.data);e.fetchers.set(f,b)}}),{loaderData:i,errors:s}}function ic(e,t,n,r){let a=ce({},t);for(let l of n){let o=l.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(a[o]=t[o]):e[o]!==void 0&&l.route.loader&&(a[o]=e[o]),r&&r.hasOwnProperty(o))break}return a}function sc(e){return e?et(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function En(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function uc(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function qe(e,t){let{pathname:n,routeId:r,method:a,type:l,message:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&n&&r?s="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"?s="defer() is not supported in actions":l==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new Nl(e||500,i,new Error(s),!0)}function Wa(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,a]=t[n];if(Cn(a))return{key:r,result:a}}}function Ff(e){let t=typeof e=="string"?Ft(e):e;return ga(ce({},t,{hash:""}))}function xv(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Pv(e){return jf(e.result)&&fv.has(e.result.status)}function Zt(e){return e.type===ae.deferred}function et(e){return e.type===ae.error}function Cn(e){return(e&&e.type)===ae.redirect}function cc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Tv(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function jf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Nv(e){return dv.has(e.toLowerCase())}function vt(e){return uv.has(e.toLowerCase())}async function _v(e,t,n,r,a){let l=Object.entries(t);for(let o=0;o<l.length;o++){let[i,s]=l[o],u=e.find(m=>(m==null?void 0:m.route.id)===i);if(!u)continue;let f=r.find(m=>m.route.id===u.route.id),d=f!=null&&!Af(f,u)&&(a&&a[u.route.id])!==void 0;Zt(s)&&d&&await Cs(s,n,!1).then(m=>{m&&(t[i]=m)})}}async function Ov(e,t,n){for(let r=0;r<n.length;r++){let{key:a,routeId:l,controller:o}=n[r],i=t[a];e.find(u=>(u==null?void 0:u.route.id)===l)&&Zt(i)&&(q(o,"Expected an AbortController for revalidating fetcher deferred result"),await Cs(i,o.signal,!0).then(u=>{u&&(t[a]=u)}))}}async function Cs(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ae.data,data:e.deferredData.unwrappedData}}catch(a){return{type:ae.error,error:a}}return{type:ae.data,data:e.deferredData.data}}}function Ls(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Dr(e,t){let n=typeof t=="string"?Ft(t).search:t.search;if(e[e.length-1].route.index&&Ls(n||""))return e[e.length-1];let r=Rf(e);return r[r.length-1]}function dc(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:l,json:o}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:l,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function To(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Bv(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function _r(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Iv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Wt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Rv(e,t){try{let n=e.sessionStorage.getItem(Df);if(n){let r=JSON.parse(n);for(let[a,l]of Object.entries(r||{}))l&&Array.isArray(l)&&t.set(a,new Set(l||[]))}}catch{}}function Mv(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(Df,JSON.stringify(n))}catch(r){Bn(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}const ql=P.createContext(null),Hf=P.createContext(null),wa=P.createContext(null),Ql=P.createContext(null),Mn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Uf=P.createContext(null);function Ea(){return P.useContext(Ql)!=null}function xs(){return Ea()||q(!1),P.useContext(Ql).location}function Vf(e){P.useContext(wa).static||P.useLayoutEffect(e)}function Wf(){let{isDataRoute:e}=P.useContext(Mn);return e?qv():Dv()}function Dv(){Ea()||q(!1);let e=P.useContext(ql),{basename:t,future:n,navigator:r}=P.useContext(wa),{matches:a}=P.useContext(Mn),{pathname:l}=xs(),o=JSON.stringify(bs(a,n.v7_relativeSplatPath)),i=P.useRef(!1);return Vf(()=>{i.current=!0}),P.useCallback(function(u,f){if(f===void 0&&(f={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=Ss(u,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:on([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,l,e])}function Av(e,t){return Gf(e,t)}function Gf(e,t,n,r){Ea()||q(!1);let{navigator:a}=P.useContext(wa),{matches:l}=P.useContext(Mn),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=xs(),f;if(t){var d;let O=typeof t=="string"?Ft(t):t;s==="/"||(d=O.pathname)!=null&&d.startsWith(s)||q(!1),f=O}else f=u;let m=f.pathname||"/",w=m;if(s!=="/"){let O=s.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(O.length).join("/")}let b=wn(e,{pathname:w}),S=Uv(b&&b.map(O=>Object.assign({},O,{params:Object.assign({},i,O.params),pathname:on([s,a.encodeLocation?a.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?s:on([s,a.encodeLocation?a.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),l,n,r);return t&&S?P.createElement(Ql.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:we.Pop}},S):S}function zv(){let e=$v(),t=ca(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:a},n):null,null)}const Fv=P.createElement(zv,null);class jv extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(Mn.Provider,{value:this.props.routeContext},P.createElement(Uf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hv(e){let{routeContext:t,match:n,children:r}=e,a=P.useContext(ql);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Mn.Provider,{value:t},r)}function Uv(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let f=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);f>=0||q(!1),o=o.slice(0,Math.min(o.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:w}=n,b=d.route.loader&&m[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||b){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let w,b=!1,S=null,O=null;n&&(w=i&&d.route.id?i[d.route.id]:void 0,S=d.route.errorElement||Fv,s&&(u<0&&m===0?(Qv("route-fallback"),b=!0,O=null):u===m&&(b=!0,O=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),c=()=>{let v;return w?v=S:b?v=O:d.route.Component?v=P.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,P.createElement(Hv,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?P.createElement(jv,{location:n.location,revalidation:n.revalidation,component:S,error:w,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var $f=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($f||{}),qf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qf||{});function Vv(e){let t=P.useContext(ql);return t||q(!1),t}function Wv(e){let t=P.useContext(Hf);return t||q(!1),t}function Gv(e){let t=P.useContext(Mn);return t||q(!1),t}function Qf(e){let t=Gv(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function $v(){var e;let t=P.useContext(Uf),n=Wv(),r=Qf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qv(){let{router:e}=Vv($f.UseNavigateStable),t=Qf(qf.UseNavigateStable),n=P.useRef(!1);return Vf(()=>{n.current=!0}),P.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,da({fromRouteId:t},l)))},[e,t])}const fc={};function Qv(e,t,n){fc[e]||(fc[e]=!0)}function Kv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Yv(e){let{to:t,replace:n,state:r,relative:a}=e;Ea()||q(!1);let{future:l,static:o}=P.useContext(wa),{matches:i}=P.useContext(Mn),{pathname:s}=xs(),u=Wf(),f=Ss(t,bs(i,l.v7_relativeSplatPath),s,a==="path"),d=JSON.stringify(f);return P.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function pt(e){q(!1)}function Zv(e){let{basename:t="/",children:n=null,location:r,navigationType:a=we.Pop,navigator:l,static:o=!1,future:i}=e;Ea()&&q(!1);let s=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:s,navigator:l,static:o,future:da({v7_relativeSplatPath:!1},i)}),[s,i,l,o]);typeof r=="string"&&(r=Ft(r));let{pathname:f="/",search:d="",hash:m="",state:w=null,key:b="default"}=r,S=P.useMemo(()=>{let O=ya(f,s);return O==null?null:{location:{pathname:O,search:d,hash:m,state:w,key:b},navigationType:a}},[s,f,d,m,w,b,a]);return S==null?null:P.createElement(wa.Provider,{value:u},P.createElement(Ql.Provider,{children:n,value:S}))}function Xv(e){let{children:t,location:n}=e;return Av(Li(t),n)}new Promise(()=>{});function Li(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,a)=>{if(!P.isValidElement(r))return;let l=[...t,a];if(r.type===P.Fragment){n.push.apply(n,Li(r.props.children,l));return}r.type!==pt&&q(!1),!r.props.index||!r.props.children||q(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Li(r.props.children,l)),n.push(o)}),n}function Jv(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:P.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:P.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:P.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_l.apply(this,arguments)}const eg="6";try{window.__reactRouterVersion=eg}catch{}function tg(e,t){return vv({basename:t==null?void 0:t.basename,future:_l({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Fh({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||ng(),routes:e,mapRouteProperties:Jv,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function ng(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=_l({},t,{errors:rg(t.errors)})),t}function rg(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Nl(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let l=window[a.__subType];if(typeof l=="function")try{let o=new l(a.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let l=new Error(a.message);l.stack="",n[r]=l}}else n[r]=a;return n}const ag=P.createContext({isTransitioning:!1}),lg=P.createContext(new Map),og="startTransition",pc=xp[og],ig="flushSync",mc=zh[ig];function sg(e){pc?pc(e):e()}function Or(e){mc?mc(e):e()}class ug{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function cg(e){let{fallbackElement:t,router:n,future:r}=e,[a,l]=P.useState(n.state),[o,i]=P.useState(),[s,u]=P.useState({isTransitioning:!1}),[f,d]=P.useState(),[m,w]=P.useState(),[b,S]=P.useState(),O=P.useRef(new Map),{v7_startTransition:h}=r||{},c=P.useCallback(C=>{h?sg(C):C()},[h]),v=P.useCallback((C,V)=>{let{deletedFetchers:I,flushSync:ne,viewTransitionOpts:X}=V;C.fetchers.forEach((he,$e)=>{he.data!==void 0&&O.current.set($e,he.data)}),I.forEach(he=>O.current.delete(he));let re=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!X||re){ne?Or(()=>l(C)):c(()=>l(C));return}if(ne){Or(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:X.currentLocation,nextLocation:X.nextLocation})});let he=n.window.document.startViewTransition(()=>{Or(()=>l(C))});he.finished.finally(()=>{Or(()=>{d(void 0),w(void 0),i(void 0),u({isTransitioning:!1})})}),Or(()=>w(he));return}m?(f&&f.resolve(),m.skipTransition(),S({state:C,currentLocation:X.currentLocation,nextLocation:X.nextLocation})):(i(C),u({isTransitioning:!0,flushSync:!1,currentLocation:X.currentLocation,nextLocation:X.nextLocation}))},[n.window,m,f,O,c]);P.useLayoutEffect(()=>n.subscribe(v),[n,v]),P.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new ug)},[s]),P.useEffect(()=>{if(f&&o&&n.window){let C=o,V=f.promise,I=n.window.document.startViewTransition(async()=>{c(()=>l(C)),await V});I.finished.finally(()=>{d(void 0),w(void 0),i(void 0),u({isTransitioning:!1})}),w(I)}},[c,o,f,n.window]),P.useEffect(()=>{f&&o&&a.location.key===o.location.key&&f.resolve()},[f,m,a.location,o]),P.useEffect(()=>{!s.isTransitioning&&b&&(i(b.state),u({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),S(void 0))},[s.isTransitioning,b]),P.useEffect(()=>{},[]);let k=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,V,I)=>n.navigate(C,{state:V,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(C,V,I)=>n.navigate(C,{replace:!0,state:V,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[n]),T=n.basename||"/",R=P.useMemo(()=>({router:n,navigator:k,static:!1,basename:T}),[n,k,T]),g=P.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return P.useEffect(()=>Kv(r,n.future),[r,n.future]),P.createElement(P.Fragment,null,P.createElement(ql.Provider,{value:R},P.createElement(Hf.Provider,{value:a},P.createElement(lg.Provider,{value:O.current},P.createElement(ag.Provider,{value:s},P.createElement(Zv,{basename:T,location:a.location,navigationType:a.historyAction,navigator:k,future:g},a.initialized||n.future.v7_partialHydration?P.createElement(dg,{routes:n.routes,future:n.future,state:a}):t))))),null)}const dg=P.memo(fg);function fg(e){let{routes:t,future:n,state:r}=e;return Gf(t,void 0,r,n)}var hc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hc||(hc={}));var vc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vc||(vc={}));function pg(){const e=Wf(),[t,n]=P.useState(!1),r=o=>{const i=document.getElementById(o);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},a=()=>{e("/configurator")};P.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const o=document.getElementById("year");o&&(o.textContent=new Date().getFullYear().toString());const i=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],s=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],u=[...i,...s],f={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},d=new Set(["shell","trimpiece","backShellMain","backHandles"]),m=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],w=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],b=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),S=[{id:"shell",mask:"/assets/masks/leftShell.png"},{id:"trimpiece",mask:"/assets/masks/centerBody.png"},{id:"faceButtons",mask:"/assets/masks/faceButtons.png"},{id:"stickL",mask:"/assets/masks/stickL.png"},{id:"stickR",mask:"/assets/masks/stickR.png"},{id:"touchpad",mask:"/assets/masks/touchpad.png"},{id:"share",mask:"/assets/masks/share.png"},{id:"options",mask:"/assets/masks/options.png"},{id:"psButton",mask:"/assets/masks/psButton.png"},{id:"bumpers",mask:"/assets/masks/bumperL.png"}];function O(K){return d.has(K)?m:w}function h(K){return K[Math.floor(Math.random()*K.length)]}function c(K,L){const A={};let j=0;return u.forEach(Y=>{const be=O(Y.id),Ce=h(be);A[Y.id]=Ce,j+=f[Y.id]||0}),{id:K,name:(L==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(K+1),colors:A,total:j}}function v(K,L){const A=K.toFixed(2);return L==="ar"?A+" د.ب":"BHD "+A}const k={ar:{navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
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
        `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly."}};let T=localStorage.getItem("ez_lang")||"ar";function R(){document.documentElement.lang=T,document.documentElement.dir=T==="ar"?"rtl":"ltr"}function g(){const K=k[T];document.querySelectorAll("[data-i18n]").forEach(j=>{const $=j.getAttribute("data-i18n");K[$]&&(j.textContent=K[$])}),document.querySelectorAll("[data-i18n-html]").forEach(j=>{const $=j.getAttribute("data-i18n-html");K[$]&&(j.innerHTML=K[$])});const L=document.getElementById("langToggle");L&&(L.textContent=T==="ar"?"EN":"عربي");const A=document.getElementById("mobileLangToggle");A&&(A.textContent=T==="ar"?"EN":"عربي")}let C=[];function V(K){const L=k[T],A=document.createElement("article");A.className="build-card";const j=document.createElement("div");j.className="build-thumb";const $=document.createElement("div");$.className="thumb-controller";const Y=document.createElement("div");Y.className="thumb-base",$.appendChild(Y),S.forEach(pn=>{const vr=K.colors[pn.id];if(!vr)return;const jt=document.createElement("div");jt.className="thumb-layer",jt.style.setProperty("--mask-url",`url('${pn.mask}')`),jt.style.setProperty("--tint",vr.hex),b.has(vr.hex.toLowerCase())?jt.style.setProperty("--tint-opacity","0.35"):jt.style.setProperty("--tint-opacity","1"),$.appendChild(jt)}),j.appendChild($);const be=document.createElement("div");be.className="build-body";const Ce=document.createElement("div");Ce.className="build-title",Ce.textContent=K.name;const Le=document.createElement("div");Le.className="build-price",Le.innerHTML=v(K.total,T);const Te=document.createElement("div");Te.className="build-color-row";const Ne=document.createElement("button");return Ne.className="build-cta",Ne.type="button",Ne.textContent=L.preview,Ne.addEventListener("click",a),be.appendChild(Ce),be.appendChild(Le),be.appendChild(Te),be.appendChild(Ne),A.appendChild(j),A.appendChild(be),A}function I(){const K=document.getElementById("buildGrid");if(K){if(K.innerHTML="",C.length)C=C.map((L,A)=>c(A,T));else for(let L=0;L<20;L++)C.push(c(L,T));C.forEach(L=>K.appendChild(V(L)))}}function ne(K){T=K,localStorage.setItem("ez_lang",K),R(),g(),I()}const X=document.getElementById("langToggle"),re=document.getElementById("contactForm"),he=()=>{ne(T==="ar"?"en":"ar")},$e=K=>{K.preventDefault(),alert(k[T].formSuccess),re==null||re.reset()},je=document.getElementById("mobileLangToggle");return X==null||X.addEventListener("click",he),je==null||je.addEventListener("click",he),re==null||re.addEventListener("submit",$e),R(),g(),I(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",X==null||X.removeEventListener("click",he),je==null||je.removeEventListener("click",he),re==null||re.removeEventListener("submit",$e)}},[e]),P.useEffect(()=>(document.body.classList.toggle("mobile-nav-open",t),()=>document.body.classList.remove("mobile-nav-open")),[t]);const l=()=>n(!1);return N.jsxs("div",{className:"home-page",children:[N.jsxs("header",{className:"top-nav",children:[N.jsx("div",{className:"nav-left",children:N.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[N.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),N.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),N.jsxs("button",{className:"nav-menu-btn",type:"button","aria-label":t?"Close menu":"Open menu","aria-expanded":t?"true":"false","aria-controls":"mobileNavDrawer",onClick:()=>n(o=>!o),children:[N.jsx("span",{}),N.jsx("span",{}),N.jsx("span",{})]}),N.jsxs("div",{className:"nav-right",children:[N.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>r("premadeSection")}),N.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>r("contactSection")}),N.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:a}),N.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"})]})]}),N.jsx("div",{className:`mobile-nav-overlay ${t?"open":""}`,onClick:l}),N.jsxs("aside",{className:`mobile-nav-drawer ${t?"open":""}`,id:"mobileNavDrawer","aria-hidden":!t,children:[N.jsx("button",{className:"mobile-nav-link",type:"button","data-i18n":"navPremade",onClick:()=>{r("premadeSection"),l()}}),N.jsx("button",{className:"mobile-nav-link",type:"button","data-i18n":"navContact",onClick:()=>{r("contactSection"),l()}}),N.jsx("button",{className:"mobile-nav-link mobile-nav-cta",type:"button","data-i18n":"navBuildCta",onClick:()=>{a(),l()}}),N.jsx("button",{className:"mobile-nav-link mobile-nav-lang",id:"mobileLangToggle",type:"button",children:"EN"})]}),N.jsxs("section",{className:"hero",children:[N.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:N.jsx("source",{src:"/assets/back.mp4",type:"video/mp4"})}),N.jsx("div",{className:"hero-overlay"}),N.jsx("div",{className:"hero-inner",children:N.jsxs("div",{children:[N.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),N.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),N.jsxs("div",{className:"hero-actions",children:[N.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:a}),N.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>r("premadeSection")})]})]})})]}),N.jsxs("section",{className:"section",id:"premadeSection",children:[N.jsx("div",{className:"section-header",children:N.jsx("div",{children:N.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),N.jsx("div",{className:"build-grid",id:"buildGrid"})]}),N.jsxs("section",{className:"section",id:"contactSection",children:[N.jsx("div",{className:"section-header",children:N.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),N.jsxs("div",{className:"contact-grid",children:[N.jsxs("div",{className:"contact-card",children:[N.jsx("h3",{"data-i18n":"contactCardTitle"}),N.jsx("p",{"data-i18n":"contactCardText"}),N.jsxs("form",{id:"contactForm",children:[N.jsxs("div",{className:"contact-form-group",children:[N.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),N.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),N.jsxs("div",{className:"contact-form-group",children:[N.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),N.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),N.jsxs("div",{className:"contact-form-group",children:[N.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),N.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),N.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),N.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),N.jsxs("footer",{className:"footer",children:[N.jsx("span",{"data-i18n":"footerText"}),N.jsx("span",{id:"year"})]})]})}const mg=`


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
<button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
<span></span>
<span></span>
<span></span>
</button>
<div class="nav-right">
<a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
<a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
<a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
<button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
</div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
<a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
<a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
<a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
<button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
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
<button class="mobile-selected-part" id="mobileSelectedPart" type="button" aria-label="Selected part">
<img alt="" src="/assets/icons/shells.png"/>
</button>
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
<button class="control-btn control-colors" data-panel="colors" type="button" aria-label="الألوان المتاحة">
<span class="control-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" role="img" aria-hidden="true">
<circle cx="7" cy="9" r="3.2" fill="#ff5c7a"/>
<circle cx="16.5" cy="8.5" r="3" fill="#42a5ff"/>
<circle cx="13" cy="16" r="4" fill="#f6d743"/>
</svg>
</span>
<span class="control-label" data-i18n="partsColorsHeading">الألوان المتاحة</span>
</button>
<button class="control-btn control-options active" data-panel="options" type="button" aria-label="خيارات القطعة">
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
<button class="control-btn control-flip" id="flipControlBtn" data-action="flip" type="button" aria-label="الأمام">
<span class="flip-preview" aria-hidden="true">
<img class="flip-preview-front" alt="" src="/assets/controller.png"/>
<img class="flip-preview-back" alt="" src="/assets/controller_back.png"/>
</span>
</button>
<button class="control-btn control-lang" id="langSwitchBtn" type="button" aria-label="اختيار اللغة">
<span class="control-icon" aria-hidden="true">
<svg class="flag-icon flag-en" viewBox="0 0 24 16" role="img" aria-hidden="true">
<rect width="24" height="16" fill="#0a3d8f"/>
<rect x="10" width="4" height="16" fill="#ffffff"/>
<rect y="6" width="24" height="4" fill="#ffffff"/>
<rect x="11" width="2" height="16" fill="#d91c1c"/>
<rect y="7" width="24" height="2" fill="#d91c1c"/>
</svg>
<svg class="flag-icon flag-ar" viewBox="0 0 24 16" role="img" aria-hidden="true">
<rect width="24" height="16" fill="#0b7a3b"/>
<rect x="3" y="6" width="18" height="4" fill="#f4f4f4"/>
</svg>
</span>
<span class="control-label" data-i18n="chooseLanguage">EN</span>
</button>
</div>
<!-- FIXED BOTTOM BAR: total + add to cart -->
<div class="controller-bottom-bar">
<div class="nav-amount-block">
<div class="nav-amount-label" data-i18n="totalLabel">الإجمالي</div>
<div class="nav-amount-value" id="summaryAmount">د.ب 0.00</div>
</div>
<button class="add-to-cart-btn" data-i18n="addToCart" id="addToCartBtn">
        <span class="cart-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <circle cx="9" cy="20" r="1.8"></circle>
            <circle cx="18" cy="20" r="1.8"></circle>
            <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h8.5a2 2 0 0 0 2-1.5l1.6-7.5H6.2"></path>
          </svg>
        </span>
        <span class="add-label">أضِف إلى السلة</span>
        <span class="add-amount" id="summaryAmountAlt">د.ب 0.00</span>
      </button>
</div>
</div>
<div class="part-tooltip" id="partTooltip"></div>



`,hg=`


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
        navPremade: "تصاميم جاهزة",
        navContact: "تواصل معنا",
        navBuildCta: "صمّم ذراعك الآن",
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
        navPremade: "Premade controllers",
        navContact: "Contact",
        navBuildCta: "Build your own",
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
    const addToCartHome = addToCartBtn ? { parent: addToCartBtn.parentElement, next: addToCartBtn.nextSibling } : null;

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

    const navLangToggle = document.getElementById("langToggle");
    const mobileLangToggle = document.getElementById("mobileLangToggle");
    const navMenuBtn = document.querySelector(".nav-menu-btn");
    const mobileNavOverlay = document.getElementById("mobileNavOverlay");
    const mobileNavDrawer = document.getElementById("mobileNavDrawer");
    const langSwitchBtn = document.getElementById("langSwitchBtn");
    const configuratorControls = document.getElementById("configuratorControls");
    const panelButtons = configuratorControls ? configuratorControls.querySelectorAll("[data-panel]") : [];
    const flipControlBtn = document.getElementById("flipControlBtn");
    const zohoLoadingOverlay = document.getElementById("zohoLoadingOverlay");
    const mobileOptionsDrawer = document.getElementById("mobileOptionsDrawer");
    const mobileOptionsGrid = document.getElementById("mobileOptionsGrid");
    const mobileOptionsTabs = mobileOptionsDrawer ? mobileOptionsDrawer.querySelectorAll(".mobile-options-tab") : [];
    const mobileSelectedPart = document.getElementById("mobileSelectedPart");
    const mobileSelectedPartImg = mobileSelectedPart ? mobileSelectedPart.querySelector("img") : null;
    const mobileQuery = window.matchMedia("(max-width: 900px)");
    let currentPanel = "options";
    let mobileDrawerOptions = [];
    let mobileDrawerColors = [];
    let showMobileDrawer = false;

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
      if (isMobileLayout()) {
        setMobileDrawerVisible(false);
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
      setMobileDrawerVisible(false);
    }

    function setMobileActionBar(isMobile) {
      if (!configuratorControls || !addToCartBtn || !addToCartHome) return;
      if (isMobile) {
        if (!configuratorControls.contains(addToCartBtn)) {
          configuratorControls.appendChild(addToCartBtn);
        }
      } else {
        if (addToCartBtn.parentElement !== addToCartHome.parent) {
          if (addToCartHome.next && addToCartHome.next.parentNode === addToCartHome.parent) {
            addToCartHome.parent.insertBefore(addToCartBtn, addToCartHome.next);
          } else {
            addToCartHome.parent.appendChild(addToCartBtn);
          }
        }
      }
    }

    function setMobileDrawerTab(tab) {
      selectionPaletteMode = tab;
      updateMobileOptionsDrawer();
    }

    function setMobileDrawerVisible(visible) {
      showMobileDrawer = visible;
      document.body.classList.toggle("mobile-options-open", visible);
      updateMobileOptionsDrawer();
    }

    function updateMobileSelectedPartBadge() {
      if (!mobileSelectedPart || !mobileSelectedPartImg) return;
      if (!isMobileLayout() || !showMobileDrawer || !selectedPartId) {
        mobileSelectedPart.style.display = "none";
        return;
      }
      const part = ALL_PARTS.find(p => p.id === selectedPartId);
      const icon = part && part.icon ? part.icon : "/assets/icons/shells.png";
      mobileSelectedPartImg.src = icon;
      mobileSelectedPartImg.alt = getPartLabel(selectedPartId);
      mobileSelectedPart.style.display = "flex";
      mobileSelectedPart.setAttribute("aria-label", getPartLabel(selectedPartId));
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

    if (mobileSelectedPart) {
      mobileSelectedPart.addEventListener("click", () => {
        if (!isMobileLayout() || !selectedPartId) return;
        setMobileDrawerVisible(true);
        openColorPanelForPart(selectedPartId);
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
        if (btn.dataset.action === "flip") {
          setSide(currentSide === "front" ? "back" : "front");
          playClick();
          return;
        }
        const panel = btn.dataset.panel;
        if (panel) setPanel(panel);
      });

      if (isMobileLayout()) {
        setPanel(currentPanel);
        setMobileActionBar(true);
      } else {
        disableMobilePanels();
        setMobileActionBar(false);
      }

      if (mobileQuery && mobileQuery.addEventListener) {
        mobileQuery.addEventListener("change", (e) => {
          if (e.matches) {
            setPanel(currentPanel);
            setMobileActionBar(true);
          } else {
            disableMobilePanels();
            setMobileActionBar(false);
          }
        });
      } else if (mobileQuery && mobileQuery.addListener) {
        mobileQuery.addListener((e) => {
          if (e.matches) {
            setPanel(currentPanel);
            setMobileActionBar(true);
          } else {
            disableMobilePanels();
            setMobileActionBar(false);
          }
        });
      }
    }

    function updateNavLangLabel() {
      const label = currentLang === "ar" ? "EN" : "AR";
      if (navLangToggle) navLangToggle.textContent = label;
      if (mobileLangToggle) mobileLangToggle.textContent = label;
    }

    function toggleLanguage() {
      currentLang = currentLang === "ar" ? "en" : "ar";
      applyLanguage();
    }

    if (navLangToggle) {
      navLangToggle.addEventListener("click", toggleLanguage);
    }

    if (mobileLangToggle) {
      mobileLangToggle.addEventListener("click", toggleLanguage);
    }

    function setMobileNavOpen(isOpen) {
      if (!mobileNavOverlay || !mobileNavDrawer) return;
      mobileNavOverlay.classList.toggle("open", isOpen);
      mobileNavDrawer.classList.toggle("open", isOpen);
      document.body.classList.toggle("mobile-nav-open", isOpen);
      if (navMenuBtn) {
        navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    }

    if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
      navMenuBtn.addEventListener("click", () => {
        const isOpen = mobileNavDrawer.classList.contains("open");
        setMobileNavOpen(!isOpen);
      });
      mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
      mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("click", () => setMobileNavOpen(false));
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
      if (isMobileLayout()) {
        setMobileDrawerVisible(false);
      }

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
      if (isMobileLayout()) {
        setMobileDrawerVisible(false);
      }
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
      if (!showMobileDrawer || !isMobileLayout() || !selectedPartId) {
        mobileOptionsDrawer.style.display = "none";
        updateMobileSelectedPartBadge();
        return;
      }

      const hasOptions = mobileDrawerOptions && mobileDrawerOptions.length;
      const hasColors = mobileDrawerColors && mobileDrawerColors.length;
      if (!hasOptions && !hasColors) {
        mobileOptionsDrawer.style.display = "none";
        updateMobileSelectedPartBadge();
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
      updateMobileSelectedPartBadge();
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
      updateFlipControl();

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
        if (isMobileLayout()) {
          setMobileDrawerVisible(true);
        }
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
      if (isMobileLayout()) {
        setMobileDrawerVisible(true);
      }
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
      if (addToCartTextEl) {
        const labelEl = addToCartTextEl.querySelector(".add-label");
        if (labelEl) labelEl.textContent = t("addToCart");
        else addToCartTextEl.textContent = t("addToCart");
      }

      const loadingTextEl = document.querySelector("[data-i18n='loadingConfigurator']");
      if (loadingTextEl) loadingTextEl.textContent = t("loadingConfigurator");

      document.querySelectorAll("[data-i18n='navPremade']").forEach(el => {
        el.textContent = t("navPremade");
      });
      document.querySelectorAll("[data-i18n='navContact']").forEach(el => {
        el.textContent = t("navContact");
      });
      document.querySelectorAll("[data-i18n='navBuildCta']").forEach(el => {
        el.textContent = t("navBuildCta");
      });

      if (langSwitchBtn) {
        const labelEl = langSwitchBtn.querySelector("[data-i18n='chooseLanguage']");
        const targetLang = currentLang === "ar" ? "en" : "ar";
        if (labelEl) labelEl.textContent = targetLang.toUpperCase();
        else langSwitchBtn.textContent = targetLang.toUpperCase();
        langSwitchBtn.dataset.lang = currentLang === "ar" ? "en" : "ar";
        langSwitchBtn.setAttribute("aria-label", t("chooseLanguage"));
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
      updateNavLangLabel();
      updateFlipControl();

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

    function updateFlipControl() {
      if (!flipControlBtn) return;
      const label = currentSide === "front" ? t("front") : t("back");
      flipControlBtn.setAttribute("aria-label", label);
      flipControlBtn.classList.toggle("is-back", currentSide === "back");
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
  

`;function vg(){return P.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=hg,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),N.jsx("div",{className:"configurator-page",children:N.jsx("div",{dangerouslySetInnerHTML:{__html:mg}})})}const gg=`


<canvas id="bgCanvas"></canvas>
 TOP NAV 
<div class="top-nav">
<div class="nav-logo">
<a class="nav-left" href="index.html">
<div class="nav-logo-mark"></div>
<div class="nav-page-title" data-i18n="cartTitle">سلة المشتريات</div>
</a>
</div>
<button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
<span></span>
<span></span>
<span></span>
</button>
<div class="nav-right">
<a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
<a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
<a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
<button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
</div>
<div class="nav-summary">
<div class="nav-amount-block">
<div class="nav-amount-label" data-i18n="totalLabel">الإجمالي</div>
<div class="nav-amount-value" id="navTotal">د.ب 0.00</div>
</div>
<button class="checkout-nav-btn" data-i18n="checkoutCta" id="navCheckoutBtn">إتمام الشراء</button>
</div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
<a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
<a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
<a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
<button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
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



`,yg=`


    const CART_KEY = "ezCart";

    // ---------- I18N ----------
    const i18n = {
      ar: {
        cartTitle: "سلة المشتريات",
        summaryTitle: "الملخص",
        cartEmpty: "السلة فارغة حاليًا. يمكنك تخصيص متحكم جديد من صفحة التخصيص.",
        navPremade: "تصاميم جاهزة",
        navContact: "تواصل معنا",
        navBuildCta: "صمّم ذراعك الآن",
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
        navPremade: "Premade controllers",
        navContact: "Contact",
        navBuildCta: "Build your own",
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
    const navLangToggle = document.getElementById("langToggle");
    const mobileLangToggle = document.getElementById("mobileLangToggle");
    const navMenuBtn = document.querySelector(".nav-menu-btn");
    const mobileNavOverlay = document.getElementById("mobileNavOverlay");
    const mobileNavDrawer = document.getElementById("mobileNavDrawer");

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

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = t(key);
      });

      renderCart();
      updateNavLangLabel();
    }

    function updateNavLangLabel() {
      const label = currentLang === "ar" ? "EN" : "AR";
      if (navLangToggle) navLangToggle.textContent = label;
      if (mobileLangToggle) mobileLangToggle.textContent = label;
    }

    function toggleLanguage() {
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("ez_lang", currentLang);
      applyLanguage();
    }

    if (navLangToggle) {
      navLangToggle.addEventListener("click", toggleLanguage);
    }

    if (mobileLangToggle) {
      mobileLangToggle.addEventListener("click", toggleLanguage);
    }

    function setMobileNavOpen(isOpen) {
      if (!mobileNavOverlay || !mobileNavDrawer) return;
      mobileNavOverlay.classList.toggle("open", isOpen);
      mobileNavDrawer.classList.toggle("open", isOpen);
      document.body.classList.toggle("mobile-nav-open", isOpen);
      if (navMenuBtn) {
        navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    }

    if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
      navMenuBtn.addEventListener("click", () => {
        const isOpen = mobileNavDrawer.classList.contains("open");
        setMobileNavOpen(!isOpen);
      });
      mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
      mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("click", () => setMobileNavOpen(false));
      });
    }

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
  

`;function wg(){return P.useEffect(()=>{const e=document.createElement("script");return e.textContent=yg,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),N.jsx("div",{className:"cart-page",children:N.jsx("div",{dangerouslySetInnerHTML:{__html:gg}})})}const Eg=`


<canvas id="bgCanvas"></canvas>
 TOP NAV 
<div class="top-nav">
<div class="nav-logo">
<a class="nav-left" href="index.html">
<div class="nav-logo-mark"></div>
<div class="nav-page-title" data-i18n="checkoutTitle">إتمام الشراء</div>
</a>
</div>
<button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
<span></span>
<span></span>
<span></span>
</button>
<div class="nav-right">
<a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
<a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
<a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
<button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
</div>
<div class="nav-summary">
<div class="nav-amount-block">
<div class="nav-amount-label" data-i18n="totalLabel">الإجمالي</div>
<div class="nav-amount-value" id="navTotal">د.ب 0.00</div>
</div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
<a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
<a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
<a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
<button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
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



`,bg=`


    const CART_KEY = "ezCart";

    const i18n = {
      ar: {
        checkoutTitle: "إتمام الشراء",
        totalLabel: "الإجمالي",
        navPremade: "تصاميم جاهزة",
        navContact: "تواصل معنا",
        navBuildCta: "صمّم ذراعك الآن",
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
        navPremade: "Premade controllers",
        navContact: "Contact",
        navBuildCta: "Build your own",
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
    const navLangToggle = document.getElementById("langToggle");
    const mobileLangToggle = document.getElementById("mobileLangToggle");
    const navMenuBtn = document.querySelector(".nav-menu-btn");
    const mobileNavOverlay = document.getElementById("mobileNavOverlay");
    const mobileNavDrawer = document.getElementById("mobileNavDrawer");

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
      updateNavLangLabel();
    }

    function updateNavLangLabel() {
      const label = currentLang === "ar" ? "EN" : "AR";
      if (navLangToggle) navLangToggle.textContent = label;
      if (mobileLangToggle) mobileLangToggle.textContent = label;
    }

    function toggleLanguage() {
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("ez_lang", currentLang);
      applyLanguage();
    }

    if (navLangToggle) {
      navLangToggle.addEventListener("click", toggleLanguage);
    }

    if (mobileLangToggle) {
      mobileLangToggle.addEventListener("click", toggleLanguage);
    }

    function setMobileNavOpen(isOpen) {
      if (!mobileNavOverlay || !mobileNavDrawer) return;
      mobileNavOverlay.classList.toggle("open", isOpen);
      mobileNavDrawer.classList.toggle("open", isOpen);
      document.body.classList.toggle("mobile-nav-open", isOpen);
      if (navMenuBtn) {
        navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    }

    if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
      navMenuBtn.addEventListener("click", () => {
        const isOpen = mobileNavDrawer.classList.contains("open");
        setMobileNavOpen(!isOpen);
      });
      mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
      mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("click", () => setMobileNavOpen(false));
      });
    }

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
  

`;function Sg(){return P.useEffect(()=>{const e=document.createElement("script");return e.textContent=bg,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),N.jsx("div",{className:"checkout-page",children:N.jsx("div",{dangerouslySetInnerHTML:{__html:Eg}})})}const kg=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">الدفع (تجريبي)</div>
    </a>
  </div>
  <button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="nav-right">
    <a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
    <a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
    <a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
    <button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:540px; width:100%; text-align:center;">
    <div class="card-title">الدفع (تجريبي)</div>
    <div id="paymentDetails" style="margin:10px 0; font-size:0.95rem; opacity:0.9;"></div>
    <button class="place-order-btn" id="payNowBtn" type="button">Pay Now</button>
    <div id="paymentStatus" style="margin-top:12px; font-size:0.9rem; opacity:0.85;"></div>
  </div>
</div>
`,Cg=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  const navText = {
    ar: {
      navPremade: "تصاميم جاهزة",
      navContact: "تواصل معنا",
      navBuildCta: "صمّم ذراعك الآن"
    },
    en: {
      navPremade: "Premade controllers",
      navContact: "Contact",
      navBuildCta: "Build your own"
    }
  };

  function updateNavLabels() {
    const labels = navText[navLang] || navText.ar;
    document.querySelectorAll("[data-i18n='navPremade']").forEach(el => {
      el.textContent = labels.navPremade;
    });
    document.querySelectorAll("[data-i18n='navContact']").forEach(el => {
      el.textContent = labels.navContact;
    });
    document.querySelectorAll("[data-i18n='navBuildCta']").forEach(el => {
      el.textContent = labels.navBuildCta;
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    updateNavLabels();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);

  function setMobileNavOpen(isOpen) {
    if (!mobileNavOverlay || !mobileNavDrawer) return;
    mobileNavOverlay.classList.toggle("open", isOpen);
    mobileNavDrawer.classList.toggle("open", isOpen);
    document.body.classList.toggle("mobile-nav-open", isOpen);
    if (navMenuBtn) {
      navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  }

  if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
    navMenuBtn.addEventListener("click", () => {
      const isOpen = mobileNavDrawer.classList.contains("open");
      setMobileNavOpen(!isOpen);
    });
    mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
    mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => setMobileNavOpen(false));
    });
  }

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
`;function Lg(){return P.useEffect(()=>{const e=document.createElement("script");return e.textContent=Cg,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:kg}})}const xg=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">تأكيد الدفع</div>
    </a>
  </div>
  <button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="nav-right">
    <a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
    <a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
    <a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
    <button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:480px; width:100%; text-align:center;">
    <div class="card-title">تأكيد الدفع</div>
    <div id="confirmStatus" style="font-size:1rem; margin:10px 0;">Payment Confirmed</div>
    <button class="place-order-btn" id="goSummaryBtn" type="button">Go to Order Summary</button>
  </div>
</div>
`,Pg=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  const navText = {
    ar: {
      navPremade: "تصاميم جاهزة",
      navContact: "تواصل معنا",
      navBuildCta: "صمّم ذراعك الآن"
    },
    en: {
      navPremade: "Premade controllers",
      navContact: "Contact",
      navBuildCta: "Build your own"
    }
  };

  function updateNavLabels() {
    const labels = navText[navLang] || navText.ar;
    document.querySelectorAll("[data-i18n='navPremade']").forEach(el => {
      el.textContent = labels.navPremade;
    });
    document.querySelectorAll("[data-i18n='navContact']").forEach(el => {
      el.textContent = labels.navContact;
    });
    document.querySelectorAll("[data-i18n='navBuildCta']").forEach(el => {
      el.textContent = labels.navBuildCta;
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    updateNavLabels();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);

  function setMobileNavOpen(isOpen) {
    if (!mobileNavOverlay || !mobileNavDrawer) return;
    mobileNavOverlay.classList.toggle("open", isOpen);
    mobileNavDrawer.classList.toggle("open", isOpen);
    document.body.classList.toggle("mobile-nav-open", isOpen);
    if (navMenuBtn) {
      navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  }

  if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
    navMenuBtn.addEventListener("click", () => {
      const isOpen = mobileNavDrawer.classList.contains("open");
      setMobileNavOpen(!isOpen);
    });
    mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
    mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => setMobileNavOpen(false));
    });
  }

  const btn = document.getElementById("goSummaryBtn");
  const statusEl = document.getElementById("confirmStatus");
  btn.addEventListener("click", () => window.location.href = "/order-summary");
  statusEl.textContent = "Payment Confirmed";
`;function Tg(){return P.useEffect(()=>{const e=document.createElement("script");return e.textContent=Pg,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:xg}})}const Ng=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">ملخص الطلب</div>
    </a>
  </div>
  <button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="nav-right">
    <a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
    <a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
    <a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
    <button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:640px; width:100%;">
    <div class="card-title">ملخص الطلب</div>
    <div id="orderStatus" style="margin-bottom:8px;"></div>
    <div id="orderItems"></div>
    <div id="orderTotals" style="margin-top:10px; font-weight:700;"></div>
  </div>
</div>
`,_g=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  const navText = {
    ar: {
      navPremade: "تصاميم جاهزة",
      navContact: "تواصل معنا",
      navBuildCta: "صمّم ذراعك الآن"
    },
    en: {
      navPremade: "Premade controllers",
      navContact: "Contact",
      navBuildCta: "Build your own"
    }
  };

  function updateNavLabels() {
    const labels = navText[navLang] || navText.ar;
    document.querySelectorAll("[data-i18n='navPremade']").forEach(el => {
      el.textContent = labels.navPremade;
    });
    document.querySelectorAll("[data-i18n='navContact']").forEach(el => {
      el.textContent = labels.navContact;
    });
    document.querySelectorAll("[data-i18n='navBuildCta']").forEach(el => {
      el.textContent = labels.navBuildCta;
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    updateNavLabels();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);

  function setMobileNavOpen(isOpen) {
    if (!mobileNavOverlay || !mobileNavDrawer) return;
    mobileNavOverlay.classList.toggle("open", isOpen);
    mobileNavDrawer.classList.toggle("open", isOpen);
    document.body.classList.toggle("mobile-nav-open", isOpen);
    if (navMenuBtn) {
      navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  }

  if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
    navMenuBtn.addEventListener("click", () => {
      const isOpen = mobileNavDrawer.classList.contains("open");
      setMobileNavOpen(!isOpen);
    });
    mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
    mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => setMobileNavOpen(false));
    });
  }

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
`;function Og(){return P.useEffect(()=>{const e=document.createElement("script");return e.textContent=_g,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:Ng}})}const Bg=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">تتبع الطلب</div>
    </a>
  </div>
  <button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="nav-right">
    <a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
    <a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
    <a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
    <button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
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
`,Ig=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  const navText = {
    ar: {
      navPremade: "تصاميم جاهزة",
      navContact: "تواصل معنا",
      navBuildCta: "صمّم ذراعك الآن"
    },
    en: {
      navPremade: "Premade controllers",
      navContact: "Contact",
      navBuildCta: "Build your own"
    }
  };

  function updateNavLabels() {
    const labels = navText[navLang] || navText.ar;
    document.querySelectorAll("[data-i18n='navPremade']").forEach(el => {
      el.textContent = labels.navPremade;
    });
    document.querySelectorAll("[data-i18n='navContact']").forEach(el => {
      el.textContent = labels.navContact;
    });
    document.querySelectorAll("[data-i18n='navBuildCta']").forEach(el => {
      el.textContent = labels.navBuildCta;
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    updateNavLabels();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);

  function setMobileNavOpen(isOpen) {
    if (!mobileNavOverlay || !mobileNavDrawer) return;
    mobileNavOverlay.classList.toggle("open", isOpen);
    mobileNavDrawer.classList.toggle("open", isOpen);
    document.body.classList.toggle("mobile-nav-open", isOpen);
    if (navMenuBtn) {
      navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  }

  if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
    navMenuBtn.addEventListener("click", () => {
      const isOpen = mobileNavDrawer.classList.contains("open");
      setMobileNavOpen(!isOpen);
    });
    mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
    mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => setMobileNavOpen(false));
    });
  }

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
`;function Rg(){return P.useEffect(()=>{const e=document.createElement("script");return e.textContent=Ig,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:Bg}})}const Mg=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">POS</div>
    </a>
  </div>
  <button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="nav-right">
    <a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
    <a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
    <a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
    <button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
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
`,Dg=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  const navText = {
    ar: {
      navPremade: "تصاميم جاهزة",
      navContact: "تواصل معنا",
      navBuildCta: "صمّم ذراعك الآن"
    },
    en: {
      navPremade: "Premade controllers",
      navContact: "Contact",
      navBuildCta: "Build your own"
    }
  };

  function updateNavLabels() {
    const labels = navText[navLang] || navText.ar;
    document.querySelectorAll("[data-i18n='navPremade']").forEach(el => {
      el.textContent = labels.navPremade;
    });
    document.querySelectorAll("[data-i18n='navContact']").forEach(el => {
      el.textContent = labels.navContact;
    });
    document.querySelectorAll("[data-i18n='navBuildCta']").forEach(el => {
      el.textContent = labels.navBuildCta;
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    updateNavLabels();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);

  function setMobileNavOpen(isOpen) {
    if (!mobileNavOverlay || !mobileNavDrawer) return;
    mobileNavOverlay.classList.toggle("open", isOpen);
    mobileNavDrawer.classList.toggle("open", isOpen);
    document.body.classList.toggle("mobile-nav-open", isOpen);
    if (navMenuBtn) {
      navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  }

  if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
    navMenuBtn.addEventListener("click", () => {
      const isOpen = mobileNavDrawer.classList.contains("open");
      setMobileNavOpen(!isOpen);
    });
    mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
    mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => setMobileNavOpen(false));
    });
  }

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
`;function Ag(){return P.useEffect(()=>{const e=document.createElement("script");return e.textContent=Dg,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),N.jsx("div",{dangerouslySetInnerHTML:{__html:Mg}})}function zg(){return N.jsxs(Xv,{children:[N.jsx(pt,{path:"/",element:N.jsx(pg,{})}),N.jsx(pt,{path:"/configurator",element:N.jsx(vg,{})}),N.jsx(pt,{path:"/cart",element:N.jsx(wg,{})}),N.jsx(pt,{path:"/checkout",element:N.jsx(Sg,{})}),N.jsx(pt,{path:"/payment",element:N.jsx(Lg,{})}),N.jsx(pt,{path:"/payment/confirmation",element:N.jsx(Tg,{})}),N.jsx(pt,{path:"/order-summary",element:N.jsx(Og,{})}),N.jsx(pt,{path:"/trackorder",element:N.jsx(Rg,{})}),N.jsx(pt,{path:"/pos",element:N.jsx(Ag,{})}),N.jsx(pt,{path:"*",element:N.jsx(Yv,{to:"/",replace:!0})})]})}const Fg=tg([{path:"/*",element:N.jsx(zg,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});No.createRoot(document.getElementById("root")).render(N.jsx(cg,{router:Fg}));

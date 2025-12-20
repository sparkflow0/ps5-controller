function Ec(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sc={exports:{}},Dl={},Lc={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),dp=Symbol.for("react.portal"),fp=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),mp=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),bp=Symbol.for("react.memo"),kp=Symbol.for("react.lazy"),Vs=Symbol.iterator;function Ep(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var Tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,xc={};function vr(e,t,n){this.props=e,this.context=t,this.refs=xc,this.updater=n||Tc}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=vr.prototype;function Ii(e,t,n){this.props=e,this.context=t,this.refs=xc,this.updater=n||Tc}var Oi=Ii.prototype=new Pc;Oi.constructor=Ii;Cc(Oi,vr.prototype);Oi.isPureReactComponent=!0;var Ws=Array.isArray,_c=Object.prototype.hasOwnProperty,Bi={current:null},Nc={key:!0,ref:!0,__self:!0,__source:!0};function Ic(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)_c.call(t,r)&&!Nc.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:va,type:e,key:l,ref:o,props:a,_owner:Bi.current}}function wp(e,t){return{$$typeof:va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ri(e){return typeof e=="object"&&e!==null&&e.$$typeof===va}function Sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gs=/\/+/g;function ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sp(""+e.key):t.toString(36)}function Ya(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case va:case dp:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ao(o,0):r,Ws(a)?(n="",e!=null&&(n=e.replace(Gs,"$&/")+"/"),Ya(a,t,n,"",function(u){return u})):a!=null&&(Ri(a)&&(a=wp(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Gs,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Ws(e))for(var i=0;i<e.length;i++){l=e[i];var s=r+ao(l,i);o+=Ya(l,t,n,s,a)}else if(s=Ep(e),typeof s=="function")for(e=s.call(e),i=0;!(l=e.next()).done;)l=l.value,s=r+ao(l,i++),o+=Ya(l,t,n,s,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Oa(e,t,n){if(e==null)return e;var r=[],a=0;return Ya(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Za={transition:null},Tp={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Za,ReactCurrentOwner:Bi};function Oc(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Oa,forEach:function(e,t,n){Oa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oa(e,function(){t++}),t},toArray:function(e){return Oa(e,function(t){return t})||[]},only:function(e){if(!Ri(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=vr;K.Fragment=fp;K.Profiler=mp;K.PureComponent=Ii;K.StrictMode=pp;K.Suspense=yp;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;K.act=Oc;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Bi.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)_c.call(t,s)&&!Nc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:va,type:e.type,key:a,ref:l,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hp,_context:e},e.Consumer=e};K.createElement=Ic;K.createFactory=function(e){var t=Ic.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:vp,render:e}};K.isValidElement=Ri;K.lazy=function(e){return{$$typeof:kp,_payload:{_status:-1,_result:e},_init:Lp}};K.memo=function(e,t){return{$$typeof:bp,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Za.transition;Za.transition={};try{e()}finally{Za.transition=t}};K.unstable_act=Oc;K.useCallback=function(e,t){return Ue.current.useCallback(e,t)};K.useContext=function(e){return Ue.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ue.current.useEffect(e,t)};K.useId=function(){return Ue.current.useId()};K.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ue.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};K.useRef=function(e){return Ue.current.useRef(e)};K.useState=function(e){return Ue.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ue.current.useTransition()};K.version="18.3.1";Lc.exports=K;var x=Lc.exports;const Cp=wc(x),xp=Ec({__proto__:null,default:Cp},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=x,_p=Symbol.for("react.element"),Np=Symbol.for("react.fragment"),Ip=Object.prototype.hasOwnProperty,Op=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bp={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ip.call(t,r)&&!Bp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:_p,type:e,key:l,ref:o,props:a,_owner:Op.current}}Dl.Fragment=Np;Dl.jsx=Bc;Dl.jsxs=Bc;Sc.exports=Dl;var P=Sc.exports,Ro={},Rc={exports:{}},lt={},Mc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,W){var U=I.length;I.push(W);e:for(;0<U;){var q=U-1>>>1,Z=I[q];if(0<a(Z,W))I[q]=W,I[U]=Z,U=q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var W=I[0],U=I.pop();if(U!==W){I[0]=U;e:for(var q=0,Z=I.length,$e=Z>>>1;q<$e;){var Le=2*(q+1)-1,V=I[Le],X=Le+1,oe=I[X];if(0>a(V,U))X<Z&&0>a(oe,V)?(I[q]=oe,I[X]=U,q=X):(I[q]=V,I[Le]=U,q=Le);else if(X<Z&&0>a(oe,U))I[q]=oe,I[X]=U,q=X;else break e}}return W}function a(I,W){var U=I.sortIndex-W.sortIndex;return U!==0?U:I.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var s=[],u=[],f=1,d=null,m=3,b=!1,E=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=I)r(u),W.sortIndex=W.expirationTime,t(s,W);else break;W=n(u)}}function S(I){if(w=!1,g(I),!E)if(n(s)!==null)E=!0,Ge(C);else{var W=n(u);W!==null&&wt(S,W.startTime-I)}}function C(I,W){E=!1,w&&(w=!1,h(L),L=-1),b=!0;var U=m;try{for(g(W),d=n(s);d!==null&&(!(d.expirationTime>W)||I&&!te());){var q=d.callback;if(typeof q=="function"){d.callback=null,m=d.priorityLevel;var Z=q(d.expirationTime<=W);W=e.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(s)&&r(s),g(W)}else r(s);d=n(s)}if(d!==null)var $e=!0;else{var Le=n(u);Le!==null&&wt(S,Le.startTime-W),$e=!1}return $e}finally{d=null,m=U,b=!1}}var R=!1,v=null,L=-1,j=5,O=-1;function te(){return!(e.unstable_now()-O<j)}function le(){if(v!==null){var I=e.unstable_now();O=I;var W=!0;try{W=v(!0,I)}finally{W?pe():(R=!1,v=null)}}else R=!1}var pe;if(typeof c=="function")pe=function(){c(le)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,We=ve.port2;ve.port1.onmessage=le,pe=function(){We.postMessage(null)}}else pe=function(){N(le,0)};function Ge(I){v=I,R||(R=!0,pe())}function wt(I,W){L=N(function(){I(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){E||b||(E=!0,Ge(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var U=m;m=W;try{return I()}finally{m=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var U=m;m=I;try{return W()}finally{m=U}},e.unstable_scheduleCallback=function(I,W,U){var q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?q+U:q):U=q,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=U+Z,I={id:f++,callback:W,priorityLevel:I,startTime:U,expirationTime:Z,sortIndex:-1},U>q?(I.sortIndex=U,t(u,I),n(s)===null&&I===n(u)&&(w?(h(L),L=-1):w=!0,wt(S,U-q))):(I.sortIndex=Z,t(s,I),E||b||(E=!0,Ge(C))),I},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(I){var W=m;return function(){var U=m;m=W;try{return I.apply(this,arguments)}finally{m=U}}}})(Dc);Mc.exports=Dc;var Rp=Mc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=x,at=Rp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ac=new Set,Zr={};function Fn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)Ac.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mo=Object.prototype.hasOwnProperty,Dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$s={},Qs={};function Ap(e){return Mo.call(Qs,e)?!0:Mo.call($s,e)?!1:Dp.test(e)?Qs[e]=!0:($s[e]=!0,!1)}function Fp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zp(e,t,n,r){if(t===null||typeof t>"u"||Fp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mi=/[\-:]([a-z])/g;function Di(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mi,Di);Me[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mi,Di);Me[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mi,Di);Me[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ai(e,t,n,r){var a=Me.hasOwnProperty(t)?Me[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zp(t,n,a,r)&&(n=null),r||a===null?Ap(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Fi=Symbol.for("react.strict_mode"),Do=Symbol.for("react.profiler"),Fc=Symbol.for("react.provider"),zc=Symbol.for("react.context"),zi=Symbol.for("react.forward_ref"),Ao=Symbol.for("react.suspense"),Fo=Symbol.for("react.suspense_list"),ji=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),jc=Symbol.for("react.offscreen"),qs=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,lo;function Ar(e){if(lo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);lo=t&&t[1]||""}return`
`+lo+e}var oo=!1;function io(e,t){if(!e||oo)return"";oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||a[o]!==l[i]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=i);break}}}finally{oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function jp(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=io(e.type,!1),e;case 11:return e=io(e.type.render,!1),e;case 1:return e=io(e.type,!0),e;default:return""}}function zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case $n:return"Portal";case Do:return"Profiler";case Fi:return"StrictMode";case Ao:return"Suspense";case Fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zc:return(e.displayName||"Context")+".Consumer";case Fc:return(e._context.displayName||"Context")+".Provider";case zi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ji:return t=e.displayName||null,t!==null?t:zo(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return zo(e(t))}catch{}}return null}function Hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zo(t);case 8:return t===Fi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Up(e){var t=Hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ra(e){e._valueTracker||(e._valueTracker=Up(e))}function Uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jo(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ks(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vc(e,t){t=t.checked,t!=null&&Ai(e,"checked",t,!1)}function Ho(e,t){Vc(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Uo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Uo(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Uo(e,t,n){(t!=="number"||ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Fr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function Wc(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ma,$c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vp=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){Vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function Qc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Qc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Wp=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Go(e,t){if(t){if(Wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function $o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qo=null;function Hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qo=null,lr=null,or=null;function Js(e){if(e=ka(e)){if(typeof qo!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Hl(t),qo(e.stateNode,e.type,t))}}function Kc(e){lr?or?or.push(e):or=[e]:lr=e}function Yc(){if(lr){var e=lr,t=or;if(or=lr=null,Js(e),t)for(e=0;e<t.length;e++)Js(t[e])}}function Zc(e,t){return e(t)}function Xc(){}var so=!1;function Jc(e,t,n){if(so)return e(t,n);so=!0;try{return Zc(e,t,n)}finally{so=!1,(lr!==null||or!==null)&&(Xc(),Yc())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ko=!1;if(zt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{Ko=!1}function Gp(e,t,n,r,a,l,o,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Vr=!1,cl=null,dl=!1,Yo=null,$p={onError:function(e){Vr=!0,cl=e}};function Qp(e,t,n,r,a,l,o,i,s){Vr=!1,cl=null,Gp.apply($p,arguments)}function qp(e,t,n,r,a,l,o,i,s){if(Qp.apply(this,arguments),Vr){if(Vr){var u=cl;Vr=!1,cl=null}else throw Error(_(198));dl||(dl=!0,Yo=u)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eu(e){if(zn(e)!==e)throw Error(_(188))}function Kp(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return eu(a),e;if(l===r)return eu(a),t;l=l.sibling}throw Error(_(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,i=a.child;i;){if(i===n){o=!0,n=a,r=l;break}if(i===r){o=!0,r=a,n=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===n){o=!0,n=l,r=a;break}if(i===r){o=!0,r=l,n=a;break}i=i.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function td(e){return e=Kp(e),e!==null?nd(e):null}function nd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nd(e);if(t!==null)return t;e=e.sibling}return null}var rd=at.unstable_scheduleCallback,tu=at.unstable_cancelCallback,Yp=at.unstable_shouldYield,Zp=at.unstable_requestPaint,Se=at.unstable_now,Xp=at.unstable_getCurrentPriorityLevel,Ui=at.unstable_ImmediatePriority,ad=at.unstable_UserBlockingPriority,fl=at.unstable_NormalPriority,Jp=at.unstable_LowPriority,ld=at.unstable_IdlePriority,Al=null,Nt=null;function em(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:rm,tm=Math.log,nm=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(tm(e)/nm|0)|0}var Da=64,Aa=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~a;i!==0?r=zr(i):(l&=o,l!==0&&(r=zr(l)))}else o=n&~a,o!==0?r=zr(o):l!==0&&(r=zr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),a=1<<n,r|=e[n],t&=~a;return r}function am(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-bt(l),i=1<<o,s=a[o];s===-1?(!(i&n)||i&r)&&(a[o]=am(i,t)):s<=t&&(e.expiredLanes|=i),l&=~i}}function Zo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=Da;return Da<<=1,!(Da&4194240)&&(Da=64),e}function uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ya(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function om(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-bt(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function Vi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ae=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sd,Wi,ud,cd,dd,Xo=!1,Fa=[],an=null,ln=null,on=null,ea=new Map,ta=new Map,Jt=[],im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nu(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function Pr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ka(t),t!==null&&Wi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function sm(e,t,n,r,a){switch(t){case"focusin":return an=Pr(an,e,t,n,r,a),!0;case"dragenter":return ln=Pr(ln,e,t,n,r,a),!0;case"mouseover":return on=Pr(on,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return ea.set(l,Pr(ea.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,ta.set(l,Pr(ta.get(l)||null,e,t,n,r,a)),!0}return!1}function fd(e){var t=Cn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=ed(n),t!==null){e.blockedOn=t,dd(e.priority,function(){ud(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qo=r,n.target.dispatchEvent(r),Qo=null}else return t=ka(n),t!==null&&Wi(t),e.blockedOn=n,!1;t.shift()}return!0}function ru(e,t,n){Xa(e)&&n.delete(t)}function um(){Xo=!1,an!==null&&Xa(an)&&(an=null),ln!==null&&Xa(ln)&&(ln=null),on!==null&&Xa(on)&&(on=null),ea.forEach(ru),ta.forEach(ru)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,Xo||(Xo=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,um)))}function na(e){function t(a){return _r(a,e)}if(0<Fa.length){_r(Fa[0],e);for(var n=1;n<Fa.length;n++){var r=Fa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&_r(an,e),ln!==null&&_r(ln,e),on!==null&&_r(on,e),ea.forEach(t),ta.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)fd(n),n.blockedOn===null&&Jt.shift()}var ir=Vt.ReactCurrentBatchConfig,ml=!0;function cm(e,t,n,r){var a=ae,l=ir.transition;ir.transition=null;try{ae=1,Gi(e,t,n,r)}finally{ae=a,ir.transition=l}}function dm(e,t,n,r){var a=ae,l=ir.transition;ir.transition=null;try{ae=4,Gi(e,t,n,r)}finally{ae=a,ir.transition=l}}function Gi(e,t,n,r){if(ml){var a=Jo(e,t,n,r);if(a===null)ko(e,t,r,hl,n),nu(e,r);else if(sm(a,e,t,n,r))r.stopPropagation();else if(nu(e,r),t&4&&-1<im.indexOf(e)){for(;a!==null;){var l=ka(a);if(l!==null&&sd(l),l=Jo(e,t,n,r),l===null&&ko(e,t,r,hl,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else ko(e,t,r,null,n)}}var hl=null;function Jo(e,t,n,r){if(hl=null,e=Hi(r),e=Cn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hl=e,null}function pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case Ui:return 1;case ad:return 4;case fl:case Jp:return 16;case ld:return 536870912;default:return 16}default:return 16}}var tn=null,$i=null,Ja=null;function md(){if(Ja)return Ja;var e,t=$i,n=t.length,r,a="value"in tn?tn.value:tn.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return Ja=a.slice(e,1<r?1-r:void 0)}function el(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function za(){return!0}function au(){return!1}function ot(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?za:au,this.isPropagationStopped=au,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=ot(yr),ba=ge({},yr,{view:0,detail:0}),fm=ot(ba),co,fo,Nr,Fl=ge({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(co=e.screenX-Nr.screenX,fo=e.screenY-Nr.screenY):fo=co=0,Nr=e),co)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),lu=ot(Fl),pm=ge({},Fl,{dataTransfer:0}),mm=ot(pm),hm=ge({},ba,{relatedTarget:0}),po=ot(hm),gm=ge({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=ot(gm),ym=ge({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bm=ot(ym),km=ge({},yr,{data:0}),ou=ot(km),Em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sm[e])?!!t[e]:!1}function qi(){return Lm}var Tm=ge({},ba,{key:function(e){if(e.key){var t=Em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qi,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cm=ot(Tm),xm=ge({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=ot(xm),Pm=ge({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qi}),_m=ot(Pm),Nm=ge({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=ot(Nm),Om=ge({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=ot(Om),Rm=[9,13,27,32],Ki=zt&&"CompositionEvent"in window,Wr=null;zt&&"documentMode"in document&&(Wr=document.documentMode);var Mm=zt&&"TextEvent"in window&&!Wr,hd=zt&&(!Ki||Wr&&8<Wr&&11>=Wr),su=" ",uu=!1;function gd(e,t){switch(e){case"keyup":return Rm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function Dm(e,t){switch(e){case"compositionend":return vd(t);case"keypress":return t.which!==32?null:(uu=!0,su);case"textInput":return e=t.data,e===su&&uu?null:e;default:return null}}function Am(e,t){if(qn)return e==="compositionend"||!Ki&&gd(e,t)?(e=md(),Ja=$i=tn=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hd&&t.locale!=="ko"?null:t.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fm[e.type]:t==="textarea"}function yd(e,t,n,r){Kc(r),t=gl(t,"onChange"),0<t.length&&(n=new Qi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,ra=null;function zm(e){_d(e,0)}function zl(e){var t=Zn(e);if(Uc(t))return e}function jm(e,t){if(e==="change")return t}var bd=!1;if(zt){var mo;if(zt){var ho="oninput"in document;if(!ho){var du=document.createElement("div");du.setAttribute("oninput","return;"),ho=typeof du.oninput=="function"}mo=ho}else mo=!1;bd=mo&&(!document.documentMode||9<document.documentMode)}function fu(){Gr&&(Gr.detachEvent("onpropertychange",kd),ra=Gr=null)}function kd(e){if(e.propertyName==="value"&&zl(ra)){var t=[];yd(t,ra,e,Hi(e)),Jc(zm,t)}}function Hm(e,t,n){e==="focusin"?(fu(),Gr=t,ra=n,Gr.attachEvent("onpropertychange",kd)):e==="focusout"&&fu()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(ra)}function Vm(e,t){if(e==="click")return zl(t)}function Wm(e,t){if(e==="input"||e==="change")return zl(t)}function Gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Gm;function aa(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Mo.call(t,a)||!Et(e[a],t[a]))return!1}return!0}function pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mu(e,t){var n=pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pu(n)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ul(e.document)}return t}function Yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $m(e){var t=wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ed(n.ownerDocument.documentElement,n)){if(r!==null&&Yi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=mu(n,l);var o=mu(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qm=zt&&"documentMode"in document&&11>=document.documentMode,Kn=null,ei=null,$r=null,ti=!1;function hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ti||Kn==null||Kn!==ul(r)||(r=Kn,"selectionStart"in r&&Yi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&aa($r,r)||($r=r,r=gl(ei,"onSelect"),0<r.length&&(t=new Qi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},go={},Sd={};zt&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function jl(e){if(go[e])return go[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sd)return go[e]=t[n];return e}var Ld=jl("animationend"),Td=jl("animationiteration"),Cd=jl("animationstart"),xd=jl("transitionend"),Pd=new Map,gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){Pd.set(e,t),Fn(t,[e])}for(var vo=0;vo<gu.length;vo++){var yo=gu[vo],qm=yo.toLowerCase(),Km=yo[0].toUpperCase()+yo.slice(1);gn(qm,"on"+Km)}gn(Ld,"onAnimationEnd");gn(Td,"onAnimationIteration");gn(Cd,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(xd,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qp(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==l&&a.isPropagationStopped())break e;vu(a,i,u),l=s}else for(o=0;o<r.length;o++){if(i=r[o],s=i.instance,u=i.currentTarget,i=i.listener,s!==l&&a.isPropagationStopped())break e;vu(a,i,u),l=s}}}if(dl)throw e=Yo,dl=!1,Yo=null,e}function ue(e,t){var n=t[oi];n===void 0&&(n=t[oi]=new Set);var r=e+"__bubble";n.has(r)||(Nd(t,e,2,!1),n.add(r))}function bo(e,t,n){var r=0;t&&(r|=4),Nd(n,e,r,t)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function la(e){if(!e[Ha]){e[Ha]=!0,Ac.forEach(function(n){n!=="selectionchange"&&(Ym.has(n)||bo(n,!1,e),bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ha]||(t[Ha]=!0,bo("selectionchange",!1,t))}}function Nd(e,t,n,r){switch(pd(t)){case 1:var a=cm;break;case 4:a=dm;break;default:a=Gi}n=a.bind(null,t,n,e),a=void 0,!Ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ko(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;i!==null;){if(o=Cn(i),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}i=i.parentNode}}r=r.return}Jc(function(){var u=l,f=Hi(n),d=[];e:{var m=Pd.get(e);if(m!==void 0){var b=Qi,E=e;switch(e){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":b=Cm;break;case"focusin":E="focus",b=po;break;case"focusout":E="blur",b=po;break;case"beforeblur":case"afterblur":b=po;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=_m;break;case Ld:case Td:case Cd:b=vm;break;case xd:b=Im;break;case"scroll":b=fm;break;case"wheel":b=Bm;break;case"copy":case"cut":case"paste":b=bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=iu}var w=(t&4)!==0,N=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,g;c!==null;){g=c;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=Jr(c,h),S!=null&&w.push(oa(c,S,g)))),N)break;c=c.return}0<w.length&&(m=new b(m,E,null,n,f),d.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&n!==Qo&&(E=n.relatedTarget||n.fromElement)&&(Cn(E)||E[jt]))break e;if((b||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,b?(E=n.relatedTarget||n.toElement,b=u,E=E?Cn(E):null,E!==null&&(N=zn(E),E!==N||E.tag!==5&&E.tag!==6)&&(E=null)):(b=null,E=u),b!==E)){if(w=lu,S="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=iu,S="onPointerLeave",h="onPointerEnter",c="pointer"),N=b==null?m:Zn(b),g=E==null?m:Zn(E),m=new w(S,c+"leave",b,n,f),m.target=N,m.relatedTarget=g,S=null,Cn(f)===u&&(w=new w(h,c+"enter",E,n,f),w.target=g,w.relatedTarget=N,S=w),N=S,b&&E)t:{for(w=b,h=E,c=0,g=w;g;g=Wn(g))c++;for(g=0,S=h;S;S=Wn(S))g++;for(;0<c-g;)w=Wn(w),c--;for(;0<g-c;)h=Wn(h),g--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=Wn(w),h=Wn(h)}w=null}else w=null;b!==null&&yu(d,m,b,w,!1),E!==null&&N!==null&&yu(d,N,E,w,!0)}}e:{if(m=u?Zn(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var C=jm;else if(cu(m))if(bd)C=Wm;else{C=Um;var R=Hm}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Vm);if(C&&(C=C(e,u))){yd(d,C,n,f);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Uo(m,"number",m.value)}switch(R=u?Zn(u):window,e){case"focusin":(cu(R)||R.contentEditable==="true")&&(Kn=R,ei=u,$r=null);break;case"focusout":$r=ei=Kn=null;break;case"mousedown":ti=!0;break;case"contextmenu":case"mouseup":case"dragend":ti=!1,hu(d,n,f);break;case"selectionchange":if(Qm)break;case"keydown":case"keyup":hu(d,n,f)}var v;if(Ki)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else qn?gd(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(hd&&n.locale!=="ko"&&(qn||L!=="onCompositionStart"?L==="onCompositionEnd"&&qn&&(v=md()):(tn=f,$i="value"in tn?tn.value:tn.textContent,qn=!0)),R=gl(u,L),0<R.length&&(L=new ou(L,e,null,n,f),d.push({event:L,listeners:R}),v?L.data=v:(v=vd(n),v!==null&&(L.data=v)))),(v=Mm?Dm(e,n):Am(e,n))&&(u=gl(u,"onBeforeInput"),0<u.length&&(f=new ou("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=v))}_d(d,t)})}function oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Jr(e,n),l!=null&&r.unshift(oa(e,l,a)),l=Jr(e,t),l!=null&&r.push(oa(e,l,a))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yu(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,a?(s=Jr(n,l),s!=null&&o.unshift(oa(n,s,i))):a||(s=Jr(n,l),s!=null&&o.push(oa(n,s,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zm=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(Zm,`
`).replace(Xm,"")}function Ua(e,t,n){if(t=bu(t),bu(e)!==t&&n)throw Error(_(425))}function vl(){}var ni=null,ri=null;function ai(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var li=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,eh=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(th)}:li;function th(e){setTimeout(function(){throw e})}function Eo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);na(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),_t="__reactFiber$"+br,ia="__reactProps$"+br,jt="__reactContainer$"+br,oi="__reactEvents$"+br,nh="__reactListeners$"+br,rh="__reactHandles$"+br;function Cn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eu(e);e!==null;){if(n=e[_t])return n;e=Eu(e)}return t}e=n,n=e.parentNode}return null}function ka(e){return e=e[_t]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Hl(e){return e[ia]||null}var ii=[],Xn=-1;function vn(e){return{current:e}}function ce(e){0>Xn||(e.current=ii[Xn],ii[Xn]=null,Xn--)}function se(e,t){Xn++,ii[Xn]=e.current,e.current=t}var hn={},ze=vn(hn),Ye=vn(!1),On=hn;function dr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return e=e.childContextTypes,e!=null}function yl(){ce(Ye),ce(ze)}function wu(e,t,n){if(ze.current!==hn)throw Error(_(168));se(ze,t),se(Ye,n)}function Id(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(_(108,Hp(e)||"Unknown",a));return ge({},n,r)}function bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,On=ze.current,se(ze,e),se(Ye,Ye.current),!0}function Su(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Id(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,ce(Ye),ce(ze),se(ze,e)):ce(Ye),se(Ye,n)}var Mt=null,Ul=!1,wo=!1;function Od(e){Mt===null?Mt=[e]:Mt.push(e)}function ah(e){Ul=!0,Od(e)}function yn(){if(!wo&&Mt!==null){wo=!0;var e=0,t=ae;try{var n=Mt;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,Ul=!1}catch(a){throw Mt!==null&&(Mt=Mt.slice(e+1)),rd(Ui,yn),a}finally{ae=t,wo=!1}}return null}var Jn=[],er=0,kl=null,El=0,it=[],st=0,Bn=null,Dt=1,At="";function wn(e,t){Jn[er++]=El,Jn[er++]=kl,kl=e,El=t}function Bd(e,t,n){it[st++]=Dt,it[st++]=At,it[st++]=Bn,Bn=e;var r=Dt;e=At;var a=32-bt(r)-1;r&=~(1<<a),n+=1;var l=32-bt(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Dt=1<<32-bt(t)+a|n<<a|r,At=l+e}else Dt=1<<l|n<<a|r,At=e}function Zi(e){e.return!==null&&(wn(e,1),Bd(e,1,0))}function Xi(e){for(;e===kl;)kl=Jn[--er],Jn[er]=null,El=Jn[--er],Jn[er]=null;for(;e===Bn;)Bn=it[--st],it[st]=null,At=it[--st],it[st]=null,Dt=it[--st],it[st]=null}var rt=null,nt=null,fe=!1,yt=null;function Rd(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Dt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ui(e){if(fe){var t=nt;if(t){var n=t;if(!Lu(e,t)){if(si(e))throw Error(_(418));t=sn(n.nextSibling);var r=rt;t&&Lu(e,t)?Rd(r,n):(e.flags=e.flags&-4097|2,fe=!1,rt=e)}}else{if(si(e))throw Error(_(418));e.flags=e.flags&-4097|2,fe=!1,rt=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function Va(e){if(e!==rt)return!1;if(!fe)return Tu(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ai(e.type,e.memoizedProps)),t&&(t=nt)){if(si(e))throw Md(),Error(_(418));for(;t;)Rd(e,t),t=sn(t.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?sn(e.stateNode.nextSibling):null;return!0}function Md(){for(var e=nt;e;)e=sn(e.nextSibling)}function fr(){nt=rt=null,fe=!1}function Ji(e){yt===null?yt=[e]:yt.push(e)}var lh=Vt.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var i=a.refs;o===null?delete i[l]:i[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Wa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cu(e){var t=e._init;return t(e._payload)}function Dd(e){function t(h,c){if(e){var g=h.deletions;g===null?(h.deletions=[c],h.flags|=16):g.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function a(h,c){return h=fn(h,c),h.index=0,h.sibling=null,h}function l(h,c,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<c?(h.flags|=2,c):g):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,c,g,S){return c===null||c.tag!==6?(c=_o(g,h.mode,S),c.return=h,c):(c=a(c,g),c.return=h,c)}function s(h,c,g,S){var C=g.type;return C===Qn?f(h,c,g.props.children,S,g.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&Cu(C)===c.type)?(S=a(c,g.props),S.ref=Ir(h,c,g),S.return=h,S):(S=il(g.type,g.key,g.props,null,h.mode,S),S.ref=Ir(h,c,g),S.return=h,S)}function u(h,c,g,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=No(g,h.mode,S),c.return=h,c):(c=a(c,g.children||[]),c.return=h,c)}function f(h,c,g,S,C){return c===null||c.tag!==7?(c=In(g,h.mode,S,C),c.return=h,c):(c=a(c,g),c.return=h,c)}function d(h,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_o(""+c,h.mode,g),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ba:return g=il(c.type,c.key,c.props,null,h.mode,g),g.ref=Ir(h,null,c),g.return=h,g;case $n:return c=No(c,h.mode,g),c.return=h,c;case Zt:var S=c._init;return d(h,S(c._payload),g)}if(Fr(c)||Cr(c))return c=In(c,h.mode,g,null),c.return=h,c;Wa(h,c)}return null}function m(h,c,g,S){var C=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:i(h,c,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ba:return g.key===C?s(h,c,g,S):null;case $n:return g.key===C?u(h,c,g,S):null;case Zt:return C=g._init,m(h,c,C(g._payload),S)}if(Fr(g)||Cr(g))return C!==null?null:f(h,c,g,S,null);Wa(h,g)}return null}function b(h,c,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,i(c,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ba:return h=h.get(S.key===null?g:S.key)||null,s(c,h,S,C);case $n:return h=h.get(S.key===null?g:S.key)||null,u(c,h,S,C);case Zt:var R=S._init;return b(h,c,g,R(S._payload),C)}if(Fr(S)||Cr(S))return h=h.get(g)||null,f(c,h,S,C,null);Wa(c,S)}return null}function E(h,c,g,S){for(var C=null,R=null,v=c,L=c=0,j=null;v!==null&&L<g.length;L++){v.index>L?(j=v,v=null):j=v.sibling;var O=m(h,v,g[L],S);if(O===null){v===null&&(v=j);break}e&&v&&O.alternate===null&&t(h,v),c=l(O,c,L),R===null?C=O:R.sibling=O,R=O,v=j}if(L===g.length)return n(h,v),fe&&wn(h,L),C;if(v===null){for(;L<g.length;L++)v=d(h,g[L],S),v!==null&&(c=l(v,c,L),R===null?C=v:R.sibling=v,R=v);return fe&&wn(h,L),C}for(v=r(h,v);L<g.length;L++)j=b(v,h,L,g[L],S),j!==null&&(e&&j.alternate!==null&&v.delete(j.key===null?L:j.key),c=l(j,c,L),R===null?C=j:R.sibling=j,R=j);return e&&v.forEach(function(te){return t(h,te)}),fe&&wn(h,L),C}function w(h,c,g,S){var C=Cr(g);if(typeof C!="function")throw Error(_(150));if(g=C.call(g),g==null)throw Error(_(151));for(var R=C=null,v=c,L=c=0,j=null,O=g.next();v!==null&&!O.done;L++,O=g.next()){v.index>L?(j=v,v=null):j=v.sibling;var te=m(h,v,O.value,S);if(te===null){v===null&&(v=j);break}e&&v&&te.alternate===null&&t(h,v),c=l(te,c,L),R===null?C=te:R.sibling=te,R=te,v=j}if(O.done)return n(h,v),fe&&wn(h,L),C;if(v===null){for(;!O.done;L++,O=g.next())O=d(h,O.value,S),O!==null&&(c=l(O,c,L),R===null?C=O:R.sibling=O,R=O);return fe&&wn(h,L),C}for(v=r(h,v);!O.done;L++,O=g.next())O=b(v,h,L,O.value,S),O!==null&&(e&&O.alternate!==null&&v.delete(O.key===null?L:O.key),c=l(O,c,L),R===null?C=O:R.sibling=O,R=O);return e&&v.forEach(function(le){return t(h,le)}),fe&&wn(h,L),C}function N(h,c,g,S){if(typeof g=="object"&&g!==null&&g.type===Qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ba:e:{for(var C=g.key,R=c;R!==null;){if(R.key===C){if(C=g.type,C===Qn){if(R.tag===7){n(h,R.sibling),c=a(R,g.props.children),c.return=h,h=c;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&Cu(C)===R.type){n(h,R.sibling),c=a(R,g.props),c.ref=Ir(h,R,g),c.return=h,h=c;break e}n(h,R);break}else t(h,R);R=R.sibling}g.type===Qn?(c=In(g.props.children,h.mode,S,g.key),c.return=h,h=c):(S=il(g.type,g.key,g.props,null,h.mode,S),S.ref=Ir(h,c,g),S.return=h,h=S)}return o(h);case $n:e:{for(R=g.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(h,c.sibling),c=a(c,g.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=No(g,h.mode,S),c.return=h,h=c}return o(h);case Zt:return R=g._init,N(h,c,R(g._payload),S)}if(Fr(g))return E(h,c,g,S);if(Cr(g))return w(h,c,g,S);Wa(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(h,c.sibling),c=a(c,g),c.return=h,h=c):(n(h,c),c=_o(g,h.mode,S),c.return=h,h=c),o(h)):n(h,c)}return N}var pr=Dd(!0),Ad=Dd(!1),wl=vn(null),Sl=null,tr=null,es=null;function ts(){es=tr=Sl=null}function ns(e){var t=wl.current;ce(wl),e._currentValue=t}function ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Sl=e,es=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(es!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Sl===null)throw Error(_(308));tr=e,Sl.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var xn=null;function rs(e){xn===null?xn=[e]:xn.push(e)}function Fd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,rs(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ht(e,n)}return a=r.interleaved,a===null?(t.next=t,rs(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ht(e,n)}function tl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ll(e,t,n,r){var a=e.updateQueue;Xt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var s=i,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==o&&(i===null?f.firstBaseUpdate=u:i.next=u,f.lastBaseUpdate=s))}if(l!==null){var d=a.baseState;o=0,f=u=s=null,i=l;do{var m=i.lane,b=i.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var E=e,w=i;switch(m=t,b=n,w.tag){case 1:if(E=w.payload,typeof E=="function"){d=E.call(b,d,m);break e}d=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=w.payload,m=typeof E=="function"?E.call(b,d,m):E,m==null)break e;d=ge({},d,m);break e;case 2:Xt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else b={eventTime:b,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(u=f=b,s=d):f=f.next=b,o|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=d}}function Pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(_(191,a));a.call(r)}}}var Ea={},It=vn(Ea),sa=vn(Ea),ua=vn(Ea);function Pn(e){if(e===Ea)throw Error(_(174));return e}function ls(e,t){switch(se(ua,t),se(sa,e),se(It,Ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wo(t,e)}ce(It),se(It,t)}function mr(){ce(It),ce(sa),ce(ua)}function jd(e){Pn(ua.current);var t=Pn(It.current),n=Wo(t,e.type);t!==n&&(se(sa,e),se(It,n))}function os(e){sa.current===e&&(ce(It),ce(sa))}var me=vn(0);function Tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var So=[];function is(){for(var e=0;e<So.length;e++)So[e]._workInProgressVersionPrimary=null;So.length=0}var nl=Vt.ReactCurrentDispatcher,Lo=Vt.ReactCurrentBatchConfig,Rn=0,he=null,xe=null,_e=null,Cl=!1,Qr=!1,ca=0,oh=0;function De(){throw Error(_(321))}function ss(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function us(e,t,n,r,a,l){if(Rn=l,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,nl.current=e===null||e.memoizedState===null?ch:dh,e=n(r,a),Qr){l=0;do{if(Qr=!1,ca=0,25<=l)throw Error(_(301));l+=1,_e=xe=null,t.updateQueue=null,nl.current=fh,e=n(r,a)}while(Qr)}if(nl.current=xl,t=xe!==null&&xe.next!==null,Rn=0,_e=xe=he=null,Cl=!1,t)throw Error(_(300));return e}function cs(){var e=ca!==0;return ca=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?he.memoizedState=_e=e:_e=_e.next=e,_e}function ft(){if(xe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=_e===null?he.memoizedState:_e.next;if(t!==null)_e=t,xe=e;else{if(e===null)throw Error(_(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},_e===null?he.memoizedState=_e=e:_e=_e.next=e}return _e}function da(e,t){return typeof t=="function"?t(e):t}function To(e){var t=ft(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=xe,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var i=o=null,s=null,u=l;do{var f=u.lane;if((Rn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,o=r):s=s.next=d,he.lanes|=f,Mn|=f}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=i,Et(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,he.lanes|=l,Mn|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Co(e){var t=ft(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);Et(l,t.memoizedState)||(Ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Hd(){}function Ud(e,t){var n=he,r=ft(),a=t(),l=!Et(r.memoizedState,a);if(l&&(r.memoizedState=a,Ke=!0),r=r.queue,ds(Gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,fa(9,Wd.bind(null,n,r,a,t),void 0,null),Ne===null)throw Error(_(349));Rn&30||Vd(n,t,a)}return a}function Vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wd(e,t,n,r){t.value=n,t.getSnapshot=r,$d(t)&&Qd(e)}function Gd(e,t,n){return n(function(){$d(t)&&Qd(e)})}function $d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Qd(e){var t=Ht(e,1);t!==null&&kt(t,e,1,-1)}function _u(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=uh.bind(null,he,e),[t.memoizedState,e]}function fa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qd(){return ft().memoizedState}function rl(e,t,n,r){var a=Pt();he.flags|=e,a.memoizedState=fa(1|t,n,void 0,r===void 0?null:r)}function Vl(e,t,n,r){var a=ft();r=r===void 0?null:r;var l=void 0;if(xe!==null){var o=xe.memoizedState;if(l=o.destroy,r!==null&&ss(r,o.deps)){a.memoizedState=fa(t,n,l,r);return}}he.flags|=e,a.memoizedState=fa(1|t,n,l,r)}function Nu(e,t){return rl(8390656,8,e,t)}function ds(e,t){return Vl(2048,8,e,t)}function Kd(e,t){return Vl(4,2,e,t)}function Yd(e,t){return Vl(4,4,e,t)}function Zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,n){return n=n!=null?n.concat([e]):null,Vl(4,4,Zd.bind(null,t,e),n)}function fs(){}function Jd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ss(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ef(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ss(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tf(e,t,n){return Rn&21?(Et(n,t)||(n=od(),he.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function ih(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=Lo.transition;Lo.transition={};try{e(!1),t()}finally{ae=n,Lo.transition=r}}function nf(){return ft().memoizedState}function sh(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rf(e))af(t,n);else if(n=Fd(e,t,n,r),n!==null){var a=He();kt(n,e,r,a),lf(n,t,r)}}function uh(e,t,n){var r=dn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rf(e))af(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,i=l(o,n);if(a.hasEagerState=!0,a.eagerState=i,Et(i,o)){var s=t.interleaved;s===null?(a.next=a,rs(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Fd(e,t,a,r),n!==null&&(a=He(),kt(n,e,r,a),lf(n,t,r))}}function rf(e){var t=e.alternate;return e===he||t!==null&&t===he}function af(e,t){Qr=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}var xl={readContext:dt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},ch={readContext:dt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rl(4194308,4,Zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rl(4194308,4,e,t)},useInsertionEffect:function(e,t){return rl(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sh.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:_u,useDebugValue:fs,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=_u(!1),t=e[0];return e=ih.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,a=Pt();if(fe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ne===null)throw Error(_(349));Rn&30||Vd(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Nu(Gd.bind(null,r,l,e),[e]),r.flags|=2048,fa(9,Wd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Ne.identifierPrefix;if(fe){var n=At,r=Dt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ca++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dh={readContext:dt,useCallback:Jd,useContext:dt,useEffect:ds,useImperativeHandle:Xd,useInsertionEffect:Kd,useLayoutEffect:Yd,useMemo:ef,useReducer:To,useRef:qd,useState:function(){return To(da)},useDebugValue:fs,useDeferredValue:function(e){var t=ft();return tf(t,xe.memoizedState,e)},useTransition:function(){var e=To(da)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Ud,useId:nf,unstable_isNewReconciler:!1},fh={readContext:dt,useCallback:Jd,useContext:dt,useEffect:ds,useImperativeHandle:Xd,useInsertionEffect:Kd,useLayoutEffect:Yd,useMemo:ef,useReducer:Co,useRef:qd,useState:function(){return Co(da)},useDebugValue:fs,useDeferredValue:function(e){var t=ft();return xe===null?t.memoizedState=e:tf(t,xe.memoizedState,e)},useTransition:function(){var e=Co(da)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Ud,useId:nf,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wl={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),a=dn(e),l=Ft(r,a);l.payload=t,n!=null&&(l.callback=n),t=un(e,l,a),t!==null&&(kt(t,e,a,r),tl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),a=dn(e),l=Ft(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=un(e,l,a),t!==null&&(kt(t,e,a,r),tl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=dn(e),a=Ft(n,r);a.tag=2,t!=null&&(a.callback=t),t=un(e,a,r),t!==null&&(kt(t,e,r,n),tl(t,e,r))}};function Iu(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!aa(n,r)||!aa(a,l):!0}function of(e,t,n){var r=!1,a=hn,l=t.contextType;return typeof l=="object"&&l!==null?l=dt(l):(a=Ze(t)?On:ze.current,r=t.contextTypes,l=(r=r!=null)?dr(e,a):hn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wl.enqueueReplaceState(t,t.state,null)}function fi(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},as(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=dt(l):(l=Ze(t)?On:ze.current,a.context=dr(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(di(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Wl.enqueueReplaceState(a,a.state,null),Ll(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var n="",r=t;do n+=jp(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function xo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ph=typeof WeakMap=="function"?WeakMap:Map;function sf(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_l||(_l=!0,Si=r),pi(e,t)},n}function uf(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){pi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){pi(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ph;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=xh.bind(null,e,t,n),t.then(e,e))}function Ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var mh=Vt.ReactCurrentOwner,Ke=!1;function je(e,t,n,r){t.child=e===null?Ad(t,null,n,r):pr(t,e.child,n,r)}function Du(e,t,n,r,a){n=n.render;var l=t.ref;return sr(t,a),r=us(e,t,n,r,l,a),n=cs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(fe&&n&&Zi(t),t.flags|=1,je(e,t,r,a),t.child)}function Au(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!ks(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,cf(e,t,l,r,a)):(e=il(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,r)&&e.ref===t.ref)return Ut(e,t,a)}return t.flags|=1,e=fn(l,r),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(aa(l,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Ut(e,t,a)}return mi(e,t,n,r,a)}function df(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(rr,et),et|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(rr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,se(rr,et),et|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,se(rr,et),et|=r;return je(e,t,a,n),t.child}function ff(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mi(e,t,n,r,a){var l=Ze(n)?On:ze.current;return l=dr(t,l),sr(t,a),n=us(e,t,n,r,l,a),r=cs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(fe&&r&&Zi(t),t.flags|=1,je(e,t,n,a),t.child)}function Fu(e,t,n,r,a){if(Ze(n)){var l=!0;bl(t)}else l=!1;if(sr(t,a),t.stateNode===null)al(e,t),of(t,n,r),fi(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ze(n)?On:ze.current,u=dr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||s!==u)&&Ou(t,o,r,u),Xt=!1;var m=t.memoizedState;o.state=m,Ll(t,r,o,a),s=t.memoizedState,i!==r||m!==s||Ye.current||Xt?(typeof f=="function"&&(di(t,n,f,r),s=t.memoizedState),(i=Xt||Iu(t,n,i,r,m,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zd(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:ht(t.type,i),o.props=u,d=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=dt(s):(s=Ze(n)?On:ze.current,s=dr(t,s));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==d||m!==s)&&Ou(t,o,r,s),Xt=!1,m=t.memoizedState,o.state=m,Ll(t,r,o,a);var E=t.memoizedState;i!==d||m!==E||Ye.current||Xt?(typeof b=="function"&&(di(t,n,b,r),E=t.memoizedState),(u=Xt||Iu(t,n,u,r,m,E,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return hi(e,t,n,r,l,a)}function hi(e,t,n,r,a,l){ff(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Su(t,n,!1),Ut(e,t,l);r=t.stateNode,mh.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pr(t,e.child,null,l),t.child=pr(t,null,i,l)):je(e,t,i,l),t.memoizedState=r.state,a&&Su(t,n,!0),t.child}function pf(e){var t=e.stateNode;t.pendingContext?wu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wu(e,t.context,!1),ls(e,t.containerInfo)}function zu(e,t,n,r,a){return fr(),Ji(a),t.flags|=256,je(e,t,n,r),t.child}var gi={dehydrated:null,treeContext:null,retryLane:0};function vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function mf(e,t,n){var r=t.pendingProps,a=me.current,l=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),se(me,a&1),e===null)return ui(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ql(o,r,0,null),e=In(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=vi(n),t.memoizedState=gi,e):ps(t,o));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return hh(e,t,o,r,i,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,i=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=fn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=fn(i,l):(l=In(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?vi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=gi,r}return l=e.child,e=l.sibling,r=fn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ps(e,t){return t=Ql({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ga(e,t,n,r){return r!==null&&Ji(r),pr(t,e.child,null,n),e=ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hh(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=xo(Error(_(422))),Ga(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ql({mode:"visible",children:r.children},a,0,null),l=In(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&pr(t,e.child,null,o),t.child.memoizedState=vi(o),t.memoizedState=gi,l);if(!(t.mode&1))return Ga(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(_(419)),r=xo(l,r,void 0),Ga(e,t,o,r)}if(i=(o&e.childLanes)!==0,Ke||i){if(r=Ne,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Ht(e,a),kt(r,e,a,-1))}return bs(),r=xo(Error(_(421))),Ga(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ph.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,nt=sn(a.nextSibling),rt=t,fe=!0,yt=null,e!==null&&(it[st++]=Dt,it[st++]=At,it[st++]=Bn,Dt=e.id,At=e.overflow,Bn=t),t=ps(t,r.children),t.flags|=4096,t)}function ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ci(e.return,t,n)}function Po(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function hf(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(je(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,n,t);else if(e.tag===19)ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(me,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Tl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Po(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Tl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Po(t,!0,n,null,l);break;case"together":Po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function al(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gh(e,t,n){switch(t.tag){case 3:pf(t),fr();break;case 5:jd(t);break;case 1:Ze(t.type)&&bl(t);break;case 4:ls(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;se(wl,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?mf(e,t,n):(se(me,me.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,df(e,t,n)}return Ut(e,t,n)}var gf,yi,vf,yf;gf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yi=function(){};vf=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Pn(It.current);var l=null;switch(n){case"input":a=jo(e,a),r=jo(e,r),l=[];break;case"select":a=ge({},a,{value:void 0}),r=ge({},r,{value:void 0}),l=[];break;case"textarea":a=Vo(e,a),r=Vo(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vl)}Go(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&i[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),l||i===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};yf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vh(e,t,n){var r=t.pendingProps;switch(Xi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ze(t.type)&&yl(),Ae(t),null;case 3:return r=t.stateNode,mr(),ce(Ye),ce(ze),is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Ci(yt),yt=null))),yi(e,t),Ae(t),null;case 5:os(t);var a=Pn(ua.current);if(n=t.type,e!==null&&t.stateNode!=null)vf(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ae(t),null}if(e=Pn(It.current),Va(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[_t]=t,r[ia]=l,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(a=0;a<jr.length;a++)ue(jr[a],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Ks(r,l),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ue("invalid",r);break;case"textarea":Zs(r,l),ue("invalid",r)}Go(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Ua(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Ua(r.textContent,i,e),a=["children",""+i]):Zr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Ra(r),Ys(r,l,!0);break;case"textarea":Ra(r),Xs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=vl)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[_t]=t,e[ia]=r,gf(e,t,!1,!1),t.stateNode=e;e:{switch(o=$o(n,r),n){case"dialog":ue("cancel",e),ue("close",e),a=r;break;case"iframe":case"object":case"embed":ue("load",e),a=r;break;case"video":case"audio":for(a=0;a<jr.length;a++)ue(jr[a],e);a=r;break;case"source":ue("error",e),a=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),a=r;break;case"details":ue("toggle",e),a=r;break;case"input":Ks(e,r),a=jo(e,r),ue("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ge({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Zs(e,r),a=Vo(e,r),ue("invalid",e);break;default:a=r}Go(n,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="style"?qc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&$c(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Xr(e,s):typeof s=="number"&&Xr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Zr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ue("scroll",e):s!=null&&Ai(e,l,s,o))}switch(n){case"input":Ra(e),Ys(e,r,!1);break;case"textarea":Ra(e),Xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ar(e,!!r.multiple,l,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)yf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Pn(ua.current),Pn(It.current),Va(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(l=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:Ua(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ua(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Ae(t),null;case 13:if(ce(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&nt!==null&&t.mode&1&&!(t.flags&128))Md(),fr(),t.flags|=98560,l=!1;else if(l=Va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(_(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(_(317));l[_t]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),l=!1}else yt!==null&&(Ci(yt),yt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Pe===0&&(Pe=3):bs())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return mr(),yi(e,t),e===null&&la(t.stateNode.containerInfo),Ae(t),null;case 10:return ns(t.type._context),Ae(t),null;case 17:return Ze(t.type)&&yl(),Ae(t),null;case 19:if(ce(me),l=t.memoizedState,l===null)return Ae(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Or(l,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Tl(e),o!==null){for(t.flags|=128,Or(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(me,me.current&1|2),t.child}e=e.sibling}l.tail!==null&&Se()>gr&&(t.flags|=128,r=!0,Or(l,!1),t.lanes=4194304)}else{if(!r)if(e=Tl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!fe)return Ae(t),null}else 2*Se()-l.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Or(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Se(),t.sibling=null,n=me.current,se(me,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return ys(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function yh(e,t){switch(Xi(t),t.tag){case 1:return Ze(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),ce(Ye),ce(ze),is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return os(t),null;case 13:if(ce(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(me),null;case 4:return mr(),null;case 10:return ns(t.type._context),null;case 22:case 23:return ys(),null;case 24:return null;default:return null}}var $a=!1,Fe=!1,bh=typeof WeakSet=="function"?WeakSet:Set,M=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function bi(e,t,n){try{n()}catch(r){ke(e,t,r)}}var Hu=!1;function kh(e,t){if(ni=ml,e=wd(),Yi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,i=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var b;d!==n||a!==0&&d.nodeType!==3||(i=o+a),d!==l||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(b=d.firstChild)!==null;)m=d,d=b;for(;;){if(d===e)break t;if(m===n&&++u===a&&(i=o),m===l&&++f===r&&(s=o),(b=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=b}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ri={focusedElem:e,selectionRange:n},ml=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var w=E.memoizedProps,N=E.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:ht(t.type,w),N);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){ke(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return E=Hu,Hu=!1,E}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&bi(t,n,l)}a=a.next}while(a!==r)}}function Gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[ia],delete t[oi],delete t[nh],delete t[rh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kf(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ei(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vl));else if(r!==4&&(e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}function wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wi(e,t,n),e=e.sibling;e!==null;)wi(e,t,n),e=e.sibling}var Be=null,gt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Ef(e,t,n),n=n.sibling}function Ef(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Fe||nr(n,t);case 6:var r=Be,a=gt;Be=null,Kt(e,t,n),Be=r,gt=a,Be!==null&&(gt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(gt?(e=Be,n=n.stateNode,e.nodeType===8?Eo(e.parentNode,n):e.nodeType===1&&Eo(e,n),na(e)):Eo(Be,n.stateNode));break;case 4:r=Be,a=gt,Be=n.stateNode.containerInfo,gt=!0,Kt(e,t,n),Be=r,gt=a;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&bi(n,t,o),a=a.next}while(a!==r)}Kt(e,t,n);break;case 1:if(!Fe&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ke(n,t,i)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Kt(e,t,n),Fe=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function Vu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bh),t.forEach(function(r){var a=_h.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:Be=i.stateNode,gt=!1;break e;case 3:Be=i.stateNode.containerInfo,gt=!0;break e;case 4:Be=i.stateNode.containerInfo,gt=!0;break e}i=i.return}if(Be===null)throw Error(_(160));Ef(l,o,a),Be=null,gt=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ke(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}function wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),xt(e),r&4){try{qr(3,e,e.return),Gl(3,e)}catch(w){ke(e,e.return,w)}try{qr(5,e,e.return)}catch(w){ke(e,e.return,w)}}break;case 1:pt(t,e),xt(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(pt(t,e),xt(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var a=e.stateNode;try{Xr(a,"")}catch(w){ke(e,e.return,w)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Vc(a,l),$o(i,o);var u=$o(i,l);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?qc(a,d):f==="dangerouslySetInnerHTML"?$c(a,d):f==="children"?Xr(a,d):Ai(a,f,d,u)}switch(i){case"input":Ho(a,l);break;case"textarea":Wc(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?ar(a,!!l.multiple,b,!1):m!==!!l.multiple&&(l.defaultValue!=null?ar(a,!!l.multiple,l.defaultValue,!0):ar(a,!!l.multiple,l.multiple?[]:"",!1))}a[ia]=l}catch(w){ke(e,e.return,w)}}break;case 6:if(pt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(w){ke(e,e.return,w)}}break;case 3:if(pt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(t.containerInfo)}catch(w){ke(e,e.return,w)}break;case 4:pt(t,e),xt(e);break;case 13:pt(t,e),xt(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(gs=Se())),r&4&&Vu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||f,pt(t,e),Fe=u):pt(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(d=M=f;M!==null;){switch(m=M,b=m.child,m.tag){case 0:case 11:case 14:case 15:qr(4,m,m.return);break;case 1:nr(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(w){ke(r,n,w)}}break;case 5:nr(m,m.return);break;case 22:if(m.memoizedState!==null){Gu(d);continue}}b!==null?(b.return=m,M=b):Gu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Qc("display",o))}catch(w){ke(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ke(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pt(t,e),xt(e),r&4&&Vu(e);break;case 21:break;default:pt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Xr(a,""),r.flags&=-33);var l=Uu(e);wi(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Uu(e);Ei(e,i,o);break;default:throw Error(_(161))}}catch(s){ke(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eh(e,t,n){M=e,Sf(e)}function Sf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var a=M,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||$a;if(!o){var i=a.alternate,s=i!==null&&i.memoizedState!==null||Fe;i=$a;var u=Fe;if($a=o,(Fe=s)&&!u)for(M=a;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?$u(a):s!==null?(s.return=o,M=s):$u(a);for(;l!==null;)M=l,Sf(l),l=l.sibling;M=a,$a=i,Fe=u}Wu(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,M=l):Wu(e)}}function Wu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||Gl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Pu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pu(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Fe||t.flags&512&&ki(t)}catch(m){ke(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Gu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function $u(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gl(4,t)}catch(s){ke(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){ke(t,a,s)}}var l=t.return;try{ki(t)}catch(s){ke(t,l,s)}break;case 5:var o=t.return;try{ki(t)}catch(s){ke(t,o,s)}}}catch(s){ke(t,t.return,s)}if(t===e){M=null;break}var i=t.sibling;if(i!==null){i.return=t.return,M=i;break}M=t.return}}var wh=Math.ceil,Pl=Vt.ReactCurrentDispatcher,ms=Vt.ReactCurrentOwner,ct=Vt.ReactCurrentBatchConfig,J=0,Ne=null,Ce=null,Re=0,et=0,rr=vn(0),Pe=0,pa=null,Mn=0,$l=0,hs=0,Kr=null,qe=null,gs=0,gr=1/0,Rt=null,_l=!1,Si=null,cn=null,Qa=!1,nn=null,Nl=0,Yr=0,Li=null,ll=-1,ol=0;function He(){return J&6?Se():ll!==-1?ll:ll=Se()}function dn(e){return e.mode&1?J&2&&Re!==0?Re&-Re:lh.transition!==null?(ol===0&&(ol=od()),ol):(e=ae,e!==0||(e=window.event,e=e===void 0?16:pd(e.type)),e):1}function kt(e,t,n,r){if(50<Yr)throw Yr=0,Li=null,Error(_(185));ya(e,n,r),(!(J&2)||e!==Ne)&&(e===Ne&&(!(J&2)&&($l|=n),Pe===4&&en(e,Re)),Xe(e,r),n===1&&J===0&&!(t.mode&1)&&(gr=Se()+500,Ul&&yn()))}function Xe(e,t){var n=e.callbackNode;lm(e,t);var r=pl(e,e===Ne?Re:0);if(r===0)n!==null&&tu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tu(n),t===1)e.tag===0?ah(Qu.bind(null,e)):Od(Qu.bind(null,e)),eh(function(){!(J&6)&&yn()}),n=null;else{switch(id(r)){case 1:n=Ui;break;case 4:n=ad;break;case 16:n=fl;break;case 536870912:n=ld;break;default:n=fl}n=If(n,Lf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lf(e,t){if(ll=-1,ol=0,J&6)throw Error(_(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=pl(e,e===Ne?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Il(e,r);else{t=r;var a=J;J|=2;var l=Cf();(Ne!==e||Re!==t)&&(Rt=null,gr=Se()+500,Nn(e,t));do try{Th();break}catch(i){Tf(e,i)}while(!0);ts(),Pl.current=l,J=a,Ce!==null?t=0:(Ne=null,Re=0,t=Pe)}if(t!==0){if(t===2&&(a=Zo(e),a!==0&&(r=a,t=Ti(e,a))),t===1)throw n=pa,Nn(e,0),en(e,r),Xe(e,Se()),n;if(t===6)en(e,r);else{if(a=e.current.alternate,!(r&30)&&!Sh(a)&&(t=Il(e,r),t===2&&(l=Zo(e),l!==0&&(r=l,t=Ti(e,l))),t===1))throw n=pa,Nn(e,0),en(e,r),Xe(e,Se()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Sn(e,qe,Rt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=gs+500-Se(),10<t)){if(pl(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=li(Sn.bind(null,e,qe,Rt),t);break}Sn(e,qe,Rt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-bt(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wh(r/1960))-r,10<r){e.timeoutHandle=li(Sn.bind(null,e,qe,Rt),r);break}Sn(e,qe,Rt);break;case 5:Sn(e,qe,Rt);break;default:throw Error(_(329))}}}return Xe(e,Se()),e.callbackNode===n?Lf.bind(null,e):null}function Ti(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Il(e,t),e!==2&&(t=qe,qe=n,t!==null&&Ci(t)),e}function Ci(e){qe===null?qe=e:qe.push.apply(qe,e)}function Sh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Et(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~hs,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Qu(e){if(J&6)throw Error(_(327));ur();var t=pl(e,0);if(!(t&1))return Xe(e,Se()),null;var n=Il(e,t);if(e.tag!==0&&n===2){var r=Zo(e);r!==0&&(t=r,n=Ti(e,r))}if(n===1)throw n=pa,Nn(e,0),en(e,t),Xe(e,Se()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,qe,Rt),Xe(e,Se()),null}function vs(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(gr=Se()+500,Ul&&yn())}}function Dn(e){nn!==null&&nn.tag===0&&!(J&6)&&ur();var t=J;J|=1;var n=ct.transition,r=ae;try{if(ct.transition=null,ae=1,e)return e()}finally{ae=r,ct.transition=n,J=t,!(J&6)&&yn()}}function ys(){et=rr.current,ce(rr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jm(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Xi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:mr(),ce(Ye),ce(ze),is();break;case 5:os(r);break;case 4:mr();break;case 13:ce(me);break;case 19:ce(me);break;case 10:ns(r.type._context);break;case 22:case 23:ys()}n=n.return}if(Ne=e,Ce=e=fn(e.current,null),Re=et=t,Pe=0,pa=null,hs=$l=Mn=0,qe=Kr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}xn=null}return e}function Tf(e,t){do{var n=Ce;try{if(ts(),nl.current=xl,Cl){for(var r=he.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Cl=!1}if(Rn=0,_e=xe=he=null,Qr=!1,ca=0,ms.current=null,n===null||n.return===null){Pe=1,pa=t,Ce=null;break}e:{var l=e,o=n.return,i=n,s=t;if(t=Re,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=i,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=Ru(o);if(b!==null){b.flags&=-257,Mu(b,o,i,l,t),b.mode&1&&Bu(l,u,t),t=b,s=u;var E=t.updateQueue;if(E===null){var w=new Set;w.add(s),t.updateQueue=w}else E.add(s);break e}else{if(!(t&1)){Bu(l,u,t),bs();break e}s=Error(_(426))}}else if(fe&&i.mode&1){var N=Ru(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Mu(N,o,i,l,t),Ji(hr(s,i));break e}}l=s=hr(s,i),Pe!==4&&(Pe=2),Kr===null?Kr=[l]:Kr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=sf(l,s,t);xu(l,h);break e;case 1:i=s;var c=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cn===null||!cn.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var S=uf(l,i,t);xu(l,S);break e}}l=l.return}while(l!==null)}Pf(n)}catch(C){t=C,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Cf(){var e=Pl.current;return Pl.current=xl,e===null?xl:e}function bs(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ne===null||!(Mn&268435455)&&!($l&268435455)||en(Ne,Re)}function Il(e,t){var n=J;J|=2;var r=Cf();(Ne!==e||Re!==t)&&(Rt=null,Nn(e,t));do try{Lh();break}catch(a){Tf(e,a)}while(!0);if(ts(),J=n,Pl.current=r,Ce!==null)throw Error(_(261));return Ne=null,Re=0,Pe}function Lh(){for(;Ce!==null;)xf(Ce)}function Th(){for(;Ce!==null&&!Yp();)xf(Ce)}function xf(e){var t=Nf(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Pf(e):Ce=t,ms.current=null}function Pf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yh(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ce=null;return}}else if(n=vh(n,t,et),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Pe===0&&(Pe=5)}function Sn(e,t,n){var r=ae,a=ct.transition;try{ct.transition=null,ae=1,Ch(e,t,n,r)}finally{ct.transition=a,ae=r}return null}function Ch(e,t,n,r){do ur();while(nn!==null);if(J&6)throw Error(_(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(om(e,l),e===Ne&&(Ce=Ne=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,If(fl,function(){return ur(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ct.transition,ct.transition=null;var o=ae;ae=1;var i=J;J|=4,ms.current=null,kh(e,n),wf(n,e),$m(ri),ml=!!ni,ri=ni=null,e.current=n,Eh(n),Zp(),J=i,ae=o,ct.transition=l}else e.current=n;if(Qa&&(Qa=!1,nn=e,Nl=a),l=e.pendingLanes,l===0&&(cn=null),em(n.stateNode),Xe(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(_l)throw _l=!1,e=Si,Si=null,e;return Nl&1&&e.tag!==0&&ur(),l=e.pendingLanes,l&1?e===Li?Yr++:(Yr=0,Li=e):Yr=0,yn(),null}function ur(){if(nn!==null){var e=id(Nl),t=ct.transition,n=ae;try{if(ct.transition=null,ae=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Nl=0,J&6)throw Error(_(331));var a=J;for(J|=4,M=e.current;M!==null;){var l=M,o=l.child;if(M.flags&16){var i=l.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:qr(8,f,l)}var d=f.child;if(d!==null)d.return=f,M=d;else for(;M!==null;){f=M;var m=f.sibling,b=f.return;if(bf(f),f===u){M=null;break}if(m!==null){m.return=b,M=m;break}M=b}}}var E=l.alternate;if(E!==null){var w=E.child;if(w!==null){E.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}M=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,M=o;else e:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:qr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,M=h;break e}M=l.return}}var c=e.current;for(M=c;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=c;M!==null;){if(i=M,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Gl(9,i)}}catch(C){ke(i,i.return,C)}if(i===o){M=null;break e}var S=i.sibling;if(S!==null){S.return=i.return,M=S;break e}M=i.return}}if(J=a,yn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{ae=n,ct.transition=t}}return!1}function qu(e,t,n){t=hr(n,t),t=sf(e,t,1),e=un(e,t,1),t=He(),e!==null&&(ya(e,1,t),Xe(e,t))}function ke(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=hr(n,e),e=uf(t,e,1),t=un(t,e,1),e=He(),t!==null&&(ya(t,1,e),Xe(t,e));break}}t=t.return}}function xh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Re&n)===n&&(Pe===4||Pe===3&&(Re&130023424)===Re&&500>Se()-gs?Nn(e,0):hs|=n),Xe(e,t)}function _f(e,t){t===0&&(e.mode&1?(t=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):t=1);var n=He();e=Ht(e,t),e!==null&&(ya(e,t,n),Xe(e,n))}function Ph(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function _h(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),_f(e,n)}var Nf;Nf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,gh(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,fe&&t.flags&1048576&&Bd(t,El,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;al(e,t),e=t.pendingProps;var a=dr(t,ze.current);sr(t,n),a=us(null,t,r,e,a,n);var l=cs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(l=!0,bl(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,as(t),a.updater=Wl,t.stateNode=a,a._reactInternals=t,fi(t,r,e,n),t=hi(null,t,r,!0,l,n)):(t.tag=0,fe&&l&&Zi(t),je(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(al(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Ih(r),e=ht(r,e),a){case 0:t=mi(null,t,r,e,n);break e;case 1:t=Fu(null,t,r,e,n);break e;case 11:t=Du(null,t,r,e,n);break e;case 14:t=Au(null,t,r,ht(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),mi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),Fu(e,t,r,a,n);case 3:e:{if(pf(t),e===null)throw Error(_(387));r=t.pendingProps,l=t.memoizedState,a=l.element,zd(e,t),Ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=hr(Error(_(423)),t),t=zu(e,t,r,n,a);break e}else if(r!==a){a=hr(Error(_(424)),t),t=zu(e,t,r,n,a);break e}else for(nt=sn(t.stateNode.containerInfo.firstChild),rt=t,fe=!0,yt=null,n=Ad(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===a){t=Ut(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return jd(t),e===null&&ui(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,ai(r,a)?o=null:l!==null&&ai(r,l)&&(t.flags|=32),ff(e,t),je(e,t,o,n),t.child;case 6:return e===null&&ui(t),null;case 13:return mf(e,t,n);case 4:return ls(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),Du(e,t,r,a,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,se(wl,r._currentValue),r._currentValue=o,l!==null)if(Et(l.value,o)){if(l.children===a.children&&!Ye.current){t=Ut(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Ft(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ci(l.return,n,t),i.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(_(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),ci(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}je(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,sr(t,n),a=dt(a),r=r(a),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,a=ht(r,t.pendingProps),a=ht(r.type,a),Au(e,t,r,a,n);case 15:return cf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),al(e,t),t.tag=1,Ze(r)?(e=!0,bl(t)):e=!1,sr(t,n),of(t,r,a),fi(t,r,a,n),hi(null,t,r,!0,e,n);case 19:return hf(e,t,n);case 22:return df(e,t,n)}throw Error(_(156,t.tag))};function If(e,t){return rd(e,t)}function Nh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Nh(e,t,n,r)}function ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ih(e){if(typeof e=="function")return ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zi)return 11;if(e===ji)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")ks(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qn:return In(n.children,a,l,t);case Fi:o=8,a|=8;break;case Do:return e=ut(12,n,t,a|2),e.elementType=Do,e.lanes=l,e;case Ao:return e=ut(13,n,t,a),e.elementType=Ao,e.lanes=l,e;case Fo:return e=ut(19,n,t,a),e.elementType=Fo,e.lanes=l,e;case jc:return Ql(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fc:o=10;break e;case zc:o=9;break e;case zi:o=11;break e;case ji:o=14;break e;case Zt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ut(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function In(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=ut(22,e,r,t),e.elementType=jc,e.lanes=n,e.stateNode={isHidden:!1},e}function _o(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uo(0),this.expirationTimes=uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Es(e,t,n,r,a,l,o,i,s){return e=new Oh(e,t,n,i,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ut(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(l),e}function Bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Of(e){if(!e)return hn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Id(e,n,t)}return t}function Bf(e,t,n,r,a,l,o,i,s){return e=Es(n,r,!0,e,a,l,o,i,s),e.context=Of(null),n=e.current,r=He(),a=dn(n),l=Ft(r,a),l.callback=t??null,un(n,l,a),e.current.lanes=a,ya(e,a,r),Xe(e,r),e}function ql(e,t,n,r){var a=t.current,l=He(),o=dn(a);return n=Of(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(a,t,o),e!==null&&(kt(e,a,o,l),tl(e,a,o)),o}function Ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ws(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}function Rh(){return null}var Rf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ss(e){this._internalRoot=e}Kl.prototype.render=Ss.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ql(e,t,null,null)};Kl.prototype.unmount=Ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){ql(null,e,null,null)}),t[jt]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&fd(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yu(){}function Mh(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=Ol(o);l.call(u)}}var o=Bf(t,r,e,0,null,!1,!1,"",Yu);return e._reactRootContainer=o,e[jt]=o.current,la(e.nodeType===8?e.parentNode:e),Dn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=Ol(s);i.call(u)}}var s=Es(e,0,!1,null,null,!1,!1,"",Yu);return e._reactRootContainer=s,e[jt]=s.current,la(e.nodeType===8?e.parentNode:e),Dn(function(){ql(t,s,n,r)}),s}function Zl(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var i=a;a=function(){var s=Ol(o);i.call(s)}}ql(t,o,e,a)}else o=Mh(n,t,e,a,r);return Ol(o)}sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(Vi(t,n|1),Xe(t,Se()),!(J&6)&&(gr=Se()+500,yn()))}break;case 13:Dn(function(){var r=Ht(e,1);if(r!==null){var a=He();kt(r,e,1,a)}}),ws(e,1)}};Wi=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=He();kt(t,e,134217728,n)}ws(e,134217728)}};ud=function(e){if(e.tag===13){var t=dn(e),n=Ht(e,t);if(n!==null){var r=He();kt(n,e,t,r)}ws(e,t)}};cd=function(){return ae};dd=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};qo=function(e,t,n){switch(t){case"input":if(Ho(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Hl(r);if(!a)throw Error(_(90));Uc(r),Ho(r,a)}}}break;case"textarea":Wc(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};Zc=vs;Xc=Dn;var Dh={usingClientEntryPoint:!1,Events:[ka,Zn,Hl,Kc,Yc,vs]},Br={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ah={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=td(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||Rh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Al=qa.inject(Ah),Nt=qa}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(_(200));return Bh(e,t,null,n)};lt.createRoot=function(e,t){if(!Ls(e))throw Error(_(299));var n=!1,r="",a=Rf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Es(e,1,!1,null,null,n,!1,r,a),e[jt]=t.current,la(e.nodeType===8?e.parentNode:e),new Ss(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=td(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Dn(e)};lt.hydrate=function(e,t,n){if(!Yl(t))throw Error(_(200));return Zl(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=Rf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,a,!1,l,o),e[jt]=t.current,la(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Kl(t)};lt.render=function(e,t,n){if(!Yl(t))throw Error(_(200));return Zl(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!Yl(e))throw Error(_(40));return e._reactRootContainer?(Dn(function(){Zl(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};lt.unstable_batchedUpdates=vs;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Zl(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function Mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)}catch(e){console.error(e)}}Mf(),Rc.exports=lt;var Ts=Rc.exports;const Fh=wc(Ts),zh=Ec({__proto__:null,default:Fh},[Ts]);var Zu=Ts;Ro.createRoot=Zu.createRoot,Ro.hydrateRoot=Zu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}var we;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(we||(we={}));const Xu="popstate";function jh(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:o,hash:i}=r.location;return ma("",{pathname:l,search:o,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:wa(a)}return Uh(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function An(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hh(){return Math.random().toString(36).substr(2,8)}function Ju(e,t){return{usr:e.state,key:e.key,idx:t}}function ma(e,t,n,r){return n===void 0&&(n=null),de({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wt(t):t,{state:n,key:t&&t.key||r||Hh()})}function wa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Uh(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,o=a.history,i=we.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(de({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){i=we.Pop;let N=f(),h=N==null?null:N-u;u=N,s&&s({action:i,location:w.location,delta:h})}function m(N,h){i=we.Push;let c=ma(w.location,N,h);u=f()+1;let g=Ju(c,u),S=w.createHref(c);try{o.pushState(g,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(S)}l&&s&&s({action:i,location:w.location,delta:1})}function b(N,h){i=we.Replace;let c=ma(w.location,N,h);u=f();let g=Ju(c,u),S=w.createHref(c);o.replaceState(g,"",S),l&&s&&s({action:i,location:w.location,delta:0})}function E(N){let h=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof N=="string"?N:wa(N);return c=c.replace(/ $/,"%20"),Q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let w={get action(){return i},get location(){return e(a,o)},listen(N){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Xu,d),s=N,()=>{a.removeEventListener(Xu,d),s=null}},createHref(N){return t(a,N)},createURL:E,encodeLocation(N){let h=E(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:b,go(N){return o.go(N)}};return w}var re;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(re||(re={}));const Vh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Wh(e){return e.index===!0}function Bl(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,l)=>{let o=[...n,String(l)],i=typeof a.id=="string"?a.id:o.join("-");if(Q(a.index!==!0||!a.children,"Cannot specify children on an index route"),Q(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),Wh(a)){let s=de({},a,t(a),{id:i});return r[i]=s,s}else{let s=de({},a,t(a),{id:i,children:void 0});return r[i]=s,a.children&&(s.children=Bl(a.children,t,o,r)),s}})}function Ln(e,t,n){return n===void 0&&(n="/"),sl(e,t,n,!1)}function sl(e,t,n,r){let a=typeof t=="string"?Wt(t):t,l=Sa(a.pathname||"/",n);if(l==null)return null;let o=Df(e);$h(o);let i=null;for(let s=0;i==null&&s<o.length;++s){let u=rg(l);i=tg(o[s],u,r)}return i}function Gh(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function Df(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,o,i)=>{let s={relativePath:i===void 0?l.path||"":i,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=pn([r,s.relativePath]),f=n.concat(s);l.children&&l.children.length>0&&(Q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Df(l.children,t,f,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Jh(u,l.index),routesMeta:f})};return e.forEach((l,o)=>{var i;if(l.path===""||!((i=l.path)!=null&&i.includes("?")))a(l,o);else for(let s of Af(l.path))a(l,o,s)}),t}function Af(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let o=Af(r.join("/")),i=[];return i.push(...o.map(s=>s===""?l:[l,s].join("/"))),a&&i.push(...o),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function $h(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:eg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qh=/^:[\w-]+$/,qh=3,Kh=2,Yh=1,Zh=10,Xh=-2,ec=e=>e==="*";function Jh(e,t){let n=e.split("/"),r=n.length;return n.some(ec)&&(r+=Xh),t&&(r+=Kh),n.filter(a=>!ec(a)).reduce((a,l)=>a+(Qh.test(l)?qh:l===""?Yh:Zh),r)}function eg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function tg(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},l="/",o=[];for(let i=0;i<r.length;++i){let s=r[i],u=i===r.length-1,f=l==="/"?t:t.slice(l.length)||"/",d=tc({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=tc({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(a,d.params),o.push({params:a,pathname:pn([l,d.pathname]),pathnameBase:ig(pn([l,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(l=pn([l,d.pathnameBase]))}return o}function tc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ng(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],o=l.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:b}=f;if(m==="*"){let w=i[d]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const E=i[d];return b&&!E?u[m]=void 0:u[m]=(E||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function ng(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),An(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function rg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return An(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Sa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lg=e=>ag.test(e);function og(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Wt(e):e,l;if(n)if(lg(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),An(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=nc(n.substring(1),"/"):l=nc(n,t)}else l=t;return{pathname:l,search:sg(r),hash:ug(a)}}function nc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Io(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ff(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Cs(e,t){let n=Ff(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xs(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Wt(e):(a=de({},e),Q(!a.pathname||!a.pathname.includes("?"),Io("?","pathname","search",a)),Q(!a.pathname||!a.pathname.includes("#"),Io("#","pathname","hash",a)),Q(!a.search||!a.search.includes("#"),Io("#","search","hash",a)));let l=e===""||a.pathname==="",o=l?"/":a.pathname,i;if(o==null)i=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;a.pathname=m.join("/")}i=d>=0?t[d]:"/"}let s=og(a,i),u=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),ig=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ug=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Rl{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ha(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zf=["post","put","patch","delete"],cg=new Set(zf),dg=["get",...zf],fg=new Set(dg),pg=new Set([301,302,303,307,308]),mg=new Set([307,308]),Oo={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Rr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ps=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gg=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),jf="remix-router-transitions";function vg(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let p=e.detectErrorBoundary;a=y=>({hasErrorBoundary:p(y)})}else a=gg;let l={},o=Bl(e.routes,a,void 0,l),i,s=e.basename||"/",u=e.dataStrategy||Eg,f=e.patchRoutesOnNavigation,d=de({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,b=new Set,E=null,w=null,N=null,h=e.hydrationData!=null,c=Ln(o,e.history.location,s),g=!1,S=null;if(c==null&&!f){let p=Qe(404,{pathname:e.history.location.pathname}),{matches:y,route:k}=pc(o);c=y,S={[k.id]:p}}c&&!e.hydrationData&&Pa(c,o,e.history.location.pathname).active&&(c=null);let C;if(c)if(c.some(p=>p.route.lazy))C=!1;else if(!c.some(p=>p.route.loader))C=!0;else if(d.v7_partialHydration){let p=e.hydrationData?e.hydrationData.loaderData:null,y=e.hydrationData?e.hydrationData.errors:null;if(y){let k=c.findIndex(T=>y[T.route.id]!==void 0);C=c.slice(0,k+1).every(T=>!Pi(T.route,p,y))}else C=c.every(k=>!Pi(k.route,p,y))}else C=e.hydrationData!=null;else if(C=!1,c=[],d.v7_partialHydration){let p=Pa(null,o,e.history.location.pathname);p.active&&p.matches&&(g=!0,c=p.matches)}let R,v={historyAction:e.history.action,location:e.history.location,matches:c,initialized:C,navigation:Oo,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},L=we.Pop,j=!1,O,te=!1,le=new Map,pe=null,ve=!1,We=!1,Ge=[],wt=new Set,I=new Map,W=0,U=-1,q=new Map,Z=new Set,$e=new Map,Le=new Map,V=new Set,X=new Map,oe=new Map,Ie;function Je(){if(m=e.history.listen(p=>{let{action:y,location:k,delta:T}=p;if(Ie){Ie(),Ie=void 0;return}An(oe.size===0||T!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=zs({currentLocation:v.location,nextLocation:k,historyAction:y});if(B&&T!=null){let H=new Promise(G=>{Ie=G});e.history.go(T*-1),xa(B,{state:"blocked",location:k,proceed(){xa(B,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),H.then(()=>e.history.go(T))},reset(){let G=new Map(v.blockers);G.set(B,Rr),Ee({blockers:G})}});return}return Tt(y,k)}),n){Mg(t,le);let p=()=>Dg(t,le);t.addEventListener("pagehide",p),pe=()=>t.removeEventListener("pagehide",p)}return v.initialized||Tt(we.Pop,v.location,{initialHydration:!0}),R}function Gt(){m&&m(),pe&&pe(),b.clear(),O&&O.abort(),v.fetchers.forEach((p,y)=>Ca(y)),v.blockers.forEach((p,y)=>Fs(y))}function St(p){return b.add(p),()=>b.delete(p)}function Ee(p,y){y===void 0&&(y={}),v=de({},v,p);let k=[],T=[];d.v7_fetcherPersist&&v.fetchers.forEach((B,H)=>{B.state==="idle"&&(V.has(H)?T.push(H):k.push(H))}),V.forEach(B=>{!v.fetchers.has(B)&&!I.has(B)&&T.push(B)}),[...b].forEach(B=>B(v,{deletedFetchers:T,viewTransitionOpts:y.viewTransitionOpts,flushSync:y.flushSync===!0})),d.v7_fetcherPersist?(k.forEach(B=>v.fetchers.delete(B)),T.forEach(B=>Ca(B))):T.forEach(B=>V.delete(B))}function Lt(p,y,k){var T,B;let{flushSync:H}=k===void 0?{}:k,G=v.actionData!=null&&v.navigation.formMethod!=null&&vt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((T=p.state)==null?void 0:T._isRedirect)!==!0,A;y.actionData?Object.keys(y.actionData).length>0?A=y.actionData:A=null:G?A=v.actionData:A=null;let F=y.loaderData?dc(v.loaderData,y.loaderData,y.matches||[],y.errors):v.loaderData,D=v.blockers;D.size>0&&(D=new Map(D),D.forEach((Y,Oe)=>D.set(Oe,Rr)));let z=j===!0||v.navigation.formMethod!=null&&vt(v.navigation.formMethod)&&((B=p.state)==null?void 0:B._isRedirect)!==!0;i&&(o=i,i=void 0),ve||L===we.Pop||(L===we.Push?e.history.push(p,p.state):L===we.Replace&&e.history.replace(p,p.state));let $;if(L===we.Pop){let Y=le.get(v.location.pathname);Y&&Y.has(p.pathname)?$={currentLocation:v.location,nextLocation:p}:le.has(p.pathname)&&($={currentLocation:p,nextLocation:v.location})}else if(te){let Y=le.get(v.location.pathname);Y?Y.add(p.pathname):(Y=new Set([p.pathname]),le.set(v.location.pathname,Y)),$={currentLocation:v.location,nextLocation:p}}Ee(de({},y,{actionData:A,loaderData:F,historyAction:L,location:p,initialized:!0,navigation:Oo,revalidation:"idle",restoreScrollPosition:Hs(p,y.matches||v.matches),preventScrollReset:z,blockers:D}),{viewTransitionOpts:$,flushSync:H===!0}),L=we.Pop,j=!1,te=!1,ve=!1,We=!1,Ge=[]}async function kr(p,y){if(typeof p=="number"){e.history.go(p);return}let k=xi(v.location,v.matches,s,d.v7_prependBasename,p,d.v7_relativeSplatPath,y==null?void 0:y.fromRouteId,y==null?void 0:y.relative),{path:T,submission:B,error:H}=rc(d.v7_normalizeFormMethod,!1,k,y),G=v.location,A=ma(v.location,T,y&&y.state);A=de({},A,e.history.encodeLocation(A));let F=y&&y.replace!=null?y.replace:void 0,D=we.Push;F===!0?D=we.Replace:F===!1||B!=null&&vt(B.formMethod)&&B.formAction===v.location.pathname+v.location.search&&(D=we.Replace);let z=y&&"preventScrollReset"in y?y.preventScrollReset===!0:void 0,$=(y&&y.flushSync)===!0,Y=zs({currentLocation:G,nextLocation:A,historyAction:D});if(Y){xa(Y,{state:"blocked",location:A,proceed(){xa(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),kr(p,y)},reset(){let Oe=new Map(v.blockers);Oe.set(Y,Rr),Ee({blockers:Oe})}});return}return await Tt(D,A,{submission:B,pendingError:H,preventScrollReset:z,replace:y&&y.replace,enableViewTransition:y&&y.viewTransition,flushSync:$})}function bn(){if(eo(),Ee({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Tt(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Tt(L||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation,enableViewTransition:te===!0})}}async function Tt(p,y,k){O&&O.abort(),O=null,L=p,ve=(k&&k.startUninterruptedRevalidation)===!0,ip(v.location,v.matches),j=(k&&k.preventScrollReset)===!0,te=(k&&k.enableViewTransition)===!0;let T=i||o,B=k&&k.overrideNavigation,H=k!=null&&k.initialHydration&&v.matches&&v.matches.length>0&&!g?v.matches:Ln(T,y,s),G=(k&&k.flushSync)===!0;if(H&&v.initialized&&!We&&xg(v.location,y)&&!(k&&k.submission&&vt(k.submission.formMethod))){Lt(y,{matches:H},{flushSync:G});return}let A=Pa(H,T,y.pathname);if(A.active&&A.matches&&(H=A.matches),!H){let{error:ie,notFoundMatches:ne,route:ye}=to(y.pathname);Lt(y,{matches:ne,loaderData:{},errors:{[ye.id]:ie}},{flushSync:G});return}O=new AbortController;let F=Gn(e.history,y,O.signal,k&&k.submission),D;if(k&&k.pendingError)D=[Tn(H).route.id,{type:re.error,error:k.pendingError}];else if(k&&k.submission&&vt(k.submission.formMethod)){let ie=await Er(F,y,k.submission,H,A.active,{replace:k.replace,flushSync:G});if(ie.shortCircuited)return;if(ie.pendingActionResult){let[ne,ye]=ie.pendingActionResult;if(tt(ye)&&ha(ye.error)&&ye.error.status===404){O=null,Lt(y,{matches:ie.matches,loaderData:{},errors:{[ne]:ye.error}});return}}H=ie.matches||H,D=ie.pendingActionResult,B=Bo(y,k.submission),G=!1,A.active=!1,F=Gn(e.history,F.url,F.signal)}let{shortCircuited:z,matches:$,loaderData:Y,errors:Oe}=await $t(F,y,H,A.active,B,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,G,D);z||(O=null,Lt(y,de({matches:$||H},fc(D),{loaderData:Y,errors:Oe})))}async function Er(p,y,k,T,B,H){H===void 0&&(H={}),eo();let G=Bg(y,k);if(Ee({navigation:G},{flushSync:H.flushSync===!0}),B){let D=await _a(T,y.pathname,p.signal);if(D.type==="aborted")return{shortCircuited:!0};if(D.type==="error"){let z=Tn(D.partialMatches).route.id;return{matches:D.partialMatches,pendingActionResult:[z,{type:re.error,error:D.error}]}}else if(D.matches)T=D.matches;else{let{notFoundMatches:z,error:$,route:Y}=to(y.pathname);return{matches:z,pendingActionResult:[Y.id,{type:re.error,error:$}]}}}let A,F=Hr(T,y);if(!F.route.action&&!F.route.lazy)A={type:re.error,error:Qe(405,{method:p.method,pathname:y.pathname,routeId:F.route.id})};else if(A=(await wr("action",v,p,[F],T,null))[F.route.id],p.signal.aborted)return{shortCircuited:!0};if(_n(A)){let D;return H&&H.replace!=null?D=H.replace:D=sc(A.response.headers.get("Location"),new URL(p.url),s)===v.location.pathname+v.location.search,await kn(p,A,!0,{submission:k,replace:D}),{shortCircuited:!0}}if(rn(A))throw Qe(400,{type:"defer-action"});if(tt(A)){let D=Tn(T,F.route.id);return(H&&H.replace)!==!0&&(L=we.Push),{matches:T,pendingActionResult:[D.route.id,A]}}return{matches:T,pendingActionResult:[F.route.id,A]}}async function $t(p,y,k,T,B,H,G,A,F,D,z){let $=B||Bo(y,H),Y=H||G||hc($),Oe=!ve&&(!d.v7_partialHydration||!F);if(T){if(Oe){let be=Os(z);Ee(de({navigation:$},be!==void 0?{actionData:be}:{}),{flushSync:D})}let ee=await _a(k,y.pathname,p.signal);if(ee.type==="aborted")return{shortCircuited:!0};if(ee.type==="error"){let be=Tn(ee.partialMatches).route.id;return{matches:ee.partialMatches,loaderData:{},errors:{[be]:ee.error}}}else if(ee.matches)k=ee.matches;else{let{error:be,notFoundMatches:Un,route:Tr}=to(y.pathname);return{matches:Un,loaderData:{},errors:{[Tr.id]:be}}}}let ie=i||o,[ne,ye]=lc(e.history,v,k,Y,y,d.v7_partialHydration&&F===!0,d.v7_skipActionErrorRevalidation,We,Ge,wt,V,$e,Z,ie,s,z);if(no(ee=>!(k&&k.some(be=>be.route.id===ee))||ne&&ne.some(be=>be.route.id===ee)),U=++W,ne.length===0&&ye.length===0){let ee=Ds();return Lt(y,de({matches:k,loaderData:{},errors:z&&tt(z[1])?{[z[0]]:z[1].error}:null},fc(z),ee?{fetchers:new Map(v.fetchers)}:{}),{flushSync:D}),{shortCircuited:!0}}if(Oe){let ee={};if(!T){ee.navigation=$;let be=Os(z);be!==void 0&&(ee.actionData=be)}ye.length>0&&(ee.fetchers=ep(ye)),Ee(ee,{flushSync:D})}ye.forEach(ee=>{qt(ee.key),ee.controller&&I.set(ee.key,ee.controller)});let Hn=()=>ye.forEach(ee=>qt(ee.key));O&&O.signal.addEventListener("abort",Hn);let{loaderResults:Sr,fetcherResults:Bt}=await Bs(v,k,ne,ye,p);if(p.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener("abort",Hn),ye.forEach(ee=>I.delete(ee.key));let Ct=Ka(Sr);if(Ct)return await kn(p,Ct.result,!0,{replace:A}),{shortCircuited:!0};if(Ct=Ka(Bt),Ct)return Z.add(Ct.key),await kn(p,Ct.result,!0,{replace:A}),{shortCircuited:!0};let{loaderData:ro,errors:Lr}=cc(v,k,Sr,z,ye,Bt,X);X.forEach((ee,be)=>{ee.subscribe(Un=>{(Un||ee.done)&&X.delete(be)})}),d.v7_partialHydration&&F&&v.errors&&(Lr=de({},v.errors,Lr));let En=Ds(),Na=As(U),Ia=En||Na||ye.length>0;return de({matches:k,loaderData:ro,errors:Lr},Ia?{fetchers:new Map(v.fetchers)}:{})}function Os(p){if(p&&!tt(p[1]))return{[p[0]]:p[1].data};if(v.actionData)return Object.keys(v.actionData).length===0?null:v.actionData}function ep(p){return p.forEach(y=>{let k=v.fetchers.get(y.key),T=Mr(void 0,k?k.data:void 0);v.fetchers.set(y.key,T)}),new Map(v.fetchers)}function tp(p,y,k,T){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");qt(p);let B=(T&&T.flushSync)===!0,H=i||o,G=xi(v.location,v.matches,s,d.v7_prependBasename,k,d.v7_relativeSplatPath,y,T==null?void 0:T.relative),A=Ln(H,G,s),F=Pa(A,H,G);if(F.active&&F.matches&&(A=F.matches),!A){Ot(p,y,Qe(404,{pathname:G}),{flushSync:B});return}let{path:D,submission:z,error:$}=rc(d.v7_normalizeFormMethod,!0,G,T);if($){Ot(p,y,$,{flushSync:B});return}let Y=Hr(A,D),Oe=(T&&T.preventScrollReset)===!0;if(z&&vt(z.formMethod)){np(p,y,D,Y,A,F.active,B,Oe,z);return}$e.set(p,{routeId:y,path:D}),rp(p,y,D,Y,A,F.active,B,Oe,z)}async function np(p,y,k,T,B,H,G,A,F){eo(),$e.delete(p);function D(Te){if(!Te.route.action&&!Te.route.lazy){let Vn=Qe(405,{method:F.formMethod,pathname:k,routeId:y});return Ot(p,y,Vn,{flushSync:G}),!0}return!1}if(!H&&D(T))return;let z=v.fetchers.get(p);Qt(p,Rg(F,z),{flushSync:G});let $=new AbortController,Y=Gn(e.history,k,$.signal,F);if(H){let Te=await _a(B,new URL(Y.url).pathname,Y.signal,p);if(Te.type==="aborted")return;if(Te.type==="error"){Ot(p,y,Te.error,{flushSync:G});return}else if(Te.matches){if(B=Te.matches,T=Hr(B,k),D(T))return}else{Ot(p,y,Qe(404,{pathname:k}),{flushSync:G});return}}I.set(p,$);let Oe=W,ne=(await wr("action",v,Y,[T],B,p))[T.route.id];if(Y.signal.aborted){I.get(p)===$&&I.delete(p);return}if(d.v7_fetcherPersist&&V.has(p)){if(_n(ne)||tt(ne)){Qt(p,Yt(void 0));return}}else{if(_n(ne))if(I.delete(p),U>Oe){Qt(p,Yt(void 0));return}else return Z.add(p),Qt(p,Mr(F)),kn(Y,ne,!1,{fetcherSubmission:F,preventScrollReset:A});if(tt(ne)){Ot(p,y,ne.error);return}}if(rn(ne))throw Qe(400,{type:"defer-action"});let ye=v.navigation.location||v.location,Hn=Gn(e.history,ye,$.signal),Sr=i||o,Bt=v.navigation.state!=="idle"?Ln(Sr,v.navigation.location,s):v.matches;Q(Bt,"Didn't find any matches after fetcher action");let Ct=++W;q.set(p,Ct);let ro=Mr(F,ne.data);v.fetchers.set(p,ro);let[Lr,En]=lc(e.history,v,Bt,F,ye,!1,d.v7_skipActionErrorRevalidation,We,Ge,wt,V,$e,Z,Sr,s,[T.route.id,ne]);En.filter(Te=>Te.key!==p).forEach(Te=>{let Vn=Te.key,Us=v.fetchers.get(Vn),cp=Mr(void 0,Us?Us.data:void 0);v.fetchers.set(Vn,cp),qt(Vn),Te.controller&&I.set(Vn,Te.controller)}),Ee({fetchers:new Map(v.fetchers)});let Na=()=>En.forEach(Te=>qt(Te.key));$.signal.addEventListener("abort",Na);let{loaderResults:Ia,fetcherResults:ee}=await Bs(v,Bt,Lr,En,Hn);if($.signal.aborted)return;$.signal.removeEventListener("abort",Na),q.delete(p),I.delete(p),En.forEach(Te=>I.delete(Te.key));let be=Ka(Ia);if(be)return kn(Hn,be.result,!1,{preventScrollReset:A});if(be=Ka(ee),be)return Z.add(be.key),kn(Hn,be.result,!1,{preventScrollReset:A});let{loaderData:Un,errors:Tr}=cc(v,Bt,Ia,void 0,En,ee,X);if(v.fetchers.has(p)){let Te=Yt(ne.data);v.fetchers.set(p,Te)}As(Ct),v.navigation.state==="loading"&&Ct>U?(Q(L,"Expected pending action"),O&&O.abort(),Lt(v.navigation.location,{matches:Bt,loaderData:Un,errors:Tr,fetchers:new Map(v.fetchers)})):(Ee({errors:Tr,loaderData:dc(v.loaderData,Un,Bt,Tr),fetchers:new Map(v.fetchers)}),We=!1)}async function rp(p,y,k,T,B,H,G,A,F){let D=v.fetchers.get(p);Qt(p,Mr(F,D?D.data:void 0),{flushSync:G});let z=new AbortController,$=Gn(e.history,k,z.signal);if(H){let ne=await _a(B,new URL($.url).pathname,$.signal,p);if(ne.type==="aborted")return;if(ne.type==="error"){Ot(p,y,ne.error,{flushSync:G});return}else if(ne.matches)B=ne.matches,T=Hr(B,k);else{Ot(p,y,Qe(404,{pathname:k}),{flushSync:G});return}}I.set(p,z);let Y=W,ie=(await wr("loader",v,$,[T],B,p))[T.route.id];if(rn(ie)&&(ie=await _s(ie,$.signal,!0)||ie),I.get(p)===z&&I.delete(p),!$.signal.aborted){if(V.has(p)){Qt(p,Yt(void 0));return}if(_n(ie))if(U>Y){Qt(p,Yt(void 0));return}else{Z.add(p),await kn($,ie,!1,{preventScrollReset:A});return}if(tt(ie)){Ot(p,y,ie.error);return}Q(!rn(ie),"Unhandled fetcher deferred data"),Qt(p,Yt(ie.data))}}async function kn(p,y,k,T){let{submission:B,fetcherSubmission:H,preventScrollReset:G,replace:A}=T===void 0?{}:T;y.response.headers.has("X-Remix-Revalidate")&&(We=!0);let F=y.response.headers.get("Location");Q(F,"Expected a Location header on the redirect Response"),F=sc(F,new URL(p.url),s);let D=ma(v.location,F,{_isRedirect:!0});if(n){let ne=!1;if(y.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(Ps.test(F)){const ye=e.history.createURL(F);ne=ye.origin!==t.location.origin||Sa(ye.pathname,s)==null}if(ne){A?t.location.replace(F):t.location.assign(F);return}}O=null;let z=A===!0||y.response.headers.has("X-Remix-Replace")?we.Replace:we.Push,{formMethod:$,formAction:Y,formEncType:Oe}=v.navigation;!B&&!H&&$&&Y&&Oe&&(B=hc(v.navigation));let ie=B||H;if(mg.has(y.response.status)&&ie&&vt(ie.formMethod))await Tt(z,D,{submission:de({},ie,{formAction:F}),preventScrollReset:G||j,enableViewTransition:k?te:void 0});else{let ne=Bo(D,B);await Tt(z,D,{overrideNavigation:ne,fetcherSubmission:H,preventScrollReset:G||j,enableViewTransition:k?te:void 0})}}async function wr(p,y,k,T,B,H){let G,A={};try{G=await wg(u,p,y,k,T,B,H,l,a)}catch(F){return T.forEach(D=>{A[D.route.id]={type:re.error,error:F}}),A}for(let[F,D]of Object.entries(G))if(Pg(D)){let z=D.result;A[F]={type:re.redirect,response:Tg(z,k,F,B,s,d.v7_relativeSplatPath)}}else A[F]=await Lg(D);return A}async function Bs(p,y,k,T,B){let H=p.matches,G=wr("loader",p,B,k,y,null),A=Promise.all(T.map(async z=>{if(z.matches&&z.match&&z.controller){let Y=(await wr("loader",p,Gn(e.history,z.path,z.controller.signal),[z.match],z.matches,z.key))[z.match.route.id];return{[z.key]:Y}}else return Promise.resolve({[z.key]:{type:re.error,error:Qe(404,{pathname:z.path})}})})),F=await G,D=(await A).reduce((z,$)=>Object.assign(z,$),{});return await Promise.all([Ig(y,F,B.signal,H,p.loaderData),Og(y,D,T)]),{loaderResults:F,fetcherResults:D}}function eo(){We=!0,Ge.push(...no()),$e.forEach((p,y)=>{I.has(y)&&wt.add(y),qt(y)})}function Qt(p,y,k){k===void 0&&(k={}),v.fetchers.set(p,y),Ee({fetchers:new Map(v.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function Ot(p,y,k,T){T===void 0&&(T={});let B=Tn(v.matches,y);Ca(p),Ee({errors:{[B.route.id]:k},fetchers:new Map(v.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Rs(p){return Le.set(p,(Le.get(p)||0)+1),V.has(p)&&V.delete(p),v.fetchers.get(p)||hg}function Ca(p){let y=v.fetchers.get(p);I.has(p)&&!(y&&y.state==="loading"&&q.has(p))&&qt(p),$e.delete(p),q.delete(p),Z.delete(p),d.v7_fetcherPersist&&V.delete(p),wt.delete(p),v.fetchers.delete(p)}function ap(p){let y=(Le.get(p)||0)-1;y<=0?(Le.delete(p),V.add(p),d.v7_fetcherPersist||Ca(p)):Le.set(p,y),Ee({fetchers:new Map(v.fetchers)})}function qt(p){let y=I.get(p);y&&(y.abort(),I.delete(p))}function Ms(p){for(let y of p){let k=Rs(y),T=Yt(k.data);v.fetchers.set(y,T)}}function Ds(){let p=[],y=!1;for(let k of Z){let T=v.fetchers.get(k);Q(T,"Expected fetcher: "+k),T.state==="loading"&&(Z.delete(k),p.push(k),y=!0)}return Ms(p),y}function As(p){let y=[];for(let[k,T]of q)if(T<p){let B=v.fetchers.get(k);Q(B,"Expected fetcher: "+k),B.state==="loading"&&(qt(k),q.delete(k),y.push(k))}return Ms(y),y.length>0}function lp(p,y){let k=v.blockers.get(p)||Rr;return oe.get(p)!==y&&oe.set(p,y),k}function Fs(p){v.blockers.delete(p),oe.delete(p)}function xa(p,y){let k=v.blockers.get(p)||Rr;Q(k.state==="unblocked"&&y.state==="blocked"||k.state==="blocked"&&y.state==="blocked"||k.state==="blocked"&&y.state==="proceeding"||k.state==="blocked"&&y.state==="unblocked"||k.state==="proceeding"&&y.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+y.state);let T=new Map(v.blockers);T.set(p,y),Ee({blockers:T})}function zs(p){let{currentLocation:y,nextLocation:k,historyAction:T}=p;if(oe.size===0)return;oe.size>1&&An(!1,"A router only supports one blocker at a time");let B=Array.from(oe.entries()),[H,G]=B[B.length-1],A=v.blockers.get(H);if(!(A&&A.state==="proceeding")&&G({currentLocation:y,nextLocation:k,historyAction:T}))return H}function to(p){let y=Qe(404,{pathname:p}),k=i||o,{matches:T,route:B}=pc(k);return no(),{notFoundMatches:T,route:B,error:y}}function no(p){let y=[];return X.forEach((k,T)=>{(!p||p(T))&&(k.cancel(),y.push(T),X.delete(T))}),y}function op(p,y,k){if(E=p,N=y,w=k||null,!h&&v.navigation===Oo){h=!0;let T=Hs(v.location,v.matches);T!=null&&Ee({restoreScrollPosition:T})}return()=>{E=null,N=null,w=null}}function js(p,y){return w&&w(p,y.map(T=>Gh(T,v.loaderData)))||p.key}function ip(p,y){if(E&&N){let k=js(p,y);E[k]=N()}}function Hs(p,y){if(E){let k=js(p,y),T=E[k];if(typeof T=="number")return T}return null}function Pa(p,y,k){if(f)if(p){if(Object.keys(p[0].params).length>0)return{active:!0,matches:sl(y,k,s,!0)}}else return{active:!0,matches:sl(y,k,s,!0)||[]};return{active:!1,matches:null}}async function _a(p,y,k,T){if(!f)return{type:"success",matches:p};let B=p;for(;;){let H=i==null,G=i||o,A=l;try{await f({signal:k,path:y,matches:B,fetcherKey:T,patch:(z,$)=>{k.aborted||ic(z,$,G,A,a)}})}catch(z){return{type:"error",error:z,partialMatches:B}}finally{H&&!k.aborted&&(o=[...o])}if(k.aborted)return{type:"aborted"};let F=Ln(G,y,s);if(F)return{type:"success",matches:F};let D=sl(G,y,s,!0);if(!D||B.length===D.length&&B.every((z,$)=>z.route.id===D[$].route.id))return{type:"success",matches:null};B=D}}function sp(p){l={},i=Bl(p,a,void 0,l)}function up(p,y){let k=i==null;ic(p,y,i||o,l,a),k&&(o=[...o],Ee({}))}return R={get basename(){return s},get future(){return d},get state(){return v},get routes(){return o},get window(){return t},initialize:Je,subscribe:St,enableScrollRestoration:op,navigate:kr,fetch:tp,revalidate:bn,createHref:p=>e.history.createHref(p),encodeLocation:p=>e.history.encodeLocation(p),getFetcher:Rs,deleteFetcher:ap,dispose:Gt,getBlocker:lp,deleteBlocker:Fs,patchRoutes:up,_internalFetchControllers:I,_internalActiveDeferreds:X,_internalSetRoutes:sp},R}function yg(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function xi(e,t,n,r,a,l,o,i){let s,u;if(o){s=[];for(let d of t)if(s.push(d),d.route.id===o){u=d;break}}else s=t,u=t[t.length-1];let f=xs(a||".",Cs(s,l),Sa(e.pathname,n)||e.pathname,i==="path");if(a==null&&(f.search=e.search,f.hash=e.hash),(a==null||a===""||a===".")&&u){let d=Ns(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let m=new URLSearchParams(f.search),b=m.getAll("index");m.delete("index"),b.filter(w=>w).forEach(w=>m.append("index",w));let E=m.toString();f.search=E?"?"+E:""}}return r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:pn([n,f.pathname])),wa(f)}function rc(e,t,n,r){if(!r||!yg(r))return{path:n};if(r.formMethod&&!Ng(r.formMethod))return{path:n,error:Qe(405,{method:r.formMethod})};let a=()=>({path:n,error:Qe(400,{type:"invalid-body"})}),l=r.formMethod||"get",o=e?l.toUpperCase():l.toLowerCase(),i=Vf(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!vt(o))return a();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((b,E)=>{let[w,N]=E;return""+b+w+"="+N+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!vt(o))return a();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}Q(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=_i(r.formData),u=r.formData;else if(r.body instanceof FormData)s=_i(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=uc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=uc(s)}catch{return a()}let f={formMethod:o,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(vt(f.formMethod))return{path:n,submission:f};let d=Wt(n);return t&&d.search&&Ns(d.search)&&s.append("index",""),d.search="?"+s,{path:wa(d),submission:f}}function ac(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(a=>a.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function lc(e,t,n,r,a,l,o,i,s,u,f,d,m,b,E,w){let N=w?tt(w[1])?w[1].error:w[1].data:void 0,h=e.createURL(t.location),c=e.createURL(a),g=n;l&&t.errors?g=ac(n,Object.keys(t.errors)[0],!0):w&&tt(w[1])&&(g=ac(n,w[0]));let S=w?w[1].statusCode:void 0,C=o&&S&&S>=400,R=g.filter((L,j)=>{let{route:O}=L;if(O.lazy)return!0;if(O.loader==null)return!1;if(l)return Pi(O,t.loaderData,t.errors);if(bg(t.loaderData,t.matches[j],L)||s.some(pe=>pe===L.route.id))return!0;let te=t.matches[j],le=L;return oc(L,de({currentUrl:h,currentParams:te.params,nextUrl:c,nextParams:le.params},r,{actionResult:N,actionStatus:S,defaultShouldRevalidate:C?!1:i||h.pathname+h.search===c.pathname+c.search||h.search!==c.search||Hf(te,le)}))}),v=[];return d.forEach((L,j)=>{if(l||!n.some(ve=>ve.route.id===L.routeId)||f.has(j))return;let O=Ln(b,L.path,E);if(!O){v.push({key:j,routeId:L.routeId,path:L.path,matches:null,match:null,controller:null});return}let te=t.fetchers.get(j),le=Hr(O,L.path),pe=!1;m.has(j)?pe=!1:u.has(j)?(u.delete(j),pe=!0):te&&te.state!=="idle"&&te.data===void 0?pe=i:pe=oc(le,de({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:N,actionStatus:S,defaultShouldRevalidate:C?!1:i})),pe&&v.push({key:j,routeId:L.routeId,path:L.path,matches:O,match:le,controller:new AbortController})}),[R,v]}function Pi(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,a=n!=null&&n[e.id]!==void 0;return!r&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!a}function bg(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Hf(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function oc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function ic(e,t,n,r,a){var l;let o;if(e){let u=r[e];Q(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),o=u.children}else o=n;let i=t.filter(u=>!o.some(f=>Uf(u,f))),s=Bl(i,a,[e||"_","patch",String(((l=o)==null?void 0:l.length)||"0")],r);o.push(...s)}function Uf(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var a;return(a=t.children)==null?void 0:a.some(l=>Uf(n,l))}):!1}async function kg(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];Q(a,"No route found in manifest");let l={};for(let o in r){let s=a[o]!==void 0&&o!=="hasErrorBoundary";An(!s,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!s&&!Vh.has(o)&&(l[o]=r[o])}Object.assign(a,l),Object.assign(a,de({},t(a),{lazy:void 0}))}async function Eg(e){let{matches:t}=e,n=t.filter(a=>a.shouldLoad);return(await Promise.all(n.map(a=>a.resolve()))).reduce((a,l,o)=>Object.assign(a,{[n[o].route.id]:l}),{})}async function wg(e,t,n,r,a,l,o,i,s,u){let f=l.map(b=>b.route.lazy?kg(b.route,s,i):void 0),d=l.map((b,E)=>{let w=f[E],N=a.some(c=>c.route.id===b.route.id);return de({},b,{shouldLoad:N,resolve:async c=>(c&&r.method==="GET"&&(b.route.lazy||b.route.loader)&&(N=!0),N?Sg(t,r,b,w,c,u):Promise.resolve({type:re.data,result:void 0}))})}),m=await e({matches:d,request:r,params:l[0].params,fetcherKey:o,context:u});try{await Promise.all(f)}catch{}return m}async function Sg(e,t,n,r,a,l){let o,i,s=u=>{let f,d=new Promise((E,w)=>f=w);i=()=>f(),t.signal.addEventListener("abort",i);let m=E=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:l},...E!==void 0?[E]:[]),b=(async()=>{try{return{type:"data",result:await(a?a(w=>m(w)):m())}}catch(E){return{type:"error",result:E}}})();return Promise.race([b,d])};try{let u=n.route[e];if(r)if(u){let f,[d]=await Promise.all([s(u).catch(m=>{f=m}),r]);if(f!==void 0)throw f;o=d}else if(await r,u=n.route[e],u)o=await s(u);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw Qe(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:re.data,result:void 0};else if(u)o=await s(u);else{let f=new URL(t.url),d=f.pathname+f.search;throw Qe(404,{pathname:d})}Q(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:re.error,result:u}}finally{i&&t.signal.removeEventListener("abort",i)}return o}async function Lg(e){let{result:t,type:n}=e;if(Wf(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:re.error,error:m}}return n===re.error?{type:re.error,error:new Rl(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:re.data,data:d,statusCode:t.status,headers:t.headers}}if(n===re.error){if(mc(t)){var r,a;if(t.data instanceof Error){var l,o;return{type:re.error,error:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:re.error,error:new Rl(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:ha(t)?t.status:void 0,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:re.error,error:t,statusCode:ha(t)?t.status:void 0}}if(_g(t)){var i,s;return{type:re.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((s=t.init)==null?void 0:s.headers)&&new Headers(t.init.headers)}}if(mc(t)){var u,f;return{type:re.data,data:t.data,statusCode:(u=t.init)==null?void 0:u.status,headers:(f=t.init)!=null&&f.headers?new Headers(t.init.headers):void 0}}return{type:re.data,data:t}}function Tg(e,t,n,r,a,l){let o=e.headers.get("Location");if(Q(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ps.test(o)){let i=r.slice(0,r.findIndex(s=>s.route.id===n)+1);o=xi(new URL(t.url),i,a,!0,o,l),e.headers.set("Location",o)}return e}function sc(e,t,n){if(Ps.test(e)){let r=e,a=r.startsWith("//")?new URL(t.protocol+r):new URL(r),l=Sa(a.pathname,n)!=null;if(a.origin===t.origin&&l)return a.pathname+a.search+a.hash}return e}function Gn(e,t,n,r){let a=e.createURL(Vf(t)).toString(),l={signal:n};if(r&&vt(r.formMethod)){let{formMethod:o,formEncType:i}=r;l.method=o.toUpperCase(),i==="application/json"?(l.headers=new Headers({"Content-Type":i}),l.body=JSON.stringify(r.json)):i==="text/plain"?l.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?l.body=_i(r.formData):l.body=r.formData}return new Request(a,l)}function _i(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function uc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Cg(e,t,n,r,a){let l={},o=null,i,s=!1,u={},f=n&&tt(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let m=d.route.id,b=t[m];if(Q(!_n(b),"Cannot handle redirect results in processLoaderData"),tt(b)){let E=b.error;f!==void 0&&(E=f,f=void 0),o=o||{};{let w=Tn(e,m);o[w.route.id]==null&&(o[w.route.id]=E)}l[m]=void 0,s||(s=!0,i=ha(b.error)?b.error.status:500),b.headers&&(u[m]=b.headers)}else rn(b)?(r.set(m,b.deferredData),l[m]=b.deferredData.data,b.statusCode!=null&&b.statusCode!==200&&!s&&(i=b.statusCode),b.headers&&(u[m]=b.headers)):(l[m]=b.data,b.statusCode&&b.statusCode!==200&&!s&&(i=b.statusCode),b.headers&&(u[m]=b.headers))}),f!==void 0&&n&&(o={[n[0]]:f},l[n[0]]=void 0),{loaderData:l,errors:o,statusCode:i||200,loaderHeaders:u}}function cc(e,t,n,r,a,l,o){let{loaderData:i,errors:s}=Cg(t,n,r,o);return a.forEach(u=>{let{key:f,match:d,controller:m}=u,b=l[f];if(Q(b,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(tt(b)){let E=Tn(e.matches,d==null?void 0:d.route.id);s&&s[E.route.id]||(s=de({},s,{[E.route.id]:b.error})),e.fetchers.delete(f)}else if(_n(b))Q(!1,"Unhandled fetcher revalidation redirect");else if(rn(b))Q(!1,"Unhandled fetcher deferred data");else{let E=Yt(b.data);e.fetchers.set(f,E)}}),{loaderData:i,errors:s}}function dc(e,t,n,r){let a=de({},t);for(let l of n){let o=l.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(a[o]=t[o]):e[o]!==void 0&&l.route.loader&&(a[o]=e[o]),r&&r.hasOwnProperty(o))break}return a}function fc(e){return e?tt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Tn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function pc(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Qe(e,t){let{pathname:n,routeId:r,method:a,type:l,message:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&n&&r?s="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"?s="defer() is not supported in actions":l==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new Rl(e||500,i,new Error(s),!0)}function Ka(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,a]=t[n];if(_n(a))return{key:r,result:a}}}function Vf(e){let t=typeof e=="string"?Wt(e):e;return wa(de({},t,{hash:""}))}function xg(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Pg(e){return Wf(e.result)&&pg.has(e.result.status)}function rn(e){return e.type===re.deferred}function tt(e){return e.type===re.error}function _n(e){return(e&&e.type)===re.redirect}function mc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function _g(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Wf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ng(e){return fg.has(e.toLowerCase())}function vt(e){return cg.has(e.toLowerCase())}async function Ig(e,t,n,r,a){let l=Object.entries(t);for(let o=0;o<l.length;o++){let[i,s]=l[o],u=e.find(m=>(m==null?void 0:m.route.id)===i);if(!u)continue;let f=r.find(m=>m.route.id===u.route.id),d=f!=null&&!Hf(f,u)&&(a&&a[u.route.id])!==void 0;rn(s)&&d&&await _s(s,n,!1).then(m=>{m&&(t[i]=m)})}}async function Og(e,t,n){for(let r=0;r<n.length;r++){let{key:a,routeId:l,controller:o}=n[r],i=t[a];e.find(u=>(u==null?void 0:u.route.id)===l)&&rn(i)&&(Q(o,"Expected an AbortController for revalidating fetcher deferred result"),await _s(i,o.signal,!0).then(u=>{u&&(t[a]=u)}))}}async function _s(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:re.data,data:e.deferredData.unwrappedData}}catch(a){return{type:re.error,error:a}}return{type:re.data,data:e.deferredData.data}}}function Ns(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Hr(e,t){let n=typeof t=="string"?Wt(t).search:t.search;if(e[e.length-1].route.index&&Ns(n||""))return e[e.length-1];let r=Ff(e);return r[r.length-1]}function hc(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:l,json:o}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:l,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Bo(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Bg(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Mr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Rg(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Yt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Mg(e,t){try{let n=e.sessionStorage.getItem(jf);if(n){let r=JSON.parse(n);for(let[a,l]of Object.entries(r||{}))l&&Array.isArray(l)&&t.set(a,new Set(l||[]))}}catch{}}function Dg(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(jf,JSON.stringify(n))}catch(r){An(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ga.apply(this,arguments)}const Xl=x.createContext(null),Gf=x.createContext(null),La=x.createContext(null),Jl=x.createContext(null),jn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),$f=x.createContext(null);function Ta(){return x.useContext(Jl)!=null}function Is(){return Ta()||Q(!1),x.useContext(Jl).location}function Qf(e){x.useContext(La).static||x.useLayoutEffect(e)}function qf(){let{isDataRoute:e}=x.useContext(jn);return e?qg():Ag()}function Ag(){Ta()||Q(!1);let e=x.useContext(Xl),{basename:t,future:n,navigator:r}=x.useContext(La),{matches:a}=x.useContext(jn),{pathname:l}=Is(),o=JSON.stringify(Cs(a,n.v7_relativeSplatPath)),i=x.useRef(!1);return Qf(()=>{i.current=!0}),x.useCallback(function(u,f){if(f===void 0&&(f={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=xs(u,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,l,e])}function Fg(e,t){return Kf(e,t)}function Kf(e,t,n,r){Ta()||Q(!1);let{navigator:a}=x.useContext(La),{matches:l}=x.useContext(jn),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Is(),f;if(t){var d;let N=typeof t=="string"?Wt(t):t;s==="/"||(d=N.pathname)!=null&&d.startsWith(s)||Q(!1),f=N}else f=u;let m=f.pathname||"/",b=m;if(s!=="/"){let N=s.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let E=Ln(e,{pathname:b}),w=Vg(E&&E.map(N=>Object.assign({},N,{params:Object.assign({},i,N.params),pathname:pn([s,a.encodeLocation?a.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?s:pn([s,a.encodeLocation?a.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),l,n,r);return t&&w?x.createElement(Jl.Provider,{value:{location:ga({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:we.Pop}},w):w}function zg(){let e=Qg(),t=ha(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:a},n):null,null)}const jg=x.createElement(zg,null);class Hg extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(jn.Provider,{value:this.props.routeContext},x.createElement($f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ug(e){let{routeContext:t,match:n,children:r}=e,a=x.useContext(Xl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(jn.Provider,{value:t},r)}function Vg(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let f=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);f>=0||Q(!1),o=o.slice(0,Math.min(o.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:b}=n,E=d.route.loader&&m[d.route.id]===void 0&&(!b||b[d.route.id]===void 0);if(d.route.lazy||E){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let b,E=!1,w=null,N=null;n&&(b=i&&d.route.id?i[d.route.id]:void 0,w=d.route.errorElement||jg,s&&(u<0&&m===0?(Kg("route-fallback"),E=!0,N=null):u===m&&(E=!0,N=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),c=()=>{let g;return b?g=w:E?g=N:d.route.Component?g=x.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,x.createElement(Ug,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?x.createElement(Hg,{location:n.location,revalidation:n.revalidation,component:w,error:b,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Yf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yf||{}),Zf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zf||{});function Wg(e){let t=x.useContext(Xl);return t||Q(!1),t}function Gg(e){let t=x.useContext(Gf);return t||Q(!1),t}function $g(e){let t=x.useContext(jn);return t||Q(!1),t}function Xf(e){let t=$g(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function Qg(){var e;let t=x.useContext($f),n=Gg(),r=Xf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qg(){let{router:e}=Wg(Yf.UseNavigateStable),t=Xf(Zf.UseNavigateStable),n=x.useRef(!1);return Qf(()=>{n.current=!0}),x.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ga({fromRouteId:t},l)))},[e,t])}const gc={};function Kg(e,t,n){gc[e]||(gc[e]=!0)}function Yg(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Zg(e){let{to:t,replace:n,state:r,relative:a}=e;Ta()||Q(!1);let{future:l,static:o}=x.useContext(La),{matches:i}=x.useContext(jn),{pathname:s}=Is(),u=qf(),f=xs(t,Cs(i,l.v7_relativeSplatPath),s,a==="path"),d=JSON.stringify(f);return x.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function mt(e){Q(!1)}function Xg(e){let{basename:t="/",children:n=null,location:r,navigationType:a=we.Pop,navigator:l,static:o=!1,future:i}=e;Ta()&&Q(!1);let s=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:s,navigator:l,static:o,future:ga({v7_relativeSplatPath:!1},i)}),[s,i,l,o]);typeof r=="string"&&(r=Wt(r));let{pathname:f="/",search:d="",hash:m="",state:b=null,key:E="default"}=r,w=x.useMemo(()=>{let N=Sa(f,s);return N==null?null:{location:{pathname:N,search:d,hash:m,state:b,key:E},navigationType:a}},[s,f,d,m,b,E,a]);return w==null?null:x.createElement(La.Provider,{value:u},x.createElement(Jl.Provider,{children:n,value:w}))}function Jg(e){let{children:t,location:n}=e;return Fg(Ni(t),n)}new Promise(()=>{});function Ni(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,a)=>{if(!x.isValidElement(r))return;let l=[...t,a];if(r.type===x.Fragment){n.push.apply(n,Ni(r.props.children,l));return}r.type!==mt&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ni(r.props.children,l)),n.push(o)}),n}function ev(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:x.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:x.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:x.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(this,arguments)}const tv="6";try{window.__reactRouterVersion=tv}catch{}function nv(e,t){return vg({basename:t==null?void 0:t.basename,future:Ml({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:jh({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||rv(),routes:e,mapRouteProperties:ev,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function rv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ml({},t,{errors:av(t.errors)})),t}function av(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Rl(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let l=window[a.__subType];if(typeof l=="function")try{let o=new l(a.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let l=new Error(a.message);l.stack="",n[r]=l}}else n[r]=a;return n}const lv=x.createContext({isTransitioning:!1}),ov=x.createContext(new Map),iv="startTransition",vc=xp[iv],sv="flushSync",yc=zh[sv];function uv(e){vc?vc(e):e()}function Dr(e){yc?yc(e):e()}class cv{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function dv(e){let{fallbackElement:t,router:n,future:r}=e,[a,l]=x.useState(n.state),[o,i]=x.useState(),[s,u]=x.useState({isTransitioning:!1}),[f,d]=x.useState(),[m,b]=x.useState(),[E,w]=x.useState(),N=x.useRef(new Map),{v7_startTransition:h}=r||{},c=x.useCallback(L=>{h?uv(L):L()},[h]),g=x.useCallback((L,j)=>{let{deletedFetchers:O,flushSync:te,viewTransitionOpts:le}=j;L.fetchers.forEach((ve,We)=>{ve.data!==void 0&&N.current.set(We,ve.data)}),O.forEach(ve=>N.current.delete(ve));let pe=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!le||pe){te?Dr(()=>l(L)):c(()=>l(L));return}if(te){Dr(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let ve=n.window.document.startViewTransition(()=>{Dr(()=>l(L))});ve.finished.finally(()=>{Dr(()=>{d(void 0),b(void 0),i(void 0),u({isTransitioning:!1})})}),Dr(()=>b(ve));return}m?(f&&f.resolve(),m.skipTransition(),w({state:L,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(i(L),u({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[n.window,m,f,N,c]);x.useLayoutEffect(()=>n.subscribe(g),[n,g]),x.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new cv)},[s]),x.useEffect(()=>{if(f&&o&&n.window){let L=o,j=f.promise,O=n.window.document.startViewTransition(async()=>{c(()=>l(L)),await j});O.finished.finally(()=>{d(void 0),b(void 0),i(void 0),u({isTransitioning:!1})}),b(O)}},[c,o,f,n.window]),x.useEffect(()=>{f&&o&&a.location.key===o.location.key&&f.resolve()},[f,m,a.location,o]),x.useEffect(()=>{!s.isTransitioning&&E&&(i(E.state),u({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),w(void 0))},[s.isTransitioning,E]),x.useEffect(()=>{},[]);let S=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:L=>n.navigate(L),push:(L,j,O)=>n.navigate(L,{state:j,preventScrollReset:O==null?void 0:O.preventScrollReset}),replace:(L,j,O)=>n.navigate(L,{replace:!0,state:j,preventScrollReset:O==null?void 0:O.preventScrollReset})}),[n]),C=n.basename||"/",R=x.useMemo(()=>({router:n,navigator:S,static:!1,basename:C}),[n,S,C]),v=x.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return x.useEffect(()=>Yg(r,n.future),[r,n.future]),x.createElement(x.Fragment,null,x.createElement(Xl.Provider,{value:R},x.createElement(Gf.Provider,{value:a},x.createElement(ov.Provider,{value:N.current},x.createElement(lv.Provider,{value:s},x.createElement(Xg,{basename:C,location:a.location,navigationType:a.historyAction,navigator:S,future:v},a.initialized||n.future.v7_partialHydration?x.createElement(fv,{routes:n.routes,future:n.future,state:a}):t))))),null)}const fv=x.memo(pv);function pv(e){let{routes:t,future:n,state:r}=e;return Kf(t,void 0,r,n)}var bc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bc||(bc={}));var kc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kc||(kc={}));const Jf={ar:{themeLight:"فاتح",themeDark:"داكن",navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
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
    `,footerText:"جميع الحقوق محفوظة ©",buildTotalLabel:"الإجمالي:",preview:"معاينة",partNames:{shell:"الهيكل الأمامي",trimpiece:"الجزء الأوسط",faceButtons:"أزرار الأوجه",stickL:"العصا اليسرى",stickR:"العصا اليمنى",backShellMain:"الجزء الخلفي"},formSuccess:"شكرًا لتواصلك معنا! استلمنا رسالتك وسنرد عليك قريبًا.",logo:"EZ GAMING",totalLabel:"الإجمالي",addToCart:"أضِف إلى السلة",front:"الأمام",back:"الخلف",selectPart:"اختر جزءًا",availableColors:"الألوان",availableOptions:"الخيارات",partsColorsHeading:"الألوان",partsOptionsHeading:"الخيارات",partsTitle:"الأجزاء",sectionFront:"الوجه الأمامي",sectionBack:"الوجه الخلفي",side_front:"أمام",side_back:"خلف",loadingConfigurator:"جاري تحميل الإعدادات...",chooseLanguage:"اختيار اللغة",currencyPrefix:"د.ب ",pricePrefix:"+ ",alertNone:"لم يتم اختيار أي تخصيص بعد.",alertAdded:"تمت إضافة التخصيص إلى السلة.",part_shell:"هيكل المقدّمة",part_trimpiece:"القطعة الوسطى",part_psButton:"زر PS",part_share:"زر المشاركة",part_options:"زر الخيارات",part_faceButtons:"أزرار الأوجه",part_stickL:"عصا التحكّم اليسرى",part_stickR:"عصا التحكّم اليمنى",part_touchpad:"لوحة اللمس",part_bumpers:"الأزرار العلوية",part_backShellMain:"هيكل الخلف",part_backHandles:"مقابض الخلف",part_backTriggers:"أزرار الزناد الخلفية",color_orange:"برتقالي",color_yellow:"أصفر",color_lightBlue:"أزرق فاتح",color_steelGray:"رمادي معدني",color_blue:"أزرق",color_midnightBlue:"أزرق داكن",color_magenta:"أرجواني محمر",color_softWhite:"أبيض ناعم",color_hotPink_shell:"وردي فاقع",color_matteBlack:"أسود مطفي",color_black:"أسود",color_lightGray:"رمادي فاتح",color_red:"أحمر",color_darkBluePurple:"أزرق بنفسجي داكن",color_mintGreen:"أخضر نعناعي",color_royalPurple:"بنفسجي ملكي",color_hotPink:"وردي فاقع",color_skyBlue:"أزرق سماوي",color_pinkViolet:"وردي بنفسجي",color_indigoPurple:"نيلي بنفسجي",color_clear:"شفاف",color_transRed:"أحمر شفاف",color_transBlue:"أزرق شفاف",color_transGreen:"أخضر شفاف",color_transPurple:"بنفسجي شفاف",color_gunmetal:"رمادي معدني داكن",color_transBrown:"بني شفاف",color_frostedWhite:"أبيض ضبابي",option_standard:"Standard",option_halleffect:"Hall Effect",option_tmr:"TMR",cartTitle:"سلة المشتريات",summaryTitle:"الملخص",cartEmpty:"السلة فارغة حاليًا. يمكنك تخصيص متحكم جديد من صفحة التخصيص.",itemsCountLabel:"عدد القطع",subtotalLabel:"الإجمالي الفرعي",shippingLabel:"الشحن",shippingNote:"سيتم تحديده لاحقًا",totalLabelBold:"الإجمالي",checkoutCta:"إتمام الشراء",itemRemove:"إزالة",itemDetailsHeading:"تفاصيل التخصيص:",itemLineTotalLabel:"المجموع لهذا العنصر",alertEmptyForCheckout:"السلة فارغة، يرجى إضافة متحكم واحد على الأقل.",productName:"متحكم PS5 مخصّص",parts:{shell:"هيكل المقدّمة",trimpiece:"القطعة الوسطى",psButton:"زر PS",share:"زر المشاركة",options:"زر الخيارات",faceButtons:"أزرار الأوجه",stickL:"عصا التحكم اليسرى",stickR:"عصا التحكم اليمنى",touchpad:"لوحة اللمس",bumpers:"الأزرار العلوية",backShellMain:"هيكل الخلف",backHandles:"مقابض الخلف",backTriggers:"أزرار الزناد الخلفية"},checkoutTitle:"إتمام الشراء",formTitle:"بيانات العميل والدفع",firstNameLabel:"الاسم الأول *",lastNameLabel:"اسم العائلة *",phoneLabel:"رقم الهاتف *",emailLabel:"البريد الإلكتروني *",countryLabel:"الدولة *",cityLabel:"المدينة *",stateLabel:"المحافظة / الولاية *",postalCodeLabel:"الرمز البريدي (اختياري)",addressLine1Label:"العنوان التفصيلي (سطر 1) *",addressLine2Label:"العنوان (سطر 2) اختياري",shippingMethodLabel:"طريقة الشحن",shippingStandard:"شحن عادي (3–5 أيام)",shippingExpress:"شحن سريع (1–2 يوم)",shippingPickup:"استلام من المتجر",paymentMethodsTitle:"طريقة الدفع (للتجربة فقط – بدون تنفيذ الدفع الفعلي)",paymentCard:"بطاقة ائتمانية / مدى",paymentOnline:"بوابة دفع إلكترونية",paymentCod:"الدفع عند الاستلام (إن توفر)",termsText:"أقر بأن جميع بيانات التخصيص صحيحة، وأوافق على الشروط والأحكام وسياسة الاستبدال.",placeOrderBtn:"تأكيد الطلب (بدون دفع)",summaryEmpty:"لا توجد عناصر في السلة. يرجى العودة إلى صفحة التخصيص.",shippingSummaryNote:"سيتم حسابه حسب العنوان وطريقة الشحن",totalDueLabel:"الإجمالي المستحق (بدون رسوم الدفع)",alertNoItems:"لا توجد عناصر في السلة لإتمام الطلب.",paymentTitle:"الدفع (تجريبي)",paymentPayNow:"ادفع الآن",paymentNoDraft:"لا يوجد طلب محفوظ. سيتم الرجوع إلى السلة...",paymentAmountDue:"المبلغ المستحق:",paymentProcessing:"جاري معالجة الدفع (تجريبيًا)...",paymentConfirmed:"تم تأكيد الدفع. جارٍ التحويل...",paymentStartFailed:"فشل بدء الدفع.",confirmationTitle:"تأكيد الدفع",confirmationStatus:"تم تأكيد الدفع",confirmationCta:"الانتقال إلى ملخص الطلب",orderSummaryTitle:"ملخص الطلب",orderStatusMissing:"لا توجد بيانات للطلب. سيتم الرجوع إلى السلة...",orderStatusLabel:"الحالة:",orderStatusConfirmed:"تم تأكيد الدفع",orderItemFallback:"عنصر",orderTotalLabel:"الإجمالي:",trackTitle:"تتبع الطلب",trackNoOrderId:"لم يتم العثور على رقم الطلب في الرابط.",trackLoadingPrefix:"جاري تحميل الطلب ",trackLoaded:"تم تحميل الطلب.",trackFailedPrefix:"فشل تحميل الطلب: ",trackOrderIdLabel:"رقم الطلب",trackStatusLabel:"الحالة",trackDateLabel:"التاريخ",trackTotalLabel:"الإجمالي",trackSalesOrderTitle:"تفاصيل الطلب",trackNoItems:"لا توجد عناصر.",trackQtyLabel:"الكمية:",trackOrderReceived:"تم استلام الطلب",trackOrderProcessing:"قيد المعالجة",trackOnTheWay:"في الطريق",trackDelivered:"تم التسليم",posTitle:"نقطة البيع",posCardTitle:"نقطة البيع",posStatusAddedPrefix:"تمت الإضافة إلى السلة: ",posStatusLoading:"جاري تحميل المنتجات...",posStatusNoItems:"لا توجد عناصر.",posStatusLoadedSuffix:" عنصر تم تحميلها.",posStatusFailedPrefix:"فشل تحميل العناصر: ",posItemFallback:"عنصر",posStockLabel:"المخزون:",posAddToCart:"أضف إلى السلة"},en:{themeLight:"Light",themeDark:"Dark",navPremade:"Premade controllers",navContact:"Contact",navBuildCta:"Build your own",heroBadge:"Next-gen custom shop",heroTitle:'Craft your own <span class="highlight">custom PS5 controller</span>',heroSub:"Choose shell, buttons and triggers. Start from a clean build or pick one of our EZ GAMING presets.",heroCreateBtn:"Create your own controller",heroPremadeBtn:"Browse premade builds",heroNote:"Prices start from <strong>BHD 4.00</strong>. No subscription – just fully custom gear.",heroLiveTag:"Live preview",premadeTitle:"Premade EZ GAMING builds",premadeSub:"A curated set of 20 controllers generated from the same color system used in the configurator, with true previews for each part.",contactTitle:"Contact us",contactCardTitle:"Send us a message",contactCardText:"Questions about bulk orders, finishes, or sponsorships? Share the details and we'll get back to you.",contactLabelName:"Name",contactLabelEmail:"Email",contactLabelMessage:"Message",contactSubmit:"Send message",contactMeta:`
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
    `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly.",logo:"EZ GAMING",totalLabel:"Total",addToCart:"ADD TO CART",front:"Front",back:"Back",selectPart:"Select a part",availableColors:"Color",availableOptions:"Options",partsColorsHeading:"Color",partsOptionsHeading:"Options",partsTitle:"Parts",sectionFront:"Front",sectionBack:"Back",side_front:"Front",side_back:"Back",loadingConfigurator:"Loading configurator...",chooseLanguage:"Language",currencyPrefix:"BHD ",pricePrefix:"+ ",alertNone:"No custom options selected yet.",alertAdded:"Configuration added to cart.",part_shell:"Shell",part_trimpiece:"Trim Piece",part_psButton:"PS Button",part_share:"Share Button",part_options:"Options Button",part_faceButtons:"Face Buttons",part_stickL:"Left Stick",part_stickR:"Right Stick",part_touchpad:"Touchpad",part_bumpers:"Bumpers",part_backShellMain:"Back Shell",part_backHandles:"Back Handles",part_backTriggers:"Back Triggers",color_orange:"Orange",color_yellow:"Yellow",color_lightBlue:"Light Blue",color_steelGray:"Steel Gray",color_blue:"Blue",color_midnightBlue:"Midnight Blue",color_magenta:"Magenta",color_softWhite:"Soft White",color_hotPink_shell:"Hot Pink",color_matteBlack:"Matte Black",color_black:"Black",color_lightGray:"Light Gray",color_red:"Red",color_darkBluePurple:"Dark Blue-Purple",color_mintGreen:"Mint Green",color_royalPurple:"Royal Purple",color_hotPink:"Hot Pink",color_skyBlue:"Sky Blue",color_pinkViolet:"Pink-Violet",color_indigoPurple:"Indigo Purple",color_clear:"Clear Transparent",color_transRed:"Transparent Red",color_transBlue:"Transparent Blue",color_transGreen:"Transparent Green",color_transPurple:"Transparent Purple",color_gunmetal:"Gunmetal Gray",color_transBrown:"Transparent Brown",color_frostedWhite:"Frosted White",option_standard:"Standard",option_halleffect:"Hall Effect",option_tmr:"TMR",cartTitle:"Shopping Cart",summaryTitle:"Summary",cartEmpty:"Your cart is currently empty. You can create a new custom controller from the configurator page.",itemsCountLabel:"Items",subtotalLabel:"Subtotal",shippingLabel:"Shipping",shippingNote:"To be calculated later",totalLabelBold:"Total",checkoutCta:"Checkout",itemRemove:"Remove",itemDetailsHeading:"Customization details:",itemLineTotalLabel:"Line total",alertEmptyForCheckout:"Your cart is empty. Please add at least one controller.",productName:"Custom PS5 Controller",parts:{shell:"Front shell",trimpiece:"Center trim",psButton:"PS button",share:"Share button",options:"Options button",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",touchpad:"Touchpad",bumpers:"Bumpers",backShellMain:"Back shell",backHandles:"Back handles",backTriggers:"Back triggers"},checkoutTitle:"Checkout",formTitle:"Customer & payment details",firstNameLabel:"First name *",lastNameLabel:"Last name *",phoneLabel:"Phone *",emailLabel:"Email *",countryLabel:"Country *",cityLabel:"City *",stateLabel:"State / Province *",postalCodeLabel:"Postal code (optional)",addressLine1Label:"Address line 1 *",addressLine2Label:"Address line 2 (optional)",shippingMethodLabel:"Shipping method",shippingStandard:"Standard shipping (3–5 days)",shippingExpress:"Express shipping (1–2 days)",shippingPickup:"Store pickup",paymentMethodsTitle:"Payment method (demo only – no real charge)",paymentCard:"Credit / debit card",paymentOnline:"Online payment gateway",paymentCod:"Cash on delivery (if available)",termsText:"I confirm all customization details are correct and agree to the terms & conditions.",placeOrderBtn:"Confirm order (no payment)",summaryEmpty:"Your cart is empty. Please go back to the configurator.",shippingSummaryNote:"Will be calculated based on address and method",totalDueLabel:"Total due (excluding gateway fees)",alertNoItems:"There are no items in the cart to place an order.",paymentTitle:"Payment (demo)",paymentPayNow:"Pay now",paymentNoDraft:"No order draft found. Redirecting to cart...",paymentAmountDue:"Amount due:",paymentProcessing:"Processing payment (demo)...",paymentConfirmed:"Payment confirmed. Redirecting...",paymentStartFailed:"Failed to start payment.",confirmationTitle:"Payment confirmation",confirmationStatus:"Payment confirmed",confirmationCta:"Go to order summary",orderSummaryTitle:"Order summary",orderStatusMissing:"No order data found. Redirecting to cart...",orderStatusLabel:"Status:",orderStatusConfirmed:"Payment confirmed",orderItemFallback:"Item",orderTotalLabel:"Total:",trackTitle:"Track order",trackNoOrderId:"No order id provided in the link.",trackLoadingPrefix:"Loading order ",trackLoaded:"Order loaded.",trackFailedPrefix:"Failed to load order: ",trackOrderIdLabel:"Order ID",trackStatusLabel:"Status",trackDateLabel:"Date",trackTotalLabel:"Total",trackSalesOrderTitle:"Sales order details",trackNoItems:"No items found.",trackQtyLabel:"Qty:",trackOrderReceived:"Order received",trackOrderProcessing:"Order processing",trackOnTheWay:"On the way",trackDelivered:"Delivered",posTitle:"POS",posCardTitle:"Point of sale",posStatusAddedPrefix:"Added to cart: ",posStatusLoading:"Loading items...",posStatusNoItems:"No items found.",posStatusLoadedSuffix:" items loaded.",posStatusFailedPrefix:"Failed to load items: ",posItemFallback:"Item",posStockLabel:"Stock:",posAddToCart:"Add to cart"}};function mv(){const e=qf(),[t,n]=x.useState(!1),r=o=>{const i=document.getElementById(o);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},a=()=>{e("/configurator")};x.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const o=document.getElementById("year");o&&(o.textContent=new Date().getFullYear().toString());const i=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],s=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],u=[...i,...s],f={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},d=new Set(["shell","trimpiece","backShellMain","backHandles"]),m=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],b=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],E=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),w=[{id:"shell",mask:"/assets/masks/leftShell.png"},{id:"trimpiece",mask:"/assets/masks/centerBody.png"},{id:"faceButtons",mask:"/assets/masks/faceButtons.png"},{id:"stickL",mask:"/assets/masks/stickL.png"},{id:"stickR",mask:"/assets/masks/stickR.png"},{id:"touchpad",mask:"/assets/masks/touchpad.png"},{id:"share",mask:"/assets/masks/share.png"},{id:"options",mask:"/assets/masks/options.png"},{id:"psButton",mask:"/assets/masks/psButton.png"},{id:"bumpers",mask:"/assets/masks/bumperL.png"}];function N(V){return d.has(V)?m:b}function h(V){return V[Math.floor(Math.random()*V.length)]}function c(V,X){const oe={};let Ie=0;return u.forEach(Gt=>{const St=N(Gt.id),Ee=h(St);oe[Gt.id]=Ee,Ie+=f[Gt.id]||0}),{id:V,name:(X==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(V+1),colors:oe,total:Ie}}function g(V,X){const oe=V.toFixed(2);return X==="ar"?oe+" د.ب":"BHD "+oe}const S=Jf;let C=localStorage.getItem("ez_lang")||"ar";function R(){document.documentElement.lang=C,document.documentElement.dir=C==="ar"?"rtl":"ltr"}function v(V){return S[C][V]||V}const L=document.getElementById("themeToggle"),j=document.getElementById("mobileThemeToggle");let O=localStorage.getItem("ez_theme")||"dark";function te(){document.body.classList.toggle("theme-light",O==="light")}function le(){const V=v("themeLight"),X=v("themeDark");return O==="dark"?V:X}function pe(){const V=le();L&&(L.textContent=V),j&&(j.textContent=V)}function ve(){O=O==="dark"?"light":"dark",localStorage.setItem("ez_theme",O),te(),pe()}function We(){const V=S[C];document.querySelectorAll("[data-i18n]").forEach(Ie=>{const Je=Ie.getAttribute("data-i18n");V[Je]&&(Ie.textContent=V[Je])}),document.querySelectorAll("[data-i18n-html]").forEach(Ie=>{const Je=Ie.getAttribute("data-i18n-html");V[Je]&&(Ie.innerHTML=V[Je])});const X=document.getElementById("langToggle");X&&(X.textContent=C==="ar"?"EN":"AR");const oe=document.getElementById("mobileLangToggle");oe&&(oe.textContent=C==="ar"?"EN":"AR"),pe()}let Ge=[];function wt(V){const X=S[C],oe=document.createElement("article");oe.className="build-card";const Ie=document.createElement("div");Ie.className="build-thumb";const Je=document.createElement("div");Je.className="thumb-controller";const Gt=document.createElement("div");Gt.className="thumb-base",Je.appendChild(Gt),w.forEach(Tt=>{const Er=V.colors[Tt.id];if(!Er)return;const $t=document.createElement("div");$t.className="thumb-layer",$t.style.setProperty("--mask-url",`url('${Tt.mask}')`),$t.style.setProperty("--tint",Er.hex),E.has(Er.hex.toLowerCase())?$t.style.setProperty("--tint-opacity","0.35"):$t.style.setProperty("--tint-opacity","1"),Je.appendChild($t)}),Ie.appendChild(Je);const St=document.createElement("div");St.className="build-body";const Ee=document.createElement("div");Ee.className="build-title",Ee.textContent=V.name;const Lt=document.createElement("div");Lt.className="build-price",Lt.innerHTML=g(V.total,C);const kr=document.createElement("div");kr.className="build-color-row";const bn=document.createElement("button");return bn.className="build-cta",bn.type="button",bn.textContent=X.preview,bn.addEventListener("click",a),St.appendChild(Ee),St.appendChild(Lt),St.appendChild(kr),St.appendChild(bn),oe.appendChild(Ie),oe.appendChild(St),oe}function I(){const V=document.getElementById("buildGrid");if(V){if(V.innerHTML="",Ge.length)Ge=Ge.map((X,oe)=>c(oe,C));else for(let X=0;X<20;X++)Ge.push(c(X,C));Ge.forEach(X=>V.appendChild(wt(X)))}}function W(V){C=V,localStorage.setItem("ez_lang",V),R(),We(),I()}const U=document.getElementById("langToggle"),q=document.getElementById("contactForm"),Z=()=>{W(C==="ar"?"en":"ar")},$e=V=>{V.preventDefault(),alert(S[C].formSuccess),q==null||q.reset()},Le=document.getElementById("mobileLangToggle");return U==null||U.addEventListener("click",Z),Le==null||Le.addEventListener("click",Z),L==null||L.addEventListener("click",ve),j==null||j.addEventListener("click",ve),q==null||q.addEventListener("submit",$e),R(),We(),te(),pe(),I(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",U==null||U.removeEventListener("click",Z),Le==null||Le.removeEventListener("click",Z),L==null||L.removeEventListener("click",ve),j==null||j.removeEventListener("click",ve),q==null||q.removeEventListener("submit",$e)}},[e]),x.useEffect(()=>(document.body.classList.toggle("mobile-nav-open",t),()=>document.body.classList.remove("mobile-nav-open")),[t]);const l=()=>n(!1);return P.jsxs("div",{className:"home-page",children:[P.jsxs("header",{className:"top-nav",children:[P.jsx("div",{className:"nav-left",children:P.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[P.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),P.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),P.jsxs("button",{className:"nav-menu-btn",type:"button","aria-label":t?"Close menu":"Open menu","aria-expanded":t?"true":"false","aria-controls":"mobileNavDrawer",onClick:()=>n(o=>!o),children:[P.jsx("span",{}),P.jsx("span",{}),P.jsx("span",{})]}),P.jsxs("div",{className:"nav-right",children:[P.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>r("premadeSection")}),P.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>r("contactSection")}),P.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:a}),P.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"}),P.jsx("button",{className:"nav-link nav-theme",id:"themeToggle",type:"button",children:"فاتح"})]})]}),P.jsx("div",{className:`mobile-nav-overlay ${t?"open":""}`,onClick:l}),P.jsxs("aside",{className:`mobile-nav-drawer ${t?"open":""}`,id:"mobileNavDrawer","aria-hidden":!t,children:[P.jsx("button",{className:"mobile-nav-link",type:"button","data-i18n":"navPremade",onClick:()=>{r("premadeSection"),l()}}),P.jsx("button",{className:"mobile-nav-link",type:"button","data-i18n":"navContact",onClick:()=>{r("contactSection"),l()}}),P.jsx("button",{className:"mobile-nav-link mobile-nav-cta",type:"button","data-i18n":"navBuildCta",onClick:()=>{a(),l()}}),P.jsx("button",{className:"mobile-nav-link mobile-nav-lang",id:"mobileLangToggle",type:"button",children:"EN"}),P.jsx("button",{className:"mobile-nav-link mobile-nav-theme",id:"mobileThemeToggle",type:"button",children:"فاتح"})]}),P.jsxs("section",{className:"hero",children:[P.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:P.jsx("source",{src:"/assets/back.mp4",type:"video/mp4"})}),P.jsx("div",{className:"hero-overlay"}),P.jsx("div",{className:"hero-inner",children:P.jsxs("div",{children:[P.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),P.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),P.jsxs("div",{className:"hero-actions",children:[P.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:a}),P.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>r("premadeSection")})]})]})})]}),P.jsxs("section",{className:"section",id:"premadeSection",children:[P.jsx("div",{className:"section-header",children:P.jsx("div",{children:P.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),P.jsx("div",{className:"build-grid",id:"buildGrid"})]}),P.jsxs("section",{className:"section",id:"contactSection",children:[P.jsx("div",{className:"section-header",children:P.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),P.jsxs("div",{className:"contact-grid",children:[P.jsxs("div",{className:"contact-card",children:[P.jsx("h3",{"data-i18n":"contactCardTitle"}),P.jsx("p",{"data-i18n":"contactCardText"}),P.jsxs("form",{id:"contactForm",children:[P.jsxs("div",{className:"contact-form-group",children:[P.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),P.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),P.jsxs("div",{className:"contact-form-group",children:[P.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),P.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),P.jsxs("div",{className:"contact-form-group",children:[P.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),P.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),P.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),P.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),P.jsxs("footer",{className:"footer",children:[P.jsx("span",{"data-i18n":"footerText"}),P.jsx("span",{id:"year"})]})]})}const hv=`


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
<button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
</div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
<a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
<a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
<a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
<button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
<button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
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
<button class="flip-toggle" id="controllerFlipBtn" type="button" aria-label="الأمام">
<span class="flip-toggle-preview" aria-hidden="true">
<img class="flip-toggle-front" alt="" src="/assets/controller.png"/>
<img class="flip-toggle-back" alt="" src="/assets/controller_back.png"/>
</span>
</button>
</div>
    <div class="mobile-panel-switch" id="mobilePanelSwitch" aria-label="تبديل لوحة الأجزاء والألوان">
      <button class="panel-switch-btn active" data-panel="options" type="button" aria-pressed="true">
        <span data-i18n="partsOptionsHeading">الخيارات</span>
      </button>
      <button class="panel-switch-btn" data-panel="colors" type="button" aria-pressed="false">
        <span data-i18n="partsColorsHeading">الألوان</span>
      </button>
    </div>
  </div>
</div>
<!-- COLORS COLUMN (MIDDLE) -->
<div class="colors-column" id="colors-column">
<div class="color-panel">
<!-- Top header: part name + options title -->
<div class="color-panel-header" id="colorPanelHeaderTop">
<div class="color-panel-title" id="colorPanelTitle">اختر جزءًا</div>
<div class="color-panel-sub" id="optionsPanelSub">الخيارات</div>
</div>
<!-- Options grid (stick type ...) -->
<div class="color-panel-grid" id="optionsPanelGrid"></div>
<!-- Bottom header: colors title -->
<div class="color-panel-header" id="colorPanelHeaderBottom">
<div class="color-panel-sub" id="colorPanelSub">الألوان</div>
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
<button class="mobile-options-tab" data-tab="options" data-i18n="partsOptionsHeading" type="button">الخيارات</button>
<button class="mobile-options-tab" data-tab="colors" data-i18n="partsColorsHeading" type="button">الألوان</button>
</div>
<div class="mobile-options-grid" id="mobileOptionsGrid"></div>
</div>
<div class="parts-accordion">
<div class="accordion-item open">
<button class="accordion-header" type="button">
<div class="parts-title" data-i18n="partsOptionsHeading">الخيارات</div>
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
<div class="parts-title" data-i18n="partsColorsHeading">الألوان</div>
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
<button class="control-btn control-colors" data-panel="colors" type="button" aria-label="الألوان">
<span class="control-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" role="img" aria-hidden="true">
<circle cx="7" cy="9" r="3.2" fill="#ff5c7a"/>
<circle cx="16.5" cy="8.5" r="3" fill="#42a5ff"/>
<circle cx="13" cy="16" r="4" fill="#f6d743"/>
</svg>
</span>
<span class="control-label" data-i18n="partsColorsHeading">الألوان</span>
</button>
<button class="control-btn control-options active" data-panel="options" type="button" aria-label="الخيارات">
<span class="control-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
<path d="M4 7h10"/>
<path d="M4 12h16"/>
<path d="M4 17h8"/>
<circle cx="17" cy="7" r="2.2" fill="currentColor"/>
<circle cx="9" cy="17" r="2.2" fill="currentColor"/>
</svg>
</span>
<span class="control-label" data-i18n="partsOptionsHeading">الخيارات</span>
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



`,gv=`


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
    const i18n = window.__EZ_I18N__ || {};

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

      const perPage = 200;
      const maxPages = 10; // safety cap to avoid runaway loops
      const allItems = [];

      for (let page = 1; page <= maxPages; page++) {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("per_page", String(perPage));
        if (ZOHO_ORG_ID) {
          params.set("organization_id", ZOHO_ORG_ID);
        }
        const url = ZOHO_ITEMS_ENDPOINT + "?" + params.toString();
        console.log("[Zoho Debug] Fetching items page", page, "from:", url);
        try {
          const headers = {};
          if (ZOHO_ACCESS_TOKEN) {
            headers.Authorization = "Zoho-oauthtoken " + ZOHO_ACCESS_TOKEN;
          }
          const res = await fetch(url, Object.keys(headers).length ? { headers } : undefined);
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

    const controllerFlipBtn = document.getElementById("controllerFlipBtn");
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
    const themeToggle = document.getElementById("themeToggle");
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
    const navMenuBtn = document.querySelector(".nav-menu-btn");
    const mobileNavOverlay = document.getElementById("mobileNavOverlay");
    const mobileNavDrawer = document.getElementById("mobileNavDrawer");
    const langSwitchBtn = document.getElementById("langSwitchBtn");
    const configuratorControls = document.getElementById("configuratorControls");
    const panelButtons = configuratorControls ? configuratorControls.querySelectorAll("[data-panel]") : [];
    const panelSwitchButtons = document.querySelectorAll(".panel-switch-btn");
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
      const mobile = isMobileLayout();
      selectionPaletteMode = mobile ? null : panel;

      document.body.classList.toggle("config-panel-options", panel === "options");
      document.body.classList.toggle("config-panel-colors", panel === "colors");

      panelButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.panel === panel);
        btn.setAttribute("aria-pressed", btn.dataset.panel === panel ? "true" : "false");
      });
      panelSwitchButtons.forEach(btn => {
        const isActive = btn.dataset.panel === panel;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      if (!mobile && accordionItems.length >= 2) {
        accordionItems.forEach((item, idx) => {
          const isOptions = panel === "options";
          item.classList.toggle("open", isOptions ? idx === 0 : idx === 1);
        });
        refreshAccordionHeights();
      }

      if (selectedPartId) {
        openColorPanelForPart(selectedPartId);
      }
      if (mobile) {
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
      if (!addToCartBtn || !addToCartHome) return;
      if (addToCartBtn.parentElement !== addToCartHome.parent) {
        if (addToCartHome.next && addToCartHome.next.parentNode === addToCartHome.parent) {
          addToCartHome.parent.insertBefore(addToCartBtn, addToCartHome.next);
        } else {
          addToCartHome.parent.appendChild(addToCartBtn);
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
      mobileSelectedPart.style.display = "none";
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

    panelSwitchButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const panel = btn.dataset.panel;
        if (!panel) return;
        setPanel(panel);
      });
    });

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

    let currentTheme = localStorage.getItem("ez_theme") || "dark";

    function applyTheme() {
      document.body.classList.toggle("theme-light", currentTheme === "light");
    }

    function themeLabel() {
      const lightLabel = t("themeLight");
      const darkLabel = t("themeDark");
      return currentTheme === "dark" ? lightLabel : darkLabel;
    }

    function updateThemeLabel() {
      const label = themeLabel();
      if (themeToggle) themeToggle.textContent = label;
      if (mobileThemeToggle) mobileThemeToggle.textContent = label;
    }

    function toggleTheme() {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("ez_theme", currentTheme);
      applyTheme();
      updateThemeLabel();
    }

    if (navLangToggle) {
      navLangToggle.addEventListener("click", toggleLanguage);
    }

    if (mobileLangToggle) {
      mobileLangToggle.addEventListener("click", toggleLanguage);
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener("click", toggleTheme);
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

    applyTheme();
    updateThemeLabel();

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
      const mobile = isMobileLayout();
      const showOptions = mobile ? hasOptions : (selectionPaletteMode === "options" ? true : (selectionPaletteMode === "colors" ? false : (!hasColors && hasOptions)));
      const showColors = mobile ? hasColors : (selectionPaletteMode === "colors" ? true : (selectionPaletteMode === "options" ? false : hasColors));

      let renderedSomething = false;

      if (showOptions && hasOptions) {
        optionsPanelSub.style.display = "block";
        optionsPanelGrid.style.display = "grid";
        colorPanelHeaderTop.style.display = "block";
        optionsPanelSub.textContent = t("availableOptions");
        buildPaletteCells(optionsPanelGrid, optionspalette, true);
        renderedSomething = true;
      }

      if (showColors && hasColors) {
        colorPanelHeaderTop.style.display = "block";
        colorPanelHeaderBottom.style.display = "block";
        colorPanelGrid.style.display = "grid";
        colorPanelSub.textContent = t("availableColors");
        buildPaletteCells(colorPanelGrid, palette, false);
        renderedSomething = true;
      }

      mobileDrawerOptions = optionspalette || [];
      mobileDrawerColors = palette || [];
      updateMobileOptionsDrawer();

      if (!renderedSomething) {
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

      updateFlipControl();

      clearSelection();
      resetColorPanel();
      resetOptionsPanel();
    }

    if (controllerFlipBtn) {
      controllerFlipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        setSide(currentSide === "front" ? "back" : "front");
        playClick();
      });
    }

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
      const clickInsideSideToggle = controllerFlipBtn ? controllerFlipBtn.contains(e.target) : false;
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

      updateNavLangLabel();
      updateThemeLabel();
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
      const label = currentSide === "front" ? t("front") : t("back");
      if (flipControlBtn) {
        flipControlBtn.setAttribute("aria-label", label);
        flipControlBtn.classList.toggle("is-back", currentSide === "back");
      }
      if (controllerFlipBtn) {
        controllerFlipBtn.setAttribute("aria-label", label);
        controllerFlipBtn.classList.toggle("is-back", currentSide === "back");
      }
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
  

`;function vv(){return x.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=gv,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),P.jsx("div",{className:"configurator-page",children:P.jsx("div",{dangerouslySetInnerHTML:{__html:hv}})})}const yv=`


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
<button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
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
<button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
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



`,bv=`


    const CART_KEY = "ezCart";

    // ---------- I18N ----------
    const i18n = window.__EZ_I18N__ || {};

    let currentLang = localStorage.getItem("ez_lang") || "ar";
    const navLangToggle = document.getElementById("langToggle");
    const mobileLangToggle = document.getElementById("mobileLangToggle");
    const themeToggle = document.getElementById("themeToggle");
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
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
      updateThemeLabel();
    }

    function updateNavLangLabel() {
      const label = currentLang === "ar" ? "EN" : "AR";
      if (navLangToggle) navLangToggle.textContent = label;
      if (mobileLangToggle) mobileLangToggle.textContent = label;
    }

    let currentTheme = localStorage.getItem("ez_theme") || "dark";

    function applyTheme() {
      document.body.classList.toggle("theme-light", currentTheme === "light");
    }

    function themeLabel() {
      const lightLabel = t("themeLight");
      const darkLabel = t("themeDark");
      return currentTheme === "dark" ? lightLabel : darkLabel;
    }

    function updateThemeLabel() {
      const label = themeLabel();
      if (themeToggle) themeToggle.textContent = label;
      if (mobileThemeToggle) mobileThemeToggle.textContent = label;
    }

    function toggleTheme() {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("ez_theme", currentTheme);
      applyTheme();
      updateThemeLabel();
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

    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener("click", toggleTheme);
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

    applyTheme();
    updateThemeLabel();

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
  

`;function kv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=bv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),P.jsx("div",{className:"cart-page",children:P.jsx("div",{dangerouslySetInnerHTML:{__html:yv}})})}const Ev=`


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
<button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
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
<button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
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



`,wv=`


    const CART_KEY = "ezCart";

    const i18n = window.__EZ_I18N__ || {};

    let currentLang = localStorage.getItem("ez_lang") || "ar";
    const navLangToggle = document.getElementById("langToggle");
    const mobileLangToggle = document.getElementById("mobileLangToggle");
    const themeToggle = document.getElementById("themeToggle");
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
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
      updateThemeLabel();
    }

    function updateNavLangLabel() {
      const label = currentLang === "ar" ? "EN" : "AR";
      if (navLangToggle) navLangToggle.textContent = label;
      if (mobileLangToggle) mobileLangToggle.textContent = label;
    }

    let currentTheme = localStorage.getItem("ez_theme") || "dark";

    function applyTheme() {
      document.body.classList.toggle("theme-light", currentTheme === "light");
    }

    function themeLabel() {
      const lightLabel = t("themeLight");
      const darkLabel = t("themeDark");
      return currentTheme === "dark" ? lightLabel : darkLabel;
    }

    function updateThemeLabel() {
      const label = themeLabel();
      if (themeToggle) themeToggle.textContent = label;
      if (mobileThemeToggle) mobileThemeToggle.textContent = label;
    }

    function toggleTheme() {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("ez_theme", currentTheme);
      applyTheme();
      updateThemeLabel();
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

    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener("click", toggleTheme);
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

    applyTheme();
    updateThemeLabel();

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
        const name = item.name || t("productName");
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
        alert(t("paymentStartFailed"));
      }
    });

    // init
    applyLanguage();
  

`;function Sv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=wv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),P.jsx("div",{className:"checkout-page",children:P.jsx("div",{dangerouslySetInnerHTML:{__html:Ev}})})}const Lv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title" data-i18n="paymentTitle">الدفع (تجريبي)</div>
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
    <button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
  <button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:540px; width:100%; text-align:center;">
    <div class="card-title" data-i18n="paymentTitle">الدفع (تجريبي)</div>
    <div id="paymentDetails" style="margin:10px 0; font-size:0.95rem; opacity:0.9;"></div>
    <button class="place-order-btn" id="payNowBtn" type="button" data-i18n="paymentPayNow">ادفع الآن</button>
    <div id="paymentStatus" style="margin-top:12px; font-size:0.9rem; opacity:0.85;"></div>
  </div>
</div>
`,Tv=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const i18n = window.__EZ_I18N__ || {};
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  function t(key) {
    return (i18n[navLang] && i18n[navLang][key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    applyTranslations();
    updateThemeLabel();
  }

  let currentTheme = localStorage.getItem("ez_theme") || "dark";

  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
  }

  function themeLabel() {
    const lightLabel = t("themeLight");
    const darkLabel = t("themeDark");
    return currentTheme === "dark" ? lightLabel : darkLabel;
  }

  function updateThemeLabel() {
    const label = themeLabel();
    if (themeToggle) themeToggle.textContent = label;
    if (mobileThemeToggle) mobileThemeToggle.textContent = label;
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ez_theme", currentTheme);
    applyTheme();
    updateThemeLabel();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  applyTheme();
  updateThemeLabel();
  applyTranslations();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);

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
    statusEl.textContent = t("paymentNoDraft");
    setTimeout(() => window.location.href = "/cart", 1200);
  } else {
    const draft = JSON.parse(orderDraftRaw);
    const cart = draft.cart || [];
    const total = cart.reduce((s, it) => s + (it.unitPrice * it.quantity), 0);
    paymentDetailsEl.textContent = t("paymentAmountDue") + " " + (draft.currencyPrefix || "BHD ") + total.toFixed(2);

    btn.addEventListener("click", async () => {
      btn.disabled = true;
      statusEl.textContent = t("paymentProcessing");
      const succeed = (json) => {
        localStorage.setItem("ezOrderResult", JSON.stringify(json || { status: "paid_demo" }));
        statusEl.textContent = t("paymentConfirmed");
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
`;function Cv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Tv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Lv}})}const xv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title" data-i18n="confirmationTitle">تأكيد الدفع</div>
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
    <button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
  <button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:480px; width:100%; text-align:center;">
    <div class="card-title" data-i18n="confirmationTitle">تأكيد الدفع</div>
    <div id="confirmStatus" data-i18n="confirmationStatus" style="font-size:1rem; margin:10px 0;">تم تأكيد الدفع</div>
    <button class="place-order-btn" id="goSummaryBtn" type="button" data-i18n="confirmationCta">الانتقال إلى ملخص الطلب</button>
  </div>
</div>
`,Pv=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const i18n = window.__EZ_I18N__ || {};
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  function t(key) {
    return (i18n[navLang] && i18n[navLang][key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    applyTranslations();
    updateThemeLabel();
  }

  let currentTheme = localStorage.getItem("ez_theme") || "dark";

  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
  }

  function themeLabel() {
    const lightLabel = t("themeLight");
    const darkLabel = t("themeDark");
    return currentTheme === "dark" ? lightLabel : darkLabel;
  }

  function updateThemeLabel() {
    const label = themeLabel();
    if (themeToggle) themeToggle.textContent = label;
    if (mobileThemeToggle) mobileThemeToggle.textContent = label;
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ez_theme", currentTheme);
    applyTheme();
    updateThemeLabel();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  applyTheme();
  updateThemeLabel();
  applyTranslations();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);

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
  statusEl.textContent = t("confirmationStatus");
`;function _v(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Pv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:xv}})}const Nv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title" data-i18n="orderSummaryTitle">ملخص الطلب</div>
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
    <button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
  <button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:640px; width:100%;">
    <div class="card-title" data-i18n="orderSummaryTitle">ملخص الطلب</div>
    <div id="orderStatus" style="margin-bottom:8px;"></div>
    <div id="orderItems"></div>
    <div id="orderTotals" style="margin-top:10px; font-weight:700;"></div>
  </div>
</div>
`,Iv=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const i18n = window.__EZ_I18N__ || {};
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  function t(key) {
    return (i18n[navLang] && i18n[navLang][key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    applyTranslations();
    updateThemeLabel();
  }

  let currentTheme = localStorage.getItem("ez_theme") || "dark";

  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
  }

  function themeLabel() {
    const lightLabel = t("themeLight");
    const darkLabel = t("themeDark");
    return currentTheme === "dark" ? lightLabel : darkLabel;
  }

  function updateThemeLabel() {
    const label = themeLabel();
    if (themeToggle) themeToggle.textContent = label;
    if (mobileThemeToggle) mobileThemeToggle.textContent = label;
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ez_theme", currentTheme);
    applyTheme();
    updateThemeLabel();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  applyTheme();
  updateThemeLabel();
  applyTranslations();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);

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
    statusEl.textContent = t("orderStatusMissing");
    setTimeout(() => window.location.href = "/cart", 1200);
  } else {
    const result = JSON.parse(resultRaw);
    const draft = JSON.parse(draftRaw);
    const cart = draft.cart || [];
    const total = cart.reduce((s, it) => s + (it.unitPrice * it.quantity), 0);
    statusEl.innerHTML = t("orderStatusLabel") + " <strong>" + t("orderStatusConfirmed") + "</strong>";
    const list = document.createElement("ul");
    cart.forEach(it => {
      const li = document.createElement("li");
      li.textContent = (it.name || t("orderItemFallback")) + " × " + it.quantity + " — " + (draft.currencyPrefix || "BHD ") + (it.unitPrice * it.quantity).toFixed(2);
      list.appendChild(li);
    });
    itemsEl.appendChild(list);
    totalsEl.textContent = t("orderTotalLabel") + " " + (draft.currencyPrefix || "BHD ") + total.toFixed(2);
  }
`;function Ov(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Iv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Nv}})}const Bv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title" data-i18n="trackTitle">تتبع الطلب</div>
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
    <button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
  <button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="track-shell">
    <div class="track-header">
      <div class="track-title" id="trackTitle" data-i18n="trackTitle">تتبع الطلب</div>
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
`,Rv=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const i18n = window.__EZ_I18N__ || {};
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  function t(key) {
    return (i18n[navLang] && i18n[navLang][key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    applyTranslations();
    updateThemeLabel();
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

  let currentTheme = localStorage.getItem("ez_theme") || "dark";

  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
  }

  function themeLabel() {
    const lightLabel = t("themeLight");
    const darkLabel = t("themeDark");
    return currentTheme === "dark" ? lightLabel : darkLabel;
  }

  function updateThemeLabel() {
    const label = themeLabel();
    if (themeToggle) themeToggle.textContent = label;
    if (mobileThemeToggle) mobileThemeToggle.textContent = label;
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ez_theme", currentTheme);
    applyTheme();
    updateThemeLabel();
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);
  applyTheme();
  updateThemeLabel();

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
      setStatus(t("trackNoOrderId"));
      return;
    }
    setStatus(t("trackLoadingPrefix") + orderId + " …");
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
        { label: t("trackOrderIdLabel"), value: soNumber || soId },
        { label: t("trackStatusLabel"), value: soStatus },
        { label: t("trackDateLabel"), value: soDate },
        { label: t("trackTotalLabel"), value: soTotal ? currency + " " + soTotal : "" }
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
      title.textContent = t("trackSalesOrderTitle");
      itemsWrap.appendChild(title);
      if (!items.length) {
        const empty = document.createElement("div");
        empty.textContent = t("trackNoItems");
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
          qty.textContent = t("trackQtyLabel") + " " + (li.quantity || 0);
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
        { label: t("trackOrderReceived"), value: "", done: orderDone, icon: stepIcons.order },
        { label: t("trackOrderProcessing"), value: "", done: processingDone, icon: stepIcons.process },
        { label: t("trackOnTheWay"), value: "", done: onTheWayDone, icon: stepIcons.ontheway },
        { label: t("trackDelivered"), value: "", done: deliveredDone, icon: stepIcons.delivered }
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

      setStatus(t("trackLoaded"));
    } catch (err) {
      console.error(err);
      setStatus(t("trackFailedPrefix") + err.message);
    }
  }

  load();
`;function Mv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Rv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Bv}})}const Dv=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title" data-i18n="posTitle">نقطة البيع</div>
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
    <button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
  <button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="width:100%; max-width:1100px; background:var(--card-bg); border:1px solid var(--border-subtle); color:var(--color-text);">
    <div class="card-title" data-i18n="posCardTitle">نقطة البيع</div>
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
    background: var(--button-primary-bg);
    color: var(--button-primary-text);
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
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const i18n = window.__EZ_I18N__ || {};
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  function t(key) {
    return (i18n[navLang] && i18n[navLang][key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    applyTranslations();
    updateThemeLabel();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  applyTranslations();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);

  let currentTheme = localStorage.getItem("ez_theme") || "dark";

  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
  }

  function themeLabel() {
    const lightLabel = t("themeLight");
    const darkLabel = t("themeDark");
    return currentTheme === "dark" ? lightLabel : darkLabel;
  }

  function updateThemeLabel() {
    const label = themeLabel();
    if (themeToggle) themeToggle.textContent = label;
    if (mobileThemeToggle) mobileThemeToggle.textContent = label;
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ez_theme", currentTheme);
    applyTheme();
    updateThemeLabel();
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);
  applyTheme();
  updateThemeLabel();

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
    setStatus(t("posStatusAddedPrefix") + (item.name || t("posItemFallback")));
  }

  async function loadItems() {
    setStatus(t("posStatusLoading"));
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
        setStatus(t("posStatusNoItems"));
        return;
      }
      setStatus(items.length + t("posStatusLoadedSuffix"));
      items.forEach(it => {
        const card = document.createElement("div");
        card.className = "pos-item";

        const name = document.createElement("div");
        name.className = "pos-name";
        name.textContent = it.name || t("posItemFallback");

        const price = document.createElement("div");
        price.className = "pos-price";
        const rate = typeof it.rate === "number" ? it.rate.toFixed(2) : "0.00";
        price.textContent = (it.currency_code || "BHD") + " " + rate;

        const stock = document.createElement("div");
        stock.className = "pos-stock";
        const avail = it.available_stock != null ? it.available_stock : it.stock_on_hand;
        stock.textContent = t("posStockLabel") + " " + (avail != null ? avail : "—");

        const btn = document.createElement("button");
        btn.className = "pos-btn";
        btn.textContent = t("posAddToCart");
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
      setStatus(t("posStatusFailedPrefix") + err.message);
    }
  }

  loadItems();
`;function Fv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Av,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Dv}})}function zv(){return P.jsxs(Jg,{children:[P.jsx(mt,{path:"/",element:P.jsx(mv,{})}),P.jsx(mt,{path:"/configurator",element:P.jsx(vv,{})}),P.jsx(mt,{path:"/cart",element:P.jsx(kv,{})}),P.jsx(mt,{path:"/checkout",element:P.jsx(Sv,{})}),P.jsx(mt,{path:"/payment",element:P.jsx(Cv,{})}),P.jsx(mt,{path:"/payment/confirmation",element:P.jsx(_v,{})}),P.jsx(mt,{path:"/order-summary",element:P.jsx(Ov,{})}),P.jsx(mt,{path:"/trackorder",element:P.jsx(Mv,{})}),P.jsx(mt,{path:"/pos",element:P.jsx(Fv,{})}),P.jsx(mt,{path:"*",element:P.jsx(Zg,{to:"/",replace:!0})})]})}window.__EZ_I18N__=Jf;const jv=nv([{path:"/*",element:P.jsx(zv,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});Ro.createRoot(document.getElementById("root")).render(P.jsx(dv,{router:jv}));

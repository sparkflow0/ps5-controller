function kc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function Ec(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},Ml={},Lc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),cp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),yp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),Us=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,Tc={};function vr(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||Sc}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xc(){}xc.prototype=vr.prototype;function _i(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||Sc}var Ii=_i.prototype=new xc;Ii.constructor=_i;Cc(Ii,vr.prototype);Ii.isPureReactComponent=!0;var Vs=Array.isArray,Pc=Object.prototype.hasOwnProperty,Bi={current:null},Nc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Pc.call(t,r)&&!Nc.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:ha,type:e,key:l,ref:o,props:a,_owner:Bi.current}}function Ep(e,t){return{$$typeof:ha,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===ha}function wp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ws=/\/+/g;function ro(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wp(""+e.key):t.toString(36)}function Ka(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ha:case cp:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ro(o,0):r,Vs(a)?(n="",e!=null&&(n=e.replace(Ws,"$&/")+"/"),Ka(a,t,n,"",function(u){return u})):a!=null&&(Oi(a)&&(a=Ep(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ws,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Vs(e))for(var i=0;i<e.length;i++){l=e[i];var s=r+ro(l,i);o+=Ka(l,t,n,s,a)}else if(s=kp(e),typeof s=="function")for(e=s.call(e),i=0;!(l=e.next()).done;)l=l.value,s=r+ro(l,i++),o+=Ka(l,t,n,s,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(e,t,n){if(e==null)return e;var r=[],a=0;return Ka(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Ya={transition:null},Sp={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Bi};function Ic(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Ia,forEach:function(e,t,n){Ia(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ia(e,function(){t++}),t},toArray:function(e){return Ia(e,function(t){return t})||[]},only:function(e){if(!Oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=vr;Q.Fragment=dp;Q.Profiler=pp;Q.PureComponent=_i;Q.StrictMode=fp;Q.Suspense=vp;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sp;Q.act=Ic;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Bi.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)Pc.call(t,s)&&!Nc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:ha,type:e.type,key:a,ref:l,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};Q.createElement=_c;Q.createFactory=function(e){var t=_c.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:gp,render:e}};Q.isValidElement=Oi;Q.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:Lp}};Q.memo=function(e,t){return{$$typeof:yp,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Ya.transition;Ya.transition={};try{e()}finally{Ya.transition=t}};Q.unstable_act=Ic;Q.useCallback=function(e,t){return We.current.useCallback(e,t)};Q.useContext=function(e){return We.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Q.useEffect=function(e,t){return We.current.useEffect(e,t)};Q.useId=function(){return We.current.useId()};Q.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return We.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};Q.useRef=function(e){return We.current.useRef(e)};Q.useState=function(e){return We.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return We.current.useTransition()};Q.version="18.3.1";Lc.exports=Q;var x=Lc.exports;const Cp=Ec(x),Tp=kc({__proto__:null,default:Cp},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp=x,Pp=Symbol.for("react.element"),Np=Symbol.for("react.fragment"),_p=Object.prototype.hasOwnProperty,Ip=xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bp={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_p.call(t,r)&&!Bp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Pp,type:e,key:l,ref:o,props:a,_owner:Ip.current}}Ml.Fragment=Np;Ml.jsx=Bc;Ml.jsxs=Bc;wc.exports=Ml;var P=wc.exports,Oo={},Oc={exports:{}},rt={},Rc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,U){var j=I.length;I.push(U);e:for(;0<j;){var Y=j-1>>>1,ee=I[Y];if(0<a(ee,U))I[Y]=U,I[j]=ee,j=Y;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var U=I[0],j=I.pop();if(j!==U){I[0]=j;e:for(var Y=0,ee=I.length,Ne=ee>>>1;Y<Ne;){var G=2*(Y+1)-1,X=I[G],te=G+1,ue=I[te];if(0>a(X,j))te<ee&&0>a(ue,X)?(I[Y]=ue,I[te]=j,Y=te):(I[Y]=X,I[G]=j,Y=G);else if(te<ee&&0>a(ue,j))I[Y]=ue,I[te]=j,Y=te;else break e}}return U}function a(I,U){var j=I.sortIndex-U.sortIndex;return j!==0?j:I.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var s=[],u=[],f=1,d=null,m=3,b=!1,E=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=I)r(u),U.sortIndex=U.expirationTime,t(s,U);else break;U=n(u)}}function L(I){if(w=!1,v(I),!E)if(n(s)!==null)E=!0,wt(T);else{var U=n(u);U!==null&&dt(L,U.startTime-I)}}function T(I,U){E=!1,w&&(w=!1,h(S),S=-1),b=!0;var j=m;try{for(v(U),d=n(s);d!==null&&(!(d.expirationTime>U)||I&&!re());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,m=d.priorityLevel;var ee=Y(d.expirationTime<=U);U=e.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(s)&&r(s),v(U)}else r(s);d=n(s)}if(d!==null)var Ne=!0;else{var G=n(u);G!==null&&dt(L,G.startTime-U),Ne=!1}return Ne}finally{d=null,m=j,b=!1}}var R=!1,g=null,S=-1,V=5,O=-1;function re(){return!(e.unstable_now()-O<V)}function ae(){if(g!==null){var I=e.unstable_now();O=I;var U=!0;try{U=g(!0,I)}finally{U?fe():(R=!1,g=null)}}else R=!1}var fe;if(typeof c=="function")fe=function(){c(ae)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Be=Le.port2;Le.port1.onmessage=ae,fe=function(){Be.postMessage(null)}}else fe=function(){_(ae,0)};function wt(I){g=I,R||(R=!0,fe())}function dt(I,U){S=_(function(){I(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){E||b||(E=!0,wt(T))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var j=m;m=U;try{return I()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,U){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=m;m=I;try{return U()}finally{m=j}},e.unstable_scheduleCallback=function(I,U,j){var Y=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,I){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,I={id:f++,callback:U,priorityLevel:I,startTime:j,expirationTime:ee,sortIndex:-1},j>Y?(I.sortIndex=j,t(u,I),n(s)===null&&I===n(u)&&(w?(h(S),S=-1):w=!0,dt(L,j-Y))):(I.sortIndex=ee,t(s,I),E||b||(E=!0,wt(T))),I},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(I){var U=m;return function(){var j=m;m=U;try{return I.apply(this,arguments)}finally{m=j}}}})(Mc);Rc.exports=Mc;var Op=Rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=x,nt=Op;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dc=new Set,Kr={};function zn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=Object.prototype.hasOwnProperty,Mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gs={},$s={};function Dp(e){return Ro.call($s,e)?!0:Ro.call(Gs,e)?!1:Mp.test(e)?$s[e]=!0:(Gs[e]=!0,!1)}function Ap(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zp(e,t,n,r){if(t===null||typeof t>"u"||Ap(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ri=/[\-:]([a-z])/g;function Mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ri,Mi);De[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ri,Mi);De[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ri,Mi);De[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Di(e,t,n,r){var a=De.hasOwnProperty(t)?De[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zp(t,n,a,r)&&(n=null),r||a===null?Dp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),$n=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Ai=Symbol.for("react.strict_mode"),Mo=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),zc=Symbol.for("react.context"),zi=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Ao=Symbol.for("react.suspense_list"),Fi=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Fc=Symbol.for("react.offscreen"),qs=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,ao;function Mr(e){if(ao===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ao=t&&t[1]||""}return`
`+ao+e}var lo=!1;function oo(e,t){if(!e||lo)return"";lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||a[o]!==l[i]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=i);break}}}finally{lo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function Fp(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=oo(e.type,!1),e;case 11:return e=oo(e.type.render,!1),e;case 1:return e=oo(e.type,!0),e;default:return""}}function zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case $n:return"Portal";case Mo:return"Profiler";case Ai:return"StrictMode";case Do:return"Suspense";case Ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zc:return(e.displayName||"Context")+".Consumer";case Ac:return(e._context.displayName||"Context")+".Provider";case zi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fi:return t=e.displayName||null,t!==null?t:zo(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return zo(e(t))}catch{}}return null}function jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zo(t);case 8:return t===Ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oa(e){e._valueTracker||(e._valueTracker=Hp(e))}function Hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fo(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uc(e,t){t=t.checked,t!=null&&Di(e,"checked",t,!1)}function jo(e,t){Uc(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ho(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ho(e,t,n){(t!=="number"||sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Uo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ys(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Dr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function Vc(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ra,Gc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ra.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function $c(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=$c(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Vp=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(e,t){if(t){if(Vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $o=null;function ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qo=null,lr=null,or=null;function Xs(e){if(e=ya(e)){if(typeof qo!="function")throw Error(N(280));var t=e.stateNode;t&&(t=jl(t),qo(e.stateNode,e.type,t))}}function Qc(e){lr?or?or.push(e):or=[e]:lr=e}function Kc(){if(lr){var e=lr,t=or;if(or=lr=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function Yc(e,t){return e(t)}function Zc(){}var io=!1;function Xc(e,t,n){if(io)return e(t,n);io=!0;try{return Yc(e,t,n)}finally{io=!1,(lr!==null||or!==null)&&(Zc(),Kc())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Qo=!1;if(zt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Qo=!1}function Wp(e,t,n,r,a,l,o,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Hr=!1,ul=null,cl=!1,Ko=null,Gp={onError:function(e){Hr=!0,ul=e}};function $p(e,t,n,r,a,l,o,i,s){Hr=!1,ul=null,Wp.apply(Gp,arguments)}function qp(e,t,n,r,a,l,o,i,s){if($p.apply(this,arguments),Hr){if(Hr){var u=ul;Hr=!1,ul=null}else throw Error(N(198));cl||(cl=!0,Ko=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Js(e){if(Fn(e)!==e)throw Error(N(188))}function Qp(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Js(a),e;if(l===r)return Js(a),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,i=a.child;i;){if(i===n){o=!0,n=a,r=l;break}if(i===r){o=!0,r=a,n=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===n){o=!0,n=l,r=a;break}if(i===r){o=!0,r=l,n=a;break}i=i.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function ed(e){return e=Qp(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=td(e);if(t!==null)return t;e=e.sibling}return null}var nd=nt.unstable_scheduleCallback,eu=nt.unstable_cancelCallback,Kp=nt.unstable_shouldYield,Yp=nt.unstable_requestPaint,we=nt.unstable_now,Zp=nt.unstable_getCurrentPriorityLevel,Hi=nt.unstable_ImmediatePriority,rd=nt.unstable_UserBlockingPriority,dl=nt.unstable_NormalPriority,Xp=nt.unstable_LowPriority,ad=nt.unstable_IdlePriority,Dl=null,Pt=null;function Jp(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Dl,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var Ma=64,Da=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~a;i!==0?r=Ar(i):(l&=o,l!==0&&(r=Ar(l)))}else o=n&~a,o!==0?r=Ar(o):l!==0&&(r=Ar(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),a=1<<n,r|=e[n],t&=~a;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-bt(l),i=1<<o,s=a[o];s===-1?(!(i&n)||i&r)&&(a[o]=rm(i,t)):s<=t&&(e.expiredLanes|=i),l&=~i}}function Yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ld(){var e=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),e}function so(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ga(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function lm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-bt(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function Ui(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var oe=0;function od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var id,Vi,sd,ud,cd,Zo=!1,Aa=[],an=null,ln=null,on=null,Xr=new Map,Jr=new Map,Jt=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tu(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function Tr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ya(t),t!==null&&Vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function im(e,t,n,r,a){switch(t){case"focusin":return an=Tr(an,e,t,n,r,a),!0;case"dragenter":return ln=Tr(ln,e,t,n,r,a),!0;case"mouseover":return on=Tr(on,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Xr.set(l,Tr(Xr.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Jr.set(l,Tr(Jr.get(l)||null,e,t,n,r,a)),!0}return!1}function dd(e){var t=Tn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jc(n),t!==null){e.blockedOn=t,cd(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$o=r,n.target.dispatchEvent(r),$o=null}else return t=ya(n),t!==null&&Vi(t),e.blockedOn=n,!1;t.shift()}return!0}function nu(e,t,n){Za(e)&&n.delete(t)}function sm(){Zo=!1,an!==null&&Za(an)&&(an=null),ln!==null&&Za(ln)&&(ln=null),on!==null&&Za(on)&&(on=null),Xr.forEach(nu),Jr.forEach(nu)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,sm)))}function ea(e){function t(a){return xr(a,e)}if(0<Aa.length){xr(Aa[0],e);for(var n=1;n<Aa.length;n++){var r=Aa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&xr(an,e),ln!==null&&xr(ln,e),on!==null&&xr(on,e),Xr.forEach(t),Jr.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)dd(n),n.blockedOn===null&&Jt.shift()}var ir=Ut.ReactCurrentBatchConfig,pl=!0;function um(e,t,n,r){var a=oe,l=ir.transition;ir.transition=null;try{oe=1,Wi(e,t,n,r)}finally{oe=a,ir.transition=l}}function cm(e,t,n,r){var a=oe,l=ir.transition;ir.transition=null;try{oe=4,Wi(e,t,n,r)}finally{oe=a,ir.transition=l}}function Wi(e,t,n,r){if(pl){var a=Xo(e,t,n,r);if(a===null)bo(e,t,r,ml,n),tu(e,r);else if(im(a,e,t,n,r))r.stopPropagation();else if(tu(e,r),t&4&&-1<om.indexOf(e)){for(;a!==null;){var l=ya(a);if(l!==null&&id(l),l=Xo(e,t,n,r),l===null&&bo(e,t,r,ml,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else bo(e,t,r,null,n)}}var ml=null;function Xo(e,t,n,r){if(ml=null,e=ji(r),e=Tn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ml=e,null}function fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case Hi:return 1;case rd:return 4;case dl:case Xp:return 16;case ad:return 536870912;default:return 16}default:return 16}}var tn=null,Gi=null,Xa=null;function pd(){if(Xa)return Xa;var e,t=Gi,n=t.length,r,a="value"in tn?tn.value:tn.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return Xa=a.slice(e,1<r?1-r:void 0)}function Ja(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function za(){return!0}function ru(){return!1}function at(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?za:ru,this.isPropagationStopped=ru,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=at(yr),va=ve({},yr,{view:0,detail:0}),dm=at(va),uo,co,Pr,Al=ve({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(uo=e.screenX-Pr.screenX,co=e.screenY-Pr.screenY):co=uo=0,Pr=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:co}}),au=at(Al),fm=ve({},Al,{dataTransfer:0}),pm=at(fm),mm=ve({},va,{relatedTarget:0}),fo=at(mm),hm=ve({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),gm=at(hm),vm=ve({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ym=at(vm),bm=ve({},yr,{data:0}),lu=at(bm),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wm[e])?!!t[e]:!1}function qi(){return Lm}var Sm=ve({},va,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qi,charCode:function(e){return e.type==="keypress"?Ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cm=at(Sm),Tm=ve({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=at(Tm),xm=ve({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qi}),Pm=at(xm),Nm=ve({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_m=at(Nm),Im=ve({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=at(Im),Om=[9,13,27,32],Qi=zt&&"CompositionEvent"in window,Ur=null;zt&&"documentMode"in document&&(Ur=document.documentMode);var Rm=zt&&"TextEvent"in window&&!Ur,md=zt&&(!Qi||Ur&&8<Ur&&11>=Ur),iu=" ",su=!1;function hd(e,t){switch(e){case"keyup":return Om.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function Mm(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(su=!0,iu);case"textInput":return e=t.data,e===iu&&su?null:e;default:return null}}function Dm(e,t){if(Qn)return e==="compositionend"||!Qi&&hd(e,t)?(e=pd(),Xa=Gi=tn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return md&&t.locale!=="ko"?null:t.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Am[e.type]:t==="textarea"}function vd(e,t,n,r){Qc(r),t=hl(t,"onChange"),0<t.length&&(n=new $i("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,ta=null;function zm(e){Pd(e,0)}function zl(e){var t=Zn(e);if(Hc(t))return e}function Fm(e,t){if(e==="change")return t}var yd=!1;if(zt){var po;if(zt){var mo="oninput"in document;if(!mo){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),mo=typeof cu.oninput=="function"}po=mo}else po=!1;yd=po&&(!document.documentMode||9<document.documentMode)}function du(){Vr&&(Vr.detachEvent("onpropertychange",bd),ta=Vr=null)}function bd(e){if(e.propertyName==="value"&&zl(ta)){var t=[];vd(t,ta,e,ji(e)),Xc(zm,t)}}function jm(e,t,n){e==="focusin"?(du(),Vr=t,ta=n,Vr.attachEvent("onpropertychange",bd)):e==="focusout"&&du()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(ta)}function Um(e,t){if(e==="click")return zl(t)}function Vm(e,t){if(e==="input"||e==="change")return zl(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Wm;function na(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Ro.call(t,a)||!Et(e[a],t[a]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pu(e,t){var n=fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fu(n)}}function kd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ed(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function Ki(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=Ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kd(n.ownerDocument.documentElement,n)){if(r!==null&&Ki(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=pu(n,l);var o=pu(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $m=zt&&"documentMode"in document&&11>=document.documentMode,Kn=null,Jo=null,Wr=null,ei=!1;function mu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ei||Kn==null||Kn!==sl(r)||(r=Kn,"selectionStart"in r&&Ki(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&na(Wr,r)||(Wr=r,r=hl(Jo,"onSelect"),0<r.length&&(t=new $i("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function Fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},ho={},wd={};zt&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Fl(e){if(ho[e])return ho[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wd)return ho[e]=t[n];return e}var Ld=Fl("animationend"),Sd=Fl("animationiteration"),Cd=Fl("animationstart"),Td=Fl("transitionend"),xd=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){xd.set(e,t),zn(t,[e])}for(var go=0;go<hu.length;go++){var vo=hu[go],qm=vo.toLowerCase(),Qm=vo[0].toUpperCase()+vo.slice(1);gn(qm,"on"+Qm)}gn(Ld,"onAnimationEnd");gn(Sd,"onAnimationIteration");gn(Cd,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Td,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qp(r,t,void 0,e),e.currentTarget=null}function Pd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==l&&a.isPropagationStopped())break e;gu(a,i,u),l=s}else for(o=0;o<r.length;o++){if(i=r[o],s=i.instance,u=i.currentTarget,i=i.listener,s!==l&&a.isPropagationStopped())break e;gu(a,i,u),l=s}}}if(cl)throw e=Ko,cl=!1,Ko=null,e}function ce(e,t){var n=t[li];n===void 0&&(n=t[li]=new Set);var r=e+"__bubble";n.has(r)||(Nd(t,e,2,!1),n.add(r))}function yo(e,t,n){var r=0;t&&(r|=4),Nd(n,e,r,t)}var ja="_reactListening"+Math.random().toString(36).slice(2);function ra(e){if(!e[ja]){e[ja]=!0,Dc.forEach(function(n){n!=="selectionchange"&&(Km.has(n)||yo(n,!1,e),yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ja]||(t[ja]=!0,yo("selectionchange",!1,t))}}function Nd(e,t,n,r){switch(fd(t)){case 1:var a=um;break;case 4:a=cm;break;default:a=Wi}n=a.bind(null,t,n,e),a=void 0,!Qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bo(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;i!==null;){if(o=Tn(i),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}i=i.parentNode}}r=r.return}Xc(function(){var u=l,f=ji(n),d=[];e:{var m=xd.get(e);if(m!==void 0){var b=$i,E=e;switch(e){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":b=Cm;break;case"focusin":E="focus",b=fo;break;case"focusout":E="blur",b=fo;break;case"beforeblur":case"afterblur":b=fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Pm;break;case Ld:case Sd:case Cd:b=gm;break;case Td:b=_m;break;case"scroll":b=dm;break;case"wheel":b=Bm;break;case"copy":case"cut":case"paste":b=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ou}var w=(t&4)!==0,_=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,v;c!==null;){v=c;var L=v.stateNode;if(v.tag===5&&L!==null&&(v=L,h!==null&&(L=Zr(c,h),L!=null&&w.push(aa(c,L,v)))),_)break;c=c.return}0<w.length&&(m=new b(m,E,null,n,f),d.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&n!==$o&&(E=n.relatedTarget||n.fromElement)&&(Tn(E)||E[Ft]))break e;if((b||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,b?(E=n.relatedTarget||n.toElement,b=u,E=E?Tn(E):null,E!==null&&(_=Fn(E),E!==_||E.tag!==5&&E.tag!==6)&&(E=null)):(b=null,E=u),b!==E)){if(w=au,L="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ou,L="onPointerLeave",h="onPointerEnter",c="pointer"),_=b==null?m:Zn(b),v=E==null?m:Zn(E),m=new w(L,c+"leave",b,n,f),m.target=_,m.relatedTarget=v,L=null,Tn(f)===u&&(w=new w(h,c+"enter",E,n,f),w.target=v,w.relatedTarget=_,L=w),_=L,b&&E)t:{for(w=b,h=E,c=0,v=w;v;v=Wn(v))c++;for(v=0,L=h;L;L=Wn(L))v++;for(;0<c-v;)w=Wn(w),c--;for(;0<v-c;)h=Wn(h),v--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=Wn(w),h=Wn(h)}w=null}else w=null;b!==null&&vu(d,m,b,w,!1),E!==null&&_!==null&&vu(d,_,E,w,!0)}}e:{if(m=u?Zn(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var T=Fm;else if(uu(m))if(yd)T=Vm;else{T=Hm;var R=jm}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=Um);if(T&&(T=T(e,u))){vd(d,T,n,f);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Ho(m,"number",m.value)}switch(R=u?Zn(u):window,e){case"focusin":(uu(R)||R.contentEditable==="true")&&(Kn=R,Jo=u,Wr=null);break;case"focusout":Wr=Jo=Kn=null;break;case"mousedown":ei=!0;break;case"contextmenu":case"mouseup":case"dragend":ei=!1,mu(d,n,f);break;case"selectionchange":if($m)break;case"keydown":case"keyup":mu(d,n,f)}var g;if(Qi)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Qn?hd(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(md&&n.locale!=="ko"&&(Qn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Qn&&(g=pd()):(tn=f,Gi="value"in tn?tn.value:tn.textContent,Qn=!0)),R=hl(u,S),0<R.length&&(S=new lu(S,e,null,n,f),d.push({event:S,listeners:R}),g?S.data=g:(g=gd(n),g!==null&&(S.data=g)))),(g=Rm?Mm(e,n):Dm(e,n))&&(u=hl(u,"onBeforeInput"),0<u.length&&(f=new lu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=g))}Pd(d,t)})}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Zr(e,n),l!=null&&r.unshift(aa(e,l,a)),l=Zr(e,t),l!=null&&r.push(aa(e,l,a))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vu(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,a?(s=Zr(n,l),s!=null&&o.unshift(aa(n,s,i))):a||(s=Zr(n,l),s!=null&&o.push(aa(n,s,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ym=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function yu(e){return(typeof e=="string"?e:""+e).replace(Ym,`
`).replace(Zm,"")}function Ha(e,t,n){if(t=yu(t),yu(e)!==t&&n)throw Error(N(425))}function gl(){}var ti=null,ni=null;function ri(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ai=typeof setTimeout=="function"?setTimeout:void 0,Xm=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(eh)}:ai;function eh(e){setTimeout(function(){throw e})}function ko(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),ea(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);ea(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),xt="__reactFiber$"+br,la="__reactProps$"+br,Ft="__reactContainer$"+br,li="__reactEvents$"+br,th="__reactListeners$"+br,nh="__reactHandles$"+br;function Tn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ku(e);e!==null;){if(n=e[xt])return n;e=ku(e)}return t}e=n,n=e.parentNode}return null}function ya(e){return e=e[xt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function jl(e){return e[la]||null}var oi=[],Xn=-1;function vn(e){return{current:e}}function de(e){0>Xn||(e.current=oi[Xn],oi[Xn]=null,Xn--)}function se(e,t){Xn++,oi[Xn]=e.current,e.current=t}var hn={},He=vn(hn),Ke=vn(!1),Bn=hn;function dr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ye(e){return e=e.childContextTypes,e!=null}function vl(){de(Ke),de(He)}function Eu(e,t,n){if(He.current!==hn)throw Error(N(168));se(He,t),se(Ke,n)}function _d(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(N(108,jp(e)||"Unknown",a));return ve({},n,r)}function yl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Bn=He.current,se(He,e),se(Ke,Ke.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=_d(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,de(Ke),de(He),se(He,e)):de(Ke),se(Ke,n)}var Rt=null,Hl=!1,Eo=!1;function Id(e){Rt===null?Rt=[e]:Rt.push(e)}function rh(e){Hl=!0,Id(e)}function yn(){if(!Eo&&Rt!==null){Eo=!0;var e=0,t=oe;try{var n=Rt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,Hl=!1}catch(a){throw Rt!==null&&(Rt=Rt.slice(e+1)),nd(Hi,yn),a}finally{oe=t,Eo=!1}}return null}var Jn=[],er=0,bl=null,kl=0,lt=[],ot=0,On=null,Mt=1,Dt="";function wn(e,t){Jn[er++]=kl,Jn[er++]=bl,bl=e,kl=t}function Bd(e,t,n){lt[ot++]=Mt,lt[ot++]=Dt,lt[ot++]=On,On=e;var r=Mt;e=Dt;var a=32-bt(r)-1;r&=~(1<<a),n+=1;var l=32-bt(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Mt=1<<32-bt(t)+a|n<<a|r,Dt=l+e}else Mt=1<<l|n<<a|r,Dt=e}function Yi(e){e.return!==null&&(wn(e,1),Bd(e,1,0))}function Zi(e){for(;e===bl;)bl=Jn[--er],Jn[er]=null,kl=Jn[--er],Jn[er]=null;for(;e===On;)On=lt[--ot],lt[ot]=null,Dt=lt[--ot],lt[ot]=null,Mt=lt[--ot],lt[ot]=null}var tt=null,et=null,me=!1,yt=null;function Od(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=On!==null?{id:Mt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function ii(e){return(e.mode&1)!==0&&(e.flags&128)===0}function si(e){if(me){var t=et;if(t){var n=t;if(!Lu(e,t)){if(ii(e))throw Error(N(418));t=sn(n.nextSibling);var r=tt;t&&Lu(e,t)?Od(r,n):(e.flags=e.flags&-4097|2,me=!1,tt=e)}}else{if(ii(e))throw Error(N(418));e.flags=e.flags&-4097|2,me=!1,tt=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Ua(e){if(e!==tt)return!1;if(!me)return Su(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ri(e.type,e.memoizedProps)),t&&(t=et)){if(ii(e))throw Rd(),Error(N(418));for(;t;)Od(e,t),t=sn(t.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?sn(e.stateNode.nextSibling):null;return!0}function Rd(){for(var e=et;e;)e=sn(e.nextSibling)}function fr(){et=tt=null,me=!1}function Xi(e){yt===null?yt=[e]:yt.push(e)}var ah=Ut.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var i=a.refs;o===null?delete i[l]:i[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Va(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cu(e){var t=e._init;return t(e._payload)}function Md(e){function t(h,c){if(e){var v=h.deletions;v===null?(h.deletions=[c],h.flags|=16):v.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function a(h,c){return h=fn(h,c),h.index=0,h.sibling=null,h}function l(h,c,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<c?(h.flags|=2,c):v):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,c,v,L){return c===null||c.tag!==6?(c=Po(v,h.mode,L),c.return=h,c):(c=a(c,v),c.return=h,c)}function s(h,c,v,L){var T=v.type;return T===qn?f(h,c,v.props.children,L,v.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zt&&Cu(T)===c.type)?(L=a(c,v.props),L.ref=Nr(h,c,v),L.return=h,L):(L=ol(v.type,v.key,v.props,null,h.mode,L),L.ref=Nr(h,c,v),L.return=h,L)}function u(h,c,v,L){return c===null||c.tag!==4||c.stateNode.containerInfo!==v.containerInfo||c.stateNode.implementation!==v.implementation?(c=No(v,h.mode,L),c.return=h,c):(c=a(c,v.children||[]),c.return=h,c)}function f(h,c,v,L,T){return c===null||c.tag!==7?(c=In(v,h.mode,L,T),c.return=h,c):(c=a(c,v),c.return=h,c)}function d(h,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Po(""+c,h.mode,v),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ba:return v=ol(c.type,c.key,c.props,null,h.mode,v),v.ref=Nr(h,null,c),v.return=h,v;case $n:return c=No(c,h.mode,v),c.return=h,c;case Zt:var L=c._init;return d(h,L(c._payload),v)}if(Dr(c)||Sr(c))return c=In(c,h.mode,v,null),c.return=h,c;Va(h,c)}return null}function m(h,c,v,L){var T=c!==null?c.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:i(h,c,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:return v.key===T?s(h,c,v,L):null;case $n:return v.key===T?u(h,c,v,L):null;case Zt:return T=v._init,m(h,c,T(v._payload),L)}if(Dr(v)||Sr(v))return T!==null?null:f(h,c,v,L,null);Va(h,v)}return null}function b(h,c,v,L,T){if(typeof L=="string"&&L!==""||typeof L=="number")return h=h.get(v)||null,i(c,h,""+L,T);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ba:return h=h.get(L.key===null?v:L.key)||null,s(c,h,L,T);case $n:return h=h.get(L.key===null?v:L.key)||null,u(c,h,L,T);case Zt:var R=L._init;return b(h,c,v,R(L._payload),T)}if(Dr(L)||Sr(L))return h=h.get(v)||null,f(c,h,L,T,null);Va(c,L)}return null}function E(h,c,v,L){for(var T=null,R=null,g=c,S=c=0,V=null;g!==null&&S<v.length;S++){g.index>S?(V=g,g=null):V=g.sibling;var O=m(h,g,v[S],L);if(O===null){g===null&&(g=V);break}e&&g&&O.alternate===null&&t(h,g),c=l(O,c,S),R===null?T=O:R.sibling=O,R=O,g=V}if(S===v.length)return n(h,g),me&&wn(h,S),T;if(g===null){for(;S<v.length;S++)g=d(h,v[S],L),g!==null&&(c=l(g,c,S),R===null?T=g:R.sibling=g,R=g);return me&&wn(h,S),T}for(g=r(h,g);S<v.length;S++)V=b(g,h,S,v[S],L),V!==null&&(e&&V.alternate!==null&&g.delete(V.key===null?S:V.key),c=l(V,c,S),R===null?T=V:R.sibling=V,R=V);return e&&g.forEach(function(re){return t(h,re)}),me&&wn(h,S),T}function w(h,c,v,L){var T=Sr(v);if(typeof T!="function")throw Error(N(150));if(v=T.call(v),v==null)throw Error(N(151));for(var R=T=null,g=c,S=c=0,V=null,O=v.next();g!==null&&!O.done;S++,O=v.next()){g.index>S?(V=g,g=null):V=g.sibling;var re=m(h,g,O.value,L);if(re===null){g===null&&(g=V);break}e&&g&&re.alternate===null&&t(h,g),c=l(re,c,S),R===null?T=re:R.sibling=re,R=re,g=V}if(O.done)return n(h,g),me&&wn(h,S),T;if(g===null){for(;!O.done;S++,O=v.next())O=d(h,O.value,L),O!==null&&(c=l(O,c,S),R===null?T=O:R.sibling=O,R=O);return me&&wn(h,S),T}for(g=r(h,g);!O.done;S++,O=v.next())O=b(g,h,S,O.value,L),O!==null&&(e&&O.alternate!==null&&g.delete(O.key===null?S:O.key),c=l(O,c,S),R===null?T=O:R.sibling=O,R=O);return e&&g.forEach(function(ae){return t(h,ae)}),me&&wn(h,S),T}function _(h,c,v,L){if(typeof v=="object"&&v!==null&&v.type===qn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:e:{for(var T=v.key,R=c;R!==null;){if(R.key===T){if(T=v.type,T===qn){if(R.tag===7){n(h,R.sibling),c=a(R,v.props.children),c.return=h,h=c;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zt&&Cu(T)===R.type){n(h,R.sibling),c=a(R,v.props),c.ref=Nr(h,R,v),c.return=h,h=c;break e}n(h,R);break}else t(h,R);R=R.sibling}v.type===qn?(c=In(v.props.children,h.mode,L,v.key),c.return=h,h=c):(L=ol(v.type,v.key,v.props,null,h.mode,L),L.ref=Nr(h,c,v),L.return=h,h=L)}return o(h);case $n:e:{for(R=v.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===v.containerInfo&&c.stateNode.implementation===v.implementation){n(h,c.sibling),c=a(c,v.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=No(v,h.mode,L),c.return=h,h=c}return o(h);case Zt:return R=v._init,_(h,c,R(v._payload),L)}if(Dr(v))return E(h,c,v,L);if(Sr(v))return w(h,c,v,L);Va(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,c!==null&&c.tag===6?(n(h,c.sibling),c=a(c,v),c.return=h,h=c):(n(h,c),c=Po(v,h.mode,L),c.return=h,h=c),o(h)):n(h,c)}return _}var pr=Md(!0),Dd=Md(!1),El=vn(null),wl=null,tr=null,Ji=null;function es(){Ji=tr=wl=null}function ts(e){var t=El.current;de(El),e._currentValue=t}function ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){wl=e,Ji=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Ji!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(wl===null)throw Error(N(308));tr=e,wl.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var xn=null;function ns(e){xn===null?xn=[e]:xn.push(e)}function Ad(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,ns(t)):(n.next=a.next,a.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,jt(e,n)}return a=r.interleaved,a===null?(t.next=t,ns(r)):(t.next=a.next,a.next=t),r.interleaved=t,jt(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ui(e,n)}}function Tu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ll(e,t,n,r){var a=e.updateQueue;Xt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var s=i,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==o&&(i===null?f.firstBaseUpdate=u:i.next=u,f.lastBaseUpdate=s))}if(l!==null){var d=a.baseState;o=0,f=u=s=null,i=l;do{var m=i.lane,b=i.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var E=e,w=i;switch(m=t,b=n,w.tag){case 1:if(E=w.payload,typeof E=="function"){d=E.call(b,d,m);break e}d=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=w.payload,m=typeof E=="function"?E.call(b,d,m):E,m==null)break e;d=ve({},d,m);break e;case 2:Xt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else b={eventTime:b,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(u=f=b,s=d):f=f.next=b,o|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=d}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(N(191,a));a.call(r)}}}var ba={},Nt=vn(ba),oa=vn(ba),ia=vn(ba);function Pn(e){if(e===ba)throw Error(N(174));return e}function as(e,t){switch(se(ia,t),se(oa,e),se(Nt,ba),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vo(t,e)}de(Nt),se(Nt,t)}function mr(){de(Nt),de(oa),de(ia)}function Fd(e){Pn(ia.current);var t=Pn(Nt.current),n=Vo(t,e.type);t!==n&&(se(oa,e),se(Nt,n))}function ls(e){oa.current===e&&(de(Nt),de(oa))}var he=vn(0);function Sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=[];function os(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var tl=Ut.ReactCurrentDispatcher,Lo=Ut.ReactCurrentBatchConfig,Rn=0,ge=null,xe=null,_e=null,Cl=!1,Gr=!1,sa=0,lh=0;function ze(){throw Error(N(321))}function is(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function ss(e,t,n,r,a,l){if(Rn=l,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.current=e===null||e.memoizedState===null?uh:ch,e=n(r,a),Gr){l=0;do{if(Gr=!1,sa=0,25<=l)throw Error(N(301));l+=1,_e=xe=null,t.updateQueue=null,tl.current=dh,e=n(r,a)}while(Gr)}if(tl.current=Tl,t=xe!==null&&xe.next!==null,Rn=0,_e=xe=ge=null,Cl=!1,t)throw Error(N(300));return e}function us(){var e=sa!==0;return sa=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ge.memoizedState=_e=e:_e=_e.next=e,_e}function ct(){if(xe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=_e===null?ge.memoizedState:_e.next;if(t!==null)_e=t,xe=e;else{if(e===null)throw Error(N(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},_e===null?ge.memoizedState=_e=e:_e=_e.next=e}return _e}function ua(e,t){return typeof t=="function"?t(e):t}function So(e){var t=ct(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=xe,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var i=o=null,s=null,u=l;do{var f=u.lane;if((Rn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,o=r):s=s.next=d,ge.lanes|=f,Mn|=f}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=i,Et(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,ge.lanes|=l,Mn|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Co(e){var t=ct(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);Et(l,t.memoizedState)||(Qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function jd(){}function Hd(e,t){var n=ge,r=ct(),a=t(),l=!Et(r.memoizedState,a);if(l&&(r.memoizedState=a,Qe=!0),r=r.queue,cs(Wd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ca(9,Vd.bind(null,n,r,a,t),void 0,null),Ie===null)throw Error(N(349));Rn&30||Ud(n,t,a)}return a}function Ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,r){t.value=n,t.getSnapshot=r,Gd(t)&&$d(e)}function Wd(e,t,n){return n(function(){Gd(t)&&$d(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function $d(e){var t=jt(e,1);t!==null&&kt(t,e,1,-1)}function Pu(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t.queue=e,e=e.dispatch=sh.bind(null,ge,e),[t.memoizedState,e]}function ca(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qd(){return ct().memoizedState}function nl(e,t,n,r){var a=Tt();ge.flags|=e,a.memoizedState=ca(1|t,n,void 0,r===void 0?null:r)}function Ul(e,t,n,r){var a=ct();r=r===void 0?null:r;var l=void 0;if(xe!==null){var o=xe.memoizedState;if(l=o.destroy,r!==null&&is(r,o.deps)){a.memoizedState=ca(t,n,l,r);return}}ge.flags|=e,a.memoizedState=ca(1|t,n,l,r)}function Nu(e,t){return nl(8390656,8,e,t)}function cs(e,t){return Ul(2048,8,e,t)}function Qd(e,t){return Ul(4,2,e,t)}function Kd(e,t){return Ul(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,n){return n=n!=null?n.concat([e]):null,Ul(4,4,Yd.bind(null,t,e),n)}function ds(){}function Xd(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&is(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jd(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&is(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ef(e,t,n){return Rn&21?(Et(n,t)||(n=ld(),ge.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function oh(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Lo.transition;Lo.transition={};try{e(!1),t()}finally{oe=n,Lo.transition=r}}function tf(){return ct().memoizedState}function ih(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nf(e))rf(t,n);else if(n=Ad(e,t,n,r),n!==null){var a=Ve();kt(n,e,r,a),af(n,t,r)}}function sh(e,t,n){var r=dn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nf(e))rf(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,i=l(o,n);if(a.hasEagerState=!0,a.eagerState=i,Et(i,o)){var s=t.interleaved;s===null?(a.next=a,ns(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Ad(e,t,a,r),n!==null&&(a=Ve(),kt(n,e,r,a),af(n,t,r))}}function nf(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function rf(e,t){Gr=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ui(e,n)}}var Tl={readContext:ut,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},uh={readContext:ut,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,nl(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return nl(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ih.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:ds,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=oh.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,a=Tt();if(me){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Ie===null)throw Error(N(349));Rn&30||Ud(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Nu(Wd.bind(null,r,l,e),[e]),r.flags|=2048,ca(9,Vd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Ie.identifierPrefix;if(me){var n=Dt,r=Mt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:ut,useCallback:Xd,useContext:ut,useEffect:cs,useImperativeHandle:Zd,useInsertionEffect:Qd,useLayoutEffect:Kd,useMemo:Jd,useReducer:So,useRef:qd,useState:function(){return So(ua)},useDebugValue:ds,useDeferredValue:function(e){var t=ct();return ef(t,xe.memoizedState,e)},useTransition:function(){var e=So(ua)[0],t=ct().memoizedState;return[e,t]},useMutableSource:jd,useSyncExternalStore:Hd,useId:tf,unstable_isNewReconciler:!1},dh={readContext:ut,useCallback:Xd,useContext:ut,useEffect:cs,useImperativeHandle:Zd,useInsertionEffect:Qd,useLayoutEffect:Kd,useMemo:Jd,useReducer:Co,useRef:qd,useState:function(){return Co(ua)},useDebugValue:ds,useDeferredValue:function(e){var t=ct();return xe===null?t.memoizedState=e:ef(t,xe.memoizedState,e)},useTransition:function(){var e=Co(ua)[0],t=ct().memoizedState;return[e,t]},useMutableSource:jd,useSyncExternalStore:Hd,useId:tf,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vl={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),a=dn(e),l=At(r,a);l.payload=t,n!=null&&(l.callback=n),t=un(e,l,a),t!==null&&(kt(t,e,a,r),el(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),a=dn(e),l=At(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=un(e,l,a),t!==null&&(kt(t,e,a,r),el(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=dn(e),a=At(n,r);a.tag=2,t!=null&&(a.callback=t),t=un(e,a,r),t!==null&&(kt(t,e,r,n),el(t,e,r))}};function _u(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!na(n,r)||!na(a,l):!0}function lf(e,t,n){var r=!1,a=hn,l=t.contextType;return typeof l=="object"&&l!==null?l=ut(l):(a=Ye(t)?Bn:He.current,r=t.contextTypes,l=(r=r!=null)?dr(e,a):hn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vl.enqueueReplaceState(t,t.state,null)}function di(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},rs(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=ut(l):(l=Ye(t)?Bn:He.current,a.context=dr(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ci(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Vl.enqueueReplaceState(a,a.state,null),Ll(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var n="",r=t;do n+=Fp(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function To(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function of(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pl||(Pl=!0,wi=r),fi(e,t)},n}function sf(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){fi(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fh;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Th.bind(null,e,t,n),t.then(e,e))}function Ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var ph=Ut.ReactCurrentOwner,Qe=!1;function Ue(e,t,n,r){t.child=e===null?Dd(t,null,n,r):pr(t,e.child,n,r)}function Mu(e,t,n,r,a){n=n.render;var l=t.ref;return sr(t,a),r=ss(e,t,n,r,l,a),n=us(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ht(e,t,a)):(me&&n&&Yi(t),t.flags|=1,Ue(e,t,r,a),t.child)}function Du(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!bs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,uf(e,t,l,r,a)):(e=ol(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,r)&&e.ref===t.ref)return Ht(e,t,a)}return t.flags|=1,e=fn(l,r),e.ref=t.ref,e.return=t,t.child=e}function uf(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(na(l,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Ht(e,t,a)}return pi(e,t,n,r,a)}function cf(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(rr,Xe),Xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(rr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,se(rr,Xe),Xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,se(rr,Xe),Xe|=r;return Ue(e,t,a,n),t.child}function df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pi(e,t,n,r,a){var l=Ye(n)?Bn:He.current;return l=dr(t,l),sr(t,a),n=ss(e,t,n,r,l,a),r=us(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ht(e,t,a)):(me&&r&&Yi(t),t.flags|=1,Ue(e,t,n,a),t.child)}function Au(e,t,n,r,a){if(Ye(n)){var l=!0;yl(t)}else l=!1;if(sr(t,a),t.stateNode===null)rl(e,t),lf(t,n,r),di(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ye(n)?Bn:He.current,u=dr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||s!==u)&&Iu(t,o,r,u),Xt=!1;var m=t.memoizedState;o.state=m,Ll(t,r,o,a),s=t.memoizedState,i!==r||m!==s||Ke.current||Xt?(typeof f=="function"&&(ci(t,n,f,r),s=t.memoizedState),(i=Xt||_u(t,n,i,r,m,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zd(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:ht(t.type,i),o.props=u,d=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ut(s):(s=Ye(n)?Bn:He.current,s=dr(t,s));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==d||m!==s)&&Iu(t,o,r,s),Xt=!1,m=t.memoizedState,o.state=m,Ll(t,r,o,a);var E=t.memoizedState;i!==d||m!==E||Ke.current||Xt?(typeof b=="function"&&(ci(t,n,b,r),E=t.memoizedState),(u=Xt||_u(t,n,u,r,m,E,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return mi(e,t,n,r,l,a)}function mi(e,t,n,r,a,l){df(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&wu(t,n,!1),Ht(e,t,l);r=t.stateNode,ph.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pr(t,e.child,null,l),t.child=pr(t,null,i,l)):Ue(e,t,i,l),t.memoizedState=r.state,a&&wu(t,n,!0),t.child}function ff(e){var t=e.stateNode;t.pendingContext?Eu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eu(e,t.context,!1),as(e,t.containerInfo)}function zu(e,t,n,r,a){return fr(),Xi(a),t.flags|=256,Ue(e,t,n,r),t.child}var hi={dehydrated:null,treeContext:null,retryLane:0};function gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function pf(e,t,n){var r=t.pendingProps,a=he.current,l=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),se(he,a&1),e===null)return si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=$l(o,r,0,null),e=In(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=gi(n),t.memoizedState=hi,e):fs(t,o));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return mh(e,t,o,r,i,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,i=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=fn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=fn(i,l):(l=In(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?gi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=hi,r}return l=e.child,e=l.sibling,r=fn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fs(e,t){return t=$l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wa(e,t,n,r){return r!==null&&Xi(r),pr(t,e.child,null,n),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=To(Error(N(422))),Wa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=$l({mode:"visible",children:r.children},a,0,null),l=In(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&pr(t,e.child,null,o),t.child.memoizedState=gi(o),t.memoizedState=hi,l);if(!(t.mode&1))return Wa(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(N(419)),r=To(l,r,void 0),Wa(e,t,o,r)}if(i=(o&e.childLanes)!==0,Qe||i){if(r=Ie,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,jt(e,a),kt(r,e,a,-1))}return ys(),r=To(Error(N(421))),Wa(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=xh.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,et=sn(a.nextSibling),tt=t,me=!0,yt=null,e!==null&&(lt[ot++]=Mt,lt[ot++]=Dt,lt[ot++]=On,Mt=e.id,Dt=e.overflow,On=t),t=fs(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ui(e.return,t,n)}function xo(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function mf(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(Ue(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(he,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Sl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),xo(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Sl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}xo(t,!0,n,null,l);break;case"together":xo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hh(e,t,n){switch(t.tag){case 3:ff(t),fr();break;case 5:Fd(t);break;case 1:Ye(t.type)&&yl(t);break;case 4:as(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;se(El,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?pf(e,t,n):(se(he,he.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);se(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),se(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,cf(e,t,n)}return Ht(e,t,n)}var hf,vi,gf,vf;hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vi=function(){};gf=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Pn(Nt.current);var l=null;switch(n){case"input":a=Fo(e,a),r=Fo(e,r),l=[];break;case"select":a=ve({},a,{value:void 0}),r=ve({},r,{value:void 0}),l=[];break;case"textarea":a=Uo(e,a),r=Uo(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gl)}Wo(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&i[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ce("scroll",e),l||i===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function _r(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gh(e,t,n){var r=t.pendingProps;switch(Zi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Ye(t.type)&&vl(),Fe(t),null;case 3:return r=t.stateNode,mr(),de(Ke),de(He),os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ua(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Ci(yt),yt=null))),vi(e,t),Fe(t),null;case 5:ls(t);var a=Pn(ia.current);if(n=t.type,e!==null&&t.stateNode!=null)gf(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Fe(t),null}if(e=Pn(Nt.current),Ua(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[xt]=t,r[la]=l,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(a=0;a<zr.length;a++)ce(zr[a],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Qs(r,l),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ce("invalid",r);break;case"textarea":Ys(r,l),ce("invalid",r)}Wo(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Ha(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Ha(r.textContent,i,e),a=["children",""+i]):Kr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Oa(r),Ks(r,l,!0);break;case"textarea":Oa(r),Zs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=gl)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[la]=r,hf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Go(n,r),n){case"dialog":ce("cancel",e),ce("close",e),a=r;break;case"iframe":case"object":case"embed":ce("load",e),a=r;break;case"video":case"audio":for(a=0;a<zr.length;a++)ce(zr[a],e);a=r;break;case"source":ce("error",e),a=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),a=r;break;case"details":ce("toggle",e),a=r;break;case"input":Qs(e,r),a=Fo(e,r),ce("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ve({},r,{value:void 0}),ce("invalid",e);break;case"textarea":Ys(e,r),a=Uo(e,r),ce("invalid",e);break;default:a=r}Wo(n,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="style"?qc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Yr(e,s):typeof s=="number"&&Yr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Kr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ce("scroll",e):s!=null&&Di(e,l,s,o))}switch(n){case"input":Oa(e),Ks(e,r,!1);break;case"textarea":Oa(e),Zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ar(e,!!r.multiple,l,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Pn(ia.current),Pn(Nt.current),Ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(l=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Ha(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ha(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Fe(t),null;case 13:if(de(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&et!==null&&t.mode&1&&!(t.flags&128))Rd(),fr(),t.flags|=98560,l=!1;else if(l=Ua(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[xt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),l=!1}else yt!==null&&(Ci(yt),yt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Pe===0&&(Pe=3):ys())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return mr(),vi(e,t),e===null&&ra(t.stateNode.containerInfo),Fe(t),null;case 10:return ts(t.type._context),Fe(t),null;case 17:return Ye(t.type)&&vl(),Fe(t),null;case 19:if(de(he),l=t.memoizedState,l===null)return Fe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)_r(l,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Sl(e),o!==null){for(t.flags|=128,_r(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(he,he.current&1|2),t.child}e=e.sibling}l.tail!==null&&we()>gr&&(t.flags|=128,r=!0,_r(l,!1),t.lanes=4194304)}else{if(!r)if(e=Sl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_r(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!me)return Fe(t),null}else 2*we()-l.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,_r(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=we(),t.sibling=null,n=he.current,se(he,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function vh(e,t){switch(Zi(t),t.tag){case 1:return Ye(t.type)&&vl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),de(Ke),de(He),os(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ls(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return mr(),null;case 10:return ts(t.type._context),null;case 22:case 23:return vs(),null;case 24:return null;default:return null}}var Ga=!1,je=!1,yh=typeof WeakSet=="function"?WeakSet:Set,M=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function yi(e,t,n){try{n()}catch(r){ke(e,t,r)}}var ju=!1;function bh(e,t){if(ti=pl,e=Ed(),Ki(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,i=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var b;d!==n||a!==0&&d.nodeType!==3||(i=o+a),d!==l||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(b=d.firstChild)!==null;)m=d,d=b;for(;;){if(d===e)break t;if(m===n&&++u===a&&(i=o),m===l&&++f===r&&(s=o),(b=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=b}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ni={focusedElem:e,selectionRange:n},pl=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var w=E.memoizedProps,_=E.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:ht(t.type,w),_);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(L){ke(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return E=ju,ju=!1,E}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&yi(t,n,l)}a=a.next}while(a!==r)}}function Wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[la],delete t[li],delete t[th],delete t[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bf(e){return e.tag===5||e.tag===3||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(r!==4&&(e=e.child,e!==null))for(ki(e,t,n),e=e.sibling;e!==null;)ki(e,t,n),e=e.sibling}function Ei(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}var Re=null,gt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)kf(e,t,n),n=n.sibling}function kf(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:je||nr(n,t);case 6:var r=Re,a=gt;Re=null,Kt(e,t,n),Re=r,gt=a,Re!==null&&(gt?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(gt?(e=Re,n=n.stateNode,e.nodeType===8?ko(e.parentNode,n):e.nodeType===1&&ko(e,n),ea(e)):ko(Re,n.stateNode));break;case 4:r=Re,a=gt,Re=n.stateNode.containerInfo,gt=!0,Kt(e,t,n),Re=r,gt=a;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&yi(n,t,o),a=a.next}while(a!==r)}Kt(e,t,n);break;case 1:if(!je&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ke(n,t,i)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Kt(e,t,n),je=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function Uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yh),t.forEach(function(r){var a=Ph.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:Re=i.stateNode,gt=!1;break e;case 3:Re=i.stateNode.containerInfo,gt=!0;break e;case 4:Re=i.stateNode.containerInfo,gt=!0;break e}i=i.return}if(Re===null)throw Error(N(160));kf(l,o,a),Re=null,gt=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ke(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ef(t,e),t=t.sibling}function Ef(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Ct(e),r&4){try{$r(3,e,e.return),Wl(3,e)}catch(w){ke(e,e.return,w)}try{$r(5,e,e.return)}catch(w){ke(e,e.return,w)}}break;case 1:pt(t,e),Ct(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(pt(t,e),Ct(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var a=e.stateNode;try{Yr(a,"")}catch(w){ke(e,e.return,w)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Uc(a,l),Go(i,o);var u=Go(i,l);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?qc(a,d):f==="dangerouslySetInnerHTML"?Gc(a,d):f==="children"?Yr(a,d):Di(a,f,d,u)}switch(i){case"input":jo(a,l);break;case"textarea":Vc(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?ar(a,!!l.multiple,b,!1):m!==!!l.multiple&&(l.defaultValue!=null?ar(a,!!l.multiple,l.defaultValue,!0):ar(a,!!l.multiple,l.multiple?[]:"",!1))}a[la]=l}catch(w){ke(e,e.return,w)}}break;case 6:if(pt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(N(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(w){ke(e,e.return,w)}}break;case 3:if(pt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(t.containerInfo)}catch(w){ke(e,e.return,w)}break;case 4:pt(t,e),Ct(e);break;case 13:pt(t,e),Ct(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(hs=we())),r&4&&Uu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||f,pt(t,e),je=u):pt(t,e),Ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(d=M=f;M!==null;){switch(m=M,b=m.child,m.tag){case 0:case 11:case 14:case 15:$r(4,m,m.return);break;case 1:nr(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(w){ke(r,n,w)}}break;case 5:nr(m,m.return);break;case 22:if(m.memoizedState!==null){Wu(d);continue}}b!==null?(b.return=m,M=b):Wu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=$c("display",o))}catch(w){ke(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ke(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pt(t,e),Ct(e),r&4&&Uu(e);break;case 21:break;default:pt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bf(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Yr(a,""),r.flags&=-33);var l=Hu(e);Ei(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Hu(e);ki(e,i,o);break;default:throw Error(N(161))}}catch(s){ke(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kh(e,t,n){M=e,wf(e)}function wf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var a=M,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Ga;if(!o){var i=a.alternate,s=i!==null&&i.memoizedState!==null||je;i=Ga;var u=je;if(Ga=o,(je=s)&&!u)for(M=a;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?Gu(a):s!==null?(s.return=o,M=s):Gu(a);for(;l!==null;)M=l,wf(l),l=l.sibling;M=a,Ga=i,je=u}Vu(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,M=l):Vu(e)}}function Vu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&xu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ea(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}je||t.flags&512&&bi(t)}catch(m){ke(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Wu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Gu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wl(4,t)}catch(s){ke(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){ke(t,a,s)}}var l=t.return;try{bi(t)}catch(s){ke(t,l,s)}break;case 5:var o=t.return;try{bi(t)}catch(s){ke(t,o,s)}}}catch(s){ke(t,t.return,s)}if(t===e){M=null;break}var i=t.sibling;if(i!==null){i.return=t.return,M=i;break}M=t.return}}var Eh=Math.ceil,xl=Ut.ReactCurrentDispatcher,ps=Ut.ReactCurrentOwner,st=Ut.ReactCurrentBatchConfig,Z=0,Ie=null,Ce=null,Me=0,Xe=0,rr=vn(0),Pe=0,da=null,Mn=0,Gl=0,ms=0,qr=null,qe=null,hs=0,gr=1/0,Ot=null,Pl=!1,wi=null,cn=null,$a=!1,nn=null,Nl=0,Qr=0,Li=null,al=-1,ll=0;function Ve(){return Z&6?we():al!==-1?al:al=we()}function dn(e){return e.mode&1?Z&2&&Me!==0?Me&-Me:ah.transition!==null?(ll===0&&(ll=ld()),ll):(e=oe,e!==0||(e=window.event,e=e===void 0?16:fd(e.type)),e):1}function kt(e,t,n,r){if(50<Qr)throw Qr=0,Li=null,Error(N(185));ga(e,n,r),(!(Z&2)||e!==Ie)&&(e===Ie&&(!(Z&2)&&(Gl|=n),Pe===4&&en(e,Me)),Ze(e,r),n===1&&Z===0&&!(t.mode&1)&&(gr=we()+500,Hl&&yn()))}function Ze(e,t){var n=e.callbackNode;am(e,t);var r=fl(e,e===Ie?Me:0);if(r===0)n!==null&&eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eu(n),t===1)e.tag===0?rh($u.bind(null,e)):Id($u.bind(null,e)),Jm(function(){!(Z&6)&&yn()}),n=null;else{switch(od(r)){case 1:n=Hi;break;case 4:n=rd;break;case 16:n=dl;break;case 536870912:n=ad;break;default:n=dl}n=_f(n,Lf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lf(e,t){if(al=-1,ll=0,Z&6)throw Error(N(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=fl(e,e===Ie?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_l(e,r);else{t=r;var a=Z;Z|=2;var l=Cf();(Ie!==e||Me!==t)&&(Ot=null,gr=we()+500,_n(e,t));do try{Sh();break}catch(i){Sf(e,i)}while(!0);es(),xl.current=l,Z=a,Ce!==null?t=0:(Ie=null,Me=0,t=Pe)}if(t!==0){if(t===2&&(a=Yo(e),a!==0&&(r=a,t=Si(e,a))),t===1)throw n=da,_n(e,0),en(e,r),Ze(e,we()),n;if(t===6)en(e,r);else{if(a=e.current.alternate,!(r&30)&&!wh(a)&&(t=_l(e,r),t===2&&(l=Yo(e),l!==0&&(r=l,t=Si(e,l))),t===1))throw n=da,_n(e,0),en(e,r),Ze(e,we()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Ln(e,qe,Ot);break;case 3:if(en(e,r),(r&130023424)===r&&(t=hs+500-we(),10<t)){if(fl(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ai(Ln.bind(null,e,qe,Ot),t);break}Ln(e,qe,Ot);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-bt(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Eh(r/1960))-r,10<r){e.timeoutHandle=ai(Ln.bind(null,e,qe,Ot),r);break}Ln(e,qe,Ot);break;case 5:Ln(e,qe,Ot);break;default:throw Error(N(329))}}}return Ze(e,we()),e.callbackNode===n?Lf.bind(null,e):null}function Si(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=_l(e,t),e!==2&&(t=qe,qe=n,t!==null&&Ci(t)),e}function Ci(e){qe===null?qe=e:qe.push.apply(qe,e)}function wh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Et(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~ms,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(Z&6)throw Error(N(327));ur();var t=fl(e,0);if(!(t&1))return Ze(e,we()),null;var n=_l(e,t);if(e.tag!==0&&n===2){var r=Yo(e);r!==0&&(t=r,n=Si(e,r))}if(n===1)throw n=da,_n(e,0),en(e,t),Ze(e,we()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,qe,Ot),Ze(e,we()),null}function gs(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(gr=we()+500,Hl&&yn())}}function Dn(e){nn!==null&&nn.tag===0&&!(Z&6)&&ur();var t=Z;Z|=1;var n=st.transition,r=oe;try{if(st.transition=null,oe=1,e)return e()}finally{oe=r,st.transition=n,Z=t,!(Z&6)&&yn()}}function vs(){Xe=rr.current,de(rr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xm(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Zi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vl();break;case 3:mr(),de(Ke),de(He),os();break;case 5:ls(r);break;case 4:mr();break;case 13:de(he);break;case 19:de(he);break;case 10:ts(r.type._context);break;case 22:case 23:vs()}n=n.return}if(Ie=e,Ce=e=fn(e.current,null),Me=Xe=t,Pe=0,da=null,ms=Gl=Mn=0,qe=qr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}xn=null}return e}function Sf(e,t){do{var n=Ce;try{if(es(),tl.current=Tl,Cl){for(var r=ge.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Cl=!1}if(Rn=0,_e=xe=ge=null,Gr=!1,sa=0,ps.current=null,n===null||n.return===null){Pe=1,da=t,Ce=null;break}e:{var l=e,o=n.return,i=n,s=t;if(t=Me,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=i,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=Ou(o);if(b!==null){b.flags&=-257,Ru(b,o,i,l,t),b.mode&1&&Bu(l,u,t),t=b,s=u;var E=t.updateQueue;if(E===null){var w=new Set;w.add(s),t.updateQueue=w}else E.add(s);break e}else{if(!(t&1)){Bu(l,u,t),ys();break e}s=Error(N(426))}}else if(me&&i.mode&1){var _=Ou(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ru(_,o,i,l,t),Xi(hr(s,i));break e}}l=s=hr(s,i),Pe!==4&&(Pe=2),qr===null?qr=[l]:qr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=of(l,s,t);Tu(l,h);break e;case 1:i=s;var c=l.type,v=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cn===null||!cn.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var L=sf(l,i,t);Tu(l,L);break e}}l=l.return}while(l!==null)}xf(n)}catch(T){t=T,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Cf(){var e=xl.current;return xl.current=Tl,e===null?Tl:e}function ys(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ie===null||!(Mn&268435455)&&!(Gl&268435455)||en(Ie,Me)}function _l(e,t){var n=Z;Z|=2;var r=Cf();(Ie!==e||Me!==t)&&(Ot=null,_n(e,t));do try{Lh();break}catch(a){Sf(e,a)}while(!0);if(es(),Z=n,xl.current=r,Ce!==null)throw Error(N(261));return Ie=null,Me=0,Pe}function Lh(){for(;Ce!==null;)Tf(Ce)}function Sh(){for(;Ce!==null&&!Kp();)Tf(Ce)}function Tf(e){var t=Nf(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?xf(e):Ce=t,ps.current=null}function xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vh(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ce=null;return}}else if(n=gh(n,t,Xe),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Pe===0&&(Pe=5)}function Ln(e,t,n){var r=oe,a=st.transition;try{st.transition=null,oe=1,Ch(e,t,n,r)}finally{st.transition=a,oe=r}return null}function Ch(e,t,n,r){do ur();while(nn!==null);if(Z&6)throw Error(N(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(lm(e,l),e===Ie&&(Ce=Ie=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$a||($a=!0,_f(dl,function(){return ur(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=st.transition,st.transition=null;var o=oe;oe=1;var i=Z;Z|=4,ps.current=null,bh(e,n),Ef(n,e),Gm(ni),pl=!!ti,ni=ti=null,e.current=n,kh(n),Yp(),Z=i,oe=o,st.transition=l}else e.current=n;if($a&&($a=!1,nn=e,Nl=a),l=e.pendingLanes,l===0&&(cn=null),Jp(n.stateNode),Ze(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Pl)throw Pl=!1,e=wi,wi=null,e;return Nl&1&&e.tag!==0&&ur(),l=e.pendingLanes,l&1?e===Li?Qr++:(Qr=0,Li=e):Qr=0,yn(),null}function ur(){if(nn!==null){var e=od(Nl),t=st.transition,n=oe;try{if(st.transition=null,oe=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Nl=0,Z&6)throw Error(N(331));var a=Z;for(Z|=4,M=e.current;M!==null;){var l=M,o=l.child;if(M.flags&16){var i=l.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:$r(8,f,l)}var d=f.child;if(d!==null)d.return=f,M=d;else for(;M!==null;){f=M;var m=f.sibling,b=f.return;if(yf(f),f===u){M=null;break}if(m!==null){m.return=b,M=m;break}M=b}}}var E=l.alternate;if(E!==null){var w=E.child;if(w!==null){E.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}M=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,M=o;else e:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:$r(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,M=h;break e}M=l.return}}var c=e.current;for(M=c;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=c;M!==null;){if(i=M,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Wl(9,i)}}catch(T){ke(i,i.return,T)}if(i===o){M=null;break e}var L=i.sibling;if(L!==null){L.return=i.return,M=L;break e}M=i.return}}if(Z=a,yn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Dl,e)}catch{}r=!0}return r}finally{oe=n,st.transition=t}}return!1}function qu(e,t,n){t=hr(n,t),t=of(e,t,1),e=un(e,t,1),t=Ve(),e!==null&&(ga(e,1,t),Ze(e,t))}function ke(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=hr(n,e),e=sf(t,e,1),t=un(t,e,1),e=Ve(),t!==null&&(ga(t,1,e),Ze(t,e));break}}t=t.return}}function Th(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Me&n)===n&&(Pe===4||Pe===3&&(Me&130023424)===Me&&500>we()-hs?_n(e,0):ms|=n),Ze(e,t)}function Pf(e,t){t===0&&(e.mode&1?(t=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):t=1);var n=Ve();e=jt(e,t),e!==null&&(ga(e,t,n),Ze(e,n))}function xh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pf(e,n)}function Ph(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Pf(e,n)}var Nf;Nf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,hh(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,me&&t.flags&1048576&&Bd(t,kl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var a=dr(t,He.current);sr(t,n),a=ss(null,t,r,e,a,n);var l=us();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(l=!0,yl(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,rs(t),a.updater=Vl,t.stateNode=a,a._reactInternals=t,di(t,r,e,n),t=mi(null,t,r,!0,l,n)):(t.tag=0,me&&l&&Yi(t),Ue(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=_h(r),e=ht(r,e),a){case 0:t=pi(null,t,r,e,n);break e;case 1:t=Au(null,t,r,e,n);break e;case 11:t=Mu(null,t,r,e,n);break e;case 14:t=Du(null,t,r,ht(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),pi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),Au(e,t,r,a,n);case 3:e:{if(ff(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,a=l.element,zd(e,t),Ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=hr(Error(N(423)),t),t=zu(e,t,r,n,a);break e}else if(r!==a){a=hr(Error(N(424)),t),t=zu(e,t,r,n,a);break e}else for(et=sn(t.stateNode.containerInfo.firstChild),tt=t,me=!0,yt=null,n=Dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===a){t=Ht(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Fd(t),e===null&&si(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,ri(r,a)?o=null:l!==null&&ri(r,l)&&(t.flags|=32),df(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&si(t),null;case 13:return pf(e,t,n);case 4:return as(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),Mu(e,t,r,a,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,se(El,r._currentValue),r._currentValue=o,l!==null)if(Et(l.value,o)){if(l.children===a.children&&!Ke.current){t=Ht(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=At(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ui(l.return,n,t),i.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(N(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),ui(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ue(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,sr(t,n),a=ut(a),r=r(a),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,a=ht(r,t.pendingProps),a=ht(r.type,a),Du(e,t,r,a,n);case 15:return uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),rl(e,t),t.tag=1,Ye(r)?(e=!0,yl(t)):e=!1,sr(t,n),lf(t,r,a),di(t,r,a,n),mi(null,t,r,!0,e,n);case 19:return mf(e,t,n);case 22:return cf(e,t,n)}throw Error(N(156,t.tag))};function _f(e,t){return nd(e,t)}function Nh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new Nh(e,t,n,r)}function bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _h(e){if(typeof e=="function")return bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zi)return 11;if(e===Fi)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ol(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")bs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qn:return In(n.children,a,l,t);case Ai:o=8,a|=8;break;case Mo:return e=it(12,n,t,a|2),e.elementType=Mo,e.lanes=l,e;case Do:return e=it(13,n,t,a),e.elementType=Do,e.lanes=l,e;case Ao:return e=it(19,n,t,a),e.elementType=Ao,e.lanes=l,e;case Fc:return $l(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ac:o=10;break e;case zc:o=9;break e;case zi:o=11;break e;case Fi:o=14;break e;case Zt:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=it(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function In(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=it(22,e,r,t),e.elementType=Fc,e.lanes=n,e.stateNode={isHidden:!1},e}function Po(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ih(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ks(e,t,n,r,a,l,o,i,s){return e=new Ih(e,t,n,i,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=it(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rs(l),e}function Bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function If(e){if(!e)return hn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ye(n))return _d(e,n,t)}return t}function Bf(e,t,n,r,a,l,o,i,s){return e=ks(n,r,!0,e,a,l,o,i,s),e.context=If(null),n=e.current,r=Ve(),a=dn(n),l=At(r,a),l.callback=t??null,un(n,l,a),e.current.lanes=a,ga(e,a,r),Ze(e,r),e}function ql(e,t,n,r){var a=t.current,l=Ve(),o=dn(a);return n=If(n),t.context===null?t.context=n:t.pendingContext=n,t=At(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(a,t,o),e!==null&&(kt(e,a,o,l),el(e,a,o)),o}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Es(e,t){Qu(e,t),(e=e.alternate)&&Qu(e,t)}function Oh(){return null}var Of=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}Ql.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ql(e,t,null,null)};Ql.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){ql(null,e,null,null)}),t[Ft]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&dd(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ku(){}function Rh(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=Il(o);l.call(u)}}var o=Bf(t,r,e,0,null,!1,!1,"",Ku);return e._reactRootContainer=o,e[Ft]=o.current,ra(e.nodeType===8?e.parentNode:e),Dn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=Il(s);i.call(u)}}var s=ks(e,0,!1,null,null,!1,!1,"",Ku);return e._reactRootContainer=s,e[Ft]=s.current,ra(e.nodeType===8?e.parentNode:e),Dn(function(){ql(t,s,n,r)}),s}function Yl(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var i=a;a=function(){var s=Il(o);i.call(s)}}ql(t,o,e,a)}else o=Rh(n,t,e,a,r);return Il(o)}id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(Ui(t,n|1),Ze(t,we()),!(Z&6)&&(gr=we()+500,yn()))}break;case 13:Dn(function(){var r=jt(e,1);if(r!==null){var a=Ve();kt(r,e,1,a)}}),Es(e,1)}};Vi=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ve();kt(t,e,134217728,n)}Es(e,134217728)}};sd=function(e){if(e.tag===13){var t=dn(e),n=jt(e,t);if(n!==null){var r=Ve();kt(n,e,t,r)}Es(e,t)}};ud=function(){return oe};cd=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};qo=function(e,t,n){switch(t){case"input":if(jo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=jl(r);if(!a)throw Error(N(90));Hc(r),jo(r,a)}}}break;case"textarea":Vc(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};Yc=gs;Zc=Dn;var Mh={usingClientEntryPoint:!1,Events:[ya,Zn,jl,Qc,Kc,gs]},Ir={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dh={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||Oh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Dl=qa.inject(Dh),Pt=qa}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mh;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(N(200));return Bh(e,t,null,n)};rt.createRoot=function(e,t){if(!Ls(e))throw Error(N(299));var n=!1,r="",a=Of;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ks(e,1,!1,null,null,n,!1,r,a),e[Ft]=t.current,ra(e.nodeType===8?e.parentNode:e),new ws(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=ed(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return Dn(e)};rt.hydrate=function(e,t,n){if(!Kl(t))throw Error(N(200));return Yl(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=Of;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,a,!1,l,o),e[Ft]=t.current,ra(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ql(t)};rt.render=function(e,t,n){if(!Kl(t))throw Error(N(200));return Yl(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Kl(e))throw Error(N(40));return e._reactRootContainer?(Dn(function(){Yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};rt.unstable_batchedUpdates=gs;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Kl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Yl(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function Rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rf)}catch(e){console.error(e)}}Rf(),Oc.exports=rt;var Ss=Oc.exports;const Ah=Ec(Ss),zh=kc({__proto__:null,default:Ah},[Ss]);var Yu=Ss;Oo.createRoot=Yu.createRoot,Oo.hydrateRoot=Yu.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}var Ee;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ee||(Ee={}));const Zu="popstate";function Fh(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:o,hash:i}=r.location;return fa("",{pathname:l,search:o,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:ka(a)}return Hh(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function An(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jh(){return Math.random().toString(36).substr(2,8)}function Xu(e,t){return{usr:e.state,key:e.key,idx:t}}function fa(e,t,n,r){return n===void 0&&(n=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vt(t):t,{state:n,key:t&&t.key||r||jh()})}function ka(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hh(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,o=a.history,i=Ee.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(pe({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){i=Ee.Pop;let _=f(),h=_==null?null:_-u;u=_,s&&s({action:i,location:w.location,delta:h})}function m(_,h){i=Ee.Push;let c=fa(w.location,_,h);u=f()+1;let v=Xu(c,u),L=w.createHref(c);try{o.pushState(v,"",L)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;a.location.assign(L)}l&&s&&s({action:i,location:w.location,delta:1})}function b(_,h){i=Ee.Replace;let c=fa(w.location,_,h);u=f();let v=Xu(c,u),L=w.createHref(c);o.replaceState(v,"",L),l&&s&&s({action:i,location:w.location,delta:0})}function E(_){let h=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof _=="string"?_:ka(_);return c=c.replace(/ $/,"%20"),q(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let w={get action(){return i},get location(){return e(a,o)},listen(_){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Zu,d),s=_,()=>{a.removeEventListener(Zu,d),s=null}},createHref(_){return t(a,_)},createURL:E,encodeLocation(_){let h=E(_);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:b,go(_){return o.go(_)}};return w}var le;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(le||(le={}));const Uh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Vh(e){return e.index===!0}function Bl(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,l)=>{let o=[...n,String(l)],i=typeof a.id=="string"?a.id:o.join("-");if(q(a.index!==!0||!a.children,"Cannot specify children on an index route"),q(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),Vh(a)){let s=pe({},a,t(a),{id:i});return r[i]=s,s}else{let s=pe({},a,t(a),{id:i,children:void 0});return r[i]=s,a.children&&(s.children=Bl(a.children,t,o,r)),s}})}function Sn(e,t,n){return n===void 0&&(n="/"),il(e,t,n,!1)}function il(e,t,n,r){let a=typeof t=="string"?Vt(t):t,l=Ea(a.pathname||"/",n);if(l==null)return null;let o=Mf(e);Gh(o);let i=null;for(let s=0;i==null&&s<o.length;++s){let u=ng(l);i=eg(o[s],u,r)}return i}function Wh(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function Mf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,o,i)=>{let s={relativePath:i===void 0?l.path||"":i,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=pn([r,s.relativePath]),f=n.concat(s);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mf(l.children,t,f,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Xh(u,l.index),routesMeta:f})};return e.forEach((l,o)=>{var i;if(l.path===""||!((i=l.path)!=null&&i.includes("?")))a(l,o);else for(let s of Df(l.path))a(l,o,s)}),t}function Df(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let o=Df(r.join("/")),i=[];return i.push(...o.map(s=>s===""?l:[l,s].join("/"))),a&&i.push(...o),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $h=/^:[\w-]+$/,qh=3,Qh=2,Kh=1,Yh=10,Zh=-2,Ju=e=>e==="*";function Xh(e,t){let n=e.split("/"),r=n.length;return n.some(Ju)&&(r+=Zh),t&&(r+=Qh),n.filter(a=>!Ju(a)).reduce((a,l)=>a+($h.test(l)?qh:l===""?Kh:Yh),r)}function Jh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function eg(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},l="/",o=[];for(let i=0;i<r.length;++i){let s=r[i],u=i===r.length-1,f=l==="/"?t:t.slice(l.length)||"/",d=ec({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=ec({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(a,d.params),o.push({params:a,pathname:pn([l,d.pathname]),pathnameBase:og(pn([l,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(l=pn([l,d.pathnameBase]))}return o}function ec(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tg(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],o=l.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:b}=f;if(m==="*"){let w=i[d]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const E=i[d];return b&&!E?u[m]=void 0:u[m]=(E||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function tg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),An(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function ng(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return An(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ea(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ag=e=>rg.test(e);function lg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Vt(e):e,l;if(n)if(ag(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),An(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=tc(n.substring(1),"/"):l=tc(n,t)}else l=t;return{pathname:l,search:ig(r),hash:sg(a)}}function tc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function _o(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Af(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Cs(e,t){let n=Af(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ts(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Vt(e):(a=pe({},e),q(!a.pathname||!a.pathname.includes("?"),_o("?","pathname","search",a)),q(!a.pathname||!a.pathname.includes("#"),_o("#","pathname","hash",a)),q(!a.search||!a.search.includes("#"),_o("#","search","hash",a)));let l=e===""||a.pathname==="",o=l?"/":a.pathname,i;if(o==null)i=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;a.pathname=m.join("/")}i=d>=0?t[d]:"/"}let s=lg(a,i),u=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),og=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ig=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ol{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function pa(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zf=["post","put","patch","delete"],ug=new Set(zf),cg=["get",...zf],dg=new Set(cg),fg=new Set([301,302,303,307,308]),pg=new Set([307,308]),Io={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Br={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},xs=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hg=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Ff="remix-router-transitions";function gg(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let p=e.detectErrorBoundary;a=y=>({hasErrorBoundary:p(y)})}else a=hg;let l={},o=Bl(e.routes,a,void 0,l),i,s=e.basename||"/",u=e.dataStrategy||kg,f=e.patchRoutesOnNavigation,d=pe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,b=new Set,E=null,w=null,_=null,h=e.hydrationData!=null,c=Sn(o,e.history.location,s),v=!1,L=null;if(c==null&&!f){let p=$e(404,{pathname:e.history.location.pathname}),{matches:y,route:k}=fc(o);c=y,L={[k.id]:p}}c&&!e.hydrationData&&xa(c,o,e.history.location.pathname).active&&(c=null);let T;if(c)if(c.some(p=>p.route.lazy))T=!1;else if(!c.some(p=>p.route.loader))T=!0;else if(d.v7_partialHydration){let p=e.hydrationData?e.hydrationData.loaderData:null,y=e.hydrationData?e.hydrationData.errors:null;if(y){let k=c.findIndex(C=>y[C.route.id]!==void 0);T=c.slice(0,k+1).every(C=>!xi(C.route,p,y))}else T=c.every(k=>!xi(k.route,p,y))}else T=e.hydrationData!=null;else if(T=!1,c=[],d.v7_partialHydration){let p=xa(null,o,e.history.location.pathname);p.active&&p.matches&&(v=!0,c=p.matches)}let R,g={historyAction:e.history.action,location:e.history.location,matches:c,initialized:T,navigation:Io,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||L,fetchers:new Map,blockers:new Map},S=Ee.Pop,V=!1,O,re=!1,ae=new Map,fe=null,Le=!1,Be=!1,wt=[],dt=new Set,I=new Map,U=0,j=-1,Y=new Map,ee=new Set,Ne=new Map,G=new Map,X=new Set,te=new Map,ue=new Map,Ae;function Wt(){if(m=e.history.listen(p=>{let{action:y,location:k,delta:C}=p;if(Ae){Ae(),Ae=void 0;return}An(ue.size===0||C!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=zs({currentLocation:g.location,nextLocation:k,historyAction:y});if(B&&C!=null){let H=new Promise(W=>{Ae=W});e.history.go(C*-1),Ta(B,{state:"blocked",location:k,proceed(){Ta(B,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),H.then(()=>e.history.go(C))},reset(){let W=new Map(g.blockers);W.set(B,Br),Te({blockers:W})}});return}return ft(y,k)}),n){Rg(t,ae);let p=()=>Mg(t,ae);t.addEventListener("pagehide",p),fe=()=>t.removeEventListener("pagehide",p)}return g.initialized||ft(Ee.Pop,g.location,{initialHydration:!0}),R}function Lt(){m&&m(),fe&&fe(),b.clear(),O&&O.abort(),g.fetchers.forEach((p,y)=>Ca(y)),g.blockers.forEach((p,y)=>As(y))}function bn(p){return b.add(p),()=>b.delete(p)}function Te(p,y){y===void 0&&(y={}),g=pe({},g,p);let k=[],C=[];d.v7_fetcherPersist&&g.fetchers.forEach((B,H)=>{B.state==="idle"&&(X.has(H)?C.push(H):k.push(H))}),X.forEach(B=>{!g.fetchers.has(B)&&!I.has(B)&&C.push(B)}),[...b].forEach(B=>B(g,{deletedFetchers:C,viewTransitionOpts:y.viewTransitionOpts,flushSync:y.flushSync===!0})),d.v7_fetcherPersist?(k.forEach(B=>g.fetchers.delete(B)),C.forEach(B=>Ca(B))):C.forEach(B=>X.delete(B))}function _t(p,y,k){var C,B;let{flushSync:H}=k===void 0?{}:k,W=g.actionData!=null&&g.navigation.formMethod!=null&&vt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((C=p.state)==null?void 0:C._isRedirect)!==!0,A;y.actionData?Object.keys(y.actionData).length>0?A=y.actionData:A=null:W?A=g.actionData:A=null;let z=y.loaderData?cc(g.loaderData,y.loaderData,y.matches||[],y.errors):g.loaderData,D=g.blockers;D.size>0&&(D=new Map(D),D.forEach((K,Oe)=>D.set(Oe,Br)));let F=V===!0||g.navigation.formMethod!=null&&vt(g.navigation.formMethod)&&((B=p.state)==null?void 0:B._isRedirect)!==!0;i&&(o=i,i=void 0),Le||S===Ee.Pop||(S===Ee.Push?e.history.push(p,p.state):S===Ee.Replace&&e.history.replace(p,p.state));let $;if(S===Ee.Pop){let K=ae.get(g.location.pathname);K&&K.has(p.pathname)?$={currentLocation:g.location,nextLocation:p}:ae.has(p.pathname)&&($={currentLocation:p,nextLocation:g.location})}else if(re){let K=ae.get(g.location.pathname);K?K.add(p.pathname):(K=new Set([p.pathname]),ae.set(g.location.pathname,K)),$={currentLocation:g.location,nextLocation:p}}Te(pe({},y,{actionData:A,loaderData:z,historyAction:S,location:p,initialized:!0,navigation:Io,revalidation:"idle",restoreScrollPosition:js(p,y.matches||g.matches),preventScrollReset:F,blockers:D}),{viewTransitionOpts:$,flushSync:H===!0}),S=Ee.Pop,V=!1,re=!1,Le=!1,Be=!1,wt=[]}async function Gt(p,y){if(typeof p=="number"){e.history.go(p);return}let k=Ti(g.location,g.matches,s,d.v7_prependBasename,p,d.v7_relativeSplatPath,y==null?void 0:y.fromRouteId,y==null?void 0:y.relative),{path:C,submission:B,error:H}=nc(d.v7_normalizeFormMethod,!1,k,y),W=g.location,A=fa(g.location,C,y&&y.state);A=pe({},A,e.history.encodeLocation(A));let z=y&&y.replace!=null?y.replace:void 0,D=Ee.Push;z===!0?D=Ee.Replace:z===!1||B!=null&&vt(B.formMethod)&&B.formAction===g.location.pathname+g.location.search&&(D=Ee.Replace);let F=y&&"preventScrollReset"in y?y.preventScrollReset===!0:void 0,$=(y&&y.flushSync)===!0,K=zs({currentLocation:W,nextLocation:A,historyAction:D});if(K){Ta(K,{state:"blocked",location:A,proceed(){Ta(K,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),Gt(p,y)},reset(){let Oe=new Map(g.blockers);Oe.set(K,Br),Te({blockers:Oe})}});return}return await ft(D,A,{submission:B,pendingError:H,preventScrollReset:F,replace:y&&y.replace,enableViewTransition:y&&y.viewTransition,flushSync:$})}function Sa(){if(Jl(),Te({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){ft(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}ft(S||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:re===!0})}}async function ft(p,y,k){O&&O.abort(),O=null,S=p,Le=(k&&k.startUninterruptedRevalidation)===!0,op(g.location,g.matches),V=(k&&k.preventScrollReset)===!0,re=(k&&k.enableViewTransition)===!0;let C=i||o,B=k&&k.overrideNavigation,H=k!=null&&k.initialHydration&&g.matches&&g.matches.length>0&&!v?g.matches:Sn(C,y,s),W=(k&&k.flushSync)===!0;if(H&&g.initialized&&!Be&&Tg(g.location,y)&&!(k&&k.submission&&vt(k.submission.formMethod))){_t(y,{matches:H},{flushSync:W});return}let A=xa(H,C,y.pathname);if(A.active&&A.matches&&(H=A.matches),!H){let{error:ie,notFoundMatches:ne,route:ye}=eo(y.pathname);_t(y,{matches:ne,loaderData:{},errors:{[ye.id]:ie}},{flushSync:W});return}O=new AbortController;let z=Gn(e.history,y,O.signal,k&&k.submission),D;if(k&&k.pendingError)D=[Cn(H).route.id,{type:le.error,error:k.pendingError}];else if(k&&k.submission&&vt(k.submission.formMethod)){let ie=await $t(z,y,k.submission,H,A.active,{replace:k.replace,flushSync:W});if(ie.shortCircuited)return;if(ie.pendingActionResult){let[ne,ye]=ie.pendingActionResult;if(Je(ye)&&pa(ye.error)&&ye.error.status===404){O=null,_t(y,{matches:ie.matches,loaderData:{},errors:{[ne]:ye.error}});return}}H=ie.matches||H,D=ie.pendingActionResult,B=Bo(y,k.submission),W=!1,A.active=!1,z=Gn(e.history,z.url,z.signal)}let{shortCircuited:F,matches:$,loaderData:K,errors:Oe}=await Xf(z,y,H,A.active,B,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,W,D);F||(O=null,_t(y,pe({matches:$||H},dc(D),{loaderData:K,errors:Oe})))}async function $t(p,y,k,C,B,H){H===void 0&&(H={}),Jl();let W=Bg(y,k);if(Te({navigation:W},{flushSync:H.flushSync===!0}),B){let D=await Pa(C,y.pathname,p.signal);if(D.type==="aborted")return{shortCircuited:!0};if(D.type==="error"){let F=Cn(D.partialMatches).route.id;return{matches:D.partialMatches,pendingActionResult:[F,{type:le.error,error:D.error}]}}else if(D.matches)C=D.matches;else{let{notFoundMatches:F,error:$,route:K}=eo(y.pathname);return{matches:F,pendingActionResult:[K.id,{type:le.error,error:$}]}}}let A,z=Fr(C,y);if(!z.route.action&&!z.route.lazy)A={type:le.error,error:$e(405,{method:p.method,pathname:y.pathname,routeId:z.route.id})};else if(A=(await kr("action",g,p,[z],C,null))[z.route.id],p.signal.aborted)return{shortCircuited:!0};if(Nn(A)){let D;return H&&H.replace!=null?D=H.replace:D=ic(A.response.headers.get("Location"),new URL(p.url),s)===g.location.pathname+g.location.search,await kn(p,A,!0,{submission:k,replace:D}),{shortCircuited:!0}}if(rn(A))throw $e(400,{type:"defer-action"});if(Je(A)){let D=Cn(C,z.route.id);return(H&&H.replace)!==!0&&(S=Ee.Push),{matches:C,pendingActionResult:[D.route.id,A]}}return{matches:C,pendingActionResult:[z.route.id,A]}}async function Xf(p,y,k,C,B,H,W,A,z,D,F){let $=B||Bo(y,H),K=H||W||mc($),Oe=!Le&&(!d.v7_partialHydration||!z);if(C){if(Oe){let be=Is(F);Te(pe({navigation:$},be!==void 0?{actionData:be}:{}),{flushSync:D})}let J=await Pa(k,y.pathname,p.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let be=Cn(J.partialMatches).route.id;return{matches:J.partialMatches,loaderData:{},errors:{[be]:J.error}}}else if(J.matches)k=J.matches;else{let{error:be,notFoundMatches:Un,route:Lr}=eo(y.pathname);return{matches:Un,loaderData:{},errors:{[Lr.id]:be}}}}let ie=i||o,[ne,ye]=ac(e.history,g,k,K,y,d.v7_partialHydration&&z===!0,d.v7_skipActionErrorRevalidation,Be,wt,dt,X,Ne,ee,ie,s,F);if(to(J=>!(k&&k.some(be=>be.route.id===J))||ne&&ne.some(be=>be.route.id===J)),j=++U,ne.length===0&&ye.length===0){let J=Ms();return _t(y,pe({matches:k,loaderData:{},errors:F&&Je(F[1])?{[F[0]]:F[1].error}:null},dc(F),J?{fetchers:new Map(g.fetchers)}:{}),{flushSync:D}),{shortCircuited:!0}}if(Oe){let J={};if(!C){J.navigation=$;let be=Is(F);be!==void 0&&(J.actionData=be)}ye.length>0&&(J.fetchers=Jf(ye)),Te(J,{flushSync:D})}ye.forEach(J=>{Qt(J.key),J.controller&&I.set(J.key,J.controller)});let Hn=()=>ye.forEach(J=>Qt(J.key));O&&O.signal.addEventListener("abort",Hn);let{loaderResults:Er,fetcherResults:Bt}=await Bs(g,k,ne,ye,p);if(p.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener("abort",Hn),ye.forEach(J=>I.delete(J.key));let St=Qa(Er);if(St)return await kn(p,St.result,!0,{replace:A}),{shortCircuited:!0};if(St=Qa(Bt),St)return ee.add(St.key),await kn(p,St.result,!0,{replace:A}),{shortCircuited:!0};let{loaderData:no,errors:wr}=uc(g,k,Er,F,ye,Bt,te);te.forEach((J,be)=>{J.subscribe(Un=>{(Un||J.done)&&te.delete(be)})}),d.v7_partialHydration&&z&&g.errors&&(wr=pe({},g.errors,wr));let En=Ms(),Na=Ds(j),_a=En||Na||ye.length>0;return pe({matches:k,loaderData:no,errors:wr},_a?{fetchers:new Map(g.fetchers)}:{})}function Is(p){if(p&&!Je(p[1]))return{[p[0]]:p[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function Jf(p){return p.forEach(y=>{let k=g.fetchers.get(y.key),C=Or(void 0,k?k.data:void 0);g.fetchers.set(y.key,C)}),new Map(g.fetchers)}function ep(p,y,k,C){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Qt(p);let B=(C&&C.flushSync)===!0,H=i||o,W=Ti(g.location,g.matches,s,d.v7_prependBasename,k,d.v7_relativeSplatPath,y,C==null?void 0:C.relative),A=Sn(H,W,s),z=xa(A,H,W);if(z.active&&z.matches&&(A=z.matches),!A){It(p,y,$e(404,{pathname:W}),{flushSync:B});return}let{path:D,submission:F,error:$}=nc(d.v7_normalizeFormMethod,!0,W,C);if($){It(p,y,$,{flushSync:B});return}let K=Fr(A,D),Oe=(C&&C.preventScrollReset)===!0;if(F&&vt(F.formMethod)){tp(p,y,D,K,A,z.active,B,Oe,F);return}Ne.set(p,{routeId:y,path:D}),np(p,y,D,K,A,z.active,B,Oe,F)}async function tp(p,y,k,C,B,H,W,A,z){Jl(),Ne.delete(p);function D(Se){if(!Se.route.action&&!Se.route.lazy){let Vn=$e(405,{method:z.formMethod,pathname:k,routeId:y});return It(p,y,Vn,{flushSync:W}),!0}return!1}if(!H&&D(C))return;let F=g.fetchers.get(p);qt(p,Og(z,F),{flushSync:W});let $=new AbortController,K=Gn(e.history,k,$.signal,z);if(H){let Se=await Pa(B,new URL(K.url).pathname,K.signal,p);if(Se.type==="aborted")return;if(Se.type==="error"){It(p,y,Se.error,{flushSync:W});return}else if(Se.matches){if(B=Se.matches,C=Fr(B,k),D(C))return}else{It(p,y,$e(404,{pathname:k}),{flushSync:W});return}}I.set(p,$);let Oe=U,ne=(await kr("action",g,K,[C],B,p))[C.route.id];if(K.signal.aborted){I.get(p)===$&&I.delete(p);return}if(d.v7_fetcherPersist&&X.has(p)){if(Nn(ne)||Je(ne)){qt(p,Yt(void 0));return}}else{if(Nn(ne))if(I.delete(p),j>Oe){qt(p,Yt(void 0));return}else return ee.add(p),qt(p,Or(z)),kn(K,ne,!1,{fetcherSubmission:z,preventScrollReset:A});if(Je(ne)){It(p,y,ne.error);return}}if(rn(ne))throw $e(400,{type:"defer-action"});let ye=g.navigation.location||g.location,Hn=Gn(e.history,ye,$.signal),Er=i||o,Bt=g.navigation.state!=="idle"?Sn(Er,g.navigation.location,s):g.matches;q(Bt,"Didn't find any matches after fetcher action");let St=++U;Y.set(p,St);let no=Or(z,ne.data);g.fetchers.set(p,no);let[wr,En]=ac(e.history,g,Bt,z,ye,!1,d.v7_skipActionErrorRevalidation,Be,wt,dt,X,Ne,ee,Er,s,[C.route.id,ne]);En.filter(Se=>Se.key!==p).forEach(Se=>{let Vn=Se.key,Hs=g.fetchers.get(Vn),up=Or(void 0,Hs?Hs.data:void 0);g.fetchers.set(Vn,up),Qt(Vn),Se.controller&&I.set(Vn,Se.controller)}),Te({fetchers:new Map(g.fetchers)});let Na=()=>En.forEach(Se=>Qt(Se.key));$.signal.addEventListener("abort",Na);let{loaderResults:_a,fetcherResults:J}=await Bs(g,Bt,wr,En,Hn);if($.signal.aborted)return;$.signal.removeEventListener("abort",Na),Y.delete(p),I.delete(p),En.forEach(Se=>I.delete(Se.key));let be=Qa(_a);if(be)return kn(Hn,be.result,!1,{preventScrollReset:A});if(be=Qa(J),be)return ee.add(be.key),kn(Hn,be.result,!1,{preventScrollReset:A});let{loaderData:Un,errors:Lr}=uc(g,Bt,_a,void 0,En,J,te);if(g.fetchers.has(p)){let Se=Yt(ne.data);g.fetchers.set(p,Se)}Ds(St),g.navigation.state==="loading"&&St>j?(q(S,"Expected pending action"),O&&O.abort(),_t(g.navigation.location,{matches:Bt,loaderData:Un,errors:Lr,fetchers:new Map(g.fetchers)})):(Te({errors:Lr,loaderData:cc(g.loaderData,Un,Bt,Lr),fetchers:new Map(g.fetchers)}),Be=!1)}async function np(p,y,k,C,B,H,W,A,z){let D=g.fetchers.get(p);qt(p,Or(z,D?D.data:void 0),{flushSync:W});let F=new AbortController,$=Gn(e.history,k,F.signal);if(H){let ne=await Pa(B,new URL($.url).pathname,$.signal,p);if(ne.type==="aborted")return;if(ne.type==="error"){It(p,y,ne.error,{flushSync:W});return}else if(ne.matches)B=ne.matches,C=Fr(B,k);else{It(p,y,$e(404,{pathname:k}),{flushSync:W});return}}I.set(p,F);let K=U,ie=(await kr("loader",g,$,[C],B,p))[C.route.id];if(rn(ie)&&(ie=await Ps(ie,$.signal,!0)||ie),I.get(p)===F&&I.delete(p),!$.signal.aborted){if(X.has(p)){qt(p,Yt(void 0));return}if(Nn(ie))if(j>K){qt(p,Yt(void 0));return}else{ee.add(p),await kn($,ie,!1,{preventScrollReset:A});return}if(Je(ie)){It(p,y,ie.error);return}q(!rn(ie),"Unhandled fetcher deferred data"),qt(p,Yt(ie.data))}}async function kn(p,y,k,C){let{submission:B,fetcherSubmission:H,preventScrollReset:W,replace:A}=C===void 0?{}:C;y.response.headers.has("X-Remix-Revalidate")&&(Be=!0);let z=y.response.headers.get("Location");q(z,"Expected a Location header on the redirect Response"),z=ic(z,new URL(p.url),s);let D=fa(g.location,z,{_isRedirect:!0});if(n){let ne=!1;if(y.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(xs.test(z)){const ye=e.history.createURL(z);ne=ye.origin!==t.location.origin||Ea(ye.pathname,s)==null}if(ne){A?t.location.replace(z):t.location.assign(z);return}}O=null;let F=A===!0||y.response.headers.has("X-Remix-Replace")?Ee.Replace:Ee.Push,{formMethod:$,formAction:K,formEncType:Oe}=g.navigation;!B&&!H&&$&&K&&Oe&&(B=mc(g.navigation));let ie=B||H;if(pg.has(y.response.status)&&ie&&vt(ie.formMethod))await ft(F,D,{submission:pe({},ie,{formAction:z}),preventScrollReset:W||V,enableViewTransition:k?re:void 0});else{let ne=Bo(D,B);await ft(F,D,{overrideNavigation:ne,fetcherSubmission:H,preventScrollReset:W||V,enableViewTransition:k?re:void 0})}}async function kr(p,y,k,C,B,H){let W,A={};try{W=await Eg(u,p,y,k,C,B,H,l,a)}catch(z){return C.forEach(D=>{A[D.route.id]={type:le.error,error:z}}),A}for(let[z,D]of Object.entries(W))if(xg(D)){let F=D.result;A[z]={type:le.redirect,response:Sg(F,k,z,B,s,d.v7_relativeSplatPath)}}else A[z]=await Lg(D);return A}async function Bs(p,y,k,C,B){let H=p.matches,W=kr("loader",p,B,k,y,null),A=Promise.all(C.map(async F=>{if(F.matches&&F.match&&F.controller){let K=(await kr("loader",p,Gn(e.history,F.path,F.controller.signal),[F.match],F.matches,F.key))[F.match.route.id];return{[F.key]:K}}else return Promise.resolve({[F.key]:{type:le.error,error:$e(404,{pathname:F.path})}})})),z=await W,D=(await A).reduce((F,$)=>Object.assign(F,$),{});return await Promise.all([_g(y,z,B.signal,H,p.loaderData),Ig(y,D,C)]),{loaderResults:z,fetcherResults:D}}function Jl(){Be=!0,wt.push(...to()),Ne.forEach((p,y)=>{I.has(y)&&dt.add(y),Qt(y)})}function qt(p,y,k){k===void 0&&(k={}),g.fetchers.set(p,y),Te({fetchers:new Map(g.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function It(p,y,k,C){C===void 0&&(C={});let B=Cn(g.matches,y);Ca(p),Te({errors:{[B.route.id]:k},fetchers:new Map(g.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function Os(p){return G.set(p,(G.get(p)||0)+1),X.has(p)&&X.delete(p),g.fetchers.get(p)||mg}function Ca(p){let y=g.fetchers.get(p);I.has(p)&&!(y&&y.state==="loading"&&Y.has(p))&&Qt(p),Ne.delete(p),Y.delete(p),ee.delete(p),d.v7_fetcherPersist&&X.delete(p),dt.delete(p),g.fetchers.delete(p)}function rp(p){let y=(G.get(p)||0)-1;y<=0?(G.delete(p),X.add(p),d.v7_fetcherPersist||Ca(p)):G.set(p,y),Te({fetchers:new Map(g.fetchers)})}function Qt(p){let y=I.get(p);y&&(y.abort(),I.delete(p))}function Rs(p){for(let y of p){let k=Os(y),C=Yt(k.data);g.fetchers.set(y,C)}}function Ms(){let p=[],y=!1;for(let k of ee){let C=g.fetchers.get(k);q(C,"Expected fetcher: "+k),C.state==="loading"&&(ee.delete(k),p.push(k),y=!0)}return Rs(p),y}function Ds(p){let y=[];for(let[k,C]of Y)if(C<p){let B=g.fetchers.get(k);q(B,"Expected fetcher: "+k),B.state==="loading"&&(Qt(k),Y.delete(k),y.push(k))}return Rs(y),y.length>0}function ap(p,y){let k=g.blockers.get(p)||Br;return ue.get(p)!==y&&ue.set(p,y),k}function As(p){g.blockers.delete(p),ue.delete(p)}function Ta(p,y){let k=g.blockers.get(p)||Br;q(k.state==="unblocked"&&y.state==="blocked"||k.state==="blocked"&&y.state==="blocked"||k.state==="blocked"&&y.state==="proceeding"||k.state==="blocked"&&y.state==="unblocked"||k.state==="proceeding"&&y.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+y.state);let C=new Map(g.blockers);C.set(p,y),Te({blockers:C})}function zs(p){let{currentLocation:y,nextLocation:k,historyAction:C}=p;if(ue.size===0)return;ue.size>1&&An(!1,"A router only supports one blocker at a time");let B=Array.from(ue.entries()),[H,W]=B[B.length-1],A=g.blockers.get(H);if(!(A&&A.state==="proceeding")&&W({currentLocation:y,nextLocation:k,historyAction:C}))return H}function eo(p){let y=$e(404,{pathname:p}),k=i||o,{matches:C,route:B}=fc(k);return to(),{notFoundMatches:C,route:B,error:y}}function to(p){let y=[];return te.forEach((k,C)=>{(!p||p(C))&&(k.cancel(),y.push(C),te.delete(C))}),y}function lp(p,y,k){if(E=p,_=y,w=k||null,!h&&g.navigation===Io){h=!0;let C=js(g.location,g.matches);C!=null&&Te({restoreScrollPosition:C})}return()=>{E=null,_=null,w=null}}function Fs(p,y){return w&&w(p,y.map(C=>Wh(C,g.loaderData)))||p.key}function op(p,y){if(E&&_){let k=Fs(p,y);E[k]=_()}}function js(p,y){if(E){let k=Fs(p,y),C=E[k];if(typeof C=="number")return C}return null}function xa(p,y,k){if(f)if(p){if(Object.keys(p[0].params).length>0)return{active:!0,matches:il(y,k,s,!0)}}else return{active:!0,matches:il(y,k,s,!0)||[]};return{active:!1,matches:null}}async function Pa(p,y,k,C){if(!f)return{type:"success",matches:p};let B=p;for(;;){let H=i==null,W=i||o,A=l;try{await f({signal:k,path:y,matches:B,fetcherKey:C,patch:(F,$)=>{k.aborted||oc(F,$,W,A,a)}})}catch(F){return{type:"error",error:F,partialMatches:B}}finally{H&&!k.aborted&&(o=[...o])}if(k.aborted)return{type:"aborted"};let z=Sn(W,y,s);if(z)return{type:"success",matches:z};let D=il(W,y,s,!0);if(!D||B.length===D.length&&B.every((F,$)=>F.route.id===D[$].route.id))return{type:"success",matches:null};B=D}}function ip(p){l={},i=Bl(p,a,void 0,l)}function sp(p,y){let k=i==null;oc(p,y,i||o,l,a),k&&(o=[...o],Te({}))}return R={get basename(){return s},get future(){return d},get state(){return g},get routes(){return o},get window(){return t},initialize:Wt,subscribe:bn,enableScrollRestoration:lp,navigate:Gt,fetch:ep,revalidate:Sa,createHref:p=>e.history.createHref(p),encodeLocation:p=>e.history.encodeLocation(p),getFetcher:Os,deleteFetcher:rp,dispose:Lt,getBlocker:ap,deleteBlocker:As,patchRoutes:sp,_internalFetchControllers:I,_internalActiveDeferreds:te,_internalSetRoutes:ip},R}function vg(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ti(e,t,n,r,a,l,o,i){let s,u;if(o){s=[];for(let d of t)if(s.push(d),d.route.id===o){u=d;break}}else s=t,u=t[t.length-1];let f=Ts(a||".",Cs(s,l),Ea(e.pathname,n)||e.pathname,i==="path");if(a==null&&(f.search=e.search,f.hash=e.hash),(a==null||a===""||a===".")&&u){let d=Ns(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let m=new URLSearchParams(f.search),b=m.getAll("index");m.delete("index"),b.filter(w=>w).forEach(w=>m.append("index",w));let E=m.toString();f.search=E?"?"+E:""}}return r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:pn([n,f.pathname])),ka(f)}function nc(e,t,n,r){if(!r||!vg(r))return{path:n};if(r.formMethod&&!Ng(r.formMethod))return{path:n,error:$e(405,{method:r.formMethod})};let a=()=>({path:n,error:$e(400,{type:"invalid-body"})}),l=r.formMethod||"get",o=e?l.toUpperCase():l.toLowerCase(),i=Uf(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!vt(o))return a();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((b,E)=>{let[w,_]=E;return""+b+w+"="+_+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!vt(o))return a();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}q(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Pi(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Pi(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=sc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=sc(s)}catch{return a()}let f={formMethod:o,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(vt(f.formMethod))return{path:n,submission:f};let d=Vt(n);return t&&d.search&&Ns(d.search)&&s.append("index",""),d.search="?"+s,{path:ka(d),submission:f}}function rc(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(a=>a.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function ac(e,t,n,r,a,l,o,i,s,u,f,d,m,b,E,w){let _=w?Je(w[1])?w[1].error:w[1].data:void 0,h=e.createURL(t.location),c=e.createURL(a),v=n;l&&t.errors?v=rc(n,Object.keys(t.errors)[0],!0):w&&Je(w[1])&&(v=rc(n,w[0]));let L=w?w[1].statusCode:void 0,T=o&&L&&L>=400,R=v.filter((S,V)=>{let{route:O}=S;if(O.lazy)return!0;if(O.loader==null)return!1;if(l)return xi(O,t.loaderData,t.errors);if(yg(t.loaderData,t.matches[V],S)||s.some(fe=>fe===S.route.id))return!0;let re=t.matches[V],ae=S;return lc(S,pe({currentUrl:h,currentParams:re.params,nextUrl:c,nextParams:ae.params},r,{actionResult:_,actionStatus:L,defaultShouldRevalidate:T?!1:i||h.pathname+h.search===c.pathname+c.search||h.search!==c.search||jf(re,ae)}))}),g=[];return d.forEach((S,V)=>{if(l||!n.some(Le=>Le.route.id===S.routeId)||f.has(V))return;let O=Sn(b,S.path,E);if(!O){g.push({key:V,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let re=t.fetchers.get(V),ae=Fr(O,S.path),fe=!1;m.has(V)?fe=!1:u.has(V)?(u.delete(V),fe=!0):re&&re.state!=="idle"&&re.data===void 0?fe=i:fe=lc(ae,pe({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:_,actionStatus:L,defaultShouldRevalidate:T?!1:i})),fe&&g.push({key:V,routeId:S.routeId,path:S.path,matches:O,match:ae,controller:new AbortController})}),[R,g]}function xi(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,a=n!=null&&n[e.id]!==void 0;return!r&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!a}function yg(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function jf(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function lc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function oc(e,t,n,r,a){var l;let o;if(e){let u=r[e];q(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),o=u.children}else o=n;let i=t.filter(u=>!o.some(f=>Hf(u,f))),s=Bl(i,a,[e||"_","patch",String(((l=o)==null?void 0:l.length)||"0")],r);o.push(...s)}function Hf(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var a;return(a=t.children)==null?void 0:a.some(l=>Hf(n,l))}):!1}async function bg(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];q(a,"No route found in manifest");let l={};for(let o in r){let s=a[o]!==void 0&&o!=="hasErrorBoundary";An(!s,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!s&&!Uh.has(o)&&(l[o]=r[o])}Object.assign(a,l),Object.assign(a,pe({},t(a),{lazy:void 0}))}async function kg(e){let{matches:t}=e,n=t.filter(a=>a.shouldLoad);return(await Promise.all(n.map(a=>a.resolve()))).reduce((a,l,o)=>Object.assign(a,{[n[o].route.id]:l}),{})}async function Eg(e,t,n,r,a,l,o,i,s,u){let f=l.map(b=>b.route.lazy?bg(b.route,s,i):void 0),d=l.map((b,E)=>{let w=f[E],_=a.some(c=>c.route.id===b.route.id);return pe({},b,{shouldLoad:_,resolve:async c=>(c&&r.method==="GET"&&(b.route.lazy||b.route.loader)&&(_=!0),_?wg(t,r,b,w,c,u):Promise.resolve({type:le.data,result:void 0}))})}),m=await e({matches:d,request:r,params:l[0].params,fetcherKey:o,context:u});try{await Promise.all(f)}catch{}return m}async function wg(e,t,n,r,a,l){let o,i,s=u=>{let f,d=new Promise((E,w)=>f=w);i=()=>f(),t.signal.addEventListener("abort",i);let m=E=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:l},...E!==void 0?[E]:[]),b=(async()=>{try{return{type:"data",result:await(a?a(w=>m(w)):m())}}catch(E){return{type:"error",result:E}}})();return Promise.race([b,d])};try{let u=n.route[e];if(r)if(u){let f,[d]=await Promise.all([s(u).catch(m=>{f=m}),r]);if(f!==void 0)throw f;o=d}else if(await r,u=n.route[e],u)o=await s(u);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw $e(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:le.data,result:void 0};else if(u)o=await s(u);else{let f=new URL(t.url),d=f.pathname+f.search;throw $e(404,{pathname:d})}q(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:le.error,result:u}}finally{i&&t.signal.removeEventListener("abort",i)}return o}async function Lg(e){let{result:t,type:n}=e;if(Vf(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:le.error,error:m}}return n===le.error?{type:le.error,error:new Ol(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:le.data,data:d,statusCode:t.status,headers:t.headers}}if(n===le.error){if(pc(t)){var r,a;if(t.data instanceof Error){var l,o;return{type:le.error,error:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:le.error,error:new Ol(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:pa(t)?t.status:void 0,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:le.error,error:t,statusCode:pa(t)?t.status:void 0}}if(Pg(t)){var i,s;return{type:le.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((s=t.init)==null?void 0:s.headers)&&new Headers(t.init.headers)}}if(pc(t)){var u,f;return{type:le.data,data:t.data,statusCode:(u=t.init)==null?void 0:u.status,headers:(f=t.init)!=null&&f.headers?new Headers(t.init.headers):void 0}}return{type:le.data,data:t}}function Sg(e,t,n,r,a,l){let o=e.headers.get("Location");if(q(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!xs.test(o)){let i=r.slice(0,r.findIndex(s=>s.route.id===n)+1);o=Ti(new URL(t.url),i,a,!0,o,l),e.headers.set("Location",o)}return e}function ic(e,t,n){if(xs.test(e)){let r=e,a=r.startsWith("//")?new URL(t.protocol+r):new URL(r),l=Ea(a.pathname,n)!=null;if(a.origin===t.origin&&l)return a.pathname+a.search+a.hash}return e}function Gn(e,t,n,r){let a=e.createURL(Uf(t)).toString(),l={signal:n};if(r&&vt(r.formMethod)){let{formMethod:o,formEncType:i}=r;l.method=o.toUpperCase(),i==="application/json"?(l.headers=new Headers({"Content-Type":i}),l.body=JSON.stringify(r.json)):i==="text/plain"?l.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?l.body=Pi(r.formData):l.body=r.formData}return new Request(a,l)}function Pi(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function sc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Cg(e,t,n,r,a){let l={},o=null,i,s=!1,u={},f=n&&Je(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let m=d.route.id,b=t[m];if(q(!Nn(b),"Cannot handle redirect results in processLoaderData"),Je(b)){let E=b.error;f!==void 0&&(E=f,f=void 0),o=o||{};{let w=Cn(e,m);o[w.route.id]==null&&(o[w.route.id]=E)}l[m]=void 0,s||(s=!0,i=pa(b.error)?b.error.status:500),b.headers&&(u[m]=b.headers)}else rn(b)?(r.set(m,b.deferredData),l[m]=b.deferredData.data,b.statusCode!=null&&b.statusCode!==200&&!s&&(i=b.statusCode),b.headers&&(u[m]=b.headers)):(l[m]=b.data,b.statusCode&&b.statusCode!==200&&!s&&(i=b.statusCode),b.headers&&(u[m]=b.headers))}),f!==void 0&&n&&(o={[n[0]]:f},l[n[0]]=void 0),{loaderData:l,errors:o,statusCode:i||200,loaderHeaders:u}}function uc(e,t,n,r,a,l,o){let{loaderData:i,errors:s}=Cg(t,n,r,o);return a.forEach(u=>{let{key:f,match:d,controller:m}=u,b=l[f];if(q(b,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(Je(b)){let E=Cn(e.matches,d==null?void 0:d.route.id);s&&s[E.route.id]||(s=pe({},s,{[E.route.id]:b.error})),e.fetchers.delete(f)}else if(Nn(b))q(!1,"Unhandled fetcher revalidation redirect");else if(rn(b))q(!1,"Unhandled fetcher deferred data");else{let E=Yt(b.data);e.fetchers.set(f,E)}}),{loaderData:i,errors:s}}function cc(e,t,n,r){let a=pe({},t);for(let l of n){let o=l.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(a[o]=t[o]):e[o]!==void 0&&l.route.loader&&(a[o]=e[o]),r&&r.hasOwnProperty(o))break}return a}function dc(e){return e?Je(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Cn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function fc(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function $e(e,t){let{pathname:n,routeId:r,method:a,type:l,message:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&n&&r?s="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"?s="defer() is not supported in actions":l==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new Ol(e||500,i,new Error(s),!0)}function Qa(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,a]=t[n];if(Nn(a))return{key:r,result:a}}}function Uf(e){let t=typeof e=="string"?Vt(e):e;return ka(pe({},t,{hash:""}))}function Tg(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function xg(e){return Vf(e.result)&&fg.has(e.result.status)}function rn(e){return e.type===le.deferred}function Je(e){return e.type===le.error}function Nn(e){return(e&&e.type)===le.redirect}function pc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Pg(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Vf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ng(e){return dg.has(e.toLowerCase())}function vt(e){return ug.has(e.toLowerCase())}async function _g(e,t,n,r,a){let l=Object.entries(t);for(let o=0;o<l.length;o++){let[i,s]=l[o],u=e.find(m=>(m==null?void 0:m.route.id)===i);if(!u)continue;let f=r.find(m=>m.route.id===u.route.id),d=f!=null&&!jf(f,u)&&(a&&a[u.route.id])!==void 0;rn(s)&&d&&await Ps(s,n,!1).then(m=>{m&&(t[i]=m)})}}async function Ig(e,t,n){for(let r=0;r<n.length;r++){let{key:a,routeId:l,controller:o}=n[r],i=t[a];e.find(u=>(u==null?void 0:u.route.id)===l)&&rn(i)&&(q(o,"Expected an AbortController for revalidating fetcher deferred result"),await Ps(i,o.signal,!0).then(u=>{u&&(t[a]=u)}))}}async function Ps(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:le.data,data:e.deferredData.unwrappedData}}catch(a){return{type:le.error,error:a}}return{type:le.data,data:e.deferredData.data}}}function Ns(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Fr(e,t){let n=typeof t=="string"?Vt(t).search:t.search;if(e[e.length-1].route.index&&Ns(n||""))return e[e.length-1];let r=Af(e);return r[r.length-1]}function mc(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:l,json:o}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:l,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Bo(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Bg(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Or(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Og(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Yt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Rg(e,t){try{let n=e.sessionStorage.getItem(Ff);if(n){let r=JSON.parse(n);for(let[a,l]of Object.entries(r||{}))l&&Array.isArray(l)&&t.set(a,new Set(l||[]))}}catch{}}function Mg(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(Ff,JSON.stringify(n))}catch(r){An(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ma.apply(this,arguments)}const Zl=x.createContext(null),Wf=x.createContext(null),wa=x.createContext(null),Xl=x.createContext(null),jn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Gf=x.createContext(null);function La(){return x.useContext(Xl)!=null}function _s(){return La()||q(!1),x.useContext(Xl).location}function $f(e){x.useContext(wa).static||x.useLayoutEffect(e)}function qf(){let{isDataRoute:e}=x.useContext(jn);return e?qg():Dg()}function Dg(){La()||q(!1);let e=x.useContext(Zl),{basename:t,future:n,navigator:r}=x.useContext(wa),{matches:a}=x.useContext(jn),{pathname:l}=_s(),o=JSON.stringify(Cs(a,n.v7_relativeSplatPath)),i=x.useRef(!1);return $f(()=>{i.current=!0}),x.useCallback(function(u,f){if(f===void 0&&(f={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=Ts(u,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,l,e])}function Ag(e,t){return Qf(e,t)}function Qf(e,t,n,r){La()||q(!1);let{navigator:a}=x.useContext(wa),{matches:l}=x.useContext(jn),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=_s(),f;if(t){var d;let _=typeof t=="string"?Vt(t):t;s==="/"||(d=_.pathname)!=null&&d.startsWith(s)||q(!1),f=_}else f=u;let m=f.pathname||"/",b=m;if(s!=="/"){let _=s.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=Sn(e,{pathname:b}),w=Ug(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:pn([s,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?s:pn([s,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,n,r);return t&&w?x.createElement(Xl.Provider,{value:{location:ma({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ee.Pop}},w):w}function zg(){let e=$g(),t=pa(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:a},n):null,null)}const Fg=x.createElement(zg,null);class jg extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(jn.Provider,{value:this.props.routeContext},x.createElement(Gf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hg(e){let{routeContext:t,match:n,children:r}=e,a=x.useContext(Zl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(jn.Provider,{value:t},r)}function Ug(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let f=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);f>=0||q(!1),o=o.slice(0,Math.min(o.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:b}=n,E=d.route.loader&&m[d.route.id]===void 0&&(!b||b[d.route.id]===void 0);if(d.route.lazy||E){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let b,E=!1,w=null,_=null;n&&(b=i&&d.route.id?i[d.route.id]:void 0,w=d.route.errorElement||Fg,s&&(u<0&&m===0?(Qg("route-fallback"),E=!0,_=null):u===m&&(E=!0,_=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),c=()=>{let v;return b?v=w:E?v=_:d.route.Component?v=x.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,x.createElement(Hg,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?x.createElement(jg,{location:n.location,revalidation:n.revalidation,component:w,error:b,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Kf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kf||{}),Yf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yf||{});function Vg(e){let t=x.useContext(Zl);return t||q(!1),t}function Wg(e){let t=x.useContext(Wf);return t||q(!1),t}function Gg(e){let t=x.useContext(jn);return t||q(!1),t}function Zf(e){let t=Gg(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function $g(){var e;let t=x.useContext(Gf),n=Wg(),r=Zf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qg(){let{router:e}=Vg(Kf.UseNavigateStable),t=Zf(Yf.UseNavigateStable),n=x.useRef(!1);return $f(()=>{n.current=!0}),x.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ma({fromRouteId:t},l)))},[e,t])}const hc={};function Qg(e,t,n){hc[e]||(hc[e]=!0)}function Kg(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Yg(e){let{to:t,replace:n,state:r,relative:a}=e;La()||q(!1);let{future:l,static:o}=x.useContext(wa),{matches:i}=x.useContext(jn),{pathname:s}=_s(),u=qf(),f=Ts(t,Cs(i,l.v7_relativeSplatPath),s,a==="path"),d=JSON.stringify(f);return x.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function mt(e){q(!1)}function Zg(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Ee.Pop,navigator:l,static:o=!1,future:i}=e;La()&&q(!1);let s=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:s,navigator:l,static:o,future:ma({v7_relativeSplatPath:!1},i)}),[s,i,l,o]);typeof r=="string"&&(r=Vt(r));let{pathname:f="/",search:d="",hash:m="",state:b=null,key:E="default"}=r,w=x.useMemo(()=>{let _=Ea(f,s);return _==null?null:{location:{pathname:_,search:d,hash:m,state:b,key:E},navigationType:a}},[s,f,d,m,b,E,a]);return w==null?null:x.createElement(wa.Provider,{value:u},x.createElement(Xl.Provider,{children:n,value:w}))}function Xg(e){let{children:t,location:n}=e;return Ag(Ni(t),n)}new Promise(()=>{});function Ni(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,a)=>{if(!x.isValidElement(r))return;let l=[...t,a];if(r.type===x.Fragment){n.push.apply(n,Ni(r.props.children,l));return}r.type!==mt&&q(!1),!r.props.index||!r.props.children||q(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ni(r.props.children,l)),n.push(o)}),n}function Jg(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:x.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:x.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:x.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rl.apply(this,arguments)}const ev="6";try{window.__reactRouterVersion=ev}catch{}function tv(e,t){return gg({basename:t==null?void 0:t.basename,future:Rl({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Fh({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||nv(),routes:e,mapRouteProperties:Jg,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function nv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Rl({},t,{errors:rv(t.errors)})),t}function rv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Ol(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let l=window[a.__subType];if(typeof l=="function")try{let o=new l(a.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let l=new Error(a.message);l.stack="",n[r]=l}}else n[r]=a;return n}const av=x.createContext({isTransitioning:!1}),lv=x.createContext(new Map),ov="startTransition",gc=Tp[ov],iv="flushSync",vc=zh[iv];function sv(e){gc?gc(e):e()}function Rr(e){vc?vc(e):e()}class uv{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function cv(e){let{fallbackElement:t,router:n,future:r}=e,[a,l]=x.useState(n.state),[o,i]=x.useState(),[s,u]=x.useState({isTransitioning:!1}),[f,d]=x.useState(),[m,b]=x.useState(),[E,w]=x.useState(),_=x.useRef(new Map),{v7_startTransition:h}=r||{},c=x.useCallback(S=>{h?sv(S):S()},[h]),v=x.useCallback((S,V)=>{let{deletedFetchers:O,flushSync:re,viewTransitionOpts:ae}=V;S.fetchers.forEach((Le,Be)=>{Le.data!==void 0&&_.current.set(Be,Le.data)}),O.forEach(Le=>_.current.delete(Le));let fe=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!ae||fe){re?Rr(()=>l(S)):c(()=>l(S));return}if(re){Rr(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation})});let Le=n.window.document.startViewTransition(()=>{Rr(()=>l(S))});Le.finished.finally(()=>{Rr(()=>{d(void 0),b(void 0),i(void 0),u({isTransitioning:!1})})}),Rr(()=>b(Le));return}m?(f&&f.resolve(),m.skipTransition(),w({state:S,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation})):(i(S),u({isTransitioning:!0,flushSync:!1,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation}))},[n.window,m,f,_,c]);x.useLayoutEffect(()=>n.subscribe(v),[n,v]),x.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new uv)},[s]),x.useEffect(()=>{if(f&&o&&n.window){let S=o,V=f.promise,O=n.window.document.startViewTransition(async()=>{c(()=>l(S)),await V});O.finished.finally(()=>{d(void 0),b(void 0),i(void 0),u({isTransitioning:!1})}),b(O)}},[c,o,f,n.window]),x.useEffect(()=>{f&&o&&a.location.key===o.location.key&&f.resolve()},[f,m,a.location,o]),x.useEffect(()=>{!s.isTransitioning&&E&&(i(E.state),u({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),w(void 0))},[s.isTransitioning,E]),x.useEffect(()=>{},[]);let L=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:S=>n.navigate(S),push:(S,V,O)=>n.navigate(S,{state:V,preventScrollReset:O==null?void 0:O.preventScrollReset}),replace:(S,V,O)=>n.navigate(S,{replace:!0,state:V,preventScrollReset:O==null?void 0:O.preventScrollReset})}),[n]),T=n.basename||"/",R=x.useMemo(()=>({router:n,navigator:L,static:!1,basename:T}),[n,L,T]),g=x.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return x.useEffect(()=>Kg(r,n.future),[r,n.future]),x.createElement(x.Fragment,null,x.createElement(Zl.Provider,{value:R},x.createElement(Wf.Provider,{value:a},x.createElement(lv.Provider,{value:_.current},x.createElement(av.Provider,{value:s},x.createElement(Zg,{basename:T,location:a.location,navigationType:a.historyAction,navigator:L,future:g},a.initialized||n.future.v7_partialHydration?x.createElement(dv,{routes:n.routes,future:n.future,state:a}):t))))),null)}const dv=x.memo(fv);function fv(e){let{routes:t,future:n,state:r}=e;return Qf(t,void 0,r,n)}var yc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yc||(yc={}));var bc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bc||(bc={}));function pv(){const e=qf(),[t,n]=x.useState(!1),r=o=>{const i=document.getElementById(o);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},a=()=>{e("/configurator")};x.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const o=document.getElementById("year");o&&(o.textContent=new Date().getFullYear().toString());const i=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],s=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],u=[...i,...s],f={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},d=new Set(["shell","trimpiece","backShellMain","backHandles"]),m=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],b=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],E=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),w=[{id:"shell",mask:"/assets/masks/leftShell.png"},{id:"trimpiece",mask:"/assets/masks/centerBody.png"},{id:"faceButtons",mask:"/assets/masks/faceButtons.png"},{id:"stickL",mask:"/assets/masks/stickL.png"},{id:"stickR",mask:"/assets/masks/stickR.png"},{id:"touchpad",mask:"/assets/masks/touchpad.png"},{id:"share",mask:"/assets/masks/share.png"},{id:"options",mask:"/assets/masks/options.png"},{id:"psButton",mask:"/assets/masks/psButton.png"},{id:"bumpers",mask:"/assets/masks/bumperL.png"}];function _(G){return d.has(G)?m:b}function h(G){return G[Math.floor(Math.random()*G.length)]}function c(G,X){const te={};let ue=0;return u.forEach(Wt=>{const Lt=_(Wt.id),bn=h(Lt);te[Wt.id]=bn,ue+=f[Wt.id]||0}),{id:G,name:(X==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(G+1),colors:te,total:ue}}function v(G,X){const te=G.toFixed(2);return X==="ar"?te+" د.ب":"BHD "+te}const L={ar:{navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
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
        `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly."}};let T=localStorage.getItem("ez_lang")||"ar";function R(){document.documentElement.lang=T,document.documentElement.dir=T==="ar"?"rtl":"ltr"}const g=document.getElementById("themeToggle"),S=document.getElementById("mobileThemeToggle");let V=localStorage.getItem("ez_theme")||"dark";function O(){document.body.classList.toggle("theme-light",V==="light")}function re(){return V==="dark"?T==="ar"?"فاتح":"Light":T==="ar"?"داكن":"Dark"}function ae(){const G=re();g&&(g.textContent=G),S&&(S.textContent=G)}function fe(){V=V==="dark"?"light":"dark",localStorage.setItem("ez_theme",V),O(),ae()}function Le(){const G=L[T];document.querySelectorAll("[data-i18n]").forEach(ue=>{const Ae=ue.getAttribute("data-i18n");G[Ae]&&(ue.textContent=G[Ae])}),document.querySelectorAll("[data-i18n-html]").forEach(ue=>{const Ae=ue.getAttribute("data-i18n-html");G[Ae]&&(ue.innerHTML=G[Ae])});const X=document.getElementById("langToggle");X&&(X.textContent=T==="ar"?"EN":"AR");const te=document.getElementById("mobileLangToggle");te&&(te.textContent=T==="ar"?"EN":"AR"),ae()}let Be=[];function wt(G){const X=L[T],te=document.createElement("article");te.className="build-card";const ue=document.createElement("div");ue.className="build-thumb";const Ae=document.createElement("div");Ae.className="thumb-controller";const Wt=document.createElement("div");Wt.className="thumb-base",Ae.appendChild(Wt),w.forEach(Sa=>{const ft=G.colors[Sa.id];if(!ft)return;const $t=document.createElement("div");$t.className="thumb-layer",$t.style.setProperty("--mask-url",`url('${Sa.mask}')`),$t.style.setProperty("--tint",ft.hex),E.has(ft.hex.toLowerCase())?$t.style.setProperty("--tint-opacity","0.35"):$t.style.setProperty("--tint-opacity","1"),Ae.appendChild($t)}),ue.appendChild(Ae);const Lt=document.createElement("div");Lt.className="build-body";const bn=document.createElement("div");bn.className="build-title",bn.textContent=G.name;const Te=document.createElement("div");Te.className="build-price",Te.innerHTML=v(G.total,T);const _t=document.createElement("div");_t.className="build-color-row";const Gt=document.createElement("button");return Gt.className="build-cta",Gt.type="button",Gt.textContent=X.preview,Gt.addEventListener("click",a),Lt.appendChild(bn),Lt.appendChild(Te),Lt.appendChild(_t),Lt.appendChild(Gt),te.appendChild(ue),te.appendChild(Lt),te}function dt(){const G=document.getElementById("buildGrid");if(G){if(G.innerHTML="",Be.length)Be=Be.map((X,te)=>c(te,T));else for(let X=0;X<20;X++)Be.push(c(X,T));Be.forEach(X=>G.appendChild(wt(X)))}}function I(G){T=G,localStorage.setItem("ez_lang",G),R(),Le(),dt()}const U=document.getElementById("langToggle"),j=document.getElementById("contactForm"),Y=()=>{I(T==="ar"?"en":"ar")},ee=G=>{G.preventDefault(),alert(L[T].formSuccess),j==null||j.reset()},Ne=document.getElementById("mobileLangToggle");return U==null||U.addEventListener("click",Y),Ne==null||Ne.addEventListener("click",Y),g==null||g.addEventListener("click",fe),S==null||S.addEventListener("click",fe),j==null||j.addEventListener("submit",ee),R(),Le(),O(),ae(),dt(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",U==null||U.removeEventListener("click",Y),Ne==null||Ne.removeEventListener("click",Y),g==null||g.removeEventListener("click",fe),S==null||S.removeEventListener("click",fe),j==null||j.removeEventListener("submit",ee)}},[e]),x.useEffect(()=>(document.body.classList.toggle("mobile-nav-open",t),()=>document.body.classList.remove("mobile-nav-open")),[t]);const l=()=>n(!1);return P.jsxs("div",{className:"home-page",children:[P.jsxs("header",{className:"top-nav",children:[P.jsx("div",{className:"nav-left",children:P.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[P.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),P.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),P.jsxs("button",{className:"nav-menu-btn",type:"button","aria-label":t?"Close menu":"Open menu","aria-expanded":t?"true":"false","aria-controls":"mobileNavDrawer",onClick:()=>n(o=>!o),children:[P.jsx("span",{}),P.jsx("span",{}),P.jsx("span",{})]}),P.jsxs("div",{className:"nav-right",children:[P.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>r("premadeSection")}),P.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>r("contactSection")}),P.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:a}),P.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"}),P.jsx("button",{className:"nav-link nav-theme",id:"themeToggle",type:"button",children:"فاتح"})]})]}),P.jsx("div",{className:`mobile-nav-overlay ${t?"open":""}`,onClick:l}),P.jsxs("aside",{className:`mobile-nav-drawer ${t?"open":""}`,id:"mobileNavDrawer","aria-hidden":!t,children:[P.jsx("button",{className:"mobile-nav-link",type:"button","data-i18n":"navPremade",onClick:()=>{r("premadeSection"),l()}}),P.jsx("button",{className:"mobile-nav-link",type:"button","data-i18n":"navContact",onClick:()=>{r("contactSection"),l()}}),P.jsx("button",{className:"mobile-nav-link mobile-nav-cta",type:"button","data-i18n":"navBuildCta",onClick:()=>{a(),l()}}),P.jsx("button",{className:"mobile-nav-link mobile-nav-lang",id:"mobileLangToggle",type:"button",children:"EN"}),P.jsx("button",{className:"mobile-nav-link mobile-nav-theme",id:"mobileThemeToggle",type:"button",children:"فاتح"})]}),P.jsxs("section",{className:"hero",children:[P.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:P.jsx("source",{src:"/assets/back.mp4",type:"video/mp4"})}),P.jsx("div",{className:"hero-overlay"}),P.jsx("div",{className:"hero-inner",children:P.jsxs("div",{children:[P.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),P.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),P.jsxs("div",{className:"hero-actions",children:[P.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:a}),P.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>r("premadeSection")})]})]})})]}),P.jsxs("section",{className:"section",id:"premadeSection",children:[P.jsx("div",{className:"section-header",children:P.jsx("div",{children:P.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),P.jsx("div",{className:"build-grid",id:"buildGrid"})]}),P.jsxs("section",{className:"section",id:"contactSection",children:[P.jsx("div",{className:"section-header",children:P.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),P.jsxs("div",{className:"contact-grid",children:[P.jsxs("div",{className:"contact-card",children:[P.jsx("h3",{"data-i18n":"contactCardTitle"}),P.jsx("p",{"data-i18n":"contactCardText"}),P.jsxs("form",{id:"contactForm",children:[P.jsxs("div",{className:"contact-form-group",children:[P.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),P.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),P.jsxs("div",{className:"contact-form-group",children:[P.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),P.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),P.jsxs("div",{className:"contact-form-group",children:[P.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),P.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),P.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),P.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),P.jsxs("footer",{className:"footer",children:[P.jsx("span",{"data-i18n":"footerText"}),P.jsx("span",{id:"year"})]})]})}const mv=`


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
    const themeToggle = document.getElementById("themeToggle");
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
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

    let currentTheme = localStorage.getItem("ez_theme") || "dark";

    function applyTheme() {
      document.body.classList.toggle("theme-light", currentTheme === "light");
    }

    function themeLabel() {
      const lightLabel = currentLang === "ar" ? "فاتح" : "Light";
      const darkLabel = currentLang === "ar" ? "داكن" : "Dark";
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
  

`;function gv(){return x.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=hv,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),P.jsx("div",{className:"configurator-page",children:P.jsx("div",{dangerouslySetInnerHTML:{__html:mv}})})}const vv=`


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



`,yv=`


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
      const lightLabel = currentLang === "ar" ? "فاتح" : "Light";
      const darkLabel = currentLang === "ar" ? "داكن" : "Dark";
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
  

`;function bv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=yv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),P.jsx("div",{className:"cart-page",children:P.jsx("div",{dangerouslySetInnerHTML:{__html:vv}})})}const kv=`


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



`,Ev=`


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
      const lightLabel = currentLang === "ar" ? "فاتح" : "Light";
      const darkLabel = currentLang === "ar" ? "داكن" : "Dark";
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
  

`;function wv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Ev,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),P.jsx("div",{className:"checkout-page",children:P.jsx("div",{dangerouslySetInnerHTML:{__html:kv}})})}const Lv=`
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
    <div class="card-title">الدفع (تجريبي)</div>
    <div id="paymentDetails" style="margin:10px 0; font-size:0.95rem; opacity:0.9;"></div>
    <button class="place-order-btn" id="payNowBtn" type="button">Pay Now</button>
    <div id="paymentStatus" style="margin-top:12px; font-size:0.9rem; opacity:0.85;"></div>
  </div>
</div>
`,Sv=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
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
    updateThemeLabel();
  }

  let currentTheme = localStorage.getItem("ez_theme") || "dark";

  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
  }

  function themeLabel() {
    const lightLabel = navLang === "ar" ? "فاتح" : "Light";
    const darkLabel = navLang === "ar" ? "داكن" : "Dark";
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
`;function Cv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Sv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Lv}})}const Tv=`
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
    <div class="card-title">تأكيد الدفع</div>
    <div id="confirmStatus" style="font-size:1rem; margin:10px 0;">Payment Confirmed</div>
    <button class="place-order-btn" id="goSummaryBtn" type="button">Go to Order Summary</button>
  </div>
</div>
`,xv=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
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
    updateThemeLabel();
  }

  let currentTheme = localStorage.getItem("ez_theme") || "dark";

  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
  }

  function themeLabel() {
    const lightLabel = navLang === "ar" ? "فاتح" : "Light";
    const darkLabel = navLang === "ar" ? "داكن" : "Dark";
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
  statusEl.textContent = "Payment Confirmed";
`;function Pv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=xv,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Tv}})}const Nv=`
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
    <div class="card-title">ملخص الطلب</div>
    <div id="orderStatus" style="margin-bottom:8px;"></div>
    <div id="orderItems"></div>
    <div id="orderTotals" style="margin-top:10px; font-weight:700;"></div>
  </div>
</div>
`,_v=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
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
    updateThemeLabel();
  }

  let currentTheme = localStorage.getItem("ez_theme") || "dark";

  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
  }

  function themeLabel() {
    const lightLabel = navLang === "ar" ? "فاتح" : "Light";
    const darkLabel = navLang === "ar" ? "داكن" : "Dark";
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
`;function Iv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=_v,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Nv}})}const Bv=`
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
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
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
    const lightLabel = navLang === "ar" ? "فاتح" : "Light";
    const darkLabel = navLang === "ar" ? "داكن" : "Dark";
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
`;function Rv(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Ov,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Bv}})}const Mv=`
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
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
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
    const lightLabel = navLang === "ar" ? "فاتح" : "Light";
    const darkLabel = navLang === "ar" ? "داكن" : "Dark";
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
`;function Av(){return x.useEffect(()=>{const e=document.createElement("script");return e.textContent=Dv,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),P.jsx("div",{dangerouslySetInnerHTML:{__html:Mv}})}function zv(){return P.jsxs(Xg,{children:[P.jsx(mt,{path:"/",element:P.jsx(pv,{})}),P.jsx(mt,{path:"/configurator",element:P.jsx(gv,{})}),P.jsx(mt,{path:"/cart",element:P.jsx(bv,{})}),P.jsx(mt,{path:"/checkout",element:P.jsx(wv,{})}),P.jsx(mt,{path:"/payment",element:P.jsx(Cv,{})}),P.jsx(mt,{path:"/payment/confirmation",element:P.jsx(Pv,{})}),P.jsx(mt,{path:"/order-summary",element:P.jsx(Iv,{})}),P.jsx(mt,{path:"/trackorder",element:P.jsx(Rv,{})}),P.jsx(mt,{path:"/pos",element:P.jsx(Av,{})}),P.jsx(mt,{path:"*",element:P.jsx(Yg,{to:"/",replace:!0})})]})}const Fv=tv([{path:"/*",element:P.jsx(zv,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});Oo.createRoot(document.getElementById("root")).render(P.jsx(cv,{router:Fv}));

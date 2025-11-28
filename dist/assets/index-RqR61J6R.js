function hc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function vc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yc={exports:{}},No={},gc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),cp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),gp=Symbol.for("react.memo"),Ep=Symbol.for("react.lazy"),Fs=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var Ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kc=Object.assign,Sc={};function dr(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||Ec}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wc(){}wc.prototype=dr.prototype;function xi(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||Ec}var Pi=xi.prototype=new wc;Pi.constructor=xi;kc(Pi,dr.prototype);Pi.isPureReactComponent=!0;var zs=Array.isArray,Cc=Object.prototype.hasOwnProperty,_i={current:null},xc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Cc.call(t,r)&&!xc.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:ul,type:e,key:o,ref:a,props:l,_owner:_i.current}}function Sp(e,t){return{$$typeof:ul,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Li(e){return typeof e=="object"&&e!==null&&e.$$typeof===ul}function wp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var js=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wp(""+e.key):t.toString(36)}function Vl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ul:case cp:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Zo(a,0):r,zs(l)?(n="",e!=null&&(n=e.replace(js,"$&/")+"/"),Vl(l,t,n,"",function(u){return u})):l!=null&&(Li(l)&&(l=Sp(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(js,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",zs(e))for(var i=0;i<e.length;i++){o=e[i];var s=r+Zo(o,i);a+=Vl(o,t,n,s,l)}else if(s=kp(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=r+Zo(o,i++),a+=Vl(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Pl(e,t,n){if(e==null)return e;var r=[],l=0;return Vl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Cp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Wl={transition:null},xp={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:_i};function _c(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Pl,forEach:function(e,t,n){Pl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pl(e,function(){t++}),t},toArray:function(e){return Pl(e,function(t){return t})||[]},only:function(e){if(!Li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=dr;Q.Fragment=dp;Q.Profiler=pp;Q.PureComponent=xi;Q.StrictMode=fp;Q.Suspense=yp;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;Q.act=_c;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kc({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=_i.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)Cc.call(t,s)&&!xc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:ul,type:e.type,key:l,ref:o,props:r,_owner:a}};Q.createContext=function(e){return e={$$typeof:hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};Q.createElement=Pc;Q.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:vp,render:e}};Q.isValidElement=Li;Q.lazy=function(e){return{$$typeof:Ep,_payload:{_status:-1,_result:e},_init:Cp}};Q.memo=function(e,t){return{$$typeof:gp,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Wl.transition;Wl.transition={};try{e()}finally{Wl.transition=t}};Q.unstable_act=_c;Q.useCallback=function(e,t){return Ve.current.useCallback(e,t)};Q.useContext=function(e){return Ve.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ve.current.useEffect(e,t)};Q.useId=function(){return Ve.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ve.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};Q.useRef=function(e){return Ve.current.useRef(e)};Q.useState=function(e){return Ve.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ve.current.useTransition()};Q.version="18.3.1";gc.exports=Q;var T=gc.exports;const Pp=vc(T),_p=hc({__proto__:null,default:Pp},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=T,Tp=Symbol.for("react.element"),Rp=Symbol.for("react.fragment"),Np=Object.prototype.hasOwnProperty,Ip=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bp={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Np.call(t,r)&&!Bp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Tp,type:e,key:o,ref:a,props:l,_owner:Ip.current}}No.Fragment=Rp;No.jsx=Lc;No.jsxs=Lc;yc.exports=No;var M=yc.exports,La={},Tc={exports:{}},rt={},Rc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,b){var V=L.length;L.push(b);e:for(;0<V;){var Z=V-1>>>1,te=L[Z];if(0<l(te,b))L[Z]=b,L[V]=te,V=Z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var b=L[0],V=L.pop();if(V!==b){L[0]=V;e:for(var Z=0,te=L.length,Ne=te>>>1;Z<Ne;){var Ae=2*(Z+1)-1,Pe=L[Ae],ve=Ae+1,ot=L[ve];if(0>l(Pe,V))ve<te&&0>l(ot,Pe)?(L[Z]=ot,L[ve]=V,Z=ve):(L[Z]=Pe,L[Ae]=V,Z=Ae);else if(ve<te&&0>l(ot,V))L[Z]=ot,L[ve]=V,Z=ve;else break e}}return b}function l(L,b){var V=L.sortIndex-b.sortIndex;return V!==0?V:L.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var s=[],u=[],f=1,d=null,m=3,E=!1,S=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=L)r(u),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(u)}}function C(L){if(w=!1,v(L),!S)if(n(s)!==null)S=!0,ke(R);else{var b=n(u);b!==null&&$e(C,b.startTime-L)}}function R(L,b){S=!1,w&&(w=!1,h(P),P=-1),E=!0;var V=m;try{for(v(b),d=n(s);d!==null&&(!(d.expirationTime>b)||L&&!ee());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,m=d.priorityLevel;var te=Z(d.expirationTime<=b);b=e.unstable_now(),typeof te=="function"?d.callback=te:d===n(s)&&r(s),v(b)}else r(s);d=n(s)}if(d!==null)var Ne=!0;else{var Ae=n(u);Ae!==null&&$e(C,Ae.startTime-b),Ne=!1}return Ne}finally{d=null,m=V,E=!1}}var D=!1,y=null,P=-1,U=5,I=-1;function ee(){return!(e.unstable_now()-I<U)}function le(){if(y!==null){var L=e.unstable_now();I=L;var b=!0;try{b=y(!0,L)}finally{b?W():(D=!1,y=null)}}else D=!1}var W;if(typeof c=="function")W=function(){c(le)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,re=X.port2;X.port1.onmessage=le,W=function(){re.postMessage(null)}}else W=function(){N(le,0)};function ke(L){y=L,D||(D=!0,W())}function $e(L,b){P=N(function(){L(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){S||E||(S=!0,ke(R))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var V=m;m=b;try{return L()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,b){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=m;m=L;try{return b()}finally{m=V}},e.unstable_scheduleCallback=function(L,b,V){var Z=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Z+V:Z):V=Z,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=V+te,L={id:f++,callback:b,priorityLevel:L,startTime:V,expirationTime:te,sortIndex:-1},V>Z?(L.sortIndex=V,t(u,L),n(s)===null&&L===n(u)&&(w?(h(P),P=-1):w=!0,$e(C,V-Z))):(L.sortIndex=te,t(s,L),S||E||(S=!0,ke(R))),L},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(L){var b=m;return function(){var V=m;m=b;try{return L.apply(this,arguments)}finally{m=V}}}})(Nc);Rc.exports=Nc;var Mp=Rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=T,nt=Mp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,Vr={};function Nn(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=Object.prototype.hasOwnProperty,Ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Hs={};function Op(e){return Ta.call(Hs,e)?!0:Ta.call(bs,e)?!1:Ap.test(e)?Hs[e]=!0:(bs[e]=!0,!1)}function Fp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zp(e,t,n,r){if(t===null||typeof t>"u"||Fp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ti=/[\-:]([a-z])/g;function Ri(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ti,Ri);De[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ti,Ri);De[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ti,Ri);De[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ni(e,t,n,r){var l=De.hasOwnProperty(t)?De[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zp(t,n,l,r)&&(n=null),r||l===null?Op(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),bn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Ii=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Mc=Symbol.for("react.context"),Bi=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),Mi=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Dc=Symbol.for("react.offscreen"),Us=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Jo;function Rr(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var ea=!1;function ta(e,t){if(!e||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,i=o.length-1;1<=a&&0<=i&&l[a]!==o[i];)i--;for(;1<=a&&0<=i;a--,i--)if(l[a]!==o[i]){if(a!==1||i!==1)do if(a--,i--,0>i||l[a]!==o[i]){var s=`
`+l[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=i);break}}}finally{ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rr(e):""}function jp(e){switch(e.tag){case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return e=ta(e.type,!1),e;case 11:return e=ta(e.type.render,!1),e;case 1:return e=ta(e.type,!0),e;default:return""}}function Ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case bn:return"Portal";case Ra:return"Profiler";case Ii:return"StrictMode";case Na:return"Suspense";case Ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mc:return(e.displayName||"Context")+".Consumer";case Bc:return(e._context.displayName||"Context")+".Provider";case Bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mi:return t=e.displayName||null,t!==null?t:Ba(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Ba(e(t))}catch{}}return null}function bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ba(t);case 8:return t===Ii?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=Ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ll(e){e._valueTracker||(e._valueTracker=Hp(e))}function Oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function no(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ma(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fc(e,t){t=t.checked,t!=null&&Ni(e,"checked",t,!1)}function Da(e,t){Fc(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Aa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Aa(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Aa(e,t,n){(t!=="number"||no(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $s(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Nr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function zc(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tl,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function Hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vp=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function za(e,t){if(t){if(Vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function Di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Jn=null,er=null;function Ys(e){if(e=fl(e)){if(typeof Ha!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ao(t),Ha(e.stateNode,e.type,t))}}function Vc(e){Jn?er?er.push(e):er=[e]:Jn=e}function Wc(){if(Jn){var e=Jn,t=er;if(er=Jn=null,Ys(e),t)for(e=0;e<t.length;e++)Ys(t[e])}}function $c(e,t){return e(t)}function Gc(){}var na=!1;function Yc(e,t,n){if(na)return e(t,n);na=!0;try{return $c(e,t,n)}finally{na=!1,(Jn!==null||er!==null)&&(Gc(),Wc())}}function $r(e,t){var n=e.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ua=!1;if(Mt)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Ua=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Ua=!1}function Wp(e,t,n,r,l,o,a,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ar=!1,ro=null,lo=!1,Va=null,$p={onError:function(e){Ar=!0,ro=e}};function Gp(e,t,n,r,l,o,a,i,s){Ar=!1,ro=null,Wp.apply($p,arguments)}function Yp(e,t,n,r,l,o,a,i,s){if(Gp.apply(this,arguments),Ar){if(Ar){var u=ro;Ar=!1,ro=null}else throw Error(_(198));lo||(lo=!0,Va=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qs(e){if(In(e)!==e)throw Error(_(188))}function Qp(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Qs(l),e;if(o===r)return Qs(l),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,i=l.child;i;){if(i===n){a=!0,n=l,r=o;break}if(i===r){a=!0,r=l,n=o;break}i=i.sibling}if(!a){for(i=o.child;i;){if(i===n){a=!0,n=o,r=l;break}if(i===r){a=!0,r=o,n=l;break}i=i.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Kc(e){return e=Qp(e),e!==null?Xc(e):null}function Xc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xc(e);if(t!==null)return t;e=e.sibling}return null}var qc=nt.unstable_scheduleCallback,Ks=nt.unstable_cancelCallback,Kp=nt.unstable_shouldYield,Xp=nt.unstable_requestPaint,we=nt.unstable_now,qp=nt.unstable_getCurrentPriorityLevel,Ai=nt.unstable_ImmediatePriority,Zc=nt.unstable_UserBlockingPriority,oo=nt.unstable_NormalPriority,Zp=nt.unstable_LowPriority,Jc=nt.unstable_IdlePriority,Io=null,xt=null;function Jp(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var Rl=64,Nl=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var i=a&~l;i!==0?r=Ir(i):(o&=a,o!==0&&(r=Ir(o)))}else a=n&~l,a!==0?r=Ir(a):o!==0&&(r=Ir(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),l=1<<n,r|=e[n],t&=~l;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-yt(o),i=1<<a,s=l[a];s===-1?(!(i&n)||i&r)&&(l[a]=rm(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}function Wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ed(){var e=Rl;return Rl<<=1,!(Rl&4194240)&&(Rl=64),e}function ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function om(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-yt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Oi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ae=0;function td(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nd,Fi,rd,ld,od,$a=!1,Il=[],Xt=null,qt=null,Zt=null,Gr=new Map,Yr=new Map,$t=[],am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xs(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function kr(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=fl(t),t!==null&&Fi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function im(e,t,n,r,l){switch(t){case"focusin":return Xt=kr(Xt,e,t,n,r,l),!0;case"dragenter":return qt=kr(qt,e,t,n,r,l),!0;case"mouseover":return Zt=kr(Zt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Gr.set(o,kr(Gr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Yr.set(o,kr(Yr.get(o)||null,e,t,n,r,l)),!0}return!1}function ad(e){var t=gn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=Qc(n),t!==null){e.blockedOn=t,od(e.priority,function(){rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ba=r,n.target.dispatchEvent(r),ba=null}else return t=fl(n),t!==null&&Fi(t),e.blockedOn=n,!1;t.shift()}return!0}function qs(e,t,n){$l(e)&&n.delete(t)}function sm(){$a=!1,Xt!==null&&$l(Xt)&&(Xt=null),qt!==null&&$l(qt)&&(qt=null),Zt!==null&&$l(Zt)&&(Zt=null),Gr.forEach(qs),Yr.forEach(qs)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,sm)))}function Qr(e){function t(l){return Sr(l,e)}if(0<Il.length){Sr(Il[0],e);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Sr(Xt,e),qt!==null&&Sr(qt,e),Zt!==null&&Sr(Zt,e),Gr.forEach(t),Yr.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)ad(n),n.blockedOn===null&&$t.shift()}var tr=Ft.ReactCurrentBatchConfig,io=!0;function um(e,t,n,r){var l=ae,o=tr.transition;tr.transition=null;try{ae=1,zi(e,t,n,r)}finally{ae=l,tr.transition=o}}function cm(e,t,n,r){var l=ae,o=tr.transition;tr.transition=null;try{ae=4,zi(e,t,n,r)}finally{ae=l,tr.transition=o}}function zi(e,t,n,r){if(io){var l=Ga(e,t,n,r);if(l===null)pa(e,t,r,so,n),Xs(e,r);else if(im(l,e,t,n,r))r.stopPropagation();else if(Xs(e,r),t&4&&-1<am.indexOf(e)){for(;l!==null;){var o=fl(l);if(o!==null&&nd(o),o=Ga(e,t,n,r),o===null&&pa(e,t,r,so,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else pa(e,t,r,null,n)}}var so=null;function Ga(e,t,n,r){if(so=null,e=Di(r),e=gn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return so=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qp()){case Ai:return 1;case Zc:return 4;case oo:case Zp:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var Yt=null,ji=null,Gl=null;function sd(){if(Gl)return Gl;var e,t=ji,n=t.length,r,l="value"in Yt?Yt.value:Yt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Gl=l.slice(e,1<r?1-r:void 0)}function Yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function Zs(){return!1}function lt(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bl:Zs,this.isPropagationStopped=Zs,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=lt(fr),dl=he({},fr,{view:0,detail:0}),dm=lt(dl),la,oa,wr,Bo=he({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(la=e.screenX-wr.screenX,oa=e.screenY-wr.screenY):oa=la=0,wr=e),la)},movementY:function(e){return"movementY"in e?e.movementY:oa}}),Js=lt(Bo),fm=he({},Bo,{dataTransfer:0}),pm=lt(fm),mm=he({},dl,{relatedTarget:0}),aa=lt(mm),hm=he({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=lt(hm),ym=he({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=lt(ym),Em=he({},fr,{data:0}),eu=lt(Em),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wm[e])?!!t[e]:!1}function Hi(){return Cm}var xm=he({},dl,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?Yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=lt(xm),_m=he({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=lt(_m),Lm=he({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),Tm=lt(Lm),Rm=he({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nm=lt(Rm),Im=he({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=lt(Im),Mm=[9,13,27,32],Ui=Mt&&"CompositionEvent"in window,Or=null;Mt&&"documentMode"in document&&(Or=document.documentMode);var Dm=Mt&&"TextEvent"in window&&!Or,ud=Mt&&(!Ui||Or&&8<Or&&11>=Or),nu=" ",ru=!1;function cd(e,t){switch(e){case"keyup":return Mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Am(e,t){switch(e){case"compositionend":return dd(t);case"keypress":return t.which!==32?null:(ru=!0,nu);case"textInput":return e=t.data,e===nu&&ru?null:e;default:return null}}function Om(e,t){if(Un)return e==="compositionend"||!Ui&&cd(e,t)?(e=sd(),Gl=ji=Yt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fm[e.type]:t==="textarea"}function fd(e,t,n,r){Vc(r),t=uo(t,"onChange"),0<t.length&&(n=new bi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Kr=null;function zm(e){Cd(e,0)}function Mo(e){var t=$n(e);if(Oc(t))return e}function jm(e,t){if(e==="change")return t}var pd=!1;if(Mt){var ia;if(Mt){var sa="oninput"in document;if(!sa){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),sa=typeof ou.oninput=="function"}ia=sa}else ia=!1;pd=ia&&(!document.documentMode||9<document.documentMode)}function au(){Fr&&(Fr.detachEvent("onpropertychange",md),Kr=Fr=null)}function md(e){if(e.propertyName==="value"&&Mo(Kr)){var t=[];fd(t,Kr,e,Di(e)),Yc(zm,t)}}function bm(e,t,n){e==="focusin"?(au(),Fr=t,Kr=n,Fr.attachEvent("onpropertychange",md)):e==="focusout"&&au()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mo(Kr)}function Um(e,t){if(e==="click")return Mo(t)}function Vm(e,t){if(e==="input"||e==="change")return Mo(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Wm;function Xr(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ta.call(t,l)||!Et(e[l],t[l]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vd(){for(var e=window,t=no();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=no(e.document)}return t}function Vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $m(e){var t=vd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&Vi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=su(n,o);var a=su(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gm=Mt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ya=null,zr=null,Qa=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qa||Vn==null||Vn!==no(r)||(r=Vn,"selectionStart"in r&&Vi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Xr(zr,r)||(zr=r,r=uo(Ya,"onSelect"),0<r.length&&(t=new bi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Ml(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},ua={},yd={};Mt&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function Do(e){if(ua[e])return ua[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yd)return ua[e]=t[n];return e}var gd=Do("animationend"),Ed=Do("animationiteration"),kd=Do("animationstart"),Sd=Do("transitionend"),wd=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){wd.set(e,t),Nn(t,[e])}for(var ca=0;ca<cu.length;ca++){var da=cu[ca],Ym=da.toLowerCase(),Qm=da[0].toUpperCase()+da.slice(1);sn(Ym,"on"+Qm)}sn(gd,"onAnimationEnd");sn(Ed,"onAnimationIteration");sn(kd,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Sd,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yp(r,t,void 0,e),e.currentTarget=null}function Cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var i=r[a],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&l.isPropagationStopped())break e;du(l,i,u),o=s}else for(a=0;a<r.length;a++){if(i=r[a],s=i.instance,u=i.currentTarget,i=i.listener,s!==o&&l.isPropagationStopped())break e;du(l,i,u),o=s}}}if(lo)throw e=Va,lo=!1,Va=null,e}function ue(e,t){var n=t[Ja];n===void 0&&(n=t[Ja]=new Set);var r=e+"__bubble";n.has(r)||(xd(t,e,2,!1),n.add(r))}function fa(e,t,n){var r=0;t&&(r|=4),xd(n,e,r,t)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Dl]){e[Dl]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(Km.has(n)||fa(n,!1,e),fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dl]||(t[Dl]=!0,fa("selectionchange",!1,t))}}function xd(e,t,n,r){switch(id(t)){case 1:var l=um;break;case 4:l=cm;break;default:l=zi}n=l.bind(null,t,n,e),l=void 0,!Ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function pa(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;a=a.return}for(;i!==null;){if(a=gn(i),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}i=i.parentNode}}r=r.return}Yc(function(){var u=o,f=Di(n),d=[];e:{var m=wd.get(e);if(m!==void 0){var E=bi,S=e;switch(e){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":E=Pm;break;case"focusin":S="focus",E=aa;break;case"focusout":S="blur",E=aa;break;case"beforeblur":case"afterblur":E=aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Tm;break;case gd:case Ed:case kd:E=vm;break;case Sd:E=Nm;break;case"scroll":E=dm;break;case"wheel":E=Bm;break;case"copy":case"cut":case"paste":E=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=tu}var w=(t&4)!==0,N=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,v;c!==null;){v=c;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,h!==null&&(C=$r(c,h),C!=null&&w.push(Zr(c,C,v)))),N)break;c=c.return}0<w.length&&(m=new E(m,S,null,n,f),d.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",m&&n!==ba&&(S=n.relatedTarget||n.fromElement)&&(gn(S)||S[Dt]))break e;if((E||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,E?(S=n.relatedTarget||n.toElement,E=u,S=S?gn(S):null,S!==null&&(N=In(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(E=null,S=u),E!==S)){if(w=Js,C="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=tu,C="onPointerLeave",h="onPointerEnter",c="pointer"),N=E==null?m:$n(E),v=S==null?m:$n(S),m=new w(C,c+"leave",E,n,f),m.target=N,m.relatedTarget=v,C=null,gn(f)===u&&(w=new w(h,c+"enter",S,n,f),w.target=v,w.relatedTarget=N,C=w),N=C,E&&S)t:{for(w=E,h=S,c=0,v=w;v;v=Fn(v))c++;for(v=0,C=h;C;C=Fn(C))v++;for(;0<c-v;)w=Fn(w),c--;for(;0<v-c;)h=Fn(h),v--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=Fn(w),h=Fn(h)}w=null}else w=null;E!==null&&fu(d,m,E,w,!1),S!==null&&N!==null&&fu(d,N,S,w,!0)}}e:{if(m=u?$n(u):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var R=jm;else if(lu(m))if(pd)R=Vm;else{R=Hm;var D=bm}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=Um);if(R&&(R=R(e,u))){fd(d,R,n,f);break e}D&&D(e,m,u),e==="focusout"&&(D=m._wrapperState)&&D.controlled&&m.type==="number"&&Aa(m,"number",m.value)}switch(D=u?$n(u):window,e){case"focusin":(lu(D)||D.contentEditable==="true")&&(Vn=D,Ya=u,zr=null);break;case"focusout":zr=Ya=Vn=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,uu(d,n,f);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":uu(d,n,f)}var y;if(Ui)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Un?cd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ud&&n.locale!=="ko"&&(Un||P!=="onCompositionStart"?P==="onCompositionEnd"&&Un&&(y=sd()):(Yt=f,ji="value"in Yt?Yt.value:Yt.textContent,Un=!0)),D=uo(u,P),0<D.length&&(P=new eu(P,e,null,n,f),d.push({event:P,listeners:D}),y?P.data=y:(y=dd(n),y!==null&&(P.data=y)))),(y=Dm?Am(e,n):Om(e,n))&&(u=uo(u,"onBeforeInput"),0<u.length&&(f=new eu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=y))}Cd(d,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=$r(e,n),o!=null&&r.unshift(Zr(e,o,l)),o=$r(e,t),o!=null&&r.push(Zr(e,o,l))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,l?(s=$r(n,o),s!=null&&a.unshift(Zr(n,s,i))):l||(s=$r(n,o),s!=null&&a.push(Zr(n,s,i)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Xm=/\r\n?/g,qm=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(Xm,`
`).replace(qm,"")}function Al(e,t,n){if(t=pu(t),pu(e)!==t&&n)throw Error(_(425))}function co(){}var Ka=null,Xa=null;function qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(eh)}:Za;function eh(e){setTimeout(function(){throw e})}function ma(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qr(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+pr,Jr="__reactProps$"+pr,Dt="__reactContainer$"+pr,Ja="__reactEvents$"+pr,th="__reactListeners$"+pr,nh="__reactHandles$"+pr;function gn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[Ct])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function fl(e){return e=e[Ct]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ao(e){return e[Jr]||null}var ei=[],Gn=-1;function un(e){return{current:e}}function ce(e){0>Gn||(e.current=ei[Gn],ei[Gn]=null,Gn--)}function se(e,t){Gn++,ei[Gn]=e.current,e.current=t}var an={},je=un(an),Ke=un(!1),xn=an;function or(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Xe(e){return e=e.childContextTypes,e!=null}function fo(){ce(Ke),ce(je)}function vu(e,t,n){if(je.current!==an)throw Error(_(168));se(je,t),se(Ke,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(_(108,bp(e)||"Unknown",l));return he({},n,r)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,xn=je.current,se(je,e),se(Ke,Ke.current),!0}function yu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Pd(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,ce(Ke),ce(je),se(je,e)):ce(Ke),se(Ke,n)}var Rt=null,Oo=!1,ha=!1;function _d(e){Rt===null?Rt=[e]:Rt.push(e)}function rh(e){Oo=!0,_d(e)}function cn(){if(!ha&&Rt!==null){ha=!0;var e=0,t=ae;try{var n=Rt;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,Oo=!1}catch(l){throw Rt!==null&&(Rt=Rt.slice(e+1)),qc(Ai,cn),l}finally{ae=t,ha=!1}}return null}var Yn=[],Qn=0,mo=null,ho=0,at=[],it=0,Pn=null,Nt=1,It="";function mn(e,t){Yn[Qn++]=ho,Yn[Qn++]=mo,mo=e,ho=t}function Ld(e,t,n){at[it++]=Nt,at[it++]=It,at[it++]=Pn,Pn=e;var r=Nt;e=It;var l=32-yt(r)-1;r&=~(1<<l),n+=1;var o=32-yt(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Nt=1<<32-yt(t)+l|n<<l|r,It=o+e}else Nt=1<<o|n<<l|r,It=e}function Wi(e){e.return!==null&&(mn(e,1),Ld(e,1,0))}function $i(e){for(;e===mo;)mo=Yn[--Qn],Yn[Qn]=null,ho=Yn[--Qn],Yn[Qn]=null;for(;e===Pn;)Pn=at[--it],at[it]=null,It=at[--it],at[it]=null,Nt=at[--it],at[it]=null}var tt=null,et=null,fe=!1,vt=null;function Td(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Nt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(fe){var t=et;if(t){var n=t;if(!gu(e,t)){if(ti(e))throw Error(_(418));t=Jt(n.nextSibling);var r=tt;t&&gu(e,t)?Td(r,n):(e.flags=e.flags&-4097|2,fe=!1,tt=e)}}else{if(ti(e))throw Error(_(418));e.flags=e.flags&-4097|2,fe=!1,tt=e}}}function Eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Ol(e){if(e!==tt)return!1;if(!fe)return Eu(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qa(e.type,e.memoizedProps)),t&&(t=et)){if(ti(e))throw Rd(),Error(_(418));for(;t;)Td(e,t),t=Jt(t.nextSibling)}if(Eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?Jt(e.stateNode.nextSibling):null;return!0}function Rd(){for(var e=et;e;)e=Jt(e.nextSibling)}function ar(){et=tt=null,fe=!1}function Gi(e){vt===null?vt=[e]:vt.push(e)}var lh=Ft.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var i=l.refs;a===null?delete i[o]:i[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Fl(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function Nd(e){function t(h,c){if(e){var v=h.deletions;v===null?(h.deletions=[c],h.flags|=16):v.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function l(h,c){return h=rn(h,c),h.index=0,h.sibling=null,h}function o(h,c,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<c?(h.flags|=2,c):v):(h.flags|=2,c)):(h.flags|=1048576,c)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,c,v,C){return c===null||c.tag!==6?(c=wa(v,h.mode,C),c.return=h,c):(c=l(c,v),c.return=h,c)}function s(h,c,v,C){var R=v.type;return R===Hn?f(h,c,v.props.children,C,v.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vt&&ku(R)===c.type)?(C=l(c,v.props),C.ref=Cr(h,c,v),C.return=h,C):(C=eo(v.type,v.key,v.props,null,h.mode,C),C.ref=Cr(h,c,v),C.return=h,C)}function u(h,c,v,C){return c===null||c.tag!==4||c.stateNode.containerInfo!==v.containerInfo||c.stateNode.implementation!==v.implementation?(c=Ca(v,h.mode,C),c.return=h,c):(c=l(c,v.children||[]),c.return=h,c)}function f(h,c,v,C,R){return c===null||c.tag!==7?(c=Cn(v,h.mode,C,R),c.return=h,c):(c=l(c,v),c.return=h,c)}function d(h,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wa(""+c,h.mode,v),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case _l:return v=eo(c.type,c.key,c.props,null,h.mode,v),v.ref=Cr(h,null,c),v.return=h,v;case bn:return c=Ca(c,h.mode,v),c.return=h,c;case Vt:var C=c._init;return d(h,C(c._payload),v)}if(Nr(c)||gr(c))return c=Cn(c,h.mode,v,null),c.return=h,c;Fl(h,c)}return null}function m(h,c,v,C){var R=c!==null?c.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:i(h,c,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return v.key===R?s(h,c,v,C):null;case bn:return v.key===R?u(h,c,v,C):null;case Vt:return R=v._init,m(h,c,R(v._payload),C)}if(Nr(v)||gr(v))return R!==null?null:f(h,c,v,C,null);Fl(h,v)}return null}function E(h,c,v,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(v)||null,i(c,h,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case _l:return h=h.get(C.key===null?v:C.key)||null,s(c,h,C,R);case bn:return h=h.get(C.key===null?v:C.key)||null,u(c,h,C,R);case Vt:var D=C._init;return E(h,c,v,D(C._payload),R)}if(Nr(C)||gr(C))return h=h.get(v)||null,f(c,h,C,R,null);Fl(c,C)}return null}function S(h,c,v,C){for(var R=null,D=null,y=c,P=c=0,U=null;y!==null&&P<v.length;P++){y.index>P?(U=y,y=null):U=y.sibling;var I=m(h,y,v[P],C);if(I===null){y===null&&(y=U);break}e&&y&&I.alternate===null&&t(h,y),c=o(I,c,P),D===null?R=I:D.sibling=I,D=I,y=U}if(P===v.length)return n(h,y),fe&&mn(h,P),R;if(y===null){for(;P<v.length;P++)y=d(h,v[P],C),y!==null&&(c=o(y,c,P),D===null?R=y:D.sibling=y,D=y);return fe&&mn(h,P),R}for(y=r(h,y);P<v.length;P++)U=E(y,h,P,v[P],C),U!==null&&(e&&U.alternate!==null&&y.delete(U.key===null?P:U.key),c=o(U,c,P),D===null?R=U:D.sibling=U,D=U);return e&&y.forEach(function(ee){return t(h,ee)}),fe&&mn(h,P),R}function w(h,c,v,C){var R=gr(v);if(typeof R!="function")throw Error(_(150));if(v=R.call(v),v==null)throw Error(_(151));for(var D=R=null,y=c,P=c=0,U=null,I=v.next();y!==null&&!I.done;P++,I=v.next()){y.index>P?(U=y,y=null):U=y.sibling;var ee=m(h,y,I.value,C);if(ee===null){y===null&&(y=U);break}e&&y&&ee.alternate===null&&t(h,y),c=o(ee,c,P),D===null?R=ee:D.sibling=ee,D=ee,y=U}if(I.done)return n(h,y),fe&&mn(h,P),R;if(y===null){for(;!I.done;P++,I=v.next())I=d(h,I.value,C),I!==null&&(c=o(I,c,P),D===null?R=I:D.sibling=I,D=I);return fe&&mn(h,P),R}for(y=r(h,y);!I.done;P++,I=v.next())I=E(y,h,P,I.value,C),I!==null&&(e&&I.alternate!==null&&y.delete(I.key===null?P:I.key),c=o(I,c,P),D===null?R=I:D.sibling=I,D=I);return e&&y.forEach(function(le){return t(h,le)}),fe&&mn(h,P),R}function N(h,c,v,C){if(typeof v=="object"&&v!==null&&v.type===Hn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:e:{for(var R=v.key,D=c;D!==null;){if(D.key===R){if(R=v.type,R===Hn){if(D.tag===7){n(h,D.sibling),c=l(D,v.props.children),c.return=h,h=c;break e}}else if(D.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Vt&&ku(R)===D.type){n(h,D.sibling),c=l(D,v.props),c.ref=Cr(h,D,v),c.return=h,h=c;break e}n(h,D);break}else t(h,D);D=D.sibling}v.type===Hn?(c=Cn(v.props.children,h.mode,C,v.key),c.return=h,h=c):(C=eo(v.type,v.key,v.props,null,h.mode,C),C.ref=Cr(h,c,v),C.return=h,h=C)}return a(h);case bn:e:{for(D=v.key;c!==null;){if(c.key===D)if(c.tag===4&&c.stateNode.containerInfo===v.containerInfo&&c.stateNode.implementation===v.implementation){n(h,c.sibling),c=l(c,v.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Ca(v,h.mode,C),c.return=h,h=c}return a(h);case Vt:return D=v._init,N(h,c,D(v._payload),C)}if(Nr(v))return S(h,c,v,C);if(gr(v))return w(h,c,v,C);Fl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,c!==null&&c.tag===6?(n(h,c.sibling),c=l(c,v),c.return=h,h=c):(n(h,c),c=wa(v,h.mode,C),c.return=h,h=c),a(h)):n(h,c)}return N}var ir=Nd(!0),Id=Nd(!1),vo=un(null),yo=null,Kn=null,Yi=null;function Qi(){Yi=Kn=yo=null}function Ki(e){var t=vo.current;ce(vo),e._currentValue=t}function ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){yo=e,Yi=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Yi!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(yo===null)throw Error(_(308));Kn=e,yo.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var En=null;function Xi(e){En===null?En=[e]:En.push(e)}function Bd(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Xi(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,Xi(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function Ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oi(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var l=e.updateQueue;Wt=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var s=i,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==a&&(i===null?f.firstBaseUpdate=u:i.next=u,f.lastBaseUpdate=s))}if(o!==null){var d=l.baseState;a=0,f=u=s=null,i=o;do{var m=i.lane,E=i.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:E,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,w=i;switch(m=t,E=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){d=S.call(E,d,m);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,m=typeof S=="function"?S.call(E,d,m):S,m==null)break e;d=he({},d,m);break e;case 2:Wt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[i]:m.push(i))}else E={eventTime:E,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(u=f=E,s=d):f=f.next=E,a|=m;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;m=i,i=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(f===null&&(s=d),l.baseState=s,l.firstBaseUpdate=u,l.lastBaseUpdate=f,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ln|=a,e.lanes=a,e.memoizedState=d}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(_(191,l));l.call(r)}}}var pl={},Pt=un(pl),el=un(pl),tl=un(pl);function kn(e){if(e===pl)throw Error(_(174));return e}function Zi(e,t){switch(se(tl,t),se(el,e),se(Pt,pl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fa(t,e)}ce(Pt),se(Pt,t)}function sr(){ce(Pt),ce(el),ce(tl)}function Dd(e){kn(tl.current);var t=kn(Pt.current),n=Fa(t,e.type);t!==n&&(se(el,e),se(Pt,n))}function Ji(e){el.current===e&&(ce(Pt),ce(el))}var pe=un(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=[];function es(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var Kl=Ft.ReactCurrentDispatcher,ya=Ft.ReactCurrentBatchConfig,_n=0,me=null,_e=null,Te=null,ko=!1,jr=!1,nl=0,oh=0;function Oe(){throw Error(_(321))}function ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function ns(e,t,n,r,l,o){if(_n=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kl.current=e===null||e.memoizedState===null?uh:ch,e=n(r,l),jr){o=0;do{if(jr=!1,nl=0,25<=o)throw Error(_(301));o+=1,Te=_e=null,t.updateQueue=null,Kl.current=dh,e=n(r,l)}while(jr)}if(Kl.current=So,t=_e!==null&&_e.next!==null,_n=0,Te=_e=me=null,ko=!1,t)throw Error(_(300));return e}function rs(){var e=nl!==0;return nl=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?me.memoizedState=Te=e:Te=Te.next=e,Te}function dt(){if(_e===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Te===null?me.memoizedState:Te.next;if(t!==null)Te=t,_e=e;else{if(e===null)throw Error(_(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Te===null?me.memoizedState=Te=e:Te=Te.next=e}return Te}function rl(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=_e,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var i=a=null,s=null,u=o;do{var f=u.lane;if((_n&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,a=r):s=s.next=d,me.lanes|=f,Ln|=f}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=i,Et(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,me.lanes|=o,Ln|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);Et(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ad(){}function Od(e,t){var n=me,r=dt(),l=t(),o=!Et(r.memoizedState,l);if(o&&(r.memoizedState=l,Qe=!0),r=r.queue,ls(jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,ll(9,zd.bind(null,n,r,l,t),void 0,null),Re===null)throw Error(_(349));_n&30||Fd(n,t,l)}return l}function Fd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,r){t.value=n,t.getSnapshot=r,bd(t)&&Hd(e)}function jd(e,t,n){return n(function(){bd(t)&&Hd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Hd(e){var t=At(e,1);t!==null&&gt(t,e,1,-1)}function Cu(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:e},t.queue=e,e=e.dispatch=sh.bind(null,me,e),[t.memoizedState,e]}function ll(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ud(){return dt().memoizedState}function Xl(e,t,n,r){var l=wt();me.flags|=e,l.memoizedState=ll(1|t,n,void 0,r===void 0?null:r)}function Fo(e,t,n,r){var l=dt();r=r===void 0?null:r;var o=void 0;if(_e!==null){var a=_e.memoizedState;if(o=a.destroy,r!==null&&ts(r,a.deps)){l.memoizedState=ll(t,n,o,r);return}}me.flags|=e,l.memoizedState=ll(1|t,n,o,r)}function xu(e,t){return Xl(8390656,8,e,t)}function ls(e,t){return Fo(2048,8,e,t)}function Vd(e,t){return Fo(4,2,e,t)}function Wd(e,t){return Fo(4,4,e,t)}function $d(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4,4,$d.bind(null,t,e),n)}function os(){}function Yd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qd(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ts(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kd(e,t,n){return _n&21?(Et(n,t)||(n=ed(),me.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function ah(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=ya.transition;ya.transition={};try{e(!1),t()}finally{ae=n,ya.transition=r}}function Xd(){return dt().memoizedState}function ih(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qd(e))Zd(t,n);else if(n=Bd(e,t,n,r),n!==null){var l=Ue();gt(n,e,r,l),Jd(n,t,r)}}function sh(e,t,n){var r=nn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qd(e))Zd(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,i=o(a,n);if(l.hasEagerState=!0,l.eagerState=i,Et(i,a)){var s=t.interleaved;s===null?(l.next=l,Xi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Bd(e,t,l,r),n!==null&&(l=Ue(),gt(n,e,r,l),Jd(n,t,r))}}function qd(e){var t=e.alternate;return e===me||t!==null&&t===me}function Zd(e,t){jr=ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oi(e,n)}}var So={readContext:ct,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},uh={readContext:ct,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xl(4194308,4,$d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xl(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ih.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Cu,useDebugValue:os,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Cu(!1),t=e[0];return e=ah.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,l=wt();if(fe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Re===null)throw Error(_(349));_n&30||Fd(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,xu(jd.bind(null,r,o,e),[e]),r.flags|=2048,ll(9,zd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=Re.identifierPrefix;if(fe){var n=It,r=Nt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:ct,useCallback:Yd,useContext:ct,useEffect:ls,useImperativeHandle:Gd,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Qd,useReducer:ga,useRef:Ud,useState:function(){return ga(rl)},useDebugValue:os,useDeferredValue:function(e){var t=dt();return Kd(t,_e.memoizedState,e)},useTransition:function(){var e=ga(rl)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:Od,useId:Xd,unstable_isNewReconciler:!1},dh={readContext:ct,useCallback:Yd,useContext:ct,useEffect:ls,useImperativeHandle:Gd,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Qd,useReducer:Ea,useRef:Ud,useState:function(){return Ea(rl)},useDebugValue:os,useDeferredValue:function(e){var t=dt();return _e===null?t.memoizedState=e:Kd(t,_e.memoizedState,e)},useTransition:function(){var e=Ea(rl)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:Od,useId:Xd,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function li(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),l=nn(e),o=Bt(r,l);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,l),t!==null&&(gt(t,e,l,r),Ql(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),l=nn(e),o=Bt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,l),t!==null&&(gt(t,e,l,r),Ql(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=nn(e),l=Bt(n,r);l.tag=2,t!=null&&(l.callback=t),t=en(e,l,r),t!==null&&(gt(t,e,r,n),Ql(t,e,r))}};function Pu(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(l,o):!0}function ef(e,t,n){var r=!1,l=an,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(l=Xe(t)?xn:je.current,r=t.contextTypes,o=(r=r!=null)?or(e,l):an),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function oi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},qi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=ct(o):(o=Xe(t)?xn:je.current,l.context=or(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(li(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&zo.enqueueReplaceState(l,l.state,null),go(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=jp(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ka(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Co||(Co=!0,vi=r),ai(e,t)},n}function nf(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ai(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ai(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fh;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=_h.bind(null,e,t,n),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var ph=Ft.ReactCurrentOwner,Qe=!1;function He(e,t,n,r){t.child=e===null?Id(t,null,n,r):ir(t,e.child,n,r)}function Nu(e,t,n,r,l){n=n.render;var o=t.ref;return nr(t,l),r=ns(e,t,n,r,o,l),n=rs(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ot(e,t,l)):(fe&&n&&Wi(t),t.flags|=1,He(e,t,r,l),t.child)}function Iu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ps(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,rf(e,t,o,r,l)):(e=eo(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(a,r)&&e.ref===t.ref)return Ot(e,t,l)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Xr(o,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Ot(e,t,l)}return ii(e,t,n,r,l)}function lf(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(qn,Ze),Ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(qn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(qn,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,se(qn,Ze),Ze|=r;return He(e,t,l,n),t.child}function of(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,n,r,l){var o=Xe(n)?xn:je.current;return o=or(t,o),nr(t,l),n=ns(e,t,n,r,o,l),r=rs(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ot(e,t,l)):(fe&&r&&Wi(t),t.flags|=1,He(e,t,n,l),t.child)}function Bu(e,t,n,r,l){if(Xe(n)){var o=!0;po(t)}else o=!1;if(nr(t,l),t.stateNode===null)ql(e,t),ef(t,n,r),oi(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,i=t.memoizedProps;a.props=i;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Xe(n)?xn:je.current,u=or(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==r||s!==u)&&_u(t,a,r,u),Wt=!1;var m=t.memoizedState;a.state=m,go(t,r,a,l),s=t.memoizedState,i!==r||m!==s||Ke.current||Wt?(typeof f=="function"&&(li(t,n,f,r),s=t.memoizedState),(i=Wt||Pu(t,n,i,r,m,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=i):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Md(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:pt(t.type,i),a.props=u,d=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=ct(s):(s=Xe(n)?xn:je.current,s=or(t,s));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==d||m!==s)&&_u(t,a,r,s),Wt=!1,m=t.memoizedState,a.state=m,go(t,r,a,l);var S=t.memoizedState;i!==d||m!==S||Ke.current||Wt?(typeof E=="function"&&(li(t,n,E,r),S=t.memoizedState),(u=Wt||Pu(t,n,u,r,m,S,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return si(e,t,n,r,o,l)}function si(e,t,n,r,l,o){of(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&yu(t,n,!1),Ot(e,t,o);r=t.stateNode,ph.current=t;var i=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ir(t,e.child,null,o),t.child=ir(t,null,i,o)):He(e,t,i,o),t.memoizedState=r.state,l&&yu(t,n,!0),t.child}function af(e){var t=e.stateNode;t.pendingContext?vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vu(e,t.context,!1),Zi(e,t.containerInfo)}function Mu(e,t,n,r,l){return ar(),Gi(l),t.flags|=256,He(e,t,n,r),t.child}var ui={dehydrated:null,treeContext:null,retryLane:0};function ci(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,n){var r=t.pendingProps,l=pe.current,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),se(pe,l&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ho(a,r,0,null),e=Cn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ci(n),t.memoizedState=ui,e):as(t,a));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return mh(e,t,a,r,i,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,i=l.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=rn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?o=rn(i,o):(o=Cn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ci(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ui,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function as(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zl(e,t,n,r){return r!==null&&Gi(r),ir(t,e.child,null,n),e=as(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ka(Error(_(422))),zl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ho({mode:"visible",children:r.children},l,0,null),o=Cn(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ir(t,e.child,null,a),t.child.memoizedState=ci(a),t.memoizedState=ui,o);if(!(t.mode&1))return zl(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(_(419)),r=ka(o,r,void 0),zl(e,t,a,r)}if(i=(a&e.childLanes)!==0,Qe||i){if(r=Re,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,At(e,l),gt(r,e,l,-1))}return fs(),r=ka(Error(_(421))),zl(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Lh.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,et=Jt(l.nextSibling),tt=t,fe=!0,vt=null,e!==null&&(at[it++]=Nt,at[it++]=It,at[it++]=Pn,Nt=e.id,It=e.overflow,Pn=t),t=as(t,r.children),t.flags|=4096,t)}function Du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ri(e.return,t,n)}function Sa(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function uf(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,n,t);else if(e.tag===19)Du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(pe,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Sa(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Eo(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Sa(t,!0,n,null,o);break;case"together":Sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ql(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hh(e,t,n){switch(t.tag){case 3:af(t),ar();break;case 5:Dd(t);break;case 1:Xe(t.type)&&po(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;se(vo,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?sf(e,t,n):(se(pe,pe.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,lf(e,t,n)}return Ot(e,t,n)}var cf,di,df,ff;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};di=function(){};df=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,kn(Pt.current);var o=null;switch(n){case"input":l=Ma(e,l),r=Ma(e,r),o=[];break;case"select":l=he({},l,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":l=Oa(e,l),r=Oa(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=co)}za(n,r);var a;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var i=l[u];for(a in i)i.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(i=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(a in i)!i.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&i[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),o||i===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vh(e,t,n){var r=t.pendingProps;switch($i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Xe(t.type)&&fo(),Fe(t),null;case 3:return r=t.stateNode,sr(),ce(Ke),ce(je),es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ol(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Ei(vt),vt=null))),di(e,t),Fe(t),null;case 5:Ji(t);var l=kn(tl.current);if(n=t.type,e!==null&&t.stateNode!=null)df(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Fe(t),null}if(e=kn(Pt.current),Ol(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ct]=t,r[Jr]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(l=0;l<Br.length;l++)ue(Br[l],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Vs(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":$s(r,o),ue("invalid",r)}za(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var i=o[a];a==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&Al(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Al(r.textContent,i,e),l=["children",""+i]):Vr.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":Ll(r),Ws(r,o,!0);break;case"textarea":Ll(r),Gs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=co)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ct]=t,e[Jr]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(a=ja(n,r),n){case"dialog":ue("cancel",e),ue("close",e),l=r;break;case"iframe":case"object":case"embed":ue("load",e),l=r;break;case"video":case"audio":for(l=0;l<Br.length;l++)ue(Br[l],e);l=r;break;case"source":ue("error",e),l=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),l=r;break;case"details":ue("toggle",e),l=r;break;case"input":Vs(e,r),l=Ma(e,r),ue("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=he({},r,{value:void 0}),ue("invalid",e);break;case"textarea":$s(e,r),l=Oa(e,r),ue("invalid",e);break;default:l=r}za(n,l),i=l;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?Uc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Wr(e,s):typeof s=="number"&&Wr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ue("scroll",e):s!=null&&Ni(e,o,s,a))}switch(n){case"input":Ll(e),Ws(e,r,!1);break;case"textarea":Ll(e),Gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=kn(tl.current),kn(Pt.current),Ol(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Al(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Al(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Fe(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&et!==null&&t.mode&1&&!(t.flags&128))Rd(),ar(),t.flags|=98560,o=!1;else if(o=Ol(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Ct]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else vt!==null&&(Ei(vt),vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Le===0&&(Le=3):fs())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return sr(),di(e,t),e===null&&qr(t.stateNode.containerInfo),Fe(t),null;case 10:return Ki(t.type._context),Fe(t),null;case 17:return Xe(t.type)&&fo(),Fe(t),null;case 19:if(ce(pe),o=t.memoizedState,o===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)xr(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Eo(e),a!==null){for(t.flags|=128,xr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>cr&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!fe)return Fe(t),null}else 2*we()-o.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function yh(e,t){switch($i(t),t.tag){case 1:return Xe(t.type)&&fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),ce(Ke),ce(je),es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return sr(),null;case 10:return Ki(t.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var jl=!1,ze=!1,gh=typeof WeakSet=="function"?WeakSet:Set,A=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function fi(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var Au=!1;function Eh(e,t){if(Ka=io,e=vd(),Vi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,i=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var E;d!==n||l!==0&&d.nodeType!==3||(i=a+l),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(E=d.firstChild)!==null;)m=d,d=E;for(;;){if(d===e)break t;if(m===n&&++u===l&&(i=a),m===o&&++f===r&&(s=a),(E=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=E}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xa={focusedElem:e,selectionRange:n},io=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,N=S.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:pt(t.type,w),N);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(C){Ee(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return S=Au,Au=!1,S}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&fi(t,n,o)}l=l.next}while(l!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Jr],delete t[Ja],delete t[th],delete t[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mf(e){return e.tag===5||e.tag===3||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=co));else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}function hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hi(e,t,n),e=e.sibling;e!==null;)hi(e,t,n),e=e.sibling}var Be=null,mt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)hf(e,t,n),n=n.sibling}function hf(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:ze||Xn(n,t);case 6:var r=Be,l=mt;Be=null,Ht(e,t,n),Be=r,mt=l,Be!==null&&(mt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(mt?(e=Be,n=n.stateNode,e.nodeType===8?ma(e.parentNode,n):e.nodeType===1&&ma(e,n),Qr(e)):ma(Be,n.stateNode));break;case 4:r=Be,l=mt,Be=n.stateNode.containerInfo,mt=!0,Ht(e,t,n),Be=r,mt=l;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&fi(n,t,a),l=l.next}while(l!==r)}Ht(e,t,n);break;case 1:if(!ze&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Ee(n,t,i)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Ht(e,t,n),ze=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gh),t.forEach(function(r){var l=Th.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,i=a;e:for(;i!==null;){switch(i.tag){case 5:Be=i.stateNode,mt=!1;break e;case 3:Be=i.stateNode.containerInfo,mt=!0;break e;case 4:Be=i.stateNode.containerInfo,mt=!0;break e}i=i.return}if(Be===null)throw Error(_(160));hf(o,a,l),Be=null,mt=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(u){Ee(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}function vf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),St(e),r&4){try{br(3,e,e.return),jo(3,e)}catch(w){Ee(e,e.return,w)}try{br(5,e,e.return)}catch(w){Ee(e,e.return,w)}}break;case 1:ft(t,e),St(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(ft(t,e),St(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var l=e.stateNode;try{Wr(l,"")}catch(w){Ee(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Fc(l,o),ja(i,a);var u=ja(i,o);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Uc(l,d):f==="dangerouslySetInnerHTML"?bc(l,d):f==="children"?Wr(l,d):Ni(l,f,d,u)}switch(i){case"input":Da(l,o);break;case"textarea":zc(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?Zn(l,!!o.multiple,E,!1):m!==!!o.multiple&&(o.defaultValue!=null?Zn(l,!!o.multiple,o.defaultValue,!0):Zn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Jr]=o}catch(w){Ee(e,e.return,w)}}break;case 6:if(ft(t,e),St(e),r&4){if(e.stateNode===null)throw Error(_(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){Ee(e,e.return,w)}}break;case 3:if(ft(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(w){Ee(e,e.return,w)}break;case 4:ft(t,e),St(e);break;case 13:ft(t,e),St(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(us=we())),r&4&&Fu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(u=ze)||f,ft(t,e),ze=u):ft(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(d=A=f;A!==null;){switch(m=A,E=m.child,m.tag){case 0:case 11:case 14:case 15:br(4,m,m.return);break;case 1:Xn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){Ee(r,n,w)}}break;case 5:Xn(m,m.return);break;case 22:if(m.memoizedState!==null){ju(d);continue}}E!==null?(E.return=m,A=E):ju(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{l=d.stateNode,u?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Hc("display",a))}catch(w){Ee(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Ee(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(t,e),St(e),r&4&&Fu(e);break;case 21:break;default:ft(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wr(l,""),r.flags&=-33);var o=Ou(e);hi(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,i=Ou(e);mi(e,i,a);break;default:throw Error(_(161))}}catch(s){Ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kh(e,t,n){A=e,yf(e)}function yf(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||jl;if(!a){var i=l.alternate,s=i!==null&&i.memoizedState!==null||ze;i=jl;var u=ze;if(jl=a,(ze=s)&&!u)for(A=l;A!==null;)a=A,s=a.child,a.tag===22&&a.memoizedState!==null?bu(l):s!==null?(s.return=a,A=s):bu(l);for(;o!==null;)A=o,yf(o),o=o.sibling;A=l,jl=i,ze=u}zu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,A=o):zu(e)}}function zu(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,a,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Qr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ze||t.flags&512&&pi(t)}catch(m){Ee(t,t.return,m)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function ju(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function bu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(s){Ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){Ee(t,l,s)}}var o=t.return;try{pi(t)}catch(s){Ee(t,o,s)}break;case 5:var a=t.return;try{pi(t)}catch(s){Ee(t,a,s)}}}catch(s){Ee(t,t.return,s)}if(t===e){A=null;break}var i=t.sibling;if(i!==null){i.return=t.return,A=i;break}A=t.return}}var Sh=Math.ceil,wo=Ft.ReactCurrentDispatcher,is=Ft.ReactCurrentOwner,ut=Ft.ReactCurrentBatchConfig,q=0,Re=null,xe=null,Me=0,Ze=0,qn=un(0),Le=0,ol=null,Ln=0,bo=0,ss=0,Hr=null,Ye=null,us=0,cr=1/0,Tt=null,Co=!1,vi=null,tn=null,bl=!1,Qt=null,xo=0,Ur=0,yi=null,Zl=-1,Jl=0;function Ue(){return q&6?we():Zl!==-1?Zl:Zl=we()}function nn(e){return e.mode&1?q&2&&Me!==0?Me&-Me:lh.transition!==null?(Jl===0&&(Jl=ed()),Jl):(e=ae,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function gt(e,t,n,r){if(50<Ur)throw Ur=0,yi=null,Error(_(185));cl(e,n,r),(!(q&2)||e!==Re)&&(e===Re&&(!(q&2)&&(bo|=n),Le===4&&Gt(e,Me)),qe(e,r),n===1&&q===0&&!(t.mode&1)&&(cr=we()+500,Oo&&cn()))}function qe(e,t){var n=e.callbackNode;lm(e,t);var r=ao(e,e===Re?Me:0);if(r===0)n!==null&&Ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ks(n),t===1)e.tag===0?rh(Hu.bind(null,e)):_d(Hu.bind(null,e)),Jm(function(){!(q&6)&&cn()}),n=null;else{switch(td(r)){case 1:n=Ai;break;case 4:n=Zc;break;case 16:n=oo;break;case 536870912:n=Jc;break;default:n=oo}n=Pf(n,gf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gf(e,t){if(Zl=-1,Jl=0,q&6)throw Error(_(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=ao(e,e===Re?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Po(e,r);else{t=r;var l=q;q|=2;var o=kf();(Re!==e||Me!==t)&&(Tt=null,cr=we()+500,wn(e,t));do try{xh();break}catch(i){Ef(e,i)}while(!0);Qi(),wo.current=o,q=l,xe!==null?t=0:(Re=null,Me=0,t=Le)}if(t!==0){if(t===2&&(l=Wa(e),l!==0&&(r=l,t=gi(e,l))),t===1)throw n=ol,wn(e,0),Gt(e,r),qe(e,we()),n;if(t===6)Gt(e,r);else{if(l=e.current.alternate,!(r&30)&&!wh(l)&&(t=Po(e,r),t===2&&(o=Wa(e),o!==0&&(r=o,t=gi(e,o))),t===1))throw n=ol,wn(e,0),Gt(e,r),qe(e,we()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:hn(e,Ye,Tt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=us+500-we(),10<t)){if(ao(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Za(hn.bind(null,e,Ye,Tt),t);break}hn(e,Ye,Tt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-yt(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sh(r/1960))-r,10<r){e.timeoutHandle=Za(hn.bind(null,e,Ye,Tt),r);break}hn(e,Ye,Tt);break;case 5:hn(e,Ye,Tt);break;default:throw Error(_(329))}}}return qe(e,we()),e.callbackNode===n?gf.bind(null,e):null}function gi(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Po(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Ei(t)),e}function Ei(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function wh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Et(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~ss,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(q&6)throw Error(_(327));rr();var t=ao(e,0);if(!(t&1))return qe(e,we()),null;var n=Po(e,t);if(e.tag!==0&&n===2){var r=Wa(e);r!==0&&(t=r,n=gi(e,r))}if(n===1)throw n=ol,wn(e,0),Gt(e,t),qe(e,we()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Ye,Tt),qe(e,we()),null}function cs(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(cr=we()+500,Oo&&cn())}}function Tn(e){Qt!==null&&Qt.tag===0&&!(q&6)&&rr();var t=q;q|=1;var n=ut.transition,r=ae;try{if(ut.transition=null,ae=1,e)return e()}finally{ae=r,ut.transition=n,q=t,!(q&6)&&cn()}}function ds(){Ze=qn.current,ce(qn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zm(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch($i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:sr(),ce(Ke),ce(je),es();break;case 5:Ji(r);break;case 4:sr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:Ki(r.type._context);break;case 22:case 23:ds()}n=n.return}if(Re=e,xe=e=rn(e.current,null),Me=Ze=t,Le=0,ol=null,ss=bo=Ln=0,Ye=Hr=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}En=null}return e}function Ef(e,t){do{var n=xe;try{if(Qi(),Kl.current=So,ko){for(var r=me.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ko=!1}if(_n=0,Te=_e=me=null,jr=!1,nl=0,is.current=null,n===null||n.return===null){Le=1,ol=t,xe=null;break}e:{var o=e,a=n.return,i=n,s=t;if(t=Me,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=i,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=Tu(a);if(E!==null){E.flags&=-257,Ru(E,a,i,o,t),E.mode&1&&Lu(o,u,t),t=E,s=u;var S=t.updateQueue;if(S===null){var w=new Set;w.add(s),t.updateQueue=w}else S.add(s);break e}else{if(!(t&1)){Lu(o,u,t),fs();break e}s=Error(_(426))}}else if(fe&&i.mode&1){var N=Tu(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ru(N,a,i,o,t),Gi(ur(s,i));break e}}o=s=ur(s,i),Le!==4&&(Le=2),Hr===null?Hr=[o]:Hr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=tf(o,s,t);Su(o,h);break e;case 1:i=s;var c=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(tn===null||!tn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=nf(o,i,t);Su(o,C);break e}}o=o.return}while(o!==null)}wf(n)}catch(R){t=R,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function kf(){var e=wo.current;return wo.current=So,e===null?So:e}function fs(){(Le===0||Le===3||Le===2)&&(Le=4),Re===null||!(Ln&268435455)&&!(bo&268435455)||Gt(Re,Me)}function Po(e,t){var n=q;q|=2;var r=kf();(Re!==e||Me!==t)&&(Tt=null,wn(e,t));do try{Ch();break}catch(l){Ef(e,l)}while(!0);if(Qi(),q=n,wo.current=r,xe!==null)throw Error(_(261));return Re=null,Me=0,Le}function Ch(){for(;xe!==null;)Sf(xe)}function xh(){for(;xe!==null&&!Kp();)Sf(xe)}function Sf(e){var t=xf(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?wf(e):xe=t,is.current=null}function wf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yh(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,xe=null;return}}else if(n=vh(n,t,Ze),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Le===0&&(Le=5)}function hn(e,t,n){var r=ae,l=ut.transition;try{ut.transition=null,ae=1,Ph(e,t,n,r)}finally{ut.transition=l,ae=r}return null}function Ph(e,t,n,r){do rr();while(Qt!==null);if(q&6)throw Error(_(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(om(e,o),e===Re&&(xe=Re=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bl||(bl=!0,Pf(oo,function(){return rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ut.transition,ut.transition=null;var a=ae;ae=1;var i=q;q|=4,is.current=null,Eh(e,n),vf(n,e),$m(Xa),io=!!Ka,Xa=Ka=null,e.current=n,kh(n),Xp(),q=i,ae=a,ut.transition=o}else e.current=n;if(bl&&(bl=!1,Qt=e,xo=l),o=e.pendingLanes,o===0&&(tn=null),Jp(n.stateNode),qe(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Co)throw Co=!1,e=vi,vi=null,e;return xo&1&&e.tag!==0&&rr(),o=e.pendingLanes,o&1?e===yi?Ur++:(Ur=0,yi=e):Ur=0,cn(),null}function rr(){if(Qt!==null){var e=td(xo),t=ut.transition,n=ae;try{if(ut.transition=null,ae=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,xo=0,q&6)throw Error(_(331));var l=q;for(q|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(A=u;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:br(8,f,o)}var d=f.child;if(d!==null)d.return=f,A=d;else for(;A!==null;){f=A;var m=f.sibling,E=f.return;if(pf(f),f===u){A=null;break}if(m!==null){m.return=E,A=m;break}A=E}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:br(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,A=h;break e}A=o.return}}var c=e.current;for(A=c;A!==null;){a=A;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,A=v;else e:for(a=c;A!==null;){if(i=A,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:jo(9,i)}}catch(R){Ee(i,i.return,R)}if(i===a){A=null;break e}var C=i.sibling;if(C!==null){C.return=i.return,A=C;break e}A=i.return}}if(q=l,cn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Io,e)}catch{}r=!0}return r}finally{ae=n,ut.transition=t}}return!1}function Uu(e,t,n){t=ur(n,t),t=tf(e,t,1),e=en(e,t,1),t=Ue(),e!==null&&(cl(e,1,t),qe(e,t))}function Ee(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=ur(n,e),e=nf(t,e,1),t=en(t,e,1),e=Ue(),t!==null&&(cl(t,1,e),qe(t,e));break}}t=t.return}}function _h(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Me&n)===n&&(Le===4||Le===3&&(Me&130023424)===Me&&500>we()-us?wn(e,0):ss|=n),qe(e,t)}function Cf(e,t){t===0&&(e.mode&1?(t=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):t=1);var n=Ue();e=At(e,t),e!==null&&(cl(e,t,n),qe(e,n))}function Lh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function Th(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Cf(e,n)}var xf;xf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,hh(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,fe&&t.flags&1048576&&Ld(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ql(e,t),e=t.pendingProps;var l=or(t,je.current);nr(t,n),l=ns(null,t,r,e,l,n);var o=rs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,po(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qi(t),l.updater=zo,t.stateNode=l,l._reactInternals=t,oi(t,r,e,n),t=si(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&Wi(t),He(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ql(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Nh(r),e=pt(r,e),l){case 0:t=ii(null,t,r,e,n);break e;case 1:t=Bu(null,t,r,e,n);break e;case 11:t=Nu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,pt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),ii(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),Bu(e,t,r,l,n);case 3:e:{if(af(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Md(e,t),go(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=ur(Error(_(423)),t),t=Mu(e,t,r,n,l);break e}else if(r!==l){l=ur(Error(_(424)),t),t=Mu(e,t,r,n,l);break e}else for(et=Jt(t.stateNode.containerInfo.firstChild),tt=t,fe=!0,vt=null,n=Id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===l){t=Ot(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Dd(t),e===null&&ni(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,qa(r,l)?a=null:o!==null&&qa(r,o)&&(t.flags|=32),of(e,t),He(e,t,a,n),t.child;case 6:return e===null&&ni(t),null;case 13:return sf(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),Nu(e,t,r,l,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,se(vo,r._currentValue),r._currentValue=a,o!==null)if(Et(o.value,a)){if(o.children===l.children&&!Ke.current){t=Ot(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){a=o.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ri(o.return,n,t),i.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,i=a.alternate,i!==null&&(i.lanes|=n),ri(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}He(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,nr(t,n),l=ct(l),r=r(l),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,l=pt(r,t.pendingProps),l=pt(r.type,l),Iu(e,t,r,l,n);case 15:return rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),ql(e,t),t.tag=1,Xe(r)?(e=!0,po(t)):e=!1,nr(t,n),ef(t,r,l),oi(t,r,l,n),si(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return lf(e,t,n)}throw Error(_(156,t.tag))};function Pf(e,t){return qc(e,t)}function Rh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Rh(e,t,n,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nh(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bi)return 11;if(e===Mi)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")ps(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hn:return Cn(n.children,l,o,t);case Ii:a=8,l|=8;break;case Ra:return e=st(12,n,t,l|2),e.elementType=Ra,e.lanes=o,e;case Na:return e=st(13,n,t,l),e.elementType=Na,e.lanes=o,e;case Ia:return e=st(19,n,t,l),e.elementType=Ia,e.lanes=o,e;case Dc:return Ho(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bc:a=10;break e;case Mc:a=9;break e;case Bi:a=11;break e;case Mi:a=14;break e;case Vt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=st(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Cn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=st(22,e,r,t),e.elementType=Dc,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Ca(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ih(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ms(e,t,n,r,l,o,a,i,s){return e=new Ih(e,t,n,i,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=st(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qi(o),e}function Bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _f(e){if(!e)return an;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Pd(e,n,t)}return t}function Lf(e,t,n,r,l,o,a,i,s){return e=ms(n,r,!0,e,l,o,a,i,s),e.context=_f(null),n=e.current,r=Ue(),l=nn(n),o=Bt(r,l),o.callback=t??null,en(n,o,l),e.current.lanes=l,cl(e,l,r),qe(e,r),e}function Uo(e,t,n,r){var l=t.current,o=Ue(),a=nn(l);return n=_f(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(l,t,a),e!==null&&(gt(e,l,a,o),Ql(e,l,a)),a}function _o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hs(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}function Mh(){return null}var Tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function vs(e){this._internalRoot=e}Vo.prototype.render=vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Uo(e,t,null,null)};Vo.prototype.unmount=vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Uo(null,e,null,null)}),t[Dt]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&ad(e)}};function ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Dh(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var u=_o(a);o.call(u)}}var a=Lf(t,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=a,e[Dt]=a.current,qr(e.nodeType===8?e.parentNode:e),Tn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var u=_o(s);i.call(u)}}var s=ms(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Dt]=s.current,qr(e.nodeType===8?e.parentNode:e),Tn(function(){Uo(t,s,n,r)}),s}function $o(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var i=l;l=function(){var s=_o(a);i.call(s)}}Uo(t,a,e,l)}else a=Dh(n,t,e,l,r);return _o(a)}nd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Oi(t,n|1),qe(t,we()),!(q&6)&&(cr=we()+500,cn()))}break;case 13:Tn(function(){var r=At(e,1);if(r!==null){var l=Ue();gt(r,e,1,l)}}),hs(e,1)}};Fi=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ue();gt(t,e,134217728,n)}hs(e,134217728)}};rd=function(e){if(e.tag===13){var t=nn(e),n=At(e,t);if(n!==null){var r=Ue();gt(n,e,t,r)}hs(e,t)}};ld=function(){return ae};od=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};Ha=function(e,t,n){switch(t){case"input":if(Da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ao(r);if(!l)throw Error(_(90));Oc(r),Da(r,l)}}}break;case"textarea":zc(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};$c=cs;Gc=Tn;var Ah={usingClientEntryPoint:!1,Events:[fl,$n,Ao,Vc,Wc,cs]},Pr={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oh={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kc(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||Mh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{Io=Hl.inject(Oh),xt=Hl}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ah;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ys(t))throw Error(_(200));return Bh(e,t,null,n)};rt.createRoot=function(e,t){if(!ys(e))throw Error(_(299));var n=!1,r="",l=Tf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ms(e,1,!1,null,null,n,!1,r,l),e[Dt]=t.current,qr(e.nodeType===8?e.parentNode:e),new vs(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Kc(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return Tn(e)};rt.hydrate=function(e,t,n){if(!Wo(t))throw Error(_(200));return $o(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!ys(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=Tf;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,l,!1,o,a),e[Dt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Vo(t)};rt.render=function(e,t,n){if(!Wo(t))throw Error(_(200));return $o(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Wo(e))throw Error(_(40));return e._reactRootContainer?(Tn(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};rt.unstable_batchedUpdates=cs;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return $o(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function Rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rf)}catch(e){console.error(e)}}Rf(),Tc.exports=rt;var gs=Tc.exports;const Fh=vc(gs),zh=hc({__proto__:null,default:Fh},[gs]);var $u=gs;La.createRoot=$u.createRoot,La.hydrateRoot=$u.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}var Se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Se||(Se={}));const Gu="popstate";function jh(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:a,hash:i}=r.location;return al("",{pathname:o,search:a,hash:i},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:ml(l)}return Hh(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bh(){return Math.random().toString(36).substr(2,8)}function Yu(e,t){return{usr:e.state,key:e.key,idx:t}}function al(e,t,n,r){return n===void 0&&(n=null),de({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zt(t):t,{state:n,key:t&&t.key||r||bh()})}function ml(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hh(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,a=l.history,i=Se.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(de({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){i=Se.Pop;let N=f(),h=N==null?null:N-u;u=N,s&&s({action:i,location:w.location,delta:h})}function m(N,h){i=Se.Push;let c=al(w.location,N,h);u=f()+1;let v=Yu(c,u),C=w.createHref(c);try{a.pushState(v,"",C)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;l.location.assign(C)}o&&s&&s({action:i,location:w.location,delta:1})}function E(N,h){i=Se.Replace;let c=al(w.location,N,h);u=f();let v=Yu(c,u),C=w.createHref(c);a.replaceState(v,"",C),o&&s&&s({action:i,location:w.location,delta:0})}function S(N){let h=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof N=="string"?N:ml(N);return c=c.replace(/ $/,"%20"),Y(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let w={get action(){return i},get location(){return e(l,a)},listen(N){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Gu,d),s=N,()=>{l.removeEventListener(Gu,d),s=null}},createHref(N){return t(l,N)},createURL:S,encodeLocation(N){let h=S(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:E,go(N){return a.go(N)}};return w}var oe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(oe||(oe={}));const Uh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Vh(e){return e.index===!0}function Lo(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((l,o)=>{let a=[...n,String(o)],i=typeof l.id=="string"?l.id:a.join("-");if(Y(l.index!==!0||!l.children,"Cannot specify children on an index route"),Y(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),Vh(l)){let s=de({},l,t(l),{id:i});return r[i]=s,s}else{let s=de({},l,t(l),{id:i,children:void 0});return r[i]=s,l.children&&(s.children=Lo(l.children,t,a,r)),s}})}function vn(e,t,n){return n===void 0&&(n="/"),to(e,t,n,!1)}function to(e,t,n,r){let l=typeof t=="string"?zt(t):t,o=hl(l.pathname||"/",n);if(o==null)return null;let a=Nf(e);$h(a);let i=null;for(let s=0;i==null&&s<a.length;++s){let u=nv(o);i=ev(a[s],u,r)}return i}function Wh(e,t){let{route:n,pathname:r,params:l}=e;return{id:n.id,pathname:r,params:l,data:t[n.id],handle:n.handle}}function Nf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,a,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=ln([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nf(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Zh(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))l(o,a);else for(let s of If(o.path))l(o,a,s)}),t}function If(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let a=If(r.join("/")),i=[];return i.push(...a.map(s=>s===""?o:[o,s].join("/"))),l&&i.push(...a),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function $h(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gh=/^:[\w-]+$/,Yh=3,Qh=2,Kh=1,Xh=10,qh=-2,Qu=e=>e==="*";function Zh(e,t){let n=e.split("/"),r=n.length;return n.some(Qu)&&(r+=qh),t&&(r+=Qh),n.filter(l=>!Qu(l)).reduce((l,o)=>l+(Gh.test(o)?Yh:o===""?Kh:Xh),r)}function Jh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function ev(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,l={},o="/",a=[];for(let i=0;i<r.length;++i){let s=r[i],u=i===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=Ku({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),m=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Ku({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(l,d.params),a.push({params:l,pathname:ln([o,d.pathname]),pathnameBase:av(ln([o,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(o=ln([o,d.pathnameBase]))}return a}function Ku(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tv(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],a=o.replace(/(.)\/+$/,"$1"),i=l.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:E}=f;if(m==="*"){let w=i[d]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const S=i[d];return E&&!S?u[m]=void 0:u[m]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function tv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function nv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const rv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lv=e=>rv.test(e);function ov(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?zt(e):e,o;if(n)if(lv(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Rn(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Xu(n.substring(1),"/"):o=Xu(n,t)}else o=t;return{pathname:o,search:iv(r),hash:sv(l)}}function Xu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function xa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Es(e,t){let n=Bf(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ks(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=zt(e):(l=de({},e),Y(!l.pathname||!l.pathname.includes("?"),xa("?","pathname","search",l)),Y(!l.pathname||!l.pathname.includes("#"),xa("#","pathname","hash",l)),Y(!l.search||!l.search.includes("#"),xa("#","search","hash",l)));let o=e===""||l.pathname==="",a=o?"/":l.pathname,i;if(a==null)i=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;l.pathname=m.join("/")}i=d>=0?t[d]:"/"}let s=ov(l,i),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const ln=e=>e.join("/").replace(/\/\/+/g,"/"),av=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class To{constructor(t,n,r,l){l===void 0&&(l=!1),this.status=t,this.statusText=n||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function il(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mf=["post","put","patch","delete"],uv=new Set(Mf),cv=["get",...Mf],dv=new Set(cv),fv=new Set([301,302,303,307,308]),pv=new Set([307,308]),Pa={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_r={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ss=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hv=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Df="remix-router-transitions";function vv(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Y(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let p=e.detectErrorBoundary;l=g=>({hasErrorBoundary:p(g)})}else l=hv;let o={},a=Lo(e.routes,l,void 0,o),i,s=e.basename||"/",u=e.dataStrategy||kv,f=e.patchRoutesOnNavigation,d=de({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,E=new Set,S=null,w=null,N=null,h=e.hydrationData!=null,c=vn(a,e.history.location,s),v=!1,C=null;if(c==null&&!f){let p=Ge(404,{pathname:e.history.location.pathname}),{matches:g,route:k}=ic(a);c=g,C={[k.id]:p}}c&&!e.hydrationData&&Sl(c,a,e.history.location.pathname).active&&(c=null);let R;if(c)if(c.some(p=>p.route.lazy))R=!1;else if(!c.some(p=>p.route.loader))R=!0;else if(d.v7_partialHydration){let p=e.hydrationData?e.hydrationData.loaderData:null,g=e.hydrationData?e.hydrationData.errors:null;if(g){let k=c.findIndex(x=>g[x.route.id]!==void 0);R=c.slice(0,k+1).every(x=>!Si(x.route,p,g))}else R=c.every(k=>!Si(k.route,p,g))}else R=e.hydrationData!=null;else if(R=!1,c=[],d.v7_partialHydration){let p=Sl(null,a,e.history.location.pathname);p.active&&p.matches&&(v=!0,c=p.matches)}let D,y={historyAction:e.history.action,location:e.history.location,matches:c,initialized:R,navigation:Pa,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},P=Se.Pop,U=!1,I,ee=!1,le=new Map,W=null,X=!1,re=!1,ke=[],$e=new Set,L=new Map,b=0,V=-1,Z=new Map,te=new Set,Ne=new Map,Ae=new Map,Pe=new Set,ve=new Map,ot=new Map,gl;function Yf(){if(m=e.history.listen(p=>{let{action:g,location:k,delta:x}=p;if(gl){gl(),gl=void 0;return}Rn(ot.size===0||x!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=Ms({currentLocation:y.location,nextLocation:k,historyAction:g});if(B&&x!=null){let H=new Promise($=>{gl=$});e.history.go(x*-1),kl(B,{state:"blocked",location:k,proceed(){kl(B,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),H.then(()=>e.history.go(x))},reset(){let $=new Map(y.blockers);$.set(B,_r),be({blockers:$})}});return}return dn(g,k)}),n){Dv(t,le);let p=()=>Av(t,le);t.addEventListener("pagehide",p),W=()=>t.removeEventListener("pagehide",p)}return y.initialized||dn(Se.Pop,y.location,{initialHydration:!0}),D}function Qf(){m&&m(),W&&W(),E.clear(),I&&I.abort(),y.fetchers.forEach((p,g)=>El(g)),y.blockers.forEach((p,g)=>Bs(g))}function Kf(p){return E.add(p),()=>E.delete(p)}function be(p,g){g===void 0&&(g={}),y=de({},y,p);let k=[],x=[];d.v7_fetcherPersist&&y.fetchers.forEach((B,H)=>{B.state==="idle"&&(Pe.has(H)?x.push(H):k.push(H))}),Pe.forEach(B=>{!y.fetchers.has(B)&&!L.has(B)&&x.push(B)}),[...E].forEach(B=>B(y,{deletedFetchers:x,viewTransitionOpts:g.viewTransitionOpts,flushSync:g.flushSync===!0})),d.v7_fetcherPersist?(k.forEach(B=>y.fetchers.delete(B)),x.forEach(B=>El(B))):x.forEach(B=>Pe.delete(B))}function Mn(p,g,k){var x,B;let{flushSync:H}=k===void 0?{}:k,$=y.actionData!=null&&y.navigation.formMethod!=null&&ht(y.navigation.formMethod)&&y.navigation.state==="loading"&&((x=p.state)==null?void 0:x._isRedirect)!==!0,F;g.actionData?Object.keys(g.actionData).length>0?F=g.actionData:F=null:$?F=y.actionData:F=null;let z=g.loaderData?oc(y.loaderData,g.loaderData,g.matches||[],g.errors):y.loaderData,O=y.blockers;O.size>0&&(O=new Map(O),O.forEach((K,Ie)=>O.set(Ie,_r)));let j=U===!0||y.navigation.formMethod!=null&&ht(y.navigation.formMethod)&&((B=p.state)==null?void 0:B._isRedirect)!==!0;i&&(a=i,i=void 0),X||P===Se.Pop||(P===Se.Push?e.history.push(p,p.state):P===Se.Replace&&e.history.replace(p,p.state));let G;if(P===Se.Pop){let K=le.get(y.location.pathname);K&&K.has(p.pathname)?G={currentLocation:y.location,nextLocation:p}:le.has(p.pathname)&&(G={currentLocation:p,nextLocation:y.location})}else if(ee){let K=le.get(y.location.pathname);K?K.add(p.pathname):(K=new Set([p.pathname]),le.set(y.location.pathname,K)),G={currentLocation:y.location,nextLocation:p}}be(de({},g,{actionData:F,loaderData:z,historyAction:P,location:p,initialized:!0,navigation:Pa,revalidation:"idle",restoreScrollPosition:As(p,g.matches||y.matches),preventScrollReset:j,blockers:O}),{viewTransitionOpts:G,flushSync:H===!0}),P=Se.Pop,U=!1,ee=!1,X=!1,re=!1,ke=[]}async function Ps(p,g){if(typeof p=="number"){e.history.go(p);return}let k=ki(y.location,y.matches,s,d.v7_prependBasename,p,d.v7_relativeSplatPath,g==null?void 0:g.fromRouteId,g==null?void 0:g.relative),{path:x,submission:B,error:H}=qu(d.v7_normalizeFormMethod,!1,k,g),$=y.location,F=al(y.location,x,g&&g.state);F=de({},F,e.history.encodeLocation(F));let z=g&&g.replace!=null?g.replace:void 0,O=Se.Push;z===!0?O=Se.Replace:z===!1||B!=null&&ht(B.formMethod)&&B.formAction===y.location.pathname+y.location.search&&(O=Se.Replace);let j=g&&"preventScrollReset"in g?g.preventScrollReset===!0:void 0,G=(g&&g.flushSync)===!0,K=Ms({currentLocation:$,nextLocation:F,historyAction:O});if(K){kl(K,{state:"blocked",location:F,proceed(){kl(K,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),Ps(p,g)},reset(){let Ie=new Map(y.blockers);Ie.set(K,_r),be({blockers:Ie})}});return}return await dn(O,F,{submission:B,pendingError:H,preventScrollReset:j,replace:g&&g.replace,enableViewTransition:g&&g.viewTransition,flushSync:G})}function Xf(){if(Qo(),be({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){dn(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}dn(P||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation,enableViewTransition:ee===!0})}}async function dn(p,g,k){I&&I.abort(),I=null,P=p,X=(k&&k.startUninterruptedRevalidation)===!0,ap(y.location,y.matches),U=(k&&k.preventScrollReset)===!0,ee=(k&&k.enableViewTransition)===!0;let x=i||a,B=k&&k.overrideNavigation,H=k!=null&&k.initialHydration&&y.matches&&y.matches.length>0&&!v?y.matches:vn(x,g,s),$=(k&&k.flushSync)===!0;if(H&&y.initialized&&!re&&_v(y.location,g)&&!(k&&k.submission&&ht(k.submission.formMethod))){Mn(g,{matches:H},{flushSync:$});return}let F=Sl(H,x,g.pathname);if(F.active&&F.matches&&(H=F.matches),!H){let{error:ie,notFoundMatches:ne,route:ye}=Ko(g.pathname);Mn(g,{matches:ne,loaderData:{},errors:{[ye.id]:ie}},{flushSync:$});return}I=new AbortController;let z=zn(e.history,g,I.signal,k&&k.submission),O;if(k&&k.pendingError)O=[yn(H).route.id,{type:oe.error,error:k.pendingError}];else if(k&&k.submission&&ht(k.submission.formMethod)){let ie=await qf(z,g,k.submission,H,F.active,{replace:k.replace,flushSync:$});if(ie.shortCircuited)return;if(ie.pendingActionResult){let[ne,ye]=ie.pendingActionResult;if(Je(ye)&&il(ye.error)&&ye.error.status===404){I=null,Mn(g,{matches:ie.matches,loaderData:{},errors:{[ne]:ye.error}});return}}H=ie.matches||H,O=ie.pendingActionResult,B=_a(g,k.submission),$=!1,F.active=!1,z=zn(e.history,z.url,z.signal)}let{shortCircuited:j,matches:G,loaderData:K,errors:Ie}=await Zf(z,g,H,F.active,B,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,$,O);j||(I=null,Mn(g,de({matches:G||H},ac(O),{loaderData:K,errors:Ie})))}async function qf(p,g,k,x,B,H){H===void 0&&(H={}),Qo();let $=Bv(g,k);if(be({navigation:$},{flushSync:H.flushSync===!0}),B){let O=await wl(x,g.pathname,p.signal);if(O.type==="aborted")return{shortCircuited:!0};if(O.type==="error"){let j=yn(O.partialMatches).route.id;return{matches:O.partialMatches,pendingActionResult:[j,{type:oe.error,error:O.error}]}}else if(O.matches)x=O.matches;else{let{notFoundMatches:j,error:G,route:K}=Ko(g.pathname);return{matches:j,pendingActionResult:[K.id,{type:oe.error,error:G}]}}}let F,z=Mr(x,g);if(!z.route.action&&!z.route.lazy)F={type:oe.error,error:Ge(405,{method:p.method,pathname:g.pathname,routeId:z.route.id})};else if(F=(await mr("action",y,p,[z],x,null))[z.route.id],p.signal.aborted)return{shortCircuited:!0};if(Sn(F)){let O;return H&&H.replace!=null?O=H.replace:O=nc(F.response.headers.get("Location"),new URL(p.url),s)===y.location.pathname+y.location.search,await fn(p,F,!0,{submission:k,replace:O}),{shortCircuited:!0}}if(Kt(F))throw Ge(400,{type:"defer-action"});if(Je(F)){let O=yn(x,z.route.id);return(H&&H.replace)!==!0&&(P=Se.Push),{matches:x,pendingActionResult:[O.route.id,F]}}return{matches:x,pendingActionResult:[z.route.id,F]}}async function Zf(p,g,k,x,B,H,$,F,z,O,j){let G=B||_a(g,H),K=H||$||uc(G),Ie=!X&&(!d.v7_partialHydration||!z);if(x){if(Ie){let ge=_s(j);be(de({navigation:G},ge!==void 0?{actionData:ge}:{}),{flushSync:O})}let J=await wl(k,g.pathname,p.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let ge=yn(J.partialMatches).route.id;return{matches:J.partialMatches,loaderData:{},errors:{[ge]:J.error}}}else if(J.matches)k=J.matches;else{let{error:ge,notFoundMatches:An,route:yr}=Ko(g.pathname);return{matches:An,loaderData:{},errors:{[yr.id]:ge}}}}let ie=i||a,[ne,ye]=Ju(e.history,y,k,K,g,d.v7_partialHydration&&z===!0,d.v7_skipActionErrorRevalidation,re,ke,$e,Pe,Ne,te,ie,s,j);if(Xo(J=>!(k&&k.some(ge=>ge.route.id===J))||ne&&ne.some(ge=>ge.route.id===J)),V=++b,ne.length===0&&ye.length===0){let J=Ns();return Mn(g,de({matches:k,loaderData:{},errors:j&&Je(j[1])?{[j[0]]:j[1].error}:null},ac(j),J?{fetchers:new Map(y.fetchers)}:{}),{flushSync:O}),{shortCircuited:!0}}if(Ie){let J={};if(!x){J.navigation=G;let ge=_s(j);ge!==void 0&&(J.actionData=ge)}ye.length>0&&(J.fetchers=Jf(ye)),be(J,{flushSync:O})}ye.forEach(J=>{bt(J.key),J.controller&&L.set(J.key,J.controller)});let Dn=()=>ye.forEach(J=>bt(J.key));I&&I.signal.addEventListener("abort",Dn);let{loaderResults:hr,fetcherResults:Lt}=await Ls(y,k,ne,ye,p);if(p.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",Dn),ye.forEach(J=>L.delete(J.key));let kt=Ul(hr);if(kt)return await fn(p,kt.result,!0,{replace:F}),{shortCircuited:!0};if(kt=Ul(Lt),kt)return te.add(kt.key),await fn(p,kt.result,!0,{replace:F}),{shortCircuited:!0};let{loaderData:qo,errors:vr}=lc(y,k,hr,j,ye,Lt,ve);ve.forEach((J,ge)=>{J.subscribe(An=>{(An||J.done)&&ve.delete(ge)})}),d.v7_partialHydration&&z&&y.errors&&(vr=de({},y.errors,vr));let pn=Ns(),Cl=Is(V),xl=pn||Cl||ye.length>0;return de({matches:k,loaderData:qo,errors:vr},xl?{fetchers:new Map(y.fetchers)}:{})}function _s(p){if(p&&!Je(p[1]))return{[p[0]]:p[1].data};if(y.actionData)return Object.keys(y.actionData).length===0?null:y.actionData}function Jf(p){return p.forEach(g=>{let k=y.fetchers.get(g.key),x=Lr(void 0,k?k.data:void 0);y.fetchers.set(g.key,x)}),new Map(y.fetchers)}function ep(p,g,k,x){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");bt(p);let B=(x&&x.flushSync)===!0,H=i||a,$=ki(y.location,y.matches,s,d.v7_prependBasename,k,d.v7_relativeSplatPath,g,x==null?void 0:x.relative),F=vn(H,$,s),z=Sl(F,H,$);if(z.active&&z.matches&&(F=z.matches),!F){_t(p,g,Ge(404,{pathname:$}),{flushSync:B});return}let{path:O,submission:j,error:G}=qu(d.v7_normalizeFormMethod,!0,$,x);if(G){_t(p,g,G,{flushSync:B});return}let K=Mr(F,O),Ie=(x&&x.preventScrollReset)===!0;if(j&&ht(j.formMethod)){tp(p,g,O,K,F,z.active,B,Ie,j);return}Ne.set(p,{routeId:g,path:O}),np(p,g,O,K,F,z.active,B,Ie,j)}async function tp(p,g,k,x,B,H,$,F,z){Qo(),Ne.delete(p);function O(Ce){if(!Ce.route.action&&!Ce.route.lazy){let On=Ge(405,{method:z.formMethod,pathname:k,routeId:g});return _t(p,g,On,{flushSync:$}),!0}return!1}if(!H&&O(x))return;let j=y.fetchers.get(p);jt(p,Mv(z,j),{flushSync:$});let G=new AbortController,K=zn(e.history,k,G.signal,z);if(H){let Ce=await wl(B,new URL(K.url).pathname,K.signal,p);if(Ce.type==="aborted")return;if(Ce.type==="error"){_t(p,g,Ce.error,{flushSync:$});return}else if(Ce.matches){if(B=Ce.matches,x=Mr(B,k),O(x))return}else{_t(p,g,Ge(404,{pathname:k}),{flushSync:$});return}}L.set(p,G);let Ie=b,ne=(await mr("action",y,K,[x],B,p))[x.route.id];if(K.signal.aborted){L.get(p)===G&&L.delete(p);return}if(d.v7_fetcherPersist&&Pe.has(p)){if(Sn(ne)||Je(ne)){jt(p,Ut(void 0));return}}else{if(Sn(ne))if(L.delete(p),V>Ie){jt(p,Ut(void 0));return}else return te.add(p),jt(p,Lr(z)),fn(K,ne,!1,{fetcherSubmission:z,preventScrollReset:F});if(Je(ne)){_t(p,g,ne.error);return}}if(Kt(ne))throw Ge(400,{type:"defer-action"});let ye=y.navigation.location||y.location,Dn=zn(e.history,ye,G.signal),hr=i||a,Lt=y.navigation.state!=="idle"?vn(hr,y.navigation.location,s):y.matches;Y(Lt,"Didn't find any matches after fetcher action");let kt=++b;Z.set(p,kt);let qo=Lr(z,ne.data);y.fetchers.set(p,qo);let[vr,pn]=Ju(e.history,y,Lt,z,ye,!1,d.v7_skipActionErrorRevalidation,re,ke,$e,Pe,Ne,te,hr,s,[x.route.id,ne]);pn.filter(Ce=>Ce.key!==p).forEach(Ce=>{let On=Ce.key,Os=y.fetchers.get(On),up=Lr(void 0,Os?Os.data:void 0);y.fetchers.set(On,up),bt(On),Ce.controller&&L.set(On,Ce.controller)}),be({fetchers:new Map(y.fetchers)});let Cl=()=>pn.forEach(Ce=>bt(Ce.key));G.signal.addEventListener("abort",Cl);let{loaderResults:xl,fetcherResults:J}=await Ls(y,Lt,vr,pn,Dn);if(G.signal.aborted)return;G.signal.removeEventListener("abort",Cl),Z.delete(p),L.delete(p),pn.forEach(Ce=>L.delete(Ce.key));let ge=Ul(xl);if(ge)return fn(Dn,ge.result,!1,{preventScrollReset:F});if(ge=Ul(J),ge)return te.add(ge.key),fn(Dn,ge.result,!1,{preventScrollReset:F});let{loaderData:An,errors:yr}=lc(y,Lt,xl,void 0,pn,J,ve);if(y.fetchers.has(p)){let Ce=Ut(ne.data);y.fetchers.set(p,Ce)}Is(kt),y.navigation.state==="loading"&&kt>V?(Y(P,"Expected pending action"),I&&I.abort(),Mn(y.navigation.location,{matches:Lt,loaderData:An,errors:yr,fetchers:new Map(y.fetchers)})):(be({errors:yr,loaderData:oc(y.loaderData,An,Lt,yr),fetchers:new Map(y.fetchers)}),re=!1)}async function np(p,g,k,x,B,H,$,F,z){let O=y.fetchers.get(p);jt(p,Lr(z,O?O.data:void 0),{flushSync:$});let j=new AbortController,G=zn(e.history,k,j.signal);if(H){let ne=await wl(B,new URL(G.url).pathname,G.signal,p);if(ne.type==="aborted")return;if(ne.type==="error"){_t(p,g,ne.error,{flushSync:$});return}else if(ne.matches)B=ne.matches,x=Mr(B,k);else{_t(p,g,Ge(404,{pathname:k}),{flushSync:$});return}}L.set(p,j);let K=b,ie=(await mr("loader",y,G,[x],B,p))[x.route.id];if(Kt(ie)&&(ie=await ws(ie,G.signal,!0)||ie),L.get(p)===j&&L.delete(p),!G.signal.aborted){if(Pe.has(p)){jt(p,Ut(void 0));return}if(Sn(ie))if(V>K){jt(p,Ut(void 0));return}else{te.add(p),await fn(G,ie,!1,{preventScrollReset:F});return}if(Je(ie)){_t(p,g,ie.error);return}Y(!Kt(ie),"Unhandled fetcher deferred data"),jt(p,Ut(ie.data))}}async function fn(p,g,k,x){let{submission:B,fetcherSubmission:H,preventScrollReset:$,replace:F}=x===void 0?{}:x;g.response.headers.has("X-Remix-Revalidate")&&(re=!0);let z=g.response.headers.get("Location");Y(z,"Expected a Location header on the redirect Response"),z=nc(z,new URL(p.url),s);let O=al(y.location,z,{_isRedirect:!0});if(n){let ne=!1;if(g.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(Ss.test(z)){const ye=e.history.createURL(z);ne=ye.origin!==t.location.origin||hl(ye.pathname,s)==null}if(ne){F?t.location.replace(z):t.location.assign(z);return}}I=null;let j=F===!0||g.response.headers.has("X-Remix-Replace")?Se.Replace:Se.Push,{formMethod:G,formAction:K,formEncType:Ie}=y.navigation;!B&&!H&&G&&K&&Ie&&(B=uc(y.navigation));let ie=B||H;if(pv.has(g.response.status)&&ie&&ht(ie.formMethod))await dn(j,O,{submission:de({},ie,{formAction:z}),preventScrollReset:$||U,enableViewTransition:k?ee:void 0});else{let ne=_a(O,B);await dn(j,O,{overrideNavigation:ne,fetcherSubmission:H,preventScrollReset:$||U,enableViewTransition:k?ee:void 0})}}async function mr(p,g,k,x,B,H){let $,F={};try{$=await Sv(u,p,g,k,x,B,H,o,l)}catch(z){return x.forEach(O=>{F[O.route.id]={type:oe.error,error:z}}),F}for(let[z,O]of Object.entries($))if(Lv(O)){let j=O.result;F[z]={type:oe.redirect,response:xv(j,k,z,B,s,d.v7_relativeSplatPath)}}else F[z]=await Cv(O);return F}async function Ls(p,g,k,x,B){let H=p.matches,$=mr("loader",p,B,k,g,null),F=Promise.all(x.map(async j=>{if(j.matches&&j.match&&j.controller){let K=(await mr("loader",p,zn(e.history,j.path,j.controller.signal),[j.match],j.matches,j.key))[j.match.route.id];return{[j.key]:K}}else return Promise.resolve({[j.key]:{type:oe.error,error:Ge(404,{pathname:j.path})}})})),z=await $,O=(await F).reduce((j,G)=>Object.assign(j,G),{});return await Promise.all([Nv(g,z,B.signal,H,p.loaderData),Iv(g,O,x)]),{loaderResults:z,fetcherResults:O}}function Qo(){re=!0,ke.push(...Xo()),Ne.forEach((p,g)=>{L.has(g)&&$e.add(g),bt(g)})}function jt(p,g,k){k===void 0&&(k={}),y.fetchers.set(p,g),be({fetchers:new Map(y.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function _t(p,g,k,x){x===void 0&&(x={});let B=yn(y.matches,g);El(p),be({errors:{[B.route.id]:k},fetchers:new Map(y.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function Ts(p){return Ae.set(p,(Ae.get(p)||0)+1),Pe.has(p)&&Pe.delete(p),y.fetchers.get(p)||mv}function El(p){let g=y.fetchers.get(p);L.has(p)&&!(g&&g.state==="loading"&&Z.has(p))&&bt(p),Ne.delete(p),Z.delete(p),te.delete(p),d.v7_fetcherPersist&&Pe.delete(p),$e.delete(p),y.fetchers.delete(p)}function rp(p){let g=(Ae.get(p)||0)-1;g<=0?(Ae.delete(p),Pe.add(p),d.v7_fetcherPersist||El(p)):Ae.set(p,g),be({fetchers:new Map(y.fetchers)})}function bt(p){let g=L.get(p);g&&(g.abort(),L.delete(p))}function Rs(p){for(let g of p){let k=Ts(g),x=Ut(k.data);y.fetchers.set(g,x)}}function Ns(){let p=[],g=!1;for(let k of te){let x=y.fetchers.get(k);Y(x,"Expected fetcher: "+k),x.state==="loading"&&(te.delete(k),p.push(k),g=!0)}return Rs(p),g}function Is(p){let g=[];for(let[k,x]of Z)if(x<p){let B=y.fetchers.get(k);Y(B,"Expected fetcher: "+k),B.state==="loading"&&(bt(k),Z.delete(k),g.push(k))}return Rs(g),g.length>0}function lp(p,g){let k=y.blockers.get(p)||_r;return ot.get(p)!==g&&ot.set(p,g),k}function Bs(p){y.blockers.delete(p),ot.delete(p)}function kl(p,g){let k=y.blockers.get(p)||_r;Y(k.state==="unblocked"&&g.state==="blocked"||k.state==="blocked"&&g.state==="blocked"||k.state==="blocked"&&g.state==="proceeding"||k.state==="blocked"&&g.state==="unblocked"||k.state==="proceeding"&&g.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+g.state);let x=new Map(y.blockers);x.set(p,g),be({blockers:x})}function Ms(p){let{currentLocation:g,nextLocation:k,historyAction:x}=p;if(ot.size===0)return;ot.size>1&&Rn(!1,"A router only supports one blocker at a time");let B=Array.from(ot.entries()),[H,$]=B[B.length-1],F=y.blockers.get(H);if(!(F&&F.state==="proceeding")&&$({currentLocation:g,nextLocation:k,historyAction:x}))return H}function Ko(p){let g=Ge(404,{pathname:p}),k=i||a,{matches:x,route:B}=ic(k);return Xo(),{notFoundMatches:x,route:B,error:g}}function Xo(p){let g=[];return ve.forEach((k,x)=>{(!p||p(x))&&(k.cancel(),g.push(x),ve.delete(x))}),g}function op(p,g,k){if(S=p,N=g,w=k||null,!h&&y.navigation===Pa){h=!0;let x=As(y.location,y.matches);x!=null&&be({restoreScrollPosition:x})}return()=>{S=null,N=null,w=null}}function Ds(p,g){return w&&w(p,g.map(x=>Wh(x,y.loaderData)))||p.key}function ap(p,g){if(S&&N){let k=Ds(p,g);S[k]=N()}}function As(p,g){if(S){let k=Ds(p,g),x=S[k];if(typeof x=="number")return x}return null}function Sl(p,g,k){if(f)if(p){if(Object.keys(p[0].params).length>0)return{active:!0,matches:to(g,k,s,!0)}}else return{active:!0,matches:to(g,k,s,!0)||[]};return{active:!1,matches:null}}async function wl(p,g,k,x){if(!f)return{type:"success",matches:p};let B=p;for(;;){let H=i==null,$=i||a,F=o;try{await f({signal:k,path:g,matches:B,fetcherKey:x,patch:(j,G)=>{k.aborted||tc(j,G,$,F,l)}})}catch(j){return{type:"error",error:j,partialMatches:B}}finally{H&&!k.aborted&&(a=[...a])}if(k.aborted)return{type:"aborted"};let z=vn($,g,s);if(z)return{type:"success",matches:z};let O=to($,g,s,!0);if(!O||B.length===O.length&&B.every((j,G)=>j.route.id===O[G].route.id))return{type:"success",matches:null};B=O}}function ip(p){o={},i=Lo(p,l,void 0,o)}function sp(p,g){let k=i==null;tc(p,g,i||a,o,l),k&&(a=[...a],be({}))}return D={get basename(){return s},get future(){return d},get state(){return y},get routes(){return a},get window(){return t},initialize:Yf,subscribe:Kf,enableScrollRestoration:op,navigate:Ps,fetch:ep,revalidate:Xf,createHref:p=>e.history.createHref(p),encodeLocation:p=>e.history.encodeLocation(p),getFetcher:Ts,deleteFetcher:rp,dispose:Qf,getBlocker:lp,deleteBlocker:Bs,patchRoutes:sp,_internalFetchControllers:L,_internalActiveDeferreds:ve,_internalSetRoutes:ip},D}function yv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ki(e,t,n,r,l,o,a,i){let s,u;if(a){s=[];for(let d of t)if(s.push(d),d.route.id===a){u=d;break}}else s=t,u=t[t.length-1];let f=ks(l||".",Es(s,o),hl(e.pathname,n)||e.pathname,i==="path");if(l==null&&(f.search=e.search,f.hash=e.hash),(l==null||l===""||l===".")&&u){let d=Cs(f.search);if(u.route.index&&!d)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let m=new URLSearchParams(f.search),E=m.getAll("index");m.delete("index"),E.filter(w=>w).forEach(w=>m.append("index",w));let S=m.toString();f.search=S?"?"+S:""}}return r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:ln([n,f.pathname])),ml(f)}function qu(e,t,n,r){if(!r||!yv(r))return{path:n};if(r.formMethod&&!Rv(r.formMethod))return{path:n,error:Ge(405,{method:r.formMethod})};let l=()=>({path:n,error:Ge(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),i=Ff(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!ht(a))return l();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,S)=>{let[w,N]=S;return""+E+w+"="+N+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!ht(a))return l();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return l()}}}Y(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=wi(r.formData),u=r.formData;else if(r.body instanceof FormData)s=wi(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=rc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=rc(s)}catch{return l()}let f={formMethod:a,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(ht(f.formMethod))return{path:n,submission:f};let d=zt(n);return t&&d.search&&Cs(d.search)&&s.append("index",""),d.search="?"+s,{path:ml(d),submission:f}}function Zu(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(l=>l.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function Ju(e,t,n,r,l,o,a,i,s,u,f,d,m,E,S,w){let N=w?Je(w[1])?w[1].error:w[1].data:void 0,h=e.createURL(t.location),c=e.createURL(l),v=n;o&&t.errors?v=Zu(n,Object.keys(t.errors)[0],!0):w&&Je(w[1])&&(v=Zu(n,w[0]));let C=w?w[1].statusCode:void 0,R=a&&C&&C>=400,D=v.filter((P,U)=>{let{route:I}=P;if(I.lazy)return!0;if(I.loader==null)return!1;if(o)return Si(I,t.loaderData,t.errors);if(gv(t.loaderData,t.matches[U],P)||s.some(W=>W===P.route.id))return!0;let ee=t.matches[U],le=P;return ec(P,de({currentUrl:h,currentParams:ee.params,nextUrl:c,nextParams:le.params},r,{actionResult:N,actionStatus:C,defaultShouldRevalidate:R?!1:i||h.pathname+h.search===c.pathname+c.search||h.search!==c.search||Af(ee,le)}))}),y=[];return d.forEach((P,U)=>{if(o||!n.some(X=>X.route.id===P.routeId)||f.has(U))return;let I=vn(E,P.path,S);if(!I){y.push({key:U,routeId:P.routeId,path:P.path,matches:null,match:null,controller:null});return}let ee=t.fetchers.get(U),le=Mr(I,P.path),W=!1;m.has(U)?W=!1:u.has(U)?(u.delete(U),W=!0):ee&&ee.state!=="idle"&&ee.data===void 0?W=i:W=ec(le,de({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:N,actionStatus:C,defaultShouldRevalidate:R?!1:i})),W&&y.push({key:U,routeId:P.routeId,path:P.path,matches:I,match:le,controller:new AbortController})}),[D,y]}function Si(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,l=n!=null&&n[e.id]!==void 0;return!r&&l?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!l}function gv(e,t,n){let r=!t||n.route.id!==t.route.id,l=e[n.route.id]===void 0;return r||l}function Af(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ec(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function tc(e,t,n,r,l){var o;let a;if(e){let u=r[e];Y(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),a=u.children}else a=n;let i=t.filter(u=>!a.some(f=>Of(u,f))),s=Lo(i,l,[e||"_","patch",String(((o=a)==null?void 0:o.length)||"0")],r);a.push(...s)}function Of(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var l;return(l=t.children)==null?void 0:l.some(o=>Of(n,o))}):!1}async function Ev(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=n[e.id];Y(l,"No route found in manifest");let o={};for(let a in r){let s=l[a]!==void 0&&a!=="hasErrorBoundary";Rn(!s,'Route "'+l.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!Uh.has(a)&&(o[a]=r[a])}Object.assign(l,o),Object.assign(l,de({},t(l),{lazy:void 0}))}async function kv(e){let{matches:t}=e,n=t.filter(l=>l.shouldLoad);return(await Promise.all(n.map(l=>l.resolve()))).reduce((l,o,a)=>Object.assign(l,{[n[a].route.id]:o}),{})}async function Sv(e,t,n,r,l,o,a,i,s,u){let f=o.map(E=>E.route.lazy?Ev(E.route,s,i):void 0),d=o.map((E,S)=>{let w=f[S],N=l.some(c=>c.route.id===E.route.id);return de({},E,{shouldLoad:N,resolve:async c=>(c&&r.method==="GET"&&(E.route.lazy||E.route.loader)&&(N=!0),N?wv(t,r,E,w,c,u):Promise.resolve({type:oe.data,result:void 0}))})}),m=await e({matches:d,request:r,params:o[0].params,fetcherKey:a,context:u});try{await Promise.all(f)}catch{}return m}async function wv(e,t,n,r,l,o){let a,i,s=u=>{let f,d=new Promise((S,w)=>f=w);i=()=>f(),t.signal.addEventListener("abort",i);let m=S=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:o},...S!==void 0?[S]:[]),E=(async()=>{try{return{type:"data",result:await(l?l(w=>m(w)):m())}}catch(S){return{type:"error",result:S}}})();return Promise.race([E,d])};try{let u=n.route[e];if(r)if(u){let f,[d]=await Promise.all([s(u).catch(m=>{f=m}),r]);if(f!==void 0)throw f;a=d}else if(await r,u=n.route[e],u)a=await s(u);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw Ge(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:oe.data,result:void 0};else if(u)a=await s(u);else{let f=new URL(t.url),d=f.pathname+f.search;throw Ge(404,{pathname:d})}Y(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:oe.error,result:u}}finally{i&&t.signal.removeEventListener("abort",i)}return a}async function Cv(e){let{result:t,type:n}=e;if(zf(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:oe.error,error:m}}return n===oe.error?{type:oe.error,error:new To(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:oe.data,data:d,statusCode:t.status,headers:t.headers}}if(n===oe.error){if(sc(t)){var r,l;if(t.data instanceof Error){var o,a;return{type:oe.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:oe.error,error:new To(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:il(t)?t.status:void 0,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}}return{type:oe.error,error:t,statusCode:il(t)?t.status:void 0}}if(Tv(t)){var i,s;return{type:oe.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((s=t.init)==null?void 0:s.headers)&&new Headers(t.init.headers)}}if(sc(t)){var u,f;return{type:oe.data,data:t.data,statusCode:(u=t.init)==null?void 0:u.status,headers:(f=t.init)!=null&&f.headers?new Headers(t.init.headers):void 0}}return{type:oe.data,data:t}}function xv(e,t,n,r,l,o){let a=e.headers.get("Location");if(Y(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ss.test(a)){let i=r.slice(0,r.findIndex(s=>s.route.id===n)+1);a=ki(new URL(t.url),i,l,!0,a,o),e.headers.set("Location",a)}return e}function nc(e,t,n){if(Ss.test(e)){let r=e,l=r.startsWith("//")?new URL(t.protocol+r):new URL(r),o=hl(l.pathname,n)!=null;if(l.origin===t.origin&&o)return l.pathname+l.search+l.hash}return e}function zn(e,t,n,r){let l=e.createURL(Ff(t)).toString(),o={signal:n};if(r&&ht(r.formMethod)){let{formMethod:a,formEncType:i}=r;o.method=a.toUpperCase(),i==="application/json"?(o.headers=new Headers({"Content-Type":i}),o.body=JSON.stringify(r.json)):i==="text/plain"?o.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?o.body=wi(r.formData):o.body=r.formData}return new Request(l,o)}function wi(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function rc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Pv(e,t,n,r,l){let o={},a=null,i,s=!1,u={},f=n&&Je(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let m=d.route.id,E=t[m];if(Y(!Sn(E),"Cannot handle redirect results in processLoaderData"),Je(E)){let S=E.error;f!==void 0&&(S=f,f=void 0),a=a||{};{let w=yn(e,m);a[w.route.id]==null&&(a[w.route.id]=S)}o[m]=void 0,s||(s=!0,i=il(E.error)?E.error.status:500),E.headers&&(u[m]=E.headers)}else Kt(E)?(r.set(m,E.deferredData),o[m]=E.deferredData.data,E.statusCode!=null&&E.statusCode!==200&&!s&&(i=E.statusCode),E.headers&&(u[m]=E.headers)):(o[m]=E.data,E.statusCode&&E.statusCode!==200&&!s&&(i=E.statusCode),E.headers&&(u[m]=E.headers))}),f!==void 0&&n&&(a={[n[0]]:f},o[n[0]]=void 0),{loaderData:o,errors:a,statusCode:i||200,loaderHeaders:u}}function lc(e,t,n,r,l,o,a){let{loaderData:i,errors:s}=Pv(t,n,r,a);return l.forEach(u=>{let{key:f,match:d,controller:m}=u,E=o[f];if(Y(E,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(Je(E)){let S=yn(e.matches,d==null?void 0:d.route.id);s&&s[S.route.id]||(s=de({},s,{[S.route.id]:E.error})),e.fetchers.delete(f)}else if(Sn(E))Y(!1,"Unhandled fetcher revalidation redirect");else if(Kt(E))Y(!1,"Unhandled fetcher deferred data");else{let S=Ut(E.data);e.fetchers.set(f,S)}}),{loaderData:i,errors:s}}function oc(e,t,n,r){let l=de({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(l[a]=t[a]):e[a]!==void 0&&o.route.loader&&(l[a]=e[a]),r&&r.hasOwnProperty(a))break}return l}function ac(e){return e?Je(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function yn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ic(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ge(e,t){let{pathname:n,routeId:r,method:l,type:o,message:a}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",l&&n&&r?s="You made a "+l+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",l&&n&&r?s="You made a "+l.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(s='Invalid request method "'+l.toUpperCase()+'"')),new To(e||500,i,new Error(s),!0)}function Ul(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,l]=t[n];if(Sn(l))return{key:r,result:l}}}function Ff(e){let t=typeof e=="string"?zt(e):e;return ml(de({},t,{hash:""}))}function _v(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Lv(e){return zf(e.result)&&fv.has(e.result.status)}function Kt(e){return e.type===oe.deferred}function Je(e){return e.type===oe.error}function Sn(e){return(e&&e.type)===oe.redirect}function sc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Tv(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function zf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Rv(e){return dv.has(e.toLowerCase())}function ht(e){return uv.has(e.toLowerCase())}async function Nv(e,t,n,r,l){let o=Object.entries(t);for(let a=0;a<o.length;a++){let[i,s]=o[a],u=e.find(m=>(m==null?void 0:m.route.id)===i);if(!u)continue;let f=r.find(m=>m.route.id===u.route.id),d=f!=null&&!Af(f,u)&&(l&&l[u.route.id])!==void 0;Kt(s)&&d&&await ws(s,n,!1).then(m=>{m&&(t[i]=m)})}}async function Iv(e,t,n){for(let r=0;r<n.length;r++){let{key:l,routeId:o,controller:a}=n[r],i=t[l];e.find(u=>(u==null?void 0:u.route.id)===o)&&Kt(i)&&(Y(a,"Expected an AbortController for revalidating fetcher deferred result"),await ws(i,a.signal,!0).then(u=>{u&&(t[l]=u)}))}}async function ws(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:oe.data,data:e.deferredData.unwrappedData}}catch(l){return{type:oe.error,error:l}}return{type:oe.data,data:e.deferredData.data}}}function Cs(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Mr(e,t){let n=typeof t=="string"?zt(t).search:t.search;if(e[e.length-1].route.index&&Cs(n||""))return e[e.length-1];let r=Bf(e);return r[r.length-1]}function uc(e){let{formMethod:t,formAction:n,formEncType:r,text:l,formData:o,json:a}=e;if(!(!t||!n||!r)){if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:l};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function _a(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Bv(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Lr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Mv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Ut(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Dv(e,t){try{let n=e.sessionStorage.getItem(Df);if(n){let r=JSON.parse(n);for(let[l,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(l,new Set(o||[]))}}catch{}}function Av(e,t){if(t.size>0){let n={};for(let[r,l]of t)n[r]=[...l];try{e.sessionStorage.setItem(Df,JSON.stringify(n))}catch(r){Rn(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}const Go=T.createContext(null),jf=T.createContext(null),vl=T.createContext(null),Yo=T.createContext(null),Bn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),bf=T.createContext(null);function yl(){return T.useContext(Yo)!=null}function xs(){return yl()||Y(!1),T.useContext(Yo).location}function Hf(e){T.useContext(vl).static||T.useLayoutEffect(e)}function Uf(){let{isDataRoute:e}=T.useContext(Bn);return e?Yv():Ov()}function Ov(){yl()||Y(!1);let e=T.useContext(Go),{basename:t,future:n,navigator:r}=T.useContext(vl),{matches:l}=T.useContext(Bn),{pathname:o}=xs(),a=JSON.stringify(Es(l,n.v7_relativeSplatPath)),i=T.useRef(!1);return Hf(()=>{i.current=!0}),T.useCallback(function(u,f){if(f===void 0&&(f={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=ks(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ln([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,a,o,e])}function Fv(e,t){return Vf(e,t)}function Vf(e,t,n,r){yl()||Y(!1);let{navigator:l}=T.useContext(vl),{matches:o}=T.useContext(Bn),a=o[o.length-1],i=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=xs(),f;if(t){var d;let N=typeof t=="string"?zt(t):t;s==="/"||(d=N.pathname)!=null&&d.startsWith(s)||Y(!1),f=N}else f=u;let m=f.pathname||"/",E=m;if(s!=="/"){let N=s.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let S=vn(e,{pathname:E}),w=Uv(S&&S.map(N=>Object.assign({},N,{params:Object.assign({},i,N.params),pathname:ln([s,l.encodeLocation?l.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?s:ln([s,l.encodeLocation?l.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&w?T.createElement(Yo.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Se.Pop}},w):w}function zv(){let e=Gv(),t=il(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:l},n):null,null)}const jv=T.createElement(zv,null);class bv extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Bn.Provider,{value:this.props.routeContext},T.createElement(bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hv(e){let{routeContext:t,match:n,children:r}=e,l=T.useContext(Go);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Bn.Provider,{value:t},r)}function Uv(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=(l=n)==null?void 0:l.errors;if(i!=null){let f=a.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);f>=0||Y(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:E}=n,S=d.route.loader&&m[d.route.id]===void 0&&(!E||E[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,m)=>{let E,S=!1,w=null,N=null;n&&(E=i&&d.route.id?i[d.route.id]:void 0,w=d.route.errorElement||jv,s&&(u<0&&m===0?(Qv("route-fallback"),S=!0,N=null):u===m&&(S=!0,N=d.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,m+1)),c=()=>{let v;return E?v=w:S?v=N:d.route.Component?v=T.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,T.createElement(Hv,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?T.createElement(bv,{location:n.location,revalidation:n.revalidation,component:w,error:E,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Wf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wf||{}),$f=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($f||{});function Vv(e){let t=T.useContext(Go);return t||Y(!1),t}function Wv(e){let t=T.useContext(jf);return t||Y(!1),t}function $v(e){let t=T.useContext(Bn);return t||Y(!1),t}function Gf(e){let t=$v(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Gv(){var e;let t=T.useContext(bf),n=Wv(),r=Gf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Yv(){let{router:e}=Vv(Wf.UseNavigateStable),t=Gf($f.UseNavigateStable),n=T.useRef(!1);return Hf(()=>{n.current=!0}),T.useCallback(function(l,o){o===void 0&&(o={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,sl({fromRouteId:t},o)))},[e,t])}const cc={};function Qv(e,t,n){cc[e]||(cc[e]=!0)}function Kv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Xv(e){let{to:t,replace:n,state:r,relative:l}=e;yl()||Y(!1);let{future:o,static:a}=T.useContext(vl),{matches:i}=T.useContext(Bn),{pathname:s}=xs(),u=Uf(),f=ks(t,Es(i,o.v7_relativeSplatPath),s,l==="path"),d=JSON.stringify(f);return T.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:l}),[u,d,l,n,r]),null}function jn(e){Y(!1)}function qv(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Se.Pop,navigator:o,static:a=!1,future:i}=e;yl()&&Y(!1);let s=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:s,navigator:o,static:a,future:sl({v7_relativeSplatPath:!1},i)}),[s,i,o,a]);typeof r=="string"&&(r=zt(r));let{pathname:f="/",search:d="",hash:m="",state:E=null,key:S="default"}=r,w=T.useMemo(()=>{let N=hl(f,s);return N==null?null:{location:{pathname:N,search:d,hash:m,state:E,key:S},navigationType:l}},[s,f,d,m,E,S,l]);return w==null?null:T.createElement(vl.Provider,{value:u},T.createElement(Yo.Provider,{children:n,value:w}))}function Zv(e){let{children:t,location:n}=e;return Fv(Ci(t),n)}new Promise(()=>{});function Ci(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,l)=>{if(!T.isValidElement(r))return;let o=[...t,l];if(r.type===T.Fragment){n.push.apply(n,Ci(r.props.children,o));return}r.type!==jn&&Y(!1),!r.props.index||!r.props.children||Y(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ci(r.props.children,o)),n.push(a)}),n}function Jv(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:T.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:T.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}const ey="6";try{window.__reactRouterVersion=ey}catch{}function ty(e,t){return vv({basename:t==null?void 0:t.basename,future:Ro({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:jh({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||ny(),routes:e,mapRouteProperties:Jv,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function ny(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ro({},t,{errors:ry(t.errors)})),t}function ry(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,l]of t)if(l&&l.__type==="RouteErrorResponse")n[r]=new To(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let o=window[l.__subType];if(typeof o=="function")try{let a=new o(l.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(l.message);o.stack="",n[r]=o}}else n[r]=l;return n}const ly=T.createContext({isTransitioning:!1}),oy=T.createContext(new Map),ay="startTransition",dc=_p[ay],iy="flushSync",fc=zh[iy];function sy(e){dc?dc(e):e()}function Tr(e){fc?fc(e):e()}class uy{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function cy(e){let{fallbackElement:t,router:n,future:r}=e,[l,o]=T.useState(n.state),[a,i]=T.useState(),[s,u]=T.useState({isTransitioning:!1}),[f,d]=T.useState(),[m,E]=T.useState(),[S,w]=T.useState(),N=T.useRef(new Map),{v7_startTransition:h}=r||{},c=T.useCallback(P=>{h?sy(P):P()},[h]),v=T.useCallback((P,U)=>{let{deletedFetchers:I,flushSync:ee,viewTransitionOpts:le}=U;P.fetchers.forEach((X,re)=>{X.data!==void 0&&N.current.set(re,X.data)}),I.forEach(X=>N.current.delete(X));let W=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!le||W){ee?Tr(()=>o(P)):c(()=>o(P));return}if(ee){Tr(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let X=n.window.document.startViewTransition(()=>{Tr(()=>o(P))});X.finished.finally(()=>{Tr(()=>{d(void 0),E(void 0),i(void 0),u({isTransitioning:!1})})}),Tr(()=>E(X));return}m?(f&&f.resolve(),m.skipTransition(),w({state:P,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(i(P),u({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[n.window,m,f,N,c]);T.useLayoutEffect(()=>n.subscribe(v),[n,v]),T.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new uy)},[s]),T.useEffect(()=>{if(f&&a&&n.window){let P=a,U=f.promise,I=n.window.document.startViewTransition(async()=>{c(()=>o(P)),await U});I.finished.finally(()=>{d(void 0),E(void 0),i(void 0),u({isTransitioning:!1})}),E(I)}},[c,a,f,n.window]),T.useEffect(()=>{f&&a&&l.location.key===a.location.key&&f.resolve()},[f,m,l.location,a]),T.useEffect(()=>{!s.isTransitioning&&S&&(i(S.state),u({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[s.isTransitioning,S]),T.useEffect(()=>{},[]);let C=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:P=>n.navigate(P),push:(P,U,I)=>n.navigate(P,{state:U,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(P,U,I)=>n.navigate(P,{replace:!0,state:U,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[n]),R=n.basename||"/",D=T.useMemo(()=>({router:n,navigator:C,static:!1,basename:R}),[n,C,R]),y=T.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return T.useEffect(()=>Kv(r,n.future),[r,n.future]),T.createElement(T.Fragment,null,T.createElement(Go.Provider,{value:D},T.createElement(jf.Provider,{value:l},T.createElement(oy.Provider,{value:N.current},T.createElement(ly.Provider,{value:s},T.createElement(qv,{basename:R,location:l.location,navigationType:l.historyAction,navigator:C,future:y},l.initialized||n.future.v7_partialHydration?T.createElement(dy,{routes:n.routes,future:n.future,state:l}):t))))),null)}const dy=T.memo(fy);function fy(e){let{routes:t,future:n,state:r}=e;return Vf(t,void 0,r,n)}var pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pc||(pc={}));var mc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));function py(){const e=Uf(),t=r=>{const l=document.getElementById(r);l&&l.scrollIntoView({behavior:"smooth",block:"start"})},n=()=>{e("/configurator")};return T.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const r=document.getElementById("year");r&&(r.textContent=new Date().getFullYear().toString());const l=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],o=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],a=[...l,...o],i={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},s=new Set(["shell","trimpiece","backShellMain","backHandles"]),u=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],f=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],d=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),m=[{id:"shell",mask:"/masks/leftShell.png"},{id:"trimpiece",mask:"/masks/centerBody.png"},{id:"faceButtons",mask:"/masks/faceButtons.png"},{id:"stickL",mask:"/masks/stickL.png"},{id:"stickR",mask:"/masks/stickR.png"},{id:"touchpad",mask:"/masks/touchpad.png"},{id:"share",mask:"/masks/share.png"},{id:"options",mask:"/masks/options.png"},{id:"psButton",mask:"/masks/psButton.png"},{id:"bumpers",mask:"/masks/bumperL.png"}];function E(W){return s.has(W)?u:f}function S(W){return W[Math.floor(Math.random()*W.length)]}function w(W,X){const re={};let ke=0;return a.forEach(L=>{const b=E(L.id),V=S(b);re[L.id]=V,ke+=i[L.id]||0}),{id:W,name:(X==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(W+1),colors:re,total:ke}}function N(W,X){const re=W.toFixed(2);return X==="ar"?re+" د.ب":"BHD "+re}const h={ar:{navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
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
        `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly."}};let c=localStorage.getItem("ez_lang")||"ar";function v(){document.documentElement.lang=c,document.documentElement.dir=c==="ar"?"rtl":"ltr"}function C(){const W=h[c];document.querySelectorAll("[data-i18n]").forEach(re=>{const ke=re.getAttribute("data-i18n");W[ke]&&(re.textContent=W[ke])}),document.querySelectorAll("[data-i18n-html]").forEach(re=>{const ke=re.getAttribute("data-i18n-html");W[ke]&&(re.innerHTML=W[ke])});const X=document.getElementById("langToggle");X&&(X.textContent=c==="ar"?"EN":"عربي")}let R=[];function D(W){const X=h[c],re=document.createElement("article");re.className="build-card";const ke=document.createElement("div");ke.className="build-thumb";const $e=document.createElement("div");$e.className="thumb-controller";const L=document.createElement("div");L.className="thumb-base",$e.appendChild(L),m.forEach(Ae=>{const Pe=W.colors[Ae.id];if(!Pe)return;const ve=document.createElement("div");ve.className="thumb-layer",ve.style.setProperty("--mask-url",`url('${Ae.mask}')`),ve.style.setProperty("--tint",Pe.hex),d.has(Pe.hex.toLowerCase())?ve.style.setProperty("--tint-opacity","0.35"):ve.style.setProperty("--tint-opacity","1"),$e.appendChild(ve)}),ke.appendChild($e);const b=document.createElement("div");b.className="build-body";const V=document.createElement("div");V.className="build-title",V.textContent=W.name;const Z=document.createElement("div");Z.className="build-price",Z.innerHTML=N(W.total,c);const te=document.createElement("div");te.className="build-color-row";const Ne=document.createElement("button");return Ne.className="build-cta",Ne.type="button",Ne.textContent=X.preview,Ne.addEventListener("click",n),b.appendChild(V),b.appendChild(Z),b.appendChild(te),b.appendChild(Ne),re.appendChild(ke),re.appendChild(b),re}function y(){const W=document.getElementById("buildGrid");if(W){if(W.innerHTML="",R.length)R=R.map((X,re)=>w(re,c));else for(let X=0;X<20;X++)R.push(w(X,c));R.forEach(X=>W.appendChild(D(X)))}}function P(W){c=W,localStorage.setItem("ez_lang",W),v(),C(),y()}const U=document.getElementById("langToggle"),I=document.getElementById("contactForm"),ee=()=>{P(c==="ar"?"en":"ar")},le=W=>{W.preventDefault(),alert(h[c].formSuccess),I==null||I.reset()};return U==null||U.addEventListener("click",ee),I==null||I.addEventListener("submit",le),v(),C(),y(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",U==null||U.removeEventListener("click",ee),I==null||I.removeEventListener("submit",le)}},[e]),M.jsxs("div",{className:"home-page",children:[M.jsxs("header",{className:"top-nav",children:[M.jsx("div",{className:"nav-left",children:M.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[M.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),M.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),M.jsxs("div",{className:"nav-right",children:[M.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>t("premadeSection")}),M.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>t("contactSection")}),M.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:n}),M.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"})]})]}),M.jsxs("section",{className:"hero",children:[M.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:M.jsx("source",{src:"/back.mp4",type:"video/mp4"})}),M.jsx("div",{className:"hero-overlay"}),M.jsx("div",{className:"hero-inner",children:M.jsxs("div",{children:[M.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),M.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),M.jsxs("div",{className:"hero-actions",children:[M.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:n}),M.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>t("premadeSection")})]})]})})]}),M.jsxs("section",{className:"section",id:"premadeSection",children:[M.jsx("div",{className:"section-header",children:M.jsx("div",{children:M.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),M.jsx("div",{className:"build-grid",id:"buildGrid"})]}),M.jsxs("section",{className:"section",id:"contactSection",children:[M.jsx("div",{className:"section-header",children:M.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),M.jsxs("div",{className:"contact-grid",children:[M.jsxs("div",{className:"contact-card",children:[M.jsx("h3",{"data-i18n":"contactCardTitle"}),M.jsx("p",{"data-i18n":"contactCardText"}),M.jsxs("form",{id:"contactForm",children:[M.jsxs("div",{className:"contact-form-group",children:[M.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),M.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),M.jsxs("div",{className:"contact-form-group",children:[M.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),M.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),M.jsxs("div",{className:"contact-form-group",children:[M.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),M.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),M.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),M.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),M.jsxs("footer",{className:"footer",children:[M.jsx("span",{"data-i18n":"footerText"}),M.jsx("span",{id:"year"})]})]})}const my=`


<canvas id="bgCanvas"></canvas>
 Sounds 
<audio id="sfxClick" preload="auto" src="sounds/click.mp3"></audio>
<audio id="sfxClick2" preload="auto" src="sounds/click2.mp3"></audio>
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
<img alt="PS5 Controller Front" src="controller.png"/>
</div>
<div class="controller-face controller-face-back" id="controllerFaceBack">
<img alt="PS5 Controller Back" src="controller_back.png"/>
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
<img alt="Select a part" src="icons/shells.png"/>
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



`,hy=`


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
      { id: "shell", icon: "icons/shells.png", mask: "masks/leftShell.png", priority: 4, side: "front" },
      { id: "trimpiece", icon: "icons/trimpiece.png", mask: "masks/centerBody.png", priority: 1, side: "front" },
      { id: "stickL", icon: "icons/stickL.png", mask: "masks/stickL.png", priority: 3, side: "front" },
      { id: "stickR", icon: "icons/stickR.png", mask: "masks/stickR.png", priority: 3, side: "front" },
      { id: "faceButtons", icon: "icons/faceButtons.png", mask: "masks/faceButtons.png", priority: 4, side: "front" },
      { id: "touchpad", icon: "icons/touchpad.png", mask: "masks/touchpad.png", priority: 2, side: "front" },
      { id: "bumpers", icon: "icons/bumpers.png", mask: "masks/bumperL.png", priority: 2, side: "front" },
      { id: "psButton", icon: "icons/psButton.png", mask: "masks/psButton.png", priority: 1, side: "front" },
      { id: "share", icon: "icons/share.png", mask: "masks/share.png", priority: 4, side: "front" },
      { id: "options", icon: "icons/options.png", mask: "masks/options.png", priority: 4, side: "front" },
    ];

    const BACK_PARTS = [
      { id: "backShellMain", icon: "icons/backShellMain.png", mask: "masks/backShellMain.png", priority: 1, side: "back" },
      { id: "backTriggers", icon: "icons/backTriggers.png", mask: "masks/backTriggers.png", priority: 2, side: "back" }
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
      return SHELL_PART_IDS.has(partId) ? SHELL_COLORS : ACCESSORY_COLORS;
    }

    function getOptionsForPart(partId) {
      return THUMB_PART_IDS.has(partId) ? THUMB_OPTIONS : "";
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

    function computeTotal() {
      let tSum = 0;
      for (const p of ALL_PARTS) if (configState[p.id]) tSum += PRICES[p.id] || 0;
      return tSum;
    }

    function updateSummary() {
      summaryAmountEl.textContent = formatMoney(computeTotal());
    }

    /* ----- Color application ----- */

    function applyColor(partId, colorHex) {
      configState[partId] = colorHex;
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

      // show headers + grids, hide empty state
      colorEmptyState.style.display = "none";
      colorPanelHeaderTop.style.display = "block";
      colorPanelHeaderBottom.style.display = "block";
      colorPanelGrid.style.display = "grid";
      optionsPanelGrid.style.display = "grid";

      colorPanelTitle.textContent = label;
      colorPanelSub.textContent = t("availableColors");
      optionsPanelSub.textContent = t("availableOptions");

      colorPanelGrid.innerHTML = "";
      optionsPanelGrid.innerHTML = "";

      const palette = getPaletteForPart(partId);
      const optionspalette = getOptionsForPart(partId);

      // colors
      palette.forEach(({ hex, key }) => {
        const cell = document.createElement("div");
        cell.className = "cd-cell";

        const sw = document.createElement("button");
        sw.className = "cd-swatch";
        sw.style.backgroundColor = hex;
        sw.addEventListener("click", (e) => {
          e.stopPropagation();
          if (!selectedPartId) return;
          applyColor(selectedPartId, hex);
          playClick2();
        });

        const lbl = document.createElement("div");
        lbl.className = "cd-color-name";
        lbl.textContent = t(key);

        cell.appendChild(sw);
        cell.appendChild(lbl);
        colorPanelGrid.appendChild(cell);
      });

      // options (stick types) – only for sticks
      if (optionspalette) {
        optionsPanelSub.style.display = "block";
        optionsPanelGrid.style.display = "grid";

        optionspalette.forEach(({ hex, key }) => {
          const cell2 = document.createElement("div");
          cell2.className = "cd-cell-op";

          const sw2 = document.createElement("button");
          sw2.className = "cd-swatch-op";
          sw2.style.backgroundColor = hex;
          sw2.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!selectedPartId) return;
            applyOptions(selectedPartId, hex);
          });

          const lbl = document.createElement("div");
          lbl.className = "cd-color-name";
          lbl.textContent = t(key);

          cell2.appendChild(sw2);
          cell2.appendChild(lbl);
          optionsPanelGrid.appendChild(cell2);
        });
      } else {
        optionsPanelSub.style.display = "none";
        optionsPanelGrid.style.display = "none";
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

    function createPartRow(part) {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "parts-item";
      row.dataset.partId = part.id;
      row.dataset.side = part.side;

      const thumb = document.createElement("div");
      thumb.className = "parts-thumb";

      const img = document.createElement("img");
      img.src = part.icon || "icons/shells.png";
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

    function buildPartsList() {
      partsLists.forEach(list => list.innerHTML = "");
      Object.keys(partsRowsById).forEach(k => delete partsRowsById[k]);

      const optionParts = [...FRONT_PARTS, ...BACK_PARTS].filter(p => getOptionsForPart(p.id));
      const colorOnlyParts = [...FRONT_PARTS, ...BACK_PARTS].filter(p => !getOptionsForPart(p.id));

      if (primaryList) {
        optionParts.forEach(p => primaryList.appendChild(createPartRow(p)));
      }
      if (secondaryList) {
        colorOnlyParts.forEach(p => secondaryList.appendChild(createPartRow(p)));
      }
      refreshAccordionHeights();
    }

    /* ----- Hit testing ----- */

    function getPartsForSide(side) {
      return side === "back" ? BACK_PARTS : FRONT_PARTS;
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

      clearSelection();

      selectedPartId = partId;
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
    refreshAccordionHeights();
  

`;function vy(){return T.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=hy,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),M.jsx("div",{className:"configurator-page",children:M.jsx("div",{dangerouslySetInnerHTML:{__html:my}})})}const yy=`


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



`,gy=`


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
      { id: "shell", mask: "masks/leftShell.png" },
      { id: "trimpiece", mask: "masks/centerBody.png" },
      { id: "stickL", mask: "masks/stickL.png" },
      { id: "stickR", mask: "masks/stickR.png" },
      { id: "faceButtons", mask: "masks/faceButtons.png" },
      { id: "touchpad", mask: "masks/touchpad.png" },
      { id: "bumpers", mask: "masks/bumperL.png" },
      { id: "psButton", mask: "masks/psButton.png" },
      { id: "share", mask: "masks/share.png" },
      { id: "options", mask: "masks/options.png" }
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
  

`;function Ey(){return T.useEffect(()=>{const e=document.createElement("script");return e.textContent=gy,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),M.jsx("div",{className:"cart-page",children:M.jsx("div",{dangerouslySetInnerHTML:{__html:yy}})})}const ky=`


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



`,Sy=`


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
  

`;function wy(){return T.useEffect(()=>{const e=document.createElement("script");return e.textContent=Sy,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),M.jsx("div",{className:"checkout-page",children:M.jsx("div",{dangerouslySetInnerHTML:{__html:ky}})})}function Cy(){return M.jsxs(Zv,{children:[M.jsx(jn,{path:"/",element:M.jsx(py,{})}),M.jsx(jn,{path:"/configurator",element:M.jsx(vy,{})}),M.jsx(jn,{path:"/cart",element:M.jsx(Ey,{})}),M.jsx(jn,{path:"/checkout",element:M.jsx(wy,{})}),M.jsx(jn,{path:"*",element:M.jsx(Xv,{to:"/",replace:!0})})]})}const xy=ty([{path:"/*",element:M.jsx(Cy,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});La.createRoot(document.getElementById("root")).render(M.jsx(cy,{router:xy}));

function Cf(e,t){for(var a=0;a<t.length;a++){const l=t[a];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(l,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();function lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _f={exports:{}},Zr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=Symbol.for("react.transitional.element"),uy=Symbol.for("react.fragment");function xf(e,t,a){var l=null;if(a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:ry,type:e,key:l,ref:t!==void 0?t:null,props:a}}Zr.Fragment=uy;Zr.jsx=xf;Zr.jsxs=xf;_f.exports=Zr;var R=_f.exports,Af={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.transitional.element"),cy=Symbol.for("react.portal"),oy=Symbol.for("react.fragment"),sy=Symbol.for("react.strict_mode"),dy=Symbol.for("react.profiler"),fy=Symbol.for("react.consumer"),my=Symbol.for("react.context"),hy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),yy=Symbol.for("react.memo"),Of=Symbol.for("react.lazy"),vy=Symbol.for("react.activity"),xs=Symbol.iterator;function gy(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var Lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mf=Object.assign,Bf={};function un(e,t,a){this.props=e,this.context=t,this.refs=Bf,this.updater=a||Lf}un.prototype.isReactComponent={};un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rf(){}Rf.prototype=un.prototype;function io(e,t,a){this.props=e,this.context=t,this.refs=Bf,this.updater=a||Lf}var ro=io.prototype=new Rf;ro.constructor=io;Mf(ro,un.prototype);ro.isPureReactComponent=!0;var As=Array.isArray;function lc(){}var Ee={H:null,A:null,T:null,S:null},Df=Object.prototype.hasOwnProperty;function uo(e,t,a){var l=a.ref;return{$$typeof:no,type:e,key:t,ref:l!==void 0?l:null,props:a}}function by(e,t){return uo(e.type,t,e.props)}function co(e){return typeof e=="object"&&e!==null&&e.$$typeof===no}function Sy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Os=/\/+/g;function vu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sy(""+e.key):t.toString(36)}function Ey(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(lc,lc):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ol(e,t,a,l,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case no:case cy:r=!0;break;case Of:return r=e._init,Ol(r(e._payload),t,a,l,n)}}if(r)return n=n(e),r=l===""?"."+vu(e,0):l,As(n)?(a="",r!=null&&(a=r.replace(Os,"$&/")+"/"),Ol(n,t,a,"",function(o){return o})):n!=null&&(co(n)&&(n=by(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Os,"$&/")+"/")+r)),t.push(n)),1;r=0;var u=l===""?".":l+":";if(As(e))for(var c=0;c<e.length;c++)l=e[c],i=u+vu(l,c),r+=Ol(l,t,a,i,n);else if(c=gy(e),typeof c=="function")for(e=c.call(e),c=0;!(l=e.next()).done;)l=l.value,i=u+vu(l,c++),r+=Ol(l,t,a,i,n);else if(i==="object"){if(typeof e.then=="function")return Ol(Ey(e),t,a,l,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Hi(e,t,a){if(e==null)return e;var l=[],n=0;return Ol(e,l,"","",function(i){return t.call(a,i,n++)}),l}function Ty(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ls=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Cy={map:Hi,forEach:function(e,t,a){Hi(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Hi(e,function(){t++}),t},toArray:function(e){return Hi(e,function(t){return t})||[]},only:function(e){if(!co(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Activity=vy;Z.Children=Cy;Z.Component=un;Z.Fragment=oy;Z.Profiler=dy;Z.PureComponent=io;Z.StrictMode=sy;Z.Suspense=py;Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;Z.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ee.H.useMemoCache(e)}};Z.cache=function(e){return function(){return e.apply(null,arguments)}};Z.cacheSignal=function(){return null};Z.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=Mf({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!Df.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=a;else if(1<i){for(var r=Array(i),u=0;u<i;u++)r[u]=arguments[u+2];l.children=r}return uo(e.type,n,l)};Z.createContext=function(e){return e={$$typeof:my,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:fy,_context:e},e};Z.createElement=function(e,t,a){var l,n={},i=null;if(t!=null)for(l in t.key!==void 0&&(i=""+t.key),t)Df.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=t[l]);var r=arguments.length-2;if(r===1)n.children=a;else if(1<r){for(var u=Array(r),c=0;c<r;c++)u[c]=arguments[c+2];n.children=u}if(e&&e.defaultProps)for(l in r=e.defaultProps,r)n[l]===void 0&&(n[l]=r[l]);return uo(e,i,n)};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:hy,render:e}};Z.isValidElement=co;Z.lazy=function(e){return{$$typeof:Of,_payload:{_status:-1,_result:e},_init:Ty}};Z.memo=function(e,t){return{$$typeof:yy,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Ee.T,a={};Ee.T=a;try{var l=e(),n=Ee.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(lc,Ls)}catch(i){Ls(i)}finally{t!==null&&a.types!==null&&(t.types=a.types),Ee.T=t}};Z.unstable_useCacheRefresh=function(){return Ee.H.useCacheRefresh()};Z.use=function(e){return Ee.H.use(e)};Z.useActionState=function(e,t,a){return Ee.H.useActionState(e,t,a)};Z.useCallback=function(e,t){return Ee.H.useCallback(e,t)};Z.useContext=function(e){return Ee.H.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e,t){return Ee.H.useDeferredValue(e,t)};Z.useEffect=function(e,t){return Ee.H.useEffect(e,t)};Z.useEffectEvent=function(e){return Ee.H.useEffectEvent(e)};Z.useId=function(){return Ee.H.useId()};Z.useImperativeHandle=function(e,t,a){return Ee.H.useImperativeHandle(e,t,a)};Z.useInsertionEffect=function(e,t){return Ee.H.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Ee.H.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Ee.H.useMemo(e,t)};Z.useOptimistic=function(e,t){return Ee.H.useOptimistic(e,t)};Z.useReducer=function(e,t,a){return Ee.H.useReducer(e,t,a)};Z.useRef=function(e){return Ee.H.useRef(e)};Z.useState=function(e){return Ee.H.useState(e)};Z.useSyncExternalStore=function(e,t,a){return Ee.H.useSyncExternalStore(e,t,a)};Z.useTransition=function(){return Ee.H.useTransition()};Z.version="19.2.1";Af.exports=Z;var A=Af.exports;const _y=lo(A),xy=Cf({__proto__:null,default:_y},[A]);var zf={exports:{}},Kr={},Nf={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,Y){var H=B.length;B.push(Y);e:for(;0<H;){var $=H-1>>>1,se=B[$];if(0<n(se,Y))B[$]=Y,B[H]=se,H=$;else break e}}function a(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var Y=B[0],H=B.pop();if(H!==Y){B[0]=H;e:for(var $=0,se=B.length,We=se>>>1;$<We;){var Xe=2*($+1)-1,Ie=B[Xe],Fe=Xe+1,De=B[Fe];if(0>n(Ie,H))Fe<se&&0>n(De,Ie)?(B[$]=De,B[Fe]=H,$=Fe):(B[$]=Ie,B[Xe]=H,$=Xe);else if(Fe<se&&0>n(De,H))B[$]=De,B[Fe]=H,$=Fe;else break e}}return Y}function n(B,Y){var H=B.sortIndex-Y.sortIndex;return H!==0?H:B.id-Y.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,u=r.now();e.unstable_now=function(){return r.now()-u}}var c=[],o=[],m=1,f=null,d=3,h=!1,T=!1,C=!1,O=!1,p=typeof setTimeout=="function"?setTimeout:null,s=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function S(B){for(var Y=a(o);Y!==null;){if(Y.callback===null)l(o);else if(Y.startTime<=B)l(o),Y.sortIndex=Y.expirationTime,t(c,Y);else break;Y=a(o)}}function M(B){if(C=!1,S(B),!T)if(a(c)!==null)T=!0,G||(G=!0,le());else{var Y=a(o);Y!==null&&ie(M,Y.startTime-B)}}var G=!1,v=-1,L=5,N=-1;function D(){return O?!0:!(e.unstable_now()-N<L)}function ae(){if(O=!1,G){var B=e.unstable_now();N=B;var Y=!0;try{e:{T=!1,C&&(C=!1,s(v),v=-1),h=!0;var H=d;try{t:{for(S(B),f=a(c);f!==null&&!(f.expirationTime>B&&D());){var $=f.callback;if(typeof $=="function"){f.callback=null,d=f.priorityLevel;var se=$(f.expirationTime<=B);if(B=e.unstable_now(),typeof se=="function"){f.callback=se,S(B),Y=!0;break t}f===a(c)&&l(c),S(B)}else l(c);f=a(c)}if(f!==null)Y=!0;else{var We=a(o);We!==null&&ie(M,We.startTime-B),Y=!1}}break e}finally{f=null,d=H,h=!1}Y=void 0}}finally{Y?le():G=!1}}}var le;if(typeof g=="function")le=function(){g(ae)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ne=Q.port2;Q.port1.onmessage=ae,le=function(){ne.postMessage(null)}}else le=function(){p(ae,0)};function ie(B,Y){v=p(function(){B(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_next=function(B){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var H=d;d=Y;try{return B()}finally{d=H}},e.unstable_requestPaint=function(){O=!0},e.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var H=d;d=B;try{return Y()}finally{d=H}},e.unstable_scheduleCallback=function(B,Y,H){var $=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=H+se,B={id:m++,callback:Y,priorityLevel:B,startTime:H,expirationTime:se,sortIndex:-1},H>$?(B.sortIndex=H,t(o,B),a(c)===null&&B===a(o)&&(C?(s(v),v=-1):C=!0,ie(M,H-$))):(B.sortIndex=se,t(c,B),T||h||(T=!0,G||(G=!0,le()))),B},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(B){var Y=d;return function(){var H=d;d=Y;try{return B.apply(this,arguments)}finally{d=H}}}})(Hf);Nf.exports=Hf;var Ay=Nf.exports,wf={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy=A;function Uf(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function pa(){}var tt={d:{f:pa,r:function(){throw Error(Uf(522))},D:pa,C:pa,L:pa,m:pa,X:pa,S:pa,M:pa},p:0,findDOMNode:null},Ly=Symbol.for("react.portal");function My(e,t,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ly,key:l==null?null:""+l,children:e,containerInfo:t,implementation:a}}var Hn=Oy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Pr(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt;at.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Uf(299));return My(e,t,null,a)};at.flushSync=function(e){var t=Hn.T,a=tt.p;try{if(Hn.T=null,tt.p=2,e)return e()}finally{Hn.T=t,tt.p=a,tt.d.f()}};at.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,tt.d.C(e,t))};at.prefetchDNS=function(e){typeof e=="string"&&tt.d.D(e)};at.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,l=Pr(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?tt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):a==="script"&&tt.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};at.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Pr(t.as,t.crossOrigin);tt.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&tt.d.M(e)};at.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,l=Pr(a,t.crossOrigin);tt.d.L(e,a,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};at.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Pr(t.as,t.crossOrigin);tt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else tt.d.m(e)};at.requestFormReset=function(e){tt.d.r(e)};at.unstable_batchedUpdates=function(e,t){return e(t)};at.useFormState=function(e,t,a){return Hn.H.useFormState(e,t,a)};at.useFormStatus=function(){return Hn.H.useHostTransitionStatus()};at.version="19.2.1";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),wf.exports=at;var oo=wf.exports;const By=lo(oo),Ry=Cf({__proto__:null,default:By},[oo]);/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=Ay,jf=A,Dy=oo;function _(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fi(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Gf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yf(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ms(e){if(fi(e)!==e)throw Error(_(188))}function zy(e){var t=e.alternate;if(!t){if(t=fi(e),t===null)throw Error(_(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return Ms(n),e;if(i===l)return Ms(n),t;i=i.sibling}throw Error(_(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,u=n.child;u;){if(u===a){r=!0,a=n,l=i;break}if(u===l){r=!0,l=n,a=i;break}u=u.sibling}if(!r){for(u=i.child;u;){if(u===a){r=!0,a=i,l=n;break}if(u===l){r=!0,l=i,a=n;break}u=u.sibling}if(!r)throw Error(_(189))}}if(a.alternate!==l)throw Error(_(190))}if(a.tag!==3)throw Error(_(188));return a.stateNode.current===a?e:t}function Xf(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Xf(e),t!==null)return t;e=e.sibling}return null}var Te=Object.assign,Ny=Symbol.for("react.element"),wi=Symbol.for("react.transitional.element"),Mn=Symbol.for("react.portal"),Bl=Symbol.for("react.fragment"),Vf=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),Qf=Symbol.for("react.consumer"),ea=Symbol.for("react.context"),so=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),fo=Symbol.for("react.memo"),va=Symbol.for("react.lazy"),uc=Symbol.for("react.activity"),Hy=Symbol.for("react.memo_cache_sentinel"),Bs=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var wy=Symbol.for("react.client.reference");function cc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bl:return"Fragment";case nc:return"Profiler";case Vf:return"StrictMode";case ic:return"Suspense";case rc:return"SuspenseList";case uc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Mn:return"Portal";case ea:return e.displayName||"Context";case Qf:return(e._context.displayName||"Context")+".Consumer";case so:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fo:return t=e.displayName||null,t!==null?t:cc(e.type)||"Memo";case va:t=e._payload,e=e._init;try{return cc(e(t))}catch{}}return null}var Bn=Array.isArray,X=jf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=Dy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ll={pending:!1,data:null,method:null,action:null},oc=[],Rl=-1;function Xt(e){return{current:e}}function Ye(e){0>Rl||(e.current=oc[Rl],oc[Rl]=null,Rl--)}function ge(e,t){Rl++,oc[Rl]=e.current,e.current=t}var Yt=Xt(null),Jn=Xt(null),Ma=Xt(null),hr=Xt(null);function pr(e,t){switch(ge(Ma,t),ge(Jn,e),ge(Yt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=wd(t),e=dp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ye(Yt),ge(Yt,e)}function Jl(){Ye(Yt),Ye(Jn),Ye(Ma)}function sc(e){e.memoizedState!==null&&ge(hr,e);var t=Yt.current,a=dp(t,e.type);t!==a&&(ge(Jn,e),ge(Yt,a))}function yr(e){Jn.current===e&&(Ye(Yt),Ye(Jn)),hr.current===e&&(Ye(hr),ri._currentValue=ll)}var gu,Rs;function Ia(e){if(gu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gu=t&&t[1]||"",Rs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gu+e+Rs}var bu=!1;function Su(e,t){if(!e||bu)return"";bu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(h){var d=h}Reflect.construct(e,[],f)}else{try{f.call()}catch(h){d=h}e.call(f.prototype)}}else{try{throw Error()}catch(h){d=h}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(h){if(h&&d&&typeof h.stack=="string")return[h.stack,d.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],u=i[1];if(r&&u){var c=r.split(`
`),o=u.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===o.length)for(l=c.length-1,n=o.length-1;1<=l&&0<=n&&c[l]!==o[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==o[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==o[n]){var m=`
`+c[l].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=l&&0<=n);break}}}finally{bu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ia(a):""}function Uy(e,t){switch(e.tag){case 26:case 27:case 5:return Ia(e.type);case 16:return Ia("Lazy");case 13:return e.child!==t&&t!==null?Ia("Suspense Fallback"):Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 15:return Su(e.type,!1);case 11:return Su(e.type.render,!1);case 1:return Su(e.type,!0);case 31:return Ia("Activity");default:return""}}function Ds(e){try{var t="",a=null;do t+=Uy(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var dc=Object.prototype.hasOwnProperty,mo=je.unstable_scheduleCallback,Eu=je.unstable_cancelCallback,ky=je.unstable_shouldYield,jy=je.unstable_requestPaint,vt=je.unstable_now,qy=je.unstable_getCurrentPriorityLevel,Zf=je.unstable_ImmediatePriority,Kf=je.unstable_UserBlockingPriority,vr=je.unstable_NormalPriority,Gy=je.unstable_LowPriority,Pf=je.unstable_IdlePriority,Yy=je.log,Xy=je.unstable_setDisableYieldValue,mi=null,gt=null;function Ca(e){if(typeof Yy=="function"&&Xy(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(mi,e)}catch{}}var bt=Math.clz32?Math.clz32:Zy,Vy=Math.log,Qy=Math.LN2;function Zy(e){return e>>>=0,e===0?32:31-(Vy(e)/Qy|0)|0}var Ui=256,ki=262144,ji=4194304;function Fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jr(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=Fa(l):(r&=u,r!==0?n=Fa(r):a||(a=u&~e,a!==0&&(n=Fa(a))))):(u=l&~i,u!==0?n=Fa(u):r!==0?n=Fa(r):a||(a=l&~e,a!==0&&(n=Fa(a)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function hi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ky(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jf(){var e=ji;return ji<<=1,!(ji&62914560)&&(ji=4194304),e}function Tu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function pi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Py(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,c=e.expirationTimes,o=e.hiddenUpdates;for(a=r&~a;0<a;){var m=31-bt(a),f=1<<m;u[m]=0,c[m]=-1;var d=o[m];if(d!==null)for(o[m]=null,m=0;m<d.length;m++){var h=d[m];h!==null&&(h.lane&=-536870913)}a&=~f}l!==0&&If(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function If(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-bt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ff(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-bt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Wf(e,t){var a=t&-t;return a=a&42?1:ho(a),a&(e.suspendedLanes|t)?0:a}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function po(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function $f(){var e=oe.p;return e!==0?e:(e=window.event,e===void 0?32:Tp(e.type))}function zs(e,t){var a=oe.p;try{return oe.p=e,t()}finally{oe.p=a}}var Xa=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Xa,st="__reactProps$"+Xa,cn="__reactContainer$"+Xa,fc="__reactEvents$"+Xa,Jy="__reactListeners$"+Xa,Iy="__reactHandles$"+Xa,Ns="__reactResources$"+Xa,yi="__reactMarker$"+Xa;function yo(e){delete e[Ze],delete e[st],delete e[fc],delete e[Jy],delete e[Iy]}function Dl(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[cn]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Gd(e);e!==null;){if(a=e[Ze])return a;e=Gd(e)}return t}e=a,a=e.parentNode}return null}function on(e){if(e=e[Ze]||e[cn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(_(33))}function Yl(e){var t=e[Ns];return t||(t=e[Ns]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[yi]=!0}var em=new Set,tm={};function hl(e,t){Il(e,t),Il(e+"Capture",t)}function Il(e,t){for(tm[e]=t,e=0;e<t.length;e++)em.add(t[e])}var Fy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hs={},ws={};function Wy(e){return dc.call(ws,e)?!0:dc.call(Hs,e)?!1:Fy.test(e)?ws[e]=!0:(Hs[e]=!0,!1)}function Wi(e,t,a){if(Wy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Kt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function am(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $y(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mc(e){if(!e._valueTracker){var t=am(e)?"checked":"value";e._valueTracker=$y(e,t,""+e[t])}}function lm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=am(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ev=/[\n"\\]/g;function Ot(e){return e.replace(ev,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hc(e,t,a,l,n,i,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?pc(e,r,_t(t)):a!=null?pc(e,r,_t(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+_t(u):e.removeAttribute("name")}function nm(e,t,a,l,n,i,r,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){mc(e);return}a=a!=null?""+_t(a):"",t=t!=null?""+_t(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),mc(e)}function pc(e,t,a){t==="number"&&gr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+_t(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function im(e,t,a){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+_t(a):""}function rm(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(_(92));if(Bn(l)){if(1<l.length)throw Error(_(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=_t(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),mc(e)}function Fl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var tv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Us(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||tv.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function um(e,t,a){if(t!=null&&typeof t!="object")throw Error(_(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Us(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Us(e,i,t[i])}function vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var av=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(e){return lv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var yc=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,Vl=null;function ks(e){var t=on(e);if(t&&(e=t.stateNode)){var a=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if(hc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[st]||null;if(!n)throw Error(_(90));hc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&lm(l)}break e;case"textarea":im(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xl(e,!!a.multiple,t,!1)}}}var Cu=!1;function cm(e,t,a){if(Cu)return e(t,a);Cu=!0;try{var l=e(t);return l}finally{if(Cu=!1,(zl!==null||Vl!==null)&&(uu(),zl&&(t=zl,e=Vl,Vl=zl=null,ks(t),e)))for(t=0;t<e.length;t++)ks(e[t])}}function In(e,t){var a=e.stateNode;if(a===null)return null;var l=a[st]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(_(231,t,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if(ra)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){vc=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{vc=!1}var _a=null,bo=null,er=null;function om(){if(er)return er;var e,t=bo,a=t.length,l,n="value"in _a?_a.value:_a.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return er=n.slice(e,1<l?1-l:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function js(){return!1}function dt(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gi:js,this.isPropagationStopped=js,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var pl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ir=dt(pl),vi=Te({},pl,{view:0,detail:0}),nv=dt(vi),_u,xu,En,Fr=Te({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(_u=e.screenX-En.screenX,xu=e.screenY-En.screenY):xu=_u=0,En=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),qs=dt(Fr),iv=Te({},Fr,{dataTransfer:0}),rv=dt(iv),uv=Te({},vi,{relatedTarget:0}),Au=dt(uv),cv=Te({},pl,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=dt(cv),sv=Te({},pl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dv=dt(sv),fv=Te({},pl,{data:0}),Gs=dt(fv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pv[e])?!!t[e]:!1}function So(){return yv}var vv=Te({},vi,{key:function(e){if(e.key){var t=mv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gv=dt(vv),bv=Te({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=dt(bv),Sv=Te({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),Ev=dt(Sv),Tv=Te({},pl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=dt(Tv),_v=Te({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=dt(_v),Av=Te({},pl,{newState:0,oldState:0}),Ov=dt(Av),Lv=[9,13,27,32],Eo=ra&&"CompositionEvent"in window,wn=null;ra&&"documentMode"in document&&(wn=document.documentMode);var Mv=ra&&"TextEvent"in window&&!wn,sm=ra&&(!Eo||wn&&8<wn&&11>=wn),Xs=" ",Vs=!1;function dm(e,t){switch(e){case"keyup":return Lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nl=!1;function Bv(e,t){switch(e){case"compositionend":return fm(t);case"keypress":return t.which!==32?null:(Vs=!0,Xs);case"textInput":return e=t.data,e===Xs&&Vs?null:e;default:return null}}function Rv(e,t){if(Nl)return e==="compositionend"||!Eo&&dm(e,t)?(e=om(),er=bo=_a=null,Nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sm&&t.locale!=="ko"?null:t.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dv[e.type]:t==="textarea"}function mm(e,t,a,l){zl?Vl?Vl.push(l):Vl=[l]:zl=l,t=wr(t,"onChange"),0<t.length&&(a=new Ir("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Un=null,Fn=null;function zv(e){cp(e,0)}function Wr(e){var t=Rn(e);if(lm(t))return e}function Zs(e,t){if(e==="change")return t}var hm=!1;if(ra){var Ou;if(ra){var Lu="oninput"in document;if(!Lu){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),Lu=typeof Ks.oninput=="function"}Ou=Lu}else Ou=!1;hm=Ou&&(!document.documentMode||9<document.documentMode)}function Ps(){Un&&(Un.detachEvent("onpropertychange",pm),Fn=Un=null)}function pm(e){if(e.propertyName==="value"&&Wr(Fn)){var t=[];mm(t,Fn,e,go(e)),cm(zv,t)}}function Nv(e,t,a){e==="focusin"?(Ps(),Un=t,Fn=a,Un.attachEvent("onpropertychange",pm)):e==="focusout"&&Ps()}function Hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wr(Fn)}function wv(e,t){if(e==="click")return Wr(t)}function Uv(e,t){if(e==="input"||e==="change")return Wr(t)}function kv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:kv;function Wn(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!dc.call(t,n)||!Et(e[n],t[n]))return!1}return!0}function Js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Is(e,t){var a=Js(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Js(a)}}function ym(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ym(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=gr(e.document)}return t}function To(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jv=ra&&"documentMode"in document&&11>=document.documentMode,Hl=null,gc=null,kn=null,bc=!1;function Fs(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Hl==null||Hl!==gr(l)||(l=Hl,"selectionStart"in l&&To(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),kn&&Wn(kn,l)||(kn=l,l=wr(gc,"onSelect"),0<l.length&&(t=new Ir("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Hl)))}function Ja(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var wl={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Mu={},gm={};ra&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete wl.animationend.animation,delete wl.animationiteration.animation,delete wl.animationstart.animation),"TransitionEvent"in window||delete wl.transitionend.transition);function yl(e){if(Mu[e])return Mu[e];if(!wl[e])return e;var t=wl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in gm)return Mu[e]=t[a];return e}var bm=yl("animationend"),Sm=yl("animationiteration"),Em=yl("animationstart"),qv=yl("transitionrun"),Gv=yl("transitionstart"),Yv=yl("transitioncancel"),Tm=yl("transitionend"),Cm=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function Ut(e,t){Cm.set(e,t),hl(t,[e])}var br=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],Ul=0,Co=0;function $r(){for(var e=Ul,t=Co=Ul=0;t<e;){var a=Ct[t];Ct[t++]=null;var l=Ct[t];Ct[t++]=null;var n=Ct[t];Ct[t++]=null;var i=Ct[t];if(Ct[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&_m(a,n,i)}}function eu(e,t,a,l){Ct[Ul++]=e,Ct[Ul++]=t,Ct[Ul++]=a,Ct[Ul++]=l,Co|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _o(e,t,a,l){return eu(e,t,a,l),Sr(e)}function vl(e,t){return eu(e,null,null,t),Sr(e)}function _m(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-bt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Sr(e){if(50<Kn)throw Kn=0,Gc=null,Error(_(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var kl={};function Xv(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,a,l){return new Xv(e,t,a,l)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function la(e,t){var a=e.alternate;return a===null?(a=pt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function xm(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ar(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")xo(e)&&(r=1);else if(typeof e=="string")r=Pg(e,a,Yt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case uc:return e=pt(31,a,t,n),e.elementType=uc,e.lanes=i,e;case Bl:return nl(a.children,n,i,t);case Vf:r=8,n|=24;break;case nc:return e=pt(12,a,t,n|2),e.elementType=nc,e.lanes=i,e;case ic:return e=pt(13,a,t,n),e.elementType=ic,e.lanes=i,e;case rc:return e=pt(19,a,t,n),e.elementType=rc,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ea:r=10;break e;case Qf:r=9;break e;case so:r=11;break e;case fo:r=14;break e;case va:r=16,l=null;break e}r=29,a=Error(_(130,e===null?"null":typeof e,"")),l=null}return t=pt(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function nl(e,t,a,l){return e=pt(7,e,l,t),e.lanes=a,e}function Bu(e,t,a){return e=pt(6,e,null,t),e.lanes=a,e}function Am(e){var t=pt(18,null,null,0);return t.stateNode=e,t}function Ru(e,t,a){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ws=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var a=Ws.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ds(t)},Ws.set(e,t),t)}return{value:e,source:t,stack:Ds(t)}}var jl=[],ql=0,Er=null,$n=0,xt=[],At=0,ja=null,jt=1,qt="";function Wt(e,t){jl[ql++]=$n,jl[ql++]=Er,Er=e,$n=t}function Om(e,t,a){xt[At++]=jt,xt[At++]=qt,xt[At++]=ja,ja=e;var l=jt;e=qt;var n=32-bt(l)-1;l&=~(1<<n),a+=1;var i=32-bt(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,jt=1<<32-bt(t)+n|a<<n|l,qt=i+e}else jt=1<<i|a<<n|l,qt=e}function Ao(e){e.return!==null&&(Wt(e,1),Om(e,1,0))}function Oo(e){for(;e===Er;)Er=jl[--ql],jl[ql]=null,$n=jl[--ql],jl[ql]=null;for(;e===ja;)ja=xt[--At],xt[At]=null,qt=xt[--At],xt[At]=null,jt=xt[--At],xt[At]=null}function Lm(e,t){xt[At++]=jt,xt[At++]=qt,xt[At++]=ja,jt=t.id,qt=t.overflow,ja=e}var Ke=null,Se=null,ee=!1,Ba=null,Mt=!1,Ec=Error(_(519));function qa(e){var t=Error(_(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(Lt(t,e)),Ec}function $s(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[st]=l,a){case"dialog":I("cancel",t),I("close",t);break;case"iframe":case"object":case"embed":I("load",t);break;case"video":case"audio":for(a=0;a<ni.length;a++)I(ni[a],t);break;case"source":I("error",t);break;case"img":case"image":case"link":I("error",t),I("load",t);break;case"details":I("toggle",t);break;case"input":I("invalid",t),nm(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":I("invalid",t);break;case"textarea":I("invalid",t),rm(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||sp(t.textContent,a)?(l.popover!=null&&(I("beforetoggle",t),I("toggle",t)),l.onScroll!=null&&I("scroll",t),l.onScrollEnd!=null&&I("scrollend",t),l.onClick!=null&&(t.onclick=ta),t=!0):t=!1,t||qa(e,!0)}function ed(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:Ke=Ke.return}}function _l(e){if(e!==Ke)return!1;if(!ee)return ed(e),ee=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zc(e.type,e.memoizedProps)),a=!a),a&&Se&&qa(e),ed(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));Se=qd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));Se=qd(e)}else t===27?(t=Se,Va(e.type)?(e=Ic,Ic=null,Se=e):Se=t):Se=Ke?Rt(e.stateNode.nextSibling):null;return!0}function cl(){Se=Ke=null,ee=!1}function Du(){var e=Ba;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),Ba=null),e}function ei(e){Ba===null?Ba=[e]:Ba.push(e)}var Tc=Xt(null),gl=null,aa=null;function ba(e,t,a){ge(Tc,t._currentValue),t._currentValue=a}function na(e){e._currentValue=Tc.current,Ye(Tc)}function Cc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function _c(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var c=0;c<t.length;c++)if(u.context===t[c]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Cc(i.return,a,e),l||(r=null);break e}i=u.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(_(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Cc(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function sn(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(_(387));if(r=r.memoizedProps,r!==null){var u=n.type;Et(n.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(n===hr.current){if(r=n.alternate,r===null)throw Error(_(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(ri):e=[ri])}n=n.return}e!==null&&_c(t,e,a,l),t.flags|=262144}function Tr(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ol(e){gl=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return Mm(gl,e)}function Yi(e,t){return gl===null&&ol(e),Mm(e,t)}function Mm(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(_(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return a}var Vv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Qv=je.unstable_scheduleCallback,Zv=je.unstable_NormalPriority,we={$$typeof:ea,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lo(){return{controller:new Vv,data:new Map,refCount:0}}function gi(e){e.refCount--,e.refCount===0&&Qv(Zv,function(){e.controller.abort()})}var jn=null,xc=0,Wl=0,Ql=null;function Kv(e,t){if(jn===null){var a=jn=[];xc=0,Wl=$o(),Ql={status:"pending",value:void 0,then:function(l){a.push(l)}}}return xc++,t.then(td,td),t}function td(){if(--xc===0&&jn!==null){Ql!==null&&(Ql.status="fulfilled");var e=jn;jn=null,Wl=0,Ql=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pv(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ad=X.S;X.S=function(e,t){Xh=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Kv(e,t),ad!==null&&ad(e,t)};var il=Xt(null);function Mo(){var e=il.current;return e!==null?e:ye.pooledCache}function lr(e,t){t===null?ge(il,il.current):ge(il,t.pool)}function Bm(){var e=Mo();return e===null?null:{parent:we._currentValue,pool:e}}var dn=Error(_(460)),Bo=Error(_(474)),tu=Error(_(542)),Cr={then:function(){}};function ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rm(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ta,ta),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,id(e),e;default:if(typeof t.status=="string")t.then(ta,ta);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(_(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,id(e),e}throw rl=t,dn}}function Wa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rl=a,dn):a}}var rl=null;function nd(){if(rl===null)throw Error(_(459));var e=rl;return rl=null,e}function id(e){if(e===dn||e===tu)throw Error(_(483))}var Zl=null,ti=0;function Xi(e){var t=ti;return ti+=1,Zl===null&&(Zl=[]),Rm(Zl,e,t)}function Tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vi(e,t){throw t.$$typeof===Ny?Error(_(525)):(e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dm(e){function t(p,s){if(e){var g=p.deletions;g===null?(p.deletions=[s],p.flags|=16):g.push(s)}}function a(p,s){if(!e)return null;for(;s!==null;)t(p,s),s=s.sibling;return null}function l(p){for(var s=new Map;p!==null;)p.key!==null?s.set(p.key,p):s.set(p.index,p),p=p.sibling;return s}function n(p,s){return p=la(p,s),p.index=0,p.sibling=null,p}function i(p,s,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<s?(p.flags|=67108866,s):g):(p.flags|=67108866,s)):(p.flags|=1048576,s)}function r(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function u(p,s,g,S){return s===null||s.tag!==6?(s=Bu(g,p.mode,S),s.return=p,s):(s=n(s,g),s.return=p,s)}function c(p,s,g,S){var M=g.type;return M===Bl?m(p,s,g.props.children,S,g.key):s!==null&&(s.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===va&&Wa(M)===s.type)?(s=n(s,g.props),Tn(s,g),s.return=p,s):(s=ar(g.type,g.key,g.props,null,p.mode,S),Tn(s,g),s.return=p,s)}function o(p,s,g,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==g.containerInfo||s.stateNode.implementation!==g.implementation?(s=Ru(g,p.mode,S),s.return=p,s):(s=n(s,g.children||[]),s.return=p,s)}function m(p,s,g,S,M){return s===null||s.tag!==7?(s=nl(g,p.mode,S,M),s.return=p,s):(s=n(s,g),s.return=p,s)}function f(p,s,g){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Bu(""+s,p.mode,g),s.return=p,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case wi:return g=ar(s.type,s.key,s.props,null,p.mode,g),Tn(g,s),g.return=p,g;case Mn:return s=Ru(s,p.mode,g),s.return=p,s;case va:return s=Wa(s),f(p,s,g)}if(Bn(s)||bn(s))return s=nl(s,p.mode,g,null),s.return=p,s;if(typeof s.then=="function")return f(p,Xi(s),g);if(s.$$typeof===ea)return f(p,Yi(p,s),g);Vi(p,s)}return null}function d(p,s,g,S){var M=s!==null?s.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return M!==null?null:u(p,s,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wi:return g.key===M?c(p,s,g,S):null;case Mn:return g.key===M?o(p,s,g,S):null;case va:return g=Wa(g),d(p,s,g,S)}if(Bn(g)||bn(g))return M!==null?null:m(p,s,g,S,null);if(typeof g.then=="function")return d(p,s,Xi(g),S);if(g.$$typeof===ea)return d(p,s,Yi(p,g),S);Vi(p,g)}return null}function h(p,s,g,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return p=p.get(g)||null,u(s,p,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wi:return p=p.get(S.key===null?g:S.key)||null,c(s,p,S,M);case Mn:return p=p.get(S.key===null?g:S.key)||null,o(s,p,S,M);case va:return S=Wa(S),h(p,s,g,S,M)}if(Bn(S)||bn(S))return p=p.get(g)||null,m(s,p,S,M,null);if(typeof S.then=="function")return h(p,s,g,Xi(S),M);if(S.$$typeof===ea)return h(p,s,g,Yi(s,S),M);Vi(s,S)}return null}function T(p,s,g,S){for(var M=null,G=null,v=s,L=s=0,N=null;v!==null&&L<g.length;L++){v.index>L?(N=v,v=null):N=v.sibling;var D=d(p,v,g[L],S);if(D===null){v===null&&(v=N);break}e&&v&&D.alternate===null&&t(p,v),s=i(D,s,L),G===null?M=D:G.sibling=D,G=D,v=N}if(L===g.length)return a(p,v),ee&&Wt(p,L),M;if(v===null){for(;L<g.length;L++)v=f(p,g[L],S),v!==null&&(s=i(v,s,L),G===null?M=v:G.sibling=v,G=v);return ee&&Wt(p,L),M}for(v=l(v);L<g.length;L++)N=h(v,p,L,g[L],S),N!==null&&(e&&N.alternate!==null&&v.delete(N.key===null?L:N.key),s=i(N,s,L),G===null?M=N:G.sibling=N,G=N);return e&&v.forEach(function(ae){return t(p,ae)}),ee&&Wt(p,L),M}function C(p,s,g,S){if(g==null)throw Error(_(151));for(var M=null,G=null,v=s,L=s=0,N=null,D=g.next();v!==null&&!D.done;L++,D=g.next()){v.index>L?(N=v,v=null):N=v.sibling;var ae=d(p,v,D.value,S);if(ae===null){v===null&&(v=N);break}e&&v&&ae.alternate===null&&t(p,v),s=i(ae,s,L),G===null?M=ae:G.sibling=ae,G=ae,v=N}if(D.done)return a(p,v),ee&&Wt(p,L),M;if(v===null){for(;!D.done;L++,D=g.next())D=f(p,D.value,S),D!==null&&(s=i(D,s,L),G===null?M=D:G.sibling=D,G=D);return ee&&Wt(p,L),M}for(v=l(v);!D.done;L++,D=g.next())D=h(v,p,L,D.value,S),D!==null&&(e&&D.alternate!==null&&v.delete(D.key===null?L:D.key),s=i(D,s,L),G===null?M=D:G.sibling=D,G=D);return e&&v.forEach(function(le){return t(p,le)}),ee&&Wt(p,L),M}function O(p,s,g,S){if(typeof g=="object"&&g!==null&&g.type===Bl&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wi:e:{for(var M=g.key;s!==null;){if(s.key===M){if(M=g.type,M===Bl){if(s.tag===7){a(p,s.sibling),S=n(s,g.props.children),S.return=p,p=S;break e}}else if(s.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===va&&Wa(M)===s.type){a(p,s.sibling),S=n(s,g.props),Tn(S,g),S.return=p,p=S;break e}a(p,s);break}else t(p,s);s=s.sibling}g.type===Bl?(S=nl(g.props.children,p.mode,S,g.key),S.return=p,p=S):(S=ar(g.type,g.key,g.props,null,p.mode,S),Tn(S,g),S.return=p,p=S)}return r(p);case Mn:e:{for(M=g.key;s!==null;){if(s.key===M)if(s.tag===4&&s.stateNode.containerInfo===g.containerInfo&&s.stateNode.implementation===g.implementation){a(p,s.sibling),S=n(s,g.children||[]),S.return=p,p=S;break e}else{a(p,s);break}else t(p,s);s=s.sibling}S=Ru(g,p.mode,S),S.return=p,p=S}return r(p);case va:return g=Wa(g),O(p,s,g,S)}if(Bn(g))return T(p,s,g,S);if(bn(g)){if(M=bn(g),typeof M!="function")throw Error(_(150));return g=M.call(g),C(p,s,g,S)}if(typeof g.then=="function")return O(p,s,Xi(g),S);if(g.$$typeof===ea)return O(p,s,Yi(p,g),S);Vi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,s!==null&&s.tag===6?(a(p,s.sibling),S=n(s,g),S.return=p,p=S):(a(p,s),S=Bu(g,p.mode,S),S.return=p,p=S),r(p)):a(p,s)}return function(p,s,g,S){try{ti=0;var M=O(p,s,g,S);return Zl=null,M}catch(v){if(v===dn||v===tu)throw v;var G=pt(29,v,null,p.mode);return G.lanes=S,G.return=p,G}finally{}}}var sl=Dm(!0),zm=Dm(!1),ga=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ce&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Sr(e),_m(e,null,a),t}return eu(e,l,t,a),Sr(e)}function qn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ff(e,a)}}function zu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Oc=!1;function Gn(){if(Oc){var e=Ql;if(e!==null)throw e}}function Yn(e,t,a,l){Oc=!1;var n=e.updateQueue;ga=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var c=u,o=c.next;c.next=null,r===null?i=o:r.next=o,r=c;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==r&&(u===null?m.firstBaseUpdate=o:u.next=o,m.lastBaseUpdate=c))}if(i!==null){var f=n.baseState;r=0,m=o=c=null,u=i;do{var d=u.lane&-536870913,h=d!==u.lane;if(h?(W&d)===d:(l&d)===d){d!==0&&d===Wl&&(Oc=!0),m!==null&&(m=m.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var T=e,C=u;d=t;var O=a;switch(C.tag){case 1:if(T=C.payload,typeof T=="function"){f=T.call(O,f,d);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=C.payload,d=typeof T=="function"?T.call(O,f,d):T,d==null)break e;f=Te({},f,d);break e;case 2:ga=!0}}d=u.callback,d!==null&&(e.flags|=64,h&&(e.flags|=8192),h=n.callbacks,h===null?n.callbacks=[d]:h.push(d))}else h={lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(o=m=h,c=f):m=m.next=h,r|=d;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;h=u,u=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);m===null&&(c=f),n.baseState=c,n.firstBaseUpdate=o,n.lastBaseUpdate=m,i===null&&(n.shared.lanes=0),Ya|=r,e.lanes=r,e.memoizedState=f}}function Nm(e,t){if(typeof e!="function")throw Error(_(191,e));e.call(t)}function Hm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nm(a[e],t)}var $l=Xt(null),_r=Xt(0);function rd(e,t){e=sa,ge(_r,e),ge($l,t),sa=e|t.baseLanes}function Lc(){ge(_r,sa),ge($l,$l.current)}function Do(){sa=_r.current,Ye($l),Ye(_r)}var Tt=Xt(null),Bt=null;function Sa(e){var t=e.alternate;ge(Be,Be.current&1),ge(Tt,e),Bt===null&&(t===null||$l.current!==null||t.memoizedState!==null)&&(Bt=e)}function Mc(e){ge(Be,Be.current),ge(Tt,e),Bt===null&&(Bt=e)}function wm(e){e.tag===22?(ge(Be,Be.current),ge(Tt,e),Bt===null&&(Bt=e)):Ea()}function Ea(){ge(Be,Be.current),ge(Tt,Tt.current)}function ht(e){Ye(Tt),Bt===e&&(Bt=null),Ye(Be)}var Be=Xt(0);function xr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pc(a)||Jc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=0,K=null,pe=null,Ne=null,Ar=!1,Kl=!1,dl=!1,Or=0,ai=0,Pl=null,Jv=0;function Oe(){throw Error(_(321))}function zo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Et(e[a],t[a]))return!1;return!0}function No(e,t,a,l,n,i){return ua=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?mh:Qo,dl=!1,i=a(l,n),dl=!1,Kl&&(i=km(t,a,l,n)),Um(e),i}function Um(e){X.H=li;var t=pe!==null&&pe.next!==null;if(ua=0,Ne=pe=K=null,Ar=!1,ai=0,Pl=null,t)throw Error(_(300));e===null||Ue||(e=e.dependencies,e!==null&&Tr(e)&&(Ue=!0))}function km(e,t,a,l){K=e;var n=0;do{if(Kl&&(Pl=null),ai=0,Kl=!1,25<=n)throw Error(_(301));if(n+=1,Ne=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}X.H=hh,i=t(a,l)}while(Kl);return i}function Iv(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(K.flags|=1024),t}function Ho(){var e=Or!==0;return Or=0,e}function wo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Uo(e){if(Ar){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ar=!1}ua=0,Ne=pe=K=null,Kl=!1,ai=Or=0,Pl=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?K.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Re(){if(pe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Ne===null?K.memoizedState:Ne.next;if(t!==null)Ne=t,pe=e;else{if(e===null)throw K.alternate===null?Error(_(467)):Error(_(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ne===null?K.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=ai;return ai+=1,Pl===null&&(Pl=[]),e=Rm(Pl,e,t),t=K,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?mh:Qo),e}function lu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===ea)return Pe(e)}throw Error(_(438,String(e)))}function ko(e){var t=null,a=K.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=K.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=au(),K.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Hy;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=Re();return jo(t,pe,e)}function jo(e,t,a){var l=e.queue;if(l===null)throw Error(_(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=r=null,c=null,o=t,m=!1;do{var f=o.lane&-536870913;if(f!==o.lane?(W&f)===f:(ua&f)===f){var d=o.revertLane;if(d===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),f===Wl&&(m=!0);else if((ua&d)===d){o=o.next,d===Wl&&(m=!0);continue}else f={lane:0,revertLane:o.revertLane,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},c===null?(u=c=f,r=i):c=c.next=f,K.lanes|=d,Ya|=d;f=o.action,dl&&a(i,f),i=o.hasEagerState?o.eagerState:a(i,f)}else d={lane:f,revertLane:o.revertLane,gesture:o.gesture,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},c===null?(u=c=d,r=i):c=c.next=d,K.lanes|=f,Ya|=f;o=o.next}while(o!==null&&o!==t);if(c===null?r=i:c.next=u,!Et(i,e.memoizedState)&&(Ue=!0,m&&(a=Ql,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nu(e){var t=Re(),a=t.queue;if(a===null)throw Error(_(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);Et(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function jm(e,t,a){var l=K,n=Re(),i=ee;if(i){if(a===void 0)throw Error(_(407));a=a()}else a=t();var r=!Et((pe||n).memoizedState,a);if(r&&(n.memoizedState=a,Ue=!0),n=n.queue,qo(Ym.bind(null,l,n,e),[e]),n.getSnapshot!==t||r||Ne!==null&&Ne.memoizedState.tag&1){if(l.flags|=2048,en(9,{destroy:void 0},Gm.bind(null,l,n,a,t),null),ye===null)throw Error(_(349));i||ua&127||qm(l,t,a)}return a}function qm(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t=au(),K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gm(e,t,a,l){t.value=a,t.getSnapshot=l,Xm(t)&&Vm(e)}function Ym(e,t,a){return a(function(){Xm(t)&&Vm(e)})}function Xm(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Et(e,a)}catch{return!0}}function Vm(e){var t=vl(e,2);t!==null&&ot(t,e,2)}function Bc(e){var t=et();if(typeof e=="function"){var a=e;if(e=a(),dl){Ca(!0);try{a()}finally{Ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function Qm(e,t,a,l){return e.baseState=a,jo(e,pe,typeof l=="function"?l:ca)}function Fv(e,t,a,l,n){if(iu(e))throw Error(_(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};X.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Zm(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Zm(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=X.T,r={};X.T=r;try{var u=a(n,l),c=X.S;c!==null&&c(r,u),ud(e,t,u)}catch(o){Rc(e,t,o)}finally{i!==null&&r.types!==null&&(i.types=r.types),X.T=i}}else try{i=a(n,l),ud(e,t,i)}catch(o){Rc(e,t,o)}}function ud(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){cd(e,t,l)},function(l){return Rc(e,t,l)}):cd(e,t,a)}function cd(e,t,a){t.status="fulfilled",t.value=a,Km(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Zm(e,a)))}function Rc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Km(t),t=t.next;while(t!==l)}e.action=null}function Km(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pm(e,t){return t}function od(e,t){if(ee){var a=ye.formState;if(a!==null){e:{var l=K;if(ee){if(Se){t:{for(var n=Se,i=Mt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Rt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Se=Rt(n.nextSibling),l=n.data==="F!";break e}}qa(l)}l=!1}l&&(t=a[0])}}return a=et(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pm,lastRenderedState:t},a.queue=l,a=sh.bind(null,K,l),l.dispatch=a,l=Bc(!1),i=Vo.bind(null,K,!1,l.queue),l=et(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Fv.bind(null,K,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function sd(e){var t=Re();return Jm(t,pe,e)}function Jm(e,t,a){if(t=jo(e,t,Pm)[0],e=nr(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bi(t)}catch(r){throw r===dn?tu:r}else l=t;t=Re();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(K.flags|=2048,en(9,{destroy:void 0},Wv.bind(null,n,a),null)),[l,i,e]}function Wv(e,t){e.action=t}function dd(e){var t=Re(),a=pe;if(a!==null)return Jm(t,a,e);Re(),t=t.memoizedState,a=Re();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function en(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=K.updateQueue,t===null&&(t=au(),K.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Im(){return Re().memoizedState}function ir(e,t,a,l){var n=et();K.flags|=e,n.memoizedState=en(1|t,{destroy:void 0},a,l===void 0?null:l)}function nu(e,t,a,l){var n=Re();l=l===void 0?null:l;var i=n.memoizedState.inst;pe!==null&&l!==null&&zo(l,pe.memoizedState.deps)?n.memoizedState=en(t,i,a,l):(K.flags|=e,n.memoizedState=en(1|t,i,a,l))}function fd(e,t){ir(8390656,8,e,t)}function qo(e,t){nu(2048,8,e,t)}function $v(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=au(),K.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Fm(e){var t=Re().memoizedState;return $v({ref:t,nextImpl:e}),function(){if(ce&2)throw Error(_(440));return t.impl.apply(void 0,arguments)}}function Wm(e,t){return nu(4,2,e,t)}function $m(e,t){return nu(4,4,e,t)}function eh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function th(e,t,a){a=a!=null?a.concat([e]):null,nu(4,4,eh.bind(null,t,e),a)}function Go(){}function ah(e,t){var a=Re();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&zo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function lh(e,t){var a=Re();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&zo(t,l[1]))return l[0];if(l=e(),dl){Ca(!0);try{e()}finally{Ca(!1)}}return a.memoizedState=[l,t],l}function Yo(e,t,a){return a===void 0||ua&1073741824&&!(W&261930)?e.memoizedState=t:(e.memoizedState=a,e=Qh(),K.lanes|=e,Ya|=e,a)}function nh(e,t,a,l){return Et(a,t)?a:$l.current!==null?(e=Yo(e,a,l),Et(e,t)||(Ue=!0),e):!(ua&42)||ua&1073741824&&!(W&261930)?(Ue=!0,e.memoizedState=a):(e=Qh(),K.lanes|=e,Ya|=e,t)}function ih(e,t,a,l,n){var i=oe.p;oe.p=i!==0&&8>i?i:8;var r=X.T,u={};X.T=u,Vo(e,!1,t,a);try{var c=n(),o=X.S;if(o!==null&&o(u,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=Pv(c,l);Xn(e,t,m,St(e))}else Xn(e,t,l,St(e))}catch(f){Xn(e,t,{then:function(){},status:"rejected",reason:f},St())}finally{oe.p=i,r!==null&&u.types!==null&&(r.types=u.types),X.T=r}}function eg(){}function Dc(e,t,a,l){if(e.tag!==5)throw Error(_(476));var n=rh(e).queue;ih(e,n,t,ll,a===null?eg:function(){return uh(e),a(l)})}function rh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ll,baseState:ll,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:ll},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uh(e){var t=rh(e);t.next===null&&(t=e.alternate.memoizedState),Xn(e,t.next.queue,{},St())}function Xo(){return Pe(ri)}function ch(){return Re().memoizedState}function oh(){return Re().memoizedState}function tg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=Ra(a);var l=Da(t,e,a);l!==null&&(ot(l,t,a),qn(l,t,a)),t={cache:Lo()},e.payload=t;return}t=t.return}}function ag(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},iu(e)?dh(t,a):(a=_o(e,t,a,l),a!==null&&(ot(a,e,l),fh(a,t,l)))}function sh(e,t,a){var l=St();Xn(e,t,a,l)}function Xn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(iu(e))dh(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,u=i(r,a);if(n.hasEagerState=!0,n.eagerState=u,Et(u,r))return eu(e,t,n,0),ye===null&&$r(),!1}catch{}finally{}if(a=_o(e,t,n,l),a!==null)return ot(a,e,l),fh(a,t,l),!0}return!1}function Vo(e,t,a,l){if(l={lane:2,revertLane:$o(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},iu(e)){if(t)throw Error(_(479))}else t=_o(e,a,l,2),t!==null&&ot(t,e,2)}function iu(e){var t=e.alternate;return e===K||t!==null&&t===K}function dh(e,t){Kl=Ar=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function fh(e,t,a){if(a&4194048){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ff(e,a)}}var li={readContext:Pe,use:lu,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};li.useEffectEvent=Oe;var mh={readContext:Pe,use:lu,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:fd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ir(4194308,4,eh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ir(4194308,4,e,t)},useInsertionEffect:function(e,t){ir(4,2,e,t)},useMemo:function(e,t){var a=et();t=t===void 0?null:t;var l=e();if(dl){Ca(!0);try{e()}finally{Ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=et();if(a!==void 0){var n=a(t);if(dl){Ca(!0);try{a(t)}finally{Ca(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=ag.bind(null,K,e),[l.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=Bc(e);var t=e.queue,a=sh.bind(null,K,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Go,useDeferredValue:function(e,t){var a=et();return Yo(a,e,t)},useTransition:function(){var e=Bc(!1);return e=ih.bind(null,K,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=K,n=et();if(ee){if(a===void 0)throw Error(_(407));a=a()}else{if(a=t(),ye===null)throw Error(_(349));W&127||qm(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,fd(Ym.bind(null,l,i,e),[e]),l.flags|=2048,en(9,{destroy:void 0},Gm.bind(null,l,i,a,t),null),a},useId:function(){var e=et(),t=ye.identifierPrefix;if(ee){var a=qt,l=jt;a=(l&~(1<<32-bt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Or++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Jv++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xo,useFormState:od,useActionState:od,useOptimistic:function(e){var t=et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Vo.bind(null,K,!0,a),a.dispatch=t,[e,t]},useMemoCache:ko,useCacheRefresh:function(){return et().memoizedState=tg.bind(null,K)},useEffectEvent:function(e){var t=et(),a={impl:e};return t.memoizedState=a,function(){if(ce&2)throw Error(_(440));return a.impl.apply(void 0,arguments)}}},Qo={readContext:Pe,use:lu,useCallback:ah,useContext:Pe,useEffect:qo,useImperativeHandle:th,useInsertionEffect:Wm,useLayoutEffect:$m,useMemo:lh,useReducer:nr,useRef:Im,useState:function(){return nr(ca)},useDebugValue:Go,useDeferredValue:function(e,t){var a=Re();return nh(a,pe.memoizedState,e,t)},useTransition:function(){var e=nr(ca)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:jm,useId:ch,useHostTransitionStatus:Xo,useFormState:sd,useActionState:sd,useOptimistic:function(e,t){var a=Re();return Qm(a,pe,e,t)},useMemoCache:ko,useCacheRefresh:oh};Qo.useEffectEvent=Fm;var hh={readContext:Pe,use:lu,useCallback:ah,useContext:Pe,useEffect:qo,useImperativeHandle:th,useInsertionEffect:Wm,useLayoutEffect:$m,useMemo:lh,useReducer:Nu,useRef:Im,useState:function(){return Nu(ca)},useDebugValue:Go,useDeferredValue:function(e,t){var a=Re();return pe===null?Yo(a,e,t):nh(a,pe.memoizedState,e,t)},useTransition:function(){var e=Nu(ca)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:jm,useId:ch,useHostTransitionStatus:Xo,useFormState:dd,useActionState:dd,useOptimistic:function(e,t){var a=Re();return pe!==null?Qm(a,pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ko,useCacheRefresh:oh};hh.useEffectEvent=Fm;function Hu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:Te({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),n=Ra(l);n.payload=t,a!=null&&(n.callback=a),t=Da(e,n,l),t!==null&&(ot(t,e,l),qn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),n=Ra(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Da(e,n,l),t!==null&&(ot(t,e,l),qn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=Ra(a);l.tag=2,t!=null&&(l.callback=t),t=Da(e,l,a),t!==null&&(ot(t,e,a),qn(t,e,a))}};function md(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!Wn(a,l)||!Wn(n,i):!0}function hd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function fl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=Te({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ph(e){br(e)}function yh(e){console.error(e)}function vh(e){br(e)}function Lr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function pd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Nc(e,t,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Lr(e,t)},a}function gh(e){return e=Ra(e),e.tag=3,e}function bh(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){pd(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){pd(t,a,l),typeof n!="function"&&(za===null?za=new Set([this]):za.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function lg(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&sn(t,a,n,!0),a=Tt.current,a!==null){switch(a.tag){case 31:case 13:return Bt===null?zr():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Cr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Zu(e,l,n)),!1;case 22:return a.flags|=65536,l===Cr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Zu(e,l,n)),!1}throw Error(_(435,a.tag))}return Zu(e,l,n),zr(),!1}if(ee)return t=Tt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ec&&(e=Error(_(422),{cause:l}),ei(Lt(e,a)))):(l!==Ec&&(t=Error(_(423),{cause:l}),ei(Lt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Lt(l,a),n=Nc(e.stateNode,l,n),zu(e,n),Le!==4&&(Le=2)),!1;var i=Error(_(520),{cause:l});if(i=Lt(i,a),Zn===null?Zn=[i]:Zn.push(i),Le!==4&&(Le=2),t===null)return!0;l=Lt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Nc(a.stateNode,l,e),zu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(za===null||!za.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=gh(n),bh(n,e,a,l),zu(a,n),!1}a=a.return}while(a!==null);return!1}var Zo=Error(_(461)),Ue=!1;function Qe(e,t,a,l){t.child=e===null?zm(t,null,a,l):sl(t,e.child,a,l)}function yd(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var u in l)u!=="ref"&&(r[u]=l[u])}else r=l;return ol(t),l=No(e,t,a,r,i,n),u=Ho(),e!==null&&!Ue?(wo(e,t,n),oa(e,t,n)):(ee&&u&&Ao(t),t.flags|=1,Qe(e,t,l,n),t.child)}function vd(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!xo(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Sh(e,t,i,l,n)):(e=ar(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ko(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wn,a(r,l)&&e.ref===t.ref)return oa(e,t,n)}return t.flags|=1,e=la(i,l),e.ref=t.ref,e.return=t,t.child=e}function Sh(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wn(i,l)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=l=i,Ko(e,n))e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,oa(e,t,n)}return Hc(e,t,a,l,n)}function Eh(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return gd(e,t,i,a,l)}if(a&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(t,i!==null?i.cachePool:null),i!==null?rd(t,i):Lc(),wm(t);else return l=t.lanes=536870912,gd(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(lr(t,i.cachePool),rd(t,i),Ea(),t.memoizedState=null):(e!==null&&lr(t,null),Lc(),Ea());return Qe(e,t,n,a),t.child}function Dn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gd(e,t,a,l,n){var i=Mo();return i=i===null?null:{parent:we._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&lr(t,null),Lc(),wm(t),e!==null&&sn(e,t,l,!0),t.childLanes=n,null}function rr(e,t){return t=Mr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function bd(e,t,a){return sl(t,e.child,null,a),e=rr(t,t.pendingProps),e.flags|=2,ht(t),t.memoizedState=null,e}function ng(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(l.mode==="hidden")return e=rr(t,l),t.lanes=536870912,Dn(null,e);if(Mc(t),(e=Se)?(e=mp(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:jt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=Am(e),a.return=t,t.child=a,Ke=t,Se=null)):e=null,e===null)throw qa(t);return t.lanes=536870912,null}return rr(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Mc(t),n)if(t.flags&256)t.flags&=-257,t=bd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(_(558));else if(Ue||sn(e,t,a,!1),n=(a&e.childLanes)!==0,Ue||n){if(l=ye,l!==null&&(r=Wf(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,vl(e,r),ot(l,e,r),Zo;zr(),t=bd(e,t,a)}else e=i.treeContext,Se=Rt(r.nextSibling),Ke=t,ee=!0,Ba=null,Mt=!1,e!==null&&Lm(t,e),t=rr(t,l),t.flags|=4096;return t}return e=la(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ur(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(_(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Hc(e,t,a,l,n){return ol(t),a=No(e,t,a,l,void 0,n),l=Ho(),e!==null&&!Ue?(wo(e,t,n),oa(e,t,n)):(ee&&l&&Ao(t),t.flags|=1,Qe(e,t,a,n),t.child)}function Sd(e,t,a,l,n,i){return ol(t),t.updateQueue=null,a=km(t,l,a,n),Um(e),l=Ho(),e!==null&&!Ue?(wo(e,t,i),oa(e,t,i)):(ee&&l&&Ao(t),t.flags|=1,Qe(e,t,a,i),t.child)}function Ed(e,t,a,l,n){if(ol(t),t.stateNode===null){var i=kl,r=a.contextType;typeof r=="object"&&r!==null&&(i=Pe(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ro(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?Pe(r):kl,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Hu(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&zc.enqueueReplaceState(i,i.state,null),Yn(t,l,i,n),Gn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,c=fl(a,u);i.props=c;var o=i.context,m=a.contextType;r=kl,typeof m=="object"&&m!==null&&(r=Pe(m));var f=a.getDerivedStateFromProps;m=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||o!==r)&&hd(t,i,l,r),ga=!1;var d=t.memoizedState;i.state=d,Yn(t,l,i,n),Gn(),o=t.memoizedState,u||d!==o||ga?(typeof f=="function"&&(Hu(t,a,f,l),o=t.memoizedState),(c=ga||md(t,a,c,l,d,o,r))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=o),i.props=l,i.state=o,i.context=r,l=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Ac(e,t),r=t.memoizedProps,m=fl(a,r),i.props=m,f=t.pendingProps,d=i.context,o=a.contextType,c=kl,typeof o=="object"&&o!==null&&(c=Pe(o)),u=a.getDerivedStateFromProps,(o=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==f||d!==c)&&hd(t,i,l,c),ga=!1,d=t.memoizedState,i.state=d,Yn(t,l,i,n),Gn();var h=t.memoizedState;r!==f||d!==h||ga||e!==null&&e.dependencies!==null&&Tr(e.dependencies)?(typeof u=="function"&&(Hu(t,a,u,l),h=t.memoizedState),(m=ga||md(t,a,m,l,d,h,c)||e!==null&&e.dependencies!==null&&Tr(e.dependencies))?(o||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,h,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,h,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=h),i.props=l,i.state=h,i.context=c,l=m):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ur(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=sl(t,e.child,null,n),t.child=sl(t,null,a,n)):Qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=oa(e,t,n),e}function Td(e,t,a,l){return cl(),t.flags|=256,Qe(e,t,a,l),t.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(e){return{baseLanes:e,cachePool:Bm()}}function ku(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function Th(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(n?Sa(t):Ea(),(e=Se)?(e=mp(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:jt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=Am(e),a.return=t,t.child=a,Ke=t,Se=null)):e=null,e===null)throw qa(t);return Jc(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(Ea(),n=t.mode,u=Mr({mode:"hidden",children:u},n),l=nl(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=Uu(a),l.childLanes=ku(e,r,a),t.memoizedState=wu,Dn(null,l)):(Sa(t),wc(t,u))}var c=e.memoizedState;if(c!==null&&(u=c.dehydrated,u!==null)){if(i)t.flags&256?(Sa(t),t.flags&=-257,t=ju(e,t,a)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),u=l.fallback,n=t.mode,l=Mr({mode:"visible",children:l.children},n),u=nl(u,n,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,sl(t,e.child,null,a),l=t.child,l.memoizedState=Uu(a),l.childLanes=ku(e,r,a),t.memoizedState=wu,t=Dn(null,l));else if(Sa(t),Jc(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var o=r.dgst;r=o,l=Error(_(419)),l.stack="",l.digest=r,ei({value:l,source:null,stack:null}),t=ju(e,t,a)}else if(Ue||sn(e,t,a,!1),r=(a&e.childLanes)!==0,Ue||r){if(r=ye,r!==null&&(l=Wf(r,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,vl(e,l),ot(r,e,l),Zo;Pc(u)||zr(),t=ju(e,t,a)}else Pc(u)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,Se=Rt(u.nextSibling),Ke=t,ee=!0,Ba=null,Mt=!1,e!==null&&Lm(t,e),t=wc(t,l.children),t.flags|=4096);return t}return n?(Ea(),u=l.fallback,n=t.mode,c=e.child,o=c.sibling,l=la(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,o!==null?u=la(o,u):(u=nl(u,n,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,Dn(null,l),l=t.child,u=e.child.memoizedState,u===null?u=Uu(a):(n=u.cachePool,n!==null?(c=we._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Bm(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=ku(e,r,a),t.memoizedState=wu,Dn(e.child,l)):(Sa(t),a=e.child,e=a.sibling,a=la(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function wc(e,t){return t=Mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mr(e,t){return e=pt(22,e,null,t),e.lanes=0,e}function ju(e,t,a){return sl(t,e.child,null,a),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Cc(e.return,t,a)}function qu(e,t,a,l,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n,r.treeForkCount=i)}function Ch(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=Be.current,u=(r&2)!==0;if(u?(r=r&1|2,t.flags|=128):r&=1,ge(Be,r),Qe(e,t,l,a),l=ee?$n:0,!u&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,a,t);else if(e.tag===19)Cd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&xr(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),qu(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&xr(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}qu(t,!0,a,null,i,l);break;case"together":qu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function oa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,!(a&t.childLanes))if(e!==null){if(sn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,a=la(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=la(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ko(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Tr(e)))}function ig(e,t,a){switch(t.tag){case 3:pr(t,t.stateNode.containerInfo),ba(t,we,e.memoizedState.cache),cl();break;case 27:case 5:sc(t);break;case 4:pr(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Mc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Sa(t),t.flags|=128,null):a&t.child.childLanes?Th(e,t,a):(Sa(t),e=oa(e,t,a),e!==null?e.sibling:null);Sa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(sn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Ch(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ge(Be,Be.current),l)break;return null;case 22:return t.lanes=0,Eh(e,t,a,t.pendingProps);case 24:ba(t,we,e.memoizedState.cache)}return oa(e,t,a)}function _h(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Ko(e,a)&&!(t.flags&128))return Ue=!1,ig(e,t,a);Ue=!!(e.flags&131072)}else Ue=!1,ee&&t.flags&1048576&&Om(t,$n,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Wa(t.elementType),t.type=e,typeof e=="function")xo(e)?(l=fl(e,l),t.tag=1,t=Ed(null,t,e,l,a)):(t.tag=0,t=Hc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===so){t.tag=11,t=yd(null,t,e,l,a);break e}else if(n===fo){t.tag=14,t=vd(null,t,e,l,a);break e}}throw t=cc(e)||e,Error(_(306,t,""))}}return t;case 0:return Hc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=fl(l,t.pendingProps),Ed(e,t,l,n,a);case 3:e:{if(pr(t,t.stateNode.containerInfo),e===null)throw Error(_(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Ac(e,t),Yn(t,l,null,a);var r=t.memoizedState;if(l=r.cache,ba(t,we,l),l!==i.cache&&_c(t,[we],a,!0),Gn(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Td(e,t,l,a);break e}else if(l!==n){n=Lt(Error(_(424)),t),ei(n),t=Td(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=Rt(e.firstChild),Ke=t,ee=!0,Ba=null,Mt=!0,a=zm(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cl(),l===n){t=oa(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return ur(e,t),e===null?(a=Xd(t.type,null,t.pendingProps,null))?t.memoizedState=a:ee||(a=t.type,e=t.pendingProps,l=Ur(Ma.current).createElement(a),l[Ze]=t,l[st]=e,Je(l,a,e),Ge(l),t.stateNode=l):t.memoizedState=Xd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sc(t),e===null&&ee&&(l=t.stateNode=hp(t.type,t.pendingProps,Ma.current),Ke=t,Mt=!0,n=Se,Va(t.type)?(Ic=n,Se=Rt(l.firstChild)):Se=n),Qe(e,t,t.pendingProps.children,a),ur(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((n=l=Se)&&(l=Hg(l,t.type,t.pendingProps,Mt),l!==null?(t.stateNode=l,Ke=t,Se=Rt(l.firstChild),Mt=!1,n=!0):n=!1),n||qa(t)),sc(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Zc(n,i)?l=null:r!==null&&Zc(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=No(e,t,Iv,null,null,a),ri._currentValue=n),ur(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&ee&&((e=a=Se)&&(a=wg(a,t.pendingProps,Mt),a!==null?(t.stateNode=a,Ke=t,Se=null,e=!0):e=!1),e||qa(t)),null;case 13:return Th(e,t,a);case 4:return pr(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=sl(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return yd(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ba(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,ol(t),n=Pe(n),l=l(n),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return vd(e,t,t.type,t.pendingProps,a);case 15:return Sh(e,t,t.type,t.pendingProps,a);case 19:return Ch(e,t,a);case 31:return ng(e,t,a);case 22:return Eh(e,t,a,t.pendingProps);case 24:return ol(t),l=Pe(we),e===null?(n=Mo(),n===null&&(n=ye,i=Lo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Ro(t),ba(t,we,n)):(e.lanes&a&&(Ac(e,t),Yn(t,null,null,a),Gn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ba(t,we,l)):(l=i.cache,ba(t,we,l),l!==n.cache&&_c(t,[we],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(_(156,t.tag))}function Pt(e){e.flags|=4}function Gu(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Ph())e.flags|=8192;else throw rl=Cr,Bo}else e.flags&=-16777217}function _d(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!vp(t))if(Ph())e.flags|=8192;else throw rl=Cr,Bo}function Qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jf():536870912,e.lanes|=t,tn|=t)}function Cn(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function rg(e,t,a){var l=t.pendingProps;switch(Oo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),na(we),Jl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_l(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Du())),be(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Pt(t),i!==null?(be(t),_d(t,i)):(be(t),Gu(t,n,null,l,a))):i?i!==e.memoizedState?(Pt(t),be(t),_d(t,i)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Pt(t),be(t),Gu(t,n,e,l,a)),null;case 27:if(yr(t),a=Ma.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(!l){if(t.stateNode===null)throw Error(_(166));return be(t),null}e=Yt.current,_l(t)?$s(t):(e=hp(n,l,a),t.stateNode=e,Pt(t))}return be(t),null;case 5:if(yr(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(!l){if(t.stateNode===null)throw Error(_(166));return be(t),null}if(i=Yt.current,_l(t))$s(t);else{var r=Ur(Ma.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[Ze]=t,i[st]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(Je(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Pt(t)}}return be(t),Gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(_(166));if(e=Ma.current,_l(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||sp(e.nodeValue,a)),e||qa(t,!0)}else e=Ur(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return be(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=_l(t),a!==null){if(e===null){if(!l)throw Error(_(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(557));e[Ze]=t}else cl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else a=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ht(t),t):(ht(t),null);if(t.flags&128)throw Error(_(558))}return be(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=_l(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(_(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(_(317));n[Ze]=t}else cl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),n=!1}else n=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ht(t),t):(ht(t),null)}return ht(t),t.flags&128?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Qi(t,t.updateQueue),be(t),null);case 4:return Jl(),e===null&&es(t.stateNode.containerInfo),be(t),null;case 10:return na(t.type),be(t),null;case 19:if(Ye(Be),l=t.memoizedState,l===null)return be(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Cn(l,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=xr(e),i!==null){for(t.flags|=128,Cn(l,!1),e=i.updateQueue,t.updateQueue=e,Qi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)xm(a,e),a=a.sibling;return ge(Be,Be.current&1|2),ee&&Wt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&vt()>Rr&&(t.flags|=128,n=!0,Cn(l,!1),t.lanes=4194304)}else{if(!n)if(e=xr(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Qi(t,e),Cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ee)return be(t),null}else 2*vt()-l.renderingStartTime>Rr&&a!==536870912&&(t.flags|=128,n=!0,Cn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=vt(),e.sibling=null,a=Be.current,ge(Be,n?a&1|2:a&1),ee&&Wt(t,l.treeForkCount),e):(be(t),null);case 22:case 23:return ht(t),Do(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?a&536870912&&!(t.flags&128)&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),a=t.updateQueue,a!==null&&Qi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Ye(il),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),na(we),be(t),null;case 25:return null;case 30:return null}throw Error(_(156,t.tag))}function ug(e,t){switch(Oo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(we),Jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yr(t),null;case 31:if(t.memoizedState!==null){if(ht(t),t.alternate===null)throw Error(_(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(Be),null;case 4:return Jl(),null;case 10:return na(t.type),null;case 22:case 23:return ht(t),Do(),e!==null&&Ye(il),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(we),null;case 25:return null;default:return null}}function xh(e,t){switch(Oo(t),t.tag){case 3:na(we),Jl();break;case 26:case 27:case 5:yr(t);break;case 4:Jl();break;case 31:t.memoizedState!==null&&ht(t);break;case 13:ht(t);break;case 19:Ye(Be);break;case 10:na(t.type);break;case 22:case 23:ht(t),Do(),e!==null&&Ye(il);break;case 24:na(we)}}function Si(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(u){me(t,t.return,u)}}function Ga(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,n=t;var c=a,o=u;try{o()}catch(m){me(n,c,m)}}}l=l.next}while(l!==i)}}catch(m){me(t,t.return,m)}}function Ah(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hm(t,a)}catch(l){me(e,e.return,l)}}}function Oh(e,t,a){a.props=fl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){me(e,t,l)}}function Vn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){me(e,t,n)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){me(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){me(e,t,n)}else a.current=null}function Lh(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){me(e,e.return,n)}}function Yu(e,t,a){try{var l=e.stateNode;Mg(l,e.type,a,t),l[st]=t}catch(n){me(e,e.return,n)}}function Mh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ta));else if(l!==4&&(l===27&&Va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Uc(e,t,a),e=e.sibling;e!==null;)Uc(e,t,a),e=e.sibling}function Br(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Br(e,t,a),e=e.sibling;e!==null;)Br(e,t,a),e=e.sibling}function Bh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[Ze]=e,t[st]=a}catch(i){me(e,e.return,i)}}var $t=!1,He=!1,Vu=!1,xd=typeof WeakSet=="function"?WeakSet:Set,qe=null;function cg(e,t){if(e=e.containerInfo,Vc=Gr,e=vm(e),To(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,u=-1,c=-1,o=0,m=0,f=e,d=null;t:for(;;){for(var h;f!==a||n!==0&&f.nodeType!==3||(u=r+n),f!==i||l!==0&&f.nodeType!==3||(c=r+l),f.nodeType===3&&(r+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===e)break t;if(d===a&&++o===n&&(u=r),d===i&&++m===l&&(c=r),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}a=u===-1||c===-1?null:{start:u,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:e,selectionRange:a},Gr=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var T=fl(a.type,n);e=l.getSnapshotBeforeUpdate(T,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(C){me(a,a.return,C)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Kc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(_(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Rh(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),l&4&&Si(5,a);break;case 1:if(It(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){me(a,a.return,r)}else{var n=fl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){me(a,a.return,r)}}l&64&&Ah(a),l&512&&Vn(a,a.return);break;case 3:if(It(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hm(e,t)}catch(r){me(a,a.return,r)}}break;case 27:t===null&&l&4&&Bh(a);case 26:case 5:It(e,a),t===null&&l&4&&Lh(a),l&512&&Vn(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),l&4&&Nh(e,a);break;case 13:It(e,a),l&4&&Hh(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vg.bind(null,a),Ug(e,a))));break;case 22:if(l=a.memoizedState!==null||$t,!l){t=t!==null&&t.memoizedState!==null||He,n=$t;var i=He;$t=l,(He=t)&&!i?Ft(e,a,(a.subtreeFlags&8772)!==0):It(e,a),$t=n,He=i}break;case 30:break;default:It(e,a)}}function Dh(e){var t=e.alternate;t!==null&&(e.alternate=null,Dh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,rt=!1;function Jt(e,t,a){for(a=a.child;a!==null;)zh(e,t,a),a=a.sibling}function zh(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(mi,a)}catch{}switch(a.tag){case 26:He||Gt(a,t),Jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Gt(a,t);var l=Ce,n=rt;Va(a.type)&&(Ce=a.stateNode,rt=!1),Jt(e,t,a),Pn(a.stateNode),Ce=l,rt=n;break;case 5:He||Gt(a,t);case 6:if(l=Ce,n=rt,Ce=null,Jt(e,t,a),Ce=l,rt=n,Ce!==null)if(rt)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(a.stateNode)}catch(i){me(a,t,i)}else try{Ce.removeChild(a.stateNode)}catch(i){me(a,t,i)}break;case 18:Ce!==null&&(rt?(e=Ce,kd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rn(e)):kd(Ce,a.stateNode));break;case 4:l=Ce,n=rt,Ce=a.stateNode.containerInfo,rt=!0,Jt(e,t,a),Ce=l,rt=n;break;case 0:case 11:case 14:case 15:Ga(2,a,t),He||Ga(4,a,t),Jt(e,t,a);break;case 1:He||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Oh(a,t,l)),Jt(e,t,a);break;case 21:Jt(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,Jt(e,t,a),He=l;break;default:Jt(e,t,a)}}function Nh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rn(e)}catch(a){me(t,t.return,a)}}}function Hh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rn(e)}catch(a){me(t,t.return,a)}}function og(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xd),t;default:throw Error(_(435,e.tag))}}function Zi(e,t){var a=og(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=gg.bind(null,e,l);l.then(n,n)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,u=r;e:for(;u!==null;){switch(u.tag){case 27:if(Va(u.type)){Ce=u.stateNode,rt=!1;break e}break;case 5:Ce=u.stateNode,rt=!1;break e;case 3:case 4:Ce=u.stateNode.containerInfo,rt=!0;break e}u=u.return}if(Ce===null)throw Error(_(160));zh(i,r,n),Ce=null,rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wh(t,e),t=t.sibling}var Ht=null;function wh(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),it(e),l&4&&(Ga(3,e,e.return),Si(3,e),Ga(5,e,e.return));break;case 1:nt(t,e),it(e),l&512&&(He||a===null||Gt(a,a.return)),l&64&&$t&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ht;if(nt(t,e),it(e),l&512&&(He||a===null||Gt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[yi]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,l,a),i[Ze]=e,Ge(i),l=i;break e;case"link":var r=Qd("link","href",n).get(l+(a.href||""));if(r){for(var u=0;u<r.length;u++)if(i=r[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(u,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;case"meta":if(r=Qd("meta","content",n).get(l+(a.content||""))){for(u=0;u<r.length;u++)if(i=r[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(u,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;default:throw Error(_(468,l))}i[Ze]=e,Ge(i),l=i}e.stateNode=l}else Zd(n,e.type,e.stateNode);else e.stateNode=Vd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Zd(n,e.type,e.stateNode):Vd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yu(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),it(e),l&512&&(He||a===null||Gt(a,a.return)),a!==null&&l&4&&Yu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),it(e),l&512&&(He||a===null||Gt(a,a.return)),e.flags&32){n=e.stateNode;try{Fl(n,"")}catch(T){me(e,e.return,T)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Yu(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Vu=!0);break;case 6:if(nt(t,e),it(e),l&4){if(e.stateNode===null)throw Error(_(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(T){me(e,e.return,T)}}break;case 3:if(sr=null,n=Ht,Ht=kr(t.containerInfo),nt(t,e),Ht=n,it(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{rn(t.containerInfo)}catch(T){me(e,e.return,T)}Vu&&(Vu=!1,Uh(e));break;case 4:l=Ht,Ht=kr(e.stateNode.containerInfo),nt(t,e),it(e),Ht=l;break;case 12:nt(t,e),it(e);break;case 31:nt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 13:nt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ru=vt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 22:n=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,o=$t,m=He;if($t=o||n,He=m||c,nt(t,e),He=m,$t=o,it(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||c||$t||He||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(i=c.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{u=c.stateNode;var f=c.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(T){me(c,c.return,T)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(T){me(c,c.return,T)}}}else if(t.tag===18){if(a===null){c=t;try{var h=c.stateNode;n?jd(h,!0):jd(c.stateNode,!1)}catch(T){me(c,c.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zi(e,a))));break;case 19:nt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 30:break;case 21:break;default:nt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Mh(l)){a=l;break}l=l.return}if(a==null)throw Error(_(160));switch(a.tag){case 27:var n=a.stateNode,i=Xu(e);Br(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(Fl(r,""),a.flags&=-33);var u=Xu(e);Br(e,u,r);break;case 3:case 4:var c=a.stateNode.containerInfo,o=Xu(e);Uc(e,o,c);break;default:throw Error(_(161))}}catch(m){me(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rh(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ga(4,t,t.return),$a(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Oh(t,t.return,a),$a(t);break;case 27:Pn(t.stateNode);case 26:case 5:Gt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function Ft(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:Ft(n,i,a),Si(4,i);break;case 1:if(Ft(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(o){me(l,l.return,o)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Nm(c[n],u)}catch(o){me(l,l.return,o)}}a&&r&64&&Ah(i),Vn(i,i.return);break;case 27:Bh(i);case 26:case 5:Ft(n,i,a),a&&l===null&&r&4&&Lh(i),Vn(i,i.return);break;case 12:Ft(n,i,a);break;case 31:Ft(n,i,a),a&&r&4&&Nh(n,i);break;case 13:Ft(n,i,a),a&&r&4&&Hh(n,i);break;case 22:i.memoizedState===null&&Ft(n,i,a),Vn(i,i.return);break;case 30:break;default:Ft(n,i,a)}t=t.sibling}}function Po(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&gi(a))}function Jo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gi(e))}function zt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kh(e,t,a,l),t=t.sibling}function kh(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,l),n&2048&&Si(9,t);break;case 1:zt(e,t,a,l);break;case 3:zt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gi(e)));break;case 12:if(n&2048){zt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,u=i.onPostCommit;typeof u=="function"&&u(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){me(t,t.return,c)}}else zt(e,t,a,l);break;case 31:zt(e,t,a,l);break;case 13:zt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?zt(e,t,a,l):Qn(e,t):i._visibility&2?zt(e,t,a,l):(i._visibility|=2,Ll(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Po(r,t);break;case 24:zt(e,t,a,l),n&2048&&Jo(t.alternate,t);break;default:zt(e,t,a,l)}}function Ll(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,u=a,c=l,o=r.flags;switch(r.tag){case 0:case 11:case 15:Ll(i,r,u,c,n),Si(8,r);break;case 23:break;case 22:var m=r.stateNode;r.memoizedState!==null?m._visibility&2?Ll(i,r,u,c,n):Qn(i,r):(m._visibility|=2,Ll(i,r,u,c,n)),n&&o&2048&&Po(r.alternate,r);break;case 24:Ll(i,r,u,c,n),n&&o&2048&&Jo(r.alternate,r);break;default:Ll(i,r,u,c,n)}t=t.sibling}}function Qn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Qn(a,l),n&2048&&Po(l.alternate,l);break;case 24:Qn(a,l),n&2048&&Jo(l.alternate,l);break;default:Qn(a,l)}t=t.sibling}}var zn=8192;function xl(e,t,a){if(e.subtreeFlags&zn)for(e=e.child;e!==null;)jh(e,t,a),e=e.sibling}function jh(e,t,a){switch(e.tag){case 26:xl(e,t,a),e.flags&zn&&e.memoizedState!==null&&Jg(a,Ht,e.memoizedState,e.memoizedProps);break;case 5:xl(e,t,a);break;case 3:case 4:var l=Ht;Ht=kr(e.stateNode.containerInfo),xl(e,t,a),Ht=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=zn,zn=16777216,xl(e,t,a),zn=l):xl(e,t,a));break;default:xl(e,t,a)}}function qh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function _n(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Yh(l,e)}qh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gh(e),e=e.sibling}function Gh(e){switch(e.tag){case 0:case 11:case 15:_n(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:_n(e);break;case 12:_n(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,cr(e)):_n(e);break;default:_n(e)}}function cr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Yh(l,e)}qh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ga(8,t,t.return),cr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,cr(t));break;default:cr(t)}e=e.sibling}}function Yh(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:Ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:gi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var n=l.sibling,i=l.return;if(Dh(l),l===a){qe=null;break e}if(n!==null){n.return=i,qe=n;break e}qe=i}}}var sg={getCacheForType:function(e){var t=Pe(we),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Pe(we).controller.signal}},dg=typeof WeakMap=="function"?WeakMap:Map,ce=0,ye=null,F=null,W=0,de=0,ft=null,xa=!1,fn=!1,Io=!1,sa=0,Le=0,Ya=0,ul=0,Fo=0,yt=0,tn=0,Zn=null,ct=null,kc=!1,ru=0,Xh=0,Rr=1/0,Dr=null,za=null,ke=0,Na=null,an=null,ia=0,jc=0,qc=null,Vh=null,Kn=0,Gc=null;function St(){return ce&2&&W!==0?W&-W:X.T!==null?$o():$f()}function Qh(){if(yt===0)if(!(W&536870912)||ee){var e=ki;ki<<=1,!(ki&3932160)&&(ki=262144),yt=e}else yt=536870912;return e=Tt.current,e!==null&&(e.flags|=32),yt}function ot(e,t,a){(e===ye&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(ln(e,0),Aa(e,W,yt,!1)),pi(e,a),(!(ce&2)||e!==ye)&&(e===ye&&(!(ce&2)&&(ul|=a),Le===4&&Aa(e,W,yt,!1)),Vt(e))}function Zh(e,t,a){if(ce&6)throw Error(_(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||hi(e,t),n=l?hg(e,t):Qu(e,t,!0),i=l;do{if(n===0){fn&&!l&&Aa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!fg(a)){n=Qu(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var u=e;n=Zn;var c=u.current.memoizedState.isDehydrated;if(c&&(ln(u,r).flags|=256),r=Qu(u,r,!1),r!==2){if(Io&&!c){u.errorRecoveryDisabledLanes|=i,ul|=i,n=4;break e}i=ct,ct=n,i!==null&&(ct===null?ct=i:ct.push.apply(ct,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){ln(e,0),Aa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(_(345));case 4:if((t&4194048)!==t)break;case 6:Aa(l,t,yt,!xa);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(_(329))}if((t&62914560)===t&&(n=ru+300-vt(),10<n)){if(Aa(l,t,yt,!xa),Jr(l,0,!0)!==0)break e;ia=t,l.timeoutHandle=fp(Ad.bind(null,l,a,ct,Dr,kc,t,yt,ul,tn,xa,i,"Throttled",-0,0),n);break e}Ad(l,a,ct,Dr,kc,t,yt,ul,tn,xa,i,null,-0,0)}}break}while(!0);Vt(e)}function Ad(e,t,a,l,n,i,r,u,c,o,m,f,d,h){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},jh(t,i,f);var T=(i&62914560)===i?ru-vt():(i&4194048)===i?Xh-vt():0;if(T=Ig(f,T),T!==null){ia=i,e.cancelPendingCommit=T(Ld.bind(null,e,t,i,a,l,n,r,u,c,m,f,null,d,h)),Aa(e,i,r,!o);return}}Ld(e,t,i,a,l,n,r,u,c)}function fg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Et(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Aa(e,t,a,l){t&=~Fo,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-bt(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&If(e,a,t)}function uu(){return ce&6?!0:(Ei(0),!1)}function Wo(){if(F!==null){if(de===0)var e=F.return;else e=F,aa=gl=null,Uo(e),Zl=null,ti=0,e=F;for(;e!==null;)xh(e.alternate,e),e=e.return;F=null}}function ln(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Dg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,Wo(),ye=e,F=a=la(e.current,null),W=t,de=0,ft=null,xa=!1,fn=hi(e,t),Io=!1,tn=yt=Fo=ul=Ya=Le=0,ct=Zn=null,kc=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-bt(l),i=1<<n;t|=e[n],l&=~i}return sa=t,$r(),a}function Kh(e,t){K=null,X.H=li,t===dn||t===tu?(t=nd(),de=3):t===Bo?(t=nd(),de=4):de=t===Zo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,F===null&&(Le=1,Lr(e,Lt(t,e.current)))}function Ph(){var e=Tt.current;return e===null?!0:(W&4194048)===W?Bt===null:(W&62914560)===W||W&536870912?e===Bt:!1}function Jh(){var e=X.H;return X.H=li,e===null?li:e}function Ih(){var e=X.A;return X.A=sg,e}function zr(){Le=4,xa||(W&4194048)!==W&&Tt.current!==null||(fn=!0),!(Ya&134217727)&&!(ul&134217727)||ye===null||Aa(ye,W,yt,!1)}function Qu(e,t,a){var l=ce;ce|=2;var n=Jh(),i=Ih();(ye!==e||W!==t)&&(Dr=null,ln(e,t)),t=!1;var r=Le;e:do try{if(de!==0&&F!==null){var u=F,c=ft;switch(de){case 8:Wo(),r=6;break e;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var o=de;if(de=0,ft=null,Gl(e,u,c,o),a&&fn){r=0;break e}break;default:o=de,de=0,ft=null,Gl(e,u,c,o)}}mg(),r=Le;break}catch(m){Kh(e,m)}while(!0);return t&&e.shellSuspendCounter++,aa=gl=null,ce=l,X.H=n,X.A=i,F===null&&(ye=null,W=0,$r()),r}function mg(){for(;F!==null;)Fh(F)}function hg(e,t){var a=ce;ce|=2;var l=Jh(),n=Ih();ye!==e||W!==t?(Dr=null,Rr=vt()+500,ln(e,t)):fn=hi(e,t);e:do try{if(de!==0&&F!==null){t=F;var i=ft;t:switch(de){case 1:de=0,ft=null,Gl(e,t,i,1);break;case 2:case 9:if(ld(i)){de=0,ft=null,Od(t);break}t=function(){de!==2&&de!==9||ye!==e||(de=7),Vt(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:ld(i)?(de=0,ft=null,Od(t)):(de=0,ft=null,Gl(e,t,i,7));break;case 5:var r=null;switch(F.tag){case 26:r=F.memoizedState;case 5:case 27:var u=F;if(r?vp(r):u.stateNode.complete){de=0,ft=null;var c=u.sibling;if(c!==null)F=c;else{var o=u.return;o!==null?(F=o,cu(o)):F=null}break t}}de=0,ft=null,Gl(e,t,i,5);break;case 6:de=0,ft=null,Gl(e,t,i,6);break;case 8:Wo(),Le=6;break e;default:throw Error(_(462))}}pg();break}catch(m){Kh(e,m)}while(!0);return aa=gl=null,X.H=l,X.A=n,ce=a,F!==null?0:(ye=null,W=0,$r(),Le)}function pg(){for(;F!==null&&!ky();)Fh(F)}function Fh(e){var t=_h(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?cu(e):F=t}function Od(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Sd(a,t,t.pendingProps,t.type,void 0,W);break;case 11:t=Sd(a,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:Uo(t);default:xh(a,t),t=F=xm(t,sa),t=_h(a,t,sa)}e.memoizedProps=e.pendingProps,t===null?cu(e):F=t}function Gl(e,t,a,l){aa=gl=null,Uo(t),Zl=null,ti=0;var n=t.return;try{if(lg(e,n,t,a,W)){Le=1,Lr(e,Lt(a,e.current)),F=null;return}}catch(i){if(n!==null)throw F=n,i;Le=1,Lr(e,Lt(a,e.current)),F=null;return}t.flags&32768?(ee||l===1?e=!0:fn||W&536870912?e=!1:(xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wh(t,e)):cu(t)}function cu(e){var t=e;do{if(t.flags&32768){Wh(t,xa);return}e=t.return;var a=rg(t.alternate,t,sa);if(a!==null){F=a;return}if(t=t.sibling,t!==null){F=t;return}F=t=e}while(t!==null);Le===0&&(Le=5)}function Wh(e,t){do{var a=ug(e.alternate,e);if(a!==null){a.flags&=32767,F=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){F=e;return}F=e=a}while(e!==null);Le=6,F=null}function Ld(e,t,a,l,n,i,r,u,c){e.cancelPendingCommit=null;do ou();while(ke!==0);if(ce&6)throw Error(_(327));if(t!==null){if(t===e.current)throw Error(_(177));if(i=t.lanes|t.childLanes,i|=Co,Py(e,a,i,r,u,c),e===ye&&(F=ye=null,W=0),an=t,Na=e,ia=a,jc=i,qc=n,Vh=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,bg(vr,function(){return lp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=X.T,X.T=null,n=oe.p,oe.p=2,r=ce,ce|=4;try{cg(e,t,a)}finally{ce=r,oe.p=n,X.T=l}}ke=1,$h(),ep(),tp()}}function $h(){if(ke===1){ke=0;var e=Na,t=an,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=X.T,X.T=null;var l=oe.p;oe.p=2;var n=ce;ce|=4;try{wh(t,e);var i=Qc,r=vm(e.containerInfo),u=i.focusedElem,c=i.selectionRange;if(r!==u&&u&&u.ownerDocument&&ym(u.ownerDocument.documentElement,u)){if(c!==null&&To(u)){var o=c.start,m=c.end;if(m===void 0&&(m=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(m,u.value.length);else{var f=u.ownerDocument||document,d=f&&f.defaultView||window;if(d.getSelection){var h=d.getSelection(),T=u.textContent.length,C=Math.min(c.start,T),O=c.end===void 0?C:Math.min(c.end,T);!h.extend&&C>O&&(r=O,O=C,C=r);var p=Is(u,C),s=Is(u,O);if(p&&s&&(h.rangeCount!==1||h.anchorNode!==p.node||h.anchorOffset!==p.offset||h.focusNode!==s.node||h.focusOffset!==s.offset)){var g=f.createRange();g.setStart(p.node,p.offset),h.removeAllRanges(),C>O?(h.addRange(g),h.extend(s.node,s.offset)):(g.setEnd(s.node,s.offset),h.addRange(g))}}}}for(f=[],h=u;h=h.parentNode;)h.nodeType===1&&f.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<f.length;u++){var S=f[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Gr=!!Vc,Qc=Vc=null}finally{ce=n,oe.p=l,X.T=a}}e.current=t,ke=2}}function ep(){if(ke===2){ke=0;var e=Na,t=an,a=(t.flags&8772)!==0;if(t.subtreeFlags&8772||a){a=X.T,X.T=null;var l=oe.p;oe.p=2;var n=ce;ce|=4;try{Rh(e,t.alternate,t)}finally{ce=n,oe.p=l,X.T=a}}ke=3}}function tp(){if(ke===4||ke===3){ke=0,jy();var e=Na,t=an,a=ia,l=Vh;t.subtreeFlags&10256||t.flags&10256?ke=5:(ke=0,an=Na=null,ap(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(za=null),po(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(mi,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=X.T,n=oe.p,oe.p=2,X.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var u=l[r];i(u.value,{componentStack:u.stack})}}finally{X.T=t,oe.p=n}}ia&3&&ou(),Vt(e),n=e.pendingLanes,a&261930&&n&42?e===Gc?Kn++:(Kn=0,Gc=e):Kn=0,Ei(0)}}function ap(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gi(t)))}function ou(){return $h(),ep(),tp(),lp()}function lp(){if(ke!==5)return!1;var e=Na,t=jc;jc=0;var a=po(ia),l=X.T,n=oe.p;try{oe.p=32>a?32:a,X.T=null,a=qc,qc=null;var i=Na,r=ia;if(ke=0,an=Na=null,ia=0,ce&6)throw Error(_(331));var u=ce;if(ce|=4,Gh(i.current),kh(i,i.current,r,a),ce=u,Ei(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(mi,i)}catch{}return!0}finally{oe.p=n,X.T=l,ap(e,t)}}function Md(e,t,a){t=Lt(a,t),t=Nc(e.stateNode,t,2),e=Da(e,t,2),e!==null&&(pi(e,2),Vt(e))}function me(e,t,a){if(e.tag===3)Md(e,e,a);else for(;t!==null;){if(t.tag===3){Md(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(za===null||!za.has(l))){e=Lt(a,e),a=gh(2),l=Da(t,a,2),l!==null&&(bh(a,l,t,e),pi(l,2),Vt(l));break}}t=t.return}}function Zu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new dg;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Io=!0,n.add(a),e=yg.bind(null,e,t,a),t.then(e,e))}function yg(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(W&a)===a&&(Le===4||Le===3&&(W&62914560)===W&&300>vt()-ru?!(ce&2)&&ln(e,0):Fo|=a,tn===W&&(tn=0)),Vt(e)}function np(e,t){t===0&&(t=Jf()),e=vl(e,t),e!==null&&(pi(e,t),Vt(e))}function vg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),np(e,a)}function gg(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(_(314))}l!==null&&l.delete(t),np(e,a)}function bg(e,t){return mo(e,t)}var Nr=null,Ml=null,Yc=!1,Hr=!1,Ku=!1,Oa=0;function Vt(e){e!==Ml&&e.next===null&&(Ml===null?Nr=Ml=e:Ml=Ml.next=e),Hr=!0,Yc||(Yc=!0,Eg())}function Ei(e,t){if(!Ku&&Hr){Ku=!0;do for(var a=!1,l=Nr;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-bt(42|e)+1)-1,i&=n&~(r&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Bd(l,i))}else i=W,i=Jr(l,l===ye?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||hi(l,i)||(a=!0,Bd(l,i));l=l.next}while(a);Ku=!1}}function Sg(){ip()}function ip(){Hr=Yc=!1;var e=0;Oa!==0&&Rg()&&(e=Oa);for(var t=vt(),a=null,l=Nr;l!==null;){var n=l.next,i=rp(l,t);i===0?(l.next=null,a===null?Nr=n:a.next=n,n===null&&(Ml=a)):(a=l,(e!==0||i&3)&&(Hr=!0)),l=n}ke!==0&&ke!==5||Ei(e),Oa!==0&&(Oa=0)}function rp(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-bt(i),u=1<<r,c=n[r];c===-1?(!(u&a)||u&l)&&(n[r]=Ky(u,t)):c<=t&&(e.expiredLanes|=u),i&=~u}if(t=ye,a=W,a=Jr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Eu(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||hi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Eu(l),po(a)){case 2:case 8:a=Kf;break;case 32:a=vr;break;case 268435456:a=Pf;break;default:a=vr}return l=up.bind(null,e),a=mo(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Eu(l),e.callbackPriority=2,e.callbackNode=null,2}function up(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ou()&&e.callbackNode!==a)return null;var l=W;return l=Jr(e,e===ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zh(e,l,t),rp(e,vt()),e.callbackNode!=null&&e.callbackNode===a?up.bind(null,e):null)}function Bd(e,t){if(ou())return null;Zh(e,t,!0)}function Eg(){zg(function(){ce&6?mo(Zf,Sg):ip()})}function $o(){if(Oa===0){var e=Wl;e===0&&(e=Ui,Ui<<=1,!(Ui&261888)&&(Ui=256)),Oa=e}return Oa}function Rd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$i(""+e)}function Dd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Tg(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Rd((n[st]||null).action),r=l.submitter;r&&(t=(t=r[st]||null)?Rd(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var u=new Ir("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Oa!==0){var c=r?Dd(n,r):new FormData(n);Dc(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(u.preventDefault(),c=r?Dd(n,r):new FormData(n),Dc(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Pu=0;Pu<Sc.length;Pu++){var Ju=Sc[Pu],Cg=Ju.toLowerCase(),_g=Ju[0].toUpperCase()+Ju.slice(1);Ut(Cg,"on"+_g)}Ut(bm,"onAnimationEnd");Ut(Sm,"onAnimationIteration");Ut(Em,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(qv,"onTransitionRun");Ut(Gv,"onTransitionStart");Ut(Yv,"onTransitionCancel");Ut(Tm,"onTransitionEnd");Il("onMouseEnter",["mouseout","mouseover"]);Il("onMouseLeave",["mouseout","mouseover"]);Il("onPointerEnter",["pointerout","pointerover"]);Il("onPointerLeave",["pointerout","pointerover"]);hl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hl("onBeforeInput",["compositionend","keypress","textInput","paste"]);hl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function cp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var u=l[r],c=u.instance,o=u.currentTarget;if(u=u.listener,c!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=o;try{i(n)}catch(m){br(m)}n.currentTarget=null,i=c}else for(r=0;r<l.length;r++){if(u=l[r],c=u.instance,o=u.currentTarget,u=u.listener,c!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=o;try{i(n)}catch(m){br(m)}n.currentTarget=null,i=c}}}}function I(e,t){var a=t[fc];a===void 0&&(a=t[fc]=new Set);var l=e+"__bubble";a.has(l)||(op(t,e,2,!1),a.add(l))}function Iu(e,t,a){var l=0;t&&(l|=4),op(a,e,l,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function es(e){if(!e[Ki]){e[Ki]=!0,em.forEach(function(a){a!=="selectionchange"&&(xg.has(a)||Iu(a,!1,e),Iu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,Iu("selectionchange",!1,t))}}function op(e,t,a,l){switch(Tp(t)){case 2:var n=$g;break;case 8:n=e0;break;default:n=ns}a=n.bind(null,t,a,e),n=void 0,!vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Fu(e,t,a,l,n){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var u=l.stateNode.containerInfo;if(u===n)break;if(r===4)for(r=l.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;u!==null;){if(r=Dl(u),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){l=i=r;continue e}u=u.parentNode}}l=l.return}cm(function(){var o=i,m=go(a),f=[];e:{var d=Cm.get(e);if(d!==void 0){var h=Ir,T=e;switch(e){case"keypress":if(tr(a)===0)break e;case"keydown":case"keyup":h=gv;break;case"focusin":T="focus",h=Au;break;case"focusout":T="blur",h=Au;break;case"beforeblur":case"afterblur":h=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ev;break;case bm:case Sm:case Em:h=ov;break;case Tm:h=Cv;break;case"scroll":case"scrollend":h=nv;break;case"wheel":h=xv;break;case"copy":case"cut":case"paste":h=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ys;break;case"toggle":case"beforetoggle":h=Ov}var C=(t&4)!==0,O=!C&&(e==="scroll"||e==="scrollend"),p=C?d!==null?d+"Capture":null:d;C=[];for(var s=o,g;s!==null;){var S=s;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||p===null||(S=In(s,p),S!=null&&C.push(ii(s,S,g))),O)break;s=s.return}0<C.length&&(d=new h(d,T,null,a,m),f.push({event:d,listeners:C}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&a!==yc&&(T=a.relatedTarget||a.fromElement)&&(Dl(T)||T[cn]))break e;if((h||d)&&(d=m.window===m?m:(d=m.ownerDocument)?d.defaultView||d.parentWindow:window,h?(T=a.relatedTarget||a.toElement,h=o,T=T?Dl(T):null,T!==null&&(O=fi(T),C=T.tag,T!==O||C!==5&&C!==27&&C!==6)&&(T=null)):(h=null,T=o),h!==T)){if(C=qs,S="onMouseLeave",p="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(C=Ys,S="onPointerLeave",p="onPointerEnter",s="pointer"),O=h==null?d:Rn(h),g=T==null?d:Rn(T),d=new C(S,s+"leave",h,a,m),d.target=O,d.relatedTarget=g,S=null,Dl(m)===o&&(C=new C(p,s+"enter",T,a,m),C.target=g,C.relatedTarget=O,S=C),O=S,h&&T)t:{for(C=Ag,p=h,s=T,g=0,S=p;S;S=C(S))g++;S=0;for(var M=s;M;M=C(M))S++;for(;0<g-S;)p=C(p),g--;for(;0<S-g;)s=C(s),S--;for(;g--;){if(p===s||s!==null&&p===s.alternate){C=p;break t}p=C(p),s=C(s)}C=null}else C=null;h!==null&&zd(f,d,h,C,!1),T!==null&&O!==null&&zd(f,O,T,C,!0)}}e:{if(d=o?Rn(o):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var G=Zs;else if(Qs(d))if(hm)G=Uv;else{G=Hv;var v=Nv}else h=d.nodeName,!h||h.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?o&&vo(o.elementType)&&(G=Zs):G=wv;if(G&&(G=G(e,o))){mm(f,G,a,m);break e}v&&v(e,d,o),e==="focusout"&&o&&d.type==="number"&&o.memoizedProps.value!=null&&pc(d,"number",d.value)}switch(v=o?Rn(o):window,e){case"focusin":(Qs(v)||v.contentEditable==="true")&&(Hl=v,gc=o,kn=null);break;case"focusout":kn=gc=Hl=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Fs(f,a,m);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":Fs(f,a,m)}var L;if(Eo)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Nl?dm(e,a)&&(N="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(N="onCompositionStart");N&&(sm&&a.locale!=="ko"&&(Nl||N!=="onCompositionStart"?N==="onCompositionEnd"&&Nl&&(L=om()):(_a=m,bo="value"in _a?_a.value:_a.textContent,Nl=!0)),v=wr(o,N),0<v.length&&(N=new Gs(N,e,null,a,m),f.push({event:N,listeners:v}),L?N.data=L:(L=fm(a),L!==null&&(N.data=L)))),(L=Mv?Bv(e,a):Rv(e,a))&&(N=wr(o,"onBeforeInput"),0<N.length&&(v=new Gs("onBeforeInput","beforeinput",null,a,m),f.push({event:v,listeners:N}),v.data=L)),Tg(f,e,o,a,m)}cp(f,t)})}function ii(e,t,a){return{instance:e,listener:t,currentTarget:a}}function wr(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=In(e,a),n!=null&&l.unshift(ii(e,n,i)),n=In(e,t),n!=null&&l.push(ii(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Ag(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zd(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var u=a,c=u.alternate,o=u.stateNode;if(u=u.tag,c!==null&&c===l)break;u!==5&&u!==26&&u!==27||o===null||(c=o,n?(o=In(a,i),o!=null&&r.unshift(ii(a,o,c))):n||(o=In(a,i),o!=null&&r.push(ii(a,o,c)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var Og=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(Lg,"")}function sp(e,t){return t=Nd(t),Nd(e)===t}function he(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Fl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Fl(e,""+l);break;case"className":qi(e,"class",l);break;case"tabIndex":qi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qi(e,a,l);break;case"style":um(e,l,i);break;case"data":if(t!=="object"){qi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$i(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&he(e,t,"name",n.name,n,null),he(e,t,"formEncType",n.formEncType,n,null),he(e,t,"formMethod",n.formMethod,n,null),he(e,t,"formTarget",n.formTarget,n,null)):(he(e,t,"encType",n.encType,n,null),he(e,t,"method",n.method,n,null),he(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$i(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ta);break;case"onScroll":l!=null&&I("scroll",e);break;case"onScrollEnd":l!=null&&I("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(_(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(_(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=$i(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":I("beforetoggle",e),I("toggle",e),Wi(e,"popover",l);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Wi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=av.get(a)||a,Wi(e,a,l))}}function Xc(e,t,a,l,n,i){switch(a){case"style":um(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(_(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(_(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Fl(e,l):(typeof l=="number"||typeof l=="bigint")&&Fl(e,""+l);break;case"onScroll":l!=null&&I("scroll",e);break;case"onScrollEnd":l!=null&&I("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tm.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[st]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Wi(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":I("error",e),I("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(_(137,t));default:he(e,t,i,r,a,null)}}n&&he(e,t,"srcSet",a.srcSet,a,null),l&&he(e,t,"src",a.src,a,null);return;case"input":I("invalid",e);var u=i=r=n=null,c=null,o=null;for(l in a)if(a.hasOwnProperty(l)){var m=a[l];if(m!=null)switch(l){case"name":n=m;break;case"type":r=m;break;case"checked":c=m;break;case"defaultChecked":o=m;break;case"value":i=m;break;case"defaultValue":u=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(_(137,t));break;default:he(e,t,l,m,a,null)}}nm(e,i,u,c,o,r,n,!1);return;case"select":I("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":r=u;break;case"multiple":l=u;default:he(e,t,n,u,a,null)}t=i,a=r,e.multiple=!!l,t!=null?Xl(e,!!l,t,!1):a!=null&&Xl(e,!!l,a,!0);return;case"textarea":I("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(u=a[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(_(91));break;default:he(e,t,r,u,a,null)}rm(e,l,n,i);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:he(e,t,c,l,a,null)}return;case"dialog":I("beforetoggle",e),I("toggle",e),I("cancel",e),I("close",e);break;case"iframe":case"object":I("load",e);break;case"video":case"audio":for(l=0;l<ni.length;l++)I(ni[l],e);break;case"image":I("error",e),I("load",e);break;case"details":I("toggle",e);break;case"embed":case"source":case"link":I("error",e),I("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(_(137,t));default:he(e,t,o,l,a,null)}return;default:if(vo(t)){for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!==void 0&&Xc(e,t,m,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&he(e,t,u,l,a,null))}function Mg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,u=null,c=null,o=null,m=null;for(h in a){var f=a[h];if(a.hasOwnProperty(h)&&f!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":c=f;default:l.hasOwnProperty(h)||he(e,t,h,null,l,f)}}for(var d in l){var h=l[d];if(f=a[d],l.hasOwnProperty(d)&&(h!=null||f!=null))switch(d){case"type":i=h;break;case"name":n=h;break;case"checked":o=h;break;case"defaultChecked":m=h;break;case"value":r=h;break;case"defaultValue":u=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(_(137,t));break;default:h!==f&&he(e,t,d,h,l,f)}}hc(e,r,u,c,o,m,i,n);return;case"select":h=r=u=d=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":h=c;default:l.hasOwnProperty(i)||he(e,t,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":d=i;break;case"defaultValue":u=i;break;case"multiple":r=i;default:i!==c&&he(e,t,n,i,l,c)}t=u,a=r,l=h,d!=null?Xl(e,!!a,d,!1):!!l!=!!a&&(t!=null?Xl(e,!!a,t,!0):Xl(e,!!a,a?[]:"",!1));return;case"textarea":h=d=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:he(e,t,u,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":d=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(_(91));break;default:n!==i&&he(e,t,r,n,l,i)}im(e,d,h);return;case"option":for(var T in a)if(d=a[T],a.hasOwnProperty(T)&&d!=null&&!l.hasOwnProperty(T))switch(T){case"selected":e.selected=!1;break;default:he(e,t,T,null,l,d)}for(c in l)if(d=l[c],h=a[c],l.hasOwnProperty(c)&&d!==h&&(d!=null||h!=null))switch(c){case"selected":e.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:he(e,t,c,d,l,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in a)d=a[C],a.hasOwnProperty(C)&&d!=null&&!l.hasOwnProperty(C)&&he(e,t,C,null,l,d);for(o in l)if(d=l[o],h=a[o],l.hasOwnProperty(o)&&d!==h&&(d!=null||h!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(_(137,t));break;default:he(e,t,o,d,l,h)}return;default:if(vo(t)){for(var O in a)d=a[O],a.hasOwnProperty(O)&&d!==void 0&&!l.hasOwnProperty(O)&&Xc(e,t,O,void 0,l,d);for(m in l)d=l[m],h=a[m],!l.hasOwnProperty(m)||d===h||d===void 0&&h===void 0||Xc(e,t,m,d,l,h);return}}for(var p in a)d=a[p],a.hasOwnProperty(p)&&d!=null&&!l.hasOwnProperty(p)&&he(e,t,p,null,l,d);for(f in l)d=l[f],h=a[f],!l.hasOwnProperty(f)||d===h||d==null&&h==null||he(e,t,f,d,l,h)}function Hd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,r=n.initiatorType,u=n.duration;if(i&&u&&Hd(r)){for(r=0,u=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],o=c.startTime;if(o>u)break;var m=c.transferSize,f=c.initiatorType;m&&Hd(f)&&(c=c.responseEnd,r+=m*(c<u?1:(u-o)/(c-o)))}if(--l,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vc=null,Qc=null;function Ur(e){return e.nodeType===9?e:e.ownerDocument}function wd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wu=null;function Rg(){var e=window.event;return e&&e.type==="popstate"?e===Wu?!1:(Wu=e,!0):(Wu=null,!1)}var fp=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,zg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(e){return Ud.resolve(null).then(e).catch(Ng)}:fp;function Ng(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function kd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),rn(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Pn(a);for(var i=a.firstChild;i;){var r=i.nextSibling,u=i.nodeName;i[yi]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&Pn(e.ownerDocument.body);a=n}while(a);rn(t)}function jd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kc(a),yo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[yi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function wg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rt(e.nextSibling),e===null))return null;return e}function mp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function Pc(e){return e.data==="$?"||e.data==="$~"}function Jc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ug(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ic=null;function qd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Rt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function hp(e,t,a){switch(t=Ur(a),e){case"html":if(e=t.documentElement,!e)throw Error(_(452));return e;case"head":if(e=t.head,!e)throw Error(_(453));return e;case"body":if(e=t.body,!e)throw Error(_(454));return e;default:throw Error(_(451))}}function Pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yo(e)}var Dt=new Map,Yd=new Set;function kr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=oe.d;oe.d={f:kg,r:jg,D:qg,C:Gg,L:Yg,m:Xg,X:Qg,S:Vg,M:Zg};function kg(){var e=da.f(),t=uu();return e||t}function jg(e){var t=on(e);t!==null&&t.tag===5&&t.type==="form"?uh(t):da.r(e)}var mn=typeof document>"u"?null:document;function pp(e,t,a){var l=mn;if(l&&typeof t=="string"&&t){var n=Ot(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Yd.has(n)||(Yd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function qg(e){da.D(e),pp("dns-prefetch",e,null)}function Gg(e,t){da.C(e,t),pp("preconnect",e,t)}function Yg(e,t,a){da.L(e,t,a);var l=mn;if(l&&e&&t){var n='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ot(a.imageSizes)+'"]')):n+='[href="'+Ot(e)+'"]';var i=n;switch(t){case"style":i=nn(e);break;case"script":i=hn(e)}Dt.has(i)||(e=Te({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Dt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Ti(i))||t==="script"&&l.querySelector(Ci(i))||(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function Xg(e,t){da.m(e,t);var a=mn;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=hn(e)}if(!Dt.has(i)&&(e=Te({rel:"modulepreload",href:e},t),Dt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ci(i)))return}l=a.createElement("link"),Je(l,"link",e),Ge(l),a.head.appendChild(l)}}}function Vg(e,t,a){da.S(e,t,a);var l=mn;if(l&&e){var n=Yl(l).hoistableStyles,i=nn(e);t=t||"default";var r=n.get(i);if(!r){var u={loading:0,preload:null};if(r=l.querySelector(Ti(i)))u.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Dt.get(i))&&ts(e,a);var c=r=l.createElement("link");Ge(c),Je(c,"link",e),c._p=new Promise(function(o,m){c.onload=o,c.onerror=m}),c.addEventListener("load",function(){u.loading|=1}),c.addEventListener("error",function(){u.loading|=2}),u.loading|=4,or(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:u},n.set(i,r)}}}function Qg(e,t){da.X(e,t);var a=mn;if(a&&e){var l=Yl(a).hoistableScripts,n=hn(e),i=l.get(n);i||(i=a.querySelector(Ci(n)),i||(e=Te({src:e,async:!0},t),(t=Dt.get(n))&&as(e,t),i=a.createElement("script"),Ge(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Zg(e,t){da.M(e,t);var a=mn;if(a&&e){var l=Yl(a).hoistableScripts,n=hn(e),i=l.get(n);i||(i=a.querySelector(Ci(n)),i||(e=Te({src:e,async:!0,type:"module"},t),(t=Dt.get(n))&&as(e,t),i=a.createElement("script"),Ge(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Xd(e,t,a,l){var n=(n=Ma.current)?kr(n):null;if(!n)throw Error(_(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=nn(a.href),a=Yl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=nn(a.href);var i=Yl(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(Ti(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Dt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dt.set(e,a),i||Kg(n,e,a,r.state))),t&&l===null)throw Error(_(528,""));return r}if(t&&l!==null)throw Error(_(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hn(a),a=Yl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(_(444,e))}}function nn(e){return'href="'+Ot(e)+'"'}function Ti(e){return'link[rel="stylesheet"]['+e+"]"}function yp(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function Kg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ge(t),e.head.appendChild(t))}function hn(e){return'[src="'+Ot(e)+'"]'}function Ci(e){return"script[async]"+e}function Vd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(l)return t.instance=l,Ge(l),l;var n=Te({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),Je(l,"style",n),or(l,a.precedence,e),t.instance=l;case"stylesheet":n=nn(a.href);var i=e.querySelector(Ti(n));if(i)return t.state.loading|=4,t.instance=i,Ge(i),i;l=yp(a),(n=Dt.get(n))&&ts(l,n),i=(e.ownerDocument||e).createElement("link"),Ge(i);var r=i;return r._p=new Promise(function(u,c){r.onload=u,r.onerror=c}),Je(i,"link",l),t.state.loading|=4,or(i,a.precedence,e),t.instance=i;case"script":return i=hn(a.src),(n=e.querySelector(Ci(i)))?(t.instance=n,Ge(n),n):(l=a,(n=Dt.get(i))&&(l=Te({},a),as(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ge(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(_(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,or(l,a.precedence,e));return t.instance}function or(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var u=l[r];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function as(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var sr=null;function Qd(e,t,a){if(sr===null){var l=new Map,n=sr=new Map;n.set(a,l)}else n=sr,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[yi]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var u=l.get(r);u?u.push(i):l.set(r,[i])}}return l}function Zd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Pg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vp(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Jg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=nn(l.href),i=t.querySelector(Ti(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=jr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ge(i);return}i=t.ownerDocument||t,l=yp(l),(n=Dt.get(n))&&ts(l,n),i=i.createElement("link"),Ge(i);var r=i;r._p=new Promise(function(u,c){r.onload=u,r.onerror=c}),Je(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(e.count++,a=jr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var $u=0;function Ig(e,t){return e.stylesheets&&e.count===0&&dr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&dr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&$u===0&&($u=62500*Bg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>$u?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function jr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qr=null;function dr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qr=new Map,t.forEach(Fg,e),qr=null,jr.call(e))}function Fg(e,t){if(!(t.state.loading&4)){var a=qr.get(e);if(a)var l=a.get(null);else{a=new Map,qr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=jr.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var ri={$$typeof:ea,Provider:null,Consumer:null,_currentValue:ll,_currentValue2:ll,_threadCount:0};function Wg(e,t,a,l,n,i,r,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tu(0),this.hiddenUpdates=Tu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function gp(e,t,a,l,n,i,r,u,c,o,m,f){return e=new Wg(e,t,a,r,c,o,m,f,u),t=1,i===!0&&(t|=24),i=pt(3,null,null,t),e.current=i,i.stateNode=e,t=Lo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Ro(i),e}function bp(e){return e?(e=kl,e):kl}function Sp(e,t,a,l,n,i){n=bp(n),l.context===null?l.context=n:l.pendingContext=n,l=Ra(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Da(e,l,t),a!==null&&(ot(a,e,t),qn(a,e,t))}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ls(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function Ep(e){if(e.tag===13||e.tag===31){var t=vl(e,67108864);t!==null&&ot(t,e,67108864),ls(e,67108864)}}function Pd(e){if(e.tag===13||e.tag===31){var t=St();t=ho(t);var a=vl(e,t);a!==null&&ot(a,e,t),ls(e,t)}}var Gr=!0;function $g(e,t,a,l){var n=X.T;X.T=null;var i=oe.p;try{oe.p=2,ns(e,t,a,l)}finally{oe.p=i,X.T=n}}function e0(e,t,a,l){var n=X.T;X.T=null;var i=oe.p;try{oe.p=8,ns(e,t,a,l)}finally{oe.p=i,X.T=n}}function ns(e,t,a,l){if(Gr){var n=Fc(l);if(n===null)Fu(e,t,l,Yr,a),Jd(e,l);else if(a0(n,e,t,a,l))l.stopPropagation();else if(Jd(e,l),t&4&&-1<t0.indexOf(e)){for(;n!==null;){var i=on(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Fa(i.pendingLanes);if(r!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var c=1<<31-bt(r);u.entanglements[1]|=c,r&=~c}Vt(i),!(ce&6)&&(Rr=vt()+500,Ei(0))}}break;case 31:case 13:u=vl(i,2),u!==null&&ot(u,i,2),uu(),ls(i,2)}if(i=Fc(l),i===null&&Fu(e,t,l,Yr,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Fu(e,t,l,null,a)}}function Fc(e){return e=go(e),is(e)}var Yr=null;function is(e){if(Yr=null,e=Dl(e),e!==null){var t=fi(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Gf(t),e!==null)return e;e=null}else if(a===31){if(e=Yf(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yr=e,null}function Tp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qy()){case Zf:return 2;case Kf:return 8;case vr:case Gy:return 32;case Pf:return 268435456;default:return 32}default:return 32}}var Wc=!1,Ha=null,wa=null,Ua=null,ui=new Map,ci=new Map,Ta=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jd(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function xn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=on(t),t!==null&&Ep(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function a0(e,t,a,l,n){switch(t){case"focusin":return Ha=xn(Ha,e,t,a,l,n),!0;case"dragenter":return wa=xn(wa,e,t,a,l,n),!0;case"mouseover":return Ua=xn(Ua,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return ui.set(i,xn(ui.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,ci.set(i,xn(ci.get(i)||null,e,t,a,l,n)),!0}return!1}function Cp(e){var t=Dl(e.target);if(t!==null){var a=fi(t);if(a!==null){if(t=a.tag,t===13){if(t=Gf(a),t!==null){e.blockedOn=t,zs(e.priority,function(){Pd(a)});return}}else if(t===31){if(t=Yf(a),t!==null){e.blockedOn=t,zs(e.priority,function(){Pd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Fc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);yc=l,a.target.dispatchEvent(l),yc=null}else return t=on(a),t!==null&&Ep(t),e.blockedOn=a,!1;t.shift()}return!0}function Id(e,t,a){fr(e)&&a.delete(t)}function l0(){Wc=!1,Ha!==null&&fr(Ha)&&(Ha=null),wa!==null&&fr(wa)&&(wa=null),Ua!==null&&fr(Ua)&&(Ua=null),ui.forEach(Id),ci.forEach(Id)}function Pi(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,l0)))}var Ji=null;function Fd(e){Ji!==e&&(Ji=e,je.unstable_scheduleCallback(je.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(is(l||a)===null)continue;break}var i=on(a);i!==null&&(e.splice(t,3),t-=3,Dc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function rn(e){function t(c){return Pi(c,e)}Ha!==null&&Pi(Ha,e),wa!==null&&Pi(wa,e),Ua!==null&&Pi(Ua,e),ui.forEach(t),ci.forEach(t);for(var a=0;a<Ta.length;a++){var l=Ta[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Cp(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[st]||null;if(typeof i=="function")r||Fd(a);else if(r){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[st]||null)u=r.formAction;else if(is(n)!==null)continue}else u=r.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Fd(a)}}}function _p(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function rs(e){this._internalRoot=e}su.prototype.render=rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));var a=t.current,l=St();Sp(a,l,e,t,null,null)};su.prototype.unmount=rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sp(e.current,2,null,e,null,null),uu(),t[cn]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var t=$f();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ta.length&&t!==0&&t<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Cp(e)}};var Wd=jf.version;if(Wd!=="19.2.1")throw Error(_(527,Wd,"19.2.1"));oe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=zy(t),e=e!==null?Xf(e):null,e=e===null?null:e.stateNode,e};var n0={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{mi=Ii.inject(n0),gt=Ii}catch{}}Kr.createRoot=function(e,t){if(!qf(e))throw Error(_(299));var a=!1,l="",n=ph,i=yh,r=vh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=gp(e,1,!1,null,null,a,l,null,n,i,r,_p),e[cn]=t.current,es(e),new rs(t)};Kr.hydrateRoot=function(e,t,a){if(!qf(e))throw Error(_(299));var l=!1,n="",i=ph,r=yh,u=vh,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=gp(e,1,!0,t,a??null,l,n,c,i,r,u,_p),t.context=bp(null),a=t.current,l=St(),l=ho(l),n=Ra(l),n.callback=null,Da(a,n,l),a=l,t.current.lanes=a,pi(t,a),Vt(t),e[cn]=t.current,es(e),new su(t)};Kr.version="19.2.1";function xp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xp)}catch(e){console.error(e)}}xp(),zf.exports=Kr;var i0=zf.exports;const r0=lo(i0);/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _e(){return _e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},_e.apply(this,arguments)}var Me;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Me||(Me={}));const $d="popstate";function u0(e){e===void 0&&(e={});function t(l,n){let{pathname:i,search:r,hash:u}=l.location;return oi("",{pathname:i,search:r,hash:u},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function a(l,n){return typeof n=="string"?n:_i(n)}return o0(t,a,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ml(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function c0(){return Math.random().toString(36).substr(2,8)}function ef(e,t){return{usr:e.state,key:e.key,idx:t}}function oi(e,t,a,l){return a===void 0&&(a=null),_e({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fa(t):t,{state:a,key:t&&t.key||l||c0()})}function _i(e){let{pathname:t="/",search:a="",hash:l=""}=e;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function fa(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let l=e.indexOf("?");l>=0&&(t.search=e.substr(l),e=e.substr(0,l)),e&&(t.pathname=e)}return t}function o0(e,t,a,l){l===void 0&&(l={});let{window:n=document.defaultView,v5Compat:i=!1}=l,r=n.history,u=Me.Pop,c=null,o=m();o==null&&(o=0,r.replaceState(_e({},r.state,{idx:o}),""));function m(){return(r.state||{idx:null}).idx}function f(){u=Me.Pop;let O=m(),p=O==null?null:O-o;o=O,c&&c({action:u,location:C.location,delta:p})}function d(O,p){u=Me.Push;let s=oi(C.location,O,p);o=m()+1;let g=ef(s,o),S=C.createHref(s);try{r.pushState(g,"",S)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;n.location.assign(S)}i&&c&&c({action:u,location:C.location,delta:1})}function h(O,p){u=Me.Replace;let s=oi(C.location,O,p);o=m();let g=ef(s,o),S=C.createHref(s);r.replaceState(g,"",S),i&&c&&c({action:u,location:C.location,delta:0})}function T(O){let p=n.location.origin!=="null"?n.location.origin:n.location.href,s=typeof O=="string"?O:_i(O);return s=s.replace(/ $/,"%20"),J(p,"No window.location.(origin|href) available to create URL for href: "+s),new URL(s,p)}let C={get action(){return u},get location(){return e(n,r)},listen(O){if(c)throw new Error("A history only accepts one active listener");return n.addEventListener($d,f),c=O,()=>{n.removeEventListener($d,f),c=null}},createHref(O){return t(n,O)},createURL:T,encodeLocation(O){let p=T(O);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:h,go(O){return r.go(O)}};return C}var fe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fe||(fe={}));const s0=new Set(["lazy","caseSensitive","path","id","index","children"]);function d0(e){return e.index===!0}function Xr(e,t,a,l){return a===void 0&&(a=[]),l===void 0&&(l={}),e.map((n,i)=>{let r=[...a,String(i)],u=typeof n.id=="string"?n.id:r.join("-");if(J(n.index!==!0||!n.children,"Cannot specify children on an index route"),J(!l[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),d0(n)){let c=_e({},n,t(n),{id:u});return l[u]=c,c}else{let c=_e({},n,t(n),{id:u,children:void 0});return l[u]=c,n.children&&(c.children=Xr(n.children,t,r,l)),c}})}function el(e,t,a){return a===void 0&&(a="/"),mr(e,t,a,!1)}function mr(e,t,a,l){let n=typeof t=="string"?fa(t):t,i=xi(n.pathname||"/",a);if(i==null)return null;let r=Ap(e);m0(r);let u=null;for(let c=0;u==null&&c<r.length;++c){let o=_0(i);u=T0(r[c],o,l)}return u}function f0(e,t){let{route:a,pathname:l,params:n}=e;return{id:a.id,pathname:l,params:n,data:t[a.id],handle:a.handle}}function Ap(e,t,a,l){t===void 0&&(t=[]),a===void 0&&(a=[]),l===void 0&&(l="");let n=(i,r,u)=>{let c={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:r,route:i};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(l),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(l.length));let o=ka([l,c.relativePath]),m=a.concat(c);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+o+'".')),Ap(i.children,t,m,o)),!(i.path==null&&!i.index)&&t.push({path:o,score:S0(o,i.index),routesMeta:m})};return e.forEach((i,r)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))n(i,r);else for(let c of Op(i.path))n(i,r,c)}),t}function Op(e){let t=e.split("/");if(t.length===0)return[];let[a,...l]=t,n=a.endsWith("?"),i=a.replace(/\?$/,"");if(l.length===0)return n?[i,""]:[i];let r=Op(l.join("/")),u=[];return u.push(...r.map(c=>c===""?i:[i,c].join("/"))),n&&u.push(...r),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function m0(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:E0(t.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}const h0=/^:[\w-]+$/,p0=3,y0=2,v0=1,g0=10,b0=-2,tf=e=>e==="*";function S0(e,t){let a=e.split("/"),l=a.length;return a.some(tf)&&(l+=b0),t&&(l+=y0),a.filter(n=>!tf(n)).reduce((n,i)=>n+(h0.test(i)?p0:i===""?v0:g0),l)}function E0(e,t){return e.length===t.length&&e.slice(0,-1).every((l,n)=>l===t[n])?e[e.length-1]-t[t.length-1]:0}function T0(e,t,a){a===void 0&&(a=!1);let{routesMeta:l}=e,n={},i="/",r=[];for(let u=0;u<l.length;++u){let c=l[u],o=u===l.length-1,m=i==="/"?t:t.slice(i.length)||"/",f=af({path:c.relativePath,caseSensitive:c.caseSensitive,end:o},m),d=c.route;if(!f&&o&&a&&!l[l.length-1].route.index&&(f=af({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!f)return null;Object.assign(n,f.params),r.push({params:n,pathname:ka([i,f.pathname]),pathnameBase:L0(ka([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=ka([i,f.pathnameBase]))}return r}function af(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,l]=C0(e.path,e.caseSensitive,e.end),n=t.match(a);if(!n)return null;let i=n[0],r=i.replace(/(.)\/+$/,"$1"),u=n.slice(1);return{params:l.reduce((o,m,f)=>{let{paramName:d,isOptional:h}=m;if(d==="*"){let C=u[f]||"";r=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const T=u[f];return h&&!T?o[d]=void 0:o[d]=(T||"").replace(/%2F/g,"/"),o},{}),pathname:i,pathnameBase:r,pattern:e}}function C0(e,t,a){t===void 0&&(t=!1),a===void 0&&(a=!0),ml(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,u,c)=>(l.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),l]}function _0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ml(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,l=e.charAt(a);return l&&l!=="/"?null:e.slice(a)||"/"}const x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A0=e=>x0.test(e);function O0(e,t){t===void 0&&(t="/");let{pathname:a,search:l="",hash:n=""}=typeof e=="string"?fa(e):e,i;if(a)if(A0(a))i=a;else{if(a.includes("//")){let r=a;a=a.replace(/\/\/+/g,"/"),ml(!1,"Pathnames cannot have embedded double slashes - normalizing "+(r+" -> "+a))}a.startsWith("/")?i=lf(a.substring(1),"/"):i=lf(a,t)}else i=t;return{pathname:i,search:M0(l),hash:B0(n)}}function lf(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?a.length>1&&a.pop():n!=="."&&a.push(n)}),a.length>1?a.join("/"):"/"}function ec(e,t,a,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lp(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function us(e,t){let a=Lp(e);return t?a.map((l,n)=>n===a.length-1?l.pathname:l.pathnameBase):a.map(l=>l.pathnameBase)}function cs(e,t,a,l){l===void 0&&(l=!1);let n;typeof e=="string"?n=fa(e):(n=_e({},e),J(!n.pathname||!n.pathname.includes("?"),ec("?","pathname","search",n)),J(!n.pathname||!n.pathname.includes("#"),ec("#","pathname","hash",n)),J(!n.search||!n.search.includes("#"),ec("#","search","hash",n)));let i=e===""||n.pathname==="",r=i?"/":n.pathname,u;if(r==null)u=a;else{let f=t.length-1;if(!l&&r.startsWith("..")){let d=r.split("/");for(;d[0]==="..";)d.shift(),f-=1;n.pathname=d.join("/")}u=f>=0?t[f]:"/"}let c=O0(n,u),o=r&&r!=="/"&&r.endsWith("/"),m=(i||r===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(o||m)&&(c.pathname+="/"),c}const ka=e=>e.join("/").replace(/\/\/+/g,"/"),L0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,B0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Vr{constructor(t,a,l,n){n===void 0&&(n=!1),this.status=t,this.statusText=a||"",this.internal=n,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}}function si(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mp=["post","put","patch","delete"],R0=new Set(Mp),D0=["get",...Mp],z0=new Set(D0),N0=new Set([301,302,303,307,308]),H0=new Set([307,308]),tc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},w0={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},An={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},os=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U0=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Bp="remix-router-transitions";function k0(e){const t=e.window?e.window:typeof window<"u"?window:void 0,a=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",l=!a;J(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let n;if(e.mapRouteProperties)n=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;n=b=>({hasErrorBoundary:y(b)})}else n=U0;let i={},r=Xr(e.routes,n,void 0,i),u,c=e.basename||"/",o=e.dataStrategy||Y0,m=e.patchRoutesOnNavigation,f=_e({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),d=null,h=new Set,T=null,C=null,O=null,p=e.hydrationData!=null,s=el(r,e.history.location,c),g=!1,S=null;if(s==null&&!m){let y=ut(404,{pathname:e.history.location.pathname}),{matches:b,route:E}=pf(r);s=b,S={[E.id]:y}}s&&!e.hydrationData&&Ri(s,r,e.history.location.pathname).active&&(s=null);let M;if(s)if(s.some(y=>y.route.lazy))M=!1;else if(!s.some(y=>y.route.loader))M=!0;else if(f.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,b=e.hydrationData?e.hydrationData.errors:null;if(b){let E=s.findIndex(x=>b[x.route.id]!==void 0);M=s.slice(0,E+1).every(x=>!eo(x.route,y,b))}else M=s.every(E=>!eo(E.route,y,b))}else M=e.hydrationData!=null;else if(M=!1,s=[],f.v7_partialHydration){let y=Ri(null,r,e.history.location.pathname);y.active&&y.matches&&(g=!0,s=y.matches)}let G,v={historyAction:e.history.action,location:e.history.location,matches:s,initialized:M,navigation:tc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},L=Me.Pop,N=!1,D,ae=!1,le=new Map,Q=null,ne=!1,ie=!1,B=[],Y=new Set,H=new Map,$=0,se=-1,We=new Map,Xe=new Set,Ie=new Map,Fe=new Map,De=new Set,lt=new Map,Qa=new Map,Li;function Xp(){if(d=e.history.listen(y=>{let{action:b,location:E,delta:x}=y;if(Li){Li(),Li=void 0;return}ml(Qa.size===0||x!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=Es({currentLocation:v.location,nextLocation:E,historyAction:b});if(z&&x!=null){let q=new Promise(V=>{Li=V});e.history.go(x*-1),Bi(z,{state:"blocked",location:E,proceed(){Bi(z,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),q.then(()=>e.history.go(x))},reset(){let V=new Map(v.blockers);V.set(z,An),$e({blockers:V})}});return}return Za(b,E)}),a){ab(t,le);let y=()=>lb(t,le);t.addEventListener("pagehide",y),Q=()=>t.removeEventListener("pagehide",y)}return v.initialized||Za(Me.Pop,v.location,{initialHydration:!0}),G}function Vp(){d&&d(),Q&&Q(),h.clear(),D&&D.abort(),v.fetchers.forEach((y,b)=>Mi(b)),v.blockers.forEach((y,b)=>Ss(b))}function Qp(y){return h.add(y),()=>h.delete(y)}function $e(y,b){b===void 0&&(b={}),v=_e({},v,y);let E=[],x=[];f.v7_fetcherPersist&&v.fetchers.forEach((z,q)=>{z.state==="idle"&&(De.has(q)?x.push(q):E.push(q))}),De.forEach(z=>{!v.fetchers.has(z)&&!H.has(z)&&x.push(z)}),[...h].forEach(z=>z(v,{deletedFetchers:x,viewTransitionOpts:b.viewTransitionOpts,flushSync:b.flushSync===!0})),f.v7_fetcherPersist?(E.forEach(z=>v.fetchers.delete(z)),x.forEach(z=>Mi(z))):x.forEach(z=>De.delete(z))}function Sl(y,b,E){var x,z;let{flushSync:q}=E===void 0?{}:E,V=v.actionData!=null&&v.navigation.formMethod!=null&&wt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((x=y.state)==null?void 0:x._isRedirect)!==!0,U;b.actionData?Object.keys(b.actionData).length>0?U=b.actionData:U=null:V?U=v.actionData:U=null;let k=b.loaderData?mf(v.loaderData,b.loaderData,b.matches||[],b.errors):v.loaderData,w=v.blockers;w.size>0&&(w=new Map(w),w.forEach((te,Ve)=>w.set(Ve,An)));let j=N===!0||v.navigation.formMethod!=null&&wt(v.navigation.formMethod)&&((z=y.state)==null?void 0:z._isRedirect)!==!0;u&&(r=u,u=void 0),ne||L===Me.Pop||(L===Me.Push?e.history.push(y,y.state):L===Me.Replace&&e.history.replace(y,y.state));let P;if(L===Me.Pop){let te=le.get(v.location.pathname);te&&te.has(y.pathname)?P={currentLocation:v.location,nextLocation:y}:le.has(y.pathname)&&(P={currentLocation:y,nextLocation:v.location})}else if(ae){let te=le.get(v.location.pathname);te?te.add(y.pathname):(te=new Set([y.pathname]),le.set(v.location.pathname,te)),P={currentLocation:v.location,nextLocation:y}}$e(_e({},b,{actionData:U,loaderData:k,historyAction:L,location:y,initialized:!0,navigation:tc,revalidation:"idle",restoreScrollPosition:Cs(y,b.matches||v.matches),preventScrollReset:j,blockers:w}),{viewTransitionOpts:P,flushSync:q===!0}),L=Me.Pop,N=!1,ae=!1,ne=!1,ie=!1,B=[]}async function ms(y,b){if(typeof y=="number"){e.history.go(y);return}let E=$c(v.location,v.matches,c,f.v7_prependBasename,y,f.v7_relativeSplatPath,b==null?void 0:b.fromRouteId,b==null?void 0:b.relative),{path:x,submission:z,error:q}=nf(f.v7_normalizeFormMethod,!1,E,b),V=v.location,U=oi(v.location,x,b&&b.state);U=_e({},U,e.history.encodeLocation(U));let k=b&&b.replace!=null?b.replace:void 0,w=Me.Push;k===!0?w=Me.Replace:k===!1||z!=null&&wt(z.formMethod)&&z.formAction===v.location.pathname+v.location.search&&(w=Me.Replace);let j=b&&"preventScrollReset"in b?b.preventScrollReset===!0:void 0,P=(b&&b.flushSync)===!0,te=Es({currentLocation:V,nextLocation:U,historyAction:w});if(te){Bi(te,{state:"blocked",location:U,proceed(){Bi(te,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),ms(y,b)},reset(){let Ve=new Map(v.blockers);Ve.set(te,An),$e({blockers:Ve})}});return}return await Za(w,U,{submission:z,pendingError:q,preventScrollReset:j,replace:b&&b.replace,enableViewTransition:b&&b.viewTransition,flushSync:P})}function Zp(){if(mu(),$e({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Za(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Za(L||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation,enableViewTransition:ae===!0})}}async function Za(y,b,E){D&&D.abort(),D=null,L=y,ne=(E&&E.startUninterruptedRevalidation)===!0,ay(v.location,v.matches),N=(E&&E.preventScrollReset)===!0,ae=(E&&E.enableViewTransition)===!0;let x=u||r,z=E&&E.overrideNavigation,q=E!=null&&E.initialHydration&&v.matches&&v.matches.length>0&&!g?v.matches:el(x,b,c),V=(E&&E.flushSync)===!0;if(q&&v.initialized&&!ie&&P0(v.location,b)&&!(E&&E.submission&&wt(E.submission.formMethod))){Sl(b,{matches:q},{flushSync:V});return}let U=Ri(q,x,b.pathname);if(U.active&&U.matches&&(q=U.matches),!q){let{error:ve,notFoundMatches:ue,route:xe}=hu(b.pathname);Sl(b,{matches:ue,loaderData:{},errors:{[xe.id]:ve}},{flushSync:V});return}D=new AbortController;let k=Al(e.history,b,D.signal,E&&E.submission),w;if(E&&E.pendingError)w=[tl(q).route.id,{type:fe.error,error:E.pendingError}];else if(E&&E.submission&&wt(E.submission.formMethod)){let ve=await Kp(k,b,E.submission,q,U.active,{replace:E.replace,flushSync:V});if(ve.shortCircuited)return;if(ve.pendingActionResult){let[ue,xe]=ve.pendingActionResult;if(mt(xe)&&si(xe.error)&&xe.error.status===404){D=null,Sl(b,{matches:ve.matches,loaderData:{},errors:{[ue]:xe.error}});return}}q=ve.matches||q,w=ve.pendingActionResult,z=ac(b,E.submission),V=!1,U.active=!1,k=Al(e.history,k.url,k.signal)}let{shortCircuited:j,matches:P,loaderData:te,errors:Ve}=await Pp(k,b,q,U.active,z,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,V,w);j||(D=null,Sl(b,_e({matches:P||q},hf(w),{loaderData:te,errors:Ve})))}async function Kp(y,b,E,x,z,q){q===void 0&&(q={}),mu();let V=eb(b,E);if($e({navigation:V},{flushSync:q.flushSync===!0}),z){let w=await Di(x,b.pathname,y.signal);if(w.type==="aborted")return{shortCircuited:!0};if(w.type==="error"){let j=tl(w.partialMatches).route.id;return{matches:w.partialMatches,pendingActionResult:[j,{type:fe.error,error:w.error}]}}else if(w.matches)x=w.matches;else{let{notFoundMatches:j,error:P,route:te}=hu(b.pathname);return{matches:j,pendingActionResult:[te.id,{type:fe.error,error:P}]}}}let U,k=Nn(x,b);if(!k.route.action&&!k.route.lazy)U={type:fe.error,error:ut(405,{method:y.method,pathname:b.pathname,routeId:k.route.id})};else if(U=(await pn("action",v,y,[k],x,null))[k.route.id],y.signal.aborted)return{shortCircuited:!0};if(al(U)){let w;return q&&q.replace!=null?w=q.replace:w=sf(U.response.headers.get("Location"),new URL(y.url),c)===v.location.pathname+v.location.search,await Ka(y,U,!0,{submission:E,replace:w}),{shortCircuited:!0}}if(La(U))throw ut(400,{type:"defer-action"});if(mt(U)){let w=tl(x,k.route.id);return(q&&q.replace)!==!0&&(L=Me.Push),{matches:x,pendingActionResult:[w.route.id,U]}}return{matches:x,pendingActionResult:[k.route.id,U]}}async function Pp(y,b,E,x,z,q,V,U,k,w,j){let P=z||ac(b,q),te=q||V||vf(P),Ve=!ne&&(!f.v7_partialHydration||!k);if(x){if(Ve){let Ae=hs(j);$e(_e({navigation:P},Ae!==void 0?{actionData:Ae}:{}),{flushSync:w})}let re=await Di(E,b.pathname,y.signal);if(re.type==="aborted")return{shortCircuited:!0};if(re.type==="error"){let Ae=tl(re.partialMatches).route.id;return{matches:re.partialMatches,loaderData:{},errors:{[Ae]:re.error}}}else if(re.matches)E=re.matches;else{let{error:Ae,notFoundMatches:Tl,route:gn}=hu(b.pathname);return{matches:Tl,loaderData:{},errors:{[gn.id]:Ae}}}}let ve=u||r,[ue,xe]=uf(e.history,v,E,te,b,f.v7_partialHydration&&k===!0,f.v7_skipActionErrorRevalidation,ie,B,Y,De,Ie,Xe,ve,c,j);if(pu(re=>!(E&&E.some(Ae=>Ae.route.id===re))||ue&&ue.some(Ae=>Ae.route.id===re)),se=++$,ue.length===0&&xe.length===0){let re=gs();return Sl(b,_e({matches:E,loaderData:{},errors:j&&mt(j[1])?{[j[0]]:j[1].error}:null},hf(j),re?{fetchers:new Map(v.fetchers)}:{}),{flushSync:w}),{shortCircuited:!0}}if(Ve){let re={};if(!x){re.navigation=P;let Ae=hs(j);Ae!==void 0&&(re.actionData=Ae)}xe.length>0&&(re.fetchers=Jp(xe)),$e(re,{flushSync:w})}xe.forEach(re=>{ha(re.key),re.controller&&H.set(re.key,re.controller)});let El=()=>xe.forEach(re=>ha(re.key));D&&D.signal.addEventListener("abort",El);let{loaderResults:yn,fetcherResults:Zt}=await ps(v,E,ue,xe,y);if(y.signal.aborted)return{shortCircuited:!0};D&&D.signal.removeEventListener("abort",El),xe.forEach(re=>H.delete(re.key));let kt=Fi(yn);if(kt)return await Ka(y,kt.result,!0,{replace:U}),{shortCircuited:!0};if(kt=Fi(Zt),kt)return Xe.add(kt.key),await Ka(y,kt.result,!0,{replace:U}),{shortCircuited:!0};let{loaderData:yu,errors:vn}=ff(v,E,yn,j,xe,Zt,lt);lt.forEach((re,Ae)=>{re.subscribe(Tl=>{(Tl||re.done)&&lt.delete(Ae)})}),f.v7_partialHydration&&k&&v.errors&&(vn=_e({},v.errors,vn));let Pa=gs(),zi=bs(se),Ni=Pa||zi||xe.length>0;return _e({matches:E,loaderData:yu,errors:vn},Ni?{fetchers:new Map(v.fetchers)}:{})}function hs(y){if(y&&!mt(y[1]))return{[y[0]]:y[1].data};if(v.actionData)return Object.keys(v.actionData).length===0?null:v.actionData}function Jp(y){return y.forEach(b=>{let E=v.fetchers.get(b.key),x=On(void 0,E?E.data:void 0);v.fetchers.set(b.key,x)}),new Map(v.fetchers)}function Ip(y,b,E,x){if(l)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ha(y);let z=(x&&x.flushSync)===!0,q=u||r,V=$c(v.location,v.matches,c,f.v7_prependBasename,E,f.v7_relativeSplatPath,b,x==null?void 0:x.relative),U=el(q,V,c),k=Ri(U,q,V);if(k.active&&k.matches&&(U=k.matches),!U){Qt(y,b,ut(404,{pathname:V}),{flushSync:z});return}let{path:w,submission:j,error:P}=nf(f.v7_normalizeFormMethod,!0,V,x);if(P){Qt(y,b,P,{flushSync:z});return}let te=Nn(U,w),Ve=(x&&x.preventScrollReset)===!0;if(j&&wt(j.formMethod)){Fp(y,b,w,te,U,k.active,z,Ve,j);return}Ie.set(y,{routeId:b,path:w}),Wp(y,b,w,te,U,k.active,z,Ve,j)}async function Fp(y,b,E,x,z,q,V,U,k){mu(),Ie.delete(y);function w(ze){if(!ze.route.action&&!ze.route.lazy){let Cl=ut(405,{method:k.formMethod,pathname:E,routeId:b});return Qt(y,b,Cl,{flushSync:V}),!0}return!1}if(!q&&w(x))return;let j=v.fetchers.get(y);ma(y,tb(k,j),{flushSync:V});let P=new AbortController,te=Al(e.history,E,P.signal,k);if(q){let ze=await Di(z,new URL(te.url).pathname,te.signal,y);if(ze.type==="aborted")return;if(ze.type==="error"){Qt(y,b,ze.error,{flushSync:V});return}else if(ze.matches){if(z=ze.matches,x=Nn(z,E),w(x))return}else{Qt(y,b,ut(404,{pathname:E}),{flushSync:V});return}}H.set(y,P);let Ve=$,ue=(await pn("action",v,te,[x],z,y))[x.route.id];if(te.signal.aborted){H.get(y)===P&&H.delete(y);return}if(f.v7_fetcherPersist&&De.has(y)){if(al(ue)||mt(ue)){ma(y,ya(void 0));return}}else{if(al(ue))if(H.delete(y),se>Ve){ma(y,ya(void 0));return}else return Xe.add(y),ma(y,On(k)),Ka(te,ue,!1,{fetcherSubmission:k,preventScrollReset:U});if(mt(ue)){Qt(y,b,ue.error);return}}if(La(ue))throw ut(400,{type:"defer-action"});let xe=v.navigation.location||v.location,El=Al(e.history,xe,P.signal),yn=u||r,Zt=v.navigation.state!=="idle"?el(yn,v.navigation.location,c):v.matches;J(Zt,"Didn't find any matches after fetcher action");let kt=++$;We.set(y,kt);let yu=On(k,ue.data);v.fetchers.set(y,yu);let[vn,Pa]=uf(e.history,v,Zt,k,xe,!1,f.v7_skipActionErrorRevalidation,ie,B,Y,De,Ie,Xe,yn,c,[x.route.id,ue]);Pa.filter(ze=>ze.key!==y).forEach(ze=>{let Cl=ze.key,_s=v.fetchers.get(Cl),iy=On(void 0,_s?_s.data:void 0);v.fetchers.set(Cl,iy),ha(Cl),ze.controller&&H.set(Cl,ze.controller)}),$e({fetchers:new Map(v.fetchers)});let zi=()=>Pa.forEach(ze=>ha(ze.key));P.signal.addEventListener("abort",zi);let{loaderResults:Ni,fetcherResults:re}=await ps(v,Zt,vn,Pa,El);if(P.signal.aborted)return;P.signal.removeEventListener("abort",zi),We.delete(y),H.delete(y),Pa.forEach(ze=>H.delete(ze.key));let Ae=Fi(Ni);if(Ae)return Ka(El,Ae.result,!1,{preventScrollReset:U});if(Ae=Fi(re),Ae)return Xe.add(Ae.key),Ka(El,Ae.result,!1,{preventScrollReset:U});let{loaderData:Tl,errors:gn}=ff(v,Zt,Ni,void 0,Pa,re,lt);if(v.fetchers.has(y)){let ze=ya(ue.data);v.fetchers.set(y,ze)}bs(kt),v.navigation.state==="loading"&&kt>se?(J(L,"Expected pending action"),D&&D.abort(),Sl(v.navigation.location,{matches:Zt,loaderData:Tl,errors:gn,fetchers:new Map(v.fetchers)})):($e({errors:gn,loaderData:mf(v.loaderData,Tl,Zt,gn),fetchers:new Map(v.fetchers)}),ie=!1)}async function Wp(y,b,E,x,z,q,V,U,k){let w=v.fetchers.get(y);ma(y,On(k,w?w.data:void 0),{flushSync:V});let j=new AbortController,P=Al(e.history,E,j.signal);if(q){let ue=await Di(z,new URL(P.url).pathname,P.signal,y);if(ue.type==="aborted")return;if(ue.type==="error"){Qt(y,b,ue.error,{flushSync:V});return}else if(ue.matches)z=ue.matches,x=Nn(z,E);else{Qt(y,b,ut(404,{pathname:E}),{flushSync:V});return}}H.set(y,j);let te=$,ve=(await pn("loader",v,P,[x],z,y))[x.route.id];if(La(ve)&&(ve=await ss(ve,P.signal,!0)||ve),H.get(y)===j&&H.delete(y),!P.signal.aborted){if(De.has(y)){ma(y,ya(void 0));return}if(al(ve))if(se>te){ma(y,ya(void 0));return}else{Xe.add(y),await Ka(P,ve,!1,{preventScrollReset:U});return}if(mt(ve)){Qt(y,b,ve.error);return}J(!La(ve),"Unhandled fetcher deferred data"),ma(y,ya(ve.data))}}async function Ka(y,b,E,x){let{submission:z,fetcherSubmission:q,preventScrollReset:V,replace:U}=x===void 0?{}:x;b.response.headers.has("X-Remix-Revalidate")&&(ie=!0);let k=b.response.headers.get("Location");J(k,"Expected a Location header on the redirect Response"),k=sf(k,new URL(y.url),c);let w=oi(v.location,k,{_isRedirect:!0});if(a){let ue=!1;if(b.response.headers.has("X-Remix-Reload-Document"))ue=!0;else if(os.test(k)){const xe=e.history.createURL(k);ue=xe.origin!==t.location.origin||xi(xe.pathname,c)==null}if(ue){U?t.location.replace(k):t.location.assign(k);return}}D=null;let j=U===!0||b.response.headers.has("X-Remix-Replace")?Me.Replace:Me.Push,{formMethod:P,formAction:te,formEncType:Ve}=v.navigation;!z&&!q&&P&&te&&Ve&&(z=vf(v.navigation));let ve=z||q;if(H0.has(b.response.status)&&ve&&wt(ve.formMethod))await Za(j,w,{submission:_e({},ve,{formAction:k}),preventScrollReset:V||N,enableViewTransition:E?ae:void 0});else{let ue=ac(w,z);await Za(j,w,{overrideNavigation:ue,fetcherSubmission:q,preventScrollReset:V||N,enableViewTransition:E?ae:void 0})}}async function pn(y,b,E,x,z,q){let V,U={};try{V=await X0(o,y,b,E,x,z,q,i,n)}catch(k){return x.forEach(w=>{U[w.route.id]={type:fe.error,error:k}}),U}for(let[k,w]of Object.entries(V))if(J0(w)){let j=w.result;U[k]={type:fe.redirect,response:Z0(j,E,k,z,c,f.v7_relativeSplatPath)}}else U[k]=await Q0(w);return U}async function ps(y,b,E,x,z){let q=y.matches,V=pn("loader",y,z,E,b,null),U=Promise.all(x.map(async j=>{if(j.matches&&j.match&&j.controller){let te=(await pn("loader",y,Al(e.history,j.path,j.controller.signal),[j.match],j.matches,j.key))[j.match.route.id];return{[j.key]:te}}else return Promise.resolve({[j.key]:{type:fe.error,error:ut(404,{pathname:j.path})}})})),k=await V,w=(await U).reduce((j,P)=>Object.assign(j,P),{});return await Promise.all([W0(b,k,z.signal,q,y.loaderData),$0(b,w,x)]),{loaderResults:k,fetcherResults:w}}function mu(){ie=!0,B.push(...pu()),Ie.forEach((y,b)=>{H.has(b)&&Y.add(b),ha(b)})}function ma(y,b,E){E===void 0&&(E={}),v.fetchers.set(y,b),$e({fetchers:new Map(v.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function Qt(y,b,E,x){x===void 0&&(x={});let z=tl(v.matches,b);Mi(y),$e({errors:{[z.route.id]:E},fetchers:new Map(v.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function ys(y){return Fe.set(y,(Fe.get(y)||0)+1),De.has(y)&&De.delete(y),v.fetchers.get(y)||w0}function Mi(y){let b=v.fetchers.get(y);H.has(y)&&!(b&&b.state==="loading"&&We.has(y))&&ha(y),Ie.delete(y),We.delete(y),Xe.delete(y),f.v7_fetcherPersist&&De.delete(y),Y.delete(y),v.fetchers.delete(y)}function $p(y){let b=(Fe.get(y)||0)-1;b<=0?(Fe.delete(y),De.add(y),f.v7_fetcherPersist||Mi(y)):Fe.set(y,b),$e({fetchers:new Map(v.fetchers)})}function ha(y){let b=H.get(y);b&&(b.abort(),H.delete(y))}function vs(y){for(let b of y){let E=ys(b),x=ya(E.data);v.fetchers.set(b,x)}}function gs(){let y=[],b=!1;for(let E of Xe){let x=v.fetchers.get(E);J(x,"Expected fetcher: "+E),x.state==="loading"&&(Xe.delete(E),y.push(E),b=!0)}return vs(y),b}function bs(y){let b=[];for(let[E,x]of We)if(x<y){let z=v.fetchers.get(E);J(z,"Expected fetcher: "+E),z.state==="loading"&&(ha(E),We.delete(E),b.push(E))}return vs(b),b.length>0}function ey(y,b){let E=v.blockers.get(y)||An;return Qa.get(y)!==b&&Qa.set(y,b),E}function Ss(y){v.blockers.delete(y),Qa.delete(y)}function Bi(y,b){let E=v.blockers.get(y)||An;J(E.state==="unblocked"&&b.state==="blocked"||E.state==="blocked"&&b.state==="blocked"||E.state==="blocked"&&b.state==="proceeding"||E.state==="blocked"&&b.state==="unblocked"||E.state==="proceeding"&&b.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+b.state);let x=new Map(v.blockers);x.set(y,b),$e({blockers:x})}function Es(y){let{currentLocation:b,nextLocation:E,historyAction:x}=y;if(Qa.size===0)return;Qa.size>1&&ml(!1,"A router only supports one blocker at a time");let z=Array.from(Qa.entries()),[q,V]=z[z.length-1],U=v.blockers.get(q);if(!(U&&U.state==="proceeding")&&V({currentLocation:b,nextLocation:E,historyAction:x}))return q}function hu(y){let b=ut(404,{pathname:y}),E=u||r,{matches:x,route:z}=pf(E);return pu(),{notFoundMatches:x,route:z,error:b}}function pu(y){let b=[];return lt.forEach((E,x)=>{(!y||y(x))&&(E.cancel(),b.push(x),lt.delete(x))}),b}function ty(y,b,E){if(T=y,O=b,C=E||null,!p&&v.navigation===tc){p=!0;let x=Cs(v.location,v.matches);x!=null&&$e({restoreScrollPosition:x})}return()=>{T=null,O=null,C=null}}function Ts(y,b){return C&&C(y,b.map(x=>f0(x,v.loaderData)))||y.key}function ay(y,b){if(T&&O){let E=Ts(y,b);T[E]=O()}}function Cs(y,b){if(T){let E=Ts(y,b),x=T[E];if(typeof x=="number")return x}return null}function Ri(y,b,E){if(m)if(y){if(Object.keys(y[0].params).length>0)return{active:!0,matches:mr(b,E,c,!0)}}else return{active:!0,matches:mr(b,E,c,!0)||[]};return{active:!1,matches:null}}async function Di(y,b,E,x){if(!m)return{type:"success",matches:y};let z=y;for(;;){let q=u==null,V=u||r,U=i;try{await m({signal:E,path:b,matches:z,fetcherKey:x,patch:(j,P)=>{E.aborted||of(j,P,V,U,n)}})}catch(j){return{type:"error",error:j,partialMatches:z}}finally{q&&!E.aborted&&(r=[...r])}if(E.aborted)return{type:"aborted"};let k=el(V,b,c);if(k)return{type:"success",matches:k};let w=mr(V,b,c,!0);if(!w||z.length===w.length&&z.every((j,P)=>j.route.id===w[P].route.id))return{type:"success",matches:null};z=w}}function ly(y){i={},u=Xr(y,n,void 0,i)}function ny(y,b){let E=u==null;of(y,b,u||r,i,n),E&&(r=[...r],$e({}))}return G={get basename(){return c},get future(){return f},get state(){return v},get routes(){return r},get window(){return t},initialize:Xp,subscribe:Qp,enableScrollRestoration:ty,navigate:ms,fetch:Ip,revalidate:Zp,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:ys,deleteFetcher:$p,dispose:Vp,getBlocker:ey,deleteBlocker:Ss,patchRoutes:ny,_internalFetchControllers:H,_internalActiveDeferreds:lt,_internalSetRoutes:ly},G}function j0(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function $c(e,t,a,l,n,i,r,u){let c,o;if(r){c=[];for(let f of t)if(c.push(f),f.route.id===r){o=f;break}}else c=t,o=t[t.length-1];let m=cs(n||".",us(c,i),xi(e.pathname,a)||e.pathname,u==="path");if(n==null&&(m.search=e.search,m.hash=e.hash),(n==null||n===""||n===".")&&o){let f=ds(m.search);if(o.route.index&&!f)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&f){let d=new URLSearchParams(m.search),h=d.getAll("index");d.delete("index"),h.filter(C=>C).forEach(C=>d.append("index",C));let T=d.toString();m.search=T?"?"+T:""}}return l&&a!=="/"&&(m.pathname=m.pathname==="/"?a:ka([a,m.pathname])),_i(m)}function nf(e,t,a,l){if(!l||!j0(l))return{path:a};if(l.formMethod&&!F0(l.formMethod))return{path:a,error:ut(405,{method:l.formMethod})};let n=()=>({path:a,error:ut(400,{type:"invalid-body"})}),i=l.formMethod||"get",r=e?i.toUpperCase():i.toLowerCase(),u=zp(a);if(l.body!==void 0){if(l.formEncType==="text/plain"){if(!wt(r))return n();let d=typeof l.body=="string"?l.body:l.body instanceof FormData||l.body instanceof URLSearchParams?Array.from(l.body.entries()).reduce((h,T)=>{let[C,O]=T;return""+h+C+"="+O+`
`},""):String(l.body);return{path:a,submission:{formMethod:r,formAction:u,formEncType:l.formEncType,formData:void 0,json:void 0,text:d}}}else if(l.formEncType==="application/json"){if(!wt(r))return n();try{let d=typeof l.body=="string"?JSON.parse(l.body):l.body;return{path:a,submission:{formMethod:r,formAction:u,formEncType:l.formEncType,formData:void 0,json:d,text:void 0}}}catch{return n()}}}J(typeof FormData=="function","FormData is not available in this environment");let c,o;if(l.formData)c=to(l.formData),o=l.formData;else if(l.body instanceof FormData)c=to(l.body),o=l.body;else if(l.body instanceof URLSearchParams)c=l.body,o=df(c);else if(l.body==null)c=new URLSearchParams,o=new FormData;else try{c=new URLSearchParams(l.body),o=df(c)}catch{return n()}let m={formMethod:r,formAction:u,formEncType:l&&l.formEncType||"application/x-www-form-urlencoded",formData:o,json:void 0,text:void 0};if(wt(m.formMethod))return{path:a,submission:m};let f=fa(a);return t&&f.search&&ds(f.search)&&c.append("index",""),f.search="?"+c,{path:_i(f),submission:m}}function rf(e,t,a){a===void 0&&(a=!1);let l=e.findIndex(n=>n.route.id===t);return l>=0?e.slice(0,a?l+1:l):e}function uf(e,t,a,l,n,i,r,u,c,o,m,f,d,h,T,C){let O=C?mt(C[1])?C[1].error:C[1].data:void 0,p=e.createURL(t.location),s=e.createURL(n),g=a;i&&t.errors?g=rf(a,Object.keys(t.errors)[0],!0):C&&mt(C[1])&&(g=rf(a,C[0]));let S=C?C[1].statusCode:void 0,M=r&&S&&S>=400,G=g.filter((L,N)=>{let{route:D}=L;if(D.lazy)return!0;if(D.loader==null)return!1;if(i)return eo(D,t.loaderData,t.errors);if(q0(t.loaderData,t.matches[N],L)||c.some(Q=>Q===L.route.id))return!0;let ae=t.matches[N],le=L;return cf(L,_e({currentUrl:p,currentParams:ae.params,nextUrl:s,nextParams:le.params},l,{actionResult:O,actionStatus:S,defaultShouldRevalidate:M?!1:u||p.pathname+p.search===s.pathname+s.search||p.search!==s.search||Rp(ae,le)}))}),v=[];return f.forEach((L,N)=>{if(i||!a.some(ne=>ne.route.id===L.routeId)||m.has(N))return;let D=el(h,L.path,T);if(!D){v.push({key:N,routeId:L.routeId,path:L.path,matches:null,match:null,controller:null});return}let ae=t.fetchers.get(N),le=Nn(D,L.path),Q=!1;d.has(N)?Q=!1:o.has(N)?(o.delete(N),Q=!0):ae&&ae.state!=="idle"&&ae.data===void 0?Q=u:Q=cf(le,_e({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:s,nextParams:a[a.length-1].params},l,{actionResult:O,actionStatus:S,defaultShouldRevalidate:M?!1:u})),Q&&v.push({key:N,routeId:L.routeId,path:L.path,matches:D,match:le,controller:new AbortController})}),[G,v]}function eo(e,t,a){if(e.lazy)return!0;if(!e.loader)return!1;let l=t!=null&&t[e.id]!==void 0,n=a!=null&&a[e.id]!==void 0;return!l&&n?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!l&&!n}function q0(e,t,a){let l=!t||a.route.id!==t.route.id,n=e[a.route.id]===void 0;return l||n}function Rp(e,t){let a=e.route.path;return e.pathname!==t.pathname||a!=null&&a.endsWith("*")&&e.params["*"]!==t.params["*"]}function cf(e,t){if(e.route.shouldRevalidate){let a=e.route.shouldRevalidate(t);if(typeof a=="boolean")return a}return t.defaultShouldRevalidate}function of(e,t,a,l,n){var i;let r;if(e){let o=l[e];J(o,"No route found to patch children into: routeId = "+e),o.children||(o.children=[]),r=o.children}else r=a;let u=t.filter(o=>!r.some(m=>Dp(o,m))),c=Xr(u,n,[e||"_","patch",String(((i=r)==null?void 0:i.length)||"0")],l);r.push(...c)}function Dp(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((a,l)=>{var n;return(n=t.children)==null?void 0:n.some(i=>Dp(a,i))}):!1}async function G0(e,t,a){if(!e.lazy)return;let l=await e.lazy();if(!e.lazy)return;let n=a[e.id];J(n,"No route found in manifest");let i={};for(let r in l){let c=n[r]!==void 0&&r!=="hasErrorBoundary";ml(!c,'Route "'+n.id+'" has a static property "'+r+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+r+'" will be ignored.')),!c&&!s0.has(r)&&(i[r]=l[r])}Object.assign(n,i),Object.assign(n,_e({},t(n),{lazy:void 0}))}async function Y0(e){let{matches:t}=e,a=t.filter(n=>n.shouldLoad);return(await Promise.all(a.map(n=>n.resolve()))).reduce((n,i,r)=>Object.assign(n,{[a[r].route.id]:i}),{})}async function X0(e,t,a,l,n,i,r,u,c,o){let m=i.map(h=>h.route.lazy?G0(h.route,c,u):void 0),f=i.map((h,T)=>{let C=m[T],O=n.some(s=>s.route.id===h.route.id);return _e({},h,{shouldLoad:O,resolve:async s=>(s&&l.method==="GET"&&(h.route.lazy||h.route.loader)&&(O=!0),O?V0(t,l,h,C,s,o):Promise.resolve({type:fe.data,result:void 0}))})}),d=await e({matches:f,request:l,params:i[0].params,fetcherKey:r,context:o});try{await Promise.all(m)}catch{}return d}async function V0(e,t,a,l,n,i){let r,u,c=o=>{let m,f=new Promise((T,C)=>m=C);u=()=>m(),t.signal.addEventListener("abort",u);let d=T=>typeof o!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+a.route.id+"]"))):o({request:t,params:a.params,context:i},...T!==void 0?[T]:[]),h=(async()=>{try{return{type:"data",result:await(n?n(C=>d(C)):d())}}catch(T){return{type:"error",result:T}}})();return Promise.race([h,f])};try{let o=a.route[e];if(l)if(o){let m,[f]=await Promise.all([c(o).catch(d=>{m=d}),l]);if(m!==void 0)throw m;r=f}else if(await l,o=a.route[e],o)r=await c(o);else if(e==="action"){let m=new URL(t.url),f=m.pathname+m.search;throw ut(405,{method:t.method,pathname:f,routeId:a.route.id})}else return{type:fe.data,result:void 0};else if(o)r=await c(o);else{let m=new URL(t.url),f=m.pathname+m.search;throw ut(404,{pathname:f})}J(r.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+a.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(o){return{type:fe.error,result:o}}finally{u&&t.signal.removeEventListener("abort",u)}return r}async function Q0(e){let{result:t,type:a}=e;if(Np(t)){let f;try{let d=t.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?t.body==null?f=null:f=await t.json():f=await t.text()}catch(d){return{type:fe.error,error:d}}return a===fe.error?{type:fe.error,error:new Vr(t.status,t.statusText,f),statusCode:t.status,headers:t.headers}:{type:fe.data,data:f,statusCode:t.status,headers:t.headers}}if(a===fe.error){if(yf(t)){var l,n;if(t.data instanceof Error){var i,r;return{type:fe.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(r=t.init)!=null&&r.headers?new Headers(t.init.headers):void 0}}return{type:fe.error,error:new Vr(((l=t.init)==null?void 0:l.status)||500,void 0,t.data),statusCode:si(t)?t.status:void 0,headers:(n=t.init)!=null&&n.headers?new Headers(t.init.headers):void 0}}return{type:fe.error,error:t,statusCode:si(t)?t.status:void 0}}if(I0(t)){var u,c;return{type:fe.deferred,deferredData:t,statusCode:(u=t.init)==null?void 0:u.status,headers:((c=t.init)==null?void 0:c.headers)&&new Headers(t.init.headers)}}if(yf(t)){var o,m;return{type:fe.data,data:t.data,statusCode:(o=t.init)==null?void 0:o.status,headers:(m=t.init)!=null&&m.headers?new Headers(t.init.headers):void 0}}return{type:fe.data,data:t}}function Z0(e,t,a,l,n,i){let r=e.headers.get("Location");if(J(r,"Redirects returned/thrown from loaders/actions must have a Location header"),!os.test(r)){let u=l.slice(0,l.findIndex(c=>c.route.id===a)+1);r=$c(new URL(t.url),u,n,!0,r,i),e.headers.set("Location",r)}return e}function sf(e,t,a){if(os.test(e)){let l=e,n=l.startsWith("//")?new URL(t.protocol+l):new URL(l),i=xi(n.pathname,a)!=null;if(n.origin===t.origin&&i)return n.pathname+n.search+n.hash}return e}function Al(e,t,a,l){let n=e.createURL(zp(t)).toString(),i={signal:a};if(l&&wt(l.formMethod)){let{formMethod:r,formEncType:u}=l;i.method=r.toUpperCase(),u==="application/json"?(i.headers=new Headers({"Content-Type":u}),i.body=JSON.stringify(l.json)):u==="text/plain"?i.body=l.text:u==="application/x-www-form-urlencoded"&&l.formData?i.body=to(l.formData):i.body=l.formData}return new Request(n,i)}function to(e){let t=new URLSearchParams;for(let[a,l]of e.entries())t.append(a,typeof l=="string"?l:l.name);return t}function df(e){let t=new FormData;for(let[a,l]of e.entries())t.append(a,l);return t}function K0(e,t,a,l,n){let i={},r=null,u,c=!1,o={},m=a&&mt(a[1])?a[1].error:void 0;return e.forEach(f=>{if(!(f.route.id in t))return;let d=f.route.id,h=t[d];if(J(!al(h),"Cannot handle redirect results in processLoaderData"),mt(h)){let T=h.error;m!==void 0&&(T=m,m=void 0),r=r||{};{let C=tl(e,d);r[C.route.id]==null&&(r[C.route.id]=T)}i[d]=void 0,c||(c=!0,u=si(h.error)?h.error.status:500),h.headers&&(o[d]=h.headers)}else La(h)?(l.set(d,h.deferredData),i[d]=h.deferredData.data,h.statusCode!=null&&h.statusCode!==200&&!c&&(u=h.statusCode),h.headers&&(o[d]=h.headers)):(i[d]=h.data,h.statusCode&&h.statusCode!==200&&!c&&(u=h.statusCode),h.headers&&(o[d]=h.headers))}),m!==void 0&&a&&(r={[a[0]]:m},i[a[0]]=void 0),{loaderData:i,errors:r,statusCode:u||200,loaderHeaders:o}}function ff(e,t,a,l,n,i,r){let{loaderData:u,errors:c}=K0(t,a,l,r);return n.forEach(o=>{let{key:m,match:f,controller:d}=o,h=i[m];if(J(h,"Did not find corresponding fetcher result"),!(d&&d.signal.aborted))if(mt(h)){let T=tl(e.matches,f==null?void 0:f.route.id);c&&c[T.route.id]||(c=_e({},c,{[T.route.id]:h.error})),e.fetchers.delete(m)}else if(al(h))J(!1,"Unhandled fetcher revalidation redirect");else if(La(h))J(!1,"Unhandled fetcher deferred data");else{let T=ya(h.data);e.fetchers.set(m,T)}}),{loaderData:u,errors:c}}function mf(e,t,a,l){let n=_e({},t);for(let i of a){let r=i.route.id;if(t.hasOwnProperty(r)?t[r]!==void 0&&(n[r]=t[r]):e[r]!==void 0&&i.route.loader&&(n[r]=e[r]),l&&l.hasOwnProperty(r))break}return n}function hf(e){return e?mt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function tl(e,t){return(t?e.slice(0,e.findIndex(l=>l.route.id===t)+1):[...e]).reverse().find(l=>l.route.hasErrorBoundary===!0)||e[0]}function pf(e){let t=e.length===1?e[0]:e.find(a=>a.index||!a.path||a.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ut(e,t){let{pathname:a,routeId:l,method:n,type:i,message:r}=t===void 0?{}:t,u="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(u="Bad Request",n&&a&&l?c="You made a "+n+' request to "'+a+'" but '+('did not provide a `loader` for route "'+l+'", ')+"so there is no way to handle the request.":i==="defer-action"?c="defer() is not supported in actions":i==="invalid-body"&&(c="Unable to encode submission body")):e===403?(u="Forbidden",c='Route "'+l+'" does not match URL "'+a+'"'):e===404?(u="Not Found",c='No route matches URL "'+a+'"'):e===405&&(u="Method Not Allowed",n&&a&&l?c="You made a "+n.toUpperCase()+' request to "'+a+'" but '+('did not provide an `action` for route "'+l+'", ')+"so there is no way to handle the request.":n&&(c='Invalid request method "'+n.toUpperCase()+'"')),new Vr(e||500,u,new Error(c),!0)}function Fi(e){let t=Object.entries(e);for(let a=t.length-1;a>=0;a--){let[l,n]=t[a];if(al(n))return{key:l,result:n}}}function zp(e){let t=typeof e=="string"?fa(e):e;return _i(_e({},t,{hash:""}))}function P0(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function J0(e){return Np(e.result)&&N0.has(e.result.status)}function La(e){return e.type===fe.deferred}function mt(e){return e.type===fe.error}function al(e){return(e&&e.type)===fe.redirect}function yf(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function I0(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Np(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function F0(e){return z0.has(e.toLowerCase())}function wt(e){return R0.has(e.toLowerCase())}async function W0(e,t,a,l,n){let i=Object.entries(t);for(let r=0;r<i.length;r++){let[u,c]=i[r],o=e.find(d=>(d==null?void 0:d.route.id)===u);if(!o)continue;let m=l.find(d=>d.route.id===o.route.id),f=m!=null&&!Rp(m,o)&&(n&&n[o.route.id])!==void 0;La(c)&&f&&await ss(c,a,!1).then(d=>{d&&(t[u]=d)})}}async function $0(e,t,a){for(let l=0;l<a.length;l++){let{key:n,routeId:i,controller:r}=a[l],u=t[n];e.find(o=>(o==null?void 0:o.route.id)===i)&&La(u)&&(J(r,"Expected an AbortController for revalidating fetcher deferred result"),await ss(u,r.signal,!0).then(o=>{o&&(t[n]=o)}))}}async function ss(e,t,a){if(a===void 0&&(a=!1),!await e.deferredData.resolveData(t)){if(a)try{return{type:fe.data,data:e.deferredData.unwrappedData}}catch(n){return{type:fe.error,error:n}}return{type:fe.data,data:e.deferredData.data}}}function ds(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Nn(e,t){let a=typeof t=="string"?fa(t).search:t.search;if(e[e.length-1].route.index&&ds(a||""))return e[e.length-1];let l=Lp(e);return l[l.length-1]}function vf(e){let{formMethod:t,formAction:a,formEncType:l,text:n,formData:i,json:r}=e;if(!(!t||!a||!l)){if(n!=null)return{formMethod:t,formAction:a,formEncType:l,formData:void 0,json:void 0,text:n};if(i!=null)return{formMethod:t,formAction:a,formEncType:l,formData:i,json:void 0,text:void 0};if(r!==void 0)return{formMethod:t,formAction:a,formEncType:l,formData:void 0,json:r,text:void 0}}}function ac(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function eb(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function On(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function tb(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ya(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ab(e,t){try{let a=e.sessionStorage.getItem(Bp);if(a){let l=JSON.parse(a);for(let[n,i]of Object.entries(l||{}))i&&Array.isArray(i)&&t.set(n,new Set(i||[]))}}catch{}}function lb(e,t){if(t.size>0){let a={};for(let[l,n]of t)a[l]=[...n];try{e.sessionStorage.setItem(Bp,JSON.stringify(a))}catch(l){ml(!1,"Failed to save applied view transitions in sessionStorage ("+l+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},di.apply(this,arguments)}const du=A.createContext(null),Hp=A.createContext(null),Ai=A.createContext(null),fu=A.createContext(null),bl=A.createContext({outlet:null,matches:[],isDataRoute:!1}),wp=A.createContext(null);function Oi(){return A.useContext(fu)!=null}function fs(){return Oi()||J(!1),A.useContext(fu).location}function Up(e){A.useContext(Ai).static||A.useLayoutEffect(e)}function kp(){let{isDataRoute:e}=A.useContext(bl);return e?pb():nb()}function nb(){Oi()||J(!1);let e=A.useContext(du),{basename:t,future:a,navigator:l}=A.useContext(Ai),{matches:n}=A.useContext(bl),{pathname:i}=fs(),r=JSON.stringify(us(n,a.v7_relativeSplatPath)),u=A.useRef(!1);return Up(()=>{u.current=!0}),A.useCallback(function(o,m){if(m===void 0&&(m={}),!u.current)return;if(typeof o=="number"){l.go(o);return}let f=cs(o,JSON.parse(r),i,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:ka([t,f.pathname])),(m.replace?l.replace:l.push)(f,m.state,m)},[t,l,r,i,e])}function ib(e,t){return jp(e,t)}function jp(e,t,a,l){Oi()||J(!1);let{navigator:n}=A.useContext(Ai),{matches:i}=A.useContext(bl),r=i[i.length-1],u=r?r.params:{};r&&r.pathname;let c=r?r.pathnameBase:"/";r&&r.route;let o=fs(),m;if(t){var f;let O=typeof t=="string"?fa(t):t;c==="/"||(f=O.pathname)!=null&&f.startsWith(c)||J(!1),m=O}else m=o;let d=m.pathname||"/",h=d;if(c!=="/"){let O=c.replace(/^\//,"").split("/");h="/"+d.replace(/^\//,"").split("/").slice(O.length).join("/")}let T=el(e,{pathname:h}),C=sb(T&&T.map(O=>Object.assign({},O,{params:Object.assign({},u,O.params),pathname:ka([c,n.encodeLocation?n.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?c:ka([c,n.encodeLocation?n.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),i,a,l);return t&&C?A.createElement(fu.Provider,{value:{location:di({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Me.Pop}},C):C}function rb(){let e=hb(),t=si(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),a?A.createElement("pre",{style:n},a):null,null)}const ub=A.createElement(rb,null);class cb extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){console.error("React Router caught the following error during render",t,a)}render(){return this.state.error!==void 0?A.createElement(bl.Provider,{value:this.props.routeContext},A.createElement(wp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ob(e){let{routeContext:t,match:a,children:l}=e,n=A.useContext(du);return n&&n.static&&n.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=a.route.id),A.createElement(bl.Provider,{value:t},l)}function sb(e,t,a,l){var n;if(t===void 0&&(t=[]),a===void 0&&(a=null),l===void 0&&(l=null),e==null){var i;if(!a)return null;if(a.errors)e=a.matches;else if((i=l)!=null&&i.v7_partialHydration&&t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let r=e,u=(n=a)==null?void 0:n.errors;if(u!=null){let m=r.findIndex(f=>f.route.id&&(u==null?void 0:u[f.route.id])!==void 0);m>=0||J(!1),r=r.slice(0,Math.min(r.length,m+1))}let c=!1,o=-1;if(a&&l&&l.v7_partialHydration)for(let m=0;m<r.length;m++){let f=r[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=m),f.route.id){let{loaderData:d,errors:h}=a,T=f.route.loader&&d[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||T){c=!0,o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}return r.reduceRight((m,f,d)=>{let h,T=!1,C=null,O=null;a&&(h=u&&f.route.id?u[f.route.id]:void 0,C=f.route.errorElement||ub,c&&(o<0&&d===0?(yb("route-fallback"),T=!0,O=null):o===d&&(T=!0,O=f.route.hydrateFallbackElement||null)));let p=t.concat(r.slice(0,d+1)),s=()=>{let g;return h?g=C:T?g=O:f.route.Component?g=A.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=m,A.createElement(ob,{match:f,routeContext:{outlet:m,matches:p,isDataRoute:a!=null},children:g})};return a&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?A.createElement(cb,{location:a.location,revalidation:a.revalidation,component:C,error:h,children:s(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):s()},null)}var qp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qp||{}),Gp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gp||{});function db(e){let t=A.useContext(du);return t||J(!1),t}function fb(e){let t=A.useContext(Hp);return t||J(!1),t}function mb(e){let t=A.useContext(bl);return t||J(!1),t}function Yp(e){let t=mb(),a=t.matches[t.matches.length-1];return a.route.id||J(!1),a.route.id}function hb(){var e;let t=A.useContext(wp),a=fb(),l=Yp();return t!==void 0?t:(e=a.errors)==null?void 0:e[l]}function pb(){let{router:e}=db(qp.UseNavigateStable),t=Yp(Gp.UseNavigateStable),a=A.useRef(!1);return Up(()=>{a.current=!0}),A.useCallback(function(n,i){i===void 0&&(i={}),a.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,di({fromRouteId:t},i)))},[e,t])}const gf={};function yb(e,t,a){gf[e]||(gf[e]=!0)}function vb(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function gb(e){let{to:t,replace:a,state:l,relative:n}=e;Oi()||J(!1);let{future:i,static:r}=A.useContext(Ai),{matches:u}=A.useContext(bl),{pathname:c}=fs(),o=kp(),m=cs(t,us(u,i.v7_relativeSplatPath),c,n==="path"),f=JSON.stringify(m);return A.useEffect(()=>o(JSON.parse(f),{replace:a,state:l,relative:n}),[o,f,n,a,l]),null}function Nt(e){J(!1)}function bb(e){let{basename:t="/",children:a=null,location:l,navigationType:n=Me.Pop,navigator:i,static:r=!1,future:u}=e;Oi()&&J(!1);let c=t.replace(/^\/*/,"/"),o=A.useMemo(()=>({basename:c,navigator:i,static:r,future:di({v7_relativeSplatPath:!1},u)}),[c,u,i,r]);typeof l=="string"&&(l=fa(l));let{pathname:m="/",search:f="",hash:d="",state:h=null,key:T="default"}=l,C=A.useMemo(()=>{let O=xi(m,c);return O==null?null:{location:{pathname:O,search:f,hash:d,state:h,key:T},navigationType:n}},[c,m,f,d,h,T,n]);return C==null?null:A.createElement(Ai.Provider,{value:o},A.createElement(fu.Provider,{children:a,value:C}))}function Sb(e){let{children:t,location:a}=e;return ib(ao(t),a)}new Promise(()=>{});function ao(e,t){t===void 0&&(t=[]);let a=[];return A.Children.forEach(e,(l,n)=>{if(!A.isValidElement(l))return;let i=[...t,n];if(l.type===A.Fragment){a.push.apply(a,ao(l.props.children,i));return}l.type!==Nt&&J(!1),!l.props.index||!l.props.children||J(!1);let r={id:l.props.id||i.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(r.children=ao(l.props.children,i)),a.push(r)}),a}function Eb(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:A.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:A.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:A.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Qr.apply(this,arguments)}const Tb="6";try{window.__reactRouterVersion=Tb}catch{}function Cb(e,t){return k0({basename:t==null?void 0:t.basename,future:Qr({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:u0({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||_b(),routes:e,mapRouteProperties:Eb,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function _b(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Qr({},t,{errors:xb(t.errors)})),t}function xb(e){if(!e)return null;let t=Object.entries(e),a={};for(let[l,n]of t)if(n&&n.__type==="RouteErrorResponse")a[l]=new Vr(n.status,n.statusText,n.data,n.internal===!0);else if(n&&n.__type==="Error"){if(n.__subType){let i=window[n.__subType];if(typeof i=="function")try{let r=new i(n.message);r.stack="",a[l]=r}catch{}}if(a[l]==null){let i=new Error(n.message);i.stack="",a[l]=i}}else a[l]=n;return a}const Ab=A.createContext({isTransitioning:!1}),Ob=A.createContext(new Map),Lb="startTransition",bf=xy[Lb],Mb="flushSync",Sf=Ry[Mb];function Bb(e){bf?bf(e):e()}function Ln(e){Sf?Sf(e):e()}class Rb{constructor(){this.status="pending",this.promise=new Promise((t,a)=>{this.resolve=l=>{this.status==="pending"&&(this.status="resolved",t(l))},this.reject=l=>{this.status==="pending"&&(this.status="rejected",a(l))}})}}function Db(e){let{fallbackElement:t,router:a,future:l}=e,[n,i]=A.useState(a.state),[r,u]=A.useState(),[c,o]=A.useState({isTransitioning:!1}),[m,f]=A.useState(),[d,h]=A.useState(),[T,C]=A.useState(),O=A.useRef(new Map),{v7_startTransition:p}=l||{},s=A.useCallback(L=>{p?Bb(L):L()},[p]),g=A.useCallback((L,N)=>{let{deletedFetchers:D,flushSync:ae,viewTransitionOpts:le}=N;L.fetchers.forEach((ne,ie)=>{ne.data!==void 0&&O.current.set(ie,ne.data)}),D.forEach(ne=>O.current.delete(ne));let Q=a.window==null||a.window.document==null||typeof a.window.document.startViewTransition!="function";if(!le||Q){ae?Ln(()=>i(L)):s(()=>i(L));return}if(ae){Ln(()=>{d&&(m&&m.resolve(),d.skipTransition()),o({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let ne=a.window.document.startViewTransition(()=>{Ln(()=>i(L))});ne.finished.finally(()=>{Ln(()=>{f(void 0),h(void 0),u(void 0),o({isTransitioning:!1})})}),Ln(()=>h(ne));return}d?(m&&m.resolve(),d.skipTransition(),C({state:L,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(u(L),o({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[a.window,d,m,O,s]);A.useLayoutEffect(()=>a.subscribe(g),[a,g]),A.useEffect(()=>{c.isTransitioning&&!c.flushSync&&f(new Rb)},[c]),A.useEffect(()=>{if(m&&r&&a.window){let L=r,N=m.promise,D=a.window.document.startViewTransition(async()=>{s(()=>i(L)),await N});D.finished.finally(()=>{f(void 0),h(void 0),u(void 0),o({isTransitioning:!1})}),h(D)}},[s,r,m,a.window]),A.useEffect(()=>{m&&r&&n.location.key===r.location.key&&m.resolve()},[m,d,n.location,r]),A.useEffect(()=>{!c.isTransitioning&&T&&(u(T.state),o({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}),C(void 0))},[c.isTransitioning,T]),A.useEffect(()=>{},[]);let S=A.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:L=>a.navigate(L),push:(L,N,D)=>a.navigate(L,{state:N,preventScrollReset:D==null?void 0:D.preventScrollReset}),replace:(L,N,D)=>a.navigate(L,{replace:!0,state:N,preventScrollReset:D==null?void 0:D.preventScrollReset})}),[a]),M=a.basename||"/",G=A.useMemo(()=>({router:a,navigator:S,static:!1,basename:M}),[a,S,M]),v=A.useMemo(()=>({v7_relativeSplatPath:a.future.v7_relativeSplatPath}),[a.future.v7_relativeSplatPath]);return A.useEffect(()=>vb(l,a.future),[l,a.future]),A.createElement(A.Fragment,null,A.createElement(du.Provider,{value:G},A.createElement(Hp.Provider,{value:n},A.createElement(Ob.Provider,{value:O.current},A.createElement(Ab.Provider,{value:c},A.createElement(bb,{basename:M,location:n.location,navigationType:n.historyAction,navigator:S,future:v},n.initialized||a.future.v7_partialHydration?A.createElement(zb,{routes:a.routes,future:a.future,state:n}):t))))),null)}const zb=A.memo(Nb);function Nb(e){let{routes:t,future:a,state:l}=e;return jp(t,void 0,l,a)}var Ef;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ef||(Ef={}));var Tf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tf||(Tf={}));function Hb(){const e=kp(),t=l=>{const n=document.getElementById(l);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},a=()=>{e("/configurator")};return A.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const l=document.getElementById("year");l&&(l.textContent=new Date().getFullYear().toString());const n=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],i=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],r=[...n,...i],u={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},c=new Set(["shell","trimpiece","backShellMain","backHandles"]),o=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],m=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],f=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),d=[{id:"shell",mask:"/assets/masks/leftShell.png"},{id:"trimpiece",mask:"/assets/masks/centerBody.png"},{id:"faceButtons",mask:"/assets/masks/faceButtons.png"},{id:"stickL",mask:"/assets/masks/stickL.png"},{id:"stickR",mask:"/assets/masks/stickR.png"},{id:"touchpad",mask:"/assets/masks/touchpad.png"},{id:"share",mask:"/assets/masks/share.png"},{id:"options",mask:"/assets/masks/options.png"},{id:"psButton",mask:"/assets/masks/psButton.png"},{id:"bumpers",mask:"/assets/masks/bumperL.png"}];function h(Q){return c.has(Q)?o:m}function T(Q){return Q[Math.floor(Math.random()*Q.length)]}function C(Q,ne){const ie={};let B=0;return r.forEach(H=>{const $=h(H.id),se=T($);ie[H.id]=se,B+=u[H.id]||0}),{id:Q,name:(ne==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(Q+1),colors:ie,total:B}}function O(Q,ne){const ie=Q.toFixed(2);return ne==="ar"?ie+" د.ب":"BHD "+ie}const p={ar:{navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
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
        `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly."}};let s=localStorage.getItem("ez_lang")||"ar";function g(){document.documentElement.lang=s,document.documentElement.dir=s==="ar"?"rtl":"ltr"}function S(){const Q=p[s];document.querySelectorAll("[data-i18n]").forEach(ie=>{const B=ie.getAttribute("data-i18n");Q[B]&&(ie.textContent=Q[B])}),document.querySelectorAll("[data-i18n-html]").forEach(ie=>{const B=ie.getAttribute("data-i18n-html");Q[B]&&(ie.innerHTML=Q[B])});const ne=document.getElementById("langToggle");ne&&(ne.textContent=s==="ar"?"EN":"عربي")}let M=[];function G(Q){const ne=p[s],ie=document.createElement("article");ie.className="build-card";const B=document.createElement("div");B.className="build-thumb";const Y=document.createElement("div");Y.className="thumb-controller";const H=document.createElement("div");H.className="thumb-base",Y.appendChild(H),d.forEach(Fe=>{const De=Q.colors[Fe.id];if(!De)return;const lt=document.createElement("div");lt.className="thumb-layer",lt.style.setProperty("--mask-url",`url('${Fe.mask}')`),lt.style.setProperty("--tint",De.hex),f.has(De.hex.toLowerCase())?lt.style.setProperty("--tint-opacity","0.35"):lt.style.setProperty("--tint-opacity","1"),Y.appendChild(lt)}),B.appendChild(Y);const $=document.createElement("div");$.className="build-body";const se=document.createElement("div");se.className="build-title",se.textContent=Q.name;const We=document.createElement("div");We.className="build-price",We.innerHTML=O(Q.total,s);const Xe=document.createElement("div");Xe.className="build-color-row";const Ie=document.createElement("button");return Ie.className="build-cta",Ie.type="button",Ie.textContent=ne.preview,Ie.addEventListener("click",a),$.appendChild(se),$.appendChild(We),$.appendChild(Xe),$.appendChild(Ie),ie.appendChild(B),ie.appendChild($),ie}function v(){const Q=document.getElementById("buildGrid");if(Q){if(Q.innerHTML="",M.length)M=M.map((ne,ie)=>C(ie,s));else for(let ne=0;ne<20;ne++)M.push(C(ne,s));M.forEach(ne=>Q.appendChild(G(ne)))}}function L(Q){s=Q,localStorage.setItem("ez_lang",Q),g(),S(),v()}const N=document.getElementById("langToggle"),D=document.getElementById("contactForm"),ae=()=>{L(s==="ar"?"en":"ar")},le=Q=>{Q.preventDefault(),alert(p[s].formSuccess),D==null||D.reset()};return N==null||N.addEventListener("click",ae),D==null||D.addEventListener("submit",le),g(),S(),v(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",N==null||N.removeEventListener("click",ae),D==null||D.removeEventListener("submit",le)}},[e]),R.jsxs("div",{className:"home-page",children:[R.jsxs("header",{className:"top-nav",children:[R.jsx("div",{className:"nav-left",children:R.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[R.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),R.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),R.jsxs("div",{className:"nav-right",children:[R.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>t("premadeSection")}),R.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>t("contactSection")}),R.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:a}),R.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"})]})]}),R.jsxs("section",{className:"hero",children:[R.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:R.jsx("source",{src:"/assets/back.mp4",type:"video/mp4"})}),R.jsx("div",{className:"hero-overlay"}),R.jsx("div",{className:"hero-inner",children:R.jsxs("div",{children:[R.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),R.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),R.jsxs("div",{className:"hero-actions",children:[R.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:a}),R.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>t("premadeSection")})]})]})})]}),R.jsxs("section",{className:"section",id:"premadeSection",children:[R.jsx("div",{className:"section-header",children:R.jsx("div",{children:R.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),R.jsx("div",{className:"build-grid",id:"buildGrid"})]}),R.jsxs("section",{className:"section",id:"contactSection",children:[R.jsx("div",{className:"section-header",children:R.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),R.jsxs("div",{className:"contact-grid",children:[R.jsxs("div",{className:"contact-card",children:[R.jsx("h3",{"data-i18n":"contactCardTitle"}),R.jsx("p",{"data-i18n":"contactCardText"}),R.jsxs("form",{id:"contactForm",children:[R.jsxs("div",{className:"contact-form-group",children:[R.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),R.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),R.jsxs("div",{className:"contact-form-group",children:[R.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),R.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),R.jsxs("div",{className:"contact-form-group",children:[R.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),R.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),R.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),R.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),R.jsxs("footer",{className:"footer",children:[R.jsx("span",{"data-i18n":"footerText"}),R.jsx("span",{id:"year"})]})]})}const wb=`


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



`,Ub=`


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
  

`;function kb(){return A.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=Ub,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),R.jsx("div",{className:"configurator-page",children:R.jsx("div",{dangerouslySetInnerHTML:{__html:wb}})})}const jb=`


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



`,qb=`


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
  

`;function Gb(){return A.useEffect(()=>{const e=document.createElement("script");return e.textContent=qb,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),R.jsx("div",{className:"cart-page",children:R.jsx("div",{dangerouslySetInnerHTML:{__html:jb}})})}const Yb=`


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



`,Xb=`


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
  

`;function Vb(){return A.useEffect(()=>{const e=document.createElement("script");return e.textContent=Xb,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),R.jsx("div",{className:"checkout-page",children:R.jsx("div",{dangerouslySetInnerHTML:{__html:Yb}})})}const Qb=`
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
`,Zb=`
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
`;function Kb(){return A.useEffect(()=>{const e=document.createElement("script");return e.textContent=Zb,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:Qb}})}const Pb=`
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
`,Jb=`
  const btn = document.getElementById("goSummaryBtn");
  const statusEl = document.getElementById("confirmStatus");
  btn.addEventListener("click", () => window.location.href = "/order-summary");
  statusEl.textContent = "Payment Confirmed";
`;function Ib(){return A.useEffect(()=>{const e=document.createElement("script");return e.textContent=Jb,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:Pb}})}const Fb=`
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
`,Wb=`
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
`;function $b(){return A.useEffect(()=>{const e=document.createElement("script");return e.textContent=Wb,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:Fb}})}const eS=`
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
`,tS=`
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
`;function aS(){return A.useEffect(()=>{const e=document.createElement("script");return e.textContent=tS,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:eS}})}const lS=`
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
`,nS=`
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
`;function iS(){return A.useEffect(()=>{const e=document.createElement("script");return e.textContent=nS,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),R.jsx("div",{dangerouslySetInnerHTML:{__html:lS}})}function rS(){return R.jsxs(Sb,{children:[R.jsx(Nt,{path:"/",element:R.jsx(Hb,{})}),R.jsx(Nt,{path:"/configurator",element:R.jsx(kb,{})}),R.jsx(Nt,{path:"/cart",element:R.jsx(Gb,{})}),R.jsx(Nt,{path:"/checkout",element:R.jsx(Vb,{})}),R.jsx(Nt,{path:"/payment",element:R.jsx(Kb,{})}),R.jsx(Nt,{path:"/payment/confirmation",element:R.jsx(Ib,{})}),R.jsx(Nt,{path:"/order-summary",element:R.jsx($b,{})}),R.jsx(Nt,{path:"/trackorder",element:R.jsx(aS,{})}),R.jsx(Nt,{path:"/pos",element:R.jsx(iS,{})}),R.jsx(Nt,{path:"*",element:R.jsx(gb,{to:"/",replace:!0})})]})}const uS=Cb([{path:"/*",element:R.jsx(rS,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});r0.createRoot(document.getElementById("root")).render(R.jsx(Db,{router:uS}));

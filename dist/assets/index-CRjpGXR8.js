function _d(e,t){for(var a=0;a<t.length;a++){const l=t[a];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(l,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();function lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cd={exports:{}},Zu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy=Symbol.for("react.transitional.element"),ry=Symbol.for("react.fragment");function Ad(e,t,a){var l=null;if(a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:uy,type:e,key:l,ref:t!==void 0?t:null,props:a}}Zu.Fragment=ry;Zu.jsx=Ad;Zu.jsxs=Ad;Cd.exports=Zu;var z=Cd.exports,xd={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.transitional.element"),cy=Symbol.for("react.portal"),oy=Symbol.for("react.fragment"),sy=Symbol.for("react.strict_mode"),fy=Symbol.for("react.profiler"),dy=Symbol.for("react.consumer"),my=Symbol.for("react.context"),hy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),yy=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),vy=Symbol.for("react.activity"),As=Symbol.iterator;function gy(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var Ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Md=Object.assign,Rd={};function rn(e,t,a){this.props=e,this.context=t,this.refs=Rd,this.updater=a||Ld}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bd(){}Bd.prototype=rn.prototype;function io(e,t,a){this.props=e,this.context=t,this.refs=Rd,this.updater=a||Ld}var uo=io.prototype=new Bd;uo.constructor=io;Md(uo,rn.prototype);uo.isPureReactComponent=!0;var xs=Array.isArray;function lc(){}var Ee={H:null,A:null,T:null,S:null},zd=Object.prototype.hasOwnProperty;function ro(e,t,a){var l=a.ref;return{$$typeof:no,type:e,key:t,ref:l!==void 0?l:null,props:a}}function by(e,t){return ro(e.type,t,e.props)}function co(e){return typeof e=="object"&&e!==null&&e.$$typeof===no}function Sy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Os=/\/+/g;function vr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sy(""+e.key):t.toString(36)}function Ey(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(lc,lc):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ol(e,t,a,l,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case no:case cy:u=!0;break;case Od:return u=e._init,Ol(u(e._payload),t,a,l,n)}}if(u)return n=n(e),u=l===""?"."+vr(e,0):l,xs(n)?(a="",u!=null&&(a=u.replace(Os,"$&/")+"/"),Ol(n,t,a,"",function(o){return o})):n!=null&&(co(n)&&(n=by(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Os,"$&/")+"/")+u)),t.push(n)),1;u=0;var r=l===""?".":l+":";if(xs(e))for(var c=0;c<e.length;c++)l=e[c],i=r+vr(l,c),u+=Ol(l,t,a,i,n);else if(c=gy(e),typeof c=="function")for(e=c.call(e),c=0;!(l=e.next()).done;)l=l.value,i=r+vr(l,c++),u+=Ol(l,t,a,i,n);else if(i==="object"){if(typeof e.then=="function")return Ol(Ey(e),t,a,l,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function Hi(e,t,a){if(e==null)return e;var l=[],n=0;return Ol(e,l,"","",function(i){return t.call(a,i,n++)}),l}function Ty(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ls=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_y={map:Hi,forEach:function(e,t,a){Hi(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Hi(e,function(){t++}),t},toArray:function(e){return Hi(e,function(t){return t})||[]},only:function(e){if(!co(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Activity=vy;Z.Children=_y;Z.Component=rn;Z.Fragment=oy;Z.Profiler=fy;Z.PureComponent=io;Z.StrictMode=sy;Z.Suspense=py;Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;Z.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ee.H.useMemoCache(e)}};Z.cache=function(e){return function(){return e.apply(null,arguments)}};Z.cacheSignal=function(){return null};Z.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=Md({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!zd.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=a;else if(1<i){for(var u=Array(i),r=0;r<i;r++)u[r]=arguments[r+2];l.children=u}return ro(e.type,n,l)};Z.createContext=function(e){return e={$$typeof:my,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:dy,_context:e},e};Z.createElement=function(e,t,a){var l,n={},i=null;if(t!=null)for(l in t.key!==void 0&&(i=""+t.key),t)zd.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=t[l]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var r=Array(u),c=0;c<u;c++)r[c]=arguments[c+2];n.children=r}if(e&&e.defaultProps)for(l in u=e.defaultProps,u)n[l]===void 0&&(n[l]=u[l]);return ro(e,i,n)};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:hy,render:e}};Z.isValidElement=co;Z.lazy=function(e){return{$$typeof:Od,_payload:{_status:-1,_result:e},_init:Ty}};Z.memo=function(e,t){return{$$typeof:yy,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Ee.T,a={};Ee.T=a;try{var l=e(),n=Ee.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(lc,Ls)}catch(i){Ls(i)}finally{t!==null&&a.types!==null&&(t.types=a.types),Ee.T=t}};Z.unstable_useCacheRefresh=function(){return Ee.H.useCacheRefresh()};Z.use=function(e){return Ee.H.use(e)};Z.useActionState=function(e,t,a){return Ee.H.useActionState(e,t,a)};Z.useCallback=function(e,t){return Ee.H.useCallback(e,t)};Z.useContext=function(e){return Ee.H.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e,t){return Ee.H.useDeferredValue(e,t)};Z.useEffect=function(e,t){return Ee.H.useEffect(e,t)};Z.useEffectEvent=function(e){return Ee.H.useEffectEvent(e)};Z.useId=function(){return Ee.H.useId()};Z.useImperativeHandle=function(e,t,a){return Ee.H.useImperativeHandle(e,t,a)};Z.useInsertionEffect=function(e,t){return Ee.H.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Ee.H.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Ee.H.useMemo(e,t)};Z.useOptimistic=function(e,t){return Ee.H.useOptimistic(e,t)};Z.useReducer=function(e,t,a){return Ee.H.useReducer(e,t,a)};Z.useRef=function(e){return Ee.H.useRef(e)};Z.useState=function(e){return Ee.H.useState(e)};Z.useSyncExternalStore=function(e,t,a){return Ee.H.useSyncExternalStore(e,t,a)};Z.useTransition=function(){return Ee.H.useTransition()};Z.version="19.2.1";xd.exports=Z;var O=xd.exports;const Cy=lo(O),Ay=_d({__proto__:null,default:Cy},[O]);var Dd={exports:{}},Ku={},Nd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,Y){var H=R.length;R.push(Y);e:for(;0<H;){var $=H-1>>>1,se=R[$];if(0<n(se,Y))R[$]=Y,R[H]=se,H=$;else break e}}function a(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var Y=R[0],H=R.pop();if(H!==Y){R[0]=H;e:for(var $=0,se=R.length,We=se>>>1;$<We;){var Xe=2*($+1)-1,Fe=R[Xe],Ie=Xe+1,ze=R[Ie];if(0>n(Fe,H))Ie<se&&0>n(ze,Fe)?(R[$]=ze,R[Ie]=H,$=Ie):(R[$]=Fe,R[Xe]=H,$=Xe);else if(Ie<se&&0>n(ze,H))R[$]=ze,R[Ie]=H,$=Ie;else break e}}return Y}function n(R,Y){var H=R.sortIndex-Y.sortIndex;return H!==0?H:R.id-Y.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var u=Date,r=u.now();e.unstable_now=function(){return u.now()-r}}var c=[],o=[],m=1,d=null,f=3,h=!1,T=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,s=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function S(R){for(var Y=a(o);Y!==null;){if(Y.callback===null)l(o);else if(Y.startTime<=R)l(o),Y.sortIndex=Y.expirationTime,t(c,Y);else break;Y=a(o)}}function M(R){if(_=!1,S(R),!T)if(a(c)!==null)T=!0,G||(G=!0,le());else{var Y=a(o);Y!==null&&ie(M,Y.startTime-R)}}var G=!1,v=-1,L=5,N=-1;function B(){return x?!0:!(e.unstable_now()-N<L)}function ae(){if(x=!1,G){var R=e.unstable_now();N=R;var Y=!0;try{e:{T=!1,_&&(_=!1,s(v),v=-1),h=!0;var H=f;try{t:{for(S(R),d=a(c);d!==null&&!(d.expirationTime>R&&B());){var $=d.callback;if(typeof $=="function"){d.callback=null,f=d.priorityLevel;var se=$(d.expirationTime<=R);if(R=e.unstable_now(),typeof se=="function"){d.callback=se,S(R),Y=!0;break t}d===a(c)&&l(c),S(R)}else l(c);d=a(c)}if(d!==null)Y=!0;else{var We=a(o);We!==null&&ie(M,We.startTime-R),Y=!1}}break e}finally{d=null,f=H,h=!1}Y=void 0}}finally{Y?le():G=!1}}}var le;if(typeof g=="function")le=function(){g(ae)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ne=Q.port2;Q.port1.onmessage=ae,le=function(){ne.postMessage(null)}}else le=function(){p(ae,0)};function ie(R,Y){v=p(function(){R(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var H=f;f=Y;try{return R()}finally{f=H}},e.unstable_requestPaint=function(){x=!0},e.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=f;f=R;try{return Y()}finally{f=H}},e.unstable_scheduleCallback=function(R,Y,H){var $=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,R){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=H+se,R={id:m++,callback:Y,priorityLevel:R,startTime:H,expirationTime:se,sortIndex:-1},H>$?(R.sortIndex=H,t(o,R),a(c)===null&&R===a(o)&&(_?(s(v),v=-1):_=!0,ie(M,H-$))):(R.sortIndex=se,t(c,R),T||h||(T=!0,G||(G=!0,le()))),R},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(R){var Y=f;return function(){var H=f;f=Y;try{return R.apply(this,arguments)}finally{f=H}}}})(Hd);Nd.exports=Hd;var xy=Nd.exports,Ud={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy=O;function wd(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function pa(){}var tt={d:{f:pa,r:function(){throw Error(wd(522))},D:pa,C:pa,L:pa,m:pa,X:pa,S:pa,M:pa},p:0,findDOMNode:null},Ly=Symbol.for("react.portal");function My(e,t,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ly,key:l==null?null:""+l,children:e,containerInfo:t,implementation:a}}var Hn=Oy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Pu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt;at.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(wd(299));return My(e,t,null,a)};at.flushSync=function(e){var t=Hn.T,a=tt.p;try{if(Hn.T=null,tt.p=2,e)return e()}finally{Hn.T=t,tt.p=a,tt.d.f()}};at.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,tt.d.C(e,t))};at.prefetchDNS=function(e){typeof e=="string"&&tt.d.D(e)};at.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,l=Pu(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?tt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):a==="script"&&tt.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};at.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Pu(t.as,t.crossOrigin);tt.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&tt.d.M(e)};at.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,l=Pu(a,t.crossOrigin);tt.d.L(e,a,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};at.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Pu(t.as,t.crossOrigin);tt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else tt.d.m(e)};at.requestFormReset=function(e){tt.d.r(e)};at.unstable_batchedUpdates=function(e,t){return e(t)};at.useFormState=function(e,t,a){return Hn.H.useFormState(e,t,a)};at.useFormStatus=function(){return Hn.H.useHostTransitionStatus()};at.version="19.2.1";function jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)}catch(e){console.error(e)}}jd(),Ud.exports=at;var oo=Ud.exports;const Ry=lo(oo),By=_d({__proto__:null,default:Ry},[oo]);/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=xy,kd=O,zy=oo;function C(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function di(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yd(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ms(e){if(di(e)!==e)throw Error(C(188))}function Dy(e){var t=e.alternate;if(!t){if(t=di(e),t===null)throw Error(C(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return Ms(n),e;if(i===l)return Ms(n),t;i=i.sibling}throw Error(C(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,r=n.child;r;){if(r===a){u=!0,a=n,l=i;break}if(r===l){u=!0,l=n,a=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===a){u=!0,a=i,l=n;break}if(r===l){u=!0,l=i,a=n;break}r=r.sibling}if(!u)throw Error(C(189))}}if(a.alternate!==l)throw Error(C(190))}if(a.tag!==3)throw Error(C(188));return a.stateNode.current===a?e:t}function Xd(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Xd(e),t!==null)return t;e=e.sibling}return null}var Te=Object.assign,Ny=Symbol.for("react.element"),Ui=Symbol.for("react.transitional.element"),Mn=Symbol.for("react.portal"),Rl=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),Qd=Symbol.for("react.consumer"),ea=Symbol.for("react.context"),so=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),uc=Symbol.for("react.suspense_list"),fo=Symbol.for("react.memo"),va=Symbol.for("react.lazy"),rc=Symbol.for("react.activity"),Hy=Symbol.for("react.memo_cache_sentinel"),Rs=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var Uy=Symbol.for("react.client.reference");function cc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Uy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rl:return"Fragment";case nc:return"Profiler";case Vd:return"StrictMode";case ic:return"Suspense";case uc:return"SuspenseList";case rc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Mn:return"Portal";case ea:return e.displayName||"Context";case Qd:return(e._context.displayName||"Context")+".Consumer";case so:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fo:return t=e.displayName||null,t!==null?t:cc(e.type)||"Memo";case va:t=e._payload,e=e._init;try{return cc(e(t))}catch{}}return null}var Rn=Array.isArray,X=kd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=zy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ll={pending:!1,data:null,method:null,action:null},oc=[],Bl=-1;function Xt(e){return{current:e}}function Ye(e){0>Bl||(e.current=oc[Bl],oc[Bl]=null,Bl--)}function ge(e,t){Bl++,oc[Bl]=e.current,e.current=t}var Yt=Xt(null),Jn=Xt(null),Ma=Xt(null),hu=Xt(null);function pu(e,t){switch(ge(Ma,t),ge(Jn,e),ge(Yt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=wf(t),e=fp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ye(Yt),ge(Yt,e)}function Jl(){Ye(Yt),Ye(Jn),Ye(Ma)}function sc(e){e.memoizedState!==null&&ge(hu,e);var t=Yt.current,a=fp(t,e.type);t!==a&&(ge(Jn,e),ge(Yt,a))}function yu(e){Jn.current===e&&(Ye(Yt),Ye(Jn)),hu.current===e&&(Ye(hu),ui._currentValue=ll)}var gr,Bs;function Fa(e){if(gr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gr=t&&t[1]||"",Bs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gr+e+Bs}var br=!1;function Sr(e,t){if(!e||br)return"";br=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(h){var f=h}Reflect.construct(e,[],d)}else{try{d.call()}catch(h){f=h}e.call(d.prototype)}}else{try{throw Error()}catch(h){f=h}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var c=u.split(`
`),o=r.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===o.length)for(l=c.length-1,n=o.length-1;1<=l&&0<=n&&c[l]!==o[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==o[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==o[n]){var m=`
`+c[l].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=l&&0<=n);break}}}finally{br=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Fa(a):""}function wy(e,t){switch(e.tag){case 26:case 27:case 5:return Fa(e.type);case 16:return Fa("Lazy");case 13:return e.child!==t&&t!==null?Fa("Suspense Fallback"):Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 15:return Sr(e.type,!1);case 11:return Sr(e.type.render,!1);case 1:return Sr(e.type,!0);case 31:return Fa("Activity");default:return""}}function zs(e){try{var t="",a=null;do t+=wy(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fc=Object.prototype.hasOwnProperty,mo=ke.unstable_scheduleCallback,Er=ke.unstable_cancelCallback,jy=ke.unstable_shouldYield,ky=ke.unstable_requestPaint,vt=ke.unstable_now,qy=ke.unstable_getCurrentPriorityLevel,Zd=ke.unstable_ImmediatePriority,Kd=ke.unstable_UserBlockingPriority,vu=ke.unstable_NormalPriority,Gy=ke.unstable_LowPriority,Pd=ke.unstable_IdlePriority,Yy=ke.log,Xy=ke.unstable_setDisableYieldValue,mi=null,gt=null;function _a(e){if(typeof Yy=="function"&&Xy(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(mi,e)}catch{}}var bt=Math.clz32?Math.clz32:Zy,Vy=Math.log,Qy=Math.LN2;function Zy(e){return e>>>=0,e===0?32:31-(Vy(e)/Qy|0)|0}var wi=256,ji=262144,ki=4194304;function Ia(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ju(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=Ia(l):(u&=r,u!==0?n=Ia(u):a||(a=r&~e,a!==0&&(n=Ia(a))))):(r=l&~i,r!==0?n=Ia(r):u!==0?n=Ia(u):a||(a=l&~e,a!==0&&(n=Ia(a)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function hi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ky(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jd(){var e=ki;return ki<<=1,!(ki&62914560)&&(ki=4194304),e}function Tr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function pi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Py(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,c=e.expirationTimes,o=e.hiddenUpdates;for(a=u&~a;0<a;){var m=31-bt(a),d=1<<m;r[m]=0,c[m]=-1;var f=o[m];if(f!==null)for(o[m]=null,m=0;m<f.length;m++){var h=f[m];h!==null&&(h.lane&=-536870913)}a&=~d}l!==0&&Fd(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Fd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-bt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Id(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-bt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Wd(e,t){var a=t&-t;return a=a&42?1:ho(a),a&(e.suspendedLanes|t)?0:a}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function po(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function $d(){var e=oe.p;return e!==0?e:(e=window.event,e===void 0?32:Tp(e.type))}function Ds(e,t){var a=oe.p;try{return oe.p=e,t()}finally{oe.p=a}}var Xa=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Xa,st="__reactProps$"+Xa,cn="__reactContainer$"+Xa,dc="__reactEvents$"+Xa,Jy="__reactListeners$"+Xa,Fy="__reactHandles$"+Xa,Ns="__reactResources$"+Xa,yi="__reactMarker$"+Xa;function yo(e){delete e[Ze],delete e[st],delete e[dc],delete e[Jy],delete e[Fy]}function zl(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[cn]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Yf(e);e!==null;){if(a=e[Ze])return a;e=Yf(e)}return t}e=a,a=e.parentNode}return null}function on(e){if(e=e[Ze]||e[cn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(C(33))}function Yl(e){var t=e[Ns];return t||(t=e[Ns]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[yi]=!0}var em=new Set,tm={};function hl(e,t){Fl(e,t),Fl(e+"Capture",t)}function Fl(e,t){for(tm[e]=t,e=0;e<t.length;e++)em.add(t[e])}var Iy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hs={},Us={};function Wy(e){return fc.call(Us,e)?!0:fc.call(Hs,e)?!1:Iy.test(e)?Us[e]=!0:(Hs[e]=!0,!1)}function Wi(e,t,a){if(Wy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Kt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function am(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $y(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mc(e){if(!e._valueTracker){var t=am(e)?"checked":"value";e._valueTracker=$y(e,t,""+e[t])}}function lm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=am(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function gu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ev=/[\n"\\]/g;function Ot(e){return e.replace(ev,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hc(e,t,a,l,n,i,u,r){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?pc(e,u,Ct(t)):a!=null?pc(e,u,Ct(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Ct(r):e.removeAttribute("name")}function nm(e,t,a,l,n,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){mc(e);return}a=a!=null?""+Ct(a):"",t=t!=null?""+Ct(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),mc(e)}function pc(e,t,a){t==="number"&&gu(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ct(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function im(e,t,a){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ct(a):""}function um(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(C(92));if(Rn(l)){if(1<l.length)throw Error(C(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Ct(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),mc(e)}function Il(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var tv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ws(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||tv.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function rm(e,t,a){if(t!=null&&typeof t!="object")throw Error(C(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ws(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&ws(e,i,t[i])}function vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var av=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(e){return lv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var yc=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Vl=null;function js(e){var t=on(e);if(t&&(e=t.stateNode)){var a=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if(hc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[st]||null;if(!n)throw Error(C(90));hc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&lm(l)}break e;case"textarea":im(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xl(e,!!a.multiple,t,!1)}}}var _r=!1;function cm(e,t,a){if(_r)return e(t,a);_r=!0;try{var l=e(t);return l}finally{if(_r=!1,(Dl!==null||Vl!==null)&&(rr(),Dl&&(t=Dl,e=Vl,Vl=Dl=null,js(t),e)))for(t=0;t<e.length;t++)js(e[t])}}function Fn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[st]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(C(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if(ua)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){vc=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{vc=!1}var Ca=null,bo=null,eu=null;function om(){if(eu)return eu;var e,t=bo,a=t.length,l,n="value"in Ca?Ca.value:Ca.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return eu=n.slice(e,1<l?1-l:void 0)}function tu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function ks(){return!1}function ft(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gi:ks,this.isPropagationStopped=ks,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var pl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=ft(pl),vi=Te({},pl,{view:0,detail:0}),nv=ft(vi),Cr,Ar,En,Iu=Te({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Cr=e.screenX-En.screenX,Ar=e.screenY-En.screenY):Ar=Cr=0,En=e),Cr)},movementY:function(e){return"movementY"in e?e.movementY:Ar}}),qs=ft(Iu),iv=Te({},Iu,{dataTransfer:0}),uv=ft(iv),rv=Te({},vi,{relatedTarget:0}),xr=ft(rv),cv=Te({},pl,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=ft(cv),sv=Te({},pl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fv=ft(sv),dv=Te({},pl,{data:0}),Gs=ft(dv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pv[e])?!!t[e]:!1}function So(){return yv}var vv=Te({},vi,{key:function(e){if(e.key){var t=mv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?tu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gv=ft(vv),bv=Te({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=ft(bv),Sv=Te({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),Ev=ft(Sv),Tv=Te({},pl,{propertyName:0,elapsedTime:0,pseudoElement:0}),_v=ft(Tv),Cv=Te({},Iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=ft(Cv),xv=Te({},pl,{newState:0,oldState:0}),Ov=ft(xv),Lv=[9,13,27,32],Eo=ua&&"CompositionEvent"in window,Un=null;ua&&"documentMode"in document&&(Un=document.documentMode);var Mv=ua&&"TextEvent"in window&&!Un,sm=ua&&(!Eo||Un&&8<Un&&11>=Un),Xs=" ",Vs=!1;function fm(e,t){switch(e){case"keyup":return Lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nl=!1;function Rv(e,t){switch(e){case"compositionend":return dm(t);case"keypress":return t.which!==32?null:(Vs=!0,Xs);case"textInput":return e=t.data,e===Xs&&Vs?null:e;default:return null}}function Bv(e,t){if(Nl)return e==="compositionend"||!Eo&&fm(e,t)?(e=om(),eu=bo=Ca=null,Nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sm&&t.locale!=="ko"?null:t.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zv[e.type]:t==="textarea"}function mm(e,t,a,l){Dl?Vl?Vl.push(l):Vl=[l]:Dl=l,t=Uu(t,"onChange"),0<t.length&&(a=new Fu("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var wn=null,In=null;function Dv(e){cp(e,0)}function Wu(e){var t=Bn(e);if(lm(t))return e}function Zs(e,t){if(e==="change")return t}var hm=!1;if(ua){var Or;if(ua){var Lr="oninput"in document;if(!Lr){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),Lr=typeof Ks.oninput=="function"}Or=Lr}else Or=!1;hm=Or&&(!document.documentMode||9<document.documentMode)}function Ps(){wn&&(wn.detachEvent("onpropertychange",pm),In=wn=null)}function pm(e){if(e.propertyName==="value"&&Wu(In)){var t=[];mm(t,In,e,go(e)),cm(Dv,t)}}function Nv(e,t,a){e==="focusin"?(Ps(),wn=t,In=a,wn.attachEvent("onpropertychange",pm)):e==="focusout"&&Ps()}function Hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wu(In)}function Uv(e,t){if(e==="click")return Wu(t)}function wv(e,t){if(e==="input"||e==="change")return Wu(t)}function jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:jv;function Wn(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!fc.call(t,n)||!Et(e[n],t[n]))return!1}return!0}function Js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var a=Js(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Js(a)}}function ym(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ym(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gu(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=gu(e.document)}return t}function To(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kv=ua&&"documentMode"in document&&11>=document.documentMode,Hl=null,gc=null,jn=null,bc=!1;function Is(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Hl==null||Hl!==gu(l)||(l=Hl,"selectionStart"in l&&To(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jn&&Wn(jn,l)||(jn=l,l=Uu(gc,"onSelect"),0<l.length&&(t=new Fu("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Hl)))}function Ja(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ul={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Mr={},gm={};ua&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete Ul.animationend.animation,delete Ul.animationiteration.animation,delete Ul.animationstart.animation),"TransitionEvent"in window||delete Ul.transitionend.transition);function yl(e){if(Mr[e])return Mr[e];if(!Ul[e])return e;var t=Ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in gm)return Mr[e]=t[a];return e}var bm=yl("animationend"),Sm=yl("animationiteration"),Em=yl("animationstart"),qv=yl("transitionrun"),Gv=yl("transitionstart"),Yv=yl("transitioncancel"),Tm=yl("transitionend"),_m=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function Ut(e,t){_m.set(e,t),hl(t,[e])}var bu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],wl=0,_o=0;function $u(){for(var e=wl,t=_o=wl=0;t<e;){var a=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var i=_t[t];if(_t[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Cm(a,n,i)}}function er(e,t,a,l){_t[wl++]=e,_t[wl++]=t,_t[wl++]=a,_t[wl++]=l,_o|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Co(e,t,a,l){return er(e,t,a,l),Su(e)}function vl(e,t){return er(e,null,null,t),Su(e)}function Cm(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-bt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Su(e){if(50<Kn)throw Kn=0,Gc=null,Error(C(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var jl={};function Xv(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,a,l){return new Xv(e,t,a,l)}function Ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function la(e,t){var a=e.alternate;return a===null?(a=pt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Am(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function au(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Ao(e)&&(u=1);else if(typeof e=="string")u=Pg(e,a,Yt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case rc:return e=pt(31,a,t,n),e.elementType=rc,e.lanes=i,e;case Rl:return nl(a.children,n,i,t);case Vd:u=8,n|=24;break;case nc:return e=pt(12,a,t,n|2),e.elementType=nc,e.lanes=i,e;case ic:return e=pt(13,a,t,n),e.elementType=ic,e.lanes=i,e;case uc:return e=pt(19,a,t,n),e.elementType=uc,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ea:u=10;break e;case Qd:u=9;break e;case so:u=11;break e;case fo:u=14;break e;case va:u=16,l=null;break e}u=29,a=Error(C(130,e===null?"null":typeof e,"")),l=null}return t=pt(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function nl(e,t,a,l){return e=pt(7,e,l,t),e.lanes=a,e}function Rr(e,t,a){return e=pt(6,e,null,t),e.lanes=a,e}function xm(e){var t=pt(18,null,null,0);return t.stateNode=e,t}function Br(e,t,a){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ws=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var a=Ws.get(e);return a!==void 0?a:(t={value:e,source:t,stack:zs(t)},Ws.set(e,t),t)}return{value:e,source:t,stack:zs(t)}}var kl=[],ql=0,Eu=null,$n=0,At=[],xt=0,ka=null,kt=1,qt="";function Wt(e,t){kl[ql++]=$n,kl[ql++]=Eu,Eu=e,$n=t}function Om(e,t,a){At[xt++]=kt,At[xt++]=qt,At[xt++]=ka,ka=e;var l=kt;e=qt;var n=32-bt(l)-1;l&=~(1<<n),a+=1;var i=32-bt(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,kt=1<<32-bt(t)+n|a<<n|l,qt=i+e}else kt=1<<i|a<<n|l,qt=e}function xo(e){e.return!==null&&(Wt(e,1),Om(e,1,0))}function Oo(e){for(;e===Eu;)Eu=kl[--ql],kl[ql]=null,$n=kl[--ql],kl[ql]=null;for(;e===ka;)ka=At[--xt],At[xt]=null,qt=At[--xt],At[xt]=null,kt=At[--xt],At[xt]=null}function Lm(e,t){At[xt++]=kt,At[xt++]=qt,At[xt++]=ka,kt=t.id,qt=t.overflow,ka=e}var Ke=null,Se=null,ee=!1,Ra=null,Mt=!1,Ec=Error(C(519));function qa(e){var t=Error(C(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(Lt(t,e)),Ec}function $s(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[st]=l,a){case"dialog":F("cancel",t),F("close",t);break;case"iframe":case"object":case"embed":F("load",t);break;case"video":case"audio":for(a=0;a<ni.length;a++)F(ni[a],t);break;case"source":F("error",t);break;case"img":case"image":case"link":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"input":F("invalid",t),nm(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":F("invalid",t);break;case"textarea":F("invalid",t),um(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||sp(t.textContent,a)?(l.popover!=null&&(F("beforetoggle",t),F("toggle",t)),l.onScroll!=null&&F("scroll",t),l.onScrollEnd!=null&&F("scrollend",t),l.onClick!=null&&(t.onclick=ta),t=!0):t=!1,t||qa(e,!0)}function ef(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:Ke=Ke.return}}function Cl(e){if(e!==Ke)return!1;if(!ee)return ef(e),ee=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zc(e.type,e.memoizedProps)),a=!a),a&&Se&&qa(e),ef(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));Se=Gf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));Se=Gf(e)}else t===27?(t=Se,Va(e.type)?(e=Fc,Fc=null,Se=e):Se=t):Se=Ke?Bt(e.stateNode.nextSibling):null;return!0}function cl(){Se=Ke=null,ee=!1}function zr(){var e=Ra;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),Ra=null),e}function ei(e){Ra===null?Ra=[e]:Ra.push(e)}var Tc=Xt(null),gl=null,aa=null;function ba(e,t,a){ge(Tc,t._currentValue),t._currentValue=a}function na(e){e._currentValue=Tc.current,Ye(Tc)}function _c(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Cc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=n;for(var c=0;c<t.length;c++)if(r.context===t[c]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),_c(i.return,a,e),l||(u=null);break e}i=r.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(C(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),_c(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function sn(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(C(387));if(u=u.memoizedProps,u!==null){var r=n.type;Et(n.pendingProps.value,u.value)||(e!==null?e.push(r):e=[r])}}else if(n===hu.current){if(u=n.alternate,u===null)throw Error(C(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}n=n.return}e!==null&&Cc(t,e,a,l),t.flags|=262144}function Tu(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ol(e){gl=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return Mm(gl,e)}function Yi(e,t){return gl===null&&ol(e),Mm(e,t)}function Mm(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(C(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return a}var Vv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Qv=ke.unstable_scheduleCallback,Zv=ke.unstable_NormalPriority,Ue={$$typeof:ea,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lo(){return{controller:new Vv,data:new Map,refCount:0}}function gi(e){e.refCount--,e.refCount===0&&Qv(Zv,function(){e.controller.abort()})}var kn=null,Ac=0,Wl=0,Ql=null;function Kv(e,t){if(kn===null){var a=kn=[];Ac=0,Wl=$o(),Ql={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ac++,t.then(tf,tf),t}function tf(){if(--Ac===0&&kn!==null){Ql!==null&&(Ql.status="fulfilled");var e=kn;kn=null,Wl=0,Ql=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pv(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var af=X.S;X.S=function(e,t){Xh=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Kv(e,t),af!==null&&af(e,t)};var il=Xt(null);function Mo(){var e=il.current;return e!==null?e:ye.pooledCache}function lu(e,t){t===null?ge(il,il.current):ge(il,t.pool)}function Rm(){var e=Mo();return e===null?null:{parent:Ue._currentValue,pool:e}}var fn=Error(C(460)),Ro=Error(C(474)),tr=Error(C(542)),_u={then:function(){}};function lf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bm(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ta,ta),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uf(e),e;default:if(typeof t.status=="string")t.then(ta,ta);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(C(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uf(e),e}throw ul=t,fn}}function Wa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ul=a,fn):a}}var ul=null;function nf(){if(ul===null)throw Error(C(459));var e=ul;return ul=null,e}function uf(e){if(e===fn||e===tr)throw Error(C(483))}var Zl=null,ti=0;function Xi(e){var t=ti;return ti+=1,Zl===null&&(Zl=[]),Bm(Zl,e,t)}function Tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vi(e,t){throw t.$$typeof===Ny?Error(C(525)):(e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zm(e){function t(p,s){if(e){var g=p.deletions;g===null?(p.deletions=[s],p.flags|=16):g.push(s)}}function a(p,s){if(!e)return null;for(;s!==null;)t(p,s),s=s.sibling;return null}function l(p){for(var s=new Map;p!==null;)p.key!==null?s.set(p.key,p):s.set(p.index,p),p=p.sibling;return s}function n(p,s){return p=la(p,s),p.index=0,p.sibling=null,p}function i(p,s,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<s?(p.flags|=67108866,s):g):(p.flags|=67108866,s)):(p.flags|=1048576,s)}function u(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function r(p,s,g,S){return s===null||s.tag!==6?(s=Rr(g,p.mode,S),s.return=p,s):(s=n(s,g),s.return=p,s)}function c(p,s,g,S){var M=g.type;return M===Rl?m(p,s,g.props.children,S,g.key):s!==null&&(s.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===va&&Wa(M)===s.type)?(s=n(s,g.props),Tn(s,g),s.return=p,s):(s=au(g.type,g.key,g.props,null,p.mode,S),Tn(s,g),s.return=p,s)}function o(p,s,g,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==g.containerInfo||s.stateNode.implementation!==g.implementation?(s=Br(g,p.mode,S),s.return=p,s):(s=n(s,g.children||[]),s.return=p,s)}function m(p,s,g,S,M){return s===null||s.tag!==7?(s=nl(g,p.mode,S,M),s.return=p,s):(s=n(s,g),s.return=p,s)}function d(p,s,g){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Rr(""+s,p.mode,g),s.return=p,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Ui:return g=au(s.type,s.key,s.props,null,p.mode,g),Tn(g,s),g.return=p,g;case Mn:return s=Br(s,p.mode,g),s.return=p,s;case va:return s=Wa(s),d(p,s,g)}if(Rn(s)||bn(s))return s=nl(s,p.mode,g,null),s.return=p,s;if(typeof s.then=="function")return d(p,Xi(s),g);if(s.$$typeof===ea)return d(p,Yi(p,s),g);Vi(p,s)}return null}function f(p,s,g,S){var M=s!==null?s.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return M!==null?null:r(p,s,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:return g.key===M?c(p,s,g,S):null;case Mn:return g.key===M?o(p,s,g,S):null;case va:return g=Wa(g),f(p,s,g,S)}if(Rn(g)||bn(g))return M!==null?null:m(p,s,g,S,null);if(typeof g.then=="function")return f(p,s,Xi(g),S);if(g.$$typeof===ea)return f(p,s,Yi(p,g),S);Vi(p,g)}return null}function h(p,s,g,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return p=p.get(g)||null,r(s,p,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ui:return p=p.get(S.key===null?g:S.key)||null,c(s,p,S,M);case Mn:return p=p.get(S.key===null?g:S.key)||null,o(s,p,S,M);case va:return S=Wa(S),h(p,s,g,S,M)}if(Rn(S)||bn(S))return p=p.get(g)||null,m(s,p,S,M,null);if(typeof S.then=="function")return h(p,s,g,Xi(S),M);if(S.$$typeof===ea)return h(p,s,g,Yi(s,S),M);Vi(s,S)}return null}function T(p,s,g,S){for(var M=null,G=null,v=s,L=s=0,N=null;v!==null&&L<g.length;L++){v.index>L?(N=v,v=null):N=v.sibling;var B=f(p,v,g[L],S);if(B===null){v===null&&(v=N);break}e&&v&&B.alternate===null&&t(p,v),s=i(B,s,L),G===null?M=B:G.sibling=B,G=B,v=N}if(L===g.length)return a(p,v),ee&&Wt(p,L),M;if(v===null){for(;L<g.length;L++)v=d(p,g[L],S),v!==null&&(s=i(v,s,L),G===null?M=v:G.sibling=v,G=v);return ee&&Wt(p,L),M}for(v=l(v);L<g.length;L++)N=h(v,p,L,g[L],S),N!==null&&(e&&N.alternate!==null&&v.delete(N.key===null?L:N.key),s=i(N,s,L),G===null?M=N:G.sibling=N,G=N);return e&&v.forEach(function(ae){return t(p,ae)}),ee&&Wt(p,L),M}function _(p,s,g,S){if(g==null)throw Error(C(151));for(var M=null,G=null,v=s,L=s=0,N=null,B=g.next();v!==null&&!B.done;L++,B=g.next()){v.index>L?(N=v,v=null):N=v.sibling;var ae=f(p,v,B.value,S);if(ae===null){v===null&&(v=N);break}e&&v&&ae.alternate===null&&t(p,v),s=i(ae,s,L),G===null?M=ae:G.sibling=ae,G=ae,v=N}if(B.done)return a(p,v),ee&&Wt(p,L),M;if(v===null){for(;!B.done;L++,B=g.next())B=d(p,B.value,S),B!==null&&(s=i(B,s,L),G===null?M=B:G.sibling=B,G=B);return ee&&Wt(p,L),M}for(v=l(v);!B.done;L++,B=g.next())B=h(v,p,L,B.value,S),B!==null&&(e&&B.alternate!==null&&v.delete(B.key===null?L:B.key),s=i(B,s,L),G===null?M=B:G.sibling=B,G=B);return e&&v.forEach(function(le){return t(p,le)}),ee&&Wt(p,L),M}function x(p,s,g,S){if(typeof g=="object"&&g!==null&&g.type===Rl&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:e:{for(var M=g.key;s!==null;){if(s.key===M){if(M=g.type,M===Rl){if(s.tag===7){a(p,s.sibling),S=n(s,g.props.children),S.return=p,p=S;break e}}else if(s.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===va&&Wa(M)===s.type){a(p,s.sibling),S=n(s,g.props),Tn(S,g),S.return=p,p=S;break e}a(p,s);break}else t(p,s);s=s.sibling}g.type===Rl?(S=nl(g.props.children,p.mode,S,g.key),S.return=p,p=S):(S=au(g.type,g.key,g.props,null,p.mode,S),Tn(S,g),S.return=p,p=S)}return u(p);case Mn:e:{for(M=g.key;s!==null;){if(s.key===M)if(s.tag===4&&s.stateNode.containerInfo===g.containerInfo&&s.stateNode.implementation===g.implementation){a(p,s.sibling),S=n(s,g.children||[]),S.return=p,p=S;break e}else{a(p,s);break}else t(p,s);s=s.sibling}S=Br(g,p.mode,S),S.return=p,p=S}return u(p);case va:return g=Wa(g),x(p,s,g,S)}if(Rn(g))return T(p,s,g,S);if(bn(g)){if(M=bn(g),typeof M!="function")throw Error(C(150));return g=M.call(g),_(p,s,g,S)}if(typeof g.then=="function")return x(p,s,Xi(g),S);if(g.$$typeof===ea)return x(p,s,Yi(p,g),S);Vi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,s!==null&&s.tag===6?(a(p,s.sibling),S=n(s,g),S.return=p,p=S):(a(p,s),S=Rr(g,p.mode,S),S.return=p,p=S),u(p)):a(p,s)}return function(p,s,g,S){try{ti=0;var M=x(p,s,g,S);return Zl=null,M}catch(v){if(v===fn||v===tr)throw v;var G=pt(29,v,null,p.mode);return G.lanes=S,G.return=p,G}finally{}}}var sl=zm(!0),Dm=zm(!1),ga=!1;function Bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ce&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Su(e),Cm(e,null,a),t}return er(e,l,t,a),Su(e)}function qn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Id(e,a)}}function Dr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Oc=!1;function Gn(){if(Oc){var e=Ql;if(e!==null)throw e}}function Yn(e,t,a,l){Oc=!1;var n=e.updateQueue;ga=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var c=r,o=c.next;c.next=null,u===null?i=o:u.next=o,u=c;var m=e.alternate;m!==null&&(m=m.updateQueue,r=m.lastBaseUpdate,r!==u&&(r===null?m.firstBaseUpdate=o:r.next=o,m.lastBaseUpdate=c))}if(i!==null){var d=n.baseState;u=0,m=o=c=null,r=i;do{var f=r.lane&-536870913,h=f!==r.lane;if(h?(W&f)===f:(l&f)===f){f!==0&&f===Wl&&(Oc=!0),m!==null&&(m=m.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var T=e,_=r;f=t;var x=a;switch(_.tag){case 1:if(T=_.payload,typeof T=="function"){d=T.call(x,d,f);break e}d=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=_.payload,f=typeof T=="function"?T.call(x,d,f):T,f==null)break e;d=Te({},d,f);break e;case 2:ga=!0}}f=r.callback,f!==null&&(e.flags|=64,h&&(e.flags|=8192),h=n.callbacks,h===null?n.callbacks=[f]:h.push(f))}else h={lane:f,tag:r.tag,payload:r.payload,callback:r.callback,next:null},m===null?(o=m=h,c=d):m=m.next=h,u|=f;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;h=r,r=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);m===null&&(c=d),n.baseState=c,n.firstBaseUpdate=o,n.lastBaseUpdate=m,i===null&&(n.shared.lanes=0),Ya|=u,e.lanes=u,e.memoizedState=d}}function Nm(e,t){if(typeof e!="function")throw Error(C(191,e));e.call(t)}function Hm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nm(a[e],t)}var $l=Xt(null),Cu=Xt(0);function rf(e,t){e=sa,ge(Cu,e),ge($l,t),sa=e|t.baseLanes}function Lc(){ge(Cu,sa),ge($l,$l.current)}function zo(){sa=Cu.current,Ye($l),Ye(Cu)}var Tt=Xt(null),Rt=null;function Sa(e){var t=e.alternate;ge(Re,Re.current&1),ge(Tt,e),Rt===null&&(t===null||$l.current!==null||t.memoizedState!==null)&&(Rt=e)}function Mc(e){ge(Re,Re.current),ge(Tt,e),Rt===null&&(Rt=e)}function Um(e){e.tag===22?(ge(Re,Re.current),ge(Tt,e),Rt===null&&(Rt=e)):Ea()}function Ea(){ge(Re,Re.current),ge(Tt,Tt.current)}function ht(e){Ye(Tt),Rt===e&&(Rt=null),Ye(Re)}var Re=Xt(0);function Au(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pc(a)||Jc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=0,K=null,pe=null,Ne=null,xu=!1,Kl=!1,fl=!1,Ou=0,ai=0,Pl=null,Jv=0;function Oe(){throw Error(C(321))}function Do(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Et(e[a],t[a]))return!1;return!0}function No(e,t,a,l,n,i){return ra=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?mh:Qo,fl=!1,i=a(l,n),fl=!1,Kl&&(i=jm(t,a,l,n)),wm(e),i}function wm(e){X.H=li;var t=pe!==null&&pe.next!==null;if(ra=0,Ne=pe=K=null,xu=!1,ai=0,Pl=null,t)throw Error(C(300));e===null||we||(e=e.dependencies,e!==null&&Tu(e)&&(we=!0))}function jm(e,t,a,l){K=e;var n=0;do{if(Kl&&(Pl=null),ai=0,Kl=!1,25<=n)throw Error(C(301));if(n+=1,Ne=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}X.H=hh,i=t(a,l)}while(Kl);return i}function Fv(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(K.flags|=1024),t}function Ho(){var e=Ou!==0;return Ou=0,e}function Uo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function wo(e){if(xu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xu=!1}ra=0,Ne=pe=K=null,Kl=!1,ai=Ou=0,Pl=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?K.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Be(){if(pe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Ne===null?K.memoizedState:Ne.next;if(t!==null)Ne=t,pe=e;else{if(e===null)throw K.alternate===null?Error(C(467)):Error(C(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ne===null?K.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=ai;return ai+=1,Pl===null&&(Pl=[]),e=Bm(Pl,e,t),t=K,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?mh:Qo),e}function lr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===ea)return Pe(e)}throw Error(C(438,String(e)))}function jo(e){var t=null,a=K.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=K.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ar(),K.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Hy;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function nu(e){var t=Be();return ko(t,pe,e)}function ko(e,t,a){var l=e.queue;if(l===null)throw Error(C(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var r=u=null,c=null,o=t,m=!1;do{var d=o.lane&-536870913;if(d!==o.lane?(W&d)===d:(ra&d)===d){var f=o.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),d===Wl&&(m=!0);else if((ra&f)===f){o=o.next,f===Wl&&(m=!0);continue}else d={lane:0,revertLane:o.revertLane,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},c===null?(r=c=d,u=i):c=c.next=d,K.lanes|=f,Ya|=f;d=o.action,fl&&a(i,d),i=o.hasEagerState?o.eagerState:a(i,d)}else f={lane:d,revertLane:o.revertLane,gesture:o.gesture,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},c===null?(r=c=f,u=i):c=c.next=f,K.lanes|=d,Ya|=d;o=o.next}while(o!==null&&o!==t);if(c===null?u=i:c.next=r,!Et(i,e.memoizedState)&&(we=!0,m&&(a=Ql,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nr(e){var t=Be(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Et(i,t.memoizedState)||(we=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function km(e,t,a){var l=K,n=Be(),i=ee;if(i){if(a===void 0)throw Error(C(407));a=a()}else a=t();var u=!Et((pe||n).memoizedState,a);if(u&&(n.memoizedState=a,we=!0),n=n.queue,qo(Ym.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Ne!==null&&Ne.memoizedState.tag&1){if(l.flags|=2048,en(9,{destroy:void 0},Gm.bind(null,l,n,a,t),null),ye===null)throw Error(C(349));i||ra&127||qm(l,t,a)}return a}function qm(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t=ar(),K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gm(e,t,a,l){t.value=a,t.getSnapshot=l,Xm(t)&&Vm(e)}function Ym(e,t,a){return a(function(){Xm(t)&&Vm(e)})}function Xm(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Et(e,a)}catch{return!0}}function Vm(e){var t=vl(e,2);t!==null&&ot(t,e,2)}function Rc(e){var t=et();if(typeof e=="function"){var a=e;if(e=a(),fl){_a(!0);try{a()}finally{_a(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function Qm(e,t,a,l){return e.baseState=a,ko(e,pe,typeof l=="function"?l:ca)}function Iv(e,t,a,l,n){if(ir(e))throw Error(C(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};X.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Zm(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Zm(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=X.T,u={};X.T=u;try{var r=a(n,l),c=X.S;c!==null&&c(u,r),cf(e,t,r)}catch(o){Bc(e,t,o)}finally{i!==null&&u.types!==null&&(i.types=u.types),X.T=i}}else try{i=a(n,l),cf(e,t,i)}catch(o){Bc(e,t,o)}}function cf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){of(e,t,l)},function(l){return Bc(e,t,l)}):of(e,t,a)}function of(e,t,a){t.status="fulfilled",t.value=a,Km(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Zm(e,a)))}function Bc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Km(t),t=t.next;while(t!==l)}e.action=null}function Km(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pm(e,t){return t}function sf(e,t){if(ee){var a=ye.formState;if(a!==null){e:{var l=K;if(ee){if(Se){t:{for(var n=Se,i=Mt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Bt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Se=Bt(n.nextSibling),l=n.data==="F!";break e}}qa(l)}l=!1}l&&(t=a[0])}}return a=et(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pm,lastRenderedState:t},a.queue=l,a=sh.bind(null,K,l),l.dispatch=a,l=Rc(!1),i=Vo.bind(null,K,!1,l.queue),l=et(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Iv.bind(null,K,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ff(e){var t=Be();return Jm(t,pe,e)}function Jm(e,t,a){if(t=ko(e,t,Pm)[0],e=nu(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bi(t)}catch(u){throw u===fn?tr:u}else l=t;t=Be();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(K.flags|=2048,en(9,{destroy:void 0},Wv.bind(null,n,a),null)),[l,i,e]}function Wv(e,t){e.action=t}function df(e){var t=Be(),a=pe;if(a!==null)return Jm(t,a,e);Be(),t=t.memoizedState,a=Be();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function en(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=K.updateQueue,t===null&&(t=ar(),K.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Fm(){return Be().memoizedState}function iu(e,t,a,l){var n=et();K.flags|=e,n.memoizedState=en(1|t,{destroy:void 0},a,l===void 0?null:l)}function nr(e,t,a,l){var n=Be();l=l===void 0?null:l;var i=n.memoizedState.inst;pe!==null&&l!==null&&Do(l,pe.memoizedState.deps)?n.memoizedState=en(t,i,a,l):(K.flags|=e,n.memoizedState=en(1|t,i,a,l))}function mf(e,t){iu(8390656,8,e,t)}function qo(e,t){nr(2048,8,e,t)}function $v(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=ar(),K.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Im(e){var t=Be().memoizedState;return $v({ref:t,nextImpl:e}),function(){if(ce&2)throw Error(C(440));return t.impl.apply(void 0,arguments)}}function Wm(e,t){return nr(4,2,e,t)}function $m(e,t){return nr(4,4,e,t)}function eh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function th(e,t,a){a=a!=null?a.concat([e]):null,nr(4,4,eh.bind(null,t,e),a)}function Go(){}function ah(e,t){var a=Be();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Do(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function lh(e,t){var a=Be();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Do(t,l[1]))return l[0];if(l=e(),fl){_a(!0);try{e()}finally{_a(!1)}}return a.memoizedState=[l,t],l}function Yo(e,t,a){return a===void 0||ra&1073741824&&!(W&261930)?e.memoizedState=t:(e.memoizedState=a,e=Qh(),K.lanes|=e,Ya|=e,a)}function nh(e,t,a,l){return Et(a,t)?a:$l.current!==null?(e=Yo(e,a,l),Et(e,t)||(we=!0),e):!(ra&42)||ra&1073741824&&!(W&261930)?(we=!0,e.memoizedState=a):(e=Qh(),K.lanes|=e,Ya|=e,t)}function ih(e,t,a,l,n){var i=oe.p;oe.p=i!==0&&8>i?i:8;var u=X.T,r={};X.T=r,Vo(e,!1,t,a);try{var c=n(),o=X.S;if(o!==null&&o(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=Pv(c,l);Xn(e,t,m,St(e))}else Xn(e,t,l,St(e))}catch(d){Xn(e,t,{then:function(){},status:"rejected",reason:d},St())}finally{oe.p=i,u!==null&&r.types!==null&&(u.types=r.types),X.T=u}}function eg(){}function zc(e,t,a,l){if(e.tag!==5)throw Error(C(476));var n=uh(e).queue;ih(e,n,t,ll,a===null?eg:function(){return rh(e),a(l)})}function uh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ll,baseState:ll,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:ll},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rh(e){var t=uh(e);t.next===null&&(t=e.alternate.memoizedState),Xn(e,t.next.queue,{},St())}function Xo(){return Pe(ui)}function ch(){return Be().memoizedState}function oh(){return Be().memoizedState}function tg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=Ba(a);var l=za(t,e,a);l!==null&&(ot(l,t,a),qn(l,t,a)),t={cache:Lo()},e.payload=t;return}t=t.return}}function ag(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ir(e)?fh(t,a):(a=Co(e,t,a,l),a!==null&&(ot(a,e,l),dh(a,t,l)))}function sh(e,t,a){var l=St();Xn(e,t,a,l)}function Xn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ir(e))fh(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,r=i(u,a);if(n.hasEagerState=!0,n.eagerState=r,Et(r,u))return er(e,t,n,0),ye===null&&$u(),!1}catch{}finally{}if(a=Co(e,t,n,l),a!==null)return ot(a,e,l),dh(a,t,l),!0}return!1}function Vo(e,t,a,l){if(l={lane:2,revertLane:$o(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ir(e)){if(t)throw Error(C(479))}else t=Co(e,a,l,2),t!==null&&ot(t,e,2)}function ir(e){var t=e.alternate;return e===K||t!==null&&t===K}function fh(e,t){Kl=xu=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function dh(e,t,a){if(a&4194048){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Id(e,a)}}var li={readContext:Pe,use:lr,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};li.useEffectEvent=Oe;var mh={readContext:Pe,use:lr,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:mf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,iu(4194308,4,eh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return iu(4194308,4,e,t)},useInsertionEffect:function(e,t){iu(4,2,e,t)},useMemo:function(e,t){var a=et();t=t===void 0?null:t;var l=e();if(fl){_a(!0);try{e()}finally{_a(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=et();if(a!==void 0){var n=a(t);if(fl){_a(!0);try{a(t)}finally{_a(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=ag.bind(null,K,e),[l.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=Rc(e);var t=e.queue,a=sh.bind(null,K,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Go,useDeferredValue:function(e,t){var a=et();return Yo(a,e,t)},useTransition:function(){var e=Rc(!1);return e=ih.bind(null,K,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=K,n=et();if(ee){if(a===void 0)throw Error(C(407));a=a()}else{if(a=t(),ye===null)throw Error(C(349));W&127||qm(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,mf(Ym.bind(null,l,i,e),[e]),l.flags|=2048,en(9,{destroy:void 0},Gm.bind(null,l,i,a,t),null),a},useId:function(){var e=et(),t=ye.identifierPrefix;if(ee){var a=qt,l=kt;a=(l&~(1<<32-bt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ou++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Jv++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xo,useFormState:sf,useActionState:sf,useOptimistic:function(e){var t=et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Vo.bind(null,K,!0,a),a.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return et().memoizedState=tg.bind(null,K)},useEffectEvent:function(e){var t=et(),a={impl:e};return t.memoizedState=a,function(){if(ce&2)throw Error(C(440));return a.impl.apply(void 0,arguments)}}},Qo={readContext:Pe,use:lr,useCallback:ah,useContext:Pe,useEffect:qo,useImperativeHandle:th,useInsertionEffect:Wm,useLayoutEffect:$m,useMemo:lh,useReducer:nu,useRef:Fm,useState:function(){return nu(ca)},useDebugValue:Go,useDeferredValue:function(e,t){var a=Be();return nh(a,pe.memoizedState,e,t)},useTransition:function(){var e=nu(ca)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:km,useId:ch,useHostTransitionStatus:Xo,useFormState:ff,useActionState:ff,useOptimistic:function(e,t){var a=Be();return Qm(a,pe,e,t)},useMemoCache:jo,useCacheRefresh:oh};Qo.useEffectEvent=Im;var hh={readContext:Pe,use:lr,useCallback:ah,useContext:Pe,useEffect:qo,useImperativeHandle:th,useInsertionEffect:Wm,useLayoutEffect:$m,useMemo:lh,useReducer:Nr,useRef:Fm,useState:function(){return Nr(ca)},useDebugValue:Go,useDeferredValue:function(e,t){var a=Be();return pe===null?Yo(a,e,t):nh(a,pe.memoizedState,e,t)},useTransition:function(){var e=Nr(ca)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:km,useId:ch,useHostTransitionStatus:Xo,useFormState:df,useActionState:df,useOptimistic:function(e,t){var a=Be();return pe!==null?Qm(a,pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jo,useCacheRefresh:oh};hh.useEffectEvent=Im;function Hr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:Te({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Dc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),n=Ba(l);n.payload=t,a!=null&&(n.callback=a),t=za(e,n,l),t!==null&&(ot(t,e,l),qn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),n=Ba(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=za(e,n,l),t!==null&&(ot(t,e,l),qn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=Ba(a);l.tag=2,t!=null&&(l.callback=t),t=za(e,l,a),t!==null&&(ot(t,e,a),qn(t,e,a))}};function hf(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Wn(a,l)||!Wn(n,i):!0}function pf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function dl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=Te({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ph(e){bu(e)}function yh(e){console.error(e)}function vh(e){bu(e)}function Lu(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function yf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Nc(e,t,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Lu(e,t)},a}function gh(e){return e=Ba(e),e.tag=3,e}function bh(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){yf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){yf(t,a,l),typeof n!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function lg(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&sn(t,a,n,!0),a=Tt.current,a!==null){switch(a.tag){case 31:case 13:return Rt===null?Du():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===_u?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Zr(e,l,n)),!1;case 22:return a.flags|=65536,l===_u?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Zr(e,l,n)),!1}throw Error(C(435,a.tag))}return Zr(e,l,n),Du(),!1}if(ee)return t=Tt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ec&&(e=Error(C(422),{cause:l}),ei(Lt(e,a)))):(l!==Ec&&(t=Error(C(423),{cause:l}),ei(Lt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Lt(l,a),n=Nc(e.stateNode,l,n),Dr(e,n),Le!==4&&(Le=2)),!1;var i=Error(C(520),{cause:l});if(i=Lt(i,a),Zn===null?Zn=[i]:Zn.push(i),Le!==4&&(Le=2),t===null)return!0;l=Lt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Nc(a.stateNode,l,e),Dr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Da===null||!Da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=gh(n),bh(n,e,a,l),Dr(a,n),!1}a=a.return}while(a!==null);return!1}var Zo=Error(C(461)),we=!1;function Qe(e,t,a,l){t.child=e===null?Dm(t,null,a,l):sl(t,e.child,a,l)}function vf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return ol(t),l=No(e,t,a,u,i,n),r=Ho(),e!==null&&!we?(Uo(e,t,n),oa(e,t,n)):(ee&&r&&xo(t),t.flags|=1,Qe(e,t,l,n),t.child)}function gf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Ao(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Sh(e,t,i,l,n)):(e=au(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ko(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wn,a(u,l)&&e.ref===t.ref)return oa(e,t,n)}return t.flags|=1,e=la(i,l),e.ref=t.ref,e.return=t,t.child=e}function Sh(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wn(i,l)&&e.ref===t.ref)if(we=!1,t.pendingProps=l=i,Ko(e,n))e.flags&131072&&(we=!0);else return t.lanes=e.lanes,oa(e,t,n)}return Hc(e,t,a,l,n)}function Eh(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return bf(e,t,i,a,l)}if(a&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lu(t,i!==null?i.cachePool:null),i!==null?rf(t,i):Lc(),Um(t);else return l=t.lanes=536870912,bf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(lu(t,i.cachePool),rf(t,i),Ea(),t.memoizedState=null):(e!==null&&lu(t,null),Lc(),Ea());return Qe(e,t,n,a),t.child}function zn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bf(e,t,a,l,n){var i=Mo();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&lu(t,null),Lc(),Um(t),e!==null&&sn(e,t,l,!0),t.childLanes=n,null}function uu(e,t){return t=Mu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sf(e,t,a){return sl(t,e.child,null,a),e=uu(t,t.pendingProps),e.flags|=2,ht(t),t.memoizedState=null,e}function ng(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(l.mode==="hidden")return e=uu(t,l),t.lanes=536870912,zn(null,e);if(Mc(t),(e=Se)?(e=mp(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:kt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=xm(e),a.return=t,t.child=a,Ke=t,Se=null)):e=null,e===null)throw qa(t);return t.lanes=536870912,null}return uu(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Mc(t),n)if(t.flags&256)t.flags&=-257,t=Sf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(C(558));else if(we||sn(e,t,a,!1),n=(a&e.childLanes)!==0,we||n){if(l=ye,l!==null&&(u=Wd(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,vl(e,u),ot(l,e,u),Zo;Du(),t=Sf(e,t,a)}else e=i.treeContext,Se=Bt(u.nextSibling),Ke=t,ee=!0,Ra=null,Mt=!1,e!==null&&Lm(t,e),t=uu(t,l),t.flags|=4096;return t}return e=la(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ru(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(C(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Hc(e,t,a,l,n){return ol(t),a=No(e,t,a,l,void 0,n),l=Ho(),e!==null&&!we?(Uo(e,t,n),oa(e,t,n)):(ee&&l&&xo(t),t.flags|=1,Qe(e,t,a,n),t.child)}function Ef(e,t,a,l,n,i){return ol(t),t.updateQueue=null,a=jm(t,l,a,n),wm(e),l=Ho(),e!==null&&!we?(Uo(e,t,i),oa(e,t,i)):(ee&&l&&xo(t),t.flags|=1,Qe(e,t,a,i),t.child)}function Tf(e,t,a,l,n){if(ol(t),t.stateNode===null){var i=jl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Pe(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Dc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Bo(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Pe(u):jl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Hr(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Dc.enqueueReplaceState(i,i.state,null),Yn(t,l,i,n),Gn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,c=dl(a,r);i.props=c;var o=i.context,m=a.contextType;u=jl,typeof m=="object"&&m!==null&&(u=Pe(m));var d=a.getDerivedStateFromProps;m=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||o!==u)&&pf(t,i,l,u),ga=!1;var f=t.memoizedState;i.state=f,Yn(t,l,i,n),Gn(),o=t.memoizedState,r||f!==o||ga?(typeof d=="function"&&(Hr(t,a,d,l),o=t.memoizedState),(c=ga||hf(t,a,c,l,f,o,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=o),i.props=l,i.state=o,i.context=u,l=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,xc(e,t),u=t.memoizedProps,m=dl(a,u),i.props=m,d=t.pendingProps,f=i.context,o=a.contextType,c=jl,typeof o=="object"&&o!==null&&(c=Pe(o)),r=a.getDerivedStateFromProps,(o=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==d||f!==c)&&pf(t,i,l,c),ga=!1,f=t.memoizedState,i.state=f,Yn(t,l,i,n),Gn();var h=t.memoizedState;u!==d||f!==h||ga||e!==null&&e.dependencies!==null&&Tu(e.dependencies)?(typeof r=="function"&&(Hr(t,a,r,l),h=t.memoizedState),(m=ga||hf(t,a,m,l,f,h,c)||e!==null&&e.dependencies!==null&&Tu(e.dependencies))?(o||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,h,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,h,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=h),i.props=l,i.state=h,i.context=c,l=m):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ru(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=sl(t,e.child,null,n),t.child=sl(t,null,a,n)):Qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=oa(e,t,n),e}function _f(e,t,a,l){return cl(),t.flags|=256,Qe(e,t,a,l),t.child}var Ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wr(e){return{baseLanes:e,cachePool:Rm()}}function jr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function Th(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(n?Sa(t):Ea(),(e=Se)?(e=mp(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:kt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=xm(e),a.return=t,t.child=a,Ke=t,Se=null)):e=null,e===null)throw qa(t);return Jc(e)?t.lanes=32:t.lanes=536870912,null}var r=l.children;return l=l.fallback,n?(Ea(),n=t.mode,r=Mu({mode:"hidden",children:r},n),l=nl(l,n,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,l=t.child,l.memoizedState=wr(a),l.childLanes=jr(e,u,a),t.memoizedState=Ur,zn(null,l)):(Sa(t),Uc(t,r))}var c=e.memoizedState;if(c!==null&&(r=c.dehydrated,r!==null)){if(i)t.flags&256?(Sa(t),t.flags&=-257,t=kr(e,t,a)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),r=l.fallback,n=t.mode,l=Mu({mode:"visible",children:l.children},n),r=nl(r,n,a,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,sl(t,e.child,null,a),l=t.child,l.memoizedState=wr(a),l.childLanes=jr(e,u,a),t.memoizedState=Ur,t=zn(null,l));else if(Sa(t),Jc(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var o=u.dgst;u=o,l=Error(C(419)),l.stack="",l.digest=u,ei({value:l,source:null,stack:null}),t=kr(e,t,a)}else if(we||sn(e,t,a,!1),u=(a&e.childLanes)!==0,we||u){if(u=ye,u!==null&&(l=Wd(u,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,vl(e,l),ot(u,e,l),Zo;Pc(r)||Du(),t=kr(e,t,a)}else Pc(r)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,Se=Bt(r.nextSibling),Ke=t,ee=!0,Ra=null,Mt=!1,e!==null&&Lm(t,e),t=Uc(t,l.children),t.flags|=4096);return t}return n?(Ea(),r=l.fallback,n=t.mode,c=e.child,o=c.sibling,l=la(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,o!==null?r=la(o,r):(r=nl(r,n,a,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,zn(null,l),l=t.child,r=e.child.memoizedState,r===null?r=wr(a):(n=r.cachePool,n!==null?(c=Ue._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Rm(),r={baseLanes:r.baseLanes|a,cachePool:n}),l.memoizedState=r,l.childLanes=jr(e,u,a),t.memoizedState=Ur,zn(e.child,l)):(Sa(t),a=e.child,e=a.sibling,a=la(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Uc(e,t){return t=Mu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mu(e,t){return e=pt(22,e,null,t),e.lanes=0,e}function kr(e,t,a){return sl(t,e.child,null,a),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_c(e.return,t,a)}function qr(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function _h(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Re.current,r=(u&2)!==0;if(r?(u=u&1|2,t.flags|=128):u&=1,ge(Re,u),Qe(e,t,l,a),l=ee?$n:0,!r&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cf(e,a,t);else if(e.tag===19)Cf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Au(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),qr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Au(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}qr(t,!0,a,null,i,l);break;case"together":qr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function oa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,!(a&t.childLanes))if(e!==null){if(sn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,a=la(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=la(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ko(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Tu(e)))}function ig(e,t,a){switch(t.tag){case 3:pu(t,t.stateNode.containerInfo),ba(t,Ue,e.memoizedState.cache),cl();break;case 27:case 5:sc(t);break;case 4:pu(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Mc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Sa(t),t.flags|=128,null):a&t.child.childLanes?Th(e,t,a):(Sa(t),e=oa(e,t,a),e!==null?e.sibling:null);Sa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(sn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return _h(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ge(Re,Re.current),l)break;return null;case 22:return t.lanes=0,Eh(e,t,a,t.pendingProps);case 24:ba(t,Ue,e.memoizedState.cache)}return oa(e,t,a)}function Ch(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)we=!0;else{if(!Ko(e,a)&&!(t.flags&128))return we=!1,ig(e,t,a);we=!!(e.flags&131072)}else we=!1,ee&&t.flags&1048576&&Om(t,$n,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Wa(t.elementType),t.type=e,typeof e=="function")Ao(e)?(l=dl(e,l),t.tag=1,t=Tf(null,t,e,l,a)):(t.tag=0,t=Hc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===so){t.tag=11,t=vf(null,t,e,l,a);break e}else if(n===fo){t.tag=14,t=gf(null,t,e,l,a);break e}}throw t=cc(e)||e,Error(C(306,t,""))}}return t;case 0:return Hc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=dl(l,t.pendingProps),Tf(e,t,l,n,a);case 3:e:{if(pu(t,t.stateNode.containerInfo),e===null)throw Error(C(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,xc(e,t),Yn(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ba(t,Ue,l),l!==i.cache&&Cc(t,[Ue],a,!0),Gn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=_f(e,t,l,a);break e}else if(l!==n){n=Lt(Error(C(424)),t),ei(n),t=_f(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=Bt(e.firstChild),Ke=t,ee=!0,Ra=null,Mt=!0,a=Dm(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cl(),l===n){t=oa(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return ru(e,t),e===null?(a=Vf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ee||(a=t.type,e=t.pendingProps,l=wu(Ma.current).createElement(a),l[Ze]=t,l[st]=e,Je(l,a,e),Ge(l),t.stateNode=l):t.memoizedState=Vf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sc(t),e===null&&ee&&(l=t.stateNode=hp(t.type,t.pendingProps,Ma.current),Ke=t,Mt=!0,n=Se,Va(t.type)?(Fc=n,Se=Bt(l.firstChild)):Se=n),Qe(e,t,t.pendingProps.children,a),ru(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((n=l=Se)&&(l=Hg(l,t.type,t.pendingProps,Mt),l!==null?(t.stateNode=l,Ke=t,Se=Bt(l.firstChild),Mt=!1,n=!0):n=!1),n||qa(t)),sc(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Zc(n,i)?l=null:u!==null&&Zc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=No(e,t,Fv,null,null,a),ui._currentValue=n),ru(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&ee&&((e=a=Se)&&(a=Ug(a,t.pendingProps,Mt),a!==null?(t.stateNode=a,Ke=t,Se=null,e=!0):e=!1),e||qa(t)),null;case 13:return Th(e,t,a);case 4:return pu(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=sl(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return vf(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ba(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,ol(t),n=Pe(n),l=l(n),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return gf(e,t,t.type,t.pendingProps,a);case 15:return Sh(e,t,t.type,t.pendingProps,a);case 19:return _h(e,t,a);case 31:return ng(e,t,a);case 22:return Eh(e,t,a,t.pendingProps);case 24:return ol(t),l=Pe(Ue),e===null?(n=Mo(),n===null&&(n=ye,i=Lo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Bo(t),ba(t,Ue,n)):(e.lanes&a&&(xc(e,t),Yn(t,null,null,a),Gn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ba(t,Ue,l)):(l=i.cache,ba(t,Ue,l),l!==n.cache&&Cc(t,[Ue],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(C(156,t.tag))}function Pt(e){e.flags|=4}function Gr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Ph())e.flags|=8192;else throw ul=_u,Ro}else e.flags&=-16777217}function Af(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!vp(t))if(Ph())e.flags|=8192;else throw ul=_u,Ro}function Qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jd():536870912,e.lanes|=t,tn|=t)}function _n(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ug(e,t,a){var l=t.pendingProps;switch(Oo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),na(Ue),Jl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Cl(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zr())),be(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Pt(t),i!==null?(be(t),Af(t,i)):(be(t),Gr(t,n,null,l,a))):i?i!==e.memoizedState?(Pt(t),be(t),Af(t,i)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Pt(t),be(t),Gr(t,n,e,l,a)),null;case 27:if(yu(t),a=Ma.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(!l){if(t.stateNode===null)throw Error(C(166));return be(t),null}e=Yt.current,Cl(t)?$s(t):(e=hp(n,l,a),t.stateNode=e,Pt(t))}return be(t),null;case 5:if(yu(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(!l){if(t.stateNode===null)throw Error(C(166));return be(t),null}if(i=Yt.current,Cl(t))$s(t);else{var u=wu(Ma.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Ze]=t,i[st]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Je(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Pt(t)}}return be(t),Gr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Pt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(C(166));if(e=Ma.current,Cl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||sp(e.nodeValue,a)),e||qa(t,!0)}else e=wu(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return be(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Cl(t),a!==null){if(e===null){if(!l)throw Error(C(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(557));e[Ze]=t}else cl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else a=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ht(t),t):(ht(t),null);if(t.flags&128)throw Error(C(558))}return be(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Cl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(C(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(C(317));n[Ze]=t}else cl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),n=!1}else n=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ht(t),t):(ht(t),null)}return ht(t),t.flags&128?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Qi(t,t.updateQueue),be(t),null);case 4:return Jl(),e===null&&es(t.stateNode.containerInfo),be(t),null;case 10:return na(t.type),be(t),null;case 19:if(Ye(Re),l=t.memoizedState,l===null)return be(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)_n(l,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Au(e),i!==null){for(t.flags|=128,_n(l,!1),e=i.updateQueue,t.updateQueue=e,Qi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Am(a,e),a=a.sibling;return ge(Re,Re.current&1|2),ee&&Wt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&vt()>Bu&&(t.flags|=128,n=!0,_n(l,!1),t.lanes=4194304)}else{if(!n)if(e=Au(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Qi(t,e),_n(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ee)return be(t),null}else 2*vt()-l.renderingStartTime>Bu&&a!==536870912&&(t.flags|=128,n=!0,_n(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=vt(),e.sibling=null,a=Re.current,ge(Re,n?a&1|2:a&1),ee&&Wt(t,l.treeForkCount),e):(be(t),null);case 22:case 23:return ht(t),zo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?a&536870912&&!(t.flags&128)&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),a=t.updateQueue,a!==null&&Qi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Ye(il),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),na(Ue),be(t),null;case 25:return null;case 30:return null}throw Error(C(156,t.tag))}function rg(e,t){switch(Oo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(Ue),Jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yu(t),null;case 31:if(t.memoizedState!==null){if(ht(t),t.alternate===null)throw Error(C(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(Re),null;case 4:return Jl(),null;case 10:return na(t.type),null;case 22:case 23:return ht(t),zo(),e!==null&&Ye(il),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(Ue),null;case 25:return null;default:return null}}function Ah(e,t){switch(Oo(t),t.tag){case 3:na(Ue),Jl();break;case 26:case 27:case 5:yu(t);break;case 4:Jl();break;case 31:t.memoizedState!==null&&ht(t);break;case 13:ht(t);break;case 19:Ye(Re);break;case 10:na(t.type);break;case 22:case 23:ht(t),zo(),e!==null&&Ye(il);break;case 24:na(Ue)}}function Si(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(r){me(t,t.return,r)}}function Ga(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,n=t;var c=a,o=r;try{o()}catch(m){me(n,c,m)}}}l=l.next}while(l!==i)}}catch(m){me(t,t.return,m)}}function xh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hm(t,a)}catch(l){me(e,e.return,l)}}}function Oh(e,t,a){a.props=dl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){me(e,t,l)}}function Vn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){me(e,t,n)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){me(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){me(e,t,n)}else a.current=null}function Lh(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){me(e,e.return,n)}}function Yr(e,t,a){try{var l=e.stateNode;Mg(l,e.type,a,t),l[st]=t}catch(n){me(e,e.return,n)}}function Mh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Xr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ta));else if(l!==4&&(l===27&&Va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(wc(e,t,a),e=e.sibling;e!==null;)wc(e,t,a),e=e.sibling}function Ru(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ru(e,t,a),e=e.sibling;e!==null;)Ru(e,t,a),e=e.sibling}function Rh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[Ze]=e,t[st]=a}catch(i){me(e,e.return,i)}}var $t=!1,He=!1,Vr=!1,xf=typeof WeakSet=="function"?WeakSet:Set,qe=null;function cg(e,t){if(e=e.containerInfo,Vc=Gu,e=vm(e),To(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,r=-1,c=-1,o=0,m=0,d=e,f=null;t:for(;;){for(var h;d!==a||n!==0&&d.nodeType!==3||(r=u+n),d!==i||l!==0&&d.nodeType!==3||(c=u+l),d.nodeType===3&&(u+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===a&&++o===n&&(r=u),f===i&&++m===l&&(c=u),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}a=r===-1||c===-1?null:{start:r,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:e,selectionRange:a},Gu=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var T=dl(a.type,n);e=l.getSnapshotBeforeUpdate(T,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(_){me(a,a.return,_)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Kc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(C(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Bh(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ft(e,a),l&4&&Si(5,a);break;case 1:if(Ft(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){me(a,a.return,u)}else{var n=dl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){me(a,a.return,u)}}l&64&&xh(a),l&512&&Vn(a,a.return);break;case 3:if(Ft(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hm(e,t)}catch(u){me(a,a.return,u)}}break;case 27:t===null&&l&4&&Rh(a);case 26:case 5:Ft(e,a),t===null&&l&4&&Lh(a),l&512&&Vn(a,a.return);break;case 12:Ft(e,a);break;case 31:Ft(e,a),l&4&&Nh(e,a);break;case 13:Ft(e,a),l&4&&Hh(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vg.bind(null,a),wg(e,a))));break;case 22:if(l=a.memoizedState!==null||$t,!l){t=t!==null&&t.memoizedState!==null||He,n=$t;var i=He;$t=l,(He=t)&&!i?It(e,a,(a.subtreeFlags&8772)!==0):Ft(e,a),$t=n,He=i}break;case 30:break;default:Ft(e,a)}}function zh(e){var t=e.alternate;t!==null&&(e.alternate=null,zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,ut=!1;function Jt(e,t,a){for(a=a.child;a!==null;)Dh(e,t,a),a=a.sibling}function Dh(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(mi,a)}catch{}switch(a.tag){case 26:He||Gt(a,t),Jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Gt(a,t);var l=_e,n=ut;Va(a.type)&&(_e=a.stateNode,ut=!1),Jt(e,t,a),Pn(a.stateNode),_e=l,ut=n;break;case 5:He||Gt(a,t);case 6:if(l=_e,n=ut,_e=null,Jt(e,t,a),_e=l,ut=n,_e!==null)if(ut)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(i){me(a,t,i)}else try{_e.removeChild(a.stateNode)}catch(i){me(a,t,i)}break;case 18:_e!==null&&(ut?(e=_e,kf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),un(e)):kf(_e,a.stateNode));break;case 4:l=_e,n=ut,_e=a.stateNode.containerInfo,ut=!0,Jt(e,t,a),_e=l,ut=n;break;case 0:case 11:case 14:case 15:Ga(2,a,t),He||Ga(4,a,t),Jt(e,t,a);break;case 1:He||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Oh(a,t,l)),Jt(e,t,a);break;case 21:Jt(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,Jt(e,t,a),He=l;break;default:Jt(e,t,a)}}function Nh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{un(e)}catch(a){me(t,t.return,a)}}}function Hh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{un(e)}catch(a){me(t,t.return,a)}}function og(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xf),t;default:throw Error(C(435,e.tag))}}function Zi(e,t){var a=og(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=gg.bind(null,e,l);l.then(n,n)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,r=u;e:for(;r!==null;){switch(r.tag){case 27:if(Va(r.type)){_e=r.stateNode,ut=!1;break e}break;case 5:_e=r.stateNode,ut=!1;break e;case 3:case 4:_e=r.stateNode.containerInfo,ut=!0;break e}r=r.return}if(_e===null)throw Error(C(160));Dh(i,u,n),_e=null,ut=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Uh(t,e),t=t.sibling}var Nt=null;function Uh(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),it(e),l&4&&(Ga(3,e,e.return),Si(3,e),Ga(5,e,e.return));break;case 1:nt(t,e),it(e),l&512&&(He||a===null||Gt(a,a.return)),l&64&&$t&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Nt;if(nt(t,e),it(e),l&512&&(He||a===null||Gt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[yi]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,l,a),i[Ze]=e,Ge(i),l=i;break e;case"link":var u=Zf("link","href",n).get(l+(a.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(r,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Zf("meta","content",n).get(l+(a.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(r,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;default:throw Error(C(468,l))}i[Ze]=e,Ge(i),l=i}e.stateNode=l}else Kf(n,e.type,e.stateNode);else e.stateNode=Qf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Kf(n,e.type,e.stateNode):Qf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yr(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),it(e),l&512&&(He||a===null||Gt(a,a.return)),a!==null&&l&4&&Yr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),it(e),l&512&&(He||a===null||Gt(a,a.return)),e.flags&32){n=e.stateNode;try{Il(n,"")}catch(T){me(e,e.return,T)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Yr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Vr=!0);break;case 6:if(nt(t,e),it(e),l&4){if(e.stateNode===null)throw Error(C(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(T){me(e,e.return,T)}}break;case 3:if(su=null,n=Nt,Nt=ju(t.containerInfo),nt(t,e),Nt=n,it(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{un(t.containerInfo)}catch(T){me(e,e.return,T)}Vr&&(Vr=!1,wh(e));break;case 4:l=Nt,Nt=ju(e.stateNode.containerInfo),nt(t,e),it(e),Nt=l;break;case 12:nt(t,e),it(e);break;case 31:nt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 13:nt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ur=vt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 22:n=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,o=$t,m=He;if($t=o||n,He=m||c,nt(t,e),He=m,$t=o,it(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||c||$t||He||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(i=c.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=c.stateNode;var d=c.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;r.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(T){me(c,c.return,T)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(T){me(c,c.return,T)}}}else if(t.tag===18){if(a===null){c=t;try{var h=c.stateNode;n?qf(h,!0):qf(c.stateNode,!1)}catch(T){me(c,c.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zi(e,a))));break;case 19:nt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 30:break;case 21:break;default:nt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Mh(l)){a=l;break}l=l.return}if(a==null)throw Error(C(160));switch(a.tag){case 27:var n=a.stateNode,i=Xr(e);Ru(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Il(u,""),a.flags&=-33);var r=Xr(e);Ru(e,r,u);break;case 3:case 4:var c=a.stateNode.containerInfo,o=Xr(e);wc(e,o,c);break;default:throw Error(C(161))}}catch(m){me(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ft(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bh(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ga(4,t,t.return),$a(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Oh(t,t.return,a),$a(t);break;case 27:Pn(t.stateNode);case 26:case 5:Gt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function It(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:It(n,i,a),Si(4,i);break;case 1:if(It(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(o){me(l,l.return,o)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Nm(c[n],r)}catch(o){me(l,l.return,o)}}a&&u&64&&xh(i),Vn(i,i.return);break;case 27:Rh(i);case 26:case 5:It(n,i,a),a&&l===null&&u&4&&Lh(i),Vn(i,i.return);break;case 12:It(n,i,a);break;case 31:It(n,i,a),a&&u&4&&Nh(n,i);break;case 13:It(n,i,a),a&&u&4&&Hh(n,i);break;case 22:i.memoizedState===null&&It(n,i,a),Vn(i,i.return);break;case 30:break;default:It(n,i,a)}t=t.sibling}}function Po(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&gi(a))}function Jo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gi(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jh(e,t,a,l),t=t.sibling}function jh(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&Si(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gi(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){me(t,t.return,c)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,a,l):Qn(e,t):i._visibility&2?Dt(e,t,a,l):(i._visibility|=2,Ll(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Po(u,t);break;case 24:Dt(e,t,a,l),n&2048&&Jo(t.alternate,t);break;default:Dt(e,t,a,l)}}function Ll(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,r=a,c=l,o=u.flags;switch(u.tag){case 0:case 11:case 15:Ll(i,u,r,c,n),Si(8,u);break;case 23:break;case 22:var m=u.stateNode;u.memoizedState!==null?m._visibility&2?Ll(i,u,r,c,n):Qn(i,u):(m._visibility|=2,Ll(i,u,r,c,n)),n&&o&2048&&Po(u.alternate,u);break;case 24:Ll(i,u,r,c,n),n&&o&2048&&Jo(u.alternate,u);break;default:Ll(i,u,r,c,n)}t=t.sibling}}function Qn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Qn(a,l),n&2048&&Po(l.alternate,l);break;case 24:Qn(a,l),n&2048&&Jo(l.alternate,l);break;default:Qn(a,l)}t=t.sibling}}var Dn=8192;function Al(e,t,a){if(e.subtreeFlags&Dn)for(e=e.child;e!==null;)kh(e,t,a),e=e.sibling}function kh(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&Dn&&e.memoizedState!==null&&Jg(a,Nt,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var l=Nt;Nt=ju(e.stateNode.containerInfo),Al(e,t,a),Nt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Dn,Dn=16777216,Al(e,t,a),Dn=l):Al(e,t,a));break;default:Al(e,t,a)}}function qh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cn(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Yh(l,e)}qh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gh(e),e=e.sibling}function Gh(e){switch(e.tag){case 0:case 11:case 15:Cn(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:Cn(e);break;case 12:Cn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,cu(e)):Cn(e);break;default:Cn(e)}}function cu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Yh(l,e)}qh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ga(8,t,t.return),cu(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,cu(t));break;default:cu(t)}e=e.sibling}}function Yh(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:Ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:gi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var n=l.sibling,i=l.return;if(zh(l),l===a){qe=null;break e}if(n!==null){n.return=i,qe=n;break e}qe=i}}}var sg={getCacheForType:function(e){var t=Pe(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Pe(Ue).controller.signal}},fg=typeof WeakMap=="function"?WeakMap:Map,ce=0,ye=null,I=null,W=0,fe=0,dt=null,Aa=!1,dn=!1,Fo=!1,sa=0,Le=0,Ya=0,rl=0,Io=0,yt=0,tn=0,Zn=null,ct=null,jc=!1,ur=0,Xh=0,Bu=1/0,zu=null,Da=null,je=0,Na=null,an=null,ia=0,kc=0,qc=null,Vh=null,Kn=0,Gc=null;function St(){return ce&2&&W!==0?W&-W:X.T!==null?$o():$d()}function Qh(){if(yt===0)if(!(W&536870912)||ee){var e=ji;ji<<=1,!(ji&3932160)&&(ji=262144),yt=e}else yt=536870912;return e=Tt.current,e!==null&&(e.flags|=32),yt}function ot(e,t,a){(e===ye&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(ln(e,0),xa(e,W,yt,!1)),pi(e,a),(!(ce&2)||e!==ye)&&(e===ye&&(!(ce&2)&&(rl|=a),Le===4&&xa(e,W,yt,!1)),Vt(e))}function Zh(e,t,a){if(ce&6)throw Error(C(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||hi(e,t),n=l?hg(e,t):Qr(e,t,!0),i=l;do{if(n===0){dn&&!l&&xa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!dg(a)){n=Qr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var r=e;n=Zn;var c=r.current.memoizedState.isDehydrated;if(c&&(ln(r,u).flags|=256),u=Qr(r,u,!1),u!==2){if(Fo&&!c){r.errorRecoveryDisabledLanes|=i,rl|=i,n=4;break e}i=ct,ct=n,i!==null&&(ct===null?ct=i:ct.push.apply(ct,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){ln(e,0),xa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(C(345));case 4:if((t&4194048)!==t)break;case 6:xa(l,t,yt,!Aa);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(C(329))}if((t&62914560)===t&&(n=ur+300-vt(),10<n)){if(xa(l,t,yt,!Aa),Ju(l,0,!0)!==0)break e;ia=t,l.timeoutHandle=dp(Of.bind(null,l,a,ct,zu,jc,t,yt,rl,tn,Aa,i,"Throttled",-0,0),n);break e}Of(l,a,ct,zu,jc,t,yt,rl,tn,Aa,i,null,-0,0)}}break}while(!0);Vt(e)}function Of(e,t,a,l,n,i,u,r,c,o,m,d,f,h){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},kh(t,i,d);var T=(i&62914560)===i?ur-vt():(i&4194048)===i?Xh-vt():0;if(T=Fg(d,T),T!==null){ia=i,e.cancelPendingCommit=T(Mf.bind(null,e,t,i,a,l,n,u,r,c,m,d,null,f,h)),xa(e,i,u,!o);return}}Mf(e,t,i,a,l,n,u,r,c)}function dg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Et(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,a,l){t&=~Io,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-bt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Fd(e,a,t)}function rr(){return ce&6?!0:(Ei(0),!1)}function Wo(){if(I!==null){if(fe===0)var e=I.return;else e=I,aa=gl=null,wo(e),Zl=null,ti=0,e=I;for(;e!==null;)Ah(e.alternate,e),e=e.return;I=null}}function ln(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,Wo(),ye=e,I=a=la(e.current,null),W=t,fe=0,dt=null,Aa=!1,dn=hi(e,t),Fo=!1,tn=yt=Io=rl=Ya=Le=0,ct=Zn=null,jc=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-bt(l),i=1<<n;t|=e[n],l&=~i}return sa=t,$u(),a}function Kh(e,t){K=null,X.H=li,t===fn||t===tr?(t=nf(),fe=3):t===Ro?(t=nf(),fe=4):fe=t===Zo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,I===null&&(Le=1,Lu(e,Lt(t,e.current)))}function Ph(){var e=Tt.current;return e===null?!0:(W&4194048)===W?Rt===null:(W&62914560)===W||W&536870912?e===Rt:!1}function Jh(){var e=X.H;return X.H=li,e===null?li:e}function Fh(){var e=X.A;return X.A=sg,e}function Du(){Le=4,Aa||(W&4194048)!==W&&Tt.current!==null||(dn=!0),!(Ya&134217727)&&!(rl&134217727)||ye===null||xa(ye,W,yt,!1)}function Qr(e,t,a){var l=ce;ce|=2;var n=Jh(),i=Fh();(ye!==e||W!==t)&&(zu=null,ln(e,t)),t=!1;var u=Le;e:do try{if(fe!==0&&I!==null){var r=I,c=dt;switch(fe){case 8:Wo(),u=6;break e;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var o=fe;if(fe=0,dt=null,Gl(e,r,c,o),a&&dn){u=0;break e}break;default:o=fe,fe=0,dt=null,Gl(e,r,c,o)}}mg(),u=Le;break}catch(m){Kh(e,m)}while(!0);return t&&e.shellSuspendCounter++,aa=gl=null,ce=l,X.H=n,X.A=i,I===null&&(ye=null,W=0,$u()),u}function mg(){for(;I!==null;)Ih(I)}function hg(e,t){var a=ce;ce|=2;var l=Jh(),n=Fh();ye!==e||W!==t?(zu=null,Bu=vt()+500,ln(e,t)):dn=hi(e,t);e:do try{if(fe!==0&&I!==null){t=I;var i=dt;t:switch(fe){case 1:fe=0,dt=null,Gl(e,t,i,1);break;case 2:case 9:if(lf(i)){fe=0,dt=null,Lf(t);break}t=function(){fe!==2&&fe!==9||ye!==e||(fe=7),Vt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:lf(i)?(fe=0,dt=null,Lf(t)):(fe=0,dt=null,Gl(e,t,i,7));break;case 5:var u=null;switch(I.tag){case 26:u=I.memoizedState;case 5:case 27:var r=I;if(u?vp(u):r.stateNode.complete){fe=0,dt=null;var c=r.sibling;if(c!==null)I=c;else{var o=r.return;o!==null?(I=o,cr(o)):I=null}break t}}fe=0,dt=null,Gl(e,t,i,5);break;case 6:fe=0,dt=null,Gl(e,t,i,6);break;case 8:Wo(),Le=6;break e;default:throw Error(C(462))}}pg();break}catch(m){Kh(e,m)}while(!0);return aa=gl=null,X.H=l,X.A=n,ce=a,I!==null?0:(ye=null,W=0,$u(),Le)}function pg(){for(;I!==null&&!jy();)Ih(I)}function Ih(e){var t=Ch(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?cr(e):I=t}function Lf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ef(a,t,t.pendingProps,t.type,void 0,W);break;case 11:t=Ef(a,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:wo(t);default:Ah(a,t),t=I=Am(t,sa),t=Ch(a,t,sa)}e.memoizedProps=e.pendingProps,t===null?cr(e):I=t}function Gl(e,t,a,l){aa=gl=null,wo(t),Zl=null,ti=0;var n=t.return;try{if(lg(e,n,t,a,W)){Le=1,Lu(e,Lt(a,e.current)),I=null;return}}catch(i){if(n!==null)throw I=n,i;Le=1,Lu(e,Lt(a,e.current)),I=null;return}t.flags&32768?(ee||l===1?e=!0:dn||W&536870912?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wh(t,e)):cr(t)}function cr(e){var t=e;do{if(t.flags&32768){Wh(t,Aa);return}e=t.return;var a=ug(t.alternate,t,sa);if(a!==null){I=a;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);Le===0&&(Le=5)}function Wh(e,t){do{var a=rg(e.alternate,e);if(a!==null){a.flags&=32767,I=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=a}while(e!==null);Le=6,I=null}function Mf(e,t,a,l,n,i,u,r,c){e.cancelPendingCommit=null;do or();while(je!==0);if(ce&6)throw Error(C(327));if(t!==null){if(t===e.current)throw Error(C(177));if(i=t.lanes|t.childLanes,i|=_o,Py(e,a,i,u,r,c),e===ye&&(I=ye=null,W=0),an=t,Na=e,ia=a,kc=i,qc=n,Vh=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,bg(vu,function(){return lp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=X.T,X.T=null,n=oe.p,oe.p=2,u=ce,ce|=4;try{cg(e,t,a)}finally{ce=u,oe.p=n,X.T=l}}je=1,$h(),ep(),tp()}}function $h(){if(je===1){je=0;var e=Na,t=an,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=X.T,X.T=null;var l=oe.p;oe.p=2;var n=ce;ce|=4;try{Uh(t,e);var i=Qc,u=vm(e.containerInfo),r=i.focusedElem,c=i.selectionRange;if(u!==r&&r&&r.ownerDocument&&ym(r.ownerDocument.documentElement,r)){if(c!==null&&To(r)){var o=c.start,m=c.end;if(m===void 0&&(m=o),"selectionStart"in r)r.selectionStart=o,r.selectionEnd=Math.min(m,r.value.length);else{var d=r.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),T=r.textContent.length,_=Math.min(c.start,T),x=c.end===void 0?_:Math.min(c.end,T);!h.extend&&_>x&&(u=x,x=_,_=u);var p=Fs(r,_),s=Fs(r,x);if(p&&s&&(h.rangeCount!==1||h.anchorNode!==p.node||h.anchorOffset!==p.offset||h.focusNode!==s.node||h.focusOffset!==s.offset)){var g=d.createRange();g.setStart(p.node,p.offset),h.removeAllRanges(),_>x?(h.addRange(g),h.extend(s.node,s.offset)):(g.setEnd(s.node,s.offset),h.addRange(g))}}}}for(d=[],h=r;h=h.parentNode;)h.nodeType===1&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<d.length;r++){var S=d[r];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Gu=!!Vc,Qc=Vc=null}finally{ce=n,oe.p=l,X.T=a}}e.current=t,je=2}}function ep(){if(je===2){je=0;var e=Na,t=an,a=(t.flags&8772)!==0;if(t.subtreeFlags&8772||a){a=X.T,X.T=null;var l=oe.p;oe.p=2;var n=ce;ce|=4;try{Bh(e,t.alternate,t)}finally{ce=n,oe.p=l,X.T=a}}je=3}}function tp(){if(je===4||je===3){je=0,ky();var e=Na,t=an,a=ia,l=Vh;t.subtreeFlags&10256||t.flags&10256?je=5:(je=0,an=Na=null,ap(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Da=null),po(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(mi,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=X.T,n=oe.p,oe.p=2,X.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var r=l[u];i(r.value,{componentStack:r.stack})}}finally{X.T=t,oe.p=n}}ia&3&&or(),Vt(e),n=e.pendingLanes,a&261930&&n&42?e===Gc?Kn++:(Kn=0,Gc=e):Kn=0,Ei(0)}}function ap(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gi(t)))}function or(){return $h(),ep(),tp(),lp()}function lp(){if(je!==5)return!1;var e=Na,t=kc;kc=0;var a=po(ia),l=X.T,n=oe.p;try{oe.p=32>a?32:a,X.T=null,a=qc,qc=null;var i=Na,u=ia;if(je=0,an=Na=null,ia=0,ce&6)throw Error(C(331));var r=ce;if(ce|=4,Gh(i.current),jh(i,i.current,u,a),ce=r,Ei(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(mi,i)}catch{}return!0}finally{oe.p=n,X.T=l,ap(e,t)}}function Rf(e,t,a){t=Lt(a,t),t=Nc(e.stateNode,t,2),e=za(e,t,2),e!==null&&(pi(e,2),Vt(e))}function me(e,t,a){if(e.tag===3)Rf(e,e,a);else for(;t!==null;){if(t.tag===3){Rf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Da===null||!Da.has(l))){e=Lt(a,e),a=gh(2),l=za(t,a,2),l!==null&&(bh(a,l,t,e),pi(l,2),Vt(l));break}}t=t.return}}function Zr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new fg;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Fo=!0,n.add(a),e=yg.bind(null,e,t,a),t.then(e,e))}function yg(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(W&a)===a&&(Le===4||Le===3&&(W&62914560)===W&&300>vt()-ur?!(ce&2)&&ln(e,0):Io|=a,tn===W&&(tn=0)),Vt(e)}function np(e,t){t===0&&(t=Jd()),e=vl(e,t),e!==null&&(pi(e,t),Vt(e))}function vg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),np(e,a)}function gg(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(C(314))}l!==null&&l.delete(t),np(e,a)}function bg(e,t){return mo(e,t)}var Nu=null,Ml=null,Yc=!1,Hu=!1,Kr=!1,Oa=0;function Vt(e){e!==Ml&&e.next===null&&(Ml===null?Nu=Ml=e:Ml=Ml.next=e),Hu=!0,Yc||(Yc=!0,Eg())}function Ei(e,t){if(!Kr&&Hu){Kr=!0;do for(var a=!1,l=Nu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-bt(42|e)+1)-1,i&=n&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Bf(l,i))}else i=W,i=Ju(l,l===ye?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||hi(l,i)||(a=!0,Bf(l,i));l=l.next}while(a);Kr=!1}}function Sg(){ip()}function ip(){Hu=Yc=!1;var e=0;Oa!==0&&Bg()&&(e=Oa);for(var t=vt(),a=null,l=Nu;l!==null;){var n=l.next,i=up(l,t);i===0?(l.next=null,a===null?Nu=n:a.next=n,n===null&&(Ml=a)):(a=l,(e!==0||i&3)&&(Hu=!0)),l=n}je!==0&&je!==5||Ei(e),Oa!==0&&(Oa=0)}function up(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-bt(i),r=1<<u,c=n[u];c===-1?(!(r&a)||r&l)&&(n[u]=Ky(r,t)):c<=t&&(e.expiredLanes|=r),i&=~r}if(t=ye,a=W,a=Ju(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Er(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||hi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Er(l),po(a)){case 2:case 8:a=Kd;break;case 32:a=vu;break;case 268435456:a=Pd;break;default:a=vu}return l=rp.bind(null,e),a=mo(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Er(l),e.callbackPriority=2,e.callbackNode=null,2}function rp(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(or()&&e.callbackNode!==a)return null;var l=W;return l=Ju(e,e===ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zh(e,l,t),up(e,vt()),e.callbackNode!=null&&e.callbackNode===a?rp.bind(null,e):null)}function Bf(e,t){if(or())return null;Zh(e,t,!0)}function Eg(){Dg(function(){ce&6?mo(Zd,Sg):ip()})}function $o(){if(Oa===0){var e=Wl;e===0&&(e=wi,wi<<=1,!(wi&261888)&&(wi=256)),Oa=e}return Oa}function zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$i(""+e)}function Df(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Tg(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=zf((n[st]||null).action),u=l.submitter;u&&(t=(t=u[st]||null)?zf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var r=new Fu("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Oa!==0){var c=u?Df(n,u):new FormData(n);zc(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(r.preventDefault(),c=u?Df(n,u):new FormData(n),zc(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Pr=0;Pr<Sc.length;Pr++){var Jr=Sc[Pr],_g=Jr.toLowerCase(),Cg=Jr[0].toUpperCase()+Jr.slice(1);Ut(_g,"on"+Cg)}Ut(bm,"onAnimationEnd");Ut(Sm,"onAnimationIteration");Ut(Em,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(qv,"onTransitionRun");Ut(Gv,"onTransitionStart");Ut(Yv,"onTransitionCancel");Ut(Tm,"onTransitionEnd");Fl("onMouseEnter",["mouseout","mouseover"]);Fl("onMouseLeave",["mouseout","mouseover"]);Fl("onPointerEnter",["pointerout","pointerover"]);Fl("onPointerLeave",["pointerout","pointerover"]);hl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hl("onBeforeInput",["compositionend","keypress","textInput","paste"]);hl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ag=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function cp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var r=l[u],c=r.instance,o=r.currentTarget;if(r=r.listener,c!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=o;try{i(n)}catch(m){bu(m)}n.currentTarget=null,i=c}else for(u=0;u<l.length;u++){if(r=l[u],c=r.instance,o=r.currentTarget,r=r.listener,c!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=o;try{i(n)}catch(m){bu(m)}n.currentTarget=null,i=c}}}}function F(e,t){var a=t[dc];a===void 0&&(a=t[dc]=new Set);var l=e+"__bubble";a.has(l)||(op(t,e,2,!1),a.add(l))}function Fr(e,t,a){var l=0;t&&(l|=4),op(a,e,l,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function es(e){if(!e[Ki]){e[Ki]=!0,em.forEach(function(a){a!=="selectionchange"&&(Ag.has(a)||Fr(a,!1,e),Fr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,Fr("selectionchange",!1,t))}}function op(e,t,a,l){switch(Tp(t)){case 2:var n=$g;break;case 8:n=e0;break;default:n=ns}a=n.bind(null,t,a,e),n=void 0,!vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ir(e,t,a,l,n){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===n)break;if(u===4)for(u=l.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;r!==null;){if(u=zl(r),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){l=i=u;continue e}r=r.parentNode}}l=l.return}cm(function(){var o=i,m=go(a),d=[];e:{var f=_m.get(e);if(f!==void 0){var h=Fu,T=e;switch(e){case"keypress":if(tu(a)===0)break e;case"keydown":case"keyup":h=gv;break;case"focusin":T="focus",h=xr;break;case"focusout":T="blur",h=xr;break;case"beforeblur":case"afterblur":h=xr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ev;break;case bm:case Sm:case Em:h=ov;break;case Tm:h=_v;break;case"scroll":case"scrollend":h=nv;break;case"wheel":h=Av;break;case"copy":case"cut":case"paste":h=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ys;break;case"toggle":case"beforetoggle":h=Ov}var _=(t&4)!==0,x=!_&&(e==="scroll"||e==="scrollend"),p=_?f!==null?f+"Capture":null:f;_=[];for(var s=o,g;s!==null;){var S=s;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||p===null||(S=Fn(s,p),S!=null&&_.push(ii(s,S,g))),x)break;s=s.return}0<_.length&&(f=new h(f,T,null,a,m),d.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&a!==yc&&(T=a.relatedTarget||a.fromElement)&&(zl(T)||T[cn]))break e;if((h||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,h?(T=a.relatedTarget||a.toElement,h=o,T=T?zl(T):null,T!==null&&(x=di(T),_=T.tag,T!==x||_!==5&&_!==27&&_!==6)&&(T=null)):(h=null,T=o),h!==T)){if(_=qs,S="onMouseLeave",p="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ys,S="onPointerLeave",p="onPointerEnter",s="pointer"),x=h==null?f:Bn(h),g=T==null?f:Bn(T),f=new _(S,s+"leave",h,a,m),f.target=x,f.relatedTarget=g,S=null,zl(m)===o&&(_=new _(p,s+"enter",T,a,m),_.target=g,_.relatedTarget=x,S=_),x=S,h&&T)t:{for(_=xg,p=h,s=T,g=0,S=p;S;S=_(S))g++;S=0;for(var M=s;M;M=_(M))S++;for(;0<g-S;)p=_(p),g--;for(;0<S-g;)s=_(s),S--;for(;g--;){if(p===s||s!==null&&p===s.alternate){_=p;break t}p=_(p),s=_(s)}_=null}else _=null;h!==null&&Nf(d,f,h,_,!1),T!==null&&x!==null&&Nf(d,x,T,_,!0)}}e:{if(f=o?Bn(o):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var G=Zs;else if(Qs(f))if(hm)G=wv;else{G=Hv;var v=Nv}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?o&&vo(o.elementType)&&(G=Zs):G=Uv;if(G&&(G=G(e,o))){mm(d,G,a,m);break e}v&&v(e,f,o),e==="focusout"&&o&&f.type==="number"&&o.memoizedProps.value!=null&&pc(f,"number",f.value)}switch(v=o?Bn(o):window,e){case"focusin":(Qs(v)||v.contentEditable==="true")&&(Hl=v,gc=o,jn=null);break;case"focusout":jn=gc=Hl=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Is(d,a,m);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":Is(d,a,m)}var L;if(Eo)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Nl?fm(e,a)&&(N="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(N="onCompositionStart");N&&(sm&&a.locale!=="ko"&&(Nl||N!=="onCompositionStart"?N==="onCompositionEnd"&&Nl&&(L=om()):(Ca=m,bo="value"in Ca?Ca.value:Ca.textContent,Nl=!0)),v=Uu(o,N),0<v.length&&(N=new Gs(N,e,null,a,m),d.push({event:N,listeners:v}),L?N.data=L:(L=dm(a),L!==null&&(N.data=L)))),(L=Mv?Rv(e,a):Bv(e,a))&&(N=Uu(o,"onBeforeInput"),0<N.length&&(v=new Gs("onBeforeInput","beforeinput",null,a,m),d.push({event:v,listeners:N}),v.data=L)),Tg(d,e,o,a,m)}cp(d,t)})}function ii(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Uu(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fn(e,a),n!=null&&l.unshift(ii(e,n,i)),n=Fn(e,t),n!=null&&l.push(ii(e,n,i))),e.tag===3)return l;e=e.return}return[]}function xg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nf(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var r=a,c=r.alternate,o=r.stateNode;if(r=r.tag,c!==null&&c===l)break;r!==5&&r!==26&&r!==27||o===null||(c=o,n?(o=Fn(a,i),o!=null&&u.unshift(ii(a,o,c))):n||(o=Fn(a,i),o!=null&&u.push(ii(a,o,c)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Og=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function Hf(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(Lg,"")}function sp(e,t){return t=Hf(t),Hf(e)===t}function he(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Il(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Il(e,""+l);break;case"className":qi(e,"class",l);break;case"tabIndex":qi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qi(e,a,l);break;case"style":rm(e,l,i);break;case"data":if(t!=="object"){qi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$i(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&he(e,t,"name",n.name,n,null),he(e,t,"formEncType",n.formEncType,n,null),he(e,t,"formMethod",n.formMethod,n,null),he(e,t,"formTarget",n.formTarget,n,null)):(he(e,t,"encType",n.encType,n,null),he(e,t,"method",n.method,n,null),he(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$i(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ta);break;case"onScroll":l!=null&&F("scroll",e);break;case"onScrollEnd":l!=null&&F("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(C(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(C(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=$i(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":F("beforetoggle",e),F("toggle",e),Wi(e,"popover",l);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Wi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=av.get(a)||a,Wi(e,a,l))}}function Xc(e,t,a,l,n,i){switch(a){case"style":rm(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(C(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(C(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Il(e,l):(typeof l=="number"||typeof l=="bigint")&&Il(e,""+l);break;case"onScroll":l!=null&&F("scroll",e);break;case"onScrollEnd":l!=null&&F("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tm.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[st]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Wi(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",e),F("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(C(137,t));default:he(e,t,i,u,a,null)}}n&&he(e,t,"srcSet",a.srcSet,a,null),l&&he(e,t,"src",a.src,a,null);return;case"input":F("invalid",e);var r=i=u=n=null,c=null,o=null;for(l in a)if(a.hasOwnProperty(l)){var m=a[l];if(m!=null)switch(l){case"name":n=m;break;case"type":u=m;break;case"checked":c=m;break;case"defaultChecked":o=m;break;case"value":i=m;break;case"defaultValue":r=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(C(137,t));break;default:he(e,t,l,m,a,null)}}nm(e,i,r,c,o,u,n,!1);return;case"select":F("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:he(e,t,n,r,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Xl(e,!!l,t,!1):a!=null&&Xl(e,!!l,a,!0);return;case"textarea":F("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(r=a[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(C(91));break;default:he(e,t,u,r,a,null)}um(e,l,n,i);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:he(e,t,c,l,a,null)}return;case"dialog":F("beforetoggle",e),F("toggle",e),F("cancel",e),F("close",e);break;case"iframe":case"object":F("load",e);break;case"video":case"audio":for(l=0;l<ni.length;l++)F(ni[l],e);break;case"image":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"embed":case"source":case"link":F("error",e),F("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(C(137,t));default:he(e,t,o,l,a,null)}return;default:if(vo(t)){for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!==void 0&&Xc(e,t,m,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&he(e,t,r,l,a,null))}function Mg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,r=null,c=null,o=null,m=null;for(h in a){var d=a[h];if(a.hasOwnProperty(h)&&d!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":c=d;default:l.hasOwnProperty(h)||he(e,t,h,null,l,d)}}for(var f in l){var h=l[f];if(d=a[f],l.hasOwnProperty(f)&&(h!=null||d!=null))switch(f){case"type":i=h;break;case"name":n=h;break;case"checked":o=h;break;case"defaultChecked":m=h;break;case"value":u=h;break;case"defaultValue":r=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(C(137,t));break;default:h!==d&&he(e,t,f,h,l,d)}}hc(e,u,r,c,o,m,i,n);return;case"select":h=u=r=f=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":h=c;default:l.hasOwnProperty(i)||he(e,t,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":f=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==c&&he(e,t,n,i,l,c)}t=r,a=u,l=h,f!=null?Xl(e,!!a,f,!1):!!l!=!!a&&(t!=null?Xl(e,!!a,t,!0):Xl(e,!!a,a?[]:"",!1));return;case"textarea":h=f=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:he(e,t,r,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":f=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(C(91));break;default:n!==i&&he(e,t,u,n,l,i)}im(e,f,h);return;case"option":for(var T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"selected":e.selected=!1;break;default:he(e,t,T,null,l,f)}for(c in l)if(f=l[c],h=a[c],l.hasOwnProperty(c)&&f!==h&&(f!=null||h!=null))switch(c){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:he(e,t,c,f,l,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in a)f=a[_],a.hasOwnProperty(_)&&f!=null&&!l.hasOwnProperty(_)&&he(e,t,_,null,l,f);for(o in l)if(f=l[o],h=a[o],l.hasOwnProperty(o)&&f!==h&&(f!=null||h!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(C(137,t));break;default:he(e,t,o,f,l,h)}return;default:if(vo(t)){for(var x in a)f=a[x],a.hasOwnProperty(x)&&f!==void 0&&!l.hasOwnProperty(x)&&Xc(e,t,x,void 0,l,f);for(m in l)f=l[m],h=a[m],!l.hasOwnProperty(m)||f===h||f===void 0&&h===void 0||Xc(e,t,m,f,l,h);return}}for(var p in a)f=a[p],a.hasOwnProperty(p)&&f!=null&&!l.hasOwnProperty(p)&&he(e,t,p,null,l,f);for(d in l)f=l[d],h=a[d],!l.hasOwnProperty(d)||f===h||f==null&&h==null||he(e,t,d,f,l,h)}function Uf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,r=n.duration;if(i&&r&&Uf(u)){for(u=0,r=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],o=c.startTime;if(o>r)break;var m=c.transferSize,d=c.initiatorType;m&&Uf(d)&&(c=c.responseEnd,u+=m*(c<r?1:(r-o)/(c-o)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vc=null,Qc=null;function wu(e){return e.nodeType===9?e:e.ownerDocument}function wf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wr=null;function Bg(){var e=window.event;return e&&e.type==="popstate"?e===Wr?!1:(Wr=e,!0):(Wr=null,!1)}var dp=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Ng)}:dp;function Ng(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function kf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),un(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Pn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,r=i.nodeName;i[yi]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Pn(e.ownerDocument.body);a=n}while(a);un(t)}function qf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kc(a),yo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[yi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function Ug(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bt(e.nextSibling),e===null))return null;return e}function mp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Bt(e.nextSibling),e===null))return null;return e}function Pc(e){return e.data==="$?"||e.data==="$~"}function Jc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fc=null;function Gf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Bt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function hp(e,t,a){switch(t=wu(a),e){case"html":if(e=t.documentElement,!e)throw Error(C(452));return e;case"head":if(e=t.head,!e)throw Error(C(453));return e;case"body":if(e=t.body,!e)throw Error(C(454));return e;default:throw Error(C(451))}}function Pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yo(e)}var zt=new Map,Xf=new Set;function ju(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=oe.d;oe.d={f:jg,r:kg,D:qg,C:Gg,L:Yg,m:Xg,X:Qg,S:Vg,M:Zg};function jg(){var e=fa.f(),t=rr();return e||t}function kg(e){var t=on(e);t!==null&&t.tag===5&&t.type==="form"?rh(t):fa.r(e)}var mn=typeof document>"u"?null:document;function pp(e,t,a){var l=mn;if(l&&typeof t=="string"&&t){var n=Ot(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Xf.has(n)||(Xf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function qg(e){fa.D(e),pp("dns-prefetch",e,null)}function Gg(e,t){fa.C(e,t),pp("preconnect",e,t)}function Yg(e,t,a){fa.L(e,t,a);var l=mn;if(l&&e&&t){var n='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ot(a.imageSizes)+'"]')):n+='[href="'+Ot(e)+'"]';var i=n;switch(t){case"style":i=nn(e);break;case"script":i=hn(e)}zt.has(i)||(e=Te({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),zt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Ti(i))||t==="script"&&l.querySelector(_i(i))||(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function Xg(e,t){fa.m(e,t);var a=mn;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=hn(e)}if(!zt.has(i)&&(e=Te({rel:"modulepreload",href:e},t),zt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_i(i)))return}l=a.createElement("link"),Je(l,"link",e),Ge(l),a.head.appendChild(l)}}}function Vg(e,t,a){fa.S(e,t,a);var l=mn;if(l&&e){var n=Yl(l).hoistableStyles,i=nn(e);t=t||"default";var u=n.get(i);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(Ti(i)))r.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},a),(a=zt.get(i))&&ts(e,a);var c=u=l.createElement("link");Ge(c),Je(c,"link",e),c._p=new Promise(function(o,m){c.onload=o,c.onerror=m}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,ou(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:r},n.set(i,u)}}}function Qg(e,t){fa.X(e,t);var a=mn;if(a&&e){var l=Yl(a).hoistableScripts,n=hn(e),i=l.get(n);i||(i=a.querySelector(_i(n)),i||(e=Te({src:e,async:!0},t),(t=zt.get(n))&&as(e,t),i=a.createElement("script"),Ge(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Zg(e,t){fa.M(e,t);var a=mn;if(a&&e){var l=Yl(a).hoistableScripts,n=hn(e),i=l.get(n);i||(i=a.querySelector(_i(n)),i||(e=Te({src:e,async:!0,type:"module"},t),(t=zt.get(n))&&as(e,t),i=a.createElement("script"),Ge(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Vf(e,t,a,l){var n=(n=Ma.current)?ju(n):null;if(!n)throw Error(C(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=nn(a.href),a=Yl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=nn(a.href);var i=Yl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Ti(e)))&&!i._p&&(u.instance=i,u.state.loading=5),zt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zt.set(e,a),i||Kg(n,e,a,u.state))),t&&l===null)throw Error(C(528,""));return u}if(t&&l!==null)throw Error(C(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hn(a),a=Yl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(C(444,e))}}function nn(e){return'href="'+Ot(e)+'"'}function Ti(e){return'link[rel="stylesheet"]['+e+"]"}function yp(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function Kg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ge(t),e.head.appendChild(t))}function hn(e){return'[src="'+Ot(e)+'"]'}function _i(e){return"script[async]"+e}function Qf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(l)return t.instance=l,Ge(l),l;var n=Te({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),Je(l,"style",n),ou(l,a.precedence,e),t.instance=l;case"stylesheet":n=nn(a.href);var i=e.querySelector(Ti(n));if(i)return t.state.loading|=4,t.instance=i,Ge(i),i;l=yp(a),(n=zt.get(n))&&ts(l,n),i=(e.ownerDocument||e).createElement("link"),Ge(i);var u=i;return u._p=new Promise(function(r,c){u.onload=r,u.onerror=c}),Je(i,"link",l),t.state.loading|=4,ou(i,a.precedence,e),t.instance=i;case"script":return i=hn(a.src),(n=e.querySelector(_i(i)))?(t.instance=n,Ge(n),n):(l=a,(n=zt.get(i))&&(l=Te({},a),as(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ge(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(C(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,ou(l,a.precedence,e));return t.instance}function ou(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===t)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function as(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var su=null;function Zf(e,t,a){if(su===null){var l=new Map,n=su=new Map;n.set(a,l)}else n=su,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[yi]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var r=l.get(u);r?r.push(i):l.set(u,[i])}}return l}function Kf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Pg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vp(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Jg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=nn(l.href),i=t.querySelector(Ti(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ku.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ge(i);return}i=t.ownerDocument||t,l=yp(l),(n=zt.get(n))&&ts(l,n),i=i.createElement("link"),Ge(i);var u=i;u._p=new Promise(function(r,c){u.onload=r,u.onerror=c}),Je(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(e.count++,a=ku.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var $r=0;function Fg(e,t){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&$r===0&&($r=62500*Rg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>$r?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function ku(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qu=null;function fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qu=new Map,t.forEach(Ig,e),qu=null,ku.call(e))}function Ig(e,t){if(!(t.state.loading&4)){var a=qu.get(e);if(a)var l=a.get(null);else{a=new Map,qu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=ku.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:ea,Provider:null,Consumer:null,_currentValue:ll,_currentValue2:ll,_threadCount:0};function Wg(e,t,a,l,n,i,u,r,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.hiddenUpdates=Tr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function gp(e,t,a,l,n,i,u,r,c,o,m,d){return e=new Wg(e,t,a,u,c,o,m,d,r),t=1,i===!0&&(t|=24),i=pt(3,null,null,t),e.current=i,i.stateNode=e,t=Lo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Bo(i),e}function bp(e){return e?(e=jl,e):jl}function Sp(e,t,a,l,n,i){n=bp(n),l.context===null?l.context=n:l.pendingContext=n,l=Ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=za(e,l,t),a!==null&&(ot(a,e,t),qn(a,e,t))}function Pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ls(e,t){Pf(e,t),(e=e.alternate)&&Pf(e,t)}function Ep(e){if(e.tag===13||e.tag===31){var t=vl(e,67108864);t!==null&&ot(t,e,67108864),ls(e,67108864)}}function Jf(e){if(e.tag===13||e.tag===31){var t=St();t=ho(t);var a=vl(e,t);a!==null&&ot(a,e,t),ls(e,t)}}var Gu=!0;function $g(e,t,a,l){var n=X.T;X.T=null;var i=oe.p;try{oe.p=2,ns(e,t,a,l)}finally{oe.p=i,X.T=n}}function e0(e,t,a,l){var n=X.T;X.T=null;var i=oe.p;try{oe.p=8,ns(e,t,a,l)}finally{oe.p=i,X.T=n}}function ns(e,t,a,l){if(Gu){var n=Ic(l);if(n===null)Ir(e,t,l,Yu,a),Ff(e,l);else if(a0(n,e,t,a,l))l.stopPropagation();else if(Ff(e,l),t&4&&-1<t0.indexOf(e)){for(;n!==null;){var i=on(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ia(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var c=1<<31-bt(u);r.entanglements[1]|=c,u&=~c}Vt(i),!(ce&6)&&(Bu=vt()+500,Ei(0))}}break;case 31:case 13:r=vl(i,2),r!==null&&ot(r,i,2),rr(),ls(i,2)}if(i=Ic(l),i===null&&Ir(e,t,l,Yu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Ir(e,t,l,null,a)}}function Ic(e){return e=go(e),is(e)}var Yu=null;function is(e){if(Yu=null,e=zl(e),e!==null){var t=di(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Gd(t),e!==null)return e;e=null}else if(a===31){if(e=Yd(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yu=e,null}function Tp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qy()){case Zd:return 2;case Kd:return 8;case vu:case Gy:return 32;case Pd:return 268435456;default:return 32}default:return 32}}var Wc=!1,Ha=null,Ua=null,wa=null,ri=new Map,ci=new Map,Ta=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ff(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function An(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=on(t),t!==null&&Ep(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function a0(e,t,a,l,n){switch(t){case"focusin":return Ha=An(Ha,e,t,a,l,n),!0;case"dragenter":return Ua=An(Ua,e,t,a,l,n),!0;case"mouseover":return wa=An(wa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return ri.set(i,An(ri.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,ci.set(i,An(ci.get(i)||null,e,t,a,l,n)),!0}return!1}function _p(e){var t=zl(e.target);if(t!==null){var a=di(t);if(a!==null){if(t=a.tag,t===13){if(t=Gd(a),t!==null){e.blockedOn=t,Ds(e.priority,function(){Jf(a)});return}}else if(t===31){if(t=Yd(a),t!==null){e.blockedOn=t,Ds(e.priority,function(){Jf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function du(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ic(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);yc=l,a.target.dispatchEvent(l),yc=null}else return t=on(a),t!==null&&Ep(t),e.blockedOn=a,!1;t.shift()}return!0}function If(e,t,a){du(e)&&a.delete(t)}function l0(){Wc=!1,Ha!==null&&du(Ha)&&(Ha=null),Ua!==null&&du(Ua)&&(Ua=null),wa!==null&&du(wa)&&(wa=null),ri.forEach(If),ci.forEach(If)}function Pi(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,l0)))}var Ji=null;function Wf(e){Ji!==e&&(Ji=e,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(is(l||a)===null)continue;break}var i=on(a);i!==null&&(e.splice(t,3),t-=3,zc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function un(e){function t(c){return Pi(c,e)}Ha!==null&&Pi(Ha,e),Ua!==null&&Pi(Ua,e),wa!==null&&Pi(wa,e),ri.forEach(t),ci.forEach(t);for(var a=0;a<Ta.length;a++){var l=Ta[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)_p(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[st]||null;if(typeof i=="function")u||Wf(a);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[st]||null)r=u.formAction;else if(is(n)!==null)continue}else r=u.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),Wf(a)}}}function Cp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function us(e){this._internalRoot=e}sr.prototype.render=us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));var a=t.current,l=St();Sp(a,l,e,t,null,null)};sr.prototype.unmount=us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sp(e.current,2,null,e,null,null),rr(),t[cn]=null}};function sr(e){this._internalRoot=e}sr.prototype.unstable_scheduleHydration=function(e){if(e){var t=$d();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ta.length&&t!==0&&t<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&_p(e)}};var $f=kd.version;if($f!=="19.2.1")throw Error(C(527,$f,"19.2.1"));oe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Dy(t),e=e!==null?Xd(e):null,e=e===null?null:e.stateNode,e};var n0={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{mi=Fi.inject(n0),gt=Fi}catch{}}Ku.createRoot=function(e,t){if(!qd(e))throw Error(C(299));var a=!1,l="",n=ph,i=yh,u=vh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=gp(e,1,!1,null,null,a,l,null,n,i,u,Cp),e[cn]=t.current,es(e),new us(t)};Ku.hydrateRoot=function(e,t,a){if(!qd(e))throw Error(C(299));var l=!1,n="",i=ph,u=yh,r=vh,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=gp(e,1,!0,t,a??null,l,n,c,i,u,r,Cp),t.context=bp(null),a=t.current,l=St(),l=ho(l),n=Ba(l),n.callback=null,za(a,n,l),a=l,t.current.lanes=a,pi(t,a),Vt(t),e[cn]=t.current,es(e),new sr(t)};Ku.version="19.2.1";function Ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap)}catch(e){console.error(e)}}Ap(),Dd.exports=Ku;var i0=Dd.exports;const u0=lo(i0);/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Ce.apply(this,arguments)}var Me;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Me||(Me={}));const ed="popstate";function r0(e){e===void 0&&(e={});function t(l,n){let{pathname:i,search:u,hash:r}=l.location;return oi("",{pathname:i,search:u,hash:r},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function a(l,n){return typeof n=="string"?n:Ci(n)}return o0(t,a,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ml(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function c0(){return Math.random().toString(36).substr(2,8)}function td(e,t){return{usr:e.state,key:e.key,idx:t}}function oi(e,t,a,l){return a===void 0&&(a=null),Ce({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?da(t):t,{state:a,key:t&&t.key||l||c0()})}function Ci(e){let{pathname:t="/",search:a="",hash:l=""}=e;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function da(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let l=e.indexOf("?");l>=0&&(t.search=e.substr(l),e=e.substr(0,l)),e&&(t.pathname=e)}return t}function o0(e,t,a,l){l===void 0&&(l={});let{window:n=document.defaultView,v5Compat:i=!1}=l,u=n.history,r=Me.Pop,c=null,o=m();o==null&&(o=0,u.replaceState(Ce({},u.state,{idx:o}),""));function m(){return(u.state||{idx:null}).idx}function d(){r=Me.Pop;let x=m(),p=x==null?null:x-o;o=x,c&&c({action:r,location:_.location,delta:p})}function f(x,p){r=Me.Push;let s=oi(_.location,x,p);o=m()+1;let g=td(s,o),S=_.createHref(s);try{u.pushState(g,"",S)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;n.location.assign(S)}i&&c&&c({action:r,location:_.location,delta:1})}function h(x,p){r=Me.Replace;let s=oi(_.location,x,p);o=m();let g=td(s,o),S=_.createHref(s);u.replaceState(g,"",S),i&&c&&c({action:r,location:_.location,delta:0})}function T(x){let p=n.location.origin!=="null"?n.location.origin:n.location.href,s=typeof x=="string"?x:Ci(x);return s=s.replace(/ $/,"%20"),J(p,"No window.location.(origin|href) available to create URL for href: "+s),new URL(s,p)}let _={get action(){return r},get location(){return e(n,u)},listen(x){if(c)throw new Error("A history only accepts one active listener");return n.addEventListener(ed,d),c=x,()=>{n.removeEventListener(ed,d),c=null}},createHref(x){return t(n,x)},createURL:T,encodeLocation(x){let p=T(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:h,go(x){return u.go(x)}};return _}var de;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(de||(de={}));const s0=new Set(["lazy","caseSensitive","path","id","index","children"]);function f0(e){return e.index===!0}function Xu(e,t,a,l){return a===void 0&&(a=[]),l===void 0&&(l={}),e.map((n,i)=>{let u=[...a,String(i)],r=typeof n.id=="string"?n.id:u.join("-");if(J(n.index!==!0||!n.children,"Cannot specify children on an index route"),J(!l[r],'Found a route id collision on id "'+r+`".  Route id's must be globally unique within Data Router usages`),f0(n)){let c=Ce({},n,t(n),{id:r});return l[r]=c,c}else{let c=Ce({},n,t(n),{id:r,children:void 0});return l[r]=c,n.children&&(c.children=Xu(n.children,t,u,l)),c}})}function el(e,t,a){return a===void 0&&(a="/"),mu(e,t,a,!1)}function mu(e,t,a,l){let n=typeof t=="string"?da(t):t,i=Ai(n.pathname||"/",a);if(i==null)return null;let u=xp(e);m0(u);let r=null;for(let c=0;r==null&&c<u.length;++c){let o=C0(i);r=T0(u[c],o,l)}return r}function d0(e,t){let{route:a,pathname:l,params:n}=e;return{id:a.id,pathname:l,params:n,data:t[a.id],handle:a.handle}}function xp(e,t,a,l){t===void 0&&(t=[]),a===void 0&&(a=[]),l===void 0&&(l="");let n=(i,u,r)=>{let c={relativePath:r===void 0?i.path||"":r,caseSensitive:i.caseSensitive===!0,childrenIndex:u,route:i};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(l),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(l.length));let o=ja([l,c.relativePath]),m=a.concat(c);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+o+'".')),xp(i.children,t,m,o)),!(i.path==null&&!i.index)&&t.push({path:o,score:S0(o,i.index),routesMeta:m})};return e.forEach((i,u)=>{var r;if(i.path===""||!((r=i.path)!=null&&r.includes("?")))n(i,u);else for(let c of Op(i.path))n(i,u,c)}),t}function Op(e){let t=e.split("/");if(t.length===0)return[];let[a,...l]=t,n=a.endsWith("?"),i=a.replace(/\?$/,"");if(l.length===0)return n?[i,""]:[i];let u=Op(l.join("/")),r=[];return r.push(...u.map(c=>c===""?i:[i,c].join("/"))),n&&r.push(...u),r.map(c=>e.startsWith("/")&&c===""?"/":c)}function m0(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:E0(t.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}const h0=/^:[\w-]+$/,p0=3,y0=2,v0=1,g0=10,b0=-2,ad=e=>e==="*";function S0(e,t){let a=e.split("/"),l=a.length;return a.some(ad)&&(l+=b0),t&&(l+=y0),a.filter(n=>!ad(n)).reduce((n,i)=>n+(h0.test(i)?p0:i===""?v0:g0),l)}function E0(e,t){return e.length===t.length&&e.slice(0,-1).every((l,n)=>l===t[n])?e[e.length-1]-t[t.length-1]:0}function T0(e,t,a){a===void 0&&(a=!1);let{routesMeta:l}=e,n={},i="/",u=[];for(let r=0;r<l.length;++r){let c=l[r],o=r===l.length-1,m=i==="/"?t:t.slice(i.length)||"/",d=ld({path:c.relativePath,caseSensitive:c.caseSensitive,end:o},m),f=c.route;if(!d&&o&&a&&!l[l.length-1].route.index&&(d=ld({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!d)return null;Object.assign(n,d.params),u.push({params:n,pathname:ja([i,d.pathname]),pathnameBase:L0(ja([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=ja([i,d.pathnameBase]))}return u}function ld(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,l]=_0(e.path,e.caseSensitive,e.end),n=t.match(a);if(!n)return null;let i=n[0],u=i.replace(/(.)\/+$/,"$1"),r=n.slice(1);return{params:l.reduce((o,m,d)=>{let{paramName:f,isOptional:h}=m;if(f==="*"){let _=r[d]||"";u=i.slice(0,i.length-_.length).replace(/(.)\/+$/,"$1")}const T=r[d];return h&&!T?o[f]=void 0:o[f]=(T||"").replace(/%2F/g,"/"),o},{}),pathname:i,pathnameBase:u,pattern:e}}function _0(e,t,a){t===void 0&&(t=!1),a===void 0&&(a=!0),ml(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,r,c)=>(l.push({paramName:r,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),l]}function C0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ml(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ai(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,l=e.charAt(a);return l&&l!=="/"?null:e.slice(a)||"/"}const A0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x0=e=>A0.test(e);function O0(e,t){t===void 0&&(t="/");let{pathname:a,search:l="",hash:n=""}=typeof e=="string"?da(e):e,i;if(a)if(x0(a))i=a;else{if(a.includes("//")){let u=a;a=a.replace(/\/\/+/g,"/"),ml(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+a))}a.startsWith("/")?i=nd(a.substring(1),"/"):i=nd(a,t)}else i=t;return{pathname:i,search:M0(l),hash:R0(n)}}function nd(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?a.length>1&&a.pop():n!=="."&&a.push(n)}),a.length>1?a.join("/"):"/"}function ec(e,t,a,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lp(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function rs(e,t){let a=Lp(e);return t?a.map((l,n)=>n===a.length-1?l.pathname:l.pathnameBase):a.map(l=>l.pathnameBase)}function cs(e,t,a,l){l===void 0&&(l=!1);let n;typeof e=="string"?n=da(e):(n=Ce({},e),J(!n.pathname||!n.pathname.includes("?"),ec("?","pathname","search",n)),J(!n.pathname||!n.pathname.includes("#"),ec("#","pathname","hash",n)),J(!n.search||!n.search.includes("#"),ec("#","search","hash",n)));let i=e===""||n.pathname==="",u=i?"/":n.pathname,r;if(u==null)r=a;else{let d=t.length-1;if(!l&&u.startsWith("..")){let f=u.split("/");for(;f[0]==="..";)f.shift(),d-=1;n.pathname=f.join("/")}r=d>=0?t[d]:"/"}let c=O0(n,r),o=u&&u!=="/"&&u.endsWith("/"),m=(i||u===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(o||m)&&(c.pathname+="/"),c}const ja=e=>e.join("/").replace(/\/\/+/g,"/"),L0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,R0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Vu{constructor(t,a,l,n){n===void 0&&(n=!1),this.status=t,this.statusText=a||"",this.internal=n,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}}function si(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mp=["post","put","patch","delete"],B0=new Set(Mp),z0=["get",...Mp],D0=new Set(z0),N0=new Set([301,302,303,307,308]),H0=new Set([307,308]),tc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},U0={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xn={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},os=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w0=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Rp="remix-router-transitions";function j0(e){const t=e.window?e.window:typeof window<"u"?window:void 0,a=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",l=!a;J(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let n;if(e.mapRouteProperties)n=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;n=b=>({hasErrorBoundary:y(b)})}else n=w0;let i={},u=Xu(e.routes,n,void 0,i),r,c=e.basename||"/",o=e.dataStrategy||Y0,m=e.patchRoutesOnNavigation,d=Ce({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),f=null,h=new Set,T=null,_=null,x=null,p=e.hydrationData!=null,s=el(u,e.history.location,c),g=!1,S=null;if(s==null&&!m){let y=rt(404,{pathname:e.history.location.pathname}),{matches:b,route:E}=pd(u);s=b,S={[E.id]:y}}s&&!e.hydrationData&&Bi(s,u,e.history.location.pathname).active&&(s=null);let M;if(s)if(s.some(y=>y.route.lazy))M=!1;else if(!s.some(y=>y.route.loader))M=!0;else if(d.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,b=e.hydrationData?e.hydrationData.errors:null;if(b){let E=s.findIndex(A=>b[A.route.id]!==void 0);M=s.slice(0,E+1).every(A=>!eo(A.route,y,b))}else M=s.every(E=>!eo(E.route,y,b))}else M=e.hydrationData!=null;else if(M=!1,s=[],d.v7_partialHydration){let y=Bi(null,u,e.history.location.pathname);y.active&&y.matches&&(g=!0,s=y.matches)}let G,v={historyAction:e.history.action,location:e.history.location,matches:s,initialized:M,navigation:tc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},L=Me.Pop,N=!1,B,ae=!1,le=new Map,Q=null,ne=!1,ie=!1,R=[],Y=new Set,H=new Map,$=0,se=-1,We=new Map,Xe=new Set,Fe=new Map,Ie=new Map,ze=new Set,lt=new Map,Qa=new Map,Li;function Xp(){if(f=e.history.listen(y=>{let{action:b,location:E,delta:A}=y;if(Li){Li(),Li=void 0;return}ml(Qa.size===0||A!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let D=Es({currentLocation:v.location,nextLocation:E,historyAction:b});if(D&&A!=null){let q=new Promise(V=>{Li=V});e.history.go(A*-1),Ri(D,{state:"blocked",location:E,proceed(){Ri(D,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),q.then(()=>e.history.go(A))},reset(){let V=new Map(v.blockers);V.set(D,xn),$e({blockers:V})}});return}return Za(b,E)}),a){ab(t,le);let y=()=>lb(t,le);t.addEventListener("pagehide",y),Q=()=>t.removeEventListener("pagehide",y)}return v.initialized||Za(Me.Pop,v.location,{initialHydration:!0}),G}function Vp(){f&&f(),Q&&Q(),h.clear(),B&&B.abort(),v.fetchers.forEach((y,b)=>Mi(b)),v.blockers.forEach((y,b)=>Ss(b))}function Qp(y){return h.add(y),()=>h.delete(y)}function $e(y,b){b===void 0&&(b={}),v=Ce({},v,y);let E=[],A=[];d.v7_fetcherPersist&&v.fetchers.forEach((D,q)=>{D.state==="idle"&&(ze.has(q)?A.push(q):E.push(q))}),ze.forEach(D=>{!v.fetchers.has(D)&&!H.has(D)&&A.push(D)}),[...h].forEach(D=>D(v,{deletedFetchers:A,viewTransitionOpts:b.viewTransitionOpts,flushSync:b.flushSync===!0})),d.v7_fetcherPersist?(E.forEach(D=>v.fetchers.delete(D)),A.forEach(D=>Mi(D))):A.forEach(D=>ze.delete(D))}function Sl(y,b,E){var A,D;let{flushSync:q}=E===void 0?{}:E,V=v.actionData!=null&&v.navigation.formMethod!=null&&Ht(v.navigation.formMethod)&&v.navigation.state==="loading"&&((A=y.state)==null?void 0:A._isRedirect)!==!0,w;b.actionData?Object.keys(b.actionData).length>0?w=b.actionData:w=null:V?w=v.actionData:w=null;let j=b.loaderData?md(v.loaderData,b.loaderData,b.matches||[],b.errors):v.loaderData,U=v.blockers;U.size>0&&(U=new Map(U),U.forEach((te,Ve)=>U.set(Ve,xn)));let k=N===!0||v.navigation.formMethod!=null&&Ht(v.navigation.formMethod)&&((D=y.state)==null?void 0:D._isRedirect)!==!0;r&&(u=r,r=void 0),ne||L===Me.Pop||(L===Me.Push?e.history.push(y,y.state):L===Me.Replace&&e.history.replace(y,y.state));let P;if(L===Me.Pop){let te=le.get(v.location.pathname);te&&te.has(y.pathname)?P={currentLocation:v.location,nextLocation:y}:le.has(y.pathname)&&(P={currentLocation:y,nextLocation:v.location})}else if(ae){let te=le.get(v.location.pathname);te?te.add(y.pathname):(te=new Set([y.pathname]),le.set(v.location.pathname,te)),P={currentLocation:v.location,nextLocation:y}}$e(Ce({},b,{actionData:w,loaderData:j,historyAction:L,location:y,initialized:!0,navigation:tc,revalidation:"idle",restoreScrollPosition:_s(y,b.matches||v.matches),preventScrollReset:k,blockers:U}),{viewTransitionOpts:P,flushSync:q===!0}),L=Me.Pop,N=!1,ae=!1,ne=!1,ie=!1,R=[]}async function ms(y,b){if(typeof y=="number"){e.history.go(y);return}let E=$c(v.location,v.matches,c,d.v7_prependBasename,y,d.v7_relativeSplatPath,b==null?void 0:b.fromRouteId,b==null?void 0:b.relative),{path:A,submission:D,error:q}=id(d.v7_normalizeFormMethod,!1,E,b),V=v.location,w=oi(v.location,A,b&&b.state);w=Ce({},w,e.history.encodeLocation(w));let j=b&&b.replace!=null?b.replace:void 0,U=Me.Push;j===!0?U=Me.Replace:j===!1||D!=null&&Ht(D.formMethod)&&D.formAction===v.location.pathname+v.location.search&&(U=Me.Replace);let k=b&&"preventScrollReset"in b?b.preventScrollReset===!0:void 0,P=(b&&b.flushSync)===!0,te=Es({currentLocation:V,nextLocation:w,historyAction:U});if(te){Ri(te,{state:"blocked",location:w,proceed(){Ri(te,{state:"proceeding",proceed:void 0,reset:void 0,location:w}),ms(y,b)},reset(){let Ve=new Map(v.blockers);Ve.set(te,xn),$e({blockers:Ve})}});return}return await Za(U,w,{submission:D,pendingError:q,preventScrollReset:k,replace:b&&b.replace,enableViewTransition:b&&b.viewTransition,flushSync:P})}function Zp(){if(mr(),$e({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Za(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Za(L||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation,enableViewTransition:ae===!0})}}async function Za(y,b,E){B&&B.abort(),B=null,L=y,ne=(E&&E.startUninterruptedRevalidation)===!0,ay(v.location,v.matches),N=(E&&E.preventScrollReset)===!0,ae=(E&&E.enableViewTransition)===!0;let A=r||u,D=E&&E.overrideNavigation,q=E!=null&&E.initialHydration&&v.matches&&v.matches.length>0&&!g?v.matches:el(A,b,c),V=(E&&E.flushSync)===!0;if(q&&v.initialized&&!ie&&P0(v.location,b)&&!(E&&E.submission&&Ht(E.submission.formMethod))){Sl(b,{matches:q},{flushSync:V});return}let w=Bi(q,A,b.pathname);if(w.active&&w.matches&&(q=w.matches),!q){let{error:ve,notFoundMatches:re,route:Ae}=hr(b.pathname);Sl(b,{matches:re,loaderData:{},errors:{[Ae.id]:ve}},{flushSync:V});return}B=new AbortController;let j=xl(e.history,b,B.signal,E&&E.submission),U;if(E&&E.pendingError)U=[tl(q).route.id,{type:de.error,error:E.pendingError}];else if(E&&E.submission&&Ht(E.submission.formMethod)){let ve=await Kp(j,b,E.submission,q,w.active,{replace:E.replace,flushSync:V});if(ve.shortCircuited)return;if(ve.pendingActionResult){let[re,Ae]=ve.pendingActionResult;if(mt(Ae)&&si(Ae.error)&&Ae.error.status===404){B=null,Sl(b,{matches:ve.matches,loaderData:{},errors:{[re]:Ae.error}});return}}q=ve.matches||q,U=ve.pendingActionResult,D=ac(b,E.submission),V=!1,w.active=!1,j=xl(e.history,j.url,j.signal)}let{shortCircuited:k,matches:P,loaderData:te,errors:Ve}=await Pp(j,b,q,w.active,D,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,V,U);k||(B=null,Sl(b,Ce({matches:P||q},hd(U),{loaderData:te,errors:Ve})))}async function Kp(y,b,E,A,D,q){q===void 0&&(q={}),mr();let V=eb(b,E);if($e({navigation:V},{flushSync:q.flushSync===!0}),D){let U=await zi(A,b.pathname,y.signal);if(U.type==="aborted")return{shortCircuited:!0};if(U.type==="error"){let k=tl(U.partialMatches).route.id;return{matches:U.partialMatches,pendingActionResult:[k,{type:de.error,error:U.error}]}}else if(U.matches)A=U.matches;else{let{notFoundMatches:k,error:P,route:te}=hr(b.pathname);return{matches:k,pendingActionResult:[te.id,{type:de.error,error:P}]}}}let w,j=Nn(A,b);if(!j.route.action&&!j.route.lazy)w={type:de.error,error:rt(405,{method:y.method,pathname:b.pathname,routeId:j.route.id})};else if(w=(await pn("action",v,y,[j],A,null))[j.route.id],y.signal.aborted)return{shortCircuited:!0};if(al(w)){let U;return q&&q.replace!=null?U=q.replace:U=sd(w.response.headers.get("Location"),new URL(y.url),c)===v.location.pathname+v.location.search,await Ka(y,w,!0,{submission:E,replace:U}),{shortCircuited:!0}}if(La(w))throw rt(400,{type:"defer-action"});if(mt(w)){let U=tl(A,j.route.id);return(q&&q.replace)!==!0&&(L=Me.Push),{matches:A,pendingActionResult:[U.route.id,w]}}return{matches:A,pendingActionResult:[j.route.id,w]}}async function Pp(y,b,E,A,D,q,V,w,j,U,k){let P=D||ac(b,q),te=q||V||vd(P),Ve=!ne&&(!d.v7_partialHydration||!j);if(A){if(Ve){let xe=hs(k);$e(Ce({navigation:P},xe!==void 0?{actionData:xe}:{}),{flushSync:U})}let ue=await zi(E,b.pathname,y.signal);if(ue.type==="aborted")return{shortCircuited:!0};if(ue.type==="error"){let xe=tl(ue.partialMatches).route.id;return{matches:ue.partialMatches,loaderData:{},errors:{[xe]:ue.error}}}else if(ue.matches)E=ue.matches;else{let{error:xe,notFoundMatches:Tl,route:gn}=hr(b.pathname);return{matches:Tl,loaderData:{},errors:{[gn.id]:xe}}}}let ve=r||u,[re,Ae]=rd(e.history,v,E,te,b,d.v7_partialHydration&&j===!0,d.v7_skipActionErrorRevalidation,ie,R,Y,ze,Fe,Xe,ve,c,k);if(pr(ue=>!(E&&E.some(xe=>xe.route.id===ue))||re&&re.some(xe=>xe.route.id===ue)),se=++$,re.length===0&&Ae.length===0){let ue=gs();return Sl(b,Ce({matches:E,loaderData:{},errors:k&&mt(k[1])?{[k[0]]:k[1].error}:null},hd(k),ue?{fetchers:new Map(v.fetchers)}:{}),{flushSync:U}),{shortCircuited:!0}}if(Ve){let ue={};if(!A){ue.navigation=P;let xe=hs(k);xe!==void 0&&(ue.actionData=xe)}Ae.length>0&&(ue.fetchers=Jp(Ae)),$e(ue,{flushSync:U})}Ae.forEach(ue=>{ha(ue.key),ue.controller&&H.set(ue.key,ue.controller)});let El=()=>Ae.forEach(ue=>ha(ue.key));B&&B.signal.addEventListener("abort",El);let{loaderResults:yn,fetcherResults:Zt}=await ps(v,E,re,Ae,y);if(y.signal.aborted)return{shortCircuited:!0};B&&B.signal.removeEventListener("abort",El),Ae.forEach(ue=>H.delete(ue.key));let wt=Ii(yn);if(wt)return await Ka(y,wt.result,!0,{replace:w}),{shortCircuited:!0};if(wt=Ii(Zt),wt)return Xe.add(wt.key),await Ka(y,wt.result,!0,{replace:w}),{shortCircuited:!0};let{loaderData:yr,errors:vn}=dd(v,E,yn,k,Ae,Zt,lt);lt.forEach((ue,xe)=>{ue.subscribe(Tl=>{(Tl||ue.done)&&lt.delete(xe)})}),d.v7_partialHydration&&j&&v.errors&&(vn=Ce({},v.errors,vn));let Pa=gs(),Di=bs(se),Ni=Pa||Di||Ae.length>0;return Ce({matches:E,loaderData:yr,errors:vn},Ni?{fetchers:new Map(v.fetchers)}:{})}function hs(y){if(y&&!mt(y[1]))return{[y[0]]:y[1].data};if(v.actionData)return Object.keys(v.actionData).length===0?null:v.actionData}function Jp(y){return y.forEach(b=>{let E=v.fetchers.get(b.key),A=On(void 0,E?E.data:void 0);v.fetchers.set(b.key,A)}),new Map(v.fetchers)}function Fp(y,b,E,A){if(l)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ha(y);let D=(A&&A.flushSync)===!0,q=r||u,V=$c(v.location,v.matches,c,d.v7_prependBasename,E,d.v7_relativeSplatPath,b,A==null?void 0:A.relative),w=el(q,V,c),j=Bi(w,q,V);if(j.active&&j.matches&&(w=j.matches),!w){Qt(y,b,rt(404,{pathname:V}),{flushSync:D});return}let{path:U,submission:k,error:P}=id(d.v7_normalizeFormMethod,!0,V,A);if(P){Qt(y,b,P,{flushSync:D});return}let te=Nn(w,U),Ve=(A&&A.preventScrollReset)===!0;if(k&&Ht(k.formMethod)){Ip(y,b,U,te,w,j.active,D,Ve,k);return}Fe.set(y,{routeId:b,path:U}),Wp(y,b,U,te,w,j.active,D,Ve,k)}async function Ip(y,b,E,A,D,q,V,w,j){mr(),Fe.delete(y);function U(De){if(!De.route.action&&!De.route.lazy){let _l=rt(405,{method:j.formMethod,pathname:E,routeId:b});return Qt(y,b,_l,{flushSync:V}),!0}return!1}if(!q&&U(A))return;let k=v.fetchers.get(y);ma(y,tb(j,k),{flushSync:V});let P=new AbortController,te=xl(e.history,E,P.signal,j);if(q){let De=await zi(D,new URL(te.url).pathname,te.signal,y);if(De.type==="aborted")return;if(De.type==="error"){Qt(y,b,De.error,{flushSync:V});return}else if(De.matches){if(D=De.matches,A=Nn(D,E),U(A))return}else{Qt(y,b,rt(404,{pathname:E}),{flushSync:V});return}}H.set(y,P);let Ve=$,re=(await pn("action",v,te,[A],D,y))[A.route.id];if(te.signal.aborted){H.get(y)===P&&H.delete(y);return}if(d.v7_fetcherPersist&&ze.has(y)){if(al(re)||mt(re)){ma(y,ya(void 0));return}}else{if(al(re))if(H.delete(y),se>Ve){ma(y,ya(void 0));return}else return Xe.add(y),ma(y,On(j)),Ka(te,re,!1,{fetcherSubmission:j,preventScrollReset:w});if(mt(re)){Qt(y,b,re.error);return}}if(La(re))throw rt(400,{type:"defer-action"});let Ae=v.navigation.location||v.location,El=xl(e.history,Ae,P.signal),yn=r||u,Zt=v.navigation.state!=="idle"?el(yn,v.navigation.location,c):v.matches;J(Zt,"Didn't find any matches after fetcher action");let wt=++$;We.set(y,wt);let yr=On(j,re.data);v.fetchers.set(y,yr);let[vn,Pa]=rd(e.history,v,Zt,j,Ae,!1,d.v7_skipActionErrorRevalidation,ie,R,Y,ze,Fe,Xe,yn,c,[A.route.id,re]);Pa.filter(De=>De.key!==y).forEach(De=>{let _l=De.key,Cs=v.fetchers.get(_l),iy=On(void 0,Cs?Cs.data:void 0);v.fetchers.set(_l,iy),ha(_l),De.controller&&H.set(_l,De.controller)}),$e({fetchers:new Map(v.fetchers)});let Di=()=>Pa.forEach(De=>ha(De.key));P.signal.addEventListener("abort",Di);let{loaderResults:Ni,fetcherResults:ue}=await ps(v,Zt,vn,Pa,El);if(P.signal.aborted)return;P.signal.removeEventListener("abort",Di),We.delete(y),H.delete(y),Pa.forEach(De=>H.delete(De.key));let xe=Ii(Ni);if(xe)return Ka(El,xe.result,!1,{preventScrollReset:w});if(xe=Ii(ue),xe)return Xe.add(xe.key),Ka(El,xe.result,!1,{preventScrollReset:w});let{loaderData:Tl,errors:gn}=dd(v,Zt,Ni,void 0,Pa,ue,lt);if(v.fetchers.has(y)){let De=ya(re.data);v.fetchers.set(y,De)}bs(wt),v.navigation.state==="loading"&&wt>se?(J(L,"Expected pending action"),B&&B.abort(),Sl(v.navigation.location,{matches:Zt,loaderData:Tl,errors:gn,fetchers:new Map(v.fetchers)})):($e({errors:gn,loaderData:md(v.loaderData,Tl,Zt,gn),fetchers:new Map(v.fetchers)}),ie=!1)}async function Wp(y,b,E,A,D,q,V,w,j){let U=v.fetchers.get(y);ma(y,On(j,U?U.data:void 0),{flushSync:V});let k=new AbortController,P=xl(e.history,E,k.signal);if(q){let re=await zi(D,new URL(P.url).pathname,P.signal,y);if(re.type==="aborted")return;if(re.type==="error"){Qt(y,b,re.error,{flushSync:V});return}else if(re.matches)D=re.matches,A=Nn(D,E);else{Qt(y,b,rt(404,{pathname:E}),{flushSync:V});return}}H.set(y,k);let te=$,ve=(await pn("loader",v,P,[A],D,y))[A.route.id];if(La(ve)&&(ve=await ss(ve,P.signal,!0)||ve),H.get(y)===k&&H.delete(y),!P.signal.aborted){if(ze.has(y)){ma(y,ya(void 0));return}if(al(ve))if(se>te){ma(y,ya(void 0));return}else{Xe.add(y),await Ka(P,ve,!1,{preventScrollReset:w});return}if(mt(ve)){Qt(y,b,ve.error);return}J(!La(ve),"Unhandled fetcher deferred data"),ma(y,ya(ve.data))}}async function Ka(y,b,E,A){let{submission:D,fetcherSubmission:q,preventScrollReset:V,replace:w}=A===void 0?{}:A;b.response.headers.has("X-Remix-Revalidate")&&(ie=!0);let j=b.response.headers.get("Location");J(j,"Expected a Location header on the redirect Response"),j=sd(j,new URL(y.url),c);let U=oi(v.location,j,{_isRedirect:!0});if(a){let re=!1;if(b.response.headers.has("X-Remix-Reload-Document"))re=!0;else if(os.test(j)){const Ae=e.history.createURL(j);re=Ae.origin!==t.location.origin||Ai(Ae.pathname,c)==null}if(re){w?t.location.replace(j):t.location.assign(j);return}}B=null;let k=w===!0||b.response.headers.has("X-Remix-Replace")?Me.Replace:Me.Push,{formMethod:P,formAction:te,formEncType:Ve}=v.navigation;!D&&!q&&P&&te&&Ve&&(D=vd(v.navigation));let ve=D||q;if(H0.has(b.response.status)&&ve&&Ht(ve.formMethod))await Za(k,U,{submission:Ce({},ve,{formAction:j}),preventScrollReset:V||N,enableViewTransition:E?ae:void 0});else{let re=ac(U,D);await Za(k,U,{overrideNavigation:re,fetcherSubmission:q,preventScrollReset:V||N,enableViewTransition:E?ae:void 0})}}async function pn(y,b,E,A,D,q){let V,w={};try{V=await X0(o,y,b,E,A,D,q,i,n)}catch(j){return A.forEach(U=>{w[U.route.id]={type:de.error,error:j}}),w}for(let[j,U]of Object.entries(V))if(J0(U)){let k=U.result;w[j]={type:de.redirect,response:Z0(k,E,j,D,c,d.v7_relativeSplatPath)}}else w[j]=await Q0(U);return w}async function ps(y,b,E,A,D){let q=y.matches,V=pn("loader",y,D,E,b,null),w=Promise.all(A.map(async k=>{if(k.matches&&k.match&&k.controller){let te=(await pn("loader",y,xl(e.history,k.path,k.controller.signal),[k.match],k.matches,k.key))[k.match.route.id];return{[k.key]:te}}else return Promise.resolve({[k.key]:{type:de.error,error:rt(404,{pathname:k.path})}})})),j=await V,U=(await w).reduce((k,P)=>Object.assign(k,P),{});return await Promise.all([W0(b,j,D.signal,q,y.loaderData),$0(b,U,A)]),{loaderResults:j,fetcherResults:U}}function mr(){ie=!0,R.push(...pr()),Fe.forEach((y,b)=>{H.has(b)&&Y.add(b),ha(b)})}function ma(y,b,E){E===void 0&&(E={}),v.fetchers.set(y,b),$e({fetchers:new Map(v.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function Qt(y,b,E,A){A===void 0&&(A={});let D=tl(v.matches,b);Mi(y),$e({errors:{[D.route.id]:E},fetchers:new Map(v.fetchers)},{flushSync:(A&&A.flushSync)===!0})}function ys(y){return Ie.set(y,(Ie.get(y)||0)+1),ze.has(y)&&ze.delete(y),v.fetchers.get(y)||U0}function Mi(y){let b=v.fetchers.get(y);H.has(y)&&!(b&&b.state==="loading"&&We.has(y))&&ha(y),Fe.delete(y),We.delete(y),Xe.delete(y),d.v7_fetcherPersist&&ze.delete(y),Y.delete(y),v.fetchers.delete(y)}function $p(y){let b=(Ie.get(y)||0)-1;b<=0?(Ie.delete(y),ze.add(y),d.v7_fetcherPersist||Mi(y)):Ie.set(y,b),$e({fetchers:new Map(v.fetchers)})}function ha(y){let b=H.get(y);b&&(b.abort(),H.delete(y))}function vs(y){for(let b of y){let E=ys(b),A=ya(E.data);v.fetchers.set(b,A)}}function gs(){let y=[],b=!1;for(let E of Xe){let A=v.fetchers.get(E);J(A,"Expected fetcher: "+E),A.state==="loading"&&(Xe.delete(E),y.push(E),b=!0)}return vs(y),b}function bs(y){let b=[];for(let[E,A]of We)if(A<y){let D=v.fetchers.get(E);J(D,"Expected fetcher: "+E),D.state==="loading"&&(ha(E),We.delete(E),b.push(E))}return vs(b),b.length>0}function ey(y,b){let E=v.blockers.get(y)||xn;return Qa.get(y)!==b&&Qa.set(y,b),E}function Ss(y){v.blockers.delete(y),Qa.delete(y)}function Ri(y,b){let E=v.blockers.get(y)||xn;J(E.state==="unblocked"&&b.state==="blocked"||E.state==="blocked"&&b.state==="blocked"||E.state==="blocked"&&b.state==="proceeding"||E.state==="blocked"&&b.state==="unblocked"||E.state==="proceeding"&&b.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+b.state);let A=new Map(v.blockers);A.set(y,b),$e({blockers:A})}function Es(y){let{currentLocation:b,nextLocation:E,historyAction:A}=y;if(Qa.size===0)return;Qa.size>1&&ml(!1,"A router only supports one blocker at a time");let D=Array.from(Qa.entries()),[q,V]=D[D.length-1],w=v.blockers.get(q);if(!(w&&w.state==="proceeding")&&V({currentLocation:b,nextLocation:E,historyAction:A}))return q}function hr(y){let b=rt(404,{pathname:y}),E=r||u,{matches:A,route:D}=pd(E);return pr(),{notFoundMatches:A,route:D,error:b}}function pr(y){let b=[];return lt.forEach((E,A)=>{(!y||y(A))&&(E.cancel(),b.push(A),lt.delete(A))}),b}function ty(y,b,E){if(T=y,x=b,_=E||null,!p&&v.navigation===tc){p=!0;let A=_s(v.location,v.matches);A!=null&&$e({restoreScrollPosition:A})}return()=>{T=null,x=null,_=null}}function Ts(y,b){return _&&_(y,b.map(A=>d0(A,v.loaderData)))||y.key}function ay(y,b){if(T&&x){let E=Ts(y,b);T[E]=x()}}function _s(y,b){if(T){let E=Ts(y,b),A=T[E];if(typeof A=="number")return A}return null}function Bi(y,b,E){if(m)if(y){if(Object.keys(y[0].params).length>0)return{active:!0,matches:mu(b,E,c,!0)}}else return{active:!0,matches:mu(b,E,c,!0)||[]};return{active:!1,matches:null}}async function zi(y,b,E,A){if(!m)return{type:"success",matches:y};let D=y;for(;;){let q=r==null,V=r||u,w=i;try{await m({signal:E,path:b,matches:D,fetcherKey:A,patch:(k,P)=>{E.aborted||od(k,P,V,w,n)}})}catch(k){return{type:"error",error:k,partialMatches:D}}finally{q&&!E.aborted&&(u=[...u])}if(E.aborted)return{type:"aborted"};let j=el(V,b,c);if(j)return{type:"success",matches:j};let U=mu(V,b,c,!0);if(!U||D.length===U.length&&D.every((k,P)=>k.route.id===U[P].route.id))return{type:"success",matches:null};D=U}}function ly(y){i={},r=Xu(y,n,void 0,i)}function ny(y,b){let E=r==null;od(y,b,r||u,i,n),E&&(u=[...u],$e({}))}return G={get basename(){return c},get future(){return d},get state(){return v},get routes(){return u},get window(){return t},initialize:Xp,subscribe:Qp,enableScrollRestoration:ty,navigate:ms,fetch:Fp,revalidate:Zp,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:ys,deleteFetcher:$p,dispose:Vp,getBlocker:ey,deleteBlocker:Ss,patchRoutes:ny,_internalFetchControllers:H,_internalActiveDeferreds:lt,_internalSetRoutes:ly},G}function k0(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function $c(e,t,a,l,n,i,u,r){let c,o;if(u){c=[];for(let d of t)if(c.push(d),d.route.id===u){o=d;break}}else c=t,o=t[t.length-1];let m=cs(n||".",rs(c,i),Ai(e.pathname,a)||e.pathname,r==="path");if(n==null&&(m.search=e.search,m.hash=e.hash),(n==null||n===""||n===".")&&o){let d=fs(m.search);if(o.route.index&&!d)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&d){let f=new URLSearchParams(m.search),h=f.getAll("index");f.delete("index"),h.filter(_=>_).forEach(_=>f.append("index",_));let T=f.toString();m.search=T?"?"+T:""}}return l&&a!=="/"&&(m.pathname=m.pathname==="/"?a:ja([a,m.pathname])),Ci(m)}function id(e,t,a,l){if(!l||!k0(l))return{path:a};if(l.formMethod&&!I0(l.formMethod))return{path:a,error:rt(405,{method:l.formMethod})};let n=()=>({path:a,error:rt(400,{type:"invalid-body"})}),i=l.formMethod||"get",u=e?i.toUpperCase():i.toLowerCase(),r=Dp(a);if(l.body!==void 0){if(l.formEncType==="text/plain"){if(!Ht(u))return n();let f=typeof l.body=="string"?l.body:l.body instanceof FormData||l.body instanceof URLSearchParams?Array.from(l.body.entries()).reduce((h,T)=>{let[_,x]=T;return""+h+_+"="+x+`
`},""):String(l.body);return{path:a,submission:{formMethod:u,formAction:r,formEncType:l.formEncType,formData:void 0,json:void 0,text:f}}}else if(l.formEncType==="application/json"){if(!Ht(u))return n();try{let f=typeof l.body=="string"?JSON.parse(l.body):l.body;return{path:a,submission:{formMethod:u,formAction:r,formEncType:l.formEncType,formData:void 0,json:f,text:void 0}}}catch{return n()}}}J(typeof FormData=="function","FormData is not available in this environment");let c,o;if(l.formData)c=to(l.formData),o=l.formData;else if(l.body instanceof FormData)c=to(l.body),o=l.body;else if(l.body instanceof URLSearchParams)c=l.body,o=fd(c);else if(l.body==null)c=new URLSearchParams,o=new FormData;else try{c=new URLSearchParams(l.body),o=fd(c)}catch{return n()}let m={formMethod:u,formAction:r,formEncType:l&&l.formEncType||"application/x-www-form-urlencoded",formData:o,json:void 0,text:void 0};if(Ht(m.formMethod))return{path:a,submission:m};let d=da(a);return t&&d.search&&fs(d.search)&&c.append("index",""),d.search="?"+c,{path:Ci(d),submission:m}}function ud(e,t,a){a===void 0&&(a=!1);let l=e.findIndex(n=>n.route.id===t);return l>=0?e.slice(0,a?l+1:l):e}function rd(e,t,a,l,n,i,u,r,c,o,m,d,f,h,T,_){let x=_?mt(_[1])?_[1].error:_[1].data:void 0,p=e.createURL(t.location),s=e.createURL(n),g=a;i&&t.errors?g=ud(a,Object.keys(t.errors)[0],!0):_&&mt(_[1])&&(g=ud(a,_[0]));let S=_?_[1].statusCode:void 0,M=u&&S&&S>=400,G=g.filter((L,N)=>{let{route:B}=L;if(B.lazy)return!0;if(B.loader==null)return!1;if(i)return eo(B,t.loaderData,t.errors);if(q0(t.loaderData,t.matches[N],L)||c.some(Q=>Q===L.route.id))return!0;let ae=t.matches[N],le=L;return cd(L,Ce({currentUrl:p,currentParams:ae.params,nextUrl:s,nextParams:le.params},l,{actionResult:x,actionStatus:S,defaultShouldRevalidate:M?!1:r||p.pathname+p.search===s.pathname+s.search||p.search!==s.search||Bp(ae,le)}))}),v=[];return d.forEach((L,N)=>{if(i||!a.some(ne=>ne.route.id===L.routeId)||m.has(N))return;let B=el(h,L.path,T);if(!B){v.push({key:N,routeId:L.routeId,path:L.path,matches:null,match:null,controller:null});return}let ae=t.fetchers.get(N),le=Nn(B,L.path),Q=!1;f.has(N)?Q=!1:o.has(N)?(o.delete(N),Q=!0):ae&&ae.state!=="idle"&&ae.data===void 0?Q=r:Q=cd(le,Ce({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:s,nextParams:a[a.length-1].params},l,{actionResult:x,actionStatus:S,defaultShouldRevalidate:M?!1:r})),Q&&v.push({key:N,routeId:L.routeId,path:L.path,matches:B,match:le,controller:new AbortController})}),[G,v]}function eo(e,t,a){if(e.lazy)return!0;if(!e.loader)return!1;let l=t!=null&&t[e.id]!==void 0,n=a!=null&&a[e.id]!==void 0;return!l&&n?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!l&&!n}function q0(e,t,a){let l=!t||a.route.id!==t.route.id,n=e[a.route.id]===void 0;return l||n}function Bp(e,t){let a=e.route.path;return e.pathname!==t.pathname||a!=null&&a.endsWith("*")&&e.params["*"]!==t.params["*"]}function cd(e,t){if(e.route.shouldRevalidate){let a=e.route.shouldRevalidate(t);if(typeof a=="boolean")return a}return t.defaultShouldRevalidate}function od(e,t,a,l,n){var i;let u;if(e){let o=l[e];J(o,"No route found to patch children into: routeId = "+e),o.children||(o.children=[]),u=o.children}else u=a;let r=t.filter(o=>!u.some(m=>zp(o,m))),c=Xu(r,n,[e||"_","patch",String(((i=u)==null?void 0:i.length)||"0")],l);u.push(...c)}function zp(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((a,l)=>{var n;return(n=t.children)==null?void 0:n.some(i=>zp(a,i))}):!1}async function G0(e,t,a){if(!e.lazy)return;let l=await e.lazy();if(!e.lazy)return;let n=a[e.id];J(n,"No route found in manifest");let i={};for(let u in l){let c=n[u]!==void 0&&u!=="hasErrorBoundary";ml(!c,'Route "'+n.id+'" has a static property "'+u+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+u+'" will be ignored.')),!c&&!s0.has(u)&&(i[u]=l[u])}Object.assign(n,i),Object.assign(n,Ce({},t(n),{lazy:void 0}))}async function Y0(e){let{matches:t}=e,a=t.filter(n=>n.shouldLoad);return(await Promise.all(a.map(n=>n.resolve()))).reduce((n,i,u)=>Object.assign(n,{[a[u].route.id]:i}),{})}async function X0(e,t,a,l,n,i,u,r,c,o){let m=i.map(h=>h.route.lazy?G0(h.route,c,r):void 0),d=i.map((h,T)=>{let _=m[T],x=n.some(s=>s.route.id===h.route.id);return Ce({},h,{shouldLoad:x,resolve:async s=>(s&&l.method==="GET"&&(h.route.lazy||h.route.loader)&&(x=!0),x?V0(t,l,h,_,s,o):Promise.resolve({type:de.data,result:void 0}))})}),f=await e({matches:d,request:l,params:i[0].params,fetcherKey:u,context:o});try{await Promise.all(m)}catch{}return f}async function V0(e,t,a,l,n,i){let u,r,c=o=>{let m,d=new Promise((T,_)=>m=_);r=()=>m(),t.signal.addEventListener("abort",r);let f=T=>typeof o!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+a.route.id+"]"))):o({request:t,params:a.params,context:i},...T!==void 0?[T]:[]),h=(async()=>{try{return{type:"data",result:await(n?n(_=>f(_)):f())}}catch(T){return{type:"error",result:T}}})();return Promise.race([h,d])};try{let o=a.route[e];if(l)if(o){let m,[d]=await Promise.all([c(o).catch(f=>{m=f}),l]);if(m!==void 0)throw m;u=d}else if(await l,o=a.route[e],o)u=await c(o);else if(e==="action"){let m=new URL(t.url),d=m.pathname+m.search;throw rt(405,{method:t.method,pathname:d,routeId:a.route.id})}else return{type:de.data,result:void 0};else if(o)u=await c(o);else{let m=new URL(t.url),d=m.pathname+m.search;throw rt(404,{pathname:d})}J(u.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+a.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(o){return{type:de.error,result:o}}finally{r&&t.signal.removeEventListener("abort",r)}return u}async function Q0(e){let{result:t,type:a}=e;if(Np(t)){let d;try{let f=t.headers.get("Content-Type");f&&/\bapplication\/json\b/.test(f)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(f){return{type:de.error,error:f}}return a===de.error?{type:de.error,error:new Vu(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:de.data,data:d,statusCode:t.status,headers:t.headers}}if(a===de.error){if(yd(t)){var l,n;if(t.data instanceof Error){var i,u;return{type:de.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(u=t.init)!=null&&u.headers?new Headers(t.init.headers):void 0}}return{type:de.error,error:new Vu(((l=t.init)==null?void 0:l.status)||500,void 0,t.data),statusCode:si(t)?t.status:void 0,headers:(n=t.init)!=null&&n.headers?new Headers(t.init.headers):void 0}}return{type:de.error,error:t,statusCode:si(t)?t.status:void 0}}if(F0(t)){var r,c;return{type:de.deferred,deferredData:t,statusCode:(r=t.init)==null?void 0:r.status,headers:((c=t.init)==null?void 0:c.headers)&&new Headers(t.init.headers)}}if(yd(t)){var o,m;return{type:de.data,data:t.data,statusCode:(o=t.init)==null?void 0:o.status,headers:(m=t.init)!=null&&m.headers?new Headers(t.init.headers):void 0}}return{type:de.data,data:t}}function Z0(e,t,a,l,n,i){let u=e.headers.get("Location");if(J(u,"Redirects returned/thrown from loaders/actions must have a Location header"),!os.test(u)){let r=l.slice(0,l.findIndex(c=>c.route.id===a)+1);u=$c(new URL(t.url),r,n,!0,u,i),e.headers.set("Location",u)}return e}function sd(e,t,a){if(os.test(e)){let l=e,n=l.startsWith("//")?new URL(t.protocol+l):new URL(l),i=Ai(n.pathname,a)!=null;if(n.origin===t.origin&&i)return n.pathname+n.search+n.hash}return e}function xl(e,t,a,l){let n=e.createURL(Dp(t)).toString(),i={signal:a};if(l&&Ht(l.formMethod)){let{formMethod:u,formEncType:r}=l;i.method=u.toUpperCase(),r==="application/json"?(i.headers=new Headers({"Content-Type":r}),i.body=JSON.stringify(l.json)):r==="text/plain"?i.body=l.text:r==="application/x-www-form-urlencoded"&&l.formData?i.body=to(l.formData):i.body=l.formData}return new Request(n,i)}function to(e){let t=new URLSearchParams;for(let[a,l]of e.entries())t.append(a,typeof l=="string"?l:l.name);return t}function fd(e){let t=new FormData;for(let[a,l]of e.entries())t.append(a,l);return t}function K0(e,t,a,l,n){let i={},u=null,r,c=!1,o={},m=a&&mt(a[1])?a[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let f=d.route.id,h=t[f];if(J(!al(h),"Cannot handle redirect results in processLoaderData"),mt(h)){let T=h.error;m!==void 0&&(T=m,m=void 0),u=u||{};{let _=tl(e,f);u[_.route.id]==null&&(u[_.route.id]=T)}i[f]=void 0,c||(c=!0,r=si(h.error)?h.error.status:500),h.headers&&(o[f]=h.headers)}else La(h)?(l.set(f,h.deferredData),i[f]=h.deferredData.data,h.statusCode!=null&&h.statusCode!==200&&!c&&(r=h.statusCode),h.headers&&(o[f]=h.headers)):(i[f]=h.data,h.statusCode&&h.statusCode!==200&&!c&&(r=h.statusCode),h.headers&&(o[f]=h.headers))}),m!==void 0&&a&&(u={[a[0]]:m},i[a[0]]=void 0),{loaderData:i,errors:u,statusCode:r||200,loaderHeaders:o}}function dd(e,t,a,l,n,i,u){let{loaderData:r,errors:c}=K0(t,a,l,u);return n.forEach(o=>{let{key:m,match:d,controller:f}=o,h=i[m];if(J(h,"Did not find corresponding fetcher result"),!(f&&f.signal.aborted))if(mt(h)){let T=tl(e.matches,d==null?void 0:d.route.id);c&&c[T.route.id]||(c=Ce({},c,{[T.route.id]:h.error})),e.fetchers.delete(m)}else if(al(h))J(!1,"Unhandled fetcher revalidation redirect");else if(La(h))J(!1,"Unhandled fetcher deferred data");else{let T=ya(h.data);e.fetchers.set(m,T)}}),{loaderData:r,errors:c}}function md(e,t,a,l){let n=Ce({},t);for(let i of a){let u=i.route.id;if(t.hasOwnProperty(u)?t[u]!==void 0&&(n[u]=t[u]):e[u]!==void 0&&i.route.loader&&(n[u]=e[u]),l&&l.hasOwnProperty(u))break}return n}function hd(e){return e?mt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function tl(e,t){return(t?e.slice(0,e.findIndex(l=>l.route.id===t)+1):[...e]).reverse().find(l=>l.route.hasErrorBoundary===!0)||e[0]}function pd(e){let t=e.length===1?e[0]:e.find(a=>a.index||!a.path||a.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function rt(e,t){let{pathname:a,routeId:l,method:n,type:i,message:u}=t===void 0?{}:t,r="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(r="Bad Request",n&&a&&l?c="You made a "+n+' request to "'+a+'" but '+('did not provide a `loader` for route "'+l+'", ')+"so there is no way to handle the request.":i==="defer-action"?c="defer() is not supported in actions":i==="invalid-body"&&(c="Unable to encode submission body")):e===403?(r="Forbidden",c='Route "'+l+'" does not match URL "'+a+'"'):e===404?(r="Not Found",c='No route matches URL "'+a+'"'):e===405&&(r="Method Not Allowed",n&&a&&l?c="You made a "+n.toUpperCase()+' request to "'+a+'" but '+('did not provide an `action` for route "'+l+'", ')+"so there is no way to handle the request.":n&&(c='Invalid request method "'+n.toUpperCase()+'"')),new Vu(e||500,r,new Error(c),!0)}function Ii(e){let t=Object.entries(e);for(let a=t.length-1;a>=0;a--){let[l,n]=t[a];if(al(n))return{key:l,result:n}}}function Dp(e){let t=typeof e=="string"?da(e):e;return Ci(Ce({},t,{hash:""}))}function P0(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function J0(e){return Np(e.result)&&N0.has(e.result.status)}function La(e){return e.type===de.deferred}function mt(e){return e.type===de.error}function al(e){return(e&&e.type)===de.redirect}function yd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function F0(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Np(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function I0(e){return D0.has(e.toLowerCase())}function Ht(e){return B0.has(e.toLowerCase())}async function W0(e,t,a,l,n){let i=Object.entries(t);for(let u=0;u<i.length;u++){let[r,c]=i[u],o=e.find(f=>(f==null?void 0:f.route.id)===r);if(!o)continue;let m=l.find(f=>f.route.id===o.route.id),d=m!=null&&!Bp(m,o)&&(n&&n[o.route.id])!==void 0;La(c)&&d&&await ss(c,a,!1).then(f=>{f&&(t[r]=f)})}}async function $0(e,t,a){for(let l=0;l<a.length;l++){let{key:n,routeId:i,controller:u}=a[l],r=t[n];e.find(o=>(o==null?void 0:o.route.id)===i)&&La(r)&&(J(u,"Expected an AbortController for revalidating fetcher deferred result"),await ss(r,u.signal,!0).then(o=>{o&&(t[n]=o)}))}}async function ss(e,t,a){if(a===void 0&&(a=!1),!await e.deferredData.resolveData(t)){if(a)try{return{type:de.data,data:e.deferredData.unwrappedData}}catch(n){return{type:de.error,error:n}}return{type:de.data,data:e.deferredData.data}}}function fs(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Nn(e,t){let a=typeof t=="string"?da(t).search:t.search;if(e[e.length-1].route.index&&fs(a||""))return e[e.length-1];let l=Lp(e);return l[l.length-1]}function vd(e){let{formMethod:t,formAction:a,formEncType:l,text:n,formData:i,json:u}=e;if(!(!t||!a||!l)){if(n!=null)return{formMethod:t,formAction:a,formEncType:l,formData:void 0,json:void 0,text:n};if(i!=null)return{formMethod:t,formAction:a,formEncType:l,formData:i,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:a,formEncType:l,formData:void 0,json:u,text:void 0}}}function ac(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function eb(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function On(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function tb(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ya(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ab(e,t){try{let a=e.sessionStorage.getItem(Rp);if(a){let l=JSON.parse(a);for(let[n,i]of Object.entries(l||{}))i&&Array.isArray(i)&&t.set(n,new Set(i||[]))}}catch{}}function lb(e,t){if(t.size>0){let a={};for(let[l,n]of t)a[l]=[...n];try{e.sessionStorage.setItem(Rp,JSON.stringify(a))}catch(l){ml(!1,"Failed to save applied view transitions in sessionStorage ("+l+").")}}}/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},fi.apply(this,arguments)}const fr=O.createContext(null),Hp=O.createContext(null),xi=O.createContext(null),dr=O.createContext(null),bl=O.createContext({outlet:null,matches:[],isDataRoute:!1}),Up=O.createContext(null);function Oi(){return O.useContext(dr)!=null}function ds(){return Oi()||J(!1),O.useContext(dr).location}function wp(e){O.useContext(xi).static||O.useLayoutEffect(e)}function jp(){let{isDataRoute:e}=O.useContext(bl);return e?pb():nb()}function nb(){Oi()||J(!1);let e=O.useContext(fr),{basename:t,future:a,navigator:l}=O.useContext(xi),{matches:n}=O.useContext(bl),{pathname:i}=ds(),u=JSON.stringify(rs(n,a.v7_relativeSplatPath)),r=O.useRef(!1);return wp(()=>{r.current=!0}),O.useCallback(function(o,m){if(m===void 0&&(m={}),!r.current)return;if(typeof o=="number"){l.go(o);return}let d=cs(o,JSON.parse(u),i,m.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ja([t,d.pathname])),(m.replace?l.replace:l.push)(d,m.state,m)},[t,l,u,i,e])}function ib(e,t){return kp(e,t)}function kp(e,t,a,l){Oi()||J(!1);let{navigator:n}=O.useContext(xi),{matches:i}=O.useContext(bl),u=i[i.length-1],r=u?u.params:{};u&&u.pathname;let c=u?u.pathnameBase:"/";u&&u.route;let o=ds(),m;if(t){var d;let x=typeof t=="string"?da(t):t;c==="/"||(d=x.pathname)!=null&&d.startsWith(c)||J(!1),m=x}else m=o;let f=m.pathname||"/",h=f;if(c!=="/"){let x=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let T=el(e,{pathname:h}),_=sb(T&&T.map(x=>Object.assign({},x,{params:Object.assign({},r,x.params),pathname:ja([c,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:ja([c,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,a,l);return t&&_?O.createElement(dr.Provider,{value:{location:fi({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Me.Pop}},_):_}function ub(){let e=hb(),t=si(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),a?O.createElement("pre",{style:n},a):null,null)}const rb=O.createElement(ub,null);class cb extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){console.error("React Router caught the following error during render",t,a)}render(){return this.state.error!==void 0?O.createElement(bl.Provider,{value:this.props.routeContext},O.createElement(Up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ob(e){let{routeContext:t,match:a,children:l}=e,n=O.useContext(fr);return n&&n.static&&n.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=a.route.id),O.createElement(bl.Provider,{value:t},l)}function sb(e,t,a,l){var n;if(t===void 0&&(t=[]),a===void 0&&(a=null),l===void 0&&(l=null),e==null){var i;if(!a)return null;if(a.errors)e=a.matches;else if((i=l)!=null&&i.v7_partialHydration&&t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let u=e,r=(n=a)==null?void 0:n.errors;if(r!=null){let m=u.findIndex(d=>d.route.id&&(r==null?void 0:r[d.route.id])!==void 0);m>=0||J(!1),u=u.slice(0,Math.min(u.length,m+1))}let c=!1,o=-1;if(a&&l&&l.v7_partialHydration)for(let m=0;m<u.length;m++){let d=u[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=m),d.route.id){let{loaderData:f,errors:h}=a,T=d.route.loader&&f[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||T){c=!0,o>=0?u=u.slice(0,o+1):u=[u[0]];break}}}return u.reduceRight((m,d,f)=>{let h,T=!1,_=null,x=null;a&&(h=r&&d.route.id?r[d.route.id]:void 0,_=d.route.errorElement||rb,c&&(o<0&&f===0?(yb("route-fallback"),T=!0,x=null):o===f&&(T=!0,x=d.route.hydrateFallbackElement||null)));let p=t.concat(u.slice(0,f+1)),s=()=>{let g;return h?g=_:T?g=x:d.route.Component?g=O.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=m,O.createElement(ob,{match:d,routeContext:{outlet:m,matches:p,isDataRoute:a!=null},children:g})};return a&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?O.createElement(cb,{location:a.location,revalidation:a.revalidation,component:_,error:h,children:s(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):s()},null)}var qp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qp||{}),Gp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gp||{});function fb(e){let t=O.useContext(fr);return t||J(!1),t}function db(e){let t=O.useContext(Hp);return t||J(!1),t}function mb(e){let t=O.useContext(bl);return t||J(!1),t}function Yp(e){let t=mb(),a=t.matches[t.matches.length-1];return a.route.id||J(!1),a.route.id}function hb(){var e;let t=O.useContext(Up),a=db(),l=Yp();return t!==void 0?t:(e=a.errors)==null?void 0:e[l]}function pb(){let{router:e}=fb(qp.UseNavigateStable),t=Yp(Gp.UseNavigateStable),a=O.useRef(!1);return wp(()=>{a.current=!0}),O.useCallback(function(n,i){i===void 0&&(i={}),a.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,fi({fromRouteId:t},i)))},[e,t])}const gd={};function yb(e,t,a){gd[e]||(gd[e]=!0)}function vb(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function gb(e){let{to:t,replace:a,state:l,relative:n}=e;Oi()||J(!1);let{future:i,static:u}=O.useContext(xi),{matches:r}=O.useContext(bl),{pathname:c}=ds(),o=jp(),m=cs(t,rs(r,i.v7_relativeSplatPath),c,n==="path"),d=JSON.stringify(m);return O.useEffect(()=>o(JSON.parse(d),{replace:a,state:l,relative:n}),[o,d,n,a,l]),null}function jt(e){J(!1)}function bb(e){let{basename:t="/",children:a=null,location:l,navigationType:n=Me.Pop,navigator:i,static:u=!1,future:r}=e;Oi()&&J(!1);let c=t.replace(/^\/*/,"/"),o=O.useMemo(()=>({basename:c,navigator:i,static:u,future:fi({v7_relativeSplatPath:!1},r)}),[c,r,i,u]);typeof l=="string"&&(l=da(l));let{pathname:m="/",search:d="",hash:f="",state:h=null,key:T="default"}=l,_=O.useMemo(()=>{let x=Ai(m,c);return x==null?null:{location:{pathname:x,search:d,hash:f,state:h,key:T},navigationType:n}},[c,m,d,f,h,T,n]);return _==null?null:O.createElement(xi.Provider,{value:o},O.createElement(dr.Provider,{children:a,value:_}))}function Sb(e){let{children:t,location:a}=e;return ib(ao(t),a)}new Promise(()=>{});function ao(e,t){t===void 0&&(t=[]);let a=[];return O.Children.forEach(e,(l,n)=>{if(!O.isValidElement(l))return;let i=[...t,n];if(l.type===O.Fragment){a.push.apply(a,ao(l.props.children,i));return}l.type!==jt&&J(!1),!l.props.index||!l.props.children||J(!1);let u={id:l.props.id||i.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(u.children=ao(l.props.children,i)),a.push(u)}),a}function Eb(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:O.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:O.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:O.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qu(){return Qu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Qu.apply(this,arguments)}const Tb="6";try{window.__reactRouterVersion=Tb}catch{}function _b(e,t){return j0({basename:t==null?void 0:t.basename,future:Qu({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:r0({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Cb(),routes:e,mapRouteProperties:Eb,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function Cb(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Qu({},t,{errors:Ab(t.errors)})),t}function Ab(e){if(!e)return null;let t=Object.entries(e),a={};for(let[l,n]of t)if(n&&n.__type==="RouteErrorResponse")a[l]=new Vu(n.status,n.statusText,n.data,n.internal===!0);else if(n&&n.__type==="Error"){if(n.__subType){let i=window[n.__subType];if(typeof i=="function")try{let u=new i(n.message);u.stack="",a[l]=u}catch{}}if(a[l]==null){let i=new Error(n.message);i.stack="",a[l]=i}}else a[l]=n;return a}const xb=O.createContext({isTransitioning:!1}),Ob=O.createContext(new Map),Lb="startTransition",bd=Ay[Lb],Mb="flushSync",Sd=By[Mb];function Rb(e){bd?bd(e):e()}function Ln(e){Sd?Sd(e):e()}class Bb{constructor(){this.status="pending",this.promise=new Promise((t,a)=>{this.resolve=l=>{this.status==="pending"&&(this.status="resolved",t(l))},this.reject=l=>{this.status==="pending"&&(this.status="rejected",a(l))}})}}function zb(e){let{fallbackElement:t,router:a,future:l}=e,[n,i]=O.useState(a.state),[u,r]=O.useState(),[c,o]=O.useState({isTransitioning:!1}),[m,d]=O.useState(),[f,h]=O.useState(),[T,_]=O.useState(),x=O.useRef(new Map),{v7_startTransition:p}=l||{},s=O.useCallback(L=>{p?Rb(L):L()},[p]),g=O.useCallback((L,N)=>{let{deletedFetchers:B,flushSync:ae,viewTransitionOpts:le}=N;L.fetchers.forEach((ne,ie)=>{ne.data!==void 0&&x.current.set(ie,ne.data)}),B.forEach(ne=>x.current.delete(ne));let Q=a.window==null||a.window.document==null||typeof a.window.document.startViewTransition!="function";if(!le||Q){ae?Ln(()=>i(L)):s(()=>i(L));return}if(ae){Ln(()=>{f&&(m&&m.resolve(),f.skipTransition()),o({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let ne=a.window.document.startViewTransition(()=>{Ln(()=>i(L))});ne.finished.finally(()=>{Ln(()=>{d(void 0),h(void 0),r(void 0),o({isTransitioning:!1})})}),Ln(()=>h(ne));return}f?(m&&m.resolve(),f.skipTransition(),_({state:L,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(r(L),o({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[a.window,f,m,x,s]);O.useLayoutEffect(()=>a.subscribe(g),[a,g]),O.useEffect(()=>{c.isTransitioning&&!c.flushSync&&d(new Bb)},[c]),O.useEffect(()=>{if(m&&u&&a.window){let L=u,N=m.promise,B=a.window.document.startViewTransition(async()=>{s(()=>i(L)),await N});B.finished.finally(()=>{d(void 0),h(void 0),r(void 0),o({isTransitioning:!1})}),h(B)}},[s,u,m,a.window]),O.useEffect(()=>{m&&u&&n.location.key===u.location.key&&m.resolve()},[m,f,n.location,u]),O.useEffect(()=>{!c.isTransitioning&&T&&(r(T.state),o({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}),_(void 0))},[c.isTransitioning,T]),O.useEffect(()=>{},[]);let S=O.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:L=>a.navigate(L),push:(L,N,B)=>a.navigate(L,{state:N,preventScrollReset:B==null?void 0:B.preventScrollReset}),replace:(L,N,B)=>a.navigate(L,{replace:!0,state:N,preventScrollReset:B==null?void 0:B.preventScrollReset})}),[a]),M=a.basename||"/",G=O.useMemo(()=>({router:a,navigator:S,static:!1,basename:M}),[a,S,M]),v=O.useMemo(()=>({v7_relativeSplatPath:a.future.v7_relativeSplatPath}),[a.future.v7_relativeSplatPath]);return O.useEffect(()=>vb(l,a.future),[l,a.future]),O.createElement(O.Fragment,null,O.createElement(fr.Provider,{value:G},O.createElement(Hp.Provider,{value:n},O.createElement(Ob.Provider,{value:x.current},O.createElement(xb.Provider,{value:c},O.createElement(bb,{basename:M,location:n.location,navigationType:n.historyAction,navigator:S,future:v},n.initialized||a.future.v7_partialHydration?O.createElement(Db,{routes:a.routes,future:a.future,state:n}):t))))),null)}const Db=O.memo(Nb);function Nb(e){let{routes:t,future:a,state:l}=e;return kp(t,void 0,l,a)}var Ed;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var Td;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Td||(Td={}));function Hb(){const e=jp(),t=l=>{const n=document.getElementById(l);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},a=()=>{e("/configurator")};return O.useEffect(()=>{document.body.classList.add("home-page-active"),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto";const l=document.getElementById("year");l&&(l.textContent=new Date().getFullYear().toString());const n=[{id:"shell",side:"front"},{id:"psButton",side:"front"},{id:"share",side:"front"},{id:"options",side:"front"},{id:"faceButtons",side:"front"},{id:"stickL",side:"front"},{id:"stickR",side:"front"},{id:"touchpad",side:"front"},{id:"bumpers",side:"front"},{id:"trimpiece",side:"front"}],i=[{id:"backShellMain",side:"back"},{id:"backHandles",side:"back"},{id:"backTriggers",side:"back"}],u=[...n,...i],r={psButton:4,share:3,options:3,faceButtons:6,stickL:5,stickR:5,touchpad:10,bumpers:8,trimpiece:12,shell:15,backShellMain:15,backHandles:10,backTriggers:8},c=new Set(["shell","trimpiece","backShellMain","backHandles"]),o=[{hex:"#FF7A21",name_en:"Orange",name_ar:"برتقالي"},{hex:"#E6D63A",name_en:"Yellow",name_ar:"أصفر"},{hex:"#6ECFFF",name_en:"Light Blue",name_ar:"أزرق فاتح"},{hex:"#8E8E8E",name_en:"Steel Gray",name_ar:"رمادي معدني"},{hex:"#0C4BFF",name_en:"Blue",name_ar:"أزرق"},{hex:"#001F63",name_en:"Midnight Blue",name_ar:"أزرق داكن"},{hex:"#C2185B",name_en:"Magenta",name_ar:"ماجنتا"},{hex:"#F5F5F5",name_en:"Soft White",name_ar:"أبيض ناعم"},{hex:"#D400A8",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#0A0A0A",name_en:"Matte Black",name_ar:"أسود مطفي"}],m=[{hex:"#0A0A0A",name_en:"Black",name_ar:"أسود"},{hex:"#D8D8D8",name_en:"Light Gray",name_ar:"رمادي فاتح"},{hex:"#C41E2E",name_en:"Red",name_ar:"أحمر"},{hex:"#2B2C79",name_en:"Dark Blue-Purple",name_ar:"أزرق بنفسجي داكن"},{hex:"#F2D400",name_en:"Yellow",name_ar:"أصفر"},{hex:"#E56A1E",name_en:"Orange",name_ar:"برتقالي"},{hex:"#A6DA8C",name_en:"Mint Green",name_ar:"أخضر نعناعي"},{hex:"#4A23A8",name_en:"Royal Purple",name_ar:"بنفسجي ملكي"},{hex:"#E03875",name_en:"Hot Pink",name_ar:"وردي فاقع"},{hex:"#77CBF7",name_en:"Sky Blue",name_ar:"أزرق سماوي"},{hex:"#C75AC9",name_en:"Pink-Violet",name_ar:"بنفسجي وردي"},{hex:"#5C2DAF",name_en:"Indigo Purple",name_ar:"نيلي بنفسجي"},{hex:"#EDEDED",name_en:"Clear Transparent",name_ar:"شفاف"},{hex:"#D43838",name_en:"Transparent Red",name_ar:"أحمر شفاف"},{hex:"#2448B5",name_en:"Transparent Blue",name_ar:"أزرق شفاف"},{hex:"#68D78B",name_en:"Transparent Green",name_ar:"أخضر شفاف"},{hex:"#4E2B8C",name_en:"Transparent Purple",name_ar:"بنفسجي شفاف"},{hex:"#4A4A4A",name_en:"Gunmetal Gray",name_ar:"رمادي معدني داكن"},{hex:"#8C3B2F",name_en:"Transparent Brown",name_ar:"بني شفاف"},{hex:"#E3E3E3",name_en:"Frosted White",name_ar:"أبيض متجمد"}],d=new Set(["#ededed","#d43838","#2448b5","#68d78b","#4e2b8c","#8c3b2f","#e3e3e3"]),f=[{id:"shell",mask:"/assets/masks/leftShell.png"},{id:"trimpiece",mask:"/assets/masks/centerBody.png"},{id:"faceButtons",mask:"/assets/masks/faceButtons.png"},{id:"stickL",mask:"/assets/masks/stickL.png"},{id:"stickR",mask:"/assets/masks/stickR.png"},{id:"touchpad",mask:"/assets/masks/touchpad.png"},{id:"share",mask:"/assets/masks/share.png"},{id:"options",mask:"/assets/masks/options.png"},{id:"psButton",mask:"/assets/masks/psButton.png"},{id:"bumpers",mask:"/assets/masks/bumperL.png"}];function h(Q){return c.has(Q)?o:m}function T(Q){return Q[Math.floor(Math.random()*Q.length)]}function _(Q,ne){const ie={};let R=0;return u.forEach(H=>{const $=h(H.id),se=T($);ie[H.id]=se,R+=r[H.id]||0}),{id:Q,name:(ne==="ar"?"ذزاع مخصص":"Custom Controller")+" #"+(Q+1),colors:ie,total:R}}function x(Q,ne){const ie=Q.toFixed(2);return ne==="ar"?ie+" د.ب":"BHD "+ie}const p={ar:{navPremade:"تصاميم جاهزة",navContact:"تواصل معنا",navBuildCta:"صمّم ذراعك الآن",heroBadge:"متجر إلكتروني لتخصيص أذرع التحكم",heroTitle:'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',heroSub:"اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.",heroCreateBtn:"ابدأ التصميم",heroPremadeBtn:"استعرض التصاميم الجاهزة",heroNote:"الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.",heroLiveTag:"معاينة فورية",premadeTitle:"تصاميم جاهزة من EZ GAMING",premadeSub:"مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.",contactTitle:"تواصل معنا",contactCardTitle:"أرسل لنا رسالة",contactCardText:"عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.",contactLabelName:"الاسم",contactLabelEmail:"البريد الإلكتروني",contactLabelMessage:"رسالتك",contactSubmit:"إرسال الرسالة",contactMeta:`
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
        `,footerText:"All rights reserved ©",buildTotalLabel:"Total:",preview:"Preview",partNames:{shell:"Shell",trimpiece:"Center",faceButtons:"Face buttons",stickL:"Left stick",stickR:"Right stick",backShellMain:"Back"},formSuccess:"Thank you! Your message has been received. We’ll get back to you shortly."}};let s=localStorage.getItem("ez_lang")||"ar";function g(){document.documentElement.lang=s,document.documentElement.dir=s==="ar"?"rtl":"ltr"}function S(){const Q=p[s];document.querySelectorAll("[data-i18n]").forEach(ie=>{const R=ie.getAttribute("data-i18n");Q[R]&&(ie.textContent=Q[R])}),document.querySelectorAll("[data-i18n-html]").forEach(ie=>{const R=ie.getAttribute("data-i18n-html");Q[R]&&(ie.innerHTML=Q[R])});const ne=document.getElementById("langToggle");ne&&(ne.textContent=s==="ar"?"EN":"عربي")}let M=[];function G(Q){const ne=p[s],ie=document.createElement("article");ie.className="build-card";const R=document.createElement("div");R.className="build-thumb";const Y=document.createElement("div");Y.className="thumb-controller";const H=document.createElement("div");H.className="thumb-base",Y.appendChild(H),f.forEach(Ie=>{const ze=Q.colors[Ie.id];if(!ze)return;const lt=document.createElement("div");lt.className="thumb-layer",lt.style.setProperty("--mask-url",`url('${Ie.mask}')`),lt.style.setProperty("--tint",ze.hex),d.has(ze.hex.toLowerCase())?lt.style.setProperty("--tint-opacity","0.35"):lt.style.setProperty("--tint-opacity","1"),Y.appendChild(lt)}),R.appendChild(Y);const $=document.createElement("div");$.className="build-body";const se=document.createElement("div");se.className="build-title",se.textContent=Q.name;const We=document.createElement("div");We.className="build-price",We.innerHTML=x(Q.total,s);const Xe=document.createElement("div");Xe.className="build-color-row";const Fe=document.createElement("button");return Fe.className="build-cta",Fe.type="button",Fe.textContent=ne.preview,Fe.addEventListener("click",a),$.appendChild(se),$.appendChild(We),$.appendChild(Xe),$.appendChild(Fe),ie.appendChild(R),ie.appendChild($),ie}function v(){const Q=document.getElementById("buildGrid");if(Q){if(Q.innerHTML="",M.length)M=M.map((ne,ie)=>_(ie,s));else for(let ne=0;ne<20;ne++)M.push(_(ne,s));M.forEach(ne=>Q.appendChild(G(ne)))}}function L(Q){s=Q,localStorage.setItem("ez_lang",Q),g(),S(),v()}const N=document.getElementById("langToggle"),B=document.getElementById("contactForm"),ae=()=>{L(s==="ar"?"en":"ar")},le=Q=>{Q.preventDefault(),alert(p[s].formSuccess),B==null||B.reset()};return N==null||N.addEventListener("click",ae),B==null||B.addEventListener("submit",le),g(),S(),v(),()=>{document.body.classList.remove("home-page-active"),document.body.style.overflowY="",document.documentElement.style.overflowY="",N==null||N.removeEventListener("click",ae),B==null||B.removeEventListener("submit",le)}},[e]),z.jsxs("div",{className:"home-page",children:[z.jsxs("header",{className:"top-nav",children:[z.jsx("div",{className:"nav-left",children:z.jsxs("button",{type:"button",className:"nav-left",onClick:()=>e("/"),children:[z.jsx("div",{className:"nav-logo-mark","aria-hidden":"true"}),z.jsx("span",{className:"sr-only",children:"EZ GAMING"})]})}),z.jsxs("div",{className:"nav-right",children:[z.jsx("button",{className:"nav-link",type:"button","data-i18n":"navPremade",onClick:()=>t("premadeSection")}),z.jsx("button",{className:"nav-link",type:"button","data-i18n":"navContact",onClick:()=>t("contactSection")}),z.jsx("button",{className:"nav-cta",type:"button","data-i18n":"navBuildCta",onClick:a}),z.jsx("button",{className:"nav-link nav-lang",id:"langToggle",type:"button",children:"EN"})]})]}),z.jsxs("section",{className:"hero",children:[z.jsx("video",{className:"hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:z.jsx("source",{src:"/assets/back.mp4",type:"video/mp4"})}),z.jsx("div",{className:"hero-overlay"}),z.jsx("div",{className:"hero-inner",children:z.jsxs("div",{children:[z.jsx("h1",{className:"hero-title","data-i18n-html":"heroTitle"}),z.jsx("p",{className:"hero-sub","data-i18n":"heroSub"}),z.jsxs("div",{className:"hero-actions",children:[z.jsx("button",{className:"hero-btn primary",type:"button","data-i18n":"heroCreateBtn",onClick:a}),z.jsx("button",{className:"hero-btn secondary",type:"button","data-i18n":"heroPremadeBtn",onClick:()=>t("premadeSection")})]})]})})]}),z.jsxs("section",{className:"section",id:"premadeSection",children:[z.jsx("div",{className:"section-header",children:z.jsx("div",{children:z.jsx("div",{className:"section-title","data-i18n":"premadeTitle"})})}),z.jsx("div",{className:"build-grid",id:"buildGrid"})]}),z.jsxs("section",{className:"section",id:"contactSection",children:[z.jsx("div",{className:"section-header",children:z.jsx("div",{className:"section-title","data-i18n":"contactTitle"})}),z.jsxs("div",{className:"contact-grid",children:[z.jsxs("div",{className:"contact-card",children:[z.jsx("h3",{"data-i18n":"contactCardTitle"}),z.jsx("p",{"data-i18n":"contactCardText"}),z.jsxs("form",{id:"contactForm",children:[z.jsxs("div",{className:"contact-form-group",children:[z.jsx("label",{className:"contact-label",htmlFor:"name","data-i18n":"contactLabelName"}),z.jsx("input",{className:"contact-input",id:"name",name:"name",required:!0})]}),z.jsxs("div",{className:"contact-form-group",children:[z.jsx("label",{className:"contact-label",htmlFor:"email","data-i18n":"contactLabelEmail"}),z.jsx("input",{className:"contact-input",id:"email",name:"email",type:"email",required:!0})]}),z.jsxs("div",{className:"contact-form-group",children:[z.jsx("label",{className:"contact-label",htmlFor:"message","data-i18n":"contactLabelMessage"}),z.jsx("textarea",{className:"contact-textarea",id:"message",name:"message",required:!0})]}),z.jsx("button",{className:"contact-submit",type:"submit","data-i18n":"contactSubmit"})]})]}),z.jsx("div",{className:"contact-meta","data-i18n-html":"contactMeta"})]})]}),z.jsxs("footer",{className:"footer",children:[z.jsx("span",{"data-i18n":"footerText"}),z.jsx("span",{id:"year"})]})]})}const Ub=`


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



`,wb=`


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

      const cartItem = {
        id: Date.now(),
        name: cartName,
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
  

`;function jb(){return O.useEffect(()=>{document.body.classList.add("configurator-page-active");const e=document.createElement("script");return e.textContent=wb,document.body.appendChild(e),()=>{document.body.classList.remove("configurator-page-active"),document.body.removeChild(e)}},[]),z.jsx("div",{className:"configurator-page",children:z.jsx("div",{dangerouslySetInnerHTML:{__html:Ub}})})}const kb=`


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
  

`;function Gb(){return O.useEffect(()=>{const e=document.createElement("script");return e.textContent=qb,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),z.jsx("div",{className:"cart-page",children:z.jsx("div",{dangerouslySetInnerHTML:{__html:kb}})})}const Yb=`


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
  

`;function Vb(){return O.useEffect(()=>{const e=document.createElement("script");return e.textContent=Xb,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),z.jsx("div",{className:"checkout-page",children:z.jsx("div",{dangerouslySetInnerHTML:{__html:Yb}})})}const Qb=`
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
`;function Kb(){return O.useEffect(()=>{const e=document.createElement("script");return e.textContent=Zb,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),z.jsx("div",{dangerouslySetInnerHTML:{__html:Qb}})}const Pb=`
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
`;function Fb(){return O.useEffect(()=>{const e=document.createElement("script");return e.textContent=Jb,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),z.jsx("div",{dangerouslySetInnerHTML:{__html:Pb}})}const Ib=`
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
`;function $b(){return O.useEffect(()=>{const e=document.createElement("script");return e.textContent=Wb,document.body.appendChild(e),()=>document.body.removeChild(e)},[]),z.jsx("div",{dangerouslySetInnerHTML:{__html:Ib}})}const eS=`
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
  <div class="card" style="max-width:960px; width:100%; color:#fff; background:rgba(0,0,0,0.45); border:1px solid rgba(255,255,255,0.08);">
    <div class="card-title" id="trackTitle">تتبع الطلب</div>
    <div id="trackStatus" style="margin:8px 0; font-size:0.95rem; opacity:0.9;"></div>
    <div id="stepsList" class="steps-list"></div>
  </div>
</div>

<style>
  .steps-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
    margin-top: 10px;
    position: relative;
  }
  .step-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
  }
  .step-line {
    position: absolute;
    top: 50%;
    left: calc(100% - 6px);
    width: 12px;
    height: 2px;
    background: linear-gradient(90deg, rgba(124,252,0,0.8), rgba(124,252,0,0.2));
  }
  .step-card:last-child .step-line { display: none; }
  .step-icon-wrap {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .step-icon {
    width: 64px;
    height: 64px;
    object-fit: contain;
    filter: none;
    transition: filter 0.2s ease, opacity 0.2s ease;
  }
  .step-card.pending .step-icon {
    filter: grayscale(1) brightness(0.7);
    opacity: 0.7;
  }
  .step-title {
    font-weight: 700;
    text-align: center;
  }
  .step-status {
    font-size: 0.9rem;
    opacity: 0.85;
    text-align: center;
  }
  @media (max-width: 900px) {
    .steps-list { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
  }
  @media (max-width: 640px) {
    .steps-list { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
  }
</style>
`,tS=`
  const statusEl = document.getElementById("trackStatus");
  const stepsListEl = document.getElementById("stepsList");

  function setStatus(msg) {
    statusEl.textContent = msg;
  }

  function addStep(label, value, done, icon, hasLine) {
    const card = document.createElement("div");
    card.className = "step-card" + (done ? " step-done" : " pending");
    const iconWrap = document.createElement("div");
    iconWrap.className = "step-icon-wrap";
    const img = document.createElement("img");
    img.className = "step-icon";
    img.src = icon;
    img.alt = label;
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

    try {
      const so = await fetchJson("/zoho/inventory/v1/salesorders/" + encodeURIComponent(orderId), "salesorder");
      const salesorder = so.salesorder || {};
      const soId = salesorder.salesorder_id ? String(salesorder.salesorder_id) : String(orderId);
      const soNumber = salesorder.salesorder_number || "";
      const soStatus = salesorder.status || "Unknown";
      const stepIcons = {
        order: "/assets/track/order.png",
        process: "/assets/track/process.png",
        ontheway: "/assets/track/ontheway.png",
        delivered: "/assets/track/delivered.png"
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
      const pkgSummary = packages.length ? packages.length + " total" : "Not created yet";
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

      // Render steps horizontally with icons and connectors
      stepsListEl.innerHTML = "";
      addStep("Order Received", soStatus, orderDone, stepIcons.order, true);
      addStep("Order Processing", pkgSummary, processingDone, stepIcons.process, true);
      addStep("On the way", shipments.length ? shipments.length + " total" : "Not created yet", onTheWayDone, stepIcons.ontheway, true);
      addStep("Delivered", deliveredCount ? deliveredCount + " delivered" : "Not delivered yet", deliveredDone, stepIcons.delivered, false);

      setStatus("Order loaded.");
    } catch (err) {
      console.error(err);
      setStatus("Failed to load order: " + err.message);
    }
  }

  load();
`;function aS(){return O.useEffect(()=>{const e=document.createElement("script");return e.textContent=tS,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),z.jsx("div",{dangerouslySetInnerHTML:{__html:eS}})}function lS(){return z.jsxs(Sb,{children:[z.jsx(jt,{path:"/",element:z.jsx(Hb,{})}),z.jsx(jt,{path:"/configurator",element:z.jsx(jb,{})}),z.jsx(jt,{path:"/cart",element:z.jsx(Gb,{})}),z.jsx(jt,{path:"/checkout",element:z.jsx(Vb,{})}),z.jsx(jt,{path:"/payment",element:z.jsx(Kb,{})}),z.jsx(jt,{path:"/payment/confirmation",element:z.jsx(Fb,{})}),z.jsx(jt,{path:"/order-summary",element:z.jsx($b,{})}),z.jsx(jt,{path:"/trackorder",element:z.jsx(aS,{})}),z.jsx(jt,{path:"*",element:z.jsx(gb,{to:"/",replace:!0})})]})}const nS=_b([{path:"/*",element:z.jsx(lS,{})}],{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}});u0.createRoot(document.getElementById("root")).render(z.jsx(zb,{router:nS}));

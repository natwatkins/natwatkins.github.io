import{r as R,a as j}from"./index._OACqPSs.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function y(){if(_)return n;_=1;var a=R(),c=Symbol.for("react.element"),m=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function d(o,e,x){var r,i={},u=null,p=null;x!==void 0&&(u=""+x),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)l.call(e,r)&&!v.hasOwnProperty(r)&&(i[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:c,type:o,key:u,ref:p,props:i,_owner:s.current}}return n.Fragment=m,n.jsx=d,n.jsxs=d,n}var h;function N(){return h||(h=1,f.exports=y()),f.exports}var t=N();const g="Nat Watkins";function w({navLinks:a}){const[c,m]=j.useState(!1),l="text-md font-semibold text-slate-900 hover:text-orange-700 transition-all duration-[0.3s]";return t.jsx("nav",{className:"fixed top-0 left-0 w-full z-50 bg-white shadow-sm",children:t.jsxs("div",{className:"flex justify-between items-center p-5",children:[t.jsx("a",{href:"/",className:"logo text-md font-bold",children:g}),t.jsx("div",{className:"links",children:t.jsx("ul",{className:"flex items-center gap-7",children:a.map(s=>t.jsx("li",{className:l,children:t.jsx("a",{href:`${s.href}`,children:s.name})},s.name))})})]})})}export{w as default};

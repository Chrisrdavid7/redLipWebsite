import{v as K,x as A,y as N,P as b,z as l,A as O,r as j,B as R,L as B,C as S,m as T,R as I,D as h,E as x,G as L,H as C,I as F,S as E,J as w,F as V,T as q,K as z,M as D,_ as G,o as J,c as M,b as y,N as Q,O as U}from"./DZO9Hcqt.js";const W=K({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const o=e.renderKey,n=e.route,r={};for(const a in e.route)Object.defineProperty(r,a,{get:()=>o===e.renderKey?e.route[a]:n[a],enumerable:!0});return A(b,N(r)),()=>l(e.vnode,{ref:e.vnodeRef})}}),X=K({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:o,slots:n,expose:r}){const a=O(),i=j(),s=R(b,null);let u;r({pageRef:i});const d=R(B,null);let c;const v=a.deferHydration();if(a.isHydrating){const t=a.hooks.hookOnce("app:error",v);S().beforeEach(t)}return e.pageKey&&T(()=>e.pageKey,(t,m)=>{t!==m&&a.callHook("page:loading:start")}),()=>l(I,{name:e.name,route:e.route,...o},{default:t=>{const m=Z(s,t.route,t.Component),p=s&&s.matched.length===t.route.matched.length;if(!t.Component){if(c&&!p)return c;v();return}if(c&&d&&!d.isCurrent(t.route))return c;if(m&&s&&(!d||d!=null&&d.isCurrent(s)))return p?c:null;const f=h(t,e.pageKey);!a.isHydrating&&!$(s,t.route,t.Component)&&u===f&&a.callHook("page:loading:end"),u=f;const g=!!(e.transition??t.route.meta.pageTransition??x),H=g&&Y([e.transition,t.route.meta.pageTransition,x,{onAfterLeave:()=>{a.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),_=e.keepalive??t.route.meta.keepalive??L;return c=C(q,g&&H,F(_,l(E,{suspensible:!0,onPending:()=>a.callHook("page:start",t.Component),onResolve:()=>{w(()=>a.callHook("page:finish",t.Component).then(()=>a.callHook("page:loading:end")).finally(v))}},{default:()=>{const k=l(W,{key:f||void 0,vnode:n.default?l(V,void 0,n.default(t)):t.Component,route:t.route,renderKey:f||void 0,trackRootNodes:g,vnodeRef:i});return _&&(k.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),k}}))).default(),c}})}});function Y(e){const o=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?z(n.onAfterLeave):void 0}));return D(...o)}function Z(e,o,n){if(!e)return!1;const r=o.matched.findIndex(a=>{var i;return((i=a.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:o.matched.slice(0,r).some((a,i)=>{var s,u,d;return((s=a.components)==null?void 0:s.default)!==((d=(u=e.matched[i])==null?void 0:u.components)==null?void 0:d.default)})||n&&h({route:o,Component:n})!==h({route:e,Component:n})}function $(e,o,n){return e?o.matched.findIndex(a=>{var i;return((i=a.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<o.matched.length-1:!1}const P={class:"layout"},ee={__name:"default",setup(e){return(o,n)=>{const r=X;return J(),M("div",P,[y(Q),y(r),y(U)])}}},ne=G(ee,[["__scopeId","data-v-2880c930"]]);export{ne as default};
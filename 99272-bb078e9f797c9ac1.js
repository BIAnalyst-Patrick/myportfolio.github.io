"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99272],{46196:function(e,t,r){r.d(t,{M:function(){return n}});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}},89454:function(e,t,r){r.d(t,{VY:function(){return N},fC:function(){return R},xz:function(){return T}});var n=r(7653),o=r(46196),l=r(99933),i=r(47178),a=r(81523),u=r(94492),s=r(78378),c=r(65622),d=r(17321),f=r(27573),p="Collapsible",[v,h]=(0,l.b)(p),[m,w]=v(p),g=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:o,defaultOpen:l,disabled:a,onOpenChange:u,...c}=e,[p=!1,v]=(0,i.T)({prop:o,defaultProp:l,onChange:u});return(0,f.jsx)(m,{scope:r,disabled:a,contentId:(0,d.M)(),open:p,onOpenToggle:n.useCallback(()=>v(e=>!e),[v]),children:(0,f.jsx)(s.WV.div,{"data-state":C(p),"data-disabled":a?"":void 0,...c,ref:t})})});g.displayName=p;var b="CollapsibleTrigger",y=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,l=w(b,r);return(0,f.jsx)(s.WV.button,{type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":C(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled,...n,ref:t,onClick:(0,o.M)(e.onClick,l.onOpenToggle)})});y.displayName=b;var S="CollapsibleContent",E=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=w(S,e.__scopeCollapsible);return(0,f.jsx)(c.z,{present:r||o.open,children:e=>{let{present:r}=e;return(0,f.jsx)(x,{...n,ref:t,present:r})}})});E.displayName=S;var x=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:o,children:l,...i}=e,c=w(S,r),[d,p]=n.useState(o),v=n.useRef(null),h=(0,u.e)(t,v),m=n.useRef(0),g=m.current,b=n.useRef(0),y=b.current,E=c.open||d,x=n.useRef(E),R=n.useRef();return n.useEffect(()=>{let e=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.b)(()=>{let e=v.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();m.current=t.height,b.current=t.width,x.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),p(o)}},[c.open,o]),(0,f.jsx)(s.WV.div,{"data-state":C(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!E,...i,ref:h,style:{"--radix-collapsible-content-height":g?"".concat(g,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:E&&l})});function C(e){return e?"open":"closed"}var R=g,T=y,N=E},94492:function(e,t,r){r.d(t,{F:function(){return o},e:function(){return l}});var n=r(7653);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return n.useCallback(o(...e),e)}},99933:function(e,t,r){r.d(t,{b:function(){return l}});var n=r(7653),o=r(27573);function l(e,t=[]){let r=[],l=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return l.scopeName=e,[function(t,l){let i=n.createContext(l),a=r.length;r=[...r,l];let u=t=>{let{scope:r,children:l,...u}=t,s=r?.[e]?.[a]||i,c=n.useMemo(()=>u,Object.values(u));return(0,o.jsx)(s.Provider,{value:c,children:l})};return u.displayName=t+"Provider",[u,function(r,o){let u=o?.[e]?.[a]||i,s=n.useContext(u);if(s)return s;if(void 0!==l)return l;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(l,...t)]}},21004:function(e,t,r){r.d(t,{gm:function(){return l}});var n=r(7653);r(27573);var o=n.createContext(void 0);function l(e){let t=n.useContext(o);return e||t||"ltr"}},17321:function(e,t,r){r.d(t,{M:function(){return u}});var n,o=r(7653),l=r(81523),i=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function u(e){let[t,r]=o.useState(i());return(0,l.b)(()=>{e||r(e=>e??String(a++))},[e]),e||(t?`radix-${t}`:"")}},65622:function(e,t,r){r.d(t,{z:function(){return i}});var n=r(7653),o=r(94492),l=r(81523),i=e=>{var t,r;let i,u;let{present:s,children:c}=e,d=function(e){var t,r;let[o,i]=n.useState(),u=n.useRef({}),s=n.useRef(e),c=n.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=a(u.current);c.current="mounted"===d?e:"none"},[d]),(0,l.b)(()=>{let t=u.current,r=s.current;if(r!==e){let n=c.current,o=a(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,l.b)(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=a(u.current).includes(e.animationName);if(e.target===o&&n&&(f("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},l=e=>{e.target===o&&(c.current=a(u.current))};return o.addEventListener("animationstart",l),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",l),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:n.useCallback(e=>{e&&(u.current=getComputedStyle(e)),i(e)},[])}}(s),f="function"==typeof c?c({present:d.isPresent}):n.Children.only(c),p=(0,o.e)(d.ref,(i=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?f.ref:(i=null===(r=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in i&&i.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof c||d.isPresent?n.cloneElement(f,{ref:p}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},78378:function(e,t,r){r.d(t,{WV:function(){return a},jH:function(){return u}});var n=r(7653),o=r(3458),l=r(8828),i=r(27573),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,a=n?l.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(a,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function u(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},11371:function(e,t,r){r.d(t,{fC:function(){return X},LW:function(){return $},bU:function(){return q},l_:function(){return B}});var n=r(7653),o=r(78378),l=r(65622),i=r(99933),a=r(94492),u=r(523),s=r(21004),c=r(81523),d=r(46196),f=r(27573),p="ScrollArea",[v,h]=(0,i.b)(p),[m,w]=v(p),g=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,type:l="hover",dir:i,scrollHideDelay:u=600,...c}=e,[d,p]=n.useState(null),[v,h]=n.useState(null),[w,g]=n.useState(null),[b,y]=n.useState(null),[S,E]=n.useState(null),[x,C]=n.useState(0),[R,T]=n.useState(0),[N,P]=n.useState(!1),[j,_]=n.useState(!1),L=(0,a.e)(t,e=>p(e)),W=(0,s.gm)(i);return(0,f.jsx)(m,{scope:r,type:l,dir:W,scrollHideDelay:u,scrollArea:d,viewport:v,onViewportChange:h,content:w,onContentChange:g,scrollbarX:b,onScrollbarXChange:y,scrollbarXEnabled:N,onScrollbarXEnabledChange:P,scrollbarY:S,onScrollbarYChange:E,scrollbarYEnabled:j,onScrollbarYEnabledChange:_,onCornerWidthChange:C,onCornerHeightChange:T,children:(0,f.jsx)(o.WV.div,{dir:W,...c,ref:L,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":R+"px",...e.style}})})});g.displayName=p;var b="ScrollAreaViewport",y=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,children:l,nonce:i,...u}=e,s=w(b,r),c=n.useRef(null),d=(0,a.e)(t,c,s.onViewportChange);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),(0,f.jsx)(o.WV.div,{"data-radix-scroll-area-viewport":"",...u,ref:d,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,f.jsx)("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});y.displayName=b;var S="ScrollAreaScrollbar",E=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=w(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,u="horizontal"===e.orientation;return n.useEffect(()=>(u?i(!0):a(!0),()=>{u?i(!1):a(!1)}),[u,i,a]),"hover"===l.type?(0,f.jsx)(x,{...o,ref:t,forceMount:r}):"scroll"===l.type?(0,f.jsx)(C,{...o,ref:t,forceMount:r}):"auto"===l.type?(0,f.jsx)(R,{...o,ref:t,forceMount:r}):"always"===l.type?(0,f.jsx)(T,{...o,ref:t}):null});E.displayName=S;var x=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,i=w(S,e.__scopeScrollArea),[a,u]=n.useState(!1);return n.useEffect(()=>{let e=i.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),u(!0)},n=()=>{t=window.setTimeout(()=>u(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[i.scrollArea,i.scrollHideDelay]),(0,f.jsx)(l.z,{present:r||a,children:(0,f.jsx)(R,{"data-state":a?"visible":"hidden",...o,ref:t})})}),C=n.forwardRef((e,t)=>{var r,o;let{forceMount:i,...a}=e,u=w(S,e.__scopeScrollArea),s="horizontal"===e.orientation,c=F(()=>v("SCROLL_END"),100),[p,v]=(r="hidden",o={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},n.useReducer((e,t)=>{let r=o[e][t];return null!=r?r:e},r));return n.useEffect(()=>{if("idle"===p){let e=window.setTimeout(()=>v("HIDE"),u.scrollHideDelay);return()=>window.clearTimeout(e)}},[p,u.scrollHideDelay,v]),n.useEffect(()=>{let e=u.viewport,t=s?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(v("SCROLL"),c()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[u.viewport,s,v,c]),(0,f.jsx)(l.z,{present:i||"hidden"!==p,children:(0,f.jsx)(T,{"data-state":"hidden"===p?"hidden":"visible",...a,ref:t,onPointerEnter:(0,d.M)(e.onPointerEnter,()=>v("POINTER_ENTER")),onPointerLeave:(0,d.M)(e.onPointerLeave,()=>v("POINTER_LEAVE"))})})}),R=n.forwardRef((e,t)=>{let r=w(S,e.__scopeScrollArea),{forceMount:o,...i}=e,[a,u]=n.useState(!1),s="horizontal"===e.orientation,c=F(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;u(s?e:t)}},10);return Y(r.viewport,c),Y(r.content,c),(0,f.jsx)(l.z,{present:o||a,children:(0,f.jsx)(T,{"data-state":a?"visible":"hidden",...i,ref:t})})}),T=n.forwardRef((e,t)=>{let{orientation:r="vertical",...o}=e,l=w(S,e.__scopeScrollArea),i=n.useRef(null),a=n.useRef(0),[u,s]=n.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=z(u.viewport,u.content),d={...o,sizes:u,onSizesChange:s,hasThumb:!!(c>0&&c<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function p(e,t){return function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=U(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),u=r.content-r.viewport;return k([i,a],"ltr"===n?[0,u]:[-1*u,0])(e)}(e,a.current,u,t)}return"horizontal"===r?(0,f.jsx)(N,{...d,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=V(l.viewport.scrollLeft,u,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=p(e,l.dir))}}):"vertical"===r?(0,f.jsx)(P,{...d,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=V(l.viewport.scrollTop,u);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=p(e))}}):null}),N=n.forwardRef((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=w(S,e.__scopeScrollArea),[u,s]=n.useState(),c=n.useRef(null),d=(0,a.e)(t,c,i.onScrollbarXChange);return n.useEffect(()=>{c.current&&s(getComputedStyle(c.current))},[c]),(0,f.jsx)(L,{"data-orientation":"horizontal",...l,ref:d,sizes:r,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":U(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{c.current&&i.viewport&&u&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:I(u.paddingLeft),paddingEnd:I(u.paddingRight)}})}})}),P=n.forwardRef((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=w(S,e.__scopeScrollArea),[u,s]=n.useState(),c=n.useRef(null),d=(0,a.e)(t,c,i.onScrollbarYChange);return n.useEffect(()=>{c.current&&s(getComputedStyle(c.current))},[c]),(0,f.jsx)(L,{"data-orientation":"vertical",...l,ref:d,sizes:r,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":U(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{c.current&&i.viewport&&u&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:I(u.paddingTop),paddingEnd:I(u.paddingBottom)}})}})}),[j,_]=v(S),L=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,sizes:l,hasThumb:i,onThumbChange:s,onThumbPointerUp:c,onThumbPointerDown:p,onThumbPositionChange:v,onDragScroll:h,onWheelScroll:m,onResize:g,...b}=e,y=w(S,r),[E,x]=n.useState(null),C=(0,a.e)(t,e=>x(e)),R=n.useRef(null),T=n.useRef(""),N=y.viewport,P=l.content-l.viewport,_=(0,u.W)(m),L=(0,u.W)(v),W=F(g,10);function D(e){R.current&&h({x:e.clientX-R.current.left,y:e.clientY-R.current.top})}return n.useEffect(()=>{let e=e=>{let t=e.target;(null==E?void 0:E.contains(t))&&_(e,P)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[N,E,P,_]),n.useEffect(L,[l,L]),Y(E,W),Y(y.content,W),(0,f.jsx)(j,{scope:r,scrollbar:E,hasThumb:i,onThumbChange:(0,u.W)(s),onThumbPointerUp:(0,u.W)(c),onThumbPositionChange:L,onThumbPointerDown:(0,u.W)(p),children:(0,f.jsx)(o.WV.div,{...b,ref:C,style:{position:"absolute",...b.style},onPointerDown:(0,d.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),R.current=E.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",y.viewport&&(y.viewport.style.scrollBehavior="auto"),D(e))}),onPointerMove:(0,d.M)(e.onPointerMove,D),onPointerUp:(0,d.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,y.viewport&&(y.viewport.style.scrollBehavior=""),R.current=null})})})}),W="ScrollAreaThumb",D=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=_(W,e.__scopeScrollArea);return(0,f.jsx)(l.z,{present:r||o.hasThumb,children:(0,f.jsx)(A,{ref:t,...n})})}),A=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,style:l,...i}=e,u=w(W,r),s=_(W,r),{onThumbPositionChange:c}=s,p=(0,a.e)(t,e=>s.onThumbChange(e)),v=n.useRef(),h=F(()=>{v.current&&(v.current(),v.current=void 0)},100);return n.useEffect(()=>{let e=u.viewport;if(e){let t=()=>{if(h(),!v.current){let t=H(e,c);v.current=t,c()}};return c(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[u.viewport,h,c]),(0,f.jsx)(o.WV.div,{"data-state":s.hasThumb?"visible":"hidden",...i,ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,d.M)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;s.onThumbPointerDown({x:r,y:n})}),onPointerUp:(0,d.M)(e.onPointerUp,s.onThumbPointerUp)})});D.displayName=W;var M="ScrollAreaCorner";n.forwardRef((e,t)=>{let r=w(M,e.__scopeScrollArea),n=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&n?(0,f.jsx)(O,{...e,ref:t}):null}).displayName=M;var O=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,...l}=e,i=w(M,r),[a,u]=n.useState(0),[s,c]=n.useState(0),d=!!(a&&s);return Y(i.scrollbarX,()=>{var e;let t=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(t),c(t)}),Y(i.scrollbarY,()=>{var e;let t=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(t),u(t)}),d?(0,f.jsx)(o.WV.div,{...l,ref:t,style:{width:a,height:s,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function I(e){return e?parseInt(e,10):0}function z(e,t){let r=e/t;return isNaN(r)?0:r}function U(e){let t=z(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function V(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=U(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a=function(e,[t,r]){return Math.min(r,Math.max(t,e))}(e,"ltr"===r?[0,i]:[-1*i,0]);return k([0,i],[0,l-n])(a)}function k(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}var H=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function F(e,t){let r=(0,u.W)(e),o=n.useRef(0);return n.useEffect(()=>()=>window.clearTimeout(o.current),[]),n.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(r,t)},[r,t])}function Y(e,t){let r=(0,u.W)(t);(0,c.b)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}var X=g,B=y,$=E,q=D},8828:function(e,t,r){r.d(t,{g7:function(){return i}});var n=r(7653),o=r(94492),l=r(27573),i=n.forwardRef((e,t)=>{let{children:r,...o}=e,i=n.Children.toArray(r),u=i.find(s);if(u){let e=u.props.children,r=i.map(t=>t!==u?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,l.jsx)(a,{...o,ref:t,children:r})});i.displayName="Slot";var a=n.forwardRef((e,t)=>{let{children:r,...l}=e;if(n.isValidElement(r)){let e,i;let a=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],l=t[n];/^on[A-Z]/.test(n)?o&&l?r[n]=(...e)=>{l(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...l}:"className"===n&&(r[n]=[o,l].filter(Boolean).join(" "))}return{...e,...r}}(l,r.props),ref:t?(0,o.F)(t,a):a})}return n.Children.count(r)>1?n.Children.only(null):null});a.displayName="SlotClone";var u=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function s(e){return n.isValidElement(e)&&e.type===u}},523:function(e,t,r){r.d(t,{W:function(){return o}});var n=r(7653);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},47178:function(e,t,r){r.d(t,{T:function(){return l}});var n=r(7653),o=r(523);function l({prop:e,defaultProp:t,onChange:r=()=>{}}){let[l,i]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[l]=r,i=n.useRef(l),a=(0,o.W)(t);return n.useEffect(()=>{i.current!==l&&(a(l),i.current=l)},[l,i,a]),r}({defaultProp:t,onChange:r}),a=void 0!==e,u=a?e:l,s=(0,o.W)(r);return[u,n.useCallback(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&s(r)}else i(t)},[a,e,i,s])]}},81523:function(e,t,r){r.d(t,{b:function(){return o}});var n=r(7653),o=globalThis?.document?n.useLayoutEffect:()=>{}}}]);
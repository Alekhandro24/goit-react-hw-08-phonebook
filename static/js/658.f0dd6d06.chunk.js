"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[658],{9658:function(e,o,t){t.d(o,{Z:function(){return L}});var r=t(4942),a=t(3366),n=t(7462),l=t(2791),i=t(8182),c=t(4419),s=t(2065),d=t(6934),u=t(1402),p=t(4036),v=t(5527),g=t(5878),m=t(1217);function h(e){return(0,m.Z)("MuiAlert",e)}var f=(0,g.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Z=t(3400),x=t(9201),b=t(3329),C=(0,x.Z)((0,b.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),z=(0,x.Z)((0,b.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),S=(0,x.Z)((0,b.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),y=(0,x.Z)((0,b.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),M=(0,x.Z)((0,b.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),A=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],R=(0,d.ZP)(v.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o[t.variant],o["".concat(t.variant).concat((0,p.Z)(t.color||t.severity))]]}})((function(e){var o=e.theme,t=e.ownerState,a="light"===o.palette.mode?s._j:s.$n,l="light"===o.palette.mode?s.$n:s._j,i=t.color||t.severity;return(0,n.Z)({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&"standard"===t.variant&&(0,r.Z)({color:o.vars?o.vars.palette.Alert["".concat(i,"Color")]:a(o.palette[i].light,.6),backgroundColor:o.vars?o.vars.palette.Alert["".concat(i,"StandardBg")]:l(o.palette[i].light,.9)},"& .".concat(f.icon),o.vars?{color:o.vars.palette.Alert["".concat(i,"IconColor")]}:{color:o.palette[i].main}),i&&"outlined"===t.variant&&(0,r.Z)({color:o.vars?o.vars.palette.Alert["".concat(i,"Color")]:a(o.palette[i].light,.6),border:"1px solid ".concat((o.vars||o).palette[i].light)},"& .".concat(f.icon),o.vars?{color:o.vars.palette.Alert["".concat(i,"IconColor")]}:{color:o.palette[i].main}),i&&"filled"===t.variant&&(0,n.Z)({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert["".concat(i,"FilledColor")],backgroundColor:o.vars.palette.Alert["".concat(i,"FilledBg")]}:{backgroundColor:"dark"===o.palette.mode?o.palette[i].dark:o.palette[i].main,color:o.palette.getContrastText(o.palette[i].main)}))})),w=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,o){return o.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),j=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,o){return o.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),k=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,o){return o.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),I={success:(0,b.jsx)(C,{fontSize:"inherit"}),warning:(0,b.jsx)(z,{fontSize:"inherit"}),error:(0,b.jsx)(S,{fontSize:"inherit"}),info:(0,b.jsx)(y,{fontSize:"inherit"})},L=l.forwardRef((function(e,o){var t,r,l,s,d,v,g=(0,u.Z)({props:e,name:"MuiAlert"}),m=g.action,f=g.children,x=g.className,C=g.closeText,z=void 0===C?"Close":C,S=g.color,y=g.components,L=void 0===y?{}:y,P=g.componentsProps,B=void 0===P?{}:P,N=g.icon,O=g.iconMapping,F=void 0===O?I:O,W=g.onClose,E=g.role,T=void 0===E?"alert":E,_=g.severity,H=void 0===_?"success":_,V=g.slotProps,q=void 0===V?{}:V,$=g.slots,D=void 0===$?{}:$,G=g.variant,J=void 0===G?"standard":G,K=(0,a.Z)(g,A),Q=(0,n.Z)({},g,{color:S,severity:H,variant:J}),U=function(e){var o=e.variant,t=e.color,r=e.severity,a=e.classes,n={root:["root","".concat(o).concat((0,p.Z)(t||r)),"".concat(o)],icon:["icon"],message:["message"],action:["action"]};return(0,c.Z)(n,h,a)}(Q),X=null!=(t=null!=(r=D.closeButton)?r:L.CloseButton)?t:Z.Z,Y=null!=(l=null!=(s=D.closeIcon)?s:L.CloseIcon)?l:M,ee=null!=(d=q.closeButton)?d:B.closeButton,oe=null!=(v=q.closeIcon)?v:B.closeIcon;return(0,b.jsxs)(R,(0,n.Z)({role:T,elevation:0,ownerState:Q,className:(0,i.Z)(U.root,x),ref:o},K,{children:[!1!==N?(0,b.jsx)(w,{ownerState:Q,className:U.icon,children:N||F[H]||I[H]}):null,(0,b.jsx)(j,{ownerState:Q,className:U.message,children:f}),null!=m?(0,b.jsx)(k,{ownerState:Q,className:U.action,children:m}):null,null==m&&W?(0,b.jsx)(k,{ownerState:Q,className:U.action,children:(0,b.jsx)(X,(0,n.Z)({size:"small","aria-label":z,title:z,color:"inherit",onClick:W},ee,{children:(0,b.jsx)(Y,(0,n.Z)({fontSize:"small"},oe))}))}):null]}))}))},3400:function(e,o,t){t.d(o,{Z:function(){return C}});var r=t(4942),a=t(3366),n=t(7462),l=t(2791),i=t(8182),c=t(4419),s=t(2065),d=t(6934),u=t(1402),p=t(3701),v=t(4036),g=t(5878),m=t(1217);function h(e){return(0,m.Z)("MuiIconButton",e)}var f=(0,g.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Z=t(3329),x=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,d.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,"default"!==t.color&&o["color".concat((0,v.Z)(t.color))],t.edge&&o["edge".concat((0,v.Z)(t.edge))],o["size".concat((0,v.Z)(t.size))]]}})((function(e){var o=e.theme,t=e.ownerState;return(0,n.Z)({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.activeChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var o,t=e.theme,a=e.ownerState,l=null==(o=(t.vars||t).palette)?void 0:o[a.color];return(0,n.Z)({},"inherit"===a.color&&{color:"inherit"},"inherit"!==a.color&&"default"!==a.color&&(0,n.Z)({color:null==l?void 0:l.main},!a.disableRipple&&{"&:hover":(0,n.Z)({},l&&{backgroundColor:t.vars?"rgba(".concat(l.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(l.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===a.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===a.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,r.Z)({},"&.".concat(f.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),C=l.forwardRef((function(e,o){var t=(0,u.Z)({props:e,name:"MuiIconButton"}),r=t.edge,l=void 0!==r&&r,s=t.children,d=t.className,p=t.color,g=void 0===p?"default":p,m=t.disabled,f=void 0!==m&&m,C=t.disableFocusRipple,z=void 0!==C&&C,S=t.size,y=void 0===S?"medium":S,M=(0,a.Z)(t,x),A=(0,n.Z)({},t,{edge:l,color:g,disabled:f,disableFocusRipple:z,size:y}),R=function(e){var o=e.classes,t=e.disabled,r=e.color,a=e.edge,n=e.size,l={root:["root",t&&"disabled","default"!==r&&"color".concat((0,v.Z)(r)),a&&"edge".concat((0,v.Z)(a)),"size".concat((0,v.Z)(n))]};return(0,c.Z)(l,h,o)}(A);return(0,Z.jsx)(b,(0,n.Z)({className:(0,i.Z)(R.root,d),centerRipple:!0,focusRipple:!z,disabled:f,ref:o,ownerState:A},M,{children:s}))}))}}]);
//# sourceMappingURL=658.f0dd6d06.chunk.js.map
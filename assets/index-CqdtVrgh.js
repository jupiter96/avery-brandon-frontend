import{H as A,a3 as D,N as B,J as X,aB as J,a as n,E as w,q as z,P as H}from"./index-Db1LhWdh.js";import{am as Q,an as U,ao as G,ap as K,C as Y}from"./IdurarOs-9H2smtCM.js";import{h as Z}from"./ErpApp-lYMGeMgz.js";const ee=e=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:o,componentCls:r,calc:i}=e,a=i(o).sub(l).equal(),u=i(t).sub(l).equal();return{[r]:Object.assign(Object.assign({},D(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:a,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${B(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:u,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:a}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},x=e=>{const{lineWidth:t,fontSizeIcon:l,calc:o}=e,r=e.fontSizeSM;return X(e,{tagFontSize:r,tagLineHeight:B(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(l).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},O=e=>({defaultBg:new J(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),M=A("Tag",e=>{const t=x(e);return ee(t)},O);var oe=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const re=n.forwardRef((e,t)=>{const{prefixCls:l,style:o,className:r,checked:i,onChange:a,onClick:u}=e,g=oe(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:m,tag:d}=n.useContext(w),h=S=>{a==null||a(!i),u==null||u(S)},p=m("tag",l),[C,y,v]=M(p),s=z(p,`${p}-checkable`,{[`${p}-checkable-checked`]:i},d==null?void 0:d.className,r,y,v);return C(n.createElement("span",Object.assign({},g,{ref:t,style:Object.assign(Object.assign({},o),d==null?void 0:d.style),className:s,onClick:h})))}),te=e=>Q(e,(t,l)=>{let{textColor:o,lightBorderColor:r,lightColor:i,darkColor:a}=l;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:i,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:a,borderColor:a},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),le=H(["Tag","preset"],e=>{const t=x(e);return te(t)},O);function ne(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const f=(e,t,l)=>{const o=ne(l);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${l}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},ae=H(["Tag","status"],e=>{const t=x(e);return[f(t,"success","Success"),f(t,"processing","Info"),f(t,"error","Error"),f(t,"warning","Warning")]},O);var se=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const ce=(e,t)=>{const{prefixCls:l,className:o,rootClassName:r,style:i,children:a,icon:u,color:g,onClose:m,closeIcon:d,closable:h,bordered:p=!0}=e,C=se(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:y,direction:v,tag:s}=n.useContext(w),[S,P]=n.useState(!0);n.useEffect(()=>{"visible"in C&&P(C.visible)},[C.visible]);const T=U(g),I=G(g),$=T||I,W=Object.assign(Object.assign({backgroundColor:g&&!$?g:void 0},s==null?void 0:s.style),i),c=y("tag",l),[_,q,F]=M(c),L=z(c,s==null?void 0:s.className,{[`${c}-${g}`]:$,[`${c}-has-color`]:g&&!$,[`${c}-hidden`]:!S,[`${c}-rtl`]:v==="rtl",[`${c}-borderless`]:!p},o,r,q,F),N=b=>{b.stopPropagation(),m==null||m(b),!b.defaultPrevented&&P(!1)},[,V]=Z(h,d??(s==null?void 0:s.closeIcon),b=>b===null?n.createElement(Y,{className:`${c}-close-icon`,onClick:N}):n.createElement("span",{className:`${c}-close-icon`,onClick:N},b),null,!1),R=typeof C.onClick=="function"||a&&a.type==="a",j=u||null,k=j?n.createElement(n.Fragment,null,j,a&&n.createElement("span",null,a)):a,E=n.createElement("span",Object.assign({},C,{ref:t,className:L,style:W}),k,V,T&&n.createElement(le,{key:"preset",prefixCls:c}),I&&n.createElement(ae,{key:"status",prefixCls:c}));return _(R?n.createElement(K,{component:"Tag"},E):E)},ie=n.forwardRef(ce);ie.CheckableTag=re;export{ie as T};

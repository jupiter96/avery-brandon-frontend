import{aq as B,ap as O,ai as Z,a as u,ar as I,ah as e}from"./index-Db1LhWdh.js";import{d,P as N}from"./index-BYAbkZAY.js";import{D as A,X as T,B as $,O as X,Z as z}from"./IdurarOs-9H2smtCM.js";import{e as b}from"./actions-C3fmL-jJ.js";import{c as F}from"./calculate-i3uP1qO_.js";import{s as Y}from"./index-KrFx5yLV.js";import{d as G}from"./selectors-4eXzPEWU.js";import{t as E}from"./statusTagColor-DxbKI3gy.js";import{T as L}from"./index-CqdtVrgh.js";import{C as J}from"./CloseCircleOutlined-q8ABEV4A.js";import{P as K}from"./PlusOutlined-Cme28yRk.js";function Q({form:l,translate:x}){const s=()=>{l.submit()};return e.jsx($,{onClick:s,type:"primary",icon:e.jsx(K,{}),children:x("update")})}function ct({config:l,UpdateForm:x}){var D,C;const s=A();let{entity:m}=l;const y=B(),f=O(),{current:n,isLoading:q,isSuccess:S}=Z(G),[c]=T.useForm(),[v,h]=u.useState(0),H={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[o,P]=u.useState(n??H),{id:j}=I(),k=(t,a)=>{const p=a.items;let r=0;p&&(p.map(i=>{if(i&&i.quantity&&i.price){let g=F.multiply(i.quantity,i.price);r=F.add(r,g)}}),h(r))},w=t=>{let a={...t};if(t&&((t.date||t.expiredDate)&&(a.date=d(t.date).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),a.expiredDate=d(t.expiredDate).format("YYYY-MM-DDTHH:mm:ss.SSSZ")),t.items)){let p=[];t.items.map(r=>{const{quantity:i,price:g,itemName:M,description:R}=r,U=r.quantity*r.price;p.push({total:U,quantity:i,price:g,itemName:M,description:R})}),a.items=p}y(b.update({entity:m,id:j,jsonData:a}))};return u.useEffect(()=>{S&&(c.resetFields(),h(0),y(b.resetAction({actionType:"update"})),f(`/${m.toLowerCase()}/read/${j}`))},[S]),u.useEffect(()=>{if(n){P(n);let t={...n};t.date&&(t.date=d(t.date)),t.expiredDate&&(t.expiredDate=d(t.expiredDate)),t.taxRate||(t.taxRate=0);const{subTotal:a}=t;c.resetFields(),c.setFieldsValue(t),h(a)}},[n]),e.jsxs(e.Fragment,{children:[e.jsx(N,{onBack:()=>{f(`/${m.toLowerCase()}`)},title:s("update"),ghost:!1,tags:[e.jsx(L,{color:(D=E(o.status))==null?void 0:D.color,children:o.status&&s(o.status)},"status"),o.paymentStatus&&e.jsx(L,{color:(C=E(o.paymentStatus))==null?void 0:C.color,children:o.paymentStatus&&s(o.paymentStatus)},"paymentStatus")],extra:[e.jsx($,{onClick:()=>{f(`/${m.toLowerCase()}`)},icon:e.jsx(J,{}),children:s("Cancel")},`${Y.generate()}`),e.jsx(Q,{translate:s,form:c},`${Y.generate()}`)],style:{padding:"20px 0px"}}),e.jsx(X,{dashed:!0}),e.jsx(z,{isLoading:q,children:e.jsx(T,{form:c,layout:"vertical",onFinish:w,onValuesChange:k,children:e.jsx(x,{subTotal:v,current:n})})})]})}export{ct as U};

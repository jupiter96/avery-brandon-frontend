import{ah as r}from"./index-BCUnFLyd.js";import{c as n,C as c,D as e}from"./index-Ch8TLUlV.js";import{D as m}from"./IdurarOs-C1hEbJAt.js";import"./actions-B-6WKZaj.js";import"./index-B49_WrSh.js";import"./ErpApp-gU7tOd13.js";import"./PlusOutlined-CW6HAlqD.js";import"./index-eB6KHydY.js";import"./UploadOutlined-Dhq6UkYJ.js";import"./index-CW6VBWDn.js";import"./progress-CvdcYSkA.js";import"./languages-CHa5_D_H.js";import"./useFetch-FXNTOxy3.js";import"./useDate-D7V1V6kx.js";const t={name:{type:"string",required:!0},brand_color:{type:"color",options:[...n],required:!0},brand_thumb:{type:"image",disableForForm:!0},description:{type:"textarea"},price:{type:"currency",required:!0},external_id:{type:"string"}};function F(){m();const o="product",i={displayLabels:["name"],searchFields:"name"},s=["name"],a={...{entity:o,...{PANEL_TITLE:"Products",DATATABLE_TITLE:"Products List",ADD_NEW_ENTITY:"Add New Product",ENTITY_NAME:"Product"}},fields:t,searchConfig:i,deleteModalLabels:s};return r.jsx(c,{createForm:r.jsx(e,{fields:t}),updateForm:r.jsx(e,{fields:t}),config:a})}export{F as default};
import{ah as r}from"./index-Db1LhWdh.js";import{C as n}from"./CrudModule-BX7QkDb9.js";import{D as e}from"./index-C8RVlUri.js";import{D as c}from"./IdurarOs-9H2smtCM.js";import"./actions-DNyJxFsI.js";import"./index-BFiIkacE.js";import"./index-BYAbkZAY.js";import"./ErpApp-lYMGeMgz.js";import"./helpers-DeBAh7tt.js";import"./index-BEWOW53-.js";import"./index-DV90jVgj.js";import"./fade-lEP3G4ma.js";import"./countryList-DtOS245R.js";import"./index-KrFx5yLV.js";import"./color-CnuJOIlI.js";import"./index-CqdtVrgh.js";import"./useDate-Crem-uay.js";import"./useDebounce-CpdxKIc-.js";import"./DeleteOutlined-B1KCgQi1.js";import"./ArrowRightOutlined-CQVOzF8I.js";import"./PlusOutlined-Cme28yRk.js";import"./index-CFKmpD9W.js";import"./index-7TtZk5dK.js";import"./useFetch-BIGjZOvD.js";import"./index-DdcVZB_u.js";const o={name:{type:"string",required:!0},productCategory:{type:"async",label:"product Category",displayLabels:["productCategory","name"],dataIndex:["productCategory","name"],entity:"productcategory",required:!0},price:{type:"currency",required:!0},description:{type:"textarea"},ref:{type:"string"}};function R(){const t=c(),i="product",a={displayLabels:["name"],searchFields:"name"},p=["name"],m={PANEL_TITLE:t("Product"),DATATABLE_TITLE:t("Product_list"),ADD_NEW_ENTITY:t("add_new_Product"),ENTITY_NAME:t("Product")},s={...{entity:i,...m},fields:o,searchConfig:a,deleteModalLabels:p};return r.jsx(n,{createForm:r.jsx(e,{fields:o}),updateForm:r.jsx(e,{fields:o}),config:s})}export{R as default};
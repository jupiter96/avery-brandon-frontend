import{ah as e}from"./index-f6jMLosA.js";import{C as o,D as t}from"./index-BnN3CjLT.js";import{D as n}from"./IdurarOs-BRxjavBy.js";import"./actions-Dh6bUfTR.js";import"./index-BEWcDSfL.js";import"./ErpApp-N4yZdIJb.js";import"./PlusOutlined-C16llM7b.js";import"./index-GxJnSh4g.js";import"./UploadOutlined-DSjj998E.js";import"./index-BmAte1n-.js";import"./progress-DJU2xVFF.js";import"./languages-BnOoYaae.js";import"./useFetch-Bh4uSaNQ.js";import"./useDate-CLTPZby7.js";const r={archived:{type:"boolean"},email:{type:"email",required:!0},title:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"mr",label:"Mr",color:"blue"},{value:"mrs",label:"Mrs",color:"blue"},{value:"miss",label:"Miss",color:"blue"}],required:!0,hasFeedback:!0},first_name:{type:"string",required:!0},middle_name:{type:"string",required:!1},last_name:{type:"string",required:!0},nick_name:{type:"string",required:!1},date_of_birth:{type:"date",required:!1},accounts:{type:"number",required:!1},orders:{type:"number",required:!1},referrals:{type:"number",required:!1},language:{type:"language",required:!0},phone:{type:"phone",required:!0},external_id1:{type:"string",required:!1},external_id2:{type:"string",required:!1},status:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"active",label:"Active",color:"lime"},{value:"pending_data",label:"Pending Data",color:"yellow"},{value:"pending_kyc",label:"Pending KYC",color:"yellow"},{value:"waiting_kyc",label:"Waiting KYC",color:"gold"},{value:"failed_kyc",label:"Failed KYC",color:"volcano"},{value:"disabled",label:"Disabled",color:"red"}],required:!0,hasFeedback:!0},agreement_signed:{type:"checkbox"},agreement_id:{type:"string",required:!1},agreement_ip:{type:"string",required:!1},agreement_legal_name:{type:"string",required:!1},agreement_ts:{type:"string",required:!1},created:{type:"date",required:!1},last_updated:{type:"date",required:!1},active:{type:"boolean",required:!0},country:{type:"country",required:!0},state:{type:"string",required:!0},city:{type:"string",required:!0},zip:{type:"string",required:!0},address_line1:{type:"string",required:!0},address_line2:{type:"string",required:!1},address_line3:{type:"string",required:!1},plan:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"plan1",label:"5K Two Phase Test of Son Alephon ver 1",color:"lime"},{value:"plan2",label:"12K Two Phase Test of Son Alephon ver 2",color:"yellow"},{value:"plan3",label:"25K Two Phase Test of Son Alephon ver 3",color:"yellow"}],required:!0,hasFeedback:!0}};function C(){n();const a="client",l={displayLabels:["name"],searchFields:"name"},i=["name"],s={...{entity:a,...{PANEL_TITLE:"Customer",DATATABLE_TITLE:"Customer List",ADD_NEW_ENTITY:"Add New Customer",ENTITY_NAME:"Customer"}},fields:r,searchConfig:l,deleteModalLabels:i};return e.jsx(o,{createForm:e.jsx(t,{fields:r}),updateForm:e.jsx(t,{fields:r}),config:s})}export{C as default};
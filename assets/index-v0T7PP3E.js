import{ah as e}from"./index-DPRm9m9z.js";import{C as s,D as t}from"./index-CH0sR2Q4.js";import{D as n}from"./IdurarOs-CrOj2IRU.js";import"./actions-DgT-cvDv.js";import"./index-De8fGYLw.js";import"./ErpApp-3BGVMugZ.js";import"./PlusOutlined-m8xwXwNh.js";import"./index-BoESmy8d.js";import"./UploadOutlined-DxVlkmJg.js";import"./progress-C8S1yjzo.js";import"./index-DX5XU4RO.js";import"./countryList-BvWVM6Cf.js";import"./useFetch-BfRcW7FI.js";import"./useDate-BBtjP0WA.js";const r={archived:{type:"boolean",required:!0},email:{type:"email",required:!0},title:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"mr",label:"Mr",color:"blue"},{value:"mrs",label:"Mrs",color:"blue"},{value:"miss",label:"Miss",color:"blue"}],required:!0,hasFeedback:!0},first_name:{type:"string",required:!0},last_name:{type:"string",required:!0},middle_name:{type:"string",required:!1},nick_name:{type:"string",required:!1},date_of_birth:{type:"date",required:!1},phone:{type:"phone",required:!0},language:{type:"language",required:!0},external_id1:{type:"string",required:!1},external_id2:{type:"string",required:!1},external_id2:{type:"string",required:!1},status:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"active",label:"Active",color:"lime"},{value:"pending_data",label:"Pending Data",color:"yellow"},{value:"pending_kyc",label:"Pending KYC",color:"yellow"},{value:"waiting_kyc",label:"Waiting KYC",color:"gold"},{value:"failed_kyc",label:"Failed KYC",color:"volcano"},{value:"disabled",label:"Disabled",color:"red"}],required:!0,hasFeedback:!0},created:{type:"date",required:!1},last_updated:{type:"date",required:!1},active:{type:"boolean",required:!0},country:{type:"country",required:!0},state:{type:"string",required:!0},city:{type:"string",required:!0},zip:{type:"string",required:!0},address_line1:{type:"string",required:!0},address_line2:{type:"string",required:!1},address_line3:{type:"string",required:!1},plan:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"plan1",label:"5K Two Phase Test of Son Alephon ver 1",color:"lime"},{value:"plan2",label:"12K Two Phase Test of Son Alephon ver 2",color:"yellow"},{value:"plan3",label:"25K Two Phase Test of Son Alephon ver 3",color:"yellow"}],required:!0,hasFeedback:!0}};function k(){n();const a="client",l={displayLabels:["name"],searchFields:"name"},i=["name"],o={...{entity:a,...{PANEL_TITLE:"Accounts",DATATABLE_TITLE:"Accounts List",ADD_NEW_ENTITY:"Add New Account",ENTITY_NAME:"Accounts"}},fields:r,searchConfig:l,deleteModalLabels:i};return e.jsx(s,{createForm:e.jsx(t,{fields:r}),updateForm:e.jsx(t,{fields:r}),config:o})}export{k as default};

import{ah as e}from"./index-f6jMLosA.js";import{C as c,D as o}from"./index-BnN3CjLT.js";import{D as s}from"./IdurarOs-BRxjavBy.js";import"./actions-Dh6bUfTR.js";import"./index-BEWcDSfL.js";import"./ErpApp-N4yZdIJb.js";import"./PlusOutlined-C16llM7b.js";import"./index-GxJnSh4g.js";import"./UploadOutlined-DSjj998E.js";import"./index-BmAte1n-.js";import"./progress-DJU2xVFF.js";import"./languages-BnOoYaae.js";import"./useFetch-Bh4uSaNQ.js";import"./useDate-CLTPZby7.js";const r={archived:{type:"boolean"},number:{type:"string",disableForForm:!0},display_name:{type:"string",disableForForm:!0},plan:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"plan1",label:"5K Two Phase Test of Son Alephon ver 1",color:"lime"},{value:"plan2",label:"12K Two Phase Test of Son Alephon ver 2",color:"yellow"},{value:"plan3",label:"25K Two Phase Test of Son Alephon ver 3",color:"yellow"}],required:!0,hasFeedback:!0},current_equity:{type:"currency",disableForForm:!0},customer:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"customer1",label:"customer 1",color:"lime"},{value:"customer2",label:"customer 2",color:"yellow"},{value:"customer3",label:"customer 3",color:"yellow"}],required:!0,hasFeedback:!0},email:{type:"email",disableForForm:!0},plan_price:{type:"currency",disableForForm:!0},PUBR_trading_group:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"group1",label:"Group 1",color:"lime"},{value:"group2",label:"Group 2",color:"yellow"},{value:"group3",label:"Group 3",color:"yellow"}],required:!0,hasFeedback:!0},account_type:{type:"string",required:!0},trading_login:{type:"string",required:!0},order:{type:"string",required:!0},trading_group:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"group1",label:"Group 1",color:"lime"},{value:"group2",label:"Group 2",color:"yellow"},{value:"group3",label:"Group 3",color:"yellow"}],required:!0,hasFeedback:!0},trading_password:{type:"string",required:!0},enabled:{type:"boolean",required:!0},breached:{type:"checkbox"},upgraded:{type:"checkbox"},resetted:{type:"checkbox"},withdrawal_allowed:{type:"checkbox"},hit_profit_target:{type:"checkbox"},visible_leaderboard:{type:"checkbox"},created:{type:"date"},last_updated:{type:"date"}};function k(){s();const t="client",l={displayLabels:["name"],searchFields:"name"},a=["name"],u={...{entity:t,...{PANEL_TITLE:"Accounts",DATATABLE_TITLE:"Accounts List",ADD_NEW_ENTITY:"Add New Account",ENTITY_NAME:"Accounts"}},fields:r,searchConfig:l,deleteModalLabels:a};return e.jsx(c,{createForm:e.jsx(o,{fields:r}),updateForm:e.jsx(o,{fields:r}),config:u})}export{k as default};

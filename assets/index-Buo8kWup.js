import{ah as e}from"./index-f6jMLosA.js";import{C as n,D as a}from"./index-BnN3CjLT.js";import{D as u}from"./IdurarOs-BRxjavBy.js";import"./actions-Dh6bUfTR.js";import"./index-BEWcDSfL.js";import"./ErpApp-N4yZdIJb.js";import"./PlusOutlined-C16llM7b.js";import"./index-GxJnSh4g.js";import"./UploadOutlined-DSjj998E.js";import"./index-BmAte1n-.js";import"./progress-DJU2xVFF.js";import"./languages-BnOoYaae.js";import"./useFetch-Bh4uSaNQ.js";import"./useDate-CLTPZby7.js";const t={archived:{type:"boolean"},description:{type:"textarea",required:!0},version:{type:"string"},plan_type:{type:"select",required:!0,options:[{value:"phase1",label:"Phase1"},{value:"phase2",label:"Phase2"},{value:"phase3",label:"Phase3"}]},product:{type:"select",required:!0,options:[{value:"product1",label:"product1"},{value:"product2",label:"product2"},{value:"product3",label:"product3"}]},trading_group:{type:"select",required:!0,options:[{value:"group1",label:"group1"},{value:"group2",label:"group2"},{value:"group3",label:"group3"}]},PURB_trading_group:{type:"select",options:[{value:"group1",label:"group1"},{value:"group2",label:"group2"},{value:"group3",label:"group3"}]},server:{type:"string"},broker:{type:"string"},total_customers:{type:"string"},before:{type:"checkbox"},after:{type:"checkbox"},reset_token:{type:"string"},external_id_1:{type:"string"},external_id_2:{type:"string"},leverage_1:{type:"number"},price:{type:"currency"},start_balance:{type:"currency"},max_open_lots:{type:"number"},max_total_loss_limit:{type:"number"},profit_target:{type:"number"},daily_loss_limit:{type:"number"},upg_threshold:{type:"number"},max_inactivity_days:{type:"number"},min_trading_days:{type:"number"},duration_days:{type:"number"},payout_min_amount:{type:"number"},created:{type:"date"},last_updated:{type:"date"},daily_loss_calc_method:{type:"select",options:[{value:"method1",label:"method1"},{value:"method2",label:"method2"},{value:"method3",label:"method3"}]},workflow_step_name:{type:"string"},previous_plan:{type:"select",options:[{value:"plan1",label:"plan1"},{value:"plan2",label:"plan2"},{value:"plan3",label:"plan3"}]},next_plan:{type:"select",options:[{value:"plan1",label:"plan1"},{value:"plan2",label:"plan2"},{value:"plan3",label:"plan3"}]},trading_days_calc_method:{type:"select",required:!0,options:[{value:"accountcreation1",label:"Since Account Creation 1"},{value:"accountcreation2",label:"Since Account Creation 2"},{value:"accountcreation3",label:"Since Account Creation 3"}]},withdrawal_days_calc_method:{type:"select",required:!0,options:[{value:"lastoutcome1",label:"From Last Outcome 1"},{value:"lastoutcome2",label:"From Last Outcome 2"},{value:"lastoutcome3",label:"From Last Outcome 3"}]},use_dynamic_rules:{type:"checkbox"},customer_profit_share:{type:"number"},first_withdraw_days:{type:"number"},subsequent_withdraw_delay_days:{type:"number"},payout_min_trading_days:{type:"number"},flatten_friday:{type:"checkbox"},require_stoploss:{type:"checkbox"},scale_email:{type:"checkbox"},trading_view:{type:"checkbox"},free_repeat:{type:"checkbox"},refund_on_withdrawal:{type:"checkbox"}};function P(){u();const l="people",r={displayLabels:["firstname","lastname"],searchFields:"firstname,lastname,email"},o=["firstname","lastname"],p={...{entity:l,...{PANEL_TITLE:"Plans",DATATABLE_TITLE:"Plan List",ADD_NEW_ENTITY:"Add New Plan",ENTITY_NAME:"Plan"}},fields:t,searchConfig:r,deleteModalLabels:o};return e.jsx(n,{createForm:e.jsx(a,{fields:t}),updateForm:e.jsx(a,{fields:t}),config:p})}export{P as default};

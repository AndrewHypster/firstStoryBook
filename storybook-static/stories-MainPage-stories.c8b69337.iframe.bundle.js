/*! For license information please see stories-MainPage-stories.c8b69337.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktest_work=self.webpackChunktest_work||[]).push([[957],{"./src/stories/MainPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MainPage_stories});__webpack_require__("./node_modules/react/index.js");var cn=__webpack_require__("./src/cn.js"),InputAnnotation=__webpack_require__("./src/components/InputAnnotation/InputAnnotation.jsx"),InputGroup=__webpack_require__("./src/components/InputGroup/InputGroup.jsx"),InputLabel=__webpack_require__("./src/components/InputLabel/InputLabel.jsx");const MainPage_module={mainPage:"MainPage_mainPage__rxRgE",title:"MainPage_title__KFmS7",list:"MainPage_list__gG3pf",light:"MainPage_light__Pwux+",dark:"MainPage_dark__BMnzl"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MainPage=_ref=>{let{userText,children,size,place,position,type,theme}=_ref;const mainCn=(0,cn.A)(MainPage_module.mainPage,MainPage_module[theme]),title="light"==theme?"Light Mode":"Dark Mode",isLight="light"==theme;return(0,jsx_runtime.jsxs)("main",{className:mainCn,style:{color:isLight?"#000":"#fff"},children:[(0,jsx_runtime.jsx)("h1",{className:MainPage_module.title,children:title}),(0,jsx_runtime.jsx)("ul",{className:MainPage_module.list,style:{filter:isLight?"":"brightness(120%)"},children:Array(5).fill(1).map((()=>(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)(InputLabel.A,{type}),(0,jsx_runtime.jsx)(InputGroup.A,{userText,children,size,place,position,type,theme}),(0,jsx_runtime.jsx)(InputAnnotation.A,{type})]})))})]})},MainPage_MainPage=MainPage;MainPage.defaultProps={theme:"light",userText:"on",size:"xs",place:"top",position:"left",type:"default"},MainPage.__docgenInfo={description:"",methods:[],displayName:"MainPage",props:{theme:{defaultValue:{value:'"light"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},userText:{defaultValue:{value:'"on"',computed:!1},description:"",type:{name:"enum",value:[{value:'"on"',computed:!1},{value:'"off"',computed:!1}]},required:!1},size:{defaultValue:{value:'"xs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},place:{defaultValue:{value:'"top"',computed:!1},description:"",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"side"',computed:!1}]},required:!1},position:{defaultValue:{value:'"left"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},type:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"hover"',computed:!1},{value:'"focus"',computed:!1},{value:'"error"',computed:!1},{value:'"error-focus"',computed:!1},{value:'"disabled"',computed:!1}]},required:!1}}};const MainPage_stories={title:"MainPage",component:MainPage_MainPage},Template=args=>(0,jsx_runtime.jsx)(MainPage_MainPage,{...args}),Light=Template.bind({});Light.args={children:"Input...",theme:"light"};const Dark=Template.bind({});Dark.args={children:"Input...",theme:"dark"};const __namedExportsOrder=["Light","Dark"];Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"args => <MainPage {...args} />",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"args => <MainPage {...args} />",...Dark.parameters?.docs?.source}}}},"./src/cn.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cn(){for(var _len=arguments.length,array=new Array(_len),_key=0;_key<_len;_key++)array[_key]=arguments[_key];return array.join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>cn})},"./src/components/InputAnnotation/InputAnnotation.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputAnnotation_InputAnnotation});__webpack_require__("./node_modules/react/index.js");var cn=__webpack_require__("./src/cn.js");const InputAnnotation_module={inputAnnotation:"InputAnnotation_inputAnnotation__M9dHo",default:"InputAnnotation_default__jeDDx",hover:"InputAnnotation_hover__5ZFhV",focus:"InputAnnotation_focus__JeOLI",error:"InputAnnotation_error__4ZhqF","error-focus":"InputAnnotation_error-focus__0Q0dN",disabled:"InputAnnotation_disabled__JDxwu"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputAnnotation=_ref=>{let{type}=_ref;const mainCn=(0,cn.A)(InputAnnotation_module.inputAnnotation,InputAnnotation_module[type]);return(0,jsx_runtime.jsx)("span",{className:mainCn,children:"This is a hint text to help user."})},InputAnnotation_InputAnnotation=InputAnnotation;InputAnnotation.__docgenInfo={description:"",methods:[],displayName:"InputAnnotation"}},"./src/components/InputGroup/InputGroup.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputGroup_InputGroup});__webpack_require__("./node_modules/react/index.js");var cn=__webpack_require__("./src/cn.js"),InputText=__webpack_require__("./src/components/InputText/InputText.jsx");const InputGroup_module={inputGroup:"InputGroup_inputGroup__UHfJ5",xs:"InputGroup_xs__5G-YU",sm:"InputGroup_sm__YMgYb",lg:"InputGroup_lg__sxGVs",xl:"InputGroup_xl__y7rl8",top:"InputGroup_top__4pkFx",side:"InputGroup_side__HFAXm",default:"InputGroup_default__Dk2yy",hover:"InputGroup_hover__TvdGi",focus:"InputGroup_focus__ZDGgo",error:"InputGroup_error__7jdNN","error-focus":"InputGroup_error-focus__nSWez",disabled:"InputGroup_disabled__dVonS"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputGroup=_ref=>{let{userText,children,size,place,position,type,theme}=_ref;const mainCn=(0,cn.A)(InputGroup_module.inputGroup,InputGroup_module[size],InputGroup_module[place],InputGroup_module[type]),canChangeText=!("off"==userText||"disabled"==type),isError="error"==type|"error-focus"==type;return(0,jsx_runtime.jsxs)("div",{className:mainCn,children:[(0,jsx_runtime.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M14 14L11.6667 11.6667M13.3333 7.66667C13.3333 10.7963 10.7963 13.3333 7.66667 13.3333C4.53705 13.3333 2 10.7963 2 7.66667C2 4.53705 4.53705 2 7.66667 2C10.7963 2 13.3333 4.53705 13.3333 7.66667Z",stroke:isError?"#D92D20":"#A0A0AB","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),(0,jsx_runtime.jsx)(InputText.A,{userText:canChangeText?"on":"off",children,size,place,position,theme}),(0,jsx_runtime.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("g",{"clip-path":"url(#clip0_27146_1073)",children:(0,jsx_runtime.jsx)("path",{d:"M6.06016 5.99998C6.2169 5.55442 6.52626 5.17872 6.93347 4.9394C7.34067 4.70009 7.81943 4.61261 8.28495 4.69245C8.75047 4.7723 9.17271 5.01433 9.47688 5.37567C9.78106 5.737 9.94753 6.19433 9.94683 6.66665C9.94683 7.99998 7.94683 8.66665 7.94683 8.66665M8.00016 11.3333H8.00683M14.6668 7.99998C14.6668 11.6819 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6819 1.3335 7.99998C1.3335 4.31808 4.31826 1.33331 8.00016 1.33331C11.6821 1.33331 14.6668 4.31808 14.6668 7.99998Z",stroke:isError?"#D92D20":"#A0A0AB","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"})}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_27146_1073",children:(0,jsx_runtime.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]}),(0,jsx_runtime.jsxs)("svg",{width:"32",height:"20",viewBox:"0 0 32 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M0.5 4C0.5 2.067 2.067 0.5 4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V16C31.5 17.933 29.933 19.5 28 19.5H4C2.067 19.5 0.5 17.933 0.5 16V4Z",stroke:"light"==theme?"#E4E4E7":"#3F3F46"}),(0,jsx_runtime.jsx)("path",{d:"M9.2983 14.196C8.96023 14.196 8.65057 14.1136 8.36932 13.9489C8.08807 13.7812 7.86364 13.5568 7.69602 13.2756C7.53125 12.9943 7.44886 12.6847 7.44886 12.3466C7.44886 12.0057 7.53125 11.6946 7.69602 11.4134C7.86364 11.1321 8.08807 10.9077 8.36932 10.7401C8.65057 10.5724 8.96023 10.4886 9.2983 10.4886H10.2869V8.77557H9.2983C8.96023 8.77557 8.65057 8.69318 8.36932 8.52841C8.08807 8.3608 7.86364 8.13778 7.69602 7.85938C7.53125 7.57812 7.44886 7.26705 7.44886 6.92614C7.44886 6.58523 7.53125 6.27557 7.69602 5.99716C7.86364 5.71591 8.08807 5.4929 8.36932 5.32812C8.65057 5.16051 8.96023 5.0767 9.2983 5.0767C9.6392 5.0767 9.95028 5.16051 10.2315 5.32812C10.5128 5.4929 10.7372 5.71591 10.9048 5.99716C11.0724 6.27557 11.1562 6.58523 11.1562 6.92614V7.90625H12.8693V6.92614C12.8693 6.58523 12.9517 6.27557 13.1165 5.99716C13.2841 5.71591 13.5071 5.4929 13.7855 5.32812C14.0668 5.16051 14.3778 5.0767 14.7188 5.0767C15.0597 5.0767 15.3693 5.16051 15.6477 5.32812C15.929 5.4929 16.152 5.71591 16.3168 5.99716C16.4844 6.27557 16.5682 6.58523 16.5682 6.92614C16.5682 7.26705 16.4844 7.57812 16.3168 7.85938C16.152 8.13778 15.929 8.3608 15.6477 8.52841C15.3693 8.69318 15.0597 8.77557 14.7188 8.77557H13.7386V10.4886H14.7188C15.0597 10.4886 15.3693 10.5724 15.6477 10.7401C15.929 10.9077 16.152 11.1321 16.3168 11.4134C16.4844 11.6946 16.5682 12.0057 16.5682 12.3466C16.5682 12.6847 16.4844 12.9943 16.3168 13.2756C16.152 13.5568 15.929 13.7812 15.6477 13.9489C15.3693 14.1136 15.0597 14.196 14.7188 14.196C14.3778 14.196 14.0668 14.1136 13.7855 13.9489C13.5071 13.7812 13.2841 13.5568 13.1165 13.2756C12.9517 12.9943 12.8693 12.6847 12.8693 12.3466V11.358H11.1562V12.3466C11.1562 12.6847 11.0724 12.9943 10.9048 13.2756C10.7372 13.5568 10.5128 13.7812 10.2315 13.9489C9.95028 14.1136 9.6392 14.196 9.2983 14.196ZM9.2983 13.3267C9.48011 13.3267 9.64489 13.2827 9.79261 13.1946C9.94318 13.1065 10.0625 12.9886 10.1506 12.8409C10.2415 12.6903 10.2869 12.5256 10.2869 12.3466V11.358H9.2983C9.11932 11.358 8.95455 11.4034 8.80398 11.4943C8.65625 11.5824 8.53835 11.7017 8.45028 11.8523C8.36222 12 8.31818 12.1648 8.31818 12.3466C8.31818 12.5256 8.36222 12.6903 8.45028 12.8409C8.53835 12.9886 8.65625 13.1065 8.80398 13.1946C8.95455 13.2827 9.11932 13.3267 9.2983 13.3267ZM9.2983 7.90625H10.2869V6.92614C10.2869 6.74432 10.2415 6.57955 10.1506 6.43182C10.0625 6.28409 9.94318 6.16619 9.79261 6.07812C9.64489 5.99006 9.48011 5.94602 9.2983 5.94602C9.11932 5.94602 8.95455 5.99006 8.80398 6.07812C8.65625 6.16619 8.53835 6.28409 8.45028 6.43182C8.36222 6.57955 8.31818 6.74432 8.31818 6.92614C8.31818 7.10795 8.36222 7.27415 8.45028 7.42472C8.53835 7.57244 8.65625 7.69034 8.80398 7.77841C8.95455 7.86364 9.11932 7.90625 9.2983 7.90625ZM13.7386 7.90625H14.7188C14.9006 7.90625 15.0653 7.86364 15.2131 7.77841C15.3608 7.69034 15.4787 7.57244 15.5668 7.42472C15.6548 7.27415 15.6989 7.10795 15.6989 6.92614C15.6989 6.74432 15.6548 6.57955 15.5668 6.43182C15.4787 6.28409 15.3608 6.16619 15.2131 6.07812C15.0653 5.99006 14.9006 5.94602 14.7188 5.94602C14.5369 5.94602 14.3707 5.99006 14.2202 6.07812C14.0724 6.16619 13.9545 6.28409 13.8665 6.43182C13.7813 6.57955 13.7386 6.74432 13.7386 6.92614V7.90625ZM14.7188 13.3267C14.9006 13.3267 15.0653 13.2827 15.2131 13.1946C15.3608 13.1065 15.4787 12.9886 15.5668 12.8409C15.6548 12.6903 15.6989 12.5256 15.6989 12.3466C15.6989 12.1648 15.6548 12 15.5668 11.8523C15.4787 11.7017 15.3608 11.5824 15.2131 11.4943C15.0653 11.4034 14.9006 11.358 14.7188 11.358H13.7386V12.3466C13.7386 12.5256 13.7813 12.6903 13.8665 12.8409C13.9545 12.9886 14.0724 13.1065 14.2202 13.1946C14.3707 13.2827 14.5369 13.3267 14.7188 13.3267ZM11.1562 10.4886H12.8693V8.77557H11.1562V10.4886ZM19.0685 14V5.27273H20.1254V9.60227H20.2276L24.1481 5.27273H25.5288L21.864 9.21023L25.5288 14H24.2504L21.2163 9.94318L20.1254 11.1705V14H19.0685Z",fill:"light"==theme?"#70707B":"#A0A0AB"})]})]})},InputGroup_InputGroup=InputGroup;InputGroup.defaultProps={userText:"on",size:"xs",place:"top",position:"left"},InputGroup.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{userText:{defaultValue:{value:'"on"',computed:!1},description:"",type:{name:"enum",value:[{value:'"on"',computed:!1},{value:'"off"',computed:!1}]},required:!1},size:{defaultValue:{value:'"xs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},place:{defaultValue:{value:'"top"',computed:!1},description:"",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"side"',computed:!1}]},required:!1},position:{defaultValue:{value:'"left"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"hover"',computed:!1},{value:'"focus"',computed:!1},{value:'"error"',computed:!1},{value:'"error-focus"',computed:!1},{value:'"disabled"',computed:!1}]},required:!1}}}},"./src/components/InputLabel/InputLabel.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputLabel_InputLabel});__webpack_require__("./node_modules/react/index.js");var cn=__webpack_require__("./src/cn.js");const InputLabel_module={inputLabel:"InputLabel_inputLabel__OgWD6",label:"InputLabel_label__tiDx-",info:"InputLabel_info__AeTRi",tooltip:"InputLabel_tooltip__ZOpI2",tooltipText:"InputLabel_tooltipText__EBipm",default:"InputLabel_default__cZe2s",disabled:"InputLabel_disabled__Ixuwt"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputLabel=_ref=>{let{type}=_ref;const mainCn=(0,cn.A)(InputLabel_module.inputLabel,InputLabel_module[type]);return(0,jsx_runtime.jsxs)("div",{className:mainCn,children:[(0,jsx_runtime.jsx)("label",{className:InputLabel_module.label,htmlFor:"email",children:"Email"}),(0,jsx_runtime.jsxs)("div",{className:InputLabel_module.tooltip,children:[(0,jsx_runtime.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:InputLabel_module.info,title:"some",children:[(0,jsx_runtime.jsx)("g",{"clip-path":"url(#clip0_27120_2392)",children:(0,jsx_runtime.jsx)("path",{d:"M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z",stroke:"#A0A0AB",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_27120_2392",children:(0,jsx_runtime.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]}),(0,jsx_runtime.jsx)("span",{class:InputLabel_module.tooltipText,children:"This is a tooltip"})]})]})},InputLabel_InputLabel=InputLabel;InputLabel.__docgenInfo={description:"",methods:[],displayName:"InputLabel"}},"./src/components/InputText/InputText.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputText_InputText});__webpack_require__("./node_modules/react/index.js");var cn=__webpack_require__("./src/cn.js");const InputText_module={inputText:"InputText_inputText__R6ucv",offUserText:"InputText_offUserText__3EEt7",xs:"InputText_xs__Ohet3",sm:"InputText_sm__fJXUg",lg:"InputText_lg__972m9",xl:"InputText_xl__kTzfP",top:"InputText_top__M0jJG",side:"InputText_side__+E19i",left:"InputText_left__g1UTQ",right:"InputText_right__NLY5x"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputText=_ref=>{let{userText,children,size,place,position,theme}=_ref;const mainCn=(0,cn.A)(InputText_module.inputText,"off"==userText?InputText_module.offUserText:"",InputText_module[size],InputText_module[place],InputText_module[position]);return(0,jsx_runtime.jsx)("input",{type:"text",className:mainCn,value:"on"==userText?children:"Input...",disabled:"of"==userText,style:{color:"light"==theme?"":"dark"==theme?"#FAFAFA":""}})},InputText_InputText=InputText;InputText.defaultProps={userText:"on",size:"xs",place:"top",position:"left"},InputText.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{userText:{defaultValue:{value:'"on"',computed:!1},description:"",type:{name:"enum",value:[{value:'"on"',computed:!1},{value:'"off"',computed:!1}]},required:!1},size:{defaultValue:{value:'"xs"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},place:{defaultValue:{value:'"top"',computed:!1},description:"",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"side"',computed:!1}]},required:!1},position:{defaultValue:{value:'"left"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
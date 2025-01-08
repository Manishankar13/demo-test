"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[958],{"./stories/FormFields/FileUpload.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultFileUpload:()=>DefaultFileUpload,DisabledFileUpload:()=>DisabledFileUpload,FileUploadWithError:()=>FileUploadWithError,LoadingFileUpload:()=>LoadingFileUpload,MultipleFileUpload:()=>MultipleFileUpload,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@14.2.18_@babel+core@7.24.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_repo_shared_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/shared-components/src/index.ts"),react_hook_form__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react-hook-form@7.53.2_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"shared-component/FormFields/FileUpload",component:_repo_shared_components__WEBPACK_IMPORTED_MODULE_1__.ef,tags:["autodocs"],argTypes:{label:{control:"text"},multiple:{control:"boolean"},loading:{control:"boolean"},isDisabled:{control:"boolean"},error:{control:"boolean"},helperText:{control:"text"},size:{control:"number"},accept:{control:"text"}},render:args=>{const{control,setError}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.mN)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_repo_shared_components__WEBPACK_IMPORTED_MODULE_1__.ef,{...args,control,name:"fileUpload",setError,uploadedFiles:[]})},args:{label:"Upload Your Files",multiple:!1,size:10,accept:".png,.jpg,.jpeg,.pdf",uploadedFiles:[]}},DefaultFileUpload={args:{label:"Upload Files",isDisabled:!1,error:!1,helperText:"",multiple:!1}},MultipleFileUpload={args:{label:"Upload Multiple Files",isDisabled:!1,multiple:!0}},DisabledFileUpload={args:{label:"File Upload (Disabled)",isDisabled:!0,multiple:!1}},LoadingFileUpload={args:{label:"File Upload (Loading)",loading:!0}},FileUploadWithError={args:{label:"File Upload with Error",error:!0,helperText:"File size exceeded or invalid file type"}},__namedExportsOrder=["DefaultFileUpload","MultipleFileUpload","DisabledFileUpload","LoadingFileUpload","FileUploadWithError"];DefaultFileUpload.parameters={...DefaultFileUpload.parameters,docs:{...DefaultFileUpload.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Upload Files",\n    isDisabled: false,\n    error: false,\n    helperText: "",\n    multiple: false\n  }\n}',...DefaultFileUpload.parameters?.docs?.source}}},MultipleFileUpload.parameters={...MultipleFileUpload.parameters,docs:{...MultipleFileUpload.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Upload Multiple Files",\n    isDisabled: false,\n    multiple: true\n  }\n}',...MultipleFileUpload.parameters?.docs?.source}}},DisabledFileUpload.parameters={...DisabledFileUpload.parameters,docs:{...DisabledFileUpload.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "File Upload (Disabled)",\n    isDisabled: true,\n    multiple: false\n  }\n}',...DisabledFileUpload.parameters?.docs?.source}}},LoadingFileUpload.parameters={...LoadingFileUpload.parameters,docs:{...LoadingFileUpload.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "File Upload (Loading)",\n    loading: true\n  }\n}',...LoadingFileUpload.parameters?.docs?.source}}},FileUploadWithError.parameters={...FileUploadWithError.parameters,docs:{...FileUploadWithError.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "File Upload with Error",\n    error: true,\n    helperText: "File size exceeded or invalid file type"\n  }\n}',...FileUploadWithError.parameters?.docs?.source}}}}}]);
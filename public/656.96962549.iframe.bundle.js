"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[656],{"../../node_modules/.pnpm/@storybook+react-dom-shim@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7_prettier@3.4.1_/node_modules/@storybook/react-dom-shim/dist/react-18.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{renderElement:()=>renderElement,unmountElement:()=>unmountElement});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@14.2.18_@babel+core@7.24.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@14.2.18_@babel+core@7.24.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/client.js"),nodes=new Map;var WithCallback=({callback,children})=>{let once=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let resolve=null,reject=null;return{promise:new Promise(((res,rej)=>{resolve=res,reject=rej})),resolve,reject}});var renderElement=async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);if(function getIsReactActEnvironment(){return globalThis.IS_REACT_ACT_ENVIRONMENT}())return void root.render(node);let{promise,resolve}=Promise.withResolvers();return root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(WithCallback,{callback:resolve},node)),promise},unmountElement=(el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=react_dom_client__WEBPACK_IMPORTED_MODULE_1__.H(el,rootOptions),nodes.set(el,root)),root}},"../../node_modules/.pnpm/next@14.2.18_@babel+core@7.24.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("../../node_modules/.pnpm/next@14.2.18_@babel+core@7.24.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/index.js");exports.H=m.createRoot,m.hydrateRoot}}]);
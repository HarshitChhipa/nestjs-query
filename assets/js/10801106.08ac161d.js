(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[729],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,y=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8092:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s=["components"],a={title:"Getting Started"},c=void 0,p={unversionedId:"persistence/typeorm/getting-started",id:"persistence/typeorm/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The @nestjs-query/query-typeorm package provides an implementation of @nestjs-query/core QueryService.",source:"@site/docs/persistence/typeorm/getting-started.md",sourceDirName:"persistence/typeorm",slug:"/persistence/typeorm/getting-started",permalink:"/nestjs-query/docs/persistence/typeorm/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/typeorm/getting-started.md",version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Services",permalink:"/nestjs-query/docs/persistence/services"},next:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/typeorm/custom-service"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Docs",id:"docs",children:[]}],l={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," package provides an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"@nestjs-query/core")," ",(0,i.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/services"},"QueryService"),"."),(0,i.kt)("p",null,"This package is built using ",(0,i.kt)("a",{parentName:"p",href:"https://typeorm.io/#/"},"typeorm")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/database#typeorm-integration"},"@nestjs/typeorm"),". If you are unfamiliar with them I suggest you read their documentation first."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-typeorm"},"Installation Docs")),(0,i.kt)("h2",{id:"docs"},"Docs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read the ",(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/services"},"QueryService docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typeorm/multiple-databases"},"Multiple Databases")," - Docs that layout how to connect to multiple databases and use them with ",(0,i.kt)("inlineCode",{parentName:"li"},"nestjs-query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typeorm/soft-delete"},"Soft Deletes")," - How to use the soft delete functionality from typeorm with ",(0,i.kt)("inlineCode",{parentName:"li"},"nestjs-query"),".")))}m.isMDXComponent=!0}}]);
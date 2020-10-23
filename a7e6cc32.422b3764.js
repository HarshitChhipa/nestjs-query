(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=(r(0),r(194));const o={title:"v0.6.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},i={permalink:"/nestjs-query/blog/2020/03/08/v0.6.0",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/blog/blog/2020-03-08-v0.6.0.md",source:"@site/blog/2020-03-08-v0.6.0.md",description:"* FIXED] Get Underlying Entity Object [#41",date:"2020-03-08T00:00:00.000Z",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"minor",permalink:"/nestjs-query/blog/tags/minor"}],title:"v0.6.0",readingTime:.245,truncated:!1,prevItem:{title:"v0.7.0",permalink:"/nestjs-query/blog/2020/03/18/v0.7.0"},nextItem:{title:"v0.5.1",permalink:"/nestjs-query/blog/2020/03/02/v0.5.1"}},c=[],l={rightToc:c};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[FIXED]"," Get Underlying Entity Object ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/doug-martin/nestjs-query/issues"}),"#41"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Changed ",Object(a.b)("inlineCode",{parentName:"li"},"TypeOrmQueryService")," to operate on the ",Object(a.b)("inlineCode",{parentName:"li"},"Entity")),Object(a.b)("li",{parentName:"ul"},"Added new ",Object(a.b)("inlineCode",{parentName:"li"},"AssemblerQueryService")," to translate between the ",Object(a.b)("inlineCode",{parentName:"li"},"DTO")," and ",Object(a.b)("inlineCode",{parentName:"li"},"Entity")))),Object(a.b)("li",{parentName:"ul"},"[ADDED]"," New ",Object(a.b)("inlineCode",{parentName:"li"},"InjectTypeOrmQueryService")," decorator to auto-create a TypeOrm query service.")),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/migration-guides/v0.5.x-to-v0.6.x"}),"migration guide")," for a more in-depth review of the changes."))}u.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
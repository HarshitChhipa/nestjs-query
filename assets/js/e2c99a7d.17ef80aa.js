(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2147],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7025:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={title:"v0.2.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},u=void 0,l={permalink:"/nestjs-query/blog/2020/02/12/v0.2.0",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/blog/blog/2020-02-12-v0.2.0.md",source:"@site/blog/2020-02-12-v0.2.0.md",title:"v0.2.0",description:"In v0.2.0 the concept of Assemblers was introduced. Assemblers allow for converting to and from a DTO/entity that have different fields or computed values.",date:"2020-02-12T00:00:00.000Z",formattedDate:"February 12, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"minor",permalink:"/nestjs-query/blog/tags/minor"}],readingTime:.14,truncated:!1,prevItem:{title:"v0.2.1",permalink:"/nestjs-query/blog/2020/02/18/v0.2.1"},nextItem:{title:"v0.1.0",permalink:"/nestjs-query/blog/2020/02/05/v0.1.0"}},s=[],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.2.0")," the concept of ",(0,a.kt)("inlineCode",{parentName:"p"},"Assemblers")," was introduced. ",(0,a.kt)("inlineCode",{parentName:"p"},"Assemblers")," allow for converting to and from a DTO/entity that have different fields or computed values."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"docs/concepts/advanced/assemblers"},"Read More About Assemblers!"),"."))}m.isMDXComponent=!0}}]);
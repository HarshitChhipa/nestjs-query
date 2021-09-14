(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9962],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8189:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],s={title:"Getting Started"},l=void 0,u={unversionedId:"introduction/getting-started",id:"introduction/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Nestjs-Query is collection of packages to make crud for graphql (and potentially other transports) easier.",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/nestjs-query/docs/introduction/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/introduction/getting-started.md",version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",next:{title:"Install",permalink:"/nestjs-query/docs/introduction/install"}},p=[{value:"Why?",id:"why",children:[]},{value:"Features",id:"features",children:[]},{value:"Install",id:"install",children:[]},{value:"Packages",id:"packages",children:[]},{value:"Migration Guides",id:"migration-guides",children:[]}],m={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nestjs-Query is collection of packages to make crud for ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," (and potentially other transports) easier."),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("p",null,"While working on projects in nestjs it was very easy to get up and running with typeorm and graphql however, there were many patterns that were common between the resolvers. In particular querying, sorting and paging.  "),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Built on top of ",(0,i.kt)("a",{parentName:"li",href:"https://nestjs.com/"},"nestjs")),(0,i.kt)("li",{parentName:"ul"},"Out of the box ",(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/resolvers"},"CRUD for GraphQL")," using ",(0,i.kt)("a",{parentName:"li",href:"https://typeorm.io/"},"TypeORM"),", ",(0,i.kt)("a",{parentName:"li",href:"https://sequelize.org/"},"Sequelize")," or ",(0,i.kt)("a",{parentName:"li",href:"https://mongoosejs.com/"},"Mongoose")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/aggregations"},"Aggregate Queries")," on objects and their relations."),(0,i.kt)("li",{parentName:"ul"},"Out of the box ",(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/subscriptions"},"subscriptions")," on all ",(0,i.kt)("inlineCode",{parentName:"li"},"CRUD")," operations."),(0,i.kt)("li",{parentName:"ul"},"Support for one to one, one to many, many to one and many to many ",(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations"},"relations"),"."),(0,i.kt)("li",{parentName:"ul"},"Built in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/graphql/dataloader"},"dataloader")," avoiding the ",(0,i.kt)("inlineCode",{parentName:"li"},"n+1")," problem"),(0,i.kt)("li",{parentName:"ul"},"Relay ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/relay/graphql/connections.htm"},"connections")," for paging results  ")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install"},"installation docs")),(0,i.kt)("h2",{id:"packages"},"Packages"),(0,i.kt)("p",null,"Nestjs-query is composed of multiple packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/core"},(0,i.kt)("inlineCode",{parentName:"a"},"@nestjs-query/core"))," - Defines all interfaces and utility types implemented by the other packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/query-graphql"},(0,i.kt)("inlineCode",{parentName:"a"},"@nestjs-query/query-graphql"))," - Package that provides the graphql resolver and decorators for crud endpoints."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/query-typeorm"},(0,i.kt)("inlineCode",{parentName:"a"},"@nestjs-query/query-typeorm"))," - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"@nestjs-query/query-graphql"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/query-sequelize"},(0,i.kt)("inlineCode",{parentName:"a"},"@nestjs-query/query-sequelize"))," - Package that implements a Sequelize service that can be used by itself or with the graphql resolver provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"@nestjs-query/query-graphql"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/query-mongoose"},(0,i.kt)("inlineCode",{parentName:"a"},"@nestjs-query/query-mongoose"))," - Package that implements a Mongoose service that can be used by itself or with the graphql resolver provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"@nestjs-query/query-graphql"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/query-typegoose"},(0,i.kt)("inlineCode",{parentName:"a"},"@nestjs-query/query-typegoose"))," - Package that implements a Typegoose service that can be used by itself or with the graphql resolver provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"@nestjs-query/query-graphql"),".")),(0,i.kt)("h2",{id:"migration-guides"},"Migration Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.24.x-to-v0.25.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.24.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.25.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.23.x-to-v0.24.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.23.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.24.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.22.x-to-v0.23.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.22.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.23.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.15.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.16.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.14.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.15.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.13.x-to-v0.14.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.13.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.14.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.12.x-to-v0.13.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.12.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.13.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.10.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.11.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.5.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.6.x")))))}c.isMDXComponent=!0}}]);
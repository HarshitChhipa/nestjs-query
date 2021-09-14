(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3078],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=o,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8411:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],l={title:"Hooks"},p=void 0,s={unversionedId:"graphql/hooks",id:"graphql/hooks",isDocsHomePage:!1,title:"Hooks",description:"nestjs-query provides the following hooks that allow you to modify incoming requests.",source:"@site/docs/graphql/hooks.mdx",sourceDirName:"graphql",slug:"/graphql/hooks",permalink:"/nestjs-query/docs/graphql/hooks",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/hooks.mdx",version:"current",frontMatter:{title:"Hooks"},sidebar:"docs",previous:{title:"Paging",permalink:"/nestjs-query/docs/graphql/paging"},next:{title:"Authorization",permalink:"/nestjs-query/docs/graphql/authorization"}},d=[{value:"@BeforeCreateOne",id:"beforecreateone",children:[{value:"Hook Function",id:"hook-function",children:[]},{value:"Hook Class",id:"hook-class",children:[]}]},{value:"@BeforeCreateMany",id:"beforecreatemany",children:[{value:"Hook Function",id:"hook-function-1",children:[]},{value:"Hook Class",id:"hook-class-1",children:[]}]},{value:"@BeforeUpdateOne",id:"beforeupdateone",children:[{value:"Hook Fnction",id:"hook-fnction",children:[]},{value:"Hook Class",id:"hook-class-2",children:[]}]},{value:"@BeforeUpdateMany",id:"beforeupdatemany",children:[{value:"Hook Function",id:"hook-function-2",children:[]},{value:"Hook Class",id:"hook-class-3",children:[]}]},{value:"Using Hooks In Custom Endpoints",id:"using-hooks-in-custom-endpoints",children:[{value:"Example",id:"example",children:[]}]}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," provides the following hooks that allow you to modify incoming requests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeFindOne")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"findOne")," query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeQueryMany")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"queryMany")," query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeCreateOne")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"createOne")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeCreateMany")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"createMany")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeUpdateOne")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"updateOne")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeUpdateMany")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"updateMany")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeDeleteOne")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"deleteOne")," mutation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeDeleteMany")," - invoked before any ",(0,r.kt)("inlineCode",{parentName:"li"},"deleteMany")," mutation.")),(0,r.kt)("p",null,"In order to use a hook you only need to decorate your DTO with the corresponding decorator."),(0,r.kt)("p",null,"Each hook decorator can be provided one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A hook function"),(0,r.kt)("li",{parentName:"ul"},"A class that extends ",(0,r.kt)("inlineCode",{parentName:"li"},"Hook"),", when using a class you can use DI to access other services just like ",(0,r.kt)("inlineCode",{parentName:"li"},"guards"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"interceptors")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"pipes"),".")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The graphql context by default only contains the incoming request!"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," DTO you can also decorate those classes with corresponding decorators."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All of the examples reference a GqlContext. This was defined for the sake of the example. It is recommended that you\ndefine a custom type that represents the information in the context based on the guards and interceptors used in your\napplication."),(0,r.kt)("p",{parentName:"div"},"We have defined our ",(0,r.kt)("inlineCode",{parentName:"p"},"GqlContext")," as"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type GqlContext = { req: { headers: Record<string, string> } };\n")))),(0,r.kt)("h2",{id:"beforecreateone"},"@BeforeCreateOne"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@BeforeCreateOne")," decorator can be used to modify incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"createOne")," mutations with information from the graphql\ncontext."),(0,r.kt)("h3",{id:"hook-function"},"Hook Function"),(0,r.kt)("p",null,"In this example we set the createdBy field based on the context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-10}","{7-10}":!0},"import { FilterableField, BeforeCreateOne, CreateOneInputType } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { GqlContext } from '../../interfaces';\nimport { getUserName } from '../../helpers';\n\n@ObjectType('TodoItem')\n@BeforeCreateOne((input: CreateOneInputType<TodoItemDTO>, context: GqlContext) => {\n  input.input.createdBy = getUserName(context);\n  return input;\n})\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h3",{id:"hook-class"},"Hook Class"),(0,r.kt)("p",null,"You can also provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," class that can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," dependency injection."),(0,r.kt)("p",null,"In this example we create a simple Hook that works with any type that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"createdBy")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport { BeforeCreateOneHook, CreateOneInputType,} from '@nestjs-query/query-graphql';\nimport { GqlContext } from './auth/auth.guard';\nimport { AuthService } from './auth/auth.service';\n\ninterface CreatedBy {\n  createdBy: string;\n}\n\n@Injectable()\nexport class CreatedByHook<T extends CreatedBy> implements BeforeCreateOneHook<T, GqlContext> {\n  constructor(readonly authService: AuthService) {}\n\n  async run(instance: CreateOneInputType<T>, context: GqlContext): Promise<CreateOneInputType<T>> {\n    const createdBy = await this.authService.getUserEmail(context.userId);\n    instance.input.createdBy = createdBy;\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"Now we just provide the hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeCreateOne")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, BeforeCreateOne } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { CreatedByHook } from '../../hooks';\n\n@ObjectType('TodoItem')\n@BeforeCreateOne(CreatedByHook)\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h2",{id:"beforecreatemany"},"@BeforeCreateMany"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@BeforeCreateMany")," decorator can be used to modify incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"createMany")," mutations with information from the\ngraphql context."),(0,r.kt)("h3",{id:"hook-function-1"},"Hook Function"),(0,r.kt)("p",null,"In this example we set the createdBy field on each record based on the context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-11}","{7-11}":!0},"import { FilterableField, BeforeCreateMany, CreateManyInputType } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { GqlContext } from '../../interfaces';\nimport { getUserName } from '../../helpers';\n\n@ObjectType('TodoItem')\n@BeforeCreateMany((input: CreateManyInputType<TodoItemDTO>, context: GqlContext) => {\n  const createdBy = getUserName(context);\n  input.input = input.input.map((c) => ({ ...c, createdBy }));\n  return input;\n})\nexport class TodoItemDTO {\n\n   /**\n   Other fields\n   **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h3",{id:"hook-class-1"},"Hook Class"),(0,r.kt)("p",null,"You can also provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," class that can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," dependency injection."),(0,r.kt)("p",null,"In this example we create a simple Hook that works with any type that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"createdBy")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport { BeforeCreateManyHook, CreateManyInputType,} from '@nestjs-query/query-graphql';\nimport { GqlContext } from './auth/auth.guard';\nimport { AuthService } from './auth/auth.service';\n\ninterface CreatedBy {\n  createdBy: string;\n}\n\n@Injectable()\nexport class CreatedByHook<T extends CreatedBy> implements BeforeCreateManyHook<T, GqlContext> {\n  constructor(readonly authService: AuthService) {}\n\n  async run(instance: CreateManyInputType<T>, context: GqlContext): Promise<CreateManyInputType<T>> {\n    const createdBy = await this.authService.getUserEmail(context.userId);\n    instance.input = instance.input.map((c) => ({ ...c, createdBy }));\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"Now we just provide the hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeCreateMany")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, BeforeCreateMany } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { CreatedByHook } from '../../hooks';\n\n@ObjectType('TodoItem')\n@BeforeCreateMany(CreatedByHook)\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h2",{id:"beforeupdateone"},"@BeforeUpdateOne"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@BeforeUpdateOne")," decorator can be used to modify incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"updateOne")," mutations with information from the graphql\ncontext."),(0,r.kt)("h3",{id:"hook-fnction"},"Hook Fnction"),(0,r.kt)("p",null,"In this example we set the updatedBy field in the update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-10}","{7-10}":!0},"import { FilterableField, BeforeUpdateOne, UpdateOneInputType } from '@nestjs-query/query-graphql';\nimport { ObjectType } from '@nestjs/graphql';\nimport { GqlContext } from '../../interfaces';\nimport { getUserName } from '../../helpers';\n\n@ObjectType('TodoItem')\n@BeforeUpdateOne((input: UpdateOneInputType<TodoItemDTO>, context: GqlContext) => {\n  input.update.updatedBy = getUserName(context);\n  return input;\n})\nexport class TodoItemDTO {\n\n  /**\n  Other fields\n  **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h3",{id:"hook-class-2"},"Hook Class"),(0,r.kt)("p",null,"You can also provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," class that can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," dependency injection."),(0,r.kt)("p",null,"In this example we create a simple Hook that works with any type that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"updatedBy")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { BeforeUpdateOneHook, UpdateOneInputType } from '@nestjs-query/query-graphql';\nimport { Injectable } from '@nestjs/common';\nimport { GqlContext } from './auth/auth.guard';\nimport { AuthService } from './auth/auth.service';\n\ninterface UpdatedBy {\n  updatedBy: string;\n}\n\n@Injectable()\nexport class UpdatedByHook<T extends UpdatedBy> implements BeforeUpdateOneHook<T, GqlContext> {\n  constructor(readonly authService: AuthService) {}\n\n  async run(instance: UpdateOneInputType<T>, context: GqlContext): Promise<UpdateOneInputType<T>> {\n    // eslint-disable-next-line no-param-reassign\n    instance.update.updatedBy = await this.authService.getUserEmail(context.userId);\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"Now we just provide the hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeUpdateOne")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, BeforeUpdateOne } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { CreatedByHook } from '../../hooks';\n\n@ObjectType('TodoItem')\n@BeforeUpdateOne(UpdatedByHook)\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h2",{id:"beforeupdatemany"},"@BeforeUpdateMany"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@BeforeUpdateMany")," decorator can be used to modify incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMany")," mutations with information from the\ngraphql context."),(0,r.kt)("h3",{id:"hook-function-2"},"Hook Function"),(0,r.kt)("p",null,"In this example we set the updatedBy field in the update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-10}","{7-10}":!0},"import { FilterableField, BeforeUpdateMany, UpdateManyInputType } from '@nestjs-query/query-graphql';\nimport { ObjectType } from '@nestjs/graphql';\nimport { GqlContext } from '../../interfaces';\nimport { getUserName } from '../../helpers';\n\n@ObjectType('TodoItem')\n@BeforeUpdateMany((input: UpdateManyInputType<TodoItemDTO, TodoItemDTO>, context: GqlContext) => {\n  input.update.updatedBy = getUserName(context);\n  return input;\n})\nexport class TodoItemDTO {\n\n  /**\n  Other fields\n  **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h3",{id:"hook-class-3"},"Hook Class"),(0,r.kt)("p",null,"You can also provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," class that can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," dependency injection."),(0,r.kt)("p",null,"In this example we create a simple Hook that works with any type that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"updatedBy")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { BeforeUpdateManyHook, UpdateManyInputType } from '@nestjs-query/query-graphql';\nimport { Injectable } from '@nestjs/common';\nimport { GqlContext } from './auth/auth.guard';\nimport { AuthService } from './auth/auth.service';\n\ninterface UpdatedBy {\n  updatedBy: string;\n}\n\n@Injectable()\nexport class UpdatedByHook<T extends UpdatedBy> implements BeforeUpdateManyHook<T, GqlContext> {\n  constructor(readonly authService: AuthService) {}\n\n  async run(instance: UpdateManyInputType<T, T>, context: GqlContext): Promise<UpdateManyInputType<T, T>> {\n    // eslint-disable-next-line no-param-reassign\n    instance.update.updatedBy = await this.authService.getUserEmail(context.userId);\n    return instance;\n  }\n}\n")),(0,r.kt)("p",null,"Now we just provide the hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeUpdateMany")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, BeforeUpdateMany } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { CreatedByHook } from '../../hooks';\n\n@ObjectType('TodoItem')\n@BeforeUpdateMany(UpdatedByHook)\nexport class TodoItemDTO {\n\n /**\n Other fields\n **/\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n\n")),(0,r.kt)("h2",{id:"using-hooks-in-custom-endpoints"},"Using Hooks In Custom Endpoints"),(0,r.kt)("p",null,"You can also use hooks in custom endpoints by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"HookInterceptor")," along with"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HookArgs")," - Used to apply hooks to any query endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MutationHookArgs")," - Used to apply hooks to any ",(0,r.kt)("inlineCode",{parentName:"li"},"mutation")," that uses ",(0,r.kt)("inlineCode",{parentName:"li"},"MutationArgsType"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example we'll create an endpoint that marks all todo items that are currently not completed as completed."),(0,r.kt)("p",null,"To start we'll create our input types."),(0,r.kt)("p",null,"There are two types that are created"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateManyTodoItemsInput")," which extends the ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateManyInputType")," this exposes an ",(0,r.kt)("inlineCode",{parentName:"li"},"update")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"filter")," field just like the ",(0,r.kt)("inlineCode",{parentName:"li"},"updateMany")," endpoints that are auto generated."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateManyTodoItemsArgs")," which extends ",(0,r.kt)("inlineCode",{parentName:"li"},"MutationArgsType"),", this provides a uniform interface for all mutations\nensuring that the argument provided to the mutation is named ",(0,r.kt)("inlineCode",{parentName:"li"},"input"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/types.ts"',title:'"todo-item/types.ts"'},"import { MutationArgsType, UpdateManyInputType } from '@nestjs-query/query-graphql';\nimport { ArgsType, InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\n\n// create the base input type\n@InputType()\nexport class MarkTodoItemsAsCompletedInput extends UpdateManyInputType(TodoItemDTO, TodoItemUpdateDTO) {}\n\n// Wrap the input in the MutationArgsType to provide a uniform format for all mutations\n// The `MutationArgsType` is a thin wrapper that names the args as input\n@ArgsType()\nexport class MarkTodoItemsAsCompletedArgs extends MutationArgsType(UpdateManyTodoItemsInput) {}\n")),(0,r.kt)("p",null,"Now we can use our new types in the resolver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.resolver.ts" {16,17}',title:'"todo-item/todo-item.resolver.ts"',"{16,17}":!0},"import { InjectQueryService, mergeFilter, QueryService, UpdateManyResponse } from '@nestjs-query/core';\nimport { HookTypes, HookInterceptor, MutationHookArgs, UpdateManyResponseType } from '@nestjs-query/query-graphql';\nimport { UseInterceptors } from '@nestjs/common';\nimport { Mutation, Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { MarkTodoItemsAsCompletedArgs } from './types';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemDTO>) {}\n\n  // Set the return type to the TodoItemConnection\n  @Mutation(() => UpdateManyResponseType())\n  @UseInterceptors(HookInterceptor(HookTypes.BEFORE_UPDATE_MANY, TodoItemUpdateDTO))\n  markTodoItemsAsCompleted(@MutationHookArgs() { input }: MarkTodoItemsAsCompletedArgs): Promise<UpdateManyResponse> {\n    return this.service.updateMany(\n      { ...input.update, completed: true },\n      mergeFilter(input.filter, { completed: { is: false } }),\n    );\n  }\n}\n\n")),(0,r.kt)("p",null,"The first thing to notice is the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@UseInterceptors(HookInterceptor(HookTypes.BEFORE_UPDATE_MANY, TodoItemUpdateDTO))\n")),(0,r.kt)("p",null,"This interceptor adds the correct hook to the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," to be used by the param decorator."),(0,r.kt)("p",null,"There are a few things to take note of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"HookTypes.BEFORE_UPDATE_MANY")," lets the interceptor know we are wanting the BeforeUpdateMany hook to be used\nfor this mutation."),(0,r.kt)("li",{parentName:"ul"},"We use the ",(0,r.kt)("inlineCode",{parentName:"li"},"TodoItemUpdateDTO"),", that is because the ",(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeUpdateMany")," decorator was put on the\n",(0,r.kt)("inlineCode",{parentName:"li"},"TodoItemUpdateDTO")," not the ",(0,r.kt)("inlineCode",{parentName:"li"},"TodoItemDTO"),".")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When using the HookInterceptor you must use the DTO that you added the hook decorator to."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In this example we bind the ",(0,r.kt)("inlineCode",{parentName:"p"},"BEFORE_UPDATE_MANY")," hook, you can use any of the hooks available to bind to the correct\none when ",(0,r.kt)("inlineCode",{parentName:"p"},"creating"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"updating"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"deleting")," records."))),(0,r.kt)("p",null,"The next piece is the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@MutationHookArgs() { input }: UpdateManyTodoItemsArgs\n")),(0,r.kt)("p",null,"By using the ",(0,r.kt)("inlineCode",{parentName:"p"},"MutationHookArgs")," decorator we ensure that the hook is applied to the arguments adding any additional\nfields to the update."),(0,r.kt)("p",null,"Finally we invoke the service ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMany")," with a filter that ensures we only update ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoItems")," that are completed,\nand add an setting ",(0,r.kt)("inlineCode",{parentName:"p"},"completed")," to true to the update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"return this.service.updateMany(\n  { ...input.update, completed: false },\n  mergeFilter(input.filter, { completed: { is: false } }),\n);\n")))}u.isMDXComponent=!0}}]);
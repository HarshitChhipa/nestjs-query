(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7174],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6152:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],a={title:"Multiple Databases"},p=void 0,c={unversionedId:"persistence/typeorm/multiple-databases",id:"persistence/typeorm/multiple-databases",isDocsHomePage:!1,title:"Multiple Databases",description:"TypeOrm offers the possibility to connect your application to multiple databases or schemas. More details on this can be found on their official documentation.",source:"@site/docs/persistence/typeorm/multiple-databases.md",sourceDirName:"persistence/typeorm",slug:"/persistence/typeorm/multiple-databases",permalink:"/nestjs-query/docs/persistence/typeorm/multiple-databases",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/typeorm/multiple-databases.md",version:"current",frontMatter:{title:"Multiple Databases"},sidebar:"docs",previous:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/typeorm/custom-service"},next:{title:"Soft Delete",permalink:"/nestjs-query/docs/persistence/typeorm/soft-delete"}},l=[{value:"Defining multiple connections",id:"defining-multiple-connections",children:[]},{value:"Create a new Feature Module",id:"create-a-new-feature-module",children:[]},{value:"Custom TypeOrmQueryService",id:"custom-typeormqueryservice",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TypeOrm")," offers the possibility to connect your application to multiple databases or schemas. More details on this can be found on their ",(0,i.kt)("a",{parentName:"p",href:"https://typeorm.io/#/multiple-connections"},"official documentation"),"."),(0,i.kt)("p",null,"Further, the official ",(0,i.kt)("inlineCode",{parentName:"p"},"@nestjs/typeorm")," package also provides functionality to support multiple databases within the application. For details, consider the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/database#multiple-databases"},"official documentation"),"."),(0,i.kt)("p",null,"Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," also offers this functionality. This section will walk you through a short example indicating how to connect your application to multiple databases. Further, this will assume, that you ",(0,i.kt)("strong",{parentName:"p"},"already have a working application with a configured database"),". Please note that only key aspects are shown here:"),(0,i.kt)("h2",{id:"defining-multiple-connections"},"Defining multiple connections"),(0,i.kt)("p",null,"First lets set up a constants file to hold our connection names."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="constants.ts"',title:'"constants.ts"'},"export const MUSIC_DB_CONNECTION = 'default';\nexport const SECRET_DB_CONNECTION = 'secret';\n")),(0,i.kt)("p",null,"Then setup multiple database connections."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"import { MUSIC_DB_CONNECTION, SECRET_DB_CONNECTION } from './constants';\n\nconst musicEntities = [\n  ArtistEntity,\n  AlbumEntity,\n  SongEntity,\n  GenreEntity,\n  // ...\n];\n\nconst secretEntities = [SecretEntity];\n\n@Module({\n  imports: [\n    ConfigModule.forRoot(environment),\n    TypeOrmModule.forRoot({\n      // name: MUSIC_DB_CONNECTION, // if you leave this out, this will be the \"default\" connection!\n      type: \"postgres\",\n      host: \"localhost\",\n      port: 5436,\n      username: 'user',\n      password: 'password',\n      database: 'music',\n      synchronize: true,\n      logging: true,\n      entities: musicEntities,\n    }),\n    // this also works with the ASYNC configuration!\n    TypeOrmModule.forRootAsync({\n      name: SECRET_DB_CONNECTION,   // you need to set the name here!\n      imports: [ConfigModule],\n      inject: [ConfigService],\n      useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({\n        ...configService.get('dbConnections.secret'),\n        entities: secretEntities,\n      }),\n    }),\n    GraphQLModule.forRootAsync({\n      // ...\n    }),\n    // other modules\n  ],\n  controllers: [],\n  providers: [],\n})\nexport class AppModule {}\n")),(0,i.kt)("p",null,"Of course, there can only be one ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," database connection. All other connections ",(0,i.kt)("strong",{parentName:"p"},"must")," have a proper ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," set up. Further, this name ",(0,i.kt)("strong",{parentName:"p"},"must")," be used when connecting against this specific entity."),(0,i.kt)("h2",{id:"create-a-new-feature-module"},"Create a new Feature Module"),(0,i.kt)("p",null,"Second, you need to create a new module for the feature that should store its data in another database using the previously defined connection."),(0,i.kt)("p",null,"First, define your ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," class that is stored within the database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="secret/secret.entity.ts"',title:'"secret/secret.entity.ts"'},"import { Entity, Column } from 'typeorm';\n\n@Entity('secrets')\nexport class SecretEntity {\n  // some properties here, like\n  @Column()\n  name: string;\n}\n")),(0,i.kt)("p",null,"and the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectType")," that is used for ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="secret/secret.dto.ts"',title:'"secret/secret.dto.ts"'},"import { ObjectType, Field } from '@nestjs/graphql';\n\n@ObjectType('Secret')\nexport class SecretDTO {\n  @Field()\n  name: string;\n}\n")),(0,i.kt)("p",null,"Now lets register the ",(0,i.kt)("inlineCode",{parentName:"p"},"SecretEntity")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule"),". "),(0,i.kt)("p",null,"The only difference is you need to pass the name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection")," when importing respective ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeOrmModule"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="secret/secret.module.ts"',title:'"secret/secret.module.ts"'},"import { Module } from '@nestjs/common';\nimport { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'; \nimport { SECRET_DB_CONNECTION } from '../constants';\nimport { SecretEntity } from './secret.entity';\nimport { SecretDTO } from './secret.dto'\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      // import the NestjsQueryTypeOrmModule to register the entity with typeorm\n      // and provide a QueryService\n      imports: [\n        NestjsQueryTypeOrmModule.forFeature(\n          [SecretEntity], \n          SECRET_DB_CONNECTION, // specify the connection name\n        )\n      ],\n      // describe the resolvers you want to expose\n      resolvers: [{ DTOClass: SecretDTO, EntityClass: SecretEntity }],\n    }),\n    \n  ],  \n})\nexport class SecretModule {}\n")),(0,i.kt)("p",null,"Now the ",(0,i.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"SecretDTO")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SecretEntity")," that will use the custom connection."),(0,i.kt)("h2",{id:"custom-typeormqueryservice"},"Custom TypeOrmQueryService"),(0,i.kt)("p",null,"If you want to create a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"SecretService")," responsible for the database access, a custom ",(0,i.kt)("a",{parentName:"p",href:"/nestjs-query/docs/persistence/services"},"QueryService"),", you need to pass an additional argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator that indicates the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection")," you are using. This string has to match the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeOrmModule")," options!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="secret/secret.service.ts"',title:'"secret/secret.service.ts"'},"import { QueryService } from '@nestjs-query/core';\nimport { TypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { SECRET_DB_CONNECTION } from '../constants';\nimport { SecretEntity } from './secret.entity';\n\n@QueryService(SecretEntity)\nexport class SecretService extends TypeOrmQueryService<SecretEntity> {\n  constructor(\n    @InjectRepository(SecretEntity, SECRET_DB_CONNECTION) repository: Repository<SecretEntity>,\n  ) {\n    super(repository);\n  }\n}\n")),(0,i.kt)("p",null,"For the sake of brevity, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssemblerService")," is not covered here, as it should not directly interact with the database itself. Therefore, no further adaptations are required. This also applies to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver"),"!"),(0,i.kt)("p",null,"For a full example see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/doug-martin/nestjs-query/tree/master/examples/typeorm-multidb"},"examples"),"."))}m.isMDXComponent=!0}}]);
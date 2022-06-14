"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4511],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,y=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14715:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={},s="DynamoDB",m={unversionedId:"integrations/destinations/dynamodb",id:"integrations/destinations/dynamodb",title:"DynamoDB",description:"This destination writes data to AWS DynamoDB.",source:"@site/../docs/integrations/destinations/dynamodb.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/dynamodb",permalink:"/integrations/destinations/dynamodb",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/dynamodb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Databricks Lakehouse",permalink:"/integrations/destinations/databricks"},next:{title:"End-to-End Testing Destination",permalink:"/integrations/destinations/e2e-test"}},p={},d=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"CHANGELOG",id:"changelog",level:2}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dynamodb"},"DynamoDB"),(0,i.kt)("p",null,"This destination writes data to AWS DynamoDB."),(0,i.kt)("p",null,"The Airbyte DynamoDB destination allows you to sync data to AWS DynamoDB. Each stream is written to its own table under the DynamoDB."),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each stream will be output into its own DynamoDB table. Each table will a collections of ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," objects containing 4 fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the extracted data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sync_time"),": a timestamp representing when the sync up task be triggered.")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured DynamoDB table.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespace will be used as part of the table name.")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"This connector by default uses 10 capacity units for both Read and Write in DynamoDB tables. Please provision more capacity units in the DynamoDB console when there are performance constraints."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Allow connections from Airbyte server to your AWS DynamoDB tables ","(","if they exist in separate VPCs",")","."),(0,i.kt)("li",{parentName:"ol"},"The credentials for AWS DynamoDB ","(","for the COPY strategy",")",".")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fill up DynamoDB info",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DynamoDB Endpoint"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Leave empty if using AWS DynamoDB, fill in endpoint URL if using customized endpoint."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DynamoDB Table Name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The name prefix of the DynamoDB table to store the extracted data. The table name is ","\\",(0,i.kt)("em",{parentName:"li"},"\\"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DynamoDB Region"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The region of the DynamoDB."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Access Key Id"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"this")," on how to generate an access key."),(0,i.kt)("li",{parentName:"ul"},"We recommend creating an Airbyte-specific user. This user will require ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_dynamodb_specific-table.html"},"read and write permissions")," to the DynamoDB table."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secret Access Key"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Corresponding key to the above key id."))))),(0,i.kt)("li",{parentName:"ul"},"Make sure your DynamoDB tables are accessible from the machine running Airbyte.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This depends on your networking setup."),(0,i.kt)("li",{parentName:"ul"},"You can check AWS DynamoDB documentation with a tutorial on how to properly configure your DynamoDB's access ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-overview.html"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"The easiest way to verify if Airbyte is able to connect to your DynamoDB tables is via the check connection tool in the UI.")))),(0,i.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-05-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12820"},"12820")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Improved 'check' operation performance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-12-05"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9314"},"#","9314")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rename dynamo_db_table_name to dynamo_db_table_name_prefix.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5561"},"#","5561")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial release.")))))}u.isMDXComponent=!0}}]);
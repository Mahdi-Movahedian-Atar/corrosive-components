import{s as o}from"./q-Dt9sSOXM.js";import{_ as t}from"./q-uemlvruI.js";import{C as u}from"./q-CFqz6udX.js";import{L as s}from"./q-Dxur1w3-.js";import{J as r,x as l,q as a,d as n,b as e}from"./q-8bdPC3mX.js";const i=o,c=()=>(r(a(()=>t(()=>Promise.resolve().then(()=>p),void 0),"s_3c60zlVylzE")),l("div",null,{class:"markdown"},[l("h1",null,null,"Crossive Components Installation Guide",3,null),l("p",null,null,["Welcome to the ",l("strong",null,null,"Crossive Components",3,null)," library! This guide will walk you through the installation process and show you how to use the components in your Qwik project. You can also directly copy and paste the component source code if you prefer not to install the package."],3,null),l("h2",null,null,"Installation via NPM or Bun",3,null),l("p",null,null,["You can install the ",l("strong",null,null,"Crossive Components",3,null)," library using npm or bun. Run the following command in your project directory:"],3,null),l("pre",null,null,l("code",null,null,"npm install crossive-components",3,null),3,null),l("pre",null,null,l("code",null,null,"bun install crossive-components",3,null),3,null),l("p",null,null,["Add ",l("strong",null,null,"useStyles(DefaultStyle)",3,null)," with"," ",l("strong",null,null,"useStyles(DefaultResources)",3,null)," or"," ",l("strong",null,null,"useStyles(DefaultDarkResources)",3,null)," to the root layout element to apply styles."],3,null),n(u,{code:`import {
  DefaultResources, //or(DefaultDarkResources)
  DefaultStyle,
} from 'corrosive-components'
      
export default component$(() => {
  useStyles$(DefaultResources) //or(useStyles$(DefaultDarkResources))
  useStyles$(DefaultStyle)
  
  return(
    //content
    )
})`,language:"JavaScript",[e]:{code:e,language:e}},3,"TP_0"),l("p",null,null,["See the"," ",n(s,{href:"/docs/installation/styling",class:"text-accent-0 underline",children:"styling",[e]:{href:e,class:e}},3,"TP_1")," ","section for more details."],1,null),l("h2",null,null,"Directly Copying Component Source Code",3,null),l("p",null,null,"If you prefer not to install the package, you can directly copy the source code for individual components and their styles and use them in your project.",3,null),l("p",null,null,["Note that you still need to add ",l("strong",null,null,"DefaultResources",3,null)," or"," ",l("strong",null,null,"DefaultDarkResources",3,null)," to the root layout element."],3,null)],1,"TP_2")),p=Object.freeze(Object.defineProperty({__proto__:null,s_3c60zlVylzE:i,s_chdHgmYdOIg:c},Symbol.toStringTag,{value:"Module"}));export{i as s_3c60zlVylzE,c as s_chdHgmYdOIg};

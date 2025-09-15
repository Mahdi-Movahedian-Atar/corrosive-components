import{_ as t}from "./q-DXM0pR1l.js";import{H as n,q as r}from "./q-8bdPC3mX.js";const p=`export const App = component$(() => {
  const handleResize = $((offset) => {
    console.log('New offset:', offset);
  });
    
  return (
    <ResizablePanels
        vertical={true}
        min={20}
        max={80}
        defaultOffset={60}
        onChange={handleResize}
        collapsableLeft={10}
        collapsableRight={90}
      >
      <p q:slot={'firstPanel'}>first Panel</p>
      <p q:slot={'secondPanel'}>second Panel</p>
    </Divider>
  )
})`,i=n(r(()=>t(()=>import("./q-DafcinRP.js"),[]),"s_GibEMSprR4k")),o="/corrosive-components//docs/display/resizable-panels/",e="Resizable Panels",l={title:`Corrosive Components - ${e} Component for qwik`,meta:[{name:"description",content:`Explore the ${e} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${e} Component`},{property:"og:description",content:`Learn how to implement the ${e} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:o},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${e} Component`},{name:"twitter:description",content:`Implement the ${e} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:o}]};export{p as _auto_code,i as default,l as head};

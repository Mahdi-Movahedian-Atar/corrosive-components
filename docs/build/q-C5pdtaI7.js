import{_ as t}from"./q-uemlvruI.js";import{H as n,q as r}from"./q-8bdPC3mX.js";const a=`export const App = component$(() => {
    const handleToggle = $((value: boolean) => {
    console.log('Button toggled:', value);
  });

  const members: ToggleButtonMembers[] = [
    { id: 0, value: false, color: 'primary', onChange: handleToggle },
    { id: 1, value: true, color: 'success', onChange: handleToggle },
    { id: 2, value: false, color: 'error', onChange: handleToggle },
  ];
    
  return (
    <ToggleButtonGroup
      members={members}
      class="my-button-group"
      style={{ margin: "10px" }}
      variant="outlined"
      color="primary"
      rounded
      raised
      vertical
    >
      <h1 q:slot={"0"}>Toggle</h1>
      <h1 q:slot={"1"}>Toggle</h1>
      <h1 q:slot={"2"}>Toggle</h1>
    </ToggleButtonGroup>
  );
});
`,p=n(r(()=>t(()=>import("./q-pLdtng0n.js"),[]),"s_YWK39FAynLM")),e="https://mahdi-movahedian-atar.github.io/corrosive-components//docs/from/toggle-button-group/",o="Toggle Button Group",i={title:`Corrosive Components - ${o} Component for qwik`,meta:[{name:"description",content:`Explore the ${o} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${o} Component`},{property:"og:description",content:`Learn how to implement the ${o} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:e},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${o} Component`},{name:"twitter:description",content:`Implement the ${o} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:e}]};export{a as _auto_code,p as default,i as head};

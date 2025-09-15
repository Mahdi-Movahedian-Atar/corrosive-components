import{_ as t}from "./q-DXM0pR1l.js";import{H as n,q as r}from "./q-8bdPC3mX.js";const p=`export const App = component$(() => {
  const state = useSignal(false);

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <ToggleButton
        class="my-toggle-button"
        style={{ margin: '10px', padding: '5px' }}
        color="accent"
        rounded={true}
        raised={true}
        onChange={handleChange}
        value={state.value}
      >
        {state.value ? 'On' : 'Off'}
      </ToggleButton>
      <p>Toggle is {state.value ? 'On' : 'Off'}</p>
    </div>
  );
});`,l=n(r(()=>t(()=>import("./q-CLd7O0rt.js"),[]),"s_DuPz4IBlwYg")),o="/corrosive-components//docs/from/toggle-button/",e="Toggle Button",i={title:`Corrosive Components - ${e} Component for qwik`,meta:[{name:"description",content:`Explore the ${e} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${e} Component`},{property:"og:description",content:`Learn how to implement the ${e} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:o},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${e} Component`},{name:"twitter:description",content:`Implement the ${e} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:o}]};export{p as _auto_code,l as default,i as head};

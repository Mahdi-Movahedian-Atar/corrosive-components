import{_ as o}from "./q-DXM0pR1l.js";import{H as n,q as r}from "./q-8bdPC3mX.js";const s=`export const App = component$(() => {
  const state = useSignal('');

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <Input
        value={state.value}
        class="my-input"
        style={{ margin: "10px" }}
        variant="outlined"
        color="primary"
        rounded
        raised
        placeholder="Enter text"
        onChange={handleChange}
        type="text"
      >
        <Button q:slot={"left"}>left</Button>
        <Button q:slot={"right"}>right</Button>
      </Input>
      <p>Input value: {state.value}</p>
    </div>
  );
});`,i=n(r(()=>o(()=>import("./q-DP7EBeVr.js"),[]),"s_wDFguN8Roxg")),e="/corrosive-components//docs/from/input/",t="Input",l={title:`Corrosive Components - ${t} Component for qwik`,meta:[{name:"description",content:`Explore the ${t} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${t} Component`},{property:"og:description",content:`Learn how to implement the ${t} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:e},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${t} Component`},{name:"twitter:description",content:`Implement the ${t} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:e}]};export{s as _auto_code,i as default,l as head};

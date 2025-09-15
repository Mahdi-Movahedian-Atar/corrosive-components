import{_ as o}from"./q-uemlvruI.js";import{H as n,q as r}from"./q-8bdPC3mX.js";const p=`export const App = component$(() => {
  const state = useSignal('');

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <TextArea
        class="my-textarea"
        style={{ margin: "10px" }}
        variant="outlined"
        color="primary"
        rounded
        raised
        placeholder="Enter your text"
        onChange={handleChange}
        maxLength={200}
        cols={30}
        rows={5}
      >
        <Button q:slot={"left"}>left</Button>
        <Button q:slot={"right"}>right</Button>
      </TextArea>
      <p>Input value: {state.value}</p>
    </div>
  );
});`,i=n(r(()=>o(()=>import("./q-BYEKQf6P.js"),[]),"s_63T04oz0u6U")),t="https://corrosive.dev/docs/from/text-area/",e="Text Area",l={title:`Corrosive Components - ${e} Component for qwik`,meta:[{name:"description",content:`Explore the ${e} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${e} Component`},{property:"og:description",content:`Learn how to implement the ${e} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:t},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${e} Component`},{name:"twitter:description",content:`Implement the ${e} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:t}]};export{p as _auto_code,i as default,l as head};

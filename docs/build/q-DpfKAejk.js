import{_ as o}from"./q-uemlvruI.js";import{H as n,q as r}from"./q-8bdPC3mX.js";const s=`export const App = component$(() => {
  const state = useSignal(undefined);

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <FileInput
        value={state.value}
        class="my-input"
        style={{ margin: "10px" }}
        variant="outlined"
        color="primary"
        rounded
        raised
        placeholder="Enter text"
        onChange={handleChange}
        multiple
        accept=".jpg,.png,.pdf"
      >
        <Button q:slot={"left"}>left</Button>
        <Button q:slot={"right"}>right</Button>
      </FileInput>
      <p>Selected files: {state.value.files ? state.value.files.length : 0}</p>
    </div>
  );
});`,i=n(r(()=>o(()=>import("./q-IuA9YrH5.js"),[]),"s_QJQt8rHo8Rg")),t="https://corrosive.dev/docs/from/file-input/",e="File Input",l={title:`Corrosive Components - ${e} Component for qwik`,meta:[{name:"description",content:`Explore the ${e} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${e} Component`},{property:"og:description",content:`Learn how to implement the ${e} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:t},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${e} Component`},{name:"twitter:description",content:`Implement the ${e} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:t}]};export{s as _auto_code,i as default,l as head};

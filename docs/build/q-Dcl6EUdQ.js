import{_ as t}from"./q-uemlvruI.js";import{H as n,q as r}from"./q-8bdPC3mX.js";const i=`export const App = component$(() => {
  const state = useSignal(undefined);

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <Select
        values={[
          { option: "Option 1", group: false },
          { option: "Option 2", group: false },
          { option: "Group 1", group: true },
          { option: "Option 3", group: false },
        ]}
        class="my-select"
        style={{ margin: "10px" }}
        variant="outlined"
        color="primary"
        rounded
        raised
        placeholder="Select an option"
        onChange={handleChange}
        maxHeight={150}
        direction="down"
      >
        <Button q:slot={"left"}>left</Button>
        <Button q:slot={"right"}>right</Button>
      </Select>
      <p>Selected Value: {state.value}</p>
    </div>
  );
});`,s=n(r(()=>t(()=>import("./q-BrQaAq2S.js"),[]),"s_4aoYdOncM7c")),o="https://mahdi-movahedian-atar.github.io/corrosive-components//docs/from/select/",e="Select",l={title:`Corrosive Components - ${e} Component for qwik`,meta:[{name:"description",content:`Explore the ${e} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${e} Component`},{property:"og:description",content:`Learn how to implement the ${e} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:o},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${e} Component`},{name:"twitter:description",content:`Implement the ${e} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:o}]};export{i as _auto_code,s as default,l as head};

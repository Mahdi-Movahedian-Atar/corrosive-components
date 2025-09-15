import{_ as e}from "./q-DXM0pR1l.js";import{H as n,q as r}from "./q-8bdPC3mX.js";const p=`const buttonMembers: ButtonMembers[] = [
  { id: 0, color: "success", disabled: false, onClick: $(() => alert("Button 1 clicked!")) },
  { id: 1, color: "error", disabled: false, onClick: $(() => alert("Button 2 clicked!")) },
  { id: 2, color: "warning", disabled: true, onClick: $(() => alert("Button 3 clicked!")) },
];

export const App = component$(() => {
  return (
    <ButtonGroup
      members={buttonMembers}
      class="my-button-group"
      style={{ margin: "10px" }}
      variant="outlined"
      color="primary"
      rounded
      raised
      vertical
    >
      <h1 q:slot={"0"}>Buttom</h1>
      <h1 q:slot={"1"}>Buttom</h1>
      <h1 q:slot={"2"}>Buttom</h1>
    </ButtonGroup>
  );
});
`,a=n(r(()=>e(()=>import("./q-GLwI2JjV.js"),[]),"s_FvrCqdxHGsg")),t="/corrosive-components//docs/from/button-group/",o="Button Group",c={title:`Corrosive Components - ${o} Component for qwik`,meta:[{name:"description",content:`Explore the ${o} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${o} Component`},{property:"og:description",content:`Learn how to implement the ${o} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:t},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${o} Component`},{name:"twitter:description",content:`Implement the ${o} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:t}]};export{p as _auto_code,a as default,c as head};

import{_ as t}from "./q-DXM0pR1l.js";import{H as n,q as r}from "./q-8bdPC3mX.js";const s=`export const App = component$(() => {
  const nodes = useStore([
    {
      id: 1,
      label: 'Parent 1',
      expanded: true,
      children: [
        { id: 2, label: 'Child 1.1' },
        { id: 3, label: 'Child 1.2' },
      ],
    },
    {
      id: 4,
      label: 'Parent 2',
      children: [
        { id: 5, label: 'Child 2.1' },
        {
          id: 6,
          label: 'Child 2.2',
          expanded: true,
          children: [
            { id: 7, label: 'Sub Child 2.2.1' },
            { id: 8, label: 'Sub Child 2.2.2' },
          ],
        },
      ],
    },
  ]);

  const handleSelect = $((id) => {
    console.log('Selected Node ID:', id);
  });

  return (
    <div>
      <h1>TreeView Example Component for qwik</h1>
      <TreeView
        nodes={nodes}
        onSelect={handleSelect}
        class="custom-treeview"
        style={{ border: '1px solid #ccc', padding: '10px' }}
      />
    </div>
  );
})`,p=n(r(()=>t(()=>import("./q-Be48dtMU.js"),[]),"s_aYW4U0zqPnk")),o="/corrosive-components//docs/display/tree-view/",e="Tree View",a={title:`Corrosive Components - ${e} Component for qwik`,meta:[{name:"description",content:`Explore the ${e} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${e} Component`},{property:"og:description",content:`Learn how to implement the ${e} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:o},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${e} Component`},{name:"twitter:description",content:`Implement the ${e} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:o}]};export{s as _auto_code,p as default,a as head};

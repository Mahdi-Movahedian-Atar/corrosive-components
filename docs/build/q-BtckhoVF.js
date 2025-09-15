import{_ as t}from"./q-uemlvruI.js";import{H as n,q as r}from"./q-8bdPC3mX.js";const m=`export const App = component$(() => {
  const minSignal = useSignal(10);
  const maxSignal = useSignal(90);

  return (
    <div>
      <Slider
        min={0}
        max={100}
        defaultMin={10}
        defaultMax={90}
        color="accent"
        onChange$={(min, max) => {
          minSignal.value = min!;
          maxSignal.value = max!;
        }}
      />
      <p>Selected Range: {minSignal.value} - {maxSignal.value}</p>
    </div>
  );
});`,p=n(r(()=>t(()=>import("./q-CBr-p4Su.js"),[]),"s_LilWWbVFlUU")),o="https://mahdi-movahedian-atar.github.io/corrosive-components//docs/from/slider/",e="Slider",s={title:`Corrosive Components - ${e} Component for qwik`,meta:[{name:"description",content:`Explore the ${e} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${e} Component`},{property:"og:description",content:`Learn how to implement the ${e} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:o},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${e} Component`},{name:"twitter:description",content:`Implement the ${e} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:o}]};export{m as _auto_code,p as default,s as head};

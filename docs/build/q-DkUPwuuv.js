import{_ as e}from "./q-DXM0pR1l.js";import{H as n,q as s}from "./q-8bdPC3mX.js";const i=`export const App = component$(() => {
  const toasts = useSignal([])
  useContextProvider(ToastContext, toasts)

  const showToast = $(async () => {
    toasts.value = await AddToast(toasts.value, 'This is a success message!', 'success', 'text', 1000);
  });

  return (
    <div>
      <button onClick$={showToast}>Show Success Toast</button>
      <Toast alignX={'right'} alignY={'bottom'}/>
    </div>
  );
});`,p=n(s(()=>e(()=>import("./q-DTLazZPD.js"),[]),"s_9sz6VyjeRyA")),t="/corrosive-components//docs/feedback/toast/",o="Toast",c={title:`Corrosive Components - ${o} Component for qwik`,meta:[{name:"description",content:`Explore the ${o} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`},{property:"og:title",content:`Corrosive Components - ${o} Component`},{property:"og:description",content:`Learn how to implement the ${o} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`},{property:"og:type",content:"website"},{property:"og:url",content:t},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Corrosive Components - ${o} Component`},{name:"twitter:description",content:`Implement the ${o} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`}],links:[{rel:"canonical",href:t}]};export{i as _auto_code,p as default,c as head};

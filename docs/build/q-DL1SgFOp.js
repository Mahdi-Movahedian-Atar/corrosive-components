import{s as a}from"./q-Dt9sSOXM.js";import{_ as s}from"./q-uemlvruI.js";import{C as n}from"./q-CFqz6udX.js";import{J as t,x as r,q as o,d as l,b as e}from"./q-8bdPC3mX.js";const c=a,i=()=>(t(o(()=>s(()=>Promise.resolve().then(()=>u),void 0),"s_peLQcP6nfk8")),r("div",null,{class:"markdown"},[r("h1",null,null,"Styling Overview",3,null),r("p",null,null,["Styles in corrosive components consist of two parts,"," ",r("strong",null,null,"Resources",3,null)," which contain the variables and"," ",r("strong",null,null,"Styles",3,null)," which contain the regular styles."],3,null),r("p",null,null,["Default style is ",r("strong",null,null,"DefaultStyle",3,null)," and resources are"," ",r("strong",null,null,"DefaultResources",3,null)," and"," ",r("strong",null,null,"DefaultDarkResources",3,null)," which are compiled inline CSS files."],3,null),r("h2",null,null,"Resources",3,null),r("p",null,null,"Resources contain the following variables. note that each colour has 3 variants with multiple shades of the same color.",3,null),l(n,{code:`:root {
  --primary-0: #000000;
  --primary-1: #252525;
  --primary-2: #3b3b3b;
  --secondary-0: #ffffff;
  --secondary-1: #d7d7d7;
  --secondary-2: #afafaf;
  --tertiary-0: #838383;
  --tertiary-1: #656565;
  --tertiary-2: #989898;

  --accent-0: #ff6a00;
  --accent-1: #803500;
  --accent-2: #411c00;
  --success-0: #16ff00;
  --success-1: #0e8f00;
  --success-2: #053800;
  --error-0: #ff0000;
  --error-1: #7c0000;
  --error-2: #4b0000;
  --warning-0: #ffdd00;
  --warning-1: #7c6a00;
  --warning-2: #463c00;

  --width: 0.15rem;
  --corner: 0.5rem;
  --maxCorner: screen;

  --small-icon: 0.8lh;
  --medium-icon: 1lh;
  --large-icon: 1.5lh;
}`,language:"CSS",[e]:{code:e,language:e}},3,"x4_0"),r("p",null,{class:"mt-3"},"You can adjust these variables using the following code.",3,null),r("pre",null,null,r("code",null,null,"document.documentElement.style.setProperty('name','value')",3,null),3,null),r("h2",null,null,"Tailwind",3,null),r("p",null,null,"You use the following code to use these variables in with tailwind classes.",3,null),l(n,{code:`/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-0': 'var(--primary-0)',
        'primary-1': 'var(--primary-1)',
        'primary-2': 'var(--primary-2)',
        'secondary-0': 'var(--secondary-0)',
        'secondary-1': 'var(--secondary-1)',
        'secondary-2': 'var(--secondary-2)',
        'tertiary-0': 'var(--tertiary-0)',
        'tertiary-1': 'var(--tertiary-1)',
        'tertiary-2': 'var(--tertiary-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'success-0': 'var(--success-0)',
        'success-1': 'var(--success-1)',
        'success-2': 'var(--success-2)',
        'error-0': 'var(--error-0)',
        'error-1': 'var(--error-1)',
        'error-2': 'var(--error-2)',
        'warning-0': 'var(--warning-0)',
        'warning-1': 'var(--warning-1)',
        'warning-2': 'var(--warning-2)',
      },
      width: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      padding: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      borderWidth: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      spacing: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      borderRadius: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
    },
  },
  plugins: [],
}
`,language:"JavaScript",[e]:{code:e,language:e}},3,"x4_1")],1,"x4_2")),u=Object.freeze(Object.defineProperty({__proto__:null,s_Q5qz7TIcR7w:i,s_peLQcP6nfk8:c},Symbol.toStringTag,{value:"Module"}));export{i as s_Q5qz7TIcR7w,c as s_peLQcP6nfk8};

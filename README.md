# Corrosive Components

![Corrosive Components Logo](./assets/Corrosive.svg)
![npm](https://img.shields.io/npm/v/corrosive-components.svg)
![License](https://img.shields.io/npm/l/corrosive-components.svg)
![Build Status](https://img.shields.io/github/actions/workflow/status/your-github-username/corrosive-components/ci.yml?branch=main)


**Corrosive Components** is a high-performance, fully customizable, and modular component library for the Qwik framework. Designed with flexibility in mind, each component in this library is self-contained and does not depend on any other component or external package. You can easily customize components using CSS variables to fit your unique design needs.

[Docs](https://corrosive.dev/docs/installation/installation/)

## Features

- **Independent Components**: Each component works standalone without needing other components or dependencies.
- **CSS Customization**: Customize components using CSS variables for complete control over design and appearance.
- **TypeScript Support**: Fully typed components, ensuring a robust development experience.

# Crossive Components Installation Guide

Welcome to the **Crossive Components** library! This guide will walk you through the installation process and show you how to use the components in your Qwik project. You can also directly copy and paste the component source code if you prefer not to install the package.

## Installation via NPM or Bun

You can install the **Crossive Components** library using npm or bun. Run the following command in your project directory:

```bash
npm install crossive-components
```
```bash
bun install crossive-components
```

Add `useStyles(DefaultStyle)` with `useStyles(DefaultResources)` or `useStyles(DefaultDarkResources)` to the root layout element to apply styles.

```javascript
import {
  DefaultResources, // or(DefaultDarkResources)
  DefaultStyle,
} from 'corrosive-components'

export default component$(() => {
  useStyles$(DefaultResources) // or(useStyles$(DefaultDarkResources))
  useStyles$(DefaultStyle)
  
  return (
    // content
  )
})
```

## Directly Copying Component Source Code

If you prefer not to install the package, you can directly copy the source code for individual components and their styles and use them in your project.

Note that you still need to add `DefaultResources` or `DefaultDarkResources` to the root layout element.

# Styling Overview

Styles in corrosive components consist of two parts, **Resources** which contain the variables and **Styles** which contain the regular styles.

Default style is **`DefaultStyle`** and resources are **`DefaultResources`** and **`DefaultDarkResources`** which are compiled inline CSS files.

## Resources

Resources contain the following variables. Note that each color has 3 variants with multiple shades of the same color.

```css
:root {
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
}
```

You can adjust these variables using the following code.
```javascript
document.documentElement.style.setProperty('name','value')
```

## Tailwind

You use the following code to use these variables with Tailwind classes.

```javascript
/** @type {import('tailwindcss').Config} */
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
```
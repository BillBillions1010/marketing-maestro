# Material Tailwind with Next.js

Learn how to setup and install **@material-tailwind/react** with Next.js.
---

First, create a new Next.js project using the command below. When asked if you want to use Tailwind CSS with your project, select "Yes" so that it's automatically installed and set up for you. For more details check the Next.js Official Documentation.
```bash
npx create-next-app@latest
```

If you have an existing Next.js project and need to install Tailwind CSS manually, check the guide in the Tailwind CSS documentation.
### Using **NPM**

Install **@material-tailwind/react** as a dependency using NPM by running the following command:

`npm i **@material-tailwind/react**`

### Using **Yarn**

Install **@material-tailwind/react** as a dependency using Yarn by running the following command:

`yarn add **@material-tailwind/react**`

### Using **PNPM**

Install **@material-tailwind/react** as a dependency using PNPM by running the following command:

`pnpm i **@material-tailwind/react**`

## Tailwind CSS Configuration

Once you install **@material-tailwind/react**, you need to wrap your Tailwind CSS configuration with the withMT() function from **@material-tailwind/react**/utils in your tailwind.config.js file.
```ts
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
```
### With **Next.js** 13 App Router and Server Components

If you want to use **@material-tailwind/react** with the Next.js 13 App Router, you need to make use of the
'use client' directive since many Material Tailwind components can only be rendered on the client side. A simple approach is to re-export or wrap Material Tailwind components in your own components.
```ts
"use client";
 
import { ThemeProvider, Button } from "@material-tailwind/react";
 
export { ThemeProvider, Button };
```

Once you've re-exported or wrapped any Material Tailwind components you need, simply point all imports to the new files.
```ts
// ❌ invalid - this will not work on the client side
import { Button } from "@material-tailwind/react";
 
// ✅ valid - this will work on the client side
import { Button } from "path/to/the/new/file";
```
### TailwindCSS Configurations with MonoRepo

If you're using monorepo in your project you need to add the theme and components paths to your tailwind.config.js.
```js
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
```
### Theme Provider

**@material-tailwind/react** comes with a theme provider that sets the default or custom theme/styles for Material Tailwind components. Wrap your entire application with the ``ThemeProvider`` component from **@material-tailwind/react**. The file to add this to depends on your **Next.js** setup:

### With the App Router: app/layout

### With the Pages Router: pages/_app

```ts
import "/styles/globals.css";
 
import { ThemeProvider } from "@material-tailwind/react";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```
### Example

Now you're good to go and use **@material-tailwind/react** in your project.
```ts
import { Button } from "@material-tailwind/react";
 
export default function Example() {
  return <Button>Button</Button>;
}
```

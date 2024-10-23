# CXP Documentation Template (Aria Docs)

This documentation template is forked from the [Aria Docs theme](https://github.com/nisabmohd/Aria-Docs) for Next.js. Features include docs section, blog section, top-level menu, expandable sidebar navigation and search.

i18n features are currently in development for the Aria Docs theme. [See branch on GitHub.](https://github.com/nisabmohd/Aria-Docs/tree/i18n-support?tab=readme-ov-file)


## Use this template

To use this template, you need to have Node.js and npm installed on your local machine.

1. Clone the repository from GitHub using the HTTPS method.

```bash
git clone [URL] cxp-docs-template
```

2. Install dependencies with npm.

```bash
npm install
```

3. Run the development server.

```bash
npm run dev
```

You can preview the site at http://localhost:3000.

## Add pages

- New documentation pages can be added under `./contents/docs`.
- New items in the top level menu can be added in`./components/navbar.tsx` in the `export const NAVLINKS` function. (Links and menu items are hardcoded in the navbar React component.)
- To make new pages appear in the sidebar navigation, you need to add them in the `lib/routes-config.ts` file. Here you can also define the order of navigation items in the sidebar.
## What is this?
This package represents a vanilla JavaScript [Vite](https://vitejs.dev/) web site. It is mainly used by the NCIDS team to test the `@nciocpl/ncids-js` package.

This uses:
* Vite for the build system
* Vituum for allowing us to easily support multiple HTML pages
* Vituum Vite Twig plugin for allowing us to easily share HTML.
  * In the future we could use the ncids-twig package.

> **Note:** Vite projects set the package.json type to [module](https://nodejs.org/docs/latest-v18.x/api/packages.html#packagejson-and-file-extensions). This may be a change from how you normal work with JS tooling, specifically:
1. The use of `import` syntax is required to import modules in your partials, and the commonjs syntax of `require`
   is no longer supported. This applies to any configuration .js files as wel

## Prerequisites
* Node 18 and NPM 9

## How to run
1. `npm ci`
2. `npm run dev`

## How was this app created?
1. `npm create vite@5.1.0 ncids-vite-js --template vanilla-js` to create a Vite web app
   * Select a framework: > Vanilla
	 * Select a variant: > JavaScript
2. Edit package.json to require Node 18/NPM 9
3. Added an .npmrc file to:
	 1. Set @ocpl organization scope.
   2. Enforce checks for Node 18 and NPM 9
4. Run `npm install` to do the initial package install
5. Run `npm install --save @nciocpl/ncids-css @nciocpl/ncids-js` to install the NCIDS
5. Run `npm install --save-dev sass postcss autoprefixer prettier vituum @vituum/vite-plugin-twig` to install the tooling to process sass and generate css files, as well as support for the static site.
6. Created .browserslistrc. An .editorconfig and .prettierrc file is inherited from the root.
7. Created a vite.config.js with NCIDS Sass settings.

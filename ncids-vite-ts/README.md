## What is this?
This package represents a vanilla TypeScript [Vite](https://vitejs.dev/) web site. It is mainly used by the NCIDS team to test the `@nciocpl/ncids-js` package.

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

## File Structure
* root
  * src - the main source, this includes content.
	  * asests/images - these are images used in pages and templates. Just reference them in files as `/assets/images/<filename>`.
    * components - twig templates. I have named them to match DS variant names, or to just something descriptive if it is not a 1-1 match. Most of these are hardcoded for now.
		  * nci-header--extended.twig - The header template.
			* sample-prose.twig - the sample page content for inner pages.
			* usa-banner.twig - the USA banner.
			* usa-footer--nci-big.twig - the footer template.
	  * layouts - page-level twig templates.
		  * common-head.twig - common head elements.
			* inner.twig - inner page template.
		* pages - the content. This can be a .json file, which means just use an existing template to render the data. A .twig, which means you are gonna make the pages HTML your self in a custom way. .twig+.json files for making the page's HTML templated.
		  * index.json is the default page for a folder just like index.html.
		* scripts - just a place for script files that get included in the page's html. See layouts/common-head.twig for how to reference. (It is easy, just say `src="/src/scripts/foo.ts"` and it will get magically transpiled and be available)
		  * ncids-minimal.ts - this is a file like how we do it on cgdp. It contains the minimal amount of code needed for NCIDS for a page. Make other files for other special pages...
		* styles - just a place like scripts, but for .scss. Reference them similarly to script above, same magic.
		  * ncids-minimal.scss - the minimal scss for a web page.
			* home.scss - just flexing here showing off how you can do a custom page with custom scss


## How was this app created?
1. `npm create vite@5.1.0 ncids-vite-ts --template vanilla-ts` to create a Vite web app
   * Select a framework: > Vanilla
	 * Select a variant: > TypeScript
2. Edit package.json to require Node 18/NPM 9
3. Added an .npmrc file to:
	 1. Set @ocpl organization scope.
   2. Enforce checks for Node 18 and NPM 9
4. Run `npm install` to do the initial package install
5. Run `npm install --save @nciocpl/ncids-css @nciocpl/ncids-js` to install the NCIDS
5. Run `npm install --save-dev sass postcss autoprefixer prettier vituum @vituum/vite-plugin-twig` to install the tooling to process sass and generate css files, as well as support for the static site.
6. Created .browserslistrc. An .editorconfig and .prettierrc file is inherited from the root.
7. Created a vite.config.js with NCIDS Sass settings and Vituum plugins.
8. Cleaned out all boilerplate and setup the repo to match the Vituum twig layout.

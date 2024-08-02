# NCIDS Sass example compile methods

### Compile NCIDS into directly CSS

If you plan on working with NCIDS as a static CSS file, you can simply compile the entier package using dart-sass.
The process is a pretty straight forward node command.

### Prerequisites

First ensure you have `node` and `dart-sass` installed.

```
sass --version
```

you should see a version number or something like below.
```
1.77.8 compiled with dart2js 3.4.4
```

if not, install dart-sass from npm and/or add to your package dependencies.
```
npm i dart-sass
```

Next run the following compile command in your terminal.

```
sass -I ./node_modules/@nciocpl/ncids-css/uswds-packages -I ./node_modules/@nciocpl/ncids-css/packages ./node_modules/@nciocpl/ncids-css/index.scss ./path/ncids-compiled.css
```

To understand whats going on lets break that down to each variable.

```xml
<input path> <input path> <entrypoint file> <output file>
```

- The first two items are the required paths that need to be included `-I ./node_modules/@nciocpl/ncids-css/uswds-packages` and `-I ./node_modules/@nciocpl/ncids-css/packages`

- Next we point to the entry file for NCIDS.css `./node_modules/@nciocpl/ncids-css/index.scss` This is where all the packages are referenced.

- Finally the last part is our output path and file name. `./path/ncids-compiled.css`

### Use in your own SCSS files with only the items you need.

If you don't need all of NCIDS, or just want parts you can also import directly into your own SCSS file. This will allow you to extend NCIDS into your own style classes, or just save file size.

Create your scss file by starting off with the `@use` rule as listed below. This sets up root path for any images that will be used in your scss file, as well any icons or images required from NCIDS that you add.

```css
@use 'uswds-core' with (
	$theme-image-path: 'root/images/'
);
```

Next import only the packages you need.
```css
@forward "usa-button";
@forward "nci-header";
@forward "usa-sidenav";
@forward 'usa-site-alert';
```

You can also extend classes to fit your visual presentation.
```css
.special-cta-button {
	@extend usa-button;
	min-width: 5rem;
	margin-bottom: 2rem;
}
```

```
sass -I ./node_modules/@nciocpl/ncids-css/uswds-packages -I ./node_modules/@nciocpl/ncids-css/packages ./src/scss/my-index.scss ./path/examples-styles.css
```

- The first two items are the required paths that need to be included `-I ./node_modules/@nciocpl/ncids-css/uswds-packages` and `-I ./node_modules/@nciocpl/ncids-css/packages`

- Next we point to your new entry file my-index.scss `./src/scss/my-index.scss`

- Finally the output path and file name. `./path/examples-styles.css`


#### About `@use` and `@forward`

The @use and @forward directives are used to import and manage Sassy Cascading Style Sheets (SCSS) modules and partials.

- `@use` directive allows you to import and use functionality from other SCSS modules.
  It provides better encapsulation and avoids conflicting global CSS class names.
  Use it to import SCSS modules that contain reusable styles, mixins, variables, or functions.

- `@forward` directive allows you to re-export styles from one module to another.
  It acts as a bridge between different SCSS modules, making styles available for import in other files.
  Use it when you want to expose certain styles or functionality from one module to be used in another.

**Note:** The load paths option for importing Sass partials or modules is specific to **Dart Sass**. If you're using another Sass implementation, such as Node Sass, LibSass, or Ruby Sass, the load paths option may not be available. Make sure to use the appropriate load path mechanism specific to your chosen Sass implementation.

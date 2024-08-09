# NCIDS Sass example compile methods

### Compile NCIDS into directly CSS

To simply compile NCIDS into a consumable CSS file, you can use the following NPM command for dart-sass.

```
sass -I ./node_modules/@nciocpl/ncids-css/uswds-packages -I ./node_modules/@nciocpl/ncids-css/packages ./node_modules/@nciocpl/ncids-css/index.scss ./path/ncids-compiled.css

<input path> <input path> <ncids scss file> <output>
```

### Use in your own SCSS files with only the items you need.

To import NCIDS directly into your own SCSS file for use or extend into your own style classes.

example 'your-index.scss'
```
@use 'uswds-core' with (
	$theme-image-path: 'root/images/'
);

@import "nci-header";
@import "usa-button";
@import "usa-sidenav";

.my-button {
	@extend usa-button;
	min-width: 5rem;
	margin-bottom: 2rem;
}
```

***Note*** the '$theme-image-path' image path should be set to where the images will be located on your server.


```
sass -I ./node_modules/@nciocpl/ncids-css/uswds-packages -I ./node_modules/@nciocpl/ncids-css/packages ./src/scss/your-index.scss ./path/app-style.css

<input path> <input path> <your scss file> <output>
```

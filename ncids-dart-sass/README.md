# ncids-dart-sass

This is an example application that demonstrates how to use the National Cancer Institute Design System (NCIDS) library with Dart Sass. It provides a basic setup for building and running NCIDS CSS. If you plan to work with NCIDS as a static CSS file, you can compile the entire package using Dart Sass. This process involves a straightforward Node command.

> [!NOTE]
> When referring to the package library "Dart Sass", note that the npm package was renamed from `dart-sass` to `sass`.

## Repository Contents

This repository contains several key files. Each file is annotated with additional information.

```
├── dist/               - Compiled and optimized project files
├── node_modules/       - Project dependencies
├── src/
│   └── index.scss      - Imports NCIDS styles
│   ├── index.html      - Includes example markup for NCIDS components, custom css, and importing fonts
├── .gitignore          - Files and directories ignored in version control
├── .npmrc              - Defines organizational scope
├── package.json        - Project metadata including dependencies and scripts
├── postcss.config.js   - CSS processor config that installs autoprefixing
```

## Getting Started

To get started with the NCIDS Webpack Example, follow the steps below:

1. Navigate to the "ncids-dart-sass" directory:

```bash
cd ncids-example-sites/ncids-dart-sass
```

2. Ensure you are logged in:

	- You can test if you are already logged in with:

		```bash
		npm whoami --scope=@NCIOCPL --registry=https://npm.pkg.github.com
		```

	- If you are not already logged in, run:
		```bash
		npm login --scope=@NCIOCPL --registry=https://npm.pkg.github.com
		```
		Enter the email associated with your GitHub account and use a valid authentication token as your password. Please refer to GitHub's documentation for [creating a personal access token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

3. Install the dependencies:

```bash
npm ci
```

## Using Dart Sass

### Installing from npm

Dart Sass is available, compiled to JavaScript, as an npm package. You can also add it custom projects using:

```bash
npm install --save-dev sass
```

For more information or to learn about other implementation methods, please refer to the [Dart Sass documentation](https://github.com/sass/dart-sass).

### Compiling the CSS

To generate a static CSS file from the NCIDS package, use Dart Sass with the following command:

```bash
npm run build:css
```

#### The script broken down:

- `sass`: Dart Sass CLI
  - `--load-path ./node_modules/@nciocpl/ncids-css/uswds-packages`: load path for USWDS packages
  - `--load-path ./node_modules/@nciocpl/ncids-css/packages`: load path NCIDS packages
  - `./src/index.scss`: input scss file
  - `dist/ncids-compiled.css`: complied sass output
- `&&`
- `postcss`: PostCSS CLI
  - `dist/ncids-compiled.css`: input css file
  - `--output dist/styles.css`: output css file with autoprefixing

## Next Steps

To understand and customize the project further, refer to the comments and instructions provided in the [`index.scss`](src/index.scss) file. It contains example configurations and detailed explanations specific to this example app. Take a look at the various settings, loaders, and plugins defined in the file to learn how the project is set up. Modify the configuration as needed to suit your own project requirements.

Here are brief descriptions of the packages used in this example, along with links to their documentation for more information:

- [sass](https://github.com/sass/dart-sass): A pure JavaScript implementation of Sass.
- [autoprefixer](https://autoprefixer.github.io/): A PostCSS plugin that automatically adds vendor prefixes to CSS rules.
- [postcss-cli](https://www.npmjs.com/package/postcss-cli): PostCSS CLI is a command line interface for [PostCSS](https://postcss.org/)

For more information on each package and their usage, refer to their respective documentation.

## Additional Resources

For more information on using NCIDS and customizing the design system, refer to the official [National Cancer Institute Design System documentation](https://designsystem-dev.cancer.gov/).

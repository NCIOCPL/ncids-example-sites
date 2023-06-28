# ncids-webpack

This is an example application that demonstrates the usage of the National Cancer Institute Design System (NCIDS) library using webpack. It provides a basic setup to build and run NCIDS CSS and JS in your projects.

The purpose of this package is to show the minimal configuration needed to set up a project with the NCIDS with webpack. For development and testing purposes, it is recommended to install your own development server such as [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server).

## Repository Contents

This repository contains several key files. Each file is annotated with additional information.

```
├── dist/               - Compiled and optimized project files
├── node_modules/       - Project dependencies
├── src/
│   ├── assets/         - Image folder
│   ├── index.html      - Includes example markup for NCIDS components and importing fonts
│   ├── index.js        - Project entrypoint importing scripts and styles
│   └── index.scss      - Imports NCIDS styles
├── .gitignore          - Files and directories ignored in version control
├── .npmrc              - Defines organizational scope
├── package.json        - Project metadata including dependencies and scripts
├── postcss.config.js    - CSS processor config that installs autoprefixing
└── webpack.config.js    - Configuration for webpack (JavaScript module bundler)
```

## Getting Started

To get started with the NCIDS Webpack Example, follow the steps below:

1. Navigate to the "ncids-webpack" directory:

```bash
cd ncids-example-sites/ncids-webpack
```

2. Ensure you are logged in:

   - You can test if you are already logged in with:

     ```
     npm whoami --scope=@NCIOCPL --registry=https://npm.pkg.github.com
     ```

   - If you are not already logged in, run:
     ```
     npm login --scope=@NCIOCPL --registry=https://npm.pkg.github.com
     ```
     Enter the email associated with your GitHub account and use a valid authentication token as your password. Please refer to GitHub's documentation for [creating a personal access token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

3. Install the dependencies:

```bash
npm ci
```

### Development Build

To build the application with webpack in development mode, run the following command:

```bash
npm run build:dev
```

This will generate the development build files.

### Production Build

To build the application with webpack in production mode, run the following command:

```bash
npm run build:prod
```

### Watch

To build the application in development mode and to watch for file changes, run the following command:

```bash
npm run build:watch
```

## Viewing the Project

After installing project dependencies with `npm ci`, you can view the project locally without a development server by following these steps:

1. Run the production build command to generate the optimized files: `npm run build:prod`
2. Locate the `dist` folder in your project directory.
3. Inside the `dist` folder, locate the generated HTML file `index.html`.
4. Open the HTML file in your preferred browser.

As mentioned above, this project has been set up to demonstrate the minimal configuration for generating static files to be served via a web server. While the files can be opened in a web browser from the file system, we do not recommend that for local development and testing. If you are not using a development setup that uses a web server, such as Drupal, we recommend adding [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) for local development.

## Next Steps

To understand and customize the project further, refer to the comments and instructions provided in the [`webpack.config.js`](webpack.config.js) file. It contains example configurations and detailed explanations specific to this example app. Take a look at the various settings, loaders, and plugins defined in the file to learn how the project is set up. Modify the configuration as needed to suit your own project requirements.

Here are brief descriptions of the packages used in this example, along with links to their documentation for more information:

- [webpack](https://webpack.js.org/): A module bundler that helps you bundle JavaScript files and other assets for web applications.
- [webpack-cli](https://webpack.js.org/api/cli/): Command-line interface for webpack. It provides a set of commands that simplify the usage of webpack in the terminal.
- [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/): Simplifies the creation of HTML files to serve your bundles. It automatically injects the generated bundles into the HTML template.
- [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/): Extracts CSS into separate files during the build process, creating separate CSS files instead of embedding the styles in the HTML.
- [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/): Minifies CSS to reduce file size and optimize performance.
- [css-loader](https://webpack.js.org/loaders/css-loader/): Loads CSS files and resolves imports and url() expressions within them.
- [postcss-loader](https://webpack.js.org/loaders/postcss-loader/): Processes CSS with PostCSS plugins, allowing you to transform styles with autoprefixer and other PostCSS plugins.
- [autoprefixer](https://autoprefixer.github.io/): A PostCSS plugin that automatically adds vendor prefixes to CSS rules.
- [sass-loader](https://webpack.js.org/loaders/sass-loader/): Loads and compiles Sass/SCSS files into CSS.

For more information on each package and their usage, refer to their respective documentation.

## Additional Resources

For more information on using NCIDS and customizing the design system, refer to the official [National Cancer Institute Design System documentation](https://designsystem-dev.cancer.gov/).

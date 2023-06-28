# ncids-example-sites

This repository contains examples of simple apps that utilize the National Cancer Institute Design System (NCIDS). These examples serve as a starting point for building applications with the NCIDS framework.

## Getting Started

To get started with the NCIDS example sites, follow the steps below:

1. Clone the repository to your local machine:

```bash
gh repo clone NCIOCPL/ncids-example-sites
```

2. Navigate to the cloned directory:

```bash
cd ncids-example-sites
```

3. Explore the individual example directories and choose the one that aligns with your project requirements.

4. Follow the instructions provided in the specific example's README file to set up and run the application.

Please note for all applications consuming the NCIDS, you **must**:

1. Include an `.npmrc` file specifying organizational scope at the root of each repo:

   ```
   @nciocpl:registry=https://npm.pkg.github.com
   ```

2. Log in with a valid authentication token using `npm login`:
   ```bash
   npm login --scope=@NCIOCPL --registry=https://npm.pkg.github.com
   ```

## Examples

Each example directory contains its own README file, providing detailed instructions on how to set up and run the respective application.

1. [NCIDS Webpack](./ncids-webpack): This example demonstrates the minimal setup required to build and run NCIDS using webpack. It provides a starting point for utilizing the design system in your projects.

2. More to come!

## Additional Resources

For more information on using NCIDS and customizing the design system, refer to the official [National Cancer Institute Design System documentation](https://designsystem-dev.cancer.gov/).

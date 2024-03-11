import { defineConfig } from 'vite';
import vituum from 'vituum';
import twig from '@vituum/vite-plugin-twig';
import path from 'path';

export default defineConfig({
	base: '/develop/',
	plugins: [
		vituum({
			pages: {
				normalizeBasePath: true,
			},
		}),
		twig({
			root: './src',
		}),
	],
	build: {
		minify: true,
		cssMinify: true,
	},
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				includePaths: [
					path.join(
						__dirname,
						'node_modules/@nciocpl/ncids-css/packages'
					),
					path.join(
						__dirname,
						'node_modules/@nciocpl/ncids-css/uswds-packages'
					),
				]
			}
		}
	}
});

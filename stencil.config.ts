import { Config } from '@stencil/core'

export const config: Config = {
	namespace: 'animation',
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader',
		},
		{
			type: 'dist-custom-elements',
		},
		{
			type: 'docs-readme',
			footer: '',
		},
		{
			type: 'www',
			serviceWorker: null,
			copy: [{ src: 'samples' }],
		},
	],
}

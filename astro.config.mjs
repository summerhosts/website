// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import d2 from 'astro-d2';

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'Summer Hosts',
		social: {
			github: 'https://github.com/summerhosts/website',
		},
		sidebar: [
			{
				label: 'Introduction',
				autogenerate: { directory: 'introduction' },
			},
			{
				label: 'Hosts',
				autogenerate: { directory: 'hosts' },
			},
		],
	}), d2()],
});
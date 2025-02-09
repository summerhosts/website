// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Summer Hosts',
			social: {
				github: 'https://github.com/DisserCord/summerhosts',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'Introduction' },
				},
				{
					label: 'Hosts',
					autogenerate: { directory: 'Hosts' },
				},
			],
		}),
	],
});

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://summerhosts.netlify.app",

  integrations: [
    expressiveCode(),
    mdx(),
    mermaid({
      theme: "forest",
      autoTheme: true,
    }),
    starlight({
      title: "Summerhosts",
      favicon: "/icons/favicon_white.svg",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/summerhosts/site",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          link: "/",
        },
        {
          label: "History",
          link: "/history",
        },
        {
          label: "Companies",
          collapsed: true,
          autogenerate: { directory: "companies" },
        },
        {
          label: "Hosts",
          collapsed: true,
          autogenerate: { directory: "hosts" },
        },
        {
          label: "Misc",
          collapsed: true,
          autogenerate: { directory: "misc" },
        },
        {
          label: "People",
          collapsed: true,
          autogenerate: { directory: "people" },
        },
        {
          label: "Software",
          collapsed: true,
          autogenerate: { directory: "software" },
        },
      ],
    }),
  ],
});
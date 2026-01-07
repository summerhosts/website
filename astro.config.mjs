// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import starlightThemeRapide from "starlight-theme-rapide";
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
      logo: {
        dark: "./src/assets/icons/favicon.svg",
        light: "./src/assets/icons/favicon_white.svg",
        alt: "summerhosts logo",
      },
      editLink: {
        baseUrl:
          "https://github.com/summerhosts/site/edit/main/src/content/docs/",
      },
      plugins: [starlightThemeRapide()],
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

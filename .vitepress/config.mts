import { withSidebar } from "vitepress-sidebar";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(
    {
      title: "Summerhosts",
      description: "The history of ephemeral hosting services.",

      srcDir: "content",
      assetsDir: "assets",

      head: [["link", { rel: "icon", href: "/icons/favicon_white.png" }]],
      cleanUrls: true,

      sitemap: {
        hostname: "https://summerhosts.netlify.app",
      },
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: "Home", link: "/" }],

        sidebar: [
          { text: "Introduction", link: "/" },
          { text: "History", link: "/history" },
        ],

        socialLinks: [
          { icon: "github", link: "https://github.com/summerhosts/site" },
        ],
      },
    },
    {
      scanStartPath: "content",
      documentRootPath: "/",
      manualSortFileNameByPriority: ["history.md"],
      collapsed: true,
      collapseDepth: 1,
      capitalizeFirst: true,
      useTitleFromFrontmatter: true,
    },
  ),
);

import { h, nextTick, watch } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import DateDisplay from "./components/DateDisplay.vue";
import { useData } from "vitepress";
import { createMermaidRenderer } from "vitepress-mermaid-renderer";
// import "./proper_grouping.css"
import "./custom.css"

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData();

    const initMermaid = () => {
      const mermaidRenderer = createMermaidRenderer({
        theme: isDark.value ? "dark" : "forest",
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
        },
      });

      mermaidRenderer.setToolbar({
        desktop: {
          zoomIn: "enabled",
          zoomOut: "enabled",
          resetView: "enabled",
          download: "disabled",
          copyCode: "disabled",
          positions: { vertical: "top", horizontal: "right" },
        },
        mobile: {
          zoomIn: "disabled",
          zoomOut: "disabled",
          resetView: "enabled",
          copyCode: "disabled",
          positions: { vertical: "bottom", horizontal: "left" },
        },
        fullscreen: {
          zoomLevel: "enabled",
          toggleFullscreen: "enabled",
        },
      });
    };

    // initial mermaid setup
    nextTick(() => initMermaid());

    // on theme change, re-render mermaid charts
    watch(
      () => isDark.value,
      () => {
        initMermaid();
      },
    );

    return h(DefaultTheme.Layout);
  },
  enhanceApp({ app }) {
    app.component("DateDisplay", DateDisplay);
  },
} satisfies Theme;

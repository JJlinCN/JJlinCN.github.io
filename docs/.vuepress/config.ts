import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",//部署到github上面的默认特殊仓库username.github.io下面

  locales: {
    "/": {
      lang: "zh-CN",
      title: "开源知识库",
      description: "JJlinCN的开源知识库",
    },
    "/en/":{
      lang:"en-US",
      title: "Document demo",
      description: "This is a document with vupress-theme-hope",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
    "@RCtag":path.resolve(__dirname,"./components/RCtag.vue",),
    "@tagCloud":path.resolve(__dirname,"./components/tagCloud.vue",),
  },
});

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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
});

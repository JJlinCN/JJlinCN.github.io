import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { alertPlugin } from "vuepress-plugin-alert";
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

  // alert:[
  //   {
  //     id: "2019-7-29",
  //     title: "文档公告",
  //     content: `我们经常发布文档更新，部分页面的翻译可能仍在进行中。有关最新信息，请访问<a href="/en/">英文文档</a>。如果某个页面上的翻译有问题，请提issues<a href="https://github.com/teadocs/matplotlib-cn/issues" target="_blank">告诉我们</a>。`,
  //   },
  // ],
  
  // plugins: [alertPlugin()],

});

// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/bounce-icon.scss"
export default defineClientConfig({
  // 客户端增强
  enhance: ({ app }) => {
    // 注册全局组件
 
  },

  // 全局注册
  setup() {
    // 注册全局 Composition API
    setupRunningTimeFooter(
      new Date("2023-06-30"),
      {
        "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },

  // 全局组件
  rootComponents: [

    // ...
  ],
});

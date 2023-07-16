import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": "structure",//默认路径匹配就结构化生成所有文件结构中的目录索引
  //"/blog/":"structure",
  "/note/":"structure",
  "/software/":"structure",
  "/life/":"structure",
  "/others/":"structure",
});

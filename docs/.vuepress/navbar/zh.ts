import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([//navbar函数包裹，为了方便用户在编写时能够得到相应的属性提示和代码补全
  "/",
  { text: "博客",//把导航栏的图标和标题和README.md分开指定，更有灵活性
    icon: "blog", 
    link: "/blog/"
  },
  {
    text: "学习笔记",
    icon: "note",
    link: "/note/"
  },
  {
    text: "软件教程",
    icon: "software",
    link: "/software/"
  },
  {
    text: "日常生活",
    icon: "workingDirectory",
    link: "/life/"
  },
  {
    text: "收藏夹",
    icon: "folder",
    link: "/docs_star/"
  }
]);

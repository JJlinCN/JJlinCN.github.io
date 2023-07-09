import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  //全局共用配置------------------------------------------------------------
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "JJlinCN",
    url: "https://JJlinCN.github.io",
    email: "jjlincnpyt@qq.com"
  },

  favicon: "book_logo.png",

  iconAssets: "iconfont",

  logo: "/logo.jpg",

  repo: "JJlinCN/JJlinCN.github.io",

  docsDir: "demo/theme-docs/src",
  //多语言配置部分-------------------------------------------------------------
  locales: {//多语言配置对象
    "/": {//中文配置
      // 导航栏相关配置
      navbar: zhNavbar,
      // 侧边栏相配置
      sidebar: zhSidebar,
      // 页脚配置
      footer: "默认页脚",
      // 博客配置
      blog:{
        sidebarDisplay:"mobile",//博客侧边栏显示
        articlePerPage:10,//默认每页展示文章数量为10
        avatar:"/logo.svg",//博主头像
        name:"JJlinCN",//博主姓名
        roundAvatar:true,//头像圆形裁剪配置
        description:"纸上得来终觉浅，绝知此事要躬行",//座右铭
        //#region 显式指定可折叠代码区域
        /*
        intro:"",//指定个人介绍页地址，点击头像和姓名跳转
        medias:{//配置社交媒体链接的对象
        //知名社交媒体有内置图标，如github，可直接设置社交媒体名称：社交媒体地址 
        GitHub: "https://github.com/JJlinCN",
        //自定义社交媒体链接需提供链接加图标组成的元组:社交媒体名称：[社交媒体地址，社交媒体svg图标]
        }
        */
       //#endregion

      },
      
      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    /**
      * English locale config
      */
    "/en/":{
        //英文网站主题配置,待完善......
    }
  },
//个性化配置-------------------------------------------------------------------------------
  
  darkmode: "switch",

  fullscreen: true,
//插件功能选项-----------------------------------------------
  plugins: {
    //启用博客功能
    blog:true,

    //评论插件功能待开放
    // comment: {
    //   // @ts-expect-error: You should generate and use your own comment service
    //   provider: "Waline",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation:[
        "highlight", 
        "math", 
        "search", 
        "notes", 
        "zoom"
      ],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },

});

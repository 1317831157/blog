import { defineConfig } from "vitepress"

export default defineConfig({
  title: "我的个人博客",
  description: "分享我的思考与经验",
  base: "/",
  ignoreDeadLinks: true,
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/articles/" },
      // { text: "项目", link: "/projects/" },
      { text: "关于", link: "/about/" },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "技术博文",
          items: [
            {
              text: "如何使用 VitePress 搭建个人博客",
              link: "/articles/tech/vitepress-blog",
            },
            {
              text: "Vue3 组合式 API 实践指南",
              link: "/articles/tech/vue3-composition-api",
            },
            {
              text: "前端性能优化策略",
              link: "/articles/tech/frontend-performance",
            },
          ],
        },
        {
          text: "生活随笔",
          items: [
            {
              text: "远程工作一年的感受与思考",
              link: "/articles/life/remote-work-experience",
            },
            { text: "我的极简主义生活尝试", link: "/articles/life/minimalism" },
          ],
        },
        {
          text: "读书笔记",
          items: [
            {
              text: "我的2025年阅读计划",
              link: "/articles/books/reading-plan-2025",
            },
            {
              text: "《原子习惯》读书笔记",
              link: "/articles/books/atomic-habits",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/yourusername" },
      { icon: "twitter", link: "https://twitter.com/yourusername" },
      { icon: "linkedin", link: "https://linkedin.com/in/yourusername" },
    ],
    footer: {
      copyright: "Copyright © 2025 我的个人博客",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
})

import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '技术学习',
    items: [
      { text: 'Java基础', link: '/articles/java/index', activeMatch: '/articles/java/' },
    ],
    activeMatch: '/articles/',
  },
  {
    text: '文章归档',
    items: [
      { text: '问题总结', link: '/archives/problem/index', activeMatch: '/archives/problem/' },
      { text: '常用服务', link: '/archives/service/index', activeMatch: '/archives/service/' },
      { text: '工具', link: '/archives/tools/index', activeMatch: '/archives/tools/' },
    ],
    activeMatch: '/archives/',
  },
  { text: '关于', link: '/about' },
]

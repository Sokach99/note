import type { DefaultTheme } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'
import type { ExtendConfig } from './typing'

export const themeConfig: DefaultTheme.Config & ExtendConfig = {
  nav, // 导航栏配置
  sidebar, // 侧边栏配置

  logo: '/logo.png',
  outline: {
    level: 'deep', // 右侧大纲标题层级
    label: '目录', // 右侧大纲标题文本配置
  },
  darkModeSwitchLabel: '切换日光/暗黑模式',
  sidebarMenuLabel: '文章',
  returnToTopLabel: '返回顶部',
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇',
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: 'github', link: 'https://github.com' },
  ],

  // 自定义扩展: 文章元数据配置
  articleMetadataConfig: {
    author: '查尔斯', // 文章全局默认作者名称
    authorLink: '/about/me', // 点击作者名时默认跳转的链接
    showViewCount: false, // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
  },
  // 自定义扩展: 文章版权配置
  copyrightConfig: {
    license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
    licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/',
  },
  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: true, // 是否显示页脚
    icpRecordCode: '渝ICP备2024023642号-1', // ICP备案号
    publicSecurityRecordCode: '备案中...', // 联网备案号
    copyright: `Copyright © 2023-${new Date().getFullYear()} By Sokach`, // 版权信息
  },
}

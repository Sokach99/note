import { defineConfig } from 'vitepress'
import { metaData } from './config/constant'
import { themeConfig } from './config/theme'
import { markdown } from './config/markdown'
import { head } from './config/head'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: metaData.title,
  description: metaData.description,
  lang: metaData.lang,

  head,

  cleanUrls: true, // 清理url
  lastUpdated: true,
  markdown,

  // 主题配置
  themeConfig,
})

import DefaultTheme from 'vitepress/theme'
import '@arco-design/web-vue/dist/arco.css'
import './styles/style.css'
import './styles/custom.css'
import ArcoVue from '@arco-design/web-vue'
import BasicLayout from './Layout.vue'
import ArticleMetadata from './components/ArticleMetadata.vue'

export default {
  ...DefaultTheme,
  Layout: BasicLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)

    // 注册全局组件
    ctx.app.use(ArcoVue)
    ctx.app.component('ArticleMetadata', ArticleMetadata)
  },
}

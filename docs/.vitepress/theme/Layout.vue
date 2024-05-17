<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import md5 from 'blueimp-md5'
import { computed } from 'vue'
import Copyright from './components/Copyright.vue'
import Footer from './components/Footer.vue'

const { Layout: DefaultLayout } = DefaultTheme
const { page, theme, frontmatter } = useData()
const hasSidebar = computed(() => {
  return (
    frontmatter.value.aside !== false && frontmatter.value.layout !== 'home'
  )
})
</script>

<template>
  <ClientOnly>
    <DefaultLayout>
      <template #doc-footer-before>
        <Copyright
          v-if="(frontmatter?.aside ?? true) && (frontmatter?.showArticleMetadata ?? true) && !(frontmatter.authorLink)"
          :key="md5(page.relativePath)"
        />
      </template>
      <template #layout-bottom>
        <Footer v-if="!hasSidebar && (theme.footerConfig?.showFooter ?? true) && (frontmatter?.showFooter ?? true)" />
      </template>
    </DefaultLayout>
  </ClientOnly>
</template>

<style scoped>

</style>

export interface ExtendConfig {
  articleMetadataConfig: {
    author: string
    authorLink: string
    showViewCount: boolean
  }
  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: boolean
    icpRecordCode: string
    publicSecurityRecordCode: string
    copyright: string
  }
}

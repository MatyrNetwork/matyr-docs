
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/static/icon.png" alt="MatyrNetwork-Logo" style={{ height: '40px', marginRight: '8px' }} />
      MatyrNetwork
    </span>
  ),
  footer: {
    text: (
      <span>
        <a href="#" target="_blank">
          ©MatyrNetwork.
        </a>
      </span>
    ),
  },
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  sidebar: {
    defaultMenuCollapseLevel: 10,
    toggleButton: true,
  },
  toc: {
    backToTop: true
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – MatyrNetwork'
      }
    }
  }
}

export default config

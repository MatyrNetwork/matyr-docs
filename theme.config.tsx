
import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

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
  docsRepositoryBase: 'https://github.com/your-repo/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    return asPath !== '/' ? { titleTemplate: '%s – MatyrNetwork' } : undefined;
  },
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="icon" href="/../static/icon.png" type="image/png" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 10,
    toggleButton: true,
  },
  toc: {
    backToTop: true
  },
}

export default config

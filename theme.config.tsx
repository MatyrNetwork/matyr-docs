import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/static/icon.png" alt="MatyrNetwork-Logo" style={{ height: '40px', marginRight: '8px' }} />
      MatyrNetwork
    </span>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 10,
    toggleButton: true,
  },
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="icon" href="/static/icon.png" type="image/png" />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | MatyrNetwork'
      }
    }
  },
  footer: {
    text: (
      <span>
        <a href="#" target="_blank">
          ©MatyrNetwork.
        </a>
      </span>
    )
  },
  primaryHue: {
    light: 247,
    dark: 247
  },
  primarySaturation: {
    light: 100,
    dark: 12
  }
}  

export default config

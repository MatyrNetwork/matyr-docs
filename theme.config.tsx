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
  sidebar: {
    defaultMenuCollapseLevel: 10,
    toggleButton: true,
  },
  head: function useHead() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="icon" href="/static/icon.png" type="image/png" />
      </>
    )
  },
  useNextSeoProps: function() {
    const { asPath } = useRouter();
    const arr = asPath.replace(/[-_]/g, ' ').split('/');
    const category = (arr[1] && arr[1][0] !== '#' && arr[1]) || 'MatyrNetwork';
    const rawTitle = arr[arr.length - 1];
    const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

    return {
      titleTemplate: `${title} - ${
        rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
      }`,
    };
  }
}

export default config

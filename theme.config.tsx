import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { SpeedInsights } from "@vercel/speed-insights/next"


const config: DocsThemeConfig = {
    logo: (
        <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/static/icon.png" alt="MatyrNetwork-Logo" style={{ height: '40px', marginRight: '8px' }} />
            MatyrNetwork
        </span>
    ),
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    head: () => (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
            <link rel="icon" href="/static/icon.png" type="image/png" />
            <meta name="description" content="Learn about the MatyrNetwork, its features, and how it can help you build robust network solutions." />
            <meta property="og:title" content="Introduction to MatyrNetwork" />
            <meta property="og:description" content="Overview of MatyrNetwork, its architecture, and core functionalities." />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://matyrnetwork.my.id/docs/introduction" />
            <meta property="og:image" content="https://matyrnetwork.my.id/images/matyrnetwork-intro.jpg" />

        </>
    ),
    useNextSeoProps: () => {
        const { asPath } = useRouter();
        const pathParts = asPath.replace(/[-_]/g, ' ').split('/');
        const category = (pathParts[1] && pathParts[1][0] !== '#' && pathParts[1]) || 'MatyrNetwork';
        const rawTitle = pathParts[pathParts.length - 1];
        const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

        return {
            titleTemplate: `${title} - ${rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}`,
        };
    },
    footer: {
        text: (
            <span>
                <a href="https://matyrnetwork.my.id" target="_blank" rel="noopener noreferrer">
                    ©MatyrNetwork 2022 - 2024.
                </a>
            </span>
        ),
    },
    feedback: {
        useLink: () => 'https://matyrnetwork.my.id/help'
    },
    editLink: {
        component: null
    },
    toc: {
        backToTop: true
    }
};

export default config;

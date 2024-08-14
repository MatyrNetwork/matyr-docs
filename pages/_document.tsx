// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Anda dapat menambahkan meta tag atau link tambahan di sini */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

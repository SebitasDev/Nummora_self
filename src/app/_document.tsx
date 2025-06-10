
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    {/* PWA Manifest */}
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="apple-touch-icon" href="/icons/icon-192.png" />

                    {/* Recomendado para mejor compatibilidad */}
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="apple-mobile-web-app-title" content="MiApp" />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="msapplication-TileImage" content="/icons/icon-192.png" />
                    <link rel="icon" href="/icons/icon-192.png" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

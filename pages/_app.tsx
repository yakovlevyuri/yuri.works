import { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles';

const FaviconMeta = () => (
  <>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/favicons/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/favicons/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/favicons/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/favicons/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/favicons/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/favicons/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="/favicons/ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#ffffff"></meta>
  </>
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Yuri Yakovlev — JavaScript Developer</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content="Yuri Yakovlev — JavaScript Developer" />
      <meta name="description" content="yuri.works website" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yuri.works/" />
      <meta
        property="og:title"
        content="Yuri Yakovlev — JavaScript Developer"
      />
      <meta property="og:description" content="yuri.works website" />
      <meta property="og:image" content="https://yuri.works/og/og.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yuri.works/" />
      <meta
        property="twitter:title"
        content="Yuri Yakovlev — JavaScript Developer"
      />
      <meta property="twitter:description" content="yuri.works website" />
      <meta property="twitter:image" content="https://yuri.works/og/og.png" />

      <FaviconMeta />
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;

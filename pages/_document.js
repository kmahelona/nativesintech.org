import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <title>Supporting technologists serving Native communities</title>
          <meta
            name="title"
            content="Supporting technologists serving Native communities"
          />
          <meta
            name="description"
            content="Natives in Tech is a coalition of Native and non-Native developers who seek to empower and support Native communities around the world through open source technology."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nativesintech.org/" />
          <meta
            property="og:title"
            content="Supporting technologists serving Native communities"
          />
          <meta
            property="og:description"
            content="Natives in Tech is a coalition of Native and non-Native developers who seek to empower and support Native communities around the world through open source technology."
          />
          <meta
            property="og:image"
            content="https://nativesintech.org/computer.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://nativesintech.org/" />
          <meta
            property="twitter:title"
            content="Supporting technologists serving Native communities"
          />
          <meta
            property="twitter:description"
            content="Natives in Tech is a coalition of Native and non-Native developers who seek to empower and support Native communities around the world through open source technology."
          />
          <meta
            property="twitter:image"
            content="https://nativesintech.org/computer.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
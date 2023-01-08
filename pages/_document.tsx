import { Html, Head, Main, NextScript, } from 'next/document'



export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My personal website" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, Mongoose, Bootstrap, Material-UI, Git, GitHub, Heroku, Vercel" />
        <meta name="author" content="Ovais Azeem" />
        <meta property="og:title" content="Ovais Azeem" />
        <meta property="og:description" content="My personal website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://personal-website-dec49.web.app//" />
        <meta property="og:site_name" content="Ovais Azeem" />
        <meta property="og:type" content="website" />
        <title>Ovais Azeem</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

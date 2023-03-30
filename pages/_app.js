import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import React from 'react'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

  return(
    <>
    <Head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8FLWMH9R4T"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8FLWMH9R4T');
      </script>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

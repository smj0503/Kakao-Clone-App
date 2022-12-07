import '../styles/globals.css'
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <title>Kakao Clone App</title>
        </Head>
        <Component />
      </>
  )
}

export default MyApp

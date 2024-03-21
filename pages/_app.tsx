import { AppProps } from "next/app";
import "/styles/globals.css";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
        <title>NEXT JS APP</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>;
}

// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import { ArticleProvider } from "@/components/utils/Data";
import {Header} from '../components/layout/Header';
import {Contact} from '../components/layout/Contact';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Additional head elements go here */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ArticleProvider>
        <Header/>
        <Component {...pageProps} />
        <Contact/>
      </ArticleProvider>
    </>
  );
}

export default MyApp;

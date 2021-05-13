import "../styles/plugins.css";
import "../styles/style.css";
import "../styles/templete.css";
import "../styles/skin3.css";
import Head from "next/head";
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Head>
          <title>Lavi theme</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Vidaloka&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
  );
}

export default MyApp;

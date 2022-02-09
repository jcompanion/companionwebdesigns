import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CompanionWebDesigns</title>
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
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TRACKING_ID}`}>
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131558581-3');
</script>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

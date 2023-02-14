import Image from 'next/image';
import Layout from '../components/Layout';
import heroImg from '../public/images/mainHeroC.svg';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Cta from '../components/Cta';
import Head from 'next/head';

import { fetchAPI } from '../utils/api';

export async function getStaticProps() {
  const projectData = await fetchAPI('projects');
  return {
    props: {
      projectData,
    },

    revalidate: 30,
  };
}

export default function Home({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Joshua Companion</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <main>
        <Header />
        <Projects props={projectData} />
        <Services />
        <Skills />
        <Cta />
      </main>
    </Layout>
  );
}

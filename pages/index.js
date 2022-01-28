import Image from "next/image";
import Layout from "../components/Layout";
import heroImg from "../public/images/mainHeroC.svg";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Cta from "../components/Cta";

import { fetchAPI } from "../utils/api";

export async function getStaticProps() {
  const projectData = await fetchAPI("projects");
  console.log(projectData);
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

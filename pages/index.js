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
  const projects = await fetchAPI("projects");

  return {
    props: {
      projects,
    },
    revalidate: 30,
  };
}

export default function Home(props) {
  return (
    <Layout>
      <main>
        <Header />
        <Projects props={props} />
        <Services />
        <Skills />
        <Cta />
      </main>
    </Layout>
  );
}

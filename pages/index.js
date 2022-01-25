import Image from "next/image";
import Layout from "../components/Layout";
import heroImg from "../public/images/mainHeroC.svg";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <Layout>
      <main>
        <Header />
        <Projects />
        <Services />
        <Skills />
        <Cta />
      </main>
    </Layout>
  );
}

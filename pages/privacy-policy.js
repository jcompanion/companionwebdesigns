import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { fetchAPI } from "../utils/api";

export async function getStaticProps() {
  const pageData = await fetchAPI("privacy");
  return {
    props: {
      pageData,
    },

    revalidate: 30,
  };
}

const privacyPolicy = ({ pageData }) => {
  const policy = pageData.policy;
  return (
    <Layout>
      <section className="py-12">
        <div className="prose dark:prose-dark container mx-auto dark:text-gray-200">
          <ReactMarkdown>{policy}</ReactMarkdown>
        </div>
      </section>
    </Layout>
  );
};

export default privacyPolicy;

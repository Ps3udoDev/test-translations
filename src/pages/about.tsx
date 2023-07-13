import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import { graphql } from "gatsby"

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <About />
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default AboutPage

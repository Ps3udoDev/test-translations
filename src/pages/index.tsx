import React from "react"
import Layout from "../components/Layout"
import Home from "../components/Home"
import { graphql } from "gatsby"
import Header from "../components/Header"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Home />
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

export default IndexPage

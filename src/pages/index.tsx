import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Header from "../components/Header"
import { useTranslation } from "react-i18next";

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const test = t('home.test')
  console.log(test)
  return (
    <div>
      <Header>
        <div>
          this his header
        </div>
      </Header>
      <div>
        {t('common.getStarted')}
      </div>
    </div>
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

export const Head: HeadFC = () => <title>Home Page</title>

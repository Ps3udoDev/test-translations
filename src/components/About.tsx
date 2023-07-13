import React from "react"
import { useTranslation } from "react-i18next"

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t("aboutUs")}</h1>
      <p>{t("aboutContent")}</p>
    </div>
  )
}

export default About

import React from "react"
import { useTranslation } from "react-i18next"

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("homeContent")}</p>
    </div>
  )
}

export default Home

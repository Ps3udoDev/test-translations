import React from "react"
import { useTranslation } from "react-i18next"

interface layoutProps {
  children: React.ReactNode
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const { t } = useTranslation()

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">{t("home")}</a></li>
            <li><a href="/about">{t("about")}</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout

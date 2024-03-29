import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "src/styles/GlobalStyle"
import Router from "src/components/atoms/Router"
import ThemeContext from "src/contexts/ThemeContext"
import { ReactNode } from "react"
import DefaultTemplate from "src/templates/DefaultTemplate/index"
import SubscriptionContext from "./contexts/SubscriptionContext"

type AppProps = {
  children?: ReactNode
}

function App({ children }: AppProps) {
  return (
    <BrowserRouter>
      <ThemeContext>
        <SubscriptionContext>
          <DefaultTemplate>
            <GlobalStyle />
            <Router />
            {children}
          </DefaultTemplate>
        </SubscriptionContext>
      </ThemeContext>
    </BrowserRouter>
  )
}

export default App

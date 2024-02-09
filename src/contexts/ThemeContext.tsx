import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

type ThemeType = {
  colors: {
    primary: string,
    secondary: string
  }
}

export const theme: ThemeType = {
  colors: {
    primary: "#4b1977",
    secondary: "#5B2A86"
  }
}

type ThemeContextProps = {
  children: ReactNode
}

export default function ThemeContext({ children }: ThemeContextProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
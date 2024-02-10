import { ReactNode } from "react"
import { ThemeType } from "src/types/theme"
import { ThemeProvider } from "styled-components"

export const theme: ThemeType = {
  colors: {
    primary: "#4b1977",
    secondary: "#5B2A86",
    hover: "#3f1069",
    success: "#AF0",
    error: "#f00"
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
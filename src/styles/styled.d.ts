import "styled-components"
import { theme } from "src/contexts/ThemeContext"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string
    }
  }
}
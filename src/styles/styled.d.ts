import "styled-components"
import { theme } from "src/contexts/ThemeContext"
import { ThemeType } from "src/types/theme"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType { }
}
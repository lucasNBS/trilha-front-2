import { ReactNode } from "react"
import Header from "src/components/organisms/Header"
import Footer from "src/components/organisms/Footer"
import { DefaultTemplateContentContainer } from "./style"

type DefaultTemplateProps = {
  children: ReactNode
}

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <Header />
      <DefaultTemplateContentContainer>
        {children}
      </DefaultTemplateContentContainer>
      <Footer />
    </>
  )
}
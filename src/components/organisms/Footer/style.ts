import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 4rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .logo-container {
      max-width: unset;
      align-items: center;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 4rem 2rem;
  }
`

export const FooterSubcontainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-basis: 1;
  gap: 1rem;
`

export const FooterSubcontainerTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`

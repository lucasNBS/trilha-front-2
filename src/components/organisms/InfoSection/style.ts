import styled from "styled-components"

export const InfoSectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  @media screen and (max-width: 550px) {
    padding: 6rem 2rem;
  }
`

export const InfoSectionContainerTitle = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 550px) {
    font-size: 2.5rem;
  }
`

export const InfoSectionSubcontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`
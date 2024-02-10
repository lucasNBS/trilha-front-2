import styled from "styled-components"

export const InfoCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const InfoCardSubcontainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 200px;
  height: 200px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`

export const Image = styled.img`
  width: 135px;
  height: 135px;
`

export const InfoCardContainerText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;

  @media screen and (max-width: 550px) {
    font-size: 1.25rem;
  }
`

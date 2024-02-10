import styled from "styled-components"

export const SubscriptionSectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  @media screen and (max-width: 1200px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`

export const SubscriptionSectionContainerTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`

export const SubscriptionSectionContainerText = styled.p`
  font-size: 1.5rem;
  font-weight: lighter;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: 200ms ease-in;

  &:hover {
    transform: scale(1.025);
  }
`
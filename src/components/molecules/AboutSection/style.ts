import styled from "styled-components"

export const AboutSectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 1400px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const AboutSectionSubcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 500px;
  }
`

export const AboutSectionSubcontainerTitle = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 3rem;
  font-weight: bold;

  @media screen and (max-width: 550px) {
    font-size: 2.5rem;
  }
`

export const AboutSectionSubcontainerText = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
`

export const Image = styled.img`
  width: 100%;
  height: 800px;
  max-width: 600px;
  object-fit: cover;
  object-position: 75%;
  border-radius: 8px;
  transition: 200ms ease-in;

  &:hover {
    transform: scale(1.025);
  }

  @media screen and (max-width: 1200px) {
    height: 600px;
  }
`
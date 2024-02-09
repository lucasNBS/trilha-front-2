import styled from "styled-components"

export const AboutSectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const AboutSectionSubcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const AboutSectionSubcontainerTitle = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
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
`
import styled from "styled-components"

export const DetailsSectionContainer = styled.article<{ isEven?: boolean }>`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: ${({ isEven }) => isEven ? "row-reverse" : "row"};
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35);
`

export const DetailsSectionSubcontainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`

export const DetailsSectionSubcontainerTitle = styled.h4`
  font-size: 2rem;
  font-weight: bold;
`

export const DetailsSectionSubcontainerText = styled.p`
  font-size: 1.25rem;
`
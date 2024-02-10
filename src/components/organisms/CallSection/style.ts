import styled from "styled-components";

export const CallSectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 1400px) {
    padding: 0 2rem;
  }
`

export const CallSectionContainerTitle = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;

  @media screen and (max-width: 550px) {
    font-size: 2.5rem;
  }
`

export const CallSectionSubcontainer = styled.div<{
  main?: boolean;
  column?: boolean;
  gap?: string;
  maxWidth?: number
}>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : "unset"};
  display: flex;
  flex-direction: ${({ column }) => column ? "column" : "row"};
  justify-content: space-between;
  align-items: center;
  gap: ${({ gap }) => gap ? gap : "2rem"};

  @media screen and (max-width: 1024px) {
    flex-direction: ${({ main }) => main && "column-reverse"};
  }
`

export const CallSectionSubcontainerTitle = styled.h4`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 550px) {
    font-size: 2.5rem;
  }
`

export const CallSectionSubcontainerText = styled.p`
  text-align: center;
  font-size: 1.25rem;
`

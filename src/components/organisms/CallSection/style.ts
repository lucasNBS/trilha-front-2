import styled from "styled-components";

export const CallSectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

export const CallSectionContainerTitle = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`

export const CallSectionSubcontainer = styled.div<{ column?: boolean; gap?: string; maxWidth?: number }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : "unset"};
  display: flex;
  flex-direction: ${({ column }) => column ? "column" : "row"};
  justify-content: space-between;
  align-items: center;
  gap: ${({ gap }) => gap ? gap : "3rem"};
`

export const CallSectionSubcontainerTitle = styled.h4`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.secondary};
`

export const CallSectionSubcontainerText = styled.p`
  text-align: center;
  font-size: 1.25rem;
`

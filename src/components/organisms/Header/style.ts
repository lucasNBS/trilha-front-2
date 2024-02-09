import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0px;
  width: 100%;
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media screen and (max-width: 550px) {
    padding: 1.5rem 2rem;
  }
`

export const HeaderSubcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
  }
`
import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
`
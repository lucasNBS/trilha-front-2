import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`
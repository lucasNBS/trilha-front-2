import styled from "styled-components"

export const Background = styled.div<{ isShow: boolean }>`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  transform: ${({ isShow }) => !isShow && "scale(0)"};
`

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 769px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 40px;
  height: 40px;
`
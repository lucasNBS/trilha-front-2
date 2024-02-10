import styled from "styled-components"

export const SubscriptionPopUpContainer = styled.div<{ isSubscribed: boolean, isVisible: boolean }>`
  background-color: ${({ theme, isSubscribed }) => isSubscribed
    ? theme.colors.error
    : theme.colors.success
  };
  position: fixed;
  left: 50%;
  top: -100px;
  width: max-content;
  padding: 0.5rem 1.5rem;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: transform 1000ms ease-in;
  transform: ${({ isVisible }) => isVisible ? "translate(-50%, 250px)" : "translateX(-50%)"};
  z-index: 20;
`

export const Image = styled.img`
  width: 32px;
  height: 32px;
`

export const SubscriptionPopUpContainerText = styled.span`
  font-size: 1.25rem;
  font-weight: lighter;
  color: #fff;
`
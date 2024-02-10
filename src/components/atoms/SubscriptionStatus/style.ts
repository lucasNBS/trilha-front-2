import styled from "styled-components"

export const SubscriptionStatusContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.success};
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem;
  margin-top: 4rem;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 1200px) {
    width: calc(100% - 4rem);
    margin: 4rem 2rem 0;
  }

  @media screen and (max-width: 550px) {
    gap: 1rem;
  }
`

export const Image = styled.img`
  width: 64px;
  height: 64px;

  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: 414px) {
    width: 32px;
    height: 32px;
  }
`

export const SubscriptionStatusContainerTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 1.2rem;
  }
`
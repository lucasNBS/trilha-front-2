import styled from "styled-components"

export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  list-style-type: none;
`

export const SocialMediaItem = styled.li``

export const Link = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: #fff;

  &:hover {
    opacity: 0.6;
  }
`
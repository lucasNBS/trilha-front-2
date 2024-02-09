import styled from "styled-components"
import banner from "/images/banner.jpg"

export const BannerContainer = styled.section`
  background: no-repeat center/cover url(${banner});
  position: relative;
  width: 100%;
  height: 800px;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 3rem;
  z-index: 0;

  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`

export const BannerSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export const BannerSubcontainerTitle = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
`

export const BannerSubcontainerText = styled.p`
  width: 60%;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
`

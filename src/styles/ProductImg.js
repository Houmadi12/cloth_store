import styled from "styled-components"
import Image from "next/image"

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
  background-color: white;
  overflow: hidden;
  border: 1px solid #D7D7D7;

  &:hover {
    border-color: #999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    height: 350px;
  }
`

export const StyledImage = styled(Image)`
  object-fit: cover;
`
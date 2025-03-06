import styled from "styled-components"

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  line-height: 0.9;
  color: #222;
  text-transform: uppercase;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export const SubTitle = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
`

export const Year = styled.div`
  font-size: 1rem;
  color: #333;
`
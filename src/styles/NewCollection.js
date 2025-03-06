import styled from "styled-components"

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 0rem 2rem;
  background-color: #f3f3f3;
  margin: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const RightSection = styled.div`
  @media (max-width: 1024px) {
    grid-column: 1;
    grid-row: 1;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3;
  }
`

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
`
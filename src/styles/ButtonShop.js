import styled from "styled-components"
import Link from "next/link"

export const ButtonContainer = styled.div`
  margin-top: 2rem;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e5e5e5;
  color: #222;
  padding: 1rem 1.8rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  width: 200px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d5d5d5;
  }
`
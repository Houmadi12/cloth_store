import styled from "styled-components"

export const NavigationContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #999;
  }
`
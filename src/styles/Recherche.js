import styled from "styled-components"

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-top: 10rem;
  background-color: #f3f3f3;
`

export const CategoryLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.01rem;
  margin-bottom: 1rem;
`

export const CategoryLink = styled.a`
  text-decoration: none;
  color: #333;
  font-family: 'Beatrice Deck Trial';
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.5px;
`

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`

export const SearchInput = styled.input`
  max-width: 20%;
  padding: 0.85rem 1rem 0.85rem 3rem;
  border-radius: 4px;
  border: none;
  background-color: #e5e5e5;
  font-size: 1rem;
  outline: none;
  
  &::placeholder {
    color: #666;
    text-align: right;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: black;
`
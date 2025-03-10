import styled from "styled-components";

// Styled Components
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 150px auto;
`;

export const Breadcrumb = styled.div`
  display: flex;
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
`;

export const BreadcrumbLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 4px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  font-weight: 500;
  
  @media (min-width: 768px) {
    width: 240px;
    padding-top: 120px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 0 12px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const SidebarTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  padding-left: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-left: 40px;
  background-color: #f3f3f3;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #a0a0a0;
    box-shadow: 0 0 0 1px #a0a0a0;
  }
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
  color: #666;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  height: 90px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const CategoryButton = styled.button`
  width: 120px;  
  font-size: 13px;
  border: 1px solid #c5baff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #c5baff;
    color: white;
    transform: scale(1.05);
  }
  
  @media (min-width: 826px) and (max-width: 900px) {
    font-size: 10px;
    padding: 2px 14px;
  }
  
  @media (min-width: 600px) and (max-width: 826px) {
    font-size: 10px;
    padding: 2px 14px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const Header_left = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
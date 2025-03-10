import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

// Loading Components
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #000;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingText = styled.p`
  font-size: 16px;
  color: #666;
`;

// Styled Components
export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
`;

export const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const ProductSection = styled.section`
  flex: 1;
  padding: 20px;
  width: 100%;
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

export const BreadcrumbLink = styled(Link)`
  color: #666;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const SearchAndCategories = styled.div`
  margin-bottom: 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
`;

export const SearchIcon = styled.div`
  color: #666;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  font-size: 16px;
  outline: none;
`;

export const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  overflow-x: auto;
  
  @media (max-width: 768px) {
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 8px;
  }
`;

export const CategoryTab = styled.button`
  padding: 8px 15px;
  border: 1px solid #ddd;
  background-color: ${props => props.active ? '#f5f5f5' : 'white'};
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: ${props => props.active ? '500' : 'normal'};
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Sidebar = styled.aside`
  width: 280px;
  min-width: 280px;
  border-right: 1px solid #eaeaea;
  padding: 20px;
  
  @media (max-width: 768px) {
    display: ${props => props.showOnMobile ? 'block' : 'none'};
    width: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    z-index: 10;
    border-right: none;
    height: 100%;
    overflow-y: auto;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const FilterSection = styled.div`
  margin-bottom: 25px;
  position: relative;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const FilterTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 500;
`;

export const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SizeButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: ${props => props.active ? '#000' : 'white'};
  color: ${props => props.active ? 'white' : '#000'};
  font-size: 14px;
  display: flex;
  align-items: center;
export   justify-content: center;
  cursor: pointer;
  
  &:hover {
    border-color: #000;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  width: 16px;
  height: 16px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
`;

export const Count = styled.span`
  margin-left: 5px;
  color: #999;
  font-size: 14px;
`;

export const AccordionFilter = styled.div`
  margin-bottom: 20px;
  border-top: 1px solid #eaeaea;
  padding-top: 20px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 20px;
  flex: 1;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductCard = styled.div`
  cursor: pointer;
  width: 100%;
`;

export const ProductImageContainer = styled.div`
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`;

export const ProductInfo = styled.div`
  position: relative;
`;

export const ProductCategory = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`;

export const ProductRating = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #f0f0f0;
  padding: 2px 5px;
  font-size: 12px;
  color: #333;
  border-radius: 3px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;
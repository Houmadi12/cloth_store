import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 2%;
  width: 100%;
  position: fixed;
  top: 0; 
  left: 0;
  z-index: 1000; 
  background-color: #f3f3f3; 
  box-shadow: 0 2px 10px rgba(146, 144, 144, 0.1);

  @media (max-width: 400px) {
    padding: 20px 0;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const NavLink = styled.a`
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: 18px;
  font-weight: 400px;
  letter: 2px;

  &:hover {
    color: var(--color-text-secondary);
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RightSectionRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RightSectionLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButtonUser = styled.button`
  background: var(--color-background-hover);
  color: white;
  border: none;
  cursor: pointer;
  padding: 4px 7px;
  position: relative;
  border-radius: 50%;
  border: 1px solid black;
  
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    border-radius: 50%;
  }
`;

export const IconButtonFavori = styled.button`
  background: var(--color-background-hover);
  color: white;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
  border-radius: 50%;
  border: 1px solid black;
  
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    border-radius: 50%;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

export const IconButtonBag = styled.button`
  background: none;
  color: black;
  cursor: pointer;
  padding: 8px;
  position: relative;
  border-radius: 50%;
  border: 1px solid black;
  
  &:hover {
    background-color: var(--color-background-hover);
    color: white;
    border: 1px solid white;
    border-radius: 50%;
  }
`;

export const IconButtonCart = styled.button`
  background: black;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  position: relative;
  border-radius: 16px;
  border: 1px solid black;
  
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    border-radius: 16px;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const IconButtonMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
  border-radius: 50%;
  
  &:hover {
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const MobileOnlyIcon = styled.span`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const DesktopOnlyIcon = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: var(--color-badge);
  color: var(--color-badge-text);
  font-size: 10px;
  border-radius: 50%;
  padding: 2px 6px;
`;

import styled from "styled-components";


export const MobileNavLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    margin-top: 60px;

    & > a {
      display: block;
      color: var(--color-text-primary);
      text-decoration: none;
      font-size: 18px;
      padding: 10px 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        color: var(--color-text-secondary);
      }
    }
  }
`;

// Add this component to create proper spacing below the fixed navbar
export const NavbarSpacer = styled.div`
  height: ${props => props.height || '120px'}; /* Should match navbar height + padding */
  
  @media (max-width: 400px) {
    height: ${props => props.mobileHeight || '80px'};
  }
`;
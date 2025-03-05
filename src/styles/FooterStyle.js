import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  background-color: #ececec;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 20%;
  padding: 2rem;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  width: 80%;
  padding: 2rem;
  background-color: #ececec;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
`;

export const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const NavTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  opacity: 0.7;
`;

export const NavLink = styled.a`
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LanguageLink = styled.a`
  color: #fff;
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
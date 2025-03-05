"use client"
import React from 'react';
import { 
  FooterContainer, 
  LeftSection, 
  RightSection, 
  NavColumn, 
  NavTitle, 
  NavLink, 
  LanguageSelector, 
  LanguageLink, 
  Logo 
} from '../styles/FooterStyle';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <LanguageSelector>
          <LanguageLink href="#" className="active">ENG</LanguageLink>
          <LanguageLink href="#">ESP</LanguageLink>
          <LanguageLink href="#">SVE</LanguageLink>
        </LanguageSelector>
      </LeftSection>
      Bonjour
      <RightSection>
        <NavColumn>
          <NavTitle>Info</NavTitle>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contacts</NavLink>
        </NavColumn>
        
        <NavColumn>
          <NavTitle>Technologies</NavTitle>
          <NavLink href="#">Near-field communication</NavLink>
        </NavColumn>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
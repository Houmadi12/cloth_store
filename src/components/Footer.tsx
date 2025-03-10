"use client";

import React from "react";
import {
  Container,
  InfoSection,
  InfoHeader,
  InfoList,
  InfoItem,
  LanguageSection,
  TechnologiesSection,
  Logo,
  LogoTriangle,
  LogoText,
  TechDescription,
  TechText,
  TechDivider,
} from "@/styles/FooterStyle";

const Footer = () => {
  return (
    <Container>
      <InfoSection>
        <div>
          <InfoHeader>Info</InfoHeader>
          <InfoList>
            <InfoItem>PRICING</InfoItem>
            <InfoItem>ABOUT</InfoItem>
            <InfoItem>CONTACTS</InfoItem>
          </InfoList>
        </div>

        <LanguageSection>
          <InfoHeader>Languages</InfoHeader>
          <InfoList>
            <InfoItem>ENG</InfoItem>
            <InfoItem>ESP</InfoItem>
            <InfoItem>SVE</InfoItem>
          </InfoList>
        </LanguageSection>
      </InfoSection>

      <TechnologiesSection>
        <InfoHeader>Technologies</InfoHeader>

        <Logo>
          <Logo>
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 5V19L2 12L12 5Z" fill="#E5E5E5" />
              <path d="M12 5V19L22 12L12 5Z" fill="#000000" />
            </svg>
          </Logo>
          <LogoText>
            XIV
            <br />
            QR
          </LogoText>
        </Logo>

        <TechDescription>
          <TechText>© 2024 — copyright</TechText>
          <TechDivider />
        </TechDescription>
      </TechnologiesSection>
    </Container>
  );
};

export default Footer;

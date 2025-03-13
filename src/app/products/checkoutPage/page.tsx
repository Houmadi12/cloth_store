"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";
import InformationStep from "@/components/InformationStep";
import ShippingStep from "@/components/ShippingStep";
import PaymentStep from "@/components/PaymentStep";

type CheckoutStep = "information" | "shipping" | "payment";

// Styled Components
const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  text-transform: uppercase;
`;

const StepsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
`;

const StepButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.active ? "black" : "transparent")};
  }
`;

const ContentContainer = styled.div`
  margin-top: 20px;
`;

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("information");

  return (
    <CheckoutContainer>
      <BackButton>
        <FiArrowLeft size={18} /> Retour
      </BackButton>
      
      <Title>Checkout</Title>
      
      <StepsContainer>
        <StepButton active={currentStep === "information"} onClick={() => setCurrentStep("information")}>
          Information
        </StepButton>
        <StepButton active={currentStep === "shipping"} onClick={() => setCurrentStep("shipping")}>
          Shipping
        </StepButton>
        <StepButton active={currentStep === "payment"} onClick={() => setCurrentStep("payment")}>
          Payment
        </StepButton>
      </StepsContainer>

      <ContentContainer>
        {currentStep === "information" && <InformationStep setCurrentStep={setCurrentStep} />}
        {currentStep === "shipping" && <ShippingStep />}
        {currentStep === "payment" && <PaymentStep />}
      </ContentContainer>
    </CheckoutContainer>
  );
};

export default CheckoutPage;

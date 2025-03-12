"use client";

import React from "react";
import styled from "styled-components";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";

// Styled Components
const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 0 auto;
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

const StepButton = styled.button`
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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormSection = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-bottom: 30px;
  
  &.two-columns {
    @media (min-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #a0a0a0;
  }
`;

const SelectField = styled.div`
  position: relative;
  width: 100%;
  
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    appearance: none;
    background-color: white;
    
    &:focus {
      outline: none;
      border-color: #a0a0a0;
    }
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background-color: #f0f0f0;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-left: auto;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const OrderSummary = styled.div`
  background-color: #fafafa;
  padding: 20px;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 350px;
  }
`;

const OrderTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const ItemCount = styled.span`
  color: #666;
  font-size: 14px;
`;

const OrderItemsList = styled.div`
  margin-bottom: 20px;
`;

const OrderItem = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const ItemImage = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const ItemColor = styled.div`
  font-size: 12px;
  color: #666;
`;

const ItemQuantity = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const ItemPrice = styled.div`
  font-size: 14px;
`;

const ChangeButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
`;

const OrderSummaryTable = styled.div`
  margin-top: 30px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
  
  &.total {
    font-weight: bold;
    margin-top: 10px;
    border-top: 1px solid #e0e0e0;
    padding-top: 15px;
  }
`;

const ShippingInfo = styled.div`
  font-size: 12px;
  color: #666;
  font-style: italic;
`;

export default function InformationStep ({setCurrentStep}){
    return (
        <CheckoutContainer>       
        <Layout>
          <FormSection>
            <SectionTitle>Contact Info</SectionTitle>
            <FormGrid>
              <InputField type="email" placeholder="Email" />
              <InputField type="tel" placeholder="Phone" />
            </FormGrid>
            
            <SectionTitle>Shipping Address</SectionTitle>
            <FormGrid className="two-columns">
              <InputField type="text" placeholder="First Name" />
              <InputField type="text" placeholder="Last Name" />
            </FormGrid>
            
            <FormGrid>
              <SelectField>
                <InputField as="select" placeholder="Country">
                  <option value="">Country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                </InputField>
                <FiChevronDown size={16} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </SelectField>
            </FormGrid>
            
            <FormGrid>
              <InputField type="text" placeholder="State / Region" />
            </FormGrid>
            
            <FormGrid>
              <InputField type="text" placeholder="Address" />
            </FormGrid>
            
            <FormGrid className="two-columns">
              <InputField type="text" placeholder="City" />
              <InputField type="text" placeholder="Postal Code" />
            </FormGrid>
            
            <ActionButton onClick={() => setCurrentStep("shipping")}>
              Shipping
              <FiArrowLeft size={16} style={{ transform: 'rotate(180deg)', marginLeft: '10px' }} />
            </ActionButton>
          </FormSection>
          
          <OrderSummary>
            <OrderTitle>
              YOUR ORDER
              <ItemCount>(2)</ItemCount>
            </OrderTitle>
            
            <OrderItemsList>
              <OrderItem>
                <ItemImage>
                  <img src="https://picsum.photos/id/1/200/200" alt="Basic Heavy T-Shirt" />
                </ItemImage>
                <ItemDetails>
                  <ItemTitle>Basic Heavy T-Shirt</ItemTitle>
                  <ItemColor>Black/L</ItemColor>
                  <ItemQuantity>(1)</ItemQuantity>
                </ItemDetails>
                <ItemActions>
                  <ItemPrice>$ 99</ItemPrice>
                  <ChangeButton>Change</ChangeButton>
                </ItemActions>
              </OrderItem>
              
              <OrderItem>
                <ItemImage>
                  <img src="https://picsum.photos/id/2/200/200" alt="Basic Fit T-Shirt" />
                </ItemImage>
                <ItemDetails>
                  <ItemTitle>Basic Fit T-Shirt</ItemTitle>
                  <ItemColor>Black/L</ItemColor>
                  <ItemQuantity>(1)</ItemQuantity>
                </ItemDetails>
                <ItemActions>
                  <ItemPrice>$ 99</ItemPrice>
                  <ChangeButton>Change</ChangeButton>
                </ItemActions>
              </OrderItem>
            </OrderItemsList>
            
            <OrderSummaryTable>
              <SummaryRow>
                <span>Subtotal</span>
                <span>$180.00</span>
              </SummaryRow>
              <SummaryRow>
                <span>Shipping</span>
                <ShippingInfo>Calculated at next step</ShippingInfo>
              </SummaryRow>
              <SummaryRow className="total">
                <span>Total</span>
                <span>$180.00</span>
              </SummaryRow>
            </OrderSummaryTable>
          </OrderSummary>
        </Layout>
      </CheckoutContainer>
    )
}
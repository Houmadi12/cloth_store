import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  position: sticky;
  top: 20px;
  align-self: flex-start;

  @media (min-width: 768px) {
    min-width: 250px;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SummaryTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TotalItem = styled(SummaryItem)`
  margin-top: 16px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 16px;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
`;

const OrderSummary = ({ subtotal, shipping, total, onCheckout }) => {
  return (
    <SummaryContainer>
      <SummaryTitle>Order Summary</SummaryTitle>
      <SummaryItem>
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </SummaryItem>
      <SummaryItem>
        <span>Shipping</span>
        <span>${shipping}</span>
      </SummaryItem>
      <TotalItem>
        <span>Total</span>
        <span>${total}</span>
      </TotalItem>
      <CheckoutButton onClick={onCheckout}>Continue</CheckoutButton>
    </SummaryContainer>
  );
};

export default OrderSummary;
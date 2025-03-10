import styled from 'styled-components';

export const ApproachSection = styled.section`
  padding: 40px 20px;
  background-color: none;
  text-align: center;
  max-width: 100%;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  color: #333;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.5;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.4;
    max-width: 100%;
  }
`;
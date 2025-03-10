import styled from "styled-components";
import Link from "next/link";

// Breakpoints for responsive design
const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

export const Container = styled.div`
  max-width: 500px;
  width: 90%;
  margin: 120px auto 50px;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  
  @media (max-width: ${breakpoints.sm}) {
    width: 95%;
    padding: 1rem;
    margin: 100px auto 30px;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  
  @media (max-width: ${breakpoints.sm}) {
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #4a5568;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

export const Error = styled.p`
  color: #e53e3e;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  background-color: #000000;
  color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color:#222222;
  }
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

export const ForgotPassword = styled.a`
  font-size: 0.875rem;
  color: #3182ce;
  text-align: right;
  margin-top: -0.5rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

export const RegisterLink = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #4a5568;
  
  @media (max-width: ${breakpoints.sm}) {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #3182ce;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  
  &::before, &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e2e8f0;
  }
  
  &::before {
    margin-right: 1rem;
  }
  
  &::after {
    margin-left: 1rem;
  }
`;

// Style pour le bouton de retour
export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  width: 50%;
  margin: 100px auto 30px auto;
  padding: 40px;
  background: white;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const Error = styled.p`
  color: red;
  margin-top: 0.25rem;
  font-size: 0.875rem;
`;

export const ErrorContainer = styled.div`
  color: red;
  margin-top: 0.25rem;
`;

export const ErrorList = styled.ul`
  list-style-type: disc;
  margin-left: 1rem;
  padding-left: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: #000000;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color:#222222;
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

`;
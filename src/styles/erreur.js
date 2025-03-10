import styled from "styled-components";
import {Input} from "@/styles/Inscription";

// Style pour les messages d'erreur
export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 4px;
  margin-bottom: 0;
`;

// Style pour le message de succès
export const SuccessMessage = styled.p`
  color: #2ecc71;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 4px;
`;

// Style pour l'input avec erreur
// Style pour l'input avec erreur
export const ErrorInput = styled(Input)`
  border-color: #e74c3c;
  box-shadow: 0 0 0 1px #e74c3c;
  
  &:focus {
    border-color: #e74c3c;
    box-shadow: 0 0 0 1px #e74c3c;
  }
`;
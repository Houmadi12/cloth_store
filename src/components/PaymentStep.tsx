import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 768px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 2px solid ${props => props.isSelected ? '#3b82f6' : '#e5e7eb'};
  border-radius: 8px;
  width: 160px;
  height: 128px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.isSelected ? '#eff6ff' : '#ffffff'};

  &:hover {
    border-color: ${props => props.isSelected ? '#3b82f6' : '#d1d5db'};
  }
`;

const RadioContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const RadioLabel = styled.label`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${props => props.checked ? '#3b82f6' : '#d1d5db'};
  cursor: pointer;
  transition: border-color 0.2s ease;
  position: relative;
`;

const RadioIndicator = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #3b82f6;
    display: ${props => props.checked ? 'block' : 'none'};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  margin-bottom: 8px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Name = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

const ValidationButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #000000;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 16px;
  align-self: center;
  min-width: 200px;

  &:hover {
    background-color:rgb(63, 63, 63);
  }

  &:active {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const PaymentMethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState('orange-money');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Images URLs - remplacez ces URL par les chemins d'accès réels aux images téléchargées
  const orangeMoneyImageUrl = "https://chemin/vers/image-2.png"; // Remplacer par le chemin réel de l'image des flèches
  const waveImageUrl = "https://chemin/vers/image-1.png"; // Remplacer par le chemin réel de l'image du pingouin

  const paymentMethods = [
    {
      id: 'orange-money',
      name: 'Orange Money',
      logo: "/images/logo1.png"
    },
    {
      id: 'wave',
      name: 'Wave',
      logo: "/images/logo2.png"
    }
  ];

  const handleSelect = (methodId) => {
    setSelectedMethod(methodId);
  };

  const handleRadioChange = (e, methodId) => {
    e.stopPropagation();
    setSelectedMethod(methodId);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simuler une requête de paiement
    setTimeout(() => {
      console.log(`Paiement validé avec la méthode: ${selectedMethod}`);
      setIsSubmitting(false);
      // Vous pouvez ajouter ici une redirection ou une notification de succès
    }, 1500);
  };

  return (
    <Container>
      <CardsContainer>
        {paymentMethods.map((method) => (
          <Card 
            key={method.id} 
            isSelected={selectedMethod === method.id}
            onClick={() => handleSelect(method.id)}
          >
            <RadioContainer>
              <RadioInput
                type="radio"
                id={method.id}
                name="paymentMethod"
                checked={selectedMethod === method.id}
                onChange={(e) => handleRadioChange(e, method.id)}
              />
              <RadioLabel htmlFor={method.id} checked={selectedMethod === method.id}>
                <RadioIndicator checked={selectedMethod === method.id} />
              </RadioLabel>
            </RadioContainer>
            
            <LogoContainer>
              <LogoImage src={method.logo} alt={`${method.name} logo`} />
            </LogoContainer>
            
            <Name>{method.name}</Name>
          </Card>
        ))}
      </CardsContainer>
      
      <ValidationButton 
        onClick={handleSubmit} 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Traitement en cours...' : 'Valider le paiement'}
      </ValidationButton>
    </Container>
  );
};

export default PaymentMethodSelector;
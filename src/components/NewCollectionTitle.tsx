"use client"
import React from 'react';
import { 
  TitleContainer, 
  MainTitle, 
  SubTitle, 
  Year 
} from '../styles/NewCollectionTitle';

export default function NewCollectionTitle() {
  return (
    <TitleContainer>
      <MainTitle>
        NEW
        <br />
        COLLECTION
      </MainTitle>
      <SubTitle>Summer</SubTitle>
      <Year>2024</Year>
    </TitleContainer>
  )
}
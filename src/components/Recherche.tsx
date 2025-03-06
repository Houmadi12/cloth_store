"use client"
import React from 'react';
import Link from "next/link"
import { BiSearch } from "react-icons/bi";
import { 
  FilterContainer, 
  CategoryLinks, 
  CategoryLink, 
  SearchContainer, 
  SearchInput, 
  SearchIconWrapper 
} from '../styles/Recherche';

export default function Filtre() {
  return (
    <FilterContainer>
      <CategoryLinks>
        <Link href="/" passHref legacyBehavior>
          <CategoryLink>MEN</CategoryLink>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <CategoryLink>WOMEN</CategoryLink>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <CategoryLink>KIDS</CategoryLink>
        </Link>
      </CategoryLinks>
      <SearchContainer>
        <SearchIconWrapper>
          <BiSearch size={20} strokeWidth={1.5} />
        </SearchIconWrapper>
        <SearchInput type="search" placeholder="Search" />
      </SearchContainer>
    </FilterContainer>
  )
}
"use client"
import Link from "next/link"
import { BiRightArrow } from "react-icons/bi"
import { 
  ButtonContainer, 
  StyledLink 
} from '../styles/ButtonShop';

export default function ShopButton() {
  return (
    <ButtonContainer>
      <StyledLink href="/shop">
        Go To Shop
        <BiRightArrow size={20} />
      </StyledLink>
    </ButtonContainer>
  )
}
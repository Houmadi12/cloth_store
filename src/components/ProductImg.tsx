"use client"
import Image from "next/image"
import { 
  ImageContainer, 
  StyledImage 
} from '../styles/ProductImg';

interface ProductImageProps {
  src: string
  alt: string
}

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <ImageContainer>
      <StyledImage 
        src={src || "/placeholder.svg"} 
        alt={alt} 
        fill 
        sizes="(max-width: 768px) 100vw, 50vw" 
        priority 
      />
    </ImageContainer>
  )
}
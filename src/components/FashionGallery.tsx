"use client"

import React from 'react';
import { Gallery, ImageContainer, Image } from '@/styles/FashionGallery';
import { Images } from '@/data/Products';

const FashionGallery = () => {
  return (
    <Gallery>
      {Images.map((image, index) => (
        <ImageContainer key={index} className={image.className}>
          <Image src={image.src} alt={image.alt} loading="lazy" />
        </ImageContainer>
      ))}
    </Gallery>
  );
};

export default FashionGallery;
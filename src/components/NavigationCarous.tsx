"use client"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { 
  NavigationContainer, 
  NavButton 
} from '../styles/NavigationCarous';

interface CarouselNavigationProps {
  onPrevious: () => void
  onNext: () => void
}

export default function CarouselNavigation({ onPrevious, onNext }: CarouselNavigationProps) {
  return (
    <NavigationContainer>
      <NavButton onClick={onPrevious} aria-label="Previous slide">
        <BiChevronLeft size={20} />
      </NavButton>
      <NavButton onClick={onNext} aria-label="Next slide">
        <BiChevronRight size={20} />
      </NavButton>
    </NavigationContainer>
  )
}
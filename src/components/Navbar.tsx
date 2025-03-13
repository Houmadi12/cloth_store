"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BiMenuAltLeft,
  BiUser,
  BiShoppingBag,
  BiX,
  BiHeart,
} from "react-icons/bi";
import {
  NavContainer,
  LeftSection,
  NavLinks,
  NavLink,
  Logo,
  RightSection,
  RightSectionRight,
  RightSectionLeft,
  IconButtonMenu,
  IconButtonUser,
  IconButtonBag,
  IconButtonCart,
  IconButtonFavori,
  MobileMenu,
  MobileNavLinks,
} from "@/styles/NavbarStyle";

interface NavbarProps {
  homePath?: string;
}

const Navbar: React.FC<NavbarProps> = ({ homePath = "/" }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHomeClick = () => {
    // Rediriger vers le chemin spécifié
    router.push(homePath);

    // Fermer le menu mobile
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <NavContainer>
        <LeftSection>
          <IconButtonMenu onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <BiX size={44} /> : <BiMenuAltLeft size={35} />}
          </IconButtonMenu>

          <NavLinks>
            <NavLink href="/" onClick={handleHomeClick}>
              Home
            </NavLink>
            <NavLink href="/products">Collections</NavLink>
            <NavLink href="#">New</NavLink>
          </NavLinks>
        </LeftSection>

        <Logo>
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 5V19L2 12L12 5Z" fill="#E5E5E5" />
            <path d="M12 5V19L22 12L12 5Z" fill="#000000" />
          </svg>
        </Logo>

        <RightSection>
          <IconButtonFavori>
            <BiHeart size={24} />
          </IconButtonFavori>
          <RightSectionLeft>
            <IconButtonCart>Cart</IconButtonCart>
            <IconButtonBag>
              <BiShoppingBag size={24} />
            </IconButtonBag>
          </RightSectionLeft>

          <RightSectionRight>
            <IconButtonUser as="a" href="/connexion">
              <BiUser size={24} />
            </IconButtonUser>
          </RightSectionRight>
        </RightSection>
      </NavContainer>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLinks>
          <NavLink href="#" onClick={handleHomeClick}>
            Home
          </NavLink>
          <NavLink href="#">Collections</NavLink>
          <NavLink href="#">New</NavLink>
        </MobileNavLinks>
      </MobileMenu>
    </>
  );
};

export default Navbar;

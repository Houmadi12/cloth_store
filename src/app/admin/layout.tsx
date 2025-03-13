"use client";

import styled from "styled-components";
import { FaList, FaSignOutAlt, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-image: linear-gradient(
    to right,
    rgb(75, 33, 119) 0%,
    rgb(85, 119, 179) 100%
  );
  color: white;
  padding: 20px 0;
  margin-top: 100px;
`;

const SidebarHeader = styled.div`
  padding: 0 20px 20px;
  border-bottom: 1px solid #fff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  margin-top: 20px;
`;

// 🔹 Définition de l'interface pour typer `active`
interface NavItemProps {
  active?: boolean;
}

// 🔹 `shouldForwardProp` pour éviter d'envoyer `active` au DOM
const NavItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<NavItemProps>`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.active ? "white" : "#a0aec0")};
  background-color: ${(props) => (props.active ? "#2d3748" : "transparent")};
  cursor: pointer;
  transition: all 0.3s;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  &:hover {
    background-color: rgba(45, 55, 72, 0.22);
    color: white;
    border-left: 5px solid white;
  }
`;

const NavItemText = styled.span`
  margin-left: 12px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f7fafc;
`;

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarHeader>
          <Logo>Tableau de bord</Logo>
        </SidebarHeader>
        <Nav>
          <Link href="/admin" passHref legacyBehavior>
            <NavItem as="a" active={pathname === "/admin"}>
              <FaList size={16} />
              <NavItemText>Liste des produits</NavItemText>
            </NavItem>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <NavItem as="a" active={pathname === "/admin/ajoutProduit"}>
              <FaPlus size={16} />
              <NavItemText>Ajouter un produit</NavItemText>
            </NavItem>
          </Link>
          <NavItem>
            <FaSignOutAlt size={16} />
            <NavItemText>Déconnexion</NavItemText>
          </NavItem>
        </Nav>
      </Sidebar>
      <Content>{children}</Content>
    </DashboardContainer>
  );
};

export default Dashboard;

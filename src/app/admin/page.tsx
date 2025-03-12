"use client"

import { useEffect, useState } from "react"
import styled from "styled-components"
import { FaEdit, FaTrash, FaEye } from "react-icons/fa"

// Définition de l'interface Product
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  size?: string;
  color?: string;
  image?: string;
}

const ProductsContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 1200px;
  margin: 140px auto 0 auto;
`

const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 10px;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background-color:rgba(85, 119, 179, 0.71);
  color: black;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
`

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: middle;
`

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
`

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4a5568;
  margin-right: 8px;
  transition: color 0.3s;
  
  &:hover {
    color: #3182ce;
  }
`

const DeleteButton = styled(ActionButton)`
  &:hover {
    color: #e53e3e;
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #718096;
`

const LoadingState = styled.div`
  text-align: center;
  padding: 40px;
  color: #718096;
`

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fonction pour charger les produits
    async function loadProducts() {
      try {
        // Remplacez par votre API endpoint
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <LoadingState>Chargement des produits...</LoadingState>;
  }

  return (
    <ProductsContainer>
      <ProductsHeader>
        <Title>Liste des Produits</Title>
      </ProductsHeader>
      
      {products.length === 0 ? (
        <EmptyState>Aucun produit trouvé.</EmptyState>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Image</Th>
              <Th>Nom</Th>
              <Th>Prix</Th>
              <Th>Catégorie</Th>
              <Th>Taille</Th>
              <Th>Couleur</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <Td>
                  {product.image ? (
                    <ProductImage src={product.image} alt={product.name} />
                  ) : (
                    "Pas d'image"
                  )}
                </Td>
                <Td>{product.name}</Td>
                <Td>{product.price.toLocaleString()} €</Td>
                <Td>{product.category}</Td>
                <Td>{product.size || "-"}</Td>
                <Td>{product.color || "-"}</Td>
                <Td>
                  <ActionButton>
                    <FaEye />
                  </ActionButton>
                  <ActionButton>
                    <FaEdit />
                  </ActionButton>
                  <DeleteButton>
                    <FaTrash />
                  </DeleteButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ProductsContainer>
  );
}
"use client"

import { useEffect, useState } from "react"
import styled from "styled-components"
import { FaEdit, FaTrash, FaEye, FaSync } from "react-icons/fa"
import axios from "axios"

// Définition de l'interface Product
interface Product {
  _id: string; // MongoDB utilise généralement _id au lieu de id
  name: string;
  price: number;
  category: string;
  size?: string;
  color?: string;
  image?: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  countInStock: number;
}

interface ApiError {
  message: string;
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
  background-color: rgba(85, 119, 179, 0.71);
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

const ErrorState = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 20px;
  color: #e53e3e;
  background-color: #fff5f5;
  border-radius: 4px;
  border-left: 4px solid #e53e3e;
`

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #3182ce;
  }
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`

// URL de l'API
const API_URL = "http://localhost:8000/api/products";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // Fonction pour charger les produits avec axios
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get<Product[]>(API_URL);
      setProducts(response.data);
    } catch (err) {
      console.error("Erreur lors du chargement des produits:", err);
      
      if (axios.isAxiosError(err) && err.response) {
        // Erreur de type AxiosError avec une réponse
        const errorData = err.response.data as ApiError;
        setError(errorData.message || `Erreur ${err.response.status}: ${err.response.statusText}`);
      } else {
        // Erreur générique
        setError("Une erreur est survenue lors du chargement des produits");
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Fonction pour rafraîchir la liste des produits
  const handleRefresh = () => {
    setRefreshing(true);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContainer>
      <ProductsHeader>
        <Title>Liste des Produits</Title>
        <RefreshButton onClick={handleRefresh} disabled={loading || refreshing}>
          <FaSync />
          {refreshing ? "Actualisation..." : "Actualiser"}
        </RefreshButton>
      </ProductsHeader>
      
      {error && (
        <ErrorState>
          <p><strong>Erreur:</strong> {error}</p>
          <p>Vérifiez que votre API est bien accessible à l'adresse {API_URL}</p>
        </ErrorState>
      )}
      
      {loading ? (
        <LoadingState>Chargement des produits...</LoadingState>
      ) : products.length === 0 ? (
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
              <Th>Stock</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
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
                <Td>{product.countInStock || "-"}</Td>
                <Td>
                  <ActionButton title="Voir les détails">
                    <FaEye />
                  </ActionButton>
                  <ActionButton title="Modifier">
                    <FaEdit />
                  </ActionButton>
                  <DeleteButton title="Supprimer">
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
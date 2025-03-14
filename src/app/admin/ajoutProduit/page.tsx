"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { FaSave, FaTimes, FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";

// Interface correspondant au schéma Mongoose
interface ProductFormData {
  name: string;
  description: string;
  price: string;
  category: string;
  countInStock: string;
  // Champs facultatifs non présents dans le schéma Mongoose mais utiles pour l'interface
  size?: string;
  color?: string;
  image?: string;
}

interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

// Styled components
const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 800px;
  margin: 140px auto 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2d3748;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #4a5568;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3182ce;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3182ce;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3182ce;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
`;

const SaveButton = styled(Button)`
  background-color: #48bb78;
  color: white;
  border: none;

  &:hover {
    background-color: #38a169;
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: white;
  color: #4a5568;
  border: 1px solid #e2e8f0;

  &:hover {
    background-color: #f7fafc;
  }
`;

const FileInputContainer = styled.div`
  position: relative;
  margin-top: 10px;
`;

const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px dashed #e2e8f0;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #3182ce;
    color: #3182ce;
  }
`;

const HiddenFileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PreviewImage = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #e2e8f0;
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  margin-top: 5px;
  font-size: 0.875rem;
`;

const SuccessMessage = styled.div`
  color: #38a169;
  margin-top: 16px;
  padding: 10px;
  background-color: #f0fff4;
  border-radius: 4px;
  border-left: 4px solid #38a169;
  font-weight: 500;
`;

// URL de l'API
const API_PRODUCTS_URL = "http://localhost:8000/api/products";
const API_UPLOAD_URL = "http://localhost:8000/api/upload";

const AddProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    category: "",
    description: "",
    countInStock: "0",
    size: "",
    color: "",
    image: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string[]>
  >({});
  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];

      if (!file.type.startsWith("image/")) {
        setError("Le fichier doit être une image.");
        return;
      }

      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setImagePreview(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 📌 **Upload l'image et retourne l'URL**
  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) {
      console.error("❌ Aucun fichier image sélectionné.");
      setError("Aucune image sélectionnée.");
      return null;
    }

    try {
      const imageFormData = new FormData(); // Renommé ici
      imageFormData.append("image", imageFile);

      console.log("📤 Envoi de l'image...", imageFormData);

      const response = await axios.post(API_UPLOAD_URL, imageFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // console.log("✅ Réponse API Upload :", response.data);
      console.log("🔗 URL de l'image uploadée :", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Erreur upload image:", error);
      setError("Impossible d'uploader l'image.");
      return null;
    }
  };

  const resetForm = (): void => {
    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
      countInStock: "0",
      size: "",
      color: "",
      image: "",
    });
    setImageFile(null);
    setImagePreview("");
    setSuccess("");
    setError("");
    setValidationErrors({});
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return "Le nom du produit est requis";
    if (!formData.price || parseFloat(formData.price) <= 0)
      return "Le prix doit être supérieur à 0";
    if (!formData.category) return "La catégorie est requise";
    if (!formData.description.trim()) return "La description est requise";
    if (!imageFile) return "L'image du produit est requise";
    const stock = parseInt(formData.countInStock);
    if (isNaN(stock) || stock < 0)
      return "La quantité en stock ne peut pas être négative";
    return null;
  };

  // 📌 **Soumettre le formulaire**
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      console.log("🚀 Début de l'ajout du produit...");
      console.log(formData);

      const imageUrl = await uploadImage();

      if (!imageUrl) {
        console.error("❌ Problème lors de l'upload de l'image.");
        throw new Error("Erreur d'upload de l'image.");
      }

      console.log("🖼️ Image uploadée avec succès :", imageUrl);

      const productData = { ...formData, image: imageUrl };
      console.log("Produit à envoyer :", productData);

      const response = await axios.post(API_PRODUCTS_URL, productData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ Produit ajouté :", response.data);

      setSuccess("Produit ajouté avec succès !");
      resetForm();
    } catch (error) {
      console.error("❌ Erreur ajout produit:", error);
      setError("Erreur lors de l'ajout du produit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = (): void => {
    resetForm();
  };

  return (
    <FormContainer>
      <FormTitle>Ajouter un nouveau produit</FormTitle>

      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="name">Nom du produit *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez le nom du produit"
              required
            />
            {validationErrors.name &&
              validationErrors.name.map((errMsg, index) => (
                <ErrorMessage key={index}>{errMsg}</ErrorMessage>
              ))}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Prix *</Label>
            <Input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Entrez le prix"
              min="0"
              step="0.01"
              required
            />
            {validationErrors.price &&
              validationErrors.price.map((errMsg, index) => (
                <ErrorMessage key={index}>{errMsg}</ErrorMessage>
              ))}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label htmlFor="category">Catégorie *</Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="vêtements">Vêtements</option>
              <option value="chaussures">Chaussures</option>
              <option value="accessoires">Accessoires</option>
              <option value="électronique">Électronique</option>
              <option value="maison">Maison</option>
            </Select>
            {validationErrors.category &&
              validationErrors.category.map((errMsg, index) => (
                <ErrorMessage key={index}>{errMsg}</ErrorMessage>
              ))}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="countInStock">Quantité en stock *</Label>
            <Input
              type="number"
              id="countInStock"
              name="countInStock"
              value={formData.countInStock}
              onChange={handleChange}
              placeholder="Nombre d'unités disponibles"
              min="0"
              step="1"
              required
            />
            {validationErrors.countInStock &&
              validationErrors.countInStock.map((errMsg, index) => (
                <ErrorMessage key={index}>{errMsg}</ErrorMessage>
              ))}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label htmlFor="size">Taille (optionnel)</Label>
            <Input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="S, M, L, XL, etc."
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="color">Couleur (optionnel)</Label>
            <Input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Rouge, Bleu, Noir, etc."
              required
            />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label htmlFor="description">Description *</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Décrivez le produit en détail"
            required
          />
          {validationErrors.description &&
            validationErrors.description.map((errMsg, index) => (
              <ErrorMessage key={index}>{errMsg}</ErrorMessage>
            ))}
        </FormGroup>

        <FormGroup>
          <Label>Image du produit</Label>
          <FileInputContainer>
            <FileInputLabel htmlFor="image">
              <FaCloudUploadAlt size={24} />
              {imageFile ? "Changer l'image" : "Cliquez pour ajouter une image"}
            </FileInputLabel>
            <HiddenFileInput
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </FileInputContainer>
          {error && (
            <ErrorMessage>
              {error.split(", ").map((errMsg, index) => (
                <div key={index}>{errMsg}</div>
              ))}
            </ErrorMessage>
          )}
          {imagePreview && (
            <PreviewImage style={{ backgroundImage: `url(${imagePreview})` }} />
          )}
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <ButtonGroup>
          <SaveButton type="submit" disabled={isSubmitting}>
            <FaSave />
            {isSubmitting ? "Enregistrement..." : "Enregistrer"}
          </SaveButton>
          <CancelButton type="button" onClick={handleCancel}>
            <FaTimes />
            Annuler
          </CancelButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default AddProductForm;

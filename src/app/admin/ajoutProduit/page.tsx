"use client"

import styled from "styled-components"
import { FaSave, FaTimes, FaCloudUploadAlt } from "react-icons/fa"

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 800px;
  margin: 140px auto 0 auto;
`

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2d3748;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 10px;
`

const FormGroup = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #4a5568;
`

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
`

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
`

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
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`

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
`

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
`

const CancelButton = styled(Button)`
  background-color: white;
  color: #4a5568;
  border: 1px solid #e2e8f0;

  &:hover {
    background-color: #f7fafc;
  }
`

const FileInputContainer = styled.div`
  position: relative;
  margin-top: 10px;
`

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
`

const HiddenFileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PreviewImage = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #e2e8f0;
`

const ErrorMessage = styled.div`
  color: #e53e3e;
  margin-top: 5px;
  font-size: 0.875rem;
`

const SuccessMessage = styled.div`
  color: #38a169;
  margin-top: 16px;
  padding: 10px;
  background-color: #f0fff4;
  border-radius: 4px;
  border-left: 4px solid #38a169;
  font-weight: 500;
`

const AddProductForm = () => {
  return (
    <FormContainer>
      <FormTitle>Ajouter un nouveau produit</FormTitle>

      <form>
        <FormRow>
          <FormGroup>
            <Label htmlFor="name">Nom du produit *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Entrez le nom du produit"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Prix *</Label>
            <Input
              type="number"
              id="price"
              name="price"
              placeholder="Entrez le prix"
              min="0"
              step="0.01"
              required
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label htmlFor="category">Catégorie *</Label>
            <Select id="category" name="category" required>
              <option value="">Sélectionnez une catégorie</option>
              <option value="vêtements">Vêtements</option>
              <option value="chaussures">Chaussures</option>
              <option value="accessoires">Accessoires</option>
              <option value="électronique">Électronique</option>
              <option value="maison">Maison</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="size">Taille (si applicable)</Label>
            <Input
              type="text"
              id="size"
              name="size"
              placeholder="S, M, L, XL, etc."
            />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label htmlFor="color">Couleur (si applicable)</Label>
          <Input
            type="text"
            id="color"
            name="color"
            placeholder="Rouge, Bleu, Noir, etc."
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description *</Label>
          <TextArea
            id="description"
            name="description"
            placeholder="Décrivez le produit en détail"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Image du produit</Label>
          <FileInputContainer>
            <FileInputLabel htmlFor="image">
              <FaCloudUploadAlt size={24} />
              Cliquez pour ajouter une image
            </FileInputLabel>
            <HiddenFileInput type="file" id="image" accept="image/*" />
          </FileInputContainer>
        </FormGroup>

        <ButtonGroup>
          <SaveButton type="submit">
            <FaSave />
            Enregistrer
          </SaveButton>
          <CancelButton type="button">
            <FaTimes />
            Annuler
          </CancelButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  )
}

export default AddProductForm
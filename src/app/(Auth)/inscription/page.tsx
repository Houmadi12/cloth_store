"use client";

import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonContainer,
  Button,
  StyledLink,
} from "@/styles/Inscription";
import { ErrorMessage, SuccessMessage, ErrorInput } from "@/styles/erreur";
import { BackButton } from "@/styles/Connexion";
import { useState } from "react";

export default function Inscription() {
  const [user, setUser] = useState({
    email: "",
    motDePasse: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    motDePasse: "",
    confirmPassword: "",
    general: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Effacer l'erreur du champ lorsqu'il est modifié
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      motDePasse: "",
      confirmPassword: "",
      general: "",
    };
    let isValid = true;

    // Validation de l'email
    if (!user.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newErrors.email = "Format d'email invalide";
      isValid = false;
    }

    // Validation du mot de passe
    if (!user.motDePasse) {
      newErrors.motDePasse = "Le mot de passe est requis";
      isValid = false;
    } else if (user.motDePasse.length < 6) {
      newErrors.motDePasse =
        "Le mot de passe doit contenir au moins 6 caractères";
      isValid = false;
    }

    // Validation de la confirmation du mot de passe
    if (!user.confirmPassword) {
      newErrors.confirmPassword = "Veuillez confirmer votre mot de passe";
      isValid = false;
    } else if (user.motDePasse !== user.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    // Valider le formulaire
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          motDePasse: user.motDePasse
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'inscription");
      }

      setSuccess("Inscription réussie! Vous pouvez maintenant vous connecter.");
      setUser({
        email: "",
        motDePasse: "",
        confirmPassword: ""
      });
      setErrors({
        email: "",
        motDePasse: "",
        confirmPassword: "",
        general: ""
      });
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        general: error.message || "Une erreur est survenue lors de l'inscription"
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackButton onClick={handleBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Retour
      </BackButton>

      <Container>
        <Title>Inscription</Title>
        
        {errors.general && <ErrorMessage style={{ textAlign: "center", marginBottom: "15px" }}>{errors.general}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            {errors.email ? (
              <ErrorInput
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Votre@mail.com"
              />
            ) : (
              <Input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Votre@mail.com"
              />
            )}
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="motDePasse">Mot de passe</Label>
            {errors.motDePasse ? (
              <ErrorInput
                type="password"
                id="motDePasse"
                name="motDePasse"
                value={user.motDePasse}
                onChange={handleChange}
              />
            ) : (
              <Input
                type="password"
                id="motDePasse"
                name="motDePasse"
                value={user.motDePasse}
                onChange={handleChange}
              />
            )}
            {errors.motDePasse && <ErrorMessage>{errors.motDePasse}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
            {errors.confirmPassword ? (
              <ErrorInput
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            ) : (
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            )}
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
          </FormGroup>

          <ButtonContainer>
            <Button type="submit" disabled={loading}>
              {loading ? "Chargement..." : "S'inscrire"}
            </Button>
            <StyledLink href="/connexion">Ou connectez-vous ici</StyledLink>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  );
}
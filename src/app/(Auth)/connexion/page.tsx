"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonContainer,
  Button,
  BackButton,
  ForgotPassword,
  RegisterLink,
  StyledLink,
} from "@/styles/Connexion";
import { ErrorMessage, SuccessMessage, ErrorInput } from "@/styles/erreur";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/users/login", {
        email,
        motDePasse: password,
      });

      setSuccess("Connexion réussie ! Redirection...");
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        window.location.href = "/products"; // Rediriger après connexion
      }, 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || "Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    window.history.back();
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
        <Title>Connexion</Title>
        {/* {success && <SuccessMessage>{success}</SuccessMessage>} */}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              as={error ? ErrorInput : Input}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              as={error ? ErrorInput : Input}
            />
          </FormGroup>

          <ForgotPassword href="/reset-password">
            Mot de passe oublié ?
          </ForgotPassword>
           {error && <ErrorMessage>{error}</ErrorMessage>}
          <ButtonContainer>
            <Button type="submit" disabled={loading}>
              {loading ? "Connexion..." : "Se connecter"}
            </Button>
          </ButtonContainer>
          <RegisterLink>
            Vous n'avez pas de compte ?{" "}
            <StyledLink href="#">S'inscrire</StyledLink>
          </RegisterLink>
        </Form>
      </Container>
    </>
  );
}
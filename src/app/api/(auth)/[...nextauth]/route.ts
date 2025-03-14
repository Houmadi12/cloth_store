import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "exemple@mail.com" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!process.env.NEXTAUTH_BACKEND_URL) {
            throw new Error("NEXTAUTH_BACKEND_URL est manquant dans .env.local");
          }

          const { data } = await axios.post(
            `${process.env.NEXTAUTH_BACKEND_URL}/api/auth/login`,
            credentials,
            { headers: { "Content-Type": "application/json" } }
          );

          if (!data || !data.user) {
            throw new Error("Authentification échouée : utilisateur non trouvé");
          }

          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            token: data.token, // Stocker le token JWT si nécessaire
          };
        } catch (error: unknown) {
          console.error("Erreur d'authentification:", error);
          if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Échec de l'authentification");
          }
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("Une erreur inconnue est survenue");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login", // Redirige vers une page de connexion personnalisée
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, user };
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };

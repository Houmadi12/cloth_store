import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Active le support de styled-components pour SSR
  },
  webpack(config, { dev }) {
    if (dev) {
      // Désactive le cache de Webpack en mode développement
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;

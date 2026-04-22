import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/Logo_mdp_vet.ico",
      },
    ];
  },
};

export default nextConfig;

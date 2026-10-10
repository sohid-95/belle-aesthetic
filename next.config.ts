import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/belle-aesthetic",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

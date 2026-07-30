import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.DEV_ORIGIN
    ? { allowedDevOrigins: [process.env.DEV_ORIGIN] }
    : {}),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pakai folder project ini sebagai root agar tidak salah pilih lockfile
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/ethanasm.me" : "",
  assetPrefix: isGithubPages ? "/ethanasm.me/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

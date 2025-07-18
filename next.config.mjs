/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://placehold.co/**"),
      new URL("https://cdn.vapee.dev/files/**"),
      new URL("https://share.vapee.dev/GIbe5/**"),
    ],
  },
};

export default nextConfig;

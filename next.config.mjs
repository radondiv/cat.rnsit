
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Client-side only app (no server actions) to keep Cloudflare Pages simple
  experimental: {
    // ensure three is transpiled for Next <13.1 needs; safe here but harmless
    // appDir is default in Next 14
  },
  transpilePackages: ['three'],
};
export default nextConfig;

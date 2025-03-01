/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'io.google' , 'images.unsplash.com','assets.aceternity.com'],
    formats: ['image/webp'],
},
};

export default nextConfig;

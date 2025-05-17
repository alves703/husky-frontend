// next.config.mjs
import withPWA from 'next-pwa';

const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'],
  },
};

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(config);

export default nextConfig;

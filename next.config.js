module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  'extends': ['next', 'prettier'],
  images: {
    domains: ['res.cloudinary.com'],
  },
};

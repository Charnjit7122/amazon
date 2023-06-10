module.exports = {
  reactStrictMode: true,
  images: {
    domains: [ "fakestoreapi.com", "m.media-amazon.com/"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

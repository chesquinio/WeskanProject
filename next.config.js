/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Excluye el archivo mongoose.umd.js del lado del cliente
      config.resolve.alias[
        "./node_modules/mongoose/dist/browser.umd.js"
      ] = false;
    }
    config.resolve.fallback = {
      "mongodb-client-encryption": false,
      aws4: false,
    };
    return config;
  },
};

module.exports = nextConfig;

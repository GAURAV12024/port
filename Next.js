/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static exports if needed
    // output: 'export',
    
    // Add custom webpack config if needed
    webpack: (config, { isServer }) => {
      // Add any custom webpack configurations here
      return config
    },
  
    // Add image domains if you're using next/image with external sources
    images: {
      domains: [
        // Add your image domains here
      ],
    },
  }
  
  module.exports = nextConfig
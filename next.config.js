/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    experimental: {
        optimizeCss: true,
    },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

let config = {
  reactStrictMode: true,
}

// ↓ ** Do not touch this line ** ↓
config['basePath'] = '/SimpleBlogTemplate'

module.exports = withBundleAnalyzer(config)

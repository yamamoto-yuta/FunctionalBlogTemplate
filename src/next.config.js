/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const { basePath } = require('./lib/const')
let config = {
  reactStrictMode: true,
  basePath: basePath
}

module.exports = withBundleAnalyzer(config)

import { basePath } from './lib/const'

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

let config = {
  reactStrictMode: true,
  basePath: basePath
}

module.exports = withBundleAnalyzer(config)

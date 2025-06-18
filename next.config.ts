// next.config.ts
import withPWA from 'next-pwa'
import type { NextConfig } from 'next'

const baseConfig: NextConfig = {
    reactStrictMode: true,

    compiler: {
        emotion: true,
    },
}

const nextConfig = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
})(baseConfig)

export default nextConfig

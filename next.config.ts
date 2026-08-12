import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  allowedDevOrigins: ['192.168.4.20'],
}

export default config

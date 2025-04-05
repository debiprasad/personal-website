/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL,
  }
}

module.exports = nextConfig

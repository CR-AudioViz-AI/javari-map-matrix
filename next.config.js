// 2026-09-10 factory: embed policy (frame-ancestors) comes from the platform SDK.
const __embed = require('@craudioviz/platform-sdk/embed-headers.js');
module.exports = {
  async headers() {
    return [{ source: '/:path*', headers: [...__embed.embedSecurityHeaders()] }];
  },
  transpilePackages: ["@craudioviz/platform-sdk"], reactStrictMode: true };
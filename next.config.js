/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
};

module.exports = nextConfig;

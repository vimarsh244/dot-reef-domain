/** @type {import('next').NextConfig} */

// const { withGlobalCss } = require("next-global-css");

// const withConfig = withGlobalCss();
// a workaround for following dumb error

// ./node_modules/@reef-defi/ui-kit/dist/style.css
// Global CSS cannot be imported from within node_modules.
// Read more: https://nextjs.org/docs/messages/css-npm
// Location: node_modules/@reef-defi/ui-kit/index.js

const nextConfig = {
  reactStrictMode: true,
};

module.exports =  nextConfig;
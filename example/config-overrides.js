const { useBabelRc, override, addPostcssPlugins } = require('customize-cra')

const postcssPlugins = [require('tailwindcss'), require('autoprefixer')]

module.exports = override(addPostcssPlugins(postcssPlugins), useBabelRc())

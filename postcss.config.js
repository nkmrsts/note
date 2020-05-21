/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  input: 'src',
  plugins:
    process.env.NODE_ENV === 'development'
      ? [require('tailwindcss'), require('autoprefixer')]
      : [require('tailwindcss'), require('autoprefixer'), require('cssnano')],
}

const path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const umd = {
  output: {
    filename: 'index.js',
    library: 'buffer',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/umd')
  },
}

const esm = {
  output: {
    filename: 'index.js',
    library: 'buffer',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist/esm')
  },
  plugins: [
    new EsmWebpackPlugin()
  ],
}

module.exports = [umd, esm]

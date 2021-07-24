const px2rem = require('postcss-px2rem-exclude');

module.exports = {
  babel: {
    plugins: [['import', { libraryName: 'antd-mobile', style: 'css' }]],
  },
  style: {
    postcss: {
      plugins: [
        require('postcss-flexbugs-fixes'),
        require('tailwindcss'),
        require('autoprefixer'),
        px2rem({
          remUnit: 37.5,
          exclude: /node-modules/i,
        }),
      ],
    },
  },
  webpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
  },
};

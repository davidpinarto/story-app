const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPluginConfig = {
  templateParameters: {
    nav: `
    <div class="container-fluid px-sm-2 px-md-5">
      <!-- logo -->
      <a class="navbar-brand fs-2 fw-bold" href="/">StoryApp</a>

      <!-- offcanvas -->
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header justify-content-end">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <!-- navigation -->
          <div class="container text-center mx-auto w-75">
            <div class="navbar-item m-2">
              <a href="/" class="p-2 rounded-pill">Dashboard</a>
            </div>
            <div class="navbar-item m-2">
              <a href="/add.html" class="p-2 rounded-pill">Add Story</a>
            </div>
            <div class="navbar-item m-2">
              <a href="/about-us.html" class="p-2 rounded-pill">About Us</a>
            </div>
          </div>
        </div>
      </div>

      <!-- offcanvas toggle -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    `,
    footerContent: '<p>This website is created with love by David Pinarto</p>',
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/dashboard.html'),
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      title: 'Add Story',
      filename: 'add.html',
      template: path.resolve(__dirname, 'src/views/add.html'),
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      title: 'About Us',
      filename: 'about-us.html',
      template: path.resolve(__dirname, 'src/views/about-us.html'),
      ...htmlWebpackPluginConfig,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),

    new CleanWebpackPlugin(),
  ],
};

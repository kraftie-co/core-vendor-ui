const path = require('path');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');
const getClientEnvironment = require('./env');

const env = getClientEnvironment(paths.publicUrlOrPath);

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const config = {
  context: paths.context,
  entry: [...paths.entryPoints],
  output: {
    filename: 'assets/js/[name].[chunkhash:9].bundle.js',
    path: paths.outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
        },
      },
      // these rules handle styles
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, modules: { mode: 'icss' } } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: false,
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                  // Adds PostCSS Normalize as the reset css with default options,
                  // so that it honors browserslist config in package.json
                  // which in turn let's users customize the target behavior as per their needs.
                  'postcss-normalize',
                ],
              },
            },
          },
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: { mode: 'local', localIdentName: '[local]___[hash:base64:5]' } },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: false,
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                  // Adds PostCSS Normalize as the reset css with default options,
                  // so that it honors browserslist config in package.json
                  // which in turn let's users customize the target behavior as per their needs.
                  'postcss-normalize',
                ],
              },
            },
          },
        ],
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, modules: { mode: 'icss' } } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: false,
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                  // Adds PostCSS Normalize as the reset css with default options,
                  // so that it honors browserslist config in package.json
                  // which in turn let's users customize the target behavior as per their needs.
                  'postcss-normalize',
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: sassModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: { mode: 'local', localIdentName: '[local]___[hash:base64:5]' } },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: false,
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                  // Adds PostCSS Normalize as the reset css with default options,
                  // so that it honors browserslist config in package.json
                  // which in turn let's users customize the target behavior as per their needs.
                  'postcss-normalize',
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, modules: { mode: 'icss' } } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: false,
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                  // Adds PostCSS Normalize as the reset css with default options,
                  // so that it honors browserslist config in package.json
                  // which in turn let's users customize the target behavior as per their needs.
                  'postcss-normalize',
                ],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: lessModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: { mode: 'local', localIdentName: '[local]___[hash:base64:5]' } },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: false,
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                  // Adds PostCSS Normalize as the reset css with default options,
                  // so that it honors browserslist config in package.json
                  // which in turn let's users customize the target behavior as per their needs.
                  'postcss-normalize',
                ],
              },
            },
          },
          'less-loader',
        ],
      },
      // this rule handles images
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[chunkhash:9].[ext]',
        },
      },
      // the following 3 rules handle font extraction
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: 'assets/fonts/[name].[chunkhash:9].[ext]',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[chunkhash:9].[ext]',
        },
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file-loader',
        options: {
          mimetype: 'application/font-otf',
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'Root': paths.sourcePath,
      'Root-assets': path.resolve(__dirname, '../', 'static/'),
      '../../theme.config$': path.resolve(__dirname, '../', 'src/theme/semantic-ui/theme.config'),
      heading: path.resolve(__dirname, '../', 'src/semantic/heading.less'),
    },
    modules: ['.', 'node_modules'],
  },
  plugins: [
    new DefinePlugin(env.stringified),
    new CleanWebpackPlugin({
      root: paths.root,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.favicon,
          to: paths.outputServerPath,
        },
        {
          from: paths.locales,
          to: 'locales',
          toType: 'dir',
        },
      ],
    }),
    new MiniCssWebpackPlugin({
      filename: 'assets/css/[name].[chunkhash].css',
      chunkFilename: 'assets/css/[id].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      template: paths.template,
      title: 'kraftie',
      base: paths.publicUrlOrPath,
      filename: path.resolve(__dirname, paths.outputPath, 'index.html'),
      favicon: paths.favicon,
    }),
    new WebpackManifestPlugin({
      publicPath: `${paths.publicUrlOrPath}/`,
      seed: {
        name: 'kraftie',
        short_name: 'kraftie',
        start_url: 'index.html',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '512x512',
            type: 'image/x-icon',
          },
        ],
        background_color: '#4e0041',
        theme_color: '#4e0041',
      },
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter((fileName) => !fileName.endsWith('.map'));

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
  ],
};

module.exports = config;

import * as webpack from 'webpack';
import * as externals from 'webpack-node-externals'
import * as path from 'path';
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

const mode = process.env.NODE_ENV !== 'production'
  ? 'development'
  : 'production'

const client: webpack.Configuration = {
  mode: 'development',
  entry: {
    app: [
      './src/app/Index.tsx', 
    ],
    vendor: [
      'react', 
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'dist/js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader" 
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" 
            ? 'style-loader' 
            : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

const server: webpack.Configuration = {
  entry: "./server.ts",
  mode: 'development',
  node: {
      __dirname: false,
      __filename: false
  },
  output: {
      filename: "server.js",
      path: __dirname + "/public/"
  },
  target:'node',
  externals: externals(),
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/, loader: "ts-loader" },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  },
};

module.exports = [
  client,
  server
]
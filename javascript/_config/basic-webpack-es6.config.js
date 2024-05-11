// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';

const serverConfig = {
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'lib.node.js',
    },
    //…
  };
  

const clientConfig = {
  entry: {
    import: './src/index.js',
    dependOn: 'shared', 
  },
  
  another: {
    import: './src/another-module.js', 
    dependOn: 'shared', 
  },
  shared: 'lodash',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    filename: '[name].bundle.js',
    clean: true,
  },
  
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },

  devServer: {
    open: true,
    host: 'localhost',
  },

  devtool: 'inline-source-map',
  
  plugins: [
    [new MiniCssExtractPlugin()],
    new HtmlWebpackPlugin({
    template: 'index.html',
    title: 'Webpack PWA'
        }),
    new ModuleFederationPlugin({
      name: 'remote',
      exposes: ['./public-path'],
    }),
    new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
    module: {
        rules: [
     
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            
        ],
            loaders : [
              { 
                test: /\.xml$/, 
                loader: 'xml-loader' 
              }, // will load all .xml files with xml-loader by default
              {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
              },
              { test: /\.csv$/,
                loader: 'csv-loader',
                options: {
                  dynamicTyping: true,
                  header: true,
                  skipEmptyLines: true
                },
            }, 
        ]    
    }
};
module.exports = () => { 
    if (isProduction) {
        clientConfig.mode = 'production';       
        clientConfig.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        clientConfig.mode = 'development';
    }
    return clientConfig;
 }; 

 module.exports = () => {
    if (isProduction) {
        serverConfig.mode = 'production';       
        serverConfig.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        serverConfig.mode = 'development';
    }
    return serverConfig;
 }  


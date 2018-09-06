const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const javascript = {
    test: /\.(js)$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/env']
        }
    }
}

const postcss = {
    loader: 'postcss-loader',
    options: {
        plugins() { return [ autoprefixer({ browsers: 'last 5 versions' }) ]; }
    }
}

const styles = {
    test: /\.scss$/,
    use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        postcss,
        'sass-loader'
    ]
}

const config = {
    watch: true,
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    entry: './public/javascript/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            javascript,
            styles
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.bundle.css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { preset: 'default', discardComments: { removeAll: true } },
            canPrint: true
        })
    ]
}

module.exports = config;
const webpack = require('webpack');
const path = require('path');

const javascript = {
    test: /\.(js)$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/env']
        }
    }
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
            javascript
        ]
    }
}

module.exports = config;
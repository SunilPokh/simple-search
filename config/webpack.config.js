"use strict";

module.exports = {
    mode: 'none',

    output: {
        filename: "[name].min.js"
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
			plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']

                    }
                }
            }
        ]
    }
};

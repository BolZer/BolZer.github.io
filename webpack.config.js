const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

require('dotenv').config()

module.exports = {
    mode: process.env.MODE,
    entry: './scripts/index.ts',
    optimization: {
        minimize: process.env.MODE === "production",
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: {
                        passes: 2
                    }
                }
            }),
            new CssMinimizerPlugin({
                parallel: true,
            }),
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        watchFiles: {
            paths: ['scripts/**/*', 'assets/**/*'],
            options: {
                usePolling: false,
            },
        },
        static: [
            path.join(__dirname, 'dist'),
        ],
        compress: true,
        port: 9000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "assets", "template.html"),
        }),
    ]
};
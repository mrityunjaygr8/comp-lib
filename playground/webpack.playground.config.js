const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        app: "./playground/index.ts"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }, {
                test: /\.(ts|js)x?$/,
                loader: "babel-loader"
            }, {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: "style-loader",
                    }, {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            modules: {
                                compileType: "module",
                                mode: "global",
                            },
                            esModule: false,
                            sourceMap: true,
                        }
                    }, {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["postcss-preset-env", {}]]
                            }
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".vue", ".json", ".scss"],
        alias: {
            vue$: "@vue/runtime-dom"
        },
        modules: ["node_modules"],
    },
    plugins: [
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE__OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./playground/index.html"
        })
    ],
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        port: 3000
    }
}
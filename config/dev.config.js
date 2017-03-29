let path = require("path");
let webpack = require("webpack");
let projectRoot = path.resolve(__dirname, "../");

let config = {
    entry: "./example/app.js",
    watch: true,
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    output: {
        path: "/example/",
        filename: "index.js"
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "../example"),
        compress: true,
        hot: true,
        inline: true,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [/node_modules/]
        }, {
            test: /\.es6$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ["style-loader", "css-loader"]
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(png|jpg|jpeg)$/,
            loader: 'url-loader?limit=30000'
        }]
    },
    target: "web",
    plugins: [
        // 错误不中断程序运行
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.BannerPlugin('This file is created by WeRDyin\n' + new Date())
    ]
};

module.exports = config;

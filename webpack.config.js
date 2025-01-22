const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
    },

    output: {
        publicPath: '/', // تحديد المسار العام للملفات
        path: path.resolve(__dirname, 'app'), // تصحيح المسار
        filename: '[name].js', // استخدام أسماء ديناميكية حسب الإدخال
    },
    
    devServer: {
        static: {
            directory: path.join(__dirname, 'app'), // تحديد مجلد الملفات الثابتة
        },
        compress: true,
        devMiddleware: {
            writeToDisk: true, // يسمح بكتابة الملفات إلى القرص
        },
        port: 8081,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/, 
                use: ['html-loader'],
            },
            {
                test: /\.(sa|sc|c)ss$/, 
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader',         
                    'sass-loader',              
                ],
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/i, // استهداف امتدادات الخطوط
                exclude: /images/, // استبعاد الصور
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]', // حفظ الخطوط داخل مجلد fonts
                },
            },
        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css', 
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
};

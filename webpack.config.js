const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        'assets/js/banner':'./src/assets/js/banner.js',
        'assets/js/tabs':'./src/assets/js/tabs.js',
        'assets/js/upload':'./src/assets/js/upload.js',
         'assets/js/chart':'./src/assets/js/chart.js'
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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
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
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, 
                exclude: /fonts/, 
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', 
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
            chunks:['app','assets/js/banner','assets/js/chart','assets/js/tabs']
        }),
        new HtmlWebpackPlugin({
            filename: 'add-product.html',
            template: './src/add-product.html',
            chunks:['app','assets/js/upload']
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: './src/product.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'users.html',
            template: './src/users.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'orders.html',
            template: './src/orders.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'add-user.html',
            template: './src/add-user.html',
            chunks:['app','assets/js/upload']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/button.html',
            template: './src/components/button.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/textfield.html',
            template: './src/components/textfield.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/card.html',
            template: './src/components/card.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/banner.html',
            template: './src/components/banner.html',
            chunks:['app','assets/js/banner']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/list.html',
            template: './src/components/list.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/tabs.html',
            template: './src/components/tabs.html',
            chunks:['app','assets/js/tabs']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/upload.html',
            template: './src/components/upload.html',
            chunks:['app','assets/js/upload']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/help.html',
            template: './src/components/help.html',
            chunks:['app','add-product.html','product.html']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/summary.html',
            template: './src/components/summary.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/actions.html',
            template: './src/components/actions.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/sidebar.html',
            template: './src/components/sidebar.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/table.html',
            template: './src/components/table.html',
            chunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/chart.html',
            template: './src/components/chart.html',
            chunks:['app','assets/js/chart']
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/help.html'),
            location:'help',
            template_filename:['index.html','add-product.html','users.html','orders.html','add-user.html']
          }),
          new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/sidebar.html'),
            location:'sidebar',
            template_filename:['index.html','add-product.html','product.html','users.html','orders.html','add-user.html']
          }),
          new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/chart.html'),
            location:'chart',
            template_filename:['index.html',]
          }),
          new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/banner.html'),
            location:'banner',
            template_filename:['index.html',]
          }),
          new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/tabs.html'),
            location:'tabs',
            template_filename:['index.html']
          }),
          new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/actions.html'),
            location:'actions',
            template_filename:['index.html',]
          })
    ],
};

const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './index.html',
    filename: './index.html',
    favicon: './assets/images/favicon.ico'
});

// const copyWebpackPlugin = new CopyWebpackPlugin([
//         { from: './index.css', to: './index.css' },
// ]);

// const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();

module.exports = () => {
        return ({
        entry: [
            './index.js',
            './styles/base/base.scss'
        ],
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        // optimization: {
        //     splitChunks: {
        //       chunks: 'all'
        //     }
        // },
        context: resolve(__dirname, 'src'),
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.scss$|.css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpg|gif|ico)$/,
                    use: [{ loader: 'file-loader?name=images/[name].[ext]' }]
                },
                {
                    test: /\.mp3$/,
                    use: [{ loader: 'url-loader?limit=15000&name=media/[hash].[ext]' }]
                },
                {
                    test: /\.mp4$/,
                    use: [{ loader: 'url-loader?limit=15000&name=videos/[name].[ext]' }]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{ loader: 'url-loader?limit=15000&name=fonts/[hash].[ext]' }]
                },
            ]
        },
        plugins: [
            htmlWebpackPlugin,
            // copyWebpackPlugin,
            // bundleAnalyzerPlugin
        ]
    });
};

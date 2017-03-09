import ExtractTextPlugin from 'extract-text-webpack-plugin';
const PRODUCTION = process.env.NODE_ENV === 'production';

export default function (appName) {
    const prefix = appName ? `${appName}/` : '';

    return [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=babel',
    }, {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: `url-loader?limit=10000&name=/${prefix}[hash].[ext]`,
    }, {
        test: /\.(otf|svg)(\?.+)?$/,
        loader: 'url-loader?limit=8192',
    }, {
        test: /\.eot(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject',
    }, {
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff2',
    }, {
        test: /\.woff(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff',
    }, {
        test: /\.ttf(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-ttf',
    }, {
        test: /\.html$/,
        loader: 'html-loader',
    }, {
        test: /\.s?css$/,
        exclude: /node_modules/,
        ...(PRODUCTION ? {
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader?importLoaders=1', 'postcss-loader', 'sass-loader']
                })
            } : {loaders: ["style-loader", "css-loader?sourceMap", "postcss-loader", "sass-loader?sourceMap&sourceComments"]} )
    },
        // {
        //     test: /\.less$/,
        //     use: ["style-loader", {loader: 'css-loader', options: {sourceMap: 1}}, "postcss-loader", "less-loader"]
        // }
    ];
}

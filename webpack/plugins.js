import webpack from 'webpack';

const PRODUCTION = process.env.NODE_ENV === 'production';

export function definePlugin() {
    return new webpack.DefinePlugin({
        'process.env.NODE_ENV': PRODUCTION ? JSON.stringify("production") : JSON.stringify("development"),
    });
}

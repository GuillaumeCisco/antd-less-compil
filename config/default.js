const apiPort = process.env.NODE_PORT || 3000;

module.exports = {
    appName: 'Ghost',
    apps: {
        frontend: {
            api_port: apiPort,
        },
    },
    babel_ignore: /node_modules\/(?!admin-config)/,
};

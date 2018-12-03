module.exports = {
    splitChunks: {
        cacheGroups: {
            vendor: {
                chunks: 'all',
                test: require('../paths').VENDOR,
                name: 'vendors',
                enforce: true,
            },
        }
    }
};
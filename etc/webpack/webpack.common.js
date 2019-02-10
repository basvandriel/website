const config = {
    mode: "production",
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [

            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
        ],
    },
};

module.exports = config;
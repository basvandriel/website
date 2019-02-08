const path = require("path");

module.exports = {
    watch: false,
    externals: {
        jquery: "jQuery",
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
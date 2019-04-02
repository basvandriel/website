import {BUILD} from "./paths";

export default {
    /**
     * Webpack configuration
     */
    webpack: {
        mode: "production",
        module: {
            rules: [

                {
                    test: /\.js?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                },
            ],
        },
    },
    /**
     * BrowserSync configuration for live reloading pages
     */
    browsersync: {
        server: {
            baseDir: BUILD
        },
        open: false,
        ui: false,
        notify: false,
    }
};
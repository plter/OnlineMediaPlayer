const CopyPlugin = require('copy-webpack-plugin');

module.exports = function (env, options) {
    return {
        entry: {
            omp: "./src/Main.js"
        },
        devtool: options.mode === "production" ? false : "source-map",

        plugins: [
            new CopyPlugin({
                patterns: [{from: "public/lib", to: "lib"}, "public/index.html"]
            })
        ],
    }
}
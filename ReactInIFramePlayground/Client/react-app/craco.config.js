const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // Change the output filename and chunkFilename for JS files
            webpackConfig.output.filename = 'static/js/[name].custom.js';
            webpackConfig.output.chunkFilename = 'static/js/[name].custom.chunk.js';

            // Optionally, change CSS file names (if using MiniCssExtractPlugin)
            const miniCssExtractPlugin = webpackConfig.plugins.find(
                plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
            );
            if (miniCssExtractPlugin) {
                miniCssExtractPlugin.options.filename = 'static/css/[name].custom.css';
                miniCssExtractPlugin.options.chunkFilename = 'static/css/[name].custom.chunk.css';
            }

            return webpackConfig;
        },
    },
};
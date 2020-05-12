const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
const devServerOption = {
    open: true,
    hot: true,
    host: '0.0.0.0',
    port: 8088,
    https: false,
    inline: true
}


module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '../dist/' : '/',
    outputDir: 'dist',
    productionSourceMap: false,
    devServer: devServerOption,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('base', resolve('src/base'))
            .set('static', resolve('src/static'))
    }
}
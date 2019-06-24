const {injectBabelPlugin} = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override (config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config)
    config.devtool = false
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            '@primary-color': '#1973ba',
            '@font-size-base': '14px'
        }
    })(config, env)
    return config
}

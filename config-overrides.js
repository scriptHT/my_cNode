const { injectBabelPlugin } = require('react-app-rewired');
const { override, fixBabelImports } = require('customize-cra');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    // do stuff with the webpack config...
    return config;
};
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
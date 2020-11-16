const path = require("path");
const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');

const addPxToViewPlugin = plugins => config => {
    const rules = config.module.rules.find(rule => Array.isArray(rule.oneOf))
        .oneOf;
    console.log('aaa')
    rules.forEach(
        r =>
            r.use &&
            r.use.forEach(u => {
                if (u.options && u.options.ident === "postcss") {
                    if (!u.options.plugins) {
                        u.options.plugins = () => [...plugins];
                    }
                    if (u.options.plugins) {
                        const originalPlugins = u.options.plugins;
                        u.options.plugins = () => [...originalPlugins(), ...plugins];
                    }
                }
            })
    );
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        // libraryDirectory:'es',
        style: true,
    }),
    // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@brand-primary': '#FB7299', '@brand-primary-tap': '#FCAAC2', '@color-text-disabled': '#bbb' }
        }
    }),
    addPostcssPlugins(
        [
            require("postcss-px-to-viewport")({
                viewportWidth: 450, // (Number) The width of the viewport.      
                viewportHeight: 1334, // (Number) The height of the viewport.      
                unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.      
                viewportUnit: "vw", // (String) Expected units.      
                selectorBlackList: [], // (Array) The selectors to ignore and leave as px.      
                minPixelValue: 1, // (Number) Set the minimum pixel value to replace.      
                mediaQuery: true // (Boolean) Allow px to be converted in media queries.    
            })
        ])
);
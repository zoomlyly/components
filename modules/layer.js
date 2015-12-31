module.exports = (function() {

    return [{
        repos: 'https://github.com/sentsin/layer.git',
        version: '2.1',
        name: 'layer',
        main: 'layer.js',
        dependencies: [
            "jquery@>=1.8"
        ],
       

        // 当目标不是 amd/umd 规范时，需要设置 shim 信息。
        shim: {
            "layer.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();

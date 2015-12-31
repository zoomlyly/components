module.exports = (function() {

    return [{
        repos: 'https://github.com/sentsin/layer.git',
        version: '2.1',
        name: 'layer',
        main: 'layer.js',
        dependencies: [
            "jquery@>=1.8"
        ],
        shim: {
            "layer.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();

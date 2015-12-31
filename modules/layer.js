module.exports = (function() {

    return [{
        repos: 'https://github.com/sentsin/layer.git',
        version: '2.1',
        name: 'layer',
        main: 'layer.js',
        dependencies: [
            "jquery@>=1.8"
        ],
        //匹配
        mapping: [
            {
                reg: '/extend/layer.ext.js',
                release: '$&'
            },
            {
                reg: '/skin/*.css',
                release: '$&'
            },
            {
                reg: /^\/skin\/default\/([^\/]*\.(png|gif))$/,
                release: '$&'
            },
            
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "layer.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();

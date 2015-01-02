'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/rstacruz/nprogress.git',
        version: 'v0.1.6',
        name: 'nprogress',
        main: 'nprogress.js',
        dependencies: [
            "jquery"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^nprogress\.js$/,
                release: '$&'
            },
            {
                reg: /^nprogress\.css$/,
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
        ]
    }]
})();

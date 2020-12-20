module.exports = {
    title: 'Ting',
    description: 'Vue.js、JavaScript、Note',
    base:'/Vuepress_Ting/',//github儲存庫名稱
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
        nav:[//navbar按鈕
            { text: 'Home', link: '/'},
            { text: 'Github', link: 'https://github.com/Weitingchien'},
            { text: 'twitter', link: 'https://twitter.com/WeitingCHIEN1'},
        ],
        sidebar:[//側邊欄
            '/',
            {
                title:'JavaScript',
                path:'/JavaScript_1/',
                children: [
                    '/JavaScript_1/scopechain',
                    '/JavaScript_1/hoisting.md',
                    '/JavaScript_1/varletconst.md',
                    '/JavaScript_1/thread-async-sync.md',
                    '/JavaScript_1/statement-expression.md',
                    '/JavaScript_1/dynamic.md',
                    '/JavaScript_1/primitivedatatype.md',
                    '/JavaScript_1/precedenceassociativity.md',
                    '/JavaScript_1/looseequals-strictequals.md',
                    '/JavaScript_1/truthy-falsy.md',
                    '/JavaScript_1/logical-operators.md',
                    '/JavaScript_1/objects.md',
                    '/JavaScript_1/ajax-json.md',
                    '/JavaScript_1/function.md',
                ]
            },
            {
                title:'Vue.js',
                path:'/Vue_2/',
                children: [
                    '/Vue_2/basic',
                ]
            }
        ],
        sitemap: {
            hostname: 'https://weitingchien.github.io/Vuepress_Ting/',
        },
    },
}
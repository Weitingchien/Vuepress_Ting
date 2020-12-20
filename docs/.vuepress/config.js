module.exports = {
    title: 'Ting',
    description: 'Vue.js、JavaScript、Note',
    base:'/Vuepress_Ting/',//github儲存庫名稱
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'Weitingchien',
            repo: 'Vuepress_Ting',
            clientId: 'a81389f92909a07e0ff6',
            clientSecret: '834c9d86e5d0f35fecb1535a300d044724c3a4a2',
            autoCreateIssue:true
          },
    },

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
        }
    }
}
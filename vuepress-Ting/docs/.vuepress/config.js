module.exports = {
    title: 'Ting',
    description: 'Vue.js、JavaScript、Note',
    base:'/Vuepress_Ting/',//github儲存庫名稱
    head: [
        ['link', { rel: 'icon', href: '/public/assets/img/logo.png' }],
        ['link', { rel: "shortcut icon", href: "/public/assets/img/favicon.ico"}],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/public/assets/img/apple-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/public/assets/img/VueJSIcon.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/public/assets/img/ms-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'google-site-verification', content: 'VKqM8Btzdv1WdFMEtWbBzuL_5CEDC5O5YfaUajv8IYE'}],
    ],
    plugins: [['@vuepress/back-to-top'],['@vuepress/nprogress'],['@vuepress/pwa'],['@vuepress/google-analytics',{'ga': 'UA-177623947-1' }],// UA-00000000-0
    [{seo:{
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }}],
    ['sitemap',{hostname: 'https://weitingchien.github.io/Vuepress_Ting/'}],
    ['@vuepress/last-updated',{dateOptions:{ hour12: false}}],
    ['@vuepress/pwa',{
        serviceWorker: true,
        popupComponent: 'MySWUpdatePopup',
        updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
    }}],
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
                path:'',
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
                    '/JavaScript_1/prototype.md',
                ]
            },
            {
                title:'Vue.js',
                path:'',
                children: [
                    '/Vue_2/basic',
                ]
            }
        ],
    },
}
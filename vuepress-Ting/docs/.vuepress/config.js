module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base:'/Vuepress_Ting/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
        sidebar:[
            '/',
            '/Category_1/',
            {
                title:'Category2_nest',
                path:'/Category_2/',
                children: [
                    '/Category_2/test1',
                ]
            }
        ]
    }
}
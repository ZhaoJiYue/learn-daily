module.exports = {
    title: '日常学习总结',
    description: '学习总结',
    theme: 'reco',
    base: '/learn-daily/',
    themeConfig: {
        subSidebar: 'auto',
        sidebar: [
            {
                title: '欢迎学习',
                path: '/1',
                collapsable: true, // 折叠
                children: [
                    { title: "学前必读", path: "/2" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/3',
                collapsable: true, // 折叠
                children: [
                    { title: "条件类型", path: "/handbook/ConditionalTypes" },
                    { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}
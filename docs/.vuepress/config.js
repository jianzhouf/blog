module.exports = {
    base: "/blog/",
    title: 'Jian Zhou',
    
    description: 'show time！',
    serviceWorker: true,
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'jianzhouf',
        sidebar: {
            '/JavaScript/': [
                '', 
                'promise', 
            ],

            '/CSS/': [
                '',
                'ThreeColumnLayout', 
            ],
            '/HTTP/': [
                '',
            ],

            // fallback
            '/': [
                '', 
            ]
        },
        nav: [{
                text: '博客',
                items: [{
                        text: 'JavaScript',
                        link: '/JavaScript/'
                    },
                    {
                        text: 'CSS',
                        link: '/CSS/'
                    },
                    {
                        text: 'HTTP',
                        link: '/HTTP/'
                    }
                ]
            },
            {
                text: '简历',
                link: 'https://jianzhouf.github.io/resume/'
            }
        ]
    }
}
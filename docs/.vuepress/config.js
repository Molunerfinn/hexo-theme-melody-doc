module.exports = {
  title: 'hexo-theme-melody',
  head: [
    [
      'link', {
        rel: 'icon', href: 'https://user-images.githubusercontent.com/12621342/33876119-85a5148e-df5f-11e7-8843-46224e595d52.png'
      }
    ]
  ],
  base: '/hexo-theme-melody-doc/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'hexo-theme-melody',
      description: 'A simple & beautiful & fast theme for Hexo'
    },
    '/zh-Hans/': {
      lang: '简体中文',
      title: 'hexo-theme-melody',
      description: '一个为Hexo打造的简洁、漂亮、快速的主题'
    }
  },
  description: 'A simple & beautiful & fast theme for Hexo',
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/Molunerfinn/hexo-theme-melody-doc/master/docs/imgs/logo.png',
    repo: 'Molunerfinn/hexo-theme-melody',
    docsRepo: 'Molunerfinn/hexo-theme-melody-doc',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        sidebar: {
          '/': getEnSidebar()
        },
        nav: [
          {
            text: 'Quick Start',
            link: '/quick-start.html'
          },
          {
            text: 'Advanced',
            items: [
              {
                text: 'Theme Config',
                link: '/theme-config.html'
              },
              {
                text: 'Theme pages',
                link: '/theme-pages.html'
              },
              {
                text: 'Third-party',
                link: '/third-party-support.html'
              },
              {
                text: 'Additional-package',
                link: '/additional-package-support.html'
              }
            ]
          },
        ]
      },
      '/zh-Hans/': {
        sidebar: {
          '/zh-Hans/': getEnSidebar()
        },
        nav: [
          {
            text: '快速开始',
            link: '/quick-start.html'
          },
          {
            text: '高级技巧',
            items: [
              {
                text: '主题配置',
                link: '/zh-Hans/theme-config.html'
              },
              {
                text: '主题页面',
                link: '/zh-Hans/theme-pages.html'
              },
              {
                text: '第三方支持',
                link: '/zh-Hans/third-party-support.html'
              },
              {
                text: '额外依赖库支持',
                link: '/zh-Hans/additional-package-support.html'
              }
            ]
          },
        ]
      }
    }
  }
}

function getEnSidebar () {
  return [
    {
      title: 'hexo-theme-melody',
      collapsable: false,
      children: [
        '',
        'quick-start',
        'theme-config',
        'theme-pages',
        'third-party-support',
        'additional-package-support',
      ]
    }
  ]
}

function getDevSidebar (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'cli',
        'gui',
        'deploy'
      ]
    }
  ]
}

export const menus = [
  {
    text: '仪表盘',
    icon: 'home',
    pathname: '/',
  }, {
    text: '首页',
    icon: 'home',
    pathname: '/home',
    sub: [
      {
        text: '首页',
        pathname: '/home',
      }, {
        text: '求购房源',
        pathname: '/house',
        auth: 'requestInfo',
      }, {
        text: '经纪人',
        pathname: '/broker',
        auth: 'agent',
      }, {
        text: '评论',
        pathname: '/comment',
      }, {
        text: '联系经纪人',
        pathname: '/contact',
      },
    ],
  }, {
    text: '更多详情',
    icon: 'bars',
    pathname: '/more',
    sub: [
      {
        text: '房源',
        pathname: '/more/house',
      }, {
        text: '经纪人',
        pathname: '/more/broker',
      }, {
        text: '用户',
        pathname: '/more/user',
      }, {
        text: '联系经纪人',
        pathname: '/more/contact',
      }, {
        text: '房源评论',
        pathname: '/more/house-comment',
      }, {
        text: '经纪人评论',
        pathname: '/more/broker-comment',
      },
    ],
  }, {
    text: '国家',
    icon: 'environment',
    pathname: '/country',
    sub: [
      {
        text: '编辑国家',
        pathname: '/country/edite',
      }, {
        text: '添加国家',
        pathname: '/country/add',
      },
    ],
  }, {
    text: '区域',
    icon: 'environment-o',
    pathname: '/area',
    sub: [
      {
        text: '编辑区域',
        pathname: '/area/about',
      }, {
        text: '添加区域',
        pathname: '/area/add',
      },
    ],
  }, {
    text: '新闻',
    icon: 'book',
    pathname: '/news',
    sub: [
      {
        text: '新闻列表',
        pathname: '/news/list',
        auth: 'news',
      }, {
        text: '手动添加',
        pathname: '/news/add',
        auth: 'news',

      },
    ],
  }, {
    text: '推荐',
    icon: 'pushpin-o',
    pathname: '/recommend',
    sub: [
      {
        text: 'Bannar',
        pathname: '/recommend/bannar',
        auth: 'indexStatic',
      }, {
        text: '推荐房源',
        pathname: '/recommend/house',
        auth: 'indexStatic',

      }, {
        text: '推荐新闻',
        pathname: '/recommend/news',
        auth: 'indexStatic',

      }, {
        text: '推荐经纪人',
        pathname: '/recommend/agent',
        auth: 'indexStatic',

      },
    ],
  },
];

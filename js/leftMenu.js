// 左侧菜单数据
var leftMenuListData = [
  {
    menuTitle: '大运河文化带',
    modal: {
      title: '苏州航道文化遗产总览',
      iframeHref: './cultrue.html',
      width: 650,
      height: 430,
    },
    landscape: [
      {
        img: './images/img-01.png',
        title: '遗产',
      },
      {
        img: './images/img-02.png',
        title: '景区',
      },
    ],
  },
  {
    menuTitle: '大运河生态带',
    modal: {
      title: '苏州绿色环保航道总览',
      iframeHref: './course.html',
      width: 650,
      height: 620,
    },
    landscape: [
      {
        img: './images/img-03.png',
        title: '绿化',
      },
      {
        img: './images/img-04.png',
        title: '环境监测',
      },
      {
        img: './images/img-05.png',
        title: '污水回收',
      },
      {
        img: './images/img-06.png',
        title: '充电桩',
      },
    ],
  },
  {
    menuTitle: '大运河经济带',
  },
  {
    menuTitle: '航道惠民服务',
    modal: {
      title: '惠民服务航道概览',
      iframeHref: '/courseService.html',
      width: 650,
      height: 510,
    },
  },
  {
    menuTitle: '航道工作状态',
  },
  {
    menuTitle: '大运河安全保障',
  },
  {
    menuTitle: '大运河现场监测',
  },
  {
    menuTitle: '示范航线',
  },
];
window.leftMenuListData = leftMenuListData;

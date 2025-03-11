export interface Links {
  title: string;
  id: string;
  children?: LinksChildren[]
}
export interface LinksChildren {
  title: string;
  url: string;
  icon: string;
  des?: string
}
export const links: Links[] = [
  {
    title: '前端',
    id: '1',
    children: [
      {
        title: 'Github',
        url: 'https://github.com',
        icon: 'https://img.icons8.com/ios-glyphs/30/000000/github.png',
        des: 'Build and ship software on a single, collaborative platform',
      },
      {
        title: 'React',
        url: 'https://react.docschina.org/',
        icon: 'https://react.docschina.org/images/home/conf2021/cover.svg',
        des: '用于构建 Web 和原生交互界面的库',
      },
      {
        title: 'Ant Design',
        url: 'https://ant-design.antgroup.com/index-cn',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        des: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
      },
      {
        title: 'Element',
        url: 'https://element.eleme.cn/#/zh-CN/component/installation',
        icon: 'https://element.eleme.cn/favicon.ico',
        des: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
      },
      {
        title: 'Apache ECharts',
        url: 'https://echarts.apache.org/zh/index.html',
        icon: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20240226',
        des: '一个基于 JavaScript 的开源可视化图表库',
      },
      {
        title: '统色',
        url: 'https://nipponcolors.com/#kenpohzome',
        icon: 'https://nipponcolors.com/favicon.ico',
        des: '颜色调剂',
      },
      {
        title: 'Vue CLI',
        url: 'https://cli.vuejs.org/zh/',
        icon: 'https://cli.vuejs.org/favicon.png',
        des: 'Vue.js 开发的标准工具',
      },
      {
        title: '图片转换工具',
        url: 'https://www.svg2png.com/',
        icon: 'https://www.svg2png.com/favicon.svg',
        des: '在SVG和光栅格式之间转换。免费、快速、安全。',
      },
    ]
  }
]
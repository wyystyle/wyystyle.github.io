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
        title: 'Vue3',
        url: 'https://cn.vuejs.org/',
        icon: 'https://v2.cn.vuejs.org/images/icons/apple-icon-76x76.png',
        des: '渐进式JavaScript 框架，易学易用，性能出色，适用场景丰富的 Web 前端框架。',
      },
      {
        title: 'Vue2',
        url: 'https://v2.cn.vuejs.org/',
        icon: 'https://v2.cn.vuejs.org/images/icons/apple-icon-76x76.png',
        des: '渐进式JavaScript 框架',
      },
      {
        title: 'Element',
        url: 'https://element.eleme.cn/#/zh-CN/component/installation',
        icon: 'https://element.eleme.cn/favicon.ico',
        des: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
      },
      {
        title: 'Element Plus',
        url: 'https://element-plus.org/zh-CN/',
        icon: 'https://element.eleme.cn/favicon.ico',
        des: '基于 Vue 3，面向设计师和开发者的组件库',
      },
      {
        title: 'Vant',
        url: 'https://vant-ui.github.io/vant/v2/#/zh-CN/home',
        icon: 'https://img01.yzcdn.cn/vant/logo.png',
        des: '轻量、可靠的移动端 Vue 组件库',
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
      {
        title: 'Github',
        url: 'https://github.com',
        icon: 'https://img.icons8.com/ios-glyphs/30/000000/github.png',
        des: 'Build and ship software on a single, collaborative platform',
      }
    ]
  },
  {
    title: 'AI工具',
    id: '1',
    children: [
      {
        title: '豆包',
        url: 'https://www.doubao.com/chat/',
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png',
        des: '豆包是由字节跳动公司开发的人工智能，能够为用户提供广泛而专业的服务',
      },
      {
        title: 'deepseek',
        url: 'https://chat.deepseek.com',
        icon: 'https://cdn.deepseek.com/chat/icon.png',
        des: 'DeepSeek是由杭州深度求索人工智能基础技术研究有限公司开发人工智能，专注于开发先进的大语言模型（LLM）和相关技术',
      },
      {
        title: '文心一言',
        url: 'https://yiyan.baidu.com/',
        icon: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
        des: '文心一言是百度推出的新一代知识增强大语言模型，广泛应用于智能写作、智能客服、智能教育、智能医疗等多个领域，能为用户提供高效便捷的服务',
      },
      {
        title: 'OpenAI',
        url: 'https://openai.com/',
        icon: 'https://openai.com/favicon.ico',
        des: 'OpenAI 是一家在人工智能领域极具影响力的公司，由萨姆・奥尔特曼、埃隆・马斯克、彼得・蒂尔等硅谷科技大亨在美国旧金山创立，总部位于旧金山',
      },
      {
        title: 'KIMI',
        url: 'https://kimi.moonshot.cn/',
        icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        des: 'KIMI是由月之暗面科技有限公司于 2023 年 10 月推出的智能助手产品。其核心能力在于超长文本处理，支持长达 200 万字的上下文输入，还具备多语言对话能力，擅长中文和英文，能为用户提供回答问题、速读文件、整理资料、激发灵感、辅助创作等服务',
      },
     
    ]
  }
]
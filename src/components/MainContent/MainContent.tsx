

import React from "react";
import Carousel3D from '@/common/Carousel3D'
import { Flex } from "antd";
const MainContent: React.FC = () => {
  const images = [
    'https://img2.baidu.com/it/u=1452261084,1626689204&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1428',
    'http://img1.baidu.com/it/u=3286289898,2702177651&fm=253&app=138&f=JPEG?w=800&h=1428',
    'http://img2.baidu.com/it/u=1998387791,1257088616&fm=253&app=138&f=JPEG?w=800&h=1428',
    'http://img2.baidu.com/it/u=1089245054,2965347669&fm=253&app=138&f=JPEG?w=800&h=1428',
    'http://img2.baidu.com/it/u=3503854527,1281715283&fm=253&app=138&f=JPEG?w=800&h=1428',
    'https://ww4.sinaimg.cn/mw690/005J4OU5ly1hq8lyvs43cj30u01t14cc.jpg',
  ];

  return (
    <Flex style={{width:'100%',height:'100%'}} justify={'center'} align={'center'}>
      <Carousel3D images={images} />
    </Flex>
  );
}
export default MainContent
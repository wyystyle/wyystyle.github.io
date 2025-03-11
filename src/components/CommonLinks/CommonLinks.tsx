import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Flex, Radio, Spin} from 'antd';
import { links } from '@/config/links'
import type { LinksChildren } from '@/config/links'
const CommonLinks: React.FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [childData, setChildData] = useState<LinksChildren[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const handlClick = (url: string) => {
    window.open(url, '_blank')
  }
  const hanleRadioClick = (index: number) => {
    if(current === index) return;
    setLoading(true)
    setCurrent(index)
  }
  useEffect(() => {
    setChildData(links[current]?.children || []);
    setLoading(false)
  }, [current])
  return (
    <div>
    <Flex style={{ marginBottom:16 }} vertical gap="middle">
      <Radio.Group defaultValue={current} buttonStyle="solid">
        {
          links.map((item, index) => {
            return (
              <Radio.Button key={index} onClick={()=>{hanleRadioClick(index)}} value={index}>{item.title}</Radio.Button>
            )
          })
        }
      </Radio.Group>
    </Flex>
      <Spin spinning={loading}>
        <Row gutter={16}>
          {
            childData.map((item, index) => {
              return (
                <Col key={index} style={{marginBottom:16}} className="gutter-row" span={6}>
                  <Card title={item.title} extra={<a onClick={() =>{ handlClick(item.url) }} >更多</a>} style={{ width: '100%' }}>
                    <Row gutter={16}>
                      <Col className='flex-center' style={{ height:66 }}  span={8}><img style={{  width: 50, height: 50 }} src={item.icon} alt={item.title} /></Col>
                      <Col style={{ height:66 }} span={16}><p className='overflow-b-3'>{item.des}</p></Col>
                    </Row>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Spin>
    </div>
  )
}
export default CommonLinks
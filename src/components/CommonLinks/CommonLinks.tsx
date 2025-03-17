import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Flex, Radio, Spin, Pagination } from 'antd';
import { links } from '@/config/links'
import type { LinksChildren } from '@/config/links'

const defaultPageSize = 12
const CommonLinks: React.FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [childData, setChildData] = useState<LinksChildren[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [pageNo, setPageNo] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(defaultPageSize)


  const hanlePageChange = (page: number, pageSize: number) => {
    setPageNo(page)
    setPageSize(pageSize)
  }
  const handlClick = (url: string) => {
    window.open(url, '_blank')
  }
  const hanleRadioClick = (index: number) => {
    if (current === index) return;
    setPageNo(1)
    setPageSize(defaultPageSize)
    setLoading(true)
    setCurrent(index)
  }
  useEffect(() => {
    const childrens = links[current]?.children || []
    setChildData(childrens.slice(((pageNo - 1) * pageSize), (pageNo * pageSize)));
    setTotal(links[current]?.children?.length || 0)
    setLoading(false)
  }, [pageNo, pageSize, current])
  return (
    <>
      <div style={{ minHeight: 'calc(100% - 64px)', overflowY: 'auto' }}>
        <Flex style={{ marginBottom: 16 }} vertical gap="middle">
          <Radio.Group defaultValue={current} buttonStyle="solid">
            {
              links.map((item, index) => {
                return (
                  <Radio.Button key={index} onClick={() => { hanleRadioClick(index) }} value={index}>{item.title}</Radio.Button>
                )
              })
            }
          </Radio.Group>
        </Flex>
        <Spin spinning={loading}>
          <Row>
            {
              childData.map((item, index) => {
                return (
                  <Col
                    xs={24} sm={12} md={12} lg={6} xl={6}
                    key={index} style={{ marginBottom: 16, padding: '0px 8px'}} className="gutter-row" span={6}>
                    <Card hoverable={true} title={item.title} extra={<a onClick={() => { handlClick(item.url) }} >更多</a>} style={{ width: '100%' }}>
                      <Row gutter={16}>
                        <Col className='flex-center' style={{ height: 66 }} span={8}><img style={{ width: 50, height: 50 }} src={item.icon} alt={item.title} /></Col>
                        <Col style={{ height: 66 }} span={16}><p className='overflow-b-3'>{item.des}</p></Col>
                      </Row>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Spin>
      </div>
      {
        total > 0 &&
        <Pagination
          align='center'
          showSizeChanger
          onChange={hanlePageChange}
          pageSizeOptions={[defaultPageSize, 16, 32, 64]}
          showTotal={(total, range) => `第 ${range[0]} 条，共 ${total} 条`}
          current={pageNo}
          total={total}
          pageSize={pageSize}
        />
      }
    </>
  )
}
export default CommonLinks
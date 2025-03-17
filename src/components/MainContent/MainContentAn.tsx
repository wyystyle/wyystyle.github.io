
import { Card, Input, Row, Col, Button, Flex, Space, Typography, Select } from "antd"
import { EnterOutlined, SyncOutlined } from '@ant-design/icons';
import { useState } from "react";
import './MainContent.css'
const { TextArea } = Input;
const { Title } = Typography;

type Model = {
  value: string;
  label: string;
}
const options: Model[] = [
  { value: 'deepseek', label: 'deepseek' },
  { value: 'tongyiqianwen', label: '通义千问' },
]
const MainContent: React.FC = () => {
  const [model, setModel] = useState<string>('deepseek')
  const [loading, setLoading] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [resultList] = useState<any[]>([])
  const handleSubmit = (): void => {
    setLoading(true)
  }
  const handleModelChange = (value: string): void => {
    setModel(value)
  }
  return (
    <>
      <main style={{height:'calc(100% - 220px)'}}>
        {resultList.length > 0 && <Title style={{ textAlign: 'center' }}>hallow！有什么可以帮您的吗</Title>}
        {resultList.length == 0 &&
          <Row style={{height:'calc(100% - 0px)'}} justify={'center'} gutter={[16, 16]}>
            <Col style={{minHeight:'calc(100% - 0px)',overflowY:'auto'}} xs={24} sm={12} md={12} lg={12} xl={12}  >
              
            </Col>
          </Row>
        }
      </main>
      <footer style={{marginTop:'20px'}}>
        <Row justify={'center'} gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}  >
            <Card className={`${loading ? 'dy-animation' : ''} dynamic-youth-bg`} style={{ width: '100%' }}>
              <TextArea className="send_input" onPressEnter={handleSubmit} value={text} onChange={(e) => { setText(e.target.value) }} autoSize={{ minRows: 4, maxRows: 4 }} rows={4} placeholder="请输入您想问的问题" />
              <Flex style={{ marginTop: '10px' }} justify={'space-between'} >
                <Select defaultValue={model} onChange={handleModelChange} style={{ width: 120 }} options={options} />
                <Space direction="vertical" size="middle" >
                  <Button type="primary" onClick={handleSubmit} loading={loading && { icon: <SyncOutlined spin /> }} icon={<EnterOutlined />}>

                  </Button>
                </Space>
              </Flex>
            </Card>
          </Col>
        </Row>
      </footer>
    </>
  )
}
export default MainContent
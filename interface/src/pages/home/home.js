import React from 'react'
import { Row, Col, Card } from 'antd'
import { Cards, Table } from './components'

const Home = () => (
  <div className='tabled'>
    <Row>
      <Col span={24} style={{ marginBottom: '20px' }}>
        <Card
          bordered={false}
          className='criclebox tablespace mb-24'
          title='Próximos concertos'
        ></Card>
        <Table />
      </Col>
      <Col span={24}>
        <Card bordered={false} className='criclebox tablespace mb-24' title='Navegação'></Card>
        <Cards />
      </Col>
    </Row>
  </div>
)

export default Home

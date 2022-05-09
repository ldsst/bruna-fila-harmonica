import React from 'react'
import { Row, Col, Card } from 'antd'
import { Table } from './components'

const People = () => (
  <div className='tabled'>
    <Row>
      <Col span={24}>
        <Card bordered={false} className='criclebox tablespace mb-24' title='Pessoas'>
          <Table />
        </Card>
      </Col>
    </Row>
  </div>
)

export default People

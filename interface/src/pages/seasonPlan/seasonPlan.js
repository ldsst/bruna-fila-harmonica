import React from 'react'
import { Row, Col, Card } from 'antd'
import { Table } from './components'

const SeasonPlan = () => (
  <div className='tabled'>
    <Row>
      <Col span={24}>
        <Card bordered={false} className='criclebox tablespace mb-24' title='Plano Temporada'>
          <Table />
        </Card>
      </Col>
    </Row>
  </div>
)

export default SeasonPlan

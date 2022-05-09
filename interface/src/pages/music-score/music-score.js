import React from 'react'
import { Row, Col, Card } from 'antd'
import { Table } from './components'

const MusicScore = () => (
  <div className='tabled'>
    <Row>
      <Col span={24}>
        <Card bordered={false} className='criclebox tablespace mb-24' title='Partituras'>
          <Table />
        </Card>
      </Col>
    </Row>
  </div>
)

export default MusicScore

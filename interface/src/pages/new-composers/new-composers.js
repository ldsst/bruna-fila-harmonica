import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const NewComposers = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Novos compositores'>
      <Form />
    </Card>
  </Col>
)

export default NewComposers

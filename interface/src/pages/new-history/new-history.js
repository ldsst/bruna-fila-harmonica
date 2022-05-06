import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const NewHistory = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Novo dado histórico'>
      <Form />
    </Card>
  </Col>
)

export default NewHistory

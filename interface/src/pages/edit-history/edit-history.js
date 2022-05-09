import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const EditHistory = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Editar dado histórico'>
      <Form />
    </Card>
  </Col>
)

export default EditHistory

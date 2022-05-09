import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const EditComposers = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Editar compositor'>
      <Form />
    </Card>
  </Col>
)

export default EditComposers

import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const NewGuest = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace ' title='Novo Convidado'>
      <Form />
    </Card>
  </Col>
)

export default NewGuest

import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'
import 'moment/locale/zh-cn'

const EditGuest = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Editar Convidado'>
      <Form />
    </Card>
  </Col>
)

export default EditGuest

import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const EditarObra = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Editar obras'>
      <Form />
    </Card>
  </Col>
)

export default EditarObra

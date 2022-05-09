import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const EditPeople = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Editar pessoa'>
      <Form />
    </Card>
  </Col>
)

export default EditPeople

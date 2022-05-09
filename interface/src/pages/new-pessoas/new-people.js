import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const NewPeople = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Novo pessoa'>
      <Form />
    </Card>
  </Col>
)

export default NewPeople

import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const NewSeasonPlan = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Novo plano temporada'>
      <Form />
    </Card>
  </Col>
)

export default NewSeasonPlan

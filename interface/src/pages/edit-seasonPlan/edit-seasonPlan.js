import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const EditSeasonPlan = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Editar plano temporada'>
      <Form />
    </Card>
  </Col>
)

export default EditSeasonPlan

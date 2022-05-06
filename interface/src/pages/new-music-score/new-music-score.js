import React from 'react'
import { Card, Col } from 'antd'
import { Form } from './components'

const NewMusicScore = () => (
  <Col>
    <Card bordered={false} className='criclebox tablespace mb-24' title='Nova Partitura'>
      <Form />
    </Card>
  </Col>
)

export default NewMusicScore

import React from 'react'

import { Col, Button } from 'antd'

const TableHeader = () => (
  <Col
    sm={22}
    md={23}
    lg={24}
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '10px'
    }}
  >
    <Col
      sm={3}
      md={4}
      lg={5}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20px'
      }}
    >
      <Button
        type='primary'
        href='/novoConvidado'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Adicionar convidado
      </Button>
    </Col>
  </Col>
)

export default TableHeader

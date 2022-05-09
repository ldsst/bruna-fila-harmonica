import React from 'react'

import { Col, Button } from 'antd'
import { SearchField } from '../../../../components'

const TableHeader = ({ data, setAux, searchFor }) => (
  <Col
    sm={22}
    md={23}
    lg={24}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px'
    }}
  >
    <Col
      span={7}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px'
      }}
    >
      <SearchField setAuxData={setAux} searchFor={searchFor} data={data} />
    </Col>
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
        href='/novoDadoHistorico'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Adicionar histórico
      </Button>
    </Col>
  </Col>
)

export default TableHeader

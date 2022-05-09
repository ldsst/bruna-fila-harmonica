import React from 'react'
import { SearchField } from '../../../../components'
import { Col, Card } from 'antd'

const TableHeader = ({ data, setAux, searchFor }) => (
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
      span={7}
      style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <SearchField setAuxData={setAux} searchFor={searchFor} data={data} />
    </Col>
  </Col>
)

export default TableHeader

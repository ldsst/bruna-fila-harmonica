import React from 'react'
import { Row, Col, Card } from 'antd'

const Cards = () => (
  <div
    className='site-card-wrapper'
    style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
  >
    <Row gutter={16}>
      <Col span={8}>
        <Card title='Compositores' bordered={true}>
          <a href='/compositores'> Acessar página de compositores</a>
        </Card>
      </Col>
      <Col span={8}>
        <Card title='Convidados' bordered={false}>
          <a href='/convidados'> Acessar página de convidados</a>
        </Card>
      </Col>
      <Col span={8}>
        <Card title='Histórico' bordered={false}>
          <a href='/historico'> Acessar página de histórico</a>
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Card title='Obras' bordered={true}>
          <a href='/obras'> Acessar página de obras</a>
        </Card>
      </Col>
      <Col span={8}>
        <Card title='Partituras' bordered={false}>
          <a href='/partituras'> Acessar página de Partituras</a>
        </Card>
      </Col>
      <Col span={8}>
        <Card title='Pessoas' bordered={false}>
          <a href='/pessoas'> Acessar página de pessoas</a>
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Card title='Plano de Temporada' bordered={true}>
          <a href='/planoTemporada'> Acessar página de plano de temporada</a>
        </Card>
      </Col>
      <Col span={8}>
        <Card title='Programa' bordered={false}>
          <a href='/programa'> Acessar página de programas</a>
        </Card>
      </Col>
    </Row>
  </div>
)

export default Cards

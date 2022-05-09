import React, { useEffect, useState } from 'react'
import { Col, Table, Typography, Modal } from 'antd'

const { Title } = Typography

const columns = [
  { title: <Title level={5}>Data</Title>, dataIndex: 'data', key: 'data' },
  { title: <Title level={5}>Compositor</Title>, dataIndex: 'compositor', key: 'compositor' },
  { title: <Title level={5}>Repertório</Title>, key: 'repertorio', dataIndex: 'repertorio' },
  { title: <Title level={5}>Série</Title>, key: 'serie', dataIndex: 'serie' },
  { title: <Title level={5}>Local</Title>, key: 'local', dataIndex: 'local' },
  { title: <Title level={5}>Cidade</Title>, key: 'cidade', dataIndex: 'cidade' },
  { title: <Title level={5}>Ações</Title>, key: 'acoes', dataIndex: 'acoes' }
]

const TableBody = ({ filtredData, isLoading, hasError }) => {
  const [history, setHistory] = useState([])

  const showData = history => {
    const data = filtredData.find(data => data.idHistorico === history.idHistorico)

    Modal.info({
      title: 'Historico',
      width: '40%',
      content: (
        <div
          style={{
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <div>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Nome:</strong> <span>{data.name}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Compositor:</strong> <span>{data.compositor}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Repertório:</strong> <span>{data.obra}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Data de início:</strong> <span>{data.dataInicio}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Data de fim:</strong> <span>{data.dataFim}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Série:</strong> <span>{data.serie}</span>
            </p>
          </div>
          <div>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Regente:</strong> <span>{data.regente}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Solista:</strong> <span>{data.solista}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Arranjador/Orquestrador:</strong> <span>{data.arranjador}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Local:</strong> <span>{data.local}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Cidade:</strong> <span>{data.cidade}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Solista:</strong> <span>{data.solista}</span>
            </p>
          </div>
        </div>
      )
    })
  }

  useEffect(() => {
    const dataFormat = filtredData.map(history => ({
      key: '1',
      data: (
        <div className='avatar-info'>
          <p>Início: {history.dataInicio}</p>
          <p>Fim: {history.dataFim}</p>
        </div>
      ),
      compositor: (
        <div className='avatar-info'>
          <p>{history.compositor}</p>
        </div>
      ),
      repertorio: (
        <div className='author-info'>
          <p>{history.obra}</p>
        </div>
      ),
      serie: (
        <div className='author-info'>
          <p>{history.serie}</p>
        </div>
      ),
      local: (
        <div className='author-info'>
          <p>{history.local}</p>
        </div>
      ),
      cidade: (
        <div className='ant-employed'>
          <p>{history.cidade}</p>
        </div>
      ),
      acoes: (
        <div className='ant-employed'>
          <span className='action' onClick={() => showData(history)}>
            Visualizar
          </span>
        </div>
      )
    }))

    setHistory(dataFormat)
  }, [filtredData])

  return (
    <Col span={24} className='table-responsive'>
      {hasError && <p className='font-semibold text-muted text-center redtext'>{hasError}</p>}
      <Table
        columns={columns}
        dataSource={history}
        loading={isLoading}
        pagination={{
          pageSize: 3,
          showSizeChanger: false,
          total: history.length,
          position: ['bottomCenter'],
          showTotal: total => `Total de ${total} históricos`
        }}
      />
    </Col>
  )
}

export default TableBody

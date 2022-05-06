import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Table, Typography, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import api from '../../../../services/api'

const { Title } = Typography

const { confirm } = Modal

const columns = [
  {
    title: <Title level={5}>Nome da Obra</Title>,
    dataIndex: "nomeObra",
    key: "nomeObra",
  },
  {
    title: <Title level={5}>Nome do Compositor</Title>,
    dataIndex: "compositor",
    key: "compositor",
  },
  {
    title: <Title level={5}>Ações</Title>,
    key: 'acoes',
    dataIndex: 'acoes'
  }
]

const TableBody = ({ setApiData, filtredData, isLoading, hasError }) => {
  const [obra, setObra] = useState([])
  const [error, setError] = useState('')
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const showData = history => {
    const data = filtredData.find(data => data.idObra === history.idObra)

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
              <strong>Nome:</strong> <span>{data.nomeObra}</span>
            </p>
          </div>
        </div>
      )
    })
  }

  const showDeleteConfirm = obra => {
    confirm({
      title: 'Você confirma a exclusão de:',
      icon: <ExclamationCircleOutlined />,
      content: <strong>{obra.nomeObra}</strong>,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      async onOk() {
        try {
          setIsLoadingDelete(true)
          await api.delete(`/musicalWork/${obra.idObra}`)
          setApiData(prevState => prevState.filter(i => i.idObra !== obra.idObra))
        } catch (err) {
          setError(err.response.data)
        } finally {
          setIsLoadingDelete(false)
        }
      }
    })
  }

  useEffect(() => {
    const dataFormat = filtredData.map(i => ({
      key: i.idObra,
          nomeObra: (
            <>
              <div className="avatar-info">
                <p>{i.nomeObra}</p>
              </div>
            </>
          ),
          acoes: (
            <>
              <div className="ant-employed">
                <span onClick={showData}>Visualizar</span>
              </div> 
              <div className="ant-employed">
                <Link to={`/editarObra/${i.idObra}`}>
                  Editar
                </Link>
              </div>               
              <div className="ant-employed">
                <span onClick={() => showDeleteConfirm(i)}>Excluir</span>,
              </div>
            </>
          ),
    }))

  setObra(dataFormat)
  }, [filtredData])

  return (
    <Col span={24} className='table-responsive'>
      {error ||
        (hasError && (
          <p className='font-semibold text-muted text-center redtext'>{error || hasError}</p>
        ))}
      <Table
        columns={columns}
        dataSource={obra}
        loading={isLoading || isLoadingDelete}
        pagination={{
          pageSize: 3,
          defaultCurrent: 1,
          total: obra.length,
          position: ['bottomCenter'],
          showTotal: total => `Total de ${total} obras`
        }}
      />
    </Col>
  )
}

export default TableBody

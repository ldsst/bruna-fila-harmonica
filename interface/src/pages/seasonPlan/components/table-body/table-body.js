import React, { useEffect, useState } from 'react'
import { Col, Table, Typography, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import api from '../../../../services/api'

const { Title } = Typography

const { confirm } = Modal

const columns = [
  {
    title: <Title level={5}>Nome Temporada</Title>,
    dataIndex: 'nomeTemporada',
    key: 'nomeTemporada'
  },
  {
    title: <Title level={5}>Ano Temporada</Title>,
    dataIndex: 'anoTemporada',
    key: 'anoTemporada'
  },
  {
    title: <Title level={5}>Observações</Title>,
    key: 'observacoes',
    dataIndex: 'observacoes'
  },
  {
    title: <Title level={5}>Ações</Title>,
    key: 'acoes',
    dataIndex: 'acoes'
  }
]

const TableBody = ({ setApiData, filtredData, isLoading, hasError }) => {
  const [seasonPlan, setSeasonPlan] = useState([])
  const [error, setError] = useState('')
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const showData = season => {
    const data = filtredData.find(data => data.idPessoas === season.idPessoas)

    Modal.info({
      title: 'Pessoa',
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
              <strong>Nome:</strong> <span>{data.nomeTemporada}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Compositor:</strong> <span>{data.anoTemporada}</span>
            </p>
          </div>
        </div>
      )
    })
  }

  const showDeleteConfirm = season => {
    confirm({
      title: 'Você confirma a exclusão de:',
      icon: <ExclamationCircleOutlined />,
      content: <strong>{season.nomeTemporada}</strong>,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      async onOk() {
        try {
          setIsLoadingDelete(true)
          await api.delete(`/seasonPlan/${season.idPlanoTemporada}`)
          setApiData(prevState => prevState.filter(i => i.idPlanoTemporada !== season.idPlanoTemporada))
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
      key: i.idPessoas,
      nomeTemporada: (
        <div className='avatar-info'>
          <p>{i.nomeTemporada}</p>
        </div>
      ),
      anoTemporada: (
        <div className='avatar-info'>
          <p>{i.anoTemporada}</p>
        </div>
      ),
      observacoes: (
        <div className='author-info'>
          <p>{i.observacoes}</p>
        </div>
      ),
      acoes: (
        <>
          <div className='ant-employed'>
            <span className='action' onClick={() => showData(i)}>
              Visualizar
            </span>
          </div>
          <div className='ant-employed'>
            <a href={`/editarPlanoTemporada/${i.idPlanoTemporada}`}>Editar</a>
          </div>
          <div className='ant-employed'>
            <span className='action' onClick={() => showDeleteConfirm(i)}>
              Excluir
            </span>
            ,
          </div>
        </>
      )
    }))

    setSeasonPlan(dataFormat)
  }, [filtredData])

  return (
    <Col span={24} className='table-responsive'>
      {error ||
        (hasError && (
          <p className='font-semibold text-muted text-center redtext'>{error || hasError}</p>
        ))}
      <Table
        columns={columns}
        dataSource={seasonPlan}
        loading={isLoading || isLoadingDelete}
        pagination={{
          pageSize: 3,
          defaultCurrent: 1,
          total: seasonPlan.length,
          position: ['bottomCenter'],
          showTotal: total => `Total de ${total} planos temporadas`
        }}
      />
    </Col>
  )
}

export default TableBody

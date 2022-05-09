import React, { useEffect, useState } from 'react'
import { Col, Table, Typography, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import api from '../../../../services/api'

const { Title } = Typography

const { confirm } = Modal

const columns = [
  {
    title: <Title level={5}>Nome Abreviado</Title>,
    dataIndex: 'nomeAbreviado',
    key: 'nomeAbreviadonomeCompleto'
  },
  {
    title: <Title level={5}>Ano Nascimento</Title>,
    dataIndex: 'anoNascimento',
    key: 'anoNascimento'
  },
  {
    title: <Title level={5}>Local Nascimento</Title>,
    key: 'localNascimento',
    dataIndex: 'localNascimento'
  },
  {
    title: <Title level={5}>Ano Morte</Title>,
    key: 'anoMorte',
    dataIndex: 'anoMorte'
  },
  {
    title: <Title level={5}>Local Morte</Title>,
    key: 'localMorte',
    dataIndex: 'localMorte'
  },
  {
    title: <Title level={5}>Ações</Title>,
    key: 'acoes',
    dataIndex: 'acoes'
  }
]

const TableBody = ({ setApiData, filtredData, isLoading, hasError }) => {
  const [composers, setComposers] = useState([])
  const [error, setError] = useState('')
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const showData = composers => {
    const data = filtredData.find(data => data.idCompositor === composers.idCompositor)

    Modal.info({
      title: 'Compositor',
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
              <strong>Nome Abreviado:</strong> <span>{data.nomeAbreviado}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Nome Completo:</strong> <span>{data.nomeCompleto}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Ano Nascimento:</strong> <span>{data.anoNascimento}</span>
            </p>
          </div>
        </div>
      )
    })
  }

  const showDeleteConfirm = composers => {
    confirm({
      title: 'Você confirma a exclusão de:',
      icon: <ExclamationCircleOutlined />,
      content: <strong>{composers.nomeAbreviado}</strong>,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      async onOk() {
        try {
          setIsLoadingDelete(true)
          await api.delete(`/songwriter/${composers.idCompositor}`)
          setApiData(prevState => prevState.filter(i => i.idCompositor !== composers.idCompositor))
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
      key: i.idCompositor,
      nomeAbreviado: (
        <div className='avatar-info'>
          <p>{i.nomeAbreviado}</p>
        </div>
      ),
      anoNascimento: (
        <div className='avatar-info'>
          <p>{i.anoNascimento}</p>
        </div>
      ),
      localNascimento: (
        <div className='author-info'>
          <p>{i.localNascimento}</p>
        </div>
      ),
      anoMorte: (
        <div className='author-info'>
          <p>{i.anoMorte}</p>
        </div>
      ),
      localMorte: (
        <div className='author-info'>
          <p>{i.localMorte}</p>
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
            <a href={`/editarCompositor/${i.idCompositor}`}>Editar</a>
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

    setComposers(dataFormat)
  }, [filtredData])

  return (
    <Col span={24} className='table-responsive'>
      {error ||
        (hasError && (
          <p className='font-semibold text-muted text-center redtext'>{error || hasError}</p>
        ))}
      <Table
        columns={columns}
        dataSource={composers}
        loading={isLoading || isLoadingDelete}
        pagination={{
          pageSize: 3,
          defaultCurrent: 1,
          total: composers.length,
          position: ['bottomCenter'],
          showTotal: total => `Total de ${total} compositores`
        }}
      />
    </Col>
  )
}

export default TableBody

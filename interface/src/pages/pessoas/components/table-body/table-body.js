import React, { useEffect, useState } from 'react'
import { Col, Table, Typography, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import api from '../../../../services/api'

const { Title } = Typography

const { confirm } = Modal

const columns = [
  {
    title: <Title level={5}>Nome Completo</Title>,
    dataIndex: 'nomeCompleto',
    key: 'nomeCompleto'
  },
  {
    title: <Title level={5}>Email</Title>,
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: <Title level={5}>instrumento/Posição</Title>,
    key: 'instrumentoPosicao',
    dataIndex: 'instrumentoPosicao'
  },
  {
    title: <Title level={5}>Ações</Title>,
    key: 'acoes',
    dataIndex: 'acoes'
  }
]

const TableBody = ({ setApiData, filtredData, isLoading, hasError }) => {
  const [people, setPeople] = useState([])
  const [error, setError] = useState('')
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const showData = people => {
    const data = filtredData.find(data => data.idPessoas === people.idPessoas)

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
              <strong>Nome:</strong> <span>{data.nomeCompleto}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Compositor:</strong> <span>{data.email}</span>
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Repertório:</strong> <span>{data.instrumentoPosicao}</span>
            </p>
          </div>
        </div>
      )
    })
  }

  const showDeleteConfirm = people => {
    confirm({
      title: 'Você confirma a exclusão de:',
      icon: <ExclamationCircleOutlined />,
      content: <strong>{people.nomeCompleto}</strong>,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      async onOk() {
        try {
          setIsLoadingDelete(true)
          await api.delete(`/people/${people.idPessoas}`)
          setApiData(prevState => prevState.filter(i => i.idPessoas !== people.idPessoas))
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
      nomeCompleto: (
        <div className='avatar-info'>
          <p>{i.nomeCompleto}</p>
        </div>
      ),
      email: (
        <div className='avatar-info'>
          <p>{i.email}</p>
        </div>
      ),
      instrumentoPosicao: (
        <div className='author-info'>
          <p>{i.instrumentoPosicao}</p>
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
            <a href={`/editarPessoa/${i.idPessoas}`}>Editar</a>
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

    setPeople(dataFormat)
  }, [filtredData])

  return (
    <Col span={24} className='table-responsive'>
      {error ||
        (hasError && (
          <p className='font-semibold text-muted text-center redtext'>{error || hasError}</p>
        ))}
      <Table
        columns={columns}
        dataSource={people}
        loading={isLoading || isLoadingDelete}
        pagination={{
          pageSize: 3,
          defaultCurrent: 1,
          total: people.length,
          position: ['bottomCenter'],
          showTotal: total => `Total de ${total} pessoas`
        }}
      />
    </Col>
  )
}

export default TableBody

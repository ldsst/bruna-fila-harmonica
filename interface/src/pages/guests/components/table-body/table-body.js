import React, { useEffect, useState } from 'react'
import { Col, Table, Typography, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { capitalizeString } from '../../../../helpers'
import api from '../../../../services/api'

const { Title } = Typography

const { confirm } = Modal

const columns = [
  {
    title: <Title level={5}>Nome Completo</Title>,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: <Title level={5}>Email</Title>,
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: <Title level={5}>Nacionalidade</Title>,
    key: 'nacionalidade',
    dataIndex: 'nacionalidade'
  },
  {
    title: <Title level={5}>Sexo</Title>,
    key: 'sexo',
    dataIndex: 'sexo'
  },
  {
    title: <Title level={5}>Instrumento</Title>,
    key: 'instrumento',
    dataIndex: 'instrumento'
  },
  {
    title: <Title level={5}>É regente</Title>,
    key: 'regente',
    dataIndex: 'regente'
  },
  {
    title: <Title level={5}>Ações</Title>,
    key: 'acoes',
    dataIndex: 'acoes'
  }
]

const TableBody = ({ filtredData, setApiData, isLoading, hasError }) => {
  const [guests, setGuests] = useState([])
  const [error, setError] = useState('')
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const showData = guest => {
    const data = filtredData.find(data => data.idConvidado === guest.idConvidado)

    Modal.info({
      title: 'Convidado',
      content: (
        <div style={{ paddingTop: '20px' }}>
          <div>
            <p>
              <strong>Nome</strong>: {capitalizeString(data.nome)}
            </p>
          </div>
          <div>
            <p>
              <strong>E-mail</strong>: {data.email}
            </p>
          </div>
          <div>
            <p>
              <strong>Nacionalidade</strong>: {capitalizeString(data.nacionalidade)}
            </p>
          </div>
          <div>
            <p>
              <strong>Sexo</strong>: {capitalizeString(data.sexo)}
            </p>
          </div>
          <div>
            <p>
              <strong>Instrumento</strong>: {capitalizeString(data.instrumento)}
            </p>
          </div>
        </div>
      )
    })
  }

  const showDeleteConfirm = guest => {
    confirm({
      title: 'Você confirma a exclusão de:',
      icon: <ExclamationCircleOutlined />,
      content: <strong>{guest.nome}</strong>,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      async onOk() {
        try {
          setIsLoadingDelete(true)
          await api.delete(`/guest/${guest.idConvidado}`)
          setApiData(prevState => prevState.filter(g => g.idConvidado !== guest.idConvidado))
        } catch (err) {
          setError(err.response.data)
        } finally {
          setIsLoadingDelete(false)
        }
      }
    })
  }

  useEffect(() => {
    const dataFormat = filtredData.map(guest => ({
      key: guest.idConvidado,
      name: (
        <div className='avatar-info'>
          <p>{capitalizeString(guest.nome)}</p>
        </div>
      ),
      email: (
        <div className='author-info'>
          <p>{guest.email}</p>
        </div>
      ),
      nacionalidade: (
        <div className='author-info'>
          <p>{capitalizeString(guest.nacionalidade)}</p>
        </div>
      ),
      sexo: (
        <div className='author-info'>
          <p>{capitalizeString(guest.sexo)}</p>
        </div>
      ),
      instrumento: (
        <div className='author-info'>
          <p>{capitalizeString(guest.instrumento)}</p>
        </div>
      ),
      regente: (
        <div className='ant-employed'>
          <span>{capitalizeString(guest.isRegente)}</span>
        </div>
      ),
      acoes: (
        <>
          <div className='ant-employed'>
            <span className='action' onClick={() => showData(guest)}>
              Visualizar
            </span>
          </div>

          <div className='ant-employed'>
            <a href={`/editarConvidado/${guest.idConvidado}`}>Editar</a>
          </div>

          <div className='ant-employed'>
            <span className='action' onClick={() => showDeleteConfirm(guest)}>
              Excluir
            </span>
          </div>
        </>
      )
    }))

    setGuests(dataFormat)
  }, [filtredData])

  return (
    <Col span={24} className='table-responsive'>
      {error ||
        (hasError && (
          <p className='font-semibold text-muted text-center redtext'>{error || hasError}</p>
        ))}
      <Table
        columns={columns}
        dataSource={guests}
        pagination={{
          pageSize: 3,
          defaultCurrent: 1,
          position: ['bottomCenter'],
          showTotal: total => `Total de ${total} convidados`
        }}
        loading={isLoadingDelete || isLoading}
      />
    </Col>
  )
}

export default TableBody

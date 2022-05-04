import React, { useEffect, useState } from 'react'
import { Col, Table, Typography, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { Title } = Typography

const { confirm } = Modal

const columns = [
  {
    title: <Title level={5}>Nome Completo</Title>,
    dataIndex: 'name',
    key: 'name'
    // filters: [
    //   {
    //     text: 'CARREGAR VALORES AQUI',
    //     value: 'CARREGAR VALORES AQUI'
    //   }
    // ],
    // // specify the condition of filtering result
    // // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ['descend']
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

const TableBody = ({ apiData }) => {
  const [guests, setGuests] = useState([])

  const showData = guest => {
    const data = apiData.find(data => data.idConvidado === guest.idConvidado)

    Modal.info({
      title: 'Convidado',
      content: (
        <div style={{ paddingTop: '20px' }}>
          <div>
            <p>Nome: {data.nome}</p>
          </div>
          <div>
            <p>E-mail: {data.email}</p>
          </div>
          <div>
            <p>Nacionalidade: {data.nacionalidade}</p>
          </div>
          <div>
            <p>Sexo: {data.sexo}</p>
          </div>
          <div>
            <p>Instrumento: {data.instrumento}</p>
          </div>
        </div>
      )
    })
  }

  const showDeleteConfirm = () => {
    confirm({
      title: 'Você confirma a exclusão de:',
      icon: <ExclamationCircleOutlined />,
      content: 'NOME DO CONVIDADO AQUI',
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  useEffect(() => {
    const dataFormat = apiData.map(guest => ({
      key: guest.idConvidado,
      name: (
        <div className='avatar-info'>
          <p>{guest.nome}</p>
        </div>
      ),
      email: (
        <div className='author-info'>
          <p>{guest.email}</p>
        </div>
      ),
      nacionalidade: (
        <div className='author-info'>
          <p>{guest.nacionalidade}</p>
        </div>
      ),
      sexo: (
        <div className='author-info'>
          <p>{guest.sexo}</p>
        </div>
      ),
      instrumento: (
        <div className='author-info'>
          <p>{guest.instrumento}</p>
        </div>
      ),
      regente: (
        <div className='ant-employed'>
          <span>{guest.isRegente}</span>
        </div>
      ),
      acoes: (
        <>
          <div className='ant-employed'>
            <span onClick={() => showData(guest)}>Visualizar</span>
          </div>

          <div className='ant-employed'>
            <a href='/editarConvidado'>Editar</a>
          </div>

          <div className='ant-employed'>
            <span onClick={showDeleteConfirm}>Excluir </span>,
          </div>
        </>
      )
    }))

    setGuests(dataFormat)
  }, [apiData])

  return (
    <Col span={24} className='table-responsive'>
      <Table
        columns={columns}
        dataSource={guests}
        pagination={{
          pageSize: 3,
          defaultCurrent: 1,
          total: guests.length,
          showQuickJumper: true,
          showTotal: total => `Total de ${total} convidados`
        }}
      />
    </Col>
  )
}

export default TableBody

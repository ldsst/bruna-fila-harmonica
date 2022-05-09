import React, { useEffect, useState } from 'react'
import { Col, Table, Typography, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { capitalizeString } from '../../../../helpers'
import api from '../../../../services/api'

const { Title } = Typography

const { confirm } = Modal

const columns = [
  { title: <Title level={5}>Compositor</Title>, key: 'compositor', dataIndex: 'compositor' },
  { title: <Title level={5}>Nome da obra</Title>, key: 'nomeObra', dataIndex: 'nomeObra' },
  { title: <Title level={5}>Número do tombo</Title>, key: 'numTombo', dataIndex: 'numTombo' },
  { title: <Title level={5}>Editora</Title>, key: 'editora', dataIndex: 'editora' },
  { title: <Title level={5}>Ações</Title>, key: 'acoes', dataIndex: 'acoes' }
]

const TableBody = ({ filtredData, setApiData, isLoading, hasError }) => {
  const [musicScore, setMusicScore] = useState([])
  const [error, setError] = useState('')
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const showData = musicScore => {
    const data = filtredData.find(data => data.idPartitura === musicScore.idPartitura)

    Modal.info({
      title: 'Convidado',
      content: (
        <div style={{ paddingTop: '20px' }}>
          <div>
            <p>
              <strong>Compositor</strong>: {capitalizeString(data.compositor)}
            </p>
          </div>
          <div>
            <p>
              <strong>Nome da Obra</strong>: {capitalizeString(data.nomeObra)}
            </p>
          </div>
          <div>
            <p>
              <strong>Duração</strong>: {data.duracao}
            </p>
          </div>
          <div>
            <p>
              <strong>Número do tombo</strong>: {capitalizeString(data.numeroTombo)}
            </p>
          </div>
          <div>
            <p>
              <strong>Editora</strong>: {capitalizeString(data.editoraPartitura)}
            </p>
          </div>
          <div>
            <p>
              <strong>Instrumentação</strong>: {capitalizeString(data.instrumentacao)}
            </p>
          </div>
          <div>
            <p>
              <strong>Histórico da obra</strong>: {capitalizeString(data.historicoObra)}
            </p>
          </div>
          <div>
            <p>
              <strong>Observações</strong>: {capitalizeString(data.observacoes)}
            </p>
          </div>
        </div>
      )
    })
  }

  const showDeleteConfirm = musicScore => {
    confirm({
      title: 'Você confirma a exclusão de:',
      icon: <ExclamationCircleOutlined />,
      content: <strong>{musicScore.nomeObra}</strong>,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      async onOk() {
        try {
          setIsLoadingDelete(true)
          await api.delete(`/musicScore/${musicScore.idPartitura}`)
          setApiData(prevState => prevState.filter(ms => ms.idPartitura !== musicScore.idPartitura))
        } catch (err) {
          setError(err.response.data)
        } finally {
          setIsLoadingDelete(false)
        }
      }
    })
  }

  useEffect(() => {
    const dataFormat = filtredData.map(musicScore => ({
      key: '1',
      compositor: (
        <div className='avatar-info'>
          <p>{musicScore.compositor}</p>
        </div>
      ),
      nomeObra: (
        <div className='author-info'>
          <p>{musicScore.nomeObra}</p>
        </div>
      ),
      numTombo: (
        <div className='author-info'>
          <p>{musicScore.numeroTombo}</p>
        </div>
      ),
      editora: (
        <div className='author-info'>
          <p>{musicScore.editoraPartitura}</p>
        </div>
      ),
      acoes: (
        <>
          <div className='ant-employed'>
            <span className='action' onClick={() => showData(musicScore)}>
              Visualizar
            </span>
          </div>
          <div className='ant-employed'>
            <a href={`/editarPartitura/${musicScore.idPartitura}`}>Editar</a>
          </div>
          <div className='ant-employed'>
            <span className='action' onClick={() => showDeleteConfirm(musicScore)}>
              Excluir
            </span>
          </div>
        </>
      )
    }))

    setMusicScore(dataFormat)
  }, [filtredData])

  return (
    <Col span={24} className='table-responsive'>
      {error ||
        (hasError && (
          <p className='font-semibold text-muted text-center redtext'>{error || hasError}</p>
        ))}
      <Table
        columns={columns}
        dataSource={musicScore}
        pagination={{
          pageSize: 3,
          defaultCurrent: 1,
          position: ['bottomCenter'],
          showTotal: total => `Total de ${total} partituras`
        }}
        loading={isLoadingDelete || isLoading}
      />
    </Col>
  )
}

export default TableBody

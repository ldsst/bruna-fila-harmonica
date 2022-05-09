import React, { useState, useEffect } from 'react'
import { Form, Input, Button, TimePicker, Spin } from 'antd'
import api from '../../../../services/api'
import 'moment/locale/zh-cn'
import moment from 'moment'
import { useHistory, useParams } from 'react-router-dom'

const EditMusicScoreForm = () => {
  const { id } = useParams()
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currMusicScore, setCurrMusicScore] = useState({})
  const history = useHistory()

  const onFinish = async values => {
    try {
      const newValues = {
        ...values,
        duracao: moment(values.duracao).format('HH:mm:ss')
      }
      setIsLoading(true)
      await api.put(`/musicScore/${id}`, newValues)
      history.push('/partituras')
    } catch (err) {
      setError(err.response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const getMusicScore = async () => {
      const { data } = await api.get(`/musicScore/${id}`)
      setCurrMusicScore(data)
    }
    getMusicScore()
  }, [])

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      layout='vertical'
      onFinish={onFinish}
      initialValues={{ size: componentSize }}
      style={{ padding: '24px' }}
    >
      <Form.Item
        label='Compositor'
        name='compositor'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currMusicScore.compositor} />
      </Form.Item>
      <Form.Item
        label='Nome da obra'
        name='nomeObra'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currMusicScore.nomeObra} />
      </Form.Item>
      <Form.Item
        label='Número de tombo'
        name='numeroTombo'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currMusicScore.numeroTombo} />
      </Form.Item>
      <Form.Item
        label='Editora'
        name='editoraPartitura'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currMusicScore.editoraPartitura} />
      </Form.Item>
      <Form.Item label='Duração' name='duracao'>
        <TimePicker placeholder={currMusicScore.duracao} />
      </Form.Item>
      <Form.Item
        label='Instrumentação'
        name='instrumentacao'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currMusicScore.instrumentacao} />
      </Form.Item>
      <Form.Item
        label='Movimentos'
        name='movimentos'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currMusicScore.movimentos} />
      </Form.Item>
      <Form.Item
        label='Histórico da obra'
        name='historicoObra'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currMusicScore.historicoObra} />
      </Form.Item>
      <Form.Item
        label='Observações'
        name='observacoes'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currMusicScore.observacoes} />
      </Form.Item>
      {error && <p className='font-semibold text-muted text-center redtext'>{error}</p>}
      <Form.Item>
        {isLoading ? (
          <Spin size='large' style={{ height: '40px' }} />
        ) : (
          <Button style={{ height: '40px' }} type='primary' htmlType='submit'>
            Salvar
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default EditMusicScoreForm

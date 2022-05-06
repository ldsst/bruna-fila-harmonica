import React, { useState } from 'react'
import { Form, Input, Button, TimePicker, Spin } from 'antd'
import api from '../../../../services/api'
import 'moment/locale/zh-cn'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

const NewSheetMusicForm = () => {
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  const onFinish = async values => {
    try {
      const newValues = {
        ...values,
        duracao: moment(values.duracao).format('HH:mm:ss')
      }
      setIsLoading(true)
      await api.post('/musicScore', newValues)
      history.push('/partituras')
    } catch (err) {
      setError(err.response.data)
    } finally {
      setIsLoading(false)
    }
  }

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
        rules={[
          { min: 3, message: 'This field is too short' },
          { required: true, message: 'Insira o nome do compositor!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Nome da obra'
        name='nomeObra'
        rules={[
          { min: 3, message: 'This field is too short' },
          { required: true, message: 'Insira o nome da obra!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Número de tombo'
        name='numeroTombo'
        rules={[
          { min: 3, message: 'This field is too short' },
          { required: true, message: 'Insira o número do tombo!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Editora'
        name='editoraPartitura'
        rules={[
          { min: 3, message: 'This field is too short' },
          { required: true, message: 'Insira a editora da partitura!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Duração'
        name='duracao'
        rules={[{ required: true, message: 'Insira a duração da partitura!' }]}
      >
        <TimePicker placeholder='00:00:00' />
      </Form.Item>
      <Form.Item
        label='Instrumentação'
        name='instrumentacao'
        rules={[
          { min: 3, message: 'This field is too short' },
          { required: true, message: 'Insira a instrumentação!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Movimentos'
        name='movimentos'
        rules={[
          { min: 3, message: 'This field is too short' },
          { required: true, message: 'Insira os movimentos!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Histórico da obra'
        name='historicoObra'
        rules={[
          { min: 3, message: 'This field is too short' },
          { required: true, message: 'Insira o histórico da partitura!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Observações'
        name='observacoes'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input />
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

export default NewSheetMusicForm

import React, { useState } from 'react'
import { Form, Input, Button, DatePicker, Spin } from 'antd'
import api from '../../../../services/api'
import 'moment/locale/zh-cn'
// import moment from 'moment'
import { useHistory } from 'react-router-dom'

const NewPeopleForm = () => {
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  const onFinish = async values => {
    const newValues = {
      ...values,
    }
    delete newValues.date

    try {
      setIsLoading(true)
      await api.post('/people', newValues)
      history.push('/pessoas')
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
      <Form.Item label='Nome completo' rules={[{ required: true }]} name='nomeCompleto'>
        <Input />
      </Form.Item>
      <Form.Item
        label='E-mail'
        name='email'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira um email!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Instrumento/Posição'
        name='instrumentoPosição'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira um instrumento ou posição!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Nível de permissão'
        name='níveLPermissão'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o seu nivel de permissão' }
        ]}
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

export default NewPeopleForm

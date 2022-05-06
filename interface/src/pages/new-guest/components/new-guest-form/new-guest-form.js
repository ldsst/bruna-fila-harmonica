import React, { useState } from 'react'
import { Form, Input, Button, Select, DatePicker, Spin } from 'antd'
import { useHistory } from 'react-router-dom'
import api from '../../../../services/api'

import 'moment/locale/zh-cn'

const NewGuestForm = () => {
  const history = useHistory()
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isRegente, setIsRegente] = useState('nao')

  const { Option } = Select

  const dateFormat = 'DD-MM-YYYY'

  const onFinish = async values => {
    try {
      setIsLoading(true)

      await api.post('/guest', { ...values, isRegente })
      history.push('/convidados')
    } catch (err) {
      setError(err.response.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form
      labelCol={{
        span: 4
      }}
      wrapperCol={{
        span: 10
      }}
      layout='vertical'
      onFinish={onFinish}
      initialValues={{
        size: componentSize
      }}
      style={{
        padding: '24px'
      }}
    >
      <Form.Item
        label='Nome Completo'
        name='nome'
        rules={[
          {
            min: 3,
            message: 'Este campo está muito curto!'
          },
          { required: true, message: 'Insira o nome completo do convidado!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'Este não é um e-mail válido!'
          },
          { required: true, message: 'Insira o e-mail do convidado!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Data de nascimento'
        rules={[{ type: 'object', required: true, message: 'Please select time!' }]}
        name='dataNascimento'
      >
        <DatePicker format={dateFormat} />
      </Form.Item>

      <Form.Item
        label='Local de nascimento'
        name='localNascimento'
        rules={[
          {
            min: 3,
            message: 'Este campo está muito curto!'
          },
          { required: true, message: 'Insira a localidade de nascimento do convidado!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Nacionalidade'
        name='nacionalidade'
        rules={[
          {
            min: 3,
            message: 'Este campo está muito curto!'
          },
          { required: true, message: 'Insira a nacionalidade do convidado!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label='Sexo' name='sexo' rules={[{ required: true }]}>
        <Select style={{ width: 200 }} placeholder='Sexo'>
          <Option value='Feminino'>Feminino</Option>
          <Option value='Masculino'>Masculino</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label='Instrumento'
        name='instrumento'
        rules={[
          {
            min: 3,
            message: 'Este campo está muito curto!'
          },
          { required: true, message: 'Insira o instrumento do convidado!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label='É regente?' name='isRegente'>
        <Select style={{ width: 200 }} defaultValue={'nao'} onChange={e => setIsRegente(e)}>
          <Option value={'sim'}>Sim</Option>
          <Option value={'nao'}>Não</Option>
        </Select>
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

export default NewGuestForm

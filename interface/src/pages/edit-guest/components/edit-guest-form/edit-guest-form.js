import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select, DatePicker, Spin } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../../../services/api'

import 'moment/locale/zh-cn'

const EditGuestForm = () => {
  const history = useHistory()
  const { id } = useParams()
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isRegente, setIsRegente] = useState('nao')
  const [currUser, setCurrUser] = useState({})

  const { Option } = Select

  const dateFormat = 'DD-MM-YYYY'

  useEffect(() => {
    const getUser = async () => {
      const { data } = await api.get(`/guest/${id}`)
      setCurrUser(data)
    }
    getUser()
  }, [])

  const onFinish = async values => {
    try {
      setIsLoading(true)
      await api.put(`/guest/${id}`, { ...values, isRegente })
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
          }
        ]}
      >
        <Input placeholder={currUser.nome} />
      </Form.Item>

      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'Este não é um e-mail válido!'
          }
        ]}
      >
        <Input placeholder={currUser.email} />
      </Form.Item>

      <Form.Item label='Data de nascimento' rules={[{ type: 'object' }]} name='dataNascimento'>
        <DatePicker format={dateFormat} placeholder={currUser.dataNascimento} />
      </Form.Item>

      <Form.Item
        label='Local de nascimento'
        name='localNascimento'
        rules={[
          {
            min: 3,
            message: 'Este campo está muito curto!'
          }
        ]}
      >
        <Input placeholder={currUser.localNascimento} />
      </Form.Item>

      <Form.Item
        label='Nacionalidade'
        name='nacionalidade'
        rules={[
          {
            min: 3,
            message: 'Este campo está muito curto!'
          }
        ]}
      >
        <Input placeholder={currUser.nacionalidade} />
      </Form.Item>

      <Form.Item label='Sexo' name='sexo'>
        <Select style={{ width: 200 }} placeholder={currUser.sexo}>
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
          }
        ]}
      >
        <Input placeholder={currUser.instrumento} />
      </Form.Item>

      <Form.Item label='É regente?' name='isRegente'>
        <Select
          style={{ width: 200 }}
          placeholder={currUser.isRegente}
          onChange={e => setIsRegente(e)}
        >
          <Option value={'sim'}>Sim</Option>
          <Option value={'nao'}>Não</Option>
        </Select>
      </Form.Item>
      {error && <p className='font-semibold text-muted text-center redtext'>{error}</p>}
      <Form.Item
        style={{
          margin: '0 auto'
        }}
      >
        <Form.Item>
          {isLoading ? (
            <Spin size='large' style={{ height: '40px' }} />
          ) : (
            <Button style={{ height: '40px' }} type='primary' htmlType='submit'>
              Salvar
            </Button>
          )}
        </Form.Item>
      </Form.Item>
    </Form>
  )
}

export default EditGuestForm

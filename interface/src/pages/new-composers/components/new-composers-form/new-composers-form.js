import React, { useState } from 'react'
import { Form, Input, Button, DatePicker, Spin, Select } from 'antd'
import api from '../../../../services/api'
import 'moment/locale/zh-cn'
// import moment from 'moment'
import { useHistory } from 'react-router-dom'

const NewComposersForm = () => {
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  const { Option } = Select;

  const onFinish = async values => {
    const newValues = {
      ...values,
    }
    delete newValues.date

    try {
      setIsLoading(true)
      await api.post('/songwriter', newValues)
      history.push('/compositores')
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
      <Form.Item label='Nome Abreviado' rules={[{ required: true }]} name='nomeAbreviado'>
        <Input />
      </Form.Item>
      <Form.Item
        label='Nome Completo'
        name='nomeCompleto'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira um nome!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Instrumento/Posição'
        name='instrumentoPosição'
        rules={[
          { required: true }
        ]}
      >
        <Select defaultValue="Masculino">
              <Option value="Feminino">Feminino</Option>
              <Option value="Masculino">Masculino</Option>
          </Select>
      </Form.Item>
      <Form.Item
        label='Ano nascimento'
        name='anoNascimento'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira um ano de nascimento' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Local nascimento'
        name='localNascimento'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira local de nascimento' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Ano morte'
        name='anoMorte'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira ano da morte' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Local morte'
        name='localMorte'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Nacionalidade'
        name='naciolidade'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Observações'
        name='observacoes'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
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

export default NewComposersForm

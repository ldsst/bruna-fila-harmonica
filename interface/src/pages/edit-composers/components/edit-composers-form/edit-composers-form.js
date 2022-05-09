import React, { useState, useEffect } from 'react'
import { Form, Input, Button, DatePicker, Spin, Select } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../../../services/api'

import 'moment/locale/zh-cn'

const EditComposersForm = () => {
  const history = useHistory()
  const { id } = useParams()
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currComposers, setCurrComposers] = useState({})
  
  const { Option } = Select
  
   useEffect(() => {
    const getComposers = async () => {
      const { data } = await api.get(`/songwriter/${id}`)
      setCurrComposers(data)
    }
    getComposers()
  }, [])

  const onFinish = async values => {
    try {
      setIsLoading(true)
      await api.put(`/songwriter/${id}`, values)
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
      <Form.Item label='Nome Abreviado' name='nomeAbreviado'>
        <Input placeholder={currComposers.nomeAbreviado} />
      </Form.Item>
      <Form.Item
        label='Nome Completo'
        name='nomeCompleto'
      >
        <Input placeholder={currComposers.nomeCompleto} />
      </Form.Item>
      <Form.Item
        label='Efemerides'
        name='efemerides'
      >
        <Input placeholder={currComposers.efemerides} />
      </Form.Item>
      <Form.Item
        label='sexo'
        name='sexo'
      >
        <Select defaultValue="Masculino">
              <Option value="Feminino">Feminino</Option>
              <Option value="Masculino">Masculino</Option>
          </Select>
      </Form.Item>
      <Form.Item
        label='Ano nascimento'
        name='anoNascimento'
      >
        <Input placeholder={currComposers.anoNascimento} />
      </Form.Item>
      <Form.Item
        label='Local nascimento'
        name='localNascimento'
      >
        <Input placeholder={currComposers.localNascimento} />
      </Form.Item>
      <Form.Item
        label='Ano morte'
        name='anoMorte'
      >
        <Input placeholder={currComposers.anoMorte} />
      </Form.Item>
      <Form.Item
        label='Local morte'
        name='localMorte'
      >
        <Input placeholder={currComposers.localMorte} />
      </Form.Item>
      <Form.Item
        label='Nacionalidade'
        name='naciolidade' 
      >
        <Input placeholder={currComposers.nacinalidade} />
      </Form.Item>
      <Form.Item
        label='Observações'
        name='observacoes'
      >
        <Input placeholder={currComposers.observacoes}/>
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

export default EditComposersForm

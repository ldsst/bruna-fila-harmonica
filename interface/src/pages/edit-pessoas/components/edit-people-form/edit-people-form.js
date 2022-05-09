import React, { useState, useEffect } from 'react'
import { Form, Input, Button, DatePicker, Spin } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../../../services/api'

import 'moment/locale/zh-cn'

const EditPeopleForm = () => {
  const history = useHistory()
  const { id } = useParams()
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currPeople, setCurrPeople] = useState({})

  useEffect(() => {
    const getPeople = async () => {
      const { data } = await api.get(`/people/${id}`)
      setCurrPeople(data)
    }
    getPeople()
  }, [])

  const onFinish = async values => {
    try {
      setIsLoading(true)
      await api.put(`/people/${id}`, values)
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
      <Form.Item label='Nome completo' name='nomeCompleto'>
        <Input placeholder={currPeople.nomeCompleto} />
      </Form.Item>
      <Form.Item
        label='E-mail'
        name='email'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currPeople.email} />
      </Form.Item>
      <Form.Item
        label='Instrumento/Posição'
        name='instrumentoPosicao'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currPeople.instrumentoPosicao} />
      </Form.Item>
      <Form.Item
        label='Nível de permissão'
        name='níveLPermissao'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currPeople.niveLPermissao} />
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

export default EditPeopleForm

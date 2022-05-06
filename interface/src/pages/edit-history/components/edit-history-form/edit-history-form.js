import React, { useState, useEffect } from 'react'
import { Form, Input, Button, DatePicker, Spin } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../../../services/api'

import 'moment/locale/zh-cn'

const EditHistoryForm = () => {
  const history = useHistory()
  const { id } = useParams()
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currHistory, setCurrHistory] = useState({})

  const dateFormat = 'DD-MM-YYYY'

  useEffect(() => {
    const getHistory = async () => {
      const { data } = await api.get(`/history/${id}`)
      setCurrHistory(data)
    }
    getHistory()
  }, [])

  const onFinish = async values => {
    try {
      console.log(values)
      setIsLoading(true)
      await api.put(`/history/${id}`, values)
      history.push('/historico')
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
      <Form.Item label='Data do Histórico' name='date'>
        <DatePicker.RangePicker
          format={dateFormat}
          placeholder={[currHistory.dataInicio, currHistory.dataFim]}
        />
      </Form.Item>
      <Form.Item
        label='Compositor'
        name='compositor'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.compositor} />
      </Form.Item>
      <Form.Item
        label='Primeiro nome'
        name='name'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.name} />
      </Form.Item>
      <Form.Item
        label='Repertório'
        name='obra'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.obra} />
      </Form.Item>
      <Form.Item
        label='Série'
        name='serie'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.serie} />
      </Form.Item>
      <Form.Item
        label='Solista'
        name='solista'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.solista} />
      </Form.Item>
      <Form.Item
        label='Regente'
        name='regente'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.regente} />
      </Form.Item>
      <Form.Item
        label='Arranjador/Orquestrador'
        name='arranjador'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.arranjador} />
      </Form.Item>
      <Form.Item
        label='Local'
        name='local'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.local} />
      </Form.Item>
      <Form.Item
        label='Cidade'
        name='cidade'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.cidade} />
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

export default EditHistoryForm

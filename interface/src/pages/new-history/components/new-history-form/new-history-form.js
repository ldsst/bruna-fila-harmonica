import React, { useState } from 'react'
import { Form, Input, Button, DatePicker, Spin } from 'antd'
import api from '../../../../services/api'
import 'moment/locale/zh-cn'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

const NewHistoryForm = () => {
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  const dateFormat = 'DD/MM/YYYY'

  const onFinish = async values => {
    const newValues = {
      ...values,
      dataInicio: moment(values.date[0]).format('YYYY-MM-DD'),
      dataFim: moment(values.date[1]).format('YYYY-MM-DD')
    }
    delete newValues.date

    try {
      setIsLoading(true)
      await api.post('/history', newValues)
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
      <Form.Item label='Data do Histórico' rules={[{ required: true }]} name='date'>
        <DatePicker.RangePicker
          format={dateFormat}
          placeholder={['Data de ínicio', 'Data de fim']}
        />
      </Form.Item>
      <Form.Item
        label='Compositor'
        name='compositor'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o nome do compositor!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Primeiro nome'
        name='name'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o primeiro nome!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Repertório'
        name='obra'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o nome do repertório!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Série'
        name='serie'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o nome da série!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Solista'
        name='solista'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o nome do solista!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Regente'
        name='regente'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o nome do regente!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Arranjador/Orquestrador'
        name='arranjador'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o nome do arranjador/orquestrador!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Local'
        name='local'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o nome do local!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Cidade'
        name='cidade'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira o nome da cidade!' }
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

export default NewHistoryForm

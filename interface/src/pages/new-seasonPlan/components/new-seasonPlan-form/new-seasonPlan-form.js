import React, { useState } from 'react'
import { Form, Input, Button, DatePicker, Spin } from 'antd'
import api from '../../../../services/api'
import 'moment/locale/zh-cn'
// import moment from 'moment'
import { useHistory } from 'react-router-dom'

const NewSeasonPlanForm = () => {
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
      await api.post('/seasonPlan', newValues)
      history.push('/planoTemporada')
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
      <Form.Item label='Nome temporada' rules={[{ required: true }]} name='nomeTemporada'>
        <Input />
      </Form.Item>
      <Form.Item
        label='Ano Temporada'
        name='anoTemporada'
        rules={[
          {
            min: 3,
            message: 'This field is too short'
          },
          { required: true, message: 'Insira um ano!' }
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

export default NewSeasonPlanForm

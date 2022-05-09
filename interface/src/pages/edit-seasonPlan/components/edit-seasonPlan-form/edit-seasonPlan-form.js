import React, { useState, useEffect } from 'react'
import { Form, Input, Button, DatePicker, Spin } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../../../services/api'

import 'moment/locale/zh-cn'

const EditSeasonPlanForm = () => {
  const history = useHistory()
  const { id } = useParams()
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currSeason, setCurrSeason] = useState({})

  useEffect(() => {
    const getSeason = async () => {
      const { data } = await api.get(`/seasonPlan/${id}`)
      setCurrSeason(data)
    }
    getSeason()
  }, [])

  const onFinish = async values => {
    try {
      setIsLoading(true)
      await api.put(`/seasonPlan/${id}`, values)
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
      <Form.Item label='Nome Temporada' name='nomeTemporada'>
        <Input placeholder={currSeason.nomeTemporada} />
      </Form.Item>
      <Form.Item
        label='Ano Temporada'
        name='anoTemporada'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currSeason.anoTemporada} />
      </Form.Item>
      <Form.Item
        label='Observações'
        name='observacoes'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currSeason.observacoes} />
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

export default EditSeasonPlanForm

import React, { useState, useEffect } from 'react'
import { Form, Input, Button, DatePicker, Spin } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../../../services/api'

import 'moment/locale/zh-cn'

const EditObrasForm = () => {
  const history = useHistory()
  const { id } = useParams()
  const [componentSize] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currHistory, setCurrObras] = useState({})

  useEffect(() => {
    const getObras = async () => {
      const { data } = await api.get(`/musicalWork/${id}`)
      setCurrObras(data)
    }
    getObras();
  }, [])

  const onFinish = async values => {
    try {
      console.log(values)
      setIsLoading(true)
      await api.put(`/musicalWork/${id}`, values)
      history.push('/obras')
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
      <Form.Item label='Nome da obra' name='nomeObra'>
        <Input placeholder={currHistory.nomeObra} />
      </Form.Item>
      <Form.Item
        label='Arranjador'
        name='arranjador'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.arranjador} />
      </Form.Item>
      <Form.Item
        label='Ano / período de composição'
        name='anoPeriodoComposicao'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.anoPeriodoComposicao} />
      </Form.Item>
      <Form.Item
        label='Duração'
        name='duracao'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.duracao} />
      </Form.Item>
      <Form.Item
        label='Instrumentação Codifcada'
        name='intrumentacaoCodificada'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.intrumentacaoCodificada} />
      </Form.Item>
      <Form.Item
        label='Instrumentação por extenso'
        name='instrumentacaoExtenso'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.instrumentacaoExtenso} />
      </Form.Item>
      <Form.Item
        label='Quantidade de Movimentos'
        name='qtdMovimentos'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.qtdMovimento} />
      </Form.Item>
      <Form.Item
        label='Detalhes da obra'
        name='detalhesObra'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.detalhesObra} />
      </Form.Item>
      <Form.Item
        label='Efemérides'
        name='efemerides'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.efemerides} />
      </Form.Item>
      <Form.Item
        label='Observações'
        name='observacoes'
        rules={[{ min: 3, message: 'This field is too short' }]}
      >
        <Input placeholder={currHistory.observacoes} />
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

export default EditObrasForm

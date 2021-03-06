import React, { useState, useEffect } from 'react'

import { Form, Input, Button, Select, Card, Col, InputNumber } from 'antd'
import api from '../services/api'

import { useHistory, useParams } from 'react-router-dom'

const NovoCompositor = () => {
  const history = useHistory()
  const { id } = useParams()
  const [componentSize] = useState('default')
  const { Option } = Select
  let sexo = 'Masculino'
  function handleChange(value) {
    sexo = value
  }
  useEffect(() => {
    api.get('/songwriter/' + id).then(({ data }) => {
      console.log(data)
    })
  }, [])
  const onFinish = (values) => {
    values.sexo = sexo
    console.log(values)
    api.post('/songwriter', values).then(({ data }) => {
      history.push('/compositores')
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  // Compositor deve ser buscado na tabela de compositores

  return (
    <Col>
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="Novo Compositor"
      >
        <p></p>
        <p></p>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="nomeAbreviado"
            label="Nome Abreviado"
            rules={[
              {
                required: true,
                message: 'Esse campo deve ser preenchido',
              },
            ]}
          >
            <Input defaultValue={'rwarw'} />
          </Form.Item>

          <Form.Item
            name="nomeCompleto"
            label="Nome Completo"
            rules={[
              {
                required: true,
                message: 'Esse campo deve ser preenchido',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Sexo">
            <Select
              defaultValue="Masculino"
              style={{ width: 200 }}
              onChange={handleChange}
            >
              <Option value="Feminino">Feminino</Option>
              <Option value="Masculino">Masculino</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="anoNascimento"
            label="Ano de nascimento"
            rules={[
              {
                required: true,
                message: 'Esse campo deve ser preenchido',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="localNascimento"
            label="Local de nascimento"
            rules={[
              {
                required: true,
                message: 'Esse campo deve ser preenchido',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="anoMorte" label="Ano de morte">
            <InputNumber />
          </Form.Item>

          <Form.Item name="localMorte" label="Local de morte">
            <Input />
          </Form.Item>

          <Form.Item
            name="nacionalidade"
            label="Nacionalidade"
            rules={[
              {
                required: true,
                message: 'Esse campo deve ser preenchido',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="observacoes" label="Observa????es">
            <Input />
          </Form.Item>

          <p></p>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Col>
  )
}

export default NovoCompositor

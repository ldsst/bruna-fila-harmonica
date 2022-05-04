import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Col, Typography, Form, Input, Switch, Spin } from 'antd'
import api from '../../../../services/api'

const { Title } = Typography

const SignInForm = () => {
  const history = useHistory()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const onFinish = async values => {
    try {
      setIsLoading(true)
      const { data } = await api.post('/sign-in', values)

      localStorage.setItem('accessToken', JSON.stringify({ accessToken: data.accessToken }))
      localStorage.setItem('account', JSON.stringify({ name: data.nomeCompleto }))

      history.push('/')
    } catch (err) {
      setError(err.response.data)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = checked => setRememberMe(checked)

  return (
    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }} md={{ span: 12 }}>
      <Title className='mb-15'>Entrar</Title>
      <Title className='font-regular text-muted' level={5}>
        Digite seu email e sua senha para entrar
      </Title>
      <Form onFinish={onFinish} layout='vertical' className='row-col'>
        <Form.Item
          className='username'
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='E-mail' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input.Password placeholder='Senha' />
        </Form.Item>

        <Form.Item name='remember' className='aligin-center' valuePropName='checked'>
          <Switch checked={rememberMe} onChange={handleChange} />
          Lembre de mim
        </Form.Item>
        <Form.Item>
          {isLoading ? (
            <Spin size='large' style={{ height: '40px' }} />
          ) : (
            <Button style={{ width: '100%', height: '40px' }} type='primary' htmlType='submit'>
              Entrar
            </Button>
          )}
        </Form.Item>
      </Form>
      {error && <p className='font-semibold text-muted text-center redtext'>{error}</p>}
      <p className='font-semibold text-muted'>
        Não tem uma conta?{' '}
        <Link to='/sign-up' className='text-dark font-bold'>
          Cadastre-se
        </Link>
      </p>
    </Col>
  )
}

export default SignInForm

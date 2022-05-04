import React, { useState } from 'react'
import { Button, Card, Form, Input, Checkbox, Spin } from 'antd'

import { Link, useHistory } from 'react-router-dom'
import api from '../../../../services/api'

const SignUpForm = () => {
  const history = useHistory()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onFinish = async values => {
    try {
      setIsLoading(true)
      const { data } = await api.post('/sign-up', values)

      localStorage.setItem('account', JSON.stringify({ name: data.nomeCompleto }))
      history.push('/')
    } catch (err) {
      setError(err.response.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card
      className='card-signup header-solid h-full ant-card pt-0'
      title={<h5>Register With</h5>}
      bordered='false'
    >
      <Form
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className='row-col'
        scrollToFirstError
      >
        <Form.Item
          hasFeedback
          name='name'
          rules={[
            {
              min: 3,
              message: 'This field is too short'
            },
            { required: true, message: 'Please input your first name!' }
          ]}
        >
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item
          name='lastName'
          hasFeedback
          rules={[
            {
              min: 3,
              message: 'This field is too short'
            },
            { required: true, message: 'Please input your last name!' }
          ]}
        >
          <Input placeholder='Last Name' />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            { required: true, message: 'Please input your email!' }
          ]}
          hasFeedback
        >
          <Input placeholder='email' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.'"\\/?,$!%*?&])[A-Za-z\d@.'"\\/?,$!%*?&]{8,}$/,
              message:
                'Password must be at least 8 characters long, and contain at least one lowercase letter, one uppercase letter, one number and one special character.'
            },
            { required: true, message: 'Please input your password!' }
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Password' />
        </Form.Item>
        <Form.Item
          name='passwordConfirmation'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'))
              }
            })
          ]}
        >
          <Input.Password placeholder='Password Confirmation' />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>
            I agree the{' '}
            <a href='#pablo' className='font-bold text-dark'>
              Terms and Conditions
            </a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          {isLoading ? (
            <Spin size='large' style={{ height: '40px' }} />
          ) : (
            <Button style={{ width: '100%', height: '40px' }} type='primary' htmlType='submit'>
              SIGN UP
            </Button>
          )}
        </Form.Item>
      </Form>
      {error && <p className='font-semibold text-muted text-center redtext'>{error}</p>}
      <p className='font-semibold text-muted text-center'>
        Already have an account?{' '}
        <Link to='/sign-in' className='font-bold text-dark'>
          Sign In
        </Link>
      </p>
    </Card>
  )
}

export default SignUpForm

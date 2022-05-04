import React from 'react'
import { Layout, Typography } from 'antd'
import { Form, Header, Footer } from './components'

const { Title } = Typography
const { Content } = Layout

const SignUpPage = () => (
  <div className='layout-default ant-layout layout-sign-up'>
    <Header />
    <Content className='p-0'>
      <div className='sign-up-header'>
        <div className='content'>
          <Title>Sign Up</Title>
        </div>
      </div>
      <Form />
    </Content>
    <Footer />
  </div>
)

export default SignUpPage

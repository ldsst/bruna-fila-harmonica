import React from 'react'
import { Layout, Row, Col } from 'antd'
import { Header, Footer, Form } from './components'

import signinbg from '../../assets/images/img-signin.jpg'

const { Content } = Layout

const SignIn = () => (
  <Layout className='layout-default layout-signin'>
    <Header />
    <Content className='signin'>
      <Row gutter={[24, 0]} justify='space-around'>
        <Form />
        <Col
          className='sign-img'
          style={{ padding: 12 }}
          xs={{ span: 24 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
        >
          <img src={signinbg} alt='' />
        </Col>
      </Row>
    </Content>
    <Footer />
  </Layout>
)

export default SignIn

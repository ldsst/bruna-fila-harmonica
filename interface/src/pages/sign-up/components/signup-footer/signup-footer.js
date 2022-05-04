import React from 'react'
import { Layout, Menu } from 'antd'

const { Footer } = Layout

const SignUpFooter = () => (
  <Footer>
    <Menu mode='horizontal' className='menu-nav-social'></Menu>
    <p className='copyright'></p>
  </Footer>
)

export default SignUpFooter

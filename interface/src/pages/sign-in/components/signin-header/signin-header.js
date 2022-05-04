import React from 'react'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const SignInHeader = () => (
  <Header>
    <div className='header-col header-brand'>
      <h5>Sistema de Gestão de Temporadas da Orquestra Filarmônica de Minas Gerais</h5>
    </div>
    <div className='header-col header-nav'>
      <Menu mode='horizontal' defaultSelectedKeys={['1']}></Menu>
    </div>
  </Header>
)

export default SignInHeader

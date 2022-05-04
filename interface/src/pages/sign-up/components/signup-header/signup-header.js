import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

const SignUpHeader = () => (
  <Header>
    <div className='header-col header-brand'>
      <h5>Sistema de Gestão de Temporadas da Orquestra Filarmônica de Minas Gerais</h5>
    </div>
    <div className='header-col header-nav'></div>
  </Header>
)

export default SignUpHeader

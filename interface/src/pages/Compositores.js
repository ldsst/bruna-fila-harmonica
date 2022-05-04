/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Table,
  Typography,
  Button,
  Modal,
  Input,
  Space,
} from 'antd'

import { ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons'

import api from '../services/api'
import { useEffect, useState } from 'react'

const { confirm } = Modal

const onSearch = (value) => console.log(value)

const { Title } = Typography

// table code start
const columns = [
  {
    title: <Title level={5}> Nome Abreviado </Title>,
    dataIndex: 'nomeAbreviado',
    key: 'nomeAbreviado'
  },

  {
    title: <Title level={5}> Ano nascimento </Title>,
    dataIndex: 'anoNascimento',
    key: 'anoNascimento',
  },
  {
    title: <Title level={5}> Local nascimento </Title>,
    dataIndex: 'localNascimento',
    key: 'localNascimento',
  },
  {
    title: <Title level={5}> Ano morte </Title>,
    dataIndex: 'anoMorte',
    key: 'anoMorte',
  },
  {
    title: <Title level={5}> Local morte</Title>,
    dataIndex: 'localMorte',
    key: 'localMorte',
  },
]

const data = [
  {
    key: '1',
    name: (
      <>
        <div className="avatar-info">
          <p> Michael John </p>{' '}
        </div>{' '}
      </>
    ),
    nomeAbreviado: (
      <>
        <div className="author-info">
          <p> M.John </p>{' '}
        </div>{' '}
      </>
    ),
    sexo: (
      <>
        <div className="author-info">
          <p> Masculino </p>{' '}
        </div>{' '}
      </>
    ),
    anoNascimento: (
      <>
        <div className="author-info">
          <p> 1888 </p>{' '}
        </div>{' '}
      </>
    ),
    nacionalidade: (
      <>
        <div className="author-info">
          <p> Austriaco </p>{' '}
        </div>{' '}
      </>
    ),
    acoes: (
      <>
        <div className="ant-employed">
          <span onClick={showData}> Visualizar </span>{' '}
        </div>{' '}
        <div className="ant-employed">
          <a href="/editarCompositor"> Editar </a>{' '}
        </div>{' '}
        <div className="ant-employed">
          <span onClick={showDeleteConfirm}> Excluir </span>,{' '}
        </div>{' '}
      </>
    ),
  },
]

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}

function showDeleteConfirm() {
  confirm({
    title: 'Você confirma a exclusão de:',
    icon: <ExclamationCircleOutlined />,
    content: 'NOME Do Compositor AQUI',
    okText: 'Sim',
    okType: 'danger',
    cancelText: 'Não',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}

function showData(el) {
  Modal.info({
    title: 'Compositor',
    content: (
      <div>
        <p> Nome: {el.nomeCompleto} </p>{' '}
        <p> Nome abreviado: {el.nomeAbreviado} </p>{' '}
        <p> Ano nascimento: {el.anoNascimento} </p>{' '}
        <p> Local nascimento: {el.localNascimento} </p>{' '}
        <p> Nacionalidade: {el.nacionalidade} </p>{' '}
        <p> Ano da morte: {el.anoMorte} </p>{' '}
        <p> Local da morte: {el.localMorte} </p>{' '}
        <p> Observações: {el.observacoes} </p>
      </div>
    ),
    onOk() {},
  })
}

function Songwriter() {
  const [compositores, setCompositores] = useState([]);
  const [dataComposers, setDataComposers] = useState([]);

  const icon = (
    <SearchOutlined
      style={{ 
        fontSize: 20,
      }}
    />
  );
  
  useEffect(() => {
    api.get('/songwriter').then(({ data }) => {
      const orderData = data.sort((a, b) => a.nomeAbreviado > b.nomeAbreviado ? 1 : -1)
      
      setDataComposers(orderData);
      
      const rows = orderData.map((el) => {
        return {
          key: el.idCompositor,
          nomeAbreviado: (
            <>
              <div className="avatar-info">
                <p> {el.nomeAbreviado} </p>{' '}
              </div>{' '}
            </>
          ),
          anoNascimento: (
            <>
              <div className="author-info">
                <p> {el.anoNascimento} </p>{' '}
              </div>{' '}
            </>
          ),
          localNascimento: (
            <>
              <div className="author-info">
                <p> {el.localNascimento} </p>{' '}
              </div>{' '}
            </>
          ),
          anoMorte: (
            <>
              <div className="author-info">
                <p> {el.anoMorte} </p>{' '}
              </div>{' '}
            </>
          ),
          localMorte: (
            <>
              <div className="author-info">
                <p> {el.localMorte} </p>{' '}
              </div>{' '}
            </>
          )
        }
      })
      setCompositores(rows);
    })
  }, [])

  function searchName({target}) {
    const { value } = target;
    const lowerSearch = value.toLowerCase();
  
    const filterName = dataComposers.filter(i => {
      return i.nomeAbreviado.toLowerCase().includes(lowerSearch);
    });

    const foundComposers = filterName.map((el) => {
      return {
        key: el.idCompositor,
        nomeAbreviado: (
          <>
            <div className="avatar-info">
              <p> {el.nomeAbreviado} </p>{' '}
            </div>{' '}
          </>
        ),
        anoNascimento: (
          <>
            <div className="author-info">
              <p> {el.anoNascimento} </p>{' '}
            </div>{' '}
          </>
        ),
        localNascimento: (
          <>
            <div className="author-info">
              <p> {el.localNascimento} </p>{' '}
            </div>{' '}
          </>
        ),
        anoMorte: (
          <>
            <div className="author-info">
              <p> {el.anoMorte} </p>{' '}
            </div>{' '}
          </>
        ),
        localMorte: (
          <>
            <div className="author-info">
              <p> {el.localMorte} </p>{' '}
            </div>{' '}
          </>
        )
      }
    })
    setCompositores(foundComposers);
  }

  return (
    <>
      <div className="tabled">
        <Row>
           <Input
            placeholder="Pesquise compositores por nomes abreviados"
            prefix={ icon }
            onChange={searchName}
          />
          <Col  span={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Compositores"
            >
              <Row>
                <Col span={4}> </Col> <Col span={17}> </Col>{' '}
                <Col span={3}>
                  
                  <div>
                    <Button
                      className="btn float-end"
                      type="primary"
                      primary
                      href="/novoCompositor"
                    >
                      Adicionar compositor{' '}
                    </Button>{' '}
                  </div>{' '}
                </Col>{' '}
            
                <Col span={24} className="table-responsive">
                  <Table
                    className="ant-border-space"
                    columns={columns}
                    dataSource={compositores}
                    onChange={onChange}
                  />
                  ;{' '}
                </Col>{' '}
              </Row>{' '}
            </Card>{' '}
          </Col>{' '}
        </Row>{' '}
      </div>{' '}
    </>
  )
}
export default Songwriter

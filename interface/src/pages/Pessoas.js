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
import React, { useState } from 'react';
import {
    Row,
    Col,
    Card,
    Table,
    Button,
    Modal,
    Typography
} from "antd";


import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;

const { confirm } = Modal;

// table code start

const columns = [
    {
      title: <Title level={5}>Nome</Title>,
      dataIndex: 'name',
      filters: [
        {
          text: 'CARREGAR VALORES AQUI',
          value: 'CARREGAR VALORES AQUI',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: <Title level={5}>Email</Title>,
      dataIndex: 'email',
    },
    {
      title: <Title level={5}>Instrumento/Posição</Title>,
      dataIndex: 'cargo',
    },
    {
        title: <Title level={5}>Ações</Title>,
        dataIndex: 'acoes',
      },
  ];

  const data = [
    {
        key: '1',
        name: 'John Brown',
        email: 'michael@filarmonica.com',
        cargo: 'Violino',
        nivelPermissao: 'Leitura',
        acoes: (
            <>
                <div onClick={showData} className="ant-employed">
                    <spam>Visualizar</spam>
                </div>

                <div className="ant-employed">
                    <a href="/editarPessoa">Editar</a>
                </div>

                <div className="ant-employed">
                    <spam onClick={showDeleteConfirm}>Excluir</spam>
                </div>
            </>
        ),
    }
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  function showDeleteConfirm() {
    confirm({
        title: 'Você confirma a exclusão de:',
        icon: <ExclamationCircleOutlined />,
        content: 'NOME DA PESSOA AQUI',
        okText: 'Sim',
        okType: 'danger',
        cancelText: 'Não',
        onOk() {
            //deleteUser(1)
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

async function showData() {
    //const id = 3
    //const userData = await axios.get(`http://localhost:3006/user/${id}`)

    Modal.info({
        title: 'Dados da pessoa',
        content: (
            <div>
                <p>Nome Completo:</p>
                <p>Permissão: </p>
                <p>Email: </p>
                <p>Tipo de Usuario:</p>
            </div>),
        onOk() { },
    });
}
  

const User = () => {
    const deleteUser = async () => {
        const userData = await axios.delete(`http://localhost:3006/user/1`)
        console.log(userData.data)
    }

    function showDeleteConfirm() {
        confirm({
            title: 'Você confirma a exclusão de:',
            icon: <ExclamationCircleOutlined />,
            content: 'NOME DA PESSOA AQUI',
            okText: 'Sim',
            okType: 'danger',
            cancelText: 'Não',
            onOk() {
                deleteUser(1)
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    async function showData() {
        const id = 3
        const userData = await axios.get(`http://localhost:3006/user/${id}`)

        Modal.info({
            title: 'Pessoa',
            content: (
                <div>
                    <p>Nome Completo: {userData.data.nomeCompleto}</p>
                    <p>Permissão: {userData.data.nivelPermissao}</p>
                    <p>Email: {userData.data.email}</p>
                    <p>Tipo de Usuario:{userData.data.TipoUsuario_idTipoUsuario}</p>
                </div>),
            onOk() { },
        });
    }

const GetAllUser = async () => {
        useState({ loading: false });
        const userData = await axios.get(`http://localhost:3006/user/`)

        console.log(userData.data)
    }

    return (
        <>
            <div className="tabled">
                <Row>
                    <Col span={24}>
                        <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="Pessoas"
                        >
                            <Row>
                                <Col span={4}>
                                
                                </Col>

                                <Col span={17}></Col>

                                <Col span={3}>
                                    <label>&nbsp;</label>
                                    {/* se o filtro de campo funcionar, REMOVER ESSA LINHA */}
                                    <div>
                                        <Button className="btn float-end" type="primary" primary href="/novaPessoa">
                                            Adicionar pessoa
                                        </Button>
                                    </div>
                                </Col>

                                <Col span={24} className="table-responsive">
                                <Table className="ant-border-space" columns={columns} dataSource={data} onChange={onChange} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default User;

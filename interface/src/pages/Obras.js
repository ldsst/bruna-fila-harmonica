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
  Input
} from "antd";

import { ExclamationCircleOutlinedm, SearchOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";

import api from "../services/api";

const { confirm } = Modal;
const { Title } = Typography;

// table code start
const columns = [
  {
    title: <Title level={5}>Nome da Obra</Title>,
    dataIndex: "nomeObra",
    key: "nomeObra",
  },
  {
    title: <Title level={5}>Nome do Compositor</Title>,
    dataIndex: "compositor",
    key: "compositor",
  },
  {
    title: <Title level={5}>Ações</Title>,
    key: "acoes",
    dataIndex: "acoes",
  },
];

const icon = (
  <SearchOutlined
    style={{ 
      fontSize: 20,
    }}
  />
);

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function showDeleteConfirm() {
  confirm({
    title: 'Você confirma a exclusão de:',
    // icon: <ExclamationCircleOutlined />,
    content: 'NOME DA OBRA AQUI',
    okText: 'Sim',
    okType: 'danger',
    cancelText: 'Não',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showData() {
  Modal.info({
    title: 'Dados de obra',
    content: (
      <div>
        <p>MOSTRAR DADOS AQUI</p>
      </div>
    ),
    onOk() {},
  });
}

function Obra() {
  const [construction, setConstruction] = useState([]);
  const [dataConstruction, setDataConstruction] = useState([]);
  
  useEffect(() => {
    api.get('/musicalWork')
    .then(({data}) => {
      const orderData = data.sort((a, b) => a.nomeObra > b.nomeObra ? 1 : -1)

      setDataConstruction(orderData);

      const dataSource = orderData.map((i) => {
        return {
          key: i.idObra,
          nomeObra: (
            <>
              <div className="avatar-info">
                <p>{i.nomeObra}</p>
              </div>
            </>
          ),
          acoes: (
            <>
              <div className="ant-employed">
                <span onClick={showData}>Visualizar</span>
              </div> 
              <div className="ant-employed">
                <a href="/editarObra">Editar</a>
              </div>               
              <div className="ant-employed">
                <span onClick={showDeleteConfirm}>Excluir</span>,
              </div>
            </>
          ), 
        }
      });

      setConstruction(dataSource);
    })
  },[]);

  function searchConstruction({target}) {
    const { value } = target;
    const lowerSearch = value.toLowerCase();
  
    const filterName = dataConstruction.filter(i => {
      return i.nomeObra.toLowerCase().includes(lowerSearch);
    });

    const foundConstruction = filterName.map((i) => {
      return {
        key: i.idObra,
        nomeObra: (
          <>
            <div className="avatar-info">
              <p>{i.nomeObra}</p>
            </div>
          </>
        ),
        acoes: (
          <>
            <div className="ant-employed">
              <span onClick={showData}>Visualizar</span>
            </div> 
            <div className="ant-employed">
              <a href="/editarObra">Editar</a>
            </div>               
            <div className="ant-employed">
              <span onClick={showDeleteConfirm}>Excluir</span>,
            </div>
          </>
        ),
      }
    })
    setConstruction(foundConstruction);
  }

  return (
      <>

          <div className="tabled">
              <Row>
              <Input
                placeholder="Pesquise compositores por nomes abreviados"
                prefix={ icon }
                onChange={searchConstruction}
              />
                  <Col span={24}>
                      <Card
                          bordered={false}
                          className="criclebox tablespace mb-24"
                          title="Obras"
                      >
                          <Row>
                              <Col span={4}>
                                  
                              </Col>

                              <Col span={17}></Col>

                              <Col span={3}>
                                  <label>&nbsp;</label>
                                  <div>
                                  <Button className="btn float-end" type="primary" primary href="/novaObra">
                                        Adicionar obra
                                    </Button>
                                  </div>
                              </Col>

                              <Col span={24} className="table-responsive">
                                <Table 
                                  className="ant-border-space"
                                  columns={columns}
                                  dataSource={construction}
                                  onChange={onChange}
                                />
                              </Col>
                          </Row>
                      </Card>
                  </Col>
              </Row>
          </div>
      </>
  );
}

export default Obra;

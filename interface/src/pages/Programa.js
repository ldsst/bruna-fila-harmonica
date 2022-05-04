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
  Input, 
  Space,
  Modal
} from "antd";


import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Search } = Input;
const onSearch = value => console.log(value);
const { Title } = Typography;


// table code start
const columns = [
  {
      title: <Title level={5}>Programa</Title>,
      dataIndex: "programa",
      key: "programa",
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
      title: <Title level={5}>Ações</Title>,
      key: "acoes",
      dataIndex: "acoes",
    },
];

const data = [
  {
      key: "1",
      programa: (
          <>
              <div className="avatar-info">
                  <p>Programa 1</p>
              </div>
          </>
      ),
      acoes: (
          <>
          <div className="ant-employed">
                <span onClick={showData}>Visualizar</span>
          </div>
  
            <div className="ant-employed">
                <a href="/editarPrograma">Editar</a>
            </div>
                
            <div className="ant-employed">
                <span onClick={showDeleteConfirm}>Excluir</span>,
            </div>
          </>
        ),
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function showDeleteConfirm() {
  confirm({
    title: 'Você confirma a exclusão de:',
    icon: <ExclamationCircleOutlined />,
    content: 'NOME DO PROGRAMA AQUI',
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
    title: 'Dados do programa',
    content: (
      <div>
        <p>MOSTRAR DADOS AQUI</p>
      </div>
    ),
    onOk() {},
  });
}


function Programa() {
  //const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
      <>

          <div className="tabled">
              <Row>
                  <Col span={24}>
                      <Card
                          bordered={false}
                          className="criclebox tablespace mb-24"
                          title="Programas"
                      >
                          <Row>
                              <Col span={4}>
                                  
                              </Col>

                              <Col span={17}></Col>

                              <Col span={3}>
                                  <label>&nbsp;</label>
                                  <div>
                                  <Button className="btn float-end" type="primary" primary href="/novoPrograma">
                                        Adicionar programa
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

export default Programa;

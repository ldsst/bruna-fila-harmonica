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
  const { Title } = Typography;
  const { Search } = Input;
  const onSearch = value => console.log(value);
  
  // table code start
  const columns = [
    {
      title: <Title level={5}>Data</Title>,
      dataIndex: "data",
      key: "data",
    },
    {
      title: <Title level={5}>Compositor</Title>,
      dataIndex: "compositor",
      key: "compositor",
    },
    {
      title: <Title level={5}>Repertório</Title>,
      key: "repertorio",
      dataIndex: "repertorio",
    },
    {
        title: <Title level={5}>Série</Title>,
        key: "serie",
        dataIndex: "serie",
      },
      {
        title: <Title level={5}>Local</Title>,
        key: "local",
        dataIndex: "local",
      },
      {
        title: <Title level={5}>Cidade</Title>,
        key: "cidade",
        dataIndex: "cidade",
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
      data: (
        <>
            <div className="avatar-info">
              <p>21/02/2018</p>
            </div>
        </>
      ),
       compositor: (
        <>
            <div className="avatar-info">
              <p>João José</p>
            </div>
        </>
      ),
      repertorio: (
        <>
          <div className="author-info">
            <p>algum repertorio</p>
          </div>
        </>
      ),
      serie: (
        <>
          <div className="author-info">
            <p>alguma serie aqui</p>
          </div>
        </>
      ),
      local: (
        <>
          <div className="author-info">
            <p>Praça da liberdade</p>
          </div>
        </>
      ),
      cidade: (
        <>
          <div className="ant-employed">
            <p>Belo Horizonte</p>
          </div>
        </>
      ),
      acoes: (
        <>
        <div className="ant-employed">
            <span onClick={showData}>Visualizar</span>
          </div>
  
            <div className="ant-employed">
                <a href="/editarDadoHistorico">Editar</a>
            </div>
                
            <div className="ant-employed">
                <span onClick={showDeleteConfirm}>Excluir </span>,
            </div>
        </>
      ),
    },
  ];

  function showDeleteConfirm() {
    confirm({
      title: 'Você confirma a exclusão de:',
      icon: <ExclamationCircleOutlined />,
      content: 'NOME DE DADO HISTORICO AQUI',
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
      title: 'Dado histórico',
      content: (
        <div>
          <p>MOSTRAR DADOS AQUI</p>
        </div>
      ),
      onOk() {},
    });
  }



  function History() {
    //const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  
    return (
      <>

          <div className="tabled">
              <Row>
                  <Col span={24}>
                      <Card
                          bordered={false}
                          className="criclebox tablespace mb-24"
                          title="Histórico"
                      >
                          <Row>
                              <Col span={4}>

                              </Col>

                              <Col span={17}></Col>

                              <Col span={3}>
                                  <label>&nbsp;</label>
                                  <div>
                                      <Button className="btn float-end" type="primary" primary href="/novoDadoHistorico">
                                          Adicionar dado histórico
                                      </Button>
                                  </div>
                              </Col>

                              <Col span={24} className="table-responsive">
                                  <Table
                                      l columns={columns}
                                      dataSource={data}
                                      pagination={false}
                                      className="ant-border-space"
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
  
  export default History;
  
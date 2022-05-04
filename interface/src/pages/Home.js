import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';

class Surveys extends React.Component{

  render() {
      return (
        <div className="tabled">
                <Row>
                    <Col span={24}>
                        <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="Página Inicial"
                        ></Card>
                          <div className="site-card-wrapper">
                          <Row gutter={16}>
                            <Col span={8}>
                              <Card title="Compositores" bordered={true}>
                                <a href="/compositores"> Acessar página de compositores</a>
                              </Card>
                            </Col>
                            <Col span={8}>
                              <Card title="Convidados" bordered={false}>
                                <a href="/convidados"> Acessar página de convidados</a>
                              </Card>
                            </Col>
                            <Col span={8}>
                              <Card title="Histórico" bordered={false}>
                                <a href="/historico"> Acessar página de histórico</a>
                              </Card>
                            </Col>
                            <p></p>
                          </Row>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          <Row gutter={16}>
                            <Col span={8}>
                              <Card title="Obras" bordered={true}>
                                <a href="/obras"> Acessar página de obras</a>
                              </Card>
                            </Col>
                            <Col span={8}>
                              <Card title="Partituras" bordered={false}>
                                <a href="/partituras"> Acessar página de Partituras</a>
                              </Card>
                            </Col>
                            <Col span={8}>
                              <Card title="Pessoas" bordered={false}>
                                <a href="/pessoas"> Acessar página de pessoas</a>
                              </Card>
                            </Col>
                            <p></p>
                          </Row>
                          &nbsp;
                          <Row gutter={16}>
                            <Col span={8}>
                              <Card title="Plano de Temporada" bordered={true}>
                                <a href="/planoTemporada"> Acessar página de plano de temporada</a>
                              </Card>
                            </Col>
                            <Col span={8}>
                              <Card title="Programa" bordered={false}>
                                <a href="/programa"> Acessar página de programas</a>
                              </Card>
                            </Col>
                            <p></p>
                          </Row>
                        </div>
                  </Col>
            </Row>
          </div>
  );
  }
}

export default Surveys;
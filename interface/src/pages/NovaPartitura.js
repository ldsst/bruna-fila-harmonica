import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Col
} from 'antd';

const NovaPartitura = () => {
  const [componentSize] = useState('default');

  return (
  <Col>
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Nova Partitura">
      <p></p>
      <p></p>
      <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
    >

      <Form.Item label="Número de tombo">
        <Input />
      </Form.Item>
      
      <Form.Item label="Compositor">
        <Input />
      </Form.Item>

      <Form.Item label="Nome da obra">
        <Input />
      </Form.Item>

      <Form.Item label="Editora">
        <Input />
      </Form.Item>

      <Form.Item label="Duração">
        <Input />
      </Form.Item>

      <Form.Item label="Instrumentação">
        <Input />
      </Form.Item>

      <Form.Item label="Movimentos">
        <Input />
      </Form.Item>

      <Form.Item label="Histórico da obra">
        <Input />
      </Form.Item>

      <Form.Item label="Observações">
        <Input />
      </Form.Item>
    
      <p></p>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col>
  );
};

export default NovaPartitura;

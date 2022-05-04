import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Col
} from 'antd';


const { Search } = Input;

const EditarObra = () => {
  const [componentSize] = useState('default');

const onSearch = value => console.log(value);


  return (
  <Col>
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Editar Obra">
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

      <Form.Item label="Nome da obra">
        <Input />
      </Form.Item>

      <Form.Item label="Arranjador">
        <Search placeholder="Buscar Arranjador" onSearch={onSearch} enterButton />
      </Form.Item>

      <Form.Item label="Ano / período de composição">
        <Input />
      </Form.Item>

      <Form.Item label="Duração">
        <Input />
      </Form.Item>

      <Form.Item label="Instrumentação Codifcada">
        <Input />
      </Form.Item>

      <Form.Item label="Instrumentação por extenso">
        <Input />
      </Form.Item>

      <Form.Item label="Movimentos">
        <Input />
      </Form.Item>

      <Form.Item label="Quantidade de Movimentos">
        <Input />
      </Form.Item>

      <Form.Item label="Detalhes da obra">
        <Input />
      </Form.Item>

      <Form.Item label="Efemérides">
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

export default EditarObra;

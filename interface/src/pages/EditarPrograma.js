import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Col
} from 'antd';


const { Search } = Input;

const EditarPrograma = () => {
  const [componentSize] = useState('default');

const onSearch = value => console.log(value);


  return (
  <Col>
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Editar Programa">
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

      <Form.Item label="Nome do Programa">
        <Input />
      </Form.Item>

      <Form.Item label="Obra">
        <Search placeholder="Buscar obra" onSearch={onSearch} enterButton />
      </Form.Item>

      <Form.Item label="Nome abreviado do compositor">
        <Input />
      </Form.Item>

      <Form.Item label="Instrumentação Codifcada">
        <Input />
      </Form.Item>

      <Form.Item label="Duração">
        <Input />
      </Form.Item>

      <Form.Item label="Nome abreviado do arranjador">
        <Search placeholder="Buscar arranjador" onSearch={onSearch} enterButton />
      </Form.Item>

      <Form.Item label="Efemérides">
        <Input />
      </Form.Item>

      <Form.Item label="Observações">
        <Input />
      </Form.Item>

      <Form.Item label=" " wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default">
          Adicionar mais uma obra
        </Button>
      </Form.Item>

      <p></p>
      <div>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
      </div>
      <div>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Gerar PDF
        </Button>
      </Form.Item>
      </div>
    </Form>
    </Card>
    </Col>
  );
};

export default EditarPrograma;

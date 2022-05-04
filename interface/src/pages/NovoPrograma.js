import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Col
} from 'antd';

const { Search } = Input;
const NovoPrograma = () => {
const [componentSize] = useState('default');
const onSearch = value => console.log(value);

// TODO: 
// Quando buscar por obra, deve ser feito o preenchimento automático de nome abreviado, instrumentação codificada e duração
// Arranjador deve ser buscado na tabela de compositores
// Se a pessoa escolher adicionar mais uma obra, deve abrir todos os campos novamente, exceto nome do programa, também vale para a página de edição 


  return (
  <Col>
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Novo Programa">
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
        <Search placeholder="Buscar compositor" onSearch={onSearch} enterButton />
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

export default NovoPrograma;

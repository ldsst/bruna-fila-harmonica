import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Col,
  DatePicker,
  ConfigProvider
} from 'antd';

import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/pt_BR';

const EditarConvidado = () => {
  const [componentSize] = useState('default');


const { Option } = Select;
function handleChange(value) {
}

const dateFormat = 'DD/MM/YYYY';

  return (
  <Col>
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Editar Convidado">
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

      <Form.Item label="Nome Completo">
        <Input />
      </Form.Item>
      
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'O texto inserido não é um email válido!',
          },
          {
            message: 'Por favor insira o email',
          },
        ]}
      >
        <Input />
    </Form.Item>

    <Form.Item label="Data de nascimento"  locale={locale}>
      <ConfigProvider locale={locale}>
        <DatePicker format={dateFormat} />
      </ConfigProvider>
     </Form.Item>

     <Form.Item label="Local de nascimento ">
        <Input />
      </Form.Item>

      <Form.Item label="Nacionalidade">
        <Input />
      </Form.Item>

    <Form.Item label="Sexo">
      <Select style={{ width: 200 }} onChange={handleChange}>
        <Option value="Feminino">Feminino</Option>
        <Option value="Masculino">Masculino</Option>
      </Select>
    </Form.Item>

    <Form.Item label="Instrumento">
        <Input />
      </Form.Item>

    <Form.Item label="É regente?">
      <Select style={{ width: 200 }} onChange={handleChange}>
        <Option value="sim">Sim</Option>
        <Option value="nao">Não</Option>
      </Select>
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

export default EditarConvidado;

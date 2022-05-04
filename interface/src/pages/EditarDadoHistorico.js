import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Col,
  DatePicker,
  ConfigProvider
} from 'antd';

import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/pt_BR';

const EditarDadoHistorico = () => {
  const [componentSize] = useState('default');

const dateFormat = 'DD/MM/YYYY';

  return (
  <Col>
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Editar dado histórico">
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

    <Form.Item label="Data"  locale={locale}>
      <ConfigProvider locale={locale}>
        <DatePicker format={dateFormat} />
      </ConfigProvider>
     </Form.Item>

      <Form.Item label="Compositor">
        <Input />
      </Form.Item>
    

     <Form.Item label="Primeiro nome">
        <Input />
      </Form.Item>

      <Form.Item label="Repertório">
        <Input />
      </Form.Item>


    <Form.Item label="Série">
        <Input />
      </Form.Item>

      <Form.Item label="Solista">
        <Input />
      </Form.Item>

      <Form.Item label="Regente">
        <Input />
      </Form.Item>

      <Form.Item label="Arranjador/Orquestrador">
        <Input />
      </Form.Item>

      <Form.Item label="Local">
        <Input />
      </Form.Item>

      <Form.Item label="Cidade">
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

export default EditarDadoHistorico;

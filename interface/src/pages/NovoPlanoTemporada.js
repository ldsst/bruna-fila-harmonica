import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Col,
  InputNumber,
  DatePicker,
  ConfigProvider
} from 'antd';

import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/pt_BR';

import { TimePicker } from 'antd';

const format = 'HH:mm';
const dateFormat = 'DD/MM/YYYY';

const NovoPlanoTemporada = () => {
  const [componentSize] = useState('default');
  
const { Option } = Select;
function handleChange(value) {

}

  return (
  <Col>
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Plano de Temporada">
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

          <Form.Item label="Ano da temporada">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Nome da temporada">
            <Input />
          </Form.Item>

          <Form.Item label="Observações">
            <Input />
          </Form.Item>

          </Form>
    </Card>
      
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Concerto">
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

      <Form.Item label="Evento">
        <Input />
      </Form.Item>

      <Form.Item label="Transmissão ou Gravação?">
      <Select style={{ width: 200 }} onChange={handleChange}>
        <Option>Não</Option>
        <Option>Sim</Option>
      </Select>
    </Form.Item>

    <Form.Item label="Legenda">
      <Select style={{ width: 200 }} onChange={handleChange}>
        <Option>ASA</Option>
        <Option>TE</Option>
        <Option>TN</Option>
        <Option>TV</Option>
        <Option>EA</Option>
        <Option>GE</Option>
        <Option>GC</Option>
        <Option>*</Option>
      </Select>
    </Form.Item>


      <Form.Item label="Data de Início"  locale={locale}>
      <ConfigProvider locale={locale}>
        <DatePicker format={dateFormat} />
      </ConfigProvider>
     </Form.Item>

     <Form.Item label="Data de Fim"  locale={locale}>
      <ConfigProvider locale={locale}>
        <DatePicker format={dateFormat} />
      </ConfigProvider>
     </Form.Item>

     <Form.Item label="Série">
        <Input />
      </Form.Item>

      <Form.Item label="Número">
        <InputNumber />
      </Form.Item>

      <Form.Item label="Nome">
        <Input />
      </Form.Item>

      <Form.Item label="Regente">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" htmlType="submit">
          Adicionar mais um regente
        </Button>
      </Form.Item>

      <Form.Item label="Traje">
        <Input />
      </Form.Item>

      <Form.Item label="Solista">
        <Input />
      </Form.Item>

      <Form.Item label="Instrumento de Solista">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" htmlType="submit">
          Adicionar mais um solista
        </Button>
      </Form.Item>


      <Form.Item label="Observações">
        <Input />
      </Form.Item>

      <Form.Item label="Programa">
      <Select style={{ width: 200 }} onChange={handleChange}>
        <Option>LISTA DE PROGRAMAS AQUI</Option>
      </Select>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" htmlType="submit">
          Adicionar mais um programa
        </Button>
      </Form.Item>

      


      </Form>
    </Card>

      <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Ensaios">
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

      <Form.Item label="Número do ensaio">
        <InputNumber />
      </Form.Item>

      <Form.Item label="Data"  locale={locale}>
      <ConfigProvider locale={locale}>
        <DatePicker format={dateFormat} />
      </ConfigProvider>
     </Form.Item>

     <Form.Item label="Horário de Início">
      <ConfigProvider locale={locale}>
          <TimePicker  format={format} />
          </ConfigProvider>
      </Form.Item>

      <Form.Item label="Horário de fim">
        <ConfigProvider locale={locale}>
        <TimePicker  format={format} />
        </ConfigProvider>
      </Form.Item>

      <Form.Item label="Detalhes do ensaio">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" htmlType="submit">
          Adicionar mais um ensaio
        </Button>
      </Form.Item>
      </Form>
    </Card>

      
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="">
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

      <p></p>
       
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" htmlType="submit">
          Adicionar mais um concerto
        </Button>
      </Form.Item>

      </Form>
    </Card>


      <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="">
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

export default NovoPlanoTemporada;

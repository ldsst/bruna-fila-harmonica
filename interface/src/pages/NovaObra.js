import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Col
} from 'antd';

import api from '../services/api';

const { Search } = Input;

const initialValuesForm = {
  nomeObra: '',
  arranjador: '',
  anoPeriodoComposicao: '',
  duracao: '',
  instrumentacaoCodificada: '',
  instrumentacaoExtenso: '',
  movimentos: '',
  qtdMovimentos: '',
  detalhesObra: '',
  efemerides: '',
  observacoes: '',
  idCompositor: 11
}

function NovaObra() {
  const [componentSize] = useState('default');
  const [valuesForm, setValuesForm] = useState(initialValuesForm);

  const onSearch = value => console.log(value);

  const handleChange = ({target}) => {
    const { name, value } = target;
    
    setValuesForm({...valuesForm, [name]: value});
  }

  const saveNewConstruction = () => {
    api.post('/musicalWork', valuesForm)
    .then(() => setValuesForm(initialValuesForm))
    .catch(() => console.log('Houve um problema.'))
  }

  return (
  <Col>
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Nova Obra">
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
        <Input
          value={valuesForm.nomeObra}
          name="nomeObra"
          onChange={handleChange}
         />
      </Form.Item>

      <Form.Item label="Arranjador">
        <Search 
        value={valuesForm.arranjador}
        name="arranjador"
        onChange={handleChange}
        placeholder="Buscar Arranjador"
        onSearch={onSearch} 
        enterButton />
      </Form.Item>

      <Form.Item label="Ano / período de composição">
        <Input 
          value={valuesForm.anoPeriodoComposicao}
          name="anoPeriodoComposicao"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Duração">
        <Input 
          value={valuesForm.duracao}
          name="duracao"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Instrumentação Codifcada">
        <Input 
          value={valuesForm.instrumentacaoCodificada}
          name="instrumentacaoCodificada"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Instrumentação por extenso">
        <Input
          value={valuesForm.instrumentacaoExtenso}
          name="instrumentacaoExtenso"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Movimentos">
        <Input 
          value={valuesForm.movimentos}
          name="movimentos"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Quantidade de Movimentos">
        <Input 
          value={valuesForm.qtdMovimentos}
          name="qtdMovimentos"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Detalhes da obra">
        <Input 
          value={valuesForm.detalhesObra}
          name="detalhesObra"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Efemérides">
        <Input
          value={valuesForm.efemerides} 
          name="efemerides"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Observações">
        <Input 
          value={valuesForm.observacoes}
          name="observacoes"
          onChange={handleChange}
        />
      </Form.Item>
      

      <p></p>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button 
          onClick={ saveNewConstruction }
          type="primary"
          htmlType="submit"
        >
          Salvar
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col>
  );
};

export default NovaObra;

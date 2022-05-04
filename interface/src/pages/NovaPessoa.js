import React, { useState } from 'react';
  import axios from 'axios';

import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Col
} from 'antd';

// Se nivelPermissao for leitura, candEdit recebe 0, se for edição, recebe 1

const NovaPessoa = () => {
  const [componentSize] = useState('default');

  const { Option } = Select;

  const [userData, setInputValues] = useState({
    nome: "",
    email: "",
    cargo: "",
    permissao: "",
  });

  const handleInputChange = event => {
    const { id, value } = event.target;
    setInputValues({ ...userData, [id]: value });
  };

  const handleSelectCargoChange = value => {
    setInputValues({ ...userData, "cargo": value });
  };

  const handleSelectPermissaoChange = value => {
    setInputValues({ ...userData, "permissao": value });
  };

  const createUser = async () => {
    console.log(userData)

    const body = {
      "senha": "mudar123*",
      "nomeCompleto": userData.nome,
      "nivelPermissao": userData.permissao,
      "email": userData.email,
      "canEdit": (userData.permissao === "Edição") ? true : false,
    }
    
    await axios.post(`http://localhost:3006/user`, body)
  }

  return (
    <div>
      <Col>
        <Card
          bordered={false}
          className="criclebox tablespace mb-24"
          title="Editar Pessoa">
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
              <Input id="nome" onChange={handleInputChange} />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              onChange={handleInputChange}
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
              <Input id="email" />
            </Form.Item>

            <Form.Item label="Instrumento/Posição">
              <Select id="cargo" onChange={handleSelectCargoChange} defaultValue="2" style={{ width: 200 }}>
                <Option value="1">Funcionário</Option>
                <Option value="2">Musicista</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Nível de permissão">
              <Select id="permissao" onChange={handleSelectPermissaoChange} defaultValue="Leitura" style={{ width: 200 }}>
                <Option value="Leitura">Leitura</Option>
                <Option value="Edição">Edição</Option>
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
    </div>
  );
};

export default NovaPessoa;

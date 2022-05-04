import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Col
} from 'antd';

import axios from 'axios';

const EditarPessoa = () => {
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

  const updateUser = async () => {
    const id = 1
    console.log(userData)

    const body = {
      "nomeCompleto": userData.nome,
      "nivelPermissao": userData.permissao,
      "email": userData.email,
      "TipoUsuario_idTipoUsuario": userData.cargo,
      "canEdit": (userData.permissao === "Edição") ? true : false,
    }

    await axios.put(`http://localhost:3006/user/${id}`, body)
  }

  const getUserById = async () => {
    const id = 1
    const userData = await axios.get(`http://localhost:3006/user/${id}`)

    console.log(userData.data)

    document.getElementById('nome').value = userData.data.nomeCompleto
    document.getElementById('email').value = userData.data.email
    document.getElementById('cargo').value = userData.data.TipoUsuario_idTipoUsuario
    document.getElementById('permissao').value = userData.data.nivelPermissao

  }


  return (
    <div onLoad={getUserById()}>
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
              <Button type="primary" htmlType="submit" onClick={updateUser}>
                Salvar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </div>
  );
};

export default EditarPessoa;

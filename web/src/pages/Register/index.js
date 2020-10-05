import React, { useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import swal from "sweetalert";
import { BeatLoader, ClockLoader } from "react-spinners";

import api from "../../services/api";
import InputMask from "./InputMask";

import "./styles.css";
import image from "../../assets/wall_post.svg";
import icon from "../../assets/magnifier.svg";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um email válido")
    .required("O e-email é obrigatório"),
  cpf: Yup.string()
    .min(11, "No mínimo 11 caracteres")
    .required("O CPF é obrigatória"),
  phone: Yup.string().required("O celular é obrigatória"),
  password: Yup.string()
    .min(6, "Senha muito curta. No mínimo 6 caracteres")
    .required("A senha é obrigatória"),
  zip: Yup.string().required("O CEP é obrigatório"),
  street: Yup.string().required("A Rua é obrigatória"),
  number: Yup.string().required("O número é obrigatório"),
  neighborhood: Yup.string().required("O bairro é obrigatório"),
  city: Yup.string().required("A cidade é obrigatória"),
  uf: Yup.string().required("A UF é obrigatória")
});

const Register = ({ history }) => {
  const [zip, setZip] = useState("");

  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    uf: ""
  });

  const [loadingZip, setLoadingZip] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);

    try {
      const response = await api.post("/users", data);
      setLoading(false);

      if (response.status === 201) {
        history.push("/success");
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400) {
        swal("Atenção!", "Usuário já cadastrado!", "warning");
      }
    }
  }

  async function handleSearchZip() {
    if (!zip) {
      swal("Atenção!", "CEP não pode estar vazio", "warning");

      return;
    }

    setLoadingZip(true);

    const response = await fetch(
      `https://viacep.com.br/ws/${zip.replace("-", "")}/json/unicode/`
    );

    const data = await response.json();

    setLoadingZip(false);

    if (data.erro) {
      swal("Atenção!", "CEP não localizado", "warning");

      return;
    }

    setAddress({
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      uf: data.uf
    });
  }

  return (
    <div className="register-container">
      <Form schema={schema} initialData={address} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <InputMask name="cpf" placeholder="CPF" mask="999.999.999-99" />
        <InputMask
          name="phone"
          type="tel"
          placeholder="Celular"
          mask="(99) 99999-9999"
        />
        <Input name="password" type="password" placeholder="Senha" />

        <h4>Endereço</h4>

        <div id="zip">
          <InputMask
            name="zip"
            placeholder="CEP"
            mask="99999-999"
            onChange={e => setZip(e.target.value)}
          />
          <button type="button" onClick={handleSearchZip}>
            {loadingZip ? (
              <ClockLoader size={20} color={"#fff"} loading={loadingZip} />
            ) : (
              <img src={icon} alt="logo" />
            )}
          </button>
        </div>

        <Input name="street" placeholder="Rua" />
        <Input name="number" placeholder="Número" />
        <Input name="neighborhood" placeholder="Bairro" />
        <Input name="city" placeholder="Cidade" />
        <Input name="uf" placeholder="UF" maxLength={2} />

        <button type="submit">
          {loading ? (
            <BeatLoader size={18} color={"#fff"} loading={loading} />
          ) : (
            "Criar conta gratuita"
          )}
        </button>
        <div id="login">
          Já tem uma conta? Acesse <strong>aqui</strong>
        </div>
      </Form>

      <div id="wellcome">
        <h1>Bem-vindo ao portal de cadastro Bemol Persona</h1>
        <p>
          Uma forma mais prática de acessar todos os canais de atendimento da
          Bemol.
        </p>
        <p>Cadastre-se gratuitamente!</p>
        <img src={image} alt="logo" />
      </div>
    </div>
  );
};

export default Register;

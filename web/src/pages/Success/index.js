import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import image from "../../assets/done.svg";

const Success = () => {
  return (
    <div className="success-container">
      <img src={image} alt="success" />
      <h1>Usuário cadastrado com sucesso!</h1>
      <Link to="/">
        <strong>Fazer um novo cadastro</strong>
      </Link>
    </div>
  );
};

export default Success;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const enviar = () => {
    alert(
      "Obrigado " +
        nome +
        " - " +
        "E-mail: " +
        email +
        " - " +
        "CPF: " +
        cpf +
        "! seus dados foram enviados com sucesso !"
    );
  };

  return (
    <>
      <form onSubmit={enviar}>
        <label>Digite seu nome: </label>
        <input
          type="text"
          name="username"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br></br>
        <label>Digite seu e-mail: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label> Digite seu CPF: </label>
        <input
          type="text"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <br></br>
        <input type="submit" />
      </form>
    </>
  );
};
export default Formulario;

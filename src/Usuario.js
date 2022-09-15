import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Usuario = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Usuário:</h1>
      <Link to="/">retornar a página inicial</Link>
    </div>
  );
};

export default Usuario;

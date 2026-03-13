import React from 'react';
import minhaFoto from '../assets/minhaFoto.jpg';

const Inicio = () => {
  return (
    <header id="inicio" className="cabecalho">
      <div className="foto-wrapper">
        <img src={minhaFoto} alt="Kesley Santos" className="foto-perfil" />
      </div>
      <h1>Kesley Santos</h1>
      <p className="cabecalho-sub-titulo animar">Desenvolvedor Front End</p>
    </header>
  );
};

export default Inicio;

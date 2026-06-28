import React from 'react';
import minhaFoto from '../assets/minhaFoto.jpg';
import SocialLinks from './SocialLinks';

const Inicio = () => {
  return (
    <header id="inicio" className="cabecalho">
      <div className="foto-wrapper animar-entrada">
        <img
          src={minhaFoto}
          alt="Kesley Santos"
          className="foto-perfil"
        />
      </div>
      <h1 className="animar-entrada">Kesley Santos</h1>
      <p className="cabecalho-sub-titulo animar animar-entrada-delay">
        Desenvolvedor Front End
      </p>
      <div className="animar-entrada-delay">
        <SocialLinks />
      </div>
    </header>
  );
};

export default Inicio;

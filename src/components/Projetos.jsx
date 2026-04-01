import React, { useEffect } from 'react';
import { meusProjetos } from '../projetos';
import githubIcon from '../assets/icons/logogithub.svg';

const Projetos = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll(
      '.projetos-card, .projetos-titulo',
    );
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) entrada.target.classList.add('show');
          else entrada.target.classList.remove('show');
        });
      },
      { threshold: 0.1 },
    );

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  const abrirProjeto = (link) => {
    window.open(link, '_blank', 'noreferrer');
  };

  return (
    <section id="projetos" className="projetos">
      <h2 className="projetos-titulo animar animate">Meus Projetos</h2>
      <div className="projetos-caixa">
        {meusProjetos.map((projeto) => (
          <div
            className="projetos-card animate"
            key={projeto.id}
            onClick={() => abrirProjeto(projeto.linkAcessar)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="projetos-imagem"
            />

            <div className="textos-projeto">
              <h3 className="info-projetos">{projeto.titulo}</h3>
              <p className="paragrafo-projetos">{projeto.descricao}</p>
            </div>

            <div className="botoes-projeto">
              <a
                href={projeto.linkAcessar}
                target="_blank"
                rel="noreferrer"
                className="btn-projeto"
                onClick={(e) => e.stopPropagation()}
              >
                Acessar Projeto
              </a>
              {projeto.linkGithub && (
                <a
                  href={projeto.linkGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-projeto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={githubIcon} alt="" className="icone-social-btn" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;

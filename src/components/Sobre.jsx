import React, { useEffect } from 'react';

const Sobre = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll(
      '#sobre, .sobre-titulo, .sobre-caixa',
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

  return (
    <section id="sobre" className="sobre animate">
      <h2 className="sobre-titulo animate">Sobre Mim</h2>
      <div className="sobre-caixa animate">
        <p className="sobre-paragrafo">
          Olá, Me chamo Kesley. Sou um Desenvolvedor Front-end focado em unir a
          precisão do código limpo com a sofisticação do design moderno. Crio
          interfaces que não apenas funcionam com excelência, mas que capturam a
          atenção de quem as utiliza.
        </p>
      </div>
    </section>
  );
};

export default Sobre;

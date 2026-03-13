import React, { useEffect, useCallback } from 'react';

import htmlIcon from '../assets/icons/html5.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/javasc.png';
import nodeIcon from '../assets/icons/nodejs.png';
import reactIcon from '../assets/icons/react.png';

const IconesBackground = () => {
  const imagens = [htmlIcon, cssIcon, jsIcon, nodeIcon, reactIcon];

  const moverIconesSemSobrepor = useCallback(() => {
    const icones = document.querySelectorAll('.icone');
    const totalIcones = icones.length;

    const colunas = 3;
    const linhas = 2;
    const larguraSetor = window.innerWidth / colunas;
    const alturaSetor = window.innerHeight / linhas;

    let setoresDisponiveis = [0, 1, 2, 3, 4, 5];

    icones.forEach((icone) => {
      if (setoresDisponiveis.length === 0) return;

      const indiceSorteado = Math.floor(
        Math.random() * setoresDisponiveis.length,
      );
      const setor = setoresDisponiveis.splice(indiceSorteado, 1)[0];

      const colunaAtual = setor % colunas;
      const linhaAtual = Math.floor(setor / colunas);

      const x =
        colunaAtual * larguraSetor + Math.random() * (larguraSetor - 100);
      const y = linhaAtual * alturaSetor + Math.random() * (alturaSetor - 100);
      const r = Math.random() * 360;

      icone.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
    });
  }, []);

  useEffect(() => {
    moverIconesSemSobrepor();

    let timeout;
    const lidarComScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(moverIconesSemSobrepor, 200);
    };

    window.addEventListener('scroll', lidarComScroll);
    return () => {
      window.removeEventListener('scroll', lidarComScroll);
      clearTimeout(timeout);
    };
  }, [moverIconesSemSobrepor]);

  return (
    <div className="icones-flutuantes">
      {imagens.map((img, index) => (
        <img key={index} src={img} className="icone" alt="tecnologia" />
      ))}
    </div>
  );
};

export default IconesBackground;

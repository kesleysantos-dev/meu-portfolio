import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import IconesBackground from './components/IconesBackground';

const App = () => {
  return (
    <main>
      <Header />
      <Inicio />
      <Sobre />
      <Projetos />
      <Contato />
      <IconesBackground />
    </main>
  );
};

export default App;

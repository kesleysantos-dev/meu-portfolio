import imgCrud from './assets/img-crud.png';
import imgAanimal from './assets/logoA-A.png';
import logoBc from './assets/logo-bikcraft.png';
import logoApp from './assets/logoapp.jpg';

export const meusProjetos = [
  {
    id: 1,
    titulo: 'Crud Gerenciameto de Clientes',
    descricao:
      '🚀Sistema de gerenciamento de clientes com React, Vite e Node.js. Operações completas de banco de dados.',
    imagem: imgCrud,
    linkAcessar: 'https://react-crud-clientes.vercel.app/',
    linkGithub: 'https://github.com/kesleysantos-dev/react-crud-clientes',
  },
  {
    id: 2,
    titulo: 'Senhor do Tempo',
    descricao:
      ' 🚀Aplicação de previsão meteorológica em tempo real desenvolvida com React, Vite e OpenWeather API. O projeto foca em performance e UX, utilizando Debounce para otimização de buscas e estilização dinâmica via CSS para adaptar a interface de acordo com a temperatura da cidade. Hospedado na Vercel com versionamento via Git/GitHub.',
    imagem: logoApp,
    linkAcessar: 'https://previsao-do-tempo-lemon-pi.vercel.app/',
    linkGithub: 'https://github.com/kesleysantos-dev/senhor-do-tempo',
  },
  {
    id: 3,
    titulo: 'Bikcraft',
    descricao:
      '🚀Bikcraft é uma loja virtual de bicicletas elétricas de alta precisão e qualidade, feitas sob medida para o cliente. A loja conta com vários modelos de bicicletas disponíveis e também com opções variadas de seguro. Explore o mundo na sua velocidade com a Bikcraft.',
    imagem: logoBc,
    linkAcessar: 'https://bikcraft-mauve-alpha.vercel.app/',
    linkGithub: 'https://github.com/kesleysantos-dev/Bikcraft',
  },
];

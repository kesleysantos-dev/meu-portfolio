import imgCrud from './assets/img-crud.png';
import imgAanimal from './assets/logoA-A.png';
import logobu from './assets/icon-bellasup.jpg';
import logob from './assets/logob.png';
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
    titulo: 'BellasUp | Agendamento Inteligente',
    descricao:
      '🚀Aplicação de agendamento e gestão inteligente com validação real-time, integração via API do WhatsApp e checkout Pix com cronômetro reativo. Interface UX/UI fluida e otimizada para conversão. Repositório privado por segurança e propriedade intelectual ' +
      '   AVISO: AO ACESSAR O SITE, CADASTRE-SE PARA TESTAR AS FUNCIONALIDADES',
    imagem: logob,
    linkAcessar: 'https://bellasup.vercel.app//',
    // linkGithub: 'https://github.com/kesleysantos-dev/Bikcraft',
  },
];

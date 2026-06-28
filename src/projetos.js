import logob from './assets/logob.png';
import logoSergio from './assets/logo-sergio-onofre.jpg';
import logoMarta from './assets/logo-marta-torquato.jpg';

export const meusProjetos = [
  {
    id: 1,
    titulo: 'BellasUp | Agendamento Inteligente',
    descricao:
      '🚀Aplicação de agendamento e gestão inteligente com validação real-time, integração via API do WhatsApp e checkout Pix com cronômetro reativo. Interface UX/UI fluida e otimizada para conversão. Repositório privado por segurança e propriedade intelectual ' +
      '   AVISO: AO ACESSAR O SITE, CADASTRE-SE PARA TESTAR AS FUNCIONALIDADES',
    imagem: logob,
    linkAcessar: 'https://bellasup.vercel.app//',
    tecnologias: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'API WhatsApp', 'Vite'],
  },
  {
    id: 2,
    titulo: 'Sérgio Onofre | Advocacia',
    descricao:
      'Web Site corporativo desenvolvido para escritório de advocacia. Apresenta uma estrutura robusta com seções institucionais, áreas de atuação em blocos, portfólio de serviços, suporte a múltiplas unidades e canais de atendimento com WhatsApp fixo.',
    imagem: logoSergio,
    linkAcessar: 'https://dr-s-rgio-onofre.vercel.app/',
    tecnologias: ['React', 'Vite', 'Framer Motion', 'CSS'],
  },
  {
    id: 3,
    titulo: 'Marta Torquato | Advocacia',
    descricao:
      'Landing Page premium focada em advocacia especializada. Destaca a solidez institucional através de um design refinado, blocos interativos para áreas de atuação, mapa integrado e ferramentas de contato direto.',
    imagem: logoMarta,
    linkAcessar: 'https://dra-marta-torquato.lovable.app',
    tecnologias: ['React', 'TypeScript', 'Tailwind', 'Vite'],
  },
];

import React, { useState, useEffect } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  useEffect(() => {
    const titulo = document.querySelector('.contatos-titulo');
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) entrada.target.classList.add('show');
          else entrada.target.classList.remove('show');
        });
      },
      { threshold: 0.5 },
    );

    if (titulo) observador.observe(titulo);
    return () => observador.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const textoWpp = `Olá Kesley! Meu nome é ${formData.nome}. ${formData.mensagem} (E-mail: ${formData.email})`;
    window.open(
      `https://wa.me/5585987689986?text=${encodeURIComponent(textoWpp)}`,
      '_blank',
    );
  };

  return (
    <section id="contatos" className="contatos">
      <h2 className="contatos-titulo animar">Contato</h2>
      <div className="formulario-contato animate show">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu Nome"
            className="campo-form"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            className="campo-form"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            placeholder="Sua Mensagem"
            className="campo-form"
            rows="5"
            required
            value={formData.mensagem}
            onChange={(e) =>
              setFormData({ ...formData, mensagem: e.target.value })
            }
          />
          <button type="submit" className="botao-form">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;

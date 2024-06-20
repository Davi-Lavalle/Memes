import React from 'react';

const novoMeme = () => {
  // Função para recarregar a página
  const gerador = () => {
    window.location.reload();
  };

  return (
    <div>
      <button onClick={gerador}>Novo meme</button>
    </div>
  );
};

export default novoMeme;

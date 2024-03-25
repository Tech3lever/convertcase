// components/CustomHTML.js
// import style from "./style.module.css";

import { useEffect } from 'react';

const CustomHTML = () => {
  useEffect(() => {
    // Crie um novo elemento div
    const container = document.createElement('div');

    // Defina o conteúdo HTML desejado
    container.innerHTML = `
 <div class={style.iframe}>
 <iframe src="https://www.profitablegatecpm.com/ummedm1gtb?key=3c889fafa484ada843c8d4b16a2d0557" frameborder="0" scrolling="no" width="300" height="250"></iframe>
 </div>
    `;

    // Adicione o elemento div ao final do corpo do documento
    document.body.appendChild(container);

    // Retorno da função de efeito para limpeza ao desmontar
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return null; // Componente não renderiza nada diretamente
};

export default CustomHTML;

import React from 'react';

export default props =>
//props é somente leitura, não pode ser atribuido outro valor como comentario abaixo
//props.titulo = "outro titulo"
  <>
    <h3>{ props.titulo }</h3>
    <p>{ props.subtitulo }</p>
  </>

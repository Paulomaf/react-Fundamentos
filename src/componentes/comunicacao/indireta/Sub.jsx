import React from 'react'

export default props => {

  function acao() {
    props.quandoClicarEnvia(Math.random(), 'Gerado')
  }

  return (
    <div>
      <button onClick= { acao }> Alterar </button>
    </div>
  )
}
import React, { useState } from 'react'

export default props => {
  const [ nome, setNome ] = useState('Paulo')

  return (
    <div>
      <h2> { nome } </h2>
      <input value={ nome } onChange= { e => setNome(e.target.value) }/>
    </div>
  )
}
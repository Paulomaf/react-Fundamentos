import React from 'react'
import './App.css'
import Card from './componentes/layout/Card'
import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import ComFilhos from './componentes/basicos/ComFilhos'
import Repeticao from './componentes/basicos/Repeticao'
import Condicional from './componentes/basicos/Condicional'
import CondicionalComIf from './componentes/basicos/CondicionalComIf'
import Pai from './componentes/comunicacao/direta/Pai'
import Super from './componentes/comunicacao/indireta/Super'
import Input from './componentes/form/input'
import Contador from './componentes/contador/Contador'
import Mega from './componentes/mega/Mega'

function App() {
  return (
    <div className="App">
      <h1> Fundamentos de React </h1>
      <div className='Cards'>
        <Card titulo="#11 - Números Mega Sena"color="#73503C">
          <Mega qtdeNumeros= {8}/>
        </Card>
        <Card titulo="#10 - Contador"color="#293E6A">
          <Contador passo= { 10 }/>
        </Card>
        <Card titulo="#09 - Input"color="#9C0F">
          <Input></Input>
        </Card>
        <Card titulo="#08 - Comunicação Indireta"color="#000">
          <Super/>
        </Card>
        <Card titulo="#07 - Comunicação Direta"color="#4298B5">
          <Pai sobrenome='Freitas'></Pai>
        </Card>
        <Card titulo="#06 - Condicional versão 2"color="#FA6900">
          <CondicionalComIf numero= { 10 } />
        </Card>
        <Card titulo="#05 - Condicional versão 1" color="#E94C6F">
          <Condicional numero= { 11 } />
        </Card>
        <Card titulo="#04 - Repetição" color="#008BBA">
          <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Parametro" color="#D96459">
          <ComFilhos>
            <ul>
              <li>Ana</li>
              <li>Bia</li>
              <li>Carlos</li>
              <li>Daniel</li>
            </ul>
          </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametro" color="#FF85CB">
          <ComParametro titulo="Esse é o título"
            subtitulo="Esse é o subtítulo"
          />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#92B06A">
          <Primeiro/>
        </Card>
      </div>
    </div>
  )
}

export default App


import './App.css';
import {Botones} from './components/button';
import { Contador } from './components/counter';
import logo from "./img/LevelUp.png"

import {useState} from "react"

function App() {

  const[contar,setContar]=useState(0);//Valor inicial del contador, con el set se actualiza el contador 

  const Sumar=()=>{
    setContar(contar+1)
  }

  const Restar=()=>{
    setContar(contar-1)
  }
  
  const Reiniciar=()=>{
    setContar(0);

  }

  return (
    <div className="App">
      <div className='logo-level-up'>
        <img
        className='logo'
        alt='Logo de Level Up'
        src={logo}/>
      </div>

      <Contador

        cantidad={contar}/>
      <div>
      <Botones 
      texto="Sumar"
      tipoBoton={true}
      acciones={Sumar}
      />
      <Botones
      texto="Reiniciar"
      acciones={Reiniciar}/>
      <Botones
      class="btn btn-outline-success"
      texto="Restar"
      tipoBoton={true }
      acciones={Restar}/>
      </div>
      <br></br>
      <footer class="pie-pagina">
      &copy;2022 Kenneth García
      </footer>
    </div>
  );
}

export default App;
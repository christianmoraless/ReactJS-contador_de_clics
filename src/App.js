import './App.css';
import FreeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Contador from './componentes/contador';
import Boton from './componentes/boton';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () =>{
      setNumClics(numClics+1);
  }

  const reiniciarContador = () =>{
    setNumClics(0)
  }




  return (
    <div className="App">

      <div className='freecodecamp_logo_contenedor'>
        <div className='freecodecamp'>
          <img className='freecodecamp_logo'
          src={FreeCodeCampLogo}
          alt='Logo de la app'
          />
        </div>
      </div>

    <div className='contenedor_principal'>

        <Contador
          numClics={numClics}
         />
      
        <Boton
          texto='Clic'
          esclic={true}
          manejarClick={manejarClick}
        />

        <Boton
          texto='Reiniciar'
          esclic={false}
          manejarClick={reiniciarContador}
        />
    </div>

    </div>
  );
}

export default App;

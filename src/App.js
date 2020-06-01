import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
//npm i axios
import axios from 'axios';


function App() {

  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;
    //console.log('no se ejecuta');

    const consultarApiLetra = async () => {
      const {artista, cancion} = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const res = await axios(url);

      guardarLetra(res.data.lyrics);

    }
    consultarApiLetra();
  }, [busquedaLetra]);


  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />

    </Fragment>
    
  );
}

export default App;

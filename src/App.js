import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
//npm i axios
import axios from 'axios';
import Cancion from './components/Cancion';


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

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

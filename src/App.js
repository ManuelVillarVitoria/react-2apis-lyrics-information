import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
//npm i axios
import axios from 'axios';
import Cancion from './components/Cancion';


function App() {

  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState({});

  useEffect(() => {

    if(Object.keys(busquedaLetra).length === 0) return;
    //console.log('no se ejecuta');

    const consultarApiLetra = async () => {
  
      const {artista, cancion} = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      
      //Con Promise.all consultamos las APIS a la vez y no esperamos que se termine de ejecutar
      //una para que empieza a ejecutarse la otra. De este modo, ganamos en performance.
      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      //console.log(letra.data.lyrics);
      //console.log(informacion.data);
      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);
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

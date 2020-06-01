import React, {Fragment} from 'react';

const Cancion = ({letra}) => {
    
    //Para que no cargue el titulo del componente si no hay ninguna canción buscada.
    if(letra.length === 0) return null;

    return(
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    );
}
 
export default Cancion;
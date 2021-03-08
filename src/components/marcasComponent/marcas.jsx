import fileMarcas from '../../jsonBD/marcas.json';
import React, {useEffect, useState} from 'react'
import MarcaContent from '../marcaContent/marca';

function MarcasComponent() {
    const[infoM, setMarca] = useState([]);

    function getDatas(data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        getDatas(fileMarcas).then(result => setMarca(result));
    },[])

    console.log(typeof infoM)

    return (
        <div id="client" className="marcas-component contenedor">
            <h2 className="text-center">Marcas</h2>
            <MarcaContent infoM={infoM}/>
        </div>
    )
}

export default MarcasComponent
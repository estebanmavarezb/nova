import ItemMarca from "../itemMarca/itemMarca"
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';

function MarcaContent({infoM}) {

    useEffect(() =>{
        ScrollReveal().reveal('.contenedor-marcas', {
            duration: 2000,
            opacity: 0,
            distance: '0px',
            delay: 600});
    },[])

    return(
        <div className="contenedor-marcas">
            {infoM.map(marca => (
                <ItemMarca marca={marca} key={marca.id}/>
            ))}
        </div>
    )
}

export default MarcaContent
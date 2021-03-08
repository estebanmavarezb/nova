import ItemFeature from "../itemfeature/itemFeature"
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';

function FeatureContent({infoF}) {
    useEffect(() =>{
        ScrollReveal().reveal('.contenido-feature', {
            duration: 1300,
            opacity: 0,
            distance: '0px',
            delay: 600});
    },[])

    return (
        <div id="feature" className="contenido-feature">

            {infoF.map(entry => (
              <ItemFeature entry={entry} key={entry.id}/>  
            ))}
        </div>
    )
}

export default FeatureContent
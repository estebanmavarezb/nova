import FeatureContent from "../featureContent/featureContent";
import React, {useEffect, useState} from 'react';
import fileFeature from "../../jsonBD/feature.json";

function FeatureComponent() {

    const [infoF, setFeature] = useState([]);

    function getData(data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() =>{
        getData(fileFeature).then(result => setFeature(result));
    },[])

    return (
        <div className="feature contenedor">
            <h2 className="text-center ">Feature</h2>
            <p className="text-center no-margin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem fugiat asperiores assumenda aut iste consectetur libero voluptates illo nisi, quasi fuga ea vero</p>
            <FeatureContent infoF={infoF}/>
        </div>
    )
}

export default FeatureComponent
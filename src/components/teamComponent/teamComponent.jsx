import React, {useEffect, useState} from 'react';
import fileTeam from "../../jsonBD/team.json";
import TeamContent from "../teamContent/teamContent";

function TeamComponent() {

    const [infoT, setTeam] = useState([]);

    function getData(data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() =>{
        getData(fileTeam).then(result => setTeam(result));
    },[])

    return (
        <div id="team" className="team-component contenedor">
            <h2>Team</h2>
            <TeamContent infoT={infoT}/>
        </div>
    )
}

export default TeamComponent
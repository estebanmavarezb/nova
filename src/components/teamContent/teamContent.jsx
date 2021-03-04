import ItemTeam from "../ItemTeam/itemTeam"


function TeamContent({infoT}) {
    return (
        <div className="team-content">
        
            {infoT.map(team => (
              <ItemTeam team={team} key={team.id}/>  
            ))}
        </div>
    )
}

export default TeamContent
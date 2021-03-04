

function ItemTeam({team}) {
    return (
        <div className="card-team">
            <div className="imag-team">
                <img src={require(`../../img/${team.imagen}`).default} alt="" />
            </div>
            <div className="text-team">
                <h3 className="no-margin">{team.nombre}</h3>
                <p>{team.puesto}</p>
                <p>{team.correo}</p>
            </div>
        </div>
    )
}

export default ItemTeam
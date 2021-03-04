function ItemMarca({marca}) {
    return(
        <div className="contenido-img">
            <img src={require(`../../img/${marca.img}`).default} alt="" />
        </div>
    )
}

export default ItemMarca
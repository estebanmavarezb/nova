function ItemMarca({marca}) {
    return(
        <div className="contenido-img">
            <a href={marca.href}><img src={require(`../../img/${marca.img}`).default} alt=""  /></a>
        </div>
    )
}

export default ItemMarca
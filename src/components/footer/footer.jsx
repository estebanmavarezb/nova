import image from '../../img/NOVA-NEGRO.png'

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="contenido-footer contenedor">
                <div className="logo-footer">
                    <a href="!#">
                        <img className="logo" src={image} alt="" />
                    </a>
                </div>
                <div className="nav-footer">
                    <ul>
                        <li><a href="#feature">Feature</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#client">Client</a></li>
                        <li><a href="#team">Contact</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center">&copy; NOVA de GLAMIT</p>
        </footer>
    )
}

export default FooterComponent
import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import image from '../../img/NOVA-NEGRO.png'


function NavBarComponent() {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open)
    }
    return (
        <div className="bar">
        <a href="!#" >
            <img className="logo" src={image} alt="" />
        </a>

        <div className="hamburguer" onClick={openMenu}>
            <i className="fas fa-bars"></i>
        </div>
        
        <nav className={open ? 'nav-bar active' : 'nav-bar'}>
        <div className="close" onClick={openMenu}>
            <i className="fas fa-times"></i>
        </div>
            <ul>
                <li><a href="#feature">Feature</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#client">Client</a></li>
                <li><a href="#team">Contact</a></li>
            </ul>
        </nav>
        
    </div>
    );
}

export default NavBarComponent
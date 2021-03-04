import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';


function NavBarComponent() {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open)
    }
    return (
        <div className="bar">
        <a href="!#">
            <h1 className="no-margin"><span>NOVA</span></h1>
        </a>

        <div className="hamburguer" onClick={openMenu}>
            <i className="fas fa-bars"></i>
        </div>
        
        <nav className={open ? 'nav-bar active' : 'nav-bar'}>
        <div className="close" onClick={openMenu}>
            <i className="fas fa-times"></i>
        </div>
            <ul>
                <li><a href="!#">Feature</a></li>
                <li><a href="!#">Team</a></li>
                <li><a href="!#">Client</a></li>
                <li><a href="!#">Contact</a></li>
            </ul>
        </nav>
        
    </div>
    );
}

export default NavBarComponent
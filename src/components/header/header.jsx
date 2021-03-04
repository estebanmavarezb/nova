import { NavLink } from "react-router-dom";
import NavBarComponent from "../nav/nav";
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';

function HeaderComponent() {
    useEffect(() =>{
        ScrollReveal().reveal('.text-header', {
            duration: 1000,
            distance: '0px',
            opacity: 0,
            delay: 600
            
        });
    },[])

    return (
        <header className="header-class">
            <div className="header-opacity"></div>
            <NavBarComponent />
            <div className="text-header contenedor">
                <h1 className="no-margin">#Somos Nova</h1>
            </div>
            
        </header>
    )
}

export default HeaderComponent
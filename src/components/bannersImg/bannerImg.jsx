import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';

function BannerContent() {

    useEffect(() =>{
        ScrollReveal().reveal('.banner', {
            duration: 1600,
            opacity: 0,
            distance: '0px',
            delay: 600});
    },[])
    return (
        <div className="banner">
            <div className="banner-imagen">
                <h4>#Creatividad</h4>
            </div>
            <div className="banner-imagen">
                <h4>#Creatividad</h4>
            </div>
            <div className="banner-imagen">
                <h4>#Creatividad</h4>
            </div>
        </div>
    )
}

export default BannerContent
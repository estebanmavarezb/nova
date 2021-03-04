import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';

function BannerContentTwo() {

    useEffect(() =>{
        ScrollReveal().reveal('.bn-2', {
            duration: 1800,
            opacity: 0,
            distance: '0px',
            delay: 600});
    },[])
    return (
        <div className="banner bn-2">
            <div className="banner-imagen-2">
                {/* <h4>#Creatividad</h4> */}
            </div>
            <div className="banner-imagen-2">
                {/* <h4>#Creatividad</h4> */}
            </div>
            <div className="banner-imagen-2">
                {/* <h4>#Creatividad</h4> */}
            </div>
        </div>
    )
}

export default BannerContentTwo
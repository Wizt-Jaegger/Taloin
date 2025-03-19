import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import flecha_oscura from '../../assets/dark-arrow.svg';
import logo from '../../assets/logo.svg';
import presentacion1 from '../../assets/presentacion1.png';
import presentacion2 from '../../assets/presentacion2.png';
import presentacion3 from '../../assets/presentacion3.png';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext"; // Import context

const imageArray = [presentacion1, presentacion2, presentacion3];

const Presentacion = () => {
    const { language } = useLanguage();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevIndex => (prevIndex + 1) % imageArray.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            className='presentacion container'
            style={{
                backgroundImage: `linear-gradient(110deg, rgb(0, 0, 0), rgba(19, 45, 70, 0.8)), url(${imageArray[currentImage]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out'
            }}
        >
            <div className='presentacion-texto'>
                <img src={logo} alt="Logo" style={{ width: '80%', height: 'auto' }} />
                <h1>
                    {language === "es"
                            ? "Tu progreso a solo un paso, Confiale tu proyecto a taloin!, tu aliado en desarrollo y mantenimiento de software y hardware!"
                            : "Your next step towards the future of your project!, your partner in software and hardware development and maintenance!"}
                </h1>
                
                <p>
                    <Link
                        to="planes"
                        smooth={true}
                        offset={-260}
                        duration={500}
                        className="btn"
                    >
                        {language === "es" ? "¡Descubre más!" : "Discover more!"}
                        <img src={flecha_oscura} alt='' />
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Presentacion;

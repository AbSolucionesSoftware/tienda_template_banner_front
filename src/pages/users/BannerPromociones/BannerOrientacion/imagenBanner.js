import React from 'react'
import {Link } from 'react-router-dom';
import './bannerOrientacion.scss';
import aws from '../../../../config/aws';

export default function Imagen_Banner(props) {
    
    const {imagen, link} = props;

        return(
            <div className="container-imagenes">
                <Link to={`/searching/${link.categoria || link.temporada}`}>
                    <div className="container-image">
                    <img
                        className="image-orientancion"
                        src={aws + imagen}
                        alt="Imgen publicitaria"
                    />
                    </div>
                </Link>
            </div>
        );
    
}

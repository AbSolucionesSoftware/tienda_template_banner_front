import React from 'react'
import {Link } from 'react-router-dom';
import './bannerOrientacion.scss';
import aws from '../../../../config/aws';

export default function Imagen_Banner(props) {
    
    const {imagen, link, imagenLocal } = props;

        return(
            <div className="container-imagenes mb-4">
                <Link to={`/searching/${link.categoria || link.temporada || link.genero}`}>
                    <div className="container-image">
                    <img
                        className="image-orientancion"
                        src={imagenLocal ? imagen : aws + imagen}
                        alt="Imgen publicitaria"
                    />
                    </div>
                </Link>
            </div>
        );
    
}

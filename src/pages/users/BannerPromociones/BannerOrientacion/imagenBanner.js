import React from 'react'
import {Link } from 'react-router-dom';
import './bannerOrientacion.scss';
import aws from '../../../../config/aws';

export default function Imagen_Banner(props) {
    
    const {imagen, link} = props;

        return(
            <div className="container-image">
                <Link to={`/searching/${link.categoria || link.temporada}`}>
                    <img
                        className="image-orientancion"
                        src={aws + imagen}
                        // "https://www.flexi.com.mx/medias/20210111-SEGUNDAS-SNEAKERS.jpg?context=bWFzdGVyfHJvb3R8Mzg4ODl8aW1hZ2UvanBlZ3xoMjkvaGU2Lzk2MDg2NDQyNjM5NjYvMjAyMTAxMTEtU0VHVU5EQVMtU05FQUtFUlMuanBnfGJhYjQ0ZTYyNDhlNTM5ZmFkOWI0ZDYxNDRhZmEwODUxZjQ1ZGUwOWQ0MjNhZmIyMzEwYmZlODIyMDg5OTlhN2Q"
                        alt="Imgen publicitaria"
                    />
                </Link>
            </div>
        );
    
}

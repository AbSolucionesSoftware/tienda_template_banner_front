import React from 'react'

import {withRouter } from 'react-router-dom';
import Imagen_Banner from './imagenBanner';
import CardsProductos from '../cardsProductos'

export default function Banner_Orientacion(props) {
    
    const {banner} = props;


    const render = banner.banners.map((subBanner) => <CardsProductos key={subBanner._id} tipo={subBanner.tipo} orientacion={subBanner.orientacion} banner={subBanner}/>)

    return ( 
        <div className="mt-5">
            {render}
        </div>
    )
}

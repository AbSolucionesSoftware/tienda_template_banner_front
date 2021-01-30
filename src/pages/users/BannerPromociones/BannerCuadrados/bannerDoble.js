import React from 'react';
import './banners.scss'
import {Link, withRouter } from 'react-router-dom';
import aws from '../../../../config/aws';
import './banners.scss'

function Banner_Doble(props) {

    const { banner, imagenLocal } = props;
    
    const render = banner.banners.map((banner) => {
        return(
            <div key={banner._id} className="col-lg-6 mt-4 container-imagenes">
                <div className="container-banner-doble">
                    <Link to={`/searching/${banner.tipo.categoria || banner.tipo.temporada}`}>
                        <img
                            className="imagen-doble" 
                            src={imagenLocal ? banner.imagenBanner : aws + banner.imagenBanner}
                            alt="Imgen publicitaria"
                        />
                    </Link>
                </div>
            </div>
        )
    }
    )

    return (
        <div className="container mt-5">
            <div className="row">
                {render}
            </div>
        </div>
    );

}

export default withRouter(Banner_Doble);

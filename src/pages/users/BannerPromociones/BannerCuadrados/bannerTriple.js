import React from 'react';
import './banners.scss'
import {Link, withRouter } from 'react-router-dom';
import aws from '../../../../config/aws';
import './banners.scss'

function Banner_Triple(props) {
    const { banner, imagenLocal } = props;

    const render = banner.banners.map((banner) => {
        return(
            <div key={banner._id} className="col-lg-4 mt-4 container-imagenes">
                <div className="container-banner-triple">
                    <Link to={`/searching/${banner.tipo.categoria || banner.tipo.temporada}`}>
                        <img
                            className="imagen-triple"
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
        <div>
            <div className="container mt-5">
                <div className="row">
                    {render}
                </div>
            </div>
        </div>
    );

        
}

export default withRouter(Banner_Triple);

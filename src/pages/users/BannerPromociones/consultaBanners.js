import React, { useState, useEffect } from 'react';

import {Link, withRouter } from 'react-router-dom';
import clienteAxios from '../../../config/axios';

import Banner_Largo from './BannerLargo/BannerLargo';
import Banner_Doble from './BannerCuadrados/bannerDoble';
import Banner_Orientacion from './BannerOrientacion/bannerOrientacion';
// import aws from '../../../../config/aws';

function Banners_Promocionales(props) {

    const [ banners, setBanners ] = useState([]);

    useEffect(() => {
		const obtenerBanner = async () => {
			await clienteAxios
				.get('/banner/')
				.then((res) => {
                    setBanners(res.data);
                    console.log(res.data);
				})
                .catch((res) => {});
		};
		obtenerBanner();
    }, []);


    const render = banners.map((banner) => {
		if (banner.estilo === 1) {
			
			return <Banner_Largo banner={banner} />

		}else if(banner.estilo === 2){

			

		}else if(banner.estilo > 2){

			return <Banner_Doble banner={banner}/>

		}
	});

    return (
        <div className="container-fluid">
			{render}
        </div>
    )
}

export default withRouter(Banners_Promocionales);


import React, { useState, useEffect } from 'react';

import {withRouter } from 'react-router-dom';
import clienteAxios from '../../../config/axios';

import Banner_Orientacion from './BannerOrientacion/banner_orientacion'
import Banner_Largo from './BannerLargo/BannerLargo';
import Banner_Doble from './BannerCuadrados/bannerDoble';
import Banner_Triple from './BannerCuadrados/bannerTriple';
// import aws from '../../../../config/aws';

function Banners_Promocionales() {

    const [ banners, setBanners ] = useState([]);

    useEffect(() => {
		const obtenerBanner = async () => {
			await clienteAxios
				.get('/banner/')
				.then((res) => {
					setBanners(res.data);
					// console.log(res.data);
				})
                .catch((res) => {});
		};
		obtenerBanner();
	}, []);
	
	console.log(banners);


    const render = banners.map((banner) => {
		
		if (banner.estilo === 1) {

			return <Banner_Largo key={banner} banner={banner} />

		}else if(banner.estilo === 2){

			return <Banner_Orientacion key={banner} banner={banner} />

		}else if(banner.estilo === 3){

			return <Banner_Doble  key={banner} banner={banner}/>

		}else if(banner.estilo === 4){

			return <Banner_Triple  key={banner} banner={banner}/>

		}
	});

    return (
        <div className="container-fluid">

			{render}

        </div>
    )
}

export default withRouter(Banners_Promocionales);


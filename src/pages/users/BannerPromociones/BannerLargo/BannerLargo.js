import React from 'react';
//import {useSpring, animated} from 'react-spring'

import './bannerPromocion.scss'
import CardsProductos from '../cardsProductos';

// import clienteAxios from '../../../../config/axios';
import {Link, withRouter } from 'react-router-dom';
import aws from '../../../../config/aws';

import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;


 function Banner_Largo(props) {
    const {banner, imagenLocal } = props;

    /* const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
    }; */
    
    const render = banner.banners.map((banner, index) => {
        console.log(banner);
        return (
            <div key={index} className="mt-5 cont-principal">
                {banner.mostrarTitulo !== false ? (
                    <TweenOne key="demo" animation={{ y: 30, opacity: 0, type: 'from', delay: 800 }}>
                        <h1 className="mt-5 tit-banner">{banner.tipo.categoria || banner.tipo.temporada}</h1>
                    </TweenOne>
                 ) : ""}

                {banner.imagenBanner || banner.imagenBanner !== '' ? (
                    <div className="banner-prin"> 
                      <BannerAnim autoPlay /* activeIndex={index} onSelect={handleSelect} */ prefixCls="banner-prin mx-auto" >
                      <Element prefixCls="banner-user-elem" animation={{ y: 30, opacity: 0, type: 'from', delay: 800 }}>
                          <BgElement
                              onClick={() =>
                                  {if (banner.vincular !== false) {
                                      props.history.push(`/searching/${ banner.tipo.categoria || banner.tipo.temporada }`);
                                  }
                              }}
  
                              key="bg"
                              className="bg banner-prom mx-auto"
                              alt="img-oferta"
                              style={{
                                  backgroundImage: imagenLocal ? `url(${banner.imagenBanner})` : `url(${aws + banner.imagenBanner})`,
                                  cursor: 'pointer'
                              }}
                          >
                          </BgElement>
                      </Element>
                      </BannerAnim>
                    </div>
                    ) : 
                    null
                    }

                <div>
                    {banner.mostrarProductos !== false ? (
                        <div className="mx-auto div-cards">
                            <CardsProductos className="mx-auto" tipo={banner.tipo} banner={banner} />
                            <div className="d-flex justify-content-center">
                                <Link to={`/searching/${banner.tipo.categoria || banner.tipo.temporada}`} style={{ fontSize: 18 }}>
                                    Ver todos los productos
                                </Link>
                            </div>
                        </div>
                    ) : ""}
                </div>

            </div>
        );
    })

    return (
        <div className="cont-principal">
           {render}
        </div>
    )
}

export default withRouter(Banner_Largo);

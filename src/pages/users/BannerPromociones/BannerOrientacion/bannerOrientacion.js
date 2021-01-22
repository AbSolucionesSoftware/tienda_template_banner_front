import React from 'react'

export default function Banner_Orientacion(props) {
    const {orientacion} = props;

    const render = orientacion.map((tipo) => {
		if (tipo.banners.orientacion === 1) {
			
		}else if(tipo.banners.orientacion === 2){

		}else if(tipo.banners.orientacion > 2){

		}
	});

    return (
        <div className="container-fluid">
            {render}
        </div>
    )
}

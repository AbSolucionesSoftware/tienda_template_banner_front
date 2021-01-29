import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios';
import {notification} from 'antd'
import Spin from '../../../components/Spin';

function Politicas() {

    const [ loading, setLoading ] = useState(false);
    const [politicas, setPoliticas] = useState([]);

    function peticionPoliticas(){
		clienteAxios.get('/tienda/')
			.then((res) => {
                setLoading(false);
                // if (res.data[0].politicas !== "") {
                setPoliticas(res.data[0]);
                console.log(res.data[0]);
			})
			.catch((err) => {
                if(err.response){
					notification.error({
						message: 'Error',
						description: err.response.data.message,
						duration: 2
					});
				}else{
					notification.error({
						message: 'Error de conexion',
						description: 'Al parecer no se a podido conectar al servidor.',
						duration: 2
					});
				}
			});
    }

    useEffect(() => {
        setLoading(true);
        peticionPoliticas();
    }, []);
    


    return(
        <Spin spinning={loading} >
            <div className="container">
                { politicas.politicas !== "" ? (
                    <div id="privacidad" className="m-5">
                        <h1 className="text-center mt-4">Politicas de Privacidad</h1>
                        <h3 className="text-center mt-4">
                            Para poder brindarte una mayor experiencia de compra, te invitamos a leer nuestras politicas de privacidad.
                        </h3>
                        
                        <div style={{lineHeight: "35px"}} dangerouslySetInnerHTML={{__html: politicas.politicas}} className='mt-5 px-4 ' />
                    </div>  
                ): (
                    null
                )
                }
                {
                  politicas.politicasVentas !== "" ? (
                    <div id="ventas" className="m-5">
                        <h1 className="text-center mt-4">Politicas de Ventas</h1>
                        <h3 className="text-center mt-4">
                            Para poder brindarte una mayor experiencia de compra, te invitamos a leer nuestras politicas de  Ventas
                        </h3>
                        
                        <div style={{lineHeight: "35px"}} dangerouslySetInnerHTML={{__html: politicas.politicasVentas}} className='mt-5 px-4 ' />
                    </div>  
                ): (
                    null
                )  
                }
                {
                  politicas.politicasDescuentos !== "" ? (
                    <div id="descuento" className="m-5">
                        <h1 className="text-center mt-4">Politicas de Descuentos</h1>
                        <h3 className="text-center mt-4">
                            Para poder brindarte una mayor experiencia de compra, te invitamos a leer nuestras politicas de  Descuentos
                        </h3>
                        
                        <div  style={{lineHeight: "35px"}} dangerouslySetInnerHTML={{__html: politicas.politicasDescuentos}} className='mt-5 px-4 ' />
                    </div>  
                ): (
                    null
                )  
                }
                {
                  politicas.politicasDevolucion !== "" ? (
                    <div id="devolucion" className="m-5">
                        <h1 className="text-center mt-4">Politicas de Devolucion</h1>
                        <h3 className="text-center mt-4">
                            Para poder brindarte una mayor experiencia de compra, te invitamos a leer nuestras politicas de  Devolucion
                        </h3>
                        
                        <div style={{lineHeight: "35px"}} dangerouslySetInnerHTML={{__html: politicas.politicasDevolucion}} className='mt-5 px-4 ' />
                    </div>  
                ): (
                    null
                )  
                }
                {
                  politicas.politicasEnvios !== "" ? (
                    <div id="envios" className="m-5">
                        <h1 className="text-center mt-4">Politicas de Envios</h1>
                        <h3 className="text-center mt-4">
                            Para poder brindarte una mayor experiencia de compra, te invitamos a leer nuestras politicas de  Envios
                        </h3>
                        
                        <div style={{lineHeight: "35px"}} dangerouslySetInnerHTML={{__html: politicas.politicasEnvios}} className='mt-5 px-4 ' />
                    </div>  
                ): (
                    null
                )  
                }
                           
            </div> 
        </Spin>
    )


}

export default Politicas;
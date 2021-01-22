import React from 'react';
//import {useSpring, animated} from 'react-spring'
import './banners.scss'
import {Link, withRouter } from 'react-router-dom';
// import aws from '../../../../config/axios';
import './banners.scss'

function Banner_Doble(props) {
    const { banner } = props;

    const render = banner.map((banner) => {

        if (banner.estilo === 3) {
            return(
            <div>
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div className="container-banner-doble">
                            <Link to="">
                                <img
                                    className="imagen-doble" 
                                    src="https://www.flexi.com.mx/medias/20210111-AVANCES-DAMA.jpg?context=bWFzdGVyfHJvb3R8NjI2NjZ8aW1hZ2UvanBlZ3xoOWUvaGM0Lzk2MDg2NDM4NzA3NTAvMjAyMTAxMTEtQVZBTkNFUy1EQU1BLmpwZ3wxY2JmMzMzYWQ5ZmQwODE3NThkMDg1OTMxZTBkNDEyYmJmMDkwZTdjYjQ5YzI3MDlmNDAyYmNlYjZlNTQ3NTM2"
                                    alt="Imgen publicitaria"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            )
            
        }else if(banner.estilo === 4){
            return(
                <div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="container-banner-triple">
                                <Link to="">
                                    <img
                                        className="imagen-triple"
                                        src="https://www.flexi.com.mx/medias/20210111-SEGUNDAS-SNEAKERS.jpg?context=bWFzdGVyfHJvb3R8Mzg4ODl8aW1hZ2UvanBlZ3xoMjkvaGU2Lzk2MDg2NDQyNjM5NjYvMjAyMTAxMTEtU0VHVU5EQVMtU05FQUtFUlMuanBnfGJhYjQ0ZTYyNDhlNTM5ZmFkOWI0ZDYxNDRhZmEwODUxZjQ1ZGUwOWQ0MjNhZmIyMzEwYmZlODIyMDg5OTlhN2Q"
                                        alt="Imgen publicitaria"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
        }

    })


    // VISTA TRIPLE 
    // <div className="col-lg-4 mt-4">
    //     <div className="container-banner-triple">
    //         <Link to="">
    //             <img
    //                 className="imagen-triple"
    //                 src="https://www.flexi.com.mx/medias/20210111-SEGUNDAS-SNEAKERS.jpg?context=bWFzdGVyfHJvb3R8Mzg4ODl8aW1hZ2UvanBlZ3xoMjkvaGU2Lzk2MDg2NDQyNjM5NjYvMjAyMTAxMTEtU0VHVU5EQVMtU05FQUtFUlMuanBnfGJhYjQ0ZTYyNDhlNTM5ZmFkOWI0ZDYxNDRhZmEwODUxZjQ1ZGUwOWQ0MjNhZmIyMzEwYmZlODIyMDg5OTlhN2Q"
    //                 alt="Imgen publicitaria"
    //             />
    //         </Link>
    //     </div>
    // </div>


    // VISTA DOBLE
    // <div className="col-lg-6 mt-4">
    //     <div className="container-banner-doble">
    //         <Link to="">
    //             <img
    //                 className="imagen-doble" 
    //                 src="https://www.flexi.com.mx/medias/20210111-AVANCES-DAMA.jpg?context=bWFzdGVyfHJvb3R8NjI2NjZ8aW1hZ2UvanBlZ3xoOWUvaGM0Lzk2MDg2NDM4NzA3NTAvMjAyMTAxMTEtQVZBTkNFUy1EQU1BLmpwZ3wxY2JmMzMzYWQ5ZmQwODE3NThkMDg1OTMxZTBkNDEyYmJmMDkwZTdjYjQ5YzI3MDlmNDAyYmNlYjZlNTQ3NTM2"
    //                 alt="Imgen publicitaria"
    //             />
    //         </Link>
    //     </div>
    // </div>
  
    return (
        <div>
            {render}
        </div>
    );

}

export default withRouter(Banner_Doble);

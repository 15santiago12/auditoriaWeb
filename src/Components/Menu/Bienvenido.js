import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'


const Bienvenido = ({title})=>{

    return (
        <>
            <div>
                <h3 id="titulo">{title}</h3>
            </div>
        </>
    )
}    
export default Bienvenido
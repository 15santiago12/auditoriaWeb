import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar'
import ServiciosLista from '../Components/Servicios/ServiciosLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'


class Servicios extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <Letrero title="Sección de Servicios"></Letrero>
            <ServiciosLista></ServiciosLista>
            </>
        )
        
    }
}

export default Servicios
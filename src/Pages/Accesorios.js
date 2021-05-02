import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar'
import AccesoriosLista from '../Components/Accesorios/AccesoriosLista';
import LetreroAccesorio from '../Components/Accesorios/LetreroAccesorio'


class Accesorios extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <LetreroAccesorio title="Sección de Accesorios"></LetreroAccesorio>
            <AccesoriosLista></AccesoriosLista>
            </>
        )
        
    }
}

export default Accesorios
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar'
import MascotasLista from '../Components/Mascotas/MascotasLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'


class Mascotas extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <Letrero title="Sección de Mascotas"></Letrero>
            <MascotasLista></MascotasLista>
            </>
        )
        
    }
}

export default Mascotas
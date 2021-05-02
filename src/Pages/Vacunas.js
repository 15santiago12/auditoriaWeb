import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar'
import VacunasLista from '../Components/Vacunas/VacunasLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'


class Vacunas extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <Letrero title="Sección de Vacunas"></Letrero>
            <VacunasLista></VacunasLista>
            </>
        )
        
    }
}

export default Vacunas
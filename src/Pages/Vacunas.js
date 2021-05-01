import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from 'universal-cookie';
import Navbar from '../Components/Menu/Navbar'
import VacunasLista from '../Components/Vacunas/VacunasLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'

const url = "http://localhost:4000/empleados/"; 
const cookies = new Cookies();

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
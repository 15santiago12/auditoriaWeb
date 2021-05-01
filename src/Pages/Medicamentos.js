import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from 'universal-cookie';
import Navbar from '../Components/Menu/Navbar'
import MedicamentosLista from '../Components/Medicamentos/MedicamentosLista';
import LetreroAccesorio from '../Components/Accesorios/LetreroAccesorio'

const url = "http://localhost:4000/empleados/"; 
const cookies = new Cookies();

class Medicamentos extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <LetreroAccesorio title="Sección de Medicamentos"></LetreroAccesorio>
            <MedicamentosLista></MedicamentosLista>
            </>
        )
        
    }
}

export default Medicamentos
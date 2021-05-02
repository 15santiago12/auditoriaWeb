import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar'
import MedicamentosLista from '../Components/Medicamentos/MedicamentosLista';
import LetreroAccesorio from '../Components/Accesorios/LetreroAccesorio'


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
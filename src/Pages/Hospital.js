import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from 'universal-cookie';
import Navbar from '../Components/Menu/Navbar';
import HospitalLista from '../Components/Hospital/HospitalLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'

const url = "http://localhost:4000/empleados/"; 
const cookies = new Cookies();

class Hospital extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <Letrero title="Seccíon de Hospitalización"></Letrero>
            <HospitalLista></HospitalLista>
            </>
        )
        
    }
}

export default Hospital
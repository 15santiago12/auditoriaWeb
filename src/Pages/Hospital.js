import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar';
import HospitalLista from '../Components/Hospital/HospitalLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'


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
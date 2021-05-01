import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from 'universal-cookie';
import Navbar from '../Components/Menu/Navbar'
import AccesoriosLista from '../Components/Accesorios/AccesoriosLista';
import LetreroAccesorio from '../Components/Accesorios/LetreroAccesorio'

const url = "http://localhost:4000/empleados/"; 
const cookies = new Cookies();

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
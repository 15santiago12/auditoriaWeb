import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar'
import ExamenesLista from '../Components/Examenes/ExamenesLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'


class Examenes extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <Letrero title="Sección de Examenes"></Letrero>
            <ExamenesLista></ExamenesLista>
            </>
        )
        
    }
}

export default Examenes
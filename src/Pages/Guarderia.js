import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar'
import GuarderiaLista from '../Components/Guarderia/GuarderiaLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'


class Guarderia extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <Letrero title="Sección de Guarderia"></Letrero>
            <GuarderiaLista></GuarderiaLista>
            
            </>
        )
        
    }
}

export default Guarderia
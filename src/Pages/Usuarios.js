import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Menu/Navbar'
import UsuariosLista from '../Components/Usuarios/UsuariosLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'


class Usuarios extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <Letrero title="Sección de Usuarios"></Letrero>
            <UsuariosLista></UsuariosLista>
            </>
        )
        
    }
}

export default Usuarios
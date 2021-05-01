import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from 'universal-cookie';
import Navbar from '../Components/Menu/Navbar'
import UsuariosLista from '../Components/Usuarios/UsuariosLista';
import Letrero from '../Components/Accesorios/LetreroAccesorio'

const url = "http://localhost:4000/empleados/"; 
const cookies = new Cookies();

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
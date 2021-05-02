import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoFormulario from '../Components/Empleados/EmpleadoFormulario'
import Navbar from '../Components/Menu/Navbar'
import Letrero from '../Components/Accesorios/LetreroAccesorio'


class Empleados extends Component {
    render() {
        
        return(
            <>
            <Navbar></Navbar>
            <br/>
            <Letrero title="Sección de Empleados"></Letrero>
            <EmpleadoFormulario></EmpleadoFormulario>
            </>
        )
        
    }
}
export default Empleados;


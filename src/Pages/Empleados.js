import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoFormulario from '../Components/Empleados/EmpleadoFormulario'
import Cookies from 'universal-cookie';
import Navbar from '../Components/Menu/Navbar'
import Letrero from '../Components/Accesorios/LetreroAccesorio'

const url = "http://localhost:4000/empleados/"; 
const cookies = new Cookies();
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


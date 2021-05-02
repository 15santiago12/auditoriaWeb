import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import Cookies from 'universal-cookie';

const url = "https://auditoria4-2021.herokuapp.com/empleados/";
const cookies = new Cookies();

class Navbar extends Component {

    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('nombre', { path: "/" });
        cookies.remove('apellido', { path: "/" });
        cookies.remove('cedula', { path: "/" });
        cookies.remove('contacto', { path: "/" });
        cookies.remove('direccion', { path: "/" });
        cookies.remove('cargo', { path: "/" });
        cookies.remove('tipoSangre', { path: "/" });
        cookies.remove('correo', { path: "/" });
        cookies.remove('usuario', { path: "/" });
        cookies.remove('contra', { path: "/" });
        window.location.href = './'
    }

    componentDidMount() {
        if (!cookies.get('usuario')) {
            window.location.href = './'
        }
    }
    render() {
        return (
            <>
                <nav id="encabezado" class="navbar navbar-expand-lg">
                    <div id="encabezado" class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">
                                        <Link id="tituli-menu" to='/home' >
                                            Inicio
                                    </Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/accesorios' className='nav-links' >
                                            Accesorios
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/empleados' className='nav-links'  >
                                            Empleados
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/examenes' className='nav-links'  >
                                            Examenes
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/guarderia' className='nav-links'  >
                                            Guarderia
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/hospital' className='nav-links'  >
                                            Hospital
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/mascotas' className='nav-links'  >
                                            Mascotas
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/medicamentos' className='nav-links'  >
                                            Medicamentos
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/servicios' className='nav-links'  >
                                            Servicios
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/usuarios' className='nav-links'  >
                                            Usuarios
                                </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">
                                        <Link id="tituli-menu" to='/vacunas' className='nav-links'  >
                                            Vacunas
                                </Link>
                                    </a>
                                </li>
                                <li  className='nav-item'>
                                    <button id="sesion" className="btn " onClick={() => this.cerrarSesion()}>Cerrar sesion</button>
                                </li>
                            </ul>
                            
                        </div>
                        </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Bienvenido from '../Components/Menu/Bienvenido'
import Bienvenido2 from '../Components/estilos/Titulo'

const url = "https://auditoria4-2021.herokuapp.com/empleados/"; 
const cookies = new Cookies();

class Inicio extends Component {
    state={
        form:{
            usuario: '',
            contra: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await Axios.get(url, {params: {usuario: this.state.form.usuario, contra: this.state.form.contra}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});
                cookies.set('cedula', respuesta.cedula, {path: "/"});
                cookies.set('contacto', respuesta.contacto, {path: "/"});
                cookies.set('direccion', respuesta.direccion, {path: "/"});
                cookies.set('cargo', respuesta.cargo, {path: "/"});
                cookies.set('tipoSangre', respuesta.tipoSangre, {path: "/"});
                cookies.set('correo', respuesta.correo, {path: "/"});
                cookies.set('usuario', respuesta.usuario, {path: "/"});
                cookies.set('contra', respuesta.contra, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                window.location.href="./home";
            }else{
                alert('Los datos ingresados son incorrectos...')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    componentDidMount() {
        if(cookies.get('usuario')){
            window.location.href='./home';
        }
    }
    

    render(){
        return(
            <>
            <Bienvenido title="Bienvenido Empleado"></Bienvenido>
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label id="label">Usuario: </label>
                        <br></br>
                        <input id="cajas" type="text" className="form-control" name="usuario"
                            onChange={this.handleChange}></input>
                        <br></br>
                        <label id="label">Contraseña:</label>
                        <br></br>
                        <input id="cajas" type="password" className="form-control" name="contra"
                            onChange={this.handleChange}></input>
                        <br></br>
                        <button id="boton" className="btn " onClick={()=> this.iniciarSesion()}>iniciar sesion</button>
                    </div> 
                </div>  
            </div>
            </>

        )
    }
}

export default Inicio;

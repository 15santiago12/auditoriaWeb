import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Navbar from '../Components/Menu/Navbar'
import Logo2 from '../Components/estilos/Logo3.png'
import Titulo from '../Components/estilos/Titulo'

const url = "http://localhost:4000/empleados/"; 
const cookies = new Cookies();

class Home extends Component {
    
    render(){
        return(
            <>
            <Navbar></Navbar>
            <img id="imagen" src={Logo2} ></img>
            <Titulo title="My Pets Veterinary Center"></Titulo>
            
            </>

        )
    }
}

export default Home;

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Empleados from './Pages/Empleados';
import Vacunas from './Pages/Vacunas';
import Usuarios from './Pages/Usuarios';
import Home from './Pages/Home';
import Inicio from './Pages/Inicio';
import Accesorios from './Pages/Accesorios';
import Examenes from './Pages/Examenes';
import Guarderia from './Pages/Guarderia';
import Hospital from './Pages/Hospital';
import Mascotas from './Pages/Mascotas';
import Medicamentos from './Pages/Medicamentos';
import Servicios from './Pages/Servicios';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/home' exact component={Home} />
        <Route path='/accesorios' exact component={Accesorios} />
        <Route path='/examenes' exact component={Examenes} />
        <Route path='/guarderia' exact component={Guarderia} />
        <Route path='/hospital' exact component={Hospital} />
        <Route path='/mascotas' exact component={Mascotas} />
        <Route path='/medicamentos' exact component={Medicamentos} />
        <Route path='/servicios' exact component={Servicios} />
        <Route path='/usuarios' exact component={Usuarios} />
        <Route path='/vacunas' exact component={Vacunas} />
        <Route path='/empleados' exact component={Empleados} />
      </Switch>
    </Router>
  );
}

export default App;

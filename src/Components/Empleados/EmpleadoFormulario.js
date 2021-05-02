import React, { Component } from 'react'
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../estilos/varios.css'
import '../estilos/tabla.css'


const url = "https://auditoria4-2021.herokuapp.com/empleados/"

class EmpleadoFormulario extends Component {
    state = {
        data: [],
        modalInsertar: false,
        modalElmininar: false,
        form: {
            id: '',
            nombre: '',
            apellido: '',
            cedula: '',
            contacto: '',
            direccion: '',
            cargo: '',
            tipoSangre: '',
            correo: '',
            usuario: '',
            contra: '',
            tipoModal: ''
        }
    }

    peticionGet = async () => {
        await Axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.mesage)
        })
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await Axios.post(url, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.mesage)
        })
    }

    peticionPut = async () => {
        await Axios.put(url + this.state.form.id, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        })
    }

    peticionDelete = async () => {
        await Axios.delete(url + this.state.form.id).then(response => {
            this.setState({ modalElmininar: false });
            this.peticionGet();

        })
    }

    seleccionarEmpleado = (val) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: val.id,
                nombre: val.nombre,
                apellido: val.apellido,
                cedula: val.cedula,
                contacto: val.contacto,
                direccion: val.direccion,
                cargo: val.cargo,
                tipoSangre: val.tipoSangre,
                correo: val.correo,
                usuario: val.usuario,
                contra: val.contra
            }
        })
    }
    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    componentDidMount() {
        this.peticionGet();
    }

    render() {
        const { form } = this.state;
        return (
            <>
                <button id="boton-Accesorio" className="btn btn-success" onClick={() => {
                    this.setState(
                        { form: null, tipoModal: 'insertar' });
                    this.modalInsertar()
                }}>Agregar Empleado</button>

                <div style={{ margin: '40px' }}>
                    <br>
                    </br>
                    <table className="table">
                        <thead  id="tabla1" >
                            <tr >
                                <th id="texto1">ID</th>
                                <th id="texto1">Nombre</th>
                                <th id="texto1">Apellido</th>
                                <th id="texto1">Cedula</th>
                                <th id="texto1">Contacto</th>
                                <th id="texto1">Cargo</th>
                                <th id="texto1">Tipo de Sangre</th>
                                <th id="texto1">Correo</th>
                                <th id="texto1">Usuario</th>
                                <th id="texto1">Contraseña</th>
                                <th id="texto1">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((val) => {
                                return (
                                    <tr id="tabla">
                                        <td id="texto">{val.id}</td>
                                        <td id="texto">{val.nombre}</td>
                                        <td id="texto">{val.apellido}</td>
                                        <td id="texto">{val.cedula}</td>
                                        <td id="texto">{val.contacto}</td>
                                        <td id="texto">{val.cargo}</td>
                                        <td id="texto">{val.tipoSangre}</td>
                                        <td id="texto">{val.correo}</td>
                                        <td id="texto">{val.usuario}</td>
                                        <td id="texto">{val.contra}</td>
                                        <td>
                                            <button id="boton-Agregar1" className="btn btn-primary" onClick={() => { this.seleccionarEmpleado(val); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                                            {" "}
                                            <button id="boton-Eliminar" className="btn btn-danger" onClick={() => { this.seleccionarEmpleado(val); this.setState({ modalElmininar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <Modal isOpen={this.state.modalInsertar}>
                        <ModalHeader id="modal-cuerpo" style={{ display: 'block' }}>
                            <h3 id="texto2">Añadir Empleado</h3>
                            <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                        </ModalHeader>
                        <ModalBody id="modal-cuerpo">
                            <div className="form-group">
                                <label id="texto4">Nombre:</label>
                                <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
                                <br />
                                <label id="texto4">Apellido:</label>
                                <input className="form-control" type="text" name="apellido" id="apellido" onChange={this.handleChange} value={form ? form.apellido : ''} />
                                <br />
                                <label id="texto4">Cedula:</label>
                                <input className="form-control" type="text" name="cedula" id="cedula" onChange={this.handleChange} value={form ? form.cedula : ''} />
                                <br />
                                <label id="texto4">Contacto:</label>
                                <input className="form-control" type="text" name="contacto" id="contacto" onChange={this.handleChange} value={form ? form.contacto : ''} />
                                <br />
                                <label id="texto4">Dirección:</label>
                                <input className="form-control" type="text" name="direccion" id="direccion" onChange={this.handleChange} value={form ? form.direccion : ''} />
                                <br />
                                <label id="texto4">Cargo:</label>
                                <input className="form-control" type="text" name="cargo" id="cargo" onChange={this.handleChange} value={form ? form.cargo : ''} />
                                <br />
                                <label id="texto4">Tipo de Sangre:</label>
                                <input className="form-control" type="text" name="tipoSangre" id="tipoSangre" onChange={this.handleChange} value={form ? form.tipoSangre : ''} />
                                <br />
                                <label id="texto4">Correo:</label>
                                <input className="form-control" type="text" name="correo" id="correo" onChange={this.handleChange} value={form ? form.correo : ''} />
                                <br />
                                <label id="texto4">Usuario:</label>
                                <input className="form-control" type="text" name="usuario" id="usuario" onChange={this.handleChange} value={form ? form.usuario : ''} />
                                <br />
                                <label id="texto4">Contraseña:</label>
                                <input className="form-control" type="text" name="contra" id="contra" onChange={this.handleChange} value={form ? form.contra : ''} />
                            </div>
                        </ModalBody>

                        <ModalFooter id="modal-cuerpo">
                            {this.state.tipoModal === 'insertar' ?
                                <button id="boton-Agregar" className="btn btn-success" onClick={() => this.peticionPost()}>
                                    Insertar
                    </button> : <button id="boton-Agregar" className="btn btn-primary" onClick={() => this.peticionPut()}>
                                    Actualizar
                    </button>
                            }
                            <button id="boton-Eliminar" className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalElmininar}>
                        <ModalBody>
                            estas seguro que deseas eliminar al empleado {form && form.nombre}?
                        </ModalBody>
                        <ModalFooter>
                            <button id="boton-Eliminar" className="btn btn-danger" onClick={() => this.peticionDelete()}>SI</button>
                            <button id="boton-Agregar" className="btn btn-secundary" onClick={() => this.setState({ modalElmininar: false })}>NO</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>
        )
    }
}
export default EmpleadoFormulario;
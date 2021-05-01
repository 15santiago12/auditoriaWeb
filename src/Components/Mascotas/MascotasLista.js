import React, { Component, useState, useEffect } from 'react'
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faFileSignature, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = "https://auditoria4-2021.herokuapp.com/mascotas/"

class MascotasLista extends Component {

    state = {
        data: [],
        modalInsertar: false,
        modalElmininar: false,
        form: {
            id: '',
            nombre: '',
            raza: '',
            edad: '',
            tipo: '',
            nombreDueno: '',
            apellidoDueno: '',
            cedula: '',
            contacto: '',
            direccion: '',
            correo: '',
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

    SeleccionarExamen = (val) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: val.id,
                nombre: val.nombre,
                raza: val.raza,
                edad: val.edad,
                tipo: val.tipo,
                nombreDueno: val.nombreDueno,
                apellidoDueno: val.apellidoDueno,
                cedula: val.cedula,
                contacto: val.contacto,
                direccion: val.direccion,
                correo: val.correo
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
                    this.setState({
                        form: null,
                        tipoModal: 'insertar'
                    });
                    this.modalInsertar()
                }}>Agregar Mascota</button>
                <div style={{ margin: '10px' }}>

                    <table class="table">
                        <thead>
                            <tr id="tabla1">
                                <th id="texto1">ID</th>
                                <th id="texto1">nombre</th>
                                <th id="texto1">raza</th>
                                <th id="texto1">edad</th>
                                <th id="texto1">tipo</th>
                                <th id="texto1">Nombre Dueño</th>
                                <th id="texto1">Apellido Dueño</th>
                                <th id="texto1">cedula</th>
                                <th id="texto1">Contacto</th>
                                <th id="texto1">Direccion</th>
                                <th id="texto1">Correo</th>
                                <th id="texto1">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((val) => {
                                return (
                                    <tr id="tabla">
                                        <td id="texto">{val.id}</td>
                                        <td id="texto">{val.nombre}</td>
                                        <td id="texto">{val.raza}</td>
                                        <td id="texto">{val.edad}</td>
                                        <td id="texto">{val.tipo}</td>
                                        <td id="texto">{val.nombreDueno}</td>
                                        <td id="texto">{val.apellidoDueno}</td>
                                        <td id="texto">{val.cedula}</td>
                                        <td id="texto">{val.contacto}</td>
                                        <td id="texto">{val.direccion}</td>
                                        <td id="texto">{val.correo}</td>
                                        <td>
                                            <button id="boton-Agregar1" className="btn btn-primary" onClick={() => { this.SeleccionarExamen(val); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                                            {" "}
                                            <button id="boton-Eliminar" className="btn btn-danger" onClick={() => { this.SeleccionarExamen(val); this.setState({ modalElmininar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader id="modal-cuerpo" style={{ display: 'block' }}>
                        <h3 id="texto2">Añadir Mascota</h3>
                        <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody id="modal-cuerpo">
                        <div className="form-group">
                            <label id="texto4">Nombre:</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
                            <br />
                            <br />
                            <label id="texto4">Raza:</label>
                            <input className="form-control" type="text" name="raza" id="raza" onChange={this.handleChange} value={form ? form.raza : ''} />
                            <br />
                            <label id="texto4">Edad:</label>
                            <input className="form-control" type="text" name="edad" id="edad" onChange={this.handleChange} value={form ? form.edad : ''} />
                            <br />
                            <label id="texto4">Tipo:</label>
                            <input className="form-control" type="text" name="tipo" id="tipo" onChange={this.handleChange} value={form ? form.tipo : ''} />
                            <br />
                            <label id="texto4">Nombre DueÑo:</label>
                            <input className="form-control" type="text" name="nombreDueno" id="nombreDueno" onChange={this.handleChange} value={form ? form.nombreDueno : ''} />
                            <br />
                            <label id="texto4">Apellido DueÑo:</label>
                            <input className="form-control" type="text" name="apellidoDueno" id="apellidoDueno" onChange={this.handleChange} value={form ? form.apellidoDueno : ''} />
                            <br />
                            <label id="texto4">Cedula:</label>
                            <input className="form-control" type="text" name="cedula" id="cedula" onChange={this.handleChange} value={form ? form.cedula : ''} />
                            <br />
                            <label id="texto4">Contacto:</label>
                            <input className="form-control" type="text" name="contacto" id="contacto" onChange={this.handleChange} value={form ? form.contacto : ''} />
                            <br />
                            <label id="texto4">Dirección</label>
                            <input className="form-control" type="text" name="direccion" id="direccion" onChange={this.handleChange} value={form ? form.direccion : ''} />
                            <br />
                            <label id="texto4">Correo:</label>
                            <input className="form-control" type="text" name="correo" id="correo" onChange={this.handleChange} value={form ? form.correo : ''} />
                        </div>
                    </ModalBody>

                    <ModalFooter id="modal-cuerpo">
                        {this.state.tipoModal == 'insertar' ?
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
                        estas seguro que deseas eliminar el registro?
                    </ModalBody>
                    <ModalFooter>
                        <button id="boton-Eliminar" className="btn btn-danger" onClick={() => this.peticionDelete()}>SI</button>
                        <button id="boton-Agregar" className="btn btn-secundary" onClick={() => this.setState({ modalElmininar: false })}>NO</button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}
export default MascotasLista;
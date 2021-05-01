import React, { Component, useState, useEffect } from 'react'
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faFileSignature, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = "https://auditoria4-2021.herokuapp.com/servicios/"

class ServiciosLista extends Component {

    state = {
        data: [],
        modalInsertar: false,
        modalElmininar: false,
        form: {
            id: '',
            tipoServicio: '',
            nombreMascota: '',
            nombreDueno: '',
            contacto: '',
            direccion: '',
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
                tipoServicio: val.tipoServicio,
                nombreMascota: val.nombreMascota,
                nombreDueno: val.nombreDueno,
                contacto: val.contacto,
                direccion: val.direccion
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
                }}>Añadir Servicio</button>
                <div style={{ margin: '40px' }}>

                    <table class="table">
                        <thead id="tabla1">
                            <tr>
                                <th id="texto1">ID</th>
                                <th id="texto1">Tipo de Servicio</th>
                                <th id="texto1">Mascota</th>
                                <th id="texto1">Dueño</th>
                                <th id="texto1">contacto</th>
                                <th id="texto1">direccion</th>
                                <th id="texto1">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((val) => {
                                return (
                                    <tr id="tabla">
                                        <td id="texto">{val.id}</td>
                                        <td id="texto">{val.tipoServicio}</td>
                                        <td id="texto">{val.nombreMascota}</td>
                                        <td id="texto">{val.nombreDueno}</td>
                                        <td id="texto">{val.contacto}</td>
                                        <td id="texto">{val.direccion}</td>
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
                        <h3 id="texto2">Añadir Servicio</h3>
                        <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody id="modal-cuerpo">
                        <div className="form-group">
                            <label id="texto4">Tipo De Servicio:</label>
                            <input className="form-control" type="text" name="tipoServicio" id="tipoServicio" onChange={this.handleChange} value={form ? form.tipoServicio : ''} />
                            <br />
                            <label id="texto4">Mascota:</label>
                            <input className="form-control" type="text" name="nombreMascota" id="nombreMascota" onChange={this.handleChange} value={form ? form.nombreMascota : ''} />
                            <br />
                            <label id="texto4">Dueño:</label>
                            <input className="form-control" type="text" name="nombreDueno" id="nombreDueno" onChange={this.handleChange} value={form ? form.nombreDueno : ''} />
                            <br />
                            <label id="texto4">Contacto:</label>
                            <input className="form-control" type="text" name="contacto" id="contacto" onChange={this.handleChange} value={form ? form.contacto : ''} />
                            <br />
                            <label id="texto4">Dirección:</label>
                            <input className="form-control" type="text" name="direccion" id="direccion" onChange={this.handleChange} value={form ? form.direccion : ''} />
                        </div>
                    </ModalBody>

                    <ModalFooter>
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
export default ServiciosLista;
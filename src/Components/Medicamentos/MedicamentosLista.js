import React, { Component, useState, useEffect } from 'react'
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faFileSignature, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = "https://auditoria4-2021.herokuapp.com/medicamentos/"

class MedicamentosLista extends Component {

    state = {
        data: [],
        modalInsertar: false,
        modalElmininar: false,
        form: {
            id: '',
            nombre: '',
            precio: '',
            cantidad: '',
            marca: '',
            descripccion: '',
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
                precio: val.precio,
                cantidad: val.cantidad,
                marca: val.marca,
                descripccion: val.descripccion
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
                <button id="boton-Medicamento" className="btn btn-success" onClick={() => {
                    this.setState({
                        form: null,
                        tipoModal: 'insertar'
                    });
                    this.modalInsertar()
                }}>Agregar Medicamento</button>
                <div style={{ margin: '40px' }}>

                    <table class="table">
                        <thead id="tabla1">
                            <tr>
                                <th id="texto1">ID</th>
                                <th id="texto1">nombre</th>
                                <th id="texto1">precio</th>
                                <th id="texto1">cantidad</th>
                                <th id="texto1">marca</th>
                                <th id="texto1">Descrpccion</th>
                                <th id="texto1">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((val) => {
                                return (
                                    <tr id="tabla">
                                        <td id="texto">{val.id}</td>
                                        <td id="texto">{val.nombre}</td>
                                        <td id="texto">{val.precio}</td>
                                        <td id="texto">{val.cantidad}</td>
                                        <td id="texto">{val.marca}</td>
                                        <td id="texto">{val.descripccion}</td>
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
                        <h3 id="texto2">Añadir Medicamento</h3>
                        <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody id="modal-cuerpo">
                        <div className="form-group">
                            <label id="texto4">Nombre:</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
                            <br />
                            <label id="texto4">Precio:</label>
                            <input className="form-control" type="text" name="precio" id="precio" onChange={this.handleChange} value={form ? form.precio : ''} />
                            <br />
                            <label id="texto4">Cantidad:</label>
                            <input className="form-control" type="text" name="cantidad" id="cantidad" onChange={this.handleChange} value={form ? form.cantidad : ''} />
                            <br />
                            <label id="texto4">Marca:</label>
                            <input className="form-control" type="text" name="marca" id="marca" onChange={this.handleChange} value={form ? form.marca : ''} />
                            <br />
                            <label id="texto4">Descripcción:</label>
                            <input className="form-control" type="text" name="descripccion" id="descripccion" onChange={this.handleChange} value={form ? form.descripccion : ''} />
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
                        <button id="boton-Eliminar" className="btn btn-secundary" onClick={() => this.setState({ modalElmininar: false })}>NO</button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}
export default MedicamentosLista;
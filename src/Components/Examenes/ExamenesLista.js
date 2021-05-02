import React, { Component } from 'react'
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = "https://auditoria4-2021.herokuapp.com/examenes/"

class ExamenesLista extends Component {

    state = {
        data: [],
        modalInsertar: false,
        modalElmininar: false,
        form: {
            id: '',
            tipoExamen: '',
            precio: '',
            descripccion: '',
            tiempoResultados: '',
            fechaToma: '',
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
                tipoExamen: val.tipoExamen,
                precio: val.precio,
                descripccion: val.descripccion,
                tiempoResultados: val.tiempoResultados,
                fechaToma: val.fechaToma
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
                }}>Agregar Un Examen</button>
                <div style={{margin: '40px'}}>

                    <table class="table ">
                        <thead id="tabla1">
                            <tr>
                                <th id="texto1">ID</th>
                                <th id="texto1">Tipo De Examen</th>
                                <th id="texto1">Precio</th>
                                <th id="texto1">Descripccion</th>
                                <th id="texto1">Tiempo de Restultados</th>
                                <th id="texto1">Fecha de Toma</th>
                                <th id="texto1">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((val) => {
                                return (
                                    <tr id="tabla">
                                        <td id="texto">{val.id}</td>
                                        <td id="texto">{val.tipoExamen}</td>
                                        <td id="texto">{val.precio}</td>
                                        <td id="texto">{val.descripccion}</td>
                                        <td id="texto">{val.tiempoResultados}</td>
                                        <td id="texto">{val.fechaToma}</td>
                                        <td>
                            <button id="boton-Agregar1" className="btn btn-primary" onClick={()=>{this.SeleccionarExamen(val); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                            {" "}
                            <button id="boton-Eliminar" className="btn btn-danger" onClick={()=>{this.SeleccionarExamen(val); this.setState({modalElmininar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader id="modal-cuerpo" style={{ display: 'block' }}>
                    <h3 id="texto2">Añadir Examen</h3>
                        <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody id="modal-cuerpo">
                        <div className="form-group">
                            <label id="texto4">Tipo de Examen:</label>
                            <input className="form-control" type="text" name="tipoExamen" id="tipoExamen" onChange={this.handleChange} value={form ? form.tipoExamen : ''} />
                            <br />
                            <label id="texto4">Precio:</label>
                            <input className="form-control" type="text" name="precio" id="precio" onChange={this.handleChange} value={form ? form.precio : ''} />
                            <br />
                            <label id="texto4">Descripcción:</label>
                            <input className="form-control" type="text" name="descripccion" id="descripccion" onChange={this.handleChange} value={form ? form.descripccion : ''} />
                            <br />
                            <label id="texto4">Fecha Resultados:</label>
                            <input className="form-control" type="text" name="tiempoResultados" id="tiempoResultados" onChange={this.handleChange} value={form ? form.tiempoResultados : ''} />
                            <br />
                            <label id="texto4">Fecha De Toma:</label>
                            <input className="form-control" type="text" name="fechaToma" id="fechaToma" onChange={this.handleChange} value={form ? form.fechaToma : ''} />
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
                        estas seguro que deseas eliminar el registro del examen?
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
export default ExamenesLista;
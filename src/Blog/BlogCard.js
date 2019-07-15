import React from 'react'
import AppContext from '../AppContext';
import './Blog.css';
import BlogComentario from './BlogComentario';

class BlogCard extends React.Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            usuario: '',
            fecha: '2019-07-07',
            comentario: '',
        };
    }

    handleChange = xxx => event => {
        this.setState({ [xxx]: event.target.value });
    };  

    addToBlogComentarios = (unBlog) => {        
        this.props.addToBlogComentarios(unBlog,{
            usuario: this.state.usuario,
            fecha: this.state.fecha,
            comentario: this.state.comentario});
    }

    render() {
        var coments = this.props.blog.comentarios
        return (
            <div className="row">
                <div className="col col-12 col-md-4">
                    <div className="featured-thumbnail">
                        <img src={this.props.blog.foto} className="img-blog" alt="asdfd" data-toggle="modal" data-target="#myModal"></img>
                    </div>
                </div>
                <div className="col col-12 col-md-8">
                    <h5 className="text-title">{this.props.blog.titulo}</h5>
                    <p className="text-blog"><small className="text-blog">Usuario {this.props.blog.usuario} | Última actualización {this.props.blog.fecha}</small></p>
                    <hr />
                    <p className="text-blog">{this.props.blog.descripcion}</p>
                    <hr />
                    <p className="text-blog">comentarios:</p>
                    <div>
                        <hr />
                        {coments.map(comentario => <BlogComentario comentario={comentario} key={comentario.id} addToBlogComentarios={this.props.addToBlogComentarios}/>)}
                    </div>
                    <div>
                        <hr />
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalComentario">Comentar...</button>

                    </div>

                </div>

                {/*  MODAL */}
                <div className="modal fade" id="ModalComentario" role="form">
                    <div className="modal-dialog">

                        {/* MODAL CONTENT */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">{this.props.blog.titulo}</h3>
                            </div>
                            <form id="ModalFormBlog" className="was-validated">
                                <div className="form-group">
                                    <label htmlFor="text">Familia</label>
                                    <input type="uname" className="form-control" id="usuario" value={this.state.usuario} onChange={this.handleChange('usuario')} placeholder="Ingrese Nombre/Apellido de su Familia" name="fami" required></input>
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">Comentario</label>
                                    <textarea type="text" className="form-control" placeholder="Comente porque adopto..." value={this.state.comentario} onChange={this.handleChange('comentario')} required></textarea>
                                </div>
                                <button type="button" className="btn btn-primary btn-block" onClick={(e) => this.addToBlogComentarios(this.props.blog, e)}>Guardar</button>
                            </form>
                            <button type="button" className="btn btn-warning btn-block" data-dismiss="modal" onClick={this.limpiarForm}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogCard
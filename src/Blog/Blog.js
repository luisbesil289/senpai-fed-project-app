import React from 'react';
import AppContext from '../AppContext';
import './Blog.css';
import BlogCard from './BlogCard';

class Blog extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      titulo: '',
      usuario: '',
      fecha: '',
      foto: '',
      descripcion: ''
    };
  }

  handleChange = xxx => event => {
    this.setState({ [xxx]: event.target.value });
  };

addToBlog = () => {
  this.context.addBlog({
    id: this.state.id,
    titulo: this.state.titulo,
    usuario: this.state.usuario,
    fecha: this.state.fecha,
    foto: 'assets/DRL_BMW_Welt2018_sw4486.jpg',
    descripcion: this.state.descripcion,
    comentarios: []});
}

addToBlogComentarios = (unBlogId) => {

}


render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12">
          <div className="btn-group">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal2">Nuevo</button>
          </div>
          <hr />
          {this.context.blogs.map(blog => <BlogCard goToBlogComentarios={this.props.goToBlogComentarios} blog={blog} key={blog.id} />)}
          <hr />
          <br />
        </div>
      </div>

      {/*  MODAL */}
      <div className="modal fade" id="myModal2" role="dialog">
        <div className="modal-dialog" id="ModalFormBlog">

          {/* MODAL CONTENT */}
          <div className="modal-content">
            <form id="ModalFormBlog" className="was-validated">
              <div className="form-group">
                <label htmlFor="uname">Titulo</label>
                <input type="text" className="form-control" id="titu" value={this.state.titulo} onChange={this.handleChange('titulo')} placeholder="Ingrese un Titulo ..." name="titu" required></input>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="text">Familia</label>
                <input type="uname" className="form-control" id="fami"value={this.state.usuario} onChange={this.handleChange('usuario')} placeholder="Ingrese Nombre/Apellido de su Familia" name="fami" required></input>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="inputFecha">Fecha de Adopcion</label>
                <input type="date" className="form-control" id="fech" value={this.state.fecha} onChange={this.handleChange('fecha')} required></input>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="text">Foto</label>
                <br />
                <br />
                <input id="file" type="file" className="form-control" accept="image/png, image/jpeg" onChange={this.handleChange('foto')} />
              </div>
              <div className="form-group">
                <label htmlFor="text">Comentario</label>
                <textarea type="text" className="form-control" placeholder="Comente porque adopto..." value={this.state.descripcion} onChange={this.handleChange('descripcion')} required></textarea>
              </div>
              <button type="button" className="btn btn-primary btn-block" onClick={(e) => this.addToBlog(this.unBlog, e)}>Guardar</button>
            </form>
            <button type="button" className="btn btn-warning btn-block" data-dismiss="modal" onClick={this.limpiarForm}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Blog;
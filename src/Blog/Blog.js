import React from 'react';
import AppContext from '../AppContext';
import Moment from 'react-moment';
import moment from 'moment';
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
      fecha: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
      foto: '',
      descripcion: '',
      filtrada: [],
    };
  }


  componentWillMount() {
    this.setState({
      filtrada: this.context.blogs
        .filter(item => this.state.id === null || this.state.id === '' || this.state.id === item.id)
        .sort((a, b) => (a.fecha > b.fecha) ? 1 : -1)
    })
  }

  handleChange = xxx => event => {
    this.setState({ [xxx]: event.target.value });
  };

  handleClick = (archive) => {
    this.setState({
      filtrada: this.context.blogs
        .filter(item => this.state.fecha === null || this.state.fecha === '' || moment(archive.fecha).format("YYYY-MM") === moment(item.fecha).format("YYYY-MM"))
        .sort((a, b) => (moment(a.fecha).format("YYYY-MM") > moment(b.fecha).format("YYYY-MM")) ? 1 : -1)
    })
  };

  addToBlog = () => {

    this.context.addBlog({
      titulo: this.state.titulo,
      usuario: this.state.usuario,
      fecha: this.state.fecha,
      foto: 'assets/DRL_BMW_Welt2018_sw4486.jpg',
      descripcion: this.state.descripcion,
      comentarios: []
    });
  }


  getNextBlogIdComentario(unBlog) {
    var productWithHighestId = unBlog.comentarios.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }

  addToBlogComentarios = (unBlog, data) => {
    data.id = this.getNextBlogIdComentario(unBlog);
    unBlog.comentarios.push({ ...data });
    this.context.addBlogComentarios(unBlog);
  }

  render() {


    var archives = this.context.blogs
      .filter(item => this.state.id === null || this.state.id === '' || this.state.id === item.id)
      .sort((a, b) => (a.fecha > b.fecha) ? 1 : -1)

    return (
      <div className="container">
        <div className="row">
          <div className="col col-9 col-sm-9 col-md-9">
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal2">Nuevo</button>
            </div>
            <hr />
            {this.state.filtrada.map(blog => <BlogCard goToBlogComentarios={this.props.goToBlogComentarios} blog={blog} key={blog.id} addToBlogComentarios={this.addToBlogComentarios} />)}
            <hr />
            <br />
          </div>
          <div className="col col-3 col-sm-3 col-md-3">
            <ul className="list-group text-title" >Archive
            {archives.map((archive, index) => <button type="button" className="btn btn-primary btn-block" onClick={(e) => this.handleClick(archive, e)} key={index}><Moment format="MMM YYYY">{archive.fecha}</Moment></button>)}
            </ul>
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
                  <label htmlFor="text">Usuario</label>
                  <input type="uname" className="form-control" id="fami" value={this.state.usuario} onChange={this.handleChange('usuario')} placeholder="Ingrese Nombre/Apellido de su Familia" name="fami" required></input>
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
                <button type="button" className="btn btn-primary btn-block" onClick={(e) => this.addToBlog(e)}>Guardar</button>
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
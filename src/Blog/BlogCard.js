import React from 'react'
import AppContext from '../AppContext';
import './Blog.css';


function NumberList(props) {
    const listItems = props.comentarios.map((comentario) =><li key={comentario.id} > {comentario}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}


class BlogCard extends React.Component {
    static contextType = AppContext;

    render() {

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

                        <NumberList comentarios={this.props.blog.comentarios} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={(e) => this.props.goToBlogComentarios(this.props.blog, e)}>Comentar...</button>

                    </div>
                    <hr />
                </div>

                {/*  MODAL */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                        {/* MODAL CONTENT */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">{this.props.blog.titulo}</h3>
                            </div>
                            <div className="modal-body">
                                <img src={this.props.blog.foto} className="img-blog" alt="asdfd"></img>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success btn-block btn" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogCard
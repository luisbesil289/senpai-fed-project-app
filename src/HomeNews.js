import React from 'react';
import './Home.css';


class HomeNews extends React.Component {
    render() {
        
        return (
            <React.Fragment>
                <div className={this.props.noticia.active}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-image">
                                        <img className="img img-raised" src={this.props.noticia.foto} alt="... "></img>                                       
                                    </div>
                                    <div className="card cardLista">
                                        <div className="card-body">
                                            <h5 className="card-title">{this.props.noticia.fecha}</h5>
                                            <h5 className="card-title">{this.props.noticia.titulo}</h5>
                                            <hr />
                                            <p className="card-text">{this.props.noticia.nota}</p>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
export default HomeNews;
import React from 'react';
import AppContext from '../AppContext';
import './Multimedia.css';


class Multimedia extends React.Component {
    static contextType = AppContext;

    returnImage() {
        if (this.props.contenido.tipo === 'foto') {
            return <img className="card-image" src={this.props.contenido.foto} alt="... "></img>;
        } else if (this.props.contenido.tipo === 'video') {
            return <iframe className="player_video_01" width="600" height="215"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player"
                src={this.props.contenido.url}
                id="widget4"></iframe>
        }
    }

    render() {
        return (
            <div className="col-4 col-sm-4 col-md-4">
                <div className="card multimediaCard">
                    <div>
                        {this.returnImage()}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.contenido.nombre}</h5>
                        <p className="card-text">{this.props.contenido.descripcion}</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default Multimedia;



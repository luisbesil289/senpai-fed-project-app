import React from 'react';
import './News.css';



class HomeNews extends React.Component {

    returnImage() {
        if (this.props.noticia.foto != null) {
            return <img className="card-image" src={this.props.noticia.foto} alt="... "></img>;
        } else {
            return <iframe className="player_video_01" width="560" height="315"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player"
                src={this.props.noticia.video}
                id="widget4"></iframe>
        }
    }
    render() {

        return (
            <React.Fragment>
                <div className={this.props.noticia.active}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-News">
                                    <div className="card-image">
                                        {this.returnImage()}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-text">{this.props.noticia.fecha}</h5>
                                        <h5 className="card-text">{this.props.noticia.titulo}</h5>
                                        <hr />
                                        <p className="card-text">{this.props.noticia.bajada}</p>
                                        <p className="card-text">{this.props.noticia.nota}</p>
                                        <hr />
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
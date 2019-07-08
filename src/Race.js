import React from 'react';
import AppContext from './AppContext';
import './Race.css';
import News from './News'
/* import './News.css'; */



var races = []

class Race extends React.Component {
    static contextType = AppContext;
    render() {
        races = this.context.noticias.filter(noticia => noticia.tipo === 'races');
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                            
                            <a href="https://www.liftoff-game.com/" target="_blank "><img src="assets/listoff.png" id="img_p2" alt="falta img"></img></a>
                            <p>THE BEST SIMULATOR EVER</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {races.map(noticia => <News noticia={noticia} key={noticia.id} />)}
                                </div>
                                <a className="carousel-control carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
               
                <br id="section_pilots" />
                <div className="pilots_title">
                    <span>PILOTS</span>
                </div>
                <br />

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-5 col-md-5">
                                        <div className="">
                                            <img src="assets/A_nub.jpg" className="card_img logo img-responsive" alt="Pilot" title="Pilot"></img>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 col-md-7">
                                        <div className="card-body">
                                            <h4 className="card-title">GENIUS (Captain)</h4>
                                            <h5 className="card-title">ARGENTINA</h5>
                                            <p className="card-text">The Nashville native brings aggressive flying to every throttle,
                                    hairpin tight turn and dive gate.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-5 col-md-5">
                                        <div className="">
                                            <img className="card_img" src="assets/Add1.jpg" alt="Pilot" title="Pilot"></img>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 col-md-7">
                                        <div className="card-body">
                                            <h4 className="card-title">FAST (Captain)</h4>
                                            <h5 className="card-title">BRASIL</h5>
                                            <p className="card-text">The Nashville native brings aggressive flying to every throttle,
                                    hairpin tight turn and dive gate.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-5 col-md-5">
                                        <div className="">
                                            <img className="card_img" src="assets/Gab7070.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 col-md-7">
                                        <div className="card-body">
                                            <h4 className="card-title">SNUB (Captain)</h4>
                                            <h5 className="card-title">CHILE</h5>
                                            <p className="card-text">The Nashville native brings aggressive flying to every throttle,
                                    hairpin tight turn and dive gate.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-5 col-md-5">
                                        <div className="">
                                            <img className="card_img" src="assets/A_nub.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 col-md-7">
                                        <div className="card-body">
                                            <h4 className="card-title">TUBA (Captain)</h4>
                                            <h5 className="card-title">URUGUAY</h5>
                                            <p className="card-text">The Nashville native brings aggressive flying to every throttle,
                                    hairpin tight turn and dive gate.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    };
}
export default Race;




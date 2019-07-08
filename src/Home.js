import React from 'react';
import './Home.css';


class Home extends React.Component {


    render() {
        return (
            <div className="">


                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-6">
                            <img src="assets/ChaseField.jpg" className="shop-image img img-raised" alt="falta img"></img>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card card-blog">
                                                        <div className="card-image">
                                                            <a href="https://www.getfpv.com" target="_blank"><img
                                                                className="img img-raised"
                                                                src="assets/61226153_2304447286308746_2076697299857178624_o.jpg" alt="falta img"></img>
                                                            </a>
                                                            <div className="ripple-cont"></div>
                                                        </div>
                                                        <div className="table">
                                                            <h6 className="category text-info">Pharetra</h6>
                                                            <h4 className="card-caption">
                                                                <a href="#">Quisque id elit maximus, pretium diam at mollis elit</a>
                                                            </h4>
                                                            <p className="card-description"> Lorem ipsum dolor sit amet, consectetur
                                                                adipis cingelit. Etiam
                                                                lacinia elit et placerat finibus. Praesent justo metus, pharetra vel
                                                                nibh sit amet,
                                                    tincidunt posuere nulla. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card card-blog">
                                                        <div className="card-image">
                                                            <a href="#"> <img className="img img-raised"
                                                                src="assets/61118217_2304446882975453_9143435892248018944_o.jpg" alt="falta img"></img>
                                                            </a>
                                                            <div className="ripple-cont"></div>
                                                        </div>
                                                        <div className="table">
                                                            <h6 className="category text-info">02/06/2019</h6>
                                                            <h4 className="card-caption">
                                                                <a href="#">HGLRC F4 V6 PRO Flight Controller + 5.8GHz VTX w/ OSD,
                                                        PDB, BEC</a>
                                                            </h4>
                                                            <p className="card-description">HGLRC brings you a true all-in-one board
                                                                that brings you BF OSD, a switchable VTX (0 / 25 / 100 / 200 / 400 /
                                                                600mW), and F4 FC + PDB -- all in a single board! All you need to
                                                                add are ESCs and you are halfway to building your quad! (joking)
            
                                                                This board is great for those using low profile stacks or builds
                                                                without much headroom. If you put your ESCs on your arms, this could
                                                    easily be the only thing in your stack. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card card-blog">
                                                        <div className="card-image">
                                                            <a href="#"> <img className="img img-raised"
                                                                src="assets/61375693_2304446662975475_7665987685252595712_o.jpg" alt="falta img"></img>
                                                            </a>
                                                            <div className="ripple-cont"></div>
                                                        </div>
                                                        <div className="table">
                                                            <h6 className="category text-info">Florida</h6>
                                                            <h4 className="card-caption">
                                                                <a href="#">Quisque id elit maximus, pretium diam at mollis elit</a>
                                                            </h4>
                                                            <p className="card-description"> Lorem ipsum dolor sit amet, consectetur
                                                                adipis cingelit. Etiam
                                                                lacinia elit et placerat finibus. Praesent justo metus, pharetra vel
                                                                nibh sit amet,
                                                    tincidunt posuere nulla. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Home;
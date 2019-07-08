import React from 'react';
import './Race.css';


class RaceCard extends React.Component {

    render() {
        return (
            <div>
               <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                        <img src="assets/listoff.png" id="img_p2"></img>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2>AUGUST 11, 2019. GET READY.</h2>
                            <p>The 2019 DRL Allianz World Championship Season is coming! With custom built racing drones traveling
                                90 MPH+,
                                pilots race FPV (First Person View) through the most insane 3D courses ever created outside of a
                                video game.
                                The high-speed action airs on the best sports networks, including NBC, NBC Sports, Twitter, Sky
                                Sports,
                                ProSieben, Groupe AB, OSN and FOX Sports Asia.
                        </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="video_container">
                    <iframe className="player_video_01"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player"
                        src="https://www.youtube.com/embed/djZLcbbB-3E?modestbranding=1&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fthedroneracingleague.com&amp;widgetid=3"
                        id="widget4"></iframe>
                </div>


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
                                            <img className="card_img" src="assets/Add1.jpg"></img>
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
export default RaceCard;




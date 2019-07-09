import React from 'react';
import './Race.css';



class RacePilots extends React.Component {


    render() {
        console.log(this.props.pilot);
        return (
            <React.Fragment>
                <div className={this.props.pilot.active}>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-5 col-md-5">
                                    <div className="">
                                        <img src={this.props.pilot.foto} className="card_img logo img-responsive" alt="Pilot" title="Pilot"></img>
                                    </div>
                                </div>
                                <div className="col-sm-7 col-md-7">
                                    <div className="card-body">
                                        <h4 className="card-title">{this.props.pilot.nick}</h4>
                                        <h5 className="card-title">{this.props.pilot.pais}</h5>
                                        <p className="card-text">{this.props.pilot.descripcion}</p>
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
export default RacePilots;
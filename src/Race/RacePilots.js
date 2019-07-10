import React from 'react';
import './Race.css';



class RacePilots extends React.Component {


    render() {
        return (
            <React.Fragment>

                <div className="col-sm-6 col-md-6">
                    <div className="card-Race">
                        <div className="row">
                            <div className="col-sm-5 col-md-5">
                                <img src={this.props.pilot.foto} className="card_img logo img-responsive" alt="Pilot" title="Pilot"></img>
                            </div>
                            <div className="col-sm-7 col-md-7">
                                <div className="card-body">
                                <h4 className="pilots_title">Número: {this.props.pilot.id}</h4>
                                    <h4 className="pilots_title">Nick: {this.props.pilot.nick}</h4>
                                    <h4 className="pilots_title">Equipo: {this.props.pilot.equipo}</h4>
                                    <h5 className="card-title">{this.props.pilot.pais}</h5>
                                    <p className="card-text">{this.props.pilot.descripcion}</p>
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
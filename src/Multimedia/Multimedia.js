import React from 'react';
import AppContext from '../AppContext';
import './Multimedia.css';
import MultimediaCard from './MultimediaCard'

class Multimedia extends React.Component {
    static contextType = AppContext;
    constructor(props) {
        super(props)
        this.state = {
            titulo: 'EVENTS',
            seccion: null,
            progress: 1,
        };
    }

    changeSeccionFilter = (event) => {
        this.setState({ seccion: event.target.value });
    }

        render() {
        var filteredList = this.context.multimedia
            .filter(item => this.state.seccion === null || this.state.seccion === '*' || this.state.seccion === item.seccion)
            .sort((a, b) => (a.fecha > b.fecha) ? 1 : -1)


        return (
            <div>f
                <div>
                    <div className="pilots_title">                        
                        <span>CONTENIDO MULTIMEDIA</span></div>
                    <div className="filtroMultimedia"><span className="tituloFiltroMultimedia">FILTRAR CONTENIDO</span>
                        <select className="custom-select custom-select-md" onChange={this.changeSeccionFilter}>
                            <option defaultValue="all">*</option>
                            <option value="Events">Events</option>
                            <option value="Free Style">Free Style</option>
                            <option value="Racer">Racer</option>
                        </select>
                    </div>
                    <div className="container multimediaContainer">
                        <div className="row multimediaRow">
                            {filteredList.map(contenido => <MultimediaCard contenido={contenido} key={contenido.id} move={this.move}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Multimedia;



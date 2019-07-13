import React from 'react';
import AppContext from '../AppContext';
import { withStyles } from '@material-ui/core/styles';
import './Race.css';
import News from '../News/News';
import RaceCard from './RaceCard';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(2, 0),
      width: '100%'
    },
    textField: {
      marginRight: theme.spacing(4),
      width: 300,
    },
    textArea: {
    },
    dense: {
      marginTop: 19,
    },
    button: {
      margin: theme.spacing(1),
    },
    menu: {
      width: 200,
    }
  });
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
                            <a href="https://www.liftoff-game.com/" target="_blank "><img src={"assets/listoff.png"} id="img_p2" alt="falta img"></img></a>
                            <p>THE BEST SIMULATOR EVER</p><Typography variant="h5" className={this.props.classes.textField} color="textPrimary">THE BEST SIMULATOR EVER</Typography>;
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
 

                <br id="section_pilots" />
                <div className="pilots_title">
                    <span>TEMPORADA 2019 - DRIVERS</span>
                </div>
                <br />
                <div className="container">
                    <div className="row">

                        {this.context.pilotos.map(pilot => <RaceCard pilot={pilot} key={pilot.id} />)}
                        
                    </div >
                </div >
            </div >

        )
    };
}
/* export default Race; */
export default withStyles(styles)(Race);



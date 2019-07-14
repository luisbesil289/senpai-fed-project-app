import React from 'react';
import AppContext from '../AppContext';
import { withStyles } from '@material-ui/core/styles';
import './Race.css';

import RaceCard from './RaceCard';

import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        height: 140,
        width: 100,
    },
    textField: {
        marginRight: theme.spacing(0),
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
    }, divider: {

        margin: theme.spacing(2, 0),
    }
});
var races = []
class Pilots extends React.Component {
    static contextType = AppContext;

    render() {

        races = this.context.noticias.filter(noticia => noticia.tipo === 'races');
        console.log(races);
        return (
            <div>
                <br id="section_pilots" />
                <div className="pilots_title">
                    <span>TEMPORADA 2019 - Pilots</span>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <Grid container className={this.props.classes.root} spacing={2}>
                            <Grid className={this.props.classes.root} item xs={12}>
                                <Grid container justify="center" className={this.props.classes.root}>
                                    {this.context.pilotos.map(pilot => <RaceCard pilot={pilot} key={pilot.id} />)}

                                </Grid>
                            </Grid>
                        </Grid>
                    </div >
                </div >
            </div >

        )
    };
}
/* export default Race; */
export default withStyles(styles)(Pilots);



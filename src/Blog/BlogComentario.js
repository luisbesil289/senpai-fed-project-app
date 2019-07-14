import React from 'react'
import AppContext from '../AppContext';
import { withStyles } from '@material-ui/core/styles';
import './Blog.css';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    typography: {
        align: 'left',
        color: 'black',
        height: 22,
        border: 0,
        borderRadius: 3,
    },
});


class BlogComentario extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div>
                <hr />
                <Typography className={this.props.classes.typography} >
                    {this.props.comentario.comentario}
                </Typography>
                <Typography className={this.props.classes.typography} >
                    {this.props.comentario.usuario}
                </Typography>
            </div>
        );
    }
}


export default withStyles(styles)(BlogComentario); 
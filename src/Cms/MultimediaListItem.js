import React from 'react';
import AppContext from '../AppContext';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

  bigAvatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
  menu: {
    width: 200,
  },
  typography: {
    color: 'black',
    height: 30,
    border: 0,
    borderRadius: 3,
  },
});

class MultimediaListItem extends React.Component {
  static contextType = AppContext;
  editcontenido = () => {
    this.context.goToEdit('multimedia', this.props.contenido);
  }

  deletecontenido = () => {
    this.context.deletePilot(this.props.contenido.id);
  }

  render() {
    return (

      <TableRow>
        <TableCell component="th" scope="row">{this.props.contenido.id}</TableCell>
        <TableCell><Avatar alt="Remy Sharp" src="assets/avatar_youtube.png" className={this.props.classes.bigAvatar} /></TableCell>
        <TableCell>
          <Typography variant="h6" className={this.props.classes.typography} >
            {this.props.contenido.nombre}
          </Typography>
        </TableCell>
        <TableCell>{this.props.contenido.seccion}</TableCell>
        <TableCell>{this.props.contenido.fecha}</TableCell>
        <TableCell>{this.props.contenido.url}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="Edit" onClick={this.editcontenido}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Delete" onClick={this.deletecontenido}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>

    );
  }
}

export default withStyles(styles)(MultimediaListItem);

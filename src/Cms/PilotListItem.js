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
    width: 80,
    height: 80,
  },
  menu: {
    width: 200,
  },
  typography: {
    color: 'black',
    height: 48,
    border: 0,
    borderRadius: 3,
  },
});

class PilotListItem extends React.Component {
  static contextType = AppContext;
  editPiloto = () => {
    this.context.goToEdit(this.props.piloto);
  }

  deletePiloto = () => {
    this.context.deletePilot(this.props.piloto.id);
  }

  render() {
    return (

      <TableRow>
        <TableCell component="th" scope="row">{this.props.piloto.id}</TableCell>
        <TableCell><Avatar alt="Remy Sharp" src={this.props.piloto.foto} className={this.props.classes.bigAvatar} /></TableCell>
        <TableCell>
          <Typography variant="h6" className={this.props.classes.typography} >
            {this.props.piloto.nombre}
          </Typography>
        </TableCell>
        <TableCell>{this.props.piloto.nick}</TableCell>
        <TableCell>{this.props.piloto.fecha}</TableCell>
        <TableCell>{this.props.piloto.pais}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="Edit" onClick={this.editPiloto}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Delete" onClick={this.deletePiloto}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>

    );
  }
}

export default withStyles(styles)(PilotListItem);
